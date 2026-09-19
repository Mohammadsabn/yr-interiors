import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[1000] bg-[#F9F8F6] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Subtle geometric pulsing line */}
        <div className="w-12 h-[1px] bg-[#2A2A2A] mb-4 animate-pulse origin-center" style={{ animationDuration: '1.5s' }} />
        
        {/* Micro typography */}
        <span className="uppercase tracking-[0.3em] text-[10px] text-[#2A2A2A]/50 font-medium font-sans">
          Loading
        </span>
      </div>
    </div>
  );
}

