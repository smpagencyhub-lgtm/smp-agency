'use client';


import Image from 'next/image';
import { motion } from 'framer-motion';

// Defined all 7 images as requested
const teamImages = [
  "/images/g-model (1).JPEG",
  "/images/b-model (1).jpg",
  "/images/allaya5.jpg",
  "/images/b-model (2).jpg",
  "/images/allaya2.jpg",
  "/images/b-model (3).jpg",
  "/images/g-model (4).jpg",
];

// Duplicate the array to create the seamless infinite loop effect
const marqueeImages = [...teamImages, ...teamImages];

export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* --- BACKGROUND DECORATIONS (Animated) --- */}
      {/* Left Diamond - Slow Rotation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-150px] top-[10%] w-[500px] h-[500px] border border-red-900/30 rounded-[80px] pointer-events-none opacity-50"
      />
      {/* Right Diamond - Reverse Slow Rotation */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-150px] bottom-[10%] w-[600px] h-[600px] border border-red-900/30 rounded-[80px] pointer-events-none opacity-50"
      />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        
        {/* --- 1. TITLE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-20 px-6"
        >
          {/* "WHO" in Red Box */}
          <motion.div 
            whileHover={{ scale: 1.05, skewX: -12 }}
            className="bg-red-600 px-8 py-2 shadow-[0_0_30px_rgba(220,38,38,0.6)] transform -skew-x-6 rounded-md cursor-default"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase italic transform skew-x-6r">
              WHO
            </h2>
          </motion.div>
          {/* "WE ARE" Plain Text */}
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-widest uppercase">
            WE ARE
          </h2>
        </motion.div>

        {/* --- 2. INFINITE CAROUSEL --- */}
        <div className="relative w-full overflow-hidden mb-20 group">
          
          {/* Gradient Masks (Fade out edges) */}
          <div className="absolute top-0 left-0 h-full w-24 md:w-48 z-20 bg-gradient-to-r from-[#180000] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 md:w-48 z-20 bg-gradient-to-l from-[#2b0000] to-transparent pointer-events-none" />

          {/* The Moving Track */}
          <motion.div 
            className="flex gap-6 md:gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, // Adjust speed (higher = slower)
              ease: "linear", 
              repeat: Infinity 
            }}
            // Pause animation on hover using CSS class logic or simple inline style
            style={{ width: "max-content" }}
          >
            {marqueeImages.map((src, index) => (
              <div 
                key={index}
                className="relative w-[200px] h-[300px] md:w-[280px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group/card cursor-pointer"
              >
                {/* Image */}
                <Image 
                  src={src} 
                  alt={`Model ${index}`}
                  fill
                  className="object-cover transition-all duration-500 grayscale group-hover/card:grayscale-0 group-hover/card:scale-110"
                />
                
                {/* Red Tint Overlay (Fades out on hover) */}
                <div className="absolute inset-0 bg-red-900/10 group-hover/card:bg-transparent transition-colors duration-300" />
                
                {/* Reflection/Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- 3. DESCRIPTION TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <p className="text-gray-300 leading-relaxed text-base md:text-xl font-light tracking-wide">
            We&apos;re a powerhouse <span className="text-red-500 font-medium">full-service agency</span> delivering everything from cutting-edge social media 
            management to seamless brand building. Designed to elevate your content, supercharge you, and 
            unlock your <span className="text-white font-medium border-b border-red-600">full revenue potential</span>. Let us handle the grind while you focus on building your empire and 
            owning your space at the top.
          </p>
        </motion.div>

      </div>
    </section>
  );
}