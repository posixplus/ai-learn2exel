'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'

export default function Lesson92() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-92" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={92}
          duration={60}
          title="Expose Dayflow as an MCP Server"
          subtitle="Your tools, usable from Claude Desktop, Claude Code and anything else that speaks MCP"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Wrap Dayflow's tools in an MCP server in Python and TypeScript</li>
            <li>Add auth, streaming and versioning so it's safe to share</li>
            <li>Test the server the way you'd test any API</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>In this lesson</h2>
          <ol>
            <li>Why expose it at all</li>
            <li>MCP server anatomy</li>
            <li>Auth and per-client scopes</li>
            <li>Streaming long tool results</li>
            <li>Versioning tools without breaking clients</li>
            <li>Testing an MCP server</li>
            <li>Hands-on: use Dayflow from Claude Desktop</li>
          </ol>
          <div className="info-box">
            <strong>Track note:</strong> Level 10 builds one application, <strong>Dayflow</strong>, across all
            twelve lessons. Each lesson has a matching tag in the companion repo (<code>lesson-92</code>) so
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

        <LessonNav currentLessonId="l10-92" />
      </main>
    </div>
  )
}
