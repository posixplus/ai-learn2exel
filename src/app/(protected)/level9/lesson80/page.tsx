'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson80() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-80" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={80}
          duration={40}
          title="Best Practices & Anti-Patterns"
          subtitle="SDD is powerful and easy to overdo. Learn when it's worth the ceremony, when it isn't, and how to avoid the traps"
        />

        <section className="section-card">
          <h2>The Honest Truth: SDD Has a Cost</h2>
          <p>
            Writing a constitution, a PRD, an architecture doc, and sharded stories <em>before</em> coding
            is real work. For the right project it pays back many times over. For the wrong one, it&apos;s
            ceremony that slows you down. A good engineer knows which is which.
          </p>
          <div className="info-box">
            <strong>The mentor&apos;s warning:</strong> the failure mode of beginners isn&apos;t using SDD
            too little - it&apos;s slapping the full BMAD process onto a 20-line script and calling it
            rigor. Process is a tool, not a virtue. Match the ceremony to the stakes.
          </div>
        </section>

        <section className="section-card">
          <h2>When SDD Is Worth It</h2>
          <div className="code-block">
            <pre>{`USE SDD WHEN...
  ✓ The project will live a long time (you'll forget why later)
  ✓ More than one person (or agent) works on it
  ✓ "Done" is fuzzy and needs pinning down
  ✓ Mistakes are expensive (money, safety, compliance)
  ✓ You need an audit trail (regulated work)
  ✓ The app is big enough that vibe coding loses the thread`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>When to Skip It (or Go Light)</h2>
          <div className="code-block">
            <pre>{`SKIP / GO LIGHT WHEN...
  ✗ A one-off script or throwaway prototype
  ✗ A tiny, obvious change where "done" is self-evident
  ✗ You're exploring and don't know what you want yet
    (explore by vibe first, THEN spec what you decide to keep)
  ✗ The whole task is smaller than the spec would be`}</pre>
          </div>
          <div className="info-box">
            <strong>Both BMAD and LID know this.</strong> BMAD is &quot;scale-adaptive&quot; - it dials the
            process down for small jobs. LID has a whole &quot;anti-patterns&quot; page naming when it&apos;s
            the wrong choice. The methods themselves tell you not to over-apply them. Listen.
          </div>
        </section>

        <section className="section-card">
          <h2>Best Practices That Travel Across Every SDD Method</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Keep specs lean and high-altitude</strong>
              <p>A spec is heuristics and checkable claims, not a 50-page novel scripting every pixel
                (Level 8&apos;s &quot;right altitude&quot; again). Over-specified is as broken as under-specified.</p>
            </div>
            <div className="step">
              <strong>Keep a human at every gate</strong>
              <p>Approve the brief, the PRD, the architecture, each story. SDD makes the gates obvious - use
                them. The agent proposes; you decide.</p>
            </div>
            <div className="step">
              <strong>Versions everything in Git</strong>
              <p>The spec is the product. If it&apos;s not in version control with history, you&apos;ve lost
                the source of truth.</p>
            </div>
            <div className="step">
              <strong>One small, checkable unit at a time</strong>
              <p>Sharded stories (BMAD) and atomic specs (LID) both exist because small, tightly-scoped
                units are where AI does its best work.</p>
            </div>
            <div className="step">
              <strong>Read the diffs anyway</strong>
              <p>SDD reduces intent gaps; it doesn&apos;t eliminate your responsibility to read what shipped
                (Level 7&apos;s comprehension debt). Stay the engineer.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Anti-Patterns to Avoid</h2>
          <div className="info-box">
            <strong>The traps:</strong>
            <ul>
              <li><strong>Spec theater:</strong> writing impressive docs nobody enforces. If your spec
                doesn&apos;t drive the code (or a gate), it&apos;s decoration. (LID&apos;s CI gate exists
                precisely to prevent this.)</li>
              <li><strong>Stale specs:</strong> the code changed, the spec didn&apos;t. Now the &quot;source
                of truth&quot; lies. Update the spec first, then the code.</li>
              <li><strong>Over-sharding:</strong> 200 micro-stories for a tiny app. The overhead eats the
                benefit. Right-size the pieces.</li>
              <li><strong>Cognitive surrender:</strong> trusting the planning docs so much you stop thinking.
                The docs are <em>your</em> thinking made explicit - not a replacement for it.</li>
              <li><strong>Process for its own sake:</strong> using the heaviest method available because it
                feels professional. The best engineers use the lightest process that still keeps them safe.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>How This Level Connects to the Rest</h2>
          <p>SDD isn&apos;t a separate island - it&apos;s where the last three levels meet:</p>
          <div className="code-block">
            <pre>{`Level 7 (Loops)    → SDD's gates and CI checks ARE loop verifiers;
                     each story is a unit you can loop on.
Level 8 (Context)  → a good spec / story IS a tight, high-signal
                     context package for the agent.
Level 9 (SDD)      → the discipline that decides WHAT context and
                     WHICH loop, by pinning down intent first.

Specs, context, and loops are three views of the same craft:
getting an AI to build the right thing, reliably, at scale.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Right-Size the Process</h2>
          <div className="hands-on-box">
            <strong>Hands-on (10 min):</strong> Here are four tasks. For each, decide: full SDD, light SDD,
            or just vibe-code it - and one sentence why. (1) A personal script to rename 50 files. (2) A
            patient-records feature for a clinic. (3) A weekend prototype to test an idea. (4) A payments
            integration for your startup. If you put the clinic and payments work on the heavy end and the
            script and prototype on the light end, you&apos;ve internalized the most important judgment in
            this level: <em>process should match stakes.</em>
          </div>
        </section>

        <QuickRef title="Lesson 80 Quick Reference" items={[
          { term: 'SDD has a cost', definition: 'Planning before coding pays off on real projects and wastes time on throwaways - match ceremony to stakes' },
          { term: 'Use SDD when', definition: 'Long-lived, multi-person, fuzzy "done", expensive mistakes, audit needs, or too big for vibe coding' },
          { term: 'Skip/go light when', definition: 'One-off scripts, obvious tiny changes, early exploration, or tasks smaller than their spec' },
          { term: 'Keep specs lean', definition: 'Heuristics and checkable claims at the right altitude - not a pixel-by-pixel novel' },
          { term: 'Spec theater', definition: 'Impressive docs nobody enforces; if the spec doesn\'t drive code or a gate, it\'s decoration' },
          { term: 'Stale specs', definition: 'Code changed but the spec didn\'t - update intent first, then code, or the "source of truth" lies' },
          { term: 'Process matches stakes', definition: 'The best engineers use the lightest process that still keeps them safe' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson79', label: 'LID - Linked Intent Development' }}
          next={{ href: '/level9/capstone', label: 'Level 9 Capstone' }}
          currentLessonId="l9-80"
        />
      </main>
    </div>
  )
}
