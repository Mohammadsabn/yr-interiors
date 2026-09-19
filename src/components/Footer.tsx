"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef0 = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const validTextRefs = [
        textRef0.current, 
        textRef1.current, 
        textRef2.current
      ].filter(Boolean);
      
      if (validTextRefs.length > 0) {
        gsap.fromTo(
          validTextRefs,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={containerRef} className="w-full bg-[#1c1b1a] text-[#f9f8f6] pt-32 pb-12 lg:pt-48 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Grand CTA */}
        <Typography variant="label" className="text-white/50 uppercase tracking-[0.2em] text-xs mb-6">
          Start Your Project
        </Typography>
        
        <Typography variant="h2" className="text-4xl md:text-6xl lg:text-[7rem] leading-[1.1] tracking-tight mb-12 max-w-5xl">
          <div className="overflow-hidden block w-full">
            <div ref={textRef0}>Let&apos;s create something</div>
          </div>
          <div className="overflow-hidden block w-full">
            <div ref={textRef1}>extraordinary</div>
          </div>
          <div className="overflow-hidden block w-full">
            <div ref={textRef2}>together.</div>
          </div>
        </Typography>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="https://wa.me/916361464303?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20space."
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex w-full sm:w-auto rounded-none bg-[#f9f8f6] text-[#1c1b1a] px-8 py-4 h-auto text-xs tracking-[0.2em] font-medium uppercase hover:bg-white/80 transition-colors"
          >
            Get a free consultation
          </a>
          <a 
            href="https://wa.me/916361464303" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-none border border-[#f9f8f6] text-[#f9f8f6] bg-transparent px-8 py-4 h-auto text-xs tracking-[0.2em] font-medium uppercase hover:bg-white/10 transition-colors"
          >
            WhatsApp Us ↗
          </a>
        </div>

      </div>

      {/* Architectural Footer Grid */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-32 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-white/70">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Typography variant="label" className="text-[#f9f8f6] uppercase tracking-[0.2em] text-xs mb-4">
              YR Interiors & Furnitures
            </Typography>
            <p>Crafting deeply personal spaces <br/> since 2012.</p>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col space-y-2">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Contact</p>
            <p>Thanu Gowda</p>
            <a href="mailto:hello@yrinteriors.com" className="hover:text-white transition-colors">hello@yrinteriors.com</a>
            <a href="tel:+916361464303" className="hover:text-white transition-colors">+91 6361464303</a>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col space-y-2">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Studio</p>
            <p>No.15, 3rd cross, Kasthuriba nagar,<br/>Ashwathkatte road,<br/>Bangalore 560026</p>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col space-y-2">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Socials</p>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

