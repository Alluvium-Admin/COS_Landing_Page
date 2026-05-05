"use client";

import React from "react";
import { motion } from "framer-motion";
import { HighlightAI } from "../ui/HighlightAI";

const steps = [
  {
    number: "01",
    title: "Connect Your World",
    description: "Securely integrate your calendar, email, and task managers in one click.",
  },
  {
    number: "02",
    title: "AI Synthesis",
    description: "Our engine identifies your core focus areas, priorities, and potential bottlenecks.",
  },
  {
    number: "03",
    title: "Intentional Focus",
    description: "Set your daily intentions and let your AI Chief of Staff handle the friction.",
  },
  {
    number: "04",
    title: "Executive Insights",
    description: "Stay ahead with automated reports and smart reminders tailored to your style.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-6 md:py-8 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Experience the seamless transition from chaos to executive clarity.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" as const }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number Indicator */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-sans font-extrabold text-xl shadow-lg shadow-secondary/20 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] bg-card p-6 rounded-card border border-border shadow-sm ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <h3 className="text-xl font-sans font-bold text-foreground mb-2">
                    <HighlightAI text={step.title} />
                  </h3>
                  <p className="text-text-muted leading-relaxed font-medium">
                    <HighlightAI text={step.description} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
