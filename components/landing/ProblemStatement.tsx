"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { copy } from "@/constants/copy";

export const ProblemStatement = () => {
  return (
    <section className="py-4 md:py-6 px-6 bg-primary relative overflow-hidden">
      {/* Subtle Background Texture/Aura */}
      <div className="absolute -right-20 top-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-4/3 lg:aspect-4/3 order-2 lg:order-2"
        >
          <Image
            src="/problems.png"
            alt="The Problem of Digital Noise"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
          />
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="space-y-2 order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground leading-tight">
            {copy.problem.title}
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
            {copy.problem.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
