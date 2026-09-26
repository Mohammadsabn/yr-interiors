"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import { PremiumImage } from "@/components/PremiumImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const profilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".leadership-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Profiles Stagger
      gsap.fromTo(
        ".leadership-profile",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: profilesRef.current,
            start: "top 85%",
          },
        }
      );
      
      // Image Parallax (Desktop only)
      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>(".leadership-img-inner").forEach((img) => {
          gsap.fromTo(
            img,
            { y: "-5%", scale: 1.1 },
            {
              y: "5%",
              scale: 1.1,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-background py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="leadership-header mb-16 lg:mb-24 text-center lg:text-left">
          <Typography variant="label" className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-4 block">
            Leadership
          </Typography>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground/90">
            The People Behind YRG Ventures
          </Typography>
        </div>

        {/* Profiles Grid */}
        <div ref={profilesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Founder */}
          <div className="leadership-profile flex flex-col group">
            <div className="relative w-full md:max-w-[90%] lg:max-w-[85%] aspect-[3/4] lg:aspect-[4/5] overflow-hidden mb-6 sm:mb-8 rounded-sm bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="leadership-img-inner absolute inset-0 w-full h-full transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]">
                <PremiumImage 
                  src="/Founder.jpeg" 
                  alt="Founder - YRG Ventures"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Typography variant="h4" className="text-2xl sm:text-3xl font-serif mb-1 text-foreground/90">
                Yogesh R Gowda
              </Typography>
              <Typography variant="p" className="text-sm sm:text-base font-medium mb-3 text-foreground/80">
                Founder
              </Typography>
              <Typography variant="p" className="text-xs sm:text-sm tracking-[0.15em] uppercase text-neutral-500">
                Visionary Leadership
              </Typography>
            </div>
          </div>

          {/* Managing Director */}
          <div className="leadership-profile flex flex-col group lg:mt-32">
            <div className="relative w-full md:max-w-[90%] lg:max-w-[85%] aspect-[3/4] lg:aspect-[4/5] overflow-hidden mb-6 sm:mb-8 rounded-sm bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="leadership-img-inner absolute inset-0 w-full h-full transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]">
                <PremiumImage 
                  src="/Manger.jpeg" 
                  alt="Managing Director - YRG Ventures"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Typography variant="h4" className="text-2xl sm:text-3xl font-serif mb-1 text-foreground/90">
                Thanu Gowda
              </Typography>
              <Typography variant="p" className="text-sm sm:text-base font-medium mb-3 text-foreground/80">
                Managing Director
              </Typography>
              <Typography variant="p" className="text-xs sm:text-sm tracking-[0.15em] uppercase text-neutral-500">
                Strategic Excellence
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
