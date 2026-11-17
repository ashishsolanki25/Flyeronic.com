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
  type: "text" | "tel" | "choice" | "multi" | "area";
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
  showIf?: (v: Values) => boolean;
  /** Shown in the summary instead of an answer when the question is hidden. */
  skipNote?: string;
};

type Step = { title: string; short: string; serviceId?: ServiceId; questions: Question[] };

/* ------------------------------------------------------------------ */
/* Industries: wording and examples change with the chosen industry.   */
/* ------------------------------------------------------------------ */

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

type Profile = {
  projectsLabel: string;
  projectsHelp: string;
  campaignEg: string;
  creativeEg: string;
  typeEg: string;
  shootAt: string;
  searchEg: string;
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
    searchEg: "e.g. 2 BHK flats in Indore",
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
    searchEg: "e.g. best dentist in Indore",
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
    searchEg: "e.g. NEET coaching in Indore",
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
    searchEg: "e.g. cotton sarees online",
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
    searchEg: "e.g. best cafe in Vijay Nagar",
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
    searchEg: "e.g. AC repair in Indore",
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
    searchEg: "e.g. your service + your city",
    goalOptions: ["Leads", "Sales", "Messages", "Brand awareness"],
    notesPh: "Anything else we should know",
  },
};

function industryId(label: string): IndustryId {
  return INDUSTRY_OPTIONS.find((o) => o.label === label)?.id ?? "other";
}

const join = (...parts: string[]) => parts.filter(Boolean).join(" ");

/* ------------------------------------------------------------------ */
/* Services: the client picks these first, then gets questions for     */
/* each one they chose.                                                */
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
const ACCOUNT_OPTS = ["Yes", "No", "Not Sure"];

