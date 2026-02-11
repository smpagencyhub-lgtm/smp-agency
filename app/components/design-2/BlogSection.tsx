'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- DATA: Blog Posts ---
// We define this here so the list can render
const blogPosts = [
  {
    category: "Growth",
    title: "Boosting Creator Earnings",
    slug: "boosting-creator-earnings",
    excerpt: "Explore strategies that management teams implement to steadily grow creator income while keeping subscribers engaged for the long term.",
    image: "/images/allaya (2).JPG",
  },
  {
    category: "Engagement",
    title: "Mastering Fan Interaction",
    slug: "mastering-fan-interaction",
    excerpt: "See how tailored communication and smart engagement techniques convert casual followers into devoted, high-value fans.",
    image: "/images/allaya4.jpg",
  },
  {
    category: "Monetization",
    title: "Turning Content Into Profit",
    slug: "turning-content-into-profit",
    excerpt: "Content alone isn’t enough. Discover how strategic funnels and pricing plans help maximize revenue from every post.",
    image: "/images/modf1.jpg",
  },
  {
    category: "Security",
    title: "Keeping Creators & Brands Safe",
    slug: "keeping-creators-brands-safe",
    excerpt: "Learn how professional management protects accounts through privacy measures and compliance while enabling fast growth.",
    image: "/images/modf2.jpg",
  },
  {
    category: "Analytics",
    title: "Growth Backed By Data",
    slug: "growth-backed-by-data",
    excerpt: "Dive into how insights from metrics and user behavior inform smarter decisions and drive predictable growth.",
    image: "/images/g-model (1).JPEG",
  },
  {
    category: "Branding",
    title: "Creating a Standout Persona",
    slug: "creating-standout-persona",
    excerpt: "Effective branding builds emotional connections. Learn how thoughtful personas help creators shine in competitive markets.",
    image: "/images/mod3.jpg",
  },
  {
    category: "Operations",
    title: "Scaling With Efficient Systems",
    slug: "scaling-with-efficient-systems",
    excerpt: "Automation, team workflows, and organized schedules are crucial for growth. Discover how agencies simplify daily operations.",
    image: "/images/modf3.jpg",
  },
  {
    category: "Traffic",
    title: "Maximizing Organic & Paid Reach",
    slug: "maximizing-organic-paid-reach",
    excerpt: "Learn how combining organic and paid strategies brings in quality subscribers without compromising account performance.",
    image: "/images/mod5.jpg",
  },
  {
    category: "Retention",
    title: "Prioritizing Subscriber Loyalty",
    slug: "prioritizing-subscriber-loyalty",
    excerpt: "Maintaining subscribers is as important as acquiring them. Explore proven methods to minimize churn and increase lifetime value.",
    image: "/images/modf4.jpg",
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
            Insights, strategies, and industry news from the team at SMP.
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
                    {/* Image Container - Linked */}
                    <Link href={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden block cursor-pointer">
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
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        {/* Title - Linked */}
                        <Link href={`/blog/${post.slug}`} className="block">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300 cursor-pointer">
                                {post.title}
                            </h3>
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                            {post.excerpt}
                        </p>
                        
                        {/* Read More Link - Functional */}
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="flex items-center gap-2 text-red-500 font-bold text-sm uppercase tracking-wider group/link cursor-pointer w-fit"
                        >
                            <span>Read Article</span>
                            <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}