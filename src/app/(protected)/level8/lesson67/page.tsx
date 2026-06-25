'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson67() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-67" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={67}
          duration={40}
          title="Pillar 1 - Instructions"
          subtitle="The standing instructions are what the model knows before it sees anything. Get the altitude right: not too bossy, not too vague"
        />

        <section className="section-card">
          <h2>The Four Pillars (Your Map)</h2>
          <p>
            Context engineering breaks into four pillars. Each answers a different question the model
            faces every turn. We&apos;ll take one per lesson, starting here.
          </p>
          <div className="code-block">
            <pre>{`1. INSTRUCTIONS  "What's my role and how should I behave?"   ← this lesson
2. RETRIEVAL     "What outside facts do I need right now?"
3. MEMORY        "What do I remember from before?"
4. TOOLS         "What actions am I allowed to take?"`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>What the Instruction Layer Is</h2>
          <p>
            Instructions - usually the <strong>system prompt</strong> - are the standing rules the model
            reads <em>before</em> it ever sees a user message. Its role, its constraints, the format you
            want back. Think of it as the job description and house rules you hand a new employee on day
            one, except the model re-reads it on <em>every</em> turn.
          </p>
          <p>
            You met basic prompting back in Level 0 and Level 3. The new idea here is treating the system
            prompt as a <em>context-budget decision</em>: every word in it is permanent, so it must earn
            its place.
          </p>
        </section>

        <section className="section-card">
          <h2>The Goldilocks Zone: &quot;The Right Altitude&quot;</h2>
          <p>
            Anthropic&apos;s key idea for instructions is writing at the <strong>right altitude</strong> -
            a Goldilocks zone between two opposite mistakes:
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Too low (too bossy)</strong>
              <p>Hardcoding rigid if-this-then-that rules for every situation. It feels precise but it&apos;s
                <em> brittle</em> - the moment reality doesn&apos;t match your rules, the agent breaks, and
                the prompt becomes a nightmare to maintain.</p>
            </div>
            <div className="step">
              <strong>Too high (too vague)</strong>
              <p>&quot;Be helpful and do a good job.&quot; This gives the model nothing concrete to act on,
                and quietly assumes it shares context it doesn&apos;t have.</p>
            </div>
            <div className="step">
              <strong>Just right (the altitude)</strong>
              <p>Specific enough to guide behavior, flexible enough to let the model use its own judgment.
                You give strong <em>heuristics</em>, not a rigid script.</p>
            </div>
          </div>
          <div className="code-block">
            <pre>{`TOO LOW   "If the file ends in .test.ts AND is in /unit AND was
           changed today, run npm test:unit, else if..."  (brittle)

TOO HIGH  "Write good tests."                              (useless)

RIGHT     "Add tests for new behavior. Prefer the project's
           existing test style. Cover the happy path and the
           obvious edge cases."                            (heuristics)`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Minimal Does Not Mean Short</h2>
          <p>
            A common misread: &quot;keep it minimal&quot; means &quot;keep it tiny.&quot; Not quite. Minimal
            means <em>the smallest set of information that fully spells out the behavior you want</em> -
            no more, no less. Sometimes that&apos;s a paragraph; sometimes it&apos;s a page. The test is
            signal, not length.
          </p>
          <div className="info-box">
            <strong>Anthropic&apos;s recommended process:</strong> start with a minimal prompt on the best
            model you have. See where it fails. Add a clear instruction or example to fix <em>that
            specific</em> failure. Repeat. You grow the prompt in response to real failures, instead of
            guessing every rule up front.
          </div>
        </section>

        <section className="section-card">
          <h2>Structure and Examples</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Organize into clear sections</strong>
              <p>Use headers or tags like <code>## Background</code>, <code>## Instructions</code>,
                <code> ## Output format</code>. It helps the model (and you) find things. Exact formatting
                matters less as models get smarter, but clear structure never hurts.</p>
            </div>
            <div className="step">
              <strong>Use a few canonical examples, not a pile</strong>
              <p>Examples are powerful - &quot;a picture worth a thousand words&quot; for a model. But
                don&apos;t stuff in every edge case you can think of. Pick a few <em>diverse, typical</em>
                examples that show the behavior you want. Quality over quantity (and over budget).</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>You&apos;ve Already Seen This Pillar in Action</h2>
          <p>
            Remember <code>CLAUDE.md</code> from Level 7 (and the Skills lesson)? That&apos;s the
            instruction pillar applied to a whole project: your conventions and &quot;never do&quot; rules,
            written once at the right altitude, dropped into context every session. A good
            <code> SKILL.md</code> or <code>CLAUDE.md</code> <em>is</em> context engineering of the
            instruction layer.
          </p>
          <div className="info-box">
            <strong>The connection:</strong> instructions aren&apos;t just the chat system prompt - they
            include every standing &quot;here&apos;s how we do things&quot; file the agent reads up front.
            Same altitude rule applies to all of them.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Fix the Altitude</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Write a system prompt for a simple agent (say, &quot;an
            assistant that drafts replies to customer emails&quot;) three times: once too bossy (rigid
            rules for every scenario), once too vague (&quot;be nice and helpful&quot;), and once at the
            right altitude (clear heuristics + a tone guide + one example). Try each on the same sample
            email. Notice how the bossy one breaks on anything unexpected and the vague one drifts. The
            middle one is what good instruction-pillar work feels like.
          </div>
        </section>

        <QuickRef title="Lesson 67 Quick Reference" items={[
          { term: 'Four pillars', definition: 'Instructions, Retrieval, Memory, Tools - the four parts of context you engineer' },
          { term: 'Instruction layer', definition: 'The standing system prompt / rules the model reads before any user message, every turn' },
          { term: 'The right altitude', definition: 'Goldilocks zone: specific enough to guide, flexible enough to let the model judge - heuristics, not a rigid script' },
          { term: 'Too low / too high', definition: 'Brittle if-else rules (too low) vs vague hand-waving (too high) both fail' },
          { term: 'Minimal ≠ short', definition: 'The smallest set that fully specifies the behavior - could be a paragraph or a page; judge by signal' },
          { term: 'Grow from failures', definition: 'Start minimal, add a clear instruction/example only to fix a real observed failure' },
          { term: 'Canonical examples', definition: 'A few diverse, typical examples beat a laundry list of every edge case' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson66', label: 'The Attention Budget' }}
          next={{ href: '/level8/lesson68', label: 'Pillar 2 - Retrieval' }}
          currentLessonId="l8-67"
        />
      </main>
    </div>
  )
}
