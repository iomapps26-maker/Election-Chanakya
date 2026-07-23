import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/mockData';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  MapPin, 
  Phone, 
  Mail,
  Compass,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const ceo = TEAM_MEMBERS.find((m) => m.isCEO) || TEAM_MEMBERS[0];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Dedicated About Page Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[10000ms]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> About Election Chanakya
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Pioneering Empirical Psephology & <span className="text-[#ff7a00]">Electoral Engineering</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow">
            Headquartered in Sector 63, Noida, Election Chanakya is India’s benchmark political advisory firm translating raw voter sentiment into decisive electoral victories.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultationModal}
              className="bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/20"
            >
              Meet CEO Vivek Gupta
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="border border-zinc-700 hover:border-[#ff7a00] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Noida HQ: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Our Legacy & Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Transforming How Political Campaigns Are Fought & Won Across India
            </h2>

            <p className="text-sm sm:text-base text-zinc-100 font-medium leading-relaxed">
              Established in {COMPANY_INFO.established}, Election Chanakya was formed with a singular objective: to replace outdated intuition with rigorous mathematical data models, real-time war room monitoring, and ground-level booth management.
            </p>

            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              Over the past decade, our team has successfully managed over {COMPANY_INFO.campaignsManaged} election campaigns across parliamentary (Lok Sabha), assembly (Vidhan Sabha), and municipal levels.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/30">
                <p className="text-2xl font-extrabold text-[#ff7a00]">22 Million+</p>
                <p className="text-xs font-semibold text-zinc-300 mt-1">Field Respondents Polled</p>
              </div>
              <div className="p-4 bg-zinc-900 text-white rounded-2xl border border-zinc-800">
                <p className="text-2xl font-extrabold text-[#ff7a00]">95.4%</p>
                <p className="text-xs font-semibold text-zinc-300 mt-1">Predictive Accuracy Rate</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80"
                alt="Political Rally Strategy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-800 mt-8">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                alt="War Room Operations"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. CEO Message Section */}
      <section className="bg-zinc-950 text-white py-16 border-y border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* CEO Portrait Card */}
            <div className="lg:col-span-1 space-y-4">
              <div className="rounded-[24px] overflow-hidden border-2 border-[#ff7a00] shadow-2xl relative group">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center bg-black/80 backdrop-blur-md p-3 rounded-xl border border-zinc-800">
                  <p className="text-lg font-extrabold text-white">{ceo.name}</p>
                  <p className="text-xs text-[#ff7a00] font-semibold">{ceo.role}</p>
                </div>
              </div>
            </div>

            {/* CEO Message Text */}
            <div className="lg:col-span-2 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
                Message from Leadership
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-snug">
                "Modern Elections Are Won on Polling Booth Tables, Not in Television Studios."
              </h2>

              <p className="text-sm sm:text-base text-zinc-100 leading-relaxed italic font-medium">
                "When we founded Election Chanakya, my conviction was simple: Indian democracy is vast, vibrant, and incredibly nuanced. A single speech or high-decibel rally cannot guarantee victory unless every single polling booth has a dedicated, verified Panna Pramukh tracking silent voters."
              </p>

              <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                "Our team in Noida Sector 63 works round-the-clock during election seasons to provide candidates with the precise data, narrative clarity, and crisis defense required to secure decisive margins."
              </p>

              <div className="pt-2 flex items-center gap-4 border-t border-zinc-800">
                <div>
                  <p className="text-base font-extrabold text-white">{COMPANY_INFO.ceo}</p>
                  <p className="text-xs text-[#ff7a00]">Chief Executive Officer, Election Chanakya</p>
                </div>
                <button
                  onClick={onOpenConsultationModal}
                  className="ml-auto bg-[#ff7a00] hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all shadow-md"
                >
                  Direct Briefing
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Mission, Vision & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="dark-glass-card p-8 rounded-[24px] space-y-4 border-t-4 border-t-[#ff7a00] border-x border-b border-zinc-800 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
            <p className="text-sm text-zinc-200 leading-relaxed font-normal">
              To empower visionary political leaders with bulletproof psephological data, booth-level mobilization technology, and media strategy to build stronger democratic representation.
            </p>
          </div>

          <div className="dark-glass-card p-8 rounded-[24px] space-y-4 border-t-4 border-t-white border-x border-b border-zinc-800 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
            <p className="text-sm text-zinc-200 leading-relaxed font-normal">
              To be recognized globally as the most scientifically disciplined, ethically grounded, and technologically advanced political intelligence advisory firm in South Asia.
            </p>
          </div>

          <div className="dark-glass-card p-8 rounded-[24px] space-y-4 border-t-4 border-t-[#ff7a00] border-x border-b border-zinc-800 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-[#ff7a00] border border-orange-500/30 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Core Values</h3>
            <p className="text-sm text-zinc-200 leading-relaxed font-normal">
              Empirical Integrity, Absolute NDA Confidentiality, Unwavering Discipline, Rapid Crisis Response, and Client Victory First.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Professional Timeline & Milestones */}
      <section className="bg-zinc-950 py-16 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Milestone Track Record
            </span>
            <h2 className="text-3xl font-extrabold text-white">A Decade of Electoral Excellence</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-zinc-800">
            {[
              {
                year: '2016',
                title: 'Company Foundation in Noida',
                desc: 'CEO Vivek Gupta established Election Chanakya in Sector 63, Noida as a pioneering political data analytics consultancy.'
              },
              {
                year: '2019',
                title: 'National Lok Sabha Operations',
                desc: 'Executed surveys across 45 Lok Sabha constituencies, pioneering Panna Pramukh software distribution.'
              },
              {
                year: '2022',
                title: 'Western UP Assembly Victory',
                desc: 'Managed 32 high-stakes Vidhan Sabha seats in UP, achieving an 84.3% victory rate.'
              },
              {
                year: '2024',
                title: 'AI War Room Deployment',
                desc: 'Launched real-time AI social media sentiment & rapid response command centers for state leaders.'
              },
              {
                year: '2026',
                title: 'Pan-India Footprint',
                desc: 'Expanded command operations across 18 Indian states with 145+ active war rooms.'
              }
            ].map((m, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-[45%] bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 shadow-md">
                  <span className="text-xs font-extrabold text-[#ff7a00] font-mono">{m.year}</span>
                  <h3 className="text-base font-bold text-white mt-1">{m.title}</h3>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">{m.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ff7a00] text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-md">
                  ✓
                </div>
                <div className="w-full sm:w-[45%] hidden sm:block" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
