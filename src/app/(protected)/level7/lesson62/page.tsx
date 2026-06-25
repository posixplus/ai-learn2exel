'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson62() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-62" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={62}
          duration={35}
          title="The State File - Memory That Lasts"
          subtitle="The agent forgets everything between runs. A simple file that remembers is the quiet backbone of every loop that actually works"
        />

        <section className="section-card">
          <h2>The Simplest Idea That Matters Most</h2>
          <p>
            This piece sounds almost too dumb to be important: a loop needs a <strong>memory file</strong>.
            A place outside the conversation that records what&apos;s done, what&apos;s in progress, and
            what&apos;s next. That&apos;s it. Yet it&apos;s the structural backbone of every production
            loop - leave it out and the loop falls apart.
          </p>
          <p>
            Remember the goldfish problem from Lesson 59? Agents forget everything between runs. A loop
            <em> without</em> a memory file restarts its entire mental model from zero every single time.
            A loop <em>with</em> one picks up exactly where it left off.
          </p>
          <div className="info-box">
            <strong>The phrase to remember:</strong> <em>The agent forgets; the file remembers.</em> The
            memory has to live on disk, not in the agent&apos;s head.
          </div>
        </section>

        <section className="section-card">
          <h2>What a State File Looks Like</h2>
          <p>
            It can be a Markdown file, a JSON file, or even a board in a tool like Linear. The format
            doesn&apos;t matter; the persistence does. Here&apos;s a JSON example for a CI-triage loop:
          </p>
          <div className="code-block">
            <pre>{`{
  "loop_id": "ci-triage",
  "last_run": "2026-06-15T03:30:00Z",
  "status": {
    "failures_classified": 7,
    "fixes_drafted": 3,
    "escalated_to_humans": 4
  },
  "in_progress": [
    { "branch": "fix-auth-refresh", "status": "awaiting_ci" }
  ],
  "lessons_learned": [
    "Windows runner hits TLS issues; fall back to bash.",
    "Checkout tests need the stripe webhook secret; skip if missing."
  ]
}`}</pre>
          </div>
          <div className="info-box">
            <strong>Look at <code>lessons_learned</code>.</strong> That&apos;s the loop getting smarter
            over time - recording the gotchas it hit so future runs don&apos;t repeat them. A state file
            isn&apos;t just a to-do list; it&apos;s the loop&apos;s growing experience.
          </div>
        </section>

        <section className="section-card">
          <h2>What the Memory Buys You</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Resume instead of restart</strong>
              <p>Tomorrow&apos;s run reads the file and continues from where today stopped - no wasted
                effort re-doing finished work.</p>
            </div>
            <div className="step">
              <strong>Survive interruptions</strong>
              <p>If a run crashes or you stop it, nothing is lost. The state on disk is the truth, not the
                conversation that vanished.</p>
            </div>
            <div className="step">
              <strong>Stay honest about progress</strong>
              <p>You can open the file any time and see exactly what the loop tried, what passed, and
                what&apos;s still open. No mystery.</p>
            </div>
            <div className="step">
              <strong>Fight forgetfulness over long runs</strong>
              <p>Forcing the loop to re-read a base file each cycle keeps it anchored to the real goal -
                a trick we&apos;ll lean on hard in the next lesson to prevent &quot;drift.&quot;</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Where to Keep It</h2>
          <div className="code-block">
            <pre>{`IN-REPO MARKDOWN  (STATE.md at your project root)
  ✓ version-controlled, visible, dead simple
  ✓ best for solo devs and small, tight teams

EXTERNAL SYSTEM  (a database, or a Linear board)
  ✓ survives across multiple repos
  ✓ gives a whole team shared visibility
  ✓ best for bigger, cross-team loops`}</pre>
          </div>
          <div className="info-box">
            <strong>Start with <code>STATE.md</code>.</strong> A plain Markdown file in your project root
            is enough for your first loop. You can graduate to fancier storage later if the loop grows up.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Create Your STATE.md</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Create a <code>STATE.md</code> for your candidate loop.
            Give it four sections: <strong>Last run</strong> (a date), <strong>Done</strong> (what&apos;s
            finished), <strong>In progress</strong> (what&apos;s mid-flight), and <strong>Lessons
            learned</strong> (gotchas to remember). Fill in a realistic first entry as if the loop just
            ran once. This file is a required piece of your capstone - and in the capstone&apos;s
            interactive helper, you&apos;ll get a starter version generated for you automatically.
          </div>
        </section>

        <QuickRef title="Lesson 62 Quick Reference" items={[
          { term: 'State file', definition: 'A persistent memory (Markdown/JSON/Linear) outside the conversation that records done, in-progress, and next' },
          { term: 'The agent forgets; the file remembers', definition: 'Memory must live on disk because the agent loses context between runs' },
          { term: 'lessons_learned', definition: 'Recording gotchas so the loop gets smarter over time instead of repeating mistakes' },
          { term: 'Resume vs restart', definition: 'A state file lets each run continue where the last stopped, surviving crashes and stops' },
          { term: 'STATE.md', definition: 'A simple in-repo Markdown file - the right starting point for your first loop' },
          { term: 'External state', definition: 'Databases or Linear boards for loops that span repos or need team-wide visibility' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson61', label: 'Sub-Agents - Maker vs Checker' }}
          next={{ href: '/level7/lesson63', label: 'The Minimum Viable Loop' }}
          currentLessonId="l7-62"
        />
      </main>
    </div>
  )
}
