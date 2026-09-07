'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson90() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-90" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={90}
          duration={60}
          title="Observability & Cost"
          subtitle="If you can't see the run, you can't fix the run"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Emit OpenTelemetry traces per run with spans per step and per tool call</li>
            <li>Keep a token ledger per feature so you know what the morning brief actually costs</li>
            <li>Cut cost with prompt caching and the Batch API where latency doesn't matter</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Traces, spans, and what to attach to them</li>
            <li>The token ledger</li>
            <li>Prompt caching: what to cache and what it saves</li>
            <li>Batch API for offline work</li>
            <li>Latency budgets</li>
            <li>Hands-on: find the expensive step</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-90</code>) so
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

        <LessonNav currentLessonId="l10-90" />
      </main>
    </div>
  )
}
