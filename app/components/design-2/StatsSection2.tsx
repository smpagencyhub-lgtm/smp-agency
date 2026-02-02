'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- Helper Component for Counting Numbers ---
type CounterProps = {
  value: number;
  suffix?: string;
};
const Counter = ({ value, suffix = "string" }: CounterProps) => {
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

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

// --- Marquee Data ---
const marqueeWords = ["Dominate", "Expand", "Create", "Limitless", "Amplify", "Influence", "Scale", "Unstoppable"];
// Duplicate for seamless loop
const repeatedWords = [...marqueeWords, ...marqueeWords, ...marqueeWords]; 

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "backOut" } 
  }
};

export default function StatsSection2() {
  return (
    // 1. Matched Background Gradient
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans border-t border-white/5">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-800/5 rounded-full blur-[80px] pointer-events-none" />

      {/* ======================= */}
      {/* TOP MARQUEE (Moves Left) */}
      {/* ======================= */}
      <div className="w-full overflow-hidden relative mb-16 opacity-20 pointer-events-none select-none">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-8"
          animate={{ x: ["0%", "-33.33%"] }} // Move 1/3rd of the way because we tripled the list
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {repeatedWords.map((word, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 uppercase tracking-tighter">
                {word}
              </span>
              <span className="text-4xl text-red-600">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ======================= */}
      {/* MAIN CONTENT */}
      {/* ======================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-white text-4xl sm:text-5xl font-light tracking-wide flex flex-col sm:block items-center justify-center gap-3">
            <span>FANSHUB AT A</span>
            
            {/* 'GLANCE' Box - Matched Style */}
            <motion.span 
              whileHover={{ scale: 1.05, skewX: -12 }}
              className="bg-red-600 text-white px-4 py-1 ml-0 sm:ml-3 font-serif font-bold inline-block transform -skew-x-6 shadow-[0_0_20px_rgba(220,38,38,0.5)] cursor-default rounded-md"
            >
              GLANCE
            </motion.span>
          </h2>
        </motion.div>

        {/* STATS GRID */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Item 1: Creators */}
          <motion.div variants={itemVariants} className="group">
            <p className="text-sm text-red-500 font-bold tracking-widest mb-4 uppercase">Creators</p>
            <div className="text-5xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
              <Counter value={80} suffix="+" />
            </div>
            <p className="text-sm text-gray-400">Globally</p>
          </motion.div>

          {/* Item 2: Team */}
          <motion.div variants={itemVariants} className="group">
            <p className="text-sm text-red-500 font-bold tracking-widest mb-4 uppercase">Team</p>
            <div className="text-5xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
              <Counter value={60} suffix="+" />
            </div>
            <p className="text-sm text-gray-400">Worldwide</p>
          </motion.div>

          {/* Item 3: Revenue */}
          <motion.div variants={itemVariants} className="group">
            <p className="text-sm text-red-500 font-bold tracking-widest mb-4 uppercase">Revenue</p>
            <div className="text-5xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
              <Counter value={90} suffix="" />
            </div>
            <p className="text-sm text-gray-400">Million Generated</p>
          </motion.div>

          {/* Item 4: Views */}
          <motion.div variants={itemVariants} className="group">
            <p className="text-sm text-red-500 font-bold tracking-widest mb-4 uppercase">Views</p>
            <div className="text-5xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
              <Counter value={5} suffix="" />
            </div>
            <p className="text-sm text-gray-400">Billion+</p>
          </motion.div>

          {/* Item 5: Locations */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 group">
            <p className="text-sm text-red-500 font-bold tracking-widest mb-4 uppercase">Locations</p>
            <div className="text-5xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
              3
            </div>
            <p className="text-sm text-gray-400 tracking-tight">UK • USA • POLAND</p>
          </motion.div>

        </motion.div>

        {/* Separator Line */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-900 to-transparent mt-24 opacity-50"
        />

      </div>

      {/* ======================= */}
      {/* BOTTOM MARQUEE (Moves Right) */}
      {/* ======================= */}
      <div className="w-full overflow-hidden relative mt-16 opacity-20 pointer-events-none select-none">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" />

        <motion.div 
          className="flex whitespace-nowrap gap-8"
          initial={{ x: "-33.33%" }} // Start offset
          animate={{ x: "0%" }}      // Move to 0 (Moves Right)
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {repeatedWords.map((word, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-transparent uppercase tracking-tighter">
                {word}
              </span>
              <span className="text-4xl text-red-800">•</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}