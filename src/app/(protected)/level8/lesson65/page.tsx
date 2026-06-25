'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson65() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-65" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={65}
          duration={40}
          title="From Wording to Wiring"
          subtitle="Prompt engineering is about one sentence. Context engineering is about the whole pipeline that decides everything the model sees"
        />

        <section className="section-card">
          <h2>The One-Line Shift</h2>
          <p>
            For a couple of years, the skill everyone chased was <strong>prompt engineering</strong> -
            finding the perfect wording for your request. That still matters, but it turns out to be a
            small slice of the real work. The bigger skill now has a name: <strong>context
            engineering</strong>.
          </p>
          <div className="info-box">
            <strong>The whole level in one sentence:</strong> context engineering is deliberately
            designing <em>everything the model sees</em> on each turn - not just your prompt, but the
            tools, the documents it pulled in, the conversation so far, and what it remembers. The field
            sums it up as <em>&quot;from wording to wiring.&quot;</em>
          </div>
        </section>

        <section className="section-card">
          <h2>What &quot;Context&quot; Actually Means</h2>
          <p>
            When an AI model answers, it doesn&apos;t see your screen or your project - it only sees a
            block of text called the <strong>context window</strong>. Everything it knows in that moment
            had to be <em>put into</em> that window. That includes a lot more than your message:
          </p>
          <div className="code-block">
            <pre>{`Everything that lands in the context window:

  • System prompt   - the standing instructions / role
  • Your message    - what you just asked
  • Tool definitions- the list of actions it's allowed to take
  • Retrieved docs  - files, search results, database rows pulled in
  • Message history - the whole back-and-forth so far
  • Memory          - notes it saved from earlier or past sessions
  • Output rules    - the format you want back`}</pre>
          </div>
          <p>
            Prompt engineering only touches one of those lines (your message). Context engineering is
            responsible for <em>all</em> of them, on <em>every</em> turn.
          </p>
        </section>

        <section className="section-card">
          <h2>A Picture: The Desk, the Backpack, the Filing Cabinet</h2>
          <p>Imagine the model is a smart worker solving a problem at a desk:</p>
          <div className="steps-list">
            <div className="step">
              <strong>The desk = the context window</strong>
              <p>Only so much fits on it. Whatever is on the desk is what the worker can use <em>right
                now</em>. Pile too much on and they can&apos;t find anything.</p>
            </div>
            <div className="step">
              <strong>The backpack = retrieval</strong>
              <p>Stuff nearby they can grab and put on the desk when needed - files, notes, search
                results. The skill is grabbing the <em>right</em> thing, not dumping the whole bag out.</p>
            </div>
            <div className="step">
              <strong>The filing cabinet = long-term memory</strong>
              <p>Things saved from past sessions. Not on the desk by default, but retrievable when
                relevant.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Context engineering is desk management.</strong> It&apos;s deciding what goes on the
            desk, when to grab something from the backpack, what to file away, and what to clear off to
            make room. That&apos;s the entire job.
          </div>
        </section>

        <section className="section-card">
          <h2>Prompt Engineering vs. Context Engineering</h2>
          <p>They aren&apos;t rivals - one lives inside the other. Here&apos;s the honest comparison:</p>
          <div className="code-block">
            <pre>{`                  PROMPT ENGINEERING      CONTEXT ENGINEERING
  Scope            one instruction         the whole set of tokens
  Covers           your message            instructions + docs + memory
                                            + tools + history + format
  State            single-turn             multi-turn, runs for hours
  You optimize     better phrasing         higher signal-to-noise
  Failure looks    "it misread me"         "it had the wrong info"
  The tell         you reword              you re-wire`}</pre>
          </div>
          <div className="info-box">
            <strong>The clearest test</strong> (from Sourcegraph&apos;s guide): if your improvement comes
            from <em>swapping words around</em>, you&apos;re prompt engineering. If it comes from changing
            <em> what data the agent pulls in, in what order, and what gets thrown away</em>, you&apos;re
            context engineering. Wording vs. wiring.
          </div>
        </section>

        <section className="section-card">
          <h2>Why This Became the Skill of 2026</h2>
          <p>
            Two things happened. First, agents stopped being chatbots. A chatbot answers one question
            with whatever fits in one turn. An <strong>agent runs in a loop</strong> (you saw this in
            Level 7), using tools and gathering state, and it has to make a smart decision at step 47 with
            the leftovers of steps 1-46 cluttering its desk.
          </p>
          <p>
            Second, teams discovered <em>where</em> agents actually fail. As Sourcegraph put it: a coding
            agent asked to fix a bug usually doesn&apos;t fail because the model can&apos;t reason. It
            fails because a search returned 4,000 results, the agent filled its desk with junk, and the
            one fact that mattered never made it on. <strong>Most production failures are context
            failures, not model failures.</strong>
          </p>
          <div className="info-box">
            <strong>Anthropic&apos;s framing:</strong> &quot;Building with language models is becoming less
            about finding the right words for your prompts, and more about answering the broader question:
            what configuration of context is most likely to generate the desired behavior?&quot;
          </div>
        </section>

        <section className="section-card">
          <h2>Where We&apos;re Headed in This Level</h2>
          <p>
            The discipline organizes into <strong>four pillars</strong> - Instructions, Retrieval, Memory,
            and Tools - plus the pipeline that assembles and prunes them each turn. That&apos;s the map for
            the next seven lessons:
          </p>
          <div className="code-block">
            <pre>{`66  The attention budget - why the desk is small (the core constraint)
67  Pillar 1: Instructions - what the model knows before it starts
68  Pillar 2: Retrieval    - how outside facts get onto the desk
69  Pillar 3: Memory       - short-term + long-term remembering
70  Pillar 4: Tools         - the actions it can take
71  Assembling it all      - the pipeline that picks and prunes
72  When it goes wrong     - the failure modes and their fixes`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Inventory a Real Context Window</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Open any AI assistant you use and start a fresh chat. Now
            list everything that&apos;s <em>already</em> on its &quot;desk&quot; before you even type:
            its system instructions (its role), any tools it has, any files or memory it carries. Then ask
            it one question and notice what got <em>added</em> to the desk (your message, maybe a search
            result). You&apos;re learning to <em>see the context window</em> - and you can&apos;t engineer
            what you can&apos;t see. Keep this habit; it&apos;s the foundation of everything that follows.
          </div>
        </section>

        <QuickRef title="Lesson 65 Quick Reference" items={[
          { term: 'Context engineering', definition: 'Deliberately designing everything the model sees each turn - instructions, tools, retrieved docs, history, memory, output rules' },
          { term: 'Context window', definition: 'The block of text the model actually sees; if it is not in there, the model does not know it' },
          { term: 'From wording to wiring', definition: 'Prompt engineering tweaks the message; context engineering designs the whole pipeline around it' },
          { term: 'Desk / backpack / cabinet', definition: 'The window (desk) is small; retrieval (backpack) and long-term memory (cabinet) feed it on demand' },
          { term: 'The tell', definition: 'Rewording = prompt engineering; changing what data is fetched/ordered/discarded = context engineering' },
          { term: 'Most failures are context failures', definition: 'Agents usually fail from wrong/too much/missing context, not a weak model' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level7/capstone', label: 'Level 7 Capstone' }}
          next={{ href: '/level8/lesson66', label: 'The Attention Budget' }}
          currentLessonId="l8-65"
        />
      </main>
    </div>
  )
}
