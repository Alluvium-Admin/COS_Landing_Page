import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProductDemo } from "@/components/landing/ProductDemo";
import { ProblemStatement } from "@/components/landing/ProblemStatement";
import { Features } from "@/components/landing/Features";
import { CompetitivePositioning } from "@/components/landing/CompetitivePositioning";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SocialProof } from "@/components/landing/SocialProof";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <ProductDemo />
      <ProblemStatement />
      <Features />
      <CompetitivePositioning />
      <HowItWorks />
      <SocialProof />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
