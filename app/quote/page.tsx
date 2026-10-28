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
      <main>
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
