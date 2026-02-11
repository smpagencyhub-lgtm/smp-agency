"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; 

// --- DATA: Blog Stories ---
const stories = [
  {
    category: "Growth",
    title: "Scaling Creator Income",
    description: "Discover the proven strategies management teams use to consistently increase creator earnings while maintaining long term subscriber value.",
    // Added 'content' to simulate the full blog post in the popup
    content: "Scaling creator income isn't just about posting more content; it's about strategic optimization. Management teams focus on analyzing subscriber retention rates, optimizing pricing tiers, and implementing upsell strategies that feel organic rather than pushy. By leveraging data analytics, we can identify peak engagement times and tailor content drops to maximize revenue per user (ARPU) while ensuring long-term subscriber value remains high.",
    imageSrc: "/images/allaya2.jpg",
  },
  {
    category: "Branding",
    title: "Building A Marketable Persona",
    description: "Strong branding creates emotional connection. Learn how curated personas help creators stand out in crowded markets.",
    content: "In a crowded digital market, a strong persona is your most valuable asset. It goes beyond just aesthetics; it's about the tone of voice, the values you project, and the story you tell. We help creators distill their authentic traits into a cohesive brand identity that resonates deeply with their target audience, creating an emotional connection that converts casual followers into loyal superfans.",
    imageSrc: "/images/b-model (8).jpg",
  },
  {
    category: "Operations",
    title: "Systems That Scale",
    description: "Automation, scheduling, and team workflows are key to growth. Here's how agencies streamline daily operations.",
    content: "Growth brings complexity. Without robust systems, increased traffic can lead to burnout. We implement automation for routine tasks, centralized scheduling for content consistency, and clear team workflows for chat management. These operational pillars ensure that as your subscriber count grows, your workload remains manageable, allowing you to focus on creativity rather than administration.",
    imageSrc: "/images/g-model (5).jpg",
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
export default function ServiceSection() {
  // State for Story Modal
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* Decorative Red Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse pointer-events-none" />

      {/* 1. Top Header Bar */}
      <div className="w-full py-12 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white font-light tracking-widest uppercase "
        >
          Start Your
          <motion.span
            whileHover={{ scale: 1.05, skewX: -12 }}
            className="bg-red-600 text-white px-3 ml-3 italic font-bold inline-block transform -skew-x-6 shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md"
          >
            JOURNEY
          </motion.span>
        </motion.h1>
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-24 space-y-32 relative z-10">
        
        {/* 2. Latest Stories Section */}
        <motion.section
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* GRID FIX: added auto-rows-fr to ensure equal height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                // Added h-full to make card fill the grid cell
                className="group bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full border border-neutral-800 hover:border-red-900 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                {/* Image Section */}
                <div className="h-64 bg-neutral-800 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay z-10" />
                  <img
                    src={story.imageSrc}
                    alt={story.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>

                {/* Content Section - Added flex-grow to push footer down */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                    {story.category}
                  </span>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-red-400 transition-colors">
                      {story.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3 mb-6">
                    {story.description}
                  </p>

                  {/* Footer Section with Learn More Link */}
                  <div className="mt-auto pt-4 border-t border-neutral-800">
                    <div className="text-xs font-bold text-white flex items-center gap-2 group-hover:text-red-500 transition-colors">
                        READ ARTICLE <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. Booking / Calendly Section */}
        <section className="relative py-12 flex justify-center items-center">
          
          {/* Decorative Background Shapes */}
          <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
            <motion.div
              animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border border-red-900/50 rounded-3xl absolute -translate-x-48 md:-translate-x-80"
            />
            <motion.div
              animate={{ rotate: [45, 0, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-72 h-72 border border-red-900/50 rounded-3xl absolute translate-x-48 md:translate-x-80"
            />
          </div>

          {/* Decorative Images */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute hidden md:block left-0 lg:left-20 top-0 w-54 shadow-2xl rounded-xl overflow-hidden z-0 border border-neutral-800 opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src="/images/b-model (5).jpg"
              alt="Decoration"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            variants={floatingAnimationReverse}
            animate="animate"
            className="absolute hidden md:block right-0 lg:right-20 bottom-0 w-54 shadow-2xl rounded-xl overflow-hidden z-0 border border-neutral-800 opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src="/images/allaya2.jpg"
              alt="Decoration"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Central Booking Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-900/90 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-sm w-full text-center relative z-10 border border-neutral-800"
          >
            <h4 className="text-red-500 font-semibold mb-4 tracking-widest uppercase text-sm">
              Book in with us
            </h4>

            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="text-3xl font-bold text-gray-500">C</div>
              <div className="text-2xl font-bold text-white">Calendly</div>
            </div>

            <p className="text-sm text-gray-400 mb-8 px-4 leading-relaxed">
              Book an appointment directly with our team via Calendly. Choose
              the appointment time that&apos;s right for you.
            </p>

            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6 text-red-600"
            >
              <Calendar size={64} strokeWidth={1.5} />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://calendly.com", "_blank")} // Basic calendly link
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:shadow-[0_4px_30px_rgba(220,38,38,0.6)]"
            >
              BOOK TODAY
            </motion.button>

            <div className="mt-4 text-xs text-gray-500 hover:text-red-500 cursor-pointer hover:underline transition-colors">
              Book directly in our calendar
            </div>
          </motion.div>
        </section>
      </main>

      {/* --- BLOG POST MODAL --- */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedStory(null)} 
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-[0_0_50px_rgba(220,38,38,0.2)] relative max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative flex-shrink-0">
                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay z-10"></div>
                <img 
                  src={selectedStory.imageSrc} 
                  alt={selectedStory.title} 
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Modal Content - Scrollable */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-start bg-neutral-900 overflow-y-auto">
                <div className="mb-6">
                  <span className="bg-red-600 text-white text-sm font-bold px-4 py-1.5 uppercase tracking-widest inline-block transform -skew-x-12">
                    {selectedStory.category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {selectedStory.title}
                </h3>
                
                <div className="prose prose-invert prose-red max-w-none text-gray-300 mb-8">
                  {/* Displaying 'content' for the full blog experience */}
                  <p className="text-base md:text-lg leading-relaxed">
                     {selectedStory.content}
                  </p>
                </div>

                <div className="flex gap-4 mt-auto">
                    {/* LINK CHANGED TO /blog */}
                    <Link href="/blog">
                        <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                            Visit Blog
                        </button>
                    </Link>
                    <button 
                        onClick={() => setSelectedStory(null)}
                        className="text-gray-400 hover:text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2"
                    >
                        Close
                    </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}