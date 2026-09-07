'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson86() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-86" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={86}
          duration={60}
          title="Permissions & Human in the Loop"
          subtitle="Reads are free. Anything that sends, writes or deletes waits for a human"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Classify every Dayflow tool into read, reversible write, and irreversible write</li>
            <li>Build approval gates that pause the run, persist the pending action, and resume on approval</li>
            <li>Write an audit log that would satisfy a security review</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Action classes: read, reversible, irreversible</li>
            <li>The approval gate: pause, persist, resume</li>
            <li>Undo for reversible writes</li>
            <li>The audit log</li>
            <li>Batching approvals without losing safety</li>
            <li>Hands-on: approve a draft reply from your phone</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-86</code>) so
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

        <LessonNav currentLessonId="l10-86" />
      </main>
    </div>
  )
}
