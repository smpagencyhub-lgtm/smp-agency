'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../data/services';

export default function ServicesSection() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${
            visibleSections.has('services') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">WHAT WE</span> <span className="text-red-600">OFFER</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 ${
                visibleSections.has('services')
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
