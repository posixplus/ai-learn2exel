'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson46() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-46" />
      <main className="lesson-main">
        <LessonHeader
          level={5}
          lessonNumber={46}
          duration={45}
          title="Agentic Coding"
          subtitle="Let AI autonomously plan, write, test, and iterate on multi-file tasks"
        />

        <section className="section-card">
          <h2>What Is Agentic Coding?</h2>
          <p>
            Traditional AI assistance is reactive - you prompt, it responds. Agentic coding
            flips that model: you describe a goal, and the AI agent autonomously plans steps,
            reads files, writes code, runs tests, and iterates until the task is done.
          </p>
          <div className="info-box">
            <strong>The shift:</strong> You move from writing code line-by-line to directing
            an AI collaborator at the task level. Your job becomes: defining the goal clearly,
            reviewing the agent's work, and course-correcting when it goes off track.
          </div>
          <p>
            Claude Code, Cursor Composer, and Copilot Workspace all implement agentic coding
            with different strengths. Claude Code is the most powerful for terminal-native workflows.
          </p>
        </section>

        <section className="section-card">
          <h2>Claude Code Agent Mode</h2>
          <p>
            Claude Code can autonomously explore your codebase, make multi-file edits, run
            shell commands, and iterate based on test output - all in one session.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Step 1 - Give a high-level task description</strong>
              <div className="code-block">
                <pre>{`# In your project directory:
claude

# Then describe the task:
"Add a rate limiting middleware to the Express API.
It should limit to 100 requests per IP per 15 minutes,
return 429 with a Retry-After header when exceeded,
and use Redis for distributed tracking across instances.
Add unit tests for the middleware."`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 2 - Let the agent explore and plan</strong>
              <p>
                Claude Code reads your existing middleware files, package.json, and test structure
                before writing anything. It proposes a plan - you can approve or redirect.
              </p>
            </div>
            <div className="step">
              <strong>Step 3 - Review changes as they come</strong>
              <div className="code-block">
                <pre>{`# Claude Code shows each file change with a diff:
# Created: src/middleware/rateLimiter.ts
# Modified: src/app.ts (added middleware)
# Created: tests/middleware/rateLimiter.test.ts

# It then runs: npm test
# If tests fail, it reads the error and iterates automatically`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 4 - Accept, reject, or redirect</strong>
              <p>
                Use <code>y</code> to accept changes, <code>n</code> to reject, or type a
                correction to redirect the agent mid-task.
              </p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Cursor Composer for Multi-File Tasks</h2>
          <p>
            Cursor Composer (Cmd+I) is Cursor's agentic mode. It operates across multiple files
            and is excellent for UI-heavy tasks where you want to see changes in context.
          </p>
          <div className="code-block">
            <pre>{`# Example Composer prompts:
"Create a settings page with tabs for Profile, Notifications,
and Security. Each tab should load lazily. Use our existing
Button and Input components from src/components/ui/"

"Refactor the authentication flow to use React Query instead
of local useState. Update all 4 auth-related components."

"Add dark mode support. Create a ThemeContext, update globals.css
with CSS variables, and add a toggle to the navbar."`}</pre>
          </div>
          <div className="info-box">
            <strong>Composer tip:</strong> Reference specific files with @filename to give
            the agent context. Example: "Given @src/types/User.ts and @src/api/users.ts,
            generate a user profile page component."
          </div>
        </section>

        <section className="section-card">
          <h2>Writing Effective Agent Prompts</h2>
          <p>Agentic tasks need more structure than chat prompts. Include:</p>
          <div className="code-block">
            <pre>{`# Template for effective agent prompts:

"[TASK]: What to build or change
[CONTEXT]: Relevant files, existing patterns, constraints
[REQUIREMENTS]: Specific behavior, edge cases to handle
[OUTPUT]: Where to put files, naming conventions, tests needed
[DO NOT]: Things to avoid or leave unchanged"

# Example:
"TASK: Add CSV export to the user reports table
CONTEXT: See src/components/ReportsTable.tsx for the table structure.
  Data comes from /api/reports endpoint returning UserReport[]
REQUIREMENTS:
  - Export current filtered view (not full dataset)
  - Show download progress for large exports
  - Filename: reports_YYYY-MM-DD.csv
OUTPUT: Add ExportButton component in src/components/
  Add /api/reports/export endpoint in src/api/
  Unit test for the endpoint
DO NOT: Modify the existing table component"`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Agentic Task Patterns That Work Well</h2>
          <p>Some task types are especially well-suited for agentic coding:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Scaffolding new features</strong>
              <p>
                "Create a new blog module with model, API routes, and CRUD operations
                following the pattern in the existing products module."
              </p>
            </div>
            <div className="step">
              <strong>Large-scale refactors</strong>
              <p>
                "Migrate all API calls from the old axios wrapper to our new fetch client.
                Update all 12 service files."
              </p>
            </div>
            <div className="step">
              <strong>Adding cross-cutting concerns</strong>
              <p>
                "Add structured logging to every API route. Use the existing logger from
                src/lib/logger.ts. Log request method, path, status, and duration."
              </p>
            </div>
            <div className="step">
              <strong>Test generation at scale</strong>
              <p>
                "Write comprehensive tests for every public function in src/utils/.
                Aim for 100% branch coverage. Use vitest, follow patterns in existing tests."
              </p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Staying in Control of Agents</h2>
          <p>
            Agentic AI is powerful but can go in unintended directions. Stay in control:
          </p>
          <div className="code-block">
            <pre>{`# Best practices for agentic workflows:

# 1. Always start in a clean git state
git status  # should be clean before starting an agent task
git checkout -b feat/ai-rate-limiter  # work on a branch

# 2. Review every file change before accepting
# Never blindly 'accept all' without reading the diffs

# 3. Run your own tests after the agent finishes
npm test  # verify nothing is broken beyond the target area

# 4. Set scope boundaries in your prompt
"Only modify files in src/middleware/. Do not change app.ts."

# 5. Use checkpoints - commit working states
git commit -m "chore: checkpoint before AI refactor"`}</pre>
          </div>
          <div className="info-box">
            <strong>Rule of thumb:</strong> The bigger the agentic task, the more important
            your review. AI agents are excellent at execution but they don't know your
            system's quirks, unwritten rules, or business constraints - you do.
          </div>
        </section>

        <section className="section-card">
          <h2>Copilot Workspace (GitHub)</h2>
          <p>
            Copilot Workspace takes agentic coding to the PR level. From a GitHub Issue,
            it plans, implements, and opens a PR - all from the browser.
          </p>
          <div className="code-block">
            <pre>{`# Workflow:
1. Open a GitHub Issue describing the feature or bug
2. Click "Open in Copilot Workspace"
3. Copilot generates a plan (files to change, approach)
4. Review and edit the plan before execution
5. Copilot implements the changes across the repo
6. You review the diff and open a PR directly

# Best for:
# - Well-defined issues with clear acceptance criteria
# - Teams using GitHub Issues as the source of truth
# - Changes confined to a specific module or feature area`}</pre>
          </div>
          <div className="hands-on-box">
            <strong>Hands-on:</strong> Open Claude Code in a project and give it an agentic
            task: "Add input validation to all POST endpoints in this API. Return 400 with
            descriptive error messages for invalid data." Let it run, then review every
            file it modified before accepting.
          </div>
        </section>

        <QuickRef title="Lesson 46 Quick Reference" items={[
          { term: 'Agentic coding', definition: 'Describe a goal; AI plans, writes, runs tests, and iterates autonomously' },
          { term: 'Claude Code agent', definition: 'Run claude in project dir, describe task - it reads files and makes multi-file edits' },
          { term: 'Cursor Composer', definition: 'Cmd+I for multi-file agentic tasks; use @filename for context' },
          { term: 'Agent prompt structure', definition: 'TASK + CONTEXT + REQUIREMENTS + OUTPUT + DO NOT' },
          { term: 'Best tasks for agents', definition: 'Scaffolding, large refactors, cross-cutting concerns, bulk test generation' },
          { term: 'Stay in control', definition: 'Clean git state, work on branch, review every diff, run tests yourself' },
          { term: 'Copilot Workspace', definition: 'GitHub Issues → plan → implement → PR, all in the browser' },
        ]} />

        <LessonNav
          level={5}
          prev={{ href: '/level5/lesson45', label: 'Git Workflow with AI' }}
          next={{ href: '/level5/lesson47', label: 'Custom AI Extensions & Agents' }}
          currentLessonId="l5-46"
        />
      </main>
    </div>
  )
}
