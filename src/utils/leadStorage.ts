import { LeadItem } from '../types';

const STORAGE_KEY = 'election_chanakya_submitted_leads';
const WEBHOOK_KEY = 'election_chanakya_google_sheet_webhook';

// Pre-seeded initial submissions so the Excel sheet isn't empty when first opened
const INITIAL_LEADS: LeadItem[] = [
  {
    id: 'LEAD-1001',
    name: 'Rajesh Sharma',
    phone: '+91 98112 34567',
    email: 'r.sharma@noidaelections.in',
    subject: 'Noida Assembly Constituency War Room & Survey',
    serviceRequested: '24/7 War Room & Panna Pramukh App',
    message: 'Need complete booth mapping for 380 booths in Noida Vidhan Sabha for upcoming elections.',
    sourceForm: 'Consultation Modal',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  },
  {
    id: 'LEAD-1002',
    name: 'Vikram Singh',
    phone: '+91 94120 88776',
    email: 'vikram.singh@gautambudh.org',
    subject: 'Gautam Buddh Nagar Lok Sabha Survey',
    serviceRequested: 'Door-to-Door Opinion Poll Survey',
    message: 'Interested in conducting a 15,000 voter sample survey across rural and urban pockets.',
    sourceForm: 'Contact Page',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  },
  {
    id: 'LEAD-1003',
    name: 'Pooja Verma',
    phone: '+91 88001 99223',
    email: 'pooja.v@gmail.com',
    subject: 'Senior Data Analyst Role Application',
    serviceRequested: 'Career Application',
    message: '5 years experience in SPSS, Stata, and political opinion poll sampling.',
    sourceForm: 'Career Application',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  }
];

export function getStoredLeads(): LeadItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading leads from storage', e);
    return INITIAL_LEADS;
  }
}

export function saveLead(leadData: Omit<LeadItem, 'id' | 'submittedAt'>): LeadItem {
  const current = getStoredLeads();
  const newLead: LeadItem = {
    ...leadData,
    id: `LEAD-${Math.floor(1000 + Math.random() * 9000)}`,
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  const updated = [newLead, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('leadsUpdated'));
  } catch (e) {
    console.error('Error saving lead to localStorage', e);
  }

  // If a Google Sheets / Excel Webhook is configured, post to it in background
  const webhookUrl = getWebhookUrl();
  if (webhookUrl) {
    try {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        mode: 'no-cors', // required for Google Apps Script Webhooks
        body: JSON.stringify(newLead)
      }).catch(err => console.log('Webhook POST notification error:', err));
    } catch (err) {
      console.log('Webhook error:', err);
    }
  }

  return newLead;
}

export function deleteLead(id: string): LeadItem[] {
  const current = getStoredLeads();
  const filtered = current.filter(l => l.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new Event('leadsUpdated'));
  } catch (e) {
    console.error('Error deleting lead', e);
  }
  return filtered;
}

export function clearAllLeads(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    window.dispatchEvent(new Event('leadsUpdated'));
  } catch (e) {
    console.error('Error clearing leads', e);
  }
}

const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzNNp2cDIBDA1dxwj7zDwijMpt0l25tA9IUXUodNmLvWfB4TIuXXSsMOkGmAvv1GZvihQ/exec';

export function getWebhookUrl(): string {
  const stored = localStorage.getItem(WEBHOOK_KEY);
  if (!stored || stored !== DEFAULT_WEBHOOK_URL) {
    localStorage.setItem(WEBHOOK_KEY, DEFAULT_WEBHOOK_URL);
    return DEFAULT_WEBHOOK_URL;
  }
  return stored;
}

export function setWebhookUrl(url: string): void {
  localStorage.setItem(WEBHOOK_KEY, url.trim());
}

/**
 * Generates an Excel-compatible CSV file with UTF-8 BOM byte marker
 * so Microsoft Excel opens it natively with proper columns and Hindi/English support.
 */
export function exportLeadsToExcelCSV(leads: LeadItem[]): void {
  if (!leads || leads.length === 0) {
    alert('No form submission data available to export.');
    return;
  }

  const headers = ['Lead ID', 'Submitted Date & Time', 'Full Name', 'Phone Number', 'Email Address', 'Subject / Constituency', 'Requested Service', 'Form Source', 'Message / Notes'];

  const rows = leads.map(l => [
    l.id,
    l.submittedAt,
    l.name,
    l.phone,
    l.email,
    l.subject || '',
    l.serviceRequested || '',
    l.sourceForm,
    l.message || ''
  ]);

  // Sanitize and quote string values for CSV
  const escapeCsvValue = (val: string) => {
    if (val === undefined || val === null) return '""';
    const clean = String(val).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const csvContent = [
    headers.map(escapeCsvValue).join(','),
    ...rows.map(row => row.map(escapeCsvValue).join(','))
  ].join('\r\n');

  // Add UTF-8 BOM (\uFEFF) so Excel opens Hindi/Special chars properly without encoding glitches
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const dateStr = new Date().toISOString().slice(0, 10);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Election_Chanakya_Form_Submissions_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
