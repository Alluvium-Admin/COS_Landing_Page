"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { copy } from "@/constants/copy";

const { competitive } = copy;

const fadeUp = (shouldReduce: boolean | null): Variants => ({
  hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: shouldReduce ? 0.3 : 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
});

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface CompetitorRowProps {
  name: string;
  description: string;
}

const CompetitorRow = ({ name, description }: CompetitorRowProps) => (
  <div className="flex items-start gap-2.5 mb-4 last:mb-0">
    <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-foreground/30" />
    <div>
      <p className="text-base font-sans font-bold text-foreground">{name}</p>
      <p className="text-base font-medium text-foreground/70 leading-relaxed mt-0.5">
        {description}
      </p>
    </div>
  </div>
);

export const CompetitivePositioning = () => {
  const shouldReduceMotion = useReducedMotion();
  const item = fadeUp(shouldReduceMotion);

  return (
    <section id="competitive" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <motion.p
            variants={item}
            className="text-xs font-sans font-semibold tracking-[0.2em] text-secondary uppercase mb-4"
          >
            {competitive.eyebrow}
          </motion.p>
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-foreground leading-tight mb-4"
          >
            Where{" "}
            <em className="not-italic text-secondary">Chief of Staff</em>{" "}
            Wins
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg font-medium text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {competitive.subtitle}
          </motion.p>
        </motion.div>

        {/* ── 2×2 Matrix ────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Top axis labels */}
          <div className="grid grid-cols-2 mb-1 px-px">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-foreground/50 pl-4">
              {competitive.axes.yTopLeft}
            </p>
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-secondary pl-4">
              {competitive.axes.yTopRight}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-card overflow-hidden">

            {/* Top-left */}
            <motion.div
              variants={item}
              className="p-6 border-b border-r-0 md:border-r border-border bg-card/40"
            >
              {competitive.topLeft.map((c) => (
                <CompetitorRow key={c.name} name={c.name} description={c.description} />
              ))}
            </motion.div>

            {/* Top-right: WIN ZONE */}
            <motion.div
              variants={item}
              className="p-6 border-b border-border bg-secondary/5 relative"
            >
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-secondary border border-secondary/40 rounded-full px-2.5 py-0.5">
                  {competitive.winZone.badge}
                </span>
              </div>

              <div className="flex items-start gap-2.5 mb-5">
                <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-secondary" />
                <div>
                  <p className="text-base font-sans font-bold text-foreground">
                    {competitive.winZone.winner.name}{" "}
                    <span className="text-secondary">★</span>
                  </p>
                  <p className="text-base font-medium text-foreground/70 leading-relaxed mt-0.5">
                    {competitive.winZone.winner.description}
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-secondary bg-secondary/10 rounded-r-lg px-4 py-3">
                <p className="text-base font-sans font-semibold text-secondary mb-1">
                  {competitive.winZone.emptyNote.title}
                </p>
                <p className="text-base font-medium text-foreground/70 leading-relaxed">
                  {competitive.winZone.emptyNote.description}
                </p>
              </div>
            </motion.div>

            {/* Bottom-left */}
            <motion.div
              variants={item}
              className="p-6 border-r-0 md:border-r border-t border-border bg-card/40"
            >
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-foreground/50 mb-4">
                {competitive.axes.yBottomLeft}
              </p>
              {competitive.bottomLeft.map((c) => (
                <CompetitorRow key={c.name} name={c.name} description={c.description} />
              ))}
            </motion.div>

            {/* Bottom-right */}
            <motion.div
              variants={item}
              className="p-6 border-t border-border bg-card/40"
            >
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-foreground/50 mb-4">
                {competitive.axes.yBottomRight}
              </p>
              {competitive.bottomRight.map((c) => (
                <CompetitorRow key={c.name} name={c.name} description={c.description} />
              ))}
            </motion.div>
          </div>

          {/* X-axis bottom labels */}
          <div className="flex justify-between mt-2 px-px">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-foreground/50">
              {competitive.axes.xLeft}
            </p>
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-secondary">
              {competitive.axes.xRight}
            </p>
          </div>
        </motion.div>

        {/* ── Analysis Cards ─────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 border border-border rounded-card overflow-hidden"
        >
          <div className="flex justify-between items-center px-6 py-3 border-b border-border bg-card/30">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-foreground/50">
              {competitive.axes.xLeft} &nbsp;·&nbsp; {competitive.axes.xRight}
            </p>
            <p className="text-[11px] font-sans text-foreground/40 hidden sm:block">
              {competitive.axes.xAxisLabel}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {competitive.analysis.map((card) => (
              <motion.div key={card.label} variants={item} className="p-5">
                <p className="text-xs font-sans font-bold tracking-widest uppercase text-secondary mb-2">
                  {card.label}
                </p>
                <p className="text-base font-medium text-foreground/75 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Legend ─────────────────────────────────────────────────── */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-2"
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs font-sans font-medium text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              {competitive.legend.cosLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-sans font-medium text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-foreground/30 inline-block" />
              {competitive.legend.competitorsLabel}
            </span>
          </div>
          <p className="text-xs font-sans text-foreground/50 italic">
            {competitive.axes.yAxisLabel}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
