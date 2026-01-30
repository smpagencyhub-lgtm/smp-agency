"use client";

import { motion } from "framer-motion";

const slideUp = {
  initial: { y: 32, opacity: 0.25 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const viewportScroll = { once: false, amount: 0.15, margin: "-40px" };

const stagger = {
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const faqs = [
  {
    question: "How does OnlyFans management work?",
    answer:
      "We handle account setup, content strategy, subscriber engagement, and growth campaigns so you can focus on creating. Our team manages day-to-day operations and works with you to align everything with your brand and goals.",
  },
  {
    question: "What services are included?",
    answer:
      "Our full-service offering includes marketing and audience growth, content planning and production support, 24/7 management and engagement, and anti-piracy protection. We tailor the mix to your needs and scale as you grow.",
  },
  {
    question: "Who is the management team?",
    answer:
      "Our team is predominantly women, with experience in creator economy, social media, and brand strategy. We prioritize discretion, professionalism, and a collaborative approach so you feel supported at every step.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out our application form and we’ll review your profile. If we’re a good fit, we’ll reach out to discuss your goals and put together a custom plan. There’s no long-term commitment until you’re ready to move forward.",
  },
];

export default function FAQSection2() {
  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--theme-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left column: decorative graphic — stems + soft shapes */}
          <motion.div
            className="relative lg:col-span-4 hidden lg:block min-h-[320px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportScroll}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
            aria-hidden
          >
            {/* Soft amorphous blobs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-48 h-64 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--theme-brand-muted)" }}
              />
              <div
                className="absolute w-40 h-56 rounded-full opacity-15 blur-2xl -translate-y-4 translate-x-8"
                style={{ background: "var(--theme-brand-muted)" }}
              />
              <div
                className="absolute w-32 h-44 rounded-full opacity-10 blur-xl translate-y-12 -translate-x-4"
                style={{ background: "var(--theme-brand-muted)" }}
              />
            </div>
            {/* Stylized stems */}
            <svg
              viewBox="0 0 120 280"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-64 text-[var(--theme-brand-muted)] opacity-60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M40 260 Q50 180 55 120 Q58 70 60 40 L62 20" />
              <path d="M60 260 Q62 200 65 140 Q68 90 70 50 L72 25" />
              <path d="M80 260 Q78 190 76 130 Q74 80 74 45 L75 22" />
            </svg>
          </motion.div>

          {/* Right column: title + FAQ list */}
          <motion.div
            className="lg:col-span-8"
            initial="initial"
            whileInView="animate"
            viewport={viewportScroll}
            variants={stagger}
          >
            <motion.h2
              className="font-sans font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-12 lg:mb-16"
              variants={slideUp}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.ul
              className="space-y-10 lg:space-y-12 list-none pl-0"
              variants={stagger}
            >
              {faqs.map((faq, index) => (
                <motion.li
                  key={index}
                  className="flex gap-4 sm:gap-5"
                  variants={slideUp}
                >
                  {/* Circular icon with question mark */}
                  <div
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--theme-brand-muted)] bg-[var(--theme-brand-muted)] flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="font-sans font-bold text-white text-lg sm:text-xl">
                      ?
                    </span>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-sans font-bold text-white text-base sm:text-lg lg:text-xl leading-snug mb-2">
                      {faq.question}
                    </h3>
                    <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
