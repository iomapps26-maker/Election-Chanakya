import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { BarChart3, Home, ArrowLeft, ShieldAlert } from 'lucide-react';

interface NotFoundPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onRouteChange }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff7a00]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-xl w-full text-center space-y-6 relative z-10">
        
        {/* Animated 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-orange-400 border border-white/20 text-xs font-bold uppercase tracking-widest">
          <ShieldAlert className="w-4 h-4 text-[#ff7a00]" /> Page Not Found
        </div>

        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-widest text-[#ff7a00] font-mono">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Uncharted Electoral Constituency
        </h2>

        <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
          The page or route you are looking for does not exist on electionchanakya.co.in or has been moved to our Noida Command Center archives.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onRouteChange('home')}
            className="w-full sm:w-auto bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return To Home Page</span>
          </button>

          <button
            onClick={() => onRouteChange('contact')}
            className="w-full sm:w-auto border border-zinc-700 hover:border-[#ff7a00] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-colors"
          >
            Contact Strategy Team
          </button>
        </div>

        <div className="pt-8 text-[11px] text-zinc-600 border-t border-zinc-900">
          Election Chanakya • Sector 63, Noida, Uttar Pradesh • Phone: {COMPANY_INFO.phone}
        </div>

      </div>
    </div>
  );
};
