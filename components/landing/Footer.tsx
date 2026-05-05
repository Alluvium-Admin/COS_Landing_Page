"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { copy } from "@/constants/copy";
import { HighlightAI } from "../ui/HighlightAI";

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="py-6 md:py-8 px-6 bg-primary">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-8">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/full-logo.png"
                alt={copy.appName}
                width={160}
                height={35}
                className="object-contain h-auto"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {copy.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={copy.footer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-text-muted hover:text-secondary hover:border-secondary transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href={copy.footer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-text-muted hover:text-secondary hover:border-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {copy.footer.links.map((group) => (
            <motion.div key={group.title} variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground tracking-tight">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Back to Top / Status Column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 lg:items-end">
            <h4 className="font-semibold text-foreground tracking-tight opacity-0 lg:block hidden">
              Support
            </h4>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-text-muted hover:text-foreground transition-colors inline-flex items-center gap-2 group"
            >
              Back to Top
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-muted text-xs opacity-70">
            {copy.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted uppercase tracking-widest font-medium">
            <span>Crafted for Clarity</span>
            <span className="w-1 h-1 bg-secondary rounded-full" />
            <span><HighlightAI text="AI Powered" /></span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
