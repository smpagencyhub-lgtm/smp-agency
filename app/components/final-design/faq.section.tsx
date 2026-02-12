"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    question: "How do I get started as a model with SMP?",
    answer:
      "Getting started is simple. Schedule a free 30-minute strategy call with our team. We'll review your current performance, discuss your goals, and outline a customized growth plan. Once you're ready, we'll handle onboarding and set up all systems within 48 hours.",
  },
  {
    question: "What percentage do you take from my earnings?",
    answer:
      "Our pricing is transparent and performance-based. We typically work on a percentage of revenue increase, meaning we only succeed when you succeed. Exact terms are discussed during your strategy call and tailored to your specific situation and goals.",
  },
  {
    question: "Will I lose control of my OnlyFans account?",
    answer:
      "Absolutely not. You maintain 100% ownership and control of your account, content, and earnings. We act as your management team, handling chat management, content strategy, and marketing while you focus on creating. You have full access and final approval on everything.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most models see measurable improvements within the first 30 days. This includes increased subscriber engagement, better chat response times, and optimized pricing strategies. Revenue growth typically accelerates after 60-90 days as our systems fully integrate and marketing campaigns gain traction.",
  },
  {
    question: "Do you handle all my fan messages?",
    answer:
      "Yes, our trained UK and US chat team handles all fan interactions 24/7. They're extensively trained to match your voice and tone authentically, understand fan psychology, and maximize conversion opportunities. You'll receive regular reports on key conversations and can review everything.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "We specialize in OnlyFans management, but our marketing services extend across Instagram, Twitter (X), TikTok, Reddit, and other platforms to drive traffic to your main monetization channels. We create cohesive cross-platform strategies that build your brand and maximize reach.",
  },
  {
    question: "Is there a long-term contract required?",
    answer:
      "We believe in earning your business every month through results. While we have standard agreements to protect both parties, we focus on performance-based relationships rather than locking you into restrictive long-term contracts. Most models stay because they see value, not because they're obligated.",
  },
  {
    question: "Can you help me if I'm just starting out?",
    answer:
      "Absolutely! We work with models at all stages—from complete beginners to established creators looking to scale. For new models, we provide comprehensive guidance on account setup, content strategy, pricing, and brand development to help you start strong and grow faster.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Background shapes – Side Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {/* Left Side - Circle */}
        <motion.div
          className="absolute top-1/3 left-0 w-56 h-56 border-4 border-theme-brand/30 rounded-full -translate-x-1/2"
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
          className="absolute bottom-1/3 right-0 w-48 h-48 border-4 border-theme-brand/35 rounded-xl translate-x-1/2 -rotate-12"
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
        <SectionTitle
          eyebrow="Got questions?"
          title="Frequently Asked Questions"
          highlightStart={true}
          highlightEnd={true}
        />

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-theme-brand/40 shadow-lg"
                  : "border-gray-200/90 hover:border-theme-brand/20 hover:shadow-md"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-5 px-6 md:py-6 md:px-8 text-left group"
              >
                <span
                  className={`text-base md:text-lg font-semibold transition-colors duration-300 pr-4 ${
                    openIndex === index
                      ? "text-theme-brand"
                      : "text-gray-900 group-hover:text-theme-brand"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Animated Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index
                      ? "bg-theme-brand/10 text-theme-brand"
                      : "bg-gray-100 text-gray-600 group-hover:bg-theme-brand/10 group-hover:text-theme-brand"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} strokeWidth={2.5} />
                  ) : (
                    <Plus size={18} strokeWidth={2.5} />
                  )}
                </motion.div>
              </button>

              {/* Answer Drawer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="h-px w-12 bg-theme-brand/30 mb-4" />
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
