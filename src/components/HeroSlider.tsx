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
            {/* Dark Gradient Overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          </div>
        );
      })}

      {/* Hero Content Area */}
      <div className="relative z-20 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center pt-24 pb-12">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 key={slide.id}">
          
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-orange-400">
            <ShieldCheck className="w-4 h-4 text-[#ff7a00]" />
            <span>{slide.tagline}</span>
          </div>

          {/* Animated Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            {slide.title}{' '}
            <span className="text-[#ff7a00] underline decoration-orange-500/40 decoration-wavy decoration-2">
              {slide.highlightText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
            {slide.subtitle}
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary Orange Button */}
            <button
              onClick={onOpenConsultationModal}
              id="hero-primary-cta-btn"
              className="bg-[#ff7a00] hover:bg-black text-white border-2 border-[#ff7a00] hover:border-white px-7 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-[1.03] flex items-center gap-2 group"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Live Analytics Dashboard Button */}
            <button
              onClick={() => onRouteChange('dashboard')}
              id="hero-dashboard-cta-btn"
              className="bg-[#ff7a00]/20 hover:bg-[#ff7a00] text-white border-2 border-[#ff7a00] px-6 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] flex items-center gap-2"
            >
              <BarChart2 className="w-4 h-4 text-[#ff7a00] group-hover:text-white" />
              <span>Live Analytics Dashboard</span>
            </button>

            {/* Secondary White Border Button */}
            <button
              onClick={() => onRouteChange('services')}
              id="hero-secondary-cta-btn"
              className="bg-white/5 hover:bg-[#ff7a00] text-white border-2 border-white/80 hover:border-[#ff7a00] px-6 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] flex items-center gap-2"
            >
              <span>{slide.secondaryCtaText}</span>
            </button>
          </div>

          {/* Slide Highlighting Key Stats */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/15 max-w-lg">
            {slide.stats.map((st, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-extrabold text-[#ff7a00] tracking-tight">
                  {st.value}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-300 font-medium uppercase tracking-wider">
                  {st.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
        
        {/* Slide Counter & Dots */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono font-bold text-orange-400">
            0{currentSlide + 1} <span className="text-zinc-600">/ 0{slides.length}</span>
          </span>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-8 bg-[#ff7a00]'
                    : 'w-2 bg-white/30 hover:bg-white/60'
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
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#ff7a00] text-white border border-white/20 transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#ff7a00] text-white border border-white/20 transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#ff7a00] text-white border border-white/20 transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Prompt */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="hidden lg:flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-[#ff7a00] transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-[#ff7a00]" />
          <span>Sector 63 Noida Hotline: {COMPANY_INFO.phone}</span>
        </a>

      </div>
    </section>
  );
};
