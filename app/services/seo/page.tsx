import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SEOIllustration } from "@/components/ui/service-illustrations";
import {
  Search,
  MapPin,
  Link2,
  FileText,
  Gauge,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "SEO Services in Indore | Flyeronic — Local & National SEO",
  description:
    "Flyeronic offers SEO services in Indore including local SEO, on-page SEO, technical SEO, and link building to help businesses rank higher and get more organic leads.",
  alternates: {
    canonical: "https://flyeronic.com/services/seo",
  },
};

const features = [
  {
    icon: <Search size={22} />,
    title: "On-Page & Technical SEO",
    description:
      "Keyword-optimized titles, meta descriptions, heading structure, site speed, and crawlability fixes so search engines fully understand and index your site.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Local SEO & Google Business Profile",
    description:
      "Google Business Profile optimization, local citations, and review generation so you rank in the Indore local pack and Maps results.",
  },
  {
    icon: <Link2 size={22} />,
    title: "Link Building",
    description:
      "Quality backlinks from relevant, authoritative sites to build domain trust and improve rankings for competitive keywords.",
  },
  {
    icon: <FileText size={22} />,
    title: "Content & Keyword Strategy",
    description:
      "In-depth keyword research and content mapping so every page targets real search intent — not guesswork.",
  },
  {
    icon: <Gauge size={22} />,
    title: "Core Web Vitals & Site Speed",
    description:
      "Performance audits and fixes so your site loads fast on mobile — a direct ranking factor and conversion driver.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results in Indore?",
    a: "For competitive local keywords like 'digital marketing agency Indore', most businesses see meaningful movement in 3–6 months with consistent on-page, technical, and local SEO work. Some long-tail and local-pack terms can rank faster.",
  },
  {
    q: "Do you work on both local SEO and national SEO?",
    a: "Yes. We handle hyperlocal SEO for businesses that serve Indore and nearby cities, as well as national SEO campaigns for brands targeting all-India search traffic.",
  },
  {
    q: "What's included in your monthly SEO reporting?",
    a: "Keyword rankings, organic traffic trends, technical health, backlinks earned, and Google Business Profile performance — all in one transparent monthly report.",
  },
];

export default function SEOPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        {/* HERO */}
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  SEO Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  SEO Services in Indore
                  <br />
                  <span className="text-primary">That Get You to Page 1</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  We help Indore businesses rank higher on Google through technical
                  SEO, local SEO, content strategy, and link building — turning
                  organic search into a predictable lead source.
                </p>
                <AnimatedButton href="/#contact" variant="primary">
                  Get a Free SEO Audit
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <SEOIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What Our SEO Service Covers
              </h2>
              <p className="text-muted-foreground">
                A complete SEO system — not just keyword stuffing. Every layer
                works together to drive rankings, traffic, and leads.
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

        {/* FAQ */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">
              SEO Services FAQ
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
