'use client';


import Image from 'next/image';
import { motion } from 'framer-motion';

// Service Data
const services = [
  {
    title: "Marketing",
    text: "Marketing is where most creators get stuck. At FansHub, we build custom strategies around your brand, niche, and goals – no copy-and-paste approach. With access to 20+ promotion methods, including social media, a 3,000+ page meme network, podcasts, and influencer collaborations, we handle the strategy and execution so you don't have to.",
    image: "/images/allaya4.jpg", 
  },
  {
    title: "Chatting",
    text: "Chatting is the real revenue driver on OnlyFans, and so it is vital that it is done correctly. Our UK / USA chat team undergo vigorous training to ensure they can authentically match the creator's brand and understand the psychology in fan interactions. This drives revenue, increases renewals and ensures long term trust, but at FansHub, results speak louder than promises.",
    image: "/images/b-model (11).jpg", 
  },
  {
    title: "Content Strategy",
    text: "In a fast-moving industry, knowing what content to post is everything. There's no universal formula – the difference between average and exceptional earnings comes down to strong branding and a clear niche. We help creators understand what the market wants and how to turn that into content that's unique, converts, and drives real growth.",
    image: "/images/max.jpg", 
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

export default function TestimonialsSection2() {
  return (
    // 1. Matched Background Gradient
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* Decorative Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse pointer-events-none" />

      {/* Animated Diamond Decorations */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-100px] top-[10%] w-[500px] h-[500px] border border-red-900/40 rounded-[60px] hidden xl:block pointer-events-none" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] border border-red-900/40 rounded-[60px] hidden xl:block pointer-events-none" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider uppercase">
            What We
          </h2>
          <motion.div 
            whileHover={{ scale: 1.05, skewX: -12 }}
            className="bg-red-600 px-4 py-1 shadow-[0_0_20px_rgba(220,38,38,0.5)] transform -skew-x-6 cursor-default rounded-md"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wider uppercase italic transform skew-x-6 ">
              Offer
            </h2>
          </motion.div>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -15 }}
              className="group bg-neutral-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-800 hover:border-red-900 transition-colors duration-300"
            >
              {/* Card Image */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Red Overlay */}
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10" />
                
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                
                {/* Text is now gray for readability on dark background */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>

                {/* Down Arrow Button */}
                <div className="mt-auto">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-200 shadow-[0_0_15px_rgba(220,38,38,0.4)] cursor-pointer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}