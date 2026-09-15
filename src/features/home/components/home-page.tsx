import { AboutSection } from "@/features/home/components/about-section";
import { AreaTestimonialsSection } from "@/features/home/components/area-testimonials-section";
import { CtaSection } from "@/features/home/components/cta-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { ServicesSection } from "@/features/home/components/services-section";
import { ValuesSection } from "@/features/home/components/values-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <AboutSection />
      <AreaTestimonialsSection />
      <CtaSection />
    </>
  );
}
