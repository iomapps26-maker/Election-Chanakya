import React from 'react';
import { PageRoute } from '../types';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Award, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TeamPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const ceo = TEAM_MEMBERS.find((m) => m.isCEO) || TEAM_MEMBERS[0];
  const otherMembers = TEAM_MEMBERS.filter((m) => !m.isCEO);

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Team Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Leadership & Psephology Intelligence
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The Strategists Behind <span className="text-[#ff7a00]">Electoral Victories</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Led by CEO Vivek Gupta, our multi-disciplinary team brings together statistical psephologists, ex-military field directors, and Silicon Valley data engineers.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenConsultationModal}
              className="bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/20"
            >
              Consult With Our Leadership
            </button>
          </div>
        </div>
      </section>

      {/* 2. Large CEO Card Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white rounded-[28px] p-8 sm:p-12 border-2 border-[#ff7a00] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Large HD CEO Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-[450px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-[#ff7a00] text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  Chief Executive Officer
                </span>
              </div>
            </div>

            {/* CEO Profile Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  Company Founder & Chief Strategist
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
                  {ceo.name}
                </h2>
                <p className="text-sm font-semibold text-[#ff7a00] mt-1">{ceo.role}</p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {ceo.description}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Areas of Strategic Expertise:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ceo.specialization.map((spec, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a00] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultationModal}
                  className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20"
                >
                  Book Executive Briefing With Vivek Gupta
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-xs font-bold text-zinc-300 hover:text-[#ff7a00] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#ff7a00]" /> {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Executive Core Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
            Executive Leadership Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialist Domain Heads
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherMembers.map((member) => (
            <div
              key={member.id}
              className="dark-glass-card rounded-[20px] overflow-hidden group flex flex-col justify-between border border-zinc-800 hover:border-[#ff7a00] transition-all"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-extrabold text-white">{member.name}</h3>
                    <p className="text-[11px] font-semibold text-[#ff7a00]">{member.role}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {member.description}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-zinc-800">
                    {member.specialization.slice(0, 3).map((s, i) => (
                      <div key={i} className="text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={onOpenConsultationModal}
                  className="w-full bg-zinc-800 hover:bg-[#ff7a00] hover:text-white text-zinc-200 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-700 hover:border-[#ff7a00]"
                >
                  Schedule Advisory
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
