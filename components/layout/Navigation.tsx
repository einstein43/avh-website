'use client';

import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Language } from '@/lib/translations';

interface NavigationProps {
  language: Language;
  onLanguageToggle: () => void;
  translations: {
    home: string;
    services: string;
    tech: string;
    blog: string;
    contact: string;
  };
}

export default function Navigation({ language, onLanguageToggle, translations }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
            <a href="#home" className="text-gray-300 hover:text-white transition">{translations.home}</a>
            <a href="#services" className="text-gray-300 hover:text-white transition">{translations.services}</a>
            <a href="#tech" className="text-gray-300 hover:text-white transition">{translations.tech}</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition">{translations.blog}</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">{translations.contact}</a>
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
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
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">{translations.home}</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">{translations.services}</a>
            <a href="#tech" className="block px-3 py-2 text-gray-300 hover:text-white">{translations.tech}</a>
            <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white">{translations.blog}</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">{translations.contact}</a>
            <button
              onClick={onLanguageToggle}
              className="w-full text-left px-3 py-2 text-purple-400 hover:text-purple-300"
            >
              {language === 'nl' ? '🇬🇧 English' : '🇳🇱 Nederlands'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
