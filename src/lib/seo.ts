import type { Metadata } from 'next'
import { getLevel, getLessonById, type LevelId } from '@/data/course'

const SITE = 'AI for Everyone'

/** Per-lesson metadata, derived from the single course data source. */
export function lessonMetadata(id: string): Metadata {
  const lesson = getLessonById(id)
  if (!lesson) return { title: SITE }
  const level = getLevel(lesson.level)
  const levelName = level?.navLabel ?? `Level ${lesson.level}`
  const title = `${lesson.title} | ${SITE}`
  const description = `Lesson ${lesson.number}: ${lesson.title}. Part of ${levelName} in the free, practical ${SITE} course. About ${lesson.duration} min, hands-on.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    alternates: { canonical: lesson.href },
  }
}

/** Per-capstone metadata. */
export function capstoneMetadata(levelId: LevelId): Metadata {
  const level = getLevel(levelId)
  if (!level) return { title: SITE }
  const title = `${level.capstoneText} | ${SITE}`
  const description = `${level.capstoneText} - the hands-on capstone project for ${level.navLabel} in the free ${SITE} course.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    alternates: { canonical: `/${level.slug}/capstone` },
  }
}

/** Metadata for a standalone tool / resource page. */
export function toolMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${SITE}`
  return {
    title: fullTitle,
    description,
    openGraph: { title: fullTitle, description },
    alternates: { canonical: path },
  }
}
