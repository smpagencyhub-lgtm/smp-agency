"use client";

import { useRef, useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

// Data
const testimonials = [
  {
    id: 1,
    name: "James Hardy",
    handle: "@jameshardyx93",
    quote: "I was honestly on the verge of giving up.",
    text: "Before working with SMP, I was completely drained trying to handle everything on my own—messages, posting, promotions, nonstop. I always felt behind. After joining SMP, I finally had breathing room again. My earnings improved, and the burnout disappeared.",
    imageSrc: "/images/b-model (4).jpg",
    instagramLink: "https://www.instagram.com/jameshardyx93"
  },
  {
    id: 2,
    name: "Olga",
    handle: "@olgagabrielaofficial",
    quote: "My income doubled in just a few months.",
    text: "I didn’t realize how much potential revenue I was missing. The SMP team refined my pricing and took over DM management. Now I can focus purely on creating content while everything else runs smoothly in the background.",
    imageSrc: "/images/g-model (5).jpg",
    instagramLink: "https://www.instagram.com/olgagabrielaofficial"
  },
  {
    id: 3,
    name: "Allaya",
    handle: "@ayajanets",
    quote: "I finally got my time and freedom back.",
    text: "The systems SMP implemented changed everything. I used to be on my phone for 12 hours a day. Now I work only 3–4 hours and earn more than before. Partnering with SMP was one of the best decisions I’ve made.",
    imageSrc: "/images/allaya5.jpg",
    instagramLink: "https://www.instagram.com/ayajanets"
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs for Physics (Values that change constantly without re-rendering)
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const momentumID = useRef<number | null>(null);
  const lastPageX = useRef(0);

  // --- MOMENTUM LOOP ---
  // This runs after you let go to create the "glide" effect
  const startMomentum = () => {
    cancelMomentum(); // Stop any existing loop
    
    const loop = () => {
      if (!scrollContainerRef.current) return;

      // Apply Friction (0.95 slows it down by 5% every frame)
      velocity.current *= 0.95;

      // Apply velocity to scroll position
      scrollContainerRef.current.scrollLeft -= velocity.current;

      // Stop if velocity is very low
      if (Math.abs(velocity.current) > 0.5) {
        momentumID.current = requestAnimationFrame(loop);
      } else {
        setIsDragging(false); // Snap back to "grab" cursor
      }
    };
    
    momentumID.current = requestAnimationFrame(loop);
  };

  const cancelMomentum = () => {
    if (momentumID.current) {
      cancelAnimationFrame(momentumID.current);
    }
  };

  // --- DRAG HANDLERS ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    cancelMomentum(); // Stop gliding if user catches it

    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    lastPageX.current = e.pageX;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      startMomentum(); // Trigger momentum on leave
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startMomentum(); // Trigger momentum on release
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiplier for drag speed
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;

    // Calculate Velocity (Current Position - Last Position)
    velocity.current = e.pageX - lastPageX.current;
    lastPageX.current = e.pageX;
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>


      <motion.div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 pointer-events-none"
        animate={{
          rotate: [45, 50, 45],
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


            <motion.span
              variants={itemVariants}
              className="bg-red-600 mt-5 text-white px-4 py-1 italic font-bold inline-block transform -skew-x-6 ml-0 md:ml-3 shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md"
              whileHover={{ scale: 1.05, skewX: -12 }}
            >
              SMP MANAGEMENT
            </motion.span>
          </h2>
        </motion.div>

        {/* --- SCROLLABLE + DRAGGABLE CONTAINER --- */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-8 overflow-x-auto pb-12 hide-scrollbar ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }} // Auto during drag prevents jitter
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="flex-shrink-0 w-[85vw] md:w-[600px] bg-neutral-900/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-neutral-800 flex flex-col md:flex-row hover:border-red-900 transition-colors duration-300 group select-none"
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


                <a 
                  href={item.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 font-medium text-sm cursor-pointer w-fit pointer-events-auto"
                  // Stop propagation so clicking the link doesn't trigger drag
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <Instagram className="w-4 h-4 mr-2 text-red-500 group-hover:text-red-400 transition-colors" />
                  <span className="group-hover:text-red-400 transition-colors hover:underline">
                    {item.handle}
                  </span>
                </a>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-5/12 h-64 md:h-auto bg-neutral-800 relative overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10"></div>

                <img
                  src={item.imageSrc}
                  alt={item.name}
                  draggable="false" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
 
    </section>
  );
}
