"use client";

import Button2 from "./Button2";

const headerContent = {
  brand: "Fanmous Only",
  tagline: "OnlyFans Management",
  nav: {
    left: [
      { label: "Home", href: "#hero" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
    ],
    right: [
      { label: "Blog", href: "#blog" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  cta: "Apply Now!",
};

export default function Header2() {
  return (
    <nav className="relative z-20 py-4 lg:py-5" aria-label="Main navigation">
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left links */}
        <div className="flex items-center gap-6 lg:gap-8 text-white text-sm font-medium tracking-wide uppercase">
          {headerContent.nav.left.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center - Logo */}
        <a
          href="#hero"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <span className="font-cursive text-2xl lg:text-3xl font-medium text-[var(--theme-brand)]">
            {headerContent.brand}
          </span>
          <span className="text-white text-xs lg:text-sm font-normal normal-case tracking-normal mt-0.5">
            {headerContent.tagline}
          </span>
        </a>

        {/* Right - Links + CTA */}
        <div className="flex items-center gap-6 lg:gap-8">
          {headerContent.nav.right.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-sm font-medium tracking-wide uppercase hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded hidden sm:inline"
            >
              {item.label}
            </a>
          ))}
          <Button2 href="#apply" variant="primary" size="sm">
            {headerContent.cta}
          </Button2>
        </div>
      </div>
    </nav>
  );
}
