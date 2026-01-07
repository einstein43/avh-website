'use client';

import { Search, Lightbulb, Code, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ProcessSectionProps {
  translations: {
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
        duration: string;
      }>;
    };
  };
}

export default function ProcessSection({ translations }: ProcessSectionProps) {
  const { process } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const icons = [Search, Lightbulb, Code, TrendingUp];
  const colors = [
    { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
    { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  ];

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {process.title}
          </h2>
          <p className="text-xl text-gray-400">
            {process.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-500 to-green-500 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.steps.map((step, idx) => {
              const Icon = icons[idx];
              const color = colors[idx];
              
              return (
                <div
                  key={idx}
                  className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                    {idx + 1}
                  </div>

                  {/* Card */}
                  <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-6 rounded-xl border ${color.border} hover:scale-105 transition-transform duration-300 h-full`}>
                    <div className={`w-16 h-16 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 ${color.text}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-semibold">{step.duration}</span>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {idx < 3 && (
                    <ArrowRight className="hidden lg:block absolute top-24 -right-12 h-8 w-8 text-purple-500/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
