'use client';

import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface IntegrationPartnersSectionProps {
  translations: {
    integrations: {
      title: string;
      subtitle: string;
      categories: Array<{
        name: string;
        partners: string[];
      }>;
    };
  };
}

export default function IntegrationPartnersSection({ translations }: IntegrationPartnersSectionProps) {
  const { integrations } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {integrations.title}
          </h2>
          <p className="text-xl text-gray-400">
            {integrations.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {integrations.categories.map((category, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.partners.map((partner, pidx) => (
                  <div
                    key={pidx}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex items-center justify-center h-24 group hover:scale-105"
                  >
                    <span className="text-gray-300 font-semibold text-center group-hover:text-white transition-colors">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom integrations note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-lg px-6 py-3">
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">+</span> Custom API integrations available for any platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
