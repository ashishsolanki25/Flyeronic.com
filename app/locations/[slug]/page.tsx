import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cities, getCityBySlug } from "@/lib/city-data";
import { blogPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin, BookOpen } from "lucide-react";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Digital Marketing Agency in ${city.name} | Flyeronic`,
    description: city.metaDescription,
    alternates: {
      canonical: `https://flyeronic.com/locations/${city.slug}`,
    },
  };
}

const relatedServices = [
  { title: "SEO", href: "/services/seo" },
  { title: "Google Ads", href: "/services/google-ads" },
  { title: "Meta Ads", href: "/services/meta-ads" },
  { title: "Website Development", href: "/services/website-development" },
  { title: "Marketing Automation", href: "/services/marketing-automation" },
  { title: "Content Creation", href: "/services/content-creation" },
  { title: "Brand Films", href: "/services/brand-films" },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8] text-center">
          <div className="container max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin size={14} />
              {city.tagline}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
              Digital Marketing Agency in {city.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {city.intro}
            </p>
            <AnimatedButton href="/#contact" variant="primary">
              Get a Free Strategy Call
              <ArrowRight size={16} />
            </AnimatedButton>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto">
            <p className="text-foreground/90 leading-relaxed">
              {city.localDetail}
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted/5">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-8 text-center">
              How We Help {city.name} Businesses Grow
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {city.highlights.map((h) => (
                <div
                  key={h}
                  className="flex gap-3 items-start bg-white border border-border rounded-2xl p-5"
                >
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-muted-foreground leading-relaxed">{h}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">
              Explore Our Services
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-all"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-10 text-center">
              {city.name} FAQs
            </h2>
            <div className="space-y-6">
              {city.faqs.map((f) => (
                <div
                  key={f.q}
                  className="bg-muted/10 border border-border rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/5">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-xl font-bold font-heading text-foreground mb-6 text-center">
              Related Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-border rounded-2xl p-5 hover:border-primary/30 transition-all"
                >
                  <BookOpen className="text-primary mb-3" size={18} />
                  <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We&apos;re based at GRM Business Park, Super Corridor, Indore, MP —
              and work remotely with clients across Madhya Pradesh, including{" "}
              {city.name}. Digital marketing doesn&apos;t require an in-person
              office visit, though in-person meetings are available on request.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
