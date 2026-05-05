"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HighlightAI } from "../ui/HighlightAI";
import { SiYcombinator, SiTechcrunch, SiProducthunt, SiMedium, SiZapier } from "react-icons/si";

const testimonials = [
  {
    quote: "The first AI assistant that actually understands the executive mindset.",
    author: "Alexander Chen",
    title: "Series B Tech Founder",
  },
  {
    quote: "Clarity is the new luxury. Chief of Staff delivers it daily.",
    author: "Sarah Jenkins",
    title: "Venture Partner",
  },
  {
    quote: "Elegance meets absolute efficiency. A game-changer for my workflow.",
    author: "Marcus Thorne",
    title: "Fortune 500 Design Director",
  },
  {
    quote: "Finally, an AI that prioritizes my time as much as I do.",
    author: "Elena Rodriguez",
    title: "COO, Fintech Innovators",
  },
  {
    quote: "The interface is a masterpiece of minimalist productivity.",
    author: "David Wu",
    title: "Creative Director",
  },
];

const logos = [
  { icon: SiYcombinator, name: "Y Combinator" },
  { icon: SiTechcrunch, name: "TechCrunch" },
  { icon: SiProducthunt, name: "Product Hunt" },
  { icon: SiMedium, name: "Medium" },
  { icon: SiZapier, name: "Zapier" },
];

export const SocialProof = () => {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-pill border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-widest mb-6"
        >
          Trusted by Leaders
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6"
        >
          Built for the <span className="text-secondary italic">High-Performer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto text-lg"
        >
          Join a community of executives and founders who have regained their clarity.
        </motion.p>
      </div>

      {/* Trust Bar */}
      <div className="mb-20">
        <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((Logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Logo.icon className="text-4xl md:text-5xl text-foreground" title={Logo.name} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-6 py-4 w-max"
          animate={shouldReduceMotion ? {} : {
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="inline-block w-[350px] md:w-[450px] bg-card p-8 rounded-card border border-border/50 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group/card"
            >
              <div className="flex flex-col h-full justify-between gap-6 whitespace-normal">
                <div className="relative">
                  <div className="absolute -top-4 -left-2 text-secondary/10 font-serif text-7xl leading-none select-none group-hover/card:text-secondary/20 transition-colors">
                    &ldquo;
                  </div>
                  <p className="text-lg md:text-xl text-foreground font-medium italic relative z-10 leading-relaxed">
                    <HighlightAI text={t.quote} />
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-sans font-bold text-foreground">{t.author}</div>
                    <div className="text-text-muted text-sm">{t.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
