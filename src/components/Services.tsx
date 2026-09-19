"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import { services } from "@/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".service-row");
      if (rows.length > 0) {
        gsap.fromTo(
          rows,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef); // Scope to containerRef

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-background py-32 lg:py-48 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <Typography variant="label" className="mb-16 text-neutral-500 block uppercase tracking-[0.2em] text-xs">
          Studio Services
        </Typography>

        <div className="flex flex-col border-b border-neutral-300">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className="service-row group flex flex-col md:flex-row items-start md:items-center justify-between border-t border-neutral-300 py-8 lg:py-12 hover:bg-black/5 transition-colors duration-300 cursor-pointer"
            >
              {/* Left: Index */}
              <div className="w-full md:w-[15%] mb-4 md:mb-0">
                <Typography variant="span" className="text-neutral-400 font-medium text-xs tracking-[0.2em]">
                  [ {String(idx + 1).padStart(2, "0")} ]
                </Typography>
              </div>

              {/* Center: Title */}
              <div className="w-full md:w-[50%] mb-4 md:mb-0">
                <Typography 
                  variant="h2" 
                  className="text-3xl md:text-5xl lg:text-6xl text-foreground transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:group-hover:translate-x-6"
                >
                  {service.title}
                </Typography>
              </div>

              {/* Right: Description & Arrow */}
              <div className="w-full md:w-[35%] flex justify-between items-center">
                <Typography variant="p" className="text-neutral-600 max-w-sm text-sm lg:text-base pr-4">
                  {service.shortDescription}
                </Typography>
                <div className="flex-shrink-0 text-foreground opacity-100 translate-x-0 lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-xl">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
