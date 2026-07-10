"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  FolderOpen,
  Mail,
  Menu,
  X,
  BookOpen,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { label: "Home",         href: "/",              icon: <Home size={16} /> },
  { label: "About",        href: "/about",         icon: <Info size={16} /> },
  { label: "Services",     href: "/#services",     icon: <Briefcase size={16} /> },
  { label: "Case Studies", href: "/#case-studies", icon: <FolderOpen size={16} /> },
  { label: "Blog",         href: "/#blog",         icon: <BookOpen size={16} /> },
  { label: "Contact",      href: "/#contact",      icon: <Mail size={16} /> },
];

export function GlowMenu() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/about") {
      setActiveItem("About");
    } else if (pathname === "/") {
      const hash = window.location.hash;
      const found = menuItems.find(item => item.href === `/${hash}`);
      if (found) {
        setActiveItem(found.label);
      } else {
        setActiveItem("Home");
      }
    }
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: MenuItem) => {
    setActiveItem(item.label);
    setIsMobileOpen(false);

    if (item.href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = item.href.substring(2);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", item.href);
      }
    } else if (item.href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_6px_rgba(0,0,0,0.06)]"
          : "bg-white/90 backdrop-blur-md border-b border-border"
      )}
    >
      {/* ── Single flex row: logo | links | cta ── */}
      <div className="flex items-center justify-between h-16 overflow-hidden px-6 md:px-10 lg:px-20">

        {/* LEFT — Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
          className="flex items-center shrink-0 group"
          aria-label="Flyeronic home"
        >
          <Image
            src="/flyeronic-logo.svg"
            alt="Flyeronic — Elevate Your Digital Presence"
            width={198}
            height={44}
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* CENTER — Nav links (desktop) */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
                activeItem === item.label
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeItem === item.label && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-primary/5 border border-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* RIGHT — CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <AnimatedButton href="/#contact" variant="primary" className="hidden lg:inline-flex">
            Get Started
          </AnimatedButton>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                      activeItem === item.label
                        ? "bg-primary/5 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <AnimatedButton href="/#contact" variant="primary" className="w-full justify-center mt-3">
                Get Started
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
