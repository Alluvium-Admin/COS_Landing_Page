import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Chief of Staff",
  description: "Learn how Chief of Staff collects, uses, and protects your data. Transparent, secure, and compliant privacy policy.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-text-muted text-sm md:text-base">
              Last Updated: June 26, 2026
            </p>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-card border border-border flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Your Data is Yours</h3>
              <p className="text-xs text-text-muted">
                We never sell, rent, or trade your personal or integration data to third parties.
              </p>
            </div>
            <div className="bg-card p-6 rounded-card border border-border flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <Lock className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Enterprise Security</h3>
              <p className="text-xs text-text-muted">
                All connection data is encrypted in transit using SSL/TLS and at rest using AES-256.
              </p>
            </div>
            <div className="bg-card p-6 rounded-card border border-border flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-sm mb-1">Google Compliance</h3>
              <p className="text-xs text-text-muted">
                Fully compliant with Google API Services User Data Policy, including Limited Use.
              </p>
            </div>
          </div>

          {/* Core Content */}
          <div className="bg-card p-8 md:p-12 rounded-card border border-border shadow-md space-y-8 font-sans">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                1. Introduction & Who We Are
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Welcome to Chief of Staff (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), hosted at <Link href="/" className="text-secondary hover:underline font-semibold">fullview.work</Link>. We are committed to protecting your privacy and ensuring you have a secure experience when using our platform.
              </p>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Chief of Staff is an AI Executive Assistant designed to help professionals and high-performers manage commitments, track task lists, and generate morning briefs. By connecting your calendars, email, and project management workspaces, Chief of Staff synthesizes action items so you can start every day with focus.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                2. Information We Collect
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                To provide the Chief of Staff services, we collect information that you explicitly choose to share with us:
              </p>
              <ul className="list-disc list-inside text-text-muted text-sm md:text-base pl-4 space-y-2">
                <li><strong className="text-foreground">Account Information:</strong> Your name, email address, password, and profile preferences when you register.</li>
                <li><strong className="text-foreground">Connected Service Integrations:</strong> If you choose to connect third-party platforms (such as Jira, Confluence, Slack, Google Calendar, or Google Gmail), we collect authentication credentials (OAuth tokens) and the sync-specific data described below.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Technical logs, IP addresses, device types, browser types, and engagement history on our website.</li>
              </ul>
            </section>

            {/* Section 3 - Google OAuth Transparency (CRITICAL) */}
            <section className="space-y-4 bg-primary/20 p-6 rounded-2xl border border-border/80">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                3. Google API Data & OAuth Transparency
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Chief of Staff offers optional integrations with your Google Workspace account to help streamline your workflow. When you authorize our app via Google OAuth, we request access to specific scopes (such as Google Calendar and Gmail) for the following explicit purposes:
              </p>
              
              <div className="space-y-3 pl-2">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-text-muted">
                    <strong className="text-foreground">Google Calendar Access:</strong> We access calendar events (dates, times, descriptions, and list of invitees) to display your daily schedule, check for availability conflicts, and correlate meetings with tasks or commitments.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-text-muted">
                    <strong className="text-foreground">Google Gmail Access:</strong> We securely analyze email content (only with your explicit authorization) to detect pending commitments or follow-up tasks made to or by you, compiling them into your dashboard to prevent tasks from slipping through the cracks.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="font-bold text-foreground text-sm md:text-base mb-2">Google Limited Use Disclosure:</h4>
                <div className="p-4 bg-card rounded-xl border border-border text-xs md:text-sm text-text-muted leading-relaxed italic">
                  Chief of Staff&apos;s use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-semibold not-italic">Google API Services User Data Policy</a>, including the Limited Use requirements.
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                4. How We Use and Process Your Data
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                We use the data collected for the sole purpose of operating, maintaining, and providing you with the features of the Chief of Staff platform. Specifically:
              </p>
              <ul className="list-disc list-inside text-text-muted text-sm md:text-base pl-4 space-y-2">
                <li>To generate your daily morning brief and task synthesis.</li>
                <li>To analyze commitments across connected services.</li>
                <li>To provide customer support and respond to user requests.</li>
                <li>To maintain system performance, fix bugs, and ensure security.</li>
              </ul>
              <p className="text-text-muted text-sm md:text-base leading-relaxed font-semibold mt-2 text-foreground">
                We do not use your personal data, integration data, or Google API data to train general-purpose artificial intelligence or machine learning models without your explicit and separate consent.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                5. Data Sharing and Third-Party Transfer
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                We do not sell, rent, or lease your personal information, credentials, or synchronized workspace data. We only share information with trusted third-party service providers (such as cloud hosting and database providers) who assist us in operating our application, and only to the extent necessary for them to perform their functions under strict confidentiality terms.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                6. Security & Data Retention
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                We implement industry-standard administrative, physical, and technical safeguards. All communications between your browser, our servers, and external integrations are encrypted using TLS/SSL. Stored data is encrypted at rest using AES-256 standards.
              </p>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                We retain your data only for as long as your account is active or as needed to provide you with the services. You can delete your account or unlink any integration at any time through your dashboard.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                7. Your Rights and Deletion Requests
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                You have the right to access, update, correct, or delete your personal information stored with us. You can disconnect your Google account or any other integration at any time, which will immediately cease any further data synchronization.
              </p>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                To request a complete deletion of your account and all associated synchronized data from our database, please contact our support team at <a href="mailto:support@fullview.work" className="text-secondary hover:underline font-semibold">support@fullview.work</a>.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block" />
                8. Contact Information
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-primary/30 p-4 rounded-xl border border-border text-sm md:text-base text-text-muted">
                <strong className="text-foreground block">Chief of Staff Support</strong>
                Email: <a href="mailto:support@fullview.work" className="text-secondary hover:underline">support@fullview.work</a><br />
                Domain: <Link href="/" className="text-secondary hover:underline">fullview.work</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
