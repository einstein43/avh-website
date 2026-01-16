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
      scrolled ? 'bg-carbon/95 dark:bg-carbon/95 bg-linen/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-sunflower dark:text-sunflower text-indigo" />
            <span className="text-2xl font-bold text-linen dark:text-linen text-carbon">A-VH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen text-carbon-light hover:text-carbon transition">{translations.home}</a>
            <a href="#services" className="text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen text-carbon-light hover:text-carbon transition">{translations.services}</a>
            <a href="#tech" className="text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen text-carbon-light hover:text-carbon transition">{translations.tech}</a>
            <a href="#blog" className="text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen text-carbon-light hover:text-carbon transition">{translations.blog}</a>
            <a href="#contact" className="text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen text-carbon-light hover:text-carbon transition">{translations.contact}</a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-sunflower/20 hover:bg-sunflower/30 dark:bg-sunflower/20 dark:hover:bg-sunflower/30 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-sunflower" />
              ) : (
                <Moon className="h-5 w-5 text-indigo" />
              )}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1 rounded-md bg-indigo hover:bg-indigo-dark dark:bg-sunflower dark:hover:bg-sunflower-dark text-linen text-sm font-medium transition"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-sunflower/20 hover:bg-sunflower/30 dark:bg-sunflower/20 dark:hover:bg-sunflower/30 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-sunflower" />
              ) : (
                <Moon className="h-5 w-5 text-indigo" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-carbon/98 dark:bg-carbon/98 bg-linen/98 backdrop-blur-lg border-t border-khaki/20 dark:border-khaki/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen">{translations.home}</a>
            <a href="#services" className="block px-3 py-2 text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen">{translations.services}</a>
            <a href="#tech" className="block px-3 py-2 text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen">{translations.tech}</a>
            <a href="#blog" className="block px-3 py-2 text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen">{translations.blog}</a>
            <a href="#contact" className="block px-3 py-2 text-khaki hover:text-linen dark:text-khaki dark:hover:text-linen">{translations.contact}</a>
            <button
              onClick={onLanguageToggle}
              className="w-full text-left px-3 py-2 text-sunflower hover:text-sunflower-light dark:text-sunflower dark:hover:text-sunflower-light"
            >
              {language === 'nl' ? '🇬🇧 English' : '🇳🇱 Nederlands'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
