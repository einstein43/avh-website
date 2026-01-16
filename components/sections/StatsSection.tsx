'use client';

import { useEffect, useState } from 'react';
import { Target, Users, Award, Code2 } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface StatsSectionProps {
  translations: {
    stats: {
      title: string;
      subtitle: string;
      projects: string;
      experience: string;
      satisfaction: string;
      technologies: string;
    };
  };
}

interface StatItemProps {
  icon: React.ComponentType<any>;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  isVisible: boolean;
}

function StatItem({ icon: Icon, value, label, suffix = '', delay, isVisible }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      className={`text-center p-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sunflower/20 to-indigo/20 rounded-full mb-4">
        <Icon className="h-8 w-8 text-sunflower" />
      </div>
      <div className="text-5xl font-bold text-linen mb-2">
        {count}{suffix}
      </div>
      <div className="text-khaki text-lg">{label}</div>
    </div>
  );
}

export default function StatsSection({ translations }: StatsSectionProps) {
  const { stats } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const statsData = [
    { icon: Target, value: 50, label: stats.projects, suffix: '+' },
    { icon: Award, value: 5, label: stats.experience, suffix: '+' },
    { icon: Users, value: 98, label: stats.satisfaction, suffix: '%' },
    { icon: Code2, value: 20, label: stats.technologies, suffix: '+' },
  ];

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-linen mb-4">
            {stats.title}
          </h2>
          <p className="text-xl text-khaki">
            {stats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <StatItem
              key={idx}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={idx * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
