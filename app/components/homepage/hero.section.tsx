"use client";

import { motion } from "framer-motion";

type HeroSectionProps = {
  onStartJourneyClick?: () => void;
};

const HeroSection = ({ onStartJourneyClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden font-sans flex flex-col justify-center bg-black">
      {/* Video background — solid bg shows immediately while video loads */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ background: "#000" }}
        >
          <source src="/Videos/hero-background-vid.mov" type="video/mp4" />
          <source
            src="/Videos/hero-background-vid.mov"
            type="video/quicktime"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* MAIN CONTENT – professional layout + staggered animations */}
      <div className="relative z-10 max-w-[1920px] mx-auto w-full px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col items-center gap-4 max-w-4xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Elite creator management
            </motion.p>

            {/* Headline – line-by-line reveal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight uppercase leading-[1.1] overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Unlock Your
              </motion.span>
              <motion.span
                className="block mt-1 text-red-400"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Full Potential
              </motion.span>
            </h1>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="origin-center h-px w-12 bg-red-500 mb-4"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28, ease: "easeOut" }}
              className="text-gray-300 text-base md:text-lg max-w-2xl font-medium tracking-wide leading-relaxed mb-6"
            >
              The elite agency for creators who want to scale revenue, build a
              brand, and own their future.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.36, ease: "easeOut" }}
              className="pt-4"
            >
              <motion.button
                type="button"
                onClick={onStartJourneyClick}
                className="bg-theme-brand hover:bg-theme-brand-hover text-white text-base md:text-lg font-bold py-3.5 px-8 rounded-full transition-colors duration-300 shadow-lg border-2 border-transparent hover:border-red-400/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                START YOUR JOURNEY
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
          aria-hidden
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
