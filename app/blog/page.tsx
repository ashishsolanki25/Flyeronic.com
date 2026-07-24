import Link from "next/link";
import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Digital Marketing Blog | Flyeronic — Indore, MP",
  description:
    "Practical guides on digital marketing costs, choosing an agency, and SEO for real estate — written for businesses in Indore and across Madhya Pradesh.",
  alternates: {
    canonical: "https://flyeronic.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        {/* HERO */}
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8] text-center">
          <div className="container max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
              Digital Marketing Insights
              <br />
              <span className="text-primary">for Indore & MP Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Straight-talk guides on pricing, choosing an agency, and growing
              your business online — no jargon, no fluff.
            </p>
          </div>
        </section>

        {/* POSTS */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-muted/10 border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary font-medium ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
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
