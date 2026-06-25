'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson63() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-63" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={63}
          duration={45}
          title="The Minimum Viable Loop"
          subtitle="Put the pieces together into the smallest loop that actually works - and learn the one order of operations that prevents most failures"
        />

        <section className="section-card">
          <h2>Resist the Urge to Build a Robot Army</h2>
          <p>
            You now know all five building blocks plus the state file. The temptation is to wire them all
            into a giant multi-agent swarm on day one. Don&apos;t. The number-one rule of your first loop
            is: <strong>build the smallest one that works.</strong> A <strong>Minimum Viable Loop (MVL)</strong>.
          </p>
          <div className="info-box">
            <strong>Why small wins:</strong> a tiny loop is easy to understand, cheap to run, and easy to
            fix when it misbehaves. A huge one is a mystery box that burns money in ways you can&apos;t
            trace. You can always add pieces later - you can rarely debug complexity you added too early.
          </div>
        </section>

        <section className="section-card">
          <h2>The Four Pillars of a Minimum Viable Loop</h2>
          <p>An MVL needs just four things, in a straight line:</p>
          <div className="code-block">
            <pre>{`   AUTOMATION        SKILL           STATE FILE         GATE
   (the heartbeat) → (the project  → (the memory of  → (the automatic
    runs on a         knowledge,      what's done       checker that
    schedule)         a SKILL.md)     so far)           rejects bad work)

   "every morning" → "here's how → "resume where → "tests must pass
                      we triage"     I left off"        before it counts"`}</pre>
          </div>
          <p>
            That&apos;s it. One trigger, one skill so the agent knows your project, one file so it
            remembers, and one objective gate so &quot;done&quot; means something. Worktrees, connectors,
            and extra sub-agents are upgrades you add <em>after</em> this works.
          </p>
        </section>

        <section className="section-card">
          <h2>The Order of Operations (Don&apos;t Skip This)</h2>
          <p>
            This is the most practical thing in the whole level. Build your loop in <strong>this exact
            order</strong>. Skipping straight to the end is the number-one reason loops fail in production.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Make it work manually, 100% reliably</strong>
              <p>First, do the task by hand-prompting the agent until it works every time. If you
                can&apos;t do it reliably by hand, a loop won&apos;t magically fix that - it&apos;ll just
                fail faster and more often.</p>
            </div>
            <div className="step">
              <strong>2 - Write it down as a Skill</strong>
              <p>Capture that reliable manual process into a single static <code>SKILL.md</code>. Now the
                knowledge lives outside your head.</p>
            </div>
            <div className="step">
              <strong>3 - Wrap it in a loop</strong>
              <p>Run the skill inside a loop with a state file and a gate - but still kick it off
                yourself and watch it.</p>
            </div>
            <div className="step">
              <strong>4 - Only now, schedule it</strong>
              <p>Once it runs cleanly under your eye, put it on a schedule to run unattended. Automating
                something you haven&apos;t watched work is asking for a quiet disaster.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>One line to tattoo on your brain:</strong> manual → skill → loop → schedule. In that
            order, every time.
          </div>
        </section>

        <section className="section-card">
          <h2>One Loop, Start to Finish</h2>
          <p>Here&apos;s what a complete, modest morning loop looks like in plain English:</p>
          <div className="code-block">
            <pre>{`7:00am - the automation wakes up on the repo.
  → It runs the "CI triage" skill: read last night's test
    failures, the open issues, and recent commits.
  → It writes what it finds into STATE.md.
  → For each easy, machine-checkable failure, it drafts a fix
    in an isolated worktree.
  → A checker sub-agent reviews each draft against the tests.
  → The gate runs the tests - only passing fixes count as "done".
  → A connector opens a draft PR and posts a summary to Slack.
  → Anything it can't safely handle is left in your inbox.

You: review the finished drafts over coffee. You never typed
     a single prompt during any of it.`}</pre>
          </div>
          <p>
            You <em>designed</em> that once. Every block you learned shows up exactly once. That&apos;s a
            real loop - and notice it&apos;s still small enough to understand in one read.
          </p>
        </section>

        <section className="section-card">
          <h2>The Only Metric That Matters</h2>
          <p>
            How do you know if your loop is actually helping? Not by tokens spent, tasks attempted, or
            loops scheduled. The one true measure is <strong>Cost per Accepted Change</strong> - how much
            does it cost to produce a change a human actually accepts and merges?
          </p>
          <div className="info-box">
            <strong>The 50% rule:</strong> if humans accept fewer than half of the loop&apos;s pull
            requests, you&apos;re spending more time reviewing junk than the loop saved you. At that point
            the loop is <em>losing</em> you money and time - fix it or shut it off. A loop that produces
            work people throw away isn&apos;t a productivity tool; it&apos;s an expensive distraction.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Sketch Your MVL</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> On one page, draw your Minimum Viable Loop using the four
            pillars: name your <strong>automation</strong> (when it runs), your <strong>skill</strong>
            (the SKILL.md you drafted in Lesson 59), your <strong>state file</strong> (the STATE.md from
            Lesson 62), and your <strong>gate</strong> (the exact automatic check that decides &quot;done&quot;).
            Then write the order you&apos;ll build it in: which step are you on right now - manual, skill,
            loop, or schedule? Be honest. Most people discover they&apos;re still on step 1, and that&apos;s
            the correct place to be. This sketch is the core of your capstone.
          </div>
        </section>

        <QuickRef title="Lesson 63 Quick Reference" items={[
          { term: 'Minimum Viable Loop (MVL)', definition: 'The smallest loop that works: one automation + one skill + one state file + one gate' },
          { term: 'Build order', definition: 'manual → skill → loop → schedule; skipping ahead is the #1 cause of loop failure' },
          { term: 'Make it reliable by hand first', definition: 'If you can\'t do the task reliably by prompting, a loop won\'t fix it - it\'ll fail faster' },
          { term: 'Start small', definition: 'Add worktrees, connectors, and extra sub-agents only after the MVL works' },
          { term: 'Cost per Accepted Change', definition: 'The only metric that matters - cost to produce a change a human actually merges' },
          { term: 'The 50% rule', definition: 'If under half the loop\'s PRs are accepted, it\'s costing you more than it saves' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson62', label: 'The State File - Memory That Lasts' }}
          next={{ href: '/level7/lesson64', label: 'When Loops Go Wrong' }}
          currentLessonId="l7-63"
        />
      </main>
    </div>
  )
}
