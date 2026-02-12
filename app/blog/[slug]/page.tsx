import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

// --- DATA ---
export const blogPosts = [
  {
    category: "Growth",
    title: "Boosting Creator Earnings",
    slug: "boosting-creator-earnings",
    excerpt: "Explore strategies that management teams implement to steadily grow creator income while keeping subscribers engaged for the long term.",
    image: "/images/allaya (2).JPG",
    content: `
      <p>This is about increasing creator income strategically. Posting more content isn't enough; it requires smart planning to grow revenue sustainably.</p>
      
      <h3>Key Strategy 1: Diversified Revenue Streams</h3>
      <p>Encourage creators to explore multiple monetization avenues like merchandise, premium subscriptions, sponsored content, and online workshops.</p>

      <h3>Key Strategy 2: Upselling & Packages</h3>
      <p>Bundle content or create tiered subscription levels to increase average revenue per user while giving subscribers more value.</p>

      <h3>Key Strategy 3: Long-Term Subscriber Value</h3>
      <p>Focus on retention strategies that keep followers engaged over months, not just quick spikes in revenue. This ensures sustainable growth.</p>
    `
  },
  {
    category: "Engagement",
    title: "Mastering Fan Interaction",
    slug: "mastering-fan-interaction",
    excerpt: "See how tailored communication and smart engagement techniques convert casual followers into devoted, high-value fans.",
    image: "/images/allaya4.jpg",
    content: `
      <p>Fan engagement goes beyond posting content. It's about building genuine connections that inspire loyalty.</p>

      <h3>Personalized Communication</h3>
      <p>Respond to comments, direct messages, and mentions personally where possible. Fans feel valued when communication is human and tailored.</p>

      <h3>Interactive Content</h3>
      <p>Polls, quizzes, live streams, and challenges encourage participation. Higher engagement leads to stronger community bonds and long-term retention.</p>

      <h3>Reward Loyalty</h3>
      <p>Offer exclusive perks for loyal followers, like early access to content, shoutouts, or exclusive merchandise, to strengthen emotional investment.</p>
    `
  },
  {
    category: "Monetization",
    title: "Turning Content Into Profit",
    slug: "turning-content-into-profit",
    excerpt: "Content alone isn’t enough. Discover how strategic funnels and pricing plans help maximize revenue from every post.",
    image: "/images/modf1.jpg",
    content: `
      <p>Monetization is the bridge between creating content and sustaining a career. Let’s explore how to turn every piece of content into revenue.</p>

      <h3>Structured Funnels</h3>
      <p>Guide fans from free content to paid offerings through carefully designed funnels. Each step should offer value and encourage progression.</p>

      <h3>Pricing Strategies</h3>
      <p>Test subscription tiers, one-time purchases, or bundle deals. Understanding your audience's willingness to pay is key to optimizing revenue.</p>

      <h3>Analytics-Driven Decisions</h3>
      <p>Use data to identify top-performing content and replicate its success. Investing in what works maximizes return on every post.</p>
    `
  },
  {
    category: "Security",
    title: "Keeping Creators & Brands Safe",
    slug: "keeping-creators-brands-safe",
    excerpt: "Learn how professional management protects accounts through privacy measures and compliance while enabling fast growth.",
    image: "/images/modf2.jpg",
    content: `
      <p>Security is critical for creators managing personal brands. Protecting content, accounts, and data ensures longevity and trust.</p>

      <h3>Privacy Safeguards</h3>
      <p>Implement two-factor authentication, secure storage for sensitive files, and strict access controls for your team.</p>

      <h3>Account Compliance</h3>
      <p>Follow platform rules and local regulations to avoid suspensions or legal issues. Educate creators about copyright, contracts, and brand partnerships.</p>

      <h3>Monitoring & Response</h3>
      <p>Regularly monitor accounts for suspicious activity and have a rapid response plan to minimize risks of hacks or breaches.</p>
    `
  },
  {
    category: "Analytics",
    title: "Growth Backed By Data",
    slug: "growth-backed-by-data",
    excerpt: "Dive into how insights from metrics and user behavior inform smarter decisions and drive predictable growth.",
    image: "/images/g-model (1).JPEG",
    content: `
      <p>Data is the backbone of predictable growth. Tracking the right metrics allows creators to make smarter decisions.</p>

      <h3>Performance Metrics</h3>
      <p>Focus on engagement rates, follower growth, content reach, and revenue per user. Each metric tells part of the story of success.</p>

      <h3>Behavioral Analysis</h3>
      <p>Understand what content your audience loves, when they are most active, and which offerings they prefer. Adjust your strategy accordingly.</p>

      <h3>Iterative Optimization</h3>
      <p>Use insights to continuously improve. Experiment, measure results, and refine approaches based on evidence rather than guesswork.</p>
    `
  },
  {
    category: "Branding",
    title: "Creating a Standout Persona",
    slug: "creating-standout-persona",
    excerpt: "Effective branding builds emotional connections. Learn how thoughtful personas help creators shine in competitive markets.",
    image: "/images/mod3.jpg",
    content: `
      <p>Strong branding makes creators memorable and builds trust. Crafting a persona is both art and strategy.</p>

      <h3>Define Your Unique Voice</h3>
      <p>Decide what values, tone, and style reflect your brand. Consistency across platforms strengthens recognition.</p>

      <h3>Visual Identity</h3>
      <p>Use colors, fonts, and logos that resonate with your audience. Strong visuals make your content instantly recognizable.</p>

      <h3>Emotional Connection</h3>
      <p>Engage your audience through storytelling, authenticity, and relatability. Fans follow brands they feel connected to.</p>
    `
  },
  {
    category: "Operations",
    title: "Scaling With Efficient Systems",
    slug: "scaling-with-efficient-systems",
    excerpt: "Automation, team workflows, and organized schedules are crucial for growth. Discover how agencies simplify daily operations.",
    image: "/images/modf3.jpg",
    content: `
      <p>Behind every successful creator is an organized operational system that keeps content consistent and scalable.</p>

      <h3>Team Workflow</h3>
      <p>Assign clear roles and responsibilities to avoid bottlenecks and confusion in content production.</p>

      <h3>Automation Tools</h3>
      <p>Schedule posts, automate analytics reporting, and streamline repetitive tasks to save time and reduce errors.</p>

      <h3>Efficient Planning</h3>
      <p>Use content calendars and project management software to plan ahead and ensure deadlines are met consistently.</p>
    `
  },
  {
    category: "Traffic",
    title: "Maximizing Organic & Paid Reach",
    slug: "maximizing-organic-paid-reach",
    excerpt: "Learn how combining organic and paid strategies brings in quality subscribers without compromising account performance.",
    image: "/images/mod5.jpg",
    content: `
      <p>Driving traffic requires a balance between organic growth and paid campaigns to reach the right audience efficiently.</p>

      <h3>Organic Strategies</h3>
      <p>Focus on high-quality, shareable content, SEO, and collaborations to attract followers without extra cost.</p>

      <h3>Paid Campaigns</h3>
      <p>Use targeted ads on social platforms to reach specific audiences. Monitor performance to avoid wasted spend.</p>

      <h3>Measuring Success</h3>
      <p>Track conversions, engagement, and ROI to continually optimize your strategy for both organic and paid channels.</p>
    `
  },
  {
    category: "Retention",
    title: "Prioritizing Subscriber Loyalty",
    slug: "prioritizing-subscriber-loyalty",
    excerpt: "Maintaining subscribers is as important as acquiring them. Explore proven methods to minimize churn and increase lifetime value.",
    image: "/images/modf4.jpg",
    content: `
      <p>Subscriber retention is key for stable growth. Loyal fans generate more revenue and spread positive word-of-mouth.</p>

      <h3>Consistent Value</h3>
      <p>Provide ongoing quality content and exclusive perks to keep subscribers engaged and satisfied.</p>

      <h3>Feedback Loops</h3>
      <p>Listen to your audience. Polls, surveys, and direct interactions help understand their needs and improve offerings.</p>

      <h3>Retention Incentives</h3>
      <p>Offer loyalty rewards, referral bonuses, or early access to content to encourage long-term commitment.</p>
    `
  }
];


// Next.js 15: params is a Promise
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params; 

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white font-sans pb-24">
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-theme-brand transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-wider">Back to Blog</span>
        </Link>

        {/* Article Header */}
        <div className="relative bg-white border border-gray-200/90 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-theme-brand/20 rounded-tl-3xl pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="bg-theme-brand px-4 py-1.5 text-xs font-bold text-white uppercase tracking-widest rounded-full shadow-lg">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm font-medium">5 Min Read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 font-light leading-relaxed border-l-4 border-theme-brand pl-6 mb-8 italic">
            {post.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div 
          className="mt-12 bg-white border border-gray-200/90 rounded-3xl p-8 md:p-12 shadow-xl text-lg leading-relaxed
            [&>p]:mb-6 [&>p]:text-gray-600
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-theme-brand [&>h3]:mt-10 [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}