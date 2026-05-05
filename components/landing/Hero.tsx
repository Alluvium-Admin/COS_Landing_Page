"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { copy } from "@/constants/copy";
import { ChevronRight } from "lucide-react";
import { HighlightAI } from "../ui/HighlightAI";

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        delay: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] 
      },
    },
  };

  const floatingAnimation = shouldReduceMotion 
    ? {} 
    : {
        y: [0, -12, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section className="relative min-h-[65vh] flex items-center pt-6 pb-0 md:pt-10 md:pb-0 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-square bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_70%)] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto z-10 px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Image - Top on mobile, Right on desktop */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="w-full order-1 lg:order-2"
          >
            <motion.div 
              animate={floatingAnimation}
              className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square"
            >
              <Image
                src="/hero.png"
                alt="Chief of Staff AI Assistant"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-contain"
                priority
                loading="eager"
              />
            </motion.div>
          </motion.div>

          {/* Content - Bottom on mobile, Left on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >
            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-foreground leading-[1.05] mb-2"
            >
              <HighlightAI text={copy.hero.title} />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-text-muted font-medium max-w-xl mb-4 leading-relaxed"
            >
              <HighlightAI text={copy.hero.subtitle} />
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="w-full sm:w-auto"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <button
                className="group relative w-full sm:w-auto bg-secondary text-primary px-10 py-5 rounded-pill font-sans font-bold text-lg transition-all duration-300 shadow-xl shadow-secondary/25 hover:shadow-secondary/40 flex items-center justify-center gap-2 overflow-hidden"
                onClick={() =>
                  document
                    .getElementById("waitlist-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">{copy.cta.waitlist}</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
