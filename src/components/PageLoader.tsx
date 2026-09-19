"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export function PageLoader() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isMounted, setIsMounted] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Re-trigger loader on route change by deriving state
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMounted(true);
  }

  useEffect(() => {
    if (!isMounted) return;

    let timeoutId: NodeJS.Timeout;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      const triggerExitSequence = () => {
        const tl = gsap.timeline({
          onComplete: () => setIsMounted(false)
        });

        if (prefersReducedMotion) {
          tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut"
          });
        } else {
          // The Color Reveal: fade background to transparent, revealing reality below
          tl.to(containerRef.current, {
            backgroundColor: "rgba(249, 248, 246, 0)", // #F9F8F6 transparent
            duration: 0.8,
            ease: "power2.inOut"
          })
          // The Line Melt: fade and blur the SVG sketch
          .to(svgRef.current, {
            scale: 1.15,
            opacity: 0,
            filter: "blur(8px)",
            duration: 1,
            ease: "power3.inOut"
          }, "-=0.2"); // Overlap slightly
        }
      };

      const checkReadinessAndExit = () => {
        if (document.readyState === "complete") {
          triggerExitSequence();
        } else {
          window.addEventListener("load", triggerExitSequence, { once: true });
          timeoutId = setTimeout(triggerExitSequence, 2000);
        }
      };

      if (!prefersReducedMotion) {
        const paths = gsap.utils.toArray(".arch-line") as SVGPathElement[] | SVGLineElement[];
        
        paths.forEach((path) => {
          const length = "getTotalLength" in path ? path.getTotalLength() : 1000;
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length
          });
        });

        // Step 1: Draw the lines
        gsap.to(".arch-line", {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power3.inOut",
          stagger: {
            amount: 0.5,
            from: "center"
          },
          onComplete: checkReadinessAndExit
        });
      } else {
        // If reduced motion, just wait 1s then exit
        setTimeout(checkReadinessAndExit, 1000);
      }
    }, containerRef);

    // Hard Fail-safe to unmount if timeline completely freezes
    const fallbackTimeoutId = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.transition = "opacity 0.3s ease";
        containerRef.current.style.opacity = "0";
        setTimeout(() => setIsMounted(false), 300);
      } else {
        setIsMounted(false);
      }
    }, 6000);

    return () => {
      ctx.revert();
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeoutId);
      window.removeEventListener("load", () => {});
    };
  }, [isMounted, pathname]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#F9F8F6] flex flex-col items-center justify-center pointer-events-none origin-center"
    >
      <div className="w-full max-w-2xl px-4 lg:px-8">
        <svg
          ref={svgRef}
          viewBox="0 0 800 600"
          className="w-full h-auto drop-shadow-sm will-change-transform"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Floor / Perspective Grid */}
          <line x1="0" y1="600" x2="300" y2="400" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <line x1="800" y1="600" x2="500" y2="400" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          
          {/* Back Wall (The Room) */}
          <rect x="300" y="200" width="200" height="200" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          
          {/* Ceiling Lines */}
          <line x1="0" y1="0" x2="300" y2="200" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <line x1="800" y1="0" x2="500" y2="200" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          
          {/* Doorway in back wall */}
          <path d="M 370 400 L 370 250 L 430 250 L 430 400" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          
          {/* Minimal Window on Left Wall */}
          <path d="M 150 250 L 250 280 L 250 350 L 150 320 Z" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          
          {/* Abstract furniture piece (Right Wall) */}
          <path d="M 550 450 L 650 500 L 650 480 L 550 430 Z" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M 550 430 L 600 400 L 700 450 L 650 480 Z" className="arch-line" stroke="#4A4A4A" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="absolute bottom-12 uppercase tracking-[0.3em] text-xs text-[#4A4A4A]/50 font-medium font-sans">
        YR Interiors
      </div>
    </div>
  );
}
