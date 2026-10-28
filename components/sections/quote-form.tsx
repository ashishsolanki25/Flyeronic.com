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

type IndustryId = "real-estate" | "clinic" | "education" | "ecommerce" | "restaurant" | "services" | "other";

const INDUSTRY_OPTIONS: { id: IndustryId; label: string }[] = [
  { id: "real-estate", label: "Real Estate" },
  { id: "clinic", label: "Clinic / Hospital" },
  { id: "education", label: "Education / Coaching" },
  { id: "ecommerce", label: "E-commerce / D2C" },
  { id: "restaurant", label: "Restaurant / Café" },
  { id: "services", label: "Local Services" },
  { id: "other", label: "Other" },
];

// Wording and examples that change with the chosen industry.
type Profile = {
  projectsLabel: string;
  projectsHelp: string;
  campaignEg: string;
  creativeEg: string;
  typeEg: string;
  shootAt: string;
  goalOptions: string[];
  notesPh: string;
};

const PROFILES: Record<IndustryId, Profile> = {
  "real-estate": {
    projectsLabel: "How many projects need promotion?",
    projectsHelp: "A project is one property you want to sell or rent, like a housing society, plot layout, villa scheme or commercial space.",
    campaignEg: "For example, one campaign per project, or separate ones for site-visit bookings and plot sales.",
    creativeEg: "For example, project walkthrough videos, floor-plan posters and launch-offer banners.",
    typeEg: "For example, a drone or walkthrough video of your project, or a poster with price and location.",
    shootAt: "at your project site or sample flat",
    goalOptions: ["Site visit bookings", "Enquiry calls", "Buyer leads", "Brand awareness"],
    notesPh: "e.g. project location, price range, launch date",
  },
  clinic: {
    projectsLabel: "How many treatments or specialities need promotion?",
    projectsHelp: "A speciality is one area of care, like dental, skin, hair or fertility. Each one can get its own ads.",
    campaignEg: "For example, one campaign per treatment, such as dental implants or skin care.",
    creativeEg: "For example, doctor introduction videos, treatment explainers and health-awareness posters.",
    typeEg: "For example, a short video of the doctor explaining a treatment, or a poster for a health camp.",
    shootAt: "at your clinic or hospital",
    goalOptions: ["Appointment bookings", "Phone calls", "WhatsApp enquiries", "Brand awareness"],
    notesPh: "e.g. treatments, doctor names, clinic timings",
  },
  education: {
    projectsLabel: "How many courses or batches need promotion?",
    projectsHelp: "A batch is one group of students who start together, like a NEET batch or a spoken-English course.",
    campaignEg: "For example, one campaign per course, or one for admissions and one for a free demo class.",
    creativeEg: "For example, topper result posters, teacher introduction videos and course-offer banners.",
    typeEg: "For example, a student success video, or a poster with course fees and start date.",
    shootAt: "at your classroom or campus",
    goalOptions: ["Admission enquiries", "Demo class bookings", "Webinar sign-ups", "Brand awareness"],
    notesPh: "e.g. course names, batch start dates, city",
  },
  ecommerce: {
    projectsLabel: "How many products or categories need promotion?",
    projectsHelp: "A category is a group of similar products, like sarees, skincare or sneakers.",
    campaignEg: "For example, one campaign per product category, or one for new customers and one for repeat buyers.",
    creativeEg: "For example, product photos, unboxing videos and sale-offer banners.",
    typeEg: "For example, a product photo with price and offer, or a short unboxing or how-to-use video.",
    shootAt: "at a studio or at your location",
    goalOptions: ["Online sales", "Website visits", "WhatsApp orders", "Brand awareness"],
    notesPh: "e.g. best-selling products, website link, sale dates",
  },
  restaurant: {
    projectsLabel: "How many outlets or offers need promotion?",
    projectsHelp: "An offer is a deal you want to push, like a festival menu, combo meal or discount.",
    campaignEg: "For example, one campaign per outlet, or one for dine-in offers and one for home delivery.",
    creativeEg: "For example, food photos, menu posters and short videos of dishes being made.",
    typeEg: "For example, a menu poster with prices, or a short Reel of your signature dish.",
    shootAt: "at your café or kitchen",
    goalOptions: ["Table bookings", "Store visits", "Online orders", "Brand awareness"],
    notesPh: "e.g. outlet locations, signature dishes, offers",
  },
  services: {
    projectsLabel: "How many services need promotion?",
    projectsHelp: "A service is one thing you sell, like AC repair, home cleaning, interior design or salon care.",
    campaignEg: "For example, one campaign per service, or one for each city you work in.",
    creativeEg: "For example, before-and-after photos, work-in-action videos and service-offer posters.",
    typeEg: "For example, a before-and-after photo of your work, or a short video of your team at a job.",
    shootAt: "at your work location",
    goalOptions: ["Service enquiries", "Call bookings", "WhatsApp messages", "Brand awareness"],
    notesPh: "e.g. services offered, areas you cover, working hours",
  },
  other: {
    projectsLabel: "How many products or services need promotion?",
    projectsHelp: "A product or service is anything you sell that you want more people to know about.",
    campaignEg: "For example, one campaign per product or per offer.",
    creativeEg: "",
    typeEg: "",
    shootAt: "at your business location",
    goalOptions: ["Leads", "Sales", "Messages", "Brand awareness"],
    notesPh: "Anything else we should know",
  },
};

