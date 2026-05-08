"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { WaitlistSubmission } from "@/types/waitlist";

export const WaitlistForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const payload: WaitlistSubmission = {
      full_name: formData.name,
      email: formData.email,
      role: formData.role || "Potential User", // Providing a default role if empty
    };

    try {
      const response = await axios.post("https://bulk.ec2.alluvium.net/api/waitlist/", payload);
      
      // 201: Created, 200: Already on waitlist
      if (response.status === 201 || response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      setStatus("error");
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          const data = error.response.data;
          let message = "Validation error. Please check your inputs.";
          
          if (data && typeof data === "object") {
            if (data.detail) {
              message = data.detail;
            } else if (data.message) {
              message = data.message;
            } else {
              // Priority: Check for nested 'Errors' or 'errors' key
              const rawErrors = data.Errors || data.errors || data;
              
              if (rawErrors && typeof rawErrors === "object") {
                const errors = Object.entries(rawErrors)
                  .filter(([key]) => key.toLowerCase() !== "success") // Skip 'success' flag if it's at the top level
                  .map(([key, value]) => {
                    const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ");
                    let errorText = "";
                    
                    if (Array.isArray(value)) {
                      errorText = value.map(v => (typeof v === 'object' ? JSON.stringify(v) : String(v))).join(", ");
                    } else if (typeof value === 'object' && value !== null) {
                      // If it's a nested object, try to flatten it
                      errorText = Object.values(value).flat().join(", ");
                    } else {
                      errorText = String(value);
                    }
                    
                    return `${fieldName}: ${errorText}`;
                  });
                
                if (errors.length > 0) {
                  message = errors.join(" | ");
                }
              }
            }
          }
          setErrorMessage(message);
        } else {
          setErrorMessage("Network error. Please try again later.");
        }
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <section id="waitlist-section" className="py-8 md:py-12 px-6 bg-linear-to-tr from-primary to-secondary/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">
            Secure Your Executive Advantage
          </h2>
          <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
            Join the exclusive group of high-performers elevating their clarity with Chief of Staff.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-6 md:p-8 rounded-card border border-border shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-success" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">You&apos;re on the list!</h3>
                  <p className="text-text-muted">We&apos;ll reach out soon as we scale our capacity.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-secondary font-bold hover:underline"
                >
                  Join with another email
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-bold text-foreground ml-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-5 py-3 bg-primary/30 border border-border rounded-pill focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-bold text-foreground ml-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-5 py-3 bg-primary/30 border border-border rounded-pill focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="role" className="text-sm font-bold text-foreground ml-1">
                    Role / How will you use Chief of Staff? (Optional)
                  </label>
                  <input
                    id="role"
                    type="text"
                    placeholder="CEO at TechCorp"
                    className="w-full px-5 py-3 bg-primary/30 border border-border rounded-pill focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full bg-secondary text-primary py-4 rounded-pill font-sans font-bold text-lg hover:scale-[1.01] transition-all active:scale-99 shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100 mt-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>

                {status === "error" && (
                  <div className="flex items-start gap-2 text-destructive bg-destructive/10 p-4 rounded-2xl mt-4 border border-destructive/20">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium leading-relaxed">{errorMessage}</span>
                  </div>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

