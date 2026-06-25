'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson21() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-21" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={21} duration={90}
            title="CLAUDE.md: Your Personal AI Brain"
            subtitle="Set up persistent context once - get dramatically better results in every session, forever" />

          <section className="section-card">
            <h2>The Problem with Starting Fresh Every Time</h2>
            <p>Every Claude conversation starts blank. No memory of your role, preferences, code style, or team conventions. You re-explain the same context in every session - or get generic responses that don't fit your situation.</p>
            <p>CLAUDE.md solves this permanently. Claude reads it automatically at the start of every session. Write it once, use it forever.</p>
          </section>

          <section className="section-card">
            <h2>Two Types of CLAUDE.md</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Global: ~/.claude/CLAUDE.md</strong>
                <p>Applies to ALL Claude Code sessions everywhere on your machine. Your universal preferences: tech stack, work style, "do not" rules, communication preferences.</p>
              </div>
              <div className="step">
                <strong>Project: ./CLAUDE.md (in any folder)</strong>
                <p>Applies only when Claude runs in that directory. Project-specific: architecture, key files, team conventions, deployment steps. Commit to git - your whole team benefits.</p>
              </div>
            </div>
            <div className="info-box">
              Claude Code also reads CLAUDE.md files in parent directories - allowing multi-level context for monorepos and workspaces.
            </div>
          </section>

          <section className="section-card">
            <h2>Before and After: Why CLAUDE.md Changes Everything</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Without CLAUDE.md - Claude's response to "Review this function":</strong>
                <pre>{`The function looks generally well-structured. A few suggestions:
1. Consider adding error handling for edge cases
2. The variable names could be more descriptive  
3. You might want to add unit tests
4. Consider extracting this logic into a separate utility...
(continues with 300 more words of generic advice)`}</pre>
              </div>
              <div className="step">
                <strong>With CLAUDE.md (developer, TypeScript, strict mode, prefers concise feedback):</strong>
                <pre>{`Two issues:

1. Line 14: fetchUser() can return null - you're not handling it.
   Add: if (!user) throw new ApiError(404, 'User not found')

2. This should be async - you're calling an async fn but not awaiting.
   Change: getUserData() → async getUserData()

No other changes needed. Tests already cover the happy path.`}</pre>
              </div>
            </div>
            <p>Same request, completely different quality. The second response is what you actually need.</p>
          </section>

          <section className="section-card">
            <h2>Real Global CLAUDE.md - Developer Version</h2>
            <p>A real, fully filled-in example. Copy and customize this right now:</p>
            <pre>{`# About Me
Name: Alex Chen
Role: Senior Full-Stack Engineer
Company: Series B fintech startup (80 people)
Industry: Financial technology - payment processing
Experience: 7 years, primarily TypeScript/Node/React

# currentDate
Check the system date at session start and use it for any date references.

# My Tech Stack
Primary: TypeScript (strict mode always)
Frontend: Next.js 14 App Router, TailwindCSS, shadcn/ui
Backend: Node.js, tRPC, Prisma ORM
Database: PostgreSQL (primary), Redis (caching/queues)
Infra: AWS (ECS, RDS, SQS), Terraform
Testing: Vitest, Playwright
Git: GitHub, conventional commits, PR required for main

# How I Work
- Give me concise, direct answers. No preamble.
- Always show full function code when editing - not just the changed lines.
- For changes touching >2 files, show a plan first and wait for my approval.
- When you create a file, state the exact path.
- Flag security issues immediately - don't bury them in suggestions.
- If you're uncertain about my intent, ask ONE clarifying question.

# Code Style
- TypeScript: strict mode, explicit return types on all exported functions
- Error handling: throw typed errors, never swallow exceptions
- Naming: camelCase variables/functions, PascalCase types/components, kebab-case files
- No any types. Use unknown + narrowing if type is truly unknown.
- Prefer async/await over .then() chains
- All API handlers wrapped in try/catch with structured error responses

# Do Not
- Add unnecessary comments - code should be self-documenting
- Suggest adding a library when built-ins handle it
- Use deprecated Node.js APIs
- Write tests with implementation details as assertions (test behavior, not code)
- Add "Certainly!" or filler phrases
- Suggest I read the docs - if I'm asking, I've read the docs

# Security Rules (our compliance requirements)
- Never log PII (emails, names, payment data) - use masked versions
- All database queries must use parameterized inputs (Prisma handles this - flag raw queries)
- Authentication checks must happen in middleware, not in individual routes
- Flag any code that could expose internal error messages to end users`}</pre>
          </section>

          <section className="section-card">
            <h2>Real Global CLAUDE.md - Knowledge Worker Version</h2>
            <p>Non-developer version for analysts, managers, and knowledge workers:</p>
            <pre>{`# About Me
Name: Sarah Kim
Role: Product Manager, Growth Team
Company: B2B SaaS (Series A, 45 people)
Industry: HR Tech - employee engagement software
Context: I manage features from ideation to launch. I work with 
engineering (6 devs), design (2), and data (1 analyst).

# currentDate
Today is: [Check system date - use it when I ask about "this week", "next sprint", etc.]

# How I Like Answers
- Lead with the recommendation. Then explain why.
- Max 3 options when I ask for alternatives - with a clear recommended one.
- Use bullet points for lists, prose for analysis.
- If something has a catch or risk I should know, say it immediately.
- End complex responses with: "Next step: [specific action I should take]"

# My Context
- Sprint length: 2 weeks. Current sprint ends Fridays.
- Our OKR system: quarterly OKRs, weekly check-ins on key results
- Stakeholders I often need to update: CTO (technical decisions), 
  CEO (anything customer-facing), Head of Sales (pricing/packaging)
- Our primary metric: weekly active users (WAU). Secondary: NPS, retention.

# Writing Style
- Match our company voice: direct, warm, not corporate
- Avoid jargon - our team is mixed technical/non-technical
- Emails: short. 5 sentences max unless it's a major announcement.
- PRDs: problem first, then solution. Include "out of scope" section always.

# Do Not
- Add caveats I didn't ask for
- Write longer than needed - I can ask for more if I need it
- Give me generic PM advice from a textbook
- Suggest I talk to stakeholders when I'm asking you to help me draft content
- Use "leverage", "synergy", "circle back", or similar corporate speak`}</pre>
          </section>

          <section className="section-card">
            <h2>Project CLAUDE.md Template</h2>
            <p>For any codebase or project folder. This one gets committed to git so the whole team benefits:</p>
            <pre>{`# Project: [Name]
Last updated: [date]

## What This Is
[2 sentences: what the product does and who it's for]

## Architecture Overview
[3-5 sentences: stack, key design decisions, overall structure]

## Key Files - Read These First
- src/auth/session.ts - session management, JWT handling
- src/middleware.ts - request pipeline, auth, rate limiting
- src/api/index.ts - all API routes registered here
- src/db/schema.ts - Drizzle ORM schema, single source of truth
- src/lib/email.ts - all email sending goes through here

## Common Commands
npm run dev          # development server (port 3000)
npm run build        # production build
npm run test         # full test suite (Vitest)
npm run test:e2e     # Playwright e2e tests
npm run typecheck    # TypeScript check without building
npm run db:migrate   # run pending DB migrations

## Code Conventions
- Feature flags: use src/lib/flags.ts, never hardcode
- New API routes: add to src/api/[feature]/index.ts, register in src/api/index.ts
- Database changes always require a migration file
- Tests live alongside source (src/feature/__tests__/feature.test.ts)

## Current Focus (update weekly)
Working on: [what the team is actively building]
Known blockers: [anything that needs attention]

## Environment
Development: .env.local (not committed)
Required keys: DATABASE_URL, REDIS_URL, AUTH0_SECRET, RESEND_API_KEY
See: .env.example for full list`}</pre>
          </section>

          <section className="section-card">
            <h2>Maintaining Your CLAUDE.md</h2>
            <p>A CLAUDE.md you write once and never touch quickly becomes stale. Keep it useful:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Update the "Current Focus" section weekly</strong>
                <p>Add 2-3 sentences about what you're actively working on. Claude will prioritize this context when it's relevant.</p>
              </div>
              <div className="step">
                <strong>Add to "Do Not" when Claude annoys you</strong>
                <p>Every time Claude does something you don't like, add a prohibition. After 2 weeks your CLAUDE.md will have eliminated most friction.</p>
              </div>
              <div className="step">
                <strong>Run /init periodically on project CLAUDE.md</strong>
                <p>As your codebase evolves, re-run <code>claude /init</code> to update the key files map. Then add back any project context that <code>/init</code> doesn't know.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Memory Skills in Cowork</h2>
            <p>Cowork's <code>memory-management</code> skill adds a two-tier system on top of CLAUDE.md:</p>
            <ul>
              <li><strong>CLAUDE.md</strong> - Working memory: active preferences, current project, frequently used info</li>
              <li><strong>memory/ directory</strong> - Long-term knowledge: decisions made months ago, team info, domain knowledge that rarely changes</li>
            </ul>
            <p>Trigger it: "Remember that our API uses snake_case for all parameters" or "Update my memory with the decisions we made today."</p>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise (~25 min)</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Part A: Create Your Global CLAUDE.md (12 min)</strong>
                <pre>{`mkdir -p ~/.claude && nano ~/.claude/CLAUDE.md`}</pre>
                <p>Use the appropriate template above (developer or knowledge worker). Fill in every section. Don't skip "Do Not" - it's often the most valuable part of the file.</p>
              </div>
              <div className="step">
                <strong>Part B: Test It (8 min)</strong>
                <p>Open a new Claude Code session. Ask: "What do you know about me and how I work?" Claude should accurately reflect your CLAUDE.md - role, preferences, constraints. Fix anything that's wrong or missing before moving on.</p>
              </div>
              <div className="step">
                <strong>Part C: Project CLAUDE.md (5 min)</strong>
                <p>Navigate to your most-used project directory. Run <code>claude /init</code> to auto-generate a starting point from your codebase. Customize it with your architecture overview and current focus. Commit it to git.</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 21 Quick Reference" items={[
            { term: "~/.claude/CLAUDE.md", definition: "Global memory. Applies to every Claude Code session on your machine. Set your role, stack, preferences, and do-nots here." },
            { term: "./CLAUDE.md", definition: "Project memory. Put in project root. Commit to git. Your whole team gets the context benefits." },
            { term: "Do Not section", definition: "Most valuable part of CLAUDE.md. Add one prohibition every time Claude does something that annoys you. Eliminates friction fast." },
            { term: "Current Focus", definition: "2-3 sentences about what you're actively working on. Update weekly. Helps Claude prioritize context relevance." },
            { term: "/init command", definition: "Claude Code auto-generates a CLAUDE.md from your codebase structure. Great starting point - then customize." },
            { term: "Memory Skills", definition: "Cowork's memory-management skill adds a long-term knowledge base (memory/ dir) on top of CLAUDE.md for persistent context." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level3/lesson20', label: 'Lesson 20: Advanced Prompting' }}
            next={{ href: '/level3/lesson22', label: 'Lesson 22: MCP Deep Dive' }}
            currentLessonId="l3-21"
          />
        </main>
    </div>
  )
}
