'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson66() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-66" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={66}
          duration={40}
          title="The Attention Budget"
          subtitle="Why a bigger context window isn't a free lunch - the model's focus is finite, and more text can make it dumber, not smarter"
        />

        <section className="section-card">
          <h2>The Surprising Core Truth</h2>
          <p>
            Here&apos;s the fact that makes context engineering necessary: <strong>giving a model more
            text can make its answers worse.</strong> It feels backwards - more information should mean
            more to work with. But the model&apos;s ability to <em>focus</em> is limited, and every extra
            token spends a little of that focus.
          </p>
          <div className="info-box">
            <strong>Anthropic calls it an &quot;attention budget.&quot;</strong> Like a person with limited
            working memory, the model has a finite pool of focus. Every token you add draws it down. So
            the goal of context engineering is not &quot;include everything&quot; - it&apos;s
            <em> &quot;find the smallest set of high-signal tokens that gets the job done.&quot;</em>
          </div>
        </section>

        <section className="section-card">
          <h2>Context Rot: More Tokens, Worse Recall</h2>
          <p>
            Researchers tested models by hiding a single fact (a &quot;needle&quot;) inside larger and
            larger piles of text (the &quot;haystack&quot;) and asking the model to find it. The result
            is consistent across every model: <strong>as the pile grows, the model gets worse at finding
            the needle.</strong> This is called <strong>context rot</strong>.
          </p>
          <div className="code-block">
            <pre>{`Recall accuracy as context fills up (the shape, not exact numbers):

  small context   ████████████████████  very reliable
  medium context  ███████████████░░░░░  slipping
  huge context    █████████░░░░░░░░░░░░  unreliable

It's a gradual slope, not a cliff - the model stays capable,
but it gets less precise the more you cram in.`}</pre>
          </div>
          <div className="info-box">
            <strong>Why this happens (one sentence):</strong> the model&apos;s architecture compares every
            token to every other token, so doubling the text roughly <em>quadruples</em> the relationships
            it has to juggle. Focus gets spread thin.
          </div>
        </section>

        <section className="section-card">
          <h2>Lost in the Middle</h2>
          <p>
            There&apos;s a second, sneakier effect. Models don&apos;t pay equal attention to all parts of
            the context. They reliably notice what&apos;s at the <strong>beginning</strong> and the
            <strong> end</strong>, and they tend to <em>miss things buried in the middle</em>. This famous
            finding is literally called <strong>&quot;lost in the middle.&quot;</strong>
          </p>
          <div className="code-block">
            <pre>{`Where the model actually pays attention:

  START   ███████████  strong   ← put your key facts here
  MIDDLE  ███░░░░░░░░░  weak     ← stuff gets lost here
  END     ███████████  strong   ← ...or here

So the ORDER you assemble context in matters as much as
what's in it. Bury the crucial fact in the middle of a
30,000-token wall and the model may never "see" it.`}</pre>
          </div>
          <div className="info-box">
            <strong>Practical rule:</strong> put the highest-signal material at the top or the bottom of
            the context - never in the soft middle of a giant block of retrieved text.
          </div>
        </section>

        <section className="section-card">
          <h2>The Real Cost of &quot;Just Dump Everything&quot;</h2>
          <p>
            The instinct when an agent fails is to give it <em>more</em> context, just to be safe. It
            feels responsible. It usually backfires three ways:
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Worse answers</strong>
              <p>Context rot and lost-in-the-middle kick in. Teams routinely find an agent does
                <em> worse</em> with a 100,000-token codebase dump than with a 5,000-token targeted slice.</p>
            </div>
            <div className="step">
              <strong>Higher cost</strong>
              <p>You pay per token. A bloated context is a bloated bill, on every single turn of a
                long-running loop.</p>
            </div>
            <div className="step">
              <strong>Slower responses</strong>
              <p>More tokens means more compute per step, so latency climbs. A chatty agent that re-reads
                a huge context every turn crawls.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>&quot;But Context Windows Keep Getting Bigger!&quot;</h2>
          <p>
            True - models now hold hundreds of thousands or even millions of tokens. Doesn&apos;t this
            problem just go away? <strong>No.</strong> A bigger desk doesn&apos;t fix bad desk management:
          </p>
          <div className="info-box">
            <strong>Why bigger windows don&apos;t save you:</strong>
            <ul>
              <li>Context rot and lost-in-the-middle still apply - even at 2 million tokens, you still
                want the model to see <em>just</em> what&apos;s useful.</li>
              <li>Cost and latency grow with size, so a giant context is expensive and slow even when it
                works.</li>
              <li>The discipline is permanent: as long as windows are finite (they always are), someone
                must decide what enters. That someone is the context engineer.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>The Mindset This Sets Up</h2>
          <p>
            Everything in the next five lessons flows from this one idea. Each pillar - instructions,
            retrieval, memory, tools - is really an answer to the question: <em>how do I spend my limited
            attention budget wisely?</em>
          </p>
          <div className="info-box">
            <strong>Carry this phrase through the whole level:</strong> <em>the smallest set of
            high-signal tokens.</em> Not the most context. The <em>best</em> context. Every technique
            you&apos;ll learn is a way to add signal or remove noise.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Feel the Rot</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Take a long document (a few thousand words). Paste a
            specific, unusual fact into the <em>middle</em> of it - e.g. &quot;the project codename is
            Blue Otter.&quot; Give the whole thing to an AI and ask a few unrelated questions, then near
            the end ask &quot;what is the project codename?&quot; Try it again with the fact at the very
            top instead. Notice whether placement changes how reliably it answers. You&apos;ve just
            demonstrated lost-in-the-middle with your own hands - and felt why <em>order</em> is part of
            the job.
          </div>
        </section>

        <QuickRef title="Lesson 66 Quick Reference" items={[
          { term: 'Attention budget', definition: 'The model\'s focus is finite; every token spends some of it, so more context can mean worse answers' },
          { term: 'Context rot', definition: 'As the context window fills, the model\'s ability to recall any specific fact gradually drops' },
          { term: 'Lost in the middle', definition: 'Models attend to the start and end of context far better than the middle - so order matters' },
          { term: 'Smallest high-signal set', definition: 'The goal: the fewest tokens that maximize the chance of the right outcome' },
          { term: 'Dumping backfires', definition: 'Too much context lowers quality, raises cost, and adds latency - all at once' },
          { term: 'Big windows don\'t save you', definition: 'Rot, lost-in-the-middle, cost, and latency persist even at millions of tokens' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson65', label: 'From Wording to Wiring' }}
          next={{ href: '/level8/lesson67', label: 'Pillar 1 - Instructions' }}
          currentLessonId="l8-66"
        />
      </main>
    </div>
  )
}
