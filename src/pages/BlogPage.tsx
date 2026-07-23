import React, { useState } from 'react';
import { PageRoute, BlogPost } from '../types';
import { BLOG_POSTS, COMPANY_INFO } from '../data/mockData';
import { Clock, Search, ArrowRight, User, X, CheckCircle2 } from 'lucide-react';

interface BlogPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filteredPosts = BLOG_POSTS.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Political Science & Strategy Dispatch
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Electoral Insights & <span className="text-[#ff7a00]">Psephology Blog</span>
          </h1>

          <p className="text-base text-zinc-300 max-w-2xl mx-auto font-normal">
            Deep dive analysis on Panna Pramukh frameworks, survey sampling calibration, swing voter psychology, and war room command architecture.
          </p>
        </div>
      </section>

      {/* Blog Search & List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles by topic, e.g. Panna Pramukh, Exit Poll, War Room..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff7a00] transition-colors shadow-sm pr-12"
          />
          <Search className="w-5 h-5 text-zinc-400 absolute right-4 top-4" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="dark-glass-card rounded-[22px] overflow-hidden group flex flex-col justify-between border border-zinc-800 hover:border-[#ff7a00] transition-all"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-zinc-700">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#ff7a00]" /> {post.readTime}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-zinc-400" /> {post.author}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white group-hover:text-[#ff7a00] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-2 border-t border-zinc-800">
                <button
                  onClick={() => setActivePost(post)}
                  className="w-full bg-zinc-800 hover:bg-[#ff7a00] hover:text-white text-zinc-200 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-zinc-700 hover:border-[#ff7a00]"
                >
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Full Post Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-zinc-950 rounded-[24px] max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl border border-zinc-800 my-8 space-y-6">
            
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a00] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                {activePost.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activePost.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1 border-b border-zinc-800 pb-3">
                <span>By {activePost.author}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-zinc-800">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs sm:text-sm text-zinc-300 space-y-4 leading-relaxed font-normal whitespace-pre-line">
              {activePost.content}
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-semibold">
                Election Chanakya Research Division • Sector 63 Noida
              </span>
              <button
                onClick={() => {
                  setActivePost(null);
                  onOpenConsultationModal();
                }}
                className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Discuss Strategy
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
