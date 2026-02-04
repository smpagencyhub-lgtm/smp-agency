"use client";

import { motion } from "framer-motion";

const brands = ["ESSENCE", "Forbes", "InStyle", "VARIETY", "CARLIN"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/20 to-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Text Block */}
          <div className="lg:pt-8">
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative line */}
              <motion.div
                className="w-12 h-0.5 bg-red-600 mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                At SMP MANAGEMENT, we&apos;re not just another management
                agency. We&apos;re a powerhouse full-service team delivering
                cutting-edge social media management, seamless brand building,
                and revenue optimization. Our mission is to elevate your
                content, supercharge your growth, and unlock your full
                potential.
              </p>
            </motion.div>
          </div>

          {/* Central Image */}
          <div className="flex justify-center items-start lg:-mt-8">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -5,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full max-w-sm lg:max-w-md"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-800/50 shadow-2xl shadow-red-600/10 group hover:border-red-600/30 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-48 sm:w-40 sm:h-60 bg-gray-600 rounded-lg mb-4 mx-auto"></div>
                    <span className="text-gray-500 text-sm">
                      About Us Image
                    </span>
                  </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Text Block */}
          <div className="lg:pt-8">
            <motion.div
              initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                We combine real personal support with experienced chat and
                marketing teams, deep niche understanding, and full operational
                guidance. Beyond traditional management, we operate as a true
                partner in your success journey.
              </p>

              {/* Learn More CTA */}
              <a
                href="#services"
                className="group inline-flex items-center space-x-4 text-red-600 hover:text-red-500 transition-all duration-300"
              >
                <span className="text-sm lg:text-base font-semibold tracking-wider uppercase">
                  Learn More
                </span>
                <div className="h-px w-12 bg-red-600 transition-all duration-500 group-hover:w-20 group-hover:bg-red-500"></div>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Large "ABOUT US" Title */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif text-red-600/90 leading-none tracking-tight text-center lg:-mt-12"
            initial={{ opacity: 0, letterSpacing: "-0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ABOUT US
          </motion.h2>
        </motion.div>

        {/* Brand Logos Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800/50 pt-12 lg:pt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-20">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + index * 0.08,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="text-red-600/50 hover:text-red-600 transition-all duration-300 font-serif text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider hover:scale-110 transform cursor-default"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
