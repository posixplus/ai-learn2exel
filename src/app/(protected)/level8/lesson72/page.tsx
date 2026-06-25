'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson72() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-72" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={72}
          duration={40}
          title="When Context Goes Wrong"
          subtitle="Context engineering has its own canonical bug list. Learn to recognize each failure by its symptom - and apply the right fix"
        />

        <section className="section-card">
          <h2>Symptoms, Not Mysteries</h2>
          <p>
            When an agent misbehaves, beginners blame the model and reach for a bigger one. Usually the
            real cause is one of a handful of <strong>context failures</strong> with recognizable
            symptoms. Learn the list and you&apos;ll diagnose problems in seconds instead of guessing.
          </p>
          <div className="info-box">
            <strong>The meta-fix for almost all of these:</strong> not <em>more</em> context, but
            <em> better-targeted</em> context. Keep that in mind as we go through the list.
          </div>
        </section>

        <section className="section-card">
          <h2>The Three &quot;Too Much&quot; Failures</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Context overload</strong>
              <p><em>Symptom:</em> the agent gets slower, pricier, and somehow <em>less</em> accurate as you
                give it more. <em>Cause:</em> you dumped everything in &quot;to be safe&quot; and hit context
                rot. <em>Fix:</em> retrieve less but better - re-rank to a tight top-k.</p>
            </div>
            <div className="step">
              <strong>Context distraction</strong>
              <p><em>Symptom:</em> the agent fixates on something irrelevant that happened to be in the
                window. <em>Cause:</em> loud but off-topic material crowds out the signal. <em>Fix:</em> cut
                the irrelevant chunks; enforce a relevance threshold.</p>
            </div>
            <div className="step">
              <strong>Context confusion</strong>
              <p><em>Symptom:</em> the agent contradicts itself or wavers. <em>Cause:</em> the context
                contains <em>conflicting</em> signals pulling it different ways (two docs that disagree, an
                old rule and a new one). <em>Fix:</em> remove the stale/contradictory source; don&apos;t make
                the model referee a fight you can settle.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>All three share one root cause:</strong> pushing past the budget without curating
            what&apos;s inside. The cure is never &quot;less context&quot; in the dumb sense - it&apos;s
            <em> better-targeted</em> context, with a re-ranker enforcing a hard cap.
          </div>
        </section>

        <section className="section-card">
          <h2>Stale Retrieval</h2>
          <p>
            <em>Symptom:</em> the agent confidently uses something that&apos;s no longer true - calls a
            function that was deleted, quotes an old policy, references last quarter&apos;s number.
          </p>
          <div className="info-box">
            <strong>Cause:</strong> a pre-built index (Lesson 68) went stale. Your data changed; the
            embeddings didn&apos;t get refreshed. The agent reads a deprecated README and trusts it.
            <br /><br />
            <strong>Fix:</strong> track freshness. Refresh indexes when sources change, or lean on
            just-in-time retrieval that reads the <em>current</em> file instead of a months-old snapshot.
            This is especially nasty for code, where stale info compiles and runs before it fails.
          </div>
        </section>

        <section className="section-card">
          <h2>Lost in the Middle (Again)</h2>
          <p>
            <em>Symptom:</em> the crucial fact <em>was</em> in the context, but the agent acted like it
            never saw it. <em>Cause:</em> it was buried in the middle of a long block (Lesson 66).
            <em> Fix:</em> reorder - put the highest-signal material at the top or bottom - and shrink the
            block so there&apos;s less middle to get lost in.
          </p>
          <div className="code-block">
            <pre>{`Quick diagnosis:
  "The info was there but ignored"   → lost in the middle (reorder)
  "It used outdated info"            → stale retrieval (refresh)
  "It fixated on the wrong thing"    → distraction (cut noise)
  "It contradicted itself"           → confusion (remove conflicts)
  "Slow, costly, and worse"          → overload (re-rank, trim)`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>The Boring-but-Real One: Cost &amp; Latency</h2>
          <p>
            Not every failure is a wrong answer. Sometimes the agent is <em>right</em> but too expensive or
            too slow to be worth it. Every extra retrieval, tool call, and re-rank shows up in the bill and
            the wait time. An agent that quietly uses 5× the context it needs is a real failure even when
            its answers are fine.
          </p>
          <div className="info-box">
            <strong>Fix:</strong> set per-task token and tool-call budgets, and alert when an agent class
            regularly blows past them - the same discipline as Level 7&apos;s &quot;Cost per Accepted
            Change.&quot;
          </div>
        </section>

        <section className="section-card">
          <h2>The Whole Level in One Checklist</h2>
          <div className="info-box">
            <strong>Before you ship an agent, check its context:</strong>
            <ul>
              <li>Instructions at the right altitude - not brittle, not vague? (Lesson 67)</li>
              <li>Retrieval targeted and fresh - not a dump, not stale? (Lesson 68)</li>
              <li>Memory managed - compaction / notes / sub-agents for long tasks? (Lesson 69)</li>
              <li>Tools few, clear, and non-overlapping? (Lesson 70)</li>
              <li>A re-ranker enforcing a tight top-k, highest-signal at top/bottom? (Lesson 71)</li>
              <li>A token budget tracked per task, with alerts? (Lessons 71, 72)</li>
            </ul>
            Tick all six and you&apos;re engineering context, not just hoping for the best.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Diagnose From Symptoms</h2>
          <div className="hands-on-box">
            <strong>Hands-on (10 min):</strong> Here are three real-sounding bug reports. Name the context
            failure and the fix for each: (1) &quot;Our support agent got noticeably worse after we added
            the entire 200-page manual to its context.&quot; (2) &quot;The agent keeps recommending a
            feature we removed six months ago.&quot; (3) &quot;The key instruction is right there in the
            prompt but the agent ignores it on long chats.&quot; Write your answers, then check them
            against the diagnosis table above. If you can name these by symptom, you can debug real agents.
          </div>
        </section>

        <QuickRef title="Lesson 72 Quick Reference" items={[
          { term: 'Context overload', definition: 'Slower, costlier, less accurate as you add context - fix by retrieving less but better (re-rank)' },
          { term: 'Context distraction', definition: 'Agent fixates on irrelevant material in the window - cut the noise, enforce a relevance threshold' },
          { term: 'Context confusion', definition: 'Conflicting signals make the agent waver - remove the stale or contradictory source' },
          { term: 'Stale retrieval', definition: 'Confidently uses outdated info from an old index - track freshness or read current files just-in-time' },
          { term: 'Lost in the middle', definition: 'Info was present but ignored because it was buried - reorder to top/bottom and shrink the block' },
          { term: 'Cost & latency failure', definition: 'Right answer, too slow/expensive - set per-task token budgets and alert on overruns' },
          { term: 'Meta-fix', definition: 'Almost every context bug is solved by better-targeted context, not more context' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson71', label: 'Assembling Context' }}
          next={{ href: '/level8/capstone', label: 'Level 8 Capstone' }}
          currentLessonId="l8-72"
        />
      </main>
    </div>
  )
}
