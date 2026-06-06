import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialization pattern for Gemini API client to prevent startup crash if GEMINI_API_KEY is not defined
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not configured yet. Please configure it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// REST route for testing health
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    hasApiKey: !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY",
  });
});

// Primary analysis route
// Primary analysis route
app.post("/api/analyze", async (req, res) => {
  const { text, category, files } = req.body;

  if (!text || text.trim().length === 0) {
    return res.status(400).json({ error: "请输入需要分析的作品描述、代码或文案内容。" });
  }

  try {
    const ai = getGeminiClient();

    const systemInstruction = `你是一位顶级的“AI逆向工程与技能传授导师”。你具备极其敏锐的洞察力，精通视觉设计、前端代码、文案逻辑、网页各种炫酷特效以及数字产品的底层逻辑。你的核心使命是：当用户提供一个作品（文本描述、截图说明、代码等）时，你像顶级解剖学家一样，将其进行“像素级/逻辑级”的逆向拆解，并转化为功能等价、逻辑一致但表达全新的实操方案。

你必须严格根据提供给你的 JSON Schema 返回结果：
1. 提取核心亮点 (The "Wow" Factor)：点出最吸引人之处，找出底层理念与人机情感共鸣度（0-100）。如果有上传屏幕截图或视频，请务必在分析中参考它们的颜色、排版及动效特征。
2. 深度结构化拆解 (dissection)：包含 visual（视觉配色、网格系统、光影材质、排版）、technical（核心技术、关键函数/属性、状态、性能优化）、copywriting（情绪曲线、叙事/话术结构、视觉钩子、行动指令）。请根据作品类型（输入分类：web-effect, visual-design, copywriting, interaction）自适应侧重点。
3. 最小关键作用单元分析 (miu)：列举核心（core）及次要装饰性（accessory）元素，给出具体的死磕细节及替换建议。
4. 实操重建指南 (rebuildPlan)：
   - 包含简短的重建理念。
   - 包含具体的 3-4 步重建步骤 (keySteps)。
   - 在 sandboxCodes 中提供一个或多个等价重建的前端演示方案。如果是特效/视觉/交互类，你必须提供至少一个完整可运行的 HTML 文件（设置 language 为 "html"），该文件必须完整引用 Tailwind CSS CDN (<script src="https://cdn.tailwindcss.com"></script>)。它应该包含漂亮的样式、交互动效（鼠标悬浮、点击响应等），并且在 iframe 渲染时呈现极其高大上的拟物/艺术交互效果（绝对不可以敷衍或只写空布局）。如果是文案类，你可以提供一个带有填空写作框架 and 自适应测试模板的交互式 HTML 工具。
5. 举一反三与进阶建议 (levelUp)：包含微创新动作、推荐研究关键词、推荐高级学习资源与精进路径。

语言要求：输出语言必须是简体中文（Chinese），文风富有极客浪漫情怀、大厂技术美学、严谨而不失幽默，如同良师益友。`;

    const userPrompt = `需要逆向拆解的作品分类是：[${category || "自动侦测"}]
作品内容/描述如下：
---
${text}
---
请结合附件中上传的媒体资料（如果提供了截图或视频，请仔细对其进行像素级提取，捕获其‘行气’和‘神韵’），然后在 sandboxCodes 中生成完整的单文件 HTML 互动效果，让我能立刻在沙箱中跑起它！`;

    const parts: any[] = [];
    if (files && Array.isArray(files)) {
      for (const file of files) {
        if (file.data && file.mimeType) {
          parts.push({
            inlineData: {
              mimeType: file.mimeType,
              data: file.data
            }
          });
        }
      }
    }
    parts.push({ text: userPrompt });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: { parts },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "为被拆解的作品取一个简短且高级的中英文混合名字" },
            category: { type: Type.STRING, description: "归入以下分类之一：'web-effect' | 'visual-design' | 'copywriting' | 'interaction'" },
            wowFactor: {
              type: Type.OBJECT,
              properties: {
                concept: { type: Type.STRING, description: "核心抓人点/美学概念的最生动解释，1-2句" },
                philosophy: { type: Type.STRING, description: "背后的底层美学、心理学或数字材料学信念" },
                empathyScore: { type: Type.INTEGER, description: "情感共鸣与视觉冲击力评分（50-100之间），代表该亮点的绝秒成色" }
              },
              required: ["concept", "philosophy", "empathyScore"]
            },
            dissection: {
              type: Type.OBJECT,
              properties: {
                visual: {
                  type: Type.OBJECT,
                  properties: {
                    colors: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          hex: { type: Type.STRING, description: "例如 #0f172a / rgba(...)" },
                          description: { type: Type.STRING, description: "该颜色在情绪或材质层扮演的角色" }
                        },
                        required: ["hex", "description"]
                      }
                    },
                    gridSystem: { type: Type.STRING, description: "采用的空间分布系统、对比比例、间距节奏" },
                    shadowsLighting: { type: Type.STRING, description: "光影来源、反射高光、散射、漫折射材质逻辑" },
                    typography: { type: Type.STRING, description: "字体、字号粗细、字间距、行气的张力配比" }
                  },
                  required: ["colors", "gridSystem", "shadowsLighting", "typography"]
                },
                technical: {
                  type: Type.OBJECT,
                  properties: {
                    stack: { type: Type.ARRAY, items: { type: Type.STRING }, description: "核心技术栈（比如 TailwindCSS, Web Audio, GSAP）" },
                    keyFunctions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "核心攻坚 CSS 属性或 JS 函数逻辑名" },
                    stateManagement: { type: Type.STRING, description: "微交互交互状态追踪与参数映射机制" },
                    perfOptimization: { type: Type.STRING, description: "GPU 加速、重绘控制或内存优化的硬核手段" }
                  },
                  required: ["stack", "keyFunctions", "stateManagement", "perfOptimization"]
                },
                copywriting: {
                  type: Type.OBJECT,
                  properties: {
                    emotionCurve: { type: Type.STRING, description: "用户阅读/交互时的肾上腺素及注意力心理曲线（e.g. 紧张、惊喜、沉浸）" },
                    narrativeStructure: { type: Type.STRING, description: "话术背后的黄金圈法则、推导、悬念或隐喻结构" },
                    hookSetting: { type: Type.STRING, description: "视觉触点或文案开篇的高能‘钩子’" },
                    callToAction: { type: Type.STRING, description: "临门一脚的转换指令，激发本能点击的触觉指令" }
                  },
                  required: ["emotionCurve", "narrativeStructure", "hookSetting", "callToAction"]
                }
              },
              required: ["visual", "technical", "copywriting"]
            },
            miu: {
              type: Type.ARRAY,
              description: "提取 2-4 个最小关键作用单元，区分 core（不可动摇）和 accessory（可平替装饰）",
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "单元名称（例如：backdrop-filter: blur 或 倒计时闪动块）" },
                  category: { type: Type.STRING, description: "只能是 'core' 或 'accessory'" },
                  role: { type: Type.STRING, description: "为什么它是灵魂还是只锦上添花，精当说明" },
                  impactScore: { type: Type.INTEGER, description: "关键重构比（0-100），分值越高越需要死磕" },
                  recreateGuide: { type: Type.STRING, description: "复刻该细节的最省力具体手法" }
                },
                required: ["name", "category", "role", "impactScore", "recreateGuide"]
              }
            },
            rebuildPlan: {
              type: Type.OBJECT,
              properties: {
                rebuildPhilosophy: { type: Type.STRING, description: "一句话阐述如何重构其神髓（神而非形）" },
                keySteps: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      stepNumber: { type: Type.INTEGER },
                      title: { type: Type.STRING },
                      content: { type: Type.STRING }
                    },
                    required: ["stepNumber", "title", "content"]
                  }
                },
                sandboxCodes: {
                  type: Type.ARRAY,
                  description: "必须提供至少一个完整的 language='html' 模块。包含完整 Tailwind API 驱动和生动逼真的拟真画面和交互脚本！",
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      language: { type: Type.STRING, description: "固定为 'html'" },
                      title: { type: Type.STRING, description: "例如：等价悬浮物理毛玻璃卡片演示" },
                      description: { type: Type.STRING, description: "沙箱代码特色描述，告诉用户怎么玩" },
                      code: { type: Type.STRING, description: "完整自嵌的 <html> 源码，必须引 cdn.tailwindcss.com。带有极高水准的交互式 UI、呼吸动画与逻辑" }
                    },
                    required: ["language", "code", "title", "description"]
              }
                }
              },
              required: ["rebuildPhilosophy", "keySteps", "sandboxCodes"]
            },
            levelUp: {
              type: Type.OBJECT,
              properties: {
                innovationIdeas: { type: Type.ARRAY, items: { type: Type.STRING }, description: "给出两个你可以对该作品进行的颠覆微创新方向" },
                keywords: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3-4个供搜索的深水高级技术/美学概念词" },
                learningPaths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "2个深耕的推荐专著、专案或演练手法" }
              },
              required: ["innovationIdeas", "keywords", "learningPaths"]
            }
          },
          required: ["title", "category", "wowFactor", "dissection", "miu", "rebuildPlan", "levelUp"]
        },
      },
    });

    const parsedData = JSON.parse(response.text.trim());
    return res.json(parsedData);
  } catch (error: any) {
    console.error("Gemini analyze failed:", error);
    // Standard error response
    let msg = error.message || "由于未知网络波动，逆向工程执行中途中断。";
    if (msg.includes("GEMINI_API_KEY")) {
      msg = "【API 未配置】由于未检测到系统密钥 (GEMINI_API_KEY)，无法进行全新实时逆向生成。请在上方或侧栏选择【极光微光毛玻璃卡片】或【赛博朋克控制台】等预置案例，即可体验本逆向导师百分之百的拟合实力与沙盒互动！";
    }
    return res.status(500).json({ error: msg });
  }
});

// Configure Vite middleware in development, or serve assets in production
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
