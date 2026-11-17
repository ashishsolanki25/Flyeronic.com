import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { QuoteForm } from "@/components/sections/quote-form";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Get a Digital Marketing Quotation | Flyeronic, Indore",
  description:
    "Choose the services you need, from Meta Ads, Google Ads and SEO to social media, websites and lead generation, and get a quotation from Flyeronic. Takes about 2 minutes.",
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
