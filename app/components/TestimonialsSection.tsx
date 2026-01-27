'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  const visibleSections = useScrollAnimation();

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-4 transition-all duration-1000 ${
            visibleSections.has('testimonials') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">BENEFITS</span>{' '}
          <span className="text-red-600">OF WORKING WITH FANSHUB</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-all duration-600 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20 ${
                visibleSections.has('testimonials')
                  ? 'animate-fade-in-up opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-red-600 text-2xl font-bold mb-2">{testimonial.name}</div>
              <p className="text-gray-300 mb-4 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="text-gray-500 text-sm">{testimonial.handle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
