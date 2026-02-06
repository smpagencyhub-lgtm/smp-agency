"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Team", href: "/the-team" },
  { name: "Our Services", href: "/our-services" },
  { name: "FAQ's", href: "/faq" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-200%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-neutral-900/70 backdrop-blur-lg border border-neutral-700/50 rounded-full shadow-2xl">
        
        {/* --- LEFT: Logo + Brand Name --- */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          {/* LOGO IMAGE */}
          

          {/* BRAND TEXT */}
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors flex items-center">
             <span className="text-white px-1 ml-0.5">SMP</span>
             <div className="relative w-8 h-8"> 
            <Image 
              src="/images/logo.png" // <--- REPLACE WITH YOUR LOGO PATH (e.g., /public/logo.png)
              alt="SMP Logo"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
             <span className="text-red-600 px-1 ml-0.5">Management</span>
          </span>
        </Link>

        {/* --- CENTER: Navigation Links --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* --- RIGHT: CTA Button --- */}
        <button className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg transform hover:scale-105">
          Apply Now
        </button>
      </nav>
    </motion.header>
  );
}
