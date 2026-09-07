// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the whole course.
// Home page, Nav, Sidebar, ProgressContext and the sitemap all read from here.
// To add a lesson or a level, edit ONLY this file (plus the lesson page itself).
// ─────────────────────────────────────────────────────────────────────────────

export type LevelId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type StartStyle = 'primary' | 'secondary' | 'accent'

export interface LessonMeta {
  id: string        // e.g. 'l5-47'  (unique, exact-match - never substring)
  level: LevelId
  number: number
  title: string     // full title (home + nav)
  shortTitle: string // condensed title (sidebar)
  duration: number  // minutes
  href: string
}

export interface LevelMeta {
  level: LevelId
  slug: string            // 'level0'
  accent: string          // css token suffix: 'l0' … 'l6'
  icon: string            // nav/megamenu icon
  badge: string           // home card pill, e.g. '🟢 Level 0 · Foundations'
  navLabel: string        // megamenu column heading
  cardTitle: string       // home card H3
  cardDesc: string        // home card description
  hoursLabel: string      // e.g. '~5 hours · 5 lessons + capstone'
  featured: boolean       // featured = 2px colored border + tinted header/footer
  startStyle: StartStyle  // home "Start Level" button style
  startLabel: string
  capstoneText: string    // capstone link label on the home card
  capstoneDuration: string
  lessons: LessonMeta[]
}

// Helper to build a lesson with derived id + href.
function lesson(
  level: LevelId,
  number: number,
  title: string,
  shortTitle: string,
  duration: number,
): LessonMeta {
  return {
    id: `l${level}-${number}`,
    level,
    number,
    title,
    shortTitle,
    duration,
    href: `/level${level}/lesson${number}`,
  }
}

