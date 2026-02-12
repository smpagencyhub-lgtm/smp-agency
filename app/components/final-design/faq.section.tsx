"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Modal from "../design-2/Modal";
import ApplyNowForm from "../design-2/ApplyNowForm";
import type { ApplyNowFormData } from "../design-2/ApplyNowForm";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- DATA MOVED INSIDE COMPONENT ---
  // This allows the "Apply Now" button to access setIsModalOpen
  const faqs = [
    {
      question: "What does an OnlyFans agency actually do?",
      answer: "Think of us as your business management team. While you focus on content creation, we handle the entire business infrastructure: daily chatting with fans, marketing your profile, analyzing pricing data, and maximizing revenue."
    },
    {
      question: "How soon will I start earning more?",
      answer: "Creators typically see an uplift within the first 14 days as we optimize pricing and chat flows. Bigger, consistent growth usually compounds between weeks 3 and 8."
    },
    {
      question: "How much money can I realistically make?",
      answer: "There is no limit. Your earnings depend on the quality of your content and how the market reacts to your niche. We work with creators earning anywhere from $5k to $100k+ per month."
    },
    {
      question: "How much work will I need to do?",
      answer: "Your workload will significantly decrease. Your main responsibility will be content creation. SMP handles the 12+ hours of daily chatting, marketing, and admin."
    },
    {
      question: "Can I make an OnlyFans without showing my face?",
      answer: "The short answer is no—you cannot make an account completely anonymously because OnlyFans requires ID verification. However, publicly? Absolutely. We specialize in faceless strategies."
    },
    {
      question: "Are OnlyFans agencies legal?",
      answer: "Yes. SMP is a registered, compliant business entity. We operate under strict legal contracts that adhere to OnlyFans' Terms of Service."
    },
    {
      question: "What should tell me I need SMP?",
      answer: "If you are struggling to make money despite posting content, or if you are burnt out from answering DMs at 3 AM, you need a team. If you've hit a revenue 'ceiling', we provide the infrastructure to scale."
    },
    {
      question: "How can I join SMP?",
      // JSX ANSWER (Now functional)
      answer: (
        <span>
          Click the <button 
            onClick={() => setIsModalOpen(true)} 
            className="text-red-600 font-bold cursor-pointer hover:underline focus:outline-none"
          >
            Apply Now
          </button> button to fill out our discovery form. We will assess your profile and guide you through the next steps.
        </span>
      )
    }
  ];

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
        <div className="flex flex-col items-center">
            <SectionTitle
            eyebrow="Got questions?"
            title="Frequently Asked Questions"
            highlightStart={true}
            highlightEnd={true}
            />
        </div>

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
                  ? "border-red-500/40 shadow-lg"
                  : "border-gray-200/90 hover:border-red-500/20 hover:shadow-md"
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
                      ? "text-red-600"
                      : "text-gray-900 group-hover:text-red-600"
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
                      ? "bg-red-50 text-red-600"
                      : "bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-600"
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
                      <div className="h-px w-12 bg-red-200 mb-4" />
                      <div className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL IMPLEMENTATION --- */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Apply Now"
        description="Fill in your details and we’ll get back to you within 24–48 hours."
        size="md"
      >
        <ApplyNowForm
          onSubmit={(data: ApplyNowFormData) => {
            console.log("Apply form submitted:", data);
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

    </section>
  );
}