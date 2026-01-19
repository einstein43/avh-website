'use client';

import { Sparkles, ArrowRight, ChevronRight, Brain, Zap, BarChart3, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';
import IconCard from '@/components/ui/IconCard';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

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
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const iconItems = [
    { icon: Brain, label: 'AI' },
    { icon: Zap, label: 'Automation' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Cpu, label: 'Integration' },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradients with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-primary-blue-600/20 via-transparent to-transparent animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-blue-600/10 rounded-full blur-3xl animate-float"
        style={{
          animationDelay: '1.5s',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      <div ref={elementRef} className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-accent-orange/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent-orange" />
            <span className="text-sm text-accent-orange-light">AI Software Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            {hero.title}
            <br />
            <span className="gradient-text">{hero.titleHighlight}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-khaki mb-10 max-w-3xl mx-auto animate-slide-up">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-orange to-primary-blue-600 text-white rounded-lg font-semibold hover:from-accent-orange-dark hover:to-primary-blue-600-dark transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sunflower/50 relative overflow-hidden"
            >
              <span className="relative z-10">{hero.cta}</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange-dark to-primary-blue-600-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center px-8 py-4 bg-linen/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-linen/20 transition-all duration-300 border border-khaki/20 hover:border-sunflower/40 hover:shadow-xl transform hover:scale-105"
            >
              {hero.ctaSecondary}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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
