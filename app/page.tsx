"use client";

import { useState } from "react";
import Header from "./components/common/Header2";
import Footer from "./components/common/Footer";

import HeroSection from "./components/homepage/hero.section";
import AboutSection from "./components/homepage/about.section";
import TestimonialSection from "./components/homepage/testimonial.section";
import ServicesSection from "./components/homepage/services.section";
import PotentialEarningsSection from "./components/homepage/PotentialEarningsSection";
import StatsSection from "./components/homepage/stats.section";
import WorkWithUs from "./components/homepage/work-with-us.section";
import CalendlySection from "./components/homepage/calendly.section";
import GrowthStoriesSection from "./components/homepage/growth-stories.section";
import FAQSection from "./components/homepage/faq.section";

export default function Home() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-bg">
      <Header
        applyModalOpen={applyModalOpen}
        onApplyModalOpenChange={setApplyModalOpen}
      />
      <main>
        <HeroSection onStartJourneyClick={() => setApplyModalOpen(true)} />
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
