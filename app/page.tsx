"use client";

// React
import { useState, useEffect } from "react";

// Page Loader
import PageLoader from "./components/design-1/PageLoader";

// Header And Footer
import Footer from "./components/design-1/Footer";

// ** Design 1 **
// import HeroSection from "./components/design-1/HeroSection";
// import StatsSection from "./components/design-1/StatsSection";
// import ServicesSection from "./components/design-1/ServicesSection";
// import TestimonialsSection from "./components/design-1/TestimonialsSection";
// import AboutSection from "./components/design-1/AboutSection";
// import FAQSection from "./components/design-1/FAQSection";
// import ApplicationForm from "./components/design-1/ApplicationForm";

// ** Design 2 **
import HeroSection2 from "./components/design-2/HeroSection2";
import AboutSection2 from "./components/design-2/AboutSection2";
import ServicesSection2 from "./components/design-2/ServicesSection2";
import TestimonialsSection2 from "./components/design-2/TestimonialsSection2";
import FAQSection2 from "./components/design-2/FAQSection2";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle page load completion
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Delay to allow loader animation to complete smoothly
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <PageLoader />
      <div
        className={`min-h-screen bg-[var(--theme-bg)] text-white overflow-hidden transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* <Header /> */}

        {/* DESIGN 1 */}
        {/* 
              <HeroSection />
              <StatsSection />
              <ServicesSection />
              <TestimonialsSection />
              <AboutSection />
              <FAQSection />
              <ApplicationForm /> 
        */}

        {/* DESIGN 2 */}
        <HeroSection2 />
        <AboutSection2 />
        <ServicesSection2 />
        <TestimonialsSection2 />
        <FAQSection2 />

        <Footer />
      </div>
    </>
  );
}
