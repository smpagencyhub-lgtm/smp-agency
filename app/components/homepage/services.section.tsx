"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../final-design/SectionTitle";

const services = [
  {
    title: "MARKETING",
    image: "/images/service (1).jpg",
    height: "h-96", // Tall card
  },
  {
    title: "CHATTING",
    image: "/images/service (2).jpg",
    height: "h-100", // Medium card
  },
  {
    title: "CONTENT STRATEGY & PRODUCTION",
    image: "/images/modf1.jpg",
    height: "h-96", // Tall card
  },
  {
    title: "DMCA & CONTENT REMOVALS",
    image: "/images/sophie1.jpg",
    height: "h-56", // Short card
  },
  {
    title: "OFTV",
    image: "/images/service (3).jpg",
    height: "h-96", // Tall card
  },
  {
    title: "FORWARD PLANNING & TAX ADVICE",
    image: "/images/service1.jpg",
    height: "h-100", // Medium card
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
      {/* Background shapes – SVG decor, fully inside so they don’t affect layout */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Left Side - Cross / plus shape */}
        <motion.div
          className="absolute top-[50%] left-4 md:left-8 w-40 h-40 md:w-48 md:h-48"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M360.5 240V120.5H240V0H0v240h120.5v120.5H240V480h240V240H360.5z" />
          </svg>
        </motion.div>
        {/* Right Side - Two squares (diagonal) */}
        <motion.div
          className="absolute bottom-[20%] right-4 md:right-8 w-40 h-40 md:w-48 md:h-48"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M0 0h240v240H0zM240 240h240v240H240z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 px-6">
        {/* Title */}
        <div className="flex flex-col items-center">
          <SectionTitle
            eyebrow="What we offer"
            title="Our Services"
            highlightStart={false}
            highlightEnd={true}
          />
        </div>

        {/* Cards masonry layout */}
        <motion.div
          className="columns-1 gap-6 sm:columns-2 lg:columns-3 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.15 }}
        >
          {services.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-xl"
            >
              <Link href="/our-services" className="block">
                <div className="relative flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground shadow-xs ring-1 ring-foreground/10 p-0">
                  {/* Full-height image background */}
                  <div className={`relative ${item.height} overflow-hidden`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Gradient overlay - appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Content at bottom */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="font-semibold text-white">
                        {item.title}
                      </div>
                    </div>

                    {/* Arrow icon - top right, rotates on hover */}
                    <ArrowUpRight
                      className="absolute top-6 right-6 h-6 w-6 text-white transition-all duration-300 group-hover:rotate-45"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link href="/our-services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-theme-brand hover:bg-theme-brand-hover text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Services
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
