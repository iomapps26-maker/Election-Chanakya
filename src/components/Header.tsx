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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-md py-3 text-zinc-900'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
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
            <div className="w-10 h-10 rounded-xl bg-[#ff7a00] text-white flex items-center justify-center font-extrabold shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
              <BarChart3 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-extrabold text-xl tracking-tight ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
                  ELECTION
                </span>
                <span className="font-extrabold text-xl tracking-tight text-[#ff7a00]">
                  CHANAKYA
                </span>
              </div>
              <p className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled ? 'text-zinc-500' : 'text-zinc-300'}`}>
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
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-[#ff7a00]'
                      : isScrolled
                      ? 'text-zinc-700 hover:text-[#ff7a00]'
                      : 'text-zinc-100 hover:text-[#ff7a00]'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-md animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {/* Animated Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#ff7a00] rounded-full animate-pulse" />
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
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                isScrolled
                  ? 'border-zinc-300 text-zinc-800 hover:border-[#ff7a00] hover:text-[#ff7a00] bg-zinc-50'
                  : 'border-white/30 text-white hover:border-[#ff7a00] hover:text-[#ff7a00] bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenConsultationModal}
              id="header-cta-brief-btn"
              className="relative group overflow-hidden bg-[#ff7a00] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md shadow-orange-500/20 hover:bg-black hover:shadow-black/20 hover:scale-[1.02] flex items-center gap-1.5"
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
              className="p-2.5 rounded-full bg-[#ff7a00] text-white shadow-md"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className={`p-2.5 rounded-xl border transition-colors ${
                isScrolled
                  ? 'border-zinc-300 text-zinc-800 hover:bg-zinc-100'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-white border-b border-zinc-200 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-50">
          <div className="p-6 space-y-3 max-h-[80vh] overflow-y-auto">
            <div className="pb-3 mb-2 border-b border-zinc-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Navigation Menu
              </span>
              <span className="text-xs font-semibold text-[#ff7a00] flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> Confidential
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activeRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between p-3 rounded-xl font-semibold text-base transition-all ${
                      isActive
                        ? 'bg-orange-50 text-[#ff7a00] border-l-4 border-[#ff7a00]'
                        : 'text-zinc-800 hover:bg-zinc-50 hover:text-[#ff7a00]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full bg-[#ff7a00] text-white py-3 rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-black transition-colors shadow-lg shadow-orange-500/20 text-center"
              >
                Book Strategy Meeting
              </button>
              
              <div className="text-center text-xs text-zinc-500 space-y-1">
                <p>CEO: {COMPANY_INFO.ceo}</p>
                <p>Office: {COMPANY_INFO.office}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
