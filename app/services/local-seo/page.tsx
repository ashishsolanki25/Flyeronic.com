import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SEOIllustration } from "@/components/ui/service-illustrations";
import { JsonLd } from "@/components/json-ld";
import { MapPin, Star, ListChecks, FileText, Code2, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Local SEO & Google Business Profile in Indore | Flyeronic",
  description:
    "Local SEO services in Indore: Google Business Profile setup and optimization, citations, review generation, and local landing pages to help nearby customers find you on Google Maps.",
  alternates: { canonical: "https://www.flyeronic.com/services/local-seo" },
};

const features = [
  { icon: <MapPin size={22} />, title: "Google Business Profile Optimization", description: "Correct categories, services, description, photos, and weekly posts so your profile is complete and easy to trust." },
  { icon: <ListChecks size={22} />, title: "Citations & NAP Consistency", description: "Your business name, address, and phone number kept identical across Google, directories, and social profiles." },
  { icon: <Star size={22} />, title: "Review Generation System", description: "A simple process to ask real customers for genuine reviews and reply to every one. We never buy or fake reviews." },
  { icon: <FileText size={22} />, title: "Local Landing Pages", description: "Service pages written for how people in Indore actually search, with clear calls, maps, and FAQs." },
  { icon: <Code2 size={22} />, title: "Local Schema & Technical Setup", description: "LocalBusiness and Service structured data, fast mobile pages, and clean site structure so Google understands where and what you serve." },
  { icon: <BarChart3 size={22} />, title: "Monthly Local Reporting", description: "Profile views, calls, direction requests, and local ranking movement from Google Business Profile and Search Console." },
];

const steps = [
  { title: "Audit", text: "We check your profile, citations, reviews, and website against nearby competitors." },
  { title: "Fix the foundation", text: "Profile, NAP, categories, and site pages get corrected first." },
  { title: "Build proof", text: "A steady flow of genuine reviews, photos, and posts." },
  { title: "Measure and refine", text: "Monthly reports show calls, directions, and rankings, and we adjust." },
];

const faqs = [
  { q: "How long does local SEO take in Indore?", a: "Profile fixes can improve visibility within a few weeks. Competitive searches usually take 3–6 months of steady work. We don't promise a rank or a date." },
  { q: "Do you buy or write fake reviews?", a: "No. Fake reviews break Google's policies and can get a profile suspended. We help you collect real ones." },
  { q: "Can I do local SEO if I don't have a shop?", a: "Yes, if you serve customers at their location, you can set a service area and hide your address, following Google's guidelines." },
  { q: "What is the difference between SEO and local SEO?", a: "SEO helps your website rank in search results. Local SEO focuses on Google Maps and the local pack, where nearby customers find businesses to call or visit." },
];

export default function LocalSEOPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Local SEO and Google Business Profile Optimization",
          serviceType: "Local SEO",
          provider: { "@id": "https://www.flyeronic.com/#organization" },
          areaServed: { "@type": "City", name: "Indore" },
          url: "https://www.flyeronic.com/services/local-seo",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flyeronic.com" },
            { "@type": "ListItem", position: 2, name: "Local SEO", item: "https://www.flyeronic.com/services/local-seo" },
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
                  Local SEO
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Local SEO in Indore
                  <br />
                  <span className="text-primary">Get Found on Google Maps</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  We set up and optimize your Google Business Profile, citations, reviews, and local pages so
                  nearby customers in Indore can find you and call you.
                </p>
                <AnimatedButton href="/contact" variant="primary">
                  Get a Free Local SEO Audit
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

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">What Local SEO Includes</h2>
              <p className="text-muted-foreground">
                Local SEO works alongside our broader <Link href="/services/seo" className="text-primary underline">SEO services</Link>.
                It focuses on the searches that bring customers to your door or phone.
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
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">How It Works</h2>
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
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">Local SEO FAQ</h2>
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
