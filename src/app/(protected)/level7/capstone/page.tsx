'use client'
import { useState } from 'react'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

// ── Starter loop patterns that prefill sensible defaults ─────────────
const PATTERNS: Record<string, { trigger: string; gate: string; stop: string; cap: string }> = {
  'CI failure triage': {
    trigger: 'Every morning at 7:00am',
    gate: 'All tests pass and the linter is clean',
    stop: 'Every failing test in the target folder is either fixed (tests pass) or escalated to a human',
    cap: 'Max 20 minutes or 200k tokens per run',
  },
  'Dependency updates': {
    trigger: 'Every Monday at 6:00am',
    gate: 'The build succeeds and existing tests pass after the version bump',
    stop: 'Every outdated dependency has an update PR or is flagged as a breaking change',
    cap: 'Max 15 minutes per run',
  },
  'Lint-and-fix pass': {
    trigger: 'On every pull request opened',
    gate: 'The linter reports zero errors and the build still passes',
    stop: 'No lint errors remain in the changed files',
    cap: 'Max 5 minutes per run',
  },
  'Custom (start blank)': { trigger: '', gate: '', stop: '', cap: '' },
}

const CONDITIONS = [
  { key: 'repeats', label: 'The task repeats (weekly or more often)' },
  { key: 'autoCheck', label: 'A test / linter / build can reject bad output automatically' },
  { key: 'budget', label: 'My token budget can absorb retries and exploration' },
  { key: 'tools', label: 'The agent has logs + a live environment to run and test its code' },
]

