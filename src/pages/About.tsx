import { Link } from "react-router-dom";
import { Target, Eye, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Shield, title: "Reliability", desc: "Consistent, dependable service you can count on every month." },
  { icon: Target, title: "Accuracy", desc: "Meticulous attention to detail in every financial record." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and structured reporting at every step." },
];

const About = () => (
  <main>
    <section className="bg-muted py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About FinEdge</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Your trusted partner for structured, reliable financial management.
        </p>
      </div>
    </section>

    <section className="container py-20">
      <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>
          FinEdge was founded with a simple mission: to provide businesses with accurate, reliable, and structured financial solutions. We understand that clean financial records are the foundation of smart business decisions.
        </p>
        <p>
          Whether you're a startup setting up your first accounting system or an established SME looking for ongoing bookkeeping and reporting, our team delivers the expertise you need — on time, every time.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-muted py-20">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="rounded-lg bg-background p-8 shadow-sm">
          <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-3 text-muted-foreground">
            To empower businesses with accurate financial records, timely reporting, and scalable systems that drive growth and informed decision-making.
          </p>
        </div>
        <div className="rounded-lg bg-background p-8 shadow-sm">
          <h2 className="text-xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-3 text-muted-foreground">
            To be the most trusted accounting and financial solutions partner for growing businesses worldwide.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="container py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground">What We Stand For</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-md bg-primary/10 p-3">
              <v.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-primary py-16 text-center text-primary-foreground">
      <div className="container">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="mx-auto mt-3 max-w-lg opacity-80">Ready to take control of your finances? We're here to help.</p>
        <Button asChild size="lg" variant="secondary" className="mt-8 text-primary font-semibold">
          <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </main>
);

export default About;
