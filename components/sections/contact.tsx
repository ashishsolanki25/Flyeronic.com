"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Sparkles,
  ChevronDown,
  Clock,
  Shield,
  Zap,
  Star,
} from "lucide-react";
import { useToast } from "@/components/ui/toast";

const WEB3FORMS_ACCESS_KEY = "e8e2572f-466a-4820-8fc6-333b891a3f37";

/* ─── Static data ─── */
const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "flyeronic.info@gmail.com",
    href: "mailto:flyeronic.info@gmail.com",
    accent: "#7C3AED",
    bg: "rgba(124,58,237,0.15)",
  },
  {
    icon: Phone,
    label: "WhatsApp / Call",
    value: "+91 9109176922",
    href: "tel:+919109176922",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.15)",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "GRM Business Park, Super Corridor, Indore, MP",
    href: undefined,
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.15)",
  },
];

const promises = [
  { icon: Clock,  text: "Response within 24 hours" },
  { icon: Shield, text: "No commitment required" },
  { icon: Zap,    text: "Free 30-min strategy call" },
  { icon: Star,   text: "Custom growth roadmap" },
];

const services = [
  "Performance Marketing",
  "SEO & Content Strategy",
  "Social Media Marketing",
  "Website Development",
  "Marketing Automation",
  "Branding & Design",
  "Lead Generation",
  "Other",
];

/* ─── Shared field styles ─── */
const labelCls = "block text-xs font-semibold text-slate-600 mb-1.5";
const inputBase =
  "w-full px-4 py-3 rounded-xl border bg-white text-sm text-foreground " +
  "placeholder:text-slate-400 focus:outline-none focus:ring-2 " +
  "transition-all duration-200 shadow-sm";
const inputCls   = `${inputBase} border-slate-200 focus:border-violet-400 focus:ring-violet-400/20`;
const inputError = `${inputBase} border-rose-400 focus:border-rose-400 focus:ring-rose-400/20`;

/* ─── Validation helpers ─── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && !/^[+\d\s\-().]{7,20}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.message.trim()) {
    // message is now optional — skip required validation
  } else if (data.message.trim().length > 0 && data.message.trim().length < 5) {
    errors.message = "Message must be at least 5 characters if provided.";
  }

  return errors;
}

/* ─── Field error label ─── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1 text-xs text-rose-500 font-medium flex items-center gap-1">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
        <circle cx="6" cy="6" r="6" opacity=".15" />
        <path d="M6 3.5v3M6 8v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {msg}
    </p>
  );
}

/* ─── Main section ─── */
export function ContactSection() {
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Lead from Website - ${formData.name.trim()}`,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "Not provided",
        company: formData.company.trim() || "Not provided",
        service: formData.service || "Not specified",
        message: formData.message.trim(),
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        showToast(
          "success",
          "Message sent! 🎉",
          "Thank you! We'll get back to you within 24 hours."
        );
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      showToast(
        "error",
        "Couldn't send message",
        "Something went wrong. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/40"
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-24 w-[440px] h-[440px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-14 max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight">
            Start Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Growth Journey
            </span>
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed text-center mx-auto max-w-lg" style={{ textAlign: "center" }}>
            Book a free strategy call. We&apos;ll audit your marketing and show
            you exactly how to scale.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">

          {/* ── LEFT: Contact info panel ── */}
          <div className="lg:col-span-2 reveal delay-100">
            <div
              className="rounded-3xl p-6 sm:p-8 text-white flex flex-col gap-8 relative h-full"
              style={{
                background:
                  "linear-gradient(145deg, #1e0a3c 0%, #3b0f8a 45%, #1e1b4b 100%)",
                borderRadius: "24px",
              }}
            >
              {/* Decorative rings */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 w-52 h-52 rounded-full border border-white/8"
              />

              <div className="relative">
                <h3 className="text-xl font-bold font-heading mb-1">
                  Contact Information
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Reach us directly or fill the form — we respond fast.
                </p>
              </div>

              {/* Contact items */}
              <div className="flex flex-col gap-5 relative">
                {contactInfo.map(({ icon: Icon, label, value, href, accent, bg }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: bg, color: accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/45 uppercase tracking-wider font-medium mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white/90">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promises */}
              <div className="relative mt-auto pb-8">
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-4">
                  Our Promise
                </p>
                <ul className="flex flex-col gap-3">
                  {promises.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      >
                        <Icon size={13} className="text-violet-300" />
                      </span>
                      <span className="text-sm text-white/75">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line — clipped via overflow-hidden on a nested wrapper */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to right, #7C3AED, #4F46E5, #06B6D4)",
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3 reveal delay-200">
            {submitted ? (
              /* ── Success state ── */
              <div className="rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[540px] bg-emerald-50/60 border border-emerald-200/50">
                <div className="w-20 h-20 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                  Message Received! 🎉
                </h3>
                <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-6">
                  Our growth team will reach out within 24 hours with your
                  personalised strategy roadmap.
                </p>
                <button
                  onClick={resetForm}
                  className="text-sm text-violet-600 font-semibold underline-offset-4 hover:underline transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form card ── */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-violet-500/5 p-8 md:p-10"
              >
                <div className="flex flex-col gap-5">

                  {/* ROW 1 — Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className={labelCls}>
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={errors.name ? inputError : inputCls}
                      />
                      <FieldError msg={errors.name} />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className={labelCls}>
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={errors.email ? inputError : inputCls}
                      />
                      <FieldError msg={errors.email} />
                    </div>
                  </div>

                  {/* ROW 2 — Phone + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className={labelCls}>
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 00000"
                        className={errors.phone ? inputError : inputCls}
                      />
                      <FieldError msg={errors.phone} />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className={labelCls}>
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* ROW 3 — Service (full width) */}
                  <div>
                    <label htmlFor="contact-service" className={labelCls}>
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* ROW 4 — Message (full width) */}
                  <div>
                    <label htmlFor="contact-message" className={labelCls}>
                      Your Goals &amp; Challenges
                      <span className="ml-1 text-slate-400 font-normal text-[10px]">(optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current marketing challenges and what you're hoping to achieve..."
                      className={`${errors.message ? inputError : inputCls} resize-none`}
                    />
                    <FieldError msg={errors.message} />
                  </div>

                  {/* ROW 5 — Submit (full width) */}
                  <button
                    type="submit"
                    disabled={loading}
                    id="contact-submit"
                    className="w-full relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl
                      text-sm font-bold text-white overflow-hidden whitespace-nowrap
                      disabled:opacity-70 disabled:cursor-not-allowed
                      transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #2563EB 100%)",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message &amp; Get Free Strategy Call
                      </>
                    )}
                  </button>

                  {/* Trust note */}
                  <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                    <Shield size={11} className="text-emerald-500" />
                    No spam · Free consultation · Response within 24 hours
                  </p>

                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
