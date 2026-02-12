"use client";

import Header from "../components/design-2/Header2";
import Footer from "../components/design-1/Footer";
import BlogPageSection from "../components/final-design/blog-page.section";

export default function BlogPage() {
  return (
    <>
      {/* Reusing the same dark background style for consistency */}
      <div className="min-h-screen bg-theme-bg">
        <Header />

        {/* We add padding-top (pt-32) so the content isn't hidden behind the fixed Header */}
        <main >
           <BlogPageSection />
          
        </main>

        <Footer />
      </div>
    </>
  );
}
