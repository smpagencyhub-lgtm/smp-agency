'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const visibleSections = useScrollAnimation();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('faq') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">FAQ&apos;S</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-600 hover:border-red-600 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/10 ${
                visibleSections.has('faq')
                  ? 'animate-fade-in-up opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:text-red-600 transition-colors duration-300"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span
                  className={`text-red-600 text-2xl transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5 text-gray-300 leading-relaxed animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
