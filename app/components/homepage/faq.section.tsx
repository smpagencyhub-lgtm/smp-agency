"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "../final-design/SectionTitle";
import Modal from "../common/Modal";
import ApplyNowForm from "../common/ApplyNowForm";
import type { ApplyNowFormData } from "../common/ApplyNowForm";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- DATA MOVED INSIDE COMPONENT ---
  // This allows the "Apply Now" button to access setIsModalOpen
  const faqs = [
    {
      question: "What does an OnlyFans agency actually do?",
      answer:
        "Think of us as your business management team. While you focus on content creation, we handle the entire business infrastructure: daily chatting with fans, marketing your profile, analyzing pricing data, and maximizing revenue.",
    },
    {
      question: "How soon will I start earning more?",
      answer:
        "Creators typically see an uplift within the first 14 days as we optimize pricing and chat flows. Bigger, consistent growth usually compounds between weeks 3 and 8.",
    },
    {
      question: "How much money can I realistically make?",
      answer:
        "There is no limit. Your earnings depend on the quality of your content and how the market reacts to your niche. We work with creators earning anywhere from $5k to $100k+ per month.",
    },
    {
      question: "How much work will I need to do?",
      answer:
        "Your workload will significantly decrease. Your main responsibility will be content creation. SMP handles the 12+ hours of daily chatting, marketing, and admin.",
    },
    {
      question: "Can I make an OnlyFans without showing my face?",
      answer:
        "The short answer is no—you cannot make an account completely anonymously because OnlyFans requires ID verification. However, publicly? Absolutely. We specialize in faceless strategies.",
    },
    {
      question: "Are OnlyFans agencies legal?",
      answer:
        "Yes. SMP is a registered, compliant business entity. We operate under strict legal contracts that adhere to OnlyFans' Terms of Service.",
    },
    {
      question: "What should tell me I need SMP?",
      answer:
        "If you are struggling to make money despite posting content, or if you are burnt out from answering DMs at 3 AM, you need a team. If you've hit a revenue 'ceiling', we provide the infrastructure to scale.",
    },
    {
      question: "How can I join SMP?",
      // JSX ANSWER (Now functional)
      answer: (
        <span>
          Click the{" "}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-red-600 font-bold cursor-pointer hover:underline focus:outline-none"
          >
            Apply Now
          </button>{" "}
          button to fill out our discovery form. We will assess your profile and
          guide you through the next steps.
        </span>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Background shapes – SVG decor, fully inside so they don’t affect layout */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Left Side - Spiral / orbit shape */}
        <motion.div
          className="absolute top-[60%] right-4 md:right-8 w-40 h-40 md:w-48 md:h-48"
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
            <path d="M343.3 282.8A239 239 0 0 1 480 240c-50.8 0-98-15.8-136.8-42.8 8.4-46.5 30.6-91 66.5-127-36 36-80.4 58.2-127 66.5C255.9 98 240 50.8 240 0c0 50.8-15.8 98-42.8 136.8-46.5-8.4-91-30.6-127-66.5 36 36 58.2 80.4 66.5 127C98 224.1 50.8 240 0 240c50.8 0 98 15.8 136.8 42.8-8.4 46.5-30.6 91-66.5 127 36-36 80.4-58.2 127-66.6A239 239 0 0 1 240 480c0-50.8 15.8-98 42.8-136.8 46.5 8.4 91 30.6 127 66.5-36-36-58.2-80.4-66.5-127Z" />
          </svg>
        </motion.div>
        {/* Right Side - Quarter circle */}
        <motion.div
          className="absolute bottom-[2%] left-4 md:left-8 w-40 h-40 md:w-48 md:h-48"
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
            <path d="M480 0A339.4 339.4 0 0 1 0 0a339.4 339.4 0 0 1 0 480 339.4 339.4 0 0 1 480 0 339.4 339.4 0 0 1 0-480Z" />
          </svg>
        </motion.div>
        {/* Third shape - Triangle accent (top right) */}
        <motion.div
          className="absolute top-[10%] left-4 md:left-8 w-32 h-32 md:w-40 md:h-40"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.35, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.35 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M480 240A240 240 0 0 1 240 0L0 240a240 240 0 0 1 240 240l240-240Z" />
          </svg>
        </motion.div>
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
        variant="light"
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
