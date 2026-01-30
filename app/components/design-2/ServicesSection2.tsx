"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const viewport = { once: false, amount: 0.12, margin: "-40px" };
const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};
const cardMotion = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const services = [
  {
    number: "01",
    name: "Marketing",
    detailTitle: "Marketing Services",
    image: "/images/model1.jpg",
    description:
      "Strategic social and paid campaigns to grow your audience and reach.",
    subServices: [
      "Audience Growth",
      "Social Strategy",
      "Paid Campaigns",
      "Content Promotion",
    ],
  },
  {
    number: "02",
    name: "Management",
    detailTitle: "Management",
    image: "/images/model2.jpg",
    description:
      "We have the network and strategies to bring immense audience required to flourish on OnlyFans.",
    subServices: [
      "Account Setup",
      "Content Planning",
      "Subscriber Engagement",
      "24/7 Support",
    ],
  },
  {
    number: "03",
    name: "Production",
    detailTitle: "Production",
    image: "/images/model3.jpg",
    description:
      "Creative direction and content production tailored to your brand.",
    subServices: [
      "Creative Direction",
      "Content Production",
      "Brand Alignment",
      "Quality Control",
    ],
  },
  {
    number: "04",
    name: "Anti-Piracy",
    detailTitle: "Anti-Piracy",
    image: "/images/model4.jpg",
    description: "Protection and takedown of unauthorized use of your content.",
    subServices: [
      "Content Monitoring",
      "Takedown Requests",
      "DMCA Support",
      "Protection Strategy",
    ],
  },
];

export default function ServicesSection2() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--theme-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--theme-brand-muted)]"
              aria-hidden
            />
            <span className="font-sans text-white/80 text-xs font-medium uppercase tracking-[0.2em]">
              Services
            </span>
          </div>
          <h2 className="font-sans font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight max-w-2xl">
            We deliver comprehensive solutions to help creators grow and thrive.
          </h2>
        </motion.div>

        {/* Single column — glass cards */}
        <motion.div
          className="flex flex-col gap-6 lg:gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
        >
          {services.map((service) => (
            <motion.article
              key={service.name}
              variants={cardMotion}
              className="group flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              {/* Image — left on desktop */}
              <div className="relative lg:w-2/5 min-h-[220px] lg:min-h-0 lg:aspect-[4/3] flex-shrink-0">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-full border-2 border-white/90 bg-[var(--theme-brand-muted)] flex items-center justify-center shadow-lg"
                  aria-hidden
                >
                  <span className="font-sans font-bold text-white text-sm">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content — right on desktop */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 lg:py-8 lg:px-10 justify-center min-w-0">
                <h3 className="font-sans font-bold text-white text-xl sm:text-2xl mb-2">
                  {service.name}
                </h3>
                <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5 list-none pl-0 mb-6">
                  {service.subServices.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-sans text-white/90 text-sm sm:text-base"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[var(--theme-brand-muted)] shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="self-start font-sans font-medium text-[var(--theme-brand-muted)] text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--theme-brand-muted)] focus:ring-offset-2 focus:ring-offset-[var(--theme-bg)] rounded py-1"
                  aria-label={`View details for ${service.name}`}
                >
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
