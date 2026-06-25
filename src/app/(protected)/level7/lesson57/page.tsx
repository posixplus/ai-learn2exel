'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson57() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-57" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={57}
          duration={40}
          title="Should You Even Build a Loop?"
          subtitle="Loops cost real money and effort. Before you build one, run a simple test - miss one condition and the loop costs more than it saves"
        />

        <section className="section-card">
          <h2>The Most Important Lesson in This Level</h2>
          <p>
            Here&apos;s a truth most excited tutorials skip: <strong>most tasks should NOT be loops.</strong>
            A loop has a setup cost and burns money every time it runs (the AI &quot;thinks&quot; in
            tokens, and tokens cost money). For a one-time job, a single good prompt is faster and
            cheaper. Building a loop for the wrong task is the number-one way people waste time and rack
            up surprise bills.
          </p>
          <div className="info-box">
            <strong>Plain-terms version:</strong> Don&apos;t buy a dishwasher to wash one cup. Learn to
            tell &quot;dishwasher work&quot; from &quot;one-cup work&quot; - that judgment is worth more
            than any fancy loop.
          </div>
        </section>

        <section className="section-card">
          <h2>The 4-Condition Test</h2>
          <p>
            A loop only makes sense if it passes <strong>all four</strong> of these. Miss even one and
            stay in your chair and prompt by hand.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>1 - The task repeats</strong>
              <p>It happens regularly (say, weekly or more). A loop spreads its setup cost across many
                runs. If it happens once, you don&apos;t have a loop - you have a script you ran once.</p>
            </div>
            <div className="step">
              <strong>2 - Checking is automatic</strong>
              <p>There&apos;s an objective gate that can reject bad work with <em>no human in the room</em>
                - a test suite, a type checker, a linter, or a successful build. Without this, you&apos;re
                back to reading every result yourself, which defeats the point.</p>
            </div>
            <div className="step">
              <strong>3 - Your budget can absorb waste</strong>
              <p>Loops explore: they re-read big files, retry dead ends, and burn tokens whether or not
                they succeed. That&apos;s fine on a big company plan; it can be reckless on a small
                personal one.</p>
            </div>
            <div className="step">
              <strong>4 - The agent has real tools</strong>
              <p>It can&apos;t fix what it can&apos;t see. It needs logs, a place to run the code, and the
                ability to actually execute what it just wrote to see what breaks.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>The heart of the test is #2.</strong> A loop without an automatic checker is just an
            agent agreeing with itself on repeat. We&apos;ll come back to this idea again and again.
          </div>
        </section>

        <section className="section-card">
          <h2>The 30-Second Loop Check</h2>
          <p>
            The 4-condition test is your <em>strategy</em>. This checklist is the quick <em>tactical</em>
            version you run on one specific task before handing it to a loop. Can&apos;t tick every box?
            Keep it a manual prompt.
          </p>
          <div className="code-block">
            <pre>{`☐ This task happens at least once a week.
☐ A test, type check, build, or linter can instantly reject bad output.
☐ The agent has a live environment to run and test its changes.
☐ The loop has a hard stop (token cap, timeout, or max iterations).
☐ A human approves before anything merges or ships to production.`}</pre>
          </div>
          <div className="info-box">
            <strong>Notice the last two boxes.</strong> Every safe loop has a <em>hard stop</em> so it
            can&apos;t run forever and drain your wallet, and a <em>human gate</em> before anything real
            happens. We&apos;ll build both later - but they start as a mindset here.
          </div>
        </section>

        <section className="section-card">
          <h2>Good First Loops vs. Bad First Loops</h2>
          <p>Some tasks are perfect to start with. Others will burn you. Know the difference.</p>
          <div className="code-block">
            <pre>{`GOOD FIRST LOOPS  (repetitive + machine-checkable)
  ✓ CI failure triage - sort nightly build failures, draft easy fixes
  ✓ Dependency maintenance - weekly version-bump requests
  ✓ Lint-and-fix passes - auto-correct style on every change

BAD FIRST LOOPS  (keep a human in the chair)
  ✗ Architecture overhauls / refactoring core systems
  ✗ Authentication, cryptography, or payments code
  ✗ Production deploys
  ✗ Vague feature work where "done" is a judgment call`}</pre>
          </div>
          <p>
            The pattern: good first loops are tasks a careful junior could do with a checklist, where a
            strong test suite would catch their mistakes. Bad ones need human judgment about what
            &quot;right&quot; even means, or are too risky to get wrong.
          </p>
        </section>

        <section className="section-card">
          <h2>Who Wins and Who Loses</h2>
          <p>
            The economics aren&apos;t the same for everyone - and that explains why some people call
            loops &quot;obvious&quot; while others call them &quot;reckless.&quot;
          </p>
          <div className="info-box">
            <strong>Who benefits:</strong> teams with strong test coverage, repetitive machine-checkable
            chores, and budgets that can absorb the token cost (often big-company plans).
            <br /><br />
            <strong>Who should skip it (for now):</strong> solo builders on small metered plans (the
            bill arrives before the gains), codebases with no automated tests (no gate = no safety), and
            teams whose real bottleneck is human review (a loop just piles more into the jam).
          </div>
          <p>
            If you&apos;re on a small plan with no tests, that&apos;s not a failure - it just means your
            first move is to add tests, not a loop. The loop comes later.
          </p>
        </section>

        <section className="section-card">
          <h2>Hands-On: Test Your List</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Take the 3 repetitive tasks you listed last lesson. Run
            each one through the 30-second check above - literally tick the boxes. Be honest, especially
            about box 2 (&quot;can something automatically reject a bad result?&quot;). Most of your tasks
            will probably fail on box 2 or 3 - that&apos;s normal and useful to know. Circle the one task
            that ticks the most boxes; that&apos;s your candidate loop for the capstone. If none qualify
            yet, write down the one missing piece (usually: &quot;no automated test&quot;) - that&apos;s
            your real first project.
          </div>
        </section>

        <QuickRef title="Lesson 57 Quick Reference" items={[
          { term: '4-condition test', definition: 'Build a loop only if: it repeats, checking is automatic, the budget absorbs waste, and the agent has real tools' },
          { term: 'The automatic gate', definition: 'An objective checker (test/linter/build) that rejects bad work with no human - the make-or-break condition' },
          { term: '30-second check', definition: 'Per-task checklist: weekly, auto-rejectable, live environment, hard stop, human approval before merge' },
          { term: 'Good first loops', definition: 'CI triage, dependency updates, lint-and-fix - repetitive and machine-checkable' },
          { term: 'Bad first loops', definition: 'Auth/crypto/payments, architecture, production deploys, vague "done" - keep a human in the chair' },
          { term: 'Economics differ', definition: 'Loops favor teams with tests and budget; solo/untested/review-bottlenecked setups should wait' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson56', label: 'From Prompter to Loop Designer' }}
          next={{ href: '/level7/lesson58', label: 'Automations + Worktrees' }}
          currentLessonId="l7-57"
        />
      </main>
    </div>
  )
}
