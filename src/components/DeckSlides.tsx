import React from 'react';
import {
  SlideFrame,
  CadDashedBox,
  CadNode,
  DotMatrixBox,
  PharosIcon,
  DiagonalWorldMap,
  ArchitecturalLighthouseHero,
} from './PharosPrimitives';

/**
 * Shared Deliverable Footer Strip styled with Pharos CAD dashed box & corner nodes
 * Compact vertical footprint so it NEVER gets cut off or truncated.
 */
const DeliverableStrip: React.FC<{ items: string[]; note?: string }> = ({ items, note }) => (
  <div className="mt-2.5 shrink-0 space-y-1">
    <CadDashedBox padding="px-4 py-2" className="bg-white/95 shrink-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#F5C438] border border-[#0A0A0A] inline-block shrink-0" />
          <span className="text-[13px] font-extrabold tracking-tight text-[#0A0A0A] inline-flex items-baseline">
            核心交付<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C438] ml-1 shrink-0" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] font-semibold text-[#171717]">
          {items.map((item, idx) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {idx < items.length - 1 && (
                <span className="text-[#F5C438] font-bold select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </CadDashedBox>
    {note && (
      <div className="flex items-center justify-between px-1 text-[11px] text-[#737373] tracking-tight">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C438] border border-[#737373] inline-block shrink-0" />
          <span>{note}</span>
        </span>
        <span className="font-mono text-[9.5px] text-[#A3A3A3] uppercase hidden sm:inline">SCOPE &amp; COMPLIANCE NOTICE</span>
      </div>
    )}
  </div>
);

/**
 * PAGE 1: Hero Slide (Matches Screenshot 1 directly)
 */
export const Slide1Hero: React.FC = () => (
  <SlideFrame id="slide-1" pageNumber={1}>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-2 sm:py-4">
      {/* Left Typographic Anchor */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
        <div>
          <h1 className="text-[56px] sm:text-[76px] lg:text-[88px] font-extrabold tracking-[-0.04em] leading-[0.98] text-[#0A0A0A] font-display inline-flex items-baseline">
            Pharos<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px] rounded-full bg-[#F5C438] ml-2 sm:ml-3 shrink-0" aria-hidden="true" />
          </h1>
        </div>

        <div className="space-y-2 pt-0.5">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#141414] tracking-[-0.01em] leading-snug text-balance">
            从早期构想到市场增长，赋能 Web3 &amp; AI 创新
          </h2>
          <p className="text-[15.5px] text-[#404040] font-medium tracking-tight">
            项目孵化与全生命周期赋能服务
          </p>
        </div>
      </div>

      {/* Right Monochrome Lighthouse Photography (Screenshot 1) */}
      <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
        <ArchitecturalLighthouseHero />
      </div>
    </div>
  </SlideFrame>
);

/**
 * PAGE 2: About Pharos (Screenshot 2 Dashed Metric Grid)
 */
export const Slide2About: React.FC = () => {
  const metrics = [
    {
      value: '6 年以上',
      enNum: '6+ YRS',
      label: '行业经验',
      desc: '跨越多个加密与科技周期，沉淀成熟的孵化与资本市场方法论',
    },
    {
      value: '30+',
      enNum: 'PROJECTS',
      label: '孵化项目',
      desc: '覆盖 Web3 基础设施、AI、Payment、DeFi等核心赛道，支持项目从0到1至全生命周期发展',
    },
    {
      value: '500+',
      enNum: 'PARTNERS',
      label: '生态合作伙伴',
      desc: '深度连接公链生态、优质项目方、头部机构、基础设施伙伴与全球渠道及供应商伙伴',
    },
    {
      value: '1,000+',
      enNum: 'NETWORK',
      label: '全球媒体及社区资源',
      desc: '覆盖北美、亚太、欧洲及中东核心加密市场的一线媒体、KOL 与活跃社区',
    },
  ];

  return (
    <SlideFrame id="slide-2" pageNumber={2} categoryLabel="About">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-1">
        {/* Left Narrative Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div>
            <h2 className="text-[34px] sm:text-[42px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-[1.1] font-display inline-flex items-baseline">
              关于 Pharos<span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F5C438] ml-2 shrink-0" aria-hidden="true" />
            </h2>
            <p className="mt-2 text-[20px] font-bold text-[#141414] tracking-tight">
              <span className="text-[#F5B82E]">不止建议</span>，更参与执行
            </p>
          </div>

          <div className="space-y-4 text-[14.5px] leading-[1.75] text-[#373737]">
            <p>
              Pharos 是一家研究驱动的 Web3 &amp; AI 孵化器与战略伙伴，通过<strong className="font-bold text-[#0A0A0A]">孵化、投资、咨询与深度执行</strong>，陪伴创新项目从早期定位、产品打磨走向市场启动、生态拓展、用户增长及金融运作，为项目全生命周期提供支持。
            </p>
            <p>
              我们以行业研究识别机会，以产品与增长策略明确路径，并根据项目阶段、团队能力与业务目标，整合<strong className="font-bold text-[#0A0A0A]">研究、策略、资源及执行团队</strong>，结合技术能力与全球生态网络，将策略转化为具体交付。从叙事与经济模型设计，到品牌建设、用户增长及技术开发，我们不仅提供建议，更参与执行，帮助团队补齐关键短板，兼顾阶段性突破与长期价值建设。
            </p>
          </div>
        </div>

        {/* Right 2x2 Dashed Metric Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="pharos-dashed-box rounded-[18px] bg-white/90 p-5 flex flex-col justify-between min-h-[155px] hover:bg-white transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="text-[36px] sm:text-[40px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-none font-display tabular-nums">
                  {m.value}
                </div>
                <span className="text-[10.5px] font-mono font-semibold text-[#737373] tracking-wider">
                  {m.enNum}
                </span>
              </div>

              <div className="mt-3">
                <div className="text-[15px] font-bold text-[#141414]">
                  {m.label}
                  <span className="text-[#F5C438]">.</span>
                </div>
                <p className="text-[12px] text-[#525252] mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

/**
 * PAGE 3: Project Narrative & Product Prototype Design
 */
export const Slide3Narrative: React.FC = () => {
  const researchPillars = [
    {
      icon: 'research' as const,
      highlight: '赛道',
      restTitle: '与竞争',
      desc: '分析竞争格局、用户需求与切入点，找到差异化空间。',
    },
    {
      icon: 'magnifier' as const,
      highlight: '叙事',
      restTitle: '与趋势',
      desc: '筛选与项目能力契合的热点，保持核心定位，提升市场相关性。',
    },
    {
      icon: 'cube' as const,
      highlight: '产品',
      restTitle: '与反馈',
      desc: '结合竞品机制、社区讨论及用户反馈，指导迭代。',
    },
  ];

  return (
    <SlideFrame id="slide-3" pageNumber={3} categoryLabel="Narrative & Product">
      <div className="flex flex-col justify-between h-full">
        {/* Top Header */}
        <div className="mb-2.5">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-tight font-display inline-flex items-baseline">
            项目叙事与产品原型设计<span className="inline-block w-2 h-2 rounded-full bg-[#F5C438] ml-1.5 shrink-0" aria-hidden="true" />
          </h2>
          <p className="text-[15.5px] sm:text-[17px] font-bold text-[#141414] mt-0.5">
            将技术优势，转化为市场听得懂、用户愿意参与的产品价值
            <span className="text-[#F5C438]">。</span>
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: 专属行研 */}
          <div className="lg:col-span-6 border border-[#262626] rounded-xl bg-white/95 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#E5E5E5]">
                <h3 className="text-[17px] font-extrabold text-[#0A0A0A]">
                  <span className="text-[#F5B82E]">专属行研</span>｜支撑决策，而非止于报告
                </h3>
                <span className="text-[10.5px] font-mono text-[#737373]">01. RESEARCH</span>
              </div>
              <p className="text-[12.5px] text-[#404040] leading-relaxed mt-2">
                配置专业行研团队，持续跟踪技术革新、赛道格局、叙事热点、社区社媒动向及竞品产品与增长路径，支持定位、产品优先级与市场策略调整。
              </p>
            </div>

            <div className="space-y-3 mt-3">
              {researchPillars.map((item) => (
                <div key={item.highlight} className="flex items-start gap-3">
                  <PharosIcon type={item.icon} className="w-9 h-9 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14.5px] font-extrabold text-[#0A0A0A]">
                      <span className="text-[#F5B82E]">{item.highlight}</span>
                      {item.restTitle}：
                    </h4>
                    <p className="text-[12.5px] text-[#404040] leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 叙事 × Tokenomics × 产品机制 */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <CadDashedBox padding="p-4 sm:p-5" className="h-full flex flex-col justify-between bg-white/95">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#E5E5E5]">
                  <h3 className="text-[17px] font-extrabold text-[#0A0A0A]">
                    <span className="text-[#F5B82E]">立项方案</span>｜叙事 <span className="text-[#F5B82E]">×</span> Tokenomics{' '}
                    <span className="text-[#F5B82E]">×</span> 产品机制
                  </h3>
                  <span className="text-[10.5px] font-mono text-[#737373]">02. MECHANISM</span>
                </div>

                <p className="text-[12.5px] text-[#404040] leading-relaxed mt-2">
                  基于技术、产品与市场及用户洞察，构建价值主张和叙事；按需设计
                  <strong className="font-bold text-[#0A0A0A]">
                    {' '}Web3 原生参与、激励与权益机制
                  </strong>
                  ，让产品、用户行为与经济模型协同，而非简单叠加代币或积分。同步梳理原型与关键体验流程，形成对外材料。
                </p>
              </div>

              {/* Tri-Pillar Architecture */}
              <div className="my-2.5">
                <div className="grid grid-cols-3 gap-2 items-stretch">
                  {[
                    {
                      tag: 'NARRATIVE',
                      title: '价值主张与叙事',
                      desc: '提炼技术壁垒与切入点，建立清晰认知',
                    },
                    {
                      tag: 'TOKENOMICS',
                      title: '原生激励与机制',
                      desc: '经济模型与真实业务价值捕获协同',
                    },
                    {
                      tag: 'PROTOTYPE',
                      title: '原型与体验流程',
                      desc: '优化产品机制适配于Web3经济模型及运营策略',
                    },
                  ].map((node, i) => (
                    <div
                      key={node.tag}
                      className="border border-[#262626] rounded-lg p-2.5 bg-white flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9.5px] font-mono font-bold text-[#737373]">
                          {node.tag}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full border border-[#141414] ${
                            i === 1 ? 'bg-[#F5C438]' : 'bg-white'
                          }`}
                        />
                      </div>
                      <div className="text-[13px] font-bold text-[#0A0A0A] leading-snug">
                        {node.title}
                      </div>
                      <p className="text-[11px] text-[#525252] mt-1 leading-snug">
                        {node.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-2.5 pt-2 border-t border-dashed border-[#262626] flex items-center justify-center text-[10.5px] font-mono text-[#737373]">
                  <span>← 协同飞轮 · 拒绝简单叠加 →</span>
                </div>
              </div>
            </CadDashedBox>
          </div>
        </div>

        {/* Bottom Deliverables Strip */}
        <DeliverableStrip
          items={['赛道与竞品研究', '定位与叙事策略', 'Tokenomics 设计', '原型与机制优化', '白皮书', '官网内容', '项目 Deck']}
        />
      </div>
    </SlideFrame>
  );
};

/**
 * PAGE 4: Operations & Growth
 */
export const Slide4Growth: React.FC = () => {
  const stages = [
    {
      phase: 'STAGE 01',
      title: '冷启动与验证',
      dots: 10,
      desc: '明确种子用户及参与理由，通过招募、体验与反馈，验证产品价值和转化路径。',
    },
    {
      phase: 'STAGE 02',
      title: '迭代与持续增长',
      dots: 20,
      desc: '围绕使用场景配置任务、推荐与持续激励，提升有效获客、激活和留存。',
    },
    {
      phase: 'STAGE 03',
      title: '规模化与关键节点',
      dots: 30,
      desc: '面向扩张、重大上线或 TGE 前，联动活动、社区与生态，集中触达并承接转化。',
    },
  ];

  const executionPillars = [
    {
      icon: 'campaign' as const,
      title: '活动运营',
      desc: '设计并执行 Campaign，覆盖机制、流程、任务、激励、排期与复盘，引导活动用户进入产品核心体验。',
    },
    {
      icon: 'community' as const,
      title: '社区与社媒',
      desc: '配置 X（Twitter）、Telegram、Discord 运营人员，执行内容排期、互动、活动、答疑与反馈整理；跨渠道协同，将关注转化为社区参与和持续使用。',
    },
    {
      icon: 'ecosystem' as const,
      title: '生态资源拓展',
      desc: '按受众与场景筛选伙伴、社区及渠道，推进对接、联合 Campaign、社区联动和场景合作，持续拓展用户来源，不止于引荐。',
    },
  ];

  return (
    <SlideFrame id="slide-4" pageNumber={4} categoryLabel="Growth & Ops">
      <div className="flex flex-col justify-between h-full">
        {/* Top Header */}
        <div className="mb-2">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-tight font-display inline-flex items-baseline">
            运营与增长<span className="inline-block w-2 h-2 rounded-full bg-[#F5C438] ml-1.5 shrink-0" aria-hidden="true" />
          </h2>
          <p className="text-[15.5px] sm:text-[17px] font-bold text-[#141414] mt-0.5">
            按阶段定策略，配团队与资源，把增长落到执行<span className="text-[#F5C438]">。</span>
          </p>
        </div>

        {/* Section 1: 增长策略 */}
        <div className="mb-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
            <h3 className="text-[16px] font-extrabold text-[#0A0A0A]">
              <span className="text-[#F5B82E]">增长策略</span>｜匹配项目周期与产品阶段
            </h3>
            <p className="text-[12px] text-[#525252]">
              结合产品成熟度、用户基础、目标人群与业务目标，明确获客、激活、留存重点，设计 Campaign、积分与激励机制。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {stages.map((st) => (
              <div
                key={st.phase}
                className="bg-white/95 border border-[#E5E5E5] rounded-xl px-3.5 py-2.5 flex flex-col justify-between"
              >
                <DotMatrixBox totalDots={30} cols={10} activeDots={st.dots} compact />
                <div className="mt-0.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[14.5px] font-extrabold text-[#0A0A0A]">
                      {st.title}
                      <span className="text-[#F5C438]">.</span>
                    </h4>
                    <span className="text-[10px] font-mono font-semibold text-[#737373]">
                      {st.phase}
                    </span>
                  </div>
                  <p className="text-[11.5px] text-[#404040] leading-relaxed mt-0.5">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 执行落地 */}
        <div>
          <h3 className="text-[16px] font-extrabold text-[#0A0A0A] mb-1.5">
            <span className="text-[#F5B82E]">执行落地</span>｜三大方向配人、配资源
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {executionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="pharos-dashed-box rounded-xl bg-white/95 p-3.5 flex items-start gap-3"
              >
                <PharosIcon type={pillar.icon} className="w-8 h-8 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[14.5px] font-extrabold text-[#0A0A0A]">
                    {pillar.title}：
                  </h4>
                  <p className="text-[11.5px] text-[#404040] leading-relaxed mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Deliverables */}
        <DeliverableStrip
          items={['阶段策略与指标', '人员及资源配置', '活动计划与排期', '社区社媒排期', '生态合作清单', '复盘优化建议']}
        />
      </div>
    </SlideFrame>
  );
};

/**
 * PAGE 5: Brand & Market
 */
export const Slide5Brand: React.FC = () => {
  return (
    <SlideFrame id="slide-5" pageNumber={5} categoryLabel="Brand & Market">
      <div className="flex flex-col justify-between h-full">
        {/* Top Header */}
        <div className="mb-2.5">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-tight font-display inline-flex items-baseline">
            品牌与市场<span className="inline-block w-2 h-2 rounded-full bg-[#F5C438] ml-1.5 shrink-0" aria-hidden="true" />
          </h2>
          <p className="text-[15.5px] sm:text-[17px] font-bold text-[#141414] mt-0.5">
            统一品牌表达，精准触达市场
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: 3 Brand Modules */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 h-full">
            <div className="border border-[#262626] rounded-xl bg-white/95 p-3.5 sm:p-4 flex items-start gap-3.5 flex-1">
              <PharosIcon type="brand" className="w-9 h-9 shrink-0 mt-0.5" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[15px] font-extrabold text-[#0A0A0A]">
                  <span className="text-[#F5B82E]">品牌</span>与视觉建设
                </h3>
                <p className="text-[12px] text-[#404040] leading-relaxed mt-1">
                  设计团队覆盖官网升级、视觉规范、社媒素材、项目介绍及活动物料，以统一品牌主张，让用户、伙伴与投资人快速理解项目价值。
                </p>
              </div>
            </div>

            <div className="border border-[#262626] rounded-xl bg-white/95 p-3.5 sm:p-4 flex items-start gap-3.5 flex-1">
              <PharosIcon type="content" className="w-9 h-9 shrink-0 mt-0.5" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[15px] font-extrabold text-[#0A0A0A]">
                  <span className="text-[#F5B82E]">内容策略</span>与传播执行
                </h3>
                <p className="text-[12px] text-[#404040] leading-relaxed mt-1">
                  围绕定位、产品进展与关键节点，制定主题与传播节奏；将技术转化为易懂、易传播的内容，统一官网、社媒、媒体与社区信息。
                </p>
              </div>
            </div>

            <div className="border border-[#262626] rounded-xl bg-white/95 p-3.5 sm:p-4 flex items-start gap-3.5 flex-1">
              <PharosIcon type="campaign" className="w-9 h-9 shrink-0 mt-0.5" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[15px] font-extrabold text-[#0A0A0A]">
                  <span className="text-[#F5B82E]">线上与线下</span>活动曝光
                </h3>
                <p className="text-[12px] text-[#404040] leading-relaxed mt-1">
                  策划线上联合活动与生态 AMA，统筹组织全球顶级行业展会及周边活动（Side Event），沉淀现场声量与网络连接，直接转化为项目品牌传播及获客转化赋能。
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 全球优质资源网络 */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <CadDashedBox padding="p-4 sm:p-5" className="h-full flex flex-col justify-between bg-white/95">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[18px] font-extrabold text-[#0A0A0A]">
                    <span className="text-[#F5B82E]">全球优质</span>资源网络
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-[#0A0A0A]">
                    1,000+ MEDIA &amp; KOLS
                  </span>
                </div>

                {/* Diagonal Yellow World Map */}
                <div className="my-1.5">
                  <DiagonalWorldMap />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[12.5px] text-[#404040] leading-relaxed">
                  整合全球优质 <strong className="font-bold text-[#0A0A0A]">KOL、媒体及社区资源</strong>
                  ，按赛道、市场与受众精准匹配。依托长期合作与直接沟通，
                  <strong className="font-bold text-[#0A0A0A]">及时响应、快速排期</strong>
                  ；发挥资源整合与议价优势，以
                  <strong className="font-bold text-[#0A0A0A]">更具竞争力的价格</strong>
                  提升预算效率。
                </p>

                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  {[
                    { k: '精准匹配', v: '按赛道与受众筛选' },
                    { k: '直接沟通', v: '一线直连快速排期' },
                    { k: '议价优势', v: '规模整合提升 ROI' },
                  ].map((adv) => (
                    <div
                      key={adv.k}
                      className="border border-dashed border-[#262626] rounded-lg px-2.5 py-1.5 bg-[#FAFAFA]"
                    >
                      <div className="text-[12px] font-extrabold text-[#0A0A0A]">
                        {adv.k}
                        <span className="text-[#F5C438]">.</span>
                      </div>
                      <div className="text-[10.5px] text-[#525252] mt-0.5 leading-snug">
                        {adv.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CadDashedBox>
          </div>
        </div>

        {/* Bottom Deliverables */}
        <DeliverableStrip
          items={['品牌视觉规范', '官网及宣发物料', '内容策略与排期', 'KOL与媒体投放策略及执行', '全球渠道合作计划', '线上线下活动方案']}
        />
      </div>
    </SlideFrame>
  );
};

/**
 * PAGE 6: AI 与区块链双重技术储备
 */
export const Slide6Tech: React.FC = () => {
  const aiReserves = [
    '大模型应用与集成',
    'AI Agent 与工作流',
    '知识库与智能检索',
    '评测与部署优化',
  ];

  const chainReserves = [
    '智能合约开发',
    '链上数据与基础设施',
    '协议与机制实现',
    '链上支付与账户体验',
  ];

  return (
    <SlideFrame id="slide-6" pageNumber={6} categoryLabel="Dual Tech Reserves">
      <div className="flex flex-col justify-between h-full">
        {/* Top Header */}
        <div className="mb-1.5 sm:mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#F5C438]/20 border border-[#F5C438]/60 text-[#141414]">
              DUAL-ENGINE CAPABILITIES
            </span>
            <span className="text-[10.5px] font-mono text-[#737373]">TECH RESERVES &amp; DELIVERY</span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-tight font-display inline-flex items-baseline">
            AI 与区块链双重技术储备<span className="inline-block w-2 h-2 rounded-full bg-[#F5C438] ml-1.5 shrink-0" aria-hidden="true" />
          </h2>
          <p className="text-[15px] sm:text-[17px] font-bold text-[#141414] mt-0.5">
            专家支持关键决策，专业团队加速开发<span className="text-[#F5C438]">。</span>
          </p>
          <p className="text-[12px] sm:text-[12.5px] text-[#404040] mt-1 max-w-4xl leading-relaxed">
            Pharos 拥有覆盖 AI 与区块链两大方向的技术开发团队与领域专家，为 AI 应用、区块链产品及融合场景提供专业支持。从技术咨询到开发交付，按项目需求匹配技术力量，帮助团队降低试错成本、补齐能力短板、加快产品落地。
          </p>
        </div>

        {/* Middle Section: Dual Tech Reserves & Two Core Service Pillars */}
        <div className="space-y-2.5 my-auto py-1">
          {/* Dual Tech Reserves Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
            {/* AI 技术储备 */}
            <div className="border border-[#262626] rounded-xl bg-white/95 p-3 sm:p-3.5 shadow-2xs relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#141414] text-[#F5C438] flex items-center justify-center font-mono font-bold text-[11px] shrink-0">
                    AI
                  </div>
                  <h3 className="text-[14.5px] font-extrabold text-[#0A0A0A] tracking-tight">
                    AI技术储备
                  </h3>
                </div>
                <span className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAFAFA] border border-[#E5E5E5] text-[#525252]">
                  AI NATIVE &amp; WORKFLOWS
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {aiReserves.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-[#FAFAFA] border border-[#D4D4D4] text-[#171717] hover:border-[#141414] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C438] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* 区块链技术储备 */}
            <div className="border border-[#262626] rounded-xl bg-white/95 p-3 sm:p-3.5 shadow-2xs relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#141414] text-[#F5C438] flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                    W3
                  </div>
                  <h3 className="text-[14.5px] font-extrabold text-[#0A0A0A] tracking-tight">
                    区块链技术储备
                  </h3>
                </div>
                <span className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAFAFA] border border-[#E5E5E5] text-[#525252]">
                  ON-CHAIN &amp; INFRA
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {chainReserves.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-[#FAFAFA] border border-[#D4D4D4] text-[#171717] hover:border-[#141414] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Two Core Service Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
            {/* Pillar 1: 技术咨询 */}
            <div className="border-[1.5px] border-[#141414] rounded-xl bg-white p-3.5 sm:p-4 flex flex-col justify-between shadow-xs relative">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F5C438] border border-[#141414]" />
                    <span className="text-[10px] font-mono font-bold text-[#737373]">
                      SERVICE 01 · ADVISORY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#F5B82E]">01.</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <h3 className="text-[16.5px] sm:text-[18px] font-extrabold text-[#0A0A0A] font-display">
                    技术咨询
                  </h3>
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-[#B45309] bg-[#F5C438]/15 px-2 py-0.5 rounded">
                    让技术路径更清晰
                  </span>
                </div>
                <p className="text-[12px] sm:text-[12.5px] text-[#262626] font-medium leading-relaxed">
                  围绕技术选型、架构设计与关键开发难点，提供专业评估与方案建议，帮助团队判断可行性、明确实现路径，让技术投入更有方向。
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-dashed border-[#E5E5E5] flex items-center gap-2 text-[10.5px] font-mono text-[#525252]">
                <span className="text-[#F5B82E]">✦</span>
                <span>技术选型评估 · 架构可行性建议 · 关键难点攻关</span>
              </div>
            </div>

            {/* Pillar 2: 开发支持 */}
            <div className="border-[1.5px] border-[#141414] rounded-xl bg-white p-3.5 sm:p-4 flex flex-col justify-between shadow-xs relative">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F5C438] border border-[#141414]" />
                    <span className="text-[10px] font-mono font-bold text-[#737373]">
                      SERVICE 02 · ENGINEERING
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#F5B82E]">02.</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <h3 className="text-[16.5px] sm:text-[18px] font-extrabold text-[#0A0A0A] font-display">
                    开发支持
                  </h3>
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-[#B45309] bg-[#F5C438]/15 px-2 py-0.5 rounded">
                    无需额外招聘，快速补齐能力
                  </span>
                </div>
                <p className="text-[12px] sm:text-[12.5px] text-[#262626] font-medium leading-relaxed">
                  当现有团队缺少 AI 或区块链方向的专项能力时，Pharos 可快速配置相应开发力量，承接功能模块并与原有团队协同交付。<strong className="font-extrabold text-[#0A0A0A] bg-[#F5C438]/25 px-1 py-0.5 rounded underline decoration-[#F5C438] decoration-2 underline-offset-2">无需另行招聘专项技术人员</strong>，减少招聘与磨合成本，让产品推进不受技术短板制约。
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-dashed border-[#E5E5E5] flex items-center gap-2 text-[10.5px] font-mono text-[#525252]">
                <span className="text-[#F5B82E]">✦</span>
                <span>专项力量配置 · 核心模块承接 · 原团队协同交付</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Deliverables Strip */}
        <DeliverableStrip
          items={['技术评估与方案建议', '专项开发团队支持', '功能模块开发及集成协作']}
        />
      </div>
    </SlideFrame>
  );
};

/**
 * PAGE 7: Agentic Payment: Practice & Ecosystem Resources
 */
export const Slide7AgenticPayment: React.FC = () => {
  const capabilities = [
    {
      num: '01',
      title: '赛道与场景',
      enTag: 'LANDSCAPE & POSITIONING',
      desc: '梳理场景、参与角色与切入点，明确生态定位。',
      detail: '从自主消费、微计费到商户结算，明确在 Agentic 经济体系中的真实价值与商业闭环。',
    },
    {
      num: '02',
      title: '产品与路径',
      enTag: 'PRODUCT & INTEGRATION',
      desc: '评估 Agent 与支付衔接的产品设计、集成需求及阶段验证路径。',
      detail: '规划协议规范、SDK 接入、调用计费与验证里程碑，避免过度设计并缩短验证周期。',
    },
    {
      num: '03',
      title: '上下游对接',
      enTag: 'ECOSYSTEM CONNECTIONS',
      desc: '按需求筛选合作方，建立联系并推进合作讨论。',
      detail: '依托真实生态沉淀，定向连接 Agent 框架、协议方、商户及流动性网络，提升合作效率。',
    },
    {
      num: '04',
      title: '经验迁移',
      enTag: 'KNOWLEDGE TRANSFER',
      desc: '支持需求判断、方案与执行规划，减少重复摸索。',
      detail: '将已验证的踩坑经验与机制设计直接复用至新项目，少走弯路，加速业务落地。',
    },
  ];

  return (
    <SlideFrame id="slide-7" pageNumber={7} categoryLabel="Agentic Payment">
      <div className="flex flex-col justify-between h-full">
        {/* Top Header */}
        <div className="mb-2">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-tight font-display inline-flex items-baseline">
            Agentic Payment：实践与生态资源<span className="inline-block w-2 h-2 rounded-full bg-[#F5C438] ml-1.5 shrink-0" aria-hidden="true" />
          </h2>
          <p className="text-[15.5px] sm:text-[17px] font-bold text-[#141414] mt-0.5">
            将真实孵化经验，转化为产品路径与生态连接<span className="text-[#F5C438]">。</span>
          </p>
          <p className="text-[12.5px] text-[#404040] mt-1 max-w-4xl leading-relaxed">
            自 2026 年初孵化{' '}
            <strong className="font-extrabold text-[#0A0A0A] bg-[#FFF8E6] px-1 py-0.5 border border-[#F5C438]/50 rounded">
              TadaPay — the merchant layer for agentic payment
            </strong>
            ，积累上下游资源及产品机制、生态协作经验，为 AI Agent、支付与相关商业场景提供定向支持。
          </p>
        </div>

        {/* 2-Column Split: Case Blueprint on Left, 4 Capabilities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch my-1">
          {/* Left Column: TadaPay Real Incubation Blueprint */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <CadDashedBox padding="p-4 sm:p-4.5" className="h-full flex flex-col justify-between bg-white/95">
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-[#E5E5E5] pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5C438] border border-[#0A0A0A]" />
                    <span className="text-[12px] font-mono font-extrabold text-[#0A0A0A] tracking-wider">
                      INCUBATION SPOTLIGHT
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#737373]">EST. 2026</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] font-display">
                      TadaPay<span className="text-[#F5C438]">.</span>
                    </h3>
                    <span className="text-[11px] font-mono font-semibold text-[#525252]">
                      The merchant layer
                    </span>
                  </div>
                  <p className="text-[12px] text-[#262626] font-medium leading-snug">
                    for agentic payment
                  </p>
                </div>

                {/* Architectural Layer Diagram */}
                <div className="mt-3.5 space-y-2">
                  <div className="text-[10.5px] font-mono font-bold text-[#737373] flex items-center justify-between">
                    <span>AGENTIC STACK ARCHITECTURE</span>
                    <span className="text-[#F5C438]">● REAL INFRA</span>
                  </div>

                  <div className="border border-[#262626] rounded-lg p-2 bg-[#FAFAFA] text-[11px]">
                    <div className="flex items-center justify-between font-bold text-[#0A0A0A]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C438]" />
                        01. AI Agent 交互层
                      </span>
                      <span className="font-mono text-[9px] text-[#737373]">INTENT &amp; BUDGET</span>
                    </div>
                    <p className="text-[#525252] text-[10.5px] mt-0.5 leading-tight">
                      自主意图触发、授权凭证（Session Keys）与预算限额管理
                    </p>
                  </div>

                  <div className="border border-[#262626] rounded-lg p-2 bg-[#FFFDF5] border-[#F5C438]/80 text-[11px]">
                    <div className="flex items-center justify-between font-extrabold text-[#0A0A0A]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C438]" />
                        02. TadaPay 商户层 (Merchant Layer)
                      </span>
                      <span className="font-mono text-[9px] text-[#D97706] font-bold">CORE HUB</span>
                    </div>
                    <p className="text-[#525252] text-[10.5px] mt-0.5 leading-tight">
                      动态发票生成、微支付聚合、商户接入与分账结算
                    </p>
                  </div>

                  <div className="border border-[#262626] rounded-lg p-2 bg-[#FAFAFA] text-[11px]">
                    <div className="flex items-center justify-between font-bold text-[#0A0A0A]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C438]" />
                        03. 链上结算与流动性网络
                      </span>
                      <span className="font-mono text-[9px] text-[#737373]">ON-CHAIN SETTLEMENT</span>
                    </div>
                    <p className="text-[#525252] text-[10.5px] mt-0.5 leading-tight">
                      x402 / Pay-per-Call 协议支撑、稳定币清算与低成本极速结算
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-dashed border-[#D4D4D4] flex items-center justify-between text-[11px] text-[#525252]">
                <span>沉淀一手生态经验</span>
                <span className="font-mono font-bold text-[#0A0A0A]">定向开放上下游资源</span>
              </div>
            </CadDashedBox>
          </div>

          {/* Right Column: 4 Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="border border-[#262626] rounded-xl bg-white/95 p-3.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-[#737373]">
                      {c.enTag}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#F5B82E]">
                      {c.num}.
                    </span>
                  </div>

                  <h3 className="text-[15px] font-extrabold text-[#0A0A0A]">
                    {c.title}
                  </h3>

                  <p className="text-[12px] font-bold text-[#141414] mt-1 leading-snug">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-dashed border-[#E5E5E5] text-[11px] text-[#525252] leading-relaxed">
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Deliverables Strip */}
        <DeliverableStrip
          items={['场景与赛道分析', '产品路径建议', '合作方梳理及对接']}
          note="资源匹配与推进取决于项目需求及合作方意愿；引荐不等于合作结果承诺。"
        />
      </div>
    </SlideFrame>
  );
};

/**
 * PAGE 8: TGE & Financial Operations Support
 */
export const Slide8TGE: React.FC = () => {
  const pillars = [
    {
      icon: 'contract' as const,
      num: '01',
      tag: 'TGE ADVISORY',
      title: 'TGE 策略',
      desc: '梳理准备事项、节奏、外部依赖与资源，协调产品、经济模型、社区及市场信息。',
      points: [
        '发行清单：梳理产品里程碑、法律合规与外部依赖项',
        '信息统筹：协同 Tokenomics、社区动员与市场发声节点',
        '节奏把控：综合宏观市场窗口与项目就绪度规划排期',
      ],
    },
    {
      icon: 'exchange' as const,
      num: '02',
      tag: 'EXCHANGES & MM',
      title: '交易所与做市',
      desc: '支持交易所对接、材料准备与合作推进；围绕流动性需求，协调做市方、方案及执行衔接。',
      points: [
        '机构对接：协助准备 Listing Materials、尽调与合作跟进',
        '做市协调：对接合规做市方，评估做市策略与流动性池深度',
        '执行协同：打通充提网络、钱包集成与开盘关键流程',
      ],
    },
    {
      icon: 'treasury' as const,
      num: '03',
      tag: 'TREASURY & GOVERNANCE',
      title: '资产管理',
      desc: '讨论管理目标、流动性与风险边界，明确团队及合作方分工，按确认范围提供支持。',
      points: [
        '目标梳理：明确项目金库流动性诉求与防守型安全边界',
        '权限与分工：协助界定团队内部职责与专业第三方服务界限',
        '风控意识：强化多签管理、防脱锚机制与合规审计准备',
      ],
    },
  ];

  return (
    <SlideFrame id="slide-8" pageNumber={8} categoryLabel="TGE & Finance">
      <div className="flex flex-col justify-between h-full">
        {/* Top Header */}
        <div className="mb-2">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-tight font-display inline-flex items-baseline">
            TGE 与金融运作支持<span className="inline-block w-2 h-2 rounded-full bg-[#F5C438] ml-1.5 shrink-0" aria-hidden="true" />
          </h2>
          <p className="text-[15.5px] sm:text-[17px] font-bold text-[#141414] mt-0.5">
            让 TGE 成为有准备的里程碑，而非孤立的发行事件<span className="text-[#F5C438]">。</span>
          </p>
          <p className="text-[12.5px] text-[#404040] mt-1 max-w-4xl leading-relaxed">
            结合项目阶段、Tokenomics 与市场条件，提供 TGE Advisory 及执行协调，统筹发行准备、市场沟通、交易所对接与流动性安排。
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2.5 sm:my-3 flex-1 items-stretch">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="border border-[#262626] rounded-xl bg-white/95 p-4 sm:p-5 flex flex-col justify-between flex-1 relative shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#737373]">
                    {p.tag}
                  </span>
                  <span className="text-[12px] font-mono font-bold text-[#F5B82E]">
                    {p.num}.
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <PharosIcon type={p.icon} className="w-9 h-9 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] font-extrabold text-[#0A0A0A]">
                      {p.title}
                    </h3>
                    <p className="text-[12px] font-bold text-[#141414] leading-snug mt-1">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 pt-3 border-t border-dashed border-[#E5E5E5] text-[11.5px] sm:text-[12px] text-[#404040]">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C438] shrink-0 mt-1.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#F0F0F0] flex items-center justify-between text-[10.5px] font-mono text-[#737373]">
                <span>ADVISORY &amp; EXECUTION</span>
                <span className="text-[#0A0A0A] font-bold">READY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Deliverables Strip */}
        <DeliverableStrip
          items={[
            'TGE 清单与阶段计划',
            '交易所材料',
            '资源对接',
            '流动性及资产管理策略及执行',
          ]}
          note="不承诺上币结果、代币价格或投资回报；交易执行、托管等受监管活动由具备相应资质的主体承担，合规要求另行确认。"
        />
      </div>
    </SlideFrame>
  );
};