export const LEVELS: LevelMeta[] = [
  {
    level: 0,
    slug: 'level0',
    accent: 'l0',
    icon: '📚',
    badge: '🟢 Level 0 · Foundations',
    navLabel: 'Level 0 - Foundations',
    cardTitle: 'AI for Everyone',
    cardDesc: 'No prior experience needed. Start using AI in your daily work by end of this level.',
    hoursLabel: '⏱ ~5 hours · 5 lessons + capstone',
    featured: false,
    startStyle: 'primary',
    startLabel: 'Start Level 0 →',
    capstoneText: 'Level 0 Capstone Challenge',
    capstoneDuration: '60 min',
    lessons: [
      lesson(0, 1, 'What is AI, ML & LLMs?', 'What is AI?', 45),
      lesson(0, 2, 'The AI Landscape', 'The AI Landscape', 50),
      lesson(0, 3, 'Your First Real Conversations', 'First Conversations', 55),
      lesson(0, 4, 'AI for Your Job', 'AI for Your Job', 60),
      lesson(0, 5, 'Prompt Engineering 101', 'Prompt Engineering', 55),
    ],
  },
  {
    level: 1,
    slug: 'level1',
    accent: 'l1',
    icon: '🚀',
    badge: '🔵 Level 1 · Going Deeper',
    navLabel: 'Level 1 - Going Deeper',
    cardTitle: 'Build Your AI Toolkit',
    cardDesc: 'Build custom AI tools, automate workflows, and dive deep into Claude Code.',
    hoursLabel: '⏱ ~7 hours · 6 lessons + capstone',
    featured: false,
    startStyle: 'secondary',
    startLabel: 'Start Level 1 →',
    capstoneText: 'Level 1 Capstone Challenge',
    capstoneDuration: '75 min',
    lessons: [
      lesson(1, 6, 'Advanced Prompting & Workflows', 'Advanced Prompting', 55),
      lesson(1, 7, 'Custom AI Tools', 'Custom AI Tools', 55),
      lesson(1, 8, 'AI Agents Explained', 'AI Agents', 55),
      lesson(1, 9, 'MCP - Connect AI to Your World', 'MCP', 50),
      lesson(1, 10, 'Claude Code - Deep Dive', 'Claude Code', 60),
      lesson(1, 11, "Responsible AI & What's Next", 'Responsible AI', 40),
    ],
  },
  {
    level: 2,
    slug: 'level2',
    accent: 'l2',
    icon: '🧠',
    badge: '🟡 Level 2 · Applied AI',
    navLabel: 'Level 2 - Applied AI',
    cardTitle: 'AI in the Real World',
    cardDesc: 'Deep research, writing, data analysis, strategy, automation, and building your AI OS.',
    hoursLabel: '⏱ ~10 hours · 7 lessons + capstone',
    featured: false,
    startStyle: 'secondary',
    startLabel: 'Start Level 2 →',
    capstoneText: 'Level 2 Capstone Challenge',
    capstoneDuration: '90 min',
    lessons: [
      lesson(2, 12, 'AI for Deep Research', 'Deep Research', 90),
      lesson(2, 13, 'AI Writing Lab', 'AI Writing Lab', 90),
      lesson(2, 14, 'AI + Data Analysis', 'AI + Data Analysis', 90),
      lesson(2, 15, 'Strategy & Decisions', 'Strategy & Decisions', 90),
      lesson(2, 16, 'Claude Knowledge Base', 'Claude Knowledge Base', 90),
      lesson(2, 17, 'AI Automation', 'AI Automation', 90),
      lesson(2, 18, 'Your AI OS', 'Your AI OS', 90),
    ],
  },
  {
    level: 3,
    slug: 'level3',
    accent: 'l3',
    icon: '🔮',
    badge: '🔮 Level 3 · Master Claude',
    navLabel: 'Level 3 - Master Claude',
    cardTitle: 'Become a Claude Superuser',
    cardDesc: 'Advanced prompting, MCP, Claude Code, CLAUDE.md, Skills, and full agentic workflows. For technical users who want to master every Claude capability.',
    hoursLabel: '⏱ ~18 hours · 10 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 3 →',
    capstoneText: 'Level 3 Capstone: Build a Real Application',
    capstoneDuration: '120 min',
    lessons: [
      lesson(3, 19, 'Models, Memory & Mindset', 'Models, Memory & Mindset', 90),
      lesson(3, 20, 'Advanced Prompt Engineering', 'Advanced Prompt Engineering', 90),
      lesson(3, 21, 'CLAUDE.md & Memory', 'CLAUDE.md & Memory', 75),
      lesson(3, 22, 'MCP Deep Dive', 'MCP Deep Dive', 120),
      lesson(3, 23, 'Claude Code Superuser', 'Claude Code Superuser', 120),
      lesson(3, 24, 'Cowork + Skills Mastery', 'Cowork + Skills Mastery', 90),
      lesson(3, 25, 'Agentic Workflows', 'Agentic Workflows', 120),
      lesson(3, 26, "Don'ts & Beware", "Don'ts & Beware", 75),
      lesson(3, 27, 'Claude Ecosystem + Free Stack', 'Ecosystem + Free Stack', 90),
      lesson(3, 28, 'Claude Settings: Complete Guide', 'Claude Settings', 75),
    ],
  },
  {
    level: 4,
    slug: 'level4',
    accent: 'l4',
    icon: '🔧',
    badge: '🔵 Level 4 · AI Builder',
    navLabel: 'Level 4 - Claude for Builders',
    cardTitle: 'Build with Claude',
    cardDesc: 'Direct API access, RAG, multi-agent systems, vision, production deployment, and evals. For developers who want to build AI-powered products.',
    hoursLabel: '⏱ ~14 hours · 9 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 4 →',
    capstoneText: 'Level 4 Capstone: Ship Your AI Product',
    capstoneDuration: '120 min',
    lessons: [
      lesson(4, 29, 'The Claude API: Direct Access', 'The Claude API', 90),
      lesson(4, 30, 'Structured Outputs & Tool Use', 'Structured Outputs & Tool Use', 90),
      lesson(4, 31, 'Building RAG Systems', 'Building RAG Systems', 100),
      lesson(4, 32, 'Multi-Agent Architectures', 'Multi-Agent Architectures', 100),
      lesson(4, 33, 'Claude for Teams & Orgs', 'Claude for Teams & Orgs', 75),
      lesson(4, 34, 'Multi-Modal: Vision & Docs', 'Multi-Modal: Vision & Docs', 80),
      lesson(4, 35, 'Production AI Systems', 'Production AI Systems', 90),
      lesson(4, 36, 'Responsible AI for Builders', 'Responsible AI for Builders', 75),
      lesson(4, 37, 'Advanced Prompt Evaluation', 'Advanced Prompt Evaluation', 90),
    ],
  },
  {
    level: 5,
    slug: 'level5',
    accent: 'l5',
    icon: '⌨️',
    badge: '🟣 Level 5 · Copilot Track',
    navLabel: 'Level 5 - AI Coding Tools',
    cardTitle: 'AI-Powered Developer',
    cardDesc: 'GitHub Copilot, Claude Code, Cursor, and Devin Desktop (Windsurf) - master AI coding tools for inline completion, debugging, testing, refactoring, git workflows, and agentic coding.',
    hoursLabel: '⏱ ~7 hours · 10 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 5 →',
    capstoneText: 'Level 5 Capstone: AI Developer Showcase',
    capstoneDuration: '120 min',
    lessons: [
      lesson(5, 38, 'AI Tools for Devs - The Landscape', 'AI Tools for Devs - The Landscape', 30),
      lesson(5, 39, 'Inline Code Completion Mastery', 'Inline Code Completion Mastery', 35),
      lesson(5, 40, 'AI Chat for Development', 'AI Chat for Development', 35),
      lesson(5, 41, 'Documenting Code with AI', 'Documenting Code with AI', 30),
      lesson(5, 42, 'Debugging with AI', 'Debugging with AI', 40),
      lesson(5, 43, 'Writing Tests with AI', 'Writing Tests with AI', 40),
      lesson(5, 44, 'Refactoring & Code Review', 'Refactoring & Code Review', 40),
      lesson(5, 45, 'Git Workflow with AI', 'Git Workflow with AI', 35),
      lesson(5, 46, 'Agentic Coding', 'Agentic Coding', 45),
      lesson(5, 47, 'Custom AI Extensions & Agents', 'Custom AI Extensions & Agents', 45),
    ],
  },
  {
    level: 6,
    slug: 'level6',
    accent: 'l6',
    icon: '🎨',
    badge: '🎨 Level 6 · Generative Media',
    navLabel: 'Level 6 - Generative Media',
    cardTitle: 'Create with AI',
    cardDesc: 'Generate images, video, voice, and music with AI. Master Midjourney, Firefly, Veo, Runway, ElevenLabs and Suno - plus the rights, licensing, and provenance rules every creator needs in 2026.',
    hoursLabel: '⏱ ~6 hours · 8 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 6 →',
    capstoneText: 'Level 6 Capstone: Produce a Full Multimedia Piece',
    capstoneDuration: '120 min',
    lessons: [
      lesson(6, 48, 'The Generative Media Landscape', 'Generative Media Landscape', 40),
      lesson(6, 49, 'AI Image Generation Fundamentals', 'Image Generation', 45),
      lesson(6, 50, 'Advanced Image Workflows', 'Advanced Image Workflows', 45),
      lesson(6, 51, 'AI Video Generation', 'AI Video Generation', 45),
      lesson(6, 52, 'AI Voice & Audio', 'AI Voice & Audio', 40),
      lesson(6, 53, 'Multimodal & Design Tools', 'Multimodal & Design Tools', 40),
      lesson(6, 54, 'Ethics, Rights & Authenticity', 'Ethics, Rights & Authenticity', 35),
      lesson(6, 55, 'Building a Creative Pipeline', 'Building a Creative Pipeline', 45),
    ],
  },
  {
    level: 7,
    slug: 'level7',
    accent: 'l7',
    icon: '🔁',
    badge: '🔁 Level 7 · Loop Engineering',
    navLabel: 'Level 7 - Loop Engineering',
    cardTitle: 'From Prompter to Loop Designer',
    cardDesc: 'Stop hand-prompting agents. Design small systems - loops - that find the work, run the agent, check the result, and decide what is next. The roadmap from prompter to loop designer, explained in plain terms.',
    hoursLabel: '⏱ ~8 hours · 9 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 7 →',
    capstoneText: 'Level 7 Capstone: Design Your First Loop',
    capstoneDuration: '120 min',
    lessons: [
      lesson(7, 56, 'From Prompter to Loop Designer', 'Prompter → Loop Designer', 45),
      lesson(7, 57, 'Should You Even Build a Loop?', 'Should You Build a Loop?', 40),
      lesson(7, 58, 'Automations + Worktrees', 'Automations + Worktrees', 50),
      lesson(7, 59, 'Skills - Project Knowledge', 'Skills', 40),
      lesson(7, 60, 'Connectors - Touch the Real World', 'Connectors', 40),
      lesson(7, 61, 'Sub-Agents - Maker vs Checker', 'Sub-Agents', 45),
      lesson(7, 62, 'The State File - Memory That Lasts', 'The State File', 35),
      lesson(7, 63, 'The Minimum Viable Loop', 'Minimum Viable Loop', 45),
      lesson(7, 64, 'When Loops Go Wrong', 'When Loops Go Wrong', 45),
    ],
  },
  {
    level: 8,
    slug: 'level8',
    accent: 'l8',
    icon: '🧠',
    badge: '🧠 Level 8 · Context Engineering',
    navLabel: 'Level 8 - Context Engineering',
    cardTitle: 'From Wording to Wiring',
    cardDesc: 'Prompt engineering is one sentence; context engineering is the whole pipeline that feeds the model. Design what the agent sees every turn - instructions, retrieval, memory, and tools - so it stops failing on bad context.',
    hoursLabel: '⏱ ~7 hours · 8 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 8 →',
    capstoneText: 'Level 8 Capstone: Design a Context Pipeline',
    capstoneDuration: '120 min',
    lessons: [
      lesson(8, 65, 'From Wording to Wiring', 'Wording → Wiring', 40),
      lesson(8, 66, 'The Attention Budget', 'The Attention Budget', 40),
      lesson(8, 67, 'Pillar 1 - Instructions', 'Pillar 1 - Instructions', 40),
      lesson(8, 68, 'Pillar 2 - Retrieval', 'Pillar 2 - Retrieval', 45),
      lesson(8, 69, 'Pillar 3 - Memory', 'Pillar 3 - Memory', 45),
      lesson(8, 70, 'Pillar 4 - Tools', 'Pillar 4 - Tools', 40),
      lesson(8, 71, 'Assembling Context', 'Assembling Context', 45),
      lesson(8, 72, 'When Context Goes Wrong', 'When Context Goes Wrong', 40),
    ],
  },
  {
    level: 9,
    slug: 'level9',
    accent: 'l9',
    icon: '📐',
    badge: '📐 Level 9 · Spec-Driven Development',
    navLabel: 'Level 9 - Spec-Driven Development',
    cardTitle: 'Specs as the Source of Truth',
    cardDesc: 'Stop vibe-coding. Write the spec, let the agent build from it. Go deep on Spec Kit, BMAD (with a full small-app build), LID, and EARS - the methods that turn AI from a wildcard into a disciplined teammate.',
    hoursLabel: '⏱ ~8 hours · 8 lessons + capstone',
    featured: true,
    startStyle: 'accent',
    startLabel: 'Start Level 9 →',
    capstoneText: 'Level 9 Capstone: Spec Your Own App',
    capstoneDuration: '120 min',
    lessons: [
      lesson(9, 73, 'What Is Spec-Driven Development?', 'What Is SDD?', 40),
      lesson(9, 74, "Writing Specs That Don't Lie (EARS)", 'Writing Specs (EARS)', 45),
      lesson(9, 75, 'The SDD Toolbox', 'The SDD Toolbox', 40),
      lesson(9, 76, 'BMAD Part 1 - Your AI Product Team', 'BMAD: The Team', 45),
      lesson(9, 77, 'BMAD Part 2 - The Workflow', 'BMAD: The Workflow', 50),
      lesson(9, 78, 'BMAD Part 3 - Build a Small App', 'BMAD: Build an App', 55),
      lesson(9, 79, 'LID - Linked Intent Development', 'LID', 45),
      lesson(9, 80, 'Best Practices & Anti-Patterns', 'Best Practices', 40),
    ],
  },
]

// ── Derived helpers ──────────────────────────────────────────────────────────

/** Every lesson across every level, in order (capstones excluded). */
export const ALL_LESSONS: LessonMeta[] = LEVELS.flatMap(l => l.lessons)

/** Total teachable lessons - capstones are NOT counted toward progress. */
export const TOTAL_LESSONS = ALL_LESSONS.length

export function getLevel(level: LevelId): LevelMeta | undefined {
  return LEVELS.find(l => l.level === level)
}

export function getLessonById(id: string): LessonMeta | undefined {
  return ALL_LESSONS.find(l => l.id === id)
}

/** Adjacent lessons for prev/next navigation (within the flat lesson order). */
export function getAdjacent(id: string): { prev?: LessonMeta; next?: LessonMeta } {
  const idx = ALL_LESSONS.findIndex(l => l.id === id)
  if (idx === -1) return {}
  return {
    prev: idx > 0 ? ALL_LESSONS[idx - 1] : undefined,
    next: idx < ALL_LESSONS.length - 1 ? ALL_LESSONS[idx + 1] : undefined,
  }
}
