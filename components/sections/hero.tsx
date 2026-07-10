"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AnimatedButton } from "@/components/ui/animated-button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background layers */}
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
        {/* Soft glow blobs on top of grid */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl z-10" />
      </div>

      <div className="container relative z-10 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 reveal">
            <div className="w-fit">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Sparkles size={14} />
                Marketing Systems that Scale
              </span>
            </div>

            <h1 className="text-foreground leading-[1.1] text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              We Build Systems<br />
              <SparklesText
                text="That Grow Brands"
                colors={{ first: "#6C3AFF", second: "#00C9A7" }}
                className="text-primary font-bold inline-block"
                sparklesCount={12}
              />
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Flyeronic transforms your marketing into a predictable growth
              engine. Performance ads, automation, funnels & branding — all
              engineered to convert.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-2">
              <AnimatedButton href="#contact" variant="primary">
                Start Your Growth
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </AnimatedButton>
              <AnimatedButton href="#case-studies" variant="outline">
                <Play size={14} className="text-primary group-hover:text-white transition-colors" />
                See How It Works
              </AnimatedButton>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-[10px] font-bold text-primary"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-medium text-foreground">50+ brands</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <span className="font-medium text-foreground">⭐ 4.9/5 rating</span>
            </div>
          </div>

          {/* Right SVG Illustration */}
          <div className="flex items-center justify-center reveal delay-200">
            <div className="relative w-full max-w-lg">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
                {/* Dashboard Frame */}
                <rect x="10" y="10" width="380" height="280" rx="16" fill="white" stroke="#EAEAEE" strokeWidth="2"/>
                <circle cx="30" cy="25" r="4" fill="#FF6B6B" />
                <circle cx="45" cy="25" r="4" fill="#F8B400" />
                <circle cx="60" cy="25" r="4" fill="#00C9A7" />
                <line x1="10" y1="40" x2="390" y2="40" stroke="#EAEAEE" strokeWidth="2"/>
                
                {/* Top Widgets */}
                <rect x="30" y="60" width="105" height="70" rx="8" fill="#F8F7FF"/>
                <text x="45" y="85" fontSize="10" fill="#6B6B75" fontWeight="bold">ROAS</text>
                <text x="45" y="110" fontSize="18" fill="#6C3AFF" fontWeight="800">4.2x</text>
                
                <rect x="147.5" y="60" width="105" height="70" rx="8" fill="#F8F7FF"/>
                <text x="162.5" y="85" fontSize="10" fill="#6B6B75" fontWeight="bold">LEADS</text>
                <text x="162.5" y="110" fontSize="18" fill="#00C9A7" fontWeight="800">+240%</text>

                <rect x="265" y="60" width="105" height="70" rx="8" fill="#F8F7FF"/>
                <text x="280" y="85" fontSize="10" fill="#6B6B75" fontWeight="bold">RETENTION</text>
                <text x="280" y="110" fontSize="18" fill="#FF6B6B" fontWeight="800">92%</text>

                {/* Main Chart Area */}
                <rect x="30" y="145" width="340" height="125" rx="8" fill="#F8F7FF"/>
                
                {/* Bar Chart */}
                <rect x="50" y="240" width="20" height="10" rx="4" fill="#D1D1DB">
                  <animate attributeName="height" values="10; 40; 10" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="y" values="240; 210; 240" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="85" y="220" width="20" height="30" rx="4" fill="#D1D1DB">
                  <animate attributeName="height" values="30; 60; 30" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="y" values="220; 190; 220" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </rect>
                <rect x="120" y="200" width="20" height="50" rx="4" fill="#D1D1DB">
                  <animate attributeName="height" values="50; 80; 50" dur="3s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="y" values="200; 170; 200" dur="3s" begin="1s" repeatCount="indefinite" />
                </rect>
                <rect x="155" y="180" width="20" height="70" rx="4" fill="#6C3AFF">
                  <animate attributeName="height" values="70; 90; 70" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  <animate attributeName="y" values="180; 160; 180" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </rect>
                
                {/* Growth Line */}
                <path d="M190 240 Q 230 190, 260 210 T 350 160" stroke="#00C9A7" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="350" cy="160" r="5" fill="#00C9A7" />
                
                {/* Arrow head */}
                <path d="M340 160 L350 160 L350 170" stroke="#00C9A7" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
