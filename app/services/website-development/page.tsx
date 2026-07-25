import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { WebsiteIllustration } from "@/components/ui/service-illustrations";
import {
  MonitorSmartphone,
  Rocket,
  ShoppingCart,
  Gauge,
  SearchCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Website Development Company in Indore | Flyeronic",
  description:
    "Flyeronic is a website development company in Indore building fast, SEO-ready websites, landing pages, and e-commerce stores engineered to convert visitors into leads.",
  alternates: {
    canonical: "https://flyeronic.com/services/website-development",
  },
};

const features = [
  {
    icon: <MonitorSmartphone size={22} />,
    title: "Custom Website Design",
    description:
      "Fully custom, mobile-first designs built around your brand and your customers' journey — no generic templates.",
  },
  {
    icon: <Rocket size={22} />,
    title: "High-Converting Landing Pages",
    description:
      "Dedicated landing pages for ad campaigns, built to maximize conversion rate for every rupee of ad spend.",
  },
  {
    icon: <ShoppingCart size={22} />,
    title: "E-commerce Websites",
    description:
      "Online stores with smooth checkout, product catalog management, and payment gateway integration.",
  },
  {
    icon: <Gauge size={22} />,
    title: "Speed & Performance",
    description:
      "Sites built to load fast on mobile networks — critical for both user experience and Google rankings.",
  },
  {
    icon: <SearchCheck size={22} />,
    title: "SEO-Ready Code & Structure",
    description:
      "Clean semantic HTML, proper heading structure, and technical SEO foundations built in from day one — not bolted on later.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A standard business website typically takes 2–4 weeks from kickoff to launch, depending on scope. Landing pages can be turned around faster, often within a week.",
  },
  {
    q: "Will my website be optimized for SEO from the start?",
    a: "Yes. Every site we build follows on-page SEO best practices — proper title tags, meta descriptions, heading structure, and fast load times — so you're not starting from zero.",
  },
  {
    q: "Do you also handle website maintenance after launch?",
    a: "Yes, we offer ongoing maintenance, updates, and performance monitoring as part of our retainer plans.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Website Development
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Website Development Company in Indore
                  <br />
                  <span className="text-primary">Built to Convert</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  We design and build fast, SEO-ready websites, landing pages, and
                  online stores engineered to turn visitors into leads and sales.
                </p>
                <AnimatedButton href="/#contact" variant="primary">
                  Get a Free Website Consultation
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <WebsiteIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What We Build
              </h2>
              <p className="text-muted-foreground">
                From single landing pages to full e-commerce stores — every
                site is fast, mobile-first, and SEO-ready.
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
              Website Development FAQ
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
