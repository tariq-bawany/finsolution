import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Settings, ArrowRight, Building2, ShoppingCart, Briefcase, Rocket, Target, Clock, Layers, Ruler, Shield, Zap, Globe, ClipboardList, UserCheck, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: BookOpen, title: "Bookkeeping & Accounting", description: "Accurate transaction recording, bank reconciliation, accounts payable/receivable management, and general ledger maintenance for a clean financial foundation." },
  { icon: BarChart3, title: "Financial Reporting", description: "Professionally prepared income statements, balance sheets, cash flow reports, and custom monthly reporting packages for informed business decisions." },
  { icon: Settings, title: "ERP Implementation", description: "End-to-end ERP system setup, configuration, data migration, and process automation tailored to your business operations." },
  { icon: DollarSign, title: "Payroll Services", description: "Hassle-free payroll processing with accurate salary calculations, tax withholdings, compliance filings, and timely direct deposits for your team." },
];

const whyUs = [
  { icon: Target, title: "Accuracy & Reliability", desc: "Zero-error bookkeeping with dual-layer review processes ensuring financial records you can trust." },
  { icon: Clock, title: "Timely Reporting", desc: "Consistent monthly financial reports delivered on schedule — no delays, no surprises." },
  { icon: Layers, title: "Structured Processes", desc: "Systematic financial workflows that create order, reduce risk, and improve operational efficiency." },
  { icon: Ruler, title: "Scalable Solutions", desc: "Our services grow with your business — from a 5-person startup to a 500-person enterprise." },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "We start with a no-obligation discovery call to understand your business model, current financial setup, and specific challenges." },
  { num: "02", title: "Setup & Configuration", desc: "Our team configures your accounting systems, charts of accounts, ERP modules, and reporting templates aligned to your industry." },
  { num: "03", title: "Ongoing Management", desc: "Monthly bookkeeping, payroll runs, reconciliations, reports, and ERP support — managed proactively so nothing falls through the cracks." },
];

const industries = [
  { icon: Rocket, label: "Startups", desc: "Financial foundation setup, investor-ready reports, and burn-rate tracking from day one." },
  { icon: Building2, label: "SMEs", desc: "Full-cycle bookkeeping, payroll, tax preparation, and financial management for growing mid-size businesses." },
  { icon: ShoppingCart, label: "E-Commerce", desc: "Multi-channel sales reconciliation, inventory accounting, and platform-specific reporting." },
  { icon: Briefcase, label: "Service-Based", desc: "Project-based billing, time & materials accounting, and revenue recognition for service firms." },
];

const trustBadges = [
  { icon: Shield, label: "100% Data Confidentiality" },
  { icon: Zap, label: "On-Time Monthly Reporting" },
  { icon: Globe, label: "International Client Ready" },
  { icon: ClipboardList, label: "Compliance-Focused Approach" },
  { icon: UserCheck, label: "Dedicated Account Manager" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container relative z-10 py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-primary animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Trusted Financial Partner Since Day One
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Reliable Accounting &{" "}
              <em className="font-display italic text-primary not-italic" style={{ fontStyle: "italic" }}>Bookkeeping Services</em>{" "}
              for Growing Businesses
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We manage your financial records, payroll, reporting, and ERP systems so you can focus entirely on scaling your business with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                ✅ Financial Reports Ready
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Financial Overview</span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Q4 2024</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-foreground">$248K</p>
                    <p className="text-xs text-muted-foreground">Net Revenue</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">94%</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">+18%</p>
                    <p className="text-xs text-muted-foreground">YoY Growth</p>
                  </div>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-2 h-16">
                  {[40, 55, 45, 60, 50, 70, 85, 75].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${i >= 6 ? "bg-primary" : "bg-secondary"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                📊 ERP System Active
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div>
            <p className="text-3xl font-bold text-foreground">200<span className="text-primary">+</span></p>
            <p className="text-sm text-muted-foreground">Clients Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">99<span className="text-primary">%</span></p>
            <p className="text-sm text-muted-foreground">Accuracy Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">0</p>
            <p className="text-sm text-muted-foreground">Missed Payroll Deadlines</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">5<span className="text-primary">+</span></p>
            <p className="text-sm text-muted-foreground">Industries Covered</p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className="border-b border-border bg-secondary py-4 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <b.icon className="h-4 w-4 text-primary" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="container py-20">
      <ScrollReveal direction="fade">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-2">What We Offer</p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Comprehensive Financial{" "}<br className="hidden sm:block" />Management Services
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          From day-to-day bookkeeping and payroll to full-scale ERP implementation — CAPEXLIFY delivers structured financial solutions that drive clarity and control.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 120} direction="scale">
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-accent/5">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link to="/services" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary transition-colors">
                Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Why Us */}
    <section className="bg-secondary py-20">
      <div className="container">
        <ScrollReveal direction="left">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Why CAPEXLIFY</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Built on Precision.{" "}<br className="hidden sm:block" />Driven by Results.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every financial decision matters. We give businesses the financial clarity and structured systems they need to operate confidently and grow sustainably.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="container py-20">
      <ScrollReveal direction="fade">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-2">How It Works</p>
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">Simple, Structured Onboarding Process</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Getting started with CAPEXLIFY is straightforward. We follow a proven three-step process to set up and manage your financials seamlessly.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 150} direction="up">
            <div className="relative rounded-xl border border-border bg-card p-6">
              <span className="text-5xl font-bold text-primary/15">{s.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section className="bg-secondary py-20">
      <div className="container">
        <ScrollReveal direction="right">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-2">Industries We Serve</p>
          <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">Tailored for Your Industry</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Every industry has unique financial requirements. CAPEXLIFY specialises in delivering accounting solutions that fit your specific sector and operational model.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.label} delay={i * 100} direction="scale">
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ind.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{ind.label}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{ind.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container">
        <ScrollReveal direction="scale">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Take Action Today</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Get Started with Your Financial{" "}<br className="hidden sm:block" />Management Today
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Let CAPEXLIFY handle the numbers while you focus on growth. Book a free, no-obligation consultation with our financial experts now.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Index;
