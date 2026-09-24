"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import gsap from "gsap";
import { Header } from "@/components/Header";

export function Hero() {
  const textRef0 = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Video Reveal
      tl.fromTo(
        videoContainerRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" },
        0
      );

      // Text Reveal (Staggered)
      const validTextRefs = [
        textRef0.current,
        textRef1.current,
        textRef2.current,
        textRef3.current
      ].filter(Boolean);
      
      if (validTextRefs.length > 0) {
        tl.fromTo(
          validTextRefs,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.15 },
          0.3
        );
      }

      // UI Reveal
      tl.fromTo(
        uiRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        1.2
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#121211]">
      
      {/* Background Video */}
      <div ref={videoContainerRef} className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-interior.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Sophisticated Gradient & Dark Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-20 pointer-events-none" />
      </div>

      {/* Floating Header */}
      <Header />

      {/* Centered Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pt-24 lg:pt-32 pb-12 lg:pb-16">
        <Typography 
          variant="h1" 
          className="mb-6 lg:mb-8 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
        >
          <div className="overflow-hidden inline-block w-full">
            <div ref={textRef0}>DESIGNING</div>
          </div>
          <div className="overflow-hidden inline-block w-full">
            <div ref={textRef1}>SPACES.</div>
          </div>
          <div className="overflow-hidden inline-block w-full">
            <div ref={textRef2}>CREATING</div>
          </div>
          <div className="overflow-hidden inline-block w-full">
            <div ref={textRef3}>COMFORT.</div>
          </div>
        </Typography>
        
        <div ref={uiRef} className="flex flex-col items-center w-full">
          <Typography variant="p" className="max-w-xl text-white/90 mb-8 text-sm md:text-base px-4">
            Transform your space with thoughtfully designed interiors and quality furniture, tailored to your lifestyle, needs and budget.
          </Typography>
          
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <a 
              href="https://wa.me/916361464303?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-auto rounded-none bg-white text-neutral-900 px-8 py-4 h-auto text-xs tracking-[0.2em] font-medium uppercase hover:bg-neutral-200 transition-colors"
            >
              Get a free consultation
            </a>
            <a 
              href="https://wa.me/916361464303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-auto rounded-none border border-white text-white bg-transparent px-8 py-4 h-auto text-xs tracking-[0.2em] font-medium uppercase hover:bg-white/10 hover:border-white transition-colors"
            >
              WhatsApp Us ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
