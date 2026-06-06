import { useState } from 'react';
import { DeepDissection } from '../types';
import { Palette, Terminal, FileText, Check, Copy, Layers, Cpu, BookOpen } from 'lucide-react';
import { Language, translations } from '../translations';

interface DissectionSectionProps {
  dissection: DeepDissection;
  lang: Language;
}

export function DissectionSection({ dissection, lang }: DissectionSectionProps) {
  const [activeTab, setActiveTab] = useState<'visual' | 'technical' | 'copywriting'>('visual');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const t = translations[lang];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="space-y-6" id="dissection-container">
      {/* Structural Sub-tab Selection */}
      <div className="flex border-b border-slate-800 bg-slate-950 p-1 rounded-xl" id="dissection-tabs">
        <button
          onClick={() => setActiveTab('visual')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
            activeTab === 'visual'
              ? 'bg-slate-900 border border-slate-800 text-emerald-400 font-semibold shadow-inner'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>{lang === 'zh' ? '视觉材质基因 / Visual DNA' : lang === 'en' ? 'Visual DNA' : '비주얼 물질 DNA / Visual DNA'}</span>
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
            activeTab === 'technical'
              ? 'bg-slate-900 border border-slate-800 text-cyan-400 font-semibold shadow-inner'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>{lang === 'zh' ? '技术沙箱架构 / Technical Logic' : lang === 'en' ? 'Technical Spec' : '엔진 기술 스택 / Technical Spec'}</span>
        </button>
        <button
          onClick={() => setActiveTab('copywriting')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
            activeTab === 'copywriting'
              ? 'bg-slate-900 border border-slate-800 text-yellow-400 font-semibold shadow-inner'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{lang === 'zh' ? '文案情绪钩子 / Narrative Copy' : lang === 'en' ? 'Narrative & Copy' : '감성 카피 내러티브 / Narrative Copy'}</span>
        </button>
      </div>

      {/* Render active content tab */}
      {activeTab === 'visual' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {/* Colors Card Left */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4" />
              <span>{t.dissectionColorPalette}</span>
            </h4>
            <div className="space-y-3.5">
              {dissection.visual.colors.map((color, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCopyColor(color.hex)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-900 hover:border-slate-800 cursor-pointer group transition-all"
                  title="点击复制"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg border border-white/10 shadow-inner overflow-hidden transition-transform group-hover:scale-105"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <span className="text-xs font-mono font-medium text-slate-200 block group-hover:text-emerald-400 transition-colors">
                        {color.hex}
                      </span>
                      <span className="text-[10px] text-slate-500 line-clamp-1">
                        {color.description}
                      </span>
                    </div>
                  </div>
                  <div>
                    {copiedColor === color.hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 font-mono text-center">
              {lang === 'zh' ? '* 提示：点击色值卡片可一键复制数值' : lang === 'en' ? '* Tip: Click color element to copy HEX' : '* 팁: 색상 요소를 클릭하면 HEX 코드가 즉시 복사됩니다'}
            </p>
          </div>

          {/* Typography / Space Card Right */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500 block mb-2">
                {t.dissectionScaleLabel}
              </span>
              <h5 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '布局网格规律' : lang === 'en' ? 'Layout Grid System Rules' : '레이아웃 가이드라인'}</h5>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {dissection.visual.gridSystem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500 block mb-2">
                {t.dissectionFocusLabel}
              </span>
              <h5 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '光影散射与反射物理' : lang === 'en' ? 'Lighting, Dispersion & Shadows' : '빛 분산 및 원근감 명암 물리'}</h5>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {dissection.visual.shadowsLighting}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500 block mb-2">
                {lang === 'zh' ? '03. 字意呼应 // Typography spacing' : lang === 'en' ? '03. TYPOGRAPHY SPACING // TYPOGRAPHY' : '03. 타이포그래피 정렬 호흡 // TYPOGRAPHY'}
              </span>
              <h5 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '排版与字间行气配比' : lang === 'en' ? 'Typography, Weights & Letter Spacings' : '타이포그래피 장평 배치 법칙'}</h5>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {dissection.visual.typography}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'technical' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {/* Tech Stack Chip Collection */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4" />
              <span>{t.dissectionTechStack}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {dissection.technical.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 text-xs font-mono"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/60">
              <h5 className="text-xs font-semibold text-slate-300 font-mono mb-2 uppercase">{t.dissectionKeyFunctions}:</h5>
              <ul className="space-y-2 font-mono text-[11px] text-slate-400">
                {dissection.technical.keyFunctions.map((fn, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Details Cards */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-500 block mb-2">
                {t.dissectionStateManagement}
              </span>
              <h5 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '微交互参数映射与状态机制' : lang === 'en' ? 'Micro-interaction Parameter Mappings & State Machines' : '상호작용 데이터 매핑 및 상태 기계'}</h5>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {dissection.technical.stateManagement}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-500 block mb-2">
                {t.dissectionPerfOptimization}
              </span>
              <h5 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? 'GPU硬件组合层加速与绘制控制' : lang === 'en' ? 'GPU Hardware Layers Compositing & Redraw Control' : 'GPU 하드웨어 가속 레이어 및 렌더 가드'}</h5>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {dissection.technical.perfOptimization}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'copywriting' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in text-slate-100">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400/80">
              <BookOpen className="w-4 h-4" />
              <span>{t.dissectionEmotionCurve}</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '心流起伏过程' : lang === 'en' ? 'User Flow & Emotional Wave' : '감성 자극 심상 여정 (User Flow)'}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {dissection.copywriting.emotionCurve}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400/80">
              <BookOpen className="w-4 h-4" />
              <span>{t.dissectionNarrativeStructure}</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '叙事修辞结构' : lang === 'en' ? 'Narrative Rhetorical Patterns' : '어휘 및 기술 수사학적 얼개'}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {dissection.copywriting.narrativeStructure}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400/80">
              <BookOpen className="w-4 h-4" />
              <span>{t.dissectionHookSetting}</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '视觉意境钩子' : lang === 'en' ? 'Visual Imago & Focus Hook Spot' : '시각 연출 후크 마그넷'}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {dissection.copywriting.hookSetting}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400/80">
              <BookOpen className="w-4 h-4" />
              <span>{t.dissectionCallToAction}</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">{lang === 'zh' ? '促动触觉指令' : lang === 'en' ? 'CTA Micro-interaction Design' : '최종 완료 촉구 버튼 배정 설계'}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {dissection.copywriting.callToAction}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
