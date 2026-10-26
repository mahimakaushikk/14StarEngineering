import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const isLight = variant === 'light';

  return (
    <div className={`brand-logo-container brand-logo-${size} ${isLight ? 'brand-logo-light' : 'brand-logo-dark'} ${className}`}>
      {/* Precision Industrial Star & 14 Emblem — Deep Forest & Copper Palette */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-svg"
        aria-hidden="true"
      >
        {/* Outer Heavy Industrial Cog/Gear Ring in Copper */}
        <circle cx="50" cy="50" r="46" stroke="#B77A40" strokeWidth="3.5" strokeDasharray="6 3" />
        
        {/* Solid Forest Badge Circle */}
        <circle cx="50" cy="50" r="41" fill="#243A32" stroke={isLight ? '#E9E1D2' : '#243A32'} strokeWidth="2" />
        
        {/* 5-Point Star Geometry in Rich Copper */}
        <path
          d="M50 14L60.5 35.3L84 38.7L67 55.3L71 78.6L50 67.6L29 78.6L33 55.3L16 38.7L39.5 35.3L50 14Z"
          fill="#B77A40"
          opacity="0.3"
        />

        {/* Dynamic Star Outline */}
        <path
          d="M50 16L59.5 35L80.5 38L65.5 53L69 74L50 64L31 74L34.5 53L19.5 38L40.5 35L50 16Z"
          stroke="#B77A40"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* High-Impact "14" Bold Industrial Typography */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#E9E1D2"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="30"
          letterSpacing="-1"
        >
          14
        </text>

        {/* Small Copper Star Accent at Top */}
        <polygon points="50,23 52,28 57,28 53,31 55,36 50,33 45,36 47,31 43,28 48,28" fill="#B77A40" />
      </svg>

      {/* Brand Typography */}
      <div className="brand-logo-text">
        <div className="brand-logo-title-row">
          <span className="brand-logo-title">14 STAR</span>
          <span className="brand-logo-star" aria-hidden="true">★</span>
        </div>
        <span className="brand-logo-sub">ENGINEERING</span>
        <span className="brand-logo-tagline">Tankers & Fabrication</span>
      </div>
    </div>
  );
};
