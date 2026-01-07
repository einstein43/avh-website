import { Brain } from 'lucide-react';

interface FooterProps {
  translations: {
    company: string;
    rights: string;
  };
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">A-VH</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2026 {translations.company}. {translations.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
