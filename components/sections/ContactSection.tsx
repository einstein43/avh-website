import { Brain, Globe } from 'lucide-react';
import { Language } from '@/lib/translations';

interface ContactSectionProps {
  language: Language;
  translations: {
    contact: {
      title: string;
      subtitle: string;
      chatbotSoon: string;
      placeholder: string;
    };
  };
}

export default function ContactSection({ language, translations }: ContactSectionProps) {
  const { contact } = translations;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-gray-400">
            {contact.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 md:p-12 rounded-2xl backdrop-blur border border-purple-500/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-4">
              <Brain className="h-10 w-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {contact.chatbotSoon}
            </h3>
            <p className="text-gray-400">
              {contact.placeholder}
            </p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-xl border border-white/10">
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                {language === 'nl'
                  ? 'Neem nu contact op via:'
                  : 'Get in touch now via:'}
              </p>
              <a
                href="mailto:info@a-vh.nl"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
              >
                <Globe className="mr-2 h-5 w-5" />
                info@a-vh.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
