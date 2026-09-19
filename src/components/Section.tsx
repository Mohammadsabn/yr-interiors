import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", ...props }, ref) => {
    const spacingStyles = {
      none: "",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-20 lg:py-24",
      lg: "py-20 md:py-32 lg:py-40",
      xl: "py-32 md:py-48 lg:py-56",
    };

    return (
      <section
        ref={ref}
        className={cn("w-full relative", spacingStyles[spacing], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

