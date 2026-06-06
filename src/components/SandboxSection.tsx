import { useState } from 'react';
import { RebuildPlan, SandboxCode } from '../types';
import { Play, Copy, Check, MessageSquare, Code, RotateCw, Monitor } from 'lucide-react';
import { Language, translations } from '../translations';

interface SandboxSectionProps {
  plan: RebuildPlan;
  lang: Language;
}

export function SandboxSection({ plan, lang }: SandboxSectionProps) {
  const [activeSandboxIdx, setActiveSandboxIdx] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0); // Used to reload iframe easily
  const t = translations[lang];

  const sandboxes: SandboxCode[] = plan.sandboxCodes || [];
  const activeSandbox = sandboxes[activeSandboxIdx];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleReloadSandbox = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="space-y-6" id="sandbox-section-container">
      {/* Overview Banner */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
        <div className="p-3 bg-yellow-500/10 border border-yellow-500/25 rounded-lg text-yellow-400 mt-1">
          <Play className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-200">
            {t.sandboxHeading}
          </h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {t.sandboxSummary}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Step Timeline Left */}
        <div className="xl:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#f59e0b] font-bold">
              {t.sandboxTimelineTitle}
            </h4>

            <p className="text-xs text-slate-300 italic pl-2 border-l border-amber-500/30">
              “{plan.rebuildPhilosophy}”
            </p>

            <div className="relative pl-5 border-l border-slate-800 space-y-6 mt-4">
              {plan.keySteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[27px] top-0 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-amber-500 flex items-center justify-center text-[8px] text-amber-500 font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors"></div>
                  
                  <div>
                    <h5 className="text-xs font-mono tracking-wider text-slate-300 flex items-center gap-1">
                      <span>STEP 0{step.stepNumber || idx + 1}.</span>
                      <span className="font-sans font-semibold text-amber-400/90">{step.title}</span>
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sandbox Desk Right */}
        <div className="xl:col-span-3 space-y-4 flex flex-col">
          {sandboxes.length > 1 && (
            <div className="flex gap-2 p-1 bg-slate-950 rounded-lg">
              {sandboxes.map((sandbox, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSandboxIdx(idx);
                    setCopiedCode(false);
                  }}
                  className={`flex-1 py-1.5 px-3 text-xs font-mono rounded cursor-pointer ${
                    activeSandboxIdx === idx
                      ? 'bg-slate-950 border border-slate-850 text-amber-400 font-bold shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sandbox.title || (lang === 'zh' ? `沙盒方案 0${idx + 1}` : lang === 'en' ? `Playground Doc 0${idx + 1}` : `플레이그라운드 0${idx + 1}`)}
                </button>
              ))}
            </div>
          )}

          {activeSandbox ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {/* Code Viewer Panel */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col h-[340px] md:h-[440px]">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                    <Code className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="uppercase">{activeSandbox.language || 'html'} {lang === 'zh' ? '完整源代码' : lang === 'en' ? 'SOURCE CODE' : '소스 코드'}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(activeSandbox.code)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] font-mono text-slate-300 font-medium active:scale-95 transition-all cursor-pointer"
                    title={lang === 'zh' ? '复制完整代码' : lang === 'en' ? 'Copy All' : '전체 복사'}
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex-1 overflow-auto p-4 font-mono text-[10.5px] leading-relaxed text-slate-300 scrollbar-thin select-all">
                  <pre className="whitespace-pre-wrap">{activeSandbox.code}</pre>
                </div>

                <div className="p-3 bg-slate-900/60 border-t border-slate-850 text-[10px] text-slate-400 leading-snug flex items-start gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'zh' ? '结构描述：' : lang === 'en' ? 'Structure Detail: ' : '구조 명세 해설: '}</strong>{activeSandbox.description}
                  </span>
                </div>
              </div>

              {/* Running Preview Iframe */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col h-[340px] md:h-[440px] relative">
                {/* Iframe Window Control Tab */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between font-mono text-[10px]">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="uppercase tracking-wider">{lang === 'zh' ? '真实渲染画布' : lang === 'en' ? 'MICRO-SANDBOX STAGE' : '라이브 렌더 스테이지'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-ping"></span>
                    <span className="text-emerald-400 font-bold uppercase mr-1">RUNNING LIVE</span>
                    <button
                      onClick={handleReloadSandbox}
                      className="p-1 rounded bg-slate-950 border border-slate-800 hover:border-slate-705 text-slate-300 transition-colors active:scale-95 pointer-events-auto cursor-pointer"
                      title={lang === 'zh' ? '重载沙盒运行' : lang === 'en' ? 'Reload Sandbox' : '컨벤션 새로고침'}
                    >
                      <RotateCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Sandbox iframe Container */}
                <div className="flex-1 bg-slate-950 relative">
                  <iframe
                    key={iframeKey}
                    title="Micro Interactive Sandbox"
                    srcDoc={activeSandbox.code}
                    className="w-full h-full border-none pointer-events-auto bg-slate-950"
                    sandbox="allow-scripts"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/10 text-slate-500 font-mono text-sm flex flex-col items-center justify-center">
              <span>{lang === 'zh' ? '暂无等价重构演示案例...' : lang === 'en' ? 'No sandbox demos available...' : '해당 분석 예제에 플레이그라운드가 존재하지 않습니다.'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