/** Questions asked for each service, in the order they appear in the form. */
const SECTIONS: Record<ServiceId, (p: Profile) => Question[]> = {
  meta: (p) => [
    {
      id: "campaigns", type: "choice", label: "How many Meta Ads campaigns are required?", sum: "Meta Ads campaigns", req: true, cols: 2,
      help: join(
        "A campaign is one ad run on Facebook and Instagram with its own goal, audience and budget. Audience means the people who will see your ad.",
        p.campaignEg
      ),
      options: ["1", "2–3", "4–5", "Need Recommendation"],
    },
    {
      id: "creatives", type: "choice", label: "What is your monthly creative requirement?", sum: "Monthly creatives", req: true, cols: 2,
      help: join("Creatives are the ad designs and videos we make for your ads every month.", p.creativeEg),
      options: ["1–4 creatives", "5–8 creatives", "9–12 creatives", "Need Recommendation"],
    },
    {
      id: "creativeType", type: "choice", label: "Which creative services do you need?", sum: "Creative type", cols: 3,
      help: join(
        "Static designs are image ads like posters and banners. Video ads and Reels are short videos shown on Instagram and Facebook. A Reel is a short vertical video, usually under a minute.",
        p.typeEg
      ),
      options: ["Static Designs", "Video Ads / Reels", "Both"],
    },
    {
      id: "shoot", type: "choice", label: "Do you need video shooting?", sum: "Video shooting", cols: 1,
      help: `We can shoot videos for your ads ${p.shootAt}. Choose "No" if you already have videos.`,
      options: ["Yes", "No, I will provide videos", "Need a separate quotation"],
      showIf: (v) => v.creativeType !== "Static Designs",
      skipNote: "Not needed (static designs only)",
    },
    {
      id: "account", type: "choice", label: "Do you already have a Meta Ads account?", sum: "Meta Ads account", cols: 3,
      help: "This is the account used to run ads on Facebook and Instagram. It holds your ads and your payment method. If you are not sure, choose \"Not Sure\" and we will check with you.",
      options: ACCOUNT_OPTS,
    },
    {
      id: "budget", type: "choice", label: "What is your monthly advertising budget?", sum: "Monthly ad spend (paid to Meta, separate)", req: true, cols: 2,
      help: "Ad budget (also called ad spend) is the money paid to Meta to show your ads. It is separate from Flyeronic's management fee, which is what we charge to plan, run and improve your ads.",
      options: BUDGETS,
    },
    {
      id: "metaSupport", type: "choice", label: "What kind of Meta Ads support do you need?", sum: "Support needed", req: true, cols: 1,
      help: "Ads management means we run your ads, watch the results and keep improving them.",
      optHints: {
        "Campaign Setup": "One-time work. We build your first campaigns and choose the right audience.",
        "Monthly Ads Management": "Every month we run, watch and improve your ads to bring better leads.",
        Both: "We set everything up first, then manage your ads every month.",
      },
      options: ["Campaign Setup", "Monthly Ads Management", "Both"],
    },
  ],

  google: () => [
    {
      id: "gType", type: "choice", label: "Which type of Google Ads do you need?", sum: "Google Ads type", req: true, cols: 2,
      help: "Search ads show when people search on Google. Display and YouTube ads are banners and videos shown on websites and YouTube. Shopping ads show your products with a photo and price on Google.",
      options: ["Search Ads", "Display / YouTube Ads", "Shopping Ads", "Not Sure"],
    },
    {
      id: "gAccount", type: "choice", label: "Do you already have a Google Ads account?", sum: "Google Ads account", cols: 3,
      help: "This is the account used to run ads on Google. It holds your ads and your payment method. If you are not sure, choose \"Not Sure\" and we will check with you.",
      options: ACCOUNT_OPTS,
    },
    {
      id: "gBudget", type: "choice", label: "What is your monthly Google Ads budget?", sum: "Monthly ad spend (paid to Google, separate)", req: true, cols: 2,
      help: "Ad budget (also called ad spend) is the money paid to Google to show your ads. It is separate from Flyeronic's management fee.",
      options: BUDGETS,
    },
  ],

  seo: (p) => [
    {
      id: "seoType", type: "choice", label: "What do you need help with?", sum: "SEO need", req: true, cols: 1,
      help: "SEO means getting your website to show higher in Google's free results. Local SEO helps your business show on Google Maps when people search nearby.",
      options: ["Rank my website on Google (SEO)", "Show up on Google Maps (Local SEO)", "Both"],
    },
    {
      id: "seoWebsite", type: "choice", label: "Do you already have a website?", sum: "Has a website", cols: 3,
      help: "SEO works on a website, so we need to know if one exists.",
      options: ["Yes", "No", "Under construction"],
    },
    {
      id: "seoKeywords", type: "area", label: "Which Google searches do you want to be found for?", sum: "Keywords",
      ph: p.searchEg,
    },
  ],

  social: (p) => [
    {
      id: "smPlatforms", type: "multi", label: "Which platforms do you want us to manage?", sum: "Platforms", req: true, cols: 2,
      help: "Choose all that apply.",
      options: ["Instagram", "Facebook", "YouTube", "LinkedIn", "Not Sure"],
    },
    {
      id: "smPosts", type: "choice", label: "How many posts do you need each month?", sum: "Posts per month", cols: 2,
      help: join("A post is one design, photo or video published on your page.", p.creativeEg),
      options: ["8–12 posts", "13–20 posts", "21–30 posts", "Need Recommendation"],
    },
    {
      id: "smPages", type: "choice", label: "Do you already have social media pages?", sum: "Existing pages", cols: 1,
      options: ["Yes, and they are active", "Yes, but they are not active", "No, please create them"],
    },
  ],

  web: () => [
    {
      id: "webType", type: "choice", label: "What kind of website do you need?", sum: "Website type", req: true, cols: 1,
      help: "A landing page is a single page made to get one action, like a call or a form fill. An online store lets customers buy and pay on the website.",
      options: ["Business / Company Website", "Online Store (E-commerce)", "Landing Page (single page)", "Redesign of my existing website"],
    },
    {
      id: "webPages", type: "choice", label: "About how many pages do you need?", sum: "Pages", cols: 2,
      options: ["1 page", "2–5 pages", "6–10 pages", "More than 10 / Not sure"],
    },
    {
      id: "webContent", type: "choice", label: "Do you have the content ready?", sum: "Content ready", cols: 1,
      help: "Content means the text, photos and logo that go on the website.",
      options: ["Yes, everything is ready", "Some of it", "No, I need help"],
    },
    {
      id: "webDomain", type: "choice", label: "Do you already have a domain and hosting?", sum: "Domain and hosting", cols: 3,
      help: "A domain is your website address, like yourname.com. Hosting is the space where your website lives online.",
      options: ACCOUNT_OPTS,
    },
  ],

  leads: () => [
    {
      id: "lgLeads", type: "choice", label: "How many leads do you want each month?", sum: "Leads wanted per month", req: true, cols: 2,
      help: "A lead is a person who shows interest in your business, for example by calling, messaging or filling a form.",
      options: ["Up to 50", "50–150", "More than 150", "Not Sure"],
    },
    {
      id: "lgSource", type: "choice", label: "Where should the leads come from?", sum: "Lead source", cols: 2,
      options: ["Facebook / Instagram", "Google", "Both", "Need Recommendation"],
    },
    {
      id: "lgFollow", type: "choice", label: "Do you have a team to call or reply to leads?", sum: "Team to follow up", cols: 1,
      help: "Leads turn into customers faster when someone replies to them quickly.",
      options: ["Yes", "Partly", "No, I need help with this"],
    },
  ],

  content: (p) => [
    {
      id: "ccType", type: "multi", label: "What content do you need?", sum: "Content needed", req: true, cols: 1,
      help: join("Choose all that apply. A brand film is a longer video that tells your business story.", p.creativeEg),
      options: ["Photos / Product shoot", "Reels / Short videos", "Brand film / Corporate video", "Posters / Designs"],
    },
    {
      id: "ccVolume", type: "choice", label: "How much content do you need?", sum: "Volume", cols: 2,
      options: ["1–4 pieces per month", "5–8 pieces per month", "9–12 pieces per month", "One-time project"],
    },
    {
      id: "ccShoot", type: "choice", label: "Do you need shooting at your location?", sum: "Shooting at location", cols: 1,
      help: `We can shoot ${p.shootAt}. Choose "No" if you already have photos or videos.`,
      options: ["Yes", "No, I will provide the material", "Not Sure"],
    },
  ],

  automation: () => [
    {
      id: "maWhat", type: "multi", label: "What do you want to automate?", sum: "Automation needed", req: true, cols: 1,
      help: "Automation means messages and follow-ups go out by themselves, without anyone sending them one by one. Choose all that apply.",
      options: ["WhatsApp messages", "Email follow-ups", "Lead capture and CRM", "Booking and reminders", "Not Sure"],
    },
    {
      id: "maTool", type: "choice", label: "Do you already use a CRM or any other tool?", sum: "Existing CRM or tool", cols: 3,
      help: "A CRM is a tool to store and track your customers and leads.",
      options: ACCOUNT_OPTS,
    },
    {
      id: "maVolume", type: "choice", label: "About how many leads or customers do you get each month?", sum: "Leads or customers per month", cols: 3,
      options: ["Under 100", "100–500", "More than 500"],
    },
  ],
};

