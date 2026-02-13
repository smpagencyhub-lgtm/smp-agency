"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Users, Globe, MonitorPlay, Info } from "lucide-react";
import SectionTitle from "../final-design/SectionTitle";
import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";

// --- 1. Custom Brand Icons (SVGs) ---
const Icons = {
  YouTube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Twitch: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Threads: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.866 12.338c.613-2.006 1.468-3.79 2.473-5.266-1.147-.949-2.285-1.46-3.351-1.46-2.583 0-4.63 2.112-4.63 5.485 0 3.518 1.996 5.488 4.416 5.488 1.708 0 3.012-.87 3.597-2.146.438.258.918.497 1.432.712-.828 1.838-2.695 3.16-5.068 3.16-3.774 0-6.687-3.003-6.687-7.224 0-4.305 3.097-7.234 6.969-7.234 3.155 0 5.568 1.956 6.368 4.717.347 1.196.402 2.502.102 3.796-.138.594-.366 1.157-.665 1.674-.632 1.09-1.554 1.658-2.612 1.658-1.077 0-1.688-.678-1.57-1.921.134-1.416.712-3.834 1.34-6.426.686-2.825-.97-4.14-2.91-4.14-3.142 0-5.747 2.684-5.747 6.45 0 2.44 1.391 4.093 3.321 4.093 1.342 0 2.541-.806 3.223-2.16zm-1.896 2.052c-.105 1.106.31 1.603.953 1.603.497 0 .918-.328 1.185-.828.196-.369.345-.758.435-1.154.219-1.05.155-2.1-.096-3.037-.624 2.542-1.152 4.79-1.55 6.38-.28-.358-.528-.737-.74-1.135-.615-1.146-.92-2.398-.92-3.676 0-3.308 2.227-5.556 5.448-5.556 3.165 0 5.49 2.08 5.49 5.257 0 3.424-2.457 5.768-5.72 5.768-2.093 0-3.856-1.006-4.736-2.522l.251-.092z" />
    </svg>
  ),
  Reddit: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  ),
  X: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  ThumbsDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
    </svg>
  ),
  Adult18: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 9v6" strokeLinecap="round" />
      <path d="M12.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
      <path d="M12.5 12h2" />
      <path d="M16 9v3" strokeLinecap="round" />
      <path d="M18 9v6" strokeLinecap="round" />
      <path d="M15 9h4" />
    </svg>
  ),
};

// --- Custom Slider Component ---
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
      <SliderPrimitive.Range className="absolute h-full bg-theme-brand" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-theme-brand bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 shadow-md cursor-grab active:cursor-grabbing" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

// --- Helper Functions ---
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
};

// --- Flag Component ---
const Flag = ({ countryCode }: { countryCode: string }) => (
  <img
    src={`https://hatscripts.github.io/circle-flags/flags/${countryCode}.svg`}
    alt={countryCode}
    className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full shadow-sm hover:scale-110 transition-transform"
  />
);

