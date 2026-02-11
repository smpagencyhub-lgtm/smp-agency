'use client';

import { useState } from 'react'; // 1. Import useState
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  MessageCircle, 
  Video, 
  ShieldCheck, 
  Tv, 
  FileText 
} from 'lucide-react';

// 2. Import Modal and Form components
import Modal from './Modal';
import ApplyNowForm from './ApplyNowForm';
import { useApplyFormSubmit } from './useApplyFormSubmit';

// --- DATA: Services ---
const services = [
  {
    title: "MARKETING",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    description: "Marketing is often the biggest question mark for both creators and agencies. Most people understand the chatting side, but driving consistent traffic to a creator's page is where many struggle. At SMP, we focus on discovering which platforms and campaigns work best for you as an individual creator – there's no copy-and-paste approach here. Every creator needs a strategy built around their brand, niche, and goals. Our marketing account managers support you at every step, giving you access to over 20 active promotion methods, from social media marketing and our 3,000+ page meme network to podcasts and influencer collaborations.",
    image: "/images/service (1).jpg", 
    align: "right"
  },
  {
    title: "CHATTING",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    description: "Everyone knows that chatting is the real revenue driver on OnlyFans, and so handing that responsibility to the wrong team can be damaging. Poor communication, lack of cultural understanding, and generic messaging all show in your results. That's why SMP's UK / USA chat team go through vigorous training in order to represent creators with authenticity, emotional intelligence and care. The outcome is higher spend per fan, fewer chargebacks, increased renewals, and long-term trust. Our bespoke creator profile mapping system ensures that all creators receive the ultimate service, and with that, boost their earnings.",
    image: "/images/service (2).jpg", 
    align: "left" 
  },
  {
    title: "CONTENT STRATEGY & PRODUCTION",
    icon: <Video className="w-6 h-6 text-white" />,
    description: "In such a fast-paced industry, the biggest question we hear is: what content should I be posting? The truth is, there isn't a one-size-fits-all answer. Finding the right content strategy is the first thing we work on with our creators, because redefining your brand and niche is often the difference between earning $10k and $100k a month. The industry is moving faster than ever, with over five million creators competing for attention. We help you understand what the market is actively responding to, while also shaping content that's unique to you, converts well, and drives real results.",
    image: "/images/modf1.jpg", 
    align: "right"
  },
  {
    title: "DMCA & CONTENT REMOVALS",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    description: "When growing your brand as a content creator, the last thing you should be worrying about is your content being leaked. At SMP, we have an in-house team dedicated to monitoring the web for stolen or reposted content. While leaks can't always be prevented, we take a proactive approach to removing them as quickly as possible. We use advanced AI tools to detect and auto-flag leaked content, alongside preparing and issuing DMCA notices to pages hosting our creators' material. This helps protect your income, your brand, and your long-term growth.",
    image: "/images/mod3.jpg", 
    align: "left"
  },
  {
    title: "OFTV",
    icon: <Tv className="w-6 h-6 text-white" />,
    description: "OFTV is one of the largest sources to drive fans to creators' pages, but getting featured on it is a difficult and daunting process. At SMP, we help with the full process, from content ideation, through to the videography and editing of videos. Our creative team will guide creators through every step, and deliver the pitch and application to our partners at OFTV.",
    image: "/images/service (3).jpg", 
    align: "right"
  },
  {
    title: "FORWARD PLANNING & TAX ADVICE",
    icon: <FileText className="w-6 h-6 text-white" />,
    description: "Working alongside SMP doesn't just help you grow your OnlyFans revenue – it helps protect it. Wherever you're based, we work with trusted local partners who support creators with forward financial planning, so you keep and grow what you earn. From tax and VAT guidance to relocation planning, you'll have access to reliable, expert advice tailored to your situation. This means fewer mistakes, less stress, and smarter decisions long term. With the financial side handled properly, you're free to focus on building your brand and income without constant worry.",
    image: "/images/service1.jpg", 
    align: "left"
  }
];

// --- DATA: Onboarding Steps ---
const joinSteps = [
  { 
    id: 1, 
    title: "INITIAL CALL", 
    text: "We take time to understand you as a creator, your goals, and your current setup. This call is to make sure SMP is the right fit for you and that we can genuinely add value to your business."
  },
  { 
    id: 2, 
    title: "MARKETING DISCOVERY CALL", 
    text: "A one-hour deep-dive with our Head of Marketing and Head of Creative. We'll review what's worked for you in the past, what hasn't, define your brand, and decide which platforms we'll focus on to drive growth."
  },
  { 
    id: 3, 
    title: "CHAT DISCOVERY CALL", 
    text: "You'll speak with our Head of Client Delivery and Chat Operations Manager to discuss your previous chatting experiences, preferences, boundaries, and tone. This call exists to eliminate common teething issues and ensure that when we log into your account, we hit the ground running."
  },
  { 
    id: 4, 
    title: "BRAND GUIDELINES & MARKETING STRATEGY WORKSHOP", 
    text: "This interactive session is built directly from your marketing discovery call. Our team will present your new brand guidelines and a tailored marketing roadmap. You'll have full input approving, refining, or adjusting elements, so everything stays on-brand."
  },
  { 
    id: 5, 
    title: "FINAL CHECK-IN & ONBOARDING WRAP-UP", 
    text: "A final call with our Creator Success Manager. This is to confirm you're happy, ensure onboarding has been smooth, explain payments clearly, and answer any final questions before full rollout."
  },
];

export default function OurServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitting, submitError, handleSubmit } = useApplyFormSubmit(() =>
    setIsModalOpen(false)
  );

  return (
    <section 
      id="our-services" 
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32 font-sans"
    >
      {/* --- Background Decorations --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- 1. TITLE --- */}
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
              SERVICES
            </h2>
          </div>
        </motion.div>

        {/* --- 2. SERVICES LIST --- */}
        <div className="space-y-12 md:space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-[30px] p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
                {/* Subtle Red Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className={`flex flex-col lg:flex-row gap-8 items-center ${service.align === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Text Side */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-3">
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5">
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-full max-w-md h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-neutral-700 group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Image Placeholder */}
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* --- 3. HOW TO JOIN SECTION --- */}
        <div className="mt-40">
            {/* Section Title */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center mb-20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <h2 className="text-3xl md:text-5xl font-light text-white tracking-widest uppercase">
                  HOW TO
                </h2>
                <div className="bg-red-600 px-4 md:px-6 py-1 md:py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase transform skew-x-6">
                    JOIN
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Steps Container */}
            <div className="max-w-4xl mx-auto space-y-6">
              {joinSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-red-600/40 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)] border-2 border-red-400">
                          <span className="text-white text-xl md:text-2xl font-bold">{step.id}</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow">
                        <div className="bg-[#2a1a1a] inline-block px-3 py-1 rounded mb-2 border border-red-900/30">
                           <h4 className="text-red-500 font-bold uppercase tracking-wider text-sm md:text-base">
                             {step.title}
                           </h4>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {step.text}
                        </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Apply Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              {/* 4. Add onClick handler */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-12 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] transition-all duration-300 transform hover:-translate-y-1"
              >
                APPLY NOW
              </button>
            </motion.div>

        </div>

      </div>

      {/* 5. Render Modal and Form */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Apply Now"
        description="Fill in your details and we’ll get back to you within 24–48 hours."
        size="md"
      >
        <ApplyNowForm
          loading={isSubmitting}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
        {submitError && (
          <p className="mt-4 text-sm text-red-400">{submitError}</p>
        )}
      </Modal>

    </section>
  );
}