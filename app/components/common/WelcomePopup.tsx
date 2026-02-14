"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface WelcomePopupProps {
  onOpenApply: () => void;
}

export default function WelcomePopup({ onOpenApply }: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 2 seconds after page load for a smooth entry
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = () => {
    setIsOpen(false);
    onOpenApply(); // Triggers the main Apply Form
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Card - White Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden text-center border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Logo Area - SMP AGENCY */}
            <div className="mb-6 flex flex-col items-center justify-center gap-2">
              <div className="relative w-16 h-16 mb-2">
                 {/* Using the logo you uploaded */}
                 <Image 
                   src="/images/final-logo/main-logo.png" 
                   alt="SMP Logo" 
                   fill
                   className="object-contain"
                 />
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">
                SMP <span className="text-theme-brand">AGENCY</span>
              </h2>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded-full" />

            {/* Main Text */}
            <h3 className="text-gray-600 text-lg font-medium leading-relaxed mb-8 px-2">
              Fill out the form below for your free social media{" "}
              <span className="text-theme-brand font-bold">Growth Roadmap!</span>
            </h3>

            {/* CTA Button */}
            <button
              onClick={handleCtaClick}
              className="w-full bg-theme-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              CLICK HERE
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}