export default function PotentialEarningsSection() {
  // --- State ---
  const [subscribers, setSubscribers] = useState([10000]); // Default 10k
  const [price, setPrice] = useState([50]); // Default $50
  const [isPaid, setIsPaid] = useState(true);
  const [locationTier, setLocationTier] = useState<1 | 2 | 3>(1);
  const [trafficQuality, setTrafficQuality] = useState<"A" | "B" | "C">("A");

  // --- NEW PRECISE CALCULATION LOGIC ---
  const calculateRevenue = () => {
    const subCount = subscribers[0];
    const subPrice = price[0];
    const normalizedSubs = subCount / 10000;

    // --- SCENARIO 1: PAID ---
    if (isPaid) {
      // Base Matrix for 10k subs at $50 price
      const paidMatrix = {
        1: { A: 4000000, B: 3400000, C: 2800000 },
        2: { A: 3400000, B: 2800000, C: 2200000 },
        3: { A: 2800000, B: 2200000, C: 1600000 },
      };

      const baseValue = paidMatrix[locationTier][trafficQuality];
      const normalizedPrice = subPrice / 50;

      return baseValue * normalizedSubs * normalizedPrice;
    }

    // --- SCENARIO 2: FREE ---
    else {
      // Base Matrix for 10k subs (Price irrelevant for base lookup)
      const freeMatrix = {
        1: { A: 56000, B: 48000, C: 40000 },
        2: { A: 48000, B: 40000, C: 32000 },
        3: { A: 40000, B: 32000, C: 24000 },
      };

      const baseValue = freeMatrix[locationTier][trafficQuality];

      // Free accounts scale primarily with subs, price slider usually ignored or treated as 0
      return baseValue * normalizedSubs;
    }
  };

  const potentialRevenue = calculateRevenue();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background shapes – triangle SVGs, fully inside so they don’t affect layout */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Left Side - Triangle */}
        <motion.div
          className="absolute top-[18%] left-4 md:left-8 w-40 h-40 md:w-48 md:h-48"
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
            <path d="M480 0H0l240 480L480 0z" />
          </svg>
        </motion.div>
        {/* Right Side - Triangle */}
        <motion.div
          className="absolute bottom-[18%] right-4 md:right-8 w-40 h-40 md:w-48 md:h-48"
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
            <path d="M480 480H0V0l480 480z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 px-6">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionTitle
            eyebrow="Revenue Calculator"
            title="Calculate Your Potential Earnings"
            highlightStart={false}
            highlightEnd={true}
            noMarginBottom={true}
          />
          <p className="text-gray-600 max-w-2xl  text-sm md:text-base">
            Discover how much revenue you could be generating with your current
            subscriber base using our quick calculator.
          </p>
        </div>

        {/* CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200/80 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT: Inputs */}
            <div className="p-8 md:p-10 space-y-10 border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* 1. Account Type */}
              <div className="bg-gray-100 p-1.5 rounded-xl flex relative w-fit mx-auto lg:mx-0">
                <button
                  onClick={() => setIsPaid(true)}
                  className={cn(
                    "relative z-10 px-8 py-2.5 text-sm font-bold rounded-lg transition-all duration-300",
                    isPaid
                      ? "text-white shadow-md"
                      : "text-gray-500 hover:text-gray-900",
                  )}
                >
                  Paid
                  {isPaid && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 bg-theme-brand rounded-lg -z-10"
                    />
                  )}
                </button>
                <button
                  onClick={() => setIsPaid(false)}
                  className={cn(
                    "relative z-10 px-8 py-2.5 text-sm font-bold rounded-lg transition-all duration-300",
                    !isPaid
                      ? "text-white shadow-md"
                      : "text-gray-500 hover:text-gray-900",
                  )}
                >
                  Free
                  {!isPaid && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 bg-theme-brand rounded-lg -z-10"
                    />
                  )}
                </button>
              </div>

              {/* 2. Subscribers */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="flex items-center gap-2 text-gray-700 font-bold text-sm uppercase tracking-wide">
                    <Users size={18} className="text-theme-brand" />
                    Subscriber Count
                  </label>
                  <span className="text-2xl font-black text-gray-900">
                    {subscribers[0].toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={subscribers}
                  onValueChange={setSubscribers}
                  max={50000}
                  step={50}
                  className="py-4"
                />
              </div>

              {/* 3. Price */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="flex items-center gap-2 text-gray-700 font-bold text-sm uppercase tracking-wide">
                    <DollarSign size={18} className="text-theme-brand" />
                    Subscription Price
                  </label>
                  <span className="text-2xl font-black text-gray-900">
                    ${isPaid ? price[0] : 0}
                  </span>
                </div>
                <Slider
                  value={price}
                  onValueChange={setPrice}
                  max={50}
                  step={1}
                  disabled={!isPaid}
                  className={cn("py-4", !isPaid && "opacity-50 grayscale")}
                />
              </div>
            </div>

            {/* RIGHT: Toggles & Result */}
            <div className="p-8 md:p-10 bg-gray-50/50 flex flex-col justify-between space-y-10">
              {/* 1. Location */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-gray-700 font-bold text-sm uppercase tracking-wide">
                  <Globe size={18} className="text-theme-brand" />
                  Subscriber Location
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setLocationTier(tier as 1 | 2 | 3)}
                      className={cn(
                        "py-2 px-1 text-xs md:text-sm font-bold rounded-lg border-2 transition-all",
                        locationTier === tier
                          ? "border-theme-brand bg-theme-brand/5 text-theme-brand"
                          : "border-gray-200 bg-white text-gray-500 hover:border-gray-300",
                      )}
                    >
                      {tier === 1
                        ? "1st World"
                        : tier === 2
                          ? "2nd World"
                          : "3rd World"}
                    </button>
                  ))}
                </div>

                {/* Flags */}
                <div className="flex justify-center gap-2 h-10 items-center">
                  {locationTier === 1 && (
                    <div className="flex gap-2 animate-in fade-in slide-in-from-bottom-2">
                      {[
                        "us",
                        "gb",
                        "ca",
                        "au",
                        "de",
                        "ch",
                        "se",
                        "fi",
                        "nz",
                      ].map((code) => (
                        <Flag key={code} countryCode={code} />
                      ))}
                    </div>
                  )}
                  {locationTier === 2 && (
                    <div className="flex gap-2 animate-in fade-in slide-in-from-bottom-2">
                      {["ru", "ua", "cz", "pl", "al", "cn", "kp", "vn"].map(
                        (code) => (
                          <Flag key={code} countryCode={code} />
                        ),
                      )}
                    </div>
                  )}
                  {locationTier === 3 && (
                    <div className="flex gap-2 animate-in fade-in slide-in-from-bottom-2">
                      {["br", "bo", "cl", "co", "mx", "ph", "sa", "th"].map(
                        (code) => (
                          <Flag key={code} countryCode={code} />
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Traffic Source */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-gray-700 font-bold text-sm uppercase tracking-wide">
                  <MonitorPlay size={18} className="text-theme-brand" />
                  Traffic Source
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["A", "B", "C"].map((grade) => (
                    <button
                      key={grade}
                      onClick={() =>
                        setTrafficQuality(grade as "A" | "B" | "C")
                      }
                      className={cn(
                        "py-2 px-1 text-xs md:text-sm font-bold rounded-lg border-2 transition-all flex items-center justify-center gap-1",
                        trafficQuality === grade
                          ? "border-theme-brand bg-theme-brand/5 text-theme-brand"
                          : "border-gray-200 bg-white text-gray-500 hover:border-gray-300",
                      )}
                    >
                      Grade {grade}
                      <Info
                        size={12}
                        className={cn(
                          trafficQuality === grade
                            ? "text-theme-brand"
                            : "text-gray-400",
                        )}
                      />
                    </button>
                  ))}
                </div>
                {/* Traffic Icons */}
                <div className="flex gap-4 h-10 items-center justify-center">
                  {trafficQuality === "A" && (
                    <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2">
                      <div className="bg-red-50 p-1.5 rounded-full border border-red-100">
                        <Icons.YouTube className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="bg-purple-50 p-1.5 rounded-full border border-purple-100">
                        <Icons.Twitch className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  )}
                  {trafficQuality === "B" && (
                    <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2">
                      <div className="bg-pink-50 p-1.5 rounded-full border border-pink-100">
                        <Icons.Instagram className="w-5 h-5 text-pink-600" />
                      </div>
                      <div className="bg-gray-50 p-1.5 rounded-full border border-gray-200">
                        <Icons.Threads className="w-5 h-5 text-black" />
                      </div>
                      <div className="bg-orange-50 p-1.5 rounded-full border border-orange-100">
                        <Icons.Reddit className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="bg-gray-50 p-1.5 rounded-full border border-gray-200">
                        <Icons.X className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  )}
                  {trafficQuality === "C" && (
                    <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2">
                      <div className="bg-red-50 p-1.5 rounded-full border border-red-100">
                        <Icons.ThumbsDown className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="bg-red-50 p-1.5 rounded-full border border-red-100">
                        <Icons.Adult18 className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. RESULT */}
              <div className="mt-auto bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center space-y-2">
                <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
                  Estimated Monthly Earnings
                </p>
                <motion.div
                  key={potentialRevenue}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700"
                >
                  {formatCurrency(potentialRevenue)}
                </motion.div>
                <p className="text-xs text-theme-brand font-medium">
                  *Estimated PPV / Tips Revenue
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-000 p-6 md:p-8 text-center">
            <button className="bg-theme-brand hover:bg-red-600 text-white text-lg font-bold py-3.5 px-10 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 transform hover:-translate-y-1">
              Start Earning This Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
