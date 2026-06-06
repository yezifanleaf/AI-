import { useEffect, useState } from 'react';
import { Cpu, Wifi, Key, HelpCircle, Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeaderProps {
  apiStatus: {
    checked: boolean;
    hasApiKey: boolean;
    error?: string;
  };
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export function Header({ apiStatus, lang, onLangChange }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState<string>("2026-06-06 13:03:34");
  const t = translations[lang];

  useEffect(() => {
    // Keep a dynamic simulated digital clock to reinforce the techno-futurist mentor vibe safely.
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toISOString().replace('T', ' ').substring(0, 19)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-slate-800 bg-[#0c0e12]/85 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-10" id="header-container">
      {/* Brand logo container */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
          <span className="text-cyan-400 font-bold text-xl font-mono">Ω</span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white uppercase flex items-center gap-2">
            {t.headerTitle}
            <span className="text-[10px] bg-slate-800/80 text-cyan-400 font-mono px-2 py-0.5 rounded border border-slate-700 uppercase tracking-widest">
              PRO V2
            </span>
          </h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mt-0.5">
            {t.headerStatus} // V{currentTime.slice(14, 16) || "2.1"}.{currentTime.slice(17, 19) || "4"}
          </p>
        </div>
      </div>

      {/* Metrics container and connection states */}
      <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono tracking-wider">
        {/* Language selector toggle group */}
        <div className="flex items-center gap-1 bg-black/45 border border-slate-800/80 rounded p-0.5" id="language-selector-pills">
          <div className="p-1 text-slate-500 flex items-center justify-center shrink-0">
            <Globe className="w-3 h-3 text-cyan-500/70" />
          </div>
          {(['zh', 'en', 'ko'] as const).map((l) => (
            <button
              key={l}
              onClick={() => onLangChange(l)}
              className={`px-2 py-1 text-[9.5px] font-mono uppercase rounded transition-all cursor-pointer ${
                lang === l
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold'
                  : 'text-slate-400 hover:text-slate-150 hover:bg-slate-900 border border-transparent'
              }`}
            >
              {l === 'zh' ? '中文' : l === 'en' ? 'EN' : '한국어'}
            </button>
          ))}
        </div>

        <div className="h-8 w-[1px] bg-slate-800/60 hidden lg:block"></div>

        {/* Core dynamic stats */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-end">
            <span className="text-slate-500 text-[10px]">{t.headerCoreAnalytics}</span>
            <span className="text-emerald-400 font-bold">{t.headerStable}</span>
          </div>
          <div className="h-8 w-[1px] bg-slate-800"></div>
          <div className="flex flex-col items-end">
            <span className="text-slate-500 text-[10px]">{t.headerPrecision}</span>
            <span className="text-white font-bold">99.8%</span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-slate-800 hidden sm:block"></div>

        {/* Dynamic UTC Clock */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-950 border border-slate-800/80 rounded text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>{currentTime} UTC</span>
        </div>

        {/* API Connection Indicator */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded border ${
          apiStatus.checked
            ? apiStatus.hasApiKey
              ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 animate-pulse'
              : 'bg-[#111622] border-cyan-500/20 text-cyan-400'
            : 'bg-slate-950 border-slate-800 text-slate-500'
        }`}>
          {apiStatus.checked ? (
            apiStatus.hasApiKey ? (
              <>
                <Wifi className="w-3.5 h-3.5" />
                <span>{t.headerApiLinked}</span>
              </>
            ) : (
              <>
                <Key className="w-3.5 h-3.5" />
                <span className="flex items-center gap-1">
                  {t.headerPresetMode}
                  <div className="group relative">
                    <HelpCircle className="w-3 h-3 text-cyan-400 cursor-help" />
                    <span className="pointer-events-none absolute right-0 bottom-6 w-56 p-2 bg-slate-900 border border-slate-700 text-[10px] text-slate-400 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal z-50 leading-relaxed font-sans normal-case">
                      {t.headerTooltip}
                    </span>
                  </div>
                </span>
              </>
            )
          ) : (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></div>
              <span>{t.headerVerifying}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
