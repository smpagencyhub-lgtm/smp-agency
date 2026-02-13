"use client";

import React, { useEffect, useState, useRef } from "react";
import { useThrottledCallback } from "use-debounce";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Globe, DollarSign, Eye, MapPin } from "lucide-react";
import SectionTitle from "../final-design/SectionTitle";

// --- Helper Component for Counting Numbers ---
type CounterProps = {
  value: number;
  suffix?: string;
};
const Counter = ({ value, suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = useState(0);

  const setDisplayThrottled = useThrottledCallback((latest: number) => {
    setDisplayValue(Math.floor(latest));
  }, 50);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayThrottled(latest);
    });
  }, [springValue, setDisplayThrottled]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

// --- Stats Data ---
const stats = [
  {
    id: 1,
    label: "Creators",
    value: 80,
    suffix: "+",
    description: "Globally",
    icon: Users,
  },
  {
    id: 2,
    label: "Team Members",
    value: 60,
    suffix: "+",
    description: "Worldwide",
    icon: Globe,
  },
  {
    id: 3,
    label: "Revenue Generated",
    value: 90,
    suffix: "M",
    description: "Million USD",
    icon: DollarSign,
  },
  {
    id: 4,
    label: "Total Views",
    value: 5,
    suffix: "B+",
    description: "Billion Views",
    icon: Eye,
  },
  {
    id: 5,
    label: "Global Locations",
    value: 3,
    suffix: "",
    description: "UK • USA • POLAND",
    icon: MapPin,
  },
];

// --- Marquee Data ---
// COMMENTED OUT - Marquee carousels are disabled
// const words = [
//   "GROWTH",
//   "SCALE",
//   "REVENUE",
//   "MANAGEMENT",
//   "SMP",
//   "DOMINANCE",
//   "INNOVATION",
// ];
// const repeatedWords = [...words, ...words, ...words]; // Triple it for smooth looping

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StatsSection2() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background shapes – SVG decor, fully inside so they don’t affect layout */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Left Side - Bowtie / butterfly shape */}
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
            <path d="M320 240 206.6 70a56 56 0 0 0-93.2 0L0 240h160l113.4 170a56 56 0 0 0 93.2 0L480 240H320Z" />
          </svg>
        </motion.div>
        {/* Right Side - Diamond / arrow shape */}
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
            <path d="M320 240 160 0 0 240h160l160 240 160-240H320z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 relative z-10">
        {/* ======================= */}
        {/* TOP MARQUEE (Moves Left) - COMMENTED OUT */}
        {/* ======================= */}
        {/* {false && (
          <div className="w-full overflow-hidden relative mb-16 opacity-30 pointer-events-none select-none">
            <div className="absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

            <motion.div
              layout={false}
              style={{ willChange: "transform" }}
              className="flex whitespace-nowrap gap-16"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {repeatedWords.map((word, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-gray-400 uppercase tracking-tighter">
                    {word}
                  </span>
                  <span className="text-4xl text-red-500">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        )} */}

        {/* Header Section */}
        <div className="flex flex-col items-center ">
          <SectionTitle
            eyebrow="Our impact"
            title="SMP at a Glance"
            highlightStart={true}
            highlightEnd={true}
          />
        </div>

        {/* Stats Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:border-red-500/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-theme-brand" />
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-theme-brand transition-colors duration-300">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ======================= */}
        {/* BOTTOM MARQUEE (Moves Right) - COMMENTED OUT */}
        {/* ======================= */}
        {/* {false && (
          <div className="w-full overflow-hidden relative mt-16 opacity-30 pointer-events-none select-none">
            <div className="absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

            <motion.div
              layout={false}
              style={{ willChange: "transform" }}
              className="flex whitespace-nowrap gap-16"
              initial={{ x: "-33.33%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            >
              {repeatedWords.map((word, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-transparent uppercase tracking-tighter">
                    {word}
                  </span>
                  <span className="text-4xl text-red-500">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        )} */}

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent mt-20 max-w-7xl mx-auto"
        />
      </div>
    </section>
  );
}
