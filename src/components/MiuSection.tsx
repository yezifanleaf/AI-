import { MinimalImpactUnit } from '../types';
import { ShieldCheck, Snowflake, Settings, Activity } from 'lucide-react';
import { Language, translations } from '../translations';

interface MiuProps {
  miu: MinimalImpactUnit[];
  lang: Language;
}

export function MiuSection({ miu, lang }: MiuProps) {
  const t = translations[lang];

  // Categorize elements
  const cores = miu.filter(item => item.category === 'core' || item.category === undefined);
  const accessories = miu.filter(item => item.category === 'accessory');

  const getHeatColor = (score: number) => {
    if (score >= 90) return 'bg-red-500';
    if (score >= 75) return 'bg-orange-500';
    return 'bg-blue-500';
  };

  const getHeatTextColor = (score: number) => {
    if (score >= 90) return 'text-red-400';
    if (score >= 75) return 'text-orange-400';
    return 'text-blue-400';
  };

  return (
    <div className="space-y-6" id="miu-section-container">
      {/* Overview Banner */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
        <div className="p-3 bg-cyan-500/10 border border-cyan-500/25 rounded-lg text-cyan-400 mt-1">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-200">
            {t.miuHeading}
          </h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {t.miuSummary}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Units Left */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-rose-950/40">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></div>
            <h4 className="text-sm font-mono tracking-wider text-rose-400 font-bold uppercase flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              <span>{t.miuLabelCore} ({cores.length})</span>
            </h4>
          </div>

          <div className="space-y-4">
            {cores.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono">No data...</p>
            ) : (
              cores.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-red-500/10 relative overflow-hidden group hover:border-red-500/25 transition-all">
                  <div className="absolute top-0 right-0 p-2 bg-red-500/5 text-[10px] text-red-400/80 uppercase font-mono font-bold tracking-widest rounded-bl-lg">
                    SOUL CORE
                  </div>
                  <h5 className="text-sm font-medium text-slate-100 font-mono pr-20">{item.name}</h5>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed bg-slate-950/40 p-2 rounded border border-slate-900/60">
                    <strong className="text-slate-300 font-normal">{lang === 'zh' ? '功能解析：' : lang === 'en' ? 'Function Spec: ' : '기능 수립 해석: '}</strong>{item.role}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono text-[10px] uppercase">{lang === 'zh' ? '重构权重 Value:' : lang === 'en' ? 'Rebuild Weight Value:' : '복제 가중치 연산:'}</span>
                      <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${getHeatColor(item.impactScore)}`} style={{ width: `${item.impactScore}%` }}></div>
                      </div>
                      <span className={`font-mono font-bold ${getHeatTextColor(item.impactScore)}`}>{item.impactScore}%</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-slate-300 pl-2 border-l-2 border-red-500/30">
                    <strong className="text-[10px] font-mono tracking-wider text-red-400/80 block mb-0.5 uppercase">{t.miuRecreateGuideLabel}</strong>
                    <span className="text-[11px] text-slate-400">{item.recreateGuide}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Accessory Units Right */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-cyan-950/40">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <h4 className="text-sm font-mono tracking-wider text-cyan-400 font-bold uppercase flex items-center gap-1.5">
              <Snowflake className="w-4 h-4" />
              <span>{t.miuLabelAccessory} ({accessories.length})</span>
            </h4>
          </div>

          <div className="space-y-4">
            {accessories.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono">No data...</p>
            ) : (
              accessories.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 relative overflow-hidden group hover:border-cyan-500/20 transition-all">
                  <div className="absolute top-0 right-0 p-2 bg-cyan-500/5 text-[10px] text-cyan-400/80 uppercase font-mono tracking-widest rounded-bl-lg">
                    ACCESSORY
                  </div>
                  <h5 className="text-sm font-medium text-slate-100 font-mono pr-20">{item.name}</h5>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed bg-slate-950/40 p-2 rounded border border-slate-900/60">
                    <strong className="text-slate-300 font-normal">{lang === 'zh' ? '功能说明：' : lang === 'en' ? 'Function Role: ' : '기능 연출 역할: '}</strong>{item.role}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono text-[10px] uppercase">{lang === 'zh' ? '影响比例 Scope:' : lang === 'en' ? 'Impact Scope:' : '공간 기여 비중:'}</span>
                      <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${getHeatColor(item.impactScore)}`} style={{ width: `${item.impactScore}%` }}></div>
                      </div>
                      <span className={`font-mono font-bold ${getHeatTextColor(item.impactScore)}`}>{item.impactScore}%</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-slate-300 pl-2 border-l-2 border-cyan-500/30">
                    <strong className="text-[10px] font-mono tracking-wider text-cyan-400/80 block mb-0.5 uppercase">{lang === 'zh' ? '♻️ 极简平替方案 // SUBSTITUTION METHOD' : lang === 'en' ? '♻️ LIGHTWEIGHT SUBSTITUTION // SUBSTITUTION METHOD' : '♻️ 간이 평대 보정안 // SUBSTITUTION METHOD'}</strong>
                    <span className="text-[11px] text-slate-400">{item.recreateGuide}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
