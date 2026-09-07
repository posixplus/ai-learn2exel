'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson84() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-84" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={84}
          duration={70}
          title="Migrating to the Claude Agent SDK"
          subtitle="Same app, same behaviour. Watch what the SDK absorbs and what it doesn't"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Port Dayflow from the raw loop to the Claude Agent SDK in Python and TypeScript</li>
            <li>Map each thing you hand-wrote in 81 to 83 onto an SDK feature: loop, permissions, hooks, MCP, subagents</li>
            <li>Know exactly what you're still responsible for after the migration</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Why the SDK exists</li>
            <li>The migration, tool by tool</li>
            <li>Hooks: pre-tool, post-tool, on-stop</li>
            <li>The permission model you get for free</li>
            <li>What the SDK does not do for you</li>
            <li>Hands-on: diff the two implementations</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-84</code>) so
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

        <LessonNav currentLessonId="l10-84" />
      </main>
    </div>
  )
}
