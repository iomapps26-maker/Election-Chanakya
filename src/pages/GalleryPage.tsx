import React, { useState } from 'react';
import { PageRoute } from '../types';
import { GALLERY_ITEMS } from '../data/mockData';
import { Lightbox } from '../components/Lightbox';
import { ZoomIn, Eye } from 'lucide-react';

interface GalleryPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<{ image: string; title: string; desc: string } | null>(null);

  const categories = ['All', 'War Room', 'Campaigns', 'Surveys', 'Analytics', 'Media'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Visual Media & Command Center
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Election Chanakya <span className="text-[#ff7a00]">Visual Gallery</span>
          </h1>

          <p className="text-base text-zinc-300 max-w-2xl mx-auto font-normal">
            Behind the scenes of our 24/7 Noida Sector 63 War Rooms, field survey operations, rallies, and media strategy sessions.
          </p>
        </div>
      </section>

      {/* Masonry Filter & Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat
                  ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-md shadow-orange-500/20'
                  : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox({ image: item.image, title: item.title, desc: item.description })}
              className="group relative rounded-[20px] overflow-hidden border border-zinc-200 shadow-md cursor-pointer bg-zinc-950 h-72 img-zoom-container"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 bg-[#ff7a00] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                {item.category}
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-base font-extrabold text-white group-hover:text-[#ff7a00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox */}
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
