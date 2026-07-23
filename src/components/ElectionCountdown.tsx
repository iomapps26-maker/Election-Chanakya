import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle, ShieldAlert, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

interface TargetElection {
  id: string;
  name: string;
  targetDate: string; // ISO format YYYY-MM-DD
  state: string;
  totalSeats: number;
}

const ELECTION_EVENTS: TargetElection[] = [
  {
    id: 'up-2027',
    name: 'Uttar Pradesh Assembly Elections 2027',
    targetDate: '2027-02-15T07:00:00',
    state: 'Uttar Pradesh',
    totalSeats: 403
  },
  {
    id: 'pb-2027',
    name: 'Punjab Legislative Assembly 2027',
    targetDate: '2027-02-20T07:00:00',
    state: 'Punjab',
    totalSeats: 117
  },
  {
    id: 'gj-2027',
    name: 'Gujarat Vidhan Sabha Elections 2027',
    targetDate: '2027-12-01T07:00:00',
    state: 'Gujarat',
    totalSeats: 182
  },
  {
    id: 'ka-2028',
    name: 'Karnataka Assembly Elections 2028',
    targetDate: '2028-05-10T07:00:00',
    state: 'Karnataka',
    totalSeats: 224
  }
];

interface ElectionCountdownProps {
  onOpenConsultationModal: () => void;
}

export const ElectionCountdown: React.FC<ElectionCountdownProps> = ({ onOpenConsultationModal }) => {
  const [selectedElection, setSelectedElection] = useState<TargetElection>(ELECTION_EVENTS[0]);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(selectedElection.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [selectedElection]);

  return (
    <div className="relative rounded-[28px] dark-glass-card p-6 sm:p-10 border border-orange-500/30 overflow-hidden shadow-2xl">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-[#ff7a00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Top Title & Selector Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-800/80 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-extrabold uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5 animate-pulse text-[#ff7a00]" />
              <span>Critical Readiness Clock</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Countdown to <span className="text-[#ff7a00]">{selectedElection.name}</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Booth-level Panna Pramukh deployment, ground survey validation, and media narratives require at least 180 days of pre-poll calibration.
            </p>
          </div>

          {/* Event Selector Dropdown / Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {ELECTION_EVENTS.map((ev) => (
              <button
                key={ev.id}
                onClick={() => setSelectedElection(ev)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedElection.id === ev.id
                    ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-md shadow-orange-500/20'
                    : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {ev.state}
              </button>
            ))}
          </div>
        </div>

        {/* Countdown Digital Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 sm:p-6 rounded-2xl border border-zinc-800/90 shadow-xl relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform block">
              {String(timeLeft.days).padStart(3, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] mt-2 block">
              Days Remaining
            </span>
          </div>

          <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 sm:p-6 rounded-2xl border border-zinc-800/90 shadow-xl relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-2 block">
              Hours
            </span>
          </div>

          <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 sm:p-6 rounded-2xl border border-zinc-800/90 shadow-xl relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-2 block">
              Minutes
            </span>
          </div>

          <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 sm:p-6 rounded-2xl border border-zinc-800/90 shadow-xl relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-[#ff7a00] font-mono tracking-tight group-hover:scale-105 transition-transform block animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400 mt-2 block">
              Seconds
            </span>
          </div>

        </div>

        {/* Readiness Checklist & Action Footer */}
        <div className="bg-zinc-950/80 rounded-2xl p-5 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{selectedElection.totalSeats} Total Assembly Seats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#ff7a00]" />
              <span>War Room SLA: 24-Hour Deployment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Panna Pramukh Mobile Sync</span>
            </div>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center gap-2 shrink-0 group"
          >
            <span>Initiate Pre-Poll Strategy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
