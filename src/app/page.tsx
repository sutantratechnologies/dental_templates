import React from "react";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SmileTransformation } from "@/components/home/SmileTransformation";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} showFilter={true} />
      <WhyChooseUs />
      <SmileTransformation />
      <DoctorsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
