'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    socialMedia: '',
    experience: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="apply" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/20 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              START YOUR
            </motion.span>{' '}
            <motion.span 
              className="text-red-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              JOURNEY
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-base lg:text-lg"
          >
            Fill out the form below and we&apos;ll get back to you within 24-48 hours
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 lg:p-10 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/50 border border-gray-800/50 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/50 border border-gray-800/50 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <label htmlFor="age" className="block text-sm font-semibold mb-2 text-gray-300">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="18"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-800/50 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                placeholder="18+"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-gray-300">
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
              >
                <option value="" className="bg-gray-900">Select experience</option>
                <option value="beginner" className="bg-gray-900">Beginner</option>
                <option value="intermediate" className="bg-gray-900">Intermediate</option>
                <option value="experienced" className="bg-gray-900">Experienced</option>
              </select>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <label htmlFor="socialMedia" className="block text-sm font-semibold mb-2 text-gray-300">
              Social Media Handles
            </label>
            <input
              type="text"
              id="socialMedia"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/50 border border-gray-800/50 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
              placeholder="@yourhandle"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
              Tell Us About Yourself *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/50 border border-gray-800/50 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 resize-none"
              placeholder="Share your background, interests, and why you want to join..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: 0.7,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40 uppercase tracking-wider"
            >
              Submit Application
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
