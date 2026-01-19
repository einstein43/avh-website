'use client';

import { TrendingUp, BarChart3, Settings } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ServicesSectionProps {
  translations: {
    services: {
      title: string;
      subtitle: string;
      sports: {
        title: string;
        description: string;
        features: string[];
      };
      finance: {
        title: string;
        description: string;
        features: string[];
      };
      production: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };
}

export default function ServicesSection({ translations }: ServicesSectionProps) {
  const { services } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-carbon/50">
      <div ref={elementRef} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {services.title}
          </h2>
          <p className="text-xl text-khaki">
            {services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ServiceCard
              icon={TrendingUp}
              iconColor="bg-accent-orange/20"
              bgGradient="bg-gradient-to-br from-primary-blue-600/50 to-accent-orange/30"
              borderColor="border border-sunflower/20"
              title={services.sports.title}
              description={services.sports.description}
              features={services.sports.features}
            />
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ServiceCard
              icon={BarChart3}
              iconColor="bg-primary-blue-600/20"
              bgGradient="bg-gradient-to-br from-accent-orange/30 to-primary-blue-600/50"
              borderColor="border border-indigo/20"
              title={services.finance.title}
              description={services.finance.description}
              features={services.finance.features}
            />
          </div>

          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ServiceCard
              icon={Settings}
              iconColor="bg-khaki/20"
              bgGradient="bg-gradient-to-br from-primary-blue-600/50 to-khaki/30"
              borderColor="border border-khaki/20"
              title={services.production.title}
              description={services.production.description}
              features={services.production.features}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
