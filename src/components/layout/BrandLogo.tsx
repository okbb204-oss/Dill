import React from 'react';

export const BrandLogo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base groups */}
      <g stroke="currentColor" className="text-[var(--color-primary)]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="28" fill="none" />
        {/* Inner Ring */}
        <circle cx="50" cy="50" r="18" fill="none" />
        
        {/* Zig Zag pattern within inner and outer rings */}
        <path d="
          M 50 22 L 58 32
          L 69.8 29.8 L 65.5 41
          L 78 50 L 65.5 59
          L 69.8 70.2 L 58 68
          L 50 78 L 42 68
          L 30.2 70.2 L 34.5 59
          L 22 50 L 34.5 41
          L 30.2 29.8 L 42 32
          Z
        " fill="none" strokeWidth="1" />

        {/* Straight radiating lines across the rings */}
        <line x1="50" y1="22" x2="50" y2="32" strokeWidth="1" />
        <line x1="78" y1="50" x2="68" y2="50" strokeWidth="1" />
        <line x1="50" y1="78" x2="50" y2="68" strokeWidth="1" />
        <line x1="22" y1="50" x2="32" y2="50" strokeWidth="1" />

        <line x1="69.8" y1="29.8" x2="62.7" y2="37.3" strokeWidth="1" />
        <line x1="69.8" y1="70.2" x2="62.7" y2="62.7" strokeWidth="1" />
        <line x1="30.2" y1="70.2" x2="37.3" y2="62.7" strokeWidth="1" />
        <line x1="30.2" y1="29.8" x2="37.3" y2="37.3" strokeWidth="1" />

        {/* Tools extending outward */}
        
        {/* Top: Needle */}
        <g>
          <path d="M48 20 L50 2 L52 20 Z" fill="none" stroke="currentColor" />
          <line x1="50" y1="7" x2="50" y2="11" strokeWidth="1" stroke="currentColor" />
          {/* Thread loop */}
          <path d="M50 4 C 55 -2, 60 5, 55 12" strokeWidth="1" fill="none" stroke="currentColor" />
        </g>
        
        {/* Right: Hammer */}
        <g>
          <rect x="78" y="47.5" width="12" height="5" fill="none" stroke="currentColor" />
          <path d="M84 44.5 L91 44.5 C93 44.5 94 46 94 50 C94 54 93 55.5 91 55.5 L84 55.5 Z" fill="none" stroke="currentColor" />
          <path d="M84 47.5 L81 47.5" stroke="currentColor" />
          <path d="M84 52.5 L81 52.5" stroke="currentColor" />
        </g>

        {/* Bottom: Wrench */}
        <g>
          <rect x="47.5" y="78" width="5" height="10" fill="none" stroke="currentColor" />
          <path d="M45.5 88 C 45.5 96, 54.5 96, 54.5 88 L 52 86 L 48 86 Z" fill="none" stroke="currentColor" strokeLinejoin="round" />
          <path d="M45.5 88 C 45.5 84, 54.5 84, 54.5 88" fill="none" stroke="currentColor" strokeLinecap="round" />
        </g>

        {/* Left: Pen Nib */}
        <g>
          <path d="M22 47.5 L8 50 L22 52.5 Z" fill="none" stroke="currentColor" />
          <line x1="16" y1="50" x2="22" y2="50" stroke="currentColor" />
          <circle cx="16" cy="50" r="0.5" fill="currentColor" stroke="none" />
        </g>
      </g>

      {/* Center compass star and dot in accent color */}
      <g className="text-[var(--color-accent)]" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
        <path d="M50 32 L 54 44 L 68 50 L 54 56 L 50 68 L 46 56 L 32 50 L 46 44 Z" />
        <circle cx="50" cy="50" r="6" strokeWidth="1.5" className="text-[var(--color-primary)]" fill="var(--color-bg-sand)" />
        <circle cx="50" cy="50" r="3.5" className="text-[var(--color-accent)]" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
};
