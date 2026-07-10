"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function TestimonialSlider({
  testimonials,
  autoPlayInterval = 6000,
}: TestimonialSliderProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
      setIsPaused(true);
    },
    [active]
  );

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, next, autoPlayInterval]);

  // Resume after 10s of inactivity
  useEffect(() => {
    if (!isPaused) return;
    const resume = setTimeout(() => setIsPaused(false), 10000);
    return () => clearTimeout(resume);
  }, [isPaused]);

  const current = testimonials[active];

  const variants = {
    enter: (d: number) => ({
      opacity: 0,
      x: d > 0 ? 60 : -60,
      scale: 0.97,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d > 0 ? -60 : 60,
      scale: 0.97,
    }),
  };

  return (
    <div className="relative w-full">
      {/* Radial glow background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-b from-primary/8 via-accent-purple/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 md:px-12">
        {/* Main card */}
        <div className="relative bg-white rounded-3xl border border-border shadow-sm overflow-hidden min-h-[320px] md:min-h-[280px]">
          {/* Top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-primary" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 md:p-12"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent-purple/10 flex items-center justify-center">
                  <Quote size={18} className="text-primary" />
                </div>
              </div>

              {/* Quote text */}
              <p className="text-xl md:text-2xl font-semibold text-secondary leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-primary/10 ring-offset-2 shrink-0">
                  <Image
                    src={current.img}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-heading font-semibold text-secondary text-base">
                    {current.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {current.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                prev();
                setIsPaused(true);
              }}
              className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => {
                next();
                setIsPaused(true);
              }}
              className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative p-1"
              >
                <div
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === active
                      ? "bg-primary scale-125"
                      : "bg-border hover:bg-muted-foreground"
                  )}
                />
                {i === active && !isPaused && (
                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 20 20"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/30"
                      strokeDasharray="50.27"
                      strokeDashoffset="0"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="50.27"
                        to="0"
                        dur={`${autoPlayInterval}ms`}
                        repeatCount="1"
                        key={active}
                      />
                    </circle>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
