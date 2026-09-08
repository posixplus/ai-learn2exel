import type { MetadataRoute } from 'next'
import { LEVELS, ALL_LESSONS, capstonePublished } from '@/data/course'

const BASE = 'https://learn2exel.com'

// Derived from the single course data source so the sitemap never drifts.
const LESSON_PATHS = [
  ...ALL_LESSONS.map(l => `level${l.level}/lesson${l.number}`),
  ...LEVELS.filter(capstonePublished).map(lvl => `${lvl.slug}/capstone`),
]

const TOOLS = [
  'certifications',
  'certificate',
  'tools/quiz',
  'tools/prompt-library',
  'tools/glossary',
  'tools/claude-cheatsheet',
  'tools/antigravity',
  'tools/cursor',
  'tools/windsurf',
  'tools/github-copilot',
  'tools/claude-code-cli',
  'tools/vscode-ai',
  'tools/ollama',
  'tools/huggingface',
  'tools/local-ai',
  'tools/ai-apis',
  'tools/ai-hardware',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...LESSON_PATHS.map(path => ({
      url: `${BASE}/${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path.includes('capstone') ? 0.7 : 0.8,
    })),
    ...TOOLS.map(path => ({
      url: `${BASE}/${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
