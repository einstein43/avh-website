import { TrendingUp, BarChart3, Settings } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {services.title}
          </h2>
          <p className="text-xl text-gray-400">
            {services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={TrendingUp}
            iconColor="bg-purple-500/20"
            bgGradient="bg-gradient-to-br from-purple-900/50 to-blue-900/50"
            borderColor="border border-purple-500/20"
            title={services.sports.title}
            description={services.sports.description}
            features={services.sports.features}
          />

          <ServiceCard
            icon={BarChart3}
            iconColor="bg-blue-500/20"
            bgGradient="bg-gradient-to-br from-blue-900/50 to-cyan-900/50"
            borderColor="border border-blue-500/20"
            title={services.finance.title}
            description={services.finance.description}
            features={services.finance.features}
          />

          <ServiceCard
            icon={Settings}
            iconColor="bg-cyan-500/20"
            bgGradient="bg-gradient-to-br from-cyan-900/50 to-teal-900/50"
            borderColor="border border-cyan-500/20"
            title={services.production.title}
            description={services.production.description}
            features={services.production.features}
          />
        </div>
      </div>
    </section>
  );
}
