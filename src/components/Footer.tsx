"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/Typography";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="contact" className="w-full relative mt-48 lg:mt-32">
      {/* The Floating Newsletter CTA Card */}
      <div className="absolute left-0 right-0 -top-32 lg:-top-24 z-20 flex justify-center px-4 sm:px-6 lg:px-20">
        <div className="bg-[#1c1b1a] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
          
          {/* Left Side: Illustration & Text */}
          <div className="flex items-center gap-6 lg:gap-8 lg:w-3/5">
            <div className="hidden sm:block flex-shrink-0 rounded-full overflow-hidden">
              <Image 
                src="/project-1.png" 
                alt="YRG Ventures Collection" 
                width={96}
                height={96}
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg transition-transform duration-500 ease-out hover:scale-105" 
              />
            </div>
            <div>
              <Typography variant="h3" className="font-serif text-2xl lg:text-3xl text-white mb-2 leading-tight">
                Subscribe to our newsletter to get updates to our latest collections
              </Typography>
              <p className="text-sm text-white/60">
                Get early access to private residential catalogs and architectural design releases.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-3">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-all flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            {subscribed ? (
              <p className="text-[10px] text-green-400/80">
                Thank you for subscribing. Welcome to our private collection.
              </p>
            ) : (
              <p className="text-[10px] text-white/40">
                You will be able to unsubscribe at any time. Read our privacy policy here.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Wrapper */}
      <div className="w-full bg-[#121211] text-white pt-72 sm:pt-64 lg:pt-48 pb-16 px-6 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Grid */}
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 space-y-12 md:space-y-0 md:gap-12 lg:gap-8 text-sm text-white/60 text-left">
            
            {/* Column 1: Brand (Spans 4) */}
            <div className="flex flex-col items-start lg:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src="/logo.jpg" 
                  alt="YRG Ventures Logo" 
                  width={48} 
                  height={48} 
                  className="w-auto h-10 md:h-12 object-contain rounded-sm" 
                />
                <Typography variant="h3" className="text-[#f9f8f6] font-serif text-2xl tracking-wide m-0 leading-none">
                  YRG Ventures
                </Typography>
              </div>
              <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
                Crafting deeply personal spaces with architectural precision since 2024.
              </p>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61594535111205" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/80">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/yr_ventures?stkn=MTdyY2lwenlnYmswcg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/80">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/yrg-ventures-21333243a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/80">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/916361464303" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/80">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 .001 5.384.001 12.031c0 2.124.553 4.195 1.603 6.015L.032 24l6.112-1.604a11.967 11.967 0 005.887 1.543c6.645 0 12.029-5.384 12.029-12.031C24.06 5.384 18.676 0 12.031 0zm0 21.942a9.92 9.92 0 01-5.068-1.385l-.363-.215-3.766.988.999-3.67-.236-.376A9.917 9.917 0 012.033 12.03C2.033 6.51 6.511 2.032 12.031 2.032c5.52 0 9.998 4.478 9.998 9.999 0 5.521-4.478 9.998-9.998 9.998v-.087zM17.518 14.5c-.301-.151-1.782-.879-2.059-.979-.276-.1-.477-.151-.678.151-.2.302-.779.98-.954 1.18-.176.202-.352.227-.653.076-1.54-.775-2.613-1.428-3.606-2.915-.227-.34-.025-.526.126-.676.136-.135.302-.353.453-.529.151-.176.201-.302.302-.504.101-.202.05-.378-.025-.529-.076-.151-.678-1.636-.928-2.241-.242-.589-.488-.51-.678-.519-.176-.01-.377-.01-.579-.01-.2 0-.528.075-.804.377-.276.302-1.055 1.033-1.055 2.519s1.08 2.915 1.231 3.117c.15.201 2.124 3.242 5.143 4.545 2.137.92 2.89.78 3.966.654 1.077-.126 2.361-.966 2.688-1.902.327-.937.327-1.741.226-1.916-.101-.176-.377-.277-.678-.428z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Company / Navigation (Spans 2) */}
            <div className="flex flex-col space-y-4 lg:col-span-2">
              <p className="text-[#f9f8f6] text-xs tracking-widest uppercase mb-2">Company</p>
              <Link href="/#studio" className="hover:text-white transition-colors w-fit">Studio</Link>
              <Link href="/#projects" className="hover:text-white transition-colors w-fit">Projects</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Services</Link>
              <Link href="/#contact" className="hover:text-white transition-colors w-fit">Contact Us</Link>
            </div>

            {/* Column 3: Expertise (Spans 3) */}
            <div className="flex flex-col space-y-4 lg:col-span-3">
              <p className="text-[#f9f8f6] text-xs tracking-widest uppercase mb-2">Expertise</p>
              <span className="hover:text-white transition-colors cursor-pointer w-fit">Residential Interiors</span>
              <span className="hover:text-white transition-colors cursor-pointer w-fit">Commercial Interiors</span>
              <span className="hover:text-white transition-colors cursor-pointer w-fit">Bespoke Furniture Manufacturing</span>
            </div>

            {/* Column 4: Contact Us (Spans 3) */}
            <div className="flex flex-col space-y-4 lg:col-span-3">
              <p className="text-[#f9f8f6] text-xs tracking-widest uppercase mb-2">Contact Us</p>
              <div className="flex flex-col space-y-3">
                <a href="tel:+916361464303" className="hover:text-white transition-colors flex items-center gap-3">
                  <span className="opacity-50">📞</span>
                  +91 6361464303
                </a>
                <a href="mailto:info@yrventures.in" className="hover:text-white transition-colors flex items-center gap-3">
                  <span className="opacity-50">✉</span>
                  info@yrventures.in
                </a>
                <div className="flex gap-3">
                  <span className="opacity-50 mt-1">📍</span>
                  <span className="leading-relaxed">No.15, 3rd cross, Kasthuriba nagar, Bangalore 560026</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-Footer Bar */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs tracking-wider text-white/40">
            <p className="text-center lg:text-left whitespace-normal">
              &copy; 2024 YRG Ventures. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-center">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/20 hidden sm:inline">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span className="text-white/20 hidden sm:inline">|</span>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            
            <p className="text-center lg:text-right whitespace-normal">
              Designed and developed by <a href="https://initwave.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors">InitWave Technologies</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

