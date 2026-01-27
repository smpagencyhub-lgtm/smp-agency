import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ApplicationForm from './components/ApplicationForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
}
