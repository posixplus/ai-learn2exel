import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'

export default function Level5Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={5}
          lessonNumber={0}
          duration={120}
          title="Level 5 Capstone"
          subtitle="Apply your AI developer toolkit to a complete, real-world coding project"
        />

        <section className="section-card">
          <div className="capstone-hero l5">
            <h2>You Made It to the Copilot Capstone</h2>
            <p>
              Over the past 10 lessons you have built a complete AI developer workflow:
              inline completion, chat-driven development, AI-powered debugging and testing,
              refactoring, git workflows, agentic coding, and custom extensions. This capstone
              puts all of it together in one project.
            </p>
            <p>
              Choose one of three projects below. Each one is designed to exercise the full
              Level 5 skill set. Use any AI tool — GitHub Copilot, Claude Code, Cursor — but
              the point is to use them intentionally, not just as autocomplete.
            </p>
          </div>
        </section>

        <section className="section-card">
          <h2>Project A — Full-Stack Feature with AI Pair Programming</h2>
          <p>
            Build a complete feature end-to-end using AI as your pair programmer throughout
            the entire cycle: design → implementation → tests → documentation → PR.
          </p>

          <h3>The Feature: Task Management API</h3>
          <p>Build a REST API for a task manager with the following requirements:</p>
          <ul>
            <li>CRUD operations for tasks (title, description, status, due date, priority)</li>
            <li>Filtering by status and priority, sorting by due date</li>
            <li>JWT authentication — users only see their own tasks</li>
            <li>Rate limiting (100 req/15 min per user)</li>
            <li>Comprehensive test suite (unit + integration)</li>
            <li>OpenAPI/Swagger documentation</li>
          </ul>

          <h3>AI Requirements (must use all of these)</h3>
          <div className="code-block">
            <pre>{`# 1. Use inline completion to write the route handlers
#    Comment-first: "// GET /tasks — return paginated list filtered by status"

# 2. Use /tests to generate the test suite
#    Then ask AI to find edge cases you missed

# 3. Use agentic coding (Claude Code or Cursor Composer) for:
#    "Add rate limiting to all authenticated routes"

# 4. Generate your commit messages with AI:
#    git diff --staged | claude "Write conventional commit message"

# 5. Run AI code review before your final commit:
#    "Review this diff as a senior engineer.
#    Check for security issues, missing error handling, and test gaps."

# 6. Create CLAUDE.md documenting the project conventions`}</pre>
          </div>

          <h3>Deliverables</h3>
          <ul>
            <li>Working API with all endpoints and auth</li>
            <li>Test suite with 80%+ coverage</li>
            <li>OpenAPI docs generated with AI assistance</li>
            <li>Clean git history with AI-generated conventional commits</li>
            <li><code>CLAUDE.md</code> file in the repo</li>
            <li>PR description written with AI (include in README)</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>Project B — Legacy Codebase Modernization</h2>
          <p>
            Take a messy legacy codebase and systematically modernize it using AI-assisted
            refactoring, test generation, and documentation — the exact workflow you would
            use on a real job.
          </p>

          <h3>Setup</h3>
          <div className="code-block">
            <pre>{`# Clone this intentionally messy starter repo:
# (Use any legacy or poorly-written codebase you have access to,
#  or create one with nested callbacks, no tests, magic numbers, etc.)

# The codebase has:
# - Deeply nested callback-style async code
# - No tests
# - Cryptic variable names (d, x, tmp, data2)
# - Magic numbers throughout
# - No error handling
# - No documentation
# - God functions (200+ lines each)`}</pre>
          </div>

          <h3>Modernization Checklist (use AI for each step)</h3>
          <div className="steps-list">
            <div className="step">
              <strong>Phase 1 — Understand the codebase</strong>
              <p>Use AI chat to map out what each file does: "Explain this function to me in plain English."</p>
            </div>
            <div className="step">
              <strong>Phase 2 — Generate tests BEFORE refactoring</strong>
              <p>Use /tests to capture current behavior. These are your safety net.</p>
            </div>
            <div className="step">
              <strong>Phase 3 — AI-assisted refactoring</strong>
              <p>"Refactor this to use async/await", "Rename all variables to be descriptive", "Extract into smaller functions"</p>
            </div>
            <div className="step">
              <strong>Phase 4 — AI-generated documentation</strong>
              <p>Generate JSDoc/docstrings and a README.md for the project.</p>
            </div>
            <div className="step">
              <strong>Phase 5 — Security and performance review</strong>
              <p>Ask AI: "Check for injection vulnerabilities", "Find N+1 patterns", "Identify memory leaks"</p>
            </div>
          </div>

          <h3>Deliverables</h3>
          <ul>
            <li>Fully refactored codebase (no callbacks, descriptive names, no magic numbers)</li>
            <li>Tests written before refactoring, all still passing after</li>
            <li>AI-generated README and inline documentation</li>
            <li>Security review report (AI-generated, your annotations)</li>
            <li>Git history showing the progression with AI-generated commit messages</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>Project C — Team AI Toolkit</h2>
          <p>
            Build the AI infrastructure for a development team: custom Claude Code commands,
            a CLAUDE.md, and an MCP server integration. This is the meta-project —
            instead of writing features, you are writing the tools that make the whole
            team faster.
          </p>

          <h3>What to Build</h3>
          <div className="steps-list">
            <div className="step">
              <strong>1. CLAUDE.md for a real project</strong>
              <p>
                Write a comprehensive CLAUDE.md for an existing codebase. Include:
                project overview, tech stack, all coding conventions, key file locations,
                test setup, deployment process, and a glossary of domain terms.
              </p>
            </div>
            <div className="step">
              <strong>2. Custom command library</strong>
              <div className="code-block">
                <pre>{`# Build at least 5 custom commands in .claude/commands/:
# /pr-review    — pre-PR checklist with your team's standards
# /onboard      — explain this codebase to a new engineer
# /debug        — structured debug workflow
# /security     — security review checklist
# /release      — generate changelog + release notes`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>3. MCP server for an internal tool</strong>
              <p>
                Build a simple MCP server that exposes one internal tool to Claude Code.
                Examples: fetch from your internal docs, check a feature flag service,
                query a read-only database view.
              </p>
            </div>
            <div className="step">
              <strong>4. Team AI Playbook document</strong>
              <p>
                Write a Markdown document (with AI assistance) describing how your team
                should use AI tools: which tools for which tasks, what to review, what
                not to trust AI with, and how to onboard new team members to the workflow.
              </p>
            </div>
          </div>

          <h3>Deliverables</h3>
          <ul>
            <li>CLAUDE.md (comprehensive, ready to commit)</li>
            <li>5 custom command files in .claude/commands/</li>
            <li>Working MCP server (Node.js, TypeScript preferred)</li>
            <li>Team AI Playbook document</li>
            <li>Demo video or write-up: show each command running and explain the MCP server</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>Capstone Reflection</h2>
          <p>After completing your chosen project, write a short reflection covering:</p>
          <div className="code-block">
            <pre>{`# Reflection questions:

1. Which AI tool did you reach for most often?
   Why was it your default for this project?

2. Where did AI save you the most time?
   Give a specific example.

3. Where did AI lead you astray, give wrong output,
   or require the most correction?

4. What would you do differently on the next project?

5. What is one thing you want to automate or custom-build
   next to make AI even more useful for your workflow?`}</pre>
          </div>
          <div className="info-box">
            <strong>The real skill:</strong> After Level 5, the goal is not to use AI on
            every task — it is to know precisely which tasks benefit from AI assistance
            and to apply the right tool confidently. That discernment is what separates
            an AI-augmented developer from one who just has Copilot installed.
          </div>
        </section>

        <section className="section-card">
          <h2>What You Have Learned in Level 5</h2>
          <p>You covered the complete developer AI toolkit:</p>
          <ul>
            <li><strong>L38</strong> — The AI tools landscape and setup</li>
            <li><strong>L39</strong> — Inline completion mastery</li>
            <li><strong>L40</strong> — AI chat for development (/explain, /fix, /tests, /doc)</li>
            <li><strong>L41</strong> — Documenting code with AI</li>
            <li><strong>L42</strong> — Debugging with AI</li>
            <li><strong>L43</strong> — Writing tests with AI</li>
            <li><strong>L44</strong> — Refactoring and code review with AI</li>
            <li><strong>L45</strong> — Git workflow with AI</li>
            <li><strong>L46</strong> — Agentic coding</li>
            <li><strong>L47</strong> — Custom extensions and team tooling</li>
          </ul>
          <div className="hands-on-box">
            <strong>You are done.</strong> You have gone from basic AI prompting to
            running autonomous agents, building custom tools, and setting up AI workflows
            for entire teams. This is the cutting edge of how software is being built today.
            The tools will keep evolving — but the mental model you have built here will not.
          </div>
        </section>

        <LevelFeedback level={5} levelTitle="AI Coding Tools & Developer Workflows" />
        <LessonNav
          level={5}
          prev={{ href: '/level5/lesson47', label: 'Custom AI Extensions & Agents' }}
          next={undefined}
          currentLessonId="l5-capstone"
        />
      </main>
    </div>
  )
}
