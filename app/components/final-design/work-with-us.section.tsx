"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Import your Modal and Form components
import Modal from "../design-2/Modal";
import ApplyNowForm from "../design-2/ApplyNowForm";
import { useApplyFormSubmit } from "../design-2/useApplyFormSubmit";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const textRevealVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

const imageContainerVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// const featureVariants = {
//   hidden: { x: -20, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// const benefits = [
//   "Strategic brand development",
//   "Revenue optimization",
//   "24/7 dedicated support",
//   "Global market reach",
// ];

export default function WorkWithUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitting, submitError, handleSubmit } = useApplyFormSubmit(() =>
    setIsModalOpen(false),
  );

  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Professional Background Elements - Side Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {/* Left Side - Rounded Square */}
        <motion.div
          className="absolute top-1/3 left-0 w-48 h-48 border-4 border-theme-brand/30 rounded-xl -translate-x-1/2 rotate-12"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        />
        {/* Right Side - Diamond */}
        <motion.div
          className="absolute bottom-1/3 right-0 w-52 h-52 border-4 border-theme-brand/35 translate-x-1/2 rotate-45"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- DESCRIPTION AND IMAGE SIDE BY SIDE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* LEFT: Description Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-theme-brand" />
              <p className="text-theme-brand text-xs font-semibold tracking-[0.2em] uppercase">
                Join Elite Creators
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              variants={textRevealVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight uppercase"
            >
              <span className="block">We don&apos;t just</span>
              <span className="block mt-2">
                manage{" "}
                <motion.span
                  variants={badgeVariants}
                  whileHover="hover"
                  className="inline-block bg-theme-brand text-white px-4 py-2 rounded-xl shadow-[0_0_30px_rgba(142,8,7,0.3)]"
                >
                  creators
                </motion.span>
              </span>
              <span className="block mt-2">
                We build{" "}
                <span className="text-theme-brand font-extrabold">
                  lasting success
                </span>
              </span>
            </motion.h2>

            {/* Accent Line */}
            <motion.div
              variants={textRevealVariants}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-theme-brand" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={textRevealVariants}
              className="text-base md:text-lg text-gray-700 leading-relaxed font-medium"
            >
              Our global team—spanning the UK, US, and key markets—combines
              expertise in influencer marketing, talent management, and digital
              growth. We partner with{" "}
              <span className="text-theme-brand font-semibold">80+ creators</span>{" "}
              to scale their brands and revenue with strategy, not just support.
            </motion.p>

            {/* Benefits List */}
            {/* <motion.div
              variants={textRevealVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Button */}
            <motion.div variants={textRevealVariants} className="pt-4">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 bg-theme-brand hover:bg-theme-brand-hover text-white font-bold text-sm md:text-base tracking-wider px-8 md:px-10 py-4 md:py-5 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Partner with us</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                  initial={false}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image Area */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex justify-center items-center"
          >
            {/* Modern Image Container with Layered Design */}
            <div className="relative w-full max-w-[420px]">
              {/* Background Accent Shape */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full bg-theme-brand/5 rounded-3xl -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-[340px] h-[500px] md:w-[400px] md:h-[560px] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(142,8,7,0.15)] group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/allaya5.jpg"
                    alt="Creator Success"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                  
                  {/* Subtle brand accent overlay */}
                  <div className="absolute inset-0 bg-theme-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Modern corner accent - Top Left */}
                  <div className="absolute top-0 left-0 w-20 h-20">
                    <div className="absolute top-4 left-4 w-12 h-12 border-2 border-theme-brand/30 rounded-lg rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0" />
                  </div>

                  {/* Modern corner accent - Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-20 h-20">
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-theme-brand/30 rounded-lg rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Badge - Redesigned */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white border-2 border-theme-brand/20 shadow-xl rounded-2xl px-5 py-3 z-20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, borderColor: "rgba(142, 8, 7, 0.4)" }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-theme-brand/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-theme-brand" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 leading-none">80+</span>
                    <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">Creators</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements - Minimalist */}
              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 border-2 border-theme-brand/10 rounded-full hidden md:block"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Apply Now"
        description="Fill in your details and we'll get back to you within 24–48 hours."
        size="md"
      >
        <ApplyNowForm
          loading={isSubmitting}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
        {submitError && (
          <p className="mt-4 text-sm text-red-400">{submitError}</p>
        )}
      </Modal>
    </section>
  );
}
