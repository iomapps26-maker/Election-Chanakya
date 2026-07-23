import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { 
  Building2, 
  FileCheck2, 
  Users2, 
  Target, 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  Info,
  ChevronRight
} from 'lucide-react';

interface GrowthDataPoint {
  period: string; // e.g. "Q1 2022", "2021", etc.
  label: string;
  booths: number;
  surveys: number; // in millions
  pannaPramukhs: number; // in thousands
  accuracy: number; // percentage
}

const HISTORICAL_PERFORMANCE_METRICS: GrowthDataPoint[] = [
  { period: '2021 Q1', label: 'Q1 2021', booths: 12500, surveys: 2.1, pannaPramukhs: 45, accuracy: 89.2 },
  { period: '2021 Q3', label: 'Q3 2021', booths: 24000, surveys: 4.8, pannaPramukhs: 88, accuracy: 91.0 },
  { period: '2022 Q1', label: 'Q1 2022', booths: 42000, surveys: 8.5, pannaPramukhs: 150, accuracy: 92.4 },
  { period: '2022 Q3', label: 'Q3 2022', booths: 58000, surveys: 11.2, pannaPramukhs: 210, accuracy: 93.8 },
  { period: '2023 Q1', label: 'Q1 2023', booths: 79000, surveys: 14.6, pannaPramukhs: 290, accuracy: 94.6 },
  { period: '2023 Q3', label: 'Q3 2023', booths: 96000, surveys: 17.1, pannaPramukhs: 350, accuracy: 95.5 },
  { period: '2024 Q1', label: 'Q1 2024', booths: 118000, surveys: 19.8, pannaPramukhs: 410, accuracy: 96.1 },
  { period: '2025 Q1', label: 'Q1 2025', booths: 132000, surveys: 21.2, pannaPramukhs: 455, accuracy: 96.5 },
  { period: '2026 Q2', label: 'Q2 2026', booths: 142500, surveys: 22.4, pannaPramukhs: 485, accuracy: 96.8 }
];

type MetricType = 'booths' | 'surveys' | 'pannaPramukhs' | 'accuracy';

interface MetricConfig {
  id: MetricType;
  title: string;
  currentValue: string;
  growthNote: string;
  unit: string;
  icon: React.ElementType;
  color: string;
  gradientStart: string;
  gradientStop: string;
  description: string;
}

const METRICS_CONFIG: MetricConfig[] = [
  {
    id: 'booths',
    title: 'Booths Managed',
    currentValue: '142,500+',
    growthNote: '+11.4x Growth since 2021',
    unit: 'Booths',
    icon: Building2,
    color: '#09090b',
    gradientStart: '#09090b',
    gradientStop: '#27272a',
    description: 'Micro-booth coverage across assembly segments with real-time GPS verification.'
  },
  {
    id: 'surveys',
    title: 'Surveys Completed',
    currentValue: '22.4M+',
    growthNote: 'Door-to-Door Verified Data',
    unit: 'Million Responses',
    icon: FileCheck2,
    color: '#059669',
    gradientStart: '#059669',
    gradientStop: '#047857',
    description: 'Validated household interviews capturing sentiment, caste equations, and local issues.'
  },
  {
    id: 'pannaPramukhs',
    title: 'Panna Cadre Synced',
    currentValue: '485,000+',
    growthNote: '98.2% Mobile App Adoption',
    unit: 'K Mobile Cadre',
    icon: Users2,
    color: '#18181b',
    gradientStart: '#18181b',
    gradientStop: '#3f3f46',
    description: 'Direct page-level voter relationship managers linked to central war room routing.'
  },
  {
    id: 'accuracy',
    title: 'Model Precision Rate',
    currentValue: '96.8%',
    growthNote: 'Tested in 280+ Elections',
    unit: '% Accuracy',
    icon: Target,
    color: '#2563eb',
    gradientStart: '#2563eb',
    gradientStop: '#1d4ed8',
    description: 'Algorithmic voter propensity matching verified against official Election Commission results.'
  }
];

