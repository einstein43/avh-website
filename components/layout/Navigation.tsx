'use client';

import { useState, useEffect } from 'react';
import { Brain, Menu, X, Sun, Moon } from 'lucide-react';
import { Language } from '@/lib/translations';
import { useTheme } from '@/lib/contexts/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 ${
      scrolled ? 'bg-carbon backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-accent-orange" />
            <span className="text-2xl font-bold text-white">A-VH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden-mobile flex items-center space-x-8">
            <a href="#home" className="text-khaki hover:text-white transition">{translations.home}</a>
            <a href="#services" className="text-khaki hover:text-white transition">{translations.services}</a>
            <a href="#tech" className="text-khaki hover:text-white transition">{translations.tech}</a>
            <a href="#blog" className="text-khaki hover:text-white transition">{translations.blog}</a>
            <a href="#contact" className="text-khaki hover:text-white transition">{translations.contact}</a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-accent-orange\/20 hover:bg-accent-orange\/30 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent-orange" />
              ) : (
                <Moon className="h-5 w-5 text-primary-blue-600" />
              )}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1 rounded-md bg-primary-blue-600 hover:bg-primary-blue-light text-white text-sm font-medium transition"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="hidden-desktop flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-accent-orange\/20 hover:bg-accent-orange\/30 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent-orange" />
              ) : (
                <Moon className="h-5 w-5 text-primary-blue-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-khaki hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="hidden-desktop bg-carbon backdrop-blur border-t border-khaki\/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-khaki hover:text-white">{translations.home}</a>
            <a href="#services" className="block px-3 py-2 text-khaki hover:text-white">{translations.services}</a>
            <a href="#tech" className="block px-3 py-2 text-khaki hover:text-white">{translations.tech}</a>
            <a href="#blog" className="block px-3 py-2 text-khaki hover:text-white">{translations.blog}</a>
            <a href="#contact" className="block px-3 py-2 text-khaki hover:text-white">{translations.contact}</a>
            <button
              onClick={onLanguageToggle}
              className="w-full text-left px-3 py-2 text-accent-orange hover:text-accent-orange-light"
            >
              {language === 'nl' ? '🇬🇧 English' : '🇳🇱 Nederlands'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
