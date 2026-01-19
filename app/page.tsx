'use client';

import { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import { ThemeProvider } from '@/lib/contexts/ThemeContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TechnologySection from '@/components/sections/TechnologySection';
import StatsSection from '@/components/sections/StatsSection';
import IntegrationPartnersSection from '@/components/sections/IntegrationPartnersSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TeamSection from '@/components/sections/TeamSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import N8nChatbot from '@/components/widgets/N8nChatbot';
import ROICalculator from '@/components/widgets/ROICalculator';
import NewsletterSignup from '@/components/widgets/NewsletterSignup';

export default function Home() {
  const [language, setLanguage] = useState<Language>('nl');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-primary-blue-50 to-tertiary-teal-50 dark:from-slate-950 dark:via-primary-blue-900 dark:to-slate-900 transition-colors duration-300">
        <Navigation 
        language={language} 
        onLanguageToggle={toggleLanguage}
        translations={t.nav}
      />

      <HeroSection translations={t} />

      <ProblemSolutionSection translations={t} />

      <ServicesSection translations={t} />

      <WhyChooseUsSection translations={t} />

      <IndustriesSection translations={t} />

      <ProcessSection translations={t} />

      <StatsSection translations={t} />

      <TechnologySection translations={t} />

      <IntegrationPartnersSection translations={t} />

      <CaseStudiesSection translations={t} />

      <TestimonialsSection translations={t} />

      <TeamSection translations={t} />

      <ROICalculator translations={t} />

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
    </ThemeProvider>
  );
}
