'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson81() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-81" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={81}
          duration={60}
          title="The Agent Loop From Scratch"
          subtitle="No framework, no magic: the 60 lines everything else sits on"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Write the Messages API loop by hand: send, read stop_reason, execute tool_use, return tool_result, repeat</li>
            <li>Add the three termination guards every loop needs: max steps, token budget, and an explicit 'done' signal</li>
            <li>Run Dayflow in MOCK mode against JSON fixtures so the loop is deterministic and free to run</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Why start without the SDK</li>
            <li>The five stop reasons and what each one means</li>
            <li>The loop, line by line</li>
            <li>Termination guards: steps, tokens, done</li>
            <li>Dayflow v0: morning brief from fixtures</li>
            <li>Hands-on: break the loop on purpose</li>
            <li>TypeScript mirror: what differs</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-81</code>) so
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

        <LessonNav currentLessonId="l10-81" />
      </main>
    </div>
  )
}
