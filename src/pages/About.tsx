import { Link } from "react-router-dom";
import { Target, Eye, Shield, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { num: "01", title: "Accuracy Above All", desc: "We treat every transaction, every entry, and every report with the same level of care and precision — because financial errors have real consequences." },
  { num: "02", title: "Client-First Transparency", desc: "We believe our clients should always understand their own finances. We communicate clearly, explain complex concepts in simple terms, and never hide behind jargon." },
  { num: "03", title: "Structured Thinking", desc: "Financial chaos is expensive. We build structured systems, disciplined processes, and clean financial frameworks that give businesses a stable foundation." },
  { num: "04", title: "Proactive Partnership", desc: "We don't wait to be asked. We proactively identify issues, flag discrepancies, and suggest improvements to your financial systems." },
];

const stats = [
  { value: "200+", label: "Businesses Served" },
  { value: "5+", label: "Industries Covered" },
  { value: "99%", label: "Client Retention Rate" },
  { value: "3+", label: "Years of Excellence" },
];

const About = () => (
  <main>
    <section className="py-16 border-b border-border">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">About CAPEXLIFY</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your Reliable Financial{" "}<br className="hidden sm:block" />Solutions Partner
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We are a finance-focused firm built on the principles of accuracy, transparency, and structured financial management for businesses that demand more from their accounting partner.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section className="container py-20">
      <ScrollReveal direction="fade">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Our Story</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Founded on a Commitment to Financial Clarity</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              CAPEXLIFY was founded by financial professionals who saw a recurring problem across businesses of all sizes — the gap between having financial data and having financial understanding. Too many businesses were drowning in transactions but starving for insight.
            </p>
            <p>
              We built CAPEXLIFY to bridge that gap. Our team of certified accountants, bookkeeping specialists, and ERP consultants work together to transform raw financial data into structured, meaningful, and actionable financial intelligence.
            </p>
            <p>
              Today, we serve over 200 businesses across multiple industries and geographies — providing the same level of precision and professionalism to a two-person startup as we do to a 200-person enterprise.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* Mission & Vision */}
    <section className="bg-secondary py-20">
      <div className="container grid gap-8 md:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To provide businesses of all sizes with accurate, reliable, and structured financial management services that create the clarity needed to make confident business decisions and achieve sustainable growth.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100} direction="right">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become the most trusted financial management partner for growing businesses worldwide — known for precision, integrity, and the transformative impact our work has on business performance and financial health.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="container py-20">
      <ScrollReveal direction="up">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">What Drives Us</p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Core Values</h2>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {values.map((v, i) => (
          <ScrollReveal key={v.num} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-3xl font-bold text-primary/20">{v.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="bg-secondary py-16">
      <div className="container">
        <ScrollReveal direction="scale">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <ScrollReveal direction="up">
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to Partner with CAPEXLIFY?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Join 200+ businesses that trust us with their most important numbers. Let's start with a conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </main>
);

export default About;
