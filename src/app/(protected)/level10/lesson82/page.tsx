'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson82() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-82" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={82}
          duration={60}
          title="Tool Design as API Design"
          subtitle="Tools are the contract between the model and your system. Design them like you'd design an API"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Write JSON schemas that make the wrong call hard and the right call obvious</li>
            <li>Return structured data, never prose, and design an error contract the model can recover from</li>
            <li>Separate read tools from side-effect tools so lesson 86 can gate them</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>The model is a client of your API</li>
            <li>Schema design: enums, required fields, descriptions that teach</li>
            <li>Error contracts: retryable vs terminal</li>
            <li>Idempotency keys on every write tool</li>
            <li>Read vs write tools in Dayflow</li>
            <li>Deferred tool loading when you have 50+ tools</li>
            <li>Hands-on: refactor Dayflow's tools</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-82</code>) so
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

        <LessonNav currentLessonId="l10-82" />
      </main>
    </div>
  )
}