export const AnalyticsStats: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('booths');
  const [hoveredPoint, setHoveredPoint] = useState<GrowthDataPoint | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectedConfig = METRICS_CONFIG.find(m => m.id === activeMetric)!;

  // D3 Chart Rendering
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Clear previous SVG contents
    const svgElement = d3.select(svgRef.current);
    svgElement.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth || 700;
    const height = 260;
    const margin = { top: 30, right: 30, bottom: 40, left: 50 };
    const width = containerWidth - margin.left - margin.right;

    svgElement
      .attr('width', containerWidth)
      .attr('height', height)
      .attr('viewBox', `0 0 ${containerWidth} ${height}`);

    const g = svgElement
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define Gradients
    const defs = svgElement.append('defs');
    const areaGradient = defs.append('linearGradient')
      .attr('id', `area-gradient-${activeMetric}`)
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    areaGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', selectedConfig.color)
      .attr('stop-opacity', 0.45);

    areaGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', selectedConfig.color)
      .attr('stop-opacity', 0.0);

    // Scales
    const xScale = d3.scalePoint()
      .domain(HISTORICAL_PERFORMANCE_METRICS.map(d => d.label))
      .range([0, width]);

    const yExtent = d3.extent(HISTORICAL_PERFORMANCE_METRICS, d => d[activeMetric] as number) as [number, number];
    const minY = yExtent[0] * 0.85;
    const maxY = yExtent[1] * 1.1;

    const yScale = d3.scaleLinear()
      .domain([minY, maxY])
      .range([height - margin.top - margin.bottom, 0]);

    // Grid lines
    const yAxisTicks = yScale.ticks(5);
    g.append('g')
      .attr('class', 'grid-lines')
      .selectAll('line')
      .data(yAxisTicks)
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', d => yScale(d))
      .attr('y2', d => yScale(d))
      .attr('stroke', '#27272a')
      .attr('stroke-dasharray', '3,3');

    // Axes
    const xAxis = d3.axisBottom(xScale).tickSize(0);
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat(d => {
        if (activeMetric === 'booths') return d3.format(',.0f')(d);
        if (activeMetric === 'surveys') return `${d}M`;
        if (activeMetric === 'pannaPramukhs') return `${d}k`;
        return `${d}%`;
      })
      .tickSize(0);

    // Render X Axis
    g.append('g')
      .attr('transform', `translate(0, ${height - margin.top - margin.bottom})`)
      .call(xAxis)
      .attr('color', '#a1a1aa')
      .style('font-size', '11px')
      .style('font-weight', '600')
      .select('.domain').remove();

    // Render Y Axis
    g.append('g')
      .call(yAxis)
      .attr('color', '#71717a')
      .style('font-size', '11px')
      .select('.domain').remove();

    // D3 Area & Line Generators
    const areaGenerator = d3.area<GrowthDataPoint>()
      .x(d => xScale(d.label) || 0)
      .y0(height - margin.top - margin.bottom)
      .y1(d => yScale(d[activeMetric] as number))
      .curve(d3.curveMonotoneX);

    const lineGenerator = d3.line<GrowthDataPoint>()
      .x(d => xScale(d.label) || 0)
      .y(d => yScale(d[activeMetric] as number))
      .curve(d3.curveMonotoneX);

    // Append Area Path
    g.append('path')
      .datum(HISTORICAL_PERFORMANCE_METRICS)
      .attr('fill', `url(#area-gradient-${activeMetric})`)
      .attr('d', areaGenerator);

    // Append Animated Line Path
    const path = g.append('path')
      .datum(HISTORICAL_PERFORMANCE_METRICS)
      .attr('fill', 'none')
      .attr('stroke', selectedConfig.color)
      .attr('stroke-width', 3)
      .attr('d', lineGenerator);

    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(900)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // Render Data Points (Circles)
    const pointsGroup = g.append('g').attr('class', 'data-points');

    pointsGroup.selectAll('circle.data-circle')
      .data(HISTORICAL_PERFORMANCE_METRICS)
      .enter()
      .append('circle')
      .attr('class', 'data-circle')
      .attr('cx', d => xScale(d.label) || 0)
      .attr('cy', d => yScale(d[activeMetric] as number))
      .attr('r', 5)
      .attr('fill', '#09090b')
      .attr('stroke', selectedConfig.color)
      .attr('stroke-width', 2.5)
      .style('cursor', 'pointer')
      .on('mouseover', function (event, d) {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('r', 8)
          .attr('fill', selectedConfig.color)
          .attr('stroke', '#ffffff');
        setHoveredPoint(d);
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('r', 5)
          .attr('fill', '#09090b')
          .attr('stroke', selectedConfig.color);
        setHoveredPoint(null);
      });

  }, [activeMetric, selectedConfig]);

  return (
    <div className="bg-white rounded-[28px] border border-zinc-200 p-6 sm:p-8 space-y-8 shadow-xl relative overflow-hidden" id="analytics-stats-component">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-200 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-300 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-black" />
            <span>D3 Empirical Growth Analytics</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Key Operational <span className="text-gradient-dark">Performance Trends</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl">
            Historical scale trajectories from 2021 to 2026 across ground surveys, Panna Pramukh onboarding, booth management, and predictive precision.
          </p>
        </div>

        {/* Selected Data Point Highlight Badge */}
        <div className="bg-zinc-50 border border-zinc-300 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-sm">
          <div className="p-3 rounded-xl bg-black text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
              {hoveredPoint ? `Snapshot: ${hoveredPoint.label}` : 'Current Metric Total'}
            </p>
            <p className="text-xl font-black text-zinc-950 font-mono">
              {hoveredPoint
                ? activeMetric === 'booths'
                  ? hoveredPoint.booths.toLocaleString()
                  : activeMetric === 'surveys'
                  ? `${hoveredPoint.surveys} Million`
                  : activeMetric === 'pannaPramukhs'
                  ? `${hoveredPoint.pannaPramukhs}K Agents`
                  : `${hoveredPoint.accuracy}%`
                : selectedConfig.currentValue}
            </p>
          </div>
        </div>
      </div>

      {/* Metric Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
        {METRICS_CONFIG.map((metric) => {
          const IconComponent = metric.icon;
          const isSelected = activeMetric === metric.id;

          return (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between space-y-3 group ${
                isSelected
                  ? 'bg-black text-white border-black shadow-lg'
                  : 'bg-zinc-50 text-zinc-900 border-zinc-200 hover:border-black hover:bg-zinc-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                    isSelected
                      ? 'bg-white text-black shadow-md'
                      : 'bg-zinc-200 text-zinc-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-zinc-800 text-white'
                      : 'bg-zinc-200 text-zinc-700'
                  }`}
                >
                  {metric.unit}
                </span>
              </div>

              <div>
                <p className={`text-xs font-medium ${isSelected ? 'text-zinc-300' : 'text-zinc-600'}`}>{metric.title}</p>
                <p className={`text-xl sm:text-2xl font-black tracking-tight mt-0.5 ${isSelected ? 'text-white' : 'text-zinc-950'}`}>
                  {metric.currentValue}
                </p>
                <p className={`text-[10px] font-semibold mt-1 flex items-center gap-1 ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  <CheckCircle className="w-3 h-3" />
                  <span>{metric.growthNote}</span>
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* D3 Visual Chart Box */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-6 space-y-4 relative z-10" ref={containerRef}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: selectedConfig.color }} />
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
              {selectedConfig.title} — Historical Trajectory (2021–2026)
            </h3>
          </div>
          <p className="text-[11px] text-zinc-500 italic">
            Hover over any node on the D3 curve for specific quarterly data points
          </p>
        </div>

        {/* D3 Render Area */}
        <div className="w-full overflow-x-auto">
          <svg ref={svgRef} className="w-full h-auto min-w-[500px]" />
        </div>

        {/* Chart Description Footer */}
        <div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center justify-between text-xs text-zinc-700">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-black shrink-0" />
            <span>{selectedConfig.description}</span>
          </div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:inline">
            Verified Source: Election Chanakya Noida HQ
          </span>
        </div>
      </div>
    </div>
  );
};
