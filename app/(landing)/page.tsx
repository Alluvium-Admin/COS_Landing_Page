import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemStatement } from "@/components/landing/ProblemStatement";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SocialProof } from "@/components/landing/SocialProof";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <SocialProof />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
