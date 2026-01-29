"use client";

import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.span
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              BENEFITS
            </motion.span>{" "}
            <motion.span
              className="text-red-600"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              OF WORKING WITH FANSHUB
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 w-24 bg-red-600 mx-auto origin-center"
          ></motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
                rotateX: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 transition-all duration-500 hover:border-red-600/50 hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-2"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 left-4 text-red-600/20 text-6xl font-serif leading-none">
                &quot;
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-red-600 text-xl lg:text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {testimonial.name}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-base lg:text-lg italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="text-gray-500 text-sm lg:text-base font-medium">
                  {testimonial.handle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
