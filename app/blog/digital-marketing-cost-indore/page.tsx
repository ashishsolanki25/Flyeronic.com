import Link from "next/link";
import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { RelatedPosts } from "@/components/sections/related-posts";
import { ArrowLeft, ArrowRight, IndianRupee } from "lucide-react";

export const metadata = {
  title: "Digital Marketing Cost in Indore — 2026 Pricing Guide | Flyeronic",
  description:
    "What does digital marketing actually cost in Indore in 2026? A realistic breakdown of SEO, Google Ads, social media, and website pricing for local businesses.",
  alternates: {
    canonical: "https://www.flyeronic.com/blog/digital-marketing-cost-indore",
  },
};

const pricingTiers = [
  {
    service: "SEO (Local)",
    range: "₹10,000 – ₹35,000 / month",
    notes:
      "Depends on competition for your keywords and how many locations/services you need to rank for.",
  },
  {
    service: "Google Ads Management",
    range: "₹8,000 – ₹25,000 / month + ad spend",
    notes:
      "Management fee is separate from what you spend on the ads themselves. Ad spend for a local business usually starts around ₹15,000–₹20,000/month.",
  },
  {
    service: "Social Media Management",
    range: "₹12,000 – ₹40,000 / month",
    notes:
      "Varies by number of platforms, posting frequency, and whether it includes content shoots or just design + copy.",
  },
  {
    service: "Website (Business Site)",
    range: "₹15,000 – ₹60,000 (one-time)",
    notes:
      "A template-based site sits at the lower end; a custom-coded, fast, SEO-ready site sits higher.",
  },
  {
    service: "Full-Service Retainer",
    range: "₹25,000 – ₹80,000+ / month",
    notes:
      "Combines SEO, ads, social, and reporting under one team — usually the most cost-effective if you need more than one channel.",
  },
];

export default function DigitalMarketingCostPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        {/* HERO */}
        <section className="py-20 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Pricing Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground leading-tight mb-6">
              How Much Does Digital Marketing Cost in Indore?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A realistic, no-nonsense pricing breakdown for 2026 — so you know
              what’s fair before you talk to any agency, including us.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose-content space-y-6 text-foreground/90 leading-relaxed">
              <p>
                If you’ve been searching around, you’ve probably noticed that
                digital marketing pricing in Indore varies wildly — one
                freelancer quotes ₹5,000 a month, another agency quotes
                ₹1,00,000. Both can be “correct” depending on what’s actually
                included. Here’s what genuinely drives the price, and what
                you should expect to pay at each level.
              </p>

              <h2 className="text-2xl font-bold font-heading text-foreground pt-4">
                What Actually Changes the Price
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Competition in your niche</strong> — ranking a
                  clinic in a specific Indore locality costs far less than
                  ranking a real estate developer competing across the city.
                </li>
                <li>
                  <strong className="text-foreground">Number of channels</strong> — SEO alone is
                  cheaper than SEO + Ads + Social bundled together, but a
                  bundle is usually better value per rupee than hiring three
                  separate freelancers.
                </li>
                <li>
                  <strong className="text-foreground">Reporting & strategy time</strong> — agencies
                  that provide real dashboards, monthly strategy calls, and
                  dedicated account management cost more than a “set it and
                  forget it” freelancer.
                </li>
              </ul>
            </div>

            {/* PRICING TABLE */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                2026 Pricing Ranges by Service
              </h2>
              <div className="space-y-4">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.service}
                    className="bg-muted/10 border border-border rounded-2xl p-6"
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <h3 className="font-bold text-foreground">
                        {tier.service}
                      </h3>
                      <span className="flex items-center gap-1 text-primary font-semibold text-sm whitespace-nowrap">
                        <IndianRupee size={14} />
                        {tier.range.replace("₹", "")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tier.notes}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Ranges reflect typical small-to-mid-size business budgets in
                Indore as of 2026. Enterprise or multi-city campaigns run
                higher.
              </p>
            </div>

            <div className="prose-content space-y-6 text-foreground/90 leading-relaxed mt-12">
              <h2 className="text-2xl font-bold font-heading text-foreground">
                A Quick Way to Sanity-Check Any Quote
              </h2>
              <p>
                If a quote sounds too low to cover even basic account
                management time, ask exactly how many hours per month go into
                your account, and what deliverables you’ll actually receive.
                A ₹5,000/month “SEO package” that includes no content, no
                technical fixes, and no reporting isn’t really SEO — it’s a
                placeholder.
              </p>
              <p>
                On the other end, a high price doesn’t automatically mean
                quality. Ask for past results in your specific industry, not
                just generic case studies.
              </p>
            </div>

            <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
              <AnimatedButton href="/#contact" variant="primary">
                Get a Custom Quote
                <ArrowRight size={16} />
              </AnimatedButton>
            </div>

            <RelatedPosts excludeSlug="digital-marketing-cost-indore" />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
