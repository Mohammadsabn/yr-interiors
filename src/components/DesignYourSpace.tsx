"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/Typography";
import { configuratorData, CategoryKey } from "@/data/configuratorPalettes";

export function DesignYourSpace() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('residential');
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in the section on scroll
      gsap.fromTo(
        ".configurator-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const palettes = configuratorData[activeCategory];
  const activePalette = palettes[activeIndex] || palettes[0];

  // Handle crossfade animation when activeIndex or activeCategory changes
  useEffect(() => {
    imageRefs.current.forEach((imgRef, idx) => {
      if (imgRef) {
        if (idx === activeIndex) {
          gsap.to(imgRef, { opacity: 1, duration: 0.8, ease: "power2.inOut", zIndex: 10 });
        } else {
          gsap.to(imgRef, { opacity: 0, duration: 0.8, ease: "power2.inOut", zIndex: 0 });
        }
      }
    });
  }, [activeIndex, activeCategory]);

  const handleCategoryChange = (cat: CategoryKey) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(`https://wa.me/916361464303?text=Hi,%20I%20would%20like%20a%20consultation%20for%20the%20${activePalette.name}%20palette%20in%20our%20${activeCategory}%20project.`, '_blank');
    }
  };

  const categories: { key: CategoryKey, label: string }[] = [
    { key: 'residential', label: 'Residential' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'retail', label: 'Retail' },
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#f9f8f6] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 configurator-content">
        <div className="text-center mb-16 lg:mb-24">
          <Typography variant="label" className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-4 block">
            Interactive Experience
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1c1b1a]">
            Design Your Space
          </Typography>
          <p className="mt-6 text-neutral-600 max-w-2xl mx-auto text-sm md:text-base mb-10">
            Visualize your ideal interior atmosphere. Switch between our curated luxury palettes to see how color and texture transform a room.
          </p>

          <div className="flex justify-center gap-4 lg:gap-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`text-xs tracking-[0.2em] uppercase font-medium px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat.key 
                    ? "bg-[#1c1b1a] text-white" 
                    : "bg-white/50 border border-[#1c1b1a]/20 text-[#1c1b1a] hover:bg-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Display */}
          <div className="w-full lg:w-3/5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            {palettes.map((palette, idx) => (
              <div 
                key={palette.id}
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: idx === 0 ? 1 : 0, zIndex: idx === 0 ? 10 : 0 }}
              >
                <Image
                  src={palette.image}
                  alt={`Room variation in ${palette.name}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Typography variant="h3" className="text-3xl font-serif text-[#1c1b1a] mb-3">
              {activePalette.name}
            </Typography>
            <p className="text-neutral-500 text-sm mb-10 h-10">
              {activePalette.description}
            </p>

            <div className="flex gap-4 mb-12 flex-wrap justify-center lg:justify-start">
              {palettes.map((palette, idx) => (
                <button
                  key={palette.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                    activeIndex === idx ? "border-[#1c1b1a] scale-110 shadow-lg" : "border-transparent shadow-sm"
                  }`}
                  aria-label={`Select ${palette.name} palette`}
                >
                  <span 
                    className="absolute inset-[3px] rounded-full"
                    style={{ backgroundColor: palette.hex }}
                  />
                </button>
              ))}
            </div>

            <button 
              onClick={handleConsultation}
              className="bg-[#1c1b1a] text-white px-8 py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-[#2c2b2a] transition-colors shadow-md"
            >
              Request Consultation
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

