"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import { PremiumImage } from "@/components/PremiumImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef0 = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const textRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Image Parallax (Desktop only for performance)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        if (imageRef.current) {
          gsap.fromTo(
            imageRef.current,
            { scale: 1.2, y: "-10%" },
            {
              scale: 1.2,
              y: "10%",
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      // Text Reveal
      const validTextRefs = [
        textRef0.current, 
        textRef1.current, 
        textRef2.current,
        textRef3.current,
        textRef4.current
      ].filter(Boolean);
      
      if (validTextRefs.length > 0) {
        gsap.fromTo(
          validTextRefs,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="studio" ref={containerRef} className="w-full bg-background py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-0 gap-y-12 lg:gap-y-16 items-center min-h-0 lg:min-h-[80vh]">
        
        {/* Left Column: Anchor Image */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full h-[400px] lg:h-auto lg:aspect-[3/4] overflow-hidden">
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
              <PremiumImage 
                src="/about-interior.png" 
                alt="YRG Ventures Philosophy"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Typography & Label */}
        <div className="lg:col-start-7 lg:col-span-6 flex flex-col justify-center">
          <Typography variant="label" className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-6 lg:mb-12">
            Our Philosophy
          </Typography>
          
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl text-foreground/90 leading-[1.25] tracking-tight">
            <div className="overflow-hidden block w-full">
              <div ref={textRef0}>We believe that a well-designed</div>
            </div>
            <div className="overflow-hidden block w-full">
              <div ref={textRef1}>space has the power to</div>
            </div>
            <div className="overflow-hidden block w-full">
              <div ref={textRef2}>transform daily life. Our approach</div>
            </div>
            <div className="overflow-hidden block w-full">
              <div ref={textRef3}>combines architectural precision</div>
            </div>
            <div className="overflow-hidden block w-full">
              <div ref={textRef4}>with curated warmth.</div>
            </div>
          </Typography>
        </div>
      </div>
    </section>
  );
}

