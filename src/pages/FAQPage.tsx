import React, { useState } from 'react';
import { PageRoute } from '../types';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/mockData';
import { ChevronDown, Search, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';

interface FAQPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [category, setCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'General', 'Surveys', 'War Room', 'Legal & Privacy'];

  const filteredFaqs = FAQ_ITEMS.filter((f) => {
    const matchesCat = category === 'All' || f.category === category;
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Knowledge Base & Answers
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked <span className="text-[#ff7a00]">Questions</span>
          </h1>

          <p className="text-base text-zinc-300 max-w-2xl mx-auto font-normal">
            Everything you need to know about Election Chanakya’s political consulting, NDA confidentiality, and survey research methodologies.
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs, e.g. NDA, sample size, Vivek Gupta..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-[#ff7a00] transition-colors shadow-lg pr-12 font-medium"
          />
          <Search className="w-5 h-5 text-[#ff7a00] absolute right-4 top-4" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                category === cat
                  ? 'bg-[#ff7a00] text-white shadow-lg shadow-orange-500/20'
                  : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 pt-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="dark-glass-card rounded-[20px] overflow-hidden border border-zinc-800 transition-all shadow-xl hover:border-orange-500/40"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-[#ff7a00] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#ff7a00] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ff7a00] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-100 leading-relaxed border-t border-zinc-800 pt-4 bg-zinc-900/60 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call Box */}
        <div className="bg-zinc-950 text-white p-8 rounded-[24px] border border-zinc-800 text-center space-y-4 mt-12">
          <h3 className="text-xl font-extrabold text-white">Have a Specific Candidate Query?</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Schedule a direct confidential discussion with CEO Vivek Gupta at our Sector 63 Noida Command Center.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultationModal}
              className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase transition-colors"
            >
              Request Confidential Strategy Briefing
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="border border-zinc-700 hover:border-white text-white px-6 py-3 rounded-full text-xs font-bold uppercase transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};
