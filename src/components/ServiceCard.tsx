import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
    <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
  </div>
);

export default ServiceCard;
