import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, SERVICES_LIST } from '../data/mockData';
import { Globe, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface SitemapPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onRouteChange }) => {
  const pages: { name: string; route: PageRoute; category: string }[] = [
    { name: 'Home Page', route: 'home', category: 'Main Navigation' },
    { name: 'About Election Chanakya', route: 'about', category: 'Main Navigation' },
    { name: 'Our Political Services', route: 'services', category: 'Main Navigation' },
    { name: 'Leadership & Team', route: 'route' as any, category: 'Main Navigation' },
    { name: 'Campaign Case Studies', route: 'projects', category: 'Main Navigation' },
    { name: 'Visual Media Gallery', route: 'gallery', category: 'Main Navigation' },
    { name: 'Psephology Insights Blog', route: 'blog', category: 'Main Navigation' },
    { name: 'Contact & Noida Office', route: 'contact', category: 'Main Navigation' },
    { name: 'Careers at Election Chanakya', route: 'careers', category: 'Careers & Team' },
    { name: 'Frequently Asked Questions', route: 'faq', category: 'Support' },
    { name: 'Client Reviews & Endorsements', route: 'testimonials', category: 'Social Proof' },
    { name: 'Privacy Policy', route: 'privacy', category: 'Legal & Policies' },
    { name: 'Terms & Conditions', route: 'terms', category: 'Legal & Policies' },
    { name: 'Disclaimer', route: 'disclaimer', category: 'Legal & Policies' },
    { name: 'Cookie Policy', route: 'cookie-policy', category: 'Legal & Policies' },
    { name: 'Refund Policy', route: 'refund-policy', category: 'Legal & Policies' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-12">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] text-xs font-bold uppercase tracking-wider border border-orange-500/30">
            Website Navigation Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">HTML Sitemap</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Complete index of all pages and services hosted on electionchanakya.co.in
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {['Main Navigation', 'Legal & Policies', 'Support & Proof'].map((cat, idx) => (
            <div key={idx} className="white-glass-card p-6 rounded-[24px] border border-zinc-200 space-y-4">
              <h3 className="text-base font-extrabold text-zinc-900 border-b border-orange-500/30 pb-2 text-[#ff7a00]">
                {cat}
              </h3>
              <ul className="space-y-2.5 text-xs font-semibold text-zinc-700">
                {pages.filter(p => cat === 'Main Navigation' ? p.category === 'Main Navigation' : cat === 'Legal & Policies' ? p.category === 'Legal & Policies' : p.category !== 'Main Navigation' && p.category !== 'Legal & Policies').map((pg, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        onRouteChange(pg.route);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-[#ff7a00] flex items-center gap-1.5 transition-colors text-left"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#ff7a00]" />
                      <span>{pg.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};
