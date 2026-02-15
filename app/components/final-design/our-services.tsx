"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  MessageCircle,
  Video,
  ShieldCheck,
  Tv,
  FileText,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Modal from "../common/Modal";
import ApplyNowForm from "../common/ApplyNowForm";
import { useApplyFormSubmit } from "../common/useApplyFormSubmit";

// --- DATA: Services ---
const services = [
  {
    title: "MARKETING",
    icon: BarChart3,
    description:
      "Marketing is one of the biggest challenges for creators and agencies, especially when it comes to generating consistent, high-quality traffic. At SMP, we take a strategic and data-driven approach to growth — never using generic solutions. We identify the platforms and campaigns that work best for you as an individual creator, building a fully customized strategy around your brand, niche, and goals. Our dedicated marketing account managers guide you at every stage, providing access to over 20 proven promotion methods, including advanced social media campaigns, a 3,000+ meme page network, podcasts, and influencer collaborations — all designed to maximize visibility and drive long-term success.",
    image: "/images/starmodel/IMG_1982.jpg",
    align: "right",
  },
  {
    title: "CHATTING",
    icon: MessageCircle,
    description:
      "Chatting is the main revenue driver on OnlyFans, and the quality of communication directly impacts your earnings. Poor messaging, lack of cultural awareness, and inconsistent engagement can significantly reduce performance. That’s why SMP’s highly trained UK and USA chat teams represent creators with authenticity, emotional intelligence, and professionalism. Through rigorous training and our bespoke creator profile mapping system, every interaction reflects your unique voice and brand identity. This results in higher spending per fan, fewer chargebacks, stronger renewals, and long-term subscriber loyalty.",
    image: "/images/g-model (5).jpg",
    align: "left",
  },
  {
    title: "CONTENT STRATEGY & PRODUCTION",
    icon: Video,
    description:
      "In a fast-moving and highly competitive industry, having the right content strategy is essential for success. At SMP, defining your content direction is one of our top priorities. We help creators refine their brand positioning and niche, often making the difference between average and high-level earnings. With millions of creators competing for attention, our team analyzes market trends and audience behavior to develop content that is unique, high-performing, and conversion-focused — helping you stand out and achieve measurable results.",
    image: "/images/starmodel/bray1.jpg",
    align: "right",
  },
  {
    title: "DMCA & CONTENT REMOVALS",
    icon: ShieldCheck,
    description:
      "As your brand grows, protecting your content becomes critical. SMP provides dedicated protection through our in-house monitoring team that continuously scans the internet for stolen or reposted material. While leaks cannot always be prevented, we take immediate and proactive action using advanced AI detection tools to identify violations, auto-flag unauthorized content, and issue DMCA notices. This ensures your income is protected, your reputation remains secure, and your long-term growth stays uninterrupted.",
    image: "/images/suki2.jpg",
    align: "left",
  },
  {
    title: "OFTV",
    icon: Tv,
    description:
      "OFTV is one of the most powerful platforms for driving exposure and attracting new fans, but gaining access can be complex and highly competitive. SMP manages the entire process for you — from content ideation and creative planning to professional videography, editing, and submission. Our experienced creative team supports you at every stage and handles the pitch and application process to maximize your chances of being featured and expanding your audience reach.",
    image: "/images/service (3).jpg",
    align: "right",
  },
  {
    title: "FORWARD PLANNING & TAX ADVICE",
    icon: FileText,
    description:
      "Working with SMP goes beyond growing your OnlyFans revenue — we help protect and secure your financial future. Through trusted global partners, we provide expert support in financial planning, tax and VAT guidance, and relocation strategy tailored to your situation. Our structured approach minimizes risk, reduces stress, and ensures smarter financial decisions, allowing you to focus fully on scaling your brand and maximizing your income.",
    image: "/images/service1.jpg",
    align: "left",
  },
];


// --- DATA: Onboarding Steps ---
const joinSteps = [
  {
    id: 1,
    title: "INITIAL CALL",
    text: "We begin by understanding you as a creator — your goals, current setup, and long-term vision. This consultation ensures SMP is the right fit and allows us to identify how we can deliver the greatest value to your business from day one.",
  },
  {
    id: 2,
    title: "MARKETING DISCOVERY CALL",
    text: "In this in-depth session with our Head of Marketing and Head of Creative, we analyze your past strategies, identify opportunities for improvement, define your brand positioning, and determine the most effective platforms to accelerate your growth.",
  },
  {
    id: 3,
    title: "CHAT DISCOVERY CALL",
    text: "You’ll meet with our Head of Client Delivery and Chat Operations Manager to discuss your previous chatting experience, communication style, preferences, and boundaries. This ensures seamless account management and strong brand representation from the very start.",
  },
  {
    id: 4,
    title: "BRAND GUIDELINES & MARKETING STRATEGY WORKSHOP",
    text: "Based on your discovery sessions, our team presents your customized brand guidelines and tailored marketing roadmap. You’ll have full input to review, refine, and approve every element, ensuring complete alignment with your identity.",
  },
  {
    id: 5,
    title: "FINAL CHECK-IN & ONBOARDING WRAP-UP",
    text: "A final session with our Creator Success Manager to confirm your satisfaction, ensure a smooth onboarding experience, clarify payment structures, and address any remaining questions before full rollout.",
  },
];


