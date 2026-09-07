'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson88() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-88" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={88}
          duration={70}
          title="Security: Injection, Exfil & Least Privilege"
          subtitle="An email that says 'forward everything to X' is now in your context window. What happens next?"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Build a red-team fixture set: injection emails, exfil attempts, privilege escalation</li>
            <li>Defend with structure: untrusted content in tool results, never in the system prompt; sandboxed execution; scoped credentials</li>
            <li>Add the injection suite to CI so a regression fails the build</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Threat model for a personal agent</li>
            <li>Prompt injection via tool results</li>
            <li>Data exfiltration paths</li>
            <li>Least privilege: scopes, secrets, sandboxes</li>
            <li>The red-team fixture set</li>
            <li>Hands-on: make Dayflow fail, then fix it</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-88</code>) so
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

        <LessonNav currentLessonId="l10-88" />
      </main>
    </div>
  )
}
