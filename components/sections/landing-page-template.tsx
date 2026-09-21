import type { ReactNode } from "react";
import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight } from "lucide-react";

type Item = { title: string; description: string; icon?: ReactNode };

export function LandingPageTemplate({
  badge,
  h1Top,
  h1Highlight,
  intro,
  cta,
  illustration,
  featuresTitle,
  featuresIntro,
  features,
  stepsTitle,
  steps,
  faqTitle,
  faqs,
  schemaName,
  serviceType,
  path,
  breadcrumbName,
}: {
  badge: string;
  h1Top: string;
  h1Highlight: string;
  intro: string;
  cta: string;
  illustration: ReactNode;
  featuresTitle: string;
  featuresIntro: ReactNode;
  features: Item[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  schemaName: string;
  serviceType: string;
  path: string;
  breadcrumbName: string;
}) {
  const url = `https://www.flyeronic.com${path}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: schemaName,
          serviceType,
          provider: { "@id": "https://www.flyeronic.com/#organization" },
          areaServed: { "@type": "City", name: "Indore" },
          url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flyeronic.com" },
            { "@type": "ListItem", position: 2, name: breadcrumbName, item: url },
          ],
        }}
      />
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  {badge}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  {h1Top}
                  <br />
                  <span className="text-primary">{h1Highlight}</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">{intro}</p>
                <AnimatedButton href="/contact" variant="primary">
                  {cta}
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">{illustration}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">{featuresTitle}</h2>
              <p className="text-muted-foreground">{featuresIntro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-muted/10 border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all">
                  {f.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">{f.icon}</div>
                  )}
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">{stepsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((s, i) => (
                <div key={s.title} className="bg-white border border-border rounded-2xl p-6">
                  <p className="text-sm font-semibold text-primary mb-1">Step {i + 1}</p>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">{faqTitle}</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-muted/10 border border-border rounded-2xl p-6">
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
