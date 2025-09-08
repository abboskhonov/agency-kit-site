"use client";

import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import ContactSection from "@/components/landing/ContactSection";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function Home() {
  return (
    <main id="main-content" role="main">
      <div className="mx-auto max-w-6xl">
        <HeroSection />
        <CaseStudiesSection />
        <ProcessSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </main>
  );
}
