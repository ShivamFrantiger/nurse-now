import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EarningsCalculator from "@/components/EarningsCalculator";
import WhyJoinSection from "@/components/WhyJoinSection";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApplicationCTASection from "@/components/ApplicationCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB] text-[#142D3A]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EarningsCalculator />
        <WhyJoinSection />
        <ComparisonMatrix />
        <HowItWorks />
        <TestimonialsSection />
        <ApplicationCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
