'use client';

import { AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ProblemSolutionSectionProps {
  translations: {
    problemSolution: {
      title: string;
      subtitle: string;
      scenarios: Array<{
        problem: string;
        solution: string;
        benefit: string;
      }>;
      cta: string;
    };
  };
}

export default function ProblemSolutionSection({ translations }: ProblemSolutionSectionProps) {
  const { problemSolution } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {problemSolution.title}
          </h2>
          <p className="text-xl text-gray-400">
            {problemSolution.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {problemSolution.scenarios.map((scenario, idx) => (
            <div
              key={idx}
              className={`transition duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition duration-300 relative">
                <div className="grid gap-0 relative" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  {/* Problem */}
                  <div className="p-6 border-b border-white/10">
                    <style jsx>{`
                      @media (min-width: 768px) {
                        .problem-col {
                          border-right: 1px solid rgba(255, 255, 255, 0.1);
                          border-bottom: none;
                        }
                      }
                    `}</style>
                    <div className="problem-col flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-400 text-sm mb-2">Problem</h3>
                        <p className="text-white font-semibold text-sm">{scenario.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="flex justify-center py-2" style={{ display: 'flex' }}>
                    <style jsx>{`
                      @media (min-width: 768px) {
                        .mobile-arrow {
                          display: none;
                        }
                      }
                    `}</style>
                    <div className="mobile-arrow w-10 h-10 bg-gradient-to-b from-red-600 to-primary-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="h-5 w-5 text-white rotate-90" />
                    </div>
                  </div>

                  {/* Desktop Arrow 1 */}
                  <div className="hidden absolute z-10" style={{ display: 'none', left: '33%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <style jsx>{`
                      @media (min-width: 768px) {
                        .desktop-arrow-1 {
                          display: flex;
                        }
                      }
                    `}</style>
                    <div className="desktop-arrow-1 w-12 h-12 bg-gradient-to-r from-red-600 to-primary-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-6 border-b border-white/10 bg-primary-blue-500/5">
                    <style jsx>{`
                      @media (min-width: 768px) {
                        .solution-col {
                          border-right: 1px solid rgba(255, 255, 255, 0.1);
                          border-bottom: none;
                        }
                      }
                    `}</style>
                    <div className="solution-col flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-blue-400 text-sm mb-2">Solution</h3>
                        <p className="text-white text-sm">{scenario.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Arrow 2 */}
                  <div className="flex justify-center py-2">
                    <style jsx>{`
                      @media (min-width: 768px) {
                        .mobile-arrow-2 {
                          display: none;
                        }
                      }
                    `}</style>
                    <div className="mobile-arrow-2 w-10 h-10 bg-gradient-to-b from-primary-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="h-5 w-5 text-white rotate-90" />
                    </div>
                  </div>

                  {/* Desktop Arrow 2 */}
                  <div className="hidden absolute z-10" style={{ display: 'none', left: '67%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <style jsx>{`
                      @media (min-width: 768px) {
                        .desktop-arrow-2 {
                          display: flex;
                        }
                      }
                    `}</style>
                    <div className="desktop-arrow-2 w-12 h-12 bg-gradient-to-r from-primary-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Benefit */}
                  <div className="p-6 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-400 text-sm mb-2">Benefit</h3>
                        <p className="text-white font-semibold text-sm">{scenario.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-blue-600 to-blue-600 text-white rounded-lg font-semibold hover:from-primary-blue-700 hover:to-blue-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-blue-500/50"
          >
            {problemSolution.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
