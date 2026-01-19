import { Globe } from 'lucide-react';
import { Language } from '@/lib/translations';

interface BlogSectionProps {
  language: Language;
  translations: {
    blog: {
      title: string;
      subtitle: string;
      comingSoon: string;
    };
  };
}

export default function BlogSection({ language, translations }: BlogSectionProps) {
  const { blog } = translations;

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {blog.title}
          </h2>
          <p className="text-xl text-gray-400">
            {blog.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-blue-900/30 to-blue-900/30 p-12 rounded-2xl backdrop-blur border border-purple-500/20 text-center">
          <Globe className="h-16 w-16 text-primary-blue-400 mx-auto mb-6 animate-float" />
          <p className="text-2xl text-gray-300 mb-4">{blog.comingSoon}</p>
          <p className="text-gray-400">
            {language === 'nl' 
              ? 'Binnenkort delen we hier onze kennis over AI, automation en innovatie.'
              : 'Soon we\'ll share our knowledge about AI, automation, and innovation here.'}
          </p>
        </div>
      </div>
    </section>
  );
}
