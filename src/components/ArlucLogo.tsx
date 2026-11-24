import React from 'react';

interface ArlucLogoProps {
  compact?: boolean;
}

export default function ArlucLogo({ compact = false }: ArlucLogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5 group select-none">
      {/* Vector Isotype inspired by ARLUC's A + growth bars + upward arrow */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0b291c] to-[#05120c] border border-emerald-400/35 flex items-center justify-center shadow-[0_0_22px_-5px_rgba(16,185,129,0.55)] group-hover:border-emerald-300/60 group-hover:shadow-[0_0_26px_-4px_rgba(52,211,153,0.7)] transition-all duration-300">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arlucArrowGrad" x1="12" y1="48" x2="50" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="60%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>
          </defs>
          {/* Subtle rising data bars */}
          <rect x="8" y="34" width="4.5" height="11" rx="1.5" fill="#10b981" fillOpacity="0.65" />
          <rect x="14.5" y="27" width="4.5" height="18" rx="1.5" fill="#34d399" fillOpacity="0.85" />
          {/* Precision gear accent on right */}
          <circle cx="45" cy="31" r="6" stroke="#34d399" strokeOpacity="0.45" strokeWidth="2.5" strokeDasharray="3 3" />
          {/* Bold geometric A */}
          <path
            d="M21.5 49L32.2 15.5H38.4L49 49H42.2L40 41.5H30.6L28.4 49H21.5ZM32.3 36H38.3L35.3 25.2L32.3 36Z"
            fill="#ffffff"
          />
          {/* Dynamic growth arrow */}
          <path
            d="M11 47.5C21 47.5 29 41.5 48.5 20.5"
            stroke="url(#arlucArrowGrad)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <path
            d="M41.5 19.5H50V28"
            stroke="#a3e635"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {!compact && (
        <div className="leading-none">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-white text-base tracking-[0.08em] group-hover:text-emerald-200 transition-colors">
              ARLUC
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
          </div>
          <span className="block text-[9px] font-mono uppercase tracking-[0.16em] text-emerald-300/80 mt-0.5">
            Soluciones Tech
          </span>
        </div>
      )}
    </div>
  );
}
