'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson85() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-85" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={85}
          duration={60}
          title="Orchestration: When One Agent Is Enough"
          subtitle="Most multi-agent systems should have been one agent with better tools"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Compare single-agent, orchestrator-workers, and handoff patterns on cost, latency and debuggability</li>
            <li>Split Dayflow into a brief subagent and a triage subagent only where it measurably helps</li>
            <li>Recognise the three signals that you actually need a second agent</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>The patterns: one agent, orchestrator-workers, handoffs</li>
            <li>Cost and latency: the numbers</li>
            <li>Debuggability: the hidden cost of agents talking to agents</li>
            <li>Dayflow: brief vs triage subagents</li>
            <li>When to stop adding agents</li>
            <li>Hands-on: measure before and after</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-85</code>) so
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

        <LessonNav currentLessonId="l10-85" />
      </main>
    </div>
  )
}
