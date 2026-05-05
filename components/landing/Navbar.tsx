"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { copy } from "@/constants/copy";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--background)/80 backdrop-blur-md pt-3 pb-1"
          : "bg-transparent pt-5 pb-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="h-12 md:h-14 flex items-center -ml-6 md:-ml-10">
            <Image
              src="/full-logo.png"
              alt={copy.appName}
              priority
              width={200}
              height={200}
              className="object-contain object-left h-auto"
            />
        </div>

        {/* Right Side: Desktop Nav + CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <button
              className="bg-secondary text-primary px-8 py-3 rounded-pill font-sans font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-secondary/10"
              onClick={() =>
                document
                  .getElementById("waitlist-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {copy.cta.waitlist}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <button
                className="w-full bg-secondary text-primary px-6 py-4 rounded-pill font-sans font-bold text-lg"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("waitlist-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {copy.cta.waitlist}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
