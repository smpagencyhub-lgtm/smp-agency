"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Make sure you have lucide-react, or use an SVG

// Service Data
const services = [
  {
    title: "Marketing",
    text: "Marketing can be a tricky area for many creators. At SMP, we design personalized strategies tailored to your brand, niche, and objectives—no generic templates. With access to over 20 promotion channels, including social media, a 3,000+ page meme network, podcasts, and influencer partnerships, we take care of both planning and execution so you can focus on creating.",
    image: "/images/allaya4.jpg", 
  },
  {
    title: "Chatting",
    text: "Fan interaction drives most revenue on platforms like OnlyFans, so doing it right is essential. SMP’s UK and US chat team receives extensive training to match the creator's voice authentically and understand fan psychology. This approach boosts income, encourages subscription renewals, and builds lasting trust, because at SMP, results speak louder than words.",
    image: "/images/b-model (2).jpg", 
  },
  {
    title: "Content Strategy",
    text: "Knowing what content to post can make or break earnings in a fast-paced industry. There’s no one-size-fits-all solution—the gap between average and top performance comes from clear branding and a defined niche. SMP guides creators to understand audience demand and craft content that is unique, engaging, and designed to drive meaningful growth.",
    image: "/images/max.jpg", 
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function TestimonialsSection2() {
  // State for the active popup
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      {/* Decorative Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse pointer-events-none" />

      {/* Animated Diamond Decorations */}
      <motion.div
        layout={false}
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-100px] top-[10%] w-[500px] h-[500px] border border-red-900/40 rounded-[60px] hidden xl:block pointer-events-none"
      />
      <motion.div
        layout={false}
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] border border-red-900/40 rounded-[60px] hidden xl:block pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* --- HEADER --- */}
        <motion.div
          layout={false}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
          layout={false}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15 }}
              // OPEN MODAL ON CARD CLICK
              onClick={() => setSelectedService(item)}
              className="group bg-neutral-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-800 hover:border-red-900 transition-colors duration-300 cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Red Overlay */}
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10" />

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={75}
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-4">
                  {item.text}
                </p>

                {/* Down Arrow Button - LINKS TO OUR-SERVICES */}
                <div className="mt-auto">
                  <Link 
                    href="/our-services"
                    // Stop propagation prevents the card's onClick from firing when clicking the button
                    onClick={(e) => e.stopPropagation()} 
                  >
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)} // Close when clicking background
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-[0_0_50px_rgba(220,38,38,0.2)] relative"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative min-h-64">
                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay z-10" />
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  quality={80}
                  className="object-cover grayscale"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-neutral-900">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedService.title}
                </h3>
                
                <div className="w-20 h-1 bg-red-600 mb-8" />

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {selectedService.text}
                </p>

                <div className="flex gap-4">
                    <Link href="/our-services">
                        <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                            Learn More
                        </button>
                    </Link>
                    <button 
                        onClick={() => setSelectedService(null)}
                        className="border border-neutral-600 text-gray-400 hover:text-white hover:border-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all"
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