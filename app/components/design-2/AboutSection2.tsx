"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button2 from "./Button2";

const aboutContent = {
  label: "About Us",
  headline:
    "As the premier management agency focused on OnlyFans, we dedicate ourselves to nurturing authentic audience expansion.",
  introParagraphs: [
    "Picture yourself jet-setting across the globe in luxury, residing in lavish 5-star lodgings, and indulging in exclusive gatherings. You're realizing your aspirations of owning your dream car or house, supporting your dear ones, and authentically embracing your optimal lifestyle.",
    "Explore these possibilities and beyond by teaming up with Fanmous Only, the foremost OnlyFans management agency on the Sunshine Coast. We empower content creators and influencers globally to optimize their income potential.",
  ],
  wrapParagraphs: [
    "Interested in what distinguishes us as the premier OnlyFans agency? We manage all aspects, from initial setup and account audits to content planning and maintaining subscriber interaction. Moreover, we offer a lucrative referral program, exclusive luxury perks, and unmatched networking opportunities not available elsewhere.",
    "Moreover, be confident that our team, consisting of 95% women, will treat your content with utmost care and respect, providing you with peace of mind.",
  ],
  embeddedImageSrc: "/images/model2.jpg",
  embeddedImageAlt: "Fanmous Only - Creator lifestyle",
  cta: "KNOW MORE",
};

export default function AboutSection2() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--theme-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-stretch min-h-112">
          {/* Left column - Large dominant image, no overlay */}
          <motion.div
            initial={{ opacity: 0, x: -56, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              mass: 0.8,
            }}
            className="relative order-2 lg:order-1 min-h-80 lg:min-h-0"
          >
            <div className="relative w-full h-full min-h-80 lg:min-h-128 rounded-lg overflow-hidden">
              <Image
                src="/images/model1.jpg"
                alt="Fanmous Only - Premier OnlyFans management"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              {/* Subtle gradient for logo readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              {/* Circular logo overlay - bottom left */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2">
                <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/90 bg-black/30 backdrop-blur-sm shadow-xl">
                  <span className="font-cursive text-white text-lg sm:text-xl font-medium tracking-wide text-center leading-tight px-1">
                    Fanmous Only
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Label, headline, paragraphs, embedded image block, CTA */}
          <motion.div
            initial={{ opacity: 0, x: 56, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              mass: 0.8,
              delay: 0.08,
            }}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            {/* Section header — same pattern as Services */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--theme-brand-muted)]"
                aria-hidden
              />
              <span className="font-sans text-white/80 text-xs font-medium uppercase tracking-[0.2em]">
                {aboutContent.label}
              </span>
            </div>
            <h2 className="font-sans font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight max-w-2xl mb-6">
              {aboutContent.headline}
            </h2>

            {/* First paragraph block - full width */}
            <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
              {aboutContent.introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Second block: text wrapping around oval embedded image */}
            <div className="flow-root">
              <div className="float-right ml-4 mb-4 w-40 sm:w-48 lg:w-56 shrink-0">
                <div className="relative aspect-[3/4] rounded-[50%] overflow-hidden">
                  <Image
                    src={aboutContent.embeddedImageSrc}
                    alt={aboutContent.embeddedImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, 224px"
                  />
                </div>
              </div>
              <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed">
                {aboutContent.wrapParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* CTA Button - left aligned */}
            {/* <div className="mt-8 sm:mt-10">
              <Button2 href="#services" variant="primary">
                {aboutContent.cta}
              </Button2>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
