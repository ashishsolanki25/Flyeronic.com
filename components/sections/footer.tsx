"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const socials = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/flyeronic.co?igsh=a2ZybHo1a3gyNmho&utm_source=qr",
    color: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:via-[#dc2743] hover:via-[#cc2366] hover:to-[#bc1888]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/share/1MHTPVcQkZ/?mibextid=wwXIfr",
    color: "hover:bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/flyeronic?trk=blended-typeahead",
    color: "hover:bg-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Twitter / X",
    href: "https://twitter.com",
    color: "hover:bg-black",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
];

const services = [
  "Performance Marketing",
  "SEO & Content",
  "Social Media Marketing",
  "Website Development",
  "Lead Generation",
  "Marketing Automation",
];

const company = [
  { label: "About Us",     href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Blog",         href: "/#blog" },
  { label: "Careers",      href: "#" },
];

const contact = [
  { icon: MapPin, text: "GRM Business Park, Super Corridor, Indore, MP", href: undefined },
  { icon: Mail,   text: "flyeronic.info@gmail.com",  href: "mailto:flyeronic.info@gmail.com" },
  { icon: Phone,  text: "+91 9109176922",             href: "tel:+919109176922" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-24 pb-10 overflow-hidden border-t border-border">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* ── Brand column ── */}
          <div className="group">
            <Link href="/" className="inline-flex items-center mb-6 w-fit">
              <Image
                src="/flyeronic-logo.svg"
                alt="Flyeronic — Elevate Your Digital Presence"
                width={207}
                height={46}
                style={{ height: "46px", width: "auto", objectFit: "contain" }}
                priority
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mb-7 max-w-xs">
              Marketing systems that scale brands predictably. Performance ads,
              SEO, automation, and conversion — engineered to grow.
            </p>

            {/* Social icon buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {socials.map(({ title, href, color, icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Flyeronic on ${title}`}
                  title={title}
                  className={`w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110 ${color}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Services column ── */}
          <div>
            <h4 className="text-base font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-violet-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company column ── */}
          <div>
            <h4 className="text-base font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-3.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-violet-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div>
            <h4 className="text-base font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-4">
              {contact.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Icon size={16} className="text-muted-foreground/60 shrink-0" />
                      {text}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon size={16} className="text-muted-foreground/60 shrink-0" />
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Flyeronic. All rights reserved.</p>
          <div className="flex flex-wrap gap-5 justify-center">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
