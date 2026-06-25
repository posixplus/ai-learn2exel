'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson71() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-71" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={71}
          duration={45}
          title="Assembling Context"
          subtitle="The four pillars don't just sit there - they're assembled, ranked, and pruned into one tidy desk on every single turn. This is the pipeline"
        />

        <section className="section-card">
          <h2>Context Is Built Fresh Every Turn</h2>
          <p>
            Here&apos;s the part people miss: the context window isn&apos;t set up once and left alone. It&apos;s
            <strong> rebuilt on every turn</strong> of the agent&apos;s loop. Each step, a little pipeline
            decides what goes on the desk <em>this time</em> - what to add, what to keep, what to clear off.
            Context engineering is really the design of that pipeline.
          </p>
          <div className="info-box">
            <strong>The whole pillar set, in motion:</strong> instructions, retrieval, memory, and tools
            all feed into one assembly step that produces the final desk for this turn. Get the assembly
            wrong and even great pillars fail.
          </div>
        </section>

        <section className="section-card">
          <h2>The Four Questions</h2>
          <p>
            Every assembly decision boils down to four questions. Memorize these - they&apos;re the entire
            discipline in four lines:
          </p>
          <div className="code-block">
            <pre>{`1. WHAT do we fetch?      (which docs / facts / files)
2. WHEN do we fetch it?   (up front, or just in time)
3. HOW do we compress it? (summarize, truncate, re-rank)
4. WHEN do we throw away? (evict stale or finished context)`}</pre>
          </div>
          <p>
            Questions 1-2 are the retrieval pillar. Questions 3-4 are budget management - the part beginners
            skip, and the part that separates a demo from a production agent.
          </p>
        </section>

        <section className="section-card">
          <h2>The Assembly Pipeline</h2>
          <p>Put concretely, here&apos;s what runs each turn:</p>
          <div className="code-block">
            <pre>{`USER INPUT
   │
   ├─▶ run several retrievals in parallel
   │     (keyword search, semantic search, file reads, db lookups)
   │
   ├─▶ MERGE all the candidates into one big pile
   │     (this pile is almost always TOO BIG for the budget)
   │
   ├─▶ RE-RANK and keep only the top few (more on this below)
   │
   ├─▶ layer in: system instructions + memory + tool defs
   │
   ▼
FINAL CONTEXT  →  send to the model  →  it acts  →  repeat next turn`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Re-Ranking: The Make-or-Break Step</h2>
          <p>
            The merge step produces way more candidate chunks than the budget allows. <strong>Re-ranking</strong>
            is the step that scores every candidate against the actual question and keeps only the best
            handful. This is where context pipelines quietly succeed or fail.
          </p>
          <div className="code-block">
            <pre>{`WITHOUT re-ranking          WITH re-ranking
  retrieve 50 chunks          retrieve 50 chunks (high recall)
  dump all 50 on the desk     score each vs. the question
  hope the answer's in there  keep the top 5 (high precision)
  → bloated, rot, lost-       → tight, high-signal desk
    in-the-middle`}</pre>
          </div>
          <div className="info-box">
            <strong>The mental model:</strong> cast a wide net (grab 50 so you don&apos;t miss the answer),
            then ruthlessly filter (keep 5 so the desk stays sharp). Wide recall, then tight precision. A
            pipeline that grabs 50 and keeps the best 5 beats one that grabs 50 and dumps all of them, every
            time.
          </div>
        </section>

        <section className="section-card">
          <h2>Token-Budget Management</h2>
          <p>
            This is the &quot;compress&quot; and &quot;throw away&quot; questions made practical. The key
            insight: cut low-signal content <em>before</em> it hits the desk, not after. Common moves:
          </p>
          <div className="code-block">
            <pre>{`• Truncate tool outputs        (keep the useful head/tail, drop the rest)
• Compact old conversation     (summarize, as in Lesson 69)
• Drop low-relevance chunks    (below a score threshold → don't include)
• Cap each retrieval           (no single search can flood the desk)
• Clear finished tool results  (once read, the raw output can go)`}</pre>
          </div>
          <div className="info-box">
            <strong>Order matters too (Lesson 66 callback):</strong> because of &quot;lost in the
            middle,&quot; put the highest-signal material at the <em>top or bottom</em> of the assembled
            context - never buried in the center of a long block.
          </div>
        </section>

        <section className="section-card">
          <h2>Track the Budget Like a Bill</h2>
          <p>
            Every retrieval, every tool call, every re-rank shows up in <strong>cost and latency</strong>.
            Production teams track tokens-used and tool-calls <em>per task</em>, set budgets, and get
            alerted when an agent blows past them. It&apos;s the same discipline as watching a cloud bill -
            an agent quietly using 5× the context it needs is a quietly 5× expensive agent.
          </p>
          <div className="info-box">
            <strong>This connects to Level 7:</strong> remember &quot;Cost per Accepted Change&quot;? Token
            budget per task is the context-engineering version. A leaner desk is a cheaper, faster,
            <em> and</em> more accurate agent - all three improve together.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Be the Re-Ranker</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Pick a question about a topic you know. Do a web or doc
            search and copy the titles/snippets of the first ~15 results (your &quot;candidates&quot;). Now
            play re-ranker: score each from 0-5 on how directly it answers <em>your specific</em> question,
            and keep only the top 4. Notice how many high-ranking-by-search results are actually
            off-target, and how much sharper your kept-4 set is. That gap - between &quot;what search
            returned&quot; and &quot;what actually helps&quot; - is precisely the value re-ranking adds to
            a context pipeline.
          </div>
        </section>

        <QuickRef title="Lesson 71 Quick Reference" items={[
          { term: 'Context is rebuilt each turn', definition: 'A pipeline assembles the desk fresh every step of the agent loop - that pipeline is what you design' },
          { term: 'The four questions', definition: 'What to fetch, when to fetch, how to compress, when to throw away' },
          { term: 'Assembly pipeline', definition: 'Retrieve in parallel → merge candidates → re-rank to top-k → layer in instructions/memory/tools → send' },
          { term: 'Re-ranking', definition: 'Score all candidates against the question and keep only the best few - wide recall, then tight precision' },
          { term: 'Token-budget management', definition: 'Cut low-signal content before it enters: truncate, compact, drop below threshold, cap, clear finished results' },
          { term: 'Order for attention', definition: 'Put highest-signal material at the top or bottom, never the lost middle' },
          { term: 'Track tokens per task', definition: 'Monitor cost/latency per task and alert on overruns - leaner context is cheaper, faster, and more accurate' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson70', label: 'Pillar 4 - Tools' }}
          next={{ href: '/level8/lesson72', label: 'When Context Goes Wrong' }}
          currentLessonId="l8-71"
        />
      </main>
    </div>
  )
}
