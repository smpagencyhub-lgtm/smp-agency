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
      "Marketing is often the biggest question mark for both creators and agencies. Most people understand the chatting side, but driving consistent traffic to a creator's page is where many struggle. At SMP, we focus on discovering which platforms and campaigns work best for you as an individual creator – there's no copy-and-paste approach here. Every creator needs a strategy built around their brand, niche, and goals. Our marketing account managers support you at every step, giving you access to over 20 active promotion methods, from social media marketing and our 3,000+ page meme network to podcasts and influencer collaborations.",
    image: "/images/service (1).jpg",
    align: "right",
  },
  {
    title: "CHATTING",
    icon: MessageCircle,
    description:
      "Everyone knows that chatting is the real revenue driver on OnlyFans, and so handing that responsibility to the wrong team can be damaging. Poor communication, lack of cultural understanding, and generic messaging all show in your results. That's why SMP's UK / USA chat team go through vigorous training in order to represent creators with authenticity, emotional intelligence and care. The outcome is higher spend per fan, fewer chargebacks, increased renewals, and long-term trust. Our bespoke creator profile mapping system ensures that all creators receive the ultimate service, and with that, boost their earnings.",
    image: "/images/service (2).jpg",
    align: "left",
  },
  {
    title: "CONTENT STRATEGY & PRODUCTION",
    icon: Video,
    description:
      "In such a fast-paced industry, the biggest question we hear is: what content should I be posting? The truth is, there isn't a one-size-fits-all answer. Finding the right content strategy is the first thing we work on with our creators, because redefining your brand and niche is often the difference between earning $10k and $100k a month. The industry is moving faster than ever, with over five million creators competing for attention. We help you understand what the market is actively responding to, while also shaping content that's unique to you, converts well, and drives real results.",
    image: "/images/modf1.jpg",
    align: "right",
  },
  {
    title: "DMCA & CONTENT REMOVALS",
    icon: ShieldCheck,
    description:
      "When growing your brand as a content creator, the last thing you should be worrying about is your content being leaked. At SMP, we have an in-house team dedicated to monitoring the web for stolen or reposted content. While leaks can't always be prevented, we take a proactive approach to removing them as quickly as possible. We use advanced AI tools to detect and auto-flag leaked content, alongside preparing and issuing DMCA notices to pages hosting our creators' material. This helps protect your income, your brand, and your long-term growth.",
    image: "/images/sophie1.jpg",
    align: "left",
  },
  {
    title: "OFTV",
    icon: Tv,
    description:
      "OFTV is one of the largest sources to drive fans to creators' pages, but getting featured on it is a difficult and daunting process. At SMP, we help with the full process, from content ideation, through to the videography and editing of videos. Our creative team will guide creators through every step, and deliver the pitch and application to our partners at OFTV.",
    image: "/images/service (3).jpg",
    align: "right",
  },
  {
    title: "FORWARD PLANNING & TAX ADVICE",
    icon: FileText,
    description:
      "Working alongside SMP doesn't just help you grow your OnlyFans revenue – it helps protect it. Wherever you're based, we work with trusted local partners who support creators with forward financial planning, so you keep and grow what you earn. From tax and VAT guidance to relocation planning, you'll have access to reliable, expert advice tailored to your situation. This means fewer mistakes, less stress, and smarter decisions long term. With the financial side handled properly, you're free to focus on building your brand and income without constant worry.",
    image: "/images/service1.jpg",
    align: "left",
  },
];

// --- DATA: Onboarding Steps ---
const joinSteps = [
  {
    id: 1,
    title: "INITIAL CALL",
    text: "We take time to understand you as a creator, your goals, and your current setup. This call is to make sure SMP is the right fit for you and that we can genuinely add value to your business.",
  },
  {
    id: 2,
    title: "MARKETING DISCOVERY CALL",
    text: "A one-hour deep-dive with our Head of Marketing and Head of Creative. We'll review what's worked for you in the past, what hasn't, define your brand, and decide which platforms we'll focus on to drive growth.",
  },
  {
    id: 3,
    title: "CHAT DISCOVERY CALL",
    text: "You'll speak with our Head of Client Delivery and Chat Operations Manager to discuss your previous chatting experiences, preferences, boundaries, and tone. This call exists to eliminate common teething issues and ensure that when we log into your account, we hit the ground running.",
  },
  {
    id: 4,
    title: "BRAND GUIDELINES & MARKETING STRATEGY WORKSHOP",
    text: "This interactive session is built directly from your marketing discovery call. Our team will present your new brand guidelines and a tailored marketing roadmap. You'll have full input approving, refining, or adjusting elements, so everything stays on-brand.",
  },
  {
    id: 5,
    title: "FINAL CHECK-IN & ONBOARDING WRAP-UP",
    text: "A final call with our Creator Success Manager. This is to confirm you're happy, ensure onboarding has been smooth, explain payments clearly, and answer any final questions before full rollout.",
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

      <div className="max-w-[1920px] mx-auto px-6 relative z-10">
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
                      <div className="relative w-full max-w-md h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:scale-[1.02] transition-transform duration-500">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 384px"
                          className="object-cover"
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
