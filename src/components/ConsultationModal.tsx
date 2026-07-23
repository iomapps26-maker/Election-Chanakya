import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { saveLead } from '../utils/leadStorage';
import { X, ShieldCheck, CheckCircle2, Phone, Mail, Send, Calendar } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    constituency: '',
    state: '',
    partyOrCandidate: '',
    timeline: '6 Months',
    comments: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    saveLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || 'N/A',
      subject: `Constituency: ${formData.constituency || 'General'} (${formData.timeline})`,
      serviceRequested: 'Confidential Strategy Consultation',
      message: formData.comments || `Timeline: ${formData.timeline}`,
      sourceForm: 'Consultation Modal'
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-zinc-950 rounded-[24px] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-zinc-800 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Briefing Request Received</h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. CEO Vivek Gupta’s senior strategist will contact you confidentially on <span className="font-semibold text-[#ff7a00]">{formData.phone}</span> within 2 hours.
            </p>
            <div className="pt-4 text-xs font-bold text-[#ff7a00]">
              Sector 63 Noida Command Center Hotline: {COMPANY_INFO.phone}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> 100% Confidential Briefing
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Book Campaign Strategy Meeting
              </h3>
              <p className="text-sm text-zinc-200 mt-1 font-medium leading-relaxed">
                Direct advisory session with CEO Vivek Gupta’s core analytics team at Sector 63, Noida HQ or via encrypted video conference.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sh. Rajesh Sharma"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Constituency & State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.constituency}
                    onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                    placeholder="e.g. Noida / Western UP"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Election Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                  >
                    <option value="Immediate (< 30 Days)">Immediate (&lt; 30 Days)</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="12+ Months">12+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                  Key Objective / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Mention if you require Opinion Polls, War Room, Panna Pramukh software, or Leader Branding..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold py-3.5 rounded-xl uppercase tracking-wider text-sm transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Request</span>
              </button>

              <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Protected under strict Non-Disclosure Agreement (NDA).
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
