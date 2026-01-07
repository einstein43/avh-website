'use client';

import { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Globe, 
  Code, 
  Database,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Check,
  Sparkles,
  Settings,
  BarChart3,
  Cpu
} from 'lucide-react';
import { translations, Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('nl');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">A-VH</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">{t.nav.home}</a>
              <a href="#services" className="text-gray-300 hover:text-white transition">{t.nav.services}</a>
              <a href="#tech" className="text-gray-300 hover:text-white transition">{t.nav.tech}</a>
              <a href="#blog" className="text-gray-300 hover:text-white transition">{t.nav.blog}</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">{t.nav.contact}</a>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition"
              >
                {language === 'nl' ? 'EN' : 'NL'}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">{t.nav.home}</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">{t.nav.services}</a>
              <a href="#tech" className="block px-3 py-2 text-gray-300 hover:text-white">{t.nav.tech}</a>
              <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white">{t.nav.blog}</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">{t.nav.contact}</a>
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-2 text-purple-400 hover:text-purple-300"
              >
                {language === 'nl' ? '🇬🇧 English' : '🇳🇱 Nederlands'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI Software Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              {t.hero.title}
              <br />
              <span className="gradient-text">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-slide-up">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
              >
                {t.hero.ctaSecondary}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Floating icons */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Brain, label: 'AI' },
              { icon: Zap, label: 'Automation' },
              { icon: BarChart3, label: 'Analytics' },
              { icon: Cpu, label: 'Integration' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur rounded-xl hover:bg-white/10 transition card-hover"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <item.icon className="h-10 w-10 text-purple-400 mb-3" />
                <span className="text-gray-300 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-400">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sports */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl backdrop-blur border border-purple-500/20 card-hover">
              <div className="bg-purple-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.services.sports.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {t.services.sports.description}
              </p>
              <ul className="space-y-2">
                {t.services.sports.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <Check className="h-5 w-5 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Finance */}
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl backdrop-blur border border-blue-500/20 card-hover">
              <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.services.finance.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {t.services.finance.description}
              </p>
              <ul className="space-y-2">
                {t.services.finance.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <Check className="h-5 w-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Production */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-teal-900/50 p-8 rounded-2xl backdrop-blur border border-cyan-500/20 card-hover">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.services.production.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {t.services.production.description}
              </p>
              <ul className="space-y-2">
                {t.services.production.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <Check className="h-5 w-5 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.tech.title}
            </h2>
            <p className="text-xl text-gray-400">
              {t.tech.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI & ML */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 card-hover">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-purple-400 mr-2" />
                <h3 className="text-xl font-bold text-white">{t.tech.ai.title}</h3>
              </div>
              <div className="space-y-2">
                {t.tech.ai.tools.map((tool, idx) => (
                  <div key={idx} className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Automation */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 card-hover">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-white">{t.tech.automation.title}</h3>
              </div>
              <div className="space-y-2">
                {t.tech.automation.tools.map((tool, idx) => (
                  <div key={idx} className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Web Dev */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 card-hover">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-bold text-white">{t.tech.web.title}</h3>
              </div>
              <div className="space-y-2">
                {t.tech.web.tools.map((tool, idx) => (
                  <div key={idx} className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 card-hover">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-green-400 mr-2" />
                <h3 className="text-xl font-bold text-white">{t.tech.data.title}</h3>
              </div>
              <div className="space-y-2">
                {t.tech.data.tools.map((tool, idx) => (
                  <div key={idx} className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.blog.title}
            </h2>
            <p className="text-xl text-gray-400">
              {t.blog.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-12 rounded-2xl backdrop-blur border border-purple-500/20 text-center">
            <Globe className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-float" />
            <p className="text-2xl text-gray-300 mb-4">{t.blog.comingSoon}</p>
            <p className="text-gray-400">
              {language === 'nl' 
                ? 'Binnenkort delen we hier onze kennis over AI, automation en innovatie.'
                : 'Soon we\'ll share our knowledge about AI, automation, and innovation here.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-400">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 md:p-12 rounded-2xl backdrop-blur border border-purple-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-4">
                <Brain className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.contact.chatbotSoon}
              </h3>
              <p className="text-gray-400">
                {t.contact.placeholder}
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

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">A-VH</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2026 {t.footer.company}. {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
