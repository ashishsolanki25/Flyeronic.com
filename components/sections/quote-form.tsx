"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919109176922";

const INDUSTRIES = [
  "Real estate",
  "Education / Coaching",
  "Healthcare / Clinic",
  "E-commerce / D2C",
  "Restaurant / Food",
  "Services",
  "Other",
];
const GOALS = [
  "Leads",
  "Sales / Orders",
  "Store / Walk-ins",
  "Brand awareness",
  "WhatsApp / Messages",
];
const BUDGETS = [
  "Under ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];
const CREATIVES = ["Yes, ready", "Some, need more", "No, need creatives"];

type FormState = {
  business: string;
  industry: string;
  website: string;
  goal: string;
  budget: string;
  creatives: string;
  name: string;
  phone: string;
  city: string;
  notes: string;
};

const EMPTY: FormState = {
  business: "",
  industry: "",
  website: "",
  goal: "",
  budget: "",
  creatives: "",
  name: "",
  phone: "",
  city: "",
  notes: "",
};

const REQUIRED: Record<1 | 2 | 3, (keyof FormState)[]> = {
  1: ["business", "industry"],
  2: ["goal", "budget", "creatives"],
  3: ["name", "phone"],
};

const MESSAGES: Partial<Record<keyof FormState, string>> = {
  business: "Please enter your business name.",
  industry: "Please select an industry.",
  goal: "Please select a goal.",
  budget: "Please select a budget range.",
  creatives: "Please choose one.",
  name: "Please enter your name.",
  phone: "Please enter a valid phone number.",
};

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  const validate = (s: 1 | 2 | 3) => {
    const next: Partial<Record<keyof FormState, string>> = {};
    for (const key of REQUIRED[s]) {
      const value = data[key].trim();
      const bad =
        !value || (key === "phone" && value.replace(/\D/g, "").length < 10);
      if (bad) next[key] = MESSAGES[key];
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const v = (k: keyof FormState) => data[k].trim() || "-";

  const summary = [
    "Meta Ads quotation request",
    "",
    `Business: ${v("business")}`,
    `Industry: ${v("industry")}`,
    `Website/Instagram: ${v("website")}`,
    `Goal: ${v("goal")}`,
    `Monthly ad spend: ${v("budget")}`,
    `Creatives: ${v("creatives")}`,
    `Name: ${v("name")}`,
    `Phone: ${v("phone")}`,
    `City: ${v("city")}`,
    `Notes: ${v("notes")}`,
  ].join("\n");

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;

  const next = () => {
    if (step === 4) return;
    if (!validate(step)) return;
    setStep((s) => (s + 1) as 1 | 2 | 3 | 4);
  };
  const back = () => {
    setErrors({});
    setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4) : s));
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mb-5 flex gap-2" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              step >= n ? "bg-primary" : "bg-border"
            )}
          />
        ))}
      </div>

      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
      >
        {step === 1 && (
          <div>
            <h2 className="mb-5 text-xl font-semibold text-foreground">1. Your business</h2>
            <Field label="Business name *" htmlFor="q-business" error={errors.business}>
              <input id="q-business" className={inputClass} value={data.business} onChange={set("business")} />
            </Field>
            <Field label="Industry *" htmlFor="q-industry" error={errors.industry}>
              <select id="q-industry" className={inputClass} value={data.industry} onChange={set("industry")}>
                <option value="">Select…</option>
                {INDUSTRIES.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Website or Instagram (optional)" htmlFor="q-website">
              <input id="q-website" className={inputClass} placeholder="https://" value={data.website} onChange={set("website")} />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="mb-5 text-xl font-semibold text-foreground">2. Your goals</h2>
            <Field label="Main goal *" htmlFor="q-goal" error={errors.goal}>
              <select id="q-goal" className={inputClass} value={data.goal} onChange={set("goal")}>
                <option value="">Select…</option>
                {GOALS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Monthly ad spend (paid to Meta) *" htmlFor="q-budget" error={errors.budget}>
              <select id="q-budget" className={inputClass} value={data.budget} onChange={set("budget")}>
                <option value="">Select…</option>
                {BUDGETS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Do you have ad creatives (images/videos)? *" htmlFor="q-creatives" error={errors.creatives}>
              <select id="q-creatives" className={inputClass} value={data.creatives} onChange={set("creatives")}>
                <option value="">Select…</option>
                {CREATIVES.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="mb-5 text-xl font-semibold text-foreground">3. Contact details</h2>
            <Field label="Your name *" htmlFor="q-name" error={errors.name}>
              <input id="q-name" className={inputClass} value={data.name} onChange={set("name")} />
            </Field>
            <Field label="Phone / WhatsApp *" htmlFor="q-phone" error={errors.phone}>
              <input
                id="q-phone"
                type="tel"
                inputMode="tel"
                className={inputClass}
                placeholder="10-digit mobile number"
                value={data.phone}
                onChange={set("phone")}
              />
            </Field>
            <Field label="City" htmlFor="q-city">
              <input id="q-city" className={inputClass} value={data.city} onChange={set("city")} />
            </Field>
            <Field label="Anything else? (optional)" htmlFor="q-notes">
              <textarea id="q-notes" rows={3} className={inputClass} value={data.notes} onChange={set("notes")} />
            </Field>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="mb-3 text-xl font-semibold text-emerald-600">Thank you.</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              Your details are ready. Send them to the Flyeronic team and we will prepare your Meta Ads quotation.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#25d366] px-8 py-3.5 text-sm font-semibold text-[#06240f] transition-opacity hover:opacity-90"
            >
              Send on WhatsApp
            </a>
            <details className="mt-5 text-sm text-muted-foreground">
              <summary className="cursor-pointer">View request summary</summary>
              <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-muted/30 p-4 text-foreground">
                {summary}
              </pre>
            </details>
          </div>
        )}

        {step < 4 && (
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={back}
              className={cn(
                "rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted",
                step === 1 && "invisible"
              )}
            >
              Back
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Meta ad spend is paid to Meta directly. Flyeronic&apos;s management fee is quoted separately.
      </p>
    </div>
  );
}
