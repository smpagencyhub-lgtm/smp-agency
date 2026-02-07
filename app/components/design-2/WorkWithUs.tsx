"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textRevealVariants = {
  hidden: { y: 50, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const badgeVariants = {
  hidden: { scale: 0, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: -6,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
  hover: {
    scale: 1.1,
    rotate: -3,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const imageContainerVariants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorkWithUs() {
  return (
    // Restored original background gradient
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* Decorative Blur Blob */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* --- LEFT CONTENT --- */}
       <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 className="text-[40px] sm:text-[48px] lg:text-[64px] leading-[1.1] font-light text-white">
            
            <motion.div variants={textRevealVariants}>
              <span className="text-red-500 font-semibold tracking-tight">WE DON'T MANAGE</span>
            </motion.div>

            <div className="flex items-center gap-4 my-2 flex-wrap">
              {/* "CREATORS" Badge */}
              <motion.span
                variants={badgeVariants}
                whileHover="hover"
                className="inline-block bg-red-600 text-white px-6 py-1 font-serif font-bold shadow-[0_0_30px_rgba(220,38,38,0.5)] rounded-lg cursor-pointer select-none"
              >
                CREATORS
              </motion.span>
            </div>

            <motion.div variants={textRevealVariants} className="mt-2">
              WE BUILD
            </motion.div>

            <div className="flex items-center gap-4 mt-2 flex-wrap">
              {/* "SUCCESS" Badge */}
              <motion.span
                variants={badgeVariants}
                whileHover="hover"
                className="inline-block bg-white text-black px-6 py-1 font-serif font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-lg transform -skew-x-6 cursor-pointer select-none"
              >
                SUCCESS
              </motion.span>
              <motion.span variants={textRevealVariants}>STORIES</motion.span>
            </div>

          </motion.h1>

          <motion.p
            className="mt-8 max-w- text-base sm:text-lg leading-relaxed text-gray-400"
            variants={textRevealVariants}
          >
            At SMP MANAGEMENT, our global team spans the UK, US, and beyond,
            bringing together top-tier experts in influencer marketing,
            management, and digital growth. We&apos;re the engine behind <span className="text-white font-semibold">80+ thriving creators</span>.
          </motion.p>

          <motion.div variants={textRevealVariants}>
            <button className="mt-10 group relative bg-transparent border border-red-600 text-white text-sm tracking-widest font-bold px-10 py-4 rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                WORK WITH US
              </span>
              
              {/* Fill Effect */}
              <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              
              {/* Shine/Glint Animation */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine" />
            </button>
          </motion.div>
        </motion.div>

        {/* --- RIGHT IMAGE AREA --- */}
        <div className="relative flex justify-center items-center">
          
          {/* Animated Rotated Outline (Back Layer) */}
          <motion.div
            className="absolute w-[300px] sm:w-[420px] h-[400px] sm:h-[520px] border border-red-600/30 rounded-[40px]"
            animate={{
              rotate: [10, 25, 10], // Wider angle range
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4, // Faster speed (reduced from 8s)
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Image Container */}
          <motion.div
            className="relative w-[280px] sm:w-[320px] h-[420px] rounded-2xl shadow-2xl z-10"
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-neutral-900">
              <Image
                src="/images/allaya5.jpg" // Check path
                alt="Creator Success"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
