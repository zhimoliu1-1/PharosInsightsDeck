import React from 'react';
import bannerImg from '../assets/banner.png';
import lighthouseImg from '../assets/lighthouse.jpg';
import mapImg from '../assets/map.png';

/**
 * Exact user-uploaded logo (data URI) for 100% reliable rendering without network or caching issues
 */
export const PHAROS_LOGO_BASE64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhxJREFUeAHtlz0vBEEYx//eGiGWhqim08lKlIpVUq1PYPkAQqmyPoEraSyfgE6h2IJSQq/YU6EQF9cI4czEbLLW3JmXx3HJ/ZLnbm9envnd3czsbA+ABjqAXnQIXVFquqLUdEWp6Qch3nAfwrkR/t6L47MnVG9fQEmDIrZWxxuN8+kvIcqo8vfxlxiORIujqKxNfisPZoZwc/eCq+tnuEIyR5cXxqzqTCARZRMDVnUmkIhW716t6kwgEd3ev29ad3jyCApIFlOVL5gefC6enFr9HZt7t9g9fgAFIj/ZeVTso7NTg7VR/n56Ufdq9TdQQSrKqfHYkNc7PDwQQS26wsOX11c8EhBCdfeIZb5UBmQZVX6SJEdSzCuU5X/7wX8RzQpSYaE8LMhfuo7juo9WeczjcxEJgkJdfi3qlmRbJ2y/pdjJWSlX8Ze7LNX5so/teNYdw5IIU7Qpb09Bu0XX8Z1I0S7SbPcrojHUJIq2SZO2scW4JJKCDOp5DCJZEkm/RT+fSNZZUrAOs/lsI/tjg58GEqQt+qca/WMNj6YVYn5FGoN4GoPonKIitN5nlYUZWs+tIqGGaKiZy4d6USpFxR2FQZ9EQzQxyMeayH75cADzw26mIWr64CQcKlCIikQ6i6ZMAP3tJYA5xd3EaD6WqUBfNIYdTDo6PdeYnDMz/BEM+pJ5MFjicnDW3XJc+ziTwvwXTdFmGMwl87BaEx/ahmYoJydGCAAAAABJRU5ErkJggg==';

/**
 * Exact Pharos brand mark from the user-uploaded logo.png:
 * Official geometric beacon icon + bold geometric "PHAROS" with circular yellow dot.
 */
export const PharosLogo: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'md' }) => {
  const boxSize = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6';
  const textSize = size === 'sm' ? 'text-lg' : 'text-[22px]';

  return (
    <div className="inline-flex items-center gap-2 select-none shrink-0">
      <img
        src={PHAROS_LOGO_BASE64}
        alt="Pharos Logo"
        className={`${boxSize} object-contain rounded-[2px] shrink-0`}
      />
      <span className={`${textSize} font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-none font-display inline-flex items-baseline gap-1`}>
        PHAROS<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C438] shrink-0" aria-hidden="true" />
      </span>
    </div>
  );
};

/**
 * 8-pointed geometric star burst from top-right corner of every Pharos slide
 */
export const PharosStarIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={`${className} shrink-0 text-[#0A0A0A]`}>
    {/* Primary 4 cardinal spikes */}
    <path d="M16 0L17.8 12.5L16 16L14.2 12.5L16 0Z" fill="currentColor" />
    <path d="M16 32L17.8 19.5L16 16L14.2 19.5L16 32Z" fill="currentColor" />
    <path d="M0 16L12.5 14.2L16 16L12.5 17.8L0 16Z" fill="currentColor" />
    <path d="M32 16L19.5 14.2L16 16L19.5 17.8L32 16Z" fill="currentColor" />
    {/* Diagonal 4 spikes */}
    <path d="M4.5 4.5L14.2 12.2L16 16L12.2 14.2L4.5 4.5Z" fill="currentColor" />
    <path d="M27.5 27.5L17.8 19.8L16 16L19.8 17.8L27.5 27.5Z" fill="currentColor" />
    <path d="M27.5 4.5L19.8 14.2L16 16L17.8 12.2L27.5 4.5Z" fill="currentColor" />
    <path d="M4.5 27.5L12.2 17.8L16 16L14.2 19.8L4.5 27.5Z" fill="currentColor" />
    {/* Center intersection */}
    <circle cx="16" cy="16" r="1.6" fill="#FFFFFF" />
  </svg>
);

