'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../data/services';

export default function ServicesSection() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-4 transition-all duration-1000 ${
            visibleSections.has('services') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">WHAT WE</span> <span className="text-red-600">OFFER</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition-all duration-600 transform hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-2 ${
                visibleSections.has('services')
                  ? 'animate-fade-in-up opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl mb-4 animate-icon-bounce">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
