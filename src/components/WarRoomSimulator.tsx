import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Calculator, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Award, 
  ChevronRight,
  ShieldAlert,
  Users,
  Target
} from 'lucide-react';

interface WarRoomSimulatorProps {
  onBookBriefing: () => void;
}

export const WarRoomSimulator: React.FC<WarRoomSimulatorProps> = ({ onBookBriefing }) => {
  const [constituencyType, setConstituencyType] = useState<'assembly' | 'parliament' | 'local'>('assembly');
  const [pannaCoverage, setPannaCoverage] = useState<number>(75);
  const [surveyDepth, setSurveyDepth] = useState<number>(3); // 1-5 rounds
  const [warRoomActive, setWarRoomActive] = useState<boolean>(true);

  // Calculations based on realistic psephological weights
  const baseTurnoutBoost = Math.round((pannaCoverage / 100) * 12.5 + (surveyDepth * 1.2));
  const estimatedSwingShift = ((pannaCoverage / 100) * 6.5 + (warRoomActive ? 3.5 : 0.5) + (surveyDepth * 0.8)).toFixed(1);
  const winProbability = Math.min(98, Math.round(55 + (pannaCoverage * 0.3) + (surveyDepth * 3) + (warRoomActive ? 8 : 0)));

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white rounded-[24px] border border-zinc-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff7a00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" /> Interactive Analytics Tool
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Electoral Victory Impact Calculator
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Simulate how Election Chanakya’s Panna Pramukh & War Room execution shifts voter turnout and victory margins.
            </p>
          </div>

          <div className="shrink-0">
            <span className="px-4 py-2 bg-zinc-800/80 rounded-xl border border-zinc-700 text-xs font-semibold text-zinc-300 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              Noida War Room Algorithm v4.2
            </span>
          </div>
        </div>

        {/* Inputs & Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Controls Column */}
          <div className="space-y-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
            
            {/* Control 1: Constituency Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2">
                1. Select Constituency Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'assembly', label: 'Vidhan Sabha (~2 Lakh Voters)' },
                  { id: 'parliament', label: 'Lok Sabha (~18 Lakh Voters)' },
                  { id: 'local', label: 'Municipal (~50K Voters)' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConstituencyType(type.id as any)}
                    className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                      constituencyType === type.id
                        ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-md shadow-orange-500/20'
                        : 'bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Panna Pramukh Coverage */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
                  2. Target Panna Pramukh (Booth) Coverage
                </label>
                <span className="text-sm font-extrabold text-[#ff7a00]">{pannaCoverage}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                step="5"
                value={pannaCoverage}
                onChange={(e) => setPannaCoverage(Number(e.target.value))}
                className="w-full accent-[#ff7a00] cursor-pointer bg-zinc-800 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                <span>30% (Basic)</span>
                <span>75% (Standard)</span>
                <span>100% (Full Domination)</span>
              </div>
            </div>

            {/* Control 3: Survey & Opinion Poll Rounds */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
                  3. Field Survey & Sentiment Rounds
                </label>
                <span className="text-sm font-extrabold text-[#ff7a00]">{surveyDepth} Rounds</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((round) => (
                  <button
                    key={round}
                    onClick={() => setSurveyDepth(round)}
                    className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                      surveyDepth === round
                        ? 'bg-[#ff7a00] text-white border-[#ff7a00]'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                    }`}
                  >
                    {round} {round === 1 ? 'Round' : 'Rounds'}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: 24/7 War Room Command */}
            <div className="flex items-center justify-between p-3.5 bg-zinc-800/80 rounded-xl border border-zinc-700">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-[#ff7a00]" />
                <div>
                  <p className="text-xs font-bold text-white">24/7 Central War Room Operations</p>
                  <p className="text-[11px] text-zinc-400">Noida HQ fake news & media crisis monitoring</p>
                </div>
              </div>
              <button
                onClick={() => setWarRoomActive(!warRoomActive)}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  warRoomActive ? 'bg-[#ff7a00]' : 'bg-zinc-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    warRoomActive ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Results Column */}
          <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-4">
                Simulated Campaign Projection
              </p>

              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs text-zinc-400 font-medium">Turnout Boost</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
                    +{baseTurnoutBoost}%
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-1">GOTV polling day gain</p>
                </div>

                <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs text-zinc-400 font-medium">Net Swing Shift</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#ff7a00] mt-1">
                    +{estimatedSwingShift}%
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-1">Undecided voter conversion</p>
                </div>

              </div>

              {/* Victory Confidence Index Bar */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-zinc-300">Victory Confidence Index</span>
                  <span className="font-extrabold text-orange-400 text-sm">{winProbability}%</span>
                </div>
                <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-[#ff7a00] h-full rounded-full transition-all duration-700"
                    style={{ width: `${winProbability}%` }}
                  />
                </div>
              </div>

              {/* Key Action Blueprints */}
              <div className="mt-6 space-y-2">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Key Recommended Actions:</p>
                <ul className="text-xs sm:text-sm text-zinc-200 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Deploy {Math.round((pannaCoverage / 100) * 3500)} Panna Pramukhs across booths.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Run {surveyDepth} rounds of stratified sentiment polling before nominations.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Connect directly with CEO Vivek Gupta for confidential strategy.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Book Strategy CTA */}
            <button
              onClick={onBookBriefing}
              className="w-full bg-[#ff7a00] hover:bg-white hover:text-black text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 text-sm tracking-wide uppercase"
            >
              <span>Get Full Custom Blueprint for Your Constituency</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
