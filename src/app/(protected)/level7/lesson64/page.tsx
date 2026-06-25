'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson64() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-64" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={64}
          duration={45}
          title="When Loops Go Wrong"
          subtitle="The failure modes nobody warns you about: loops that lie about being done, understanding that quietly rots, and the security holes of leaving an agent running"
        />

        <section className="section-card">
          <h2>The Dangerous Failures Are the Quiet Ones</h2>
          <p>
            A loop that crashes loudly is easy - you notice, you fix it. The failures that actually hurt
            are <strong>silent</strong>: the loop keeps running, keeps reporting success, and quietly
            produces garbage (or a security hole) while draining your budget. This lesson is the warning
            label. Read it before you ever schedule a loop unattended.
          </p>
        </section>

        <section className="section-card">
          <h2>The &quot;Ralph Wiggum&quot; Loop</h2>
          <p>
            Engineer Geoffrey Huntley named this failure after the cartoon character famously oblivious to
            his own mistakes. A <strong>Ralph Wiggum loop</strong> is one where the agent declares
            &quot;done!&quot; before the job is actually finished - it emits a completion signal too early,
            the loop exits on a half-done task, and everything <em>looks</em> fine.
          </p>
          <p>
            This connects straight back to Anthropic&apos;s own finding on SWE-bench: because the model
            couldn&apos;t see the hidden grading tests, it often &quot;thought&quot; it had succeeded when
            it had actually failed. An agent&apos;s confidence is not proof.
          </p>
          <div className="info-box">
            <strong>You&apos;re running a Ralph Wiggum loop if:</strong>
            <ul>
              <li>You have no real verifier - you just ask a second agent to &quot;review&quot; in
                conversation instead of running an actual test suite. (That&apos;s two optimists agreeing.)</li>
              <li>&quot;Done&quot; is the agent&apos;s opinion, not an objective build/test/compile result.</li>
              <li>There&apos;s no hard cap, so it runs until a rate limit or a scary bill cuts it off.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Two Cousins: Goal Drift and Agentic Laziness</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Goal drift</strong>
              <p>In a long run, the agent keeps summarizing its own history to save space, and each summary
                loses a little detail. Your explicit rules - &quot;never touch the payments folder&quot; -
                can quietly evaporate by turn 47. <em>Fix:</em> force the loop to re-read a base spec file
                on <strong>every</strong> iteration so the rules never fade.</p>
            </div>
            <div className="step">
              <strong>Agentic laziness</strong>
              <p>The loop decides a task is &quot;good enough&quot; when it&apos;s only partly done.
                <em> Fix:</em> a hard <code>/goal</code> condition graded by a separate checker model, so
                &quot;good enough&quot; isn&apos;t the agent&apos;s call to make.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>The common cure</strong> for all three - Ralph Wiggum, drift, laziness - is the same
            thing you&apos;ve heard all level: an <em>independent, objective gate</em>. If you only
            remember one defense, remember that one.
          </div>
        </section>

        <section className="section-card">
          <h2>Comprehension Debt: The Bill That Really Hurts</h2>
          <p>
            This failure isn&apos;t technical - it&apos;s human, and it gets <em>worse</em> as your loops
            get better. <strong>Comprehension debt</strong> is the growing gap between what&apos;s in your
            codebase and what your team actually understands. The faster a loop ships code nobody read, the
            wider that gap grows.
          </p>
          <div className="info-box">
            <strong>The day the bill comes due:</strong> it&apos;s not your monthly token invoice. It&apos;s
            the day production breaks at 2am and <em>nobody on the team can read or debug the system the
            loop built.</em> Speed you don&apos;t understand is borrowed, at brutal interest.
          </div>
          <p>How to keep the debt from compounding:</p>
          <div className="code-block">
            <pre>{`• Read the diffs. Every automated pull request gets human eyes
  on the actual changes - not just a glance at the title.
• Audit your gates. Occasionally break the code ON PURPOSE to
  confirm your tests actually catch it. Gates rot silently.
• Restrict scope. Keep loops on small, isolated, checkable
  changes. Never let a loop redesign your architecture.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Cognitive Surrender: The Comfortable Trap</h2>
          <p>
            The subtler human risk: when the loop runs itself smoothly, it&apos;s tempting to stop forming
            your own opinion and just accept whatever it produces. Addy Osmani calls this
            <strong> cognitive surrender</strong>. The exact same loop can make one person faster at work
            they deeply understand, and let another person avoid understanding the work at all. The loop
            can&apos;t tell the difference. <em>You</em> can.
          </p>
          <div className="info-box">
            <strong>This is why the level&apos;s motto is &quot;stay the engineer.&quot;</strong> Designing
            loops is a superpower backed by judgment and a liability used to dodge thinking. Same action,
            opposite outcome - decided entirely by you.
          </div>
        </section>

        <section className="section-card">
          <h2>The Security Tax</h2>
          <p>
            An unattended loop with access to your code and tools is a live, always-on attack surface. The
            more autonomous and powerful the loop, the more you must defend it. Four vectors to guard:
          </p>
          <div className="code-block">
            <pre>{`1. UNREVIEWED CODE  - a loop ships faster than humans review, so
   vulnerabilities slip in. Gate every merge with automatic
   security scanning, dependency checks, and secret detection.

2. POISONED SKILLS  - a Skill pulled from the internet can hide
   malicious instructions. Audit any external skill before use.

3. LEAKED SECRETS   - chatty debug logs on a long run can print
   passwords, tokens, keys. Turn off verbose logging in
   production and scrub what gets recorded.

4. PERMISSION CREEP - a loop granted "read-only" today often gets
   "write" tomorrow for convenience. Audit its access every 30
   days and claw back anything it doesn't strictly need.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>The Whole Level in One Checklist</h2>
          <div className="info-box">
            <strong>Before you ever let a loop run unattended:</strong>
            <ul>
              <li>Did it pass the 4-condition test? (Lesson 57)</li>
              <li>Is there an objective gate - a real test/build - not just an LLM &quot;review&quot;? (Lessons 57, 61)</li>
              <li>Are the maker and checker separate agents? (Lesson 61)</li>
              <li>Does it write progress to a state file? (Lesson 62)</li>
              <li>Is there a hard, unbypassable cap on tokens/time/iterations? (Lessons 57, 64)</li>
              <li>Is it blocked from architecture, auth, and payments code? (Lessons 57, 64)</li>
              <li>Are you actually reading every diff before merge? (Lesson 64)</li>
            </ul>
            Tick all seven and you&apos;ve internalized the entire level.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Red-Team Your Own Loop</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Be the villain for your candidate loop. Write down: (1) one
            way it could declare &quot;done&quot; while secretly failing, (2) one rule that might
            &quot;drift&quot; away during a long run, and (3) one thing that could go wrong if its
            permissions leaked. Then write the single defense for each - usually a hard gate, a re-read of
            the base spec, or least-access permissions. This red-team list goes straight into your capstone
            as the &quot;safety&quot; section. A loop you&apos;ve tried to break is a loop you can trust to
            run.
          </div>
        </section>

        <QuickRef title="Lesson 64 Quick Reference" items={[
          { term: 'Ralph Wiggum loop', definition: 'The agent declares "done" before the job is finished; quiet failure with no real verifier or hard cap' },
          { term: 'Goal drift', definition: 'Rules fade across long runs as the agent summarizes; fix by re-reading a base spec every iteration' },
          { term: 'Agentic laziness', definition: 'The loop calls partial work "good enough"; fix with a hard /goal checked by a separate model' },
          { term: 'Comprehension debt', definition: 'The growing gap between code shipped and what the team understands - the real bill, paid at outage time' },
          { term: 'Cognitive surrender', definition: 'Accepting loop output without forming your own opinion; the loop can\'t tell good use from lazy use' },
          { term: 'Security tax', definition: 'Guard unreviewed code, poisoned skills, leaked secrets, and permission creep on any unattended loop' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson63', label: 'The Minimum Viable Loop' }}
          next={{ href: '/level7/capstone', label: 'Level 7 Capstone' }}
          currentLessonId="l7-64"
        />
      </main>
    </div>
  )
}
