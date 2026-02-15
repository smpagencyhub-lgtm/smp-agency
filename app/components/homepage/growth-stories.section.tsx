"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../final-design/SectionTitle";

// --- DATA: Blog Stories ---
const stories = [
  {
    category: "Growth",
    title: "Scaling Creator Income",
    description:
      "Discover the proven strategies management teams use to consistently increase creator earnings while maintaining long term subscriber value.",
    content:
      "Scaling creator income isn't just about posting more content; it's about strategic optimization. Management teams focus on analyzing subscriber retention rates, optimizing pricing tiers, and implementing upsell strategies that feel organic rather than pushy. By leveraging data analytics, we can identify peak engagement times and tailor content drops to maximize revenue per user (ARPU) while ensuring long-term subscriber value remains high.",
    imageSrc: "/images/suki2.jpg",
  },
  {
    category: "Branding",
    title: "Building A Marketable Persona",
    description:
      "Strong branding creates emotional connection. Learn how curated personas help creators stand out in crowded markets.",
    content:
      "In a crowded digital market, a strong persona is your most valuable asset. It goes beyond just aesthetics; it's about the tone of voice, the values you project, and the story you tell. We help creators distill their authentic traits into a cohesive brand identity that resonates deeply with their target audience, creating an emotional connection that converts casual followers into loyal superfans.",
    imageSrc: "/images/allaya2.jpg",
  },
  {
    category: "Operations",
    title: "Systems That Scale",
    description:
      "Automation, scheduling, and team workflows are key to growth. Here's how agencies streamline daily operations.",
    content:
      "Growth brings complexity. Without robust systems, increased traffic can lead to burnout. We implement automation for routine tasks, centralized scheduling for content consistency, and clear team workflows for chat management. These operational pillars ensure that as your subscriber count grows, your workload remains manageable, allowing you to focus on creativity rather than administration.",
    imageSrc: "/images/g-model (5).jpg",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Main Component ---
export default function GrowthStoriesSection() {
  // State for Story Modal
  const [selectedStory, setSelectedStory] = useState<
    (typeof stories)[0] | null
  >(null);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background shapes – SVG decor, fully inside so they don’t affect layout */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Left Side - First shape (L-style) */}
        <motion.div
          className="absolute top-[50%] left-4 md:left-8 w-40 h-40 md:w-48 md:h-48"
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
            <path d="M320 0v160a160 160 0 1 0-320 0v320h160V320a160 160 0 1 0 320 0V0H320Z" />
          </svg>
        </motion.div>
        {/* Right Side - Second shape */}
        <motion.div
          className="absolute bottom-[20%] right-4 md:right-8 w-40 h-40 md:w-48 md:h-48"
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
            <path d="M320 0v240a160 160 0 1 0-320 0v240h160V240a160 160 0 1 0 320 0V0H320Z" />
          </svg>
        </motion.div>
        {/* Third shape - right side top accent */}
        <motion.div
          className="absolute top-[18%] right-4 md:right-8 w-32 h-32 md:w-40 md:h-40"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.35, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.35 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.35 }}
          >
            <path d="M320 160a160 160 0 1 0-320 0v320h160V160h160ZM320 0v320H160a160 160 0 1 0 320 0V0H320Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 px-6">
        <motion.section
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            eyebrow="Latest insights"
            title="Growth Stories"
            highlightStart={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-200/90 hover:border-theme-brand/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                {/* Image Section */}
                <div className="h-64 bg-gray-100 relative overflow-hidden flex-shrink-0">
                  <Image
                    src={story.imageSrc}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-theme-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-theme-brand uppercase tracking-wider mb-3">
                    {story.category}
                  </span>

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-theme-brand transition-colors">
                      {story.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-theme-brand transition-colors flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-sm md:text-base text-gray-600 mt-2 line-clamp-3 mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Footer Section */}
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <div className="text-xs font-semibold text-theme-brand flex items-center gap-2 uppercase tracking-wider group-hover:gap-3 transition-all">
                      READ ARTICLE <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-20 bg-white hover:bg-theme-brand text-gray-600 hover:text-white p-2 rounded-full transition-colors shadow-lg border border-gray-200"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative flex-shrink-0">
                <Image
                  src={selectedStory.imageSrc}
                  alt={selectedStory.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-theme-brand/5" />
              </div>

              {/* Modal Content - Scrollable */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-start bg-white overflow-y-auto">
                <div className="mb-6">
                  <span className="bg-theme-brand text-white text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-lg inline-block">
                    {selectedStory.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedStory.title}
                </h3>

                <div className="prose prose-gray max-w-none text-gray-700 mb-8">
                  <p className="text-base md:text-lg leading-relaxed">
                    {selectedStory.content}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-gray-200">
                  <Link href="/blog">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-theme-brand hover:bg-theme-brand-hover text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
                    >
                      Visit Blog
                    </motion.button>
                  </Link>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="text-gray-600 hover:text-gray-900 font-semibold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
