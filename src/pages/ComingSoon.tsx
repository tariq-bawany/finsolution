import { useState } from "react";
import { Package, CreditCard, BarChart3, ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: Package, title: "Inventory Management", desc: "Real-time tracking of rental assets, availability calendars, and maintenance scheduling." },
  { icon: CreditCard, title: "Automated Billing", desc: "Recurring invoicing, deposit management, late fee automation, and payment tracking." },
  { icon: BarChart3, title: "Financial Reporting", desc: "Revenue per asset, utilisation rates, profitability by category, and cash flow forecasting." },
];

const targetIndustries = [
  "Manufacturing companies",
  "Vehicle & transport rentals",
  "Property rental businesses",
  "Event organizers",
  "Construction companies",
  "Tech agency",
];

const businessTypes = ["Equipment Rental", "Vehicle / Transport Rental", "Property Rental", "Event / Furniture Hire", "Construction Equipment", "Other"];

const ComingSoon = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => { setSubmitted(true); setLoading(false); }, 800);
  };

  return (
    <main>
      <section className="py-16 border-b border-border" style={{ background: "var(--hero-gradient)" }}>
        <div className="container">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            🚧 Coming Soon
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Customized ERP
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We are developing a purpose-built ERP solution specifically tailored for all type of businesses. Manage inventory, automate billing, monthly sales report, and maintain crystal-clear financial reporting.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100} direction="scale">
              <div className="rounded-2xl border border-border bg-card p-6 h-full shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Who Is This Built For?</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {targetIndustries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} direction="right">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Rocket className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">You're on the list!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll notify you the moment our ERP goes live.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-foreground mb-1">Register Your Interest</h3>
                  <p className="text-sm text-muted-foreground mb-6">Be the first to know when our ERP launches.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-foreground">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-foreground">Business Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-foreground">Business Type</label>
                      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select your category...</option>
                        {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <Button type="submit" disabled={loading} className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      {loading ? "Registering..." : "Register My Interest"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
