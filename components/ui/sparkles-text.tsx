"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  scale: number;
  color: string;
  delay: number;
  duration: number;
}

interface SparklesTextProps {
  text: string;
  colors?: { first: string; second: string };
  className?: string;
  sparklesCount?: number;
}

export function SparklesText({
  text,
  colors = { first: "#9E7AFF", second: "#634ee6" },
  className,
  sparklesCount = 12,
}: SparklesTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateSparkle = useCallback(
    (id: number): Sparkle => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 42,
      scale: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? colors.first : colors.second,
      delay: Math.random() * 2,
      duration: Math.random() * 1.5 + 1,
    }),
    [colors.first, colors.second]
  );

  useEffect(() => {
    const initial = Array.from({ length: sparklesCount }, (_, i) =>
      generateSparkle(i)
    );
    setSparkles(initial);

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) => generateSparkle(s.id))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sparklesCount, generateSparkle]);

  return (
    <span ref={containerRef} className={cn("relative inline-block", className)}>
      {/* Sparkles layer */}
      <span className="absolute inset-0 pointer-events-none overflow-visible">
        <AnimatePresence>
          {sparkles.map((sparkle) => (
            <motion.svg
              key={`${sparkle.id}-${sparkle.x}-${sparkle.y}`}
              className="absolute pointer-events-none"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
              }}
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, sparkle.scale, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: sparkle.duration,
                delay: sparkle.delay,
                ease: "easeInOut",
              }}
            >
              <path
                d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
                fill={sparkle.color}
              />
            </motion.svg>
          ))}
        </AnimatePresence>
      </span>

      {/* Text */}
      <span className="relative z-10">{text}</span>
    </span>
  );
}
