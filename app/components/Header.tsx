'use client';

import { useScroll } from '../hooks/useScroll';

export default function Header() {
  const scrolled = useScroll();

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-gray-800 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-red-600/10'
          : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <span className="text-white">Fans</span>
            <span className="text-red-600">Hub</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-red-600 transition-all duration-300 transform hover:scale-105 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="hover:text-red-600 transition-all duration-300 transform hover:scale-105 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="hover:text-red-600 transition-all duration-300 transform hover:scale-105 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#faq"
              className="hover:text-red-600 transition-all duration-300 transform hover:scale-105 relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <a
            href="#apply"
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
