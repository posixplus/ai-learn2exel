'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson70() {
  return (
    <div className="lesson-layout">
      <Sidebar level={8} currentLessonId="l8-70" />
      <main className="lesson-main">
        <LessonHeader
          level={8}
          lessonNumber={70}
          duration={40}
          title="Pillar 4 - Tools"
          subtitle="Tools are the actions an agent can take. The biggest mistake is giving it too many - fewer, clearer tools beat a giant cluttered toolbox"
        />

        <section className="section-card">
          <h2>What Tools Are, in Context Terms</h2>
          <p>
            Tools are the actions an agent can take in the world: run a command, search files, query a
            database, send a message. In Level 1 you learned tools <em>let agents do things</em>. Here&apos;s
            the context-engineering angle: <strong>every tool you give the agent also costs context.</strong>
            Each tool&apos;s description sits on the desk, taking up the attention budget, whether or not
            it&apos;s ever used.
          </p>
          <div className="info-box">
            <strong>The reframe:</strong> a tool isn&apos;t free just because it&apos;s &quot;available.&quot;
            Ten tool descriptions are ten things cluttering the desk and ten choices the model has to weigh
            every turn. Tools are a budget line item, not a freebie.
          </div>
        </section>

        <section className="section-card">
          <h2>The #1 Failure: Bloated Tool Sets</h2>
          <p>
            Anthropic names this as one of the most common failure modes they see, and it&apos;s worth
            memorizing the rule because it&apos;s blunt and useful:
          </p>
          <div className="info-box">
            <strong>The rule:</strong> &quot;If a human engineer can&apos;t definitively say which tool
            should be used in a given situation, an AI agent can&apos;t be expected to do better.&quot;
            <br /><br />
            When you hand the model two tools that overlap - say <code>search_files</code> and
            <code> find_in_repo</code> that do almost the same thing - you force it to <em>burn a turn
            deciding</em>, and it&apos;ll sometimes pick wrong. Ambiguity is the enemy.
          </div>
        </section>

        <section className="section-card">
          <h2>What Good Tools Look Like</h2>
          <p>The same qualities that make a tool good for a <em>human</em> teammate make it good for an agent:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Minimal and non-overlapping</strong>
              <p>The smallest set that covers the job, with no two tools competing for the same situation.
                When in doubt, cut a tool.</p>
            </div>
            <div className="step">
              <strong>Token-efficient</strong>
              <p>A tool should return <em>useful, compact</em> results - not a 4,000-line dump. If a tool
                floods the desk every time it&apos;s called, it&apos;ll wreck the budget.</p>
            </div>
            <div className="step">
              <strong>Crystal-clear purpose</strong>
              <p>A self-explanatory name and description, with unambiguous inputs. The model should never
                have to guess what a tool does or which one to reach for.</p>
            </div>
            <div className="step">
              <strong>Robust to mistakes</strong>
              <p>Good tools give helpful errors (&quot;path not found, did you mean...&quot;) so the agent
                can recover instead of spiraling.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Fewer Tools, Better Agent</h2>
          <p>
            The instinct is to give the agent <em>every</em> capability up front, &quot;just in case.&quot;
            Resist it. The right number of tools is almost always smaller than your first version shipped
            with.
          </p>
          <div className="code-block">
            <pre>{`BLOATED (12 tools)              TIGHT (4 tools)
  search_files                    search        ← one clear search
  find_in_repo                    read_file
  grep_code                       run_command
  semantic_search                 open_pr
  read_file
  cat_file          ← overlap!    Easy for the model to choose.
  view_document                   Every tool earns its desk space.
  run_command
  exec_shell        ← overlap!
  open_pr
  create_pull_request ← overlap!
  ...the model wastes turns choosing`}</pre>
          </div>
          <div className="info-box">
            <strong>Bonus benefit:</strong> a tight tool set is also easier to <em>maintain</em> and easier
            to <em>prune</em> over long interactions. Less to keep clean.
          </div>
        </section>

        <section className="section-card">
          <h2>MCP: How Tools Plug In</h2>
          <p>
            You met <strong>MCP (Model Context Protocol)</strong> in Levels 1 and 7 - the &quot;USB
            port&quot; standard for connecting tools to agents. In context-engineering terms, MCP is how
            the tool pillar is wired up: a standard way to expose a search, a database, or an API as a tool
            the agent can call. The same context-budget rules apply: just because MCP makes it <em>easy</em>
            to add 30 tools doesn&apos;t mean you should. Add the few that earn their place.
          </p>
        </section>

        <section className="section-card">
          <h2>The Four Pillars, Assembled</h2>
          <p>
            That completes the four pillars. Each is a different slice of the desk, and each follows the
            same north star from Lesson 66:
          </p>
          <div className="code-block">
            <pre>{`INSTRUCTIONS  → the right altitude (clear, not brittle, not vague)
RETRIEVAL     → the right facts, just in time, not a data dump
MEMORY        → keep what matters, compact/note/isolate the rest
TOOLS         → few, clear, non-overlapping, token-efficient

All four answer one question: how do I spend a finite
attention budget to get the smallest high-signal desk?`}</pre>
          </div>
          <p>Next lesson: how all four get <em>assembled and pruned</em> into the final context, every turn.</p>
        </section>

        <section className="section-card">
          <h2>Hands-On: Cut the Toolbox</h2>
          <div className="hands-on-box">
            <strong>Hands-on (10 min):</strong> Imagine an agent that manages your email. Brainstorm every
            tool you <em>could</em> give it (read, send, search, label, archive, snooze, draft, summarize,
            translate, schedule...). Now be ruthless: cut it to the <strong>four</strong> tools that
            cover 90% of real use, with no two overlapping. Write a one-line, unambiguous description for
            each. Notice how much easier it is to imagine the agent choosing correctly with four clear
            tools than with twelve fuzzy ones. That&apos;s the tool pillar in action.
          </div>
        </section>

        <QuickRef title="Lesson 70 Quick Reference" items={[
          { term: 'Tools cost context', definition: 'Every tool definition sits in the window using attention budget, whether or not it is used' },
          { term: 'Bloated tool sets', definition: 'The #1 tool failure - too many or overlapping tools force the model to waste turns choosing (and choose wrong)' },
          { term: 'The human test', definition: 'If a human can\'t say which tool to use in a situation, the agent can\'t either - remove the ambiguity' },
          { term: 'Good tools', definition: 'Minimal, non-overlapping, token-efficient results, crystal-clear purpose, helpful errors' },
          { term: 'Fewer is better', definition: 'The right tool count is almost always smaller than your first version; when in doubt, cut one' },
          { term: 'MCP', definition: 'The standard for wiring tools into agents - easy to add many, but the budget rules still apply' },
        ]} />

        <LessonNav
          level={8}
          prev={{ href: '/level8/lesson69', label: 'Pillar 3 - Memory' }}
          next={{ href: '/level8/lesson71', label: 'Assembling Context' }}
          currentLessonId="l8-70"
        />
      </main>
    </div>
  )
}
