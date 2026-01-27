'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const brands = ['ESSENCE', 'Forbes', 'InStyle', 'VARIETY', 'CARLIN'];

export default function AboutSection() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-12 lg:mb-20">
          {/* Left Text Block */}
          <div className="lg:pt-8 relative">
            {/* Subtle Oval Shape */}
            <div className="absolute -top-4 -left-4 w-16 h-20 border-2 border-red-600/20 rounded-full opacity-50"></div>
            
            <div className={`relative z-10 ${
              visibleSections.has('about') ? 'opacity-100' : 'opacity-0'
            }`}>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-serif">
                At FansHub, we&apos;re not just another management agency. We&apos;re a powerhouse full-service team delivering cutting-edge social media management, seamless brand building, and revenue optimization. Our mission is to elevate your content, supercharge your growth, and unlock your full potential.
              </p>
            </div>
          </div>

          {/* Central Image */}
          <div className="flex justify-center items-start lg:-mt-8">
            <div className={`relative w-full max-w-sm lg:max-w-md ${
              visibleSections.has('about') ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl shadow-red-600/20">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-48 sm:w-40 sm:h-60 bg-gray-600 rounded-lg mb-4 mx-auto"></div>
                    <span className="text-gray-500 text-sm">About Us Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:pt-8 relative">
            <div className={`${
              visibleSections.has('about') ? 'opacity-100' : 'opacity-0'
            }`}>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-serif mb-6">
                We combine real personal support with experienced chat and marketing teams, deep niche understanding, and full operational guidance. Beyond traditional management, we operate as a true partner in your success journey.
              </p>
              
              {/* Learn More CTA */}
              <a
                href="#services"
                className="group inline-flex items-center space-x-3 text-red-600 hover:text-red-500"
              >
                <div className="h-px w-8 bg-red-600 group-hover:w-16 group-hover:bg-red-500"></div>
                <span className="font-serif text-sm sm:text-base lg:text-lg font-semibold tracking-wider underline decoration-red-600 underline-offset-4">
                  LEARN MORE
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Large "ABOUT US" Title - Overlapping the image */}
        <div className={`relative z-10 mb-12 lg:mb-16 ${
          visibleSections.has('about') ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif text-red-600 leading-none tracking-tight text-center lg:-mt-16">
            ABOUT US
          </h2>
        </div>

        {/* Brand Logos Row */}
        <div className={`border-t border-gray-800 pt-8 lg:pt-12 ${
          visibleSections.has('about') ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-red-600/60 hover:text-red-600 font-serif text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
