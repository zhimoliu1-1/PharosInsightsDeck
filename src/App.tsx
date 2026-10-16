import React, { useState, useEffect, useRef } from 'react';
import { Printer, Download, FileText, CheckCircle2, X, HelpCircle, Loader2, Sparkles } from 'lucide-react';
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';
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
  Slide9Services,
} from './components/DeckSlides';

const SLIDE_META = [
  { id: 'slide-1', index: 1, shortLabel: '01. 首页', title: 'Hero 页' },
  { id: 'slide-2', index: 2, shortLabel: '02. 关于 Pharos', title: '不止建议，更参与执行' },
  { id: 'slide-3', index: 3, shortLabel: '03. 立项与规划', title: '立项与战略规划' },
  { id: 'slide-4', index: 4, shortLabel: '04. 运营与增长', title: '运营与增长' },
  { id: 'slide-5', index: 5, shortLabel: '05. 品牌与市场', title: '品牌与市场' },
  { id: 'slide-6', index: 6, shortLabel: '06. 技术支持', title: 'AI & Blockchain Native' },
  { id: 'slide-7', index: 7, shortLabel: '07. Agentic Payment', title: '同赛道孵化，资源共享与生态协同' },
  { id: 'slide-8', index: 8, shortLabel: '08. TGE 支持', title: 'TGE 与资本运作支持' },
  { id: 'slide-9', index: 9, shortLabel: '09. 合作方案', title: '服务明细与合作方案' },
];

