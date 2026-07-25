import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { FinalCTA } from "@/components/sections/final-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AutomationIllustration } from "@/components/ui/service-illustrations";
import {
  Bot,
  MessageSquare,
  Mail,
  Workflow,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Marketing Automation Agency in Indore | Flyeronic",
  description:
    "Flyeronic builds marketing automation systems for Indore businesses — WhatsApp automation, email sequences, CRM workflows, and lead nurture funnels that run 24/7.",
  alternates: {
    canonical: "https://flyeronic.com/services/marketing-automation",
  },
};

const features = [
  {
    icon: <MessageSquare size={22} />,
    title: "WhatsApp Automation",
    description:
      "Automated WhatsApp replies, follow-ups, and nurture sequences so no lead goes cold — even outside business hours.",
  },
  {
    icon: <Mail size={22} />,
    title: "Email Sequences",
    description:
      "Welcome flows, nurture sequences, and re-engagement campaigns that move leads through your funnel automatically.",
  },
  {
    icon: <Database size={22} />,
    title: "CRM Setup & Integration",
    description:
      "CRM systems configured to capture every lead from ads, forms, and WhatsApp into one organized pipeline.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Lead Nurture Workflows",
    description:
      "Multi-step workflows that qualify and warm up leads before your sales team even picks up the phone.",
  },
  {
    icon: <Bot size={22} />,
    title: "Chatbots & Instant Response",
    description:
      "Instant, automated first responses on website and WhatsApp so leads are engaged the moment they show interest.",
  },
];

const faqs = [
  {
    q: "What is marketing automation and do I really need it?",
    a: "Marketing automation uses tools to follow up with leads, send emails/WhatsApp messages, and move people through your sales funnel without manual effort. If you're currently losing leads because no one follows up fast enough, automation directly fixes that.",
  },
  {
    q: "Which platforms do you use for automation?",
    a: "We work with WhatsApp Business API, popular CRM and email automation platforms, and custom workflow tools — chosen based on what fits your business and budget.",
  },
  {
    q: "Can automation work alongside my existing sales team?",
    a: "Yes — automation handles the repetitive first-touch and follow-up work, so your sales team spends time only on leads that are actually warm and ready to talk.",
  },
];

export default function MarketingAutomationPage() {
  return (
    <>
      <GlowMenu />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Marketing Automation
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Marketing Automation Agency in Indore
                  <br />
                  <span className="text-primary">That Works 24/7</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  We build WhatsApp, email, and CRM automation systems that
                  capture, nurture, and follow up with every lead — automatically.
                </p>
                <AnimatedButton href="/#contact" variant="primary">
                  Get a Free Automation Audit
                  <ArrowRight size={16} />
                </AnimatedButton>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <AutomationIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                What We Automate
              </h2>
              <p className="text-muted-foreground">
                Systems that capture and nurture leads automatically, so
                fewer prospects slip through the cracks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-muted/10 border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-10 text-center">
              Marketing Automation FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
