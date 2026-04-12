'use client'
interface LessonHeaderProps {
  level: 0 | 1 | 2 | 3 | 4 | 5
  lessonNumber: number | string
  duration: number
  title: string
  subtitle: string
  professions?: string[]
}

export default function LessonHeader({
  level,
  lessonNumber,
  duration,
  title,
  subtitle,
  professions = [],
}: LessonHeaderProps) {
  return (
    <div className="lesson-header">
      <div className="lesson-meta">
        <span className={`lesson-level-tag l${level}`}>
          Level {level}
        </span>
        <span className="lesson-number">Lesson {lessonNumber}</span>
        <span className="lesson-duration">⏱️ {duration} min</span>
      </div>

      <h1 className="lesson-title">{title}</h1>
      <p className="lesson-subtitle">{subtitle}</p>

      {professions.length > 0 && (
        <div className="profession-tags">
          {professions.map((prof) => (
            <span key={prof} className="profession-tag">
              {prof}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
