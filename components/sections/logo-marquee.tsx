"use client";

import {
  BarChart2,
  Search,
  Share2,
  Mail,
  Video,
  Target,
  Megaphone,
  Globe,
  TrendingUp,
  Zap,
  PenTool,
  Palette,
  Filter,
  LineChart,
  Bot,
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

// ─── Digital marketing icon set ───────────────────────────────────────────────
const iconConfigs = [
  // Orbit 1 (inner, 5 icons)
  { Icon: Target,    color: "#6C3AFF", bg: "bg-purple-50",   label: "Ads" },
  { Icon: Search,    color: "#2563EB", bg: "bg-blue-50",     label: "SEO" },
  { Icon: Share2,    color: "#E1306C", bg: "bg-pink-50",     label: "Social" },
  { Icon: Mail,      color: "#0EA5E9", bg: "bg-sky-50",      label: "Email" },
  { Icon: Video,     color: "#EF4444", bg: "bg-red-50",      label: "Video" },
  // Orbit 2 (middle, 5 icons)
  { Icon: BarChart2,  color: "#10B981", bg: "bg-emerald-50", label: "Analytics" },
  { Icon: Megaphone,  color: "#F59E0B", bg: "bg-amber-50",   label: "Brand" },
  { Icon: TrendingUp, color: "#00C9A7", bg: "bg-teal-50",    label: "Growth" },
  { Icon: Filter,     color: "#8B5CF6", bg: "bg-violet-50",  label: "Funnel" },
  { Icon: PenTool,    color: "#F97316", bg: "bg-orange-50",  label: "Content" },
  // Orbit 3 (outer, 5 icons)
  { Icon: Globe,     color: "#6366F1", bg: "bg-indigo-50",   label: "Web" },
  { Icon: Zap,       color: "#EAB308", bg: "bg-yellow-50",   label: "Automation" },
  { Icon: Bot,       color: "#14B8A6", bg: "bg-teal-50",     label: "AI" },
  { Icon: LineChart, color: "#EC4899", bg: "bg-pink-50",     label: "Reports" },
  { Icon: Palette,   color: "#A855F7", bg: "bg-fuchsia-50",  label: "Design" },
];

// Split 15 icons evenly across 3 orbits (5 each)
const ORBIT_SIZES = ["13rem", "22rem", "31rem"]; // radii
const ORBIT_CLASSES = ["orbit-ring-1", "orbit-ring-2", "orbit-ring-3"];

function OrbitRing({
  index,
  icons,
}: {
  index: number;
  icons: (typeof iconConfigs)[number][];
}) {
  const size = ORBIT_SIZES[index];
  const ringClass = ORBIT_CLASSES[index];
  const angleStep = (2 * Math.PI) / icons.length;

  return (
    <div
      className={`absolute rounded-full border border-dashed border-gray-200 dark:border-gray-700 ${ringClass}`}
      style={{ width: size, height: size }}
    >
      {icons.map((cfg, iconIdx) => {
        const angle = iconIdx * angleStep;
        const x = parseFloat((50 + 50 * Math.cos(angle)).toFixed(4));
        const y = parseFloat((50 + 50 * Math.sin(angle)).toFixed(4));
        return (
          <div
            key={iconIdx}
            className={`orbit-icon absolute ${cfg.bg} rounded-full p-2 shadow-md border border-white`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            title={cfg.label}
          >
            <cfg.Icon size={18} style={{ color: cfg.color }} />
          </div>
        );
      })}
    </div>
  );
}

export function OrbitLogos() {
  const orbits = [
    iconConfigs.slice(0, 5),
    iconConfigs.slice(5, 10),
    iconConfigs.slice(10, 15),
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-background">
      {/* Same background layers as hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl z-10" />
      </div>
      <div className="container relative z-10">
        <div className="flex items-center justify-between gap-8 min-h-[30rem] py-12">
          {/* Left: copy */}
          <div className="w-full lg:w-1/2 z-10 flex flex-col gap-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              Full-Stack Digital Marketing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Every Channel.<br />
              <span className="text-primary">One System.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              From performance ads to SEO, social media to email — Flyeronic
              runs your entire digital marketing engine predictably and
              profitably.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <AnimatedButton href="#contact" variant="primary">
                Get Started
              </AnimatedButton>
              <AnimatedButton href="#services" variant="outline">
                See All Services
              </AnimatedButton>
            </div>
          </div>

          {/* Right: orbit animation */}
          <div className="hidden lg:flex w-1/2 h-[30rem] items-center justify-center relative overflow-hidden">
            {/* Container for the orbits — centered, then pushed right */}
            <div className="relative w-[32rem] h-[32rem] flex items-center justify-center translate-x-16">
              {/* Centre icon */}
              <div className="z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30">
                <TrendingUp size={28} className="text-white" />
              </div>

              {/* Orbit rings */}
              {orbits.map((icons, i) => (
                <OrbitRing key={i} index={i} icons={icons} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
