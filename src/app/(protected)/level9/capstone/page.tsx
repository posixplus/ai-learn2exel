'use client'
import { useState } from 'react'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

const METHODS = ['Spec Kit', 'BMAD', 'LID'] as const
type Method = typeof METHODS[number]

function prefixFrom(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return 'APP'
  const initials = words.map(w => w[0]).join('').toUpperCase().replace(/[^A-Z]/g, '')
  return (initials || 'APP').slice(0, 4)
}

function methodNotes(method: Method): string {
  if (method === 'Spec Kit') {
    return `## Spec Kit workflow
Run these in order, approving each artifact before the next:
  /speckit.constitution   → the principles above
  /speckit.specify        → expand the PRD below
  /speckit.plan           → architecture & tech approach
  /speckit.tasks          → break stories into testable tasks
Then let your agent implement each task, checked against the spec.`
  }
  if (method === 'BMAD') {
    return `## BMAD workflow
PHASE 1 - Agentic Planning (no code yet):
  Analyst → brief   PM → this PRD   Architect → architecture
  Product Owner → alignment check + shard into the stories below
PHASE 2 - Context-Engineered Development (loop per story):
  Scrum Master writes one rich story file → Developer builds it on a
  branch with tests → QA + automated checks review → human approves → merge.
Keep dev agents lean: give each only its story + the relevant architecture.`
  }
  return `## LID workflow (the "arrow")
For EACH requirement below, build the chain:
  HLD (why) → LLD (how) → EARS spec (the FR) → failing-first test → code
Each spec keeps its greppable ID (e.g. ${'{ID}'}); the test references it and
the code carries  // @spec ID .
A CI gate fails the build unless every spec is cited by a test and every
@spec citation resolves - so no code can exist without a stated intent.`
}

