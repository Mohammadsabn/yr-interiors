import Image, { ImageProps } from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface PremiumImageProps extends Omit<ImageProps, "alt"> {
  alt: string; // Enforce alt text for accessibility
  containerClassName?: string;
}

export function PremiumImage({
  src,
  alt,
  className,
  containerClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill,
  width,
  height,
  ...props
}: PremiumImageProps) {
  // If fill is explicitly requested OR no explicit dimensions are provided,
  // we default to fill behavior which requires the container to dictate size.
  const useFill = fill || (!width && !height);

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden bg-neutral-100", 
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill={useFill}
        width={!useFill ? width : undefined}
        height={!useFill ? height : undefined}
        className={cn(
          useFill && "object-cover",
          className
        )}
        {...props}
      />
    </div>
  );
}

