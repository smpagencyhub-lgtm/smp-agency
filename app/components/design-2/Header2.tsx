"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Modal from "./Modal";
import ApplyNowForm from "./ApplyNowForm";
import { useApplyFormSubmit } from "./useApplyFormSubmit";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Team", href: "/the-team" },
  { name: "Our Services", href: "/our-services" },
  { name: "FAQ's", href: "/#faq" }, // Target ID
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
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Custom Logic for Hash Links (FAQ, Team, Services)
    if (link.href.includes("#")) {
      e.preventDefault(); // Stop default behavior

      const [path, hash] = link.href.split("#");
      const targetId = hash;

      // Case 1: We are already on the correct page (e.g. Home)
      if (pathname === path || (path === "/" && pathname === "/")) {
        const element = document.getElementById(targetId);
        if (element) {
          // Offset for fixed header (approx 80px)
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } 
      // Case 2: We are on a different page -> Navigate then let useEffect handle scroll
      else {
        router.push(link.href);
      }
      
      if (onClick) onClick();
      return;
    }

    // Default behavior for standard links
    if (onClick) onClick();
  };

  const className = mobile
    ? "block w-full py-3.5 px-5 text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800/50 transition-colors border-b border-neutral-700/40 last:border-b-0 first:pt-4"
    : "text-sm font-medium text-gray-300 hover:text-white transition-colors relative group";

  return (
    <Link 
      href={link.href} 
      onClick={handleClick} 
      className={className}
      scroll={false} // Disable Next.js auto-scroll to prevent conflicts
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
  const pathname = usePathname(); // Get current path
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const { isSubmitting, submitError, handleSubmit } = useApplyFormSubmit(() =>
    setApplyModalOpen(false)
  );

  // --- NEW: Handle Cross-Page Scrolling ---
  // This runs whenever the URL path changes (e.g. arriving at Home from Team page)
  useEffect(() => {
    // Check if there is a hash in the URL (e.g. #faq)
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // remove #
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a tiny bit for the page to render, then scroll
        setTimeout(() => {
          const yOffset = -80; // Header height offset
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname]); 

  const scrollRef = useRef({ latest: 0, previous: 0 });
  const updateHidden = useDebouncedCallback(() => {
    const { latest, previous } = scrollRef.current;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, 120);

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollRef.current.previous = scrollRef.current.latest;
    scrollRef.current.latest = latest;
    updateHidden();
  });

  return (
    <motion.header
      layout={false}
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
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0"
          >
            <span className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-red-600/50 shadow-[0_0_20px_rgba(220,38,38,0.45)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial from-red-600/40 via-transparent to-transparent opacity-70" />
                <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                  <Image
                    src="/images/logo.png"
                    alt="SMP Management logo"
                    fill
                    sizes="40px"
                    quality={80}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-base font-bold tracking-tight text-white">
                  <span className="text-white">SMP</span>{" "}
                  <span className="text-red-500">MANAGEMENT</span>
                </span>
              </div>
            </span>
          </Link>

          {/* --- CENTER: Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </div>

          {/* --- RIGHT: CTA (desktop only) + Mobile menu button --- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setApplyModalOpen(true)}
              className="hidden md:inline-flex bg-white text-black hover:bg-red-600 hover:text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg transform hover:scale-105 shrink-0"
            >
              Apply Now
            </button>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="md:hidden relative flex items-center justify-center w-11 h-11 rounded-xl border border-neutral-600/50 bg-neutral-800/40 hover:bg-neutral-700/60 hover:border-neutral-500/50 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              <span className="relative block w-5 h-4" aria-hidden="true">
                <span
                  className={`absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-5 h-[2px] bg-current rounded-full -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    mobileMenuOpen
                      ? "opacity-0 scale-x-0"
                      : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-0"
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
                className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-md md:hidden pointer-events-auto"
                style={{ zIndex: 40 }}
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="md:hidden absolute top-full left-0 right-0 mt-2 py-1 bg-neutral-900 border border-neutral-700/60 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto"
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
                <div className="p-4 pt-3 pb-4 border-t border-neutral-700/40">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setApplyModalOpen(true);
                    }}
                    className="w-full bg-white text-black hover:bg-red-600 hover:text-white py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
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
            loading={isSubmitting}
            onSubmit={handleSubmit}
            onCancel={() => setApplyModalOpen(false)}
          />
          {submitError && (
            <p className="mt-4 text-sm text-red-400">{submitError}</p>
          )}
        </Modal>
      </div>
    </motion.header>
  );
}
