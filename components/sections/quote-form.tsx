"use client";

import { useRef, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";
import "./quote-form.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--qf-font",
  display: "swap",
});

// Same Web3Forms key the contact form uses, so quote requests land in the same inbox.
const WEB3FORMS_ACCESS_KEY = "e8e2572f-466a-4820-8fc6-333b891a3f37";

// Flyeronic WhatsApp number with country code, digits only.
const WHATSAPP_NUMBER = "919109176922";

type Values = Record<string, string>;

// Multi-select answers are stored in one string, joined with this separator.
const SEP = "|";
const listOf = (v?: string) => (v ? v.split(SEP).filter(Boolean) : []);

type Question = {
  id: string;
  type: "text" | "tel" | "choice" | "multi";
  label: string;
  /** Short label used in the request summary. Defaults to `label`. */
  sum?: string;
  ph?: string;
  req?: boolean;
  ac?: string;
  prefix?: string;
  cols?: number;
  help?: string;
  options?: string[];
  optHints?: Record<string, string>;
  /** Multi-select only: choosing this option clears all others, and choosing any other clears it. */
  exclusive?: string;
};

type Step = { title: string; short: string; questions: Question[] };

/* ------------------------------------------------------------------ */
/* Services come first. Each chosen service adds ONE quick question,   */
/* always with a "Not Sure" way out, so nobody gets stuck.             */
/* ------------------------------------------------------------------ */

type ServiceId = "meta" | "google" | "seo" | "social" | "web" | "leads" | "content" | "automation";

const GUIDANCE = "Not Sure, Need Guidance";

const SERVICES: { id: ServiceId; label: string; short: string; hint: string }[] = [
  { id: "meta", label: "Meta Ads", short: "Meta Ads", hint: "Paid ads on Facebook and Instagram that bring you leads and sales." },
  { id: "google", label: "Google Ads", short: "Google Ads", hint: "Paid ads that show when people search for your service on Google." },
  { id: "seo", label: "SEO and Local SEO", short: "SEO", hint: "Help your website and Google Maps listing show higher in Google's free results." },
  { id: "social", label: "Social Media Marketing", short: "Social", hint: "We run your Instagram and Facebook pages with regular posts." },
  { id: "web", label: "Website Development", short: "Website", hint: "A new or redesigned website for your business." },
  { id: "leads", label: "Lead Generation", short: "Leads", hint: "A system that brings you a steady flow of interested customers." },
  { id: "content", label: "Content and Video Creation", short: "Content", hint: "Photos, Reels and brand films made for your business." },
  { id: "automation", label: "Marketing Automation", short: "Automation", hint: "WhatsApp and email messages that go out to your leads by themselves." },
];

const SERVICE_HINTS: Record<string, string> = {
  ...Object.fromEntries(SERVICES.map((s) => [s.label, s.hint])),
  [GUIDANCE]: "Tell us your goal and we will suggest the right services for you.",
};

const BUDGETS = ["₹5,000–₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000+", "Not Decided"];

