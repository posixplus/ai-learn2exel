'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson73() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-73" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={73}
          duration={40}
          title="What Is Spec-Driven Development?"
          subtitle="Stop describing what you want and hoping. Write a real spec, make it the source of truth, and let the agent build from it"
        />

        <section className="section-card">
          <h2>The Problem: Vibe Coding</h2>
          <p>
            The way most people use AI to build software looks like this: type &quot;make me a login
            page,&quot; see what comes out, type &quot;no, add a remember-me box,&quot; and keep nudging.
            People call this <strong>vibe coding</strong> - you steer by feel, turn by turn. It&apos;s fast
            and fun for a demo, and it falls apart on anything real.
          </p>
          <p>Why it falls apart: the AI is constantly <em>guessing what you meant</em>, and you only
            find out it guessed wrong after it&apos;s built the wrong thing.</p>
          <div className="info-box">
            <strong>The core insight of 2026:</strong> modern AI agents rarely write <em>bugs</em>
            anymore - they write <strong>intent gaps</strong>. Places where the agent assumed you meant
            something different than you did. The hard part of AI development isn&apos;t getting code; it&apos;s
            making sure the agent builds the <em>right</em> thing.
          </div>
        </section>

        <section className="section-card">
          <h2>The Fix: Spec-Driven Development</h2>
          <p>
            <strong>Spec-Driven Development (SDD)</strong> flips the order. Instead of jumping to code,
            you first write a clear <strong>specification</strong> - what to build, for whom, and what
            &quot;done&quot; means. <em>Then</em> the agent generates the code from that spec. The
            spec becomes the <strong>primary artifact</strong>; the code is just its output.
          </p>
          <div className="info-box">
            <strong>The one-line shift:</strong> in normal coding, the code is the source of truth and the
            docs rot. In SDD, the <em>spec</em> is the source of truth and the code is generated to match
            it. You edit intent, not just implementation.
          </div>
        </section>

        <section className="section-card">
          <h2>An Analogy: Blueprints Before Bricks</h2>
          <p>
            Nobody builds a house by telling builders &quot;just start laying bricks and I&apos;ll tell
            you when it looks wrong.&quot; You draw <strong>blueprints</strong> first - rooms, dimensions,
            where the plumbing goes - get them approved, and <em>then</em> build. Changing a line on the
            blueprint is cheap; knocking down a built wall is expensive.
          </p>
          <div className="info-box">
            <strong>SDD is blueprints for software.</strong> The spec is the blueprint. Fixing a
            misunderstanding in the spec costs a sentence. Fixing it after the agent built a week of code
            costs a week. SDD moves the correction to where it&apos;s cheap.
          </div>
        </section>

        <section className="section-card">
          <h2>The Core Loop: Spec → Plan → Tasks → Implement</h2>
          <p>
            Most SDD methods share the same four-step shape. You and the AI move through it together,
            with you approving each step before the next:
          </p>
          <div className="code-block">
            <pre>{`1. SPEC       Describe WHAT to build and what "done" means.
              (the requirements - no code yet)

2. PLAN       Turn the spec into a technical approach.
              (architecture, tech choices, how it fits together)

3. TASKS      Break the plan into small, testable pieces of work.
              (each one a clear, checkable chunk)

4. IMPLEMENT  The agent builds each task, checked against the spec.
              (code, finally - and it traces back to the spec)`}</pre>
          </div>
          <p>
            Each step produces a written document that feeds the next. You review at every arrow. The
            agent never runs ahead and builds on a guess.
          </p>
        </section>

        <section className="section-card">
          <h2>The &quot;Constitution&quot;: Rules That Govern Everything</h2>
          <p>
            Most serious SDD setups start with a <strong>constitution</strong> (sometimes a
            <code> CLAUDE.md</code>-style file): a short set of governing principles that <em>every</em>
            spec, plan, and task must obey. Think of it as the project&apos;s house rules.
          </p>
          <div className="code-block">
            <pre>{`# Project Constitution (example)

- Language: TypeScript. No new languages without approval.
- Every feature ships with tests. No exceptions.
- Accessibility: all UI must be keyboard-navigable.
- No secrets in code; use environment variables.
- Prefer boring, well-known libraries over clever new ones.`}</pre>
          </div>
          <div className="info-box">
            <strong>Why it matters:</strong> the constitution is the instruction pillar from Level 8 applied
            to a whole project. It keeps every agent - and every spec - pulling in the same direction,
            so quality doesn&apos;t drift from feature to feature.
          </div>
        </section>

        <section className="section-card">
          <h2>How This Level Builds Up</h2>
          <p>SDD is a family of methods. We&apos;ll go from the shared foundation to the two biggest named systems:</p>
          <div className="code-block">
            <pre>{`74  Writing specs that don't lie  - EARS notation, FRs vs NFRs
75  The SDD toolbox              - Spec Kit, Kiro, OpenSpec, Tessl
76  BMAD, part 1                 - the AI "product team" of agents
77  BMAD, part 2                 - the full workflow, step by step
78  BMAD, part 3                 - build a real small app with it
79  LID                          - Linked Intent Development, the "arrow"
80  Best practices & anti-patterns - when SDD helps, when it's overkill`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Catch an Intent Gap</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Ask an AI to build something small and deliberately vague -
            e.g. &quot;make a to-do list app.&quot; Look at what it produced and list every decision <em>it</em>
            made that <em>you</em> never specified: Did tasks save anywhere? Can you delete them? Due dates?
            Accounts? Each of those is an <strong>intent gap</strong> - a place it guessed. Now write a
            three-sentence spec that would have closed those gaps up front. You just felt exactly why SDD
            exists.
          </div>
        </section>

        <QuickRef title="Lesson 73 Quick Reference" items={[
          { term: 'Vibe coding', definition: 'Steering an AI turn by turn by feel; fast for demos, breaks down on real work' },
          { term: 'Intent gap', definition: 'Where the agent assumed you meant something you didn\'t - the main failure of modern AI coding' },
          { term: 'Spec-Driven Development', definition: 'Write the spec first; the agent builds from it. The spec is the source of truth, code is its output' },
          { term: 'Blueprints before bricks', definition: 'Fixing a misunderstanding in the spec costs a sentence; fixing built code costs a week' },
          { term: 'Spec → Plan → Tasks → Implement', definition: 'The shared four-step SDD loop, with human approval at each step' },
          { term: 'Constitution', definition: 'Short governing principles every spec/plan/task must obey - the project\'s house rules' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level8/capstone', label: 'Level 8 Capstone' }}
          next={{ href: '/level9/lesson74', label: "Writing Specs That Don't Lie (EARS)" }}
          currentLessonId="l9-73"
        />
      </main>
    </div>
  )
}
