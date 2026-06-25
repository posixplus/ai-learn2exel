'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson68() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-68" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={68}
          duration={45}
          title="Pillar 2 - Retrieval"
          subtitle="How outside facts get onto the desk: the difference between handing the model everything up front and letting it grab what it needs, just in time"
        />

        <section className="section-card">
          <h2>The Question This Pillar Answers</h2>
          <p>
            A model only knows two things: what it learned during training, and what you put in its
            context window. For anything specific to <em>your</em> world - your files, your data, today&apos;s
            ticket - someone has to <strong>fetch it and put it on the desk</strong>. That fetching is
            <strong> retrieval</strong>, and doing it well is the single biggest source of correct answers
            (and doing it badly is the single biggest source of made-up ones).
          </p>
          <div className="info-box">
            <strong>Back to the analogy:</strong> retrieval is reaching into the backpack and putting the
            right item on the desk. The whole skill is grabbing the <em>right</em> thing - not dumping the
            entire bag out (that&apos;s the attention-budget disaster from Lesson 66).
          </div>
        </section>

        <section className="section-card">
          <h2>Two Styles: Up Front vs. Just in Time</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Up-front retrieval (classic RAG)</strong>
              <p>Before the model starts, you search a library of documents, grab the most relevant
                chunks, and load them into context. (RAG = &quot;retrieval-augmented generation.&quot;)
                Fast, because the data&apos;s already there - but you have to guess what&apos;s relevant
                <em> before</em> the model has even thought about the problem.</p>
            </div>
            <div className="step">
              <strong>Just-in-time retrieval (the agentic way)</strong>
              <p>Instead of pre-loading everything, you give the model lightweight <em>pointers</em> - file
                paths, search commands, links - and let it pull the actual content <em>when it decides it
                needs it</em>. Slower per step, but the model fetches based on what it&apos;s actually
                discovering.</p>
            </div>
          </div>
          <div className="code-block">
            <pre>{`UP-FRONT (RAG)
  search docs → grab top chunks → stuff into context → start
  good when: you know what's relevant ahead of time

JUST-IN-TIME
  give the model: file paths, a search tool, a database query tool
  model decides: "I need to see auth/middleware.ts" → reads it now
  good when: the relevant info depends on what the model finds`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Why Just-in-Time Mirrors How You Work</h2>
          <p>
            You don&apos;t memorize your whole filing cabinet before starting a task. You keep an
            <em> index</em> - folders, file names, bookmarks - and pull the specific thing when you need
            it. Just-in-time retrieval gives the model the same superpower.
          </p>
          <div className="info-box">
            <strong>A neat side effect - &quot;progressive disclosure&quot;:</strong> the pointers
            themselves carry clues. A file named <code>test_utils.py</code> in a <code>/tests</code> folder
            tells the model something <em>before</em> it even opens the file. Folder names, file sizes, and
            timestamps all help the model decide what&apos;s worth grabbing. It discovers the right context
            layer by layer, keeping its desk clear.
          </div>
        </section>

        <section className="section-card">
          <h2>The Hybrid That Usually Wins</h2>
          <p>
            In practice the best agents mix both. Anthropic&apos;s own Claude Code is the textbook example:
          </p>
          <div className="code-block">
            <pre>{`Claude Code's hybrid retrieval:

  UP FRONT      drop CLAUDE.md into context at the start
                (the standing project rules - always relevant)

  JUST IN TIME  give it grep + glob + file-read tools
                (let it hunt down the exact files it needs,
                 fresh, instead of relying on a stale pre-built index)`}</pre>
          </div>
          <p>
            The always-relevant stuff (project conventions) goes in up front. The
            <em> depends-on-the-task</em> stuff (which files?) is fetched just in time. Best of both: no
            stale index, no bloated desk.
          </p>
        </section>

        <section className="section-card">
          <h2>Bad Retrieval Is the #1 Source of Wrong Answers</h2>
          <p>
            When an agent confidently states something false, retrieval is usually the culprit. Three
            classic ways it goes wrong:
          </p>
          <div className="info-box">
            <strong>Retrieval failure modes:</strong>
            <ul>
              <li><strong>Too much:</strong> a search returns 4,000 hits, you dump them all in, and the
                real answer drowns (context overload).</li>
              <li><strong>Stale:</strong> your pre-built index is months old, so the model reads a
                deprecated function and confidently calls it. Freshness matters.</li>
              <li><strong>Off-target:</strong> the search grabbed plausible-looking but irrelevant chunks,
                and the model reasons over the wrong facts.</li>
            </ul>
            The cure is almost never &quot;less retrieval&quot; - it&apos;s <em>better-targeted</em>
            retrieval, which we&apos;ll make concrete in Lesson 71 with re-ranking.
          </div>
        </section>

        <section className="section-card">
          <h2>For Coding Agents: Structure Beats Guessing</h2>
          <p>
            A quick real-world note (you don&apos;t need to build this, just understand it). For code, plain
            text search is weak - searching for a function name returns every file that <em>mentions</em>
            it. &quot;Code-intelligence&quot; tools instead understand structure: they can return the
            <em> one</em> place a function is defined plus its exact call sites. In published benchmarks,
            giving an agent structure-aware retrieval turned tasks that <em>timed out after two hours</em>
            into ones that finished in under two minutes. That gap is entirely context engineering - same
            model, better retrieval.
          </p>
        </section>

        <section className="section-card">
          <h2>Hands-On: Up Front vs. Just in Time</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Pick a question that needs a specific document you have
            (a policy, a README, a spec). Try it two ways with an AI assistant. First, paste the
            <em> entire</em> document and ask. Second, paste only a <em>table of contents or file list</em>
            and say &quot;tell me which section you&apos;d need, then I&apos;ll give you just that.&quot;
            Compare the answers and the effort. You&apos;ll feel the trade-off between pre-loading
            everything and letting the model ask for exactly what it needs.
          </div>
        </section>

        <QuickRef title="Lesson 68 Quick Reference" items={[
          { term: 'Retrieval', definition: 'Fetching outside facts (files, data, search results) into the context window so the model can use them' },
          { term: 'RAG (up-front retrieval)', definition: 'Search a document library and load the top relevant chunks before the model starts' },
          { term: 'Just-in-time retrieval', definition: 'Give the model pointers (paths, queries) and let it pull the actual content only when it needs it' },
          { term: 'Progressive disclosure', definition: 'File names, folders, sizes, timestamps act as clues so the model discovers the right context layer by layer' },
          { term: 'Hybrid', definition: 'Load always-relevant info up front (CLAUDE.md), fetch task-specific info just in time (grep/file reads)' },
          { term: 'Retrieval failures', definition: 'Too much, stale, or off-target retrieval is the #1 source of wrong/hallucinated answers' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson67', label: 'Pillar 1 - Instructions' }}
          next={{ href: '/level8/lesson69', label: 'Pillar 3 - Memory' }}
          currentLessonId="l8-68"
        />
      </main>
    </div>
  )
}
