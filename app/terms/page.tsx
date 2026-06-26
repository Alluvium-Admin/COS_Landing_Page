import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Scale, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Chief of Staff",
  description: "Review the Terms of Service for using the Chief of Staff platform. Understand your rights and responsibilities.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-text-muted text-sm md:text-base">
              Last Updated: June 26, 2026
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-card border border-border flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <Scale className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Simple Agreement</h3>
              <p className="text-xs text-text-muted">
                By using our platform, you agree to these clear and transparent terms.
              </p>
            </div>
            <div className="bg-card p-6 rounded-card border border-border flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Integration Control</h3>
              <p className="text-xs text-text-muted">
                You control all connected integrations and can revoke access at any time.
              </p>
            </div>
            <div className="bg-card p-6 rounded-card border border-border flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Fair Usage Policy</h3>
              <p className="text-xs text-text-muted">
                Please use the services responsibly and in compliance with local laws.
              </p>
            </div>
          </div>

          {/* Core Content */}
          <div className="bg-card p-8 md:p-12 rounded-card border border-border shadow-md space-y-8 font-sans">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                1. Acceptance of Terms
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                By accessing or using Chief of Staff (&quot;the Service&quot;), hosted at <Link href="/" className="text-secondary hover:underline font-semibold">fullview.work</Link>, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these Terms, do not use or access the Service.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                2. Description of Service
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Chief of Staff is an artificial intelligence-guided personal executive assistant that aggregates calendar events, emails, tasks, and documentation from third-party services (such as Jira, Confluence, Slack, Google Calendar, and Gmail) to present synchronized task lists, daily morning briefs, and productivity suggestions.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                3. User Accounts and Security
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                To access certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-text-muted text-sm md:text-base pl-4 space-y-2">
                <li>Provide accurate, current, and complete account information.</li>
                <li>Maintain the security and confidentiality of your password and credentials.</li>
                <li>Promptly notify us if you discover or suspect any unauthorized access or breach of security.</li>
                <li>Accept full responsibility for all activities that occur under your user account.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                4. Connected Third-Party Service Integrations
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                The Service operates by connecting to third-party accounts (such as Google Workspace, Slack, and Atlassian).
              </p>
              <div className="space-y-2 pl-2">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-text-muted">
                    <strong className="text-foreground">Authorization:</strong> By connecting any third-party service, you grant us permission to access, retrieve, and process data from that service as described in our <Link href="/privacy" className="text-secondary hover:underline font-semibold">Privacy Policy</Link>.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-text-muted">
                    <strong className="text-foreground">Independence:</strong> We have no control over, and assume no responsibility for, the content, privacy policies, terms, or practices of any third-party platforms. Your relationship with third-party service providers is governed solely by your agreement with them.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                5. Intellectual Property Rights
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Unless otherwise indicated, the Service, including its design, source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics, are our proprietary property and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                6. Disclaimer of Warranties
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed italic bg-primary/20 p-4 rounded-xl border border-border">
                THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                7. Limitation of Liability
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CHIEF OF STAFF OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                8. Termination
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                9. Changes to Terms
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                10. Contact Us
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <div className="bg-primary/30 p-4 rounded-xl border border-border text-sm md:text-base text-text-muted">
                <strong className="text-foreground block">Chief of Staff Legal</strong>
                Email: <a href="mailto:support@fullview.work" className="text-secondary hover:underline">support@fullview.work</a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
