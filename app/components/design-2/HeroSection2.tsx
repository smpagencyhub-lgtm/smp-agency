'use client';


import { motion } from 'framer-motion';

export default function HeroSection2() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* 1. VIDEO BACKGROUND */}
      {/* Ensure 'ads.mp4' is inside your /public folder */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/Videos/Ads1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Gradient Fade at the bottom to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#180000] to-transparent" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-10">
        
        <motion.div
          layout={false}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
             Unlock Your<br />
            <span className="relative inline-block mt-2">Full Potential
              <span className="relative z-10 italic pr-2"></span>
              {/* Red Underline/Highlight 
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-4 bg-red-600 -z-10 -skew-x-12 opacity-80"
              />*/}
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light tracking-wide"
          >The elite agency for creators who want to scale revenue, build a brand, and own their future.
            
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-8"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] hover:-translate-y-1">
              START YOUR JOURNEY
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* 3. SCROLL INDICATOR (Mouse Animation) 
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-[0.2em] uppercase"></span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-red-600 rounded-full"
          />
        </div>
      </motion.div> */}

    </section>
  );
}