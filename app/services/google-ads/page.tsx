import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Target,
  ShoppingBag,
  MonitorPlay,
  Gauge,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Google Ads Agency in Indore | PPC Management — Flyeronic",
  description:
    "Flyeronic is a Google Ads agency in Indore managing Search, Shopping, Display, YouTube and Performance Max campaigns to maximize ROAS for local and national brands.",
  alternates: {
    canonical: "https://flyeronic.com/services/google-ads",
  },
};

const features = [
  {
    icon: <Target size={22} />,
    title: "Search Campaigns",
    description:
      "High-intent keyword targeting so you show up exactly when Indore customers are searching for what you sell.",
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Shopping & Performance Max",
    description:
      "Product feed optimization and Performance Max setups that drive e-commerce sales across Google's full inventory.",
  },
  {
    icon: <MonitorPlay size={22} />,
    title: "Display & YouTube Ads",
    description:
      "Visual and video campaigns for brand awareness and retargeting across millions of sites and YouTube placements.",
  },
  {
    icon: <Gauge size={22} />,
    title: "Landing Page & Conversion Optimization",
    description:
      "We don't just run ads — we optimize the landing experience so more clicks actually turn into leads and sales.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Conversion Tracking & Reporting",
    description:
      "Proper Google Ads + GA4 conversion tracking so every rupee of spend is measurable, with transparent monthly reports.",
  },
];

const faqs = [
  {
    q: "What budget do I need to start Google Ads in Indore?",
    a: "We typically recommend a minimum ad spend of Rs. 10,000–15,000/month to gather enough data for optimization, on top of our management fee. We'll suggest a realistic budget based on your industry and goals during the free strategy call.",
  },
  {
    q: "How soon will I see leads from Google Ads?",
    a: "Unlike SEO, paid search can start generating leads within 7–14 days of launch, since your ads appear immediately once approved.",
  },
  {
    q: "Do you manage Google Ads for real estate and clinics?",
    a: "Yes — we manage Google Ads for real estate, clinics, salons, industrial B2B brands, and e-commerce businesses across Indore and Madhya Pradesh.",
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8] text-center">
          <div className="container max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Google Ads Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
              Google Ads Agency in Indore
              <br />
              <span className="text-primary">That Maximizes ROAS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We build, run, and optimize Google Ads campaigns — Search,
              Shopping, Display, and YouTube — engineered for measurable
              return on ad spend, not just clicks.
            </p>
            <AnimatedButton href="/#contact" variant="primary">
              Get a Free Google Ads Audit
              <ArrowRight size={16} />
            </AnimatedButton>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What&apos;s Included in Our Google Ads Management
              </h2>
              <p className="text-muted-foreground">
                Full-funnel campaign management — from keyword strategy to
                landing pages to conversion tracking.
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
              Google Ads FAQ
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
