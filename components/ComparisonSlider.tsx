"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ComparisonSlider({ beforeImage, afterImage, beforeLabel = "Traditional", afterLabel = "Digital" }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Base) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt={afterLabel} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-brand-blue/80 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm z-10">{afterLabel}</div>
      </div>

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={beforeImage} alt={beforeLabel} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm z-10">{beforeLabel}</div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-brand-accent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9L5 12L8 15M16 9L19 12L16 15" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
