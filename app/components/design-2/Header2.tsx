"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import ApplyNowForm from './ApplyNowForm';
import type { ApplyNowFormData } from './ApplyNowForm';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Team", href: "/the-team" },
  { name: "Our Services", href: "/our-services" },
  { name: "FAQ's", href: "/faq" },
  { name: "Blog", href: "/blog" },
];

function NavLink({
  link,
  onClick,
  mobile,
}: {
  link: (typeof navLinks)[0];
  onClick?: () => void;
  mobile?: boolean;
}) {
  const className = mobile
    ? "block w-full py-3.5 px-5 text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800/50 transition-colors border-b border-neutral-700/40 last:border-b-0 first:pt-4"
    : "text-sm font-medium text-gray-300 hover:text-white transition-colors relative group";
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={className}
    >
      {link.name}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
      )}
    </Link>
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

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
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
    >
      <div className="pointer-events-auto relative w-full max-w-5xl">
        <nav className="flex items-center justify-between w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-neutral-900/70 backdrop-blur-lg border border-neutral-700/50 rounded-full shadow-2xl">
          {/* --- LEFT: Logo + Brand Name --- */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0">
            <span className="text-base sm:text-xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors flex items-center shrink-0">
              <span className="text-white px-0.5 sm:px-1 ml-0.5 hidden sm:inline">SMP</span>
              <div className="relative w-8 h-8 sm:w-8 sm:h-8 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="SMP Logo"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-red-600 px-0.5 sm:px-1 ml-0.5 hidden sm:inline">Management</span>
            </span>
          </Link>

          {/* --- CENTER: Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </div>

          {/* --- RIGHT: CTA + Mobile menu button --- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setApplyModalOpen(true)}
              className="bg-white text-black hover:bg-red-600 hover:text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg transform hover:scale-105 shrink-0"
            >
              Apply Now
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="md:hidden relative flex items-center justify-center w-11 h-11 rounded-xl border border-neutral-600/50 bg-neutral-800/40 hover:bg-neutral-700/60 hover:border-neutral-500/50 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              <span className="relative block w-5 h-4" aria-hidden>
                <span
                  className={`absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-5 h-[2px] bg-current rounded-full -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* --- Mobile menu dropdown --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-md md:hidden"
                style={{ zIndex: 40 }}
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="md:hidden absolute top-full left-0 right-0 mt-2 py-1 bg-neutral-900 border border-neutral-700/60 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{ zIndex: 50 }}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    mobile
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Apply Now modal */}
        <Modal
          open={applyModalOpen}
          onClose={() => setApplyModalOpen(false)}
          title="Apply Now"
          description="Fill in your details and we’ll get back to you within 24–48 hours."
          size="md"
        >
          <ApplyNowForm
            onSubmit={(data: ApplyNowFormData) => {
              console.log('Apply form submitted:', data);
              setApplyModalOpen(false);
            }}
            onCancel={() => setApplyModalOpen(false)}
          />
        </Modal>
      </div>
    </motion.header>
  );
}