export default function OurServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitting, submitError, handleSubmit } = useApplyFormSubmit(() =>
    setIsModalOpen(false),
  );

  return (
    <section
      id="our-services"
      className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Background shapes – 4 SVGs framing the section */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* 1. Top-left – organic / petal shape */}
        <motion.div
          className="absolute top-[5%] left-4 md:left-6 w-32 h-32 md:w-40 md:h-40"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.5 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="M347.5 168.3C324 184 296 156 311.7 132.5 348.8 76.8 310.7 0 239.2 0s-108.6 75.8-70.9 132.5C184 156 156 184 132.5 168.3A85.2 85.2 0 0 0 0 239.2v1.6c0 68 75.8 108.6 132.5 70.9C156 296 184 324 168.3 347.6A85.2 85.2 0 0 0 239.2 480h1.6c68 0 108.6-75.8 70.9-132.5C296 324 324 296 347.6 311.7c55.6 37.1 132.4-1 132.4-72.5s-75.8-108.6-132.5-70.9Z" />
          </svg>
        </motion.div>
        {/* 2. Bottom-left – rounded square / frame */}
        <motion.div
          className="absolute bottom-[40%] left-4 md:left-6 w-32 h-32 md:w-40 md:h-40"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, delay: 0.15, ease: "easeOut" },
            opacity: { duration: 0.5, delay: 0.15 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="M356.5 65.3a42 42 0 0 0-35-65.3h-163a42 42 0 0 0-35 65.3c25.5 38.2-20 83.7-58.2 58.2a42 42 0 0 0-65.3 35v163a42 42 0 0 0 65.3 35c38.2-25.5 83.7 20 58.2 58.2a42 42 0 0 0 35 65.3h163a42 42 0 0 0 35-65.3c-25.5-38.2 20-83.7 58.2-58.2a42 42 0 0 0 65.3-35v-163a42 42 0 0 0-65.3-35c-38.2 25.5-83.7-20-58.2-58.2Z" />
          </svg>
        </motion.div>
        {/* 3. Top-right – rounded arc / orbit */}
        <motion.div
          className="absolute top-[25%] right-4 md:right-6 w-32 h-32 md:w-40 md:h-40 scale-x-[-1]"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.5, delay: 0.2 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="M398.7 240A239.4 239.4 0 0 0 480 60a60 60 0 0 0-60-60c-71.7 0-136 31.4-180 81.3A239.4 239.4 0 0 0 60 0 60 60 0 0 0 0 60c0 71.7 31.4 136 81.3 180A239.4 239.4 0 0 0 0 420a60 60 0 0 0 60 60c71.7 0 136-31.4 180-81.3A239.4 239.4 0 0 0 420 480a60 60 0 0 0 60-60c0-71.7-31.4-136-81.3-180Z" />
          </svg>
        </motion.div>
        {/* 4. Bottom-right – square arc variant */}
        <motion.div
          className="absolute bottom-[10%] right-4 md:right-6 w-32 h-32 md:w-40 md:h-40 scale-x-[-1]"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, delay: 0.35, ease: "easeOut" },
            opacity: { duration: 0.5, delay: 0.35 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="M398.7 240A239.4 239.4 0 0 0 480 60V0h-60c-71.7 0-136 31.4-180 81.3A239.4 239.4 0 0 0 60 0H0v60c0 71.7 31.4 136 81.3 180A239.4 239.4 0 0 0 0 420v60h60c71.7 0 136-31.4 180-81.3A239.4 239.4 0 0 0 420 480h60v-60c0-71.7-31.4-136-81.3-180Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 relative z-10 mt-5">
        {/* Main Title */}
        <SectionTitle
          eyebrow="What we offer"
          title="Our Services"
          highlightStart={false}
          highlightEnd={true}
        />

        {/* Services List */}
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-white border border-gray-200/90 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden group hover:border-theme-brand/30 hover:shadow-2xl transition-all duration-500">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-theme-brand/20 rounded-tl-3xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-theme-brand/20 rounded-br-3xl pointer-events-none" />

                  <div
                    className={`flex flex-col lg:flex-row gap-8 items-center ${service.align === "left" ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Text Side */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-theme-brand rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wider">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full flex justify-center">
                      {/* UPDATED: Increased height to ensure full image visibility on both mobile (450px) and desktop (600px) */}
                      <div className="relative w-full max-w-md h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:scale-[1.02] transition-transform duration-500">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 384px"
                          // Added object-top to prioritize faces if cropping still occurs slightly
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* How to Join Section */}
        <div className="max-w-6xl mx-auto mt-32 md:mt-40">
          {/* Section Title */}
          <SectionTitle
            eyebrow="Get started"
            title="How to Join"
            highlightStart={false}
            highlightEnd={true}
          />

          {/* Steps Container */}
          <div className="max-w-4xl mx-auto space-y-6">
            {joinSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200/90 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-theme-brand/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-theme-brand/15 rounded-tl-2xl pointer-events-none" />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-theme-brand rounded-full flex items-center justify-center shadow-lg border-2 border-theme-brand/20">
                      <span className="text-white text-xl md:text-2xl font-bold">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <div className="bg-theme-brand/10 inline-block px-4 py-1.5 rounded-lg mb-3 border border-theme-brand/20">
                      <h4 className="text-theme-brand font-bold uppercase tracking-wider text-sm md:text-base">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Apply Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-theme-brand hover:bg-theme-brand-hover text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              APPLY NOW
            </button>
          </motion.div>
        </div>
      </div>

      {/* 5. Render Modal and Form */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Apply Now"
        description="Fill in your details and we’ll get back to you within 24–48 hours."
        size="md"
      >
        <ApplyNowForm
          loading={isSubmitting}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
        {submitError && (
          <p className="mt-4 text-sm text-theme-brand">{submitError}</p>
        )}
      </Modal>
    </section>
  );
}