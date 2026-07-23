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
    <div className="relative rounded-[28px] bg-white p-6 sm:p-10 border border-zinc-200 overflow-hidden shadow-xl">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Top Title & Selector Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200 text-xs font-extrabold uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5 animate-pulse text-orange-600" />
              <span>Critical Readiness Clock</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Countdown to <span className="text-gradient-orange">{selectedElection.name}</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl">
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
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black border-orange-500 shadow-md shadow-orange-500/20'
                    : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-orange-500 hover:text-orange-600'
                }`}
              >
                {ev.state}
              </button>
            ))}
          </div>
        </div>

        {/* Countdown Digital Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-900 shadow-xl relative overflow-hidden group hover:border-orange-500/60 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform block">
              {String(timeLeft.days).padStart(3, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400 mt-2 block">
              Days Remaining
            </span>
          </div>

          <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-900 shadow-xl relative overflow-hidden group hover:border-orange-500/60 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-2 block">
              Hours
            </span>
          </div>

          <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-900 shadow-xl relative overflow-hidden group hover:border-orange-500/60 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-2 block">
              Minutes
            </span>
          </div>

          <div className="bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-900 shadow-xl relative overflow-hidden group hover:border-orange-500/60 transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />
            <span className="text-3xl sm:text-5xl font-black text-orange-400 font-mono tracking-tight group-hover:scale-105 transition-transform block animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400 mt-2 block">
              Seconds
            </span>
          </div>

        </div>

        {/* Readiness Checklist & Action Footer */}
        <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-800">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{selectedElection.totalSeats} Total Assembly Seats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-orange-600" />
              <span>War Room SLA: 24-Hour Deployment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Panna Pramukh Mobile Sync</span>
            </div>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-600/25 flex items-center gap-2 shrink-0 group border border-orange-400/30"
          >
            <span>Initiate Pre-Poll Strategy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
