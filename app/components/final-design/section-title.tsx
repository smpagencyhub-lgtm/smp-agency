"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  /** The first word(s) that appear in the blue box */
  boxText: string;
  /** The remaining text that appears next to the box */
  restText: string;
  /** Optional subtitle/eyebrow text above the title */
  subtitle?: string;
  /** Optional description text below the title */
  description?: string;
  /** Optional className for the container */
  className?: string;
}

export default function SectionTitle({
  boxText,
  restText,
  subtitle,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col items-center mb-16 md:mb-24 px-6 ${className}`}
    >
      {/* Subtitle/Eyebrow */}
      {subtitle && (
        <p className="text-theme-brand text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          {subtitle}
        </p>
      )}

      {/* Main Title - Split Design */}
      <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 mb-4">
        {/* First part - Blue box with white text, italicized */}
        <span className="inline-flex items-center justify-center bg-[#3B59DA] text-white font-bold text-2xl md:text-4xl lg:text-5xl uppercase px-4 md:px-6 py-2 md:py-3 italic shadow-[0_4px_12px_rgba(59,89,218,0.3)] rounded-sm">
          {boxText}
        </span>

        {/* Second part - Lighter blue text, not italicized */}
        <span className="text-[#4F6FD6] font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight">
          {restText}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-600 text-base md:text-lg max-w-2xl text-center leading-relaxed mb-4 font-medium">
          {description}
        </p>
      )}

      {/* Accent line */}
      <div className="w-12 h-px bg-red-500" />
    </motion.div>
  );
}
