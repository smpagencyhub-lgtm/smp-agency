'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Animation Variants (The "Recipe" for the animations)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each text line appearing
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { y: 30, opacity: 0 }, // Start slightly down and invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0, rotate: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "backOut" },
  },
};

export default function WorkWithUs() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* Optional: Subtle animated background noise or glow could go here */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div 
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-[40px] sm:text-[48px] lg:text-[56px] leading-tight font-light text-white"
            variants={textItemVariants}
          >
            <span className="text-red-600 font-semibold">WE DON&apos;T MANAGE</span> <br />

            {/* "CREATORS" Box with Pop-in Animation */}
            <motion.span 
              className="inline-block bg-red-600 text-white px-4 py-1 my-3 font-serif font-bold transform -skew-x-6 shadow-[0_0_20px_rgba(220,38,38,0.4)] rounded-md"
              whileHover={{ scale: 1.05, skewX: -12 }} // Interactive hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              CREATORS
            </motion.span>
            <br />

            WE BUILD{' '}
            {/* "SUCCESS" Box */}
            <motion.span 
              className="inline-block bg-red-600 text-white px-4 py-1 font-serif font-bold transform -skew-x-6 shadow-[0_0_20px_rgba(220,38,38,0.4)] rounded-md"
              whileHover={{ scale: 1.05, skewX: -12 }}
            >
              SUCCESS
            </motion.span>{' '}
            STORIES
          </motion.h1>

          <motion.p 
            className="mt-8 max-w-md text-sm leading-relaxed text-gray-300"
            variants={textItemVariants}
          >
            At FansHub, our global team spans the UK, US, and beyond,
            bringing together top tier experts in influencer marketing,
            management, and digital growth. We&apos;re the engine behind
            80+ thriving creators, models, and influencers.
          </motion.p>

          <motion.div variants={textItemVariants}>
            <button className="mt-8 group relative bg-red-600 text-white text-sm font-semibold px-8 py-4 rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              {/* Button content */}
              <span className="relative z-10">WORK WITH US</span>
              {/* Sliding background effect on hover */}
              <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative flex justify-center items-center">
          
          {/* Animated Rotated Outline */}
          <motion.div 
            className="absolute w-[300px] sm:w-[420px] h-[400px] sm:h-[520px] border border-red-600/60 rounded-[40px]"
            initial={{ rotate: 12, opacity: 0 }}
            animate={{ 
              rotate: [12, 15, 12], // Slowly rotates back and forth
              opacity: 1 
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.5 }
            }}
          />

          {/* Image card */}
          <motion.div 
            className="relative w-[280px] sm:w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ y: -10 }} // Floats up slightly on hover
          >
            <Image
              src="/images/model1.jpg" // Ensure this path is correct
              alt="Creator"
              fill
              className="object-cover"
              priority
            />
            
            {/* Glossy Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </motion.div>

        

        </div>

      </div>
    </section>
  );
}