function SpecBuilder() {
  const ACCENT = 'var(--color-l9)'
  const [appName, setAppName] = useState('')
  const [purpose, setPurpose] = useState('')
  const [method, setMethod] = useState<Method>('BMAD')
  const [featuresText, setFeaturesText] = useState('')
  const [constraintsText, setConstraintsText] = useState('')
  const [copied, setCopied] = useState(false)

  const features = featuresText.split('\n').map(s => s.trim()).filter(Boolean)
  const constraints = constraintsText.split('\n').map(s => s.trim()).filter(Boolean)
  const ready = !!(appName.trim() && purpose.trim() && features.length > 0)
  const prefix = prefixFrom(appName)

  const constitutionLines = [
    ...constraints.map(c => `- ${c}`),
    '- Every feature ships with tests.',
    '- A human approves each step before the next.',
    '- All artifacts (spec, plan, stories) are committed to Git.',
  ]

  const frLines = features.map((f, i) => {
    const id = `${prefix}-${String(i + 1).padStart(3, '0')}`
    const body = /^(when|while|if|where|the )/i.test(f) ? f : `The app shall ${f}`
    return `FR-${i + 1} (${id})  ${body.replace(/\.$/, '')}.`
  })

  const nfrLines = constraints.length > 0
    ? constraints.map((c, i) => `NFR-${i + 1}  ${c.replace(/\.$/, '')}.`)
    : ['NFR-1  The app shall persist data across refreshes.',
       'NFR-2  Every action shall be reachable by keyboard.']

  const storyLines = features.map((f, i) => {
    const id = `${prefix}-${String(i + 1).padStart(3, '0')}`
    return `STORY-${i + 1} (${id})  ${f.replace(/\.$/, '')}\n   → build on a branch, write the acceptance tests, open a PR`
  })

  const spec = `# ${appName.trim() || '(App name)'} - Spec Pack
Methodology: ${method}

## Constitution (governing principles)
${constitutionLines.join('\n')}

## PRD
Purpose: ${purpose.trim() || '(one-line purpose)'}

### Functional requirements (EARS)
${frLines.join('\n')}

### Non-functional requirements
${nfrLines.join('\n')}

## Stories / tasks (one small, checkable unit each)
${storyLines.join('\n')}

${methodNotes(method)}`

  async function copySpec() {
    try {
      await navigator.clipboard.writeText(spec)
      setCopied(true); setTimeout(() => setCopied(false), 1500)
    } catch { /* ignore */ }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', padding: '.55rem .75rem',
    border: '1.5px solid var(--color-border)', borderRadius: 8, fontSize: '.88rem',
    fontFamily: 'inherit', background: 'white', color: 'var(--color-text)', marginTop: '.3rem',
  }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '.82rem', fontWeight: 600, marginTop: '.9rem' }

  return (
    <div style={{ border: `2px solid var(--color-l9-border)`, borderRadius: 16, overflow: 'hidden', margin: '1rem 0 2rem' }}>
      <div style={{ background: 'var(--color-l9-light)', padding: '1.1rem 1.5rem', borderBottom: `1px solid var(--color-l9-border)` }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: ACCENT }}>📐 SDD Spec Builder</div>
        <p style={{ margin: '.25rem 0 0', fontSize: '.85rem', color: 'var(--color-text-muted)' }}>
          Describe your app and pick a method. It generates a constitution, an EARS PRD, a story list, and the workflow steps - ready to copy into your project.
        </p>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <label style={labelStyle}>App name</label>
        <input style={inputStyle} value={appName} onChange={e => setAppName(e.target.value)} placeholder="e.g. Habit Tracker" />

        <label style={labelStyle}>One-line purpose</label>
        <input style={inputStyle} value={purpose} onChange={e => setPurpose(e.target.value)} placeholder="e.g. Track daily habits and see streaks, offline" />

        <label style={labelStyle}>Methodology</label>
        <select value={method} onChange={e => setMethod(e.target.value as Method)} style={inputStyle}>
          {METHODS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>

        <label style={labelStyle}>Features (one per line)</label>
        <textarea style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }} value={featuresText} onChange={e => setFeaturesText(e.target.value)} placeholder={'add a habit\ntoggle a habit done for today\nshow the current streak\ndelete a habit'} />

        <label style={labelStyle}>Constraints / non-functional needs (one per line, optional)</label>
        <textarea style={{ ...inputStyle, minHeight: 70, resize: 'vertical' }} value={constraintsText} onChange={e => setConstraintsText(e.target.value)} placeholder={'must work fully offline\ndata persists on the device\nkeyboard accessible'} />

        {/* Verdict */}
        <div style={{
          marginTop: '1rem', padding: '.65rem .85rem', borderRadius: 10, fontSize: '.85rem', fontWeight: 600,
          background: ready ? 'var(--color-l0-light)' : 'var(--color-surface)',
          color: ready ? 'var(--color-success)' : 'var(--color-text-muted)',
          border: `1px solid ${ready ? 'var(--color-l0-border)' : 'var(--color-border)'}`,
        }}>
          {ready
            ? `✓ Spec pack ready - ${features.length} requirement${features.length === 1 ? '' : 's'}, ${method} workflow. Copy it out and start at the constitution.`
            : 'Add an app name, a purpose, and at least one feature to generate your spec pack.'}
        </div>

        {/* Output */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.4rem' }}>
          <strong style={{ fontSize: '.85rem' }}>spec-pack.md</strong>
          <button onClick={copySpec} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 7, padding: '.35rem .8rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <pre style={{ background: '#0F172A', color: '#E2E8F0', padding: '1rem', borderRadius: 10, fontSize: '.76rem', overflowX: 'auto', marginTop: '.4rem', whiteSpace: 'pre-wrap' }}>{spec}</pre>
      </div>
    </div>
  )
}

