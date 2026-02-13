"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SplashScreen from "./splash-screen";

const SLIDE_DURATION = 0.7;
const SLIDE_EASE = [0.32, 0.72, 0, 1];

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <SplashScreen onFinishLoading={() => setIsLoading(false)} />
  ) : (
    <>
      {/* Page content – fades in only after slide finishes so only black is visible during transition */}
      <motion.div
        key="page-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: SLIDE_DURATION, ease: "easeOut" }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>

      {/* Slide panels – left and right slide out to reveal content */}
      <div
        className="pointer-events-none fixed inset-0 z-9999 flex"
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-1/2 bg-black"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
        />
        <motion.div
          className="h-full w-1/2 bg-black"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
        />
      </div>
    </>
  );
}
