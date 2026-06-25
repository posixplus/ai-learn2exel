'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson61() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-61" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={61}
          duration={45}
          title="Building Block 5 - Sub-Agents (Maker vs Checker)"
          subtitle="The single most important structural trick in loop engineering: never let the agent that wrote the code be the one that grades it"
        />

        <section className="section-card">
          <h2>Why You Can&apos;t Grade Your Own Homework</h2>
          <p>
            Think about the last time you wrote something and proofread it yourself. You missed typos,
            right? Not because you&apos;re careless - because your brain reads what it <em>meant</em> to
            write, not what&apos;s actually on the page. You&apos;re too close to it.
          </p>
          <p>
            AI agents have the exact same blind spot, except worse. As Addy Osmani puts it, the model
            that wrote the code is &quot;way too nice grading its own homework.&quot; Ask an agent
            &quot;is this correct?&quot; right after it wrote the code, and it will almost always say yes.
            It talked itself into the solution; it will talk itself into approving it.
          </p>
          <div className="info-box">
            <strong>The fix:</strong> split the work between two agents - a <strong>maker</strong> that
            writes the code and a separate <strong>checker</strong> that critiques it against the
            requirements. Different agent, different instructions, sometimes a different (smarter) model.
          </div>
        </section>

        <section className="section-card">
          <h2>The Pattern Has a Name: Evaluator-Optimizer</h2>
          <p>
            One agent generates a solution. A completely separate agent evaluates it against the spec
            and says what&apos;s wrong. The maker tries again with that feedback. Repeat until the checker
            is satisfied. That back-and-forth is the <strong>Evaluator-Optimizer</strong> pattern.
          </p>
          <div className="code-block">
            <pre>{`   ┌─────────────┐   code    ┌──────────────┐
   │   MAKER     │ ────────▶ │   CHECKER    │
   │ writes code │           │ critiques it │
   └─────────────┘ ◀──────── └──────────────┘
        ▲          "still wrong:        │
        │           token expiry"       │ "passes spec
        └───── tries again ─────────────┘  + tests" → DONE`}</pre>
          </div>
          <div className="info-box">
            <strong>Real-world echo:</strong> this is just &quot;writer and editor,&quot; or
            &quot;developer and code reviewer.&quot; Good teams have always separated making from
            checking. Loops make that separation a built-in rule instead of a hope.
          </div>
        </section>

        <section className="section-card">
          <h2>How Sub-Agents Are Set Up</h2>
          <p>
            In modern tools you declare sub-agents in small config files - for example in
            <code> .claude/agents/</code> or <code>.codex/agents/</code> - each with a name, a
            description, and instructions. The clever part: you can give each one a <em>different</em>
            model based on the job.
          </p>
          <div className="code-block">
            <pre>{`A common three-agent split:

  explorer  → a fast, cheap, read-only model
              "find the relevant files, don't change anything"

  implementer → a capable model
              "write the fix"

  verifier  → a strong, careful model on high effort
              "check the fix against the spec and the tests;
               be skeptical; try to break it"`}</pre>
          </div>
          <p>
            You spend your &quot;smart, expensive model&quot; budget where it matters most - on the
            <em> checker</em> - because a verifier you actually trust is the only reason you can walk away
            from the loop.
          </p>
        </section>

        <section className="section-card">
          <h2>This Is Also How /goal Works</h2>
          <p>
            Remember <code>/goal</code> from Lesson 58 - &quot;keep going until the condition is
            true&quot;? Under the hood, it uses this exact split. After each turn, a <em>fresh, separate</em>
            model decides whether the goal is met, instead of the agent that just did the work. The
            maker-vs-checker idea isn&apos;t just for code - it&apos;s applied to the stop condition
            itself, so the loop can&apos;t lie to itself about being finished.
          </p>
          <div className="info-box">
            <strong>Connect the dots:</strong> the automatic gate from Lesson 57 (condition #2), the
            <code> /goal</code> checker from Lesson 58, and the verifier sub-agent here are all the same
            principle wearing different hats: <em>something independent must confirm the work is actually
            done.</em>
          </div>
        </section>

        <section className="section-card">
          <h2>The Cost, and When It&apos;s Worth It</h2>
          <p>
            Sub-agents aren&apos;t free. Each one does its own thinking and tool use, so a maker-checker
            setup burns more tokens than a single agent. That&apos;s the trade: you pay more to get a
            second opinion you can trust.
          </p>
          <div className="info-box">
            <strong>Spend the second opinion where it matters.</strong> A trivial style fix doesn&apos;t
            need a skeptical verifier. A change to logic that real users depend on absolutely does. Match
            the rigor of your checker to the risk of the change.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Write Your Checker&apos;s Job</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> For your candidate loop, write the <em>checker&apos;s</em>
            instructions in plain English - and make them genuinely skeptical. Don&apos;t write &quot;make
            sure it looks good.&quot; Write things the checker can objectively verify, like: &quot;The new
            test must actually fail before the fix and pass after. The change must not touch any file
            outside src/auth. The build must succeed.&quot; If your checker&apos;s job is vague, your loop
            will quietly approve bad work - which is exactly the failure mode we tackle in Lesson 64.
          </div>
        </section>

        <QuickRef title="Lesson 61 Quick Reference" items={[
          { term: 'Maker vs checker', definition: 'The agent that writes code must not be the agent that approves it - it grades itself too kindly' },
          { term: 'Evaluator-Optimizer', definition: 'Maker generates, a separate checker critiques against the spec, repeat until the checker is satisfied' },
          { term: 'Sub-agents', definition: 'Separate configured agents (explorer / implementer / verifier), each can use a different model' },
          { term: 'Spend on the verifier', definition: 'Put your strongest, most careful model on the checker - that\'s what lets you walk away' },
          { term: '/goal uses this', definition: 'A fresh model decides "done", applying maker-vs-checker to the stop condition itself' },
          { term: 'Second opinion costs tokens', definition: 'Maker-checker burns more; reserve a skeptical checker for risky, logic-bearing changes' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson60', label: 'Connectors - Touch the Real World' }}
          next={{ href: '/level7/lesson62', label: 'The State File - Memory That Lasts' }}
          currentLessonId="l7-61"
        />
      </main>
    </div>
  )
}
