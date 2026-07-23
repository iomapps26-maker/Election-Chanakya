import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { saveLead } from '../utils/leadStorage';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Building2,
  Globe
} from 'lucide-react';

interface ContactPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    saveLead({
      name: formState.name,
      phone: formState.phone,
      email: formState.email || 'N/A',
      subject: formState.subject || 'Contact Page Inquiry',
      serviceRequested: 'Strategy Inquiry',
      message: formState.message,
      sourceForm: 'Contact Page'
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Sector 63 Noida Command Center
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Schedule a Confidential <span className="text-[#ff7a00]">Briefing</span>
          </h1>

          <p className="text-base text-zinc-300 max-w-2xl mx-auto font-normal">
            Directly connect with CEO Vivek Gupta and our senior election strategy team at our headquarters in Sector 63, Noida.
          </p>
        </div>
      </section>

      {/* Main Contact Grid & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
                Direct Contact Points
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Command Office Details
              </h2>
            </div>

            <div className="space-y-4">
              
              <div className="dark-glass-card p-5 rounded-2xl flex items-start gap-4 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Headquarters Address</h3>
                  <p className="text-sm text-zinc-100 mt-1 leading-relaxed font-medium">
                    {COMPANY_INFO.addressFull}
                  </p>
                </div>
              </div>

              <div className="dark-glass-card p-5 rounded-2xl flex items-start gap-4 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Confidential Phone Hotline</h3>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-base font-extrabold text-[#ff7a00] block mt-1 hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-300 font-medium mt-0.5">Available 24/7 during campaign periods</p>
                </div>
              </div>

              <div className="dark-glass-card p-5 rounded-2xl flex items-start gap-4 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Official Email</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-zinc-200 hover:text-[#ff7a00]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="dark-glass-card p-5 rounded-2xl flex items-start gap-4 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Leadership Contact</h3>
                  <p className="text-sm text-amber-400 font-bold mt-1">
                    CEO: {COMPANY_INFO.ceo}
                  </p>
                  <p className="text-xs text-zinc-300 font-medium mt-0.5">Private briefings arranged under binding NDA.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="dark-glass-card p-8 rounded-[24px] border border-zinc-800 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  Send a Strategy Inquiry
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill in your details below and our senior strategist will respond within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you. CEO Vivek Gupta’s office will contact you on <span className="font-semibold text-[#ff7a00]">{formState.phone}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sh. Vivek Gupta"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 8218305284"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                        Official Email
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="info@electionchanakya.co.in"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                        Subject / Constituency
                      </label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="e.g. War Room & Survey for Noida Seat"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                      Campaign Requirements & Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline your election timeline, target constituency, and services required..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold py-3.5 rounded-xl uppercase tracking-wider text-xs transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Confidential Message</span>
                  </button>

                  <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    All communication is bound by non-disclosure agreements.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Google Map Section for Sector 63 Noida */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl space-y-2">
          <div className="bg-zinc-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#ff7a00]" />
              <span>Office Map Location: Sector 63, Noida, UP, India</span>
            </div>
            <span className="text-xs text-orange-400 font-semibold">{COMPANY_INFO.phone}</span>
          </div>

          <div className="relative w-full h-80 bg-zinc-100">
            {/* Interactive Embed Map View */}
            <iframe
              title="Election Chanakya Office Location Sector 63 Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114774395066!2d77.3731422!3d28.6289297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b128613681!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
