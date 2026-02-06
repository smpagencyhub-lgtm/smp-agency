"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

// Data
const testimonials = [
  {
    id: 1,
    name: "James Hardy",
    handle: "@James",
    quote: "I was honestly close to quitting",
    text: "Before FansHub, I was exhausted trying to do everything myself - chatting, posting, marketing, all of it. I felt behind constantly. Since joining FansHub, I can finally breathe again. My income has grown and I don't feel burnt out anymore.",
    imageSrc: "/images/b-model (4).jpg"
  },
  {
    id: 2,
    name: "Rialle",
    handle: "rialle",
    quote: "My revenue doubled in 3 months",
    text: "I didn't realize how much money I was leaving on the table. The team optimized my pricing strategies and handled all the DMs. Now I just focus on content creation and the rest runs on autopilot.",
    imageSrc: "/images/g-model (7).jpg"
  },
  {
    id: 3,
    name: "HAYES ROCKWELL",
    handle: "@HAYES",
    quote: "Finally got my freedom back",
    text: "The systems they put in place are incredible. I used to spend 12 hours a day on my phone. Now I work 3-4 hours and make more than I did before. Best decision I ever made.",
    imageSrc: "/images/b-model (8).jpg"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection2() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      {/* Optional: Subtle animated background noise or glow could go here */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Decorative Red Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>

      {/* Decorative Diamond Shape - Now Animated */}
      <motion.div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 pointer-events-none"
        animate={{
          rotate: [45, 50, 45], // Gentle breathing rotation
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-96 h-96 border border-red-600 rounded-[3rem] opacity-20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide text-white flex flex-col md:block items-center justify-center gap-2">
            {/* 'BENEFITS' Box - Interactive Hover */}
            <motion.span
              variants={itemVariants}
              className="bg-red-600 text-white px-4 py-1 italic font-bold inline-block transform -skew-x-6 mr-0 md:mr-3 shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md"
              whileHover={{ scale: 1.05, skewX: -12 }}
            >
              BENEFITS
            </motion.span>

            <motion.span variants={itemVariants} className="text-gray-200 ">
              OF WORKING WITH
            </motion.span>

            {/* 'SMP MANAGEMENT' Box - Interactive Hover */}
            <motion.span
              variants={itemVariants}
              className="bg-red-600 mt-5 text-white px-4 py-1 italic font-bold inline-block transform -skew-x-6 ml-0 md:ml-3 shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md"
              whileHover={{ scale: 1.05, skewX: -12 }}
            >
              SMP MANAGEMENT
            </motion.span>
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        {/* Note: We apply motion to the inner items, not the scroll container itself, to preserve scroll mechanics */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-8 hide-scrollbar px-4 md:px-0">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered entry based on scroll
              whileHover={{ y: -10 }} // Float up effect
              className="flex-shrink-0 w-full md:w-[600px] snap-center bg-neutral-900/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-neutral-800 flex flex-col md:flex-row hover:border-red-900 transition-colors duration-300 group"
            >
              {/* Text Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block transform -skew-x-12 shadow-sm">
                    {item.name}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 leading-tight">
                  &quot;{item.quote}&quot;
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.text}
                </p>

                <div className="flex items-center text-gray-300 font-medium text-sm cursor-pointer">
                  <Instagram className="w-4 h-4 mr-2 text-red-500 group-hover:text-red-400 transition-colors" />
                  <span className="group-hover:text-red-400 transition-colors">
                    {item.handle}
                  </span>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-5/12 h-64 md:h-auto bg-neutral-800 relative overflow-hidden">
                {/* Red Overlay on Hover */}
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10"></div>

                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
