"use client";

import { motion } from "framer-motion";
import { 
  LineChart, 
  Search, 
  Share2, 
  MonitorSmartphone, 
  Filter, 
  Magnet, 
  Bot, 
  Palette, 
  PenTool, 
  Mail, 
  PieChart, 
  Video 
} from "lucide-react";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns that maximize your ROAS and scale profitably.",
    icon: <LineChart size={24} />,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50 text-blue-600",
  },
  {
    title: "SEO",
    description: "Dominate search rankings and capture high-intent organic traffic.",
    icon: <Search size={24} />,
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Social Media Marketing",
    description: "Build a loyal community and turn followers into paying customers.",
    icon: <Share2 size={24} />,
    color: "from-pink-500 to-rose-400",
    bg: "bg-pink-50 text-pink-600",
  },
  {
    title: "Website Development",
    description: "High-converting, lightning-fast websites engineered for performance.",
    icon: <MonitorSmartphone size={24} />,
    color: "from-purple-500 to-indigo-400",
    bg: "bg-purple-50 text-purple-600",
  },
  {
    title: "Sales Funnels",
    description: "Optimized user journeys designed to turn cold clicks into hot leads.",
    icon: <Filter size={24} />,
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-50 text-orange-600",
  },
  {
    title: "Lead Generation",
    description: "Predictable B2B and B2C lead systems that fill your sales pipeline.",
    icon: <Magnet size={24} />,
    color: "from-red-500 to-pink-500",
    bg: "bg-red-50 text-red-600",
  },
  {
    title: "Marketing Automation",
    description: "Streamline workflows and nurture leads automatically 24/7.",
    icon: <Bot size={24} />,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Branding & Design",
    description: "Premium visual identities that build trust and stand out instantly.",
    icon: <Palette size={24} />,
    color: "from-fuchsia-500 to-purple-500",
    bg: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    title: "Content Creation",
    description: "Engaging copy and creatives that tell your brand's unique story.",
    icon: <PenTool size={24} />,
    color: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Email Marketing",
    description: "Targeted campaigns and flows that maximize customer lifetime value.",
    icon: <Mail size={24} />,
    color: "from-sky-500 to-blue-400",
    bg: "bg-sky-50 text-sky-600",
  },
  {
    title: "Analytics & Reporting",
    description: "Deep insights and custom dashboards so you know your exact ROI.",
    icon: <PieChart size={24} />,
    color: "from-teal-500 to-emerald-400",
    bg: "bg-teal-50 text-teal-600",
  },
  {
    title: "Video Marketing",
    description: "High-impact video production for ads, social, and YouTube.",
    icon: <Video size={24} />,
    color: "from-rose-500 to-red-400",
    bg: "bg-rose-50 text-rose-600",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            Our Services
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-6 text-lg" style={{ textAlign: "center" }}>
            Everything you need to dominate your market. We don&apos;t just run
            campaigns; we build comprehensive growth ecosystems.
          </p>
        </div>

        {/* Grid — grid-rows auto-fill ensures equal heights per row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ gridAutoRows: "1fr" }}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal delay-${(index % 3 + 1) * 100} group relative bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden
                flex flex-col h-full`}
              style={{ padding: "28px" }}
            >
              {/* Fixed-size icon box */}
              <div
                className={`rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
                style={{ width: 56, height: 56 }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-secondary group-hover:text-primary transition-colors duration-300"
                style={{ fontSize: "1.1rem", marginTop: 16, marginBottom: 8 }}
              >
                {service.title}
              </h3>

              {/* Description — flex-1 keeps all cards same height */}
              <p className="text-muted-foreground leading-relaxed flex-1"
                style={{ fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}
              >
                {service.description}
              </p>

              {/* Hover blur */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
