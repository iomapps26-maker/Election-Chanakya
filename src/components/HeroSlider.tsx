import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/mockData';
import { PageRoute } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  BarChart2,
  PhoneCall
} from 'lucide-react';

interface HeroSliderProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = HERO_SLIDES;

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-screen h-screen flex flex-col justify-between overflow-hidden bg-black text-white selection:bg-[#ff7a00] selection:text-white">
      
      {/* Background Images with Zoom Animation */}
      {slides.map((s, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Zoom */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            {/* Light Gradient Overlay for optimal readability in White Theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/70" />
          </div>
        );
      })}

      {/* Hero Content Area */}
      <div className="relative z-20 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center pt-28 pb-12">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 key={slide.id}">
          
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50/95 backdrop-blur-md border border-orange-200/80 text-xs font-extrabold text-orange-800 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>{slide.tagline}</span>
          </div>

          {/* Animated Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-zinc-950">
            {slide.title}{' '}
            <span className="text-gradient-orange underline decoration-orange-500/40 decoration-wavy decoration-2">
              {slide.highlightText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-700 font-medium leading-relaxed max-w-2xl">
            {slide.subtitle}
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary Orange Gradient Button */}
            <button
              onClick={onOpenConsultationModal}
              id="hero-primary-cta-btn"
              className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white px-7 py-3.5 rounded-full text-sm font-black tracking-wider uppercase transition-all duration-300 shadow-xl shadow-orange-600/30 hover:scale-[1.03] flex items-center gap-2 group border border-orange-400/30"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Live Analytics Dashboard Blue Button */}
            <button
              onClick={() => onRouteChange('dashboard')}
              id="hero-dashboard-cta-btn"
              className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 hover:from-blue-600 hover:to-indigo-500 text-white px-6 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] flex items-center gap-2 shadow-xl shadow-blue-600/25 group border border-blue-400/30"
            >
              <BarChart2 className="w-4 h-4 text-white transition-colors" />
              <span>Live Analytics Dashboard</span>
            </button>

            {/* Secondary White/Orange Border Button */}
            <button
              onClick={() => onRouteChange('services')}
              id="hero-secondary-cta-btn"
              className="bg-white hover:bg-orange-50 text-zinc-900 hover:text-orange-600 border-2 border-zinc-300 hover:border-orange-500 px-6 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md hover:scale-[1.03] flex items-center gap-2 shadow-sm"
            >
              <span>{slide.secondaryCtaText}</span>
            </button>
          </div>

          {/* Slide Highlighting Key Stats */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-300 max-w-lg">
            {slide.stats.map((st, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-black text-orange-600 tracking-tight">
                  {st.value}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
                  {st.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-300 pt-4">
        
        {/* Slide Counter & Dots */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono font-bold text-zinc-900">
            0{currentSlide + 1} <span className="text-zinc-500">/ 0{slides.length}</span>
          </span>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-8 bg-black'
                    : 'w-2 bg-zinc-300 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Manual Controls & Pause Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause Auto Play' : 'Play Auto Play'}
            className="p-2.5 rounded-full bg-white hover:bg-black hover:text-white text-black border border-zinc-300 hover:border-black transition-all duration-300 shadow-sm"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-2.5 rounded-full bg-white hover:bg-black hover:text-white text-black border border-zinc-300 hover:border-black transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-2.5 rounded-full bg-white hover:bg-black hover:text-white text-black border border-zinc-300 hover:border-black transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Prompt */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="hidden lg:flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-zinc-300" />
          <span>Sector 63 Noida Hotline: <strong className="text-white">{COMPANY_INFO.phone}</strong></span>
        </a>

      </div>
    </section>
  );
};
