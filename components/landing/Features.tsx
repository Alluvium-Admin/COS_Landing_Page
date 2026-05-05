"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Bell, Sparkles } from "lucide-react";
import { copy } from "@/constants/copy";
import { HighlightAI } from "../ui/HighlightAI";

const features = [
  {
    title: copy.features[0].title,
    description: copy.features[0].description,
    icon: Layout,
  },
  {
    title: copy.features[1].title,
    description: copy.features[1].description,
    icon: Bell,
  },
  {
    title: copy.features[2].title,
    description: copy.features[2].description,
    icon: Sparkles,
  },
];

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-6 md:py-10 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-3"
          >
            Built for Modern Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Sophisticated tools designed to eliminate digital friction and restore focus.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group p-6 rounded-card border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-sans font-bold text-foreground mb-2">
                <HighlightAI text={feature.title} />
              </h3>
              <p className="text-text-muted leading-relaxed text-sm font-medium">
                <HighlightAI text={feature.description} />
              </p>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
