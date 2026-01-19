'use client';

import { Brain } from 'lucide-react';
import NewsletterSignup from '@/components/widgets/NewsletterSignup';
import { translations } from '@/lib/translations';

interface FooterProps {
  translations: {
    company: string;
    rights: string;
  };
}

export default function Footer({ translations: footerTranslations }: FooterProps) {
  // Get newsletter translations - use English by default, can be made dynamic later
  const newsletterTranslations = translations.en.newsletter;

  return (
    <footer className="py-12 px-4 border-t border-khaki/10 bg-carbon/50">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12">
          <NewsletterSignup translations={{ newsletter: newsletterTranslations }} />
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col justify-between items-center pt-8 border-t border-khaki/10 gap-4" style={{ flexDirection: 'column' }}>
          <style jsx>{`
            @media (min-width: 768px) {
              .footer-content {
                flex-direction: row;
              }
            }
          `}</style>
          <div className="footer-content flex items-center space-x-2 flex-col">
            <Brain className="h-6 w-6 text-accent-orange" />
            <span className="text-xl font-bold text-white">A-VH</span>
          </div>
          <div className="text-khaki text-sm">
            © 2026 {footerTranslations.company}. {footerTranslations.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
