'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson91() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-91" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={91}
          duration={60}
          title="Reliability Engineering"
          subtitle="Tools go down. Models rate-limit. The agent should degrade, not die"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Add retries with backoff and idempotency keys so a retried send doesn't send twice</li>
            <li>Set timeouts per tool and per run, and handle them explicitly</li>
            <li>Build a model fallback chain and a degraded mode when a tool is unavailable</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Failure taxonomy: transient, permanent, partial</li>
            <li>Retries, backoff, idempotency</li>
            <li>Timeouts at every layer</li>
            <li>Rate limits and queues</li>
            <li>Model fallback chains</li>
            <li>Graceful degradation</li>
            <li>Hands-on: chaos test Dayflow</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-91</code>) so
            you can check out the exact starting state. Python is shown inline; the TypeScript mirror lives
            in <code>ts/</code>.
          </div>
        </section>

        <section className="section-card">
          <h2>Content in progress</h2>
          <p>
            The full walkthrough, code and hands-on exercise for this lesson are being written. The
            outline above is final; check back or follow the companion repo for the code as it lands.
          </p>
        </section>

        <LessonNav currentLessonId="l10-91" />
      </main>
    </div>
  )
}
