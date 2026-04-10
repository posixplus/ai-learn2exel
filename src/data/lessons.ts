export interface LessonMeta {
  id: string
  level: 0 | 1
  number: number
  title: string
  shortTitle: string
  subtitle: string
  duration: number
  href: string
  prevHref?: string
  nextHref?: string
}

export const LESSONS: LessonMeta[] = [
  {
    id: 'l0-1',
    level: 0,
    number: 1,
    title: 'What is AI, ML & LLMs?',
    shortTitle: 'What is AI?',
    subtitle: 'Understand the AI family tree and how LLMs actually work',
    duration: 45,
    href: '/level0/lesson1',
    prevHref: undefined,
    nextHref: '/level0/lesson2',
  },
  {
    id: 'l0-2',
    level: 0,
    number: 2,
    title: 'The AI Landscape',
    shortTitle: 'The AI Landscape',
    subtitle: 'Tour all major AI tools and know when to use each',
    duration: 50,
    href: '/level0/lesson2',
    prevHref: '/level0/lesson1',
    nextHref: '/level0/lesson3',
  },
  {
    id: 'l0-3',
    level: 0,
    number: 3,
    title: 'Your First Real Conversations',
    shortTitle: 'First Conversations',
    subtitle: 'Learn how to talk to AI effectively from day one',
    duration: 55,
    href: '/level0/lesson3',
    prevHref: '/level0/lesson2',
    nextHref: '/level0/lesson4',
  },
  {
    id: 'l0-4',
    level: 0,
    number: 4,
    title: 'AI for Your Job',
    shortTitle: 'AI for Your Job',
    subtitle: 'Practical AI use for every profession',
    duration: 60,
    href: '/level0/lesson4',
    prevHref: '/level0/lesson3',
    nextHref: '/level0/lesson5',
  },
  {
    id: 'l0-5',
    level: 0,
    number: 5,
    title: 'Prompt Engineering 101',
    shortTitle: 'Prompt Engineering',
    subtitle: 'Master the techniques that get great results',
    duration: 55,
    href: '/level0/lesson5',
    prevHref: '/level0/lesson4',
    nextHref: '/level0/capstone',
  },
  {
    id: 'l1-6',
    level: 1,
    number: 6,
    title: 'Advanced Prompting & Workflows',
    shortTitle: 'Advanced Prompting',
    subtitle: 'Chain prompts and build multi-step AI workflows',
    duration: 55,
    href: '/level1/lesson6',
    prevHref: '/level0/capstone',
    nextHref: '/level1/lesson7',
  },
  {
    id: 'l1-7',
    level: 1,
    number: 7,
    title: 'Custom AI Tools',
    shortTitle: 'Custom AI Tools',
    subtitle: 'Build Claude Projects, Custom GPTs, and Gemini Gems',
    duration: 55,
    href: '/level1/lesson7',
    prevHref: '/level1/lesson6',
    nextHref: '/level1/lesson8',
  },
  {
    id: 'l1-8',
    level: 1,
    number: 8,
    title: 'AI Agents Explained',
    shortTitle: 'AI Agents',
    subtitle: 'Understand and use autonomous AI agents',
    duration: 55,
    href: '/level1/lesson8',
    prevHref: '/level1/lesson7',
    nextHref: '/level1/lesson9',
  },
  {
    id: 'l1-9',
    level: 1,
    number: 9,
    title: 'MCP — Connect AI to Your World',
    shortTitle: 'MCP',
    subtitle: 'Connect Claude to Gmail, Drive, Calendar and more',
    duration: 50,
    href: '/level1/lesson9',
    prevHref: '/level1/lesson8',
    nextHref: '/level1/lesson10',
  },
  {
    id: 'l1-10',
    level: 1,
    number: 10,
    title: 'Claude Code — Deep Dive',
    shortTitle: 'Claude Code',
    subtitle: 'Install, use, and extend Claude Code with Skills and Agents',
    duration: 60,
    href: '/level1/lesson10',
    prevHref: '/level1/lesson9',
    nextHref: '/level1/lesson11',
  },
  {
    id: 'l1-11',
    level: 1,
    number: 11,
    title: 'Responsible AI & What\'s Next',
    shortTitle: 'Responsible AI',
    subtitle: 'Use AI safely, ethically, and stay current',
    duration: 40,
    href: '/level1/lesson11',
    prevHref: '/level1/lesson10',
    nextHref: '/level1/capstone',
  },
]

export function getLessonById(id: string) {
  return LESSONS.find(l => l.id === id)
}
