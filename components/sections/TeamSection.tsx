'use client';

import { Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface TeamSectionProps {
  translations: {
    team: {
      title: string;
      subtitle: string;
      members: Array<{
        name: string;
        role: string;
        expertise: string[];
        bio: string;
      }>;
    };
  };
}

export default function TeamSection({ translations }: TeamSectionProps) {
  const { team } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {team.title}
          </h2>
          <p className="text-xl text-khaki">
            {team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.members.map((member, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full group">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-blue-400 font-semibold mb-4">
                  {member.role}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-2 py-1 bg-primary-blue-500/20 rounded text-xs text-primary-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm mb-4">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-400" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
