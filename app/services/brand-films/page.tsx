import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { BrandFilmIllustration } from "@/components/ui/service-illustrations";
import {
  Film,
  Package,
  Quote,
  Clapperboard,
  Scissors,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Brand Film Production Company in Indore | Flyeronic",
  description:
    "Flyeronic produces brand films, corporate videos, product films, and cinematic ad films in Indore — from scripting and shooting to direction and post-production.",
  alternates: {
    canonical: "https://www.flyeronic.com/services/brand-films",
  },
};

const features = [
  {
    icon: <Film size={22} />,
    title: "Corporate Films",
    description:
      "Polished corporate videos that communicate your company's story, culture, and credibility to clients and investors.",
  },
  {
    icon: <Package size={22} />,
    title: "Product Films",
    description:
      "Cinematic product videos that showcase features and benefits in a way static images and text never can.",
  },
  {
    icon: <Quote size={22} />,
    title: "Testimonial Videos",
    description:
      "Authentic customer testimonial films that build trust and social proof for your brand.",
  },
  {
    icon: <Clapperboard size={22} />,
    title: "Cinematic Ad Films",
    description:
      "High-production ad films built for campaigns — from concept and scripting to full cinematic execution.",
  },
  {
    icon: <Scissors size={22} />,
    title: "Scripting, Direction & Post-Production",
    description:
      "End-to-end production: scripting, on-location direction, and professional editing, color grading, and sound design.",
  },
];

const faqs = [
  {
    q: "Do you handle the full production, or just filming?",
    a: "We handle everything end-to-end — concept and scripting, on-location shooting and direction, and post-production including editing, color grading, and sound design.",
  },
  {
    q: "How long does a brand film take to produce?",
    a: "Depending on scope, most brand films take 2–4 weeks from scripting to final delivery, including pre-production planning and revisions.",
  },
  {
    q: "Can you produce films for real estate and clinics?",
    a: "Yes — we've produced brand and product films for real estate projects, clinics, salons, and manufacturing brands across Indore and Madhya Pradesh.",
  },
];

export default function BrandFilmsPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Brand Film Production
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Brand Film Production Company in Indore
                  <br />
                  <span className="text-primary">Stories That Build Trust</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  From scripting to final edit, we produce cinematic brand films,
                  corporate videos, and product films that make your brand
                  memorable.
                </p>
                <AnimatedButton href="/#contact" variant="primary">
                  Discuss Your Brand Film
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <BrandFilmIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What We Produce
              </h2>
              <p className="text-muted-foreground">
                Full-service video production — concept, direction, filming,
                and post-production — all under one roof.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-muted/10 border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">
              Brand Films FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
