'use client';

import { useState } from 'react';
import { Mail, User, Building, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Language } from '@/lib/translations';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ContactSectionProps {
  language: Language;
  translations: {
    contact: {
      title: string;
      subtitle: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
      submitting: string;
      successMessage: string;
      errorMessage: string;
    };
  };
}

export default function ContactSection({ language, translations }: ContactSectionProps) {
  const { contact } = translations;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'nl' ? 'Naam is verplicht' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'nl' ? 'E-mail is verplicht' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'nl' ? 'Ongeldig e-mailadres' : 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'nl' ? 'Bericht is verplicht' : 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      // TODO: Replace with actual n8n webhook URL for contact form
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={elementRef} className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-gray-400">
            {contact.subtitle}
          </p>
        </div>

        <div className={`bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 md:p-12 rounded-2xl backdrop-blur border border-purple-500/20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                {contact.successMessage}
              </h3>
              <p className="text-gray-400 mb-6">
                {language === 'nl' 
                  ? 'We nemen zo snel mogelijk contact met je op!'
                  : "We'll get back to you as soon as possible!"}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition"
              >
                {language === 'nl' ? 'Nieuw bericht' : 'Send another message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {contact.namePlaceholder}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition`}
                  placeholder={contact.namePlaceholder}
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email and Company in a grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {contact.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-900/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition`}
                    placeholder={contact.emailPlaceholder}
                    disabled={status === 'loading'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    {contact.companyPlaceholder} {language === 'nl' ? '(optioneel)' : '(optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                    placeholder={contact.companyPlaceholder}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {contact.messagePlaceholder}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={6}
                  className={`w-full px-4 py-3 bg-slate-900/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition resize-none`}
                  placeholder={contact.messagePlaceholder}
                  disabled={status === 'loading'}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {contact.submitting}
                  </>
                ) : (
                  <>
                    {contact.submitButton}
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <AlertCircle className="h-5 w-5" />
                  {contact.errorMessage}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
