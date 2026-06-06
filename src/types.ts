export interface WowFactor {
  concept: string; // Core hook description
  philosophy: string; // Core philosophy
  empathyScore: number; // 0-100 score of user connection
}

export interface DeepDissection {
  visual: {
    colors: Array<{ hex: string; description: string }>;
    gridSystem: string;
    shadowsLighting: string;
    typography: string;
  };
  technical: {
    stack: string[];
    keyFunctions: string[];
    stateManagement: string;
    perfOptimization: string;
  };
  copywriting: {
    emotionCurve: string;
    narrativeStructure: string;
    hookSetting: string;
    callToAction: string;
  };
}

export interface MinimalImpactUnit {
  name: string;
  category: 'core' | 'accessory'; // Core structure vs ornament
  role: string; // Description of why it's critical or negligible
  impactScore: number; // 0-100 indicating critical level
  recreateGuide: string; // Specific implementation instruction
}

export interface SandboxCode {
  language: 'html' | 'jsx' | 'css';
  code: string;
  title: string;
  description: string;
}

export interface RebuildPlan {
  rebuildPhilosophy: string;
  keySteps: Array<{ stepNumber: number; title: string; content: string }>;
  sandboxCodes: SandboxCode[];
}

export interface LevelUpAdvice {
  innovationIdeas: string[];
  keywords: string[];
  learningPaths: string[];
}

export interface MasterworkAnalysis {
  title: string;
  category: 'web-effect' | 'visual-design' | 'copywriting' | 'interaction';
  wowFactor: WowFactor;
  dissection: DeepDissection;
  miu: MinimalImpactUnit[];
  rebuildPlan: RebuildPlan;
  levelUp: LevelUpAdvice;
  webpageUrl?: string;
}
