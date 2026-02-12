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
        <PotentialEarningsSection />
        <StatsSection />
        <WorkWithUs />
        <CalendlySection />
        <GrowthStoriesSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