/** Notes for the Flyeronic team, added to the end of the request summary. */
const SERVICE_FLAGS: Record<ServiceId, (v: Values) => string[]> = {
  meta: (v) => {
    const f: string[] = [];
    if (v.campaigns === "Need Recommendation") f.push("Meta Ads: client wants a campaign count recommended.");
    if (v.creatives === "Need Recommendation") f.push("Meta Ads: client wants a monthly creative volume recommended.");
    if (v.creativeType === "Video Ads / Reels" || v.creativeType === "Both") f.push("Meta Ads: video production is part of the creative scope.");
    if (v.shoot === "Yes") f.push("Meta Ads: include video shooting in the quotation.");
    if (v.shoot === "Need a separate quotation") f.push("Meta Ads: prepare a separate shooting quotation.");
    if (v.shoot === "No, I will provide videos") f.push("Meta Ads: client will supply video footage.");
    if (v.account === "No") f.push("Meta Ads: include ad account setup.");
    if (v.account === "Not Sure") f.push("Meta Ads: confirm ad account access before setup.");
    if (v.budget === "Not Decided") f.push("Meta Ads: suggest a monthly ad budget.");
    return f;
  },
  google: (v) => {
    const f: string[] = [];
    if (v.gType === "Not Sure") f.push("Google Ads: client wants an ad type recommended.");
    if (v.gAccount === "No") f.push("Google Ads: include ad account setup.");
    if (v.gAccount === "Not Sure") f.push("Google Ads: confirm ad account access before setup.");
    if (v.gBudget === "Not Decided") f.push("Google Ads: suggest a monthly ad budget.");
    return f;
  },
  seo: (v) => {
    const f: string[] = [];
    if (v.seoWebsite === "No") f.push("SEO: client has no website yet, website development may be needed.");
    if (v.seoWebsite === "Under construction") f.push("SEO: website is under construction, confirm launch date.");
    return f;
  },
  social: (v) => {
    const f: string[] = [];
    if (v.smPages === "No, please create them") f.push("Social media: create the pages first.");
    if (v.smPosts === "Need Recommendation") f.push("Social media: client wants a monthly post count recommended.");
    return f;
  },
  web: (v) => {
    const f: string[] = [];
    if (v.webType === "Online Store (E-commerce)") f.push("Website: online store, confirm product count and payment gateway.");
    if (v.webContent === "No, I need help") f.push("Website: include content writing and image sourcing.");
    if (v.webDomain === "No") f.push("Website: include domain and hosting.");
    return f;
  },
  leads: (v) => {
    const f: string[] = [];
    if (v.lgFollow === "No, I need help with this") f.push("Lead generation: client has no team to follow up, consider automation or a follow-up plan.");
    if (v.lgLeads === "Not Sure") f.push("Lead generation: help client set a monthly lead target.");
    return f;
  },
  content: (v) => {
    const f: string[] = [];
    if (v.ccShoot === "Yes") f.push("Content: include shooting at the client's location.");
    if (listOf(v.ccType).includes("Brand film / Corporate video")) f.push("Content: brand film requested, prepare a separate scope.");
    return f;
  },
  automation: (v) => {
    const f: string[] = [];
    if (v.maTool === "Yes") f.push("Automation: client already uses a tool, ask which one.");
    return f;
  },
};