/** The one question we ask for each service. */
const QUESTION: Record<ServiceId, Question> = {
  meta: {
    id: "metaBudget", type: "choice", req: true, cols: 2,
    label: "Meta Ads: what is your monthly ad budget?",
    sum: "Monthly ad spend (paid to Meta, separate)",
    help: "Ad budget (also called ad spend) is the money paid to Meta to show your ads. It is separate from Flyeronic's management fee.",
    options: BUDGETS,
  },
  google: {
    id: "googleBudget", type: "choice", req: true, cols: 2,
    label: "Google Ads: what is your monthly ad budget?",
    sum: "Monthly ad spend (paid to Google, separate)",
    help: "Ad budget (also called ad spend) is the money paid to Google to show your ads. It is separate from Flyeronic's management fee.",
    options: BUDGETS,
  },
  seo: {
    id: "seoNeed", type: "choice", req: true, cols: 2,
    label: "SEO: what do you need?",
    sum: "Need",
    help: "SEO helps your website show higher in Google's free results. Local SEO helps your business show on Google Maps when people search nearby.",
    options: ["SEO (website)", "Local SEO (Google Maps)", "Both", "Not Sure"],
  },
  social: {
    id: "socialPosts", type: "choice", req: true, cols: 2,
    label: "Social media: how many posts do you need each month?",
    sum: "Posts per month",
    help: "A post is one design, photo or video published on your page.",
    options: ["8–12 posts", "13–20 posts", "21–30 posts", "Not Sure"],
  },
  web: {
    id: "webType", type: "choice", req: true, cols: 2,
    label: "Website: what kind of website do you need?",
    sum: "Website type",
    help: "A landing page is a single page made to get one action, like a call or a form fill. An online store lets customers buy and pay on the website.",
    options: ["Business Website", "Online Store", "Landing Page", "Not Sure"],
  },
  leads: {
    id: "leadsPerMonth", type: "choice", req: true, cols: 2,
    label: "Lead generation: how many leads do you want each month?",
    sum: "Leads wanted per month",
    help: "A lead is a person who shows interest in your business, for example by calling, messaging or filling a form.",
    options: ["Up to 50", "50–150", "More than 150", "Not Sure"],
  },
  content: {
    id: "contentType", type: "multi", req: true, cols: 2,
    label: "Content: what do you need?",
    sum: "Content needed",
    help: "Choose all that apply. A brand film is a longer video that tells your business story.",
    options: ["Photos", "Reels / Short videos", "Brand film", "Posters / Designs", "Not Sure"],
  },
  automation: {
    id: "automationNeed", type: "multi", req: true, cols: 2,
    label: "Automation: what do you want to automate?",
    sum: "Automation needed",
    help: "Automation means messages and follow-ups go out by themselves. A CRM is a tool to store and track your leads. Choose all that apply.",
    options: ["WhatsApp messages", "Email follow-ups", "Lead capture and CRM", "Not Sure"],
  },
};

