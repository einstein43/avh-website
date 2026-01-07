'use client';

import { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ROICalculatorProps {
  translations: {
    roi: {
      title: string;
      subtitle: string;
      hoursLabel: string;
      hourlyRateLabel: string;
      efficiencyLabel: string;
      resultsTitle: string;
      hoursSaved: string;
      costSavings: string;
      annualSavings: string;
      cta: string;
    };
  };
}

export default function ROICalculator({ translations }: ROICalculatorProps) {
  const { roi } = translations;
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [efficiencyGain, setEfficiencyGain] = useState(40);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Calculations
  const hoursSavedPerWeek = (hoursPerWeek * efficiencyGain) / 100;
  const weeklySavings = hoursSavedPerWeek * hourlyRate;
  const annualSavings = weeklySavings * 52;

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {roi.title}
          </h2>
          <p className="text-xl text-gray-400">
            {roi.subtitle}
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Input section */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Input Your Data</h3>
            
            {/* Hours per week slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  {roi.hoursLabel}
                </label>
                <span className="text-2xl font-bold text-white">{hoursPerWeek}h</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Hourly rate slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  {roi.hourlyRateLabel}
                </label>
                <span className="text-2xl font-bold text-white">${hourlyRate}</span>
              </div>
              <input
                type="range"
                min="25"
                max="200"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Efficiency gain slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-300 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  {roi.efficiencyLabel}
                </label>
                <span className="text-2xl font-bold text-white">{efficiencyGain}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                step="5"
                value={efficiencyGain}
                onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Results section */}
          <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 backdrop-blur p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-400" />
              {roi.resultsTitle}
            </h3>

            <div className="space-y-6">
              {/* Hours saved */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-green-500/10">
                <div className="text-gray-400 mb-2">{roi.hoursSaved}</div>
                <div className="text-4xl font-bold text-green-400">
                  {hoursSavedPerWeek.toFixed(1)}h
                </div>
                <div className="text-sm text-gray-500 mt-1">per week</div>
              </div>

              {/* Weekly savings */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-cyan-500/10">
                <div className="text-gray-400 mb-2">{roi.costSavings}</div>
                <div className="text-4xl font-bold text-cyan-400">
                  ${weeklySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm text-gray-500 mt-1">per week</div>
              </div>

              {/* Annual savings */}
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 p-6 rounded-xl border border-green-400/30">
                <div className="text-gray-300 mb-2 font-semibold">{roi.annualSavings}</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  ${annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm text-gray-400 mt-2">Based on 52 weeks/year</div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              {roi.cta}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
      `}</style>
    </section>
  );
}
