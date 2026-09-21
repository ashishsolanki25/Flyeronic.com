import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { MetaAdsIllustration } from "@/components/ui/service-illustrations";
import { JsonLd } from "@/components/json-ld";
import { Megaphone, Search, LayoutTemplate, MessageCircle, Video, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Digital Marketing in Indore | Flyeronic",
  description:
    "Digital marketing for real estate projects in Indore: Meta lead ads, Google Search ads, project landing pages, WhatsApp follow-up, and video, built to bring in qualified site visits.",
  alternates: { canonical: "https://www.flyeronic.com/industries/real-estate" },
};

const features = [
  { icon: <Megaphone size={22} />, title: "Meta Lead Ads", description: "Facebook and Instagram lead campaigns aimed at buyers and investors for plots, townships, and flats." },
  { icon: <Search size={22} />, title: "Google Search Ads", description: "Ads for high-intent searches such as plots and flats in a specific area, sent to a page that answers the buyer's next question." },
  { icon: <LayoutTemplate size={22} />, title: "Project Landing Pages", description: "Fast, mobile-first pages per project with layout, pricing prompts, location map, and a clear site-visit call to action." },
  { icon: <MessageCircle size={22} />, title: "WhatsApp Lead Follow-up", description: "Instant replies and follow-up sequences so new enquiries don't go cold before your sales team calls." },
  { icon: <Video size={22} />, title: "Project Videos & Creatives", description: "Walkthroughs, reels, and brand films that make a project easier to trust. See our brand films and content creation services." },
  { icon: <Globe2 size={22} />, title: "NRI & Out-of-City Targeting", description: "Campaigns and content for buyers who can't visit often, with virtual walkthroughs and clear next steps." },
];

const steps = [
  { title: "Understand the project", text: "Location, inventory, price range, and who actually buys." },
  { title: "Build the funnel", text: "Landing page, tracking, and WhatsApp follow-up set up before ads go live." },
  { title: "Launch and test", text: "Small budgets on several audiences and creatives to find what brings qualified enquiries." },
  { title: "Report on leads and visits", text: "We report cost per lead, qualified leads, and site visits, not just clicks." },
];

const faqs = [
  { q: "Which platforms work best for real estate in Indore?", a: "It depends on the project. Meta ads are strong for awareness and lead generation, while Google Search catches people already looking. We usually test both and keep what works." },
  { q: "How do you check lead quality?", a: "We add qualifying questions to forms, follow up on WhatsApp, and track which campaigns produce real site visits, so the budget moves toward what works." },
  { q: "Do you build project websites too?", a: "Yes. Our website development service covers project landing pages and full sites, built for speed and search." },
  { q: "Can you promise a number of leads or bookings?", a: "No. Results depend on the project, price, location, and budget. We set clear tracking so you can see what each rupee produces." },
];

export default function RealEstatePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Real Estate Digital Marketing",
          serviceType: "Real estate digital marketing",
          provider: { "@id": "https://www.flyeronic.com/#organization" },
          areaServed: { "@type": "City", name: "Indore" },
          url: "https://www.flyeronic.com/industries/real-estate",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flyeronic.com" },
            { "@type": "ListItem", position: 2, name: "Real Estate Marketing", item: "https://www.flyeronic.com/industries/real-estate" },
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
                  Real Estate Marketing
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Real Estate Digital Marketing
                  <br />
                  <span className="text-primary">for Indore Projects</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  From plotted townships on Indore–Ujjain Road to projects on Super Corridor, we plan
                  campaigns, landing pages, and follow-up systems built around qualified site visits.
                </p>
                <AnimatedButton href="/contact" variant="primary">
                  Get a Free Project Audit
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
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">What We Do for Real Estate</h2>
              <p className="text-muted-foreground">
                Every service links into one funnel: <Link href="/services/meta-ads" className="text-primary underline">Meta ads</Link>,{" "}
                <Link href="/services/google-ads" className="text-primary underline">Google Ads</Link>,{" "}
                <Link href="/services/website-development" className="text-primary underline">landing pages</Link>, and{" "}
                <Link href="/services/marketing-automation" className="text-primary underline">WhatsApp automation</Link>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-muted/10 border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">{f.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">How We Work</h2>
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
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">Real Estate Marketing FAQ</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-muted/10 border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8">
              Related reading: <Link href="/blog/seo-real-estate-madhya-pradesh" className="text-primary underline">SEO for real estate in Madhya Pradesh</Link>.
            </p>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