export default function Level9Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={0}
          duration={120}
          title="Level 9 Capstone"
          subtitle="Spec your own small app end-to-end - constitution, EARS requirements, architecture, and stories - with an interactive Spec Builder"
        />

        <section className="section-card">
          <div className="capstone-hero l9">
            <h2>Write the Blueprint, Not Just the Bricks</h2>
            <p>
              Across eight lessons you learned to stop vibe-coding and start specifying: EARS requirements,
              the SDD toolbox, BMAD&apos;s agent team and workflow (with a full build), and LID&apos;s
              enforced traceability. This capstone has you produce a complete spec pack for an app of your
              own - the deliverable a coding agent could actually build from.
            </p>
            <p>No code required. In spec-driven development, a great spec <em>is</em> the work.</p>
          </div>
        </section>

        <section className="section-card">
          <h2>Your Mission</h2>
          <p>Pick a small app you&apos;d genuinely like to exist, then produce a complete spec pack with five parts:</p>
          <div className="code-block">
            <pre>{`1. CONSTITUTION   - 4-6 governing principles (stack, testing, rules)

2. PRD            - purpose + functional requirements in EARS form
                    + non-functional requirements (speed/security/a11y)

3. ARCHITECTURE   - the main components, the data model, and one or
                    two "always do it this way" rules

4. STORIES        - shard the PRD into small, checkable stories, each
                    with embedded acceptance tests and an out-of-scope line

5. METHOD & FIT   - which method (Spec Kit / BMAD / LID) you'd use and
                    WHY - and an honest note on whether SDD even fits`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>🏆 Capstone Project Helper</h2>
          <p>
            Use the <strong>SDD Spec Builder</strong> to generate parts 1, 2, and 4 in one shot. Name your
            app, pick a methodology, list your features and constraints - it writes a constitution, an EARS
            PRD (with greppable IDs), a story list, and the exact workflow steps for your chosen method.
            Copy it out as your starting <code>spec-pack.md</code>.
          </p>
          <SpecBuilder />
          <div className="info-box">
            <strong>Then make it yours:</strong> the generator gives you a clean, correct skeleton - but the
            judgment is the point. Tighten the EARS wording, add acceptance criteria, and cut any feature
            that doesn&apos;t earn its place. A generated spec you edited thoughtfully beats a generated spec
            you didn&apos;t read.
          </div>
        </section>

        <section className="section-card">
          <h2>Finish Parts 3 and 5 by Hand</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Part 3 - Architecture (from Lessons 77-78)</strong>
              <p>Sketch the components, the data model for one record, and one or two rules that keep the
                codebase clean (like &quot;only the Store module touches storage&quot;).</p>
            </div>
            <div className="step">
              <strong>Part 5 - Method &amp; fit (from Lesson 80)</strong>
              <p>State which method you&apos;d use and why, and be honest: is this app big and long-lived
                enough to deserve full SDD, or would light SDD do? Defend your call.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>What &quot;Great&quot; Looks Like</h2>
          <div className="info-box">
            <strong>A strong submission:</strong>
            <ul>
              <li>Requirements are in real EARS form - each one a single, checkable claim with a clear trigger and response.</li>
              <li>Includes non-functional requirements, not just features.</li>
              <li>Stories are small, with acceptance tests and explicit out-of-scope lines.</li>
              <li>Picks a method deliberately and justifies it - and isn&apos;t afraid to say &quot;this one&apos;s small enough to go light.&quot;</li>
              <li>Reads like a blueprint a teammate (human or agent) could build from without guessing.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>What You Have Learned in Level 9</h2>
          <ul>
            <li><strong>L73</strong> - Vibe coding vs SDD; intent gaps; the Spec → Plan → Tasks → Implement loop</li>
            <li><strong>L74</strong> - Writing specs that don&apos;t lie: EARS, FRs vs NFRs, acceptance criteria</li>
            <li><strong>L75</strong> - The SDD toolbox: Spec Kit, Kiro, OpenSpec, Tessl; read-once vs living specs</li>
            <li><strong>L76</strong> - BMAD&apos;s AI product team and two phases</li>
            <li><strong>L77</strong> - The BMAD workflow, the sharded story file, the control manifest</li>
            <li><strong>L78</strong> - A full small-app build with BMAD, end to end</li>
            <li><strong>L79</strong> - LID: the arrow, greppable IDs, the CI gate, failing-first tests</li>
            <li><strong>L80</strong> - Best practices and anti-patterns; matching process to stakes</li>
          </ul>
          <div className="hands-on-box">
            <strong>You can now make an AI build the right thing.</strong> You&apos;ve closed the loop on the
            last three levels: specs pin down <em>intent</em>, context (Level 8) feeds the agent the right
            slice of it, and loops (Level 7) execute and verify it. That&apos;s the modern craft of building
            software with AI - not typing cleverer prompts, but designing intent, context, and process so the
            machine builds what you actually meant.
            <br /><br />
            <strong>Spec the blueprint. Stay the architect.</strong>
          </div>
        </section>

        <LevelQuiz level={9} />
        <LevelFeedback level={9} levelTitle="Spec-Driven Development - Specs as the Source of Truth" />
        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson80', label: 'Best Practices & Anti-Patterns' }}
          next={undefined}
          currentLessonId="l9-capstone"
        />
      </main>
    </div>
  )
}
