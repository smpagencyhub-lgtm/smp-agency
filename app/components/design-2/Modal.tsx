"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 20 },
};

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  /** Optional short description below the title */
  description?: string;
  children: React.ReactNode;
  /** Optional class for the inner panel (dialog) */
  panelClassName?: string;
  /** Max width: sm (28rem), md (32rem), lg (36rem), xl (42rem). Default md */
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-[28rem]",
  md: "max-w-[32rem]",
  lg: "max-w-[36rem]",
  xl: "max-w-[42rem]",
};

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  panelClassName = "",
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-100"
            aria-hidden="true"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-101 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? "modal-title" : undefined}
              aria-describedby={description ? "modal-description" : undefined}
              onClick={(e) => e.stopPropagation()}
              className={
                "pointer-events-auto w-full my-auto " +
                sizeClasses[size] +
                " max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] flex flex-col " +
                "bg-neutral-900/98 border border-neutral-700/50 rounded-xl sm:rounded-2xl " +
                "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_100px_-20px_rgba(0,0,0,0.4)] " +
                panelClassName
              }
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 shrink-0 px-4 py-4 sm:px-6 sm:py-5 border-b border-neutral-700/50 bg-neutral-900/50 rounded-t-xl sm:rounded-t-2xl">
                <div className="min-w-0 pr-2">
                  {title && (
                    <h2
                      id="modal-title"
                      className="text-lg sm:text-xl font-semibold text-white tracking-tight"
                    >
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p
                      id="modal-description"
                      className="mt-1 text-sm text-gray-400"
                    >
                      {description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-700/60 active:bg-neutral-600/60 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Body: scrollable */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
