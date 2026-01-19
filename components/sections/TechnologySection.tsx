'use client';

import { Brain, Zap, Code, Database } from 'lucide-react';
import TechCard from '@/components/ui/TechCard';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface TechnologySectionProps {
  translations: {
    tech: {
      title: string;
      subtitle: string;
      ai: {
        title: string;
        tools: string[];
      };
      automation: {
        title: string;
        tools: string[];
      };
      web: {
        title: string;
        tools: string[];
      };
      data: {
        title: string;
        tools: string[];
      };
    };
  };
}

export default function TechnologySection({ translations }: TechnologySectionProps) {
  const { tech } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={elementRef} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {tech.title}
          </h2>
          <p className="text-xl text-khaki">
            {tech.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <TechCard
              icon={Brain}
              iconColor="text-accent-orange"
              title={tech.ai.title}
              tools={tech.ai.tools}
            />
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <TechCard
              icon={Zap}
              iconColor="text-primary-blue-600"
              title={tech.automation.title}
              tools={tech.automation.tools}
            />
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <TechCard
              icon={Code}
              iconColor="text-accent-orange-light"
              title={tech.web.title}
              tools={tech.web.tools}
            />
          </div>

          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <TechCard
              icon={Database}
              iconColor="text-khaki"
              title={tech.data.title}
              tools={tech.data.tools}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
