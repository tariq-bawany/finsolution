import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Settings, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceSectionProps {
  icon: React.ElementType;
  title: string;
  items: string[];
  description: string;
}

const ServiceSection = ({ icon: Icon, title, items, description }: ServiceSectionProps) => (
  <ScrollReveal>
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="inline-flex rounded-md bg-primary/10 p-3 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 rounded-md border border-border bg-card p-3 text-sm text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </ScrollReveal>
);

const sections: ServiceSectionProps[] = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Accounting",
    description: "Keep your financial records accurate and up-to-date with our comprehensive bookkeeping services.",
    items: ["Transaction recording", "Bank reconciliation", "Accounts payable/receivable", "General ledger management"],
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "Get clear, timely reports that help you make informed business decisions.",
    items: ["Income Statement", "Balance Sheet", "Cash flow reports", "Monthly reporting"],
  },
  {
    icon: Settings,
    title: "ERP Implementation",
    description: "Streamline your operations with properly configured ERP systems.",
    items: ["System setup", "Configuration", "Data migration", "Process automation"],
  },
  {
    icon: Store,
    title: "Industry-Specific Solutions",
    description: "Tailored accounting solutions for specific industries and business types.",
    items: ["E-commerce accounting", "Small business accounting", "Startup financial setup", "Custom industry solutions"],
  },
];

const Services = () => (
  <main>
    <section className="bg-muted py-16">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Services</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Comprehensive financial solutions designed to help your business thrive.
        </p>
      </div>
    </section>

    <div className="container space-y-20 py-20">
      {sections.map((s, i) => (
        <div key={s.title}>
          <ServiceSection {...s} />
          {i < sections.length - 1 && <hr className="mt-20 border-border" />}
        </div>
      ))}
    </div>

    <ScrollReveal>
      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold">Ready to Streamline Your Finances?</h2>
          <p className="mx-auto mt-3 max-w-lg opacity-80">Let's discuss how we can support your business goals.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 text-primary font-semibold">
            <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </ScrollReveal>
  </main>
);

export default Services;
