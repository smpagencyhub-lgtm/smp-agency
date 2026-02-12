"use client";

import * as React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "James Hardy",
    handle: "@jameshardyx93",
    quote: "I was honestly on the verge of giving up.",
    text: "Before working with SMP, I was completely drained trying to handle everything on my own—messages, posting, promotions, nonstop. I always felt behind. After joining SMP, I finally had breathing room again. My earnings improved, and the burnout disappeared.",
    imageSrc: "/images/jameshardy.jpg",
    instagramLink: "https://www.instagram.com/jameshardyx93",
  },
  {
    id: 2,
    name: "Olga",
    handle: "@olgagabrielaofficial",
    quote: "My income doubled in just a few months.",
    text: "I didn't realize how much potential revenue I was missing. The SMP team refined my pricing and took over DM management. Now I can focus purely on creating content while everything else runs smoothly in the background.",
    imageSrc: "/images/g-model (5).jpg",
    instagramLink: "https://www.instagram.com/olgagabrielaofficial",
  },
  {
    id: 3,
    name: "Allaya",
    handle: "@ayajanets",
    quote: "I finally got my time and freedom back.",
    text: "The systems SMP implemented changed everything. I used to be on my phone for 12 hours a day. Now I work only 3–4 hours and earn more than before. Partnering with SMP was one of the best decisions I've made.",
    imageSrc: "/images/allaya5.jpg",
    instagramLink: "https://www.instagram.com/ayajanets",
  },
];

export default function TestimonialSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 font-sans bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background shapes – Side Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      >
        {/* Left Side - Circle */}
        <motion.div
          className="absolute top-1/2 left-0 w-56 h-56 border-4 border-theme-brand/30 rounded-full -translate-x-1/2 -translate-y-1/2"
          aria-hidden
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6 },
          }}
        />
        {/* Right Side - Rounded Square */}
        <motion.div
          className="absolute bottom-1/4 right-0 w-48 h-48 border-4 border-theme-brand/35 rounded-2xl translate-x-1/2 -rotate-12"
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

      <div className="max-w-[1920px] mx-auto relative z-10 px-6">
        <SectionTitle
          eyebrow="What they say"
          title="Benefits of working with SMP"
          highlightStart={true}
          highlightEnd={true}
        />

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Carousel
            opts={{ loop: true, align: "center" }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-5 md:-ml-6 py-3">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-5 md:pl-6 basis-full md:basis-[75%]"
                >
                  <div
                    className={cn(
                      "rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-lg transition-transform duration-500 min-h-[380px] sm:min-h-[420px]",
                      current !== index && "scale-[0.88] opacity-70",
                    )}
                  >
                    <div className="flex flex-col sm:flex-row h-full min-h-[380px] sm:min-h-[420px]">
                      <div className="relative w-full sm:w-80 shrink-0 h-56 sm:h-full sm:min-h-[420px] sm:min-w-[320px] bg-gray-100">
                        <Image
                          src={item.imageSrc}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 320px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-theme-brand/5" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center p-8 md:p-10 lg:p-12 min-h-0 border-l-0 sm:border-l border-l-theme-brand/10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="bg-theme-brand text-white text-sm font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg">
                            {item.name}
                          </span>
                          <a
                            href={item.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-gray-500 hover:text-theme-brand text-sm font-medium transition-colors"
                          >
                            <Instagram size={16} />
                            <span>{item.handle}</span>
                          </a>
                        </div>
                        <p className="text-gray-900 font-semibold text-lg md:text-xl lg:text-2xl leading-snug mb-4">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <div
                          className="h-px w-12 bg-theme-brand/30 mb-4"
                          aria-hidden
                        />
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-16 size-12 md:size-14 bg-white border-2 border-theme-brand/30 text-theme-brand hover:bg-theme-brand hover:text-white hover:border-theme-brand shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-20" />
            <CarouselNext className="right-0 md:-right-16 size-12 md:size-14 bg-white border-2 border-theme-brand/30 text-theme-brand hover:bg-theme-brand hover:text-white hover:border-theme-brand shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-20" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
