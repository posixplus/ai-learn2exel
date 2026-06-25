'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson77() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-77" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={77}
          duration={50}
          title="BMAD Part 2 - The Workflow"
          subtitle="The full BMAD process, step by step: from a one-line idea to merged, tested, fully-documented code - with humans steering at every gate"
        />

        <section className="section-card">
          <h2>The Whole Workflow at a Glance</h2>
          <p>
            BMAD formalizes building software into eight steps across its two phases. Each step has an
            owner (an agent), produces an artifact (a document or code), and waits for your approval before
            the next begins. Here&apos;s the whole flow:
          </p>
          <div className="code-block">
            <pre>{`PHASE 1 - AGENTIC PLANNING (no code yet)
  1. Brief          Analyst       → scope, users, constraints, risks
  2. PRD            PM            → FRs, NFRs, epics, draft stories
  3. Architecture   Architect     → components, contracts, tech choices
  4. Alignment      Product Owner → run checklists, resolve conflicts, shard

PHASE 2 - CONTEXT-ENGINEERED DEVELOPMENT
  5. Story drafting Scrum Master  → one rich story file at a time
  6. Implementation Developer     → build the story + tests, on a branch
  7. Review / QA    QA + checks   → automated scans, review, refactor
  8. Merge & iterate              → story done, next story begins`}</pre>
          </div>
          <div className="info-box">
            <strong>The rhythm:</strong> plan everything once (steps 1-4), then loop steps 5-8 one story at
            a time until the app is built. Each loop is small, checked, and traceable.
          </div>
        </section>

        <section className="section-card">
          <h2>Phase 1 - Planning, Step by Step</h2>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Brief (Analyst)</strong>
              <p>The Analyst interviews you about the idea and writes a brief: who it&apos;s for, what
                problem it solves, the constraints, and the risks. This is the &quot;why&quot; before any
                &quot;what.&quot;</p>
            </div>
            <div className="step">
              <strong>2 - PRD (Product Manager)</strong>
              <p>The PM turns the brief into a Product Requirements Document: functional requirements,
                non-functional requirements, grouped into <em>epics</em> with draft <em>stories</em>. (Your
                EARS skills from Lesson 74 live here.)</p>
            </div>
            <div className="step">
              <strong>3 - Architecture (Architect)</strong>
              <p>The Architect designs the system: components, how they talk, the data model, and the tech
                stack - and writes it down as a document, not just a vibe.</p>
            </div>
            <div className="step">
              <strong>4 - Alignment (Product Owner)</strong>
              <p>The Product Owner runs a checklist to catch contradictions between the PRD and the
                architecture, resolves them, and <em>shards</em> big specs into bite-size pieces ready for
                development.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Gate before code:</strong> nothing gets built until these four documents agree and
            you&apos;ve approved them. This is where intent gaps die - on paper, cheaply.
          </div>
        </section>

        <section className="section-card">
          <h2>Phase 2 - Development, Step by Step</h2>
          <div className="steps-list">
            <div className="step">
              <strong>5 - Story drafting (Scrum Master)</strong>
              <p>The Scrum Master writes <em>one story file</em> at a time - and this is the clever part.
                Each story is self-contained: the rationale, the exact constraints, embedded acceptance
                tests, and links back to the PRD and architecture. The Developer agent gets everything it
                needs in one tight package.</p>
            </div>
            <div className="step">
              <strong>6 - Implementation (Developer)</strong>
              <p>The Developer agent builds <em>that one story</em> on its own branch, writing tests as it
                goes, guided only by the story&apos;s context - no wandering into the rest of the codebase.</p>
            </div>
            <div className="step">
              <strong>7 - Review &amp; QA</strong>
              <p>A pull request kicks off automated checks (tests, quality scans, security analysis) plus
                review by the QA agent (and humans). It refactors if needed, always staying tied to the
                original intent.</p>
            </div>
            <div className="step">
              <strong>8 - Merge &amp; iterate</strong>
              <p>Story marked done, merged. The next story begins. The cadence repeats until the PRD is
                fully built.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Why the Story File Is the Secret Sauce</h2>
          <p>
            The single most important BMAD idea for quality is the <strong>sharded, context-rich story
            file</strong>. Instead of telling the Developer agent &quot;build the whole app,&quot; you hand
            it one tightly-scoped story with everything it needs and nothing it doesn&apos;t.
          </p>
          <div className="code-block">
            <pre>{`# Story: Add a task

## Why (links to PRD)
FR-3: users can add tasks. See prd.md#tasks.

## Constraints (links to architecture)
- Save via the TaskStore module (architecture.md#data). No inline SQL.
- New tasks go to the top of the list.

## Acceptance tests (embedded)
- Submitting a task adds it without a page reload.
- It persists after refresh.
- Empty submit shows a validation error.

## Out of scope
- Editing or deleting tasks (separate stories).`}</pre>
          </div>
          <div className="info-box">
            <strong>This is Levels 7 and 8 fused:</strong> the story is a perfect tight context window
            (Level 8) and the unit of a loop (Level 7). BMAD is the agile wrapper that makes producing good
            story files routine.
          </div>
        </section>

        <section className="section-card">
          <h2>Governance: The Control Manifest</h2>
          <p>
            Because everything is documents in Git, a BMAD project has a complete, auditable history -
            every requirement, decision, and code change traceable. Teams add one more guardrail: a
            <strong> control manifest</strong> committed before generation starts.
          </p>
          <div className="code-block">
            <pre>{`# Control manifest (the guardrails humans set)
- Allowed libraries: React, Zod, Prisma. Ask before adding others.
- Performance budget: pages under 200KB JS.
- Exclusion zones: never touch /payments without human sign-off.
- All code must pass the security scan before merge.`}</pre>
          </div>
          <div className="info-box">
            <strong>Humans own the flight plan; AI flies within it.</strong> The control manifest is how you
            stay in charge - the agents execute fast, but only inside boundaries you set. For regulated
            work (SOC 2, HIPAA), this versioned trail <em>is</em> your compliance evidence.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Draft One Story File</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> For your app idea, write one complete story file using the
            template above: a title, the &quot;why&quot; (which requirement it satisfies), the constraints,
            2-3 embedded acceptance tests, and an explicit &quot;out of scope&quot; list. The out-of-scope
            section is where most people&apos;s quality comes from - it stops the agent from sprawling.
            You&apos;ll generate a whole set of these in the next lesson&apos;s worked example.
          </div>
        </section>

        <QuickRef title="Lesson 77 Quick Reference" items={[
          { term: 'The 8 steps', definition: 'Brief → PRD → Architecture → Alignment (plan), then Story → Implement → Review/QA → Merge (build), looped per story' },
          { term: 'Gate before code', definition: 'No code until the four planning docs agree and you approve - intent gaps die cheaply on paper' },
          { term: 'Sharded story file', definition: 'One self-contained story: rationale, constraints, embedded tests, links to PRD/architecture, out-of-scope' },
          { term: 'One story at a time', definition: 'The Developer builds a single sharded story on its own branch - a tight context, not the whole app' },
          { term: 'Control manifest', definition: 'Human-set guardrails (allowed libs, perf budget, exclusion zones) committed before generation' },
          { term: 'Auditable by default', definition: 'Every doc, decision, and change in Git becomes a compliance trail (SOC 2 / HIPAA)' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson76', label: 'BMAD Part 1 - Your AI Product Team' }}
          next={{ href: '/level9/lesson78', label: 'BMAD Part 3 - Build a Small App' }}
          currentLessonId="l9-77"
        />
      </main>
    </div>
  )
}
