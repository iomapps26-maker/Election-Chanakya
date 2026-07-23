import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PROJECTS_LIST, COMPANY_INFO } from '../data/mockData';
import { Lightbox } from '../components/Lightbox';
import { CheckCircle2, ArrowRight, BarChart2, MapPin, Users, Award } from 'lucide-react';

interface ProjectsPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [filter, setFilter] = useState<'all' | 'assembly' | 'parliamentary' | 'survey'>('all');
  const [activeLightbox, setActiveLightbox] = useState<{ image: string; title: string; desc: string } | null>(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS_LIST 
    : PROJECTS_LIST.filter(p => p.category === filter);

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Proven Track Record
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Electoral Campaign <span className="text-[#ff7a00]">Case Studies</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Real performance metrics from Vidhan Sabha and Lok Sabha elections engineered by Election Chanakya.
          </p>
        </div>
      </section>

      {/* Projects Grid & Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Campaigns' },
            { id: 'assembly', label: 'Vidhan Sabha Assembly' },
            { id: 'parliamentary', label: 'Lok Sabha Parliament' },
            { id: 'survey', label: 'State-Wide Opinion Polls' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat.id
                  ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-md shadow-orange-500/20'
                  : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="dark-glass-card rounded-[24px] overflow-hidden border border-zinc-800 group flex flex-col justify-between"
            >
              <div>
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setActiveLightbox({ image: p.image, title: p.title, desc: p.description })}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/80 text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full border border-zinc-700">
                    {p.state} • {p.year}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-white">{p.title}</h3>
                      <p className="text-xs text-orange-400 font-semibold">{p.constituencyType}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {p.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3.5 bg-zinc-900/90 rounded-xl border border-zinc-800">
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase">Swing Achieved</p>
                      <p className="text-lg font-extrabold text-[#ff7a00]">{p.swingAchieved}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase">Voter Reach</p>
                      <p className="text-lg font-extrabold text-white">{p.votersReached}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-xs font-bold text-[#ff7a00] uppercase">Key Deliverables & Impact:</p>
                    {p.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-2 border-t border-zinc-800">
                <button
                  onClick={onOpenConsultationModal}
                  className="w-full bg-zinc-800 hover:bg-[#ff7a00] hover:text-white text-zinc-200 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-zinc-700 hover:border-[#ff7a00]"
                >
                  <span>Request Similar Strategy Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox viewer */}
      {activeLightbox && (
        <Lightbox
          image={activeLightbox.image}
          title={activeLightbox.title}
          description={activeLightbox.desc}
          onClose={() => setActiveLightbox(null)}
        />
      )}

    </div>
  );
};
