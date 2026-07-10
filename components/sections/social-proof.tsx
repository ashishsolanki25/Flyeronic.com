"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Flyeronic completely transformed our lead generation. We went from 20 leads/month to 120+ qualified leads in under 60 days. Game-changer.",
    name: "Rahul Sharma",
    role: "CEO of ScaleUp Digital",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop",
    accent: "#6C3AFF",
  },
  {
    id: 2,
    quote: "Their performance marketing team is insanely data-driven. 4.2x ROAS on Google Ads within the first month — we were shocked.",
    name: "Arjun Mehta",
    role: "CMO of NovaTech",
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop",
    accent: "#111111",
  },
  {
    id: 3,
    quote: "Flyeronic built our entire sales funnel from scratch — ads, landing pages, email sequences, CRM. It now runs on autopilot and generates $2.1M in pipeline every quarter.",
    name: "Sneha Joshi",
    role: "CTO of PeakFunnels",
    img: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop",
    accent: "#2563EB",
  },
  {
    id: 4,
    quote: "We automated 80% of our follow-up sequences. The ROI on Flyeronic's automation work paid back in 3 weeks.",
    name: "Neha Verma",
    role: "Founder of BrightPath",
    img: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop",
    accent: "#2563EB",
  },
  {
    id: 5,
    quote: "SEO went from invisible to top-3 rankings for 14 competitive keywords. Content + tech SEO combo is unmatched.",
    name: "Priya Kapoor",
    role: "CEO of GrowthLab",
    img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop",
    accent: "#111111",
  },
  {
    id: 6,
    quote: "The branding and creatives Flyeronic produced for us elevated our positioning. Clients actually started referencing our ads.",
    name: "Amit Patel",
    role: "CEO of UrbanNest",
    img: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop",
    accent: "#111111",
  },
  {
    id: 7,
    quote: "Working with Flyeronic felt like having a 10-person marketing team. They moved fast, communicated clearly, and delivered results.",
    name: "Dev Singh",
    role: "Co-founder of CloudSync",
    img: "https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop",
    accent: "#6C3AFF",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  img,
  accent,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  img: string;
  accent: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal flex flex-col justify-between relative overflow-hidden rounded-2xl border border-white/10 p-6 delay-${delay}`}
      style={{ backgroundColor: accent }}
    >
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Quote mark */}
      <span className="text-3xl leading-none text-white/25 font-serif mb-3 select-none relative z-10">&ldquo;</span>

      <article className="flex flex-col flex-1 relative z-10">
        <p className="text-sm leading-relaxed text-white/90 flex-1">{quote}</p>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
          <div>
            <h3 className="font-semibold text-sm text-white leading-tight">{name}</h3>
            <p className="text-xs text-white/60 mt-0.5">{role}</p>
          </div>
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
            className="w-12 h-12 rounded-xl object-cover border-2 border-white/20 shrink-0"
          />
        </div>
      </article>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Client Love
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
            Trusted by Growing Brands
          </h2>
          <p className="text-base text-muted-foreground mt-3 text-center" style={{ textAlign: "center" }}>
            Real results from real businesses — hear what our clients say about
            working with Flyeronic.
          </p>
        </div>

        {/* Uniform 3-column grid — all cards same width, auto height */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} delay={(t.id % 3 + 1) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