/** Builds the steps for the current answers: services, then quick details (only if needed), then contact. */
function getSteps(values: Values): Step[] {
  const picked = listOf(values.services);
  const chosen = SERVICES.filter((s) => picked.includes(s.label));

  const steps: Step[] = [
    {
      title: "Services",
      short: "Services",
      questions: [
        {
          id: "services", type: "multi", label: "Which services do you need?", sum: "Services", req: true, cols: 1,
          help: "Choose all that apply.",
          options: [...SERVICES.map((s) => s.label), GUIDANCE],
          optHints: SERVICE_HINTS,
          exclusive: GUIDANCE,
        },
      ],
    },
  ];

  if (chosen.length) {
    steps.push({ title: "Quick details", short: "Details", questions: chosen.map((s) => QUESTION[s.id]) });
  }

  steps.push({
    title: "Contact",
    short: "Contact",
    questions: [
      { id: "client", type: "text", label: "Your name", sum: "Name", ph: "e.g. Rahul Sharma", req: true, ac: "name" },
      { id: "phone", type: "tel", label: "Phone / WhatsApp number", sum: "Contact", ph: "98765 43210", req: true, prefix: "+91" },
      { id: "business", type: "text", label: "Business name", sum: "Business", ph: "e.g. Sharma Enterprises", ac: "organization" },
    ],
  });

  return steps;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function phoneDigits(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

/** Clears answers for services that were un-picked, and any option that no longer exists. */
function cleanValues(input: Values): Values {
  const next = { ...input };
  const live = new Set<string>();
  getSteps(next).forEach((s) =>
    s.questions.forEach((q) => {
      live.add(q.id);
      if (q.type === "choice" && next[q.id] && !(q.options ?? []).includes(next[q.id])) next[q.id] = "";
      if (q.type === "multi") next[q.id] = listOf(next[q.id]).filter((o) => (q.options ?? []).includes(o)).join(SEP);
    })
  );
  Object.keys(next).forEach((k) => {
    if (!live.has(k)) next[k] = "";
  });
  return next;
}

const display = (q: Question, raw: string) => (q.type === "multi" ? listOf(raw).join(", ") : raw);
const isUnsure = (a: string) => a === "Not Sure" || a === "Not Decided" || listOf(a).includes("Not Sure");

function buildSummary(values: Values) {
  const get = (k: string) => (values[k] ?? "").trim();
  const d = phoneDigits(get("phone"));
  const phone = `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
  const when = new Date().toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });

  const picked = listOf(values.services);
  const chosen = SERVICES.filter((s) => picked.includes(s.label));

  const flags: string[] = [];
  if (picked.includes(GUIDANCE)) flags.push("Client is not sure which services to choose: call and suggest a plan.");
  chosen.forEach((s) => {
    const q = QUESTION[s.id];
    if (isUnsure(get(q.id))) flags.push(`${s.label}: client is not sure, please recommend.`);
  });
  if (!flags.length) flags.push("No special flags.");

  const out: string[] = [
    "FLYERONIC | QUOTATION REQUEST",
    `Received: ${when} IST`,
    "",
    "CLIENT",
    `Name: ${get("client")}`,
    `Contact: ${phone}`,
  ];
  if (get("business")) out.push(`Business: ${get("business")}`);

  out.push("", "SERVICES REQUIRED");
  if (picked.includes(GUIDANCE)) out.push("Not sure, needs guidance");
  chosen.forEach((s) => {
    const q = QUESTION[s.id];
    out.push(`- ${s.label}`, `  ${q.sum}: ${display(q, get(q.id)) || "Not answered"}`);
  });

  out.push("", "QUOTATION POINTERS", ...flags.map((f) => `- ${f}`));
  return out.join("\n");
}

const snake = (id: string) => id.replace(/([A-Z])/g, "_$1").toLowerCase();

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function QuoteForm() {
  const [cur, setCur] = useState(0);
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const { showToast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLPreElement>(null);

  const steps = getSteps(values);
  const step = steps[Math.min(cur, steps.length - 1)];
  const isLast = cur >= steps.length - 1;
  const pickedServices = listOf(values.services);
  const showsAds = pickedServices.includes("Meta Ads") || pickedServices.includes("Google Ads");

  const reduce = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setValue = (id: string, value: string) => {
    setValues((prev) => cleanValues({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const toggleMulti = (q: Question, opt: string) => {
    const current = listOf(values[q.id]);
    let next = current.includes(opt) ? current.filter((o) => o !== opt) : [...current, opt];
    if (q.exclusive) {
      next = opt === q.exclusive && next.includes(opt) ? [opt] : next.filter((o) => o !== q.exclusive);
    }
    next = (q.options ?? []).filter((o) => next.includes(o));
    setValue(q.id, next.join(SEP));
  };

  const validate = (i: number) => {
    const nextErrors: Record<string, string> = {};
    let firstBad: string | null = null;
    steps[i].questions.forEach((q) => {
      const v = (values[q.id] ?? "").trim();
      let msg = "";
      if (q.req && !v) {
        if (q.id === "services") msg = "Please choose at least one service.";
        else msg = q.type === "choice" ? "Please choose one option." : q.type === "multi" ? "Please choose at least one option." : "This field is required.";
      } else if (q.id === "phone" && v && !/^[6-9]\d{9}$/.test(phoneDigits(v))) msg = "Enter a 10-digit mobile number.";
      nextErrors[q.id] = msg;
      if (msg && !firstBad) firstBad = q.id;
    });
    setErrors(nextErrors);
    if (firstBad) {
      const target = formRef.current?.querySelector<HTMLElement>(`[data-q="${firstBad}"]`);
      target?.scrollIntoView({ block: "center", behavior: reduce() ? "auto" : "smooth" });
      target?.querySelector<HTMLInputElement>("input[type=text],input[type=tel]")?.focus({ preventScroll: true });
    }
    return !firstBad;
  };

  const goTo = (i: number) => {
    setCur(i);
    window.scrollTo({ top: 0, behavior: reduce() ? "auto" : "smooth" });
  };

  const sendEmail = async (text: string) => {
    const fields: Record<string, string> = {};
    steps.forEach((s) =>
      s.questions.forEach((q) => {
        if (q.id === "services" || q.id === "client" || q.id === "phone" || q.id === "business") return;
        fields[snake(q.id)] = display(q, (values[q.id] ?? "").trim()) || "Not answered";
      })
    );
    const shortNames = SERVICES.filter((s) => pickedServices.includes(s.label)).map((s) => s.short);
    if (pickedServices.includes(GUIDANCE)) shortNames.push("Needs guidance");
    const client = (values.client ?? "").trim();
    const business = (values.business ?? "").trim();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Quote Request - ${business || client} (${shortNames.join(", ")})`,
      from_name: "Flyeronic Quote Form",
      name: client,
      phone: `+91 ${phoneDigits(values.phone ?? "")}`,
      business: business || "Not given",
      services: pickedServices.join(", "),
      ...fields,
      message: text,
    };
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || "Submission failed");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending || !validate(cur)) return;
    if (!isLast) {
      goTo(cur + 1);
      return;
    }
    const text = buildSummary(values);
    setSending(true);
    try {
      await sendEmail(text);
      setSummary(text);
      setDone(true);
      showToast("success", "Request sent! 🎉", "Thank you! Our team will contact you shortly.");
      window.scrollTo({ top: 0, behavior: reduce() ? "auto" : "smooth" });
    } catch (err) {
      console.error("Web3Forms error:", err);
      showToast(
        "error",
        "Couldn't send request",
        "Something went wrong. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  const copySummary = async () => {
    const fallback = () => {
      setSummaryOpen(true);
      requestAnimationFrame(() => {
        const el = summaryRef.current;
        if (!el) return;
        const r = document.createRange();
        r.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      });
      setStatus("Summary selected below. Copy it from there.");
    };
    try {
      await navigator.clipboard.writeText(summary);
      setStatus("Summary copied.");
    } catch {
      fallback();
    }
  };

  const firstName = (values.client ?? "").trim().split(/\s+/)[0];
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;

  return (
    <section className={cn("qf", jakarta.variable)}>
      <div className="qf-wrap">
        <div className="qf-intro">
          <span className="qf-kicker">Get a Quote</span>
          <h1>
            Get your <em>marketing</em> quotation
          </h1>
          <p className="qf-lede">Pick the services you need and tell us how to reach you. It takes about a minute.</p>
        </div>

        <div
          className="qf-progress"
          role="progressbar"
          aria-label="Form progress"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={done ? steps.length : cur + 1}
          aria-valuetext={done ? "All steps done" : `Step ${cur + 1} of ${steps.length}, ${step.title}`}
        >
          <div className="qf-segs" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {steps.map((s, i) => (
              <div key={s.short} className={cn("qf-seg", (done || i <= cur) && "on", !done && i === cur && "cur")}>
                <i />
                <span>0{i + 1} {s.short}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="qf-card">
          {!done && (
            <form ref={formRef} noValidate onSubmit={onSubmit}>
              <div className="qf-step" key={cur}>
                {step.questions.map((q) => (
                  <QuestionField
                    key={q.id}
                    q={q}
                    value={values[q.id] ?? ""}
                    error={errors[q.id]}
                    onChange={setValue}
                    onToggle={toggleMulti}
                  />
                ))}
              </div>
              <div className="qf-actions">
                {cur > 0 && (
                  <button type="button" className="qf-btn ghost" onClick={() => goTo(cur - 1)}>
                    Back
                  </button>
                )}
                <button type="submit" className="qf-btn primary" disabled={sending}>
                  {sending ? "Sending…" : isLast ? "Get my quotation" : "Continue"}
                </button>
              </div>
            </form>
          )}

          {done && (
            <section className="qf-done" aria-live="polite">
              <div className="qf-badge" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
              <h2>{firstName ? `Thank you, ${firstName}.` : "Thank you."}</h2>
              <p>We have received your request. Our team will contact you shortly with your quotation.</p>
              <p>For a faster reply, you can also send the same details on WhatsApp.</p>
              <div className="qf-btns">
                <a className="qf-btn primary" href={waUrl} target="_blank" rel="noopener noreferrer">
                  Send on WhatsApp
                </a>
                <button type="button" className="qf-btn ghost" onClick={copySummary}>
                  Copy summary
                </button>
              </div>
              <div className="qf-status" role="status">{status}</div>
              <details open={summaryOpen} onToggle={(e) => setSummaryOpen((e.currentTarget as HTMLDetailsElement).open)}>
                <summary>View request summary</summary>
                <pre ref={summaryRef}>{summary}</pre>
              </details>
            </section>
          )}
        </div>

        <div className="qf-foot">
          {showsAds && (
            <span>Ad budget is paid to Meta or Google directly. Flyeronic&apos;s management fee is quoted separately.</span>
          )}
          <span>
            <strong>Flyeronic</strong> &middot; GRM Business Park, Super Corridor, Indore
          </span>
          <span>&copy; 2026 Flyeronic</span>
        </div>
      </div>
    </section>
  );
}

function QuestionField({
  q,
  value,
  error,
  onChange,
  onToggle,
}: {
  q: Question;
  value: string;
  error?: string;
  onChange: (id: string, value: string) => void;
  onToggle: (q: Question, opt: string) => void;
}) {
  const tag = q.req ? null : <span className="qf-opt-tag">Optional</span>;
  const errEl = error ? (
    <p className="qf-err" id={`e-${q.id}`} role="alert">
      {error}
    </p>
  ) : null;

  if (q.type === "choice" || q.type === "multi") {
    const multi = q.type === "multi";
    const selected = listOf(value);
    return (
      <fieldset className="qf-q" data-q={q.id}>
        <legend className="qf-q-label">
          {q.label}
          {tag}
        </legend>
        {q.help && <p className="qf-help">{q.help}</p>}
        <div className={`qf-opts c${q.cols}`} style={{ ["--cols" as string]: q.cols }}>
          {q.options!.map((opt, i) => {
            const hint = q.optHints?.[opt];
            return (
              <label className="qf-opt" key={opt}>
                <input
                  type={multi ? "checkbox" : "radio"}
                  name={q.id}
                  id={`f-${q.id}-${i}`}
                  value={opt}
                  checked={multi ? selected.includes(opt) : value === opt}
                  onChange={() => (multi ? onToggle(q, opt) : onChange(q.id, opt))}
                />
                <span className="qf-box">
                  {hint ? (
                    <span className="qf-ot">
                      <b>{opt}</b>
                      <small>{hint}</small>
                    </span>
                  ) : (
                    opt
                  )}
                </span>
              </label>
            );
          })}
        </div>
        {errEl}
      </fieldset>
    );
  }

  return (
    <div className="qf-q" data-q={q.id}>
      <label className="qf-q-label" htmlFor={`f-${q.id}`}>
        {q.label}
        {tag}
      </label>
      <div className="qf-input-wrap">
        {q.prefix && <span className="qf-prefix">{q.prefix}</span>}
        <input
          id={`f-${q.id}`}
          name={q.id}
          type={q.type}
          placeholder={q.ph}
          value={value}
          aria-invalid={error ? true : undefined}
          {...(q.type === "tel"
            ? { inputMode: "tel" as const, autoComplete: "tel-national", maxLength: 16 }
            : { autoComplete: q.ac ?? "off" })}
          onChange={(e) => onChange(q.id, e.target.value)}
        />
      </div>
      {errEl}
    </div>
  );
}
