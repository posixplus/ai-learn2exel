'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson56() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-56" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={56}
          duration={45}
          title="From Prompter to Loop Designer"
          subtitle="The biggest shift in AI coding isn't a better prompt - it's building a small system that prompts the agent for you"
        />

        <section className="section-card">
          <h2>Start With a Simple Picture</h2>
          <p>
            Imagine you have a very fast junior assistant. Right now, the way most people use one
            looks like this: you ask for something, you wait, you read what it did, you spot a
            mistake, you ask again. You are holding the assistant&apos;s hand the whole time. Every
            single step needs <em>you</em>.
          </p>
          <p>
            <strong>Loop engineering</strong> is the idea that you stop being the hand-holder. Instead,
            you build a little system - a <strong>loop</strong> - that finds the work on its own, hands
            it to the assistant, checks whether the result is actually good, writes down what happened,
            and decides what to do next. You set it up <em>once</em>, and from then on the system does
            the prompting, not you.
          </p>
          <div className="info-box">
            <strong>The one-sentence version:</strong> Loop engineering is replacing <em>yourself</em>
            as the person who prompts the agent. You design the system that does it instead.
          </div>
        </section>

        <section className="section-card">
          <h2>An Everyday Analogy: The Dishwasher</h2>
          <p>
            Washing dishes by hand is like prompting an agent by hand. You stand at the sink, you do
            one plate, then the next, then the next. You are involved in every plate. It works - but
            your hands are full the entire time.
          </p>
          <p>
            A <strong>dishwasher</strong> is a loop. You load it, you choose a setting, you press start,
            and you walk away. The machine does the repetitive work and <em>tells you</em> when it&apos;s
            done. You didn&apos;t get rid of yourself - you still load it, you still check a glass came
            out clean - but you stopped doing the boring middle part by hand.
          </p>
          <div className="info-box">
            <strong>Key point:</strong> A dishwasher is only worth it for dishes you wash <em>often</em>.
            For one single cup, washing by hand is faster. Loops are the same - they pay off for
            repeated work, not one-off jobs. (We&apos;ll test exactly when in the next lesson.)
          </div>
        </section>

        <section className="section-card">
          <h2>What People at the Frontier Are Saying</h2>
          <p>
            This isn&apos;t a hypothetical. The people building these tools have already changed how
            they work:
          </p>
          <div className="info-box">
            <strong>Boris Cherny</strong> (head of Claude Code at Anthropic): &quot;I don&apos;t prompt
            Claude anymore. I have loops running that prompt Claude and figure out what to do. My job is
            to write loops.&quot;
            <br /><br />
            <strong>Peter Steinberger</strong> (engineer): &quot;You shouldn&apos;t be prompting coding
            agents anymore. You should be designing loops that prompt your agents.&quot;
            <br /><br />
            <strong>Addy Osmani</strong> (Google): &quot;You don&apos;t really need to be good at
            prompting anymore. The thing to get good at is the loop that does the prompting for you.&quot;
          </div>
          <p>
            The claim they&apos;re all making: the <strong>leverage point moved</strong>. For two years,
            the win came from writing the best prompt. Now the win comes from designing the best system
            <em> around</em> the agent.
          </p>
        </section>

        <section className="section-card">
          <h2>What Is an &quot;Agent&quot;, Really?</h2>
          <p>
            Before loops, get this one idea straight. When Anthropic measured Claude on real software
            bugs (the SWE-bench test), they were careful to explain that an &quot;agent&quot; is not
            just the AI model. It&apos;s the model <strong>plus the scaffolding around it</strong>:
          </p>
          <div className="code-block">
            <pre>{`AGENT = AI model  +  scaffolding

Scaffolding is the boring plumbing:
  • the prompt that gets sent in
  • the tools the model can use (run a command, edit a file)
  • the bit that reads the model's output and takes the next action
  • the loop that feeds the last result back in as the next input`}</pre>
          </div>
          <p>
            In their test, the model followed a tiny, repeated loop on its own: explore the code →
            write a script to reproduce the bug → run it → edit the code → run again → check it&apos;s
            fixed. The same model scored far higher just because the <em>scaffolding around it</em> was
            well designed.
          </p>
          <div className="info-box">
            <strong>Why this matters for you:</strong> If the scaffolding (the loop) is what makes a
            mediocre setup great or a great model mediocre, then <em>designing the scaffolding is the
            real skill</em>. That&apos;s the whole subject of this level.
          </div>
        </section>

        <section className="section-card">
          <h2>Prompting vs. Looping - Side by Side</h2>
          <div className="code-block">
            <pre>{`PROMPTING (you are the engine)
  You: "Fix the failing login test."
  Agent: makes a change.
  You: read it, run tests, spot a problem.
  You: "No, the token expiry is still wrong."
  Agent: tries again.
  ...you repeat this until it's right or you give up.

LOOPING (the system is the engine)
  A schedule wakes up every morning.
  → It scans for failing tests by itself.
  → It hands each one to the agent to fix.
  → It RUNS the tests to check (no human needed).
  → It writes "fixed 3, stuck on 2" to a memory file.
  → It opens a pull request and pings you only for the hard 2.
  You: review the finished work over coffee.`}</pre>
          </div>
          <p>
            Notice what changed: in the second version you didn&apos;t type a single prompt during the
            work. You <em>designed</em> when it runs, what it looks for, how it checks itself, and where
            it writes things down. That design is the job now.
          </p>
        </section>

        <section className="section-card">
          <h2>How Engineers Use This to Build Better Software</h2>
          <p>
            This isn&apos;t about replacing engineers - it&apos;s about moving boring, repeatable work
            off their plate so they can focus on the hard, interesting parts. Real examples teams run as
            loops today:
          </p>
          <div className="info-box">
            <strong>Everyday loops that help engineers:</strong>
            <ul>
              <li><strong>Test triage:</strong> every night, classify which tests broke and why, draft
                fixes for the easy ones.</li>
              <li><strong>Dependency updates:</strong> weekly, check for outdated libraries and open
                tidy update requests.</li>
              <li><strong>Lint-and-fix:</strong> on every code change, auto-correct style issues so
                humans never nitpick them in review.</li>
            </ul>
            None of these are glamorous. That&apos;s exactly why handing them to a loop frees engineers
            to do the creative, judgment-heavy work software actually needs.
          </div>
        </section>

        <section className="section-card">
          <h2>The Honest Caveat (Read This Twice)</h2>
          <p>
            Some people online say loops mean &quot;software engineering is dead&quot; or quote huge
            productivity numbers like &quot;8× more code shipped.&quot; Be skeptical. Anthropic itself
            said that 8× figure is &quot;almost certainly an overstatement.&quot; Loops are powerful, but
            they are not magic, and they are not for everyone or every task.
          </p>
          <div className="info-box">
            <strong>The motto for this whole level:</strong> <em>Build the loop. Stay the engineer.</em>
            A loop is a multiplier on your judgment - it makes a thoughtful engineer faster, and it makes
            a careless one ship bugs faster. The loop doesn&apos;t know the difference. You do.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Spot the Loops Around You</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Don&apos;t open any AI tool yet. Instead, list 3
            repetitive tasks you (or an engineer you know) do every week - e.g. &quot;reply to the same
            kind of email,&quot; &quot;update a status sheet,&quot; &quot;rerun a report.&quot; For each,
            ask two questions: (1) Does it happen often? (2) Is there a clear way to <em>check</em> it was
            done right? Keep this list - in the next lesson you&apos;ll run a real test on it to see which
            ones could become a loop. You&apos;re already thinking like a loop designer.
          </div>
        </section>

        <QuickRef title="Lesson 56 Quick Reference" items={[
          { term: 'Loop engineering', definition: 'Designing a system that prompts the agent for you - instead of you prompting it by hand' },
          { term: 'The shift', definition: 'Leverage moved from writing the best prompt to designing the best system around the agent' },
          { term: 'Agent = model + scaffolding', definition: 'An agent is the AI model PLUS the prompt, tools, and loop around it; the scaffolding is where the skill lives' },
          { term: 'Dishwasher rule', definition: 'Loops pay off for work you repeat often, not one-off jobs' },
          { term: 'You stay in the loop', definition: 'Loops remove the boring middle, not the engineer - you design it and check the results' },
          { term: 'Build the loop, stay the engineer', definition: 'A loop multiplies your judgment; it speeds up good and bad engineers alike' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level6/capstone', label: 'Level 6 Capstone' }}
          next={{ href: '/level7/lesson57', label: 'Should You Even Build a Loop?' }}
          currentLessonId="l7-56"
        />
      </main>
    </div>
  )
}
