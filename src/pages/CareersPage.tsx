import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CAREER_OPENINGS, COMPANY_INFO } from '../data/mockData';
import { saveLead } from '../utils/leadStorage';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, X } from 'lucide-react';

interface CareersPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const [applicant, setApplicant] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const activeOpening = CAREER_OPENINGS.find(j => j.id === selectedJob);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    saveLead({
      name: applicant.name,
      phone: applicant.phone,
      email: applicant.email,
      subject: `Career Application: ${activeOpening?.title || 'General'}`,
      serviceRequested: 'Career Application',
      message: applicant.notes,
      sourceForm: 'Career Application'
    });

    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setSelectedJob(null);
      setApplicant({ name: '', phone: '', email: '', notes: '' });
    }, 4000);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Join India's Premier Political Intelligence Firm
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build Your Career in <span className="text-[#ff7a00]">Political Psephology</span>
          </h1>

          <p className="text-base text-zinc-300 max-w-2xl mx-auto font-normal">
            Work alongside CEO Vivek Gupta at our Noida Sector 63 Headquarters on high-impact Vidhan Sabha & Lok Sabha campaigns.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
            Open Positions
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Current Opportunities at Sector 63 Noida
          </h2>
        </div>

        <div className="space-y-6">
          {CAREER_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="dark-glass-card p-6 sm:p-8 rounded-[24px] border border-zinc-800 hover:border-[#ff7a00] transition-all space-y-4 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a00] bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                    {job.department}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-300 mt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#ff7a00]" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#ff7a00]" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#ff7a00]" /> Exp: {job.experience}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job.id)}
                  className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors shrink-0 shadow-lg"
                >
                  Apply Now
                </button>
              </div>

              <p className="text-sm text-zinc-200 leading-relaxed font-normal border-t border-zinc-800 pt-4">
                {job.description}
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Key Responsibilities:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a00] shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-white rounded-[24px] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-zinc-200 my-8 space-y-6">
            
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applied ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-extrabold text-zinc-900">Application Submitted</h3>
                <p className="text-xs text-zinc-600">
                  Thank you for applying. Our HR team at Sector 63 Noida office will review your profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-900">Submit Your Profile</h3>
                  <p className="text-xs text-zinc-500 mt-1">Election Chanakya Career Portal • Noida HQ</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Full Name *</label>
                    <input type="text" required value={applicant.name} onChange={(e) => setApplicant({ ...applicant, name: e.target.value })} placeholder="e.g. Rahul Sharma" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#ff7a00]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Phone Number *</label>
                    <input type="tel" required value={applicant.phone} onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#ff7a00]" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Email Address *</label>
                  <input type="email" required value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} placeholder="rahul@example.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#ff7a00]" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Portfolio / Resume Link / Experience Note *</label>
                  <textarea rows={3} required value={applicant.notes} onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })} placeholder="Paste Google Drive / LinkedIn link or brief experience details..." className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#ff7a00]" />
                </div>

                <button type="submit" className="w-full bg-[#ff7a00] hover:bg-black text-white font-extrabold py-3 rounded-xl uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Candidate Application</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
