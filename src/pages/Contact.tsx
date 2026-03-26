import { useState } from "react";
import { Mail, Phone, Globe, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const serviceOptions = [
  "Bookkeeping & Accounting",
  "Financial Reporting",
  "ERP Implementation",
  "Industry-Specific Accounting",
  "Full Package / Not Sure Yet",
];

const expectations = [
  "30-minute free discovery call",
  "Review of your current financial setup",
  "Tailored service recommendations",
  "Transparent pricing proposal",
];

const contactInfo = [
  { icon: Mail, title: "Email Us", value: "info@capexlify.com" },
  { icon: Phone, title: "WhatsApp / Phone", value: "+1 (555) 000-0000" },
  { icon: Globe, title: "We Serve", value: "International Clients — Remote & Online" },
  { icon: Clock, title: "Business Hours", value: "Mon – Fri, 9:00 AM – 6:00 PM (PKT)" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  const resetForm = () => {
    setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
    setSubmitted(false);
  };

  return (
    <main>
      <section className="py-16 border-b border-border">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Get In Touch</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Book Your Free{" "}<br className="hidden sm:block" />Consultation Today
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            No commitments. No obligations. Just a focused conversation about your financial needs and how CAPEXLIFY can help you move forward with confidence.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <div>
                <h2 className="text-xl font-bold text-foreground">Let's Talk Business</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach out through any of the channels below or fill in the contact form. Our team typically responds within 2–4 business hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">{c.title}</p>
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">What to Expect</h3>
                <ul className="space-y-2">
                  {expectations.map((e) => (
                    <li key={e} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Message Sent Successfully!</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                      Thank you for reaching out to CAPEXLIFY. One of our financial experts will be in touch within 24 hours to schedule your free consultation.
                    </p>
                    <Button onClick={resetForm} variant="outline" className="mt-6 border-border text-foreground">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-foreground mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-muted-foreground">First Name *</label>
                          <input
                            type="text" value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-muted-foreground">Last Name *</label>
                          <input
                            type="text" value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-muted-foreground">Email Address *</label>
                        <input
                          type="email" value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-muted-foreground">Phone / WhatsApp</label>
                        <input
                          type="tel" value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-muted-foreground">Service You're Interested In</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-muted-foreground">Your Message *</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={4}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring resize-none"
                        />
                      </div>
                      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        {loading ? "Sending..." : "Send Message & Book Consultation"} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        🔒 Your data is secure and will never be shared with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
