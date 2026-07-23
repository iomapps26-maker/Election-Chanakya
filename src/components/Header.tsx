import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Menu, X, ChevronRight, BarChart3, Shield, ArrowUpRight, Sparkles } from 'lucide-react';

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
            ? 'bg-white/95 backdrop-blur-2xl border-b border-zinc-200/90 shadow-md py-2.5 sm:py-3 text-zinc-900'
            : 'bg-white/90 backdrop-blur-md border-b border-zinc-200/60 py-3 sm:py-4 text-zinc-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo Left */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none shrink-0"
              id="header-logo-btn"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white flex items-center justify-center font-black shadow-md shadow-orange-600/20 group-hover:scale-105 transition-all duration-300 border border-orange-500/30">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1 leading-none">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-950">
                    ELECTION
                  </span>
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-orange-600">
                    CHANAKYA
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-500 mt-0.5">
                  Political Analytics & Strategy
                </p>
              </div>
            </button>

            {/* Desktop Menu Center (Visible on XL screens to fit all 9 items comfortably) */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    id={`nav-link-${item.route}`}
                    className={`relative px-2.5 xl:px-3 py-1.5 text-xs font-extrabold transition-all duration-200 rounded-lg whitespace-nowrap ${
                      isActive
                        ? 'text-orange-600 bg-orange-50/90 border border-orange-200/90 shadow-sm'
                        : 'text-zinc-800 hover:text-orange-600 hover:bg-orange-50/60'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {item.label}
                      {item.badge && (
                        <span className="bg-orange-600 text-white text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-md animate-pulse shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {/* Active Underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-orange-600 rounded-full shadow-sm" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Right & Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Phone button on large screens */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                id="header-phone-btn"
                className="hidden 2xl:flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-full border border-zinc-300 text-zinc-800 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 bg-white transition-all duration-300 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* Strategy Brief Button (Visible everywhere, responsive text size) */}
              <button
                onClick={onOpenConsultationModal}
                id="header-cta-brief-btn"
                className="relative group overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white border border-orange-500/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black tracking-wider uppercase transition-all duration-300 shadow-md shadow-orange-600/20 hover:scale-[1.02] flex items-center gap-1 shrink-0"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span>Strategy Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>

              {/* Phone icon button on mobile only */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold shadow-sm hover:bg-orange-100 transition-all flex sm:hidden shrink-0"
                aria-label="Call Now"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* Mobile / Tablet Menu Toggle (Visible below XL) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="xl:hidden p-1.5 sm:p-2 rounded-xl border border-zinc-300 bg-zinc-100 text-zinc-900 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-colors flex items-center justify-center focus:outline-none shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Sliding Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sliding Menu Panel */}
          <div className="relative z-50 w-full bg-white border-t border-zinc-200 shadow-2xl rounded-t-[28px] overflow-hidden max-h-[88vh] flex flex-col animate-in slide-in-from-bottom-6 duration-300">
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-200 bg-zinc-50/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-600 text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-900">
                    Chanakya Navigation
                  </p>
                  <p className="text-[10px] font-semibold text-orange-600">
                    Noida War Room HQ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold uppercase">
                  <Shield className="w-3 h-3 text-emerald-600 mr-1" /> Verified
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-zinc-200 hover:bg-zinc-300 text-zinc-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Links Scroll Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-2 flex-1">
              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => {
                  const isActive = activeRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className={`flex items-center justify-between p-3.5 rounded-xl font-bold text-base transition-all ${
                        isActive
                          ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-600 font-extrabold shadow-sm'
                          : 'text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-sm sm:text-base">{item.label}</span>
                        {item.badge && (
                          <span className="bg-orange-600 text-white text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-md animate-pulse">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-orange-600' : 'text-zinc-400'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons in Drawer */}
              <div className="pt-4 border-t border-zinc-200 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultationModal();
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/20 text-center flex items-center justify-center gap-2 border border-orange-400/30"
                >
                  <span>Schedule Confidential Strategy Brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>Call War Room: {COMPANY_INFO.phone}</span>
                </a>

                <div className="text-center text-[11px] text-zinc-500 pt-2 font-medium">
                  <p>CEO: <span className="text-zinc-900 font-bold">{COMPANY_INFO.ceo}</span></p>
                  <p className="mt-0.5">{COMPANY_INFO.office}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

