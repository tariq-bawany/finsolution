import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Settings, ArrowRight, Building2, ShoppingCart, Briefcase, Rocket, Target, Clock, Layers, Ruler, Shield, Zap, Globe, ClipboardList, UserCheck, DollarSign, Quote, Factory, Stethoscope, Home as HomeIcon, CheckCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: BookOpen, title: "Bookkeeping & Accounting", description: "Accurate transaction recording, bank reconciliation, accounts payable/receivable management, and general ledger maintenance." },
  { icon: BarChart3, title: "Financial Reporting", description: "Income statements, balance sheets, cash flow reports, and custom monthly reporting packages for informed decisions." },
  { icon: Settings, title: "ERP Implementation", description: "End-to-end ERP system setup, configuration, data migration, and process automation tailored to your operations." },
  { icon: DollarSign, title: "Payroll Services", description: "Hassle-free payroll processing with accurate salary calculations, tax withholdings, compliance filings, and timely deposits." },
];

const whyUs = [
  { icon: Target, title: "Accuracy You Can Count On", desc: "Near-zero error rate backed by a rigorous two-step review process — every entry is verified before it reaches your books." },
  { icon: Clock, title: "Timely Reporting", desc: "Consistent monthly financial reports delivered on schedule — no delays, no surprises." },
  { icon: Layers, title: "Structured Processes", desc: "Systematic financial workflows that create order, reduce risk, and improve efficiency across your operations." },
  { icon: Ruler, title: "Scalable Solutions", desc: "Our services grow with your business — from a 5-person startup to a 500-person enterprise, without missing a beat." },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "We start with a no-obligation discovery call to understand your business model, financial setup, and current pain points." },
  { num: "02", title: "Setup & Configuration", desc: "Our team configures your accounting systems, charts of accounts, ERP modules, payroll settings, and reporting templates." },
  { num: "03", title: "Ongoing Management", desc: "Monthly bookkeeping, payroll runs, reconciliations, financial reports, and ERP support — all managed proactively." },
  { num: "04", title: "Review & Optimise", desc: "Monthly check-ins to refine processes, update reports, and ensure your financial systems keep pace with business growth." },
];

const industries = [
  { icon: Rocket, label: "Startups & Scale-ups", desc: "Financial foundation setup, investor-ready reports, burn-rate tracking, and cap table management from day one." },
  { icon: Building2, label: "Small & Medium Enterprises", desc: "Full-cycle bookkeeping, payroll, tax preparation, cash flow forecasting, and financial management for growing businesses." },
  { icon: ShoppingCart, label: "E-Commerce & Retail", desc: "Multi-channel sales reconciliation (Shopify, Amazon, WooCommerce), inventory accounting, and platform-specific reporting." },
  { icon: Briefcase, label: "Professional Services", desc: "Project-based billing, time & materials accounting, revenue recognition, and utilisation tracking for service firms." },
  { icon: Factory, label: "Manufacturing & Logistics", desc: "Cost accounting, supply chain financial tracking, inventory valuation (FIFO/LIFO), and production cost analysis." },
  { icon: Stethoscope, label: "Healthcare & Wellness", desc: "Practice financial management, insurance billing reconciliation, HIPAA-compliant recordkeeping, and revenue cycle management." },
  { icon: HomeIcon, label: "Real Estate & Construction", desc: "Property-level accounting, job costing, progress billing, trust account management, and investor reporting." },
];

