"use client";

import React, { useEffect, useRef, useState } from "react";
import { PremiumImage } from "@/components/PremiumImage";
import { Typography } from "@/components/Typography";

interface ServiceGallerySliderProps {
  images: string[];
}

export function ServiceGallerySlider({ images }: ServiceGallerySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Duplicate images multiple times to ensure enough scroll width for infinite effect
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Manual Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 1; // Pixels per frame

    const scrollLoop = () => {
      // Only auto-scroll if user isn't hovering, dragging, or wheel-scrolling
      if (!isHovered && !isInteracting && !isDragging) {
        el.scrollLeft += speed;
        
        // Loop back seamlessly when reaching middle
        // Because we duplicated so many times, half the scroll width is a safe loop point
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isInteracting, isDragging]);

  // Handle Dragging
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle Wheel Events
  const onWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    setIsInteracting(true);
    
    // Add deltaY (vertical scroll) or deltaX (horizontal pad) to scrollLeft
    scrollRef.current.scrollLeft += e.deltaY + e.deltaX;
    
    if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => {
      setIsInteracting(false);
    }, 150);
  };

  // Handle Touch Swipes
  const onTouchStart = () => setIsInteracting(true);
  const onTouchEnd = () => setIsInteracting(false);

  return (
    <section className="w-full py-24 bg-[#1c1b1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-12">
        <Typography variant="label" className="text-white/50 uppercase tracking-[0.2em] text-xs block text-center">
          Featured in this category
        </Typography>
      </div>
      
      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto select-none cursor-grab active:cursor-grabbing will-change-scroll"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        // Custom inline style to hide scrollbars cleanly while preserving layout
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`.will-change-scroll::-webkit-scrollbar { display: none; }`}</style>
        
        <div className="flex whitespace-nowrap px-6 w-max">
          {duplicatedImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-[85vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] aspect-[4/5] overflow-hidden rounded-lg mx-3 shrink-0"
              // Prevent native image dragging so custom click-and-drag panning works smoothly
              onDragStart={(e) => e.preventDefault()}
            >
              <PremiumImage 
                src={img} 
                alt={`Gallery visual ${idx + 1}`}
                containerClassName="w-full h-full"
                className="hover:scale-105 transition-transform duration-700 ease-out object-cover pointer-events-none"
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                // Lazy load images that are far out of view to preserve LCP
                priority={idx < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
