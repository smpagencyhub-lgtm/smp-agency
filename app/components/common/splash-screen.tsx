"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SPLASH_DURATION = 3; // total: fade in + hold + fade out

type SplashScreenProps = {
  onFinishLoading: () => void;
};

const SplashScreen = ({ onFinishLoading }: SplashScreenProps) => {
  return (
    <motion.div
      className="splash-screen fixed inset-0 z-9999 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: SPLASH_DURATION,
        times: [0, 0.32, 0.68, 1],
        ease: "easeInOut",
      }}
      onAnimationComplete={onFinishLoading}
      aria-hidden="true"
    >
      {/* Background: gradient + subtle pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(165deg, #0f0f0f 0%, #1a0a0a 40%, #111 70%, #0d0d0d 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #d10000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, #d1000033, transparent 60%)",
        }}
      />

      {/* Logo + brand */}
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft glow behind logo */}
          <div
            className="absolute inset-0 -m-8 rounded-full blur-2xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, #d1000040 0%, transparent 70%)",
            }}
          />

          <Image
            src="/images/logo.png"
            alt="SMP Agency"
            width={240}
            height={240}
            priority
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
