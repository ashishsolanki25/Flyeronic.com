import { GlowMenu } from "@/components/ui/glow-menu";
import { HeroSection } from "@/components/sections/hero";
import { OrbitLogos } from "@/components/sections/logo-marquee";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { RevealServicesSection } from "@/components/sections/reveal-services";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { SocialProof } from "@/components/sections/social-proof";
import { ContactSection } from "@/components/sections/contact";
import { LocalFaqLocations } from "@/components/sections/local-faq-locations";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <GlowMenu />
      <main>
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={0}>
          <OrbitLogos />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ProblemSolution />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <RevealServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <CaseStudiesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <SocialProof />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <LocalFaqLocations />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <FinalCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
