"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after 1.5s delay to allow page loader to finish
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible && bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    closeBanner();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    closeBanner();
  };

  const closeBanner = () => {
    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => setIsVisible(false),
      });
    } else {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={bannerRef}
      className="bg-[#1c1b1a] border border-white/10 text-white p-6 rounded-xl shadow-2xl fixed bottom-6 right-6 z-[9998] max-w-md flex flex-col gap-4"
    >
      <p className="text-sm text-white/80 leading-relaxed">
        We use cookies to enhance your experience and analyze site traffic in compliance with Indian data regulations. By clicking &apos;Accept&apos;, you consent to our use of cookies.
      </p>
      <div className="flex gap-3 mt-2">
        <button 
          onClick={handleAccept}
          className="bg-white text-black font-medium px-5 py-2.5 rounded-lg text-xs tracking-wide hover:bg-white/90 transition-colors flex-1"
        >
          Accept All
        </button>
        <button 
          onClick={handleReject}
          className="bg-transparent border border-white/20 text-white font-medium px-5 py-2.5 rounded-lg text-xs tracking-wide hover:bg-white/10 transition-colors flex-1"
        >
          Reject
        </button>
      </div>
      <div className="text-center mt-1">
        <Link href="/privacy-policy" className="text-[10px] text-white/40 hover:text-white transition-colors underline underline-offset-4">
          Read Privacy Policy
        </Link>
      </div>
    </div>
  );
}

