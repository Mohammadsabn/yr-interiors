"use client";

import React, { useEffect, useRef } from "react";
import { PremiumImage } from "@/components/PremiumImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProjectGallery({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const galleryItems = gsap.utils.toArray(".gallery-item") as HTMLElement[];
      
      galleryItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-12 pb-24">
      {images.map((src, idx) => {
        return (
          <div 
            key={`${src}-${idx}`} 
            className="gallery-item group relative w-full aspect-[4/3] overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full">
              <PremiumImage 
                src={src} 
                alt={`Project gallery image ${idx + 1}`}
                containerClassName="w-full h-full"
                className="group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

