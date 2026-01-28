'use client';

import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export default function StatsSection() {

  return (
    <section id="stats" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              FansHub
            </motion.span>{' '}
            <motion.span 
              className="text-red-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At A Glance
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1], // Bounce effect for numbers
                type: "spring",
                stiffness: 100
              }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 lg:p-8 text-center transition-all duration-500 hover:border-red-600/50 hover:bg-gray-900/80 hover:shadow-xl hover:shadow-red-600/10 hover:-translate-y-1"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-300"></div>
              
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-600 mb-3 group-hover:text-red-500 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.p 
            className="text-gray-400 text-base lg:text-lg tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Locations: <motion.span 
              className="text-white font-semibold"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >UK</motion.span> | <motion.span 
              className="text-white font-semibold"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >USA</motion.span> | <motion.span 
              className="text-white font-semibold"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >POLAND</motion.span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
