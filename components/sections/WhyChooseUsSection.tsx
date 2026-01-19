'use client';

import { Zap, Users, Shield, Rocket, DollarSign, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface WhyChooseUsSectionProps {
  translations: {
    whyUs: {
      title: string;
      subtitle: string;
      reasons: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export default function WhyChooseUsSection({ translations }: WhyChooseUsSectionProps) {
  const { whyUs } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const icons = [Zap, Users, Shield, Rocket, DollarSign, Headphones];

  return (
    <section ref={elementRef} className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {whyUs.title}
          </h2>
          <p className="text-xl text-khaki">
            {whyUs.subtitle}
          </p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {whyUs.reasons.map((reason, idx) => {
            const Icon = icons[idx];

            return (
              <div
                key={idx}
                className={`transition duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-primary-blue-600/30 to-accent-orange/30 backdrop-blur p-6 rounded-xl border border-sunflower/20 hover:border-sunflower/40 transition duration-300 h-full group">
                  <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-accent-orange" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-khaki">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
