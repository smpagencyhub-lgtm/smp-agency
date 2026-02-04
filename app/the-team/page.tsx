'use client';

import Header from '../components/design-2/Header2';
import { Footer } from '../components/design-1';
import TheTeamSection from '../components/design-2/TheTeamSection';

export default function TheTeamPage() {
  return (
    <>
      {/* Reusing the same dark background style for consistency */}
      <div className="min-h-screen bg-[var(--theme-bg)] relative overflow-hidden bg-gradient-to-br from-[#180000] via-black to-[#5e0e0e]">
        
        <Header />
        
        {/* We add padding-top (pt-32) so the content isn't hidden behind the fixed Header */}
        <main className="pt-32">
          <TheTeamSection />
        </main>

        <Footer />
      </div>
    </>
  );
}