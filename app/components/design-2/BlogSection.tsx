'use client';


import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- DATA: Blog Posts (Extracted from your screenshot) ---
const blogPosts = [
  {
    category: "Growth",
    title: "Scaling Creator Income",
    excerpt: "Discover the proven strategies management teams use to consistently increase creator earnings while maintaining long term subscriber value.",
    image: "/images/allaya (2).JPG", // Placeholder - match your file names
  },
  {
    category: "Engagement",
    title: "The Art Of Fan Engagement",
    excerpt: "Learn how personalized messaging and smart interaction systems turn casual followers into loyal, high-spending fans.",
    image: "/images/allaya4.jpg",
  },
  {
    category: "Monetization",
    title: "Turning Content Into Revenue",
    excerpt: "Content alone doesn't sell; strategy does. Explore how structured funnels and pricing models maximize every post.",
    image: "/images/b-model (6).JPG",
  },
  {
    category: "Security",
    title: "Protecting Creators & Brands",
    excerpt: "From privacy safeguards to account compliance, see how professional management keeps creators protected while scaling fast.",
    image: "/images/b-model (2).JPG",
  },
  {
    category: "Analytics",
    title: "Data-Driven Growth Models",
    excerpt: "Understand how performance metrics and behavioral data guide smarter decisions and predictable account growth.",
    image: "/images/g-model (1).JPEG",
  },
  {
    category: "Branding",
    title: "Building A Marketable Persona",
    excerpt: "Strong branding creates emotional connection. Learn how curated personas help creators stand out in crowded markets.",
    image: "/images/g-model (2).jpg",
  },
  {
    category: "Operations",
    title: "Systems That Scale",
    excerpt: "Automation, scheduling, and team workflows are key to growth. Here's how agencies streamline daily operations.",
    image: "/images/g-model (3).jpg",
  },
  {
    category: "Traffic",
    title: "Organic & Paid Traffic",
    excerpt: "Explore how balanced traffic strategies bring in high quality subscribers without sacrificing account health.",
    image: "/images/g-model (7).jpg",
  },
  {
    category: "Retention",
    title: "Retention Over Acquisition",
    excerpt: "Keeping subscribers is just as important as gaining them. Learn the techniques that reduce churn and boost lifetime value.",
    image: "/images/allaya3.jpg",
  }
];

export default function BlogSection() {
  return (
    <section 
      id="blog" 
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32 font-sans"
    >
      {/* --- Background Decorations --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ==========================
            1. MAIN TITLE
           ========================== */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-24"
        >
          <div className="flex items-center gap-4">
            <div className="bg-red-600 px-6 py-2 transform -skew-x-6 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
               <h2 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase transform skew-x-6">
                 OUR
               </h2>
            </div>
            <h2 className="text-4xl md:text-6xl font-light italic text-white tracking-widest uppercase">
              BLOG
            </h2>
          </div>
          <p className="mt-6 text-gray-400 text-center max-w-2xl text-sm md:text-base">
            Insights, strategies, and industry news from the team at FansHub.
          </p>
        </motion.div>


        {/* ==========================
            2. BLOG GRID
           ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 flex flex-col h-full shadow-lg"
                >
                    {/* Image Container */}
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image 
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                            <span className="text-white text-xs font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                            {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                            {post.excerpt}
                        </p>
                        
                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-red-500 font-bold text-sm uppercase tracking-wider group/link cursor-pointer">
                            <span>Read Article</span>
                            <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
            ))}
        </div>

        {/* View All Button (Optional - adds nice closure to section) */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
        >
            <button className="px-8 py-3 rounded-full border border-neutral-700 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                View All Articles
            </button>
        </motion.div>

      </div>
    </section>
  );
}