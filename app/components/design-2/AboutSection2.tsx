"use client";

import { useRef, useState } from "react";
import {
  Instagram,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Data
const testimonials = [
  {
    id: 1,
    name: "James Hardy",
    handle: "@jameshardyx93",
    quote: "I was honestly on the verge of giving up.",
    text: "Before working with SMP, I was completely drained trying to handle everything on my own—messages, posting, promotions, nonstop. I always felt behind. After joining SMP, I finally had breathing room again. My earnings improved, and the burnout disappeared.",
    imageSrc: "/images/b-model (4).jpg",
    instagramLink: "https://www.instagram.com/jameshardyx93",
  },
  {
    id: 2,
    name: "Olga",
    handle: "@olgagabrielaofficial",
    quote: "My income doubled in just a few months.",
    text: "I didn’t realize how much potential revenue I was missing. The SMP team refined my pricing and took over DM management. Now I can focus purely on creating content while everything else runs smoothly in the background.",
    imageSrc: "/images/g-model (5).jpg",
    instagramLink: "https://www.instagram.com/olgagabrielaofficial",
  },
  {
    id: 3,
    name: "Allaya",
    handle: "@ayajanets",
    quote: "I finally got my time and freedom back.",
    text: "The systems SMP implemented changed everything. I used to be on my phone for 12 hours a day. Now I work only 3–4 hours and earn more than before. Partnering with SMP was one of the best decisions I’ve made.",
    imageSrc: "/images/allaya5.jpg",
    instagramLink: "https://www.instagram.com/ayajanets",
  },
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

  // State for the active popup
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  // Refs for Physics
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const momentumID = useRef<number | null>(null);
  const lastPageX = useRef(0);

  // --- ARROW SCROLL FUNCTION ---
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // --- MOMENTUM LOOP ---
  const startMomentum = () => {
    cancelMomentum();
    const loop = () => {
      if (!scrollContainerRef.current) return;
      velocity.current *= 0.95;
      scrollContainerRef.current.scrollLeft -= velocity.current;
      if (Math.abs(velocity.current) > 0.5) {
        momentumID.current = requestAnimationFrame(loop);
      } else {
        setIsDragging(false);
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
    cancelMomentum();
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    lastPageX.current = e.pageX;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      startMomentum();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startMomentum();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    velocity.current = e.pageX - lastPageX.current;
    lastPageX.current = e.pageX;
  };

  // --- CLICK HANDLER ---
  const handleCardClick = (item: (typeof testimonials)[0]) => {
    if (!isDragging) {
      setSelectedTestimonial(item);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>

      <motion.div
        layout={false}
        style={{ willChange: "transform" }}
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
          layout={false}
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide text-white flex flex-col md:block items-center justify-center gap-2">
            <motion.span
              variants={itemVariants}
              className="bg-red-600 text-white px-4 py-1 italic font-bold house shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md inline-block transform -skew-x-6 mr-0 md:mr-3"
              whileHover={{ scale: 1.05, skewX: -12 }}
            >
              BENEFITS
            </motion.span>
            <motion.span variants={itemVariants} className="text-gray-200 ">
              OF WORKING WITH
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="bg-red-600 lg:mt-5 sm:mt-0 text-white px-4 py-1 italic font-bold house shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-default rounded-md inline-block transform -skew-x-6 ml-0 md:ml-3"
              whileHover={{ scale: 1.05, skewX: -12 }}
            >
              SMP MANAGEMENT
            </motion.span>
          </h2>
        </motion.div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative group/carousel">
          {/* ARROWS */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 
              bg-neutral-900/30 text-white/70 p-4 rounded-full 
              backdrop-blur-md border border-white/10
              hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]
              transition-all duration-300 hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 
              bg-neutral-900/30 text-white/70 p-4 rounded-full 
              backdrop-blur-md border border-white/10
              hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]
              transition-all duration-300 hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>

          {/* --- SCROLL CONTAINER --- */}
          <div
            ref={scrollContainerRef}
            className={`flex gap-8 overflow-x-auto pb-12 hide-scrollbar px-4 md:px-0 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                layout={false}
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => handleCardClick(item)}
                className="flex-shrink-0 w-[85vw] md:w-[800px] bg-neutral-900/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-neutral-800 flex flex-col md:flex-row hover:border-red-900 transition-colors duration-300 group select-none relative cursor-pointer"
              >
                {/* Text Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block transform -skew-x-12 shadow-sm">
                      {item.name}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl md:text-2xl mb-4 leading-tight">
                    &quot;{item.quote}&quot;
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {item.text}
                  </p>

                  {/* INSTAGRAM BUTTON (Now above the full story indicator) */}
                  <button
                    className="flex items-center text-gray-300 font-medium text-sm cursor-pointer w-fit pointer-events-auto mb-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.instagramLink, "_blank");
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <Instagram className="w-4 h-4 mr-2 text-red-500 group-hover:text-red-400 transition-colors" />
                    <span className="group-hover:text-red-400 transition-colors hover:underline">
                      {item.handle}
                    </span>
                  </button>

                  {/* READ FULL STORY INDICATOR (Now at the bottom) */}
                  <div className="flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-widest group-hover:text-red-400 transition-colors mt-2">
                    <span>Read full story</span>
                    <ArrowUpRight
                      size={14}
                      className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
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

            <div className="w-4 md:w-0 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-[0_0_50px_rgba(220,38,38,0.2)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay z-10"></div>
                <img
                  src={selectedTestimonial.imageSrc}
                  alt={selectedTestimonial.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-neutral-900">
                <div className="mb-6">
                  <span className="bg-red-600 text-white text-sm font-bold px-4 py-1.5 uppercase tracking-widest inline-block transform -skew-x-12">
                    {selectedTestimonial.name}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  &quot;{selectedTestimonial.quote}&quot;
                </h3>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {selectedTestimonial.text}
                </p>

                <a
                  href={selectedTestimonial.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-500 hover:text-red-400 font-bold tracking-wide transition-colors w-fit"
                >
                  <Instagram size={20} />
                  <span>{selectedTestimonial.handle}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
