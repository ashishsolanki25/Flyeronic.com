import Link from "next/link";
import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { RelatedPosts } from "@/components/sections/related-posts";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "How to Choose a Digital Marketing Agency in Indore | Flyeronic",
  description:
    "7 questions to ask before hiring a digital marketing agency in Indore — what separates a genuine growth partner from an agency that wastes your budget.",
  alternates: {
    canonical:
      "https://www.flyeronic.com/blog/choose-digital-marketing-agency-indore",
  },
};

const checklist = [
  {
    title: "Can they show results in your specific industry?",
    detail:
      "A great e-commerce case study means very little if you run a clinic or a real estate project. Ask for examples from a similar business type, not just the biggest logo they’ve worked with.",
  },
  {
    title: "Do they explain strategy, or just jump to execution?",
    detail:
      "A good agency starts with an audit and a clear plan tied to your goals. If the first call jumps straight to ’we’ll start posting reels next week,’ there’s no strategy behind it.",
  },
  {
    title: "Who will actually manage your account?",
    detail:
      "Many agencies sell you on senior talent during the pitch, then hand your account to a junior executive after signing. Ask directly who your day-to-day point of contact will be.",
  },
  {
    title: "What does reporting actually look like?",
    detail:
      "Ask to see a sample report before signing. You want real numbers — leads, cost per lead, rankings, traffic — not just screenshots of likes and follows.",
  },
  {
    title: "Is the contract flexible, or are you locked in?",
    detail:
      "Long lock-in contracts with no exit clause are a red flag. A confident agency is comfortable with shorter initial terms because they expect results to speak for themselves.",
  },
  {
    title: "Do they understand your local market?",
    detail:
      "For Indore and MP businesses, local nuances — festivals, regional language content, area-specific search behavior — genuinely affect what works. An agency with local experience will already know this.",
  },
  {
    title: "Are their promises realistic?",
    detail:
      "’Rank #1 in 7 days’ or ’guaranteed viral reel’ are not realistic claims. SEO and organic growth take months; be wary of anyone promising instant results without paid spend behind it.",
  },
];

export default function ChooseAgencyPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        {/* HERO */}
        <section className="py-20 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Hiring Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground leading-tight mb-6">
              How to Choose a Digital Marketing Agency in Indore
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              7 questions that separate a genuine growth partner from an
              agency that will quietly burn through your ad budget.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose-content space-y-6 text-foreground/90 leading-relaxed mb-12">
              <p>
                Indore has no shortage of digital marketing agencies and
                freelancers — the hard part isn’t finding one, it’s finding
                one that will actually move your business forward. Before you
                sign anything, run every agency through these seven checks.
              </p>
            </div>

            <div className="space-y-6">
              {checklist.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-muted/10 border border-border rounded-2xl p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h2 className="font-bold text-foreground text-lg mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-7">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={22} />
                <div>
                  <h2 className="font-bold text-foreground mb-2">
                    The simplest test
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ask any agency to walk you through exactly what happens in
                    your first 30 days. If they can answer clearly, with
                    specific deliverables and dates, that’s usually a good
                    sign. If the answer stays vague, treat that as your
                    answer too.
                  </p>
                </div>
              </div>
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
                Book a Free Strategy Call
                <ArrowRight size={16} />
              </AnimatedButton>
            </div>

            <RelatedPosts excludeSlug="choose-digital-marketing-agency-indore" />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
