import Link from "next/link";
import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Flyeronic",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-28 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-5">
              This page doesn&apos;t exist
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              The page you&apos;re looking for may have moved or never existed. Here are a few places to go instead.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <AnimatedButton href="/" variant="primary">
                Back to Homepage
                <ArrowRight size={16} />
              </AnimatedButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground hover:bg-muted/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
