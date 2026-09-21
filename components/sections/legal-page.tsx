import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-3">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold font-heading text-foreground mb-3">{heading}</h2>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  );
}
