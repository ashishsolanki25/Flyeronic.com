import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { QuoteForm } from "@/components/sections/quote-form";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Get a Meta Ads Quotation | Flyeronic, Indore",
  description:
    "Tell Flyeronic about your business in 3 short steps and get a Meta Ads (Facebook and Instagram) quotation. Takes about 2 minutes.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8] py-16">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="font-heading mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Get your Meta Ads quotation
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your business in 3 short steps. It takes about 2 minutes.
            </p>
          </div>
        </section>
        <section className="bg-white px-4 py-14">
          <QuoteForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
