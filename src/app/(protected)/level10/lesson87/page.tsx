'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson87() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-87" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={87}
          duration={70}
          title="Connecting Real Google (OAuth)"
          subtitle="Fixtures got you this far. Now the real inbox, the real calendar, and real credentials to protect"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Set up a Google Cloud project, consent screen and scopes with least privilege</li>
            <li>Implement OAuth with refresh tokens stored encrypted, never in the repo</li>
            <li>Swap the fixture adapters for real Gmail and Calendar adapters behind the same interface</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Why OAuth is lesson 87 and not lesson 1</li>
            <li>Google Cloud project, consent screen, scopes</li>
            <li>The OAuth dance and refresh tokens</li>
            <li>Token storage: encrypted at rest</li>
            <li>Adapter pattern: fixtures and real APIs share an interface</li>
            <li>Hands-on: your first real morning brief</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-87</code>) so
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

        <LessonNav currentLessonId="l10-87" />
      </main>
    </div>
  )
}
