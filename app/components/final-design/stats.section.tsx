"use client";

import React, { useEffect, useState, useRef } from "react";
import { useThrottledCallback } from "use-debounce";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Globe, DollarSign, Eye, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

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
      {/* Background shapes – Side Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {/* Left Side - Rounded Square */}
        <motion.div
          className="absolute top-1/2 left-0 w-48 h-48 border-4 border-theme-brand/30 rounded-2xl -translate-x-1/2 -translate-y-1/2 rotate-12"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        />
        {/* Right Side - Diamond */}
        <motion.div
          className="absolute bottom-1/3 right-0 w-52 h-52 border-4 border-theme-brand/35 translate-x-1/2 rotate-45"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center ">
          <SectionTitle
            eyebrow="Our impact"
            title="SMP at a Glance"
            highlightStart={true}
            highlightEnd={true}
          />
          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl text-center leading-relaxed mt-4 font-medium"
          >
            Delivering exceptional results through strategic management and
            innovative solutions
          </motion.p> */}
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
