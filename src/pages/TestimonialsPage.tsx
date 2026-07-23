import React from 'react';
import { PageRoute } from '../types';
import { TESTIMONIALS, COMPANY_INFO } from '../data/mockData';
import { Quote, Play, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface TestimonialsPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            High-Profile Endorsements
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Client Testimonials & <span className="text-[#ff7a00]">Reviews</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Endorsements from Members of Parliament, Cabinet Ministers, and party high command leaders across India.
          </p>
        </div>
      </section>

      {/* Testimonial Cards & Video Reviews Simulation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Video Endorsement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Vidhan Sabha Victory Campaign Review',
              subtitle: 'State Minister & Western UP Leader',
              thumbnail: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1000&q=80',
              quote: 'Election Chanakya’s Panna Pramukh software gave us real-time turnout tracking. By 2 PM on polling day, we knew exactly which booths needed volunteer mobilization.'
            },
            {
              title: 'Lok Sabha Parliamentary Strategy Review',
              subtitle: 'Senior Member of Parliament',
              thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
              quote: 'CEO Vivek Gupta and his Noida team predicted our victory margin within 1.5%. Their media crisis defense in the final 48 hours was flawless.'
            }
          ].map((vid, i) => (
            <div key={i} className="bg-zinc-950 text-white rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl group">
              <div className="relative h-64 cursor-pointer" onClick={onOpenConsultationModal}>
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff7a00] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-black/80 text-[#ff7a00] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-orange-500/30">
                  Confidential Video Case Brief
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-extrabold text-white">{vid.title}</h3>
                <p className="text-xs text-[#ff7a00] font-bold uppercase tracking-wider">{vid.subtitle}</p>
                <p className="text-sm text-zinc-200 italic pt-2 leading-relaxed font-normal">"{vid.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Written Endorsement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="dark-glass-card p-6 sm:p-8 rounded-[24px] border border-zinc-800 flex flex-col justify-between space-y-6 shadow-xl hover:border-orange-500/40 transition-colors">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#ff7a00]" />
                <div className="flex text-amber-400 gap-1 text-sm">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-sm sm:text-base text-zinc-100 italic leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#ff7a00] shadow-md" />
                <div>
                  <p className="text-sm font-extrabold text-white">{t.name}</p>
                  <p className="text-xs text-amber-400 font-semibold">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