const trustBadges = [
  { icon: Shield, label: "100% Data Confidentiality" },
  { icon: Zap, label: "On-Time Delivery Guarantee" },
  { icon: Globe, label: "Multi-Currency & Cross-Border Ready" },
  { icon: ClipboardList, label: "Compliance-Focused" },
  { icon: UserCheck, label: "Dedicated Account Manager" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container relative z-10 py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Your Dedicated Financial Operations Partner
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              One Team.{" "}
              <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>Every Financial Need.</em>{" "}
              Total Clarity.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We manage your bookkeeping, payroll, financial reporting, and ERP systems — so you can focus entirely on scaling your business with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Get a Free Financial Health Check <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-card">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20">
                ✅ Financial Reports Ready
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Financial Overview</span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Q1 2025</span>
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
              <div className="absolute -bottom-3 -right-3 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                📊 ERP System Active
              </div>
            </div>
          </div>
        </div>

        {/* Trust signals — qualitative */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { icon: CheckCircle, label: "Rigorous Two-Step Review on Every Entry" },
            { icon: Clock, label: "Reports Delivered On-Time, Every Month" },
            { icon: Globe, label: "Serving Businesses Across 7+ Industries" },
            { icon: DollarSign, label: "Payroll Processed Accurately, Every Cycle" },
          ].map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <s.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className="border-b border-border bg-card py-4">
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
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          One Team. Every Financial Need.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          From day-to-day bookkeeping and payroll to full-scale ERP implementation — CAPEXLIFY delivers structured financial solutions that drive clarity and control.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 120} direction="scale">
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link to="/services" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Why Us */}
    <section className="bg-foreground py-20">
      <div className="container">
        <ScrollReveal direction="left">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Why CAPEXLIFY</p>
          <h2 className="font-display text-3xl font-bold text-card sm:text-4xl">
            Built on Precision.<br className="hidden sm:block" /> Driven by Results.
          </h2>
          <p className="mt-3 max-w-2xl text-card/70">
            Every financial decision matters. We give businesses the financial clarity and structured systems they need to operate confidently and grow sustainably.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-4 rounded-2xl border border-card/10 bg-card/5 p-6 backdrop-blur-sm">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card">{item.title}</h3>
                  <p className="mt-1 text-sm text-card/70">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process — 4 steps */}
    <section className="container py-20">
      <ScrollReveal direction="fade">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-2">How It Works</p>
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">Simple, Structured Onboarding</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Getting started is straightforward. We follow a proven four-step process to set up, manage, and continuously optimise your financials.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 150} direction="up">
            <div className="relative rounded-2xl border border-border bg-card p-6 h-full">
              <span className="text-5xl font-bold text-primary/15">{s.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Social Proof — placeholder for real testimonials */}
    <section className="bg-secondary py-20">
      <div className="container">
        <ScrollReveal direction="fade">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-2">What Our Clients Say</p>
          <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">Real Results for Real Businesses</h2>
        </ScrollReveal>
        <div className="mt-12 max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <div className="rounded-2xl bg-card p-8 shadow-sm border border-border text-center">
              <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "We're onboarding our first clients and collecting real testimonials. In the meantime, we invite you to schedule a free consultation — let our work speak for itself."
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-secondary">
                  <Link to="/contact">Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Industries — 7 */}
    <section className="container py-20">
      <ScrollReveal direction="right">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-2">Industries We Serve</p>
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">Tailored for Your Industry</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Every industry has unique financial requirements. CAPEXLIFY specialises in delivering solutions built for your specific sector's challenges.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map((ind, i) => (
          <ScrollReveal key={ind.label} delay={i * 100} direction="scale">
            <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md h-full">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <ind.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{ind.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Pricing Signal */}
    <section className="border-y border-border bg-card py-12">
      <div className="container text-center">
        <ScrollReveal direction="fade">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Transparent Pricing</p>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Scalable Plans That Grow With You</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            No hidden fees, no long-term lock-ins. Our pricing scales with your business size and service needs — starting from affordable monthly packages.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Request a Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA — differentiated */}
    <section className="py-20">
      <div className="container">
        <ScrollReveal direction="scale">
          <div className="rounded-3xl bg-foreground p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Free Financial Health Check</p>
            <h2 className="font-display text-3xl font-bold text-card sm:text-4xl">
              Not Sure Where You Stand<br className="hidden sm:block" /> Financially? Let Us Audit It.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-card/70">
              Book a complimentary financial health check — we'll review your current bookkeeping, payroll setup, and reporting processes, then tell you exactly what needs fixing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Get Your Free Health Check <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-card/20 text-card hover:bg-card/10">
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
