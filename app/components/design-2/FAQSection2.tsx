'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// Fallback data in case the import path isn't ready. 
// You can remove this and uncomment your import if you prefer.
// import { faqs } from "../../data/faqs";
const faqs = [
  {
    question: "How quickly can I see results?",
    answer: "Every creator is different, but most of our partners see a significant uptake in engagement and revenue within the first 30 days of implementing our audit strategies and chat management systems."
  },
  {
    question: "Do I lose control of my account?",
    answer: "Absolutely not. We work as an extension of your brand. You maintain full ownership of your account, content, and earnings. We simply handle the heavy lifting of management, chatting, and strategy."
  },
  {
    question: "What platforms do you support?",
    answer: "We specialize primarily in OnlyFans, but our marketing strategies encompass Instagram, Twitter (X), TikTok, and Reddit to drive traffic to your main monetization channels."
  },
  {
    question: "Is there a long-term contract?",
    answer: "We believe in earning your business every month. While we have agreements to protect both parties, we prioritize results-based relationships over locking you into long-term handcuffs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    // 1. Matched Background Gradient
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0000] via-black to-black py-24 font-sans">
      
      {/* Decorative Red Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-wider uppercase">
            FREQUENTLY ASKED
          </h2>
          <motion.div 
            whileHover={{ scale: 1.05, skewX: -12 }}
            className="bg-red-600 px-4 py-1 shadow-[0_0_20px_rgba(220,38,38,0.5)] transform -skew-x-6 cursor-default rounded-md"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider uppercase italic transform skew-x-6">
              QUESTIONS
            </h2>
          </motion.div>
        </motion.div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border-b transition-colors duration-300 ${
                openIndex === index ? 'border-red-600' : 'border-neutral-800'
              }`}
            >
              {/* QUESTION BUTTON */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                  openIndex === index ? 'text-red-500' : 'text-white group-hover:text-red-400'
                }`}>
                  {faq.question}
                </span>

                {/* ANIMATED ICON *
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-2xl p-2 rounded-full transition-colors ${
                    openIndex === index ? 'text-red-500 bg-red-500/10' : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </motion.span>4
                */}
              </button>

              {/* ANSWER DRAWER */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-400 leading-relaxed max-w-3xl text-sm md:text-base">
                      {faq.answer}
                    </p>
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