function industryId(label: string): IndustryId {
  return INDUSTRY_OPTIONS.find((o) => o.label === label)?.id ?? "other";
}

const join = (...parts: string[]) => parts.filter(Boolean).join(" ");

// Builds the three steps. Labels, help text, examples and goal options follow the chosen industry.
function getSteps(industry: string): Step[] {
  const p = PROFILES[industryId(industry)];
  return [
    {
      title: "Your business",
      short: "Business",
      questions: [
        { id: "client", type: "text", label: "Company / client name", ph: "e.g. Sharma Enterprises", req: true, ac: "organization" },
        { id: "phone", type: "tel", label: "Contact number", ph: "98765 43210", req: true, prefix: "+91" },
        {
          id: "industry", type: "choice", label: "Which industry is your business in?", req: true, cols: 2,
          help: "Choose the closest match. The next questions will use examples from your industry. D2C means a brand that sells directly to customers, without a middleman.",
          options: INDUSTRY_OPTIONS.map((o) => o.label),
        },
        { id: "projects", type: "choice", label: p.projectsLabel, cols: 4, help: p.projectsHelp, options: ["1", "2", "3", "4 or more"] },
      ],
    },
    {
      title: "Campaigns and creatives",
      short: "Campaigns",
      questions: [
        {
          id: "goal", type: "choice", label: "What is your main goal?", cols: 2,
          help: "A lead is a person who shows interest in your business, for example by calling, messaging or filling a form. Pick the result that matters most to you.",
          options: p.goalOptions,
        },
        {
          id: "campaigns", type: "choice", label: "How many Meta Ads campaigns are required?", req: true, cols: 2,
          help: join(
            "A campaign is one ad run on Facebook and Instagram with its own goal, audience and budget. Audience means the people who will see your ad.",
            p.campaignEg
          ),
          options: ["1", "2–3", "4–5", "Need Recommendation"],
        },
        {
          id: "creatives", type: "choice", label: "What is your monthly creative requirement?", req: true, cols: 2,
          help: join("Creatives are the ad designs and videos we make for your ads every month.", p.creativeEg),
          options: ["1–4 creatives", "5–8 creatives", "9–12 creatives", "Need Recommendation"],
        },
        {
          id: "creativeType", type: "choice", label: "Which creative services do you need?", cols: 3,
          help: join(
            "Static designs are image ads like posters and banners. Video ads and Reels are short videos shown on Instagram and Facebook. A Reel is a short vertical video, usually under a minute.",
            p.typeEg
          ),
          options: ["Static Designs", "Video Ads / Reels", "Both"],
        },
        {
          id: "shoot", type: "choice", label: "Do you need video shooting?", cols: 1,
          help: `We can shoot videos for your ads ${p.shootAt}. Choose "No" if you already have videos.`,
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
          help: "This is the account used to run ads on Facebook and Instagram. It holds your ads and your payment method. If you are not sure, choose \"Not Sure\" and we will check with you.",
          options: ["Yes", "No", "Not Sure"],
        },
        {
          id: "budget", type: "choice", label: "What is your monthly advertising budget?", req: true, cols: 2,
          help: "Ad budget (also called ad spend) is the money paid to Meta to show your ads. It is separate from Flyeronic's management fee, which is what we charge to plan, run and improve your ads.",
          options: ["₹5,000–₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000+", "Not Decided"],
        },
        {
          id: "service", type: "choice", label: "What services do you require?", req: true, cols: 1,
          help: "Ads management means we run your ads, watch the results and keep improving them.",
          optHints: {
            "Campaign Setup": "One-time work. We build your first campaigns and choose the right audience.",
            "Monthly Ads Management": "Every month we run, watch and improve your ads to bring better leads.",
            Both: "We set everything up first, then manage your ads every month.",
          },
          options: ["Campaign Setup", "Monthly Ads Management", "Both"],
        },
        { id: "notes", type: "area", label: "Any additional requirements?", ph: p.notesPh },
      ],
    },
  ];
}

const LABELS = {
  industry: "Industry",
  projects: "Products or services to promote",
  goal: "Main goal",
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
    `${LABELS.industry}: ${na(v.industry)}`,
    `${LABELS.projects}: ${na(v.projects)}`,
    "",
    "SCOPE",
    `${LABELS.goal}: ${na(v.goal)}`,
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

  const steps = getSteps(values.industry ?? "");
  const step = steps[cur];
  const isLast = cur === steps.length - 1;

  const reduce = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setValue = (id: string, value: string) => {
    setValues((prev) => {
      const next = { ...prev, [id]: value };
      const nextSteps = getSteps(next.industry ?? "");
      // Drop answers to questions that are no longer shown, or whose options changed with the industry.
      nextSteps.forEach((s) =>
        s.questions.forEach((q) => {
          if (q.showIf && !q.showIf(next)) next[q.id] = "";
          if (q.id === "goal" && next.goal && !q.options?.includes(next.goal)) next.goal = "";
        })
      );
      return next;
    });
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = (i: number) => {
    const nextErrors: Record<string, string> = {};
    let firstBad: string | null = null;
    steps[i].questions.forEach((q) => {
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
          <p className="qf-gloss">
            <strong>Meta Ads</strong> are paid ads that show on Facebook and Instagram. We create and run them for you.
          </p>
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
            Ad spend is the money you pay Meta to show your ads. The management fee is what Flyeronic charges to plan, run
            and improve them.
          </span>
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
