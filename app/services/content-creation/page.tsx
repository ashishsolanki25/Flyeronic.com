import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ContentCreationIllustration } from "@/components/ui/service-illustrations";
import {
  Clapperboard,
  Camera,
  PenTool,
  Palette,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Content Creation Agency in Indore | Flyeronic",
  description:
    "Flyeronic is a content creation agency in Indore producing reels, photography, copywriting, and graphic design that builds brand presence and drives engagement.",
  alternates: {
    canonical: "https://www.flyeronic.com/services/content-creation",
  },
};

const features = [
  {
    icon: <Clapperboard size={22} />,
    title: "Reels & Short-Form Video",
    description:
      "Scroll-stopping reels and short-form video content designed for reach, shares, and brand recall on Instagram and beyond.",
  },
  {
    icon: <Camera size={22} />,
    title: "Product & Brand Photography",
    description:
      "Professional photography for products, spaces, and teams — the visual foundation of every campaign we run.",
  },
  {
    icon: <PenTool size={22} />,
    title: "Copywriting",
    description:
      "Captions, ad copy, and website copy written to match your brand voice and actually move people to act.",
  },
  {
    icon: <Palette size={22} />,
    title: "Graphic Design",
    description:
      "Social creatives, carousels, and brand assets designed to be consistent, on-brand, and thumb-stopping.",
  },
  {
    icon: <CalendarDays size={22} />,
    title: "Content Calendars",
    description:
      "Planned, consistent posting schedules so your brand shows up reliably instead of in random bursts.",
  },
];

const faqs = [
  {
    q: "Do you shoot content in Indore, or is it fully remote?",
    a: "We shoot on-location in Indore and surrounding areas for photography and video, and handle editing, copywriting, and scheduling remotely.",
  },
  {
    q: "How often do you deliver new content?",
    a: "This depends on your plan — most clients get weekly or bi-weekly content batches (reels, posts, and stories) planned around a monthly content calendar.",
  },
  {
    q: "Can content creation work alongside paid ads?",
    a: "Yes — strong organic content and ad creatives often come from the same shoots, which keeps your brand consistent across paid and organic channels.",
  },
];

export default function ContentCreationPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Content Creation
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Content Creation Agency in Indore
                  <br />
                  <span className="text-primary">For Brands That Want to Be Seen</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  Reels, photography, copywriting, and design — all built around a
                  consistent content calendar that keeps your brand visible and
                  engaging.
                </p>
                <AnimatedButton href="/#contact" variant="primary">
                  Start Your Content Plan
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <ContentCreationIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What We Create
              </h2>
              <p className="text-muted-foreground">
                Every piece of content is planned around your brand story and
                your audience — not generic templates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-muted/10 border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">
              Content Creation FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-border rounded-2xl p-6">
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
