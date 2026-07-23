import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShieldAlert, 
  MapPin, 
  Cpu, 
  Sparkles, 
  Activity, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  Radio, 
  ArrowUpRight, 
  Share2, 
  Layers, 
  Send,
  RefreshCw
} from 'lucide-react';

interface DashboardPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultationModal: () => void;
}

// Sample State Election Datasets
const ELECTION_DATASETS: Record<string, {
  name: string;
  totalSeats: number;
  projectedSeats: { alliance: string; seats: number; fill: string }[];
  voterSentiment: { issue: string; candidateScore: number; opponentScore: number; neutralScore: number }[];
  demographicSupport: { name: string; value: number; color: string }[];
  hourlyTurnout: { time: string; target: number; actualWithChanakya: number; baseline: number }[];
}> = {
  up: {
    name: 'Uttar Pradesh Assembly Segment',
    totalSeats: 403,
    projectedSeats: [
      { alliance: 'Target Alliance (Chanakya Partner)', seats: 248, fill: '#ff7a00' },
      { alliance: 'Primary Opposition', seats: 124, fill: '#3b82f6' },
      { alliance: 'Regional Front', seats: 21, fill: '#10b981' },
      { alliance: 'Independents & Others', seats: 10, fill: '#6b7280' }
    ],
    voterSentiment: [
      { issue: 'Infrastructure & Roads', candidateScore: 78, opponentScore: 42, neutralScore: 60 },
      { issue: 'Youth Employment', candidateScore: 65, opponentScore: 58, neutralScore: 50 },
      { issue: 'Law & Order', candidateScore: 84, opponentScore: 31, neutralScore: 55 },
      { issue: 'Agriculture Subsidies', candidateScore: 72, opponentScore: 64, neutralScore: 58 },
      { issue: 'Welfare Direct Benefit', candidateScore: 89, opponentScore: 40, neutralScore: 62 }
    ],
    demographicSupport: [
      { name: 'Rural Farmers (38%)', value: 38, color: '#ff7a00' },
      { name: 'Youth Voters (24%)', value: 24, color: '#f59e0b' },
      { name: 'Women Voters (22%)', value: 22, color: '#10b981' },
      { name: 'Urban Professionals (16%)', value: 16, color: '#6366f1' }
    ],
    hourlyTurnout: [
      { time: '07:00 AM', target: 8, actualWithChanakya: 9, baseline: 6 },
      { time: '09:00 AM', target: 20, actualWithChanakya: 23, baseline: 16 },
      { time: '11:00 AM', target: 36, actualWithChanakya: 41, baseline: 31 },
      { time: '01:00 PM', target: 50, actualWithChanakya: 56, baseline: 44 },
      { time: '03:00 PM', target: 65, actualWithChanakya: 72, baseline: 58 },
      { time: '05:00 PM', target: 75, actualWithChanakya: 81, baseline: 67 }
    ]
  },
  punjab: {
    name: 'Punjab Parliamentary Belt',
    totalSeats: 13,
    projectedSeats: [
      { alliance: 'Target Alliance (Chanakya Partner)', seats: 8, fill: '#ff7a00' },
      { alliance: 'Primary Opposition', seats: 3, fill: '#3b82f6' },
      { alliance: 'Regional Front', seats: 2, fill: '#10b981' },
      { alliance: 'Others', seats: 0, fill: '#6b7280' }
    ],
    voterSentiment: [
      { issue: 'Agrarian MSP Policy', candidateScore: 82, opponentScore: 54, neutralScore: 50 },
      { issue: 'Industrial Growth', candidateScore: 70, opponentScore: 48, neutralScore: 52 },
      { issue: 'Drug Abuse Rehabilitation', candidateScore: 86, opponentScore: 38, neutralScore: 60 },
      { issue: 'Civic Governance', candidateScore: 74, opponentScore: 52, neutralScore: 55 },
      { issue: 'NRIs & Education', candidateScore: 80, opponentScore: 60, neutralScore: 58 }
    ],
    demographicSupport: [
      { name: 'Agrarian Workers (42%)', value: 42, color: '#ff7a00' },
      { name: 'Urban Traders (26%)', value: 26, color: '#f59e0b' },
      { name: 'Women Voters (18%)', value: 18, color: '#10b981' },
      { name: 'Students/Youth (14%)', value: 14, color: '#6366f1' }
    ],
    hourlyTurnout: [
      { time: '07:00 AM', target: 7, actualWithChanakya: 8, baseline: 5 },
      { time: '09:00 AM', target: 18, actualWithChanakya: 22, baseline: 15 },
      { time: '11:00 AM', target: 34, actualWithChanakya: 39, baseline: 29 },
      { time: '01:00 PM', target: 48, actualWithChanakya: 54, baseline: 41 },
      { time: '03:00 PM', target: 62, actualWithChanakya: 69, baseline: 54 },
      { time: '05:00 PM', target: 73, actualWithChanakya: 79, baseline: 63 }
    ]
  },
  karnataka: {
    name: 'Karnataka Southern Belt',
    totalSeats: 224,
    projectedSeats: [
      { alliance: 'Target Alliance (Chanakya Partner)', seats: 126, fill: '#ff7a00' },
      { alliance: 'Primary Opposition', seats: 78, fill: '#3b82f6' },
      { alliance: 'Regional Front', seats: 16, fill: '#10b981' },
      { alliance: 'Others', seats: 4, fill: '#6b7280' }
    ],
    voterSentiment: [
      { issue: 'Tech Infrastructure', candidateScore: 88, opponentScore: 62, neutralScore: 65 },
      { issue: 'Rural Irrigation', candidateScore: 75, opponentScore: 55, neutralScore: 52 },
      { issue: 'Price Index Controls', candidateScore: 68, opponentScore: 60, neutralScore: 50 },
      { issue: 'State Identity', candidateScore: 82, opponentScore: 45, neutralScore: 58 },
      { issue: 'Local Skill Training', candidateScore: 80, opponentScore: 42, neutralScore: 54 }
    ],
    demographicSupport: [
      { name: 'IT Professionals (30%)', value: 30, color: '#6366f1' },
      { name: 'Rural Farmers (32%)', value: 32, color: '#ff7a00' },
      { name: 'Self Help Groups (22%)', value: 22, color: '#10b981' },
      { name: 'Small Business Owners (16%)', value: 16, color: '#f59e0b' }
    ],
    hourlyTurnout: [
      { time: '07:00 AM', target: 9, actualWithChanakya: 10, baseline: 7 },
      { time: '09:00 AM', target: 22, actualWithChanakya: 26, baseline: 18 },
      { time: '11:00 AM', target: 38, actualWithChanakya: 43, baseline: 33 },
      { time: '01:00 PM', target: 52, actualWithChanakya: 58, baseline: 46 },
      { time: '03:00 PM', target: 67, actualWithChanakya: 74, baseline: 60 },
      { time: '05:00 PM', target: 76, actualWithChanakya: 83, baseline: 68 }
    ]
  }
};

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onRouteChange,
  onOpenConsultationModal
}) => {
  const [selectedStateKey, setSelectedStateKey] = useState<string>('up');
  const [issueInput, setIssueInput] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);

  const activeDataset = ELECTION_DATASETS[selectedStateKey];

  const handleGenerateCampaignMatrix = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueInput.trim()) return;

    setIsGeneratingAi(true);
    setAiResponse(null);

    setTimeout(() => {
      setAiResponse(`
🎯 Election Chanakya Campaign Directive for: "${issueInput}"

1. CORE SLOGAN: "सशक्त बूथ, समृद्ध विकास — हमारा संकल्प, हमारा अधिकार!"
2. RESONSANCE ANCHOR: Emphasize verifiable direct benefit transfers (DBT) and localized infrastructure timelines.
3. PANNA PRAMUKH ACTION: Deploy 3-page customized voter pamphlets to all 1,200 households in swing booths.
4. DIGITAL MEDIA STRATEGY: Publish 30-second localized video testimonials on WhatsApp groups targeting 18-35 age bracket within 48 hours.
5. COUNTER-TACTIC: Neutralize rival claims by contrasting past 5-year budget allocations against current delivery metrics.
      `);
      setIsGeneratingAi(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24 pb-20 space-y-10">
      
      {/* Top Banner / Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-zinc-800 p-6 sm:p-10 rounded-[24px] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a00]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" /> Live Chanakya Command Hub
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Real-Time <span className="text-[#ff7a00]">Election Intelligence</span> & Analytics
              </h1>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Live seat projections, voter sentiment radar, Panna Pramukh turnout velocity, and AI-driven campaign resonance models powered by Election Chanakya Sector 63, Noida.
              </p>
            </div>

            {/* State Selector Buttons */}
            <div className="bg-zinc-900/90 p-3 rounded-2xl border border-zinc-800 space-y-2 shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block px-1">
                Select Active State / Region
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'up', label: 'Uttar Pradesh' },
                  { key: 'punjab', label: 'Punjab' },
                  { key: 'karnataka', label: 'Karnataka' }
                ].map((st) => (
                  <button
                    key={st.key}
                    onClick={() => setSelectedStateKey(st.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedStateKey === st.key
                        ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-md shadow-orange-500/20'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* KPI Cards Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold">
              <span>Managed Campaigns</span>
              <BarChart3 className="w-4 h-4 text-[#ff7a00]" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">280+</p>
            <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 95.4% Victory Ratio
            </p>
          </div>

          <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold">
              <span>Active Panna Cadre</span>
              <Users className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">45,000+</p>
            <p className="text-[11px] text-zinc-400">Pramukhs Verified on Mobile</p>
          </div>

          <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold">
              <span>Net Favorability</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">+68.4</p>
            <p className="text-[11px] text-emerald-400 font-medium">+8.2% vs Baseline</p>
          </div>

          <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold">
              <span>War Rooms Active</span>
              <ShieldAlert className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">145 Rooms</p>
            <p className="text-[11px] text-zinc-400">&lt; 3 Min Response Time</p>
          </div>

        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart 1: Seat Share Projection (Bar Chart) */}
          <div className="lg:col-span-2 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#ff7a00] uppercase tracking-wider">
                  Seat Share Projections
                </span>
                <h3 className="text-lg font-bold text-white">{activeDataset.name} (Total: {activeDataset.totalSeats} Seats)</h3>
              </div>
              <span className="text-xs font-medium text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                Exit/Opinion Model v4
              </span>
            </div>

            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeDataset.projectedSeats} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis type="number" stroke="#a1a1aa" fontSize={12} />
                  <YAxis dataKey="alliance" type="category" stroke="#a1a1aa" fontSize={11} width={130} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="seats" radius={[0, 8, 8, 0]}>
                    {activeDataset.projectedSeats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>Chanakya Model Win Probability: <strong className="text-emerald-400">88.5%</strong></span>
              <span>Sample Error: <strong>±1.2%</strong></span>
            </div>
          </div>

          {/* Chart 2: Demographic Share (Pie Chart) */}
          <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-[#ff7a00] uppercase tracking-wider">
                Demographic Support Base
              </span>
              <h3 className="text-lg font-bold text-white">Voter Base Composition</h3>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activeDataset.demographicSupport}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {activeDataset.demographicSupport.map((entry, index) => (
                      <Cell key={`cell-pie-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', color: '#fff' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-zinc-800">
              {activeDataset.demographicSupport.map((demo, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: demo.color }} />
                    <span className="text-zinc-300 font-medium">{demo.name}</span>
                  </div>
                  <span className="font-extrabold text-white">{demo.value}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Second Analytics Row: Voter Sentiment Radar & GOTV Turnout Velocity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sentiment Issue Resonance (Radar Chart) */}
          <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 space-y-4">
            <div>
              <span className="text-xs font-extrabold text-[#ff7a00] uppercase tracking-wider">
                Issue Resonance Matrix
              </span>
              <h3 className="text-lg font-bold text-white">Key Issues: Candidate vs Opponent Perception</h3>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={activeDataset.voterSentiment}>
                  <PolarGrid stroke="#3f3f46" />
                  <PolarAngleAxis dataKey="issue" stroke="#a1a1aa" fontSize={10} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#52525b" />
                  <Radar name="Chanakya Candidate" dataKey="candidateScore" stroke="#ff7a00" fill="#ff7a00" fillOpacity={0.5} />
                  <Radar name="Primary Opponent" dataKey="opponentScore" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  <Legend />
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', color: '#fff' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Polling Day Turnout Velocity (Area Chart) */}
          <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 space-y-4">
            <div>
              <span className="text-xs font-extrabold text-[#ff7a00] uppercase tracking-wider">
                Polling Day GOTV Velocity
              </span>
              <h3 className="text-lg font-bold text-white">Voter Turnout % Comparison Across Hours</h3>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activeDataset.hourlyTurnout} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorChanakya" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff7a00" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff7a00" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#616161" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#616161" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#a1a1aa" fontSize={11} />
                  <YAxis stroke="#a1a1aa" fontSize={11} unit="%" />
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', color: '#fff' }} />
                  <Area type="monotone" dataKey="actualWithChanakya" name="Turnout with Chanakya Panna Pramukhs" stroke="#ff7a00" fillOpacity={1} fill="url(#colorChanakya)" />
                  <Area type="monotone" dataKey="baseline" name="Historical Baseline Turnout" stroke="#888888" fillOpacity={1} fill="url(#colorBase)" />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

      {/* AI Campaign Assistant & Slogan Generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-800 rounded-[24px] p-6 sm:p-10 space-y-6 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] border border-[#ff7a00]/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" /> AI Chanakya Strategy Generator
              </div>
              <h3 className="text-2xl font-extrabold text-white">Generate Instant Slogan & Panna Directives</h3>
              <p className="text-xs text-zinc-400">
                Type any issue, local narrative, or constituency problem to simulate Vivek Gupta's strategic response.
              </p>
            </div>

            <span className="px-3 py-1.5 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300 border border-zinc-700">
              Noida AI Strategy Engine v2.0
            </span>
          </div>

          <form onSubmit={handleGenerateCampaignMatrix} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={issueInput}
              onChange={(e) => setIssueInput(e.target.value)}
              placeholder="e.g. Youth employment in Western UP or Water canal issue in rural belt..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a00]"
            />
            <button
              type="submit"
              disabled={isGeneratingAi}
              className="bg-[#ff7a00] hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 shrink-0"
            >
              {isGeneratingAi ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Generate Strategy</span>
                </>
              )}
            </button>
          </form>

          {aiResponse && (
            <div className="bg-zinc-950/90 border border-orange-500/30 rounded-2xl p-6 text-xs text-zinc-200 space-y-3 font-mono leading-relaxed animate-in fade-in-50 duration-300">
              <div className="flex items-center justify-between text-[#ff7a00] font-sans font-bold text-xs uppercase tracking-wider border-b border-zinc-800 pb-2">
                <span>Election Chanakya Generated Intelligence Brief</span>
                <span>Confidential</span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs text-zinc-300 leading-relaxed">
                {aiResponse}
              </pre>
            </div>
          )}

        </div>
      </div>

      {/* Final Strategy Consultation Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-gradient-to-r from-orange-600 via-[#ff7a00] to-amber-600 text-white p-8 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white">Need Customized Intelligence for Your Constituency?</h3>
            <p className="text-xs text-orange-100">
              Book a confidential 1-on-1 strategy meeting with CEO Vivek Gupta at Sector 63, Noida HQ.
            </p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="bg-black hover:bg-zinc-900 text-white px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 shrink-0"
          >
            <span>Book Confidential Brief</span>
            <ArrowUpRight className="w-4 h-4 text-[#ff7a00]" />
          </button>
        </div>
      </div>

    </div>
  );
};
