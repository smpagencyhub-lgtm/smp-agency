"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jade K.",
    headline: "Starting out felt impossible before FansHub.",
    body: "When I first started, I had no idea about pricing, chatting, marketing, or what content to post. FansHub walked me through everything step by step and helped me build real momentum.",
    video: "/images/vid.mp4",
    instagram: "@Jadekalopsia.x",
  },
  {
    name: "Chloe",
    headline: "I was honestly close to quitting.",
    body: "Before FansHub, I was exhausted trying to do everything myself. Since joining I can finally breathe again. My income has grown and I don't feel burnt out anymore.",
    video: "/images/vid2.mp4",
    instagram: "@chloe.creates",
  },
  {
    name: "Alex M.",
    headline: "The best investment I made in my creator career.",
    body: "Fanmous Only understood my brand from day one. They handle strategy and operations so I can focus on creating. My audience and income have never been more consistent.",
    video: "/images/vid3.mp4",
    instagram: "@alexm.creates",
  },
];

const viewport = { once: true, amount: 0.15 };
const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function TestimonialsSection2() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    };
    scrollRef.current.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const dx = dragStart.current.x - e.clientX;
      scrollRef.current.scrollLeft = dragStart.current.scrollLeft + dx;
    },
    [isDragging],
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (scrollRef.current) scrollRef.current.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--theme-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header — same pattern as Services */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--theme-brand-muted)]"
              aria-hidden
            />
            <span className="font-sans text-white/80 text-xs font-medium uppercase tracking-[0.2em]">
              Testimonials
            </span>
          </div>
          <h2 className="font-sans font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight max-w-2xl">
            BENEFITS OF WORKING WITH FANSMOUS
          </h2>
        </motion.div>

        {/* Draggable horizontal card strip — no auto scroll */}
        <motion.div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerUp}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              className="flex flex-col sm:flex-row flex-shrink-0 w-[min(92vw,560px)] sm:w-[min(88vw,560px)] lg:w-[600px] min-h-[380px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              variants={itemMotion}
            >
              {/* Left: video — aspect 4/3 to match services card image proportion */}
              <div className="sm:w-2/5 min-h-[220px] sm:min-h-0 sm:aspect-[4/3] flex-shrink-0 bg-black/20">
                <video
                  src={testimonial.video}
                  className="w-full h-full object-cover pointer-events-none"
                  playsInline
                  muted
                  loop
                  autoPlay
                  aria-label={`Video from ${testimonial.name}`}
                />
              </div>

              {/* Right: content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between min-w-0">
                <div>
                  <h3 className="font-sans font-semibold text-white text-base tracking-wide uppercase mb-3">
                    {testimonial.name}
                  </h3>
                  <p className="font-sans font-medium text-[var(--theme-brand-muted)] text-base leading-snug mb-4 line-clamp-2">
                    &ldquo;{testimonial.headline}&rdquo;
                  </p>
                  <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed line-clamp-5">
                    {testimonial.body}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-5 pt-5 border-t border-white/10">
                  <InstagramIcon className="w-5 h-5 text-white/60 shrink-0" />
                  <span className="font-sans text-sm text-white/70 tracking-wide">
                    {testimonial.instagram}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
