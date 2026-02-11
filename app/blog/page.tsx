"use client";

import Header from "../components/design-2/Header2";
import Footer from "../components/design-1/Footer";
import BlogSection from "../components/design-2/BlogSection";

export default function BlogPage() {
  return (
    <>
      {/* Reusing the same dark background style for consistency */}
      <div className="min-h-screen bg-[var(--theme-bg)] relative overflow-hidden bg-gradient-to-br from-[#180000] via-black to-[#5e0e0e]">
        <Header />

        {/* We add padding-top (pt-32) so the content isn't hidden behind the fixed Header */}
        <main className="pt-32">
          <BlogSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
