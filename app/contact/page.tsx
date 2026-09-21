import { GlowMenu } from "@/components/ui/glow-menu";
import { Footer } from "@/components/sections/footer";
import { ContactSection } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Flyeronic | Digital Marketing Agency, Super Corridor Indore",
  description:
    "Contact Flyeronic, a digital marketing agency at GRM Business Park, Super Corridor, Indore. Call, WhatsApp, email, or book a free 30-minute strategy call.",
  alternates: { canonical: "https://www.flyeronic.com/contact" },
};

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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
