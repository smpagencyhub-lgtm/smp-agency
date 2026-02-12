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
        <main >
           <TheTeamSection />
          
         
        </main>

        <Footer />
      </div>
    </>
  );
}
