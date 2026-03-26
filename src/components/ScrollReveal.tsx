import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type AnimationDirection = "up" | "left" | "right" | "scale" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}

const directionClass: Record<AnimationDirection, string> = {
  up: "scroll-reveal-up",
  left: "scroll-reveal-left",
  right: "scroll-reveal-right",
  scale: "scroll-reveal-scale",
  fade: "scroll-reveal-fade",
};

const ScrollReveal = ({ children, className = "", delay, direction = "up" }: ScrollRevealProps) => {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${directionClass[direction]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
