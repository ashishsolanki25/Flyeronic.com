import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Case Studies | Flyeronic",
  description: "Flyeronic publishes case studies only with client permission and verified numbers. Here is what we track and how to get a free audit.",
  alternates: { canonical: "https://www.flyeronic.com/case-studies" },
  robots: { index: false, follow: true },
};

const tracked = [
  { title: "Cost per lead", text: "What each enquiry actually costs, by channel and campaign." },
  { title: "Qualified leads and site visits", text: "Not just form fills: how many leads are real buyers or patients." },
  { title: "Return on ad spend", text: "Revenue attributed to ads, tracked from click to closed deal where possible." },
  { title: "Search visibility", text: "Impressions, rankings, and Google Business Profile actions from Search Console and GBP." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-5">
              Case Studies, Published Only When They&apos;re Real
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We share results only with client permission and numbers we can verify. Our first case studies will appear here as projects complete.
            </p>
            <AnimatedButton href="/contact" variant="primary">
              Get a Free Marketing Audit
              <ArrowRight size={16} />
            </AnimatedButton>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">What we measure for every client</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tracked.map((t) => (
                <div key={t.title} className="bg-muted/10 border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
