"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [-12, -10, -12], // Slight rotation wobble
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatingAnimationReverse = {
  animate: {
    y: [0, -20, 0],
    rotate: [12, 14, 12],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
  },
};

// --- Reusable Story Card Component ---
const StoryCard = ({
  category = "Growth",
  title = "Growth",
  description = "Growth",
  imageSrc = "/images/model1.jpg",
}) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -10 }}
    className="group bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-neutral-800 hover:border-red-900 transition-colors duration-300"
  >
    <div className="h-48 bg-neutral-800 relative overflow-hidden">
      {/* Red Overlay on Hover */}
      <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay z-10" />
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
        {category}
      </span>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
      </div>
      <p className="text-sm text-gray-400 mt-2 line-clamp-3">{description}</p>
    </div>
  </motion.div>
);

// --- Main Component ---
export default function ServiceSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      {/* Decorative Red Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse pointer-events-none" />

      {/* 1. Top Header Bar */}
      <div className="w-full py-12 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white font-light tracking-widest uppercase "
        >
          Start Your
          <motion.span
            whileHover={{ scale: 1.05, skewX: -12 }}
            className="bg-red-600 text-white px-3 ml-3 italic font-bold inline-block transform -skew-x-6 shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md"
          >
            JOURNEY
          </motion.span>
        </motion.h1>
      </div>

      <main className="max-w-6xl  mx-auto px-4 pb-24 space-y-32 relative z-10">
        {/* 2. Latest Stories Section */}
        <motion.section
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* <div className="text-center">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light uppercase tracking-wide">
              Latest 
              <motion.span 
                whileHover={{ scale: 1.05, skewX: -12 }}
                className="bg-red-600 text-white px-3 ml-3  font-serif font-bold inline-block transform -skew-x-6 shadow-[0_0_15px_rgba(220,38,38,0.5)] rounded-md"
              >
                STORIES
              </motion.span>
            </h2>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StoryCard
              category="Growth"
              title="Scaling Creator Income"
              description="Discover the proven strategies management teams use to consistently increase creator earnings while maintaining long term subscriber value."
              imageSrc="/images/allaya2.jpg"
            />
            <StoryCard
              category="Branding"
              title="Building A Marketable Persona"
              description="Strong branding creates emotional connection. Learn how curated personas help creators stand out in crowded markets."
              imageSrc="/images/b-model (8).jpg"
            />
            <StoryCard
              category="Operations"
              title="Systems That Scale"
              description="Automation, scheduling, and team workflows are key to growth. Here's how agencies streamline daily operations."
              imageSrc="/images/g-model (5).jpg"
            />
          </div>
        </motion.section>

        {/* 3. Booking / Calendly Section */}
        <section className="relative py-12 flex justify-center items-center">
          {/* Decorative Background Shapes (Diamonds) - Animated */}
          <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
            {/* Left Diamond */}
            <motion.div
              animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border border-red-900/50 rounded-3xl absolute -translate-x-48 md:-translate-x-80"
            />
            {/* Right Diamond */}
            <motion.div
              animate={{ rotate: [45, 0, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-72 h-72 border border-red-900/50 rounded-3xl absolute translate-x-48 md:translate-x-80"
            />
          </div>

          {/* Decorative Tilted Images - Animated Floating */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute hidden md:block left-0 lg:left-20 top-0 w-48 shadow-2xl rounded-xl overflow-hidden z-0 border border-neutral-800 opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src="/images/b-model (5).jpg"
              alt="Decoration"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            variants={floatingAnimationReverse}
            animate="animate"
            className="absolute hidden md:block right-0 lg:right-20 bottom-0 w-48 shadow-2xl rounded-xl overflow-hidden z-0 border border-neutral-800 opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src="/images/allaya2.jpg"
              alt="Decoration"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Central Booking Card - professional */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-xl w-full z-10"
          >
            <div className="bg-neutral-900/95 border border-neutral-800/80 rounded-2xl px-7 py-7 md:px-9 md:py-8 shadow-[0_18px_60px_rgba(0,0,0,0.7)] text-center">
              <div className="flex flex-col items-center gap-4 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/15 text-red-500 border border-red-500/40 overflow-hidden">
                  <Calendar size={22} strokeWidth={1.6} />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-400">
                    Discovery Call · 20 minutes
                  </p>
                  <h4 className="text-xl md:text-2xl font-semibold text-white">
                    Schedule your creator growth session
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
                    A focused one‑to‑one call with our team to review your
                    current performance, answer questions, and outline clear
                    next steps for growth.
                  </p>
                </div>
              </div>

              <div className="border-t border-neutral-800/80 pt-5 mt-4 flex justify-center">
                <div className="w-full md:w-auto md:min-w-[220px]">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        "https://calendly.com/arthurturner042/30min",
                        "_blank",
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold tracking-wide text-white hover:bg-red-500 transition-colors"
                  >
                    <Calendar size={18} strokeWidth={1.5} />
                    BOOK TODAY
                  </motion.button>
                  <p className="mt-2 text-[11px] text-gray-500 text-center">
                    Opens Calendly in a new tab.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </section>
  );
}
