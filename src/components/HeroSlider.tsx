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
    <section className="relative w-full min-h-[100dvh] sm:min-h-[700px] lg:min-h-[780px] flex flex-col justify-between overflow-hidden bg-white text-zinc-950 selection:bg-orange-600 selection:text-white">
      
      {/* Background Images with Zoom Animation & High Contrast Overlays */}
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
                isActive ? 'scale-110 opacity-30' : 'scale-100 opacity-0'
              }`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            {/* Gradient Overlays for crystal clear text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/80" />
          </div>
        );
      })}

      {/* Hero Content Area */}
      <div className="relative z-20 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-12">
        <div className="max-w-3xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700" key={slide.id}>
          
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-orange-100/90 backdrop-blur-md border border-orange-300/80 text-[11px] sm:text-sm font-extrabold text-orange-900 shadow-sm max-w-full">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 shrink-0" />
            <span className="truncate">{slide.tagline}</span>
          </div>

          {/* Animated Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-zinc-950">
            {slide.title}{' '}
            <span className="text-gradient-orange underline decoration-orange-500/40 decoration-wavy decoration-2">
              {slide.highlightText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base lg:text-xl text-zinc-700 font-medium leading-relaxed max-w-2xl">
            {slide.subtitle}
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5">
            {/* Primary Orange Gradient Button */}
            <button
              onClick={onOpenConsultationModal}
              id="hero-primary-cta-btn"
              className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 shadow-xl shadow-orange-600/25 hover:scale-[1.02] flex items-center justify-center gap-2 group border border-orange-400/30"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Live Analytics Dashboard Blue Button */}
            <button
              onClick={() => onRouteChange('dashboard')}
              id="hero-dashboard-cta-btn"
              className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 hover:from-blue-600 hover:to-indigo-500 text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 group border border-blue-400/30"
            >
              <BarChart2 className="w-4 h-4 text-white" />
              <span>Live Analytics Dashboard</span>
            </button>

            {/* Secondary White/Orange Border Button */}
            <button
              onClick={() => onRouteChange('services')}
              id="hero-secondary-cta-btn"
              className="bg-white hover:bg-orange-50 text-zinc-900 hover:text-orange-600 border-2 border-zinc-300 hover:border-orange-500 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md hover:scale-[1.02] flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{slide.secondaryCtaText}</span>
            </button>
          </div>

          {/* Slide Highlighting Key Stats */}
          <div className="pt-3 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-zinc-200/80 max-w-lg">
            {slide.stats.map((st, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-lg sm:text-2xl lg:text-3xl font-black text-orange-600 tracking-tight">
                  {st.value}
                </p>
                <p className="text-[9px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider leading-tight">
                  {st.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-zinc-200/90 pt-3 sm:pt-4 bg-white/70 backdrop-blur-sm sm:bg-transparent">
        
        {/* Slide Counter & Dots */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm font-mono font-black text-zinc-950">
            0{currentSlide + 1} <span className="text-zinc-400 font-normal">/ 0{slides.length}</span>
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-6 sm:w-8 bg-orange-600 shadow-sm'
                    : 'w-2 bg-zinc-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Manual Controls & Pause Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause Auto Play' : 'Play Auto Play'}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-orange-600 hover:text-white text-zinc-900 border border-zinc-300 hover:border-orange-600 transition-all duration-300 shadow-sm"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-orange-600 hover:text-white text-zinc-900 border border-zinc-300 hover:border-orange-600 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-orange-600 hover:text-white text-zinc-900 border border-zinc-300 hover:border-orange-600 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Quick Contact Prompt */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="hidden lg:flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-orange-600 transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-orange-600" />
          <span>Sector 63 Noida Hotline: <strong className="text-zinc-950 font-extrabold">{COMPANY_INFO.phone}</strong></span>
        </a>

      </div>
    </section>
  );
};
