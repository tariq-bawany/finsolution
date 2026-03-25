interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
