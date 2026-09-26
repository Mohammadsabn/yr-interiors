"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

interface HeaderProps {
  dark?: boolean; // If true, text is black. If false (default), text is white.
}

export function Header({ dark = false }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initial load: default to light unless local storage says otherwise
    const storedTheme = localStorage.getItem("yr-theme");
    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("yr-theme", "light");
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("yr-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const textColorClass = dark ? "text-neutral-900" : "text-white";
  const bgColorClass = dark ? "bg-neutral-900" : "bg-white"; // For underline

  return (
    <header ref={headerRef} className={`absolute top-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-8 ${textColorClass}`}>
      <Link href="/" className="font-sans font-medium tracking-[0.2em] uppercase text-xs sm:text-sm hover:opacity-70 transition-opacity">
        YR Interiors
      </Link>
      
      <div className="flex items-center gap-8">
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

        {/* Tactile Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="relative flex items-center w-[3.25rem] h-7 rounded-full border border-current opacity-70 hover:opacity-100 transition-all duration-300 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2"
          aria-label="Toggle Theme"
        >
          {/* Background Icons */}
          <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-[10px]">
            <span className={`transition-opacity duration-500 ${theme === 'dark' ? 'opacity-30' : 'opacity-100'}`}>☼</span>
            <span className={`transition-opacity duration-500 ${theme === 'light' ? 'opacity-30' : 'opacity-100'}`}>☾</span>
          </div>
          
          {/* Sliding Knob */}
          <div 
            className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>

        <button className="sm:hidden text-xs uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
          Menu
        </button>
      </div>
    </header>
  );
}