function LoopDesignHelper() {
  const ACCENT = 'var(--color-l7)'
  const [conds, setConds] = useState<Record<string, boolean>>({})
  const [pattern, setPattern] = useState('CI failure triage')
  const [taskName, setTaskName] = useState('')
  const [trigger, setTrigger] = useState(PATTERNS['CI failure triage'].trigger)
  const [gate, setGate] = useState(PATTERNS['CI failure triage'].gate)
  const [stop, setStop] = useState(PATTERNS['CI failure triage'].stop)
  const [cap, setCap] = useState(PATTERNS['CI failure triage'].cap)
  const [copied, setCopied] = useState('')

  function applyPattern(name: string) {
    setPattern(name)
    const p = PATTERNS[name]
    setTrigger(p.trigger); setGate(p.gate); setStop(p.stop); setCap(p.cap)
  }

  const condCount = CONDITIONS.filter(c => conds[c.key]).length
  const allConds = condCount === CONDITIONS.length
  const name = taskName.trim() || pattern
  const requiredFilled = !!(taskName.trim() && trigger.trim() && gate.trim() && stop.trim() && cap.trim())
  const ready = allConds && requiredFilled

  const loopSpec = `# Loop Spec - ${name}

## Trigger (automation / heartbeat)
${trigger || '(when does it run?)'}

## Skill
Use a SKILL.md for "${name}":
  - how to think about the task
  - where to look / fix patterns
  - a "never do" list of hard rules

## Maker / Checker (separate agents)
- Maker: drafts the change in an isolated git worktree
- Checker: a SEPARATE agent verifies it against the gate below

## Gate (objective check - "done" means this is true)
${gate || '(what automatic check decides success?)'}

## Stop condition (/goal)
${stop || '(when should the loop stop?)'}

## Hard cap (safety)
${cap || '(token / time / iteration limit)'}

## Human gate
A human reviews the diff and approves before anything merges or ships.

## Blocked zones (never touch)
Architecture, authentication / cryptography, payments / billing.`

  const stateFile = `# STATE - ${name}

Last run: (not run yet)

## Done
- (nothing yet)

## In progress
- (nothing yet)

## Lessons learned
- (record gotchas here so future runs don't repeat them)`

  async function copy(text: string, which: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(which)
      setTimeout(() => setCopied(''), 1500)
    } catch {
      setCopied('error')
      setTimeout(() => setCopied(''), 1500)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', padding: '.55rem .75rem',
    border: '1.5px solid var(--color-border)', borderRadius: 8, fontSize: '.9rem',
    fontFamily: 'inherit', background: 'white', color: 'var(--color-text)', marginTop: '.3rem',
  }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '.82rem', fontWeight: 600, marginTop: '.9rem' }

  return (
    <div style={{ border: `2px solid var(--color-l7-border)`, borderRadius: 16, overflow: 'hidden', margin: '1rem 0 2rem' }}>
      <div style={{ background: 'var(--color-l7-light)', padding: '1.1rem 1.5rem', borderBottom: `1px solid var(--color-l7-border)` }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: ACCENT }}>🛠️ Loop Design Helper</div>
        <p style={{ margin: '.25rem 0 0', fontSize: '.85rem', color: 'var(--color-text-muted)' }}>
          Fill this in to design your first loop. It generates a ready-to-use loop spec and STATE.md you can copy out.
        </p>
      </div>

      <div style={{ padding: '1.5rem' }}>
        {/* Step 1 - the 4-condition test */}
        <h3 style={{ marginTop: 0, fontSize: '1rem' }}>Step 1 · The 4-condition test</h3>
        <p style={{ fontSize: '.85rem', color: 'var(--color-text-muted)', marginTop: '.2rem' }}>
          A loop only makes sense if all four are true. Be honest.
        </p>
        {CONDITIONS.map(c => (
          <label key={c.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', padding: '.4rem 0', fontSize: '.9rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={!!conds[c.key]}
              onChange={e => setConds(prev => ({ ...prev, [c.key]: e.target.checked }))}
              style={{ marginTop: '.2rem', width: 16, height: 16, accentColor: ACCENT, flexShrink: 0 }}
            />
            <span>{c.label}</span>
          </label>
        ))}

        <div style={{
          marginTop: '.75rem', padding: '.65rem .85rem', borderRadius: 10, fontSize: '.85rem', fontWeight: 600,
          background: allConds ? 'var(--color-l0-light)' : '#FEF3C7',
          color: allConds ? 'var(--color-success)' : '#92400E',
          border: `1px solid ${allConds ? 'var(--color-l0-border)' : '#FDE68A'}`,
        }}>
          {allConds
            ? '✓ Passes the 4-condition test - this task is a good loop candidate.'
            : `${condCount}/4 conditions met - until all four are true, keep this task as a manual prompt. The missing piece is your real first project.`}
        </div>

        {/* Step 2 - describe the loop */}
        <h3 style={{ marginTop: '1.5rem', fontSize: '1rem' }}>Step 2 · Describe your loop</h3>

        <label style={labelStyle}>Starter pattern</label>
        <select value={pattern} onChange={e => applyPattern(e.target.value)} style={inputStyle}>
          {Object.keys(PATTERNS).map(p => <option key={p} value={p}>{p}</option>)}
        </select>

        <label style={labelStyle}>Loop name / task</label>
        <input style={inputStyle} value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="e.g. Nightly auth-test triage" />

        <label style={labelStyle}>Trigger (when it runs)</label>
        <input style={inputStyle} value={trigger} onChange={e => setTrigger(e.target.value)} placeholder="e.g. every morning at 7am" />

        <label style={labelStyle}>Gate (the automatic check that decides &quot;done&quot;)</label>
        <input style={inputStyle} value={gate} onChange={e => setGate(e.target.value)} placeholder="e.g. all tests pass and lint is clean" />

        <label style={labelStyle}>Stop condition (/goal)</label>
        <input style={inputStyle} value={stop} onChange={e => setStop(e.target.value)} placeholder="e.g. all target failures fixed or escalated" />

        <label style={labelStyle}>Hard cap (safety limit)</label>
        <input style={inputStyle} value={cap} onChange={e => setCap(e.target.value)} placeholder="e.g. max 20 minutes or 200k tokens" />

        {/* Readiness */}
        <div style={{
          marginTop: '1.25rem', padding: '.75rem .9rem', borderRadius: 10, fontSize: '.86rem', fontWeight: 600,
          background: ready ? 'var(--color-l0-light)' : 'var(--color-surface)',
          color: ready ? 'var(--color-success)' : 'var(--color-text-muted)',
          border: `1px solid ${ready ? 'var(--color-l0-border)' : 'var(--color-border)'}`,
        }}>
          {ready
            ? '✓ Ready to build. Remember the order: make it work MANUALLY first → write the Skill → wrap in a loop → only then schedule.'
            : 'Fill in all four conditions and every field above to unlock your build-ready verdict.'}
        </div>

        {/* Step 3 - generated output */}
        <h3 style={{ marginTop: '1.5rem', fontSize: '1rem' }}>Step 3 · Your generated files</h3>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.5rem' }}>
          <strong style={{ fontSize: '.85rem' }}>loop-spec.md</strong>
          <button onClick={() => copy(loopSpec, 'spec')} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 7, padding: '.35rem .8rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
            {copied === 'spec' ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <pre style={{ background: '#0F172A', color: '#E2E8F0', padding: '1rem', borderRadius: 10, fontSize: '.78rem', overflowX: 'auto', marginTop: '.4rem', whiteSpace: 'pre-wrap' }}>{loopSpec}</pre>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.75rem' }}>
          <strong style={{ fontSize: '.85rem' }}>STATE.md</strong>
          <button onClick={() => copy(stateFile, 'state')} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 7, padding: '.35rem .8rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
            {copied === 'state' ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <pre style={{ background: '#0F172A', color: '#E2E8F0', padding: '1rem', borderRadius: 10, fontSize: '.78rem', overflowX: 'auto', marginTop: '.4rem', whiteSpace: 'pre-wrap' }}>{stateFile}</pre>

        {copied === 'error' && (
          <p style={{ fontSize: '.8rem', color: '#DC2626', marginTop: '.5rem' }}>Couldn&apos;t copy automatically - select the text and copy manually.</p>
        )}
      </div>
    </div>
  )
}

export default function Level7Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={0}
          duration={120}
          title="Level 7 Capstone"
          subtitle="Design your first real loop end-to-end - with an interactive helper that builds your loop spec and STATE.md as you go"
        />

        <section className="section-card">
          <div className="capstone-hero l7">
            <h2>Stop Prompting. Start Designing.</h2>
            <p>
              Across nine lessons you learned the whole stack: when a loop is worth building, the five
              building blocks, the memory file, the minimum viable loop, and every way loops fail quietly.
              This capstone turns that knowledge into one concrete artifact - a real, build-ready design
              for a loop <em>you</em> could run.
            </p>
            <p>
              You do not need to write any code to pass this capstone. The goal is to <strong>design</strong>
              a loop correctly - because in loop engineering, the design <em>is</em> the engineering.
            </p>
          </div>
        </section>

        <section className="section-card">
          <h2>Your Mission</h2>
          <p>
            Take the candidate task you have been carrying since Lesson 56 and produce a complete loop
            design for it. A passing submission has five parts:
          </p>
          <div className="code-block">
            <pre>{`1. THE TEST     - show your task passes the 4-condition test
                  (and name the gate that proves "done")

2. THE SKILL    - a one-page SKILL.md: how to think, where to
                  look, and a "never do" list

3. THE LOOP     - the Minimum Viable Loop: automation + skill +
                  state file + gate, with the build order

4. THE SAFETY   - your red-team notes: how it could fail quietly
                  (Ralph Wiggum, drift, leaks) and the defense for each

5. THE METRIC   - how you'll measure Cost per Accepted Change,
                  and your stop-the-loop threshold (e.g. <50% accepted)`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>🏆 Capstone Project Helper</h2>
          <p>
            Use the interactive helper below to build parts 1, 3, and the spine of your loop. Tick the
            4-condition test, pick a starter pattern (or go custom), fill in the fields, and it generates
            a ready-to-use <code>loop-spec.md</code> and <code>STATE.md</code> you can copy straight into
            your project. Everything updates live as you type.
          </p>
          <LoopDesignHelper />
          <div className="info-box">
            <strong>How to use the output:</strong> The generated <code>loop-spec.md</code> is your design
            on a page - hand it to a teammate and they&apos;d understand your loop in one read. The
            <code> STATE.md</code> is the starting memory file you drop in your repo root. Together
            they&apos;re two of the five required parts, done.
          </div>
        </section>

        <section className="section-card">
          <h2>Finish the Other Three Parts</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Part 2 - The Skill (from Lesson 59)</strong>
              <p>Expand the SKILL.md you drafted: how to think about the task, where to look / fix
                patterns, and a &quot;never do&quot; list of at least three hard rules.</p>
            </div>
            <div className="step">
              <strong>Part 4 - The Safety / red-team (from Lesson 64)</strong>
              <p>Write one way your loop could declare &quot;done&quot; while failing, one rule that could
                drift, and one permission risk - each with its single defense.</p>
            </div>
            <div className="step">
              <strong>Part 5 - The Metric (from Lesson 63)</strong>
              <p>State how you&apos;ll track Cost per Accepted Change and the acceptance rate at which
                you&apos;d turn the loop off. If you can&apos;t measure acceptance, say how you&apos;ll
                start.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>What &quot;Great&quot; Looks Like</h2>
          <div className="info-box">
            <strong>A strong submission:</strong>
            <ul>
              <li>Picks a genuinely small, repetitive, machine-checkable task - not &quot;rewrite our app.&quot;</li>
              <li>Has a gate that is an <em>objective</em> check (a real test/build), not &quot;an agent reviews it.&quot;</li>
              <li>Separates maker from checker, and has a hard cap plus a human approval before merge.</li>
              <li>Is honest about where it is in the build order - most good answers are still at &quot;make it work manually.&quot;</li>
              <li>Treats the loop as a multiplier on the engineer&apos;s judgment, not a replacement for it.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>What You Have Learned in Level 7</h2>
          <ul>
            <li><strong>L56</strong> - From prompter to loop designer; agent = model + scaffolding + loop</li>
            <li><strong>L57</strong> - The 4-condition test; when NOT to build a loop</li>
            <li><strong>L58</strong> - Automations (the heartbeat) + worktrees (parallel without chaos)</li>
            <li><strong>L59</strong> - Skills: write project knowledge down once</li>
            <li><strong>L60</strong> - Connectors: let the loop touch your real tools</li>
            <li><strong>L61</strong> - Sub-agents: separate the maker from the checker</li>
            <li><strong>L62</strong> - The state file: memory that outlives the chat</li>
            <li><strong>L63</strong> - The Minimum Viable Loop and Cost per Accepted Change</li>
            <li><strong>L64</strong> - When loops go wrong: quiet failures, comprehension debt, security</li>
          </ul>
          <div className="hands-on-box">
            <strong>The leverage moved, and so did your job.</strong> You can now look at a piece of
            repetitive engineering work and decide - honestly - whether it should be a loop, then design
            that loop so it checks itself, remembers its progress, and fails loudly instead of quietly.
            That is loop engineering. The tools will keep changing; the judgment you built here will not.
            <br /><br />
            <strong>Build the loop. Stay the engineer.</strong>
          </div>
        </section>

        <LevelQuiz level={7} />
        <LevelFeedback level={7} levelTitle="Loop Engineering - From Prompter to Loop Designer" />
        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson64', label: 'When Loops Go Wrong' }}
          next={undefined}
          currentLessonId="l7-capstone"
        />
      </main>
    </div>
  )
}
