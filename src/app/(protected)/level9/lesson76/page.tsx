'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson76() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-76" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={76}
          duration={45}
          title="BMAD Part 1 - Your AI Product Team"
          subtitle="BMAD turns one AI into a whole product team - analyst, PM, architect, developer, QA - each a focused expert that checks the others' work"
        />

        <section className="section-card">
          <h2>What BMAD Is</h2>
          <p>
            <strong>BMAD</strong> stands for <strong>Breakthrough Method for Agile AI-Driven
            Development</strong>. It&apos;s a free, open-source framework (around 49,000 GitHub stars by
            mid-2026, on version 6) with one big idea: instead of asking a single AI to do everything,
            you run a <strong>team of specialized AI agents</strong> that mirror a real software team -
            and they hold each other accountable.
          </p>
          <div className="info-box">
            <strong>The problem it solves:</strong> a single AI doing &quot;everything&quot; produces
            average, black-box code - fast output that hides the intent and decisions behind it. BMAD makes
            AI a <em>disciplined participant</em> in an agile process instead of a clever wildcard.
          </div>
        </section>

        <section className="section-card">
          <h2>Why a &quot;Team&quot; Beats One Super-Agent</h2>
          <p>
            You learned in Level 7 that the maker shouldn&apos;t grade its own homework, and in Level 8 that
            each agent works best with a tight, focused context. BMAD applies both ideas at once: each
            agent has <strong>one role and a narrow context</strong>, so every AI call stays focused and
            high-quality, and each role <em>checks the work of the previous one</em>.
          </p>
          <div className="info-box">
            <strong>The compounding effect:</strong> because each agent adds and validates context as the
            work moves down the line, misunderstandings get caught <em>early</em> - when they&apos;re cheap
            to fix - instead of surfacing in finished code.
          </div>
        </section>

        <section className="section-card">
          <h2>Meet the Team (12+ Agents)</h2>
          <p>BMAD ships specialized agents that mirror an agile team. The core cast:</p>
          <div className="code-block">
            <pre>{`PLANNING ROLES
  Analyst        explores the idea, surfaces constraints → writes the brief
  Product Manager turns the brief into a PRD (with FRs & NFRs)
  Architect      designs components, data flow, tech choices
  Product Owner  aligns the docs, runs checklists, shards big specs

BUILDING ROLES
  Scrum Master   splits epics into precise, context-rich story files
  Developer      implements one story at a time, with tests, on a branch
  QA             reviews, designs tests, refactors for quality

COORDINATION
  Orchestrator   routes each task to the right agent, enforces the order`}</pre>
          </div>
          <div className="info-box">
            <strong>They&apos;re just text files.</strong> Each agent is defined in plain Markdown/YAML
            describing its persona, its commands, and what it depends on. You can read them, edit them, and
            commit them to Git like any other code. No magic - just well-scoped roles.
          </div>
        </section>

        <section className="section-card">
          <h2>The Big Rule: Documents Are the Source of Truth</h2>
          <p>
            This is BMAD&apos;s heartbeat and the through-line of this whole level. In BMAD, the source of
            truth is <strong>not the code</strong> - it&apos;s the documents: the brief, the PRD, the
            architecture, the stories. Code is generated <em>from</em> those, and every document is a living
            file versioned in Git.
          </p>
          <div className="code-block">
            <pre>{`Normal project:   code is truth  →  docs rot  →  nobody trusts the docs
BMAD project:     docs are truth →  code follows →  docs always current

Result: a new engineer reads the docs and actually understands the system,
because the docs are what the code was built from.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Two Phases (The Shape of It)</h2>
          <p>BMAD splits any project into two clean phases. We&apos;ll walk the full workflow next lesson; here&apos;s the map:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Phase 1 - Agentic Planning</strong>
              <p>The planning agents (Analyst, PM, Architect, Product Owner) produce and refine all the key
                documents <em>before any code is written</em>: brief → PRD → architecture → alignment
                checklist. Everything versioned in Git.</p>
            </div>
            <div className="step">
              <strong>Phase 2 - Context-Engineered Development</strong>
              <p>The Scrum Master shards the plan into small, context-rich story files; the Developer builds
                each on its own branch with tests; QA and automated checks review before merge. Every story
                links back to the PRD and architecture.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Notice the name of phase 2.</strong> &quot;Context-Engineered Development&quot; is Level
            8 by another name - each story file is a tight, high-signal context package for the Developer
            agent. BMAD is context engineering wrapped in an agile process.
          </div>
        </section>

        <section className="section-card">
          <h2>A Few Nice Touches</h2>
          <div className="info-box">
            <strong>Things BMAD adds on top:</strong>
            <ul>
              <li><strong>Scale-adaptive:</strong> it adjusts planning depth automatically - a bug fix gets
                a light process, an enterprise system gets the full treatment.</li>
              <li><strong>Party mode:</strong> bring multiple agent personas into one session to discuss a
                decision together (like a design meeting).</li>
              <li><strong>Web bundles:</strong> do the heavy planning (brief, PRD, research) in a flat-rate
                ChatGPT or Gemini subscription, then bring the polished docs into your coding tool - a real
                cost saver on long projects.</li>
              <li><strong>bmad-help:</strong> an assistant that tells you what step comes next if you&apos;re lost.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Cast Your Team</h2>
          <div className="hands-on-box">
            <strong>Hands-on (10 min):</strong> Take a small app idea. For each BMAD role (Analyst, PM,
            Architect, Scrum Master, Developer, QA), write one sentence describing what <em>that specific
            agent</em> would produce for your idea. Example for a tip calculator - Analyst: &quot;who uses
            it and the constraint that it must work offline&quot;; PM: &quot;the FRs and NFRs&quot;; etc.
            This makes the team concrete and previews exactly what you&apos;ll generate in the worked example
            two lessons from now.
          </div>
        </section>

        <QuickRef title="Lesson 76 Quick Reference" items={[
          { term: 'BMAD', definition: 'Breakthrough Method for Agile AI-Driven Development - an open-source framework using a team of specialized AI agents' },
          { term: 'Why a team', definition: 'Each agent has one role and a narrow context, stays focused, and checks the previous agent\'s work' },
          { term: 'The agents', definition: 'Analyst, PM, Architect, Product Owner (plan) + Scrum Master, Developer, QA (build) + Orchestrator' },
          { term: 'Agents are text files', definition: 'Each role is plain Markdown/YAML (persona, commands, dependencies) you can read, edit, and commit' },
          { term: 'Docs are the source of truth', definition: 'Brief, PRD, architecture, stories drive the code; everything versioned in Git' },
          { term: 'Two phases', definition: 'Agentic Planning (docs first) then Context-Engineered Development (sharded stories → code)' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson75', label: 'The SDD Toolbox' }}
          next={{ href: '/level9/lesson77', label: 'BMAD Part 2 - The Workflow' }}
          currentLessonId="l9-76"
        />
      </main>
    </div>
  )
}
