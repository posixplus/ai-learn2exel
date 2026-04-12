import type { MetadataRoute } from 'next'

const BASE = 'https://learn2exel.com'

const LESSONS = [
  // Level 0
  'level0/lesson1', 'level0/lesson2', 'level0/lesson3', 'level0/lesson4', 'level0/lesson5',
  'level0/capstone',
  // Level 1
  'level1/lesson6', 'level1/lesson7', 'level1/lesson8', 'level1/lesson9', 'level1/lesson10',
  'level1/capstone',
  // Level 2
  'level2/lesson11', 'level2/lesson12', 'level2/lesson13', 'level2/lesson14', 'level2/lesson15',
  'level2/capstone',
  // Level 3
  'level3/lesson16', 'level3/lesson17', 'level3/lesson18', 'level3/lesson19', 'level3/lesson20',
  'level3/capstone',
  // Level 4
  'level4/lesson21', 'level4/lesson22', 'level4/lesson23', 'level4/lesson24', 'level4/lesson25',
  'level4/capstone',
  // Level 5
  'level5/lesson26', 'level5/lesson27', 'level5/lesson28', 'level5/lesson29', 'level5/lesson30',
  'level5/capstone',
]

const TOOLS = [
  'tools/quiz',
  'tools/prompt-library',
  'tools/glossary',
  'tools/claude-cheatsheet',
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
    ...LESSONS.map(path => ({
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
