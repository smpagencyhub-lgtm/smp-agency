'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ApplicationForm from './components/ApplicationForm';
import PageLoader from './components/PageLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle page load completion
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Delay to allow loader animation to complete smoothly
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <PageLoader />
      <div 
        className={`min-h-screen bg-[#1a1a1a] text-white overflow-hidden transition-opacity duration-700 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Header />
        <HeroSection />
        <WhoWeAreSection/>
        <StatsSection />
        <ServicesSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ApplicationForm />
        <Footer />
      </div>
    </>
  );
}