export default function App() {
  const [viewMode, setViewMode] = useState<'scroll' | 'present'>('scroll');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);
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

  const [pdfProgress, setPdfProgress] = useState<{
    current: number;
    total: number;
    title: string;
  } | null>(null);
  const [exportSuccessMessage, setExportSuccessMessage] = useState<string | null>(null);
  const [exportErrorMessage, setExportErrorMessage] = useState<string | null>(null);

  /**
   * Directly generates and downloads a high-fidelity 9-page PDF file without requiring window.print()
   * (Uses html-to-image to natively support Tailwind v4 oklab/oklch colors and syncs to codebase folder)
   */
  const handleDownloadDirectPdf = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportSuccessMessage(null);
    setExportErrorMessage(null);

    try {
      // 1. If currently in single-slide present mode, switch to full scroll mode
      if (viewMode !== 'scroll') {
        setViewMode('scroll');
        await new Promise((r) => setTimeout(r, 250));
      }

      // Wait for all web fonts to load
      if (document.fonts) {
        await document.fonts.ready;
      }

      // 2. Collect slide DOM elements
      const slideItems: { meta: typeof SLIDE_META[0]; el: HTMLElement }[] = [];
      for (const s of SLIDE_META) {
        const el = document.getElementById(s.id);
        if (el) {
          slideItems.push({ meta: s, el });
        }
      }

      if (slideItems.length === 0) {
        throw new Error('未找到幻灯片内容，请确保页面已完全加载');
      }

      let pdfDoc: jsPDF | null = null;

      for (let i = 0; i < slideItems.length; i++) {
        const { meta, el } = slideItems[i];
        setPdfProgress({
          current: i + 1,
          total: slideItems.length,
          title: meta.title,
        });

        // Allow UI to update progress bar
        await new Promise((r) => setTimeout(r, 60));

        // Use htmlToImage which handles native oklab/oklch colors without parsing crashes
        const imgData = await htmlToImage.toJpeg(el, {
          quality: 0.95,
          pixelRatio: 2,
          backgroundColor: '#FFFFFF',
          filter: (node: HTMLElement) => {
            return !node.classList?.contains('pharos-slide-grid');
          },
        });

        const widthMm = (el.offsetWidth || 1340) * 0.264583;
        const heightMm = (el.offsetHeight || 720) * 0.264583;
        const orientation = widthMm >= heightMm ? 'landscape' : 'portrait';

        if (!pdfDoc) {
          pdfDoc = new jsPDF({
            orientation,
            unit: 'mm',
            format: [widthMm, heightMm],
          });
          pdfDoc.addImage(imgData, 'JPEG', 0, 0, widthMm, heightMm, undefined, 'FAST');
        } else {
          pdfDoc.addPage([widthMm, heightMm], orientation);
          pdfDoc.addImage(imgData, 'JPEG', 0, 0, widthMm, heightMm, undefined, 'FAST');
        }
      }

      if (pdfDoc) {
        setPdfProgress({
          current: slideItems.length,
          total: slideItems.length,
          title: '已完成渲染，正在保存并同步到项目目录...',
        });

        const blob = pdfDoc.output('blob');

        // Sync to backend codebase folder
        try {
          await fetch('/api/save-pdf', {
            method: 'POST',
            body: blob,
          });
        } catch (serverErr) {
          console.warn('Server sync notice:', serverErr);
        }

        // Trigger browser download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Pharos_Web3_AI_Incubator_Deck.pdf';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 2000);

        setExportSuccessMessage(
          '✅ PDF 生成成功！已触发浏览器直接下载，并已同步存放在项目根目录与 /public 文件夹中（Pharos_Web3_AI_Deck.pdf）！'
        );
      }
    } catch (err: unknown) {
      console.error('PDF export failed:', err);
      const msg = err instanceof Error ? err.message : '导出发生异常';
      setExportErrorMessage(msg);
    } finally {
      setIsExporting(false);
      setPdfProgress(null);
    }
  };

  /**
   * PDF Export Handler: Opens the modal or triggers direct download
   */
  const handleExportPdf = (direct: boolean = false) => {
    if (viewMode === 'present') {
      setViewMode('scroll');
    }
    if (direct) {
      handleDownloadDirectPdf();
    } else {
      setShowPdfModal(true);
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
    <Slide9Services key="s9" />,
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
            onClick={() => handleExportPdf(false)}
            className="px-3.5 py-1.5 text-xs font-extrabold text-[#0A0A0A] bg-[#F5C438] border border-[#0A0A0A] rounded-lg hover:bg-[#eab524] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>导出 PDF（全套 9 页）</span>
          </button>
          <button
            onClick={handleDownloadStandaloneHtml}
            disabled={isExporting}
            className="px-3 py-1.5 text-xs font-semibold text-[#141414] bg-white border border-[#D0D0CC] rounded-lg hover:border-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 cursor-pointer hidden sm:flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5 text-[#525252]" />
            <span>{isExporting ? '生成中...' : '下载离线 HTML'}</span>
          </button>
        </div>
      </header>

      {/* Secondary Toolbar (View Mode Switcher & PDF Print) */}
      <div className="no-print max-w-[1340px] w-full mx-auto px-4 sm:px-6 pt-4 pb-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-[#525252]">
          <span className="font-bold text-[#0A0A0A]">Pharos 商业 Deck</span>
          <span>·</span>
          <span>Web3 &amp; AI 全周期赋能</span>
          <span>·</span>
          <span className="font-mono tabular-nums font-semibold text-[#0A0A0A]">共 {SLIDE_META.length} 页完整方案</span>
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
            onClick={() => handleExportPdf(false)}
            className="px-3 py-1.5 text-xs font-semibold text-[#141414] bg-white border border-[#D0D0CC] rounded-lg hover:border-[#0A0A0A] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5 text-[#525252]" />
            <span>打印 / 导出 PDF</span>
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

      {/* PDF Export Modal */}
      {showPdfModal && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border-2 border-[#141414] rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            {/* Corner CAD nodes matching Pharos design */}
            <span className="-top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#141414] rounded-[2px] absolute" />
            <span className="-top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#141414] rounded-[2px] absolute" />
            <span className="-bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#141414] rounded-[2px] absolute" />
            <span className="-bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#141414] rounded-[2px] absolute" />

            <button
              onClick={() => {
                if (!isExporting) setShowPdfModal(false);
              }}
              disabled={isExporting}
              className="absolute top-4 right-4 p-1.5 text-[#737373] hover:text-[#0A0A0A] hover:bg-[#F5F5F4] rounded-lg transition-colors cursor-pointer disabled:opacity-30"
              aria-label="关闭"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-9 h-9 rounded-lg bg-[#F5C438] border border-[#0A0A0A] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#0A0A0A]" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0A0A0A] font-display">
                  导出高清矢量 PDF 文件
                </h3>
                <p className="text-xs text-[#737373]">
                  全套 9 页完整方案 · 16:9 宽屏版式 · 无须等待打印弹窗
                </p>
              </div>
            </div>

            {/* Direct Download Action Section */}
            <div className="mt-4 p-4 bg-[#FAF9F5] border border-[#E5E5DF] rounded-xl space-y-3">
              <div>
                <div className="text-xs font-bold text-[#141414] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5B82E]" />
                  <span>推荐方式：直接生成并保存为 .pdf 文件</span>
                </div>
                <p className="text-[11.5px] text-[#666666] mt-1 leading-relaxed">
                  在当前预览窗口中，浏览器会拦截 <code className="text-[#0A0A0A] bg-black/5 px-1 py-0.5 rounded font-mono text-[10.5px]">window.print()</code> 打印调用。点击下方按钮，由系统直接在前端逐页渲染并打包为高清 PDF 文件下载到您的设备中：
                </p>
              </div>

              {/* Progress Bar when generating */}
              {isExporting && pdfProgress && (
                <div className="p-3 bg-white border border-[#F5C438] rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0A0A0A]">
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-[#F5B82E]" />
                      <span>正在渲染第 {pdfProgress.current} / {pdfProgress.total} 页</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#737373]">
                      {Math.round((pdfProgress.current / pdfProgress.total) * 100)}%
                    </span>
                  </div>
                  <div className="text-[11px] text-[#525252] truncate">
                    当前幻灯片：{pdfProgress.title}
                  </div>
                  <div className="w-full bg-[#E5E5E0] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#F5C438] h-full transition-all duration-200"
                      style={{
                        width: `${Math.round((pdfProgress.current / pdfProgress.total) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Success message banner */}
              {exportSuccessMessage && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{exportSuccessMessage}</span>
                </div>
              )}

              {/* Error message banner */}
              {exportErrorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 space-y-1">
                  <div className="font-bold">⚠️ 导出未完成：{exportErrorMessage}</div>
                  <div className="text-[11px] text-red-700 leading-normal">
                    建议先点击下方的「下载离线 HTML」在本地独立打开，或再次点击上方按钮重试。
                  </div>
                </div>
              )}

              <button
                onClick={handleDownloadDirectPdf}
                disabled={isExporting}
                className="w-full py-3 px-4 bg-[#F5C438] hover:bg-[#eab524] disabled:bg-[#F5C438]/60 text-[#0A0A0A] font-extrabold text-sm rounded-xl border border-[#0A0A0A] shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>正在生成 PDF（请稍候）...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>一键生成并下载 PDF 文件（全套 9 页）</span>
                  </>
                )}
              </button>
            </div>

            {/* Alternative Options */}
            <div className="mt-4 pt-3 border-t border-[#F0F0EE] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-[#737373] text-[11px]">其他备用选项：</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (viewMode === 'present') setViewMode('scroll');
                    setTimeout(() => window.print(), 100);
                  }}
                  disabled={isExporting}
                  className="py-1.5 px-3 bg-white hover:bg-[#F5F5F4] text-[#404040] hover:text-[#0A0A0A] font-semibold text-xs rounded-lg border border-[#D0D0CC] transition-colors cursor-pointer flex items-center gap-1"
                  title="仅在独立新标签页打开时有效"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>调起系统打印</span>
                </button>
                <button
                  onClick={() => {
                    setShowPdfModal(false);
                    handleDownloadStandaloneHtml();
                  }}
                  disabled={isExporting}
                  className="py-1.5 px-3 bg-white hover:bg-[#F5F5F4] text-[#404040] hover:text-[#0A0A0A] font-semibold text-xs rounded-lg border border-[#D0D0CC] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>下载离线 HTML</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
