import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  BarChart3, 
  Send, 
  CheckCircle2, 
  ArrowUp, 
  ShieldCheck, 
  Lock,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Youtube
} from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] text-white border-t border-zinc-800 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7a00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ff7a00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & CEO info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff7a00] text-white flex items-center justify-center font-extrabold shadow-lg shadow-orange-500/20">
                <BarChart3 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white">ELECTION </span>
                <span className="font-extrabold text-2xl tracking-tight text-[#ff7a00]">CHANAKYA</span>
              </div>
            </div>

            <p className="text-zinc-200 text-sm leading-relaxed max-w-md font-medium">
              India’s premier political analytics, psephology, booth management, and campaign strategy advisory firm. Empowering political candidates and parties with data-driven electoral victory blueprints.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-orange-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> CEO: {COMPANY_INFO.ceo}
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#ff7a00]" /> {COMPANY_INFO.domain.replace('https://', '')}
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' }
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    aria-label={soc.label}
                    className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-3 mb-4 border-b border-orange-500/30 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {[
                { label: 'Home', route: 'home' as PageRoute },
                { label: 'Live Dashboard', route: 'dashboard' as PageRoute },
                { label: 'About Us', route: 'about' as PageRoute },
                { label: 'Our Services', route: 'services' as PageRoute },
                { label: 'Leadership & Team', route: 'team' as PageRoute },
                { label: 'Case Studies', route: 'projects' as PageRoute },
                { label: 'Visual Gallery', route: 'gallery' as PageRoute },
                { label: 'Political Insights', route: 'blog' as PageRoute },
                { label: 'Client Reviews', route: 'testimonials' as PageRoute },
                { label: 'Careers', route: 'careers' as PageRoute },
                { label: 'Contact Us', route: 'contact' as PageRoute }
              ].map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => handleNavClick(item.route)}
                    className="hover:text-[#ff7a00] transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#ff7a00] transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Advisory Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-3 mb-4 border-b border-orange-500/30 inline-block">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {[
                'Political Consulting',
                'Booth Management',
                'Survey Research',
                'Election War Room',
                'Data Analytics & AI',
                'Exit Poll Research',
                'Digital Campaign',
                'Constituency Mapping',
                'Political Branding'
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="hover:text-[#ff7a00] transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#ff7a00] transition-colors" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-3 mb-2 border-b border-orange-500/30 inline-block">
              Noida Command Office
            </h4>
            
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff7a00] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-zinc-400">
                  {COMPANY_INFO.addressFull}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ff7a00] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#ff7a00] transition-colors text-xs font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ff7a00] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#ff7a00] transition-colors text-xs">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-zinc-300 mb-2">Subscribe to Political Intelligence Dispatch</p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter official email..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff7a00] transition-colors pr-10"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#ff7a00] text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-green-400 mt-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Subscribed confidentially.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="py-6 border-b border-zinc-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={() => handleNavClick('privacy')} className="hover:text-[#ff7a00] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNavClick('terms')} className="hover:text-[#ff7a00] transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleNavClick('disclaimer')} className="hover:text-[#ff7a00] transition-colors">
              Disclaimer
            </button>
            <button onClick={() => handleNavClick('cookie-policy')} className="hover:text-[#ff7a00] transition-colors">
              Cookie Policy
            </button>
            <button onClick={() => handleNavClick('refund-policy')} className="hover:text-[#ff7a00] transition-colors">
              Refund Policy
            </button>
            <button onClick={() => handleNavClick('sitemap')} className="hover:text-[#ff7a00] transition-colors">
              Sitemap
            </button>
            <button onClick={() => handleNavClick('faq')} className="hover:text-[#ff7a00] transition-colors">
              FAQ
            </button>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
            <Lock className="w-3 h-3 text-emerald-500" /> 256-Bit SSL Encrypted & Confidential Data Pipeline
          </div>
        </div>

        {/* Bottom Copyright & Small Developer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 {COMPANY_INFO.name}. All Rights Reserved. CEO Vivek Gupta.</p>
          
          {/* Developer Credit Requirement: Very small, elegant and visible only in footer */}
          <div className="flex items-center gap-4">
            <p className="text-[11px] tracking-wide text-zinc-400 font-medium italic">
              Website Designed & Developed by <span className="text-zinc-200 font-semibold not-italic">Muzahid Saifi</span>
            </p>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