/** Builds the steps for the current answers: services first, then business, then one step per chosen service. */
function getSteps(values: Values): Step[] {
  const p = PROFILES[industryId(values.industry ?? "")];
  const picked = listOf(values.services);
  const chosen = SERVICES.filter((s) => picked.includes(s.label));

  return [
    {
      title: "Services",
      short: "Services",
      questions: [
        {
          id: "services", type: "multi", label: "Which services do you need?", sum: "Services", req: true, cols: 1,
          help: "Choose all that apply. We will ask a few quick questions about each service you pick.",
          options: [...SERVICES.map((s) => s.label), GUIDANCE],
          optHints: SERVICE_HINTS,
          exclusive: GUIDANCE,
        },
      ],
    },
    {
      title: "Your business",
      short: "Business",
      questions: [
        { id: "client", type: "text", label: "Company / client name", sum: "Name", ph: "e.g. Sharma Enterprises", req: true, ac: "organization" },
        { id: "phone", type: "tel", label: "Contact number", sum: "Contact", ph: "98765 43210", req: true, prefix: "+91" },
        {
          id: "industry", type: "choice", label: "Which industry is your business in?", sum: "Industry", req: true, cols: 2,
          help: "Choose the closest match. The next questions will use examples from your industry. D2C means a brand that sells directly to customers, without a middleman.",
          options: INDUSTRY_OPTIONS.map((o) => o.label),
        },
        { id: "website", type: "text", label: "Website or Instagram link", sum: "Website / Instagram", ph: "e.g. www.yourbusiness.com or @yourbusiness" },
        { id: "projects", type: "choice", label: p.projectsLabel, sum: "Products or services to promote", cols: 4, help: p.projectsHelp, options: ["1", "2", "3", "4 or more"] },
      ],
    },
    ...chosen.map((s) => ({ title: s.label, short: s.short, serviceId: s.id, questions: SECTIONS[s.id](p) })),
    {
      title: "Goal and notes",
      short: "Finish",
      questions: [
        {
          id: "goal", type: "choice", label: "What is your main goal?", sum: "Main goal", cols: 2,
          help: "A lead is a person who shows interest in your business, for example by calling, messaging or filling a form. Pick the result that matters most to you.",
          options: p.goalOptions,
        },
        {
          id: "start", type: "choice", label: "When do you want to start?", sum: "Preferred start", cols: 2,
          options: ["Immediately", "Within 2 weeks", "Within a month", "Just exploring"],
        },
        { id: "notes", type: "area", label: "Any additional requirements?", sum: "Additional requirements", ph: p.notesPh },
      ],
    },
  ];
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

function isVisible(q: Question, v: Values) {
  return !q.showIf || q.showIf(v);
}

/** Clears answers for questions that are no longer shown, or whose options changed. */
function cleanValues(input: Values): Values {
  const next = { ...input };
  const live = new Set<string>();
  getSteps(next).forEach((s) =>
    s.questions.forEach((q) => {
      if (!isVisible(q, next)) return;
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

  const steps = getSteps(values);
  const picked = listOf(values.services);
  const line = (q: Question) => {
    if (!isVisible(q, values)) return q.skipNote ? `${q.sum ?? q.label}: ${q.skipNote}` : null;
    return `${q.sum ?? q.label}: ${na(display(q, get(q.id)))}`;
  };
  const byId = (id: string) => steps.flatMap((s) => s.questions).find((q) => q.id === id)!;

  const flags: string[] = [];
  if (get("projects") && get("projects") !== "1") flags.push("Multiple products or services: plan the work for each.");
  if (picked.includes(GUIDANCE)) flags.push("Client is not sure which services to choose: suggest a plan based on their goal.");
  steps.forEach((s) => s.serviceId && flags.push(...SERVICE_FLAGS[s.serviceId](values)));
  if (!flags.length) flags.push("No special flags.");

  const out: string[] = [
    "FLYERONIC | QUOTATION REQUEST",
    `Received: ${when} IST`,
    "",
    "SERVICES REQUIRED",
    picked.length ? picked.join(", ") : "Not answered",
    "",
    "CLIENT",
    `Name: ${get("client")}`,
    `Contact: ${phone}`,
    line(byId("industry"))!,
    line(byId("website"))!,
    line(byId("projects"))!,
  ];

  steps.forEach((s) => {
    if (!s.serviceId) return;
    out.push("", s.title.toUpperCase(), ...s.questions.map(line).filter((l): l is string => !!l));
  });

  out.push(
    "",
    "GOAL AND TIMELINE",
    line(byId("goal"))!,
    line(byId("start"))!,
    "",
    "ADDITIONAL REQUIREMENTS",
    get("notes") || "None",
    "",
    "QUOTATION POINTERS",
    ...flags.map((f) => `- ${f}`)
  );
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
  const compact = steps.length > 5;
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
      if (!isVisible(q, values)) return;
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
        if (q.id === "client" || q.id === "phone") return;
        if (!isVisible(q, values)) {
          if (q.skipNote) fields[snake(q.id)] = q.skipNote;
          return;
        }
        fields[snake(q.id)] = display(q, (values[q.id] ?? "").trim()) || "Not answered";
      })
    );
    const shortNames = SERVICES.filter((s) => pickedServices.includes(s.label)).map((s) => s.short);
    if (pickedServices.includes(GUIDANCE)) shortNames.push("Needs guidance");
    const client = (values.client ?? "").trim();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Quote Request - ${client} (${shortNames.join(", ")})`,
      from_name: "Flyeronic Quote Form",
      name: client,
      phone: `+91 ${phoneDigits(values.phone ?? "")}`,
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
          <p className="qf-lede">
            Tell us which services you need, then answer a few quick questions about each one. It takes about 2 minutes.
          </p>
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
                <span>{compact && i !== cur ? `0${i + 1}` : `0${i + 1} ${s.short}`}</span>
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
                  {sending ? "Sending…" : isLast ? "Submit request" : "Continue"}
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
          {showsAds ? (
            <>
              <span>Ad spend is paid to Meta or Google directly. Flyeronic&apos;s management fee is quoted separately.</span>
              <span>
                Ad spend is the money you pay the ad platform to show your ads. The management fee is what Flyeronic
                charges to plan, run and improve them.
              </span>
            </>
          ) : (
            <span>Our team will review your request and share a quotation that fits your needs.</span>
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
