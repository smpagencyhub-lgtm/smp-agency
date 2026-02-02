"use client";

import { motion } from "framer-motion";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/30 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">WHAT WE</span>{" "}
            <span className="text-red-600">OFFER</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 bg-red-600 mx-auto"
          ></motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isEven ? -60 : 60,
                  rotateY: isEven ? -15 : 15,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 lg:p-10 transition-all duration-500 hover:border-red-600/50 hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-2"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-300"></div>

                {/* Icon */}
                <div className="text-5xl lg:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-red-600 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-base lg:text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
