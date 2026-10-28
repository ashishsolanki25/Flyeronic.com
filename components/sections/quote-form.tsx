"use client";

import { useRef, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./quote-form.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--qf-font",
  display: "swap",
});

// Flyeronic WhatsApp number with country code, digits only.
const WHATSAPP_NUMBER = "919109176922";

type Values = Record<string, string>;

type Question = {
  id: string;
  type: "text" | "tel" | "choice" | "area";
  label: string;
  ph?: string;
  req?: boolean;
  ac?: string;
  prefix?: string;
  cols?: number;
  help?: string;
  options?: string[];
  optHints?: Record<string, string>;
  showIf?: (v: Values) => boolean;
};

type Step = { title: string; short: string; questions: Question[] };

const STEPS: Step[] = [
  {
    title: "Your business",
    short: "Business",
    questions: [
      { id: "client", type: "text", label: "Company / client name", ph: "e.g. Sharma Enterprises", req: true, ac: "organization" },
      { id: "phone", type: "tel", label: "Contact number", ph: "98765 43210", req: true, prefix: "+91" },
      { id: "projects", type: "choice", label: "How many products or services need promotion?", cols: 4, options: ["1", "2", "3", "4 or more"] },
    ],
  },
  {
    title: "Campaigns and creatives",
    short: "Campaigns",
    questions: [
      {
        id: "campaigns", type: "choice", label: "How many Meta Ads campaigns are required?", req: true, cols: 2,
        help: "A campaign is one ad run on Facebook and Instagram with its own goal, audience and budget. For example, one campaign per product or per offer.",
        options: ["1", "2–3", "4–5", "Need Recommendation"],
      },
      {
        id: "creatives", type: "choice", label: "What is your monthly creative requirement?", req: true, cols: 2,
        help: "Creatives are the ad designs and videos we make for your ads every month.",
        options: ["1–4 creatives", "5–8 creatives", "9–12 creatives", "Need Recommendation"],
      },
      {
        id: "creativeType", type: "choice", label: "Which creative services do you need?", cols: 3,
        help: "Static designs are image ads like posters and banners. Video ads and Reels are short videos shown on Instagram and Facebook.",
        options: ["Static Designs", "Video Ads / Reels", "Both"],
      },
      {
        id: "shoot", type: "choice", label: "Do you need video shooting?", cols: 1,
        help: "We can shoot videos for your ads at your business location. Choose \"No\" if you already have videos.",
        options: ["Yes", "No, I will provide videos", "Need a separate quotation"],
        showIf: (v) => v.creativeType !== "Static Designs",
      },
    ],
  },
  {
    title: "Ad account and budget",
    short: "Budget",
    questions: [
      {
        id: "account", type: "choice", label: "Do you already have a Meta Ads account?", cols: 3,
        help: "This is the account used to run ads on Facebook and Instagram. If you are not sure, choose \"Not Sure\" and we will check with you.",
        options: ["Yes", "No", "Not Sure"],
      },
      {
        id: "budget", type: "choice", label: "What is your monthly advertising budget?", req: true, cols: 2,
        help: "Ad budget is the money paid to Meta to show your ads. It is separate from Flyeronic's management fee.",
        options: ["₹5,000–₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000+", "Not Decided"],
      },
      {
        id: "service", type: "choice", label: "What services do you require?", req: true, cols: 1,
        optHints: {
          "Campaign Setup": "One-time work. We build your first campaigns and choose the right audience.",
          "Monthly Ads Management": "Every month we run, watch and improve your ads to bring better leads.",
          Both: "We set everything up first, then manage your ads every month.",
        },
        options: ["Campaign Setup", "Monthly Ads Management", "Both"],
      },
      { id: "notes", type: "area", label: "Any additional requirements?", ph: "Anything else we should know" },
    ],
  },
];

const LABELS = {
  projects: "Products or services to promote",
  campaigns: "Meta Ads campaigns",
  creatives: "Monthly creatives",
  creativeType: "Creative type",
  shoot: "Video shooting",
  account: "Meta Ads account",
  service: "Service needed",
};

