import NextLink from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface LinkProps extends React.ComponentPropsWithoutRef<typeof NextLink> {
  variant?: "default" | "underline" | "button";
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "text-foreground hover:text-neutral-600 transition-colors",
      underline: "text-foreground underline underline-offset-4 hover:text-neutral-600 transition-colors",
      button: "inline-flex items-center justify-center whitespace-nowrap h-11 px-6 bg-foreground text-background font-medium hover:bg-neutral-800 transition-colors disabled:pointer-events-none disabled:opacity-50",
    };

    return (
      <NextLink
        ref={ref}
        className={cn(
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

