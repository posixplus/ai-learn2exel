'use client'
import { useState } from 'react'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

const PILLARS = [
  { key: 'instructions', label: 'Instructions', color: '#0891B2' },
  { key: 'retrieval', label: 'Retrieval', color: '#7C3AED' },
  { key: 'memory', label: 'Memory', color: '#DB2777' },
  { key: 'tools', label: 'Tools', color: '#D97706' },
] as const

type PillarKey = typeof PILLARS[number]['key']

function ContextBudgetPlanner() {
  const ACCENT = 'var(--color-l8)'
  const [task, setTask] = useState('')
  const [total, setTotal] = useState(50000)
  const [alloc, setAlloc] = useState<Record<PillarKey, number>>({
    instructions: 4000, retrieval: 16000, memory: 6000, tools: 2000,
  })
  const [timing, setTiming] = useState('Hybrid (rules up front, files just-in-time)')
  const [fetchWhat, setFetchWhat] = useState('')
  const [compress, setCompress] = useState('')
  const [discard, setDiscard] = useState('')
  const [copied, setCopied] = useState(false)

  const used = PILLARS.reduce((s, p) => s + (alloc[p.key] || 0), 0)
  const headroom = total - used
  const over = headroom < 0
  const headroomShare = headroom / total
  const bloated = PILLARS.filter(p => (alloc[p.key] || 0) / total > 0.4)

  const warnings: string[] = []
  if (over) warnings.push(`Over budget by ${(-headroom).toLocaleString()} tokens - the pillars don't fit. Trim something.`)
  if (!over && headroomShare < 0.15) warnings.push('Less than 15% headroom - leave the model room to reason and respond, not just read.')
  bloated.forEach(p => warnings.push(`${p.label} is over 40% of the budget - is it hogging the desk? Re-rank or compress it.`))

  const balanced = !!task.trim() && !over && headroomShare >= 0.15 && bloated.length === 0

  const plan = `# Context Plan - ${task.trim() || '(your task)'}

## Budget (${total.toLocaleString()} tokens)
- Instructions : ${(alloc.instructions || 0).toLocaleString()}
- Retrieval    : ${(alloc.retrieval || 0).toLocaleString()}
- Memory       : ${(alloc.memory || 0).toLocaleString()}
- Tools        : ${(alloc.tools || 0).toLocaleString()}
- Headroom     : ${headroom.toLocaleString()}   (room for the model to reason + reply)

## The four questions
1. WHAT to fetch    : ${fetchWhat.trim() || '(which docs / files / facts?)'}
2. WHEN to fetch    : ${timing}
3. HOW to compress  : ${compress.trim() || '(summarize? truncate? re-rank to top-k?)'}
4. WHEN to discard  : ${discard.trim() || '(evict stale or finished context when?)'}

## Pruning checklist
- [ ] Re-rank retrieved candidates down to a tight top-k
- [ ] Highest-signal material placed at the top or bottom (avoid the middle)
- [ ] Tool set is minimal and non-overlapping
- [ ] Old tool results / finished context cleared each turn
- [ ] Token budget tracked per task, with an alert on overrun`

  function setPillar(k: PillarKey, v: number) {
    setAlloc(prev => ({ ...prev, [k]: Math.max(0, Math.round(v) || 0) }))
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(plan)
      setCopied(true); setTimeout(() => setCopied(false), 1500)
    } catch { /* ignore */ }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', padding: '.5rem .7rem',
    border: '1.5px solid var(--color-border)', borderRadius: 8, fontSize: '.88rem',
    fontFamily: 'inherit', background: 'white', color: 'var(--color-text)', marginTop: '.3rem',
  }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '.82rem', fontWeight: 600, marginTop: '.9rem' }

  return (
    <div style={{ border: `2px solid var(--color-l8-border)`, borderRadius: 16, overflow: 'hidden', margin: '1rem 0 2rem' }}>
      <div style={{ background: 'var(--color-l8-light)', padding: '1.1rem 1.5rem', borderBottom: `1px solid var(--color-l8-border)` }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: ACCENT }}>🧮 Context Budget Planner</div>
        <p style={{ margin: '.25rem 0 0', fontSize: '.85rem', color: 'var(--color-text-muted)' }}>
          Allocate a token budget across the four pillars, watch the desk fill up, and generate a context plan you can copy out.
        </p>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <label style={labelStyle}>Agent task</label>
        <input style={inputStyle} value={task} onChange={e => setTask(e.target.value)} placeholder="e.g. A support agent that answers from our help docs" />

        <label style={labelStyle}>Total context budget (tokens)</label>
        <input style={inputStyle} type="number" min={1000} step={1000} value={total} onChange={e => setTotal(Math.max(1000, Number(e.target.value) || 0))} />

        {/* Pillar allocations */}
        <div style={{ marginTop: '1rem' }}>
          {PILLARS.map(p => (
            <div key={p.key} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 90px', alignItems: 'center', gap: '.6rem', marginBottom: '.5rem' }}>
              <span style={{ fontSize: '.85rem', fontWeight: 600, color: p.color }}>{p.label}</span>
              <input
                type="range" min={0} max={total} step={500}
                value={Math.min(alloc[p.key] || 0, total)}
                onChange={e => setPillar(p.key, Number(e.target.value))}
                style={{ accentColor: p.color, width: '100%' }}
              />
              <input
                type="number" min={0} value={alloc[p.key] || 0}
                onChange={e => setPillar(p.key, Number(e.target.value))}
                style={{ ...inputStyle, marginTop: 0, padding: '.35rem .5rem', fontSize: '.8rem' }}
              />
            </div>
          ))}
        </div>

        {/* The desk bar */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', color: 'var(--color-text-muted)', marginBottom: '.3rem' }}>
            <span>The desk ({total.toLocaleString()} tokens)</span>
            <span style={{ fontWeight: 700, color: over ? '#DC2626' : 'var(--color-text)' }}>
              {used.toLocaleString()} used · {headroom.toLocaleString()} headroom
            </span>
          </div>
          <div style={{ display: 'flex', height: 26, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
            {PILLARS.map(p => {
              const pct = Math.max(0, Math.min(100, ((alloc[p.key] || 0) / total) * 100))
              return <div key={p.key} title={`${p.label}: ${(alloc[p.key] || 0).toLocaleString()}`} style={{ width: `${pct}%`, background: p.color }} />
            })}
            {!over && <div style={{ flex: 1, background: 'repeating-linear-gradient(45deg, #E5E7EB, #E5E7EB 6px, #F3F4F6 6px, #F3F4F6 12px)' }} title={`Headroom: ${headroom.toLocaleString()}`} />}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '.5rem', fontSize: '.74rem', color: 'var(--color-text-muted)' }}>
            {PILLARS.map(p => (
              <span key={p.key} style={{ display: 'inline-flex', alignItems: 'center', gap: '.3rem' }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: p.color, display: 'inline-block' }} />{p.label}
              </span>
            ))}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.3rem' }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: '#E5E7EB', display: 'inline-block' }} />Headroom
            </span>
          </div>
        </div>

        {/* Warnings / verdict */}
        <div style={{ marginTop: '1rem' }}>
          {warnings.length > 0 ? warnings.map((w, i) => (
            <div key={i} style={{ padding: '.55rem .8rem', borderRadius: 8, fontSize: '.83rem', fontWeight: 600, background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', marginBottom: '.4rem' }}>
              ⚠ {w}
            </div>
          )) : (
            <div style={{ padding: '.55rem .8rem', borderRadius: 8, fontSize: '.83rem', fontWeight: 600, background: 'var(--color-l0-light)', color: 'var(--color-success)', border: '1px solid var(--color-l0-border)' }}>
              {balanced ? '✓ Balanced plan - high-signal, room to think, no pillar hogging the desk.' : 'Name your task to get a verdict.'}
            </div>
          )}
        </div>

        {/* The four questions */}
        <label style={labelStyle}>When do you fetch?</label>
        <select value={timing} onChange={e => setTiming(e.target.value)} style={inputStyle}>
          <option>Up front (RAG - load relevant docs before starting)</option>
          <option>Just-in-time (give pointers, fetch on demand)</option>
          <option>Hybrid (rules up front, files just-in-time)</option>
        </select>

        <label style={labelStyle}>What do you fetch?</label>
        <input style={inputStyle} value={fetchWhat} onChange={e => setFetchWhat(e.target.value)} placeholder="e.g. top help-doc sections matching the question" />

        <label style={labelStyle}>How do you compress?</label>
        <input style={inputStyle} value={compress} onChange={e => setCompress(e.target.value)} placeholder="e.g. re-rank 30 candidates down to top 4; truncate long pages" />

        <label style={labelStyle}>When do you discard?</label>
        <input style={inputStyle} value={discard} onChange={e => setDiscard(e.target.value)} placeholder="e.g. clear a doc once answered; compact chat past 20 turns" />

        {/* Generated plan */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.4rem' }}>
          <strong style={{ fontSize: '.85rem' }}>context-plan.md</strong>
          <button onClick={copyPlan} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 7, padding: '.35rem .8rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <pre style={{ background: '#0F172A', color: '#E2E8F0', padding: '1rem', borderRadius: 10, fontSize: '.76rem', overflowX: 'auto', marginTop: '.4rem', whiteSpace: 'pre-wrap' }}>{plan}</pre>
      </div>
    </div>
  )
}

export default function Level8Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={0}
          duration={120}
          title="Level 8 Capstone"
          subtitle="Design a real context pipeline - decide what the model sees, in what order, and what gets thrown away - with an interactive budget planner"
        />

        <section className="section-card">
          <div className="capstone-hero l8">
            <h2>Engineer the Desk, Not Just the Prompt</h2>
            <p>
              Over eight lessons you learned to treat context as a finite resource and design the four
              pillars - instructions, retrieval, memory, and tools - into one tight, high-signal context
              window. This capstone has you do it for a real agent task, end to end.
            </p>
            <p>
              No code required. The deliverable is a <strong>context plan</strong>: a clear, defensible
              design for what your agent sees on every turn, why, and what it prunes.
            </p>
          </div>
        </section>

        <section className="section-card">
          <h2>Your Mission</h2>
          <p>Pick an agent task you care about, then produce a complete context design with five parts:</p>
          <div className="code-block">
            <pre>{`1. THE TASK & BUDGET - what the agent does + a token budget split
                       across the four pillars (use the planner below)

2. INSTRUCTIONS      - a system prompt at the "right altitude":
                       clear heuristics, not brittle rules or vague fluff

3. RETRIEVAL         - what to fetch, when (up-front / just-in-time /
                       hybrid), and how you keep it fresh

4. MEMORY            - how the agent stays coherent over a long task
                       (compaction, notes, or sub-agents)

5. PRUNING & FAILURES- your re-ranking + ordering plan, and which
                       context failure you're most at risk of + the fix`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>🏆 Capstone Project Helper</h2>
          <p>
            Use the <strong>Context Budget Planner</strong> to build parts 1, 3, and the spine of your
            design. Set a total budget, split it across the four pillars, and watch the &quot;desk&quot;
            fill - it warns you when you blow the budget, starve the model of headroom, or let one pillar
            hog the window. Answer the four questions and it generates a copy-paste
            <code> context-plan.md</code>.
          </p>
          <ContextBudgetPlanner />
          <div className="info-box">
            <strong>Read the warnings as lessons:</strong> if the planner says &quot;Retrieval is over 40%
            of the budget,&quot; that&apos;s the exact instinct (dump everything) the whole level warns
            against. A balanced desk with real headroom is the goal.
          </div>
        </section>

        <section className="section-card">
          <h2>Finish the Other Parts</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Part 2 - Instructions (from Lesson 67)</strong>
              <p>Write the actual system prompt at the right altitude. Include role, key heuristics, output
                format, and one canonical example. Avoid the brittle-rules and vague-fluff traps.</p>
            </div>
            <div className="step">
              <strong>Part 4 - Memory (from Lesson 69)</strong>
              <p>State how your agent survives a long task: compaction, a NOTES.md, sub-agents - or a mix -
                and what must never be lost in a summary.</p>
            </div>
            <div className="step">
              <strong>Part 5 - Pruning &amp; failures (from Lessons 71-72)</strong>
              <p>Describe your re-rank + ordering plan, then name the one context failure you&apos;re most
                exposed to (overload? stale? lost-in-the-middle?) and your defense.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>What &quot;Great&quot; Looks Like</h2>
          <div className="info-box">
            <strong>A strong submission:</strong>
            <ul>
              <li>Treats context as a budget - every pillar earns its tokens, with real headroom left for the model to think.</li>
              <li>Chooses retrieval timing deliberately and has a freshness answer.</li>
              <li>Has a concrete memory plan for long tasks, not &quot;the model will remember.&quot;</li>
              <li>Keeps tools few, clear, and non-overlapping.</li>
              <li>Names its biggest context-failure risk by symptom and gives the matching fix.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>What You Have Learned in Level 8</h2>
          <ul>
            <li><strong>L65</strong> - From wording to wiring; context is everything the model sees</li>
            <li><strong>L66</strong> - The attention budget; context rot and lost-in-the-middle</li>
            <li><strong>L67</strong> - Pillar 1: instructions at the right altitude</li>
            <li><strong>L68</strong> - Pillar 2: retrieval, up-front vs just-in-time</li>
            <li><strong>L69</strong> - Pillar 3: memory, compaction, notes, sub-agents</li>
            <li><strong>L70</strong> - Pillar 4: few, clear, non-overlapping tools</li>
            <li><strong>L71</strong> - Assembling context: the pipeline, re-ranking, token budgets</li>
            <li><strong>L72</strong> - When context goes wrong: the failure list and fixes</li>
          </ul>
          <div className="hands-on-box">
            <strong>You can now see the context window - and engineer it.</strong> When an agent misbehaves,
            you&apos;ll reach past &quot;use a bigger model&quot; and ask the better question: <em>what does
            it have on its desk right now, and is it the smallest high-signal set that does the job?</em>
            That question is the whole discipline, and it&apos;s yours now.
          </div>
        </section>

        <LevelQuiz level={8} />
        <LevelFeedback level={8} levelTitle="Context Engineering - From Wording to Wiring" />
        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson72', label: 'When Context Goes Wrong' }}
          next={undefined}
          currentLessonId="l8-capstone"
        />
      </main>
    </div>
  )
}
