'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface TestimonialsSectionProps {
  translations: {
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        company: string;
        role: string;
        content: string;
        rating: number;
      }>;
    };
  };
}

export default function TestimonialsSection({ translations }: TestimonialsSectionProps) {
  const { testimonials } = translations;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const current = testimonials.items[currentIndex];

  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
<div className="absolute top-0 left-0 w-64 h-64 bg-sunflower/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-linen mb-4">
            {testimonials.title}
          </h2>
          <p className="text-xl text-khaki">
            {testimonials.subtitle}
          </p>
        </div>

        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Quote icon */}
          <Quote className="absolute -top-6 -left-4 h-16 w-16 text-purple-500/20 transform -rotate-12" />
          
          {/* Testimonial card */}
          <div 
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur p-8 md:p-12 rounded-2xl border border-purple-500/20 shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < current.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed italic">
              "{current.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {current.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">{current.name}</div>
                <div className="text-gray-400">{current.role}</div>
                <div className="text-purple-400 text-sm">{current.company}</div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
