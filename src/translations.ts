export type Language = 'zh' | 'en' | 'ko';

export interface TranslationSet {
  galleryTitle: string;
  gallerySubtitle: string;
  capsules: string;
  categoryWeb: string;
  categoryInteraction: string;
  categoryLabel: string;
  customLabel: string;
  inputPlaceholder: string;
  apiStatusCheckedWarning: string;
  analyzeButtonDisabled: string;
  analyzeButtonActive: string;
  pipelineLogsHeader: string;
  activeDeconstructedHeader: string;
  activeCategoryWeb: string;
  activeCategoryInteraction: string;
  tabWow: string;
  tabDissect: string;
  tabMiu: string;
  tabSandbox: string;
  tabLevelUp: string;
  footerInfo1: string;
  footerInfo2: string;
  headerTitle: string;
  headerStatus: string;
  headerCoreAnalytics: string;
  headerPrecision: string;
  headerStable: string;
  headerApiLinked: string;
  headerPresetMode: string;
  headerVerifying: string;
  headerTooltip: string;
  customDeconstructionLab: string;
  uploadScreenshotLabel: string;
  uploadVideoLabel: string;
  mediaSectionTitle: string;
  removeFile: string;
  referenceLink: string;
  score: string;
  errorObstacle: string;
  mentorConsole: string;
  mentorQuote: string;
  disruptedTitle: string;
  disruptedSubtitle: string;
  keywordsTitle: string;
  keywordsTooltip: string;
  readingPathwayTitle: string;
  mentorOverviewTitle: string;
  
  // Specific internal sub-tab localized strings
  wowHeading: string;
  wowSummary: string;
  wowEmpathyScoreLabel: string;
  wowAestheticKeywordsLabel: string;
  wowConceptLabel: string;
  wowPhilosophyLabel: string;
  wowRatingVeryHigh: string;
  wowRatingHigh: string;
  wowRatingDesc: string;
  
  dissectionHeading: string;
  dissectionSummary: string;
  dissectionScaleLabel: string;
  dissectionFocusLabel: string;
  dissectionStepsTitle: string;
  dissectionVisualSection: string;
  dissectionTechSection: string;
  dissectionCopywritingSection: string;
  dissectionColorPalette: string;
  dissectionTechStack: string;
  dissectionKeyFunctions: string;
  dissectionStateManagement: string;
  dissectionPerfOptimization: string;
  dissectionEmotionCurve: string;
  dissectionNarrativeStructure: string;
  dissectionHookSetting: string;
  dissectionCallToAction: string;

  miuHeading: string;
  miuSummary: string;
  miuHighImpactTitle: string;
  miuHighImpactSubtitle: string;
  miuLowImpactTitle: string;
  miuLowImpactSubtitle: string;
  miuCostSectionTitle: string;
  miuCoreDevHours: string;
  miuInterativeComplexity: string;
  miuComplexityHigh: string;
  miuComplexityMed: string;
  miuComplexityUltra: string;
  miuLabelAccessory: string;
  miuLabelCore: string;
  miuRecreateGuideLabel: string;

  sandboxHeading: string;
  sandboxSummary: string;
  sandboxRunHtmlLabel: string;
  sandboxExplanationTitle: string;
  sandboxTimelineTitle: string;
  sandboxCodeTitle: string;
  sandboxTipsTitle: string;
  sandboxLaunchButton: string;
}

