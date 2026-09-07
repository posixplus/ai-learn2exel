'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson79() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-79" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={79}
          duration={45}
          title="LID - Linked Intent Development"
          subtitle="A different flavor of SDD: make your whole codebase a chain where every line of code traces back to a single, stated intent - and a robot enforces it"
        />

        <section className="section-card">
          <h2>A Different Bet Than BMAD</h2>
          <p>
            BMAD optimizes for <em>building the next thing well</em> with a team of agents. <strong>Linked
            Intent Development (LID)</strong>, created by Jess Szmajda, optimizes for something else: keeping
            a project <strong>coherent over its whole lifetime</strong>. Its big idea is that your
            repository should be a <strong>graph rooted in intent</strong> - and that graph is provable.
          </p>
          <div className="info-box">
            <strong>The reframe LID makes:</strong> it doesn&apos;t call itself an &quot;SDD methodology&quot;
            so much as &quot;a structured way to write the English your coding agent compiles.&quot; Your
            effort goes into design documents; the agent writes the specs, tests, and code from them.
          </div>
        </section>

        <section className="section-card">
          <h2>The &quot;Arrow&quot;: Everything Traces to Intent</h2>
          <p>
            LID&apos;s core is a chain it calls <strong>the arrow</strong>. Every piece of code is reachable,
            by name, walking up a ladder of intent:
          </p>
          <div className="code-block">
            <pre>{`        HLD  (High-Level Design - the WHY, the big direction)
         │
         ▼
        LLD  (Low-Level Design - the HOW for one component)
         │
         ▼
        EARS spec  (one atomic, checkable claim - Lesson 74!)
         │
         ▼
        failing-first test  (asserts the claim BEFORE code exists)
         │
         ▼
        code  (carries a matching @spec annotation)

Read it bottom-up: every code file → a test → a spec → a design → the HLD.
Nothing exists without a reason you can point to.`}</pre>
          </div>
          <div className="info-box">
            <strong>The problem it kills:</strong> intent gaps (Lesson 73). If every line of code must
            trace back to a stated intent, the agent <em>can&apos;t</em> quietly build something you
            didn&apos;t ask for - there&apos;d be code with no spec above it, and the system would flag it.
          </div>
        </section>

        <section className="section-card">
          <h2>Greppable Spec IDs: Intent You Can Search</h2>
          <p>
            LID gives every spec a short, searchable ID - like <code>AUTH-UI-001</code>. Code that
            implements it carries a matching <code>@spec AUTH-UI-001</code> annotation, and the test for it
            references the same ID. Now the whole chain is navigable by <em>name</em>.
          </p>
          <div className="code-block">
            <pre>{`spec:   AUTH-UI-001  "WHEN login fails, show an error message."
test:   it('AUTH-UI-001: shows error on failed login', ...)
code:   // @spec AUTH-UI-001
        function showLoginError() { ... }

→ grep "AUTH-UI-001" and you instantly see the spec, its test,
  and its code. The intent is searchable across the whole repo.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>The Robot That Enforces It: The CI Gate</h2>
          <p>
            Here&apos;s what makes LID more than a nice diagram. It ships a <strong>CI gate</strong> - an
            automated check that runs on every change and <em>fails the build</em> unless the arrow is
            intact:
          </p>
          <div className="code-block">
            <pre>{`The gate fails the build unless:
  • every spec is cited by at least one test, AND
  • every @spec citation in the code resolves to a real spec

So you literally cannot merge code that:
  - has no spec above it (unexplained code), or
  - cites a spec that doesn't exist (broken intent link)`}</pre>
          </div>
          <div className="info-box">
            <strong>This is Level 7 in disguise:</strong> the CI gate is the &quot;objective, automated
            verifier&quot; from loop engineering, pointed at <em>traceability</em> instead of behavior. The
            arrow isn&apos;t a guideline you hope people follow - it&apos;s mechanically enforced.
          </div>
        </section>

        <section className="section-card">
          <h2>Tests Before Code (Failing-First)</h2>
          <p>
            Notice the order in the arrow: the <strong>test comes before the code</strong>. LID writes a
            test that <em>fails</em> first (because the feature doesn&apos;t exist yet), proving the test
            actually checks the claim. Only then does the agent write code to make it pass. This is classic
            test-driven development, now used to pin down <em>intent</em>, not just correctness.
          </p>
        </section>

        <section className="section-card">
          <h2>Three Ways to Adopt It</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Greenfield (new project)</strong>
              <p>Where LID shines - nothing to reconcile. You describe what you want; the workflow takes you
                through HLD → LLDs → EARS specs → tests → code, stopping for your approval at each phase.</p>
            </div>
            <div className="step">
              <strong>Brownfield (existing code)</strong>
              <p>A <code>/map-codebase</code> command reads your existing code and works <em>backward</em> -
                inferring LLDs and a high-level design from what&apos;s there, then building the arrow over
                your current system and flagging what has drifted.</p>
            </div>
            <div className="step">
              <strong>Scoped (one slice)</strong>
              <p>Pilot LID on a single subsystem. The discipline applies inside your scope and relaxes at the
                boundary, so you don&apos;t force it on teammates&apos; code yet.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>It even ships a coach:</strong> a <code>/lid-coach</code> skill reads your project and
            reports - advisory only, never editing - where your usage is drifting from the method. A nice way
            to learn the discipline on your own work.
          </div>
        </section>

        <section className="section-card">
          <h2>BMAD vs. LID - When to Reach for Which</h2>
          <div className="code-block">
            <pre>{`BMAD                              LID
team of role-based agents         a traceability graph + a gate
optimizes the NEXT feature        optimizes the project OVER TIME
great for: structure, governance, great for: provable "why does this
  agile flow, regulated audits      code exist?", long-lived systems,
                                     killing intent drift
heavier process, more roles       heavier discipline, enforced by CI

They're not rivals - some teams plan with BMAD and enforce
traceability with LID-style specs + tests.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Build One Arrow</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Take one requirement from your app (reuse an EARS spec from
            Lesson 74). Now write the full arrow for it by hand: give it a greppable ID (e.g.
            <code> TASK-ADD-001</code>), write the one-line spec, write a failing-first test that references
            that ID, and sketch the code stub with a <code>{"// @spec TASK-ADD-001"}</code> comment. You&apos;ve
            just hand-built a single link of the chain LID enforces across an entire codebase - and felt why
            it makes intent impossible to lose.
          </div>
        </section>

        <QuickRef title="Lesson 79 Quick Reference" items={[
          { term: 'LID', definition: 'Linked Intent Development - make the whole repo a graph where every code file traces back to a stated intent' },
          { term: 'The arrow', definition: 'HLD → LLD → EARS spec → failing-first test → code with @spec annotation' },
          { term: 'Greppable spec IDs', definition: 'Short IDs like AUTH-UI-001 link spec, test, and code so intent is searchable across the repo' },
          { term: 'The CI gate', definition: 'Fails the build unless every spec is cited by a test and every @spec citation resolves - enforced, not optional' },
          { term: 'Failing-first test', definition: 'Write a test that fails before code exists, proving it really checks the claim, then make it pass' },
          { term: 'Adoption modes', definition: 'Greenfield (new), brownfield (/map-codebase reverse-engineers the arrow), scoped (one subsystem)' },
          { term: 'BMAD vs LID', definition: 'BMAD = agent team optimizing the next feature; LID = enforced traceability optimizing the project over time' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson78', label: 'BMAD Part 3 - Build a Small App' }}
          next={{ href: '/level9/lesson80', label: 'Best Practices & Anti-Patterns' }}
          currentLessonId="l9-79"
        />
      </main>
    </div>
  )
}
