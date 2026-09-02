"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { copy } from "@/constants/copy";
import { HighlightAI } from "@/components/ui/HighlightAI";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const LOOM_EMBED_URL =
  "https://www.loom.com/embed/eef220d9ac8d4813bf2043bee81ef83f?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true";

export const ProductDemo = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        staggerChildren: 0.2,
      },
    },
  };

  const frameVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 1,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="demo" className="py-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2
            variants={containerVariants}
            className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight text-foreground leading-tight mb-6"
          >
            <HighlightAI text={copy.demo.title} />
          </motion.h2>
          <motion.p
            variants={containerVariants}
            className="text-xl md:text-2xl text-text-muted font-medium max-w-3xl leading-relaxed"
          >
            <HighlightAI text={copy.demo.subtitle} />
          </motion.p>
        </motion.div>

        {/* Phone mockup with ambient glow */}
        <motion.div
          variants={frameVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-accent-ai/10 blur-[80px] rounded-full -z-10" />

          <PhoneMockup
            src={LOOM_EMBED_URL}
            title="Chief of Staff — Product Demo"
          />

          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent-ai/10 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
