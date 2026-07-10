import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import {
  Target,
  Eye,
  Zap,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export const metadata = {
  title: "About Flyeronic — Digital Marketing Agency in Indore",
  description:
    "Learn about Flyeronic — our story, mission, values, and the team behind India's fastest-growing performance marketing agency.",
  alternates: {
    canonical: "https://flyeronic.com/about",
  },
};

/* ─── Data ─── */
const stats = [
  { value: "50+", label: "Brands Scaled" },
  { value: "4.9", label: "Average Rating" },
  { value: "10M+", label: "Leads Generated" },
  { value: "3.5x", label: "Average ROAS" },
];

const values = [
  {
    icon: <Target size={24} />,
    title: "Results First",
    description:
      "Every decision is tied to a measurable KPI. We don't do vanity metrics — only outcomes that move your business forward.",
    color: "text-primary bg-primary/8",
  },
  {
    icon: <Eye size={24} />,
    title: "Full Transparency",
    description:
      "No hidden fees, no smoke and mirrors. You get full access to dashboards, ad accounts, and weekly reporting.",
    color: "text-accent-purple bg-accent-purple/8",
  },
  {
    icon: <Zap size={24} />,
    title: "Speed & Execution",
    description:
      "We move fast. Campaigns go live in days, not months. Speed is our competitive edge — and yours.",
    color: "text-accent-green bg-accent-green/8",
  },
  {
    icon: <Users size={24} />,
    title: "Client Success",
    description:
      "Your growth is our growth. We treat every brand we work with as a long-term partner, not a monthly retainer.",
    color: "text-primary bg-primary/8",
  },
];

const team = [
  {
    initials: "AS",
    name: "Ashish Solanki",
    role: "Founder & Operations Head",
    bio: "Ashish leads the vision and operations of Flyeronic. From client meetings and business strategy to managing company operations and major decisions, he ensures every project runs with creativity, structure, and growth-focused execution.",
    bg: "bg-primary",
  },
  {
    initials: "RG",
    name: "Ram Gurjar",
    role: "Visual Director & Cinematography Lead",
    bio: "Ram leads the visual production side of Flyeronic. From cinematic shoots to professional video editing, he focuses on creating high-quality visual content that captures attention and builds strong brand presence online.Former agency lead who has taken 30+ brands from page 3 to top-3 Google rankings.",
    bg: "bg-accent-purple",
  },
  {
    initials: "CS",
    name: "Chaitanya Shrivastav",
    role: "Creative Director & Client Strategy Head",
    bio: "Chaitanya manages the creative direction, script writing, and client coordination at Flyeronic. She works closely with brands to develop creative concepts, storytelling strategies, and smooth communication throughout every project.",
    bg: "bg-accent-green",
  },
  {
    initials: "TD",
    name: "Tina Dhoble",
    role: "Design Director & Brand Visual Lead",
    bio: "Tina leads the visual design and brand identity development at Flyeronic. Her focus is on creating cohesive and visually appealing brand experiences — from logos and website design to complete brand systems. She works closely with clients to understand their vision and translate it into strong visual identities that stand out.",
    bg: "bg-[#6366F1]",
  },
];

/* ─── Page ─── */
export default function AboutPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8] text-center">
          <div className="container max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Flyeronic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
              We Don&apos;t Just Run Campaigns.
              <br />
              <span className="text-primary">We Build Growth Engines.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flyeronic is a modern digital marketing & automation agency helping brands grow through creative content, performance marketing, automation systems, and viral-first strategies.
            </p>
          </div>
        </section>

        {/* ── OUR STORY ────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — Story */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 leading-tight">
                  Built by Marketers,{" "}
                  <span className="text-primary">for Businesses</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Flyeronic was born out of frustration. Our founders had seen
                    too many businesses burn their budgets on agencies that
                    prioritised reports over results — beautiful decks with zero
                    revenue impact.
                  </p>
                  <p>
                    We set out to build something different: a performance-first
                    marketing system where every rupee spent is tracked, tested,
                    and optimised. We combine data engineering, creative
                    excellence, and automation to build marketing machines that
                    run around the clock.
                  </p>
                  <p>
                    Today we operate from Indore, MP, serving brands across
                    India and internationally — from early-stage startups to
                    established enterprises seeking their next growth phase.
                  </p>
                </div>
              </div>

              {/* Right — Stats */}
              <div
                className="grid grid-cols-2 gap-6"
                style={{ gridAutoRows: "1fr" }}
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-muted/30 border border-border"
                  >
                    <span className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                      {s.value}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ───────────────────────────────────── */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
                What We Stand For
              </h2>
              <p className="text-muted-foreground mt-3 text-center">
                These aren&apos;t just words on a wall — they&apos;re how we
                make every decision.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              style={{ gridAutoRows: "1fr" }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex flex-col h-full bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  style={{ padding: "28px" }}
                >
                  <div
                    className={`rounded-xl flex items-center justify-center shrink-0 ${v.color}`}
                    style={{ width: 52, height: 52, marginBottom: 16 }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR TEAM ─────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
                The People Behind the Results
              </h2>
              <p className="text-muted-foreground mt-3 text-center">
                A tight-knit team of performance marketers, creatives, and
                engineers obsessed with your growth.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              style={{ gridAutoRows: "1fr" }}
            >
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col h-full items-center text-center bg-muted/30 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  style={{ padding: "28px" }}
                >
                  {/* Avatar with initials */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${member.bg} flex items-center justify-center text-white text-xl font-bold shrink-0 mb-4`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 text-center"
              style={{ padding: "64px 48px" }}
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full bg-white/10 text-white/80 text-sm font-medium">
                  <Star size={14} />
                  Ready to Work With Us?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
                  Start Your Growth Journey
                </h2>
                <p className="text-base text-white/60 mb-8 text-center">
                  Book a free 30-minute strategy call. No commitment, no sales
                  pressure — just a clear roadmap for your growth.
                </p>
                <AnimatedButton href="/#contact" variant="outline">
                  Start Your Growth Journey
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
