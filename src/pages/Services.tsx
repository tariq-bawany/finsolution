import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Settings, Store, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceDetailProps {
  icon: React.ElementType;
  num: string;
  title: string;
  description: string;
  longDesc: string;
  items: string[];
  cardTitle: string;
  cardData: { label: string; value: string; highlight?: boolean }[];
}

const ServiceDetail = ({ icon: Icon, num, title, description, longDesc, items, cardTitle, cardData }: ServiceDetailProps) => (
  <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
    <ScrollReveal direction="left">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service {num}</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
        <p className="mt-3 text-muted-foreground">{description}</p>
        <p className="mt-3 text-sm text-muted-foreground">{longDesc}</p>
        <ul className="mt-6 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
    <ScrollReveal direction="right" delay={150}>
      <div className="rounded-xl border border-border bg-card p-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">{cardTitle}</h4>
        <div className="space-y-3">
          {cardData.map((d) => (
            <div key={d.label} className="flex items-center justify-between border-b border-border pb-2 last:border-0">
              <span className="text-sm text-muted-foreground">{d.label}</span>
              <span className={`text-sm font-semibold ${d.highlight ? "text-accent" : "text-foreground"}`}>{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const sections: ServiceDetailProps[] = [
  {
    icon: BookOpen, num: "01", title: "Bookkeeping & Accounting",
    description: "Accurate, up-to-date bookkeeping is the backbone of every successful business.",
    longDesc: "Our certified accounting team handles your day-to-day financial transactions with meticulous attention to detail, ensuring your books are always clean, compliant, and audit-ready.",
    items: ["Transaction recording and journal entries", "Monthly bank reconciliation and statement matching", "Accounts payable and receivable management", "General ledger review and maintenance", "Payroll processing and expense tracking", "Sales tax and VAT computation support"],
    cardTitle: "Live Ledger Summary",
    cardData: [
      { label: "Opening Balance", value: "$84,250.00" },
      { label: "Total Credits", value: "+$62,400.00", highlight: true },
      { label: "Total Debits", value: "-$28,180.00" },
      { label: "Bank Reconciliation", value: "Matched ✓", highlight: true },
      { label: "Closing Balance", value: "$118,470.00" },
    ],
  },
  {
    icon: BarChart3, num: "02", title: "Financial Reporting & Analysis",
    description: "Clear, accurate financial reports empower business owners and investors to make confident, data-driven decisions.",
    longDesc: "CAPEXLIFY prepares comprehensive financial statements in accordance with international accounting standards, providing the financial visibility your business needs to grow strategically.",
    items: ["Profit & Loss (Income) Statement preparation", "Balance sheet and net worth reporting", "Cash flow statement and liquidity analysis", "Variance reporting and budget vs. actual analysis", "Monthly financial close and management accounts", "Custom KPI dashboards and executive summaries"],
    cardTitle: "Financial Summary — Dec 2024",
    cardData: [
      { label: "Total Revenue", value: "$248,500" },
      { label: "Cost of Goods Sold", value: "$98,200" },
      { label: "Gross Profit", value: "$150,300", highlight: true },
      { label: "Operating Expenses", value: "$62,400" },
      { label: "Net Profit", value: "$87,900", highlight: true },
      { label: "Profit Margin", value: "35.4% ↑", highlight: true },
    ],
  },
  {
    icon: DollarSign, num: "03", title: "Payroll Services",
    description: "Timely, accurate payroll processing so your employees are paid correctly — every single time.",
    longDesc: "CAPEXLIFY manages your entire payroll cycle end-to-end, from salary calculations and tax withholdings to compliance filings and direct deposits. We ensure zero missed deadlines and full regulatory compliance across jurisdictions.",
    items: [
      "Salary and wage calculation with overtime and bonuses",
      "Federal, state, and local payroll tax withholdings",
      "Direct deposit setup and payment processing",
      "Payslip generation and employee self-service portals",
      "Year-end W-2 and 1099 preparation and filing",
      "Benefits administration and deduction management",
      "Multi-state and international payroll compliance",
    ],
    cardTitle: "Payroll Run — March 2025",
    cardData: [
      { label: "Total Employees", value: "42" },
      { label: "Gross Payroll", value: "$186,400" },
      { label: "Tax Withholdings", value: "-$38,200" },
      { label: "Benefits Deductions", value: "-$12,800" },
      { label: "Net Payroll", value: "$135,400", highlight: true },
      { label: "Processing Status", value: "Complete ✓", highlight: true },
    ],
  },
  {
    icon: Settings, num: "04", title: "ERP Implementation & System Setup",
    description: "A well-implemented ERP system transforms how your business manages finance, inventory, and operations.",
    longDesc: "CAPEXLIFY guides you through every stage of ERP implementation — from system selection to go-live — ensuring a smooth transition with minimal operational disruption.",
    items: ["ERP system selection and requirements analysis", "System configuration and chart of accounts setup", "Historical data migration and validation", "Financial module setup (AP, AR, GL, fixed assets)", "Workflow automation and approval routing", "Staff training, documentation, and post-go-live support"],
    cardTitle: "ERP Rollout Progress",
    cardData: [
      { label: "System Configuration", value: "Complete ✓", highlight: true },
      { label: "Data Migration", value: "Complete ✓", highlight: true },
      { label: "Module Testing", value: "Complete ✓", highlight: true },
      { label: "Staff Training", value: "In Progress" },
      { label: "Go-Live Date", value: "Jan 15, 2025" },
      { label: "Overall Progress", value: "78%", highlight: true },
    ],
  },
  {
    icon: Store, num: "05", title: "Industry-Specific Accounting Solutions",
    description: "Not all businesses are the same — neither are their accounting requirements.",
    longDesc: "CAPEXLIFY delivers specialised accounting solutions designed for the unique financial complexities of e-commerce businesses, startups seeking funding, and service-based companies managing project profitability.",
    items: ["E-commerce accounting with platform integration (Shopify, Amazon)", "Multi-currency accounting for international businesses", "Startup financial setup and investor-ready financial models", "Small business accounting packages with dedicated support", "Project-based accounting for consultancies and agencies", "Industry-specific chart of accounts and reporting templates"],
    cardTitle: "E-Commerce Snapshot",
    cardData: [
      { label: "Shopify Revenue", value: "$42,800" },
      { label: "Amazon Revenue", value: "$18,600" },
      { label: "Returns & Refunds", value: "-$3,240" },
      { label: "Platform Fees", value: "-$4,120" },
      { label: "Net Revenue", value: "$54,040", highlight: true },
      { label: "Reconciliation", value: "All Matched ✓", highlight: true },
    ],
  },
];

const Services = () => (
  <main>
    <section className="py-16 border-b border-border">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Our Services</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Financial Services Designed{" "}<br className="hidden sm:block" />for Business Clarity
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From foundational bookkeeping and payroll to ERP implementation, every CAPEXLIFY service is built around precision, compliance, and scalable financial management.
        </p>
      </div>
    </section>

    <div className="container space-y-20 py-20">
      {sections.map((s, i) => (
        <div key={s.title}>
          <ServiceDetail {...s} />
          {i < sections.length - 1 && <hr className="mt-20 border-border" />}
        </div>
      ))}
    </div>

    <ScrollReveal direction="scale">
      <section className="border-t border-border bg-card py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Not Sure Which Service You Need?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Book a free consultation and let our financial experts assess your business and recommend the right solution package.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </ScrollReveal>
  </main>
);

export default Services;
