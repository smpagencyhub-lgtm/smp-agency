'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  const carouselImages = [
    '/images/left-model.gif',
    '/images/center-model.gif',
    '/images/right-model.gif',
    '/images/model1.jpg',
    '/images/model2.jpg',
    '/images/model3.jpg',
    '/images/model4.jpg',
    '/images/model5.jpg',
    '/images/model6.jpg',
    '/images/model7.jpg',
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">

      {/* =====================================================
          🔥 WHO WE ARE — SECTION TITLE
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            className="text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Who
          </motion.span>{' '}
          <motion.span
            className="text-red-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We Are
          </motion.span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 w-24 bg-red-600 mx-auto origin-center"
        />
      </motion.div>

      {/* — HOVER-EXPAND SLIDER */}
      <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center w-full h-[50vh] px-4 overflow-x-auto scrollbar-hide">

        {carouselImages.map((src, index) => (
          <motion.div
            key={index}
            className={`
              h-full rounded-lg cursor-pointer overflow-hidden relative
              transition-all duration-500 ease-in-out
              ${hoveredIndex === index ? 'w-[30%]' : 'w-[10%]'}
              min-w-[40px] flex-shrink-0
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: hoveredIndex === index ? 1.05 : 1.02 }}
          >
            <img
              src={src}
              alt={`GIF model ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {/* Optional overlay for expanded panel */}
            {hoveredIndex === index && (
              <div className="absolute bottom-4 left-4 text-white">
                {/* Add optional text/title for expanded panel here */}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          We craft viral content, build unstoppable brands, and skyrocket your growth. Let us handle the grind while you dominate your space, grow your influence, and turn your empire dreams into reality.
        </p>
      </motion.div>
    </section>
  );
}
