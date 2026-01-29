"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../../data/faqs";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">FAQ&apos;S</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 w-24 bg-red-600 mx-auto origin-center"
          ></motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(8px)",
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden transition-all duration-500 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/5"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 lg:px-8 py-5 lg:py-6 text-left flex justify-between items-center hover:text-red-600 transition-colors duration-300 group"
              >
                <span className="font-semibold text-base lg:text-lg pr-4 group-hover:text-red-600 transition-colors duration-300">
                  {faq.question}
                </span>
                <span
                  className={`text-red-600 text-xl lg:text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 lg:px-8 pb-5 lg:pb-6 text-gray-300 leading-relaxed text-base lg:text-lg border-t border-gray-800/50"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
