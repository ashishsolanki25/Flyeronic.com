import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { ContactSection } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Contact Flyeronic | Digital Marketing Agency, Super Corridor Indore",
  description:
    "Contact Flyeronic, a digital marketing agency at GRM Business Park, Super Corridor, Indore. Call, WhatsApp, email, or book a free 30-minute strategy call.",
  path: "/contact",
});

const details = [
  { icon: MapPin, label: "Office", value: "GRM Business Park, Super Corridor, Indore, MP 452005", href: "https://www.google.com/maps?cid=13151350818409658901" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 9109176922", href: "tel:+919109176922" },
  { icon: Mail, label: "Team email", value: "team@flyeronic.com", href: "mailto:team@flyeronic.com" },
  { icon: Mail, label: "Email", value: "flyeronic.info@gmail.com", href: "mailto:flyeronic.info@gmail.com" },
  { icon: Clock, label: "Working hours", value: "Monday to Saturday, 9:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Flyeronic",
          url: "https://www.flyeronic.com/contact",
        }}
      />
      <GlowMenu />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-[#f0eeff] via-[#e8f4ff] to-[#edfff8]">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Talk to Flyeronic in Indore
            </h1>
            <p className="text-lg text-muted-foreground">
              Visit our Super Corridor office, call us, or send a message. We reply within 24 hours.
            </p>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="bg-muted/10 border border-border rounded-2xl p-6 flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium text-foreground hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="pb-14 bg-white">
          <div className="container max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border min-h-[320px]">
              <iframe
                title="Flyeronic office on Google Maps"
                src="https://www.google.com/maps?cid=13151350818409658901&output=embed"
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl border border-border bg-muted/10 p-8 flex flex-col justify-center">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Star size={20} />
              </div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-2">Worked with us?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Share your honest experience on Google. It helps other businesses in Indore decide, and helps us improve.
              </p>
              <a
                href="https://g.page/r/CRW62ffj-4K2EAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity self-start"
              >
                Review us on Google
              </a>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
