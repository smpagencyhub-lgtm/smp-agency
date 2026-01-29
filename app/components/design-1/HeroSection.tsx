'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  // Array of images for the carousel - using existing images
  const carouselImages = [
    '/images/left-model.gif',
    '/images/center-model.gif',
    '/images/right-model.gif',
    '/images/left-model.gif',
    '/images/center-model.gif',
    '/images/right-model.gif',
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black w-full">
      {/* Professional Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full py-16 lg:py-24 flex flex-col items-center justify-center min-h-[75vh]">
        {/* Horizontal Image Carousel - Full Width */}
        <div className="w-full mb-12 lg:mb-16 overflow-hidden px-0">
          <div className="flex animate-scroll-horizontal gap-4 sm:gap-6 lg:gap-8">
            {/* Multiple copies for seamless infinite loop */}
            {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((src, index) => (
              <div
                key={index}
                className="shrink-0 w-44 h-60 sm:w-52 sm:h-72 md:w-60 md:h-80 lg:w-72 lg:h-96"
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl shadow-red-600/20 border border-red-600/20 hover:border-red-600/40 transition-all duration-500">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Marquee Text - Smaller Size */}
        <div className="w-full overflow-hidden mb-12 lg:mb-16 relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-tight mx-6 sm:mx-8 inline-block">
              CREATORS • GROWTH • SUCCESS • EMPIRE •
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-tight mx-6 sm:mx-8 inline-block">
              CREATORS • GROWTH • SUCCESS • EMPIRE •
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-tight mx-6 sm:mx-8 inline-block">
              CREATORS • GROWTH • SUCCESS • EMPIRE •
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-tight mx-6 sm:mx-8 inline-block">
              CREATORS • GROWTH • SUCCESS • EMPIRE •
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1] // Custom easing for smooth professional feel
          }}
          className="flex flex-col items-center space-y-6 z-20"
        >
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg uppercase tracking-wider rounded-md transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40 active:translate-y-0"
          >
            SAVE MY SPOT
            <span className="absolute inset-0 rounded-md bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
