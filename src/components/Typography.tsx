import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption" | "label";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

export function Typography({
  variant = "p",
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  // Map variant to a default HTML element if `as` is not provided
  const Component = as || (variant === "caption" || variant === "label" ? "span" : variant);
  
  const variantStyles: Record<TypographyVariant, string> = {
    h1: "font-serif text-6xl md:text-8xl lg:text-[120px] leading-[0.9] font-medium tracking-tight",
    h2: "font-serif text-4xl md:text-5xl leading-[1.15] font-medium tracking-tight",
    h3: "font-serif text-3xl md:text-4xl leading-[1.2] font-medium",
    h4: "font-sans text-2xl md:text-3xl leading-snug font-medium",
    h5: "font-sans text-xl md:text-2xl leading-snug font-medium",
    h6: "font-sans text-lg md:text-xl leading-snug font-medium",
    p: "font-sans text-base md:text-lg leading-relaxed",
    span: "font-sans text-base",
    caption: "font-sans text-sm md:text-base text-neutral-600",
    label: "font-sans text-xs uppercase tracking-widest",
  };

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}

