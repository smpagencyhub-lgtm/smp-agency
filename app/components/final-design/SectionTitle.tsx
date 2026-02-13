"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  className?: string;
  highlightStart?: boolean; // Highlight first word (default: true)
  highlightEnd?: boolean; // Highlight last word (default: false)
  noMarginBottom?: boolean; // No margin bottom (default: true)
}

/**
 * Improved professional section title component
 * Features:
 * - First word in white text on solid red block (optional)
 * - Last word in white text on solid red block (optional)
 * - Remaining words in red text
 * - Enhanced shadow for depth
 * - Smooth animations
 */
export default function SectionTitle({
  eyebrow,
  title,
  className = "",
  highlightStart = true,
  highlightEnd = false,
  noMarginBottom = false,
}: SectionTitleProps) {
  // Split title into words
  const words = title.split(" ");

  // Determine which words to highlight
  const firstWord = highlightStart ? words[0] : null;
  const lastWord =
    highlightEnd && words.length > 1 ? words[words.length - 1] : null;

  // Get middle words (between first and last)
  let middleWords: string[] = [];
  if (highlightStart && highlightEnd && words.length > 2) {
    middleWords = words.slice(1, -1);
  } else if (highlightStart && !highlightEnd && words.length > 1) {
    middleWords = words.slice(1);
  } else if (!highlightStart && highlightEnd && words.length > 1) {
    middleWords = words.slice(0, -1);
  } else if (!highlightStart && !highlightEnd) {
    middleWords = words;
  }

  const middleText = middleWords.join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col items-center ${noMarginBottom ? "mb-10" : "mb-16 md:mb-24"}   ${className}`}
    >
      {/* Eyebrow text */}
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-theme-brand text-xs font-semibold uppercase tracking-[0.2em] mb-6"
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Main title with improved design */}
      <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-2 md:gap-0">
        {/* First word in red block (if highlightStart) */}
        {firstWord && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block"
          >
            <div
              className="bg-theme-brand px-5 md:px-7 lg:px-8 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl relative overflow-hidden"
              style={{
                boxShadow:
                  "0 10px 30px rgba(142, 8, 7, 0.4), 0 4px 16px rgba(142, 8, 7, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <span className="relative text-white text-2xl md:text-5xl lg:text-6xl font-extrabold  uppercase tracking-tight leading-none whitespace-nowrap drop-shadow-sm">
                {firstWord}
              </span>
            </div>
          </motion.div>
        )}

        {/* Middle words */}
        {middleText && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`text-theme-brand text-2xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight leading-none ${
              firstWord ? "md:ml-4 lg:ml-5" : ""
            } ${lastWord ? "md:mr-4 lg:mr-5" : ""}`}
            style={{
              textShadow: "0 2px 8px rgba(142, 8, 7, 0.15)",
            }}
          >
            {middleText}
          </motion.span>
        )}

        {/* Last word in red block (if highlightEnd) */}
        {lastWord && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: highlightStart ? 0.3 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative inline-block"
          >
            <div
              className="bg-theme-brand px-5 md:px-7 lg:px-8 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl relative overflow-hidden"
              style={{
                boxShadow:
                  "0 10px 30px rgba(142, 8, 7, 0.4), 0 4px 16px rgba(142, 8, 7, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <span className="relative text-white text-2xl md:text-5xl lg:text-6xl font-extrabold  uppercase tracking-tight leading-none whitespace-nowrap drop-shadow-sm">
                {lastWord}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="origin-center h-0.5 md:h-1 w-20 md:w-24 bg-gradient-to-r from-transparent via-theme-brand to-transparent mt-6 md:mt-8"
        style={{
          boxShadow: "0 2px 8px rgba(142, 8, 7, 0.3)",
        }}
      />
    </motion.div>
  );
}
