"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_LOADER_TIME = 1100; // ms - ensures animation is visible at least this long
const MAX_LOADER_TIME = 8000; // safety fallback in case load never fires

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  // Track page load and a minimum display duration so the animation is always visible
  useEffect(() => {
    const handleLoad = () => {
      setHasLoaded(true);
    };

    // Minimum time the loader should stay visible (to avoid insta-disappear)
    const minTimer = setTimeout(() => {
      setMinTimePassed(true);
    }, MIN_LOADER_TIME);

    // Fallback: in case "load" never fires (e.g. long streaming), don't block forever
    const maxTimer = setTimeout(() => {
      setHasLoaded(true);
    }, MAX_LOADER_TIME);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Once the page has loaded AND the minimum time has passed, fade the loader out
  useEffect(() => {
    if (!hasLoaded || !minTimePassed) return;

    // Defer state updates to timers so they run outside the main effect body
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 0);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 700); // matches CSS transition duration on the backdrop

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [hasLoaded, minTimePassed]);

  if (!isLoading) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
          isFadingOut ? "opacity-0" : "opacity-100"
        } loader-backdrop`}
        style={{ zIndex: 9999 }}
        aria-hidden="true"
        role="presentation"
      >
        {/* Subtle theme-brand ambient glow behind logo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,420px)] h-[min(80vw,420px)] rounded-full opacity-20 blur-[80px] bg-theme-brand/30 loader-glow"
            aria-hidden
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(60vw,280px)] h-[min(60vw,280px)] rounded-full opacity-15 blur-[60px] bg-theme-brand/40 loader-glow-slow"
            aria-hidden
          />
        </div>

        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none bg-size-[20px_20px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          {/* Logo container: ring + blur-in reveal + idle float */}
          <div className="loader-logo-wrap mb-10">
            {/* Expanding ring effect */}
            <div className="loader-logo-ring" aria-hidden />
            <div className="loader-logo-ring loader-logo-ring-2" aria-hidden />
            <div className="relative w-[min(72vw,200px)] h-[min(72vw,200px)] sm:w-[220px] sm:h-[220px]">
              <Image
                src="/images/logo.png"
                alt="SMP"
                fill
                sizes="(max-width: 640px) 72vw, 220px"
                className="object-contain loader-logo-img"
                priority
                quality={95}
              />
            </div>
          </div>

          {/* Minimal progress bar */}
          <div className="w-48 sm:w-56 h-px bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-theme-brand to-theme-brand-hover rounded-full loader-progress"
              style={{ width: "0%" }}
            />
          </div>

          {/* Loading label */}
          <p
            className="mt-5 text-gray-500 text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase loader-text"
            style={{ letterSpacing: "0.25em" }}
          >
            Loading
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.72) translateY(24px);
            filter: blur(14px);
          }
          45% {
            opacity: 1;
            transform: scale(1.04) translateY(-3px);
            filter: blur(0);
          }
          70% {
            opacity: 1;
            transform: scale(0.98) translateY(1px);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes logoFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes logoRing {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0.85);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.35);
          }
        }

        @keyframes loaderBackdropIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes logoShine {
          0%,
          100% {
            filter: drop-shadow(0 0 20px rgba(142, 8, 7, 0.25))
              drop-shadow(0 0 40px rgba(142, 8, 7, 0.1));
          }
          50% {
            filter: drop-shadow(0 0 28px rgba(142, 8, 7, 0.35))
              drop-shadow(0 0 56px rgba(142, 8, 7, 0.15));
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes glowPulseSlow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.35;
          }
        }

        @keyframes progressRun {
          0% {
            width: 0%;
          }
          40% {
            width: 65%;
          }
          70% {
            width: 85%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes textFade {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .loader-backdrop {
          animation: loaderBackdropIn 0.35s ease-out;
        }

        .loader-logo-wrap {
          position: relative;
          animation: logoReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
        }

        .loader-logo-wrap::after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(142, 8, 7, 0.2);
          opacity: 0;
          animation: logoRing 1.4s ease-out 0.2s forwards;
          pointer-events: none;
        }

        .loader-logo-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 1px solid rgba(142, 8, 7, 0.25);
          transform: translate(-50%, -50%) scale(0.9);
          opacity: 0;
          animation: logoRing 1.6s ease-out 0.15s forwards;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .loader-logo-ring {
            width: 88vw;
            height: 88vw;
          }
        }

        .loader-logo-ring-2 {
          animation-delay: 0.4s;
          border-color: rgba(142, 8, 7, 0.15);
        }

        .loader-logo-wrap .relative {
          animation: logoFloat 3.5s ease-in-out 1s infinite;
        }

        .loader-logo-img {
          animation: logoShine 2.8s ease-in-out 0.8s infinite;
        }

        .loader-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .loader-glow-slow {
          animation: glowPulseSlow 4s ease-in-out infinite;
        }

        .loader-progress {
          animation: progressRun 1.8s ease-in-out infinite;
        }

        .loader-text {
          animation: textFade 1.6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
