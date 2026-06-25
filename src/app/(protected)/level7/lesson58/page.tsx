'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson58() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-58" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={58}
          duration={50}
          title="Building Block 1 & 2 - Automations + Worktrees"
          subtitle="The heartbeat that makes a loop run by itself, and the trick that lets many agents work at once without stepping on each other"
        />

        <section className="section-card">
          <h2>The Five Building Blocks (Your Map)</h2>
          <p>
            Every loop is made of the same five pieces, plus a memory. We&apos;ll take them one or two
            at a time. Here&apos;s the whole map so you always know where you are:
          </p>
          <div className="code-block">
            <pre>{`1. Automations  ← the heartbeat (this lesson)
2. Worktrees    ← parallel without chaos (this lesson)
3. Skills       ← write down project knowledge (next lesson)
4. Connectors   ← touch your real tools
5. Sub-agents   ← one makes, one checks
+  State file   ← the memory that outlives the chat`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Block 1 - Automations: The Heartbeat</h2>
          <p>
            An automation is what turns &quot;a thing you did once&quot; into &quot;a thing that keeps
            happening.&quot; It&apos;s the heartbeat - everything else in the loop hangs off it. An
            automation fires on a <strong>schedule</strong> (every morning), on an <strong>event</strong>
            (someone opened a pull request), or on a <strong>condition</strong>.
          </p>
          <p>Think of it like an alarm clock for your agent. You set when it wakes up and what it does
            when it does.</p>
          <div className="info-box">
            <strong>In real tools today:</strong> Claude Code has scheduled tasks, cron, hooks, and
            GitHub Actions. The Codex app has an Automations tab where you pick a project, a prompt, and
            a cadence, and results land in a triage inbox. Different names, same idea: define an
            autonomous task, give it a rhythm, and let the findings come to you.
          </div>
        </section>

        <section className="section-card">
          <h2>Two Kinds of &quot;Keep Going&quot;: /loop vs /goal</h2>
          <p>
            There are two flavors of automation, and the difference matters a lot:
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>/loop - run on a cadence</strong>
              <p>&quot;Do this every 30 minutes (or every morning), no matter what.&quot; Good for regular
                health checks. It runs on a clock.</p>
            </div>
            <div className="step">
              <strong>/goal - run until something is true</strong>
              <p>&quot;Keep going until all the auth tests pass and the linter is clean.&quot; It doesn&apos;t
                stop on the clock - it stops when a <em>goal</em> is actually met. Crucially, a
                <strong> separate, smaller AI checks</strong> whether the goal is met, so the agent that
                wrote the code isn&apos;t the one grading its own homework.</p>
            </div>
          </div>
          <div className="code-block">
            <pre>{`Example of combining them:

> /loop 30m  /goal All tests in test/auth pass and lint is clean.
  Scan src/auth for new failures, propose fixes in a branch,
  open a draft pull request when the goal holds.

Translation: "Every 30 minutes, look at the auth code. Keep
working until the tests pass AND the linter is clean - and let
a different checker decide when that's actually true."`}</pre>
          </div>
          <div className="info-box">
            <strong>Remember this phrase:</strong> <em>maker-vs-checker split.</em> The thing that decides
            &quot;we&apos;re done&quot; should not be the same thing that did the work. You&apos;ll see it
            again in Lesson 61 - it&apos;s the backbone of trustworthy loops.
          </div>
        </section>

        <section className="section-card">
          <h2>Block 2 - Worktrees: Parallel Without Chaos</h2>
          <p>
            The moment you run <strong>two</strong> agents at once, a new problem appears: they both try
            to edit the same files and collide - exactly like two people editing the same paragraph of a
            document at the same time and overwriting each other.
          </p>
          <p>
            The fix is a <strong>git worktree</strong>. In plain terms: it&apos;s a separate working copy
            of your project, on its own branch, that still shares the same project history. Each agent
            gets its own clean room to work in, so their edits physically cannot touch each other&apos;s.
          </p>
          <div className="code-block">
            <pre>{`WITHOUT worktrees                WITH worktrees
─────────────────                ──────────────
Agent A ┐                        Agent A → copy A (branch A)
        ├─ same files → 💥        Agent B → copy B (branch B)
Agent B ┘   collision!           ...no collision, merge later`}</pre>
          </div>
          <div className="info-box">
            <strong>Analogy:</strong> Worktrees are like giving each cook their own cutting board instead
            of making them all chop on one. Nobody bumps elbows. When everyone&apos;s done, you combine
            the results on purpose, not by accident.
          </div>
        </section>

        <section className="section-card">
          <h2>The Real Ceiling: You</h2>
          <p>
            Worktrees remove the <em>mechanical</em> collisions, so you <em>can</em> run ten agents at
            once. But should you? Each one produces work that <strong>you still have to review</strong>.
            Your review bandwidth - not the tool - is the true limit on how many parallel loops make
            sense.
          </p>
          <div className="info-box">
            <strong>Don&apos;t confuse &quot;possible&quot; with &quot;wise.&quot;</strong> Ten agents
            producing ten pull requests you can&apos;t read is worse than two you can. Start with one.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Write Your Heartbeat in English</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> For your candidate task from Lesson 57, write its
            automation in plain English first (no tools yet). Fill in this template:
            <div className="code-block">
              <pre>{`WHEN: __________  (a schedule like "every morning at 7am",
                   or an event like "when a PR is opened")

DO:   __________  (the one job, e.g. "scan last night's
                   test failures and draft fixes")

UNTIL / STOP: ____ (a /goal condition like "tests pass",
                   plus a hard cap like "max 20 minutes")`}</pre>
            </div>
            If you can fill this in clearly, you understand the heartbeat. If the &quot;UNTIL/STOP&quot;
            line is fuzzy, that&apos;s a sign the task isn&apos;t loop-ready yet - exactly the kind of
            thing this level teaches you to notice.
          </div>
        </section>

        <QuickRef title="Lesson 58 Quick Reference" items={[
          { term: 'Automation', definition: 'The heartbeat: fires on a schedule, an event, or a condition and kicks off the loop' },
          { term: '/loop', definition: 'Runs on a cadence ("every 30 min"), regardless of state' },
          { term: '/goal', definition: 'Runs until a condition is true; a separate small model verifies "done"' },
          { term: 'Maker-vs-checker split', definition: 'The thing that decides "done" should not be the thing that did the work' },
          { term: 'Git worktree', definition: 'A separate working copy on its own branch - a clean room so parallel agents don\'t collide' },
          { term: 'Your review is the ceiling', definition: 'Worktrees let you run many agents, but your ability to review caps how many you should' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson57', label: 'Should You Even Build a Loop?' }}
          next={{ href: '/level7/lesson59', label: 'Skills - Project Knowledge' }}
          currentLessonId="l7-58"
        />
      </main>
    </div>
  )
}