function phoneDigits(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

function isVisible(q: Question, v: Values) {
  return !q.showIf || q.showIf(v);
}

function buildSummary(values: Values) {
  const get = (k: string) => (values[k] ?? "").trim();
  const na = (v: string) => v || "Not answered";
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

  const v: Values = {};
  [...Object.keys(LABELS), "budget"].forEach((k) => (v[k] = get(k)));
  if (v.creativeType === "Static Designs") v.shoot = "Not needed (static designs only)";

  const flags: string[] = [];
  if (v.projects && v.projects !== "1") flags.push("Multiple products or services: plan campaigns for each.");
  if (v.campaigns === "Need Recommendation") flags.push("Client wants a campaign count recommended.");
  if (v.creatives === "Need Recommendation") flags.push("Client wants a monthly creative volume recommended.");
  if (v.creativeType === "Video Ads / Reels" || v.creativeType === "Both") flags.push("Video production is part of the creative scope.");
  if (v.shoot === "Yes") flags.push("Include video shooting in the quotation.");
  if (v.shoot === "Need a separate quotation") flags.push("Prepare a separate shooting quotation.");
  if (v.shoot === "No, I will provide videos") flags.push("Client will supply video footage.");
  if (v.account === "No") flags.push("Include Meta ad account setup.");
  if (v.account === "Not Sure") flags.push("Confirm Meta ad account access before setup.");
  if (v.budget === "Not Decided") flags.push("Suggest a monthly ad budget.");
  if (!flags.length) flags.push("No special flags.");

  const notes = get("notes");
  return [
    "FLYERONIC | META ADS QUOTATION REQUEST",
    `Received: ${when} IST`,
    "",
    "CLIENT",
    `Name: ${get("client")}`,
    `Contact: ${phone}`,
    `${LABELS.projects}: ${na(v.projects)}`,
    "",
    "SCOPE",
    `${LABELS.campaigns}: ${na(v.campaigns)}`,
    `${LABELS.creatives}: ${na(v.creatives)}`,
    `${LABELS.creativeType}: ${na(v.creativeType)}`,
    `${LABELS.shoot}: ${na(v.shoot)}`,
    `${LABELS.account}: ${na(v.account)}`,
    `${LABELS.service}: ${na(v.service)}`,
    "",
    "BUDGET",
    `Monthly ad spend (paid to Meta, separate): ${na(v.budget)}`,
    "Flyeronic management fee: to be quoted separately",
    "",
    "ADDITIONAL REQUIREMENTS",
    notes || "None",
    "",
    "QUOTATION POINTERS",
    ...flags.map((f) => `- ${f}`),
  ].join("\n");
}

export function QuoteForm() {
  const [cur, setCur] = useState(0);
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");
  const [summaryOpen, setSummaryOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLPreElement>(null);

  const step = STEPS[cur];
  const isLast = cur === STEPS.length - 1;

  const reduce = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setValue = (id: string, value: string) => {
    setValues((prev) => {
      const next = { ...prev, [id]: value };
      // Drop answers to questions that are no longer shown.
      STEPS.forEach((s) =>
        s.questions.forEach((q) => {
          if (q.showIf && !q.showIf(next)) next[q.id] = "";
        })
      );
      return next;
    });
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = (i: number) => {
    const nextErrors: Record<string, string> = {};
    let firstBad: string | null = null;
    STEPS[i].questions.forEach((q) => {
      if (!isVisible(q, values)) return;
      const v = (values[q.id] ?? "").trim();
      let msg = "";
      if (q.req && !v) msg = q.type === "choice" ? "Please choose one option." : "This field is required.";
      else if (q.id === "phone" && v && !/^[6-9]\d{9}$/.test(phoneDigits(v))) msg = "Enter a 10-digit mobile number.";
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(cur)) return;
    if (!isLast) {
      goTo(cur + 1);
      return;
    }
    setSummary(buildSummary(values));
    setDone(true);
    window.scrollTo({ top: 0, behavior: reduce() ? "auto" : "smooth" });
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
            Get your <em>Meta Ads</em> quotation
          </h1>
          <p className="qf-lede">Tell us about your business in 3 short steps. It takes about 2 minutes.</p>
        </div>

        <div
          className="qf-progress"
          role="progressbar"
          aria-label="Form progress"
          aria-valuemin={1}
          aria-valuemax={3}
          aria-valuenow={done ? 3 : cur + 1}
          aria-valuetext={done ? "All steps done" : `Step ${cur + 1} of 3, ${step.title}`}
        >
          <div className="qf-segs">
            {STEPS.map((s, i) => (
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
                {step.questions
                  .filter((q) => isVisible(q, values))
                  .map((q) => (
                    <QuestionField key={q.id} q={q} value={values[q.id] ?? ""} error={errors[q.id]} onChange={setValue} />
                  ))}
              </div>
              <div className="qf-actions">
                {cur > 0 && (
                  <button type="button" className="qf-btn ghost" onClick={() => goTo(cur - 1)}>
                    Back
                  </button>
                )}
                <button type="submit" className="qf-btn primary">
                  {isLast ? "Submit request" : "Continue"}
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
              <p>Your details are ready. Send them to the Flyeronic team and we will prepare your Meta Ads quotation.</p>
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
          <span>Meta ad spend is paid to Meta directly. Flyeronic&apos;s management fee is quoted separately.</span>
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
}: {
  q: Question;
  value: string;
  error?: string;
  onChange: (id: string, value: string) => void;
}) {
  const tag = q.req ? null : <span className="qf-opt-tag">Optional</span>;
  const errEl = error ? (
    <p className="qf-err" id={`e-${q.id}`} role="alert">
      {error}
    </p>
  ) : null;

  if (q.type === "choice") {
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
                  type="radio"
                  name={q.id}
                  id={`f-${q.id}-${i}`}
                  value={opt}
                  checked={value === opt}
                  onChange={() => onChange(q.id, opt)}
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
      {q.type === "area" ? (
        <textarea
          id={`f-${q.id}`}
          name={q.id}
          rows={3}
          placeholder={q.ph}
          value={value}
          onChange={(e) => onChange(q.id, e.target.value)}
        />
      ) : (
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
      )}
      {errEl}
    </div>
  );
}
