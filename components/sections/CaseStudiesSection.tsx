'use client';

import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface CaseStudiesSectionProps {
  translations: {
    cases: {
      title: string;
      subtitle: string;
      items: Array<{
        client: string;
        industry: string;
        challenge: string;
        solution: string;
        results: string[];
        tech: string[];
      }>;
      cta: string;
    };
  };
}

export default function CaseStudiesSection({ translations }: CaseStudiesSectionProps) {
  const { cases } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const gradients = [
    'from-purple-900/50 to-blue-900/50',
    'from-blue-900/50 to-cyan-900/50',
    'from-cyan-900/50 to-green-900/50',
  ];

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {cases.title}
          </h2>
          <p className="text-xl text-gray-400">
            {cases.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.items.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`bg-gradient-to-br ${gradients[idx]} backdrop-blur p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col group`}>
                {/* Header */}
                <div className="mb-4">
                  <div className="text-sm text-purple-400 font-semibold mb-1">{item.industry}</div>
                  <h3 className="text-2xl font-bold text-white">{item.client}</h3>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{item.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{item.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-4 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Results</h4>
                  <div className="space-y-2">
                    {item.results.map((result, ridx) => (
                      <div key={ridx} className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-green-300 text-sm font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">{cases.cta}</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
