"use client";

import Header from "./components/design-2/Header2";
import Footer from "./components/design-1/Footer";

import HeroSection from "./components/final-design/hero.section";
import AboutSection from "./components/final-design/about.section";
import TestimonialSection from "./components/final-design/testimonial.section";
import ServicesSection from "./components/final-design/services.section";
import PotentialEarningsSection from "./components/final-design/PotentialEarningsSection";
import StatsSection from "./components/final-design/stats.section";
import WorkWithUs from "./components/final-design/work-with-us.section";
import CalendlySection from "./components/final-design/calendly.section";
import GrowthStoriesSection from "./components/final-design/growth-stories.section";
import FAQSection from "./components/final-design/faq.section";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg">
      <Header />
      <main>
        <HeroSection />
         <AboutSection />
            <TestimonialSection />
            <ServicesSection />
            <PotentialEarningsSection/>
            <StatsSection />
            <WorkWithUs />
            <CalendlySection />
            <GrowthStoriesSection />
            <FAQSection />
            <Footer />
        {/* <div className="relative min-h-screen">
          <div className="relative">
           
          </div>
           Repeating Linear Gradient - On top with low opacity 
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
           SVG Grid Pattern - On top with low opacity 
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
        </div> */}
      </main>
      
    </div>
  );
}
