import { Brain, Zap, Code, Database } from 'lucide-react';
import TechCard from '@/components/ui/TechCard';

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

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {tech.title}
          </h2>
          <p className="text-xl text-gray-400">
            {tech.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TechCard
            icon={Brain}
            iconColor="text-purple-400"
            title={tech.ai.title}
            tools={tech.ai.tools}
          />

          <TechCard
            icon={Zap}
            iconColor="text-blue-400"
            title={tech.automation.title}
            tools={tech.automation.tools}
          />

          <TechCard
            icon={Code}
            iconColor="text-cyan-400"
            title={tech.web.title}
            tools={tech.web.tools}
          />

          <TechCard
            icon={Database}
            iconColor="text-green-400"
            title={tech.data.title}
            tools={tech.data.tools}
          />
        </div>
      </div>
    </section>
  );
}
