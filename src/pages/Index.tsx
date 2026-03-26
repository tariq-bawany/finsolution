import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Settings, CheckCircle, ArrowRight, Building2, ShoppingCart, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: BookOpen, title: "Bookkeeping & Accounting", description: "Accurate transaction recording, bank reconciliation, and ledger management to keep your finances in order." },
  { icon: BarChart3, title: "Financial Reporting", description: "Comprehensive income statements, balance sheets, and cash flow reports delivered on time." },
  { icon: Settings, title: "ERP Implementation", description: "System setup, configuration, data migration, and process automation tailored to your business." },
];

const reasons = [
  "Accuracy and reliability",
  "Timely reporting",
  "Structured financial processes",
  "Scalable solutions",
];

const steps = [
  { num: "01", title: "Consultation", desc: "We understand your business needs and financial goals." },
  { num: "02", title: "Setup", desc: "We configure systems, processes, and workflows for you." },
  { num: "03", title: "Ongoing Management", desc: "Continuous support and reporting to keep you on track." },
];

const industries = [
  { icon: Rocket, label: "Startups" },
  { icon: Building2, label: "SMEs" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Briefcase, label: "Service-based Companies" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container relative z-10 py-24 text-center sm:py-32 lg:py-40">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in">
          Reliable Accounting & Bookkeeping Services for Growing Businesses
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          We manage your financial records, reporting, and systems so you can focus on scaling your business.
        </p>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
            <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(215_60%_30%/0.5),transparent_60%)]" />
    </section>

    {/* Services Overview */}
    <section className="container py-20">
      <ScrollReveal>
        <SectionHeading title="Our Services" subtitle="End-to-end financial solutions to support your business growth." />
      </ScrollReveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <ServiceCard {...s} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>

    {/* Why Choose Us */}
    <section className="bg-muted py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Why Choose Us" />
        </ScrollReveal>
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <ScrollReveal key={r} delay={i * 80}>
              <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                <span className="font-medium text-foreground">{r}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="container py-20">
      <ScrollReveal>
        <SectionHeading title="How We Work" subtitle="A simple, structured approach to managing your finances." />
      </ScrollReveal>
      <div className="grid gap-8 sm:grid-cols-3">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 120}>
            <div className="text-center">
              <span className="text-4xl font-bold text-primary/20">{s.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section className="bg-muted py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Industries We Serve" />
        </ScrollReveal>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-3 rounded-lg bg-background p-6 shadow-sm">
                <ind.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">{ind.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <ScrollReveal>
      <section className="container py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Get Started with Your Financial Management Today</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Let us handle the numbers while you focus on growing your business.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </ScrollReveal>

    {/* Coming Soon */}
    <ScrollReveal>
      <section className="border-t border-border bg-card py-20">
        <div className="container text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">Coming Soon</span>
          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">ERP for Rental Businesses</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We are developing ERP solutions tailored for rental-based businesses to manage inventory, billing, and financial reporting.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="button">Register Interest</Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </main>
);

export default Index;
