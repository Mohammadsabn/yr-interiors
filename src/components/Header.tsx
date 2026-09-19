"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface HeaderProps {
  dark?: boolean; // If true, text is black. If false (default), text is white.
}

export function Header({ dark = false }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  const textColorClass = dark ? "text-neutral-900" : "text-white";
  const bgColorClass = dark ? "bg-white" : "bg-white"; // For underline

  return (
    <header ref={headerRef} className={`absolute top-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-8 ${textColorClass}`}>
      <Link href="/" className="font-sans font-medium tracking-[0.2em] uppercase text-xs sm:text-sm hover:opacity-70 transition-opacity">
        YR Interiors
      </Link>
      <nav className="hidden sm:flex gap-8 text-xs uppercase tracking-widest font-medium">
        <Link href="/#projects" className={`relative group overflow-hidden pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:${bgColorClass} after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.19,1,0.22,1)]`}>
          Projects
        </Link>
        <Link href="/#studio" className={`relative group overflow-hidden pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:${bgColorClass} after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.19,1,0.22,1)]`}>
          Studio
        </Link>
        <Link href="/#contact" className={`relative group overflow-hidden pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:${bgColorClass} after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.19,1,0.22,1)]`}>
          Contact
        </Link>
      </nav>
      <button className="sm:hidden text-xs uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
        Menu
      </button>
    </header>
  );
}

