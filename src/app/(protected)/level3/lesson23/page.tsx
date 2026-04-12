'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson23() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-23" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={23} duration={120}
            title="Claude Code Superuser"
            subtitle="Master every power feature: Git workflows, hooks, Plan Mode, and large codebase strategies" />

          <section className="section-card">
            <h2>Why Claude Code is Different</h2>
            <p>Claude Code is not AI autocomplete. It's an agentic system that reads your entire codebase, runs shell commands, edits files, creates branches, writes PRs, and executes multi-step plans autonomously. Most developers use 10% of what it can do.</p>
            <p>This lesson covers every power feature with real end-to-end examples you can follow along with.</p>
          </section>

          <section className="section-card">
            <h2>Essential CLI Commands</h2>
            <div className="steps-list">
              <div className="step"><strong><code>/help</code></strong><p>List all available commands. Run in every new environment.</p></div>
              <div className="step"><strong><code>/clear</code></strong><p>Clear conversation history, start fresh context. Use when switching between unrelated tasks.</p></div>
              <div className="step"><strong><code>/compact</code></strong><p>Summarize history into a compressed form, freeing context space while preserving key decisions. Essential for sessions over 30 min.</p></div>
              <div className="step"><strong><code>/cost</code></strong><p>Show token usage and estimated cost for the current session.</p></div>
              <div className="step"><strong><code>/model sonnet|opus|haiku</code></strong><p>Switch models mid-session. Upgrade to Opus for deep architecture work, back to Sonnet for implementation.</p></div>
              <div className="step"><strong><code>/init</code></strong><p>Auto-generate a CLAUDE.md for the current directory by analyzing your codebase. Start here on any new project.</p></div>
              <div className="step"><strong><code>/mcp</code></strong><p>List connected MCP servers and their available tools. Use to debug MCP connections.</p></div>
            </div>
          </section>

          <section className="section-card">
            <h2>Plan Mode — The Most Underused Feature</h2>
            <p>Plan Mode shows you exactly what Claude intends to do before it does anything. Critical for multi-file changes, refactors, and anything with significant blast radius.</p>
            <p>Trigger Plan Mode by starting your message with "Plan:" or "Show me a plan before making any changes."</p>
            <div className="steps-list">
              <div className="step">
                <strong>Real Example: You type this</strong>
                <pre>{`Plan: Refactor our authentication module to use JWT refresh token rotation. 
Currently in src/auth/session.ts.`}</pre>
              </div>
              <div className="step">
                <strong>Claude responds with a plan like this (before touching any file):</strong>
                <pre>{`## Plan: JWT Refresh Token Rotation Refactor

1. Read src/auth/session.ts — understand current session implementation
2. Read src/middleware.ts — see how sessions are used in request handling  
3. Read src/api/auth/login.ts — understand current login flow
4. Check package.json for existing JWT libraries (jsonwebtoken, jose, etc.)

Then I'll implement:
5. Add refreshToken field to User model in src/types/user.ts
6. Create src/auth/tokens.ts — JWT generation, validation, rotation logic
7. Update src/auth/session.ts — integrate new token utilities, add rotation logic
8. Update src/middleware.ts — check token expiry, auto-refresh if within 5 min
9. Update src/api/auth/login.ts — return both access + refresh tokens
10. Add src/api/auth/refresh.ts — new endpoint for token refresh
11. Write tests in src/auth/__tests__/tokens.test.ts
12. Run npm test — verify no regressions

Estimated files changed: 6. New files: 2.

Shall I proceed? (yes to start, or tell me what to change)`}</pre>
              </div>
              <div className="step">
                <strong>You can edit the plan before approving:</strong>
                <p>"Skip step 4, I know we use 'jose'. Add a step to update the API docs in docs/auth.md. Proceed."</p>
                <p>Claude incorporates your changes and starts executing — only after you approve.</p>
              </div>
            </div>
            <div className="info-box">
              <strong>Best practice:</strong> Always use Plan Mode for changes touching more than 2 files, or for anything you can't easily undo. You can edit the plan before approving — add, remove, or reorder steps.
            </div>
          </section>

          <section className="section-card">
            <h2>Git Integration End-to-End: Feature to Merged PR</h2>
            <p>Claude Code has deep Git awareness and can handle your entire PR workflow. Here's a complete real-world walkthrough:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Step 1: Start a feature branch</strong>
                <pre>{`You: Create a new branch for adding CSV export to the reports module.
      Follow our branch naming convention (feature/ticket-description).

Claude: 
$ git checkout -b feature/PROJ-142-csv-export-reports
Switched to a new branch 'feature/PROJ-142-csv-export-reports'

I've created branch feature/PROJ-142-csv-export-reports. Ready to start 
implementing — shall I read the reports module first to understand the 
existing structure?`}</pre>
              </div>
              <div className="step">
                <strong>Step 2: Implement with context</strong>
                <pre>{`You: Yes. Then add CSV export. The reports are in src/reports/.
      Use the existing data fetching pattern. Tests required.

Claude reads: src/reports/index.ts, src/reports/types.ts, src/utils/format.ts

Claude implements:
- src/reports/exporters/csv.ts (new)
- src/reports/index.ts (updated — adds export button)
- src/reports/__tests__/csv.test.ts (new)

Runs: npm test -- src/reports/__tests__/csv.test.ts
Result: 12 tests passed`}</pre>
              </div>
              <div className="step">
                <strong>Step 3: Commit with conventional format</strong>
                <pre>{`You: Commit these changes. Use conventional commits format.

Claude:
$ git add src/reports/exporters/csv.ts src/reports/index.ts src/reports/__tests__/csv.test.ts
$ git commit -m "feat(reports): add CSV export functionality

- Implements CsvExporter class in src/reports/exporters/csv.ts
- Adds export button to report header component  
- Handles empty datasets, special characters, and large exports (>10k rows)
- Includes 12 unit tests covering happy path and edge cases

Closes PROJ-142"

[feature/PROJ-142-csv-export-reports 3a8f92c] feat(reports): add CSV export...`}</pre>
              </div>
              <div className="step">
                <strong>Step 4: Create the PR (with GitHub MCP connected)</strong>
                <pre>{`You: Push and create a GitHub PR. Write a complete description.

Claude:
$ git push -u origin feature/PROJ-142-csv-export-reports

Creating PR via GitHub MCP...
Title: feat(reports): CSV export for all report types

Description:
## What this PR does
Adds CSV export functionality to the reports module. Users can now 
download any report as a CSV file with one click.

## Changes
- New CsvExporter class handles formatting, escaping, and streaming
- Export button added to report header (only visible to users with export permission)
- Handles edge cases: empty reports, special chars in data, reports >10k rows

## Testing
- 12 unit tests added (all passing)
- Manual testing: exported 3 different report types, verified in Excel and Google Sheets
- Performance tested with 50k row dataset — exports in under 2 seconds

## How to test
1. Go to any report → click the new "Export CSV" button in the top right
2. Verify download starts immediately
3. Open CSV in your preferred spreadsheet app

Closes #142

PR created: https://github.com/your-org/your-repo/pull/287`}</pre>
              </div>
              <div className="step">
                <strong>Step 5: Handle review feedback</strong>
                <pre>{`Reviewer comment: "The CSV exporter should handle timezone conversion 
for date fields — currently outputting UTC."

You (to Claude): Fix the timezone issue the reviewer mentioned in PR #287.

Claude reads the review comment via GitHub MCP, finds the date formatting 
code in csv.ts, adds timezone conversion using the user's locale setting,
commits as "fix(reports): convert date fields to user timezone in CSV export",
pushes, and replies to the review comment with a summary of the fix.`}</pre>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Hooks in Practice: 3 Real Working Configs</h2>
            <p>Hooks let you run code at specific points in Claude's operation. Here are three production-ready hook configurations for <code>~/.claude/settings.json</code>:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Hook 1: macOS Notification when Claude finishes a long task</strong>
                <pre>{`{
  "hooks": {
    "notification": [
      {
        "command": "osascript -e 'display notification \"Claude needs your attention\" with title \"Claude Code\" sound name \"Glass\"'"
      }
    ]
  }
}`}</pre>
                <p>Now when Claude finishes a multi-step task and is waiting for you, your Mac plays a sound and shows a notification. Great for tasks you kick off and then switch away from.</p>
              </div>
              <div className="step">
                <strong>Hook 2: Audit log of every file Claude edits</strong>
                <pre>{`{
  "hooks": {
    "post_tool_call": [
      {
        "matcher": { "tool_name": "write_file" },
        "command": "echo \"$(date '+%Y-%m-%d %H:%M:%S') EDITED: $TOOL_INPUT_PATH\" >> ~/claude-audit.log"
      },
      {
        "matcher": { "tool_name": "edit_file" },
        "command": "echo \"$(date '+%Y-%m-%d %H:%M:%S') EDITED: $TOOL_INPUT_path\" >> ~/claude-audit.log"
      }
    ]
  }
}`}</pre>
                <p>Creates <code>~/claude-audit.log</code> with a timestamped entry every time Claude edits or creates a file. Check <code>cat ~/claude-audit.log</code> to see everything Claude has touched in a session.</p>
              </div>
              <div className="step">
                <strong>Hook 3: Auto-run tests after Claude edits test files</strong>
                <pre>{`{
  "hooks": {
    "post_tool_call": [
      {
        "matcher": {
          "tool_name": "write_file",
          "tool_input_contains": ".test.ts"
        },
        "command": "cd $(dirname $TOOL_INPUT_PATH) && npm test -- $(basename $TOOL_INPUT_PATH) --passWithNoTests 2>&1 | tail -20"
      }
    ]
  }
}`}</pre>
                <p>Every time Claude writes a <code>.test.ts</code> file, this hook automatically runs that specific test file and shows you the last 20 lines of output. You see test results immediately without asking Claude to run them.</p>
              </div>
            </div>
            <div className="info-box">
              <strong>Available environment variables in hooks:</strong> <code>$TOOL_NAME</code>, <code>$TOOL_INPUT_PATH</code>, <code>$TOOL_OUTPUT</code>, <code>$SESSION_ID</code>. These let you build context-aware hooks that react to what Claude actually did.
            </div>
          </section>

          <section className="section-card">
            <h2>Trust Levels</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Default (Recommended)</strong>
                <p>Claude asks before running shell commands. You see exactly what will run and approve each. Best for client codebases and anything with real-world side effects.</p>
              </div>
              <div className="step">
                <strong>Trusted (<code>/trust</code> command)</strong>
                <p>Shell commands execute without confirmation. Much faster. Use for personal projects, prototypes, and scripts in controlled environments. <strong>Never use for production credentials or client data.</strong></p>
              </div>
              <div className="step">
                <strong>Project-level trust (in CLAUDE.md)</strong>
                <p>Add <code>Trust: allow shell execution</code> to your project's CLAUDE.md. Scoped only to that project. Commit this to git so the whole team gets the same trust level.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Large Codebase Strategies</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Map your architecture in CLAUDE.md</strong>
                <p>Include a "Key Files" section in your project CLAUDE.md. Example:</p>
                <pre>{`## Key Files
- src/auth/session.ts — session management, JWT handling
- src/middleware.ts — request pipeline, auth checks, rate limiting  
- src/api/index.ts — API router, all routes registered here
- src/db/schema.ts — Drizzle ORM schema, single source of truth for DB
- src/lib/email.ts — all email sending goes through here`}</pre>
                <p>Claude reads this first and navigates precisely without reading everything.</p>
              </div>
              <div className="step">
                <strong>Reference files by exact path and line</strong>
                <p>"Look at src/auth/session.ts line 45" is 10x faster than "find the session expiry logic." Use exact file paths in every request when you know where the code is.</p>
              </div>
              <div className="step">
                <strong>Use /compact before switching sub-tasks</strong>
                <p>Working on auth for 30 min, then switching to UI work? Run /compact first. Compresses the auth conversation into a summary, freeing context for the UI work without losing key decisions.</p>
              </div>
              <div className="step">
                <strong>Batch reads before writes</strong>
                <p>"Read src/auth/session.ts, src/middleware.ts, and src/types/user.ts. Then tell me where the session expiry logic is before touching anything." Gives Claude full context before it acts.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Keyboard Shortcuts</h2>
            <ul>
              <li><kbd>Ctrl+C</kbd> twice — Force stop Claude mid-execution</li>
              <li><kbd>Escape</kbd> — Cancel current input without sending</li>
              <li><kbd>Up Arrow</kbd> — Cycle through previous commands</li>
              <li><kbd>Tab</kbd> — Autocomplete file paths and command names</li>
              <li><kbd>Shift+Tab</kbd> — Toggle auto-accept mode (executes everything without prompting — use carefully)</li>
            </ul>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise (~35 min)</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Task A: Plan Mode on a Real Task (10 min)</strong>
                <p>Pick any real refactoring or feature task in a project you own. Type "Plan: [your task]" and let Claude respond with a plan. Don't approve yet — edit at least one step. Then approve and watch it execute.</p>
              </div>
              <div className="step">
                <strong>Task B: Set Up the Notification Hook (5 min)</strong>
                <p>Add Hook 1 (macOS notification) to <code>~/.claude/settings.json</code>. Restart Claude Code. Start a multi-step task and then switch to another app. Wait for the notification to confirm the hook is working.</p>
              </div>
              <div className="step">
                <strong>Task C: Full Git Workflow (20 min)</strong>
                <p>Pick a small, real task in any project. Ask Claude to: create a feature branch, implement the change, commit with conventional commits format, and (if you have GitHub MCP) create a PR with a full description. Review the PR description — is it something you'd actually merge?</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 23 Quick Reference" items={[
            { term: "Plan Mode", definition: "Start with 'Plan:' — Claude shows every step before touching any file. Edit the plan before approving." },
            { term: "/compact", definition: "Summarizes conversation history to free context. Run before switching to a new sub-task." },
            { term: "Conventional commits", definition: "Format: type(scope): description. Types: feat, fix, chore, docs, refactor, test. Claude uses these automatically." },
            { term: "notification hook", definition: "Fires when Claude needs your attention. Add macOS sound/notification so you can work on other things while Claude runs." },
            { term: "post_tool_call hook", definition: "Runs after every tool use. Use for: audit logging, auto-running tests, notifications on file changes." },
            { term: "Shift+Tab", definition: "Auto-accept mode — Claude executes without prompting. Use only in trusted, personal projects." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level3/lesson22', label: 'Lesson 22: MCP Deep Dive' }}
            next={{ href: '/level3/lesson24', label: 'Lesson 24: Cowork + Skills' }}
            currentLessonId="l3-23"
          />
        </main>
    </div>
  )
}
