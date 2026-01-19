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
    { bg: 'bg-accent-orange/20', text: 'text-accent-orange', border: 'border-sunflower/30' },
    { bg: 'bg-primary-blue-600/20', text: 'text-primary-blue-600', border: 'border-indigo/30' },
    { bg: 'bg-accent-orange-light/20', text: 'text-accent-orange-light', border: 'border-sunflower-light/30' },
    { bg: 'bg-khaki/20', text: 'text-khaki', border: 'border-khaki/30' },
  ];

  return (
    <section ref={elementRef} className="py-20 px-4 bg-carbon/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {process.title}
          </h2>
          <p className="text-xl text-khaki">
            {process.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden-mobile absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-orange via-indigo via-sunflower-light to-khaki opacity-20" style={{ display: 'none' }} />

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {process.steps.map((step, idx) => {
              const Icon = icons[idx];
              const color = colors[idx];
              
              return (
                <div
                  key={idx}
                  className={`relative transition duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-accent-orange to-primary-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                    {idx + 1}
                  </div>

                  {/* Card */}
                  <div className={`bg-gradient-to-br from-carbon/50 to-carbon-light/50 backdrop-blur p-6 rounded-xl border ${color.border} hover:scale-105 transition-transform duration-300 h-full`}>
                    <div className={`w-16 h-16 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 ${color.text}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-khaki mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-semibold">{step.duration}</span>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {idx < 3 && (
                    <ArrowRight className="hidden-mobile absolute top-24 -right-12 h-8 w-8 text-primary-blue-500/30" style={{ display: 'none' }} />
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
