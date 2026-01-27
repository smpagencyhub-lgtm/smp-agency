'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { stats } from '../data/stats';

export default function StatsSection() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-16 ${
            visibleSections.has('stats') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          FansHub <span className="text-red-600">At A Glance</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center cursor-default ${
                visibleSections.has('stats')
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 mb-2 hover:text-red-500">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base hover:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        <div
          className={`text-center mt-12 text-gray-400 ${
            visibleSections.has('stats') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-lg">Locations: UK | USA | POLAND</p>
        </div>
      </div>
    </section>
  );
}
