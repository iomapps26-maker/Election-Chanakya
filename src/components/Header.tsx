import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Menu, X, ChevronRight, BarChart3, Shield, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeRoute,
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute; badge?: string }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Live Dashboard', route: 'dashboard', badge: 'LIVE' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Team', route: 'team' },
    { label: 'Projects', route: 'projects' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Insights', route: 'blog' },
    { label: 'Contact', route: 'contact' }
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sleek Vibrant Top Brand Line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 z-[60] shadow-sm" />

      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-zinc-200/90 shadow-md py-3 text-zinc-900'
            : 'bg-white/85 backdrop-blur-md border-b border-zinc-200/60 py-4 text-zinc-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Left */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
              id="header-logo-btn"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white flex items-center justify-center font-black shadow-md shadow-orange-600/20 group-hover:scale-105 transition-all duration-300 border border-orange-500/30">
                <BarChart3 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-zinc-950">
                    ELECTION
                  </span>
                  <span className="font-extrabold text-xl tracking-tight text-orange-600">
                    CHANAKYA
                  </span>
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                  Political Analytics & Strategy
                </p>
              </div>
            </button>

            {/* Desktop Menu Center */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    id={`nav-link-${item.route}`}
                    className={`relative px-3.5 py-2 text-xs font-extrabold transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'text-zinc-950 bg-zinc-100 border border-zinc-300 shadow-inner'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {item.label}
                      {item.badge && (
                        <span className="bg-orange-600 text-white text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-md animate-pulse shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {/* Animated Underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-orange-600 rounded-full shadow-sm" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Right */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                id="header-phone-btn"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-full border border-zinc-300 text-zinc-800 hover:border-zinc-950 hover:bg-zinc-100 bg-white transition-all duration-300 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-950" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenConsultationModal}
                id="header-cta-brief-btn"
                className="relative group overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white border border-orange-500/40 px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 shadow-lg shadow-orange-600/20 hover:scale-[1.03] flex items-center gap-1.5"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Strategy Brief
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-full bg-black text-white font-bold shadow-md hover:bg-zinc-800 transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2.5 rounded-xl border border-zinc-300 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-white/98 backdrop-blur-2xl border-b border-zinc-200 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-50 text-zinc-900">
          <div className="p-6 space-y-3 max-h-[80vh] overflow-y-auto">
            <div className="pb-3 mb-2 border-b border-zinc-200 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Navigation Menu
              </span>
              <span className="text-xs font-semibold text-zinc-700 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-zinc-900" /> Confidential
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activeRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between p-3 rounded-xl font-bold text-base transition-all ${
                      isActive
                        ? 'bg-zinc-100 text-black border-l-4 border-black'
                        : 'text-zinc-700 hover:bg-zinc-100 hover:text-black'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="bg-black text-white text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full bg-black text-white hover:bg-zinc-800 border border-black py-3 rounded-xl font-black text-sm tracking-wide uppercase transition-all shadow-md text-center"
              >
                Book Strategy Meeting
              </button>
              
              <div className="text-center text-xs text-zinc-500 space-y-1 font-medium">
                <p>CEO: <span className="text-zinc-900 font-bold">{COMPANY_INFO.ceo}</span></p>
                <p>Office: {COMPANY_INFO.office}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  </>
  );
};
