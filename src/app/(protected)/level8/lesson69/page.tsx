'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson69() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-69" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={69}
          duration={45}
          title="Pillar 3 - Memory"
          subtitle="The model forgets everything between turns. Memory is how an agent stays coherent across a long task - and across days"
        />

        <section className="section-card">
          <h2>The Two Kinds of Memory</h2>
          <p>
            By default, a model only &quot;remembers&quot; what&apos;s currently on the desk. Clear the
            desk and it&apos;s a blank slate. To run real tasks, agents need memory - and it comes in two
            flavors that solve two different problems.
          </p>
          <div className="code-block">
            <pre>{`SHORT-TERM MEMORY   the conversation so far (this session)
                    every message, tool call, and tool result
                    → problem: it fills up the desk fast

LONG-TERM MEMORY    info that survives across sessions
                    preferences, project conventions, past summaries
                    → lives in the filing cabinet, pulled in when needed`}</pre>
          </div>
          <div className="info-box">
            <strong>Analogy refresher:</strong> short-term memory is what&apos;s piled on the desk during
            today&apos;s work. Long-term memory is the filing cabinet you reach into across days. Context
            engineering manages the flow between them.
          </div>
        </section>

        <section className="section-card">
          <h2>The Problem Memory Creates (and Solves)</h2>
          <p>
            Short-term memory is a double-edged sword. The agent needs the conversation history to stay
            coherent - but that history is exactly what fills the context window and triggers the rot from
            Lesson 66. A two-hour task generates far more conversation than fits on the desk.
          </p>
          <p>So context engineering gives us three tools to manage memory over long tasks:</p>
          <div className="code-block">
            <pre>{`1. COMPACTION       - summarize the old conversation, start fresh
2. NOTE-TAKING      - write notes to a file outside the window
3. SUB-AGENTS       - give side-quests their own clean desk`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Tool 1 - Compaction</h2>
          <p>
            <strong>Compaction</strong> is the first thing you reach for. When the conversation nears the
            desk&apos;s limit, you have the model <em>summarize</em> what happened so far, then start a
            fresh context window with just that summary. The agent keeps going with almost no loss of
            coherence.
          </p>
          <div className="info-box">
            <strong>How Claude Code does it:</strong> it summarizes the history but deliberately
            <em> preserves</em> the important stuff - architectural decisions, unresolved bugs, key
            implementation details - while throwing away redundant tool outputs. It then continues with
            that summary plus the few most recently touched files.
            <br /><br />
            <strong>The art</strong> is in what you keep vs. discard. Too aggressive and you lose a subtle
            detail that mattered. The safest, easiest win: clear out old <em>tool results</em> - once a
            search has been read, the raw output rarely needs to stay on the desk.
          </div>
        </section>

        <section className="section-card">
          <h2>Tool 2 - Structured Note-Taking</h2>
          <p>
            This is the same trick you learned as the <strong>state file</strong> in Level 7 - here it&apos;s
            a memory technique. The agent writes notes to a file <em>outside</em> the context window (a
            <code> NOTES.md</code>, a to-do list, a scratchpad) and pulls them back in when relevant.
            Simple, and shockingly powerful.
          </p>
          <div className="info-box">
            <strong>The Pokémon example (really):</strong> when Claude was set loose to play Pokémon over
            thousands of game steps, it kept its own notes - maps of explored areas, which attacks beat
            which enemies, progress toward goals (&quot;Pikachu has gained 8 levels toward 10&quot;). After
            its desk got cleared, it re-read its notes and kept going for hours. No human told it how to
            structure the memory; the <em>ability to write notes outside the window</em> was enough.
          </div>
          <p>
            For your work, that&apos;s a <code>NOTES.md</code> tracking what&apos;s done, what&apos;s left,
            and the gotchas - exactly the spine of any long-running agent.
          </p>
        </section>

        <section className="section-card">
          <h2>Tool 3 - Sub-Agents for Clean Desks</h2>
          <p>
            You met sub-agents in Level 7 (maker vs. checker). They&apos;re <em>also</em> a memory
            technique. The idea: a messy side-quest shouldn&apos;t clutter the main agent&apos;s desk.
          </p>
          <div className="code-block">
            <pre>{`Main agent: holds the high-level plan (small, tidy desk)
   │
   ├─ sub-agent: "go research X"  → burns 40,000 tokens exploring
   │             on its OWN clean desk, then returns a
   │             1,500-token summary
   │
   └─ main agent receives only the tidy summary - never sees
      the 40,000 tokens of mess`}</pre>
          </div>
          <div className="info-box">
            <strong>Why it&apos;s a memory win:</strong> the deep, messy work stays isolated in the
            sub-agent&apos;s window. The main agent&apos;s desk stays clean and focused on the big picture.
            This is how agents tackle research too big for one context window.
          </div>
        </section>

        <section className="section-card">
          <h2>Which Tool, When</h2>
          <div className="code-block">
            <pre>{`COMPACTION    best for: long back-and-forth conversations that
              need to keep flowing (chat-style work)

NOTE-TAKING   best for: step-by-step tasks with clear milestones
              (build this, then that - track progress on disk)

SUB-AGENTS    best for: big research/analysis where parallel
              deep dives each need their own room`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Compact a Conversation</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Take a long chat you&apos;ve had with an AI (or make a
            quick one with several twists). Ask it: &quot;Summarize everything we&apos;ve decided so far -
            keep decisions, open questions, and key details; drop the chit-chat - so I could paste this
            into a fresh chat and continue seamlessly.&quot; Read the summary critically: did it keep the
            important things and drop the noise? That judgment - what survives the summary - is the core
            skill of compaction, and you just practiced it.
          </div>
        </section>

        <QuickRef title="Lesson 69 Quick Reference" items={[
          { term: 'Short-term memory', definition: 'The current conversation (messages, tool calls/results) - coherent but fills the window fast' },
          { term: 'Long-term memory', definition: 'Info that persists across sessions: preferences, conventions, past summaries - pulled in when needed' },
          { term: 'Compaction', definition: 'Summarize the old conversation and restart the window with the summary; keep decisions, drop redundant tool output' },
          { term: 'Structured note-taking', definition: 'The agent writes notes to a file outside the window (NOTES.md) and re-reads them - same idea as a state file' },
          { term: 'Sub-agents as memory', definition: 'Isolate messy deep work in a sub-agent\'s own window; the main agent gets only a tidy summary' },
          { term: 'Match tool to task', definition: 'Compaction for chats, note-taking for milestone tasks, sub-agents for big parallel research' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson68', label: 'Pillar 2 - Retrieval' }}
          next={{ href: '/level8/lesson70', label: 'Pillar 4 - Tools' }}
          currentLessonId="l8-69"
        />
      </main>
    </div>
  )
}
