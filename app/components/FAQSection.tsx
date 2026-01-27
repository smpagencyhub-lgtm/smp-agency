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
          className={`text-4xl sm:text-5xl font-bold text-center mb-16 ${
            visibleSections.has('faq') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">FAQ&apos;S</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-red-600 ${
                visibleSections.has('faq')
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:text-red-600"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span
                  className={`text-red-600 text-2xl ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
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