export const translations: Record<Language, TranslationSet> = {
  zh: {
    galleryTitle: "经典杰作展览库 // GALLERY",
    gallerySubtitle: "点击下方经过保姆级拆解的经典数字产品，立即触发整套视觉光谱、硬核技术剖析与微沙盒互演：",
    capsules: "CAPSULES",
    categoryWeb: "特效美学",
    categoryInteraction: "交互创意",
    categoryLabel: "1. 作品类型选取 // TYPE",
    customLabel: "2. 输入需要解剖的代码/文案/交互描述",
    inputPlaceholder: "示例：分析一个具有微光拖尾的3D悬浮发光按钮，或者是一段具有科幻质感的首屏技术文案...",
    apiStatusCheckedWarning: "检测到您的密钥未连接：自定义逆向分析暂时处于待载模式。您可以在右侧和上方直接操控并体验多套重构好的高保真极光/赛博朋克作品。",
    analyzeButtonDisabled: "导师正在像素解剖中...",
    analyzeButtonActive: "启动 AI 逆向剖析",
    pipelineLogsHeader: "REVERSING ANALYTIC CODES // PIPELINE",
    activeDeconstructedHeader: "ACTIVE DECONSTRUCTED MODEL",
    activeCategoryWeb: "网页美学规范",
    activeCategoryInteraction: "人机交互方案",
    tabWow: "亮点",
    tabDissect: "拆解",
    tabMiu: "MIU分析",
    tabSandbox: "沙盒重构",
    tabLevelUp: "超越",
    footerInfo1: "© 2026 REVERSE ENGINE ADVISOR // PEAK DIGITAL CRAFTSMANSHIP",
    footerInfo2: "SYSTEM BUILT IN STANDALONE CONTAINER PORT: 3000",
    headerTitle: "AI Reverse Engine Lab",
    headerStatus: "Status: Neural Synapse Active",
    headerCoreAnalytics: "CORE ANALYTICS",
    headerPrecision: "DECONSTRUCTION PRECISION",
    headerStable: "STABLE",
    headerApiLinked: "实时 API 链路正常",
    headerPresetMode: "预置案例验证模式",
    headerVerifying: "验证 API...",
    headerTooltip: "由于当前环境待注入 API KEY，系统已自动挂载超高保真度的重构教学大纲。键入并点击即可实时演绎。",
    customDeconstructionLab: "自定义拆解终端 // ANALYZE LAB",
    uploadScreenshotLabel: "上传截图 (图片格式)",
    uploadVideoLabel: "上传视频 (MP4等格式)",
    mediaSectionTitle: "3. 关联媒体参考资料 (可选)",
    removeFile: "移除此文件",
    referenceLink: "相关网页参考链接",
    score: "SCORE",
    errorObstacle: "解剖阻碍：",
    mentorConsole: "导师意见中控台 // MENTOR CONSOLE",
    mentorQuote: "“影子跟模糊度的比例才是这个悬浮感真正的秘密，1像素的内发光边缘更是重中之重。”",
    disruptedTitle: "数字艺术颠覆路径 // CREATIVE DISRUPTIONS",
    disruptedSubtitle: "学会模仿只是第一步，超越神采完成微创新才是真正的修行。不要停留在死套用中，借由导师推荐的进阶技术关键词与专案阅读路径，完成你的‘数字大作升格’！",
    keywordsTitle: "深水学术检索词 // KEYWORDS FOR SEARCH",
    keywordsTooltip: "可在 Google / Dribbble 进行此词组的深读探索",
    readingPathwayTitle: "推介精读专案路径 // SYLLABUS PATHWAYS",
    mentorOverviewTitle: "阶段 05 // 举一反三与进阶颠覆建议 (Level Up & Innovation)",

    wowHeading: "阶段 01 // 极客美学闪光因子探寻 (The WOW Factor)",
    wowSummary: "在每一个非凡 of 数字艺术品背后，都存在一种无法被忽视的‘神采气韵’。我们探索引导多维用户心智震颤的那个核心瞬间，称之为 WOW 因子。",
    wowEmpathyScoreLabel: "用户情感共鸣评分 (Wow Score)",
    wowAestheticKeywordsLabel: "核心美学意象原子",
    wowConceptLabel: "极性美学外显 // CORE CONCEPT HOOK",
    wowPhilosophyLabel: "人机情感共鸣 // DESIGN BELIEF",
    wowRatingVeryHigh: "⭐⭐⭐⭐⭐ 殿堂级神经链接",
    wowRatingHigh: "⭐⭐⭐⭐ 极精美交互触媒",
    wowRatingDesc: "评分综合了数字材质物理度、眼球停留时间权重及认知开销平衡性。",

    dissectionHeading: "阶段 02 // 黄金解构模型与视觉空间拆解",
    dissectionSummary: "在这一部分，我们将作品作为精密的几何体拆解，剖绘出极其精密的骨架与色彩光谱，理清在 DOM 空间中的分层渲染秩序与排布策略。",
    dissectionScaleLabel: "画布及几何比例 (Grid & Scale)",
    dissectionFocusLabel: "透视与渲染秩序 (Z-Index Hierarchy)",
    dissectionStepsTitle: "逐层逆向解析脉络 (Layered Logic Pathway)",
    dissectionVisualSection: "01 // 光谱与视觉物理学 (Visual Physics)",
    dissectionTechSection: "02 // 重建技术栈与硬核函数 (Engine Stack)",
    dissectionCopywritingSection: "03 // 情感文案与心智触发 (Mind & Writing)",
    dissectionColorPalette: "核心色彩色谱 (Color Atoms)",
    dissectionTechStack: "推荐技术栈 (Stack)",
    dissectionKeyFunctions: "硬核驱动函数 (Key Methods)",
    dissectionStateManagement: "关键状态管理 (State Management)",
    dissectionPerfOptimization: "渲染性能保证 (Performance Tuning)",
    dissectionEmotionCurve: "用户情感起伏曲线 (Emotion Curve)",
    dissectionNarrativeStructure: "技术文案叙事结构 (Narrative)",
    dissectionHookSetting: "视觉诱饵与高光落点 (Visual Hook)",
    dissectionCallToAction: "微转化终点按压设计 (CTA Design)",

    miuHeading: "阶段 03 // 极简影响单元划分 (Minimal Impact Unit)",
    miuSummary: "卓越的项目往往是用 20% 的核心元素撑起了 80% 的高级视觉感。将次要细节过滤，深度挖掘那些‘低维护、高画质评分’的高回报单元（MIUs）。",
    miuHighImpactTitle: "高爆发影响力核心 (HIGH IMPACT ATOMS - 80% WOW)",
    miuHighImpactSubtitle: "花费极少渲染性能或极低重绘资源，即可产生质变的高权重动画或滤镜。",
    miuLowImpactTitle: "长尾装饰性低耗能 (LOW IMPACT DECORATIONS - 20% WOW)",
    miuLowImpactSubtitle: "复杂耗费性能、但在整体感官中处于静止或视觉远景的冗余点缀。",
    miuCostSectionTitle: "物理成本与心智成本解剖",
    miuCoreDevHours: "预计核心开发工时",
    miuInterativeComplexity: "人机心智交互负荷",
    miuComplexityHigh: "高保真 // 精细",
    miuComplexityMed: "中等 // 适度",
    miuComplexityUltra: "极高级 // 沉浸式",
    miuLabelAccessory: "装饰增强 (Accessory)",
    miuLabelCore: "灵魂核心 (Core)",
    miuRecreateGuideLabel: "复刻避坑要旨 // IMPLEMENTATION TUTORIAL",

    sandboxHeading: "阶段 04 // 1:1 特效沙盒推演与重构 (Tailwind Blueprint Code Sandbox)",
    sandboxSummary: "在此处，可直接执行并调节代码属性。我们不仅为你还原了杰作的原生渲染架构，更为你准备了一键导入的 Tailwind 极简代码模板。",
    sandboxRunHtmlLabel: "实时代码沙盒物理编译结果",
    sandboxExplanationTitle: "逆向架构原理解析 // BLUEPRINT DECRYPTION",
    sandboxTimelineTitle: "等效重建核心链路 // ARCHITECT STEPS",
    sandboxCodeTitle: "沉浸式等效重构代码 // TAILWIND & CSS SOURCE",
    sandboxTipsTitle: "沙盒微调玩法 // RECONSTRUCT WORKFLOW",
    sandboxLaunchButton: "开始逆向复刻"
  },
  en: {
    galleryTitle: "CLASSIC MASTERPIECE GALLERY // GALLERY",
    gallerySubtitle: "Click any masterwork dissected in detail below to trigger its visual spectrums, core specs, and interactive sandboxes:",
    capsules: "CAPSULES",
    categoryWeb: "Effects",
    categoryInteraction: "Interactive",
    categoryLabel: "1. SELECT TYPE // TYPE",
    customLabel: "2. INPUT CODE, COPY, OR INTERACTION DESCRIPTION",
    inputPlaceholder: "e.g., Analyze a 3D glassmorphic button with elegant glowing tail effects or some sci-fi copywriting...",
    apiStatusCheckedWarning: "No API Key connected: Custom deconstruction runs in preset demo mode. You can interact directly with pre-loaded glassmorphic setups.",
    analyzeButtonDisabled: "Analyzing...",
    analyzeButtonActive: "START AI DECONSTRUCTION",
    pipelineLogsHeader: "REVERSING ANALYTIC CODES // PIPELINE",
    activeDeconstructedHeader: "ACTIVE DECONSTRUCTED MODEL",
    activeCategoryWeb: "Web Aesthetic Spec",
    activeCategoryInteraction: "Human Interaction Scheme",
    tabWow: "Highlights",
    tabDissect: "Deconstruct",
    tabMiu: "MIU",
    tabSandbox: "Sandbox",
    tabLevelUp: "Level Up",
    footerInfo1: "© 2026 REVERSE ENGINE ADVISOR // PEAK DIGITAL CRAFTSMANSHIP",
    footerInfo2: "SYSTEM BUILT IN STANDALONE CONTAINER PORT: 3000",
    headerTitle: "AI Reverse Engine Lab",
    headerStatus: "Status: Neural Synapse Active",
    headerCoreAnalytics: "CORE ANALYTICS",
    headerPrecision: "DECONSTRUCTION PRECISION",
    headerStable: "STABLE",
    headerApiLinked: "Live API Linked",
    headerPresetMode: "Preset Demo Mode",
    headerVerifying: "Verifying API...",
    headerTooltip: "Since your API key is pending, we have preloaded high-fidelity deconstruction pathways. Type or click to run instantly.",
    customDeconstructionLab: "CUSTOM DECONSTRUCTION TERMINAL",
    uploadScreenshotLabel: "Upload Screenshot (Image)",
    uploadVideoLabel: "Upload Video (MP4 etc.)",
    mediaSectionTitle: "3. ATTACH MEDIA RESOURCES (OPTIONAL)",
    removeFile: "Remove file",
    referenceLink: "Related Web Reference Link",
    score: "SCORE",
    errorObstacle: "Analytic Obstruction: ",
    mentorConsole: "MENTOR CONSOLE",
    mentorQuote: "“Focus on the shadow-to-blur ratio. It's the secret to the floating effect, and a 1px inside glow border is the ultimate key.”",
    disruptedTitle: "CREATIVE DISRUPTIONS & INNOVATION",
    disruptedSubtitle: "Imitation is merely the first step; transcending the standard to achieve micro-innovation is real craftsmanship. Don't just copy templates—leverage these keyword pathways for genuine design breakthrough.",
    keywordsTitle: "DEEP ACADEMIC KEYWORDS",
    keywordsTooltip: "Explore these professional key terms on Google or Dribbble",
    readingPathwayTitle: "RECOMMENDED READING PATHWAYS",
    mentorOverviewTitle: "Phase 05 // Innovation & Level-Up Advice (Level Up)",

    wowHeading: "Phase 01 // Discovering the Mystic 'Wow' Factor",
    wowSummary: "Behind every extraordinary digital masterpiece, there is an indisputable 'soul and spirit'. We explore the core dynamic spark that touches users deeply.",
    wowEmpathyScoreLabel: "User Empathy Score",
    wowAestheticKeywordsLabel: "Core Imago & Visual Palette Atoms",
    wowConceptLabel: "CORE CONCEPT HOOK",
    wowPhilosophyLabel: "DESIGN BELIEF",
    wowRatingVeryHigh: "⭐⭐⭐⭐⭐ Hall of Fame Bond",
    wowRatingHigh: "⭐⭐⭐⭐ Premium Interactive Catalyst",
    wowRatingDesc: "Score integrates physics factor, visual fixation weight, and cognitive friction balance.",

    dissectionHeading: "Phase 02 // Geometric Deconstruction & Layering Spec",
    dissectionSummary: "Here, we decompose the masterpiece like a precision crystal object, layout its exact skeletal grids, color spectrums, and rendering order inside the DOM canvas.",
    dissectionScaleLabel: "Layout, Grid & Proportion Systems",
    dissectionFocusLabel: "Perspective & Z-index Layers Hierarchy",
    dissectionStepsTitle: "Layer-by-Layer Reconstruction Logical Pathway",
    dissectionVisualSection: "01 // Visual Physics & Spectrum",
    dissectionTechSection: "02 // Engine Stack & Hardcore Functions",
    dissectionCopywritingSection: "03 // Copywriting Narrative & Mind Trigger",
    dissectionColorPalette: "Core Color Atoms",
    dissectionTechStack: "Recommended Tech Stack",
    dissectionKeyFunctions: "Hardcore Key Methods",
    dissectionStateManagement: "Core State Management",
    dissectionPerfOptimization: "Performance Optimization",
    dissectionEmotionCurve: "User Emotional Curve",
    dissectionNarrativeStructure: "Narrative & Text Structure",
    dissectionHookSetting: "Visual Hook Spot",
    dissectionCallToAction: "CTA press micro-interaction",

    miuHeading: "Phase 03 // Minimal Impact Units (MIU) Division",
    miuSummary: "Premium projects prioritize the 20% core elements that deliver 80% high-fidelity aesthetics. Eliminate secondary visual noise to pinpoint maximum return MIUs.",
    miuHighImpactTitle: "HIGH IMPACT ATOMS - 80% WOW FACTOR",
    miuHighImpactSubtitle: "Low rendering cost, high aesthetic return animations, filters, or glowing highlights.",
    miuLowImpactTitle: "LOW IMPACT DECORATIONS - 20% DECORATION",
    miuLowImpactSubtitle: "High-performance costs, static or background details that barely affect user perception.",
    miuCostSectionTitle: "Cognitive Load & Engineering Overhead Analysis",
    miuCoreDevHours: "Estimated Core Crafting Hours",
    miuInterativeComplexity: "Cognitive Mind Interaction Load",
    miuComplexityHigh: "High-Fidelity Fine Craft",
    miuComplexityMed: "Balanced / Standard",
    miuComplexityUltra: "Immersive Ultra Design",
    miuLabelAccessory: "Accessory / Decor",
    miuLabelCore: "Core Soul Element",
    miuRecreateGuideLabel: "IMPLEMENTATION TUTORIAL & TIPS",

    sandboxHeading: "Phase 04 // 1:1 Live Interactive Concept Sandbox",
    sandboxSummary: "Directly modify code attributes here. We reconstructed the masterpiece's core layout and prepared highly reusable Tailwind CSS components.",
    sandboxRunHtmlLabel: "Real-time Live Sandbox Visual Playground Renderer",
    sandboxExplanationTitle: "RECONSTRUCT ARCHITECTURAL PRINCIPLES",
    sandboxTimelineTitle: "STEP-BY-STEP RECONSTRUCTION PATHWAY",
    sandboxCodeTitle: "PRODUCTION-READY CODE SNIPPET",
    sandboxTipsTitle: "PLAYGROUND TWEAK GUIDE",
    sandboxLaunchButton: "REPLAY INTEGRATION"
  },
  ko: {
    galleryTitle: "클래식 명작 전시관 // GALLERY",
    gallerySubtitle: "아래 상세히 해부된 명작을 클릭하면 비주얼 스펙트럼, 핵심 아키텍처 및 복제용 대화형 샌드박스가 즉시 구동됩니다:",
    capsules: "CAPSULES",
    categoryWeb: "웹 이펙트",
    categoryInteraction: "인터랙티브",
    categoryLabel: "1. 디지털 아트 유형 선택 // TYPE",
    customLabel: "2. 역공학 분석할 코드, 카피문구 및 동작 설명 입력",
    inputPlaceholder: "예: 은은한 발광 효과가 있는 3D 글래스모피즘 호버 버튼 또는 공상과학 느낌의 메인 카피 문구 분석...",
    apiStatusCheckedWarning: "API 키가 준비 중입니다: 커스텀 분석은 데모 전용 모드로 작동합니다. 우측에서 완성도 높은 프리셋 아키텍처를 우선 체험하실 수 있습니다.",
    analyzeButtonDisabled: "마스터 해부 프로세스 진행 중...",
    analyzeButtonActive: "AI 역공학 해부 시작",
    pipelineLogsHeader: "REVERSING ANALYTIC CODES // PIPELINE",
    activeDeconstructedHeader: "ACTIVE DECONSTRUCTED MODEL",
    activeCategoryWeb: "웹 디자인 가이드라인",
    activeCategoryInteraction: "인터랙티브 동작 설계안",
    tabWow: "하이라이트",
    tabDissect: "구조 해부",
    tabMiu: "MIU 분석",
    tabSandbox: "샌드박스",
    tabLevelUp: "한계 돌파",
    footerInfo1: "© 2026 REVERSE ENGINE ADVISOR // PEAK DIGITAL CRAFTSMANSHIP",
    footerInfo2: "SYSTEM BUILT IN STANDALONE CONTAINER PORT: 3000",
    headerTitle: "AI Reverse Engine Lab",
    headerStatus: "Status: Neural Synapse Active",
    headerCoreAnalytics: "핵심 분석 매트릭스",
    headerPrecision: "디지털 해부 정밀도",
    headerStable: "정상 작동",
    headerApiLinked: "실시간 API 채널 활성",
    headerPresetMode: "데모 전용 모델",
    headerVerifying: "API 검증 중...",
    headerTooltip: "현재 환경에 API 키가 내장되어 있지 않아 초고정밀 명작 해부 데이터가 탑재되었습니다. 텍스트 입력 후 멋진 샌드박스를 경험하세요.",
    customDeconstructionLab: "커스텀 해부 터미널 // ANALYZE LAB",
    uploadScreenshotLabel: "스크린샷 업로드 (이미지)",
    uploadVideoLabel: "비디오 업로드 (MP4 권장)",
    mediaSectionTitle: "3. 미디어 참조 자료 연동 (선택)",
    removeFile: "파일 삭제",
    referenceLink: "관련 웹페이지 참조 링크",
    score: "SCORE",
    errorObstacle: "해부 프로세스 중단: ",
    mentorConsole: "마스터 멘토 코멘트",
    mentorQuote: "“그림자와 블러 반경의 황금 비율이야말로 공중에 둥둥 떠 있는 플로팅 효과의 비결이며, 1px 안쪽 하이라이트 테두리가 핵심입니다.”",
    disruptedTitle: "디지털 예술 혁신 및 한계 돌파 방안",
    disruptedSubtitle: "단순히 모방하는 것은 시작일 뿐이며, 독창적인 가치를 입혀 완전히 초월하는 것이 장인정신입니다. 추천 키워드와 프로젝트 경로를 활용해 완전히 승격된 작품을 만드세요.",
    keywordsTitle: "학술 연구용 핵심 키워드",
    keywordsTooltip: "Google 또는 Dribbble 등에서 고급 검색어로 활용 가능한 키워드군입니다.",
    readingPathwayTitle: "추천 연계 학습 프로젝트",
    mentorOverviewTitle: "단계 05 // 응용과 차세대 한계 돌파 제언 (Level Up & Innovation)",

    wowHeading: "단계 01 // 명작 고유의 영적 'Wow' 팩터 발견",
    wowSummary: "모든 최고급 디지털 인터페이스에는 사용자 경험을 완전히 뒤흔드는 '정수'가 존재합니다. 사용자 감성을 자극하는 최고의 순간을 'WOW 팩터'로 규명해 봅니다.",
    wowEmpathyScoreLabel: "사용자 감성 공명 평가",
    wowAestheticKeywordsLabel: "비주얼 테마 및 핵심 심상 키워드",
    wowConceptLabel: "핵심 비주얼 후크 메커니즘",
    wowPhilosophyLabel: "감성 공명 디자인 철학",
    wowRatingVeryHigh: "⭐⭐⭐⭐⭐ 명예의 전당급 교감",
    wowRatingHigh: "⭐⭐⭐⭐ 정교한 인터랙티브 촉매",
    wowRatingDesc: "점수는 인터리빙 물리 비률, 안구 주시 시간 가중치 및 인지 마찰 균형을 종합 반영했습니다.",

    dissectionHeading: "단계 02 // 기하학적 설계 전개 및 레이어 구조",
    dissectionSummary: "해당 파트에서는 작품을 하나의 정밀한 기하학적 파트로 나누어, 렌더링 순서와 DOM 구조, 정확한 프레임 스케일을 시각 아해부도로 드러냅니다.",
    dissectionScaleLabel: "레이아웃 그리드 및 스케일 시스템",
    dissectionFocusLabel: "투시 원근법 및 Z-index 레이어 권한 배정",
    dissectionStepsTitle: "단계별 심층 구조 역설계 전개 규칙 (Layered Logical Pathway)",
    dissectionVisualSection: "01 // 비주얼 물리 및 색상 스펙트럼",
    dissectionTechSection: "02 // 엔진 스택 및 핵심 드라이버 메서드",
    dissectionCopywritingSection: "03 // 카피라이팅 내러티브 및 마인드 트리거",
    dissectionColorPalette: "핵심 레이어 색상 아톰",
    dissectionTechStack: "추천 개발 환경 스택",
    dissectionKeyFunctions: "하드코어 엔진 주요 함수",
    dissectionStateManagement: "정밀 상태 관리 전략",
    dissectionPerfOptimization: "렌더링 하드웨어 최적화",
    dissectionEmotionCurve: "사용자 감정 반응 곡선",
    dissectionNarrativeStructure: "기술 문구 내러티브 패턴",
    dissectionHookSetting: "시각적 가선 낙하 지점",
    dissectionCallToAction: "압력 피드백 정밀 버튼 설계",

    miuHeading: "단계 03 // 미니멀 임팩트 유닛 (MIU) 핵심 요소 가려내기",
    miuSummary: "위대한 결과물은 20%의 핵심 요소가 전체 디자인 완성도의 80%를 담당합니다. 리소스 효율을 저하시키는 장식들을 걷어내고 최고 수준의 유효 유닛(MIU)들을 도출합니다.",
    miuHighImpactTitle: "고효율 핵심 임팩트 아톰 (HIGH IMPACT ATOMS - 80% WOW)",
    miuHighImpactSubtitle: "CPU/GPU 리소스를 극히 소량 점유하면서도 압도적인 완성도를 유발하는 핵심 셰이더 및 필터 효과.",
    miuLowImpactTitle: "정적 데코레이션 요소 (LOW IMPACT DECORATIONS - 20% WOW)",
    miuLowImpactSubtitle: "모션 렌더링에 필요한 사양은 매우 크지만 전체 디자인 분위기에만 간접 기여하는 조연급 장식들.",
    miuCostSectionTitle: "사용자 인지 부하 및 정밀 빌드 공수 해부",
    miuCoreDevHours: "예상 집중 설계 공수 시간",
    miuInterativeComplexity: "사용자 인지 동작 부하 수준",
    miuComplexityHigh: "정밀 럭셔리 설계",
    miuComplexityMed: "안정적 표준 설계",
    miuComplexityUltra: "최고급 실시간 인터랙션",
    miuLabelAccessory: "보조 악세사리 요소",
    miuLabelCore: "핵심 소울 코어",
    miuRecreateGuideLabel: "구현 시 트러블슈팅 및 가이드라인",

    sandboxHeading: "단계 04 // 1:1 라이브 인터랙티브 코드 샌드박스",
    sandboxSummary: "여기서 실시간으로 코드 변수를 튜닝하고 실험할 수 있습니다. 명작 구조를 완전히 분석하고 그대로 이식 가능한 깔끔한 Tailwind CSS 리소스 모델을 확보하세요.",
    sandboxRunHtmlLabel: "실시간 대화형 샌드박스 시각 플레이그라운드 렌더러",
    sandboxExplanationTitle: "역공학 엔지니어링 설계 설계 원리 설명",
    sandboxTimelineTitle: "단계별 등가 재건 전개 경로",
    sandboxCodeTitle: "즉시 이식 및 사용 가능한 정밀 CSS/Tailwind 코드",
    sandboxTipsTitle: "샌드박스 커스텀 튜닝 팁",
    sandboxLaunchButton: "인터랙션 리플레이"
  }
};

