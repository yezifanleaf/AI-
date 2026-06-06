import { WowFactor } from '../types';
import { Target, Heart, Eye } from 'lucide-react';
import { Language, translations } from '../translations';

interface WowSectionProps {
  wow: WowFactor;
  lang: Language;
}

export function WowSection({ wow, lang }: WowSectionProps) {
  const t = translations[lang];

  // Determine dial color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400 border-emerald-500/20';
    if (score >= 80) return 'text-cyan-400 border-cyan-500/20';
    return 'text-amber-400 border-amber-500/20';
  };

  return (
    <div className="space-y-6" id="wow-section-container">
      {/* Introduction Banner */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
        <div className="p-3 bg-red-500/10 border border-red-500/25 rounded-lg text-red-400 mt-1">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-200">
            {t.wowHeading}
          </h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {t.wowSummary}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Concept and Philosophy cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Concept Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/80 uppercase tracking-widest mb-3">
              <Eye className="w-4 h-4" />
              <span>{t.wowConceptLabel}</span>
            </div>
            <h3 className="text-base font-medium text-slate-100 leading-relaxed pl-1 pr-4">
              “{wow.concept}”
            </h3>
          </div>

          {/* Philosophy Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80 uppercase tracking-widest mb-3">
              <Target className="w-4 h-4" />
              <span>{t.wowPhilosophyLabel}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-1">
              {wow.philosophy}
            </p>
          </div>
        </div>

        {/* Empathy Score Dial Chart */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Concentric grid accents */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,65,85,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
          
          <Heart className="w-4 h-4 text-rose-500/60 absolute top-4 right-4" />

          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">
            {t.wowEmpathyScoreLabel}
          </span>

          {/* Visual Gauge */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
            
            {/* Glow sweep layer based on score */}
            <div className={`absolute inset-1 rounded-full border-2 border-dashed ${getScoreColor(wow.empathyScore)} animate-spin [animation-duration:12s] opacity-30`}></div>
            
            <div className="text-center z-10">
              <span className="text-5xl font-mono font-bold tracking-tighter text-white">
                {wow.empathyScore}
              </span>
              <span className="text-base text-slate-500 block font-mono -mt-1">%</span>
            </div>
          </div>

          {/* Verdict */}
          <div className="mt-5 space-y-1">
            <div className="text-xs font-semibold text-slate-300">
              {wow.empathyScore >= 90 ? t.wowRatingVeryHigh : t.wowRatingHigh}
            </div>
            <p className="text-[10px] text-slate-500 max-w-[190px] mx-auto font-sans leading-relaxed">
              {t.wowRatingDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
