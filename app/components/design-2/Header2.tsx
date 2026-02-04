"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "The Team", href: "#" },
  { name: "Our Services", href: "#" },
  { name: "FAQ's", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Hook to detect scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide if scrolling down more than 150px, Show if scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    // The animated container
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-200%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* The "Capsule" Navigation Bar 
        - bg-neutral-900/60: Dark semi-transparent background
        - backdrop-blur-md: The "Frosted Glass" effect
        - border-neutral-800: Subtle border to separate from background
      */}
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-neutral-900/70 backdrop-blur-lg border border-neutral-700/50 rounded-full shadow-2xl">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors">
            SMP
            <span className="bg-red-600 text-black px-1 ml-0.5 rounded-sm">
              MARKETING
            </span>
          </span>
        </div>

        {/* CENTER: Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              {/* Hover Underline Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT: CTA Button */}
        <button className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg transform hover:scale-105">
          Apply Now
        </button>
      </nav>
    </motion.header>
  );
}
