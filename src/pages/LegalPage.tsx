import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

interface LegalPageProps {
  route: 'privacy' | 'terms' | 'disclaimer' | 'cookie-policy' | 'refund-policy';
  onRouteChange: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ route }) => {
  const getLegalContent = () => {
    switch (route) {
      case 'privacy':
        return {
          title: 'Privacy Policy & Data Security',
          tag: 'Confidentiality Protocol',
          body: `Election Chanakya Political Advisory & Analytics Services Pvt. Ltd. ("Election Chanakya", "We", "Us") respects the absolute confidentiality of political candidates, parties, and survey respondents.

1. Data Collection & Field Privacy
All survey research data, field voter responses, and booth level analytics collected by Election Chanakya are stored on isolated, encrypted servers located in India. We do not sell, rent, or transfer any client or voter information to third parties.

2. Strict Non-Disclosure Agreement (NDA)
Every political consultation engagement with CEO Vivek Gupta and our Sector 63 Noida team is bound by non-disclosure agreements. Client identity, campaign strategy briefs, and polling forecasts are protected under attorney-client level secrecy.

3. Encryption & Storage
All communication pipelines utilize 256-bit SSL encryption. Data collected via field tablets is geo-verified and anonymized before processing in our Noida War Room.`
        };
      case 'terms':
        return {
          title: 'Terms & Conditions of Service',
          tag: 'Legal Agreement',
          body: `By accessing https://electionchanakya.co.in or retaining the advisory services of Election Chanakya, you agree to comply with the following terms:

1. Scope of Political Advisory
Election Chanakya provides empirical research, Panna Pramukh software tools, opinion polls, digital ad management, and strategic recommendations. Final campaign decisions remain the sole responsibility of the client candidate or party.

2. Intellectual Property
All proprietary algorithms, Panna Pramukh software interfaces, and survey questionnaires developed by Election Chanakya remain the intellectual property of Election Chanakya.

3. Compliance with Election Laws
Clients must ensure that all campaign activities conform strictly to the Model Code of Conduct (MCC) issued by the Election Commission of India (ECI).`
        };
      case 'disclaimer':
        return {
          title: 'Official Psephological Disclaimer',
          tag: 'Research Disclosure',
          body: `1. Predictive Forecasting Nature
Opinion polls, exit polls, and voter swing estimates provided by Election Chanakya represent statistical probabilities calculated using stratified random sampling. While our historic accuracy rate is 95.4%, psephological forecasts carry an inherent statistical error margin (typically ±1.5% to ±3.0%).

2. Independence
Election Chanakya is an independent political analytics and consulting agency headed by CEO Vivek Gupta, operating from Sector 63, Noida, Uttar Pradesh, India.`
        };
      case 'cookie-policy':
        return {
          title: 'Cookie & Tracking Policy',
          tag: 'Website Analytics',
          body: `Our website https://electionchanakya.co.in uses minimal essential cookies to optimize user navigation and ensure secure session performance.

We do not use invasive third-party tracking cookies or collect personal identifying information without explicit consent via our contact forms.`
        };
      case 'refund-policy':
        return {
          title: 'Retainer & Service Fee Refund Policy',
          tag: 'Billing Terms',
          body: `1. Retainer Fees
Political advisory retainers, field survey mobilizations, and War Room equipment setups require non-refundable initial deposits to cover surveyor hiring and technology provisioning.

2. Cancellation
Service cancellations must be submitted in writing to info@electionchanakya.co.in. Unused field survey budgets may be refunded or credited towards future campaign rounds as specified in the master contract.`
        };
    }
  };

  const content = getLegalContent();

  return (
    <div className="space-y-16 pb-16">
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-12">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] text-xs font-bold uppercase tracking-wider border border-orange-500/30">
            {content.tag}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">{content.title}</h1>
          <p className="text-xs text-zinc-400">Effective Date: 2026 • Election Chanakya, Sector 63 Noida</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark-glass-card p-8 sm:p-12 rounded-[24px] border border-zinc-800 shadow-2xl space-y-6 text-zinc-100 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
          {content.body}

          <div className="pt-8 border-t border-zinc-800 text-xs text-zinc-400 space-y-1">
            <p className="font-extrabold text-white">{COMPANY_INFO.legalName}</p>
            <p>Office: {COMPANY_INFO.addressFull}</p>
            <p>Phone: <span className="text-[#ff7a00] font-bold">{COMPANY_INFO.phone}</span> | Email: {COMPANY_INFO.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
