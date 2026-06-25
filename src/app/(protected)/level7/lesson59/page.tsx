'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson59() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-59" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={59}
          duration={40}
          title="Building Block 3 - Skills"
          subtitle="Write your project's knowledge down once, so the agent reads it on every run instead of guessing - and guessing wrong"
        />

        <section className="section-card">
          <h2>The Goldfish Problem</h2>
          <p>
            Here&apos;s an annoying fact about AI agents: they have no long-term memory between sessions.
            Every time a loop runs, the agent wakes up like a goldfish - it has forgotten everything
            about your project. It doesn&apos;t remember your naming rules, your build steps, or the
            painful outage that taught your team &quot;never touch that file directly.&quot;
          </p>
          <p>
            So what does it do with the gaps? It <strong>guesses</strong> - confidently. And a confident
            wrong guess, repeated on every loop run, is expensive and dangerous.
          </p>
          <div className="info-box">
            <strong>The fix has a name:</strong> a <strong>Skill</strong>. A Skill is your project&apos;s
            knowledge written down <em>on the outside</em>, in a file the agent reads every single run.
            You write it once; the agent reads it forever.
          </div>
        </section>

        <section className="section-card">
          <h2>What a Skill Actually Is</h2>
          <p>
            A Skill is just a folder with a file called <code>SKILL.md</code> inside it (plus any helper
            scripts or notes it needs). The <code>SKILL.md</code> holds plain-English instructions and a
            short description of when to use it. Both Claude Code and the Codex app use this exact same
            format.
          </p>
          <div className="code-block">
            <pre>{`my-project/
  .claude/ (or .codex/)
    skills/
      ci-triage/
        SKILL.md        ← the instructions the agent reads
        helpers/        ← optional scripts, references, examples`}</pre>
          </div>
          <div className="info-box">
            <strong>Think of it as the onboarding doc</strong> you&apos;d hand a new teammate on day one -
            except the agent re-reads it on day one of <em>every</em> run, so it never &quot;forgets&quot;
            the onboarding.
          </div>
        </section>

        <section className="section-card">
          <h2>What Goes Inside a SKILL.md</h2>
          <p>A good Skill captures the stuff an agent would otherwise guess. For a CI-triage loop:</p>
          <div className="code-block">
            <pre>{`# CI Triage Skill

## How to classify a failing test
- env:   missing secret or infrastructure  → escalate to a human
- flake: passes on a clean retry, no code change → file a report
- bug:   fails the same way every time, tied to a recent commit → draft a fix

## Fix patterns (where to look first)
- Auth tests     → check src/auth/middleware first
- Database tests → check whether recent migrations ran in CI

## Never do
- Never disable a failing test just to make the build pass - escalate instead.
- Never touch code inside src/payments/ or src/billing/.`}</pre>
          </div>
          <p>
            See the three parts? <strong>How to think</strong> about the task, <strong>where to look</strong>
            based on hard-won experience, and <strong>hard rules</strong> it must never break. That last
            section - the &quot;never do&quot; list - is often the most valuable, because it encodes the
            mistakes your team already paid for.
          </p>
        </section>

        <section className="section-card">
          <h2>Why Skills Make Loops Cheaper AND Better</h2>
          <p>Two wins, and they compound over time:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Cheaper</strong>
              <p>Without a Skill, the loop re-derives your whole project from scratch every cycle -
                reading tons of code, burning tokens, to re-learn what you already know. With a Skill,
                it reads a short doc instead. Less wasted thinking = lower cost.</p>
            </div>
            <div className="step">
              <strong>Better</strong>
              <p>Your conventions and your &quot;don&apos;t do this because of that outage&quot; notes are
                applied <em>every run</em>, consistently. Intent stops leaking. The loop&apos;s output
                starts to actually look like your team wrote it.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Write a boring description.</strong> A Skill runs when the task matches its
            description, so a tight, plain description (&quot;triage failing CI tests&quot;) beats a clever
            vague one. Clear beats clever - the agent needs to know exactly when to reach for it.
          </div>
        </section>

        <section className="section-card">
          <h2>One Clarification: Skill vs. Plugin</h2>
          <p>
            People mix these up. A <strong>Skill</strong> is the <em>authoring format</em> - the knowledge
            itself. A <strong>plugin</strong> is how you <em>ship</em> it - how you bundle one or more
            Skills (and connectors, coming next lesson) so a teammate can install your whole setup in one
            go instead of rebuilding it from memory.
          </p>
          <div className="info-box">
            <strong>Short version:</strong> You <em>write</em> a Skill. You <em>distribute</em> it as a
            plugin. Same knowledge, different stage.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Draft Your First SKILL.md</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> For your candidate task, write a one-page
            <code> SKILL.md</code> in a plain text file. Include the three sections from above: (1) how to
            think about the task, (2) where to look / fix patterns, and (3) a &quot;never do&quot; list of
            at least 3 hard rules. Pay special attention to #3 - write down the things you&apos;d be
            nervous about an eager junior doing unsupervised. That nervousness is exactly the knowledge
            worth encoding. You&apos;ll reuse this file in the capstone.
          </div>
        </section>

        <QuickRef title="Lesson 59 Quick Reference" items={[
          { term: 'The goldfish problem', definition: 'Agents forget everything between runs and fill the gaps with confident guesses' },
          { term: 'Skill', definition: 'Project knowledge written once in a SKILL.md file that the agent reads on every run' },
          { term: 'SKILL.md structure', definition: 'How to think about the task + where to look (fix patterns) + a "never do" list of hard rules' },
          { term: 'Cheaper + better', definition: 'Skills cut wasted re-learning (cost) and apply your conventions consistently (quality)' },
          { term: 'Boring description wins', definition: 'A tight, plain description makes the agent reach for the Skill at the right time' },
          { term: 'Skill vs plugin', definition: 'You write a Skill (the knowledge); you ship it as a plugin (the bundle)' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson58', label: 'Automations + Worktrees' }}
          next={{ href: '/level7/lesson60', label: 'Connectors - Touch the Real World' }}
          currentLessonId="l7-59"
        />
      </main>
    </div>
  )
}
