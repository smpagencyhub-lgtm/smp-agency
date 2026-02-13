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
  { name: "FAQ's", href: "/#faq" },
  { name: "Blog", href: "/blog" },
];

function NavLink({
  link,
  onClick,
  mobile,
  variant = "solid",
}: {
  link: (typeof navLinks)[0];
  onClick?: () => void;
  mobile?: boolean;
  variant?: "glass" | "solid";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.href.includes("#")) {
      e.preventDefault();
      const [path, hash] = link.href.split("#");
      const targetId = hash;

      if (pathname === path || (path === "/" && pathname === "/")) {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        router.push(link.href);
      }

      if (onClick) onClick();
      return;
    }

    if (onClick) onClick();
  };

  // Check if link is active
  const isActive = mobile
    ? pathname === link.href || (link.href === "/" && pathname === "/")
    : pathname === link.href || (link.href === "/" && pathname === "/");

  const className = mobile
    ? `block w-full py-2.5 px-3 text-sm font-medium transition-colors duration-150 ${
        isActive
          ? "text-theme-brand"
          : "text-foreground/80 hover:text-foreground"
      }`
    : variant === "glass"
      ? "relative bg-transparent px-1.5 text-sm font-medium text-white/90 transition-colors"
      : "relative bg-transparent px-1.5 text-sm font-medium text-secondary-foreground hover:text-secondary-foreground transition-colors";

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        href={link.href}
        onClick={handleClick}
        className={className}
        scroll={false}
      >
        {link.name}
      </Link>
      {!mobile && (
        <motion.div
          className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-theme-brand"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}

type HeaderProps = {
  applyModalOpen?: boolean;
  onApplyModalOpenChange?: (open: boolean) => void;
};

export default function Header({
  applyModalOpen: controlledApplyOpen,
  onApplyModalOpenChange,
}: HeaderProps = {}) {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalApplyOpen, setInternalApplyOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(() => pathname === "/");

  const applyModalOpen = onApplyModalOpenChange
    ? (controlledApplyOpen ?? false)
    : internalApplyOpen;
  const setApplyModalOpen = onApplyModalOpenChange ?? setInternalApplyOpen;

  const { isSubmitting, submitError, handleSubmit } = useApplyFormSubmit(() =>
    setApplyModalOpen(false),
  );

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
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

  // Glass header only in hero; solid/light past hero or on other pages
  useEffect(() => {
    const checkHero = () => {
      if (pathname !== "/") {
        setIsInHero(false);
        return;
      }
      const threshold =
        typeof window !== "undefined" ? window.innerHeight * 0.85 : 700;
      setIsInHero(window.scrollY < threshold);
    };
    checkHero();
    window.addEventListener("scroll", checkHero, { passive: true });
    return () => window.removeEventListener("scroll", checkHero);
  }, [pathname]);

  const variant = isInHero ? "glass" : "solid";

  return (
    <>
      <motion.header
        layout={false}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-200%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-5 pointer-events-none lg:top-12 lg:px-4"
      >
        <section
          className={`pointer-events-auto absolute left-1/2 w-[90%] lg:w-full max-w-4xl -translate-x-1/2 rounded-full border transition-colors duration-300 ${
            variant === "glass"
              ? "border-white/20 bg-white/10 backdrop-blur-xl"
              : "border-border bg-background/95 backdrop-blur-md shadow-lg"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 cursor-pointer group min-w-0"
            >
              <div className="relative w-7 h-7 sm:w-7 sm:h-7">
                <Image
                  src="/images/final-logo/main-logo.png"
                  alt="SMP Agency logo"
                  fill
                  sizes="40px"
                  quality={80}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span
                className={`text-sm font-black tracking-tight ${
                  variant === "glass" ? "text-white" : "text-theme-brand"
                }`}
              >
                <span
                  className={
                    variant === "glass" ? "text-white" : "text-gray-900"
                  }
                >
                  SMP
                </span>{" "}
                <span
                  className={`
                    ${variant === "glass" ? "text-white/90" : "text-theme-brand"}
                  `}
                >
                  AGENCY
                </span>
              </span>
            </Link>

            {/* Desktop nav - centered */}
            <nav
              aria-label="Main"
              className="relative flex flex-1 items-center justify-center max-lg:hidden"
            >
              <ul className="flex flex-1 list-none items-center justify-center gap-5">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative">
                    <NavLink link={link} variant={variant} />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: CTA + mobile menu */}
            <div className="flex items-center gap-2.5">
              <motion.button
                type="button"
                onClick={() => setApplyModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="max-lg:hidden inline-flex h-9 items-center justify-center rounded-md bg-theme-brand px-4 text-sm font-medium text-white shadow-xs transition-all hover:bg-theme-brand-hover focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Apply Now
              </motion.button>

              <motion.button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen ? "true" : "false"}
                onClick={() => setMobileMenuOpen((o) => !o)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`relative flex size-8 items-center justify-center lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md transition-colors ${
                  variant === "glass"
                    ? "text-white/90 focus:ring-white/30 focus:ring-offset-transparent"
                    : "text-muted-foreground focus:ring-ring/50 focus:ring-offset-background"
                }`}
              >
                <span className="sr-only">
                  {mobileMenuOpen ? "Close main menu" : "Open main menu"}
                </span>
                <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "top-0 translate-y-0 rotate-45"
                        : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition duration-300 ease-in-out ${
                      mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "top-0 translate-y-0 -rotate-45"
                        : "translate-y-1.5"
                    }`}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </section>
      </motion.header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 9998 }}
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-1/2 -translate-x-1/2 w-full max-w-sm top-24 flex flex-col rounded-xl border border-border/50 bg-background/95 backdrop-blur-md shadow-lg lg:hidden overflow-hidden"
              style={{ zIndex: 9999 }}
            >
              <nav className="flex flex-1 flex-col py-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    mobile
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
                <div className="pt-2 mt-1 px-3">
                  <motion.button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setApplyModalOpen(true);
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="w-full rounded-lg bg-theme-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-theme-brand-hover"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Modal
        open={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        title="Apply Now"
        description="Fill in your details and we'll get back to you within 24–48 hours."
        size="md"
        // variant="light"
      >
        <ApplyNowForm
          loading={isSubmitting}
          onSubmit={handleSubmit}
          onCancel={() => setApplyModalOpen(false)}
        />
        {submitError && (
          <p className="mt-4 text-sm text-theme-brand">{submitError}</p>
        )}
      </Modal>
    </>
  );
}
