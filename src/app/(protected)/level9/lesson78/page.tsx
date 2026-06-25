'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson78() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-78" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={78}
          duration={55}
          title="BMAD Part 3 - Build a Small App"
          subtitle="A complete worked example: take a Habit Tracker from a one-line idea to working, tested code using the full BMAD workflow"
        />

        <section className="section-card">
          <h2>The Project: a Habit Tracker</h2>
          <p>
            Let&apos;s build something small and real, all the way through, so the workflow stops being
            abstract. Our app: a <strong>Habit Tracker</strong> - add habits, check them off each day, see
            a streak. Small enough to follow end to end; real enough to show every BMAD step earning its
            keep.
          </p>
          <div className="info-box">
            <strong>How to read this lesson:</strong> each section is one BMAD step, with the <em>actual
            artifact</em> that step produces. You could literally type these into a BMAD-installed project
            and get this app. Follow along; build it for real if you can.
          </div>
        </section>

        <section className="section-card">
          <h2>Step 0 - Install &amp; Set the Constitution</h2>
          <p>BMAD installs into your project with one command, then you open your AI IDE:</p>
          <div className="code-block">
            <pre>{`npx bmad-method install
# follow the prompts, then open Claude Code / Cursor in the folder

# It creates a hidden folder of agent definitions, checklists,
# and templates - all plain text you can read and edit.`}</pre>
          </div>
          <p>First, the constitution - the house rules every later step must obey:</p>
          <div className="code-block">
            <pre>{`# constitution.md
- Stack: Next.js + TypeScript. Local storage only (no backend yet).
- Every feature ships with tests.
- Must work fully offline.
- Keyboard-accessible; usable on mobile.
- Keep it boring: no exotic libraries.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Step 1 - Brief (Analyst)</h2>
          <p>You tell the Analyst agent the idea; it interviews you and produces:</p>
          <div className="code-block">
            <pre>{`# brief.md
Problem:   People start habits and lose track after a few days.
Users:     Individuals who want a dead-simple daily check-in.
Solution:  A one-screen tracker: add habits, tap to mark done today,
           see current streak.
Constraints: Offline-only, no accounts, data stays on the device.
Risks:     Losing data if storage is cleared; streak logic across
           time zones / missed days.
Out of scope (v1): reminders, sharing, analytics, multiple devices.`}</pre>
          </div>
          <div className="info-box">
            <strong>Notice the &quot;Risks&quot; and &quot;Out of scope&quot; lines.</strong> The Analyst
            surfaced the streak/missed-day edge case <em>before</em> anyone wrote code. That&apos;s the
            whole point of planning first.
          </div>
        </section>

        <section className="section-card">
          <h2>Step 2 - PRD (Product Manager)</h2>
          <p>The PM turns the brief into requirements - using EARS from Lesson 74:</p>
          <div className="code-block">
            <pre>{`# prd.md

## Functional requirements
FR-1  WHEN a user types a name and submits, the app shall add a habit.
FR-2  WHEN a user taps a habit, the app shall toggle it done/undone for today.
FR-3  The app shall show each habit's current streak (consecutive days done).
FR-4  WHEN a user deletes a habit, the app shall remove it and its history.

## Non-functional requirements
NFR-1 The app shall load and be usable offline.
NFR-2 All data shall persist in local storage across refreshes.
NFR-3 Every action shall be reachable by keyboard.

## Epics
EPIC-A Habit management (FR-1, FR-4)
EPIC-B Daily tracking & streaks (FR-2, FR-3)`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Step 3 - Architecture (Architect)</h2>
          <div className="code-block">
            <pre>{`# architecture.md

Components:
  <App>          holds state, wires everything
  <AddHabit>     input + button → calls addHabit()
  <HabitList>    renders habits, handles tap-to-toggle
  <StreakBadge>  computes & shows streak for a habit

Data model (one habit):
  { id, name, history: { "2026-06-25": true, ... } }

Storage:  HabitStore module wraps localStorage (load/save).
          Nothing else touches localStorage directly.

Streak logic:  count back from today while history[day] === true.`}</pre>
          </div>
          <div className="info-box">
            <strong>The Architect made the data model explicit</strong> - and put one rule in place
            (&quot;only HabitStore touches localStorage&quot;) that will keep the codebase clean. That rule
            becomes a constraint in every story.
          </div>
        </section>

        <section className="section-card">
          <h2>Step 4 - Alignment (Product Owner)</h2>
          <p>The Product Owner checks the docs agree and shards the epics into ready-to-build stories:</p>
          <div className="code-block">
            <pre>{`Alignment check:
  ✓ Every FR maps to a component in architecture.md
  ✓ NFR-2 (persistence) covered by HabitStore
  ⚠ Streak across MISSED days unspecified → ask user
    → Decision: a missed day breaks the streak to 0. Added as FR-3a.

Sharded stories ready for dev:
  STORY-1  Add a habit            (FR-1)
  STORY-2  Persist with HabitStore (NFR-2)
  STORY-3  Toggle done today       (FR-2)
  STORY-4  Show streak             (FR-3, FR-3a)
  STORY-5  Delete a habit          (FR-4)`}</pre>
          </div>
          <div className="info-box">
            <strong>The alignment step caught a real gap</strong> (what happens to a streak on a missed
            day?) and forced a decision. In vibe coding, you&apos;d discover that bug in production.
          </div>
        </section>

        <section className="section-card">
          <h2>Step 5-6 - Story → Implement (one at a time)</h2>
          <p>The Scrum Master writes STORY-3 as a tight, self-contained file; the Developer builds just that:</p>
          <div className="code-block">
            <pre>{`# STORY-3: Toggle done today
Why:         FR-2 (prd.md).
Constraints: Update via HabitStore only (architecture.md).
             "Today" = device local date, YYYY-MM-DD.
Acceptance:
  - Tapping a habit marks it done for today; tapping again undoes it.
  - The change persists after refresh.
  - Toggling does not affect other days' history.
Out of scope: streak display (STORY-4).

→ Developer builds on branch "story-3-toggle", writes the tests
  from the Acceptance list, runs them green, opens a PR.`}</pre>
          </div>
          <div className="info-box">
            <strong>The Developer never saw the whole app at once</strong> - just this story&apos;s tight
            context. That&apos;s why the output stays focused and correct. Repeat for STORY-1, 2, 4, 5.
          </div>
        </section>

        <section className="section-card">
          <h2>Step 7-8 - QA, Merge, Repeat</h2>
          <div className="code-block">
            <pre>{`On each PR:
  ✓ Automated tests run (the ones from the story's Acceptance list)
  ✓ Lint + security scan pass
  ✓ QA agent reviews against the story and the constitution
  ✓ Human approves → merge → STORY-3 done

Then STORY-4 begins. After all five stories: a working, tested,
fully-documented Habit Tracker - and a Git history where every line
traces back to a requirement.`}</pre>
          </div>
          <p>
            That last sentence is the payoff. Six months later, anyone can ask &quot;why does the streak
            reset on a missed day?&quot; and follow it straight back to FR-3a and the alignment decision.
          </p>
        </section>

        <section className="section-card">
          <h2>Best Practices From the Build</h2>
          <div className="info-box">
            <strong>What made this go well (steal these):</strong>
            <ul>
              <li><strong>Keep dev agents lean.</strong> Give the Developer only the story + the relevant
                architecture slice - not the whole repo. Context bloat (Level 8!) kills quality.</li>
              <li><strong>Plan in a cheap tool.</strong> Do the brief/PRD in a flat-rate ChatGPT or Gemini
                (BMAD &quot;web bundles&quot;), then bring the docs into your coding IDE. Saves real money.</li>
              <li><strong>Pilot on something small first.</strong> Learn the workflow on a low-risk app
                (like this one) before betting a real project on it.</li>
              <li><strong>Commit every artifact.</strong> Brief, PRD, architecture, stories - all in Git.
                The docs are the product; treat them like it.</li>
              <li><strong>Use the control manifest.</strong> Set allowed libraries and exclusion zones up
                front so the agents can&apos;t wander.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Run the Whole Thing</h2>
          <div className="hands-on-box">
            <strong>Hands-on (25 min):</strong> Pick a different tiny app (a water-intake tracker, a flash-card
            app, a tip splitter). Without installing anything, manually role-play BMAD in any AI chat:
            produce a <em>brief</em>, then a <em>PRD</em> (with EARS FRs + NFRs), then a short
            <em> architecture</em>, then <em>shard</em> it into 3-5 stories, then write <em>one</em> full
            story file. Stop there. You&apos;ll have done real agentic planning by hand - and you&apos;ll
            feel exactly how much &quot;build me this app&quot; was leaving to chance. This is the backbone
            of your capstone.
          </div>
        </section>

        <QuickRef title="Lesson 78 Quick Reference" items={[
          { term: 'npx bmad-method install', definition: 'Installs BMAD agent definitions, checklists, and templates into your project as plain text' },
          { term: 'Plan first, code later', definition: 'Brief → PRD → architecture → alignment all happen before a single line of code' },
          { term: 'Alignment catches gaps', definition: 'The Product Owner check surfaced the missed-day streak decision before it became a bug' },
          { term: 'One story, tight context', definition: 'The Developer builds a single sharded story on a branch - never the whole app at once' },
          { term: 'Keep dev agents lean', definition: 'Give the Developer only the story + relevant architecture; context bloat kills quality' },
          { term: 'Plan in a cheap tool', definition: 'Use BMAD web bundles (flat-rate ChatGPT/Gemini) for planning, then code in your IDE' },
          { term: 'Traceable history', definition: 'Every merged line traces back to a requirement - months later you can still answer "why?"' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson77', label: 'BMAD Part 2 - The Workflow' }}
          next={{ href: '/level9/lesson79', label: 'LID - Linked Intent Development' }}
          currentLessonId="l9-78"
        />
      </main>
    </div>
  )
}
