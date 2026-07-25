import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { MetaAdsIllustration } from "@/components/ui/service-illustrations";
import {
  Magnet,
  RefreshCcw,
  Palette,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Meta Ads Agency in Indore | Facebook & Instagram Ads — Flyeronic",
  description:
    "Flyeronic runs Facebook and Instagram ad campaigns for Indore businesses — lead ads, retargeting, and WhatsApp-integrated funnels that turn scrollers into customers.",
  alternates: {
    canonical: "https://flyeronic.com/services/meta-ads",
  },
};

const features = [
  {
    icon: <Magnet size={22} />,
    title: "Lead Generation Ads",
    description:
      "Facebook & Instagram Lead Ads built to capture qualified leads directly on-platform, synced straight into your CRM or WhatsApp.",
  },
  {
    icon: <RefreshCcw size={22} />,
    title: "Retargeting Campaigns",
    description:
      "Custom audiences and retargeting funnels that bring back website visitors and past engagers who didn't convert the first time.",
  },
  {
    icon: <Palette size={22} />,
    title: "Creative Testing",
    description:
      "We continuously test ad creatives, formats, and hooks (reels, carousels, statics) to find what actually converts for your audience.",
  },
  {
    icon: <Users size={22} />,
    title: "Audience Research & Targeting",
    description:
      "Deep audience research — interests, lookalikes, demographics — so your budget reaches people most likely to buy.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "WhatsApp & Messenger Automation",
    description:
      "Click-to-WhatsApp ad campaigns paired with automated replies so leads get engaged the moment they message.",
  },
];

const faqs = [
  {
    q: "What kind of businesses do you run Meta Ads for?",
    a: "Real estate, clinics, salons, restaurants, and D2C brands across Indore — anywhere a strong visual + offer can drive direct leads or sales.",
  },
  {
    q: "How is Meta Ads different from Google Ads?",
    a: "Meta Ads target people based on interests and behavior (demand generation), while Google Ads capture people already searching (demand capture). Most brands benefit from running both together.",
  },
  {
    q: "Do you handle the creatives too, or just the ad setup?",
    a: "We handle both — from creative concepting and design/video production to campaign setup, optimization, and reporting.",
  },
];

export default function MetaAdsPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Meta Ads Management
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Meta Ads Agency in Indore
                  <br />
                  <span className="text-primary">Facebook & Instagram That Convert</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  We plan, create, and run Facebook and Instagram ad campaigns
                  that turn scrollers into qualified leads — with WhatsApp
                  automation built in.
                </p>
                <AnimatedButton href="/#contact" variant="primary">
                  Get a Free Meta Ads Audit
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <MetaAdsIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What&apos;s Included in Our Meta Ads Service
              </h2>
              <p className="text-muted-foreground">
                From audience research to creative testing to WhatsApp
                follow-up — a complete Meta advertising system.
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
              Meta Ads FAQ
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
