"use client";

import { motion } from "framer-motion";
import Header2 from "./Header2";
import Button2 from "./Button2";

const heroContent = {
  headline: [
    "Social Media Marketing,",
    "OnlyFans Management &",
    "Agency Matchmaking",
  ],
  body: "Want to monetize your Social Media accounts? Make passive income while freeing up your time? Achieve your financial goals with the time to do what you want to do?",
  cta: "Apply Now!",
};

const slideUp = {
  initial: { y: 56, opacity: 0.25, scale: 0.98 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 14,
      mass: 0.7,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const heroViewport = { once: false, amount: 0.15, margin: "-20px" };

export default function HeroSection2() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed background image - instant, no fade */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/model2.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <Header2 />

      {/* Main hero content - left aligned with staggered animation */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="max-w-2xl"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={heroViewport}
          >
            {/* Headline - staggered spring slide-up */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-6 overflow-hidden">
              {heroContent.headline.map((line, i) => (
                <motion.span key={i} className="block" variants={slideUp}>
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Body text */}
            <motion.p
              className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl"
              variants={slideUp}
            >
              {heroContent.body}
            </motion.p>

            {/* CTA - spring slide + scale pop */}
            <motion.div
              variants={{
                initial: { y: 56, opacity: 0.25, scale: 0.96 },
                animate: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                    mass: 0.6,
                  },
                },
              }}
            >
              <Button2
                href="#apply"
                variant="primary"
                size="lg"
                className="shadow-lg"
              >
                {heroContent.cta}
              </Button2>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
