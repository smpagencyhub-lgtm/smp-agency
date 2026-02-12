"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Marketing",
    text: "Marketing can be a tricky area for many creators. At SMP, we design personalized strategies tailored to your brand, niche, and objectives—no generic templates. With access to over 20 promotion channels, including social media, a 3,000+ page meme network, podcasts, and influencer partnerships, we take care of both planning and execution so you can focus on creating.",
    image: "/images/allaya4.jpg",
  },
  {
    title: "Chatting",
    text: "Fan interaction drives most revenue on platforms like OnlyFans, so doing it right is essential. SMP's UK and US chat team receives extensive training to match the creator's voice authentically and understand fan psychology. This approach boosts income, encourages subscription renewals, and builds lasting trust, because at SMP, results speak louder than words.",
    image: "/images/b-model (2).jpg",
  },
  {
    title: "Content Strategy",
    text: "Knowing what content to post can make or break earnings in a fast-paced industry. There's no one-size-fits-all solution—the gap between average and top performance comes from clear branding and a defined niche. SMP guides creators to understand audience demand and craft content that is unique, engaging, and designed to drive meaningful growth.",
    image: "/images/sophie322.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background shapes – Side Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {/* Left Side - Diamond */}
        <motion.div
          className="absolute top-1/3 left-0 w-52 h-52 border-4 border-theme-brand/30 -translate-x-1/2 rotate-45"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        />
        {/* Right Side - Rounded Square */}
        <motion.div
          className="absolute bottom-1/3 right-0 w-48 h-48 border-4 border-theme-brand/35 rounded-xl translate-x-1/2 rotate-12"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
        />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 px-6">
        {/* Title */}
        <div className="flex flex-col items-center">
            <SectionTitle eyebrow="What we offer" title="Our Services" highlightStart={false} highlightEnd={true} />
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.15 }}
        >
          {services.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-lg hover:shadow-xl hover:border-red-500/20 transition-all duration-300 flex flex-col h-full"
            >
              <Link href="/our-services" className="flex flex-col h-full">
                
                {/* 1. IMAGE CONTAINER */}
                <div className="relative w-full h-64 overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    quality={85}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* 2. TEXT CONTENT CONTAINER */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  
                  {/* TITLE (Moved Here) */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-theme-brand transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Divider Line */}
                  <div className="h-1 w-12 bg-theme-brand/20 mb-4 rounded-full group-hover:w-20 transition-all duration-300" aria-hidden />

                  {/* Description Text */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4 mb-6 flex-1 font-medium">
                    {item.text}
                  </p>

                  {/* Learn More Link */}
                  <span className="inline-flex items-center gap-2 text-theme-brand font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all mt-auto">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}