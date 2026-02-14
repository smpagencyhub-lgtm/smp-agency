"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../final-design/SectionTitle";
// import SectionTitle from "./section-title";

// Defined all 7 images as requested
const teamImages = [
  "/images/starmodel/dean1.jpg",
  "/images/suki322.jpg",
  "/images/allaya5.jpg",
  "/images/starmodel/bray2.jpg",
  "/images/suki2.jpg",
  "/images/allaya2.jpg",
  "/images/starmodel/dean4.jpg",
  "/images/suki1.jpg",
  "/images/g-model (5).jpg",
  "/images/starmodel/bray1.jpg",
];

// Duplicate the array to create the seamless infinite loop effect
const marqueeImages = [...teamImages, ...teamImages];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Professional Background Shapes – quadrant SVGs, fully inside section so they aren’t clipped */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Left Side - Quadrant SVG */}
        <motion.div
          className="absolute top-[18%] left-4 md:left-8 w-40 h-40 md:w-48 md:h-48"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M480 240H240V0a240 240 0 0 1 240 240ZM240 480H0V240a240 240 0 0 1 240 240ZM480 480H240V240a240 240 0 0 1 240 240ZM240 240H0V0a240 240 0 0 1 240 240Z" />
          </svg>
        </motion.div>
        {/* Right Side - Same Quadrant SVG (mirrored) */}
        <motion.div
          className="absolute bottom-[18%] right-4 md:right-8 w-40 h-40 md:w-48 md:h-48 scale-x-[-1]"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M480 240H240V0a240 240 0 0 1 240 240ZM240 480H0V240a240 240 0 0 1 240 240ZM480 480H240V240a240 240 0 0 1 240 240ZM240 240H0V0a240 240 0 0 1 240 240Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* --- 1. TITLE SECTION --- */}
        <div className="px-6">
          <SectionTitle eyebrow="Who we are" title="About Us" />
        </div>

        {/* --- 2. INFINITE CAROUSEL (CSS animation – no JS tick, no lag) --- */}
        <div className="relative w-full overflow-hidden mb-20 md:mb-28">
          <div className="absolute top-0 left-0 h-full w-16 md:w-24 z-20 bg-linear-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-16 md:w-24 z-20 bg-linear-to-l from-white to-transparent pointer-events-none" />

          <div className="flex gap-6 md:gap-10 w-max animate-about-carousel">
            {marqueeImages.map((src, index) => (
              <div
                key={index}
                className="relative w-[200px] h-[300px] md:w-[280px] md:h-[420px] shrink-0 rounded-2xl overflow-hidden cursor-pointer border border-red-500/10 shadow-lg about-card-hover group/card"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={src}
                    alt={`Model ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 200px, 280px"
                    quality={75}
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover/card:opacity-50 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-red-900/5 group-hover/card:bg-transparent transition-colors duration-300" />

                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-200" />
              </div>
            ))}
          </div>
        </div>

        {/* --- 3. DESCRIPTION (single motion, once) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center px-6 relative"
        >
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-serif text-red-500/80 select-none pointer-events-none"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl tracking-wide relative z-10 font-medium">
            We&apos;re a{" "}
            <span className="text-red-600 font-bold">dynamic force</span>{" "}
            <span className="text-red-600 font-semibold">
              full-service agency,
            </span>{" "}
            providing everything from innovative social media solutions to
            effortless brand development. Our mission is to boost your content,
            ignite your expansion, and help you reach your{" "}
            <span className="text-red-600 font-bold border-b border-red-500/50">
              maximum earning power
            </span>
            . Leave the heavy lifting to us while you focus on building your
            legacy and claiming your spot at the top.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
