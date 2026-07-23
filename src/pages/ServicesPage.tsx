import React, { useState } from 'react';
import { PageRoute, ServiceItem } from '../types';
import { SERVICES_LIST, COMPANY_INFO } from '../data/mockData';
import { 
  Compass, 
  Flag, 
  Users, 
  Target, 
  PieChart, 
  BarChart3, 
  FileText, 
  Share2, 
  Award, 
  MapPin, 
  Cpu, 
  ShieldAlert, 
  X, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

interface ServicesPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping helper
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Flag': return <Flag className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'PieChart': return <PieChart className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <ShieldAlert className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Dedicated Services Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-black text-white overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
            Enterprise Political Capabilities
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Specialized Services for <span className="text-[#ff7a00]">Electoral Dominance</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
            From door-to-door Panna Pramukh booth management to 24/7 Noida War Rooms, explore our full suite of 15 political consulting services.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenConsultationModal}
              className="bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/20"
            >
              Request Service Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-widest">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            15 Specialized Electoral Solutions
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-medium">
            Tailored political consulting and data science capabilities designed for Indian elections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="dark-glass-card rounded-[20px] overflow-hidden group flex flex-col justify-between border border-zinc-800 hover:border-[#ff7a00] transition-all duration-300"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-700 backdrop-blur-md text-[#ff7a00] flex items-center justify-center font-bold shadow-md">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <h3 className="absolute bottom-3 left-4 right-4 text-lg font-extrabold text-white leading-snug">
                    {srv.title}
                  </h3>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                    {srv.shortDesc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-zinc-800">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-zinc-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="w-full bg-zinc-800 hover:bg-[#ff7a00] hover:text-white text-zinc-200 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-zinc-700 hover:border-[#ff7a00]"
                >
                  <span>Read Full Service Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-zinc-950 rounded-[24px] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-zinc-800 my-8 space-y-6">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a00] bg-black/80 px-3 py-1 rounded-full border border-orange-500/30">
                  Election Chanakya Advisory
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff7a00]">
                  Key Service Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((f, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a00] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-400">
                  Contact CEO Vivek Gupta for custom scope & NDA contract.
                </p>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultationModal();
                  }}
                  className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto text-center shadow-lg shadow-orange-500/20"
                >
                  Book Service Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
