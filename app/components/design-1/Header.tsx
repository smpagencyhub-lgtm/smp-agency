"use client";

import { useState } from "react";
import { useScroll } from "../../hooks/useScroll";

export default function Header() {
  const scrolled = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/98 backdrop-blur-xl border-b border-gray-800/50 shadow-xl shadow-[#8e0807]/5"
          : "bg-black/90 backdrop-blur-lg border-b border-gray-800/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="text-white transition-colors duration-300 group-hover:text-gray-200">
                SMP
              </span>
              <span className="text-[#8e0807] transition-colors duration-300 group-hover:text-red-500">
                MANAGEMENT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8e0807] transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a
              href="#services"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8e0807] transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a
              href="#testimonials"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8e0807] transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a
              href="#faq"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8e0807] transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#apply"
              className="px-6 py-2.5 bg-[#8e0807] hover:bg-red-700 text-white text-sm font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#8e0807]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800/50 py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-md transition-all duration-300"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-md transition-all duration-300"
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-md transition-all duration-300"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-md transition-all duration-300"
              >
                FAQ
              </a>
              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-[#8e0807] hover:bg-red-700 text-white text-center font-semibold rounded-md transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
