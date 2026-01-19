'use client';

import { Heart, ShoppingCart, Truck, Home, Factory, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface IndustriesSectionProps {
  translations: {
    industries: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        description: string;
        useCases: string[];
      }>;
    };
  };
}

export default function IndustriesSection({ translations }: IndustriesSectionProps) {
  const { industries } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const icons = [Heart, ShoppingCart, Truck, Home, Factory, Building2];
  const colors = [
    'from-red-500/20 to-pink-500/20',
    'from-orange-500/20 to-yellow-500/20',
    'from-blue-500/20 to-cyan-500/20',
    'from-green-500/20 to-emerald-500/20',
    'from-primary-blue-500/20 to-violet-500/20',
    'from-primary-blue-600-500/20 to-blue-500/20',
  ];

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {industries.title}
          </h2>
          <p className="text-xl text-gray-400">
            {industries.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.items.map((item, idx) => {
            const Icon = icons[idx];
            const gradient = colors[idx];

            return (
              <div
                key={idx}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:scale-105">
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.useCases.map((useCase, uidx) => (
                      <li key={uidx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-primary-blue-400 mt-1">→</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