/**
 * Small CAD/Figma square corner anchor node
 */
export const CadNode: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    className={`w-2.5 h-2.5 bg-white border-[1.25px] border-[#1F1F1F] rounded-[2px] inline-block shrink-0 ${className}`}
  />
);

/**
 * Dashed container with 4 corner square CAD nodes
 */
export const CadDashedBox: React.FC<{
  children: React.ReactNode;
  className?: string;
  padding?: string;
}> = ({ children, className = '', padding = 'p-5' }) => (
  <div className={`relative border-[1.5px] border-dashed border-[#1F1F1F] bg-white/90 ${padding} ${className}`}>
    <span className=" -top-[5.5px] -left-[5.5px] w-2.5 h-2.5 bg-white border-[1.25px] border-[#1F1F1F] rounded-[2px] absolute" />
    <span className=" -top-[5.5px] -right-[5.5px] w-2.5 h-2.5 bg-white border-[1.25px] border-[#1F1F1F] rounded-[2px] absolute" />
    <span className=" -bottom-[5.5px] -left-[5.5px] w-2.5 h-2.5 bg-white border-[1.25px] border-[#1F1F1F] rounded-[2px] absolute" />
    <span className=" -bottom-[5.5px] -right-[5.5px] w-2.5 h-2.5 bg-white border-[1.25px] border-[#1F1F1F] rounded-[2px] absolute" />
    {children}
  </div>
);

/**
 * Dot-Matrix progress graphic with top/bottom CAD dimension lines (Screenshot 4)
 */