/**
 * Maps static Chinese/English presets dynamically to chosen language so users get a fully localized experience.
 */
export function getLocalizedPreset(preset: any, lang: Language): any {
  if (!preset) return preset;

  // Let's identify the preset and return a meticulously translated version.
  const isGlass = preset.title.includes("极光") || preset.title.includes("Glassmorphism");
  const isCyber = preset.title.includes("赛博") || preset.title.includes("Cyberpunk");

  if (isGlass) {
    if (lang === 'en') {
      return {
        ...preset,
        title: "Glassmorphism Frosted Card",
        wowFactor: {
          concept: "The card feels like two overlapping semi-translucent frosted ice plates with a subtle ambient aurora glow shifting in the background following the cursor. It is outlined with a 1px iridescent specular glow border, giving it a premium optical depth.",
          philosophy: "A sophisticated integration of physical refractics and digital material science. High-transmission frosted layers combined with high radius blurs create physical depth and elegant flowing breath.",
          empathyScore: 94
        },
        dissection: {
          visual: {
            colors: [
              { hex: "#0f172a", description: "Deep grid-space blue. Accents the luminance and saturation of the back light aurora." },
              { hex: "#ffffff12", description: "Main frosted card face, providing 12% specular physical translucent reflection." },
              { hex: "#38bdf8", description: "Polar Sky Cyan. Serves as the primary unfocused ambient lighting source in top-left." },
              { hex: "#c084fc", description: "Aurora Pale Violet. Serves as the secondary light source to build warm-cold contrast." }
            ],
            gridSystem: "Solo Hero Panel layout. Uses generous negative space and the Golden Ratio (1:1.618) to elevate card precision.",
            shadowsLighting: "Layered internal shadow stack: Outside features soft 0 32px 64px -24px drop shadow. Two diffuse layers (Blur 120px) refract at the back.",
            typography: "High-contrast sans-serif pairing: Inter Light (300 weight) with spacious tracking for headers; low-opacity mid tones for body text to maintain elite tech look."
          },
          technical: {
            stack: ["React", "Tailwind CSS", "Motion", "CSS backdrop-filter"],
            keyFunctions: [
              "backdrop-filter: blur(20px) - Physical real glass refraction simulation",
              "gradient border using mask - Achieves 1px specular micro-borders smoothly",
              "motion-hook: mousemove tracker - Drives mouse dynamic responsive parallax offset"
            ],
            stateManagement: "Local motion state: captures native `relativeX` and `relativeY` positions of the cursor to calculate ambient lighting offset in 3D perspective.",
            perfOptimization: "Leverages `will-change: transform` and GPU-accelerated standard transitions to isolate glowing filter layers, preventing page heavy weight repaints."
          },
          copywriting: {
            emotionCurve: "Serene -> Explore -> Astonish. Zero-intrusion structures create peace, while tiny cursor responses spark immediate agency and interest.",
            narrativeStructure: "Ultra-condensed tech-matrix parameters. Let precision stats tell the quality, replacing marketing pitches with silent confidence.",
            hookSetting: "An ultra-tiny pulsing emerald dot in top-right with fluid rippling waves, acting as a visual magnet.",
            callToAction: "A high-fidelity solid white CTA button. Clicking registers tactile negative scale feedback with expanding brightness overlay."
          }
        },
        miu: [
          {
            name: "backdrop-filter: blur(20px)",
            category: "core",
            role: "Soul refraction physics. Without it, the card turns into a flat opaque block, instantly losing all optical thickness.",
            impactScore: 100,
            recreateGuide: "Must have a vibrant high-saturation background. On pure black/white backdrops, blurs lose all relative refraction detail."
          },
          {
            name: "1px Specular Translucent Border",
            category: "core",
            role: "Simulates crisp outer reflections. Helps carve the glass surface clearly out of the ambient space.",
            impactScore: 85,
            recreateGuide: "Use border-white/20 with linear gradients, or build a ::before pseudo-element coupled with CSS mask clips to reach a 1px micro hairline."
          },
          {
            name: "Diffuse Backdrop Glow Layer",
            category: "accessory",
            role: "Immersive depth enhancer. Shimmers dynamically. Can be flatly replaced by a static low-saturated image banner if memory optimization is paramount.",
            impactScore: 60,
            recreateGuide: "Set absolute div with bg-radial-gradient, apply blur-3xl, and map gentle offsets using standard mouse-position handlers."
          }
        ],
        rebuildPlan: {
          rebuildPhilosophy: "Ditch complex nested box-shadows. Deploy 1px Specular Highlight lines representing physical prisms, backed by a twin-aurora ambient backglow.",
          keySteps: [
            { stepNumber: 1, title: "Ambient Base Setup", content: "Assemble deep slate-950 backdrop. Pin two bright, focused radial balls (cyan and purple) with high blur-3xl dispersion." },
            { stepNumber: 2, title: "Refractive Framework", content: "Implement a flex container with bg-white/10 and backdrop-blur-xl to act as the glass card, matching 2xl rounded edges." },
            { stepNumber: 3, title: "Prprism Highlights", content: "Coat with a border-white/25 border pattern to draft precise light reflections across the card margins." },
            { stepNumber: 4, title: "Tactile Interaction", content: "Attach standard hover states, causing the ambient background to expand and the frosted frame to warp gracefully towards the user." }
          ],
          sandboxCodes: [
            {
              language: "html",
              title: "Aurora Glass Panel Rebuild",
              description: "A production-ready responsive glassmorphic panel powered by Tailwind CSS CDN. Shifting aurora glows respond to hover states in real-time.",
              code: preset.rebuildPlan.sandboxCodes[0].code
            }
          ]
        },
        levelUp: {
          innovationIdeas: [
            "Integrate continuous Gyroscopic Parallax. When the cursor swings, drift the background gradient +15px and the card's reflections -15px to produce a striking three-dimensional physical depth.",
            "Turn static highlights into a flowing neon border stream using a looping linear-gradient position animation (Neon Border Run)."
          ],
          keywords: ["CSS backdrop-filter clipping-mask", "Ambient Light UI Principles", "React Spring Physics Animations", "3D Gyroscope Web Interface"],
          learningPaths: [
            "Model Material design principles coupled with modern skeuomorphism approaches.",
            "Pragmatic color-picking exploration: Focus heavily on 'high-contrast dark environment vs high-translucency panels' layout patterns on Dribbble."
          ]
        }
      };
    } else if (lang === 'ko') {
      return {
        ...preset,
        title: "오로라 글래스모피즘 카드",
        wowFactor: {
          concept: "카드가 마치 두 장의 반투명 프로스트 아크릴 판이 겹쳐진 듯한 질감을 띄며, 그 뒤편으로 마우스 반응식 공간 오로라(Radial Glow)가 실시간으로 일렁이고, 1픽셀 미세 무지개 프리즘 테두리가 극상의 깊이감과 가볍고 투명한 세련미를 뿜어냅니다.",
          philosophy: "자연적인 광학 굴절 법칙과 디지털 재료 역학의 예술적 융합. 반투명 소재에 고밀도 가우스 블러를 합성하여, 픽셀 격자 위에서 물리적 입체감과 영적인 호흡 선율을 느끼게 합니다.",
          empathyScore: 94
        },
        dissection: {
          visual: {
            colors: [
              { hex: "#0f172a", description: "심해 그리드 스페이스 블루. 극광의 디퓨즈 광도를 완벽한 대조로 정착시킵니다." },
              { hex: "#ffffff12", description: "반투명 가공 글래스 보드. 12% 사양의 프로스트 흰빛 분산 반사를 담아냅니다." },
              { hex: "#38bdf8", description: "북해 시안. 왼쪽 상단 메인 라이트 소싱으로 시원한 느낌을 유도합니다." },
              { hex: "#c084fc", description: "극광 바이올렛. 오른쪽 하단 서브 라이팅으로 차갑고 따뜻한 조화로운 대비를 구현합니다." }
            ],
            gridSystem: "독자적 히어로 패널(Solo Hero Panel) 정렬. 깊은 여백(Negative Space)과 1:1.618 황금비로 극도의 고급스러움을 고양합니다.",
            shadowsLighting: "다중 광원 섀도우: 외부는 0 32px 64px -24px의 부드럽고 가라앉은 광범위 그림자, 배후에는 120px 가우시안 백그라운드 굴절 광원으로 부유감을 만듭니다.",
            typography: "고대비 고정밀 산세리프 매칭: Inter Light (300 굵기) 폰트에 넓은 자간 설정으로 가치 중심의 전문가적 기조를 표현합니다."
          },
          technical: {
            stack: ["React", "Tailwind CSS", "Motion", "CSS backdrop-filter"],
            keyFunctions: [
              "backdrop-filter: blur(20px) - 실시간 흐림 효과 물리학 이식",
              "gradient border using mask - 1px 규격 극세 반투명 테두리 드로잉",
              "motion-hook: mousemove tracker - 마우스 트래킹을 통한 상호작용 광원 추종 알고리즘"
            ],
            stateManagement: "이벤트 최적화 상태 관리: 마우스 무브 `relativeX`, `relativeY` 좌표 값을 반응형 변수로 바인딩하여 3D 시차 스펙트럼 벡터를 정밀 전개합니다.",
            perfOptimization: "광원 연산 필터 레이어에 `will-change: transform` 속성을 적용해 GPU가 직접 하드웨어 스왑 레이어로 합성 처리하도록 유도, 부드러운 120FPS 동작을 보증합니다."
          },
          copywriting: {
            emotionCurve: "차분함 -> 자유로운 탐색 -> 감탄. 군더더기 없는 극도의 정돈이 신비로운 감정을 자극하며, 마우스 끝에 호응하는 미려한 빛을 피울 때 강한 즐거움을 전달합니다.",
            narrativeStructure: "함축된 정밀 수치 위주의 대안 서술. 화려한 미사여구 대신 격이 다른 완성도의 테이터 수치 목록을 대칭 배치하여 브랜드적 확신을 완성합니다.",
            hookSetting: "상단 오른쪽에 주기적으로 깜빡이는 아라비안 에메랄드 상태 표시등이 넓은 여백 속 시선의 최종 정밀 주시점으로 기능합니다.",
            callToAction: "하단 고광도 화이트 프릭션 버튼 설계. 클릭 시 물리적인 수축 디프레션 효과와 안쪽 내부 플레어 밝기가 확산하며 높은 가치의 동작 완결성을 안겨줍니다."
          }
        },
        miu: [
          {
            name: "backdrop-filter: blur(20px)",
            category: "core",
            role: "유리 물리 질감 정의. 이 속성이 배제되면 카드는 단순 인스턴스 그레이 박스가 되어 입체감을 완전히 박탈당합니다.",
            impactScore: 100,
            recreateGuide: "반드시 뒷배경에 다채로운 채도의 디퓨즈 빛 덩어리가 존재해야 합니다. 평범한 단색 배경에서는 굴절시킬 전경이 없어 프로스트 질감이 소멸합니다."
          },
          {
            name: "1px 미세 반투명 점진형 하이라이트 테두리",
            category: "core",
            role: "입체 경계선 강조자. 실물 유리가 빛을 반사하는 스펙큘러 모서리를 흉내 내어 카드 프레임을 우아하게 ‘도려냅니다’.",
            impactScore: 85,
            recreateGuide: "Tailwind의 border-white/20에 리니어 그라디언트를 조합하거나, 마스크 기법으로 섬세함을 구현합니다."
          },
          {
            name: "백그라운드 디퓨즈 그라디언트 라이트 (Diffuse Backdrop Glow)",
            category: "accessory",
            role: "공간감 및 상호작용 분위기 보조. 가벼운 웹 또는 성능 극대화 환경에서는 정적인 그라디언트 배경 이미지 연출로 비용 조절이 가능합니다.",
            impactScore: 60,
            recreateGuide: "절대 좌표 div에 bg-radial-gradient를 바인딩하고, blur-3xl 필터 가공을 통해 자연스럽게 가라앉는 분위기를 그립니다."
          }
        ],
        rebuildPlan: {
          rebuildPhilosophy: "기존의 무거운 섀도우 연산을 지양하고, 1px의 정교한 굴절 하이라이팅 마진과 듀얼 오로라 이펙터만으로 최상급 모던 반투명 디자인을 조각해냅니다.",
          keySteps: [
            { stepNumber: 1, title: "배경 오로라 배치", content: "slate-950 기반의 무배경 캔버스를 로드하고, 시안 및 자줏빛의 고채도 구형 디스크(cyan-500/25, purple-500/25)에 강력한 blur-3xl 효과를 관통합니다." },
            { stepNumber: 2, title: "마이크로 아크릴 프레임 빌드", content: "div 컴포넌트에 bg-white/10 및 backdrop-blur-xl 광학 흐림 효과를 부여해 실시간 마이크로 아크릴 보드를 구성합니다." },
            { stepNumber: 3, title: "1픽셀 광선 프리즘 장착", content: "border-white/20 가이드 라인 처리를 통해 가상의 빛샘 스펙큘러 라인을 정면 테두리에 깔끔하게 얹습니다." },
            { stepNumber: 4, title: "반응형 터치 활성화", content: "마우스 호버 시 카드 자체가 수직 좌표 공간으로 상승(hover:-translate-y-1)하고 테두리가 고조되는 트랜지션을 연출합니다." }
          ],
          sandboxCodes: [
            {
              language: "html",
              title: "Aurora Glass Panel Rebuild",
              description: "Tailwind CSS를 활용해 정밀 복제된 로컬 오로라 반투명 카드 샌드박스입니다. 우측의 실시간 결과창에서 호버 효과를 구동해볼 수 있습니다.",
              code: preset.rebuildPlan.sandboxCodes[0].code
            }
          ]
        },
        levelUp: {
          innovationIdeas: [
            "마우스의 자이로 스코프 중력 연동 시차 구현(Parallax Spec). 마우스의 우측 쏠림 움직임의 역방향으로 뒷배경 번짐 광원을 15px 밀어내어, 살아있는 다차원 부유감을 연출하세요.",
            "리니어 포지션 로프 주기를 활성화해, 글래스 림을 따라 은은한 네온 입자가 시계 방향으로 회전하는 애니메이션(Neon Border Run)을 추가 탑재해보세요."
          ],
          keywords: ["CSS backdrop-filter clipping-mask", "Ambient Light UI Principles", "React Spring Physics Animations", "3D Gyroscope Web Interface"],
          learningPaths: [
            "실물 재료 광학과 스큐어모피즘 부활 테마 학습 연구 자료 정독.",
            "Dribbble 유명 디자이너들의 글래스모피즘 아키텍처 색조 분석기 구동 학습: '깊은 네가티브 백그라운드 대비 고투명 바디'의 엄격한 비율 감각을 수렴합니다."
          ]
        }
      };
    }
  }

  if (isCyber) {
    if (lang === 'en') {
      return {
        ...preset,
        title: "Cyberpunk Interactive Terminal",
        wowFactor: {
          concept: "An ultra-high-contrast glowing phosphor-green terminal, layered with spherical CRT curvature distortions, horizontal scanlines, and intermittent digital noise interference. Interaction triggers kinetic 1px binary rain drops falling down.",
          philosophy: "Retro-futurism and technophilia. By mixing high-density visual diagnostics with structured machine errors, users transform into mechanical operators piloting sci-fi ship control grids.",
          empathyScore: 97
        },
        dissection: {
          visual: {
            colors: [
              { hex: "#020617", description: "Deep Void space-black. Restores and contrasts high-luminance glowing graphics." },
              { hex: "#22c55e", description: "Fluorescent phosphor-green. The primary aesthetic information vector." },
              { hex: "#ef4444", description: "Alert Crimson. Represents diagnostics errors and cybernetic warnings." },
              { hex: "#e2e8f0", description: "Low-saturation technical white. Tempers the intensely electric green." }
            ],
            gridSystem: "Command Dashboard layout. Split vertical side elements bound by functional brackets, framing stats clearly.",
            shadowsLighting: "Zero soft gradients. Employs crisp fluorescent text glow instead (text-shadow: 0 0 10px #22c55e). Emphasizes raw toggles on pure dark.",
            typography: "Monospaced default: Fira Code or JetBrains Mono. Uppercase text mixed with technical punctuation ([ ], >, //) for strict geek aesthetics."
          },
          technical: {
            stack: ["React", "CSS animations", "Tailwind Custom Keys", "JS keyboard listener"],
            keyFunctions: [
              "text-shadow: 0 0 8px currentColor - Simulates glowing fluorescent CRT beams",
              "linear-gradient(rgba(18,16,16,0)...) - Vertical CRT scanlines overlays",
              "performance requestAnimationFrame - Handles rain drop streams without layout thrashing"
            ],
            stateManagement: "Global key buffer hook. Detects every keystroke in real-time, feeding typing outputs into the console and parsing simulated shell triggers.",
            perfOptimization: "Leverages hardware-accelerated CSS positioning (`translateY`) to drive the scanline loop, fully eliminating JS redraw latency."
          },
          copywriting: {
            emotionCurve: "Tension -> Focus -> Elation. Saturated command logs induce a flow state, rewarding correct input keys with beautiful success signals.",
            narrativeStructure: "Strict technical metaphors. Replaces average text labels with sci-fi commands like `SYS_INIT_SEQUENCE` and `MEM_DUMP_STREAM` to build a heroic atmosphere.",
            hookSetting: "An endless rectangular flashing block cursor representing machine focus.",
            callToAction: "Tactile tech keys featuring angular cut corners, accompanied by simulated mechanical clicks on click trigger."
          }
        },
        miu: [
          {
            name: "Monospace font & Specular Phosphor text-shadow Glow",
            category: "core",
            role: "Determines style authenticity. Proportional fonts completely break the terminal vibe, turning it into boring text sheets.",
            impactScore: 100,
            recreateGuide: "Bind JetBrains Mono or Fira Code to font-mono. Apply fluorescent text-shadow glows."
          },
          {
            name: "Horizontal Scanline Overlay & Opacity Flicker Grid",
            category: "core",
            role: "Builds tactile CRT screens textures. Perfectly recreates vintage hardware defects inside crisp vector screens.",
            impactScore: 90,
            recreateGuide: "Add scanline patterns with bg-size 4px, interleaving transparent rows with dark lines, coupled with mild opacity animations."
          },
          {
            name: "Live Command Logger & Cyber Rain Drops (Matrix Rain)",
            category: "accessory",
            role: "Dynamic visual support. Can be simplified into looping loading meters if rendering performance constraint is severe.",
            impactScore: 50,
            recreateGuide: "Inject simulated terminal boot logs on initial rendering and user interaction triggers to satisfy information density requirements."
          }
        ],
        rebuildPlan: {
          rebuildPhilosophy: "Avoid bulky CSS 3D projections. Focus on solid black terminals utilizing font-mono, blinking scan markers, and sturdy corner brackets to recreate movies-hacker aesthetics easily.",
          keySteps: [
            { stepNumber: 1, title: "Lay Zero Void Base", content: "Establish deep slate-950 canvas. Craft a 1s looping block cursor to act as keyboard cursor." },
            { stepNumber: 2, title: "Construct Mechanical Brackets", content: "Use absolute borders in card margins (top-left, bottom-right highlights) to enclose the visual console grid securely." },
            { stepNumber: 3, title: "Overlay CRT Grain Scan", content: "Assemble full-screen scanline overlays that simulate retro CRT displays with high contrast patterns." },
            { stepNumber: 4, title: "Bind Interactive Command Logs", content: "Wire the keyboard input, generating prompt indicators showing > USER_COMMANDS paired with automated OK/FAIL receipts." }
          ],
          sandboxCodes: [
            {
              language: "html",
              title: "Cyberpunk Terminal Sandbox",
              description: "A gorgeous fully interactive web terminal with CRT effects. Enter any mock command and hit \"EXECUTE\" to trigger retro diagnostic logs instantly.",
              code: preset.rebuildPlan.sandboxCodes[0].code
            }
          ]
        },
        levelUp: {
          innovationIdeas: [
            "Add audio synthesizers using standard Web Audio oscillators inside React, generating custom mechanical click soundwaves and ship computer hums on click.",
            "Integrate recursive terminal shell logic supporting commands like `help`, `matrix`, `ping`, and returning responsive interactive assets."
          ],
          keywords: ["CRT Screen Distortion WebGL Shader", "Cyberpunk CSS Glitch Animation", "Web Audio API sound synthesizers", "Interactive Terminal Shell Hook"],
          learningPaths: [
            "Study ancient CRT screen physics manuals and retro hacker game layouts.",
            "Practice technical copywriting layouts: Re-wrap everyday messages into authoritative binary instructions to capture sci-fi aesthetic metrics."
          ]
        }
      };
    } else if (lang === 'ko') {
      return {
        ...preset,
        title: "사이버펑크 대화형 터미널",
        wowFactor: {
          concept: "완벽한 암흑 속에서 고밀도 그린 캐릭터들이 발광하는 하이 콘트라스트 디스플레이 인터페이스로, 고전 CRT 모니터의 기하학적 팽창 곡률(Curvature), 수평 인터레이스 미세 노이즈 패턴, 키 입력을 할 때마다 하강하는 빠른 빗방울 비구 전개로 사용자를 완전히 몰입시킵니다.",
          philosophy: "클래식 레트로 공상과학(Retro-Futurism)과 기계 통제에 관한 디자인 메커니즘 헌사. 의도된 기계의 오류 질감과 시그널 주파수 간섭을 가공 배치하여 깊은 아날로그 로드맨이 되게 만듭니다.",
          empathyScore: 97
        },
        dissection: {
          visual: {
            colors: [
              { hex: "#020617", description: "우주 성운의 절대 암흑. 형광 입자들의 빛 에너지를 온전하게 정착시키는 검정 캔버스." },
              { hex: "#22c55e", description: "방사형 형광 그린. 터미널의 모든 기술 데이터를 피칭하는 주 광원." },
              { hex: "#ef4444", description: "경고용 무색 오렌지 레드. 프로세서 이상이나 통신 두절을 명명하는 대조 계통도." },
              { hex: "#e2e8f0", description: "소량의 뉴트럴 머신 그레이. 과도한 밝기의 형광색을 상쇄하여 시력 피로도를 제어합니다." }
            ],
            gridSystem: "모듈형 계기판 분할(Command Dashboard Layout). 좌우 종횡으로 공간을 정밀 구획하고 한 사격 프레임으로 가둡니다.",
            shadowsLighting: "안개식 그라디언트 섀도우 일체 금지. 오로지 뾰족한 로우 블러의 형광 빛 번짐(text-shadow: 0 0 10px #22c55e)만 적용해 차가운 질감을 냅니다.",
            typography: "100% 모노스페이스 고수 : Fira Code, JetBrains Mono를 채택하여 대문자와 기계식 보조 기호들의 결합으로 정밀한 분위기를 연출합니다."
          },
          technical: {
            stack: ["React", "CSS animations", "Tailwind Custom Keys", "JS keyboard listener"],
            keyFunctions: [
              "text-shadow: 0 0 8px currentColor - 브린관 형광 입자들의 연쇄 작용 물리 이식",
              "CRT scanlines filter - 가로선 주사율 정밀 팩킹",
              "requestAnimationFrame animation loop - 메모리 과점 없이 물방울 비 낙하 루틴을 유지"
            ],
            stateManagement: "키보드 전역 리스너 바인딩: 사용자가 입력하는 물리적 문자열을 버퍼에 담아 명령어 스크립트 핸들러 쪽으로 전송, 즉각 반응 로그를 노출합니다.",
            perfOptimization: "메모리가 무거운 Canvas 개체 대신, GPU 연산을 이용하는 CSS Translate 디스플레이 레이어로 가로선 무브를 구현하여 정밀도를 높였습니다."
          },
          copywriting: {
            emotionCurve: "살짝의 긴장 -> 고도의 정신 집중 -> 쾌감. 녹색 제어 로그가 수직 스크롤될 때 즉각적인 만족감을 얻습니다.",
            narrativeStructure: "엄밀한 기술 메타포. 일상의 단어들을 `SYS_INIT_SEQUENCE` 나 `SYS_DUMP_CORE` 등으로 번역 래핑하여 사용자의 미션 고조감을 도모합니다.",
            hookSetting: "터미널 명령 끝단에서 지치지 않고 점멸하는 볼드 녹색 스퀘어 커서가 사용자의 시각적 반응 집중력을 유발합니다.",
            callToAction: "각진 모서리가 커팅된 스티브 엣지 프레임 버튼. 마우스 호버 시 릴레이 작동음 같은 전기 스파크 무드가 연출됩니다."
          }
        },
        miu: [
          {
            name: "모노스페이스 고정폭 폰트와 볼드 전용 text-shadow 형광",
            category: "core",
            role: "사이버펑크의 정수. 유려한 가변폭 서체를 도입하는 것보다 투박한 기계 글씨가 오리지날 터미널 룩을 완성합니다.",
            impactScore: 100,
            recreateGuide: "JetBrains Mono나 Fira Code를 font-mono 지정하고 외곽에 극소형 발광 글로우 광휘를 관통합니다."
          },
          {
            name: "수평 주사율 간섭선과 브라운관 미세 노이즈 (Scanline overlay)",
            category: "core",
            role: "화면 그레인 마감. 고전 디스플레이가 가지고 있는 정적 단점을 장점으로 환치하여, 아날로그 신뢰도를 향상시킵니다.",
            impactScore: 90,
            recreateGuide: "4px 간격의 background-size linear-gradient 패턴으로 교차 격자를 깔고 경미한 플리커 루프를 바인딩합니다."
          },
          {
            name: "실시간 물방울 가용 덱 (Cyber Matrix Rain effect)",
            category: "accessory",
            role: "인터랙티브 생동감 부여. 모바일 전용 등 전력 최적화 화면에서는 단순 깜빡이는 로그 박스만으로도 유사 감각 전이가 가능합니다.",
            impactScore: 50,
            recreateGuide: "초기 로드 단계에서 시스템 자가 복구 진단 로그 텍스트를 순차 인출하는 로직을 조립하면 고정밀 분위기를 확보할 수 있습니다."
          }
        ],
        rebuildPlan: {
          rebuildPhilosophy: "고비용의 3D 뷰 렌더러 대신, 어두운 디스플레이 카드를 축조하고 라이브 점멸 커서와 스틸 브레이크 가이드만 배치하여 극강의 밀리터리 해커 관제소를 연출합니다.",
          keySteps: [
            { stepNumber: 1, title: "절대 심연 블랙 컨테이너 구축", content: "slate-950 배경을 투사하고 1초 단독 점멸 사이클을 확보해 쉘 프롬프트 커서를 이식합니다." },
            { stepNumber: 2, title: "강철 기계 클립 구조 장착", content: "모서리 영역에만 8px 두께 선을 그려 관제 레이아웃 수렴 시그널을 연출합니다." },
            { stepNumber: 3, title: "가로 주파 주사 격자 배치", content: "pointer-events-none 설정의 그물 주사 주파 레이어를 대칭 오버랩해 디스플레이 시각 질감을 확보합니다." },
            { stepNumber: 4, title: "커맨드 해킹 스크립트 가동", content: "사용자의 입력을 읽어들이고 > USER_COMMANDS 시퀀스와 로딩 스피너 및 자동 OK 로그를 전개합니다." }
          ],
          sandboxCodes: [
            {
              language: "html",
              title: "Cyberpunk Terminal Sandbox",
              description: "완벽하게 작동하는 레트로 사이버 터미널 플레이그라운드입니다. 우측 결과 패널에서 임의의 글을 입력하고 EXECUTE를 눌러 역공학 작동 로그를 실시간 구동할 수 있습니다.",
              code: preset.rebuildPlan.sandboxCodes[0].code
            }
          ]
        },
        levelUp: {
          innovationIdeas: [
            "React 호환 Web Audio API 오실레이터를 로드하여, 키 입력이 일어날 때마다 고풍적이고 둔탁한 소형 릴레이 작동 음파(Click Soundwaves)를 동적 발진시키세요.",
            "터미널 쉘에 실시간 'help', 'matrix', 'ping' 등의 명령 구문을 작성하여 사용자와 실시간 상호 보완하는 인터랙트 로더를 작성해보세요."
          ],
          keywords: ["CRT Screen Distortion WebGL Shader", "Cyberpunk CSS Glitch Animation", "Web Audio API sound synthesizers", "Interactive Terminal Shell Hook"],
          learningPaths: [
            "80년대 고전 CRT 브라운관 물리 매뉴얼과 해커 게임들의 계기판 인포그라피 정독.",
            "기술 문장 조율 연습: 우리가 일상적으로 쓰는 버튼 레이블을 기계 친화적 대문자와 기호문(INIT_CORE)으로 바인딩하는 감각을 고정 수렴합니다."
          ]
        }
      };
    }
  }

  return preset;
}
