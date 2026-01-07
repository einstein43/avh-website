'use client';

import { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechnologySection from '@/components/sections/TechnologySection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import N8nChatbot from '@/components/widgets/N8nChatbot';

export default function Home() {
  const [language, setLanguage] = useState<Language>('nl');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation 
        language={language} 
        onLanguageToggle={toggleLanguage}
        translations={t.nav}
      />

      <HeroSection translations={t} />

      <ServicesSection translations={t} />

      <TechnologySection translations={t} />

      <BlogSection language={language} translations={t} />

      <ContactSection language={language} translations={t} />

      <Footer translations={t.footer} />

      {/* N8n Chatbot Widget - Add your webhook URL here */}
      <N8nChatbot 
        webhookUrl="https://mwdev-01.app.n8n.cloud/webhook/078c3bf7-d291-44ee-86c4-5f642802e130/chat"
        botName="A-VH Assistant"
        primaryColor="purple"
        position="bottom-right"
      />
    </div>
  );
}
