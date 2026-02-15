"use client";

import { Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../final-design/SectionTitle";

// --- Animation Variants ---
const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [-12, -10, -12],
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

// --- Main Component ---
export default function CalendlySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background shapes – SVG decor, fully inside so they don’t affect layout */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Left Side - Four circles */}
        <motion.div
          className="absolute top-[20%] left-4 md:left-8 w-40 h-40 md:w-48 md:h-48"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <g>
              <circle cx="120" cy="120" r="120" />
              <circle cx="120" cy="360" r="120" />
              <circle cx="360" cy="120" r="120" />
              <circle cx="360" cy="360" r="120" />
            </g>
          </svg>
        </motion.div>
        {/* Right Side - Overlapping circles / Venn shape */}
        <motion.div
          className="absolute bottom-[20%] right-4 md:right-8 w-40 h-40 md:w-48 md:h-48"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M450.9 169.7a99.4 99.4 0 0 0-140.6 0 99.4 99.4 0 1 0-140.6 0 99.4 99.4 0 1 0 0 140.6 99.4 99.4 0 1 0 140.6 0 99.4 99.4 0 0 0 140.6-140.6ZM169.7 310.3l140.6-140.6" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 px-6">
        {/* Booking / Calendly Section */}
        <section className="relative py-12 flex justify-center items-center">
          {/* Decorative Images - Left Side */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute hidden md:block left-0 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 w-[280px] h-[420px] shadow-2xl rounded-xl overflow-hidden z-0 border border-gray-200/50 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/g-model (5).jpg"
              alt="Decoration"
              fill
              sizes="280px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Decorative Images - Right Side */}
          <motion.div
            variants={floatingAnimationReverse}
            animate="animate"
            className="absolute hidden md:block right-0 lg:right-8 xl:right-12 bottom-1/2 translate-y-1/2 w-[280px] h-[420px] shadow-2xl rounded-xl overflow-hidden z-0 border border-gray-200/50 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/starmodel/IMG_1982.jpg"
              alt="Decoration"
              fill
              sizes="280px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Central Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative  max-w-3xl w-full z-10"
          >
            <SectionTitle
              eyebrow="Get started"
              title="Schedule Your Strategy Call"
            />

            <div className="bg-white border border-gray-200/90 rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-xl text-center mt-12">
              <div className="flex flex-col items-center gap-6 mb-8">
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-theme-brand/10 text-theme-brand border-2 border-theme-brand/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar size={28} strokeWidth={1.5} />
                </motion.div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-theme-brand">
                    Strategy call · 30 minutes
                  </p>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Schedule your creator growth session
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed max-w-lg mx-auto mt-2">
                    A focused one‑to‑one call with our team to review your
                    current performance, answer questions, and outline clear
                    next steps for growth.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                {/* Calendly Logo */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    {/* Calendly blue: #006BFF */}
                    <circle cx="12" cy="12" r="10" fill="#006BFF" />
                    <path
                      d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="#fff"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-500">
                    Powered by
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{ color: "#006BFF" }}
                  >
                    Calendly
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    window.open(
                      "https://calendly.com/arthurturner042/30min",
                      "_blank",
                    )
                  }
                  className="group relative inline-flex items-center gap-3 bg-theme-brand hover:bg-theme-brand-hover text-white font-bold text-sm md:text-base tracking-wider px-8 md:px-10 py-4 md:py-5 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar size={20} strokeWidth={2} />
                  <span className="relative z-10">Book Today on Calendly</span>
                  <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                    initial={false}
                  />
                </motion.button>
                <p className="mt-4 text-xs text-gray-500">
                  Opens Calendly in a new tab
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
