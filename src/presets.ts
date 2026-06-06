import { MasterworkAnalysis } from './types';

export const presetAnalyses: MasterworkAnalysis[] = [
  {
    title: "极光微光毛玻璃卡片 (Glassmorphism Frosted Card)",
    category: "web-effect",
    webpageUrl: "https://glassmorphism.com",
    wowFactor: {
      concept: "卡片仿佛由两层半透明磨砂冰板重叠而成，背后有随着鼠标微弱漂移的极光光晕（Radial Gradients）。边缘拥有一像素的彩虹微晶边框（Glow Border），呈现出极高的光影质感。",
      philosophy: "自然界光影折射与数字材料学的精妙结合。利用高透光率与大模糊度，让虚拟界面产生物理纵深感和呼吸流动性。",
      empathyScore: 94
    },
    dissection: {
      visual: {
        colors: [
          { hex: "#0f172a", description: "深邃晶格蓝背景，用来沉淀极光的对比度" },
          { hex: "#ffffff12", description: "卡片主磨砂面板，12% 的物理反射透白" },
          { hex: "#38bdf8", description: "北极星空青，用作左上角的散焦环境光源" },
          { hex: "#c084fc", description: "极光浅紫，右下角副散焦环境光源，营造冷暖对比" }
        ],
        gridSystem: "居中独占（Solo Hero Panel）网格，用负空间（Negative Space）和 1:1.618 黄金分割比例衬托主体精致度。",
        shadowsLighting: "卡片内部多重叠加：外部是 0 32px 64px -24px 的松弛长投影，两重弥散背景层（Blur 120px）在卡片底层模拟折射，形成悬浮错觉。",
        typography: "采用高对比度无衬线系统：大标题 Inter Light (300 weight) 加大字间距（tracking-wide），正文用中对比灰，字号微调以营造极其专业的科技感。"
      },
      technical: {
        stack: ["React", "Tailwind CSS", "Motion", "CSS backdrop-filter"],
        keyFunctions: [
          "backdrop-filter: blur(20px) - 物理级毛玻璃核心",
          "gradient border using mask - 实现1px极细呼吸边缘",
          "motion-hook: mousemove tracking - 实现鼠标移动时光源漫反射跟随运动"
        ],
        stateManagement: "局部状态管理：追踪当前鼠标的 `relativeX` 和 `relativeY`，用来计算并驱动光源的偏移，在视觉上重构三维视差景深。",
        perfOptimization: "使用 `will-change: transform` 或 `translate3d` 将微光漫反射层提升为独立合成层硬件加速，避免重绘重排引起的卡顿，维持 120FPS 丝滑度。"
      },
      copywriting: {
        emotionCurve: "平静 -> 探索 -> 惊艳。纯粹的无打扰布局和深邃冷暖调让人感觉高雅平静，鼠标微动触发的光影联动令人产生掌控感般的探索乐趣。",
        narrativeStructure: "无冗余纯信息流。利用精简到极致的参数排版，代替传统推销式的说辞，体现‘不着痕迹的自信’。",
        hookSetting: "卡片右上方一个极其微弱、呈呼吸态的小绿点，周围扩散微弱的波纹（Pulse Effect），在极简画面中作为视觉引信扣动神经。",
        callToAction: "底部纯白填充的高质感按钮，按压时由于负反馈而伴随亮度的扩散，形成强烈的交互爽感（Tactile Feedback）。"
      }
    },
    miu: [
      {
        name: "backdrop-filter: blur(20px)",
        category: "core",
        role: "灵魂极性物理透光单元。缺失它卡片直接变为普通扁平半透明块，失去折射质感。",
        impactScore: 100,
        recreateGuide: "必须附带背景的高饱和度光源，否则在纯白/纯黑的死背景下，毛玻璃毫无穿透反差，只能降级为普通灰色。"
      },
      {
        name: "1px 细微半透明渐变边框",
        category: "core",
        role: "拟物物理质感引信。模拟玻璃棱角的反射性（Specular highlight），将卡片从背景中干净利落地‘雕刻’出来。",
        impactScore: 85,
        recreateGuide: "使用 border-white/20 配合 linear-gradient，或者利用 ::before 伪元素加渐变及 mask 裁剪，达成细腻的高清切边。"
      },
      {
        name: "极光漫反射光源层 (Diffuse Backdrop Glow)",
        category: "accessory",
        role: "动态氛围增强。为卡片增加纵深互动。如果作为静态网页或要求极致轻量化时，可用一两张低饱和静态渐变图作为环境底色平替。",
        impactScore: 60,
        recreateGuide: "使用绝对定位的 div 并设置 bg-radial-gradient，配合 blur-3xl 滤镜和 motion 驱动偏移，避免添加过高负荷。"
      }
    ],
    rebuildPlan: {
      rebuildPhilosophy: "放弃繁杂的立体多阴影架构，用一像素彩虹高光边（Specular Light）模拟物理晶格折射，辅以双点极光大光晕作底，再现纯透轻盈质感。",
      keySteps: [
        { stepNumber: 1, title: "制备底座与极光弥散层", content: "设置深色背景，在其上铺设两个极小但高饱和的漫反射光团（bg-sky-500/30 和 bg-purple-500/30），并施加极其沉重的 blur-3xl 模糊效果。" },
        { stepNumber: 2, title: "创建毛玻璃主体骨架", content: "使用 div 设置 w-full max-w-md, 辅以 bg-white/10 和 backdrop-blur-xl 物理模拟磨砂玻璃屏，为卡片加上 2xl 圆角避免锐利感。" },
        { stepNumber: 3, title: "描绘1px物理棱角线", content: "使用 border 和 border-white/20 或 border-gradient 实现一像素切线，营造玻璃折射的光泽感。" },
        { stepNumber: 4, title: "注入自然交互动效", content: "添加滑过状态，通过 CSS transition 使背景漫反射层随着悬浮微微律动，或者卡片整体产生极其轻微的 3D 三维翻转。" }
      ],
      sandboxCodes: [
        {
          language: "html",
          title: "极光微光面板重构方案 (Aurora Glass Panel Rebuild)",
          description: "使用 Tailwind CSS 官方 CDN 搭建的自适应极光磨砂卡片。右侧带有流光背景，卡片表面具有磨砂倒影，光效会在鼠标划过时产生物理折射和亮起效果。",
          code: `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.1); opacity: 1; }
    }
    .pulse-dot {
      animation: heartbeat 2s infinite ease-in-out;
    }
  </style>
</head>
<body class="bg-slate-950 flex items-center justify-center min-h-[420px] p-6 text-slate-100 font-sans overflow-hidden">
  
  <!-- BACKGROUND GRADIENTS (AMBIENT AURORA) -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/25 blur-[120px] transition-all duration-1000 ease-in-out hover:scale-110"></div>
    <div class="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/25 blur-[120px] transition-all duration-1000 ease-in-out hover:scale-110"></div>
  </div>

  <!-- INTERACTIVE GLASS CARD -->
  <div class="relative group w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_45px_80px_-16px_rgba(56,189,248,0.15)] hover:-translate-y-1">
    
    <!-- Outer Glow Ambient Border -->
    <div class="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-sm"></div>

    <!-- Live Indicator -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-2">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 pulse-dot"></span>
        </span>
        <span class="text-xs font-mono tracking-widest text-emerald-400/80 uppercase">AI RE_SYSTEM ACTIVE</span>
      </div>
      <span class="text-xs font-mono text-slate-400/60">REV-094</span>
    </div>

    <!-- Card Content -->
    <h3 class="text-2xl font-light tracking-wide text-white mb-2">流光折射冰板<span class="block font-medium text-xs mt-1 text-cyan-400 tracking-widest uppercase">Optics & Glass</span></h3>
    <p class="text-sm text-slate-300/80 leading-relaxed font-light mb-8">
      此渲染采用了拟物物理折光算法（Physical Glass Refractor）与大气弥散光晕。微距视角下拥有一毫米晶体边缘。
    </p>

    <!-- Specs Dashboard -->
    <div class="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/30 border border-white/[0.03] mb-8 font-mono text-xs">
      <div>
        <div class="text-slate-400/40 uppercase mb-0.5">透光度 Refract</div>
        <div class="text-slate-200">12.5%</div>
      </div>
      <div>
        <div class="text-slate-400/40 uppercase mb-0.5">模糊度 Diffusion</div>
        <div class="text-slate-200">20px Gauss</div>
      </div>
    </div>

    <!-- CTA Button -->
    <button class="relative w-full overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-[0.98]">
      开始逆向复刻
    </button>
  </div>

</body>
</html>`
        }
      ]
    },
    levelUp: {
      innovationIdeas: [
        "在这个卡片的基础之上，加入鼠标陀螺仪重力感应视差（Parallax Web effect）。即让背景的漫反射光斑随着鼠标向右偏移时，卡片内的镜面反射光带、阴影朝相反方向偏离 15px，产生极其震撼的三维悬浮真实质感。",
        "将彩虹极光高光细边改为动态扫描发光。即利用 linear-gradient 和 gradient-position 随时间运动，形成高光在玻璃边缘暗淡旋转的效果（Neon Border Run）。"
      ],
      keywords: ["CSS backdrop-filter clipping-mask", "Ambient Light UI Principles", "React Spring Physics Animations", "3D Gyroscope Web Interface"],
      learningPaths: [
        "《数字拟物态与立体材质设计法》(Material Design Spec & Skeuomorphism Revived)",
        "Dribbble 精选 Glassmorphism 特效作品的色彩拾取练习：在色彩搭配上死磕‘高对比负空间背景 + 极高透明度面板’的搭配原则。"
      ]
    }
  },
  {
    title: "赛博朋克黑底数字终端 (Cyberpunk Interactive Terminal)",
    category: "interaction",
    webpageUrl: "https://codepen.io/topic/cyberpunk",
    wowFactor: {
      concept: "极致高对比的暗黑绿萤光字符界面，带有轻微旧式 CRT 屏幕的球面弧度拉伸（Spherical Distortion）和水平扫描干扰波纹（Scanlines）。按钮或输入行带有突变震动（Glitch Effect），每次按键均会发射一像素极速落雨像素点。",
      philosophy: "复古未来主义（Retro-Futurism）与不可控技术崇拜。将高密度的技术信息与拟物故障状态融合，让使用者化身为执行太空探索指令的操作员。",
      empathyScore: 97
    },
    dissection: {
      visual: {
        colors: [
          { hex: "#020617", description: "深海太空无底黑，模拟冷冽真空" },
          { hex: "#22c55e", description: "经典荧光放射绿，信息主发光源" },
          { hex: "#ef4444", description: "故障警戒报警红，用于极端对比警告极" },
          { hex: "#e2e8f0", description: "低饱和白，用来中和极度刺眼的绿调" }
        ],
        gridSystem: "模块化指令仪表盘（Command Dashboard layout）。左右纵向栏位分立，顶端常驻心跳流速，用技术框（Border line frames & brackets）约束空间。",
        shadowsLighting: "全无柔和漫反射：采用强硬的高对比荧光外发光（text-shadow: 0 0 10px #22c55e）。信息不依靠阴影过渡，而是利用强硬亮起和断电黑底形成对冲。",
        typography: "强制非比例等宽：Fira Code 或 JetBrains Mono，全大写字母（Uppercase）配以技术符号（[ ], >, #, //），流露出严肃的极客质感。"
      },
      technical: {
        stack: ["React", "CSS animations", "Tailwind Custom Keys", "JS keyboard listener"],
        keyFunctions: [
          "text-shadow: 0 0 8px currentColor - 字符发光CRT算法",
          "linear-gradient(rgba(18,16,16,0)...) - 高清CRT横向扫描干扰线",
          "performance requestAnimationFrame - 控制绿矩阵水滴雨降解高负荷"
        ],
        stateManagement: "全局输入流缓存 (Key buffers)。捕获用户每一次原生击键，除了在 terminal 尾部即时打字，还通过 state 动态计算内存占用、执行模拟黑客脚本返回响应。",
        perfOptimization: "使用纯 CSS 动画控制扫描线（Scanlines）和毛刺抖动，通过 `transform: translateY` 独立位移，利用 GPU 组合器性能，免去密集型重构性能抖动。"
      },
      copywriting: {
        emotionCurve: "紧张 -> 专注 -> 自豪。满屏的命令符和闪烁框引发轻微肾上腺素上升。当键入一串代码并收到酷炫系统响应时，爽感拉满。",
        narrativeStructure: "技术隐喻说辞。用高专业度的黑客流、内存分配、模块加载命令命名菜单，比如 `SYS_INIT_SEQUENCE`、`MEM_DUMP_STREAM` 等，将平常的操作改写为充满使命感的‘神圣仪式’。",
        hookSetting: "输入框右侧永无止境闪烁的绿色硬质光块（Block Cursor Input Indicator），强迫使用者的精力牢牢聚焦于此。",
        callToAction: "执行指令的强力按键，通常带有切尖设计（Cut off corners），鼠标划过时会发出模拟机械继电器通电的电流回响声效。"
      }
    },
    miu: [
      {
        name: "等宽字体与纯发光 CRT CRT 弧度遮罩",
        category: "core",
        role: "核心风格骨骼。如果不采用等宽字体而使用宋体或圆体，赛博朋克味直接变成简陋草稿纸风格。",
        impactScore: 100,
        recreateGuide: "将 Fira Code、Courier New 或 JetBrains Mono 卡在 font-mono 上。配合 text-shadow 进行外层荧光氛围渗透。"
      },
      {
        name: "水平干扰扫描线与微弱忽明忽暗闪烁 (Scanline/Flicker Overlay)",
        category: "core",
        role: "材质肌理。这是 CRT 显像管在三维空间中‘发光投影’的经典缺陷，也是复古味儿的终极核心。",
        impactScore: 90,
        recreateGuide: "使用 background-size: 100% 4px 并用 linear-gradient 在半透明黑色和绝缘色之间交替，再施加极轻微的 opacity-flicker 动画。"
      },
      {
        name: "实时动态滚屏反馈与故障码雨 (Digital Raining Drops)",
        category: "accessory",
        role: "动态反馈辅助。如果只做一两屏，用闪烁控制台平替即可，无需过度部署 Canvas 码雨增加代码开销。",
        impactScore: 50,
        recreateGuide: "在输入交互侧增加动态的‘进程条(Loading Bar)’与‘编译控制台信息’打印即可快速满足极客质感。"
      }
    ],
    rebuildPlan: {
      rebuildPhilosophy: "放弃耗费性能的 3D 立体屏幕变形渲染，采用全黑高漫反射背景卡片，纯粹使用 Tailwind 的 font-mono、闪烁动画与等尖装饰框架（Border Frames），以极轻的计算代价，重现电影黑客控制台的梦幻科技感。",
      keySteps: [
        { stepNumber: 1, title: "奠定暗黑绝对虚无背景", content: "设置容器为 slate-950，使用 font-mono 统一整套应用。定义 0.5 秒一闪一闪的动画表示光标。" },
        { stepNumber: 2, title: "筑造技术装饰夹（Border Frames）", content: "采用 relative 绝对定位，仅在四个角描绘 10px 边框线（border-t-2 border-l-2 bl-emerald-500），营造坚硬机械卡座包裹感。" },
        { stepNumber: 3, title: "创建带有干扰质感的扫描层", content: "使用 pointer-events-none 遮罩层，写一层渐变高 4px 的纹理拉满整个容器，模拟显像管屏幕质感。" },
        { stepNumber: 4, title: "部署交互状态打印机", content: "设定输入捕获器，将用户输入的每次键入展示为 > 输入命令行，并配备随机‘模块加载成功... OK’的自动化系统回执。" }
      ],
      sandboxCodes: [
        {
          language: "html",
          title: "赛博控制台面板 (Cyberpunk Interface Rebuild)",
          description: "这是一个纯 HTML 与 Tailwind 交互终端。自带心跳指标，用户可以在输入框内输入并点击 \"EXECUTE\"，可执行虚拟命令并模拟高质感输出日志，带有完整 CRT 发光效果和状态提示声线（视觉展示）。",
          code: `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    @keyframes flicker {
      0%, 100% { opacity: 0.98; }
      50% { opacity: 0.95; }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .scan-line {
      animation: scanline 8s linear infinite;
    }
    .screen-flicker {
      animation: flicker 0.15s infinite;
    }
    .cursor-blink {
      animation: blink 1s step-end infinite;
    }
    .terminal-neon {
      text-shadow: 0 0 8px rgba(34,197,94,0.6);
    }
  </style>
</head>
<body class="bg-black/95 flex items-center justify-center min-h-[420px] p-4 text-emerald-400 font-mono screen-flicker relative overflow-hidden select-none">

  <!-- SCAN LINE EFFECT LAYER -->
  <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-1/2 w-full scan-line pointer-events-none z-20"></div>

  <!-- BRUTALIST TECHNICAL FRAMER -->
  <div class="relative w-full max-w-md bg-slate-950/80 border border-emerald-500/30 p-6 rounded shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden z-10">
    <!-- TECH CORNERS -->
    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none"></div>

    <!-- TERMINAL HEADER -->
    <div class="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-4">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span class="text-xs uppercase tracking-widest text-emerald-400/70 font-semibold">CORE SEC_MAIN TERMINAL</span>
      </div>
      <span class="text-[10px] text-emerald-500/50">SYS-TEMP: 42°C</span>
    </div>

    <!-- MAIN DISPLAY TERMINAL -->
    <div id="outputLog" class="h-44 text-xs space-y-2 overflow-y-auto mb-4 scrollbar-thin border border-emerald-500/10 bg-black/40 p-3 rounded terminal-neon leading-relaxed">
      <div class="text-emerald-500/50">// INITIALIZING COUNTER-INTEL DECODER...</div>
      <div>> LOADING SHELL MODULE: SEC_CRACKER_097</div>
      <div class="text-green-300 font-bold">> CONNECTED STATUS: OK. SECURE ENVELOPE BUILT.</div>
      <div class="text-amber-400/80">> WARNING: UNTRUSTED CORE PARALLELIZE ACTIVE.</div>
    </div>

    <!-- CONTROL PANEL / INPUT -->
    <div class="flex gap-2">
      <span class="text-emerald-300 font-bold self-center">></span>
      <input id="inputCmd" type="text" placeholder="键入指令 (e.g. hack, help, clear)..." class="flex-1 bg-black/60 border border-emerald-500/20 px-3 py-2 text-xs rounded text-emerald-300 placeholder-emerald-500/40 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 z-10" />
      <button onclick="executeCommand()" class="bg-emerald-500 text-black px-4 py-2 rounded text-xs px-3 font-bold transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.6)] cursor-pointer active:scale-95">
        EXEC
      </button>
    </div>

    <!-- TECH FOOTNOTE -->
    <div class="mt-4 flex justify-between text-[9px] text-emerald-500/40 border-t border-emerald-500/10 pt-3">
      <span>SECTOR: 07-ZONE</span>
      <span>MEM_DUMP: 14.5% BUFFERED</span>
    </div>
  </div>

  <script>
    const outputLog = document.getElementById('outputLog');
    const inputCmd = document.getElementById('inputCmd');

    function addLogLine(text, isAlert = false) {
      const newLine = document.createElement('div');
      if (isAlert) {
        newLine.className = 'text-red-400 font-bold';
      }
      newLine.innerHTML = text;
      outputLog.appendChild(newLine);
      outputLog.scrollTop = outputLog.scrollHeight;
    }

    function executeCommand() {
      const cmd = inputCmd.value.trim().toLowerCase();
      if (!cmd) return;
      
      addLogLine('<span class="text-emerald-300 font-bold">> ' + inputCmd.value + '</span>');
      
      setTimeout(() => {
        if (cmd === 'help') {
          addLogLine('// 核心指令列表:<br>1. <span class="text-green-300">hack</span> - 运行模拟溢出解密<br>2. <span class="text-green-300">clear</span> - 清空终端缓冲记录');
        } else if (cmd === 'hack') {
          addLogLine('[!] RUNNING INJECT SEQUENCE...', true);
          setTimeout(() => addLogLine('>> ACCESSING CORE PORT 3000... ACCEPTED.'), 300);
          setTimeout(() => addLogLine('>> EXTRACTING REBUILD PATTERN: 100%'), 800);
          setTimeout(() => addLogLine('<span class="text-cyan-400">[SUCCESS] 成功捕获核心代码神韵 (97% 还原比)</span>'), 1300);
        } else if (cmd === 'clear') {
          outputLog.innerHTML = '<div class="text-emerald-500/50">// Terminal Buffer Cleared.</div>';
        } else {
          addLogLine('>> ' + cmd.toUpperCase() + ': 未知系统指令。请输入 "help" 获取操作核心手册。');
        }
      }, 200);

      inputCmd.value = '';
    }

    inputCmd.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        executeCommand();
      }
    });
  </script>
</body>
</html>`
        }
      ]
    },
    levelUp: {
      innovationIdeas: [
        "在这个终端里增加‘极速代码崩溃扫流’音效：在控制台接收到 `hack` 指令时，自动通过代码触发 HTML5 Web Audio API 合成器（OscillatorNode），生产短促高频的电流哔哔声及机枪报码声，大幅度暴涨玩家在浏览器视口中的感官紧张度。",
        "结合 D3.js 增加动态拓扑解密链路。在终端核心区域增加圆心和环形声纳扫描盘，配合解密进程缓慢转动并展示实时连接节点，彻底告别普通伪终端，逼格直接登顶。"
      ],
      keywords: ["Web Audio API Sound Synth", "CSS Custom Clutches & Scanlines", "Canvas Matrix Decisive Fall Rain", "Keyboard Hook Buffer Management"],
      learningPaths: [
        "《复古与特工界面视觉设计精进》(Retro Sci-Fi and Hack UI & UX in Dev)",
        "学习使用 Three.js 实现真实的后处理 CRT 球面透镜反射渲染（Bloom and Mesh distortion passes）。"
      ]
    }
  }
];
