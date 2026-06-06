import React, { useEffect, useState } from 'react';
import { presetAnalyses } from './presets';
import { MasterworkAnalysis } from './types';
import { Header } from './components/Header';
import { WowSection } from './components/WowSection';
import { DissectionSection } from './components/DissectionSection';
import { MiuSection } from './components/MiuSection';
import { SandboxSection } from './components/SandboxSection';
import { LevelUpSection } from './components/LevelUpSection';
import { Language, translations, getLocalizedPreset } from './translations';
import { Sparkles, ArrowRight, Zap, Play, FileCode2, Command, Layers, Flame, BookOpen, AlertCircle, HelpCircle, Image, Video, Trash2 } from 'lucide-react';

export default function App() {
  // Masterpiece selection and analysis state
  const [activeAnalysis, setActiveAnalysis] = useState<MasterworkAnalysis>(presetAnalyses[0]);
  const [customText, setCustomText] = useState<string>("");
  const [category, setCategory] = useState<'web-effect' | 'visual-design' | 'copywriting' | 'interaction'>('web-effect');
  
  // Tab-based navigation inside step sections (Step 1 to Step 5)
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  // Active language state
  const [lang, setLang] = useState<Language>('zh');
  const t = translations[lang];

  // Map the active preset masterpiece dynamically based on chosen language
  const localizedActiveAnalysis = getLocalizedPreset(activeAnalysis, lang);

  // Health and connection state
  const [apiStatus, setApiStatus] = useState<{ checked: boolean; hasApiKey: boolean; error?: string }>({
    checked: false,
    hasApiKey: false
  });

  // Loading and generation state
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisLogs, setAnalysisLogs] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // States for uploaded screenshot and video files
  const [screenshotFile, setScreenshotFile] = useState<{ name: string; mimeType: string; data: string } | null>(null);
  const [videoFile, setVideoFile] = useState<{ name: string; mimeType: string; data: string } | null>(null);

  // Read upload image file to base64
  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert(lang === 'zh' ? '请选择有效的图片文件。' : lang === 'ko' ? '올바른 이미지 파일을 선택해주세요.' : 'Please select a valid image file.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const pureBase64 = base64String.split(',')[1];
        setScreenshotFile({
          name: file.name,
          mimeType: file.type,
          data: pureBase64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Read upload video file to base64
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('video/')) {
        alert(lang === 'zh' ? '请选择有效的视频文件。' : lang === 'ko' ? '올바른 비디오 파일을 선택해주세요.' : 'Please select a valid video file.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const pureBase64 = base64String.split(',')[1];
        setVideoFile({
          name: file.name,
          mimeType: file.type,
          data: pureBase64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Initial diagnostics checking
  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("/api/health");
        const data = await response.json();
        setApiStatus({
          checked: true,
          hasApiKey: data.hasApiKey
        });
      } catch (err: any) {
        setApiStatus({
          checked: true,
          hasApiKey: false,
          error: "无法建立后台检测链路门。"
        });
      }
    }
    checkHealth();
  }, []);

  // Cybernetic compilation logs animator
  const playTerminalLogs = (callback: () => void) => {
    const logs = lang === 'zh' ? [
      "⚡ [系统初始化] 连接逆向工程端口 3000...",
      "🔍 [原子探测] 捕获设计精髓与物理光谱原子...",
      "🔬 [单元剖解] 逐层解析最小动作单元 (MIUs)...",
      "🗜️ [蓝图绘制] 建立 Tailwind 极简重构配方路线图...",
      "🛠️ [沙盒编译] 注入响应式逻辑并加载微交互物理参数..."
    ] : lang === 'en' ? [
      "⚡ [SYSTEM INIT] CONNECTING DECONSTRUCT PORT 3000...",
      "🔍 [ATOMIZE] DETECTING DESIGN GENOMES AND COLOR ATOMS...",
      "🔬 [ANATOMIZE] SECTIONING MINIMAL IMPACT UNITS (MIU)...",
      "🗜️ [MAPPING] FORMULATING REBUILD BLUEPRINT ROADMAP...",
      "🛠️ [COMPILING] HARNESSING TAILWIND PHYSICS FOR CODES..."
    ] : [
      "⚡ [시스템 연동] 디컴파일 포트 3000 연결을 가동합니다...",
      "🔍 [디자인 탐색] 색상 아톰 레벨 스펙트럼과 물리 법칙 분석 중...",
      "🔬 [요소 필터링] 고성능 미니멀 기능 아웃풋(MIUs) 판별 중...",
      "🗜️ [구축 맵핑] Tailwind 기준 등가 재건 전술 설계 로드맵 빌드...",
      "🛠️ [로컬 시뮬레이션] 대화형 샌드박스 렌더러 반응성 마운트 완료..."
    ];
    let idx = 0;
    setAnalysisLogs([logs[0]]);

    const timer = setInterval(() => {
      idx++;
      if (idx < logs.length) {
        setAnalysisLogs(prev => [...prev, logs[idx]]);
      } else {
        clearInterval(timer);
        callback();
      }
    }, 1200);
  };

  // Triggers deconstruction querying the Express+Gemini API route
  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;

    setIsAnalyzing(true);
    setErrorMessage(null);

    playTerminalLogs(async () => {
      try {
        const filesPayload: any[] = [];
        if (screenshotFile) {
          filesPayload.push({
            data: screenshotFile.data,
            mimeType: screenshotFile.mimeType,
            type: 'image'
          });
        }
        if (videoFile) {
          filesPayload.push({
            data: videoFile.data,
            mimeType: videoFile.mimeType,
            type: 'video'
          });
        }

        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: customText,
            category,
            files: filesPayload
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || (lang === 'zh' ? "由于未知网络波动，分析执行中断。" : lang === 'en' ? "Analysis interrupted due to network fluctuations." : "네트워크 환경 불안정으로 분석 서버 응답이 지연되었습니다."));
        }

        const data: MasterworkAnalysis = await response.json();
        
        // Add analyzed result to start of presets (as memory history)
        setActiveAnalysis(data);
        setActiveStepTab(1); // Reset to first step tab
        setCustomText(""); // Clear text area
        setScreenshotFile(null); // Clear image file
        setVideoFile(null); // Clear video file
      } catch (err: any) {
        console.error(err);
        setErrorMessage(err.message || (lang === 'zh' ? "建立连接或解析语法失败。" : lang === 'en' ? "Connection or parsing failure." : "백엔드 분석 도중 통신 오류가 발생했습니다."));
      } finally {
        setIsAnalyzing(false);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#050608] text-slate-300 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-hidden" id="app-root-container">
      {/* Immersive background decoration (glowing dot matrix scan) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none immersive-dot-grid" style={{ minHeight: "100%" }}></div>

      {/* Header component with language selector bindings */}
      <Header apiStatus={apiStatus} lang={lang} onLangChange={setLang} />

      {/* Main workspace layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 z-10" id="main-workbench">
        
        {/* Sidebar Left: Presets cases and Analyze action terminal - Left 4 Cols */}
         <section className="lg:col-span-4 flex flex-col gap-6" id="sidebar-workbench">
          
          {/* Preset Masterpieces Selection Card */}
          <div className="p-5 rounded-lg bg-[#0c0e12] border border-slate-800 flex flex-col gap-3 relative overflow-hidden">
            {/* Embedded coordinate structure decoration */}
            <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
              <svg width="84" height="84" viewBox="0 0 100 100" className="text-cyan-500">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5"/>
              </svg>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-2 z-10">
              <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{t.galleryTitle}</span>
              </h3>
              <span className="text-[10px] font-mono text-slate-500">
                {presetAnalyses.length} {t.capsules}
              </span>
            </div>

            <p className="text-[10.5px] text-slate-400 leading-relaxed pl-0.5 z-10">
              {t.gallerySubtitle}
            </p>

            <div className="space-y-2 mt-1 z-10">
              {presetAnalyses.map((item, idx) => {
                const localizedItem = getLocalizedPreset(item, lang);
                const isActive = activeAnalysis.title === item.title;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveAnalysis(item);
                      setActiveStepTab(1);
                      setErrorMessage(null);
                    }}
                    className={`w-full text-left p-3.5 rounded border transition-all relative overflow-hidden cursor-pointer ${
                      isActive
                        ? 'bg-[#111622] border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.12)] text-white'
                        : 'bg-black/40 border-slate-800/80 hover:border-slate-700 hover:bg-[#0c0e12]/80 text-slate-300'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyan-500"></div>
                    )}
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <span className={`text-[9px] uppercase font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}>
                        {item.category === 'web-effect' ? t.categoryWeb : t.categoryInteraction}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{t.score}: {localizedItem.wowFactor.empathyScore}%</span>
                    </div>

                    <h4 className={`text-xs font-semibold line-clamp-1 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-250 group-hover:text-cyan-400'
                    }`}>
                      {localizedItem.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 font-light leading-relaxed">
                      {localizedItem.wowFactor.concept}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Analyze terminal window */}
          <div className="p-5 rounded-lg bg-[#0c0e12] border border-slate-800 flex flex-col gap-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                <Command className="w-4 h-4" />
                <span>{t.customDeconstructionLab}</span>
              </h3>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:8s]" />
            </div>

            <form onSubmit={handleAnalyze} className="space-y-3.5">
              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-[#50607a] mb-1.5">
                  {t.categoryLabel}
                </label>
                <div className="grid grid-cols-2 gap-1.5 p-1 bg-black/60 rounded">
                  <button
                    type="button"
                    onClick={() => setCategory('web-effect')}
                    className={`py-1.5 px-2 text-center text-[10.5px] font-mono rounded transition-colors cursor-pointer ${
                      category === 'web-effect'
                        ? 'bg-[#161a24] border border-slate-800 text-cyan-400 font-bold'
                        : 'text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    {t.categoryWeb}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategory('interaction')}
                    className={`py-1.5 px-2 text-center text-[10.5px] font-mono rounded transition-colors cursor-pointer ${
                      category === 'interaction'
                        ? 'bg-[#161a24] border border-slate-800 text-cyan-400 font-bold'
                        : 'text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    {t.categoryInteraction}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-[#50607a] mb-1.5">
                  {t.customLabel}
                </label>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  rows={4}
                  className="w-full bg-black/40 text-slate-300 text-xs rounded p-3 border border-slate-800 focus:border-cyan-500/60 focus:outline-none focus:ring-1 focus:ring-cyan-500 placeholder-slate-650 leading-relaxed font-sans"
                />
              </div>

              {/* Upload screenshot and video inputs */}
              <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded" id="media-upload-container">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#50607a] mb-2.5">
                  {t.mediaSectionTitle}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="media-grid">
                  {/* Screenshot card */}
                  <div className="relative border border-dashed border-slate-800 rounded bg-[#0d1016]/60 p-3 flex flex-col justify-center items-center group transition-colors hover:border-cyan-500/30">
                    {screenshotFile ? (
                      <div className="w-full h-full flex flex-col items-center gap-2 text-[10px] font-mono text-slate-450">
                        <div className="relative w-full h-16 bg-slate-900 border border-slate-800/80 rounded overflow-hidden flex items-center justify-center">
                          <img 
                            src={`data:${screenshotFile.mimeType};base64,${screenshotFile.data}`} 
                            alt="Screenshot Preview" 
                            className="object-contain w-full h-full"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="truncate max-w-full text-center px-1" title={screenshotFile.name}>
                          {screenshotFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setScreenshotFile(null)}
                          className="flex items-center gap-1 text-[10px] text-red-400 hover:text-red-300 transition-colors uppercase font-mono border border-red-500/20 bg-red-950/20 px-2 py-0.5 rounded cursor-pointer mt-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>{t.removeFile}</span>
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer w-full flex flex-col items-center justify-center gap-1.5 py-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                          <Image className="w-4 h-4 text-cyan-500/70 group-hover:text-cyan-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300 text-center transition-colors">
                          {t.uploadScreenshotLabel}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleScreenshotChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Video card */}
                  <div className="relative border border-dashed border-slate-800 rounded bg-[#0d1016]/60 p-3 flex flex-col justify-center items-center group transition-colors hover:border-cyan-500/30">
                    {videoFile ? (
                      <div className="w-full h-full flex flex-col items-center gap-2 text-[10px] font-mono text-slate-450">
                        <div className="relative w-full h-16 bg-slate-900 border border-slate-800/80 rounded overflow-hidden flex items-center justify-center">
                          <div className="flex flex-col items-center gap-1">
                            <Video className="w-5 h-5 text-emerald-400 animate-pulse" />
                            <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">VIDEO LOADED</span>
                          </div>
                        </div>
                        <span className="truncate max-w-full text-center px-1" title={videoFile.name}>
                          {videoFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setVideoFile(null)}
                          className="flex items-center gap-1 text-[10px] text-red-400 hover:text-red-300 transition-colors uppercase font-mono border border-red-500/20 bg-red-950/20 px-2 py-0.5 rounded cursor-pointer mt-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>{t.removeFile}</span>
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer w-full flex flex-col items-center justify-center gap-1.5 py-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                          <Video className="w-4 h-4 text-cyan-500/70 group-hover:text-cyan-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300 text-center transition-colors">
                          {t.uploadVideoLabel}
                        </span>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleVideoChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* Warnings and errors displayed inside terminal interface */}
              {errorMessage && (
                <div className="p-3.5 rounded bg-red-950/20 border border-red-500/20 text-red-400 text-xs leading-normal flex gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.errorObstacle}</strong>{errorMessage}
                  </span>
                </div>
              )}

              {apiStatus.checked && !apiStatus.hasApiKey && (
                <div className="p-3 rounded bg-[#161a24] border border-cyan-500/15 text-cyan-400/90 text-[10px] uppercase tracking-wider font-mono leading-relaxed">
                  ⚠️ <strong>{lang === 'zh' ? '数字链路待挂：' : lang === 'en' ? 'CONNECTION PENDING:' : 'API 대기 상태:'}</strong> {lang === 'zh' ? '由于系统尚未检测入驻的 API Key 密钥，自定义实时拆解暂时锁定。您仍可一键自由点击、精细缩放和预览上方多套顶级高保真案例沙盒。' : lang === 'en' ? 'Custom analysis requires a Gemini API Key. You are fully welcome to explore and customize any preloaded glassmorphic structures below.' : '실시간 멘토 모델의 API Key 입력이 대기 중입니다. 우측의 탑재된 명작 해부 샌드박스는 바로 완벽하게 구동 및 복제됩니다.'}
                </div>
              )}

              <button
                type="submit"
                disabled={isAnalyzing || !customText.trim()}
                className={`relative group w-full overflow-hidden rounded py-3 px-5 text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isAnalyzing || !customText.trim()
                    ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                    : 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-[0.98]'
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <Zap className="w-3.5 h-3.5 animate-bounce" />
                    <span>{t.analyzeButtonDisabled}</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t.analyzeButtonActive}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Simulated Live Console logs overlay */}
            {isAnalyzing && (
              <div className="p-3.5 rounded border border-slate-800 bg-black/85 font-mono text-[10.5px] text-cyan-400 space-y-1.5 transition-all animate-pulse">
                <div className="text-[10px] uppercase text-cyan-500/60 tracking-widest border-b border-cyan-500/20 pb-1 mb-1 font-bold">
                  {t.pipelineLogsHeader}
                </div>
                {analysisLogs.map((log, idx) => (
                  <div key={idx} className="line-clamp-1">{log}</div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Workspace Display Stage Right: Tabs showing the 5 Deconstruction process phases - Right 8 Cols */}
        <section className="lg:col-span-8 flex flex-col gap-6" id="deconstruct-stage">
          
          {/* Main Stage Top: Heading and Category specification */}
          <div className="p-5 md:p-6 rounded-lg bg-[#0c0e12] border border-slate-800 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                  {t.activeDeconstructedHeader}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  {localizedActiveAnalysis.title}
                </h2>
                {localizedActiveAnalysis.webpageUrl && (
                  <div className="mt-2 flex flex-wrap items-center gap-1 text-[11px] font-mono text-cyan-400">
                    <span className="text-slate-500 font-bold">{t.referenceLink}: </span>
                    <a
                      href={localizedActiveAnalysis.webpageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline flex items-center gap-1 hover:text-cyan-300 transition-colors"
                      id="webpage-ref-anchor"
                    >
                      {localizedActiveAnalysis.webpageUrl}
                      <ArrowRight className="w-3 h-3 inline rotate-[-45deg]" />
                    </a>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1.5 self-start sm:self-center font-mono text-[11px] px-3 py-1 bg-black border border-slate-800 rounded text-slate-350">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{localizedActiveAnalysis.category === 'web-effect' ? t.activeCategoryWeb : t.activeCategoryInteraction}</span>
              </div>
            </div>

            {/* Timeline Progress Step Indicator - Tab buttons */}
            <div className="flex border-b border-slate-800 bg-black/40 p-1 rounded" id="workflow-steps">
              {[
                { step: 1, tag: `${t.tabWow} // WOW FEATURE`, icon: Sparkles },
                { step: 2, tag: `${t.tabDissect} // FRAMEWORK`, icon: Command },
                { step: 3, tag: `${t.tabMiu} // MINIMAL IMPACT`, icon: Flame },
                { step: 4, tag: `${t.tabSandbox} // CODE SANDBOX`, icon: Play },
                { step: 5, tag: `${t.tabLevelUp} // INNOVATION`, icon: BookOpen }
              ].map((pill) => {
                const Icon = pill.icon;
                const isActive = activeStepTab === pill.step;
                return (
                  <button
                    key={pill.step}
                    onClick={() => setActiveStepTab(pill.step)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-mono font-bold tracking-wider transition-all uppercase cursor-pointer rounded-sm ${
                      isActive
                        ? 'text-cyan-400 bg-[#161a24] border-b-2 border-cyan-500 shadow-sm'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-black/20'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden md:inline">{pill.tag.split(" // ")[0]}</span>
                    <span className="md:hidden">{pill.tag.slice(0, 2)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Display Stage according to active tab */}
          <div className="flex-1" id="tab-viewport">
            {activeStepTab === 1 && <WowSection wow={localizedActiveAnalysis.wowFactor} lang={lang} />}
            {activeStepTab === 2 && <DissectionSection dissection={localizedActiveAnalysis.dissection} lang={lang} />}
            {activeStepTab === 3 && <MiuSection miu={localizedActiveAnalysis.miu} lang={lang} />}
            {activeStepTab === 4 && <SandboxSection plan={localizedActiveAnalysis.rebuildPlan} lang={lang} />}
            {activeStepTab === 5 && <LevelUpSection levelUp={localizedActiveAnalysis.levelUp} lang={lang} />}
          </div>

        </section>

      </main>

      {/* Humble digital signature footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 px-6 py-4 text-center font-mono text-[10px] text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <span>{t.footerInfo1}</span>
        <span>{t.footerInfo2}</span>
      </footer>
    </div>
  );
}
