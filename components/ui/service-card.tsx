"use client";

import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group relative flex flex-col justify-end rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border",
  {
    variants: {
      variant: {
        default: "border-border hover:border-accent-purple/30 hover:shadow-accent-purple/10",
        red: "border-border hover:border-red-400/30 hover:shadow-red-400/10",
        blue: "border-border hover:border-primary/30 hover:shadow-primary/10",
        gray: "border-border hover:border-muted-foreground/30 hover:shadow-muted-foreground/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accentVariants = {
  default: "from-accent-purple to-accent-purple/70",
  red: "from-red-500 to-red-400",
  blue: "from-primary to-primary-light",
  gray: "from-muted-foreground to-muted-foreground/70",
};

interface ServiceCardProps extends VariantProps<typeof cardVariants> {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
}

export function ServiceCard({
  title,
  href,
  imgSrc,
  imgAlt,
  variant = "default",
  className,
}: ServiceCardProps) {
  const accent = accentVariants[variant ?? "default"];

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(cardVariants({ variant }), className)}
    >
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Arrow icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/0 group-hover:bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
          <ArrowUpRight size={16} className="text-secondary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Accent line */}
        <div
          className={cn(
            "absolute top-0 left-5 right-5 h-0.5 rounded-full bg-gradient-to-r scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500",
            accent
          )}
        />
        <h3 className="font-heading font-semibold text-base text-secondary group-hover:text-primary transition-colors duration-300 leading-snug">
          {title}
        </h3>
      </div>
    </motion.a>
  );
}
