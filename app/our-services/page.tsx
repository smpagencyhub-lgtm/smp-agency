"use client";

import Header from "../components/design-2/Header2";
import Footer from "../components/design-1/Footer";
import OurServices from "../components/final-design/our-services";

export default function OurServicesPage() {
  return (
    <>
      {/* Reusing the same dark background style for consistency */}
      <div className="min-h-screen bg-theme-bg">
        <Header />

        {/* We add padding-top (pt-32) so the content isn't hidden behind the fixed Header */}
        <main >
          <OurServices />
          
        </main>

        <Footer />
      </div>
    </>
  );
}
