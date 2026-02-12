"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

// --- DATA: Blog Posts ---
// We define this here so the list can render
const blogPosts = [
  {
    category: "Growth",
    title: "Boosting Creator Earnings",
    slug: "boosting-creator-earnings",
    excerpt:
      "Explore strategies that management teams implement to steadily grow creator income while keeping subscribers engaged for the long term.",
    image: "/images/allaya (2).JPG",
  },
  {
    category: "Engagement",
    title: "Mastering Fan Interaction",
    slug: "mastering-fan-interaction",
    excerpt:
      "See how tailored communication and smart engagement techniques convert casual followers into devoted, high-value fans.",
    image: "/images/allaya4.jpg",
  },
  {
    category: "Monetization",
    title: "Turning Content Into Profit",
    slug: "turning-content-into-profit",
    excerpt:
      "Content alone isn’t enough. Discover how strategic funnels and pricing plans help maximize revenue from every post.",
    image: "/images/modf1.jpg",
  },
  {
    category: "Security",
    title: "Keeping Creators & Brands Safe",
    slug: "keeping-creators-brands-safe",
    excerpt:
      "Learn how professional management protects accounts through privacy measures and compliance while enabling fast growth.",
    image: "/images/modf2.jpg",
  },
  {
    category: "Analytics",
    title: "Growth Backed By Data",
    slug: "growth-backed-by-data",
    excerpt:
      "Dive into how insights from metrics and user behavior inform smarter decisions and drive predictable growth.",
    image: "/images/suki2.jpg",
  },
  {
    category: "Branding",
    title: "Creating a Standout Persona",
    slug: "creating-standout-persona",
    excerpt:
      "Effective branding builds emotional connections. Learn how thoughtful personas help creators shine in competitive markets.",
    image: "/images/sophie322.jpg",
  },
  {
    category: "Operations",
    title: "Scaling With Efficient Systems",
    slug: "scaling-with-efficient-systems",
    excerpt:
      "Automation, team workflows, and organized schedules are crucial for growth. Discover how agencies simplify daily operations.",
    image: "/images/modf3.jpg",
  },
  {
    category: "Traffic",
    title: "Maximizing Organic & Paid Reach",
    slug: "maximizing-organic-paid-reach",
    excerpt:
      "Learn how combining organic and paid strategies brings in quality subscribers without compromising account performance.",
    image: "/images/mod5.jpg",
  },
  {
    category: "Retention",
    title: "Prioritizing Subscriber Loyalty",
    slug: "prioritizing-subscriber-loyalty",
    excerpt:
      "Maintaining subscribers is as important as acquiring them. Explore proven methods to minimize churn and increase lifetime value.",
    image: "/images/modf4.jpg",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Background shapes – Side Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {/* Left Side - Rounded Square */}
        <motion.div
          className="absolute top-1/4 left-0 w-48 h-48 border-4 border-theme-brand/30 rounded-xl -translate-x-1/2 rotate-12"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        />
        {/* Right Side - Circle */}
        <motion.div
          className="absolute bottom-1/4 right-0 w-56 h-56 border-4 border-theme-brand/35 rounded-full translate-x-1/2"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 relative z-10">
        {/* Main Title */}
        <SectionTitle
          eyebrow="Latest insights"
          title="Our Blog"
          highlightStart={false}
          highlightEnd={true}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-sm md:text-base"
        >
          Insights, strategies, and industry news from the team at SMP.
        </motion.p>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-gray-200/90 rounded-2xl overflow-hidden hover:border-theme-brand/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-lg"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-theme-brand/15 rounded-tl-2xl pointer-events-none z-10" />

                {/* Image Container - Linked */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative h-56 w-full overflow-hidden block cursor-pointer"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-theme-brand px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title - Linked */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-theme-brand transition-colors duration-300 cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-theme-brand font-bold text-sm uppercase tracking-wider group/link cursor-pointer w-fit hover:gap-3 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Accent */}
                <div className="absolute inset-0 bg-theme-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
