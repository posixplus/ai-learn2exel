'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson75() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-75" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={75}
          duration={40}
          title="The SDD Toolbox"
          subtitle="A tour of the tools that turn spec-driven development from a nice idea into a real workflow - and how to tell them apart"
        />

        <section className="section-card">
          <h2>The Landscape in One Picture</h2>
          <p>
            SDD went from a blog-post idea to a crowded toolshelf in about a year. The tools differ mostly
            on one question: <strong>does the spec get read once and thrown away, or does it stay a living
            asset the agents keep executing against?</strong> Keep that question in mind as we tour them.
          </p>
          <div className="info-box">
            <strong>Reality check (a survey from early 2026):</strong> ~90% of developers use AI at work,
            but only ~13% use it across the <em>whole</em> development lifecycle. SDD tools are how teams
            close that gap - moving AI from &quot;autocomplete&quot; to &quot;runs the process.&quot;
          </div>
        </section>

        <section className="section-card">
          <h2>GitHub Spec Kit - The Popular Starting Point</h2>
          <p>
            <strong>Spec Kit</strong> is GitHub&apos;s open-source SDD toolkit - by mid-2026 it had passed
            90,000 stars and worked with 30+ coding agents (Claude Code, Cursor, Copilot, and more). It
            gives you slash commands that walk you through the SDD loop, each producing a Markdown file
            that feeds the next.
          </p>
          <div className="code-block">
            <pre>{`The Spec Kit commands map exactly onto the SDD loop:

/speckit.constitution   → write the governing principles
/speckit.specify        → generate a detailed spec from your idea
/speckit.plan           → turn the spec into a technical plan
/speckit.tasks          → break the plan into small, testable tasks
(then your agent implements each task)`}</pre>
          </div>
          <div className="info-box">
            <strong>Why it&apos;s a good first tool:</strong> it&apos;s free, tool-agnostic, and the
            artifacts are just Markdown you can read and edit. It makes the four-step loop concrete without
            committing you to one vendor.
          </div>
        </section>

        <section className="section-card">
          <h2>The Other Players</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Amazon Kiro</strong>
              <p>An AI IDE built around specs. It generates requirements, design, and tasks as you go, and
                treats them as first-class files in your project.</p>
            </div>
            <div className="step">
              <strong>OpenSpec</strong>
              <p>An open-source approach focused on keeping a clean, versioned spec that the agent works
                against - lightweight and tool-agnostic.</p>
            </div>
            <div className="step">
              <strong>Tessl</strong>
              <p>Pushes the idea furthest: the spec is treated almost like the &quot;real&quot; source, with
                code as a regenerable output. The strongest version of &quot;specs are the source of
                truth.&quot;</p>
            </div>
            <div className="step">
              <strong>Cursor rules (.cursor/rules)</strong>
              <p>Not a full SDD system, but the lightweight cousin - standing project rules the agent reads
                every time. The instruction pillar, basically.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Read-Once vs. Living Specs</h2>
          <p>This is the distinction that actually matters when you choose. It&apos;s a spectrum:</p>
          <div className="code-block">
            <pre>{`READ-ONCE                                      LIVING
(spec scaffolds the next change, then fades)   (spec is enforced forever)

  Spec Kit (lighter)  ───────────────────────▶  BMAD, LID, Tessl
  "generate code from a spec, move on"           "every piece of code must
                                                  trace back to a current spec"`}</pre>
          </div>
          <div className="info-box">
            <strong>Which do you want?</strong> Read-once is great for shipping a feature fast. Living specs
            cost more upfront but pay off on long-lived projects where you need to <em>know</em>, months
            later, why every line exists. The two heavyweight &quot;living&quot; systems -
            <strong> BMAD</strong> and <strong>LID</strong> - are the next four lessons.
          </div>
        </section>

        <section className="section-card">
          <h2>Where BMAD and LID Fit</h2>
          <p>You&apos;re about to go deep on two named methods. Here&apos;s the one-line difference so you have a map:</p>
          <div className="code-block">
            <pre>{`BMAD  - "a whole AI product TEAM"
        Specialized agents (PM, Architect, Dev, QA...) run an
        agile process that produces planning docs, then code.
        Great when you want structure, roles, and governance.

LID   - "a traceability GRAPH rooted in intent"
        Every code file traces back through a test, a spec, a
        design, up to one high-level intent - enforced by a gate.
        Great when you want provable "why does this code exist?"`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Try the Loop in Any Tool</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> You don&apos;t have to install anything. In any AI assistant,
            manually run the Spec Kit loop on a tiny idea (&quot;a tip calculator&quot;): ask it to write a
            one-paragraph <em>constitution</em>, then a <em>spec</em> (with EARS requirements from last
            lesson), then a <em>plan</em>, then a <em>task list</em> - approving each before the next. Notice
            how much more grounded the final task list feels than if you&apos;d just said &quot;build a tip
            calculator.&quot; That&apos;s SDD with zero tooling - the tools just automate this.
          </div>
        </section>

        <QuickRef title="Lesson 75 Quick Reference" items={[
          { term: 'GitHub Spec Kit', definition: 'Popular open-source SDD toolkit; /speckit.constitution → specify → plan → tasks; works with 30+ agents' },
          { term: 'Amazon Kiro', definition: 'An AI IDE built around specs as first-class files (requirements, design, tasks)' },
          { term: 'OpenSpec / Tessl', definition: 'OpenSpec keeps a clean versioned spec; Tessl pushes "spec is the real source, code regenerates"' },
          { term: 'Read-once vs living spec', definition: 'The key choice: a spec that scaffolds one change vs one enforced forever' },
          { term: 'BMAD (preview)', definition: 'A whole AI "product team" of role-based agents running an agile process' },
          { term: 'LID (preview)', definition: 'A traceability graph where every code file links back through tests and specs to one intent' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson74', label: "Writing Specs That Don't Lie (EARS)" }}
          next={{ href: '/level9/lesson76', label: 'BMAD Part 1 - Your AI Product Team' }}
          currentLessonId="l9-75"
        />
      </main>
    </div>
  )
}
