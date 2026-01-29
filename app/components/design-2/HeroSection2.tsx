"use client";

const HeroSection2 = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Blurred dark background with red tones */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/model2.jpg')",
          filter: "blur(10px)",
          opacity: 0.5,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-white z-20">
            {/* Subtitle */}
            <p className="text-2xl lg:text-3xl font-cursive text-red-300/90">
              Fanmous Only
            </p>

            {/* Main headline */}
            <h1 className="text-4xl font-bold leading-tight text-white font-sans">
              Harness the power of your social media following, set off on
              worldwide journeys, embrace your ideal lifestyle, and savor each
              moment to the maximum.
            </h1>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#apply"
                className="inline-block px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:-translate-y-1 active:translate-y-0 uppercase tracking-wide"
              >
                Apply Now!
              </a>
            </div>
          </div>

          {/* Right side - Featured image with decoration */}
          <div className="relative flex items-center justify-center lg:justify-end z-20">
            <div className="relative w-full max-w-lg">
              {/* red swirl decoration - artistic hand-drawn style */}
              <svg
                className="absolute -z-10 w-[140%] h-[140%] -top-[20%] -right-[20%] pointer-events-none"
                viewBox="0 0 600 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Main swirl path */}
                <path
                  d="M 80 650 Q 120 600 180 640 Q 240 680 300 620 Q 360 560 420 500 Q 480 440 520 380 Q 560 320 540 260 Q 520 200 480 160 Q 440 120 400 100 Q 360 80 320 90 Q 280 100 250 140 Q 220 180 200 230 Q 180 280 170 340 Q 160 400 150 460 Q 140 520 120 580 Q 100 640 80 650 Z"
                  stroke="#ec4899"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                {/* Secondary swirl for depth */}
                <path
                  d="M 120 620 Q 160 580 220 610 Q 280 640 330 590 Q 380 540 430 490 Q 480 440 500 390 Q 520 340 500 290 Q 480 240 450 210 Q 420 180 390 170 Q 360 160 330 170 Q 300 180 280 210 Q 260 240 250 280 Q 240 320 230 370 Q 220 420 210 480 Q 200 540 180 590 Q 160 640 120 620 Z"
                  stroke="#f472b6"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                {/* Accent swirl */}
                <path
                  d="M 100 600 Q 140 560 200 590 Q 260 620 310 570 Q 360 520 410 470 Q 460 420 480 370 Q 500 320 480 270 Q 460 220 430 190 Q 400 160 370 150 Q 340 140 310 150 Q 280 160 260 190 Q 240 220 230 260 Q 220 300 210 350 Q 200 400 190 460 Q 180 520 160 570 Q 140 620 100 600 Z"
                  stroke="#f9a8d4"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>

              {/* Image container */}
              <div
                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-4 border-white shadow-2xl"
                style={{ transform: "rotate(-3deg)" }}
              >
                {/* Placeholder image - replace with actual image */}
                <div
                  className="w-full h-full bg-gradient-to-br from-red-200 via-red-100 to-red-300 flex items-center justify-center relative"
                  // style={{
                  //   backgroundImage:
                  //     'url(\'data:image/svg+xml,%3Csvg width="600" height="800" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="imgGrad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23fce7f3;stop-opacity:1" /%3E%3Cstop offset="50%25" style="stop-color:%23fbcfe8;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23f9a8d4;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23imgGrad)"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3EFeatured Image%3C/text%3E%3C/svg%3E\')',
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  // }}
                >
                  {/* You can replace this div with an actual image: */}
                  <img
                    src="/images/model2.jpg"
                    alt="Featured"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text overlay on image */}
                <div className="absolute bottom-6 right-6 z-10">
                  <p className="text-red-300/90 text-xl lg:text-2xl font-cursive drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Fanmous Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
