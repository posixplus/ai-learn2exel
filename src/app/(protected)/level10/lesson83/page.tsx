'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson83() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-83" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={83}
          duration={70}
          title="State, Checkpoints & Resumability"
          subtitle="An agent that can't survive a crash mid-task is a demo, not a system"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Persist every run to SQLite: messages, tool calls, results, and a step index</li>
            <li>Resume a run from its last checkpoint after a simulated crash</li>
            <li>Compact the context when it fills, without losing what the agent decided</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>What state actually is (and what it isn't)</li>
            <li>The run table: one row per step</li>
            <li>Checkpoint, crash, resume</li>
            <li>Compaction: summarise the past, keep the decisions</li>
            <li>The Dayflow state file: what it told you, what's pending</li>
            <li>Hands-on: kill -9 in the middle of a brief</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-83</code>) so
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

        <LessonNav currentLessonId="l10-83" />
      </main>
    </div>
  )
}
