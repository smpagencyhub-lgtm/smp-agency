'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

// UPDATED: IDs are kept so scrolling works
const navLinks = [
  { name: "Home", href: "/" },            // Changed from "#home" to "/" (Main Page)
  { name: "The Team", href: "/the-team" },// Changed from "#the-team" to "/the-team" (New Page)
  { name: "Our Services", href: "/our-services" }, // Keeps scrolling on Home, but works from other pages
  { name: "FAQ's", href: "/#faq" },
  { name: "Blog", href: "/blog" },
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
      // Added pointer-events-none so the fixed container doesn't block clicks on the sides
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* The "Capsule" Navigation Bar 
          - Reverted to max-w-5xl and py-3 (Original Size)
          - Added pointer-events-auto so you can click the links
      */}
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-neutral-900/70 backdrop-blur-lg border border-neutral-700/50 rounded-full shadow-2xl">
        
        {/* LEFT: Logo (SMP - Original Size) */}
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors flex items-center">
             <span className="text-white px-1 ml-0.5 rounded-sm">SMP</span>
             <span className="text-red-600 px-1 ml-0.5 rounded-sm">Management</span>
          </span>
        </div>

        {/* CENTER: Navigation Links (Original Size) */}
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

        {/* RIGHT: CTA Button (Original Size) */}
        <button className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg transform hover:scale-105">
          Apply Now
        </button>

      </nav>
    </motion.header>
  );
}