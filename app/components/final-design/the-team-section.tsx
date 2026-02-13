"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

// --- DATA: Team Members & Departments ---

const departments = [
  {
    title: "CHAT OPERATIONS LEADERSHIP",
    members: [
      { name: "ENRICO", image: "/images/ChatLeader--1.jpg" },
      { name: "KRISTOFF", image: "/images/ChatLeader2.png" },
    ],
    description:
      "Enrico and Kristoff lead SMP's chat department, overseeing both client delivery and day-to-day chat operations. Enrico focuses on the overall client experience, onboarding, and strategy. Kristoff manages and trains the chat teams, maintaining high standards in communication.",
  },
];

export default function TheTeamSection() {
  return (
    <section
      id="the-team"
      className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Background shapes – 4 SVGs framing the section (2 diamond, 2 star) */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* 1. Top-left – diamond/arrow */}
        <motion.div
          className="absolute top-[10%] left-4 md:left-6 w-32 h-32 md:w-40 md:h-40"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.5 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="m320 320 160-80-160-80L240 0l-80 160L0 240l160 80 80 160 80-160z" />
          </svg>
        </motion.div>
        {/* 2. Bottom-left – star */}
        <motion.div
          className="absolute bottom-[20%] left-4 md:left-6 w-32 h-32 md:w-40 md:h-40"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, delay: 0.15, ease: "easeOut" },
            opacity: { duration: 0.5, delay: 0.15 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="M371.3 294.4 480 240l-108.7-54.4 38.4-115.3-115.3 38.4L240 0l-54.4 108.7L70.3 70.3l38.4 115.3L0 240l108.7 54.4-38.4 115.3 115.3-38.4L240 480l54.4-108.7 115.3 38.4-38.4-115.3z" />
          </svg>
        </motion.div>
        {/* 3. Top-right – diamond/arrow (mirrored) */}
        <motion.div
          className="absolute top-[50%] right-4 md:right-6 w-32 h-32 md:w-40 md:h-40 scale-x-[-1]"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            opacity: { duration: 0.5, delay: 0.2 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="m320 320 160-80-160-80L240 0l-80 160L0 240l160 80 80 160 80-160z" />
          </svg>
        </motion.div>
        {/* 4. Bottom-right – star (mirrored) */}
        <motion.div
          className="absolute bottom-[10%] right-4 md:right-6 w-32 h-32 md:w-40 md:h-40 scale-x-[-1]"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.5, delay: 0.35, ease: "easeOut" },
            opacity: { duration: 0.5, delay: 0.35 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="w-full h-full"
            style={{ fill: "var(--theme-brand)", opacity: 0.3 }}
          >
            <path d="M371.3 294.4 480 240l-108.7-54.4 38.4-115.3-115.3 38.4L240 0l-54.4 108.7L70.3 70.3l38.4 115.3L0 240l108.7 54.4-38.4 115.3 115.3-38.4L240 480l54.4-108.7 115.3 38.4-38.4-115.3z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 relative z-10">
        {/* Main Title */}
        <SectionTitle
          eyebrow="Meet the leaders"
          title="The Team"
          highlightStart={false}
          highlightEnd={true}
        />

        {/* Individual Founders */}
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {/* --- ARTHUR TURNER --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b border-gray-200 pb-16 md:pb-20">
            {/* IMAGE BLOCK: Order 1 on Mobile, Order 2 on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]">
                <div className="absolute inset-0 border-2 border-theme-brand/20 rounded-3xl transform translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white group">
                  <Image
                    src="/images/Arthur.jpg"
                    alt="Arthur"
                    fill
                    sizes="(max-width: 1024px) 320px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border-2 border-theme-brand p-4 rounded-2xl shadow-lg">
                  <p className="text-theme-brand text-xs font-bold tracking-widest uppercase mb-1">
                    Role
                  </p>
                  <p className="text-gray-900 text-lg font-bold">CEO</p>
                </div>
              </div>
            </motion.div>

            {/* TEXT BLOCK: Order 2 on Mobile, Order 1 on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-theme-brand px-6 py-2 rounded-xl mb-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider uppercase">
                  Arthur
                </h3>
              </div>
              <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  With a foundation in{" "}
                  <span className="text-gray-900 font-semibold">
                    corporate real estate and high-stakes negotiation
                  </span>
                  , Arthur bridges the gap between traditional business
                  professionalism and the fast-paced creator economy. His
                  expertise lies in organizational management, ensuring that
                  creativity is backed by flawless execution.
                </p>
                <p>
                  Arthur brings clarity to an industry that often feels chaotic,
                  providing creators with a stable, strategic path to growth. By
                  applying a rigorous business mindset, he identifies market
                  shifts before they happen, allowing SMP to establish dominance
                  early.
                </p>
                <p>
                  His focus is on building connections with{" "}
                  <span className="text-theme-brand font-semibold">
                    unicorn-level clients
                  </span>{" "}
                  and creating an infrastructure where talent can thrive without
                  operational bottlenecks. This advantage has been key to SMP’s
                  rapid expansion and market leadership.
                </p>
              </div>
              <div className="mt-8 h-1 w-24 bg-theme-brand rounded-full" />
            </motion.div>
          </div>

          {/* --- RAPHAEL --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b border-gray-200 pb-16 md:pb-20">
            {/* IMAGE BLOCK: Order 1 on Mobile, Order 1 on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-start order-1 lg:order-1"
            >
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]">
                <div className="absolute inset-0 border-2 border-theme-brand/20 rounded-3xl transform -translate-x-3 -translate-y-3 pointer-events-none" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white group">
                  <Image
                    src="/images/raph.jpg"
                    alt="Raphael"
                    fill
                    sizes="(max-width: 1024px) 320px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white border-2 border-theme-brand p-4 rounded-2xl shadow-lg">
                  <p className="text-theme-brand text-xs font-bold tracking-widest uppercase mb-1">
                    Role
                  </p>
                  <p className="text-gray-900 text-lg font-bold">COO</p>
                </div>
              </div>
            </motion.div>

            {/* TEXT BLOCK: Order 2 on Mobile, Order 2 on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2"
            >
              <div className="inline-block bg-theme-brand px-6 py-2 rounded-xl mb-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider uppercase">
                  Raphael
                </h3>
              </div>
              <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  With a strong foundation in{" "}
                  <span className="text-gray-900 font-semibold">
                    marketing and operations
                  </span>
                  , Raphael brings a rare blend of sales instinct and structured
                  execution to OFM. He entered the industry as a chatter and
                  rapidly rose to become one of the top revenue performers,
                  recognised for his ability to convert fans at scale.
                </p>
                <p>
                  His performance earned him leadership roles where he trained,
                  managed, and stabilised high-pressure chat teams. Progressing
                  into Operations Management, he oversaw multiple departments
                  and partner agencies, driving consistent growth in traffic,
                  monetisation, and team efficiency.
                </p>
                <p>
                  Here at SMP, Raphael identified operational gaps and rebuilt
                  the business from the ground up, implementing clear SOPs
                  across chatting, marketing, and management. His approach is{" "}
                  <span className="text-theme-brand font-semibold">
                    disciplined, data-led, and long-term focused
                  </span>
                  , making him a trusted operator for creators serious about
                  growth.
                </p>
              </div>
              <div className="mt-8 h-1 w-24 bg-theme-brand rounded-full" />
            </motion.div>
          </div>

          {/* --- SUHARTO --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b border-gray-200 pb-16 md:pb-20">
            {/* IMAGE BLOCK: Order 1 on Mobile, Order 2 on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]">
                <div className="absolute inset-0 border-2 border-theme-brand/20 rounded-3xl transform translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white group">
                  <Image
                    src="/images/suharto.jpg"
                    alt="Suharto"
                    fill
                    sizes="(max-width: 1024px) 320px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border-2 border-theme-brand p-4 rounded-2xl shadow-lg">
                  <p className="text-theme-brand text-xs font-bold tracking-widest uppercase mb-1">
                    Role
                  </p>
                  <p className="text-gray-900 text-lg font-bold">CMO</p>
                </div>
              </div>
            </motion.div>

            {/* TEXT BLOCK: Order 2 on Mobile, Order 1 on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-theme-brand px-6 py-2 rounded-xl mb-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider uppercase">
                  Suharto
                </h3>
              </div>
              <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Suharto leads marketing strategy with a strong focus on{" "}
                  <span className="text-gray-900 font-semibold">
                    Instagram growth, audience trust, and scalable systems
                  </span>
                  . With years of hands-on experience, he has built and grown
                  high-performing accounts through testing, execution, and
                  data-driven refinement.
                </p>
                <p>
                  Starting with personal projects, Suharto proved his methods
                  before onboarding clients. Consistent results led to rapid
                  expansion through referrals, positioning him as a key driver
                  of{" "}
                  <span className="text-theme-brand font-semibold">
                    sustainable growth
                  </span>{" "}
                  and performance-focused marketing.
                </p>
              </div>
              <div className="mt-8 h-1 w-24 bg-theme-brand rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="max-w-6xl mx-auto space-y-20 pt-20">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative w-full"
            >
              {/* Card Container */}
              <div className="relative w-full max-w-5xl mx-auto bg-white border border-gray-200/90 rounded-3xl p-8 md:p-16 overflow-hidden shadow-xl">
                {/* Decoration: Corner Accents */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-theme-brand/20 rounded-tl-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-theme-brand/20 rounded-br-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Title */}
                  <div className="bg-theme-brand px-8 py-3 rounded-xl mb-12 shadow-lg">
                    <h4 className="text-white text-sm md:text-xl font-bold uppercase tracking-[0.2em]">
                      {dept.title}
                    </h4>
                  </div>

                  {/* Images Row */}
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
                    {dept.members.map((member, i) => (
                      <div key={i} className="flex flex-col items-center group">
                        {/* Image Container */}
                        <div className="w-40 h-40 md:w-64 md:h-64 relative rounded-3xl overflow-hidden border-2 border-theme-brand/20 shadow-xl mb-6 bg-gray-100">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 160px, 256px"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-theme-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Name Label */}
                        <div className="bg-white border-2 border-theme-brand px-6 py-2 rounded-full shadow-lg">
                          <span className="text-theme-brand text-sm md:text-base font-bold uppercase tracking-wider">
                            {member.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
                    {dept.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-32 md:mt-40 flex flex-col items-center border-t border-gray-200 pt-20 md:pt-24"
        >
          <div className="relative w-full h-[300px] md:h-[600px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl mb-12 group">
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-theme-brand px-6 py-3 rounded-xl z-20 shadow-lg">
              <h3 className="text-green-400  lg:text-2xl font-bold"></h3>
            </div>
            <Image
              src="/images/gfinal.png"
              alt="Team Group Photo"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="max-w-4xl text-center">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              SMP is built on a senior management team covering chat operations,
              marketing, creative strategy, and creator success. This leadership
              team is the engine behind every SMP operation, driving strategy,
              consistency, and results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
