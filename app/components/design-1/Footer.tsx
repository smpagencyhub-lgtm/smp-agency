"use client";

import { useState } from "react";
// Adjust this import path if you saved LegalModals somewhere else
import LegalModals from "../design-2/LegalModals";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800/50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <div className="text-2xl lg:text-3xl font-bold mb-6">
                <span className="text-white">SMP</span>
                <span className="text-red-600">MANAGEMENT</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Empowering creators to build their empire and own their space in the digital world.
              </p>
            </div>

            {/* Menu */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Menu</h3>
              <ul className="space-y-3 text-gray-400">
                {['Home', 'About Us', 'Our Services', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-red-600 transition-colors duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button 
                    onClick={() => setActiveModal("terms")}
                    className="hover:text-red-600 transition-colors duration-300 text-sm text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal("privacy")}
                    className="hover:text-red-600 transition-colors duration-300 text-sm text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Social</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors duration-300 text-sm inline-flex items-center space-x-2">
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors duration-300 text-sm inline-flex items-center space-x-2">
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} SMP MANAGEMENT. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-6">
                <button onClick={() => setActiveModal("privacy")} className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-sm">
                  Privacy
                </button>
                <button onClick={() => setActiveModal("terms")} className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-sm">
                  Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* RENDER THE MODAL COMPONENT HERE */}
      <LegalModals 
        activeModal={activeModal} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  );
}
