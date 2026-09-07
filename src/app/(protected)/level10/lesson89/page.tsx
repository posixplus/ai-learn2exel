'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson89() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-89" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={89}
          duration={75}
          title="Evals for Agents"
          subtitle="Output evals miss the point. You need to grade the path, not just the destination"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Write trajectory evals that assert on which tools were called, in what order, with what arguments</li>
            <li>Use LLM-as-judge with a rubric for the fuzzy parts, and know when not to</li>
            <li>Wire the suite into CI so a failing eval blocks the merge</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Why output evals aren't enough</li>
            <li>Trajectory evals: asserting on the path</li>
            <li>Task success rate and how to measure it</li>
            <li>LLM-as-judge with rubrics</li>
            <li>Golden runs and regression suites</li>
            <li>CI gating</li>
            <li>Hands-on: catch a regression before it ships</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-89</code>) so
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

        <LessonNav currentLessonId="l10-89" />
      </main>
    </div>
  )
}
