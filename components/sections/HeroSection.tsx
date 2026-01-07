import { Sparkles, ArrowRight, ChevronRight, Brain, Zap, BarChart3, Cpu } from 'lucide-react';
import IconCard from '@/components/ui/IconCard';

interface HeroSectionProps {
  translations: {
    hero: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      cta: string;
      ctaSecondary: string;
    };
  };
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const { hero } = translations;

  const iconItems = [
    { icon: Brain, label: 'AI' },
    { icon: Zap, label: 'Automation' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Cpu, label: 'Integration' },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">AI Software Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            {hero.title}
            <br />
            <span className="gradient-text">{hero.titleHighlight}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-slide-up">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
            >
              {hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
            >
              {hero.ctaSecondary}
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Floating icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {iconItems.map((item, idx) => (
            <IconCard
              key={idx}
              icon={item.icon}
              label={item.label}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
