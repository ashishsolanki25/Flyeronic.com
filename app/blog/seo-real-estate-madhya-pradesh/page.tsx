import Link from "next/link";
import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowLeft, ArrowRight, MapPin, Search, Users } from "lucide-react";

export const metadata = {
  title:
    "SEO for Real Estate Developers in Madhya Pradesh | Flyeronic",
  description:
    "How plotted township and real estate projects in Indore, Ujjain, and across MP can use local SEO to generate site-visit bookings without depending only on paid ads.",
  alternates: {
    canonical: "https://flyeronic.com/blog/seo-real-estate-madhya-pradesh",
  },
};

const pillars = [
  {
    icon: <MapPin size={22} />,
    title: "Location-Specific Pages",
    description:
      "A single homepage can’t rank for every project and every route (e.g. ’plots near Indore-Ujjain Road’). Dedicated pages per project or corridor let you capture location-specific search intent instead of competing with yourself.",
  },
  {
    icon: <Search size={22} />,
    title: "Google Business Profile for the Project",
    description:
      "A verified, regularly updated Business Profile with site photos, amenities, and reviews often outperforms paid ads for ’plots near me’ style searches — and it’s free traffic once set up correctly.",
  },
  {
    icon: <Users size={22} />,
    title: "Content for Every Stage of the Buyer Journey",
    description:
      "Buyers researching land investment ask different questions than someone ready to book a site visit. Blog content answering things like registry process, RERA status, or ROI comparisons builds trust earlier in the funnel.",
  },
];

export default function RealEstateSEOPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        {/* HERO */}
        <section className="py-20 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Real Estate
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground leading-tight mb-6">
              SEO for Real Estate Developers in Madhya Pradesh
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical guide for plotted township and real estate projects
              looking to reduce dependence on paid ads alone.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose-content space-y-6 text-foreground/90 leading-relaxed mb-12">
              <p>
                Most real estate marketing in MP leans almost entirely on
                Facebook and Instagram ads for site-visit bookings. That
                works, but it also means every lead costs money for as long
                as the campaign runs. SEO builds a second channel that keeps
                generating inquiries even between ad campaigns — particularly
                valuable for projects with a long sales cycle, like plotted
                townships.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-muted/10 border border-border rounded-2xl p-7"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h2 className="font-bold text-foreground text-lg mb-2">
                    {p.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="prose-content space-y-6 text-foreground/90 leading-relaxed">
              <h2 className="text-2xl font-bold font-heading text-foreground">
                Where This Fits Alongside Paid Ads
              </h2>
              <p>
                SEO isn’t a replacement for Meta or Google Ads on a real
                estate project — it’s a complement. Ads bring in immediate
                volume; SEO content and local search presence capture the
                buyers who are actively researching before they’re ready to
                talk to a sales team, and it keeps working long after a
                specific ad campaign ends.
              </p>
              <p>
                For projects along growth corridors — Indore–Ujjain Road,
                Super Corridor, and similar — this matters even more, since
                buyers frequently search by route or landmark rather than by
                the project name itself.
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
                Talk to Us About Your Project
                <ArrowRight size={16} />
              </AnimatedButton>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
