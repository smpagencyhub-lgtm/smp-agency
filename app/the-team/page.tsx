"use client";

import Header from "../components/design-2/Header2";
import Footer from "../components/design-1/Footer";
import TheTeamSection from "../components/final-design/the-team-section";

export default function TheTeamPage() {
  return (
    <>
      <div className="min-h-screen bg-theme-bg">
        <Header />

        {/* We add padding-top (pt-32) so the content isn't hidden behind the fixed Header */}
        <main className="relative min-h-screen">
          <div className="relative">
            <TheTeamSection />
          </div>
          {/* Repeating Linear Gradient - On top with low opacity */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none z-[3]"
            style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 70px,
                rgb(185 28 28) 70px,
                rgb(185 28 28) 71px
              )`,
            }}
            aria-hidden
          />
          {/* SVG Grid Pattern - On top with low opacity */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none z-[3]"
            aria-hidden
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="main-grid"
                  width="44"
                  height="44"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 44 0 L 0 0 0 44"
                    fill="none"
                    stroke="rgb(185 28 28)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#main-grid)" />
            </svg>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
