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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 dark:bg-slate-900/95 bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-400 dark:text-purple-400 text-purple-600" />
            <span className="text-2xl font-bold text-white dark:text-white text-gray-900">A-VH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition">{translations.home}</a>
            <a href="#services" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition">{translations.services}</a>
            <a href="#tech" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition">{translations.tech}</a>
            <a href="#blog" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition">{translations.blog}</a>
            <a href="#contact" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900 transition">{translations.contact}</a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-purple-600/20 hover:bg-purple-600/30 dark:bg-purple-600/20 dark:hover:bg-purple-600/30 bg-purple-200 hover:bg-purple-300 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-purple-700" />
              )}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-purple-600/20 hover:bg-purple-600/30 dark:bg-purple-600/20 dark:hover:bg-purple-600/30 bg-purple-200 hover:bg-purple-300 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-purple-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 dark:bg-slate-900/98 bg-white/98 backdrop-blur-lg border-t border-white/10 dark:border-white/10 border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900">{translations.home}</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900">{translations.services}</a>
            <a href="#tech" className="block px-3 py-2 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900">{translations.tech}</a>
            <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900">{translations.blog}</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900">{translations.contact}</a>
            <button
              onClick={onLanguageToggle}
              className="w-full text-left px-3 py-2 text-purple-400 hover:text-purple-300 dark:text-purple-400 dark:hover:text-purple-300 text-purple-600 hover:text-purple-700"
            >
              {language === 'nl' ? '🇬🇧 English' : '🇳🇱 Nederlands'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
