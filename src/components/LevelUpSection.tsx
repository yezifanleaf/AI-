import { LevelUpAdvice } from '../types';
import { Award, Compass, BookOpen, Key } from 'lucide-react';
import { Language, translations } from '../translations';

interface LevelUpProps {
  levelUp: LevelUpAdvice;
  lang: Language;
}

export function LevelUpSection({ levelUp, lang }: LevelUpProps) {
  const t = translations[lang];

  return (
    <div className="space-y-6" id="levelup-section-container">
      {/* Overview Banner */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
        <div className="p-3 bg-purple-500/10 border border-purple-500/25 rounded-lg text-purple-400 mt-1">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-200">
            {t.mentorOverviewTitle}
          </h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {t.disruptedSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Innovation suggestions */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/45 border border-slate-800/80 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-3">
            <Compass className="w-4 h-4 animate-spin [animation-duration:15s]" />
            <span>{t.disruptedTitle}</span>
          </h4>

          <div className="space-y-4">
            {(levelUp.innovationIdeas || []).map((idea, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-slate-950/40 p-3.5 rounded-xl border border-slate-900 leading-relaxed text-xs">
                <div className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                  0{idx + 1}
                </div>
                <div className="text-slate-300">
                  {idea}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Search & Path */}
        <div className="space-y-6">
          {/* Deep search keywords card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-3">
              <Key className="w-4 h-4" />
              <span>{t.keywordsTitle}</span>
            </h4>

            <div className="flex flex-wrap gap-2">
              {(levelUp.keywords || []).map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[10.5px] font-mono rounded bg-slate-800/60 border border-slate-850 hover:bg-slate-800/90 text-slate-300 cursor-help"
                  title={t.keywordsTooltip}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Syllabus reading pathways */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#f59e0b] font-bold flex items-center gap-1.5 border-b border-slate-800 pb-3">
              <BookOpen className="w-4 h-4" />
              <span>{t.readingPathwayTitle}</span>
            </h4>

            <ul className="space-y-3">
              {(levelUp.learningPaths || []).map((pathItem, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span className="text-slate-400 font-sans leading-relaxed">{pathItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
