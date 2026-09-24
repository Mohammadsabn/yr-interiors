"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".bento-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, containerRef); // Scope to containerRef

    return () => ctx.revert();
  }, []);

  // Map the span columns based on index as per spec
  const getColSpan = (idx: number) => {
    switch (idx) {
      case 0: return "md:col-span-7";
      case 1: return "md:col-span-5";
      case 2: return "md:col-span-4";
      case 3: return "md:col-span-8";
      default: return "md:col-span-12";
    }
  };

  return (
    <section id="services" ref={containerRef} className="w-full bg-[#1c1b1a] py-32 lg:py-48 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <Typography variant="h2" className="text-3xl md:text-5xl lg:text-6xl text-white font-serif tracking-wider mb-6">
            OUR CORE COMPETENCIES
          </Typography>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            End-to-end mastery in design, manufacturing, and execution for elite residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {servicesData.map((service, idx) => (
            <Link 
              href={`/services/${service.slug}`}
              key={service.id}
              className={`bento-card group relative block overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 h-[400px] lg:h-[500px] ${getColSpan(idx)}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
                <div className="flex justify-between items-start">
                  <Typography variant="span" className="font-medium text-xs tracking-[0.2em] text-white/60">
                    [ {String(idx + 1).padStart(2, "0")} ]
                  </Typography>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-white/5 backdrop-blur-sm">
                    <span className="text-white text-lg leading-none">↗</span>
                  </div>
                </div>

                <div>
                  <Typography variant="h3" className="text-2xl md:text-3xl lg:text-4xl font-serif mb-3">
                    {service.title}
                  </Typography>
                  <p className="text-white/70 text-sm max-w-sm line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
