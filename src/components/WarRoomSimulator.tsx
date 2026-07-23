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
    <div className="bg-white text-zinc-950 rounded-[24px] border border-zinc-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-orange-600" /> Interactive Analytics Tool
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Electoral Victory Impact Calculator
            </h3>
            <p className="text-sm text-zinc-600 mt-1">
              Simulate how Election Chanakya’s Panna Pramukh & War Room execution shifts voter turnout and victory margins.
            </p>
          </div>

          <div className="shrink-0">
            <span className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              Noida War Room Algorithm v4.2
            </span>
          </div>
        </div>

        {/* Inputs & Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Controls Column */}
          <div className="space-y-6 bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
            
            {/* Control 1: Constituency Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-zinc-600 tracking-wider mb-2">
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
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black border-orange-500 shadow-md shadow-orange-500/20'
                        : 'bg-white text-zinc-800 border-zinc-300 hover:border-orange-500 hover:text-orange-600'
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
                <label className="text-xs font-bold uppercase text-zinc-600 tracking-wider">
                  2. Target Panna Pramukh (Booth) Coverage
                </label>
                <span className="text-sm font-extrabold text-orange-600">{pannaCoverage}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                step="5"
                value={pannaCoverage}
                onChange={(e) => setPannaCoverage(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer bg-zinc-200 h-2 rounded-lg"
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
                <label className="text-xs font-bold uppercase text-zinc-600 tracking-wider">
                  3. Field Survey & Sentiment Rounds
                </label>
                <span className="text-sm font-extrabold text-orange-600">{surveyDepth} Rounds</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((round) => (
                  <button
                    key={round}
                    onClick={() => setSurveyDepth(round)}
                    className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                      surveyDepth === round
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black border-orange-500'
                        : 'bg-white text-zinc-800 border-zinc-300 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {round} {round === 1 ? 'Round' : 'Rounds'}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: 24/7 War Room Command */}
            <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-300">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-xs font-bold text-zinc-950">24/7 Central War Room Operations</p>
                  <p className="text-[11px] text-zinc-500">Noida HQ fake news & media crisis monitoring</p>
                </div>
              </div>
              <button
                onClick={() => setWarRoomActive(!warRoomActive)}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  warRoomActive ? 'bg-orange-600' : 'bg-zinc-300'
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
          <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-2xl border border-zinc-900 flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
                Simulated Campaign Projection
              </p>

              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs text-zinc-400 font-medium">Turnout Boost</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
                    +{baseTurnoutBoost}%
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1">GOTV polling day gain</p>
                </div>

                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs text-zinc-400 font-medium">Net Swing Shift</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-orange-400 mt-1">
                    +{estimatedSwingShift}%
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1">Undecided voter conversion</p>
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
                    className="bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 h-full rounded-full transition-all duration-700"
                    style={{ width: `${winProbability}%` }}
                  />
                </div>
              </div>

              {/* Key Action Blueprints */}
              <div className="mt-6 space-y-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Key Recommended Actions:</p>
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
              className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-orange-600/30 text-sm tracking-wide uppercase border border-orange-400/30"
            >
              <span>Get Custom Blueprint for Your Constituency</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
