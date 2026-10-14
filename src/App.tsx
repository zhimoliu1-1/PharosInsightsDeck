import React, { useState, useEffect, useRef } from 'react';
import { PHAROS_LOGO_BASE64 } from './components/PharosPrimitives';
import {
  Slide1Hero,
  Slide2About,
  Slide3Narrative,
  Slide4Growth,
  Slide5Brand,
  Slide6Tech,
  Slide7AgenticPayment,
  Slide8TGE,
} from './components/DeckSlides';

const SLIDE_META = [
  { id: 'slide-1', index: 1, shortLabel: '01. 首页', title: 'Hero 页' },
  { id: 'slide-2', index: 2, shortLabel: '02. 关于 Pharos', title: '不止建议，更参与执行' },
  { id: 'slide-3', index: 3, shortLabel: '03. 叙事与产品', title: '项目叙事与产品原型设计' },
  { id: 'slide-4', index: 4, shortLabel: '04. 运营与增长', title: '运营与增长' },
  { id: 'slide-5', index: 5, shortLabel: '05. 品牌与市场', title: '品牌与市场' },
  { id: 'slide-6', index: 6, shortLabel: '06. 技术支持', title: 'AI & Blockchain Native' },
  { id: 'slide-7', index: 7, shortLabel: '07. Agentic Payment', title: '实践与生态资源' },
  { id: 'slide-8', index: 8, shortLabel: '08. TGE 支持', title: 'TGE 与金融运作支持' },
];

export default function App() {
  const [viewMode, setViewMode] = useState<'scroll' | 'present'>('scroll');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const deckContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'present') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, SLIDE_META.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        setViewMode('scroll');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  const handleJumpToSlide = (idx: number, id: string) => {
    setCurrentSlide(idx);
    if (viewMode === 'scroll') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  /**
   * Export fully offline, portable single-file HTML
   */
  const handleDownloadStandaloneHtml = async () => {
    if (!deckContainerRef.current || isExporting) return;
    setIsExporting(true);
    try {
      const clone = deckContainerRef.current.cloneNode(true) as HTMLElement;

      let cssText = '';
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          for (const rule of Array.from(sheet.cssRules)) {
            cssText += rule.cssText + '\n';
          }
        } catch {
          // ignore external sheets
        }
      }

      const fullHtml = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pharos Web3 & AI Incubator — Capability Deck</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
${cssText}
  </style>
</head>
<body class="bg-[#F3F3F1] text-[#0A0A0A] antialiased py-8 px-4 sm:px-8">
  <div class="max-w-[1340px] mx-auto space-y-10 pb-16">
    ${clone.innerHTML}
  </div>
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Pharos_Capability_Deck.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  const slides = [
    <Slide1Hero key="s1" />,
    <Slide2About key="s2" />,
    <Slide3Narrative key="s3" />,
    <Slide4Growth key="s4" />,
    <Slide5Brand key="s5" />,
    <Slide6Tech key="s6" />,
    <Slide7AgenticPayment key="s7" />,
    <Slide8TGE key="s8" />,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F3F1] text-[#0A0A0A]">
      {/* Top Bar Contract (Hidden when printing to PDF) */}
      <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#E0E0DC] px-6 py-3.5 flex items-center justify-between gap-6 shadow-xs">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#slide-1"
          onClick={(e) => {
            e.preventDefault();
            handleJumpToSlide(0, 'slide-1');
          }}
          className="text-[17px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] whitespace-nowrap shrink-0 font-display inline-flex items-center gap-2.5"
        >
          <img src={PHAROS_LOGO_BASE64} alt="Pharos Logo" className="w-5 h-5 object-contain rounded-[2px]" />
          <span>
            PHAROS INSIGHTS<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C438] ml-1 shrink-0" aria-hidden="true" />
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-[13px] font-semibold text-[#525252]">
          {SLIDE_META.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleJumpToSlide(i, s.id)}
              className={`hover:text-[#0A0A0A] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentSlide === i ? 'text-[#0A0A0A] font-bold' : ''
              }`}
            >
              {s.shortLabel}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleDownloadStandaloneHtml}
            disabled={isExporting}
            className="px-3.5 py-1.5 text-xs font-bold text-[#0A0A0A] bg-[#F5C438] border border-[#0A0A0A] rounded-lg hover:bg-[#eab524] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isExporting ? '正在生成...' : '下载单文件 HTML'}
          </button>
        </div>
      </header>

      {/* Secondary Toolbar (View Mode Switcher & PDF Print) */}
      <div className="no-print max-w-[1340px] w-full mx-auto px-4 sm:px-6 pt-4 pb-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-[#525252]">
          <span className="font-bold text-[#0A0A0A]">Pharos 商业 Deck</span>
          <span>·</span>
          <span>Web3 &amp; AI 全周期赋能（已优化底部留白，消除截断）</span>
          <span>·</span>
          <span className="font-mono tabular-nums">共 8 页</span>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 p-1 bg-[#E5E5E0] rounded-lg">
            <button
              onClick={() => setViewMode('scroll')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'scroll'
                  ? 'bg-white text-[#0A0A0A] shadow-xs'
                  : 'text-[#525252] hover:text-[#0A0A0A]'
              }`}
            >
              全览长卷模式
            </button>
            <button
              onClick={() => setViewMode('present')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'present'
                  ? 'bg-white text-[#0A0A0A] shadow-xs'
                  : 'text-[#525252] hover:text-[#0A0A0A]'
              }`}
            >
              单页演示模式
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 text-xs font-semibold text-[#141414] bg-white border border-[#D0D0CC] rounded-lg hover:border-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            打印 / 导出 PDF
          </button>
        </div>
      </div>

      {/* Main Deck Canvas */}
      <main className="flex-1 w-full px-3 sm:px-6 py-4 pb-16">
        {viewMode === 'scroll' ? (
          <div ref={deckContainerRef} className="max-w-[1340px] mx-auto space-y-8 sm:space-y-10">
            {slides}
          </div>
        ) : (
          <div className="max-w-[1340px] mx-auto flex flex-col items-center">
            <div className="w-full">{slides[currentSlide]}</div>

            {/* Pager Controls */}
            <div className="no-print mt-5 flex items-center justify-between w-full max-w-lg bg-white border border-[#D0D0CC] rounded-xl px-4 py-2.5 shadow-xs">
              <button
                onClick={() => setCurrentSlide((p) => Math.max(0, p - 1))}
                disabled={currentSlide === 0}
                className="px-3 py-1 text-xs font-bold text-[#0A0A0A] disabled:opacity-30 hover:bg-[#F5F5F4] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                ← 上一页
              </button>

              <div className="flex items-center gap-1.5">
                {SLIDE_META.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    title={s.title}
                    className={`w-6 h-6 rounded-md text-xs font-mono font-bold transition-colors cursor-pointer ${
                      idx === currentSlide
                        ? 'bg-[#F5C438] text-[#0A0A0A] border border-[#0A0A0A]'
                        : 'text-[#525252] hover:bg-[#F5F5F4]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((p) => Math.min(SLIDE_META.length - 1, p + 1))}
                disabled={currentSlide === SLIDE_META.length - 1}
                className="px-3 py-1 text-xs font-bold text-[#0A0A0A] disabled:opacity-30 hover:bg-[#F5F5F4] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                下一页 →
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
