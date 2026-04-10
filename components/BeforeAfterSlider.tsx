'use client';

import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
}

export const BeforeAfterSlider = ({ beforeLabel, beforeValue, afterLabel, afterValue }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-32 bg-surface/50 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors select-none">
      {/* After State (Background) */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-r from-primary/10 to-transparent">
        <span className="text-primary font-bold text-2xl">{afterValue}</span>
        <span className="text-white/50 text-xs uppercase tracking-wider">{afterLabel}</span>
      </div>

      {/* Before State (Foreground, clipped) */}
      <div 
        className="absolute inset-0 flex flex-col justify-center p-6 bg-surface border-r border-white/20"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <span className="text-white/80 font-bold text-2xl">{beforeValue}</span>
        <span className="text-white/40 text-xs uppercase tracking-wider">{beforeLabel}</span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-1 h-3 bg-black/20 rounded-full mx-0.5" />
          <div className="w-1 h-3 bg-black/20 rounded-full mx-0.5" />
        </div>
      </div>

      {/* Invisible Range Input for Interaction */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />
    </div>
  );
};
