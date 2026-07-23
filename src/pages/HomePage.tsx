import React, { useState } from 'react';
import { PageRoute, ServiceItem } from '../types';
import { COMPANY_INFO, SERVICES_LIST, TESTIMONIALS, BLOG_POSTS, FAQ_ITEMS } from '../data/mockData';
import { HeroSlider } from '../components/HeroSlider';
import { WarRoomSimulator } from '../components/WarRoomSimulator';
import { 
  BarChart3, 
  Target, 
  Users, 
  Compass, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  PieChart,
  Cpu,
  Share2,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  return (
    <div className="space-y-20 pb-16 overflow-x-hidden">
      
      {/* 1. Hero Slider Section (Fullscreen 5 Slides) */}
      <HeroSlider
        onRouteChange={onRouteChange}
        onOpenConsultationModal={onOpenConsultationModal}
      />

      {/* 2. Counter Section / Key Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 text-white rounded-[24px] p-8 sm:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff7a00]/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
            <div className="pt-4 sm:pt-0">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#ff7a00] tracking-tight">
                {COMPANY_INFO.campaignsManaged}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-widest mt-2">
                Electoral Campaigns Won
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#ff7a00] tracking-tight">
                {COMPANY_INFO.votersSurveyed}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-widest mt-2">
                Field Respondents Surveyed
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#ff7a00] tracking-tight">
                {COMPANY_INFO.predictiveAccuracy}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-widest mt-2">
                Exit Poll Predictive Accuracy
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-4">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#ff7a00] tracking-tight">
                {COMPANY_INFO.warRoomsOperated}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-widest mt-2">
                24/7 War Rooms Deployed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Election Chanakya Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#ff7a00] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> About Election Chanakya
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Where Empirical Psephology Meets <span className="text-[#ff7a00]">Electoral Dominance</span>
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Founded under the visionary leadership of CEO <span className="font-bold text-zinc-900">Vivek Gupta</span>, Election Chanakya is India’s foremost political intelligence, survey research, and campaign engineering agency headquartered in <span className="font-semibold text-zinc-900">Sector 63, Noida</span>.
            </p>

            <p className="text-sm text-zinc-600 leading-relaxed">
              We replace guesswork and conventional political intuition with machine learning algorithms, voter propensity models, door-to-door ground research, and micro-level Panna Pramukh booth management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                'Proprietary Booth Management Software',
                'Stratified Field Survey Sampling',
                '24/7 Command War Room Operations',
                'Hyper-Local Digital Media Targeting'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ff7a00] shrink-0" />
                  <span className="text-sm font-semibold text-zinc-800">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onRouteChange('about')}
                className="bg-[#ff7a00] hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-orange-500/20 flex items-center gap-2"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image & CEO Quote Card */}
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden border border-zinc-200 shadow-2xl img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
                alt="Election Chanakya War Room Strategy"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-2xl border border-zinc-800 max-w-sm shadow-2xl hidden sm:block">
              <p className="text-xs italic text-zinc-300">
                "In Indian politics, noise does not equal votes. Granular booth-level data and disciplined voter mobilization win elections."
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-zinc-800 pt-2">
                <span className="text-xs font-extrabold text-[#ff7a00]">Vivek Gupta</span>
                <span className="text-[10px] text-zinc-400 font-medium">CEO, Election Chanakya</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-zinc-50 py-16 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Unmatched Competitive Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Why National Leaders & Parties Trust Election Chanakya
            </h2>
            <p className="text-sm text-zinc-600">
              Four fundamental principles that guarantee electoral performance and absolute confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: 'AI & Data-Driven Strategy',
                desc: 'Custom propensity algorithms categorizing every registered voter into loyalists, fence-sitters, and opposition.'
              },
              {
                icon: Target,
                title: 'Granular Booth Execution',
                desc: 'Mobile-enabled Panna Pramukh tracking ensuring 100% voter slip distribution and GOTV turnout.'
              },
              {
                icon: ShieldCheck,
                title: 'Strict Non-Disclosure (NDA)',
                desc: 'Encrypted servers and strict exclusivity protocols ensuring zero candidate strategy leakage.'
              },
              {
                icon: Award,
                title: 'Noida Central War Room',
                desc: '24/7 media sentiment surveillance neutralizing opponent misinformation within minutes.'
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="white-glass-card p-6 rounded-[18px] space-y-4 hover:border-[#ff7a00] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff7a00] flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Core Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mt-1">
              360° Political Consulting & Campaign Engineering
            </h2>
          </div>

          <button
            onClick={() => onRouteChange('services')}
            className="text-xs font-bold text-[#ff7a00] hover:text-black uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.slice(0, 6).map((srv) => (
            <div
              key={srv.id}
              className="white-glass-card rounded-[18px] overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-[#ff7a00] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {srv.title}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-zinc-600 leading-relaxed">{srv.shortDesc}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {srv.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onRouteChange('services')}
                  className="w-full bg-zinc-100 hover:bg-[#ff7a00] hover:text-white text-zinc-900 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Interactive War Room Simulator Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WarRoomSimulator onBookBriefing={onOpenConsultationModal} />
      </section>

      {/* 6.5 Live Dashboard Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-950 via-zinc-950 to-black rounded-[24px] p-8 sm:p-12 border border-orange-500/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Chanakya Live Command Portal
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Live <span className="text-[#ff7a00]">State-Wide Analytics</span> & AI Strategy Generator
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Access real-time seat share projections, demographic radar, GOTV turnout velocity trackers, and AI campaign slogan matrix models.
            </p>
          </div>

          <button
            onClick={() => onRouteChange('dashboard')}
            className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/30 flex items-center gap-2 shrink-0 group"
          >
            <span>Launch Live Dashboard</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 7. Our Campaign Execution Pipeline (Timeline) */}
      <section className="bg-zinc-900 text-white py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Methodology
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">Our Proven 4-Stage Campaign Lifecycle</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Baseline Audit & Polls',
                desc: 'Constituency profiling, caste mapping, anti-incumbency survey, and opponent vulnerability analysis.'
              },
              {
                step: '02',
                title: 'War Room & Panna Setup',
                desc: 'Deploying Sector 63 Noida War Room servers, appointing verified Panna Pramukhs, and digital media launch.'
              },
              {
                step: '03',
                title: 'Micro-Targeted Blitz',
                desc: 'Hyper-local WhatsApp broadcasts, leader rallies, candidate speech coaching, and swing voter conversion.'
              },
              {
                step: '04',
                title: 'GOTV & Counting Management',
                desc: 'Real-time turnout tracking during polling hours, followed by counting booth agent deployment.'
              }
            ].map((st, i) => (
              <div key={i} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-3 relative">
                <span className="text-3xl font-extrabold text-[#ff7a00] font-mono">{st.step}</span>
                <h3 className="text-lg font-bold text-white">{st.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Latest Insights & Blogs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Psephology & Research
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mt-1">
              Latest Political Strategy Insights
            </h2>
          </div>

          <button
            onClick={() => onRouteChange('blog')}
            className="text-xs font-bold text-[#ff7a00] hover:text-black uppercase tracking-wider flex items-center gap-1"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="white-glass-card rounded-[18px] overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#ff7a00]" /> {post.readTime}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#ff7a00] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={() => onRouteChange('blog')}
                  className="text-xs font-bold text-[#ff7a00] hover:text-black flex items-center gap-1 transition-colors"
                >
                  <span>Read Full Insight</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Client Endorsements / Testimonials */}
      <section className="bg-zinc-50 py-16 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
              Client Endorsements
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              What Political Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="white-glass-card p-6 rounded-[18px] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="text-xs text-zinc-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/80 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#ff7a00]"
                  />
                  <div>
                    <p className="text-xs font-extrabold text-zinc-900">{t.name}</p>
                    <p className="text-[11px] text-zinc-500">{t.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="white-glass-card rounded-2xl overflow-hidden border border-zinc-200 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-zinc-900 hover:text-[#ff7a00] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ff7a00] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Final CTA Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-black via-zinc-900 to-black text-white rounded-[24px] p-8 sm:p-14 border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
              Confidential Campaign Advisory
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Engineer Your Electoral Victory?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Contact CEO <span className="text-white font-bold">Vivek Gupta</span> directly at our Noida Sector 63 Command Center for an NDA-backed campaign brief.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultationModal}
              className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/30 flex items-center gap-2"
            >
              <span>Schedule Strategy Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-4 rounded-full border border-zinc-700 hover:border-white text-xs font-bold text-white uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ff7a00]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
