'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  translations: {
    newsletter: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
      success: string;
      error: string;
    };
  };
}

export default function NewsletterSignup({ translations }: NewsletterSignupProps) {
  const { newsletter } = translations;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // TODO: Replace with actual n8n webhook URL for newsletter signups
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage(newsletter.success);
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage(newsletter.error);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur p-8 rounded-2xl border border-purple-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
          <Mail className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{newsletter.title}</h3>
          <p className="text-gray-400 text-sm">{newsletter.subtitle}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={newsletter.placeholder}
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : status === 'success' ? (
            <>
              <CheckCircle className="h-5 w-5" />
              Subscribed!
            </>
          ) : (
            <>
              {newsletter.button}
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {status === 'error' && (
        <div className="mt-3 flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          {message}
        </div>
      )}
      {status === 'success' && (
        <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
          <CheckCircle className="h-4 w-4" />
          {message}
        </div>
      )}
    </div>
  );
}