export const DotMatrixBox: React.FC<{
  totalDots?: number;
  cols?: number;
  activeDots: number;
  compact?: boolean;
}> = ({ totalDots = 30, cols = 10, activeDots, compact = false }) => {
  const dots = Array.from({ length: totalDots }, (_, i) => i < activeDots);

  return (
    <div className="relative py-2">
      <div className="flex items-center justify-between px-4 mb-1">
        <div className="flex flex-col items-center">
          <CadNode />
          <div className="h-1 border-l border-dashed border-[#262626]" />
        </div>
        <div className="flex-1 border-t border-dashed border-[#262626] -mt-1 mx-0.5" />
        <div className="flex flex-col items-center">
          <CadNode />
          <div className="h-1 border-l border-dashed border-[#262626]" />
        </div>
      </div>

      <div className={`border border-[#262626] rounded-lg bg-white ${compact ? 'px-2.5 py-2' : 'px-4 py-2.5'}`}>
        <div
          className="grid gap-1.5 justify-items-center"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {dots.map((isActive, idx) => (
            <span
              key={idx}
              className={`${compact ? 'w-2 h-2' : 'w-2.5 h-2.5'} rounded-full transition-colors ${
                isActive
                  ? 'bg-[#F5C438] border border-[#F5C438]'
                  : 'bg-transparent border border-[#262626]'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 mt-1">
        <div className="flex flex-col items-center">
          <div className="h-1 border-l border-dashed border-[#262626]" />
          <CadNode />
        </div>
        <div className="flex-1 border-t border-dashed border-[#262626] -mb-1 mx-0.5" />
        <div className="flex flex-col items-center">
          <div className="h-1 border-l border-dashed border-[#262626]" />
          <CadNode />
        </div>
      </div>
    </div>
  );
};

/**
 * Editorial Black + Yellow Line Icons
 */
export const PharosIcon: React.FC<{
  type:
    | 'research'
    | 'magnifier'
    | 'cube'
    | 'chart'
    | 'campaign'
    | 'community'
    | 'ecosystem'
    | 'brand'
    | 'content'
    | 'globe'
    | 'ai'
    | 'contract'
    | 'payment'
    | 'exchange'
    | 'treasury'
    | 'network'
    | 'shield';
  className?: string;
}> = ({ type, className = 'w-9 h-9' }) => {
  switch (type) {
    case 'research':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="8" width="26" height="20" rx="2" stroke="#141414" strokeWidth="1.5" fill="#FFFFFF" />
          <path d="M12 28V33L17 28" stroke="#141414" strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="11" y="18" width="4" height="6" fill="#F5C438" stroke="#141414" strokeWidth="1.2" />
          <rect x="17" y="14" width="4" height="10" fill="#F5C438" stroke="#141414" strokeWidth="1.2" />
          <rect x="23" y="16" width="4" height="8" fill="#F5C438" stroke="#141414" strokeWidth="1.2" />
          <path d="M22 24H40C41.1 24 42 24.9 42 26V36C42 37.1 41.1 38 40 38H35L30 43V38H22C20.9 38 20 37.1 20 36V28" stroke="#141414" strokeWidth="1.5" fill="#FFFFFF" />
          <circle cx="31" cy="31" r="5" fill="#F5C438" stroke="#141414" strokeWidth="1.3" />
          <path d="M29 31L30.5 32.5L33.5 29.5" stroke="#141414" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'magnifier':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="21" r="13" stroke="#141414" strokeWidth="1.5" fill="#FFFFFF" />
          <circle cx="24" cy="21" r="10" stroke="#141414" strokeWidth="1.2" />
          <path d="M16 21C18 17 21 15.5 24 15.5C27 15.5 30 17 32 21C30 25 27 26.5 24 26.5C21 26.5 18 25 16 21Z" fill="#F5C438" stroke="#141414" strokeWidth="1.3" />
          <circle cx="24" cy="21" r="2.5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.3" />
          <path d="M14.5 30.5L7 38L10 41L17.5 33.5" stroke="#141414" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'cube':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <path d="M24 22L38 28V40L24 46L10 40V28L24 22Z" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M24 22V46" stroke="#141414" strokeWidth="1.5" />
          <path d="M10 28L24 34L38 28" stroke="#141414" strokeWidth="1.5" />
          <path d="M10 28L6 23L20 17L24 22" fill="#FFFFFF" stroke="#141414" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M38 28L42 23L28 17L24 22" fill="#FFFFFF" stroke="#141414" strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="24" cy="14" r="6" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
          <path d="M24 4V6M15 9L17 10.5M33 9L31 10.5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 12V16" stroke="#141414" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'campaign':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="16" stroke="#141414" strokeWidth="1.5" fill="#FFFFFF" />
          <circle cx="24" cy="24" r="10" stroke="#141414" strokeWidth="1.4" strokeDasharray="3 3" />
          <circle cx="24" cy="24" r="4.5" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
          <path d="M35 13L26 22" stroke="#141414" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M33 9L39 9L39 15" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'community':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="13" r="6" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
          <circle cx="12" cy="35" r="5.5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <circle cx="36" cy="35" r="5.5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <path d="M24 19V25M24 25L14 30M24 25L34 30" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="25" r="2" fill="#141414" />
        </svg>
      );
    case 'ecosystem':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="8" y="8" width="13" height="13" rx="2" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
          <rect x="27" y="8" width="13" height="13" rx="2" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <rect x="8" y="27" width="13" height="13" rx="2" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <rect x="27" y="27" width="13" height="13" rx="2" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
          <path d="M21 14.5H27M14.5 21V27M33.5 21V27M21 33.5H27" stroke="#141414" strokeWidth="1.5" />
        </svg>
      );
    case 'brand':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="7" y="10" width="34" height="28" rx="2" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <line x1="7" y1="17" x2="41" y2="17" stroke="#141414" strokeWidth="1.5" />
          <circle cx="12" cy="13.5" r="1.5" fill="#F5C438" />
          <circle cx="16.5" cy="13.5" r="1.5" fill="#141414" />
          <rect x="12" y="22" width="11" height="11" fill="#F5C438" stroke="#141414" strokeWidth="1.3" />
          <line x1="27" y1="24" x2="36" y2="24" stroke="#141414" strokeWidth="1.5" />
          <line x1="27" y1="28.5" x2="36" y2="28.5" stroke="#141414" strokeWidth="1.5" />
          <line x1="27" y1="33" x2="33" y2="33" stroke="#141414" strokeWidth="1.5" />
        </svg>
      );
    case 'content':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="9" y="6" width="24" height="34" rx="2" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <line x1="14" y1="14" x2="28" y2="14" stroke="#141414" strokeWidth="1.5" />
          <line x1="14" y1="20" x2="28" y2="20" stroke="#141414" strokeWidth="1.5" />
          <line x1="14" y1="26" x2="23" y2="26" stroke="#141414" strokeWidth="1.5" />
          <path d="M32 22L40 25V32C40 36.5 36.5 39.8 32 41C27.5 39.8 24 36.5 24 32V25L32 22Z" fill="#F5C438" stroke="#141414" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M29 31.5L31.2 33.7L35.5 29.5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="13" y="13" width="22" height="22" rx="3" fill="#FFFFFF" stroke="#141414" strokeWidth="1.6" />
          <rect x="18" y="18" width="12" height="12" rx="1.5" fill="#F5C438" stroke="#141414" strokeWidth="1.4" />
          <path d="M19 7V13M29 7V13M19 35V41M29 35V41M7 19H13M7 29H13M35 19H41M35 29H41" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'contract':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polygon points="24,6 39,14.5 39,33.5 24,42 9,33.5 9,14.5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="24,14 32,18.5 32,29.5 24,34 16,29.5 16,18.5" fill="#F5C438" stroke="#141414" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M24 6V14M39 14.5L32 18.5M9 14.5L16 18.5M24 34V42" stroke="#141414" strokeWidth="1.4" />
        </svg>
      );
    case 'payment':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="11" width="36" height="26" rx="3" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <line x1="6" y1="19" x2="42" y2="19" stroke="#141414" strokeWidth="1.5" />
          <rect x="11" y="24" width="10" height="7" rx="1" fill="#F5C438" stroke="#141414" strokeWidth="1.3" />
          <circle cx="33" cy="27.5" r="3.5" fill="#F5C438" stroke="#141414" strokeWidth="1.3" />
          <circle cx="28" cy="27.5" r="3.5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.3" />
        </svg>
      );
    case 'exchange':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="7" y="9" width="34" height="30" rx="3" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <path d="M14 20H32M32 20L27 15M32 20L27 25" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 28H16M16 28L21 23M16 28L21 33" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14" cy="20" r="2.5" fill="#F5C438" />
          <circle cx="34" cy="28" r="2.5" fill="#F5C438" />
        </svg>
      );
    case 'treasury':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="8" y="12" width="32" height="26" rx="3" fill="#FFFFFF" stroke="#141414" strokeWidth="1.5" />
          <circle cx="24" cy="25" r="8" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
          <circle cx="24" cy="25" r="3.5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.3" />
          <line x1="8" y1="18" x2="40" y2="18" stroke="#141414" strokeWidth="1.5" />
          <line x1="24" y1="12" x2="24" y2="17" stroke="#141414" strokeWidth="1.5" />
        </svg>
      );
    case 'network':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="14" cy="16" r="5" fill="#F5C438" stroke="#141414" strokeWidth="1.4" />
          <circle cx="34" cy="16" r="5" fill="#FFFFFF" stroke="#141414" strokeWidth="1.4" />
          <circle cx="24" cy="34" r="5.5" fill="#F5C438" stroke="#141414" strokeWidth="1.4" />
          <line x1="18" y1="18" x2="30" y2="18" stroke="#141414" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="16" y1="20" x2="22" y2="30" stroke="#141414" strokeWidth="1.5" />
          <line x1="32" y1="20" x2="26" y2="30" stroke="#141414" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="16" stroke="#141414" strokeWidth="1.5" fill="#FFFFFF" />
          <circle cx="24" cy="24" r="6" fill="#F5C438" stroke="#141414" strokeWidth="1.5" />
        </svg>
      );
  }
};

/**
 * Global Resource Network World Map (Using user-uploaded map.png)
 */
export const DiagonalWorldMap: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full flex items-center justify-center select-none overflow-hidden my-1 ${className}`}>
    <img
      src={mapImg}
      alt="Pharos Global Resource Network Map"
      className="w-full h-auto max-h-[220px] object-contain rounded-md"
      loading="eager"
    />
  </div>
);

export const LIGHTHOUSE_VARIANTS = [
  {
    id: 'user-banner',
    name: '原版灯塔摄影 (User Banner)',
    desc: '用户上传的经典黑白灯塔摄影原图',
    src: bannerImg,
  },
  {
    id: 'kalfshamar-wide',
    name: 'Kálfshamarsvík 全景',
    desc: '冰岛玄武岩六棱柱基座・立式棱翼 Art Deco 混凝土塔',
    src: '/lighthouse-kalfshamar-wide.jpg',
  },
  {
    id: 'kalfshamar',
    name: 'Kálfshamarsvík 特写',
    desc: '冰岛高耸六角棱翼・极简白色混凝土塔柱',
    src: '/lighthouse-kalfshamar.jpg',
  },
  {
    id: 'knarraros',
    name: 'Knarrarós 阶梯翼',
    desc: '冰岛国宝级建筑师设计・阶梯立柱现代主义灯塔',
    src: '/lighthouse-knarraros.jpg',
  },
  {
    id: 'malarrif',
    name: 'Malarrif 鳍翼塔',
    desc: '斯奈山半岛・四面火箭形扶壁结构灯塔',
    src: '/lighthouse-malarrif.jpg',
  },
  {
    id: 'grotta',
    name: 'Grótta 海岬暗礁',
    desc: '雷克雅未克海岬・潮汐暗礁写实摄影',
    src: '/lighthouse-grotta.jpg',
  },
];

/**
 * Authentic architectural monochrome lighthouse photography for Hero slide (Screenshot 1)
 * Defaults directly to the user-uploaded banner.png.
 */
export const ArchitecturalLighthouseHero: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const current = LIGHTHOUSE_VARIANTS[0];

  return (
    <div className={`relative w-full max-w-[560px] flex flex-col gap-2 ${className}`}>
      <div className="relative w-full aspect-[528/325] bg-[#0E0E0E] overflow-hidden rounded-sm shadow-md border border-[#141414]/15">
        {/* Realistic Monochrome Lighthouse Photograph / User Banner */}
        <img
          src={current.src}
          alt="Pharos Architectural Lighthouse"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />

        {/* Subtle Architectural Scrim & CAD Crosshairs Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

          {/* CAD Registration Corner Marks */}
          <svg
            viewBox="0 0 640 440"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
          >
            <g stroke="#FFFFFF" strokeWidth="1" opacity="0.65">
              <line x1="16" y1="20" x2="28" y2="20" />
              <line x1="22" y1="14" x2="22" y2="26" />
              <line x1="612" y1="20" x2="624" y2="20" />
              <line x1="618" y1="14" x2="618" y2="26" />
              <line x1="16" y1="420" x2="28" y2="420" />
              <line x1="22" y1="414" x2="22" y2="426" />
              <line x1="612" y1="420" x2="624" y2="420" />
              <line x1="618" y1="414" x2="618" y2="426" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

/**
 * Slide Frame Chrome with NO height clipping / zero bottom truncation!
 * Ensures content, deliverable strips, and footers are always 100% visible.
 */
export const SlideFrame: React.FC<{
  id: string;
  pageNumber: number;
  totalPages?: number;
  categoryLabel?: string;
  children: React.ReactNode;
}> = ({ id, pageNumber, totalPages = 8, categoryLabel, children }) => {
  return (
    <section
      id={id}
      className="pharos-slide-page relative w-full max-w-[1340px] mx-auto bg-white border border-[#E0E0DC] shadow-[0_10px_35px_-12px_rgba(0,0,0,0.07)] flex flex-col justify-between min-h-[640px] overflow-visible rounded-sm"
    >
      {/* Subtle Architectural Square Grid on lower canvas */}
      <div className="pharos-slide-grid absolute inset-0 pointer-events-none z-0" />

      {/* Top Slide Header Bar */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-6 sm:px-12 pt-6 pb-2">
        <PharosLogo />
        <div className="flex-1 h-[1px] bg-[#DCDCDC]" />
        <div className="flex items-center gap-3 shrink-0">
          {categoryLabel && (
            <span className="text-[19px] sm:text-[21px] font-bold tracking-[-0.02em] text-[#0A0A0A] font-display inline-flex items-baseline gap-1">
              {categoryLabel}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C438] shrink-0" aria-hidden="true" />
            </span>
          )}
          <PharosStarIcon className="w-6 h-6" />
        </div>
      </div>

      {/* Main Slide Body with comfortable breathing room */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 py-3 sm:py-4">
        {children}
      </div>

      {/* Bottom Slide Footer Bar: Always fully visible without clipping */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 sm:px-12 pb-5 pt-3 text-[12.5px] text-[#141414] border-t border-[#F0F0EE]">
        <div className="font-mono text-xs font-semibold text-[#737373] tabular-nums">
          {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-8 ml-auto font-medium tracking-[-0.01em]">
          <a
            href="https://x.com/PharosInsights"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#525252] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4l16 16M20 4L4 20" />
            </svg>
            <span>@PharosInsights</span>
          </a>

          <a
            href="https://pharosinsights.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#525252] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
            </svg>
            <span>pharosinsights.com</span>
          </a>

          <a
            href="mailto:info@pharosinsights.com"
            className="inline-flex items-center gap-1.5 hover:text-[#525252] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span>info@pharosinsights.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
