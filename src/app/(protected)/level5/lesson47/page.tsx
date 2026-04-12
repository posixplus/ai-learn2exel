'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson47() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-47" />
      <main className="lesson-main">
        <LessonHeader
          level={5}
          lessonNumber={47}
          duration={45}
          title="Custom AI Extensions & Agents"
          subtitle="Build your own Copilot extensions, Claude Code tools, and team-specific AI workflows"
        />

        <section className="section-card">
          <h2>Beyond Off-the-Shelf AI Tools</h2>
          <p>
            Generic AI tools are powerful, but the highest leverage comes from customizing
            them to your team's specific context: your coding conventions, internal APIs,
            deployment workflows, and domain knowledge. This lesson covers how to build
            that customization layer.
          </p>
          <div className="info-box">
            <strong>Customization layers:</strong> Custom instructions (prompt files) →
            Custom slash commands → MCP servers (tool integrations) → Full custom agents.
            Start at layer 1 and move right only when needed.
          </div>
        </section>

        <section className="section-card">
          <h2>Claude Code Custom Commands</h2>
          <p>
            Claude Code supports custom slash commands defined in Markdown files. These
            let you encode team workflows as reusable prompts.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Step 1 — Create the commands directory</strong>
              <div className="code-block">
                <pre>{`mkdir -p .claude/commands
# Personal commands (not committed):
mkdir -p ~/.claude/commands`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 2 — Write a command file</strong>
              <div className="code-block">
                <pre>{`# .claude/commands/pr-review.md
Review the staged changes as a senior engineer on this team.
Our standards:
- All functions must have JSDoc comments
- Error handling must use our AppError class from src/lib/errors.ts
- No console.log — use the logger from src/lib/logger.ts
- All async functions need try/catch

Flag violations with file and line number.
Suggest fixes using our existing patterns.`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 3 — Run your custom command</strong>
              <div className="code-block">
                <pre>{`claude /pr-review
# Claude Code reads the command file and executes it
# with full access to your codebase context`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>CLAUDE.md — Project Context File</h2>
          <p>
            The <code>CLAUDE.md</code> file in your repo root is automatically read by
            Claude Code at the start of every session. It gives the AI persistent context
            about your project.
          </p>
          <div className="code-block">
            <pre>{`# CLAUDE.md (commit this to your repo)

## Project Overview
This is a multi-tenant SaaS platform for invoice management.
Backend: Node.js + Express + PostgreSQL
Frontend: Next.js 14 App Router + Tailwind

## Code Conventions
- Use named exports only (no default exports)
- All DB queries go through src/db/queries/ — never inline SQL
- Error handling: throw AppError instances, never raw Error
- Logging: import logger from '@/lib/logger', never console.log

## Key Files
- src/db/schema.ts — database types
- src/lib/auth.ts — authentication utilities
- docs/api.md — API documentation

## Testing
- Use vitest + testing-library
- Test files: *.test.ts alongside source files
- Run: npm test (watch), npm run test:ci (CI)`}</pre>
          </div>
          <div className="info-box">
            <strong>Team benefit:</strong> Everyone on the team gets the same Claude Code
            behavior. New engineers get instant context. The AI speaks your codebase's language.
          </div>
        </section>

        <section className="section-card">
          <h2>MCP Servers — Tool Extensions</h2>
          <p>
            Model Context Protocol (MCP) lets you give Claude Code access to external tools:
            databases, APIs, file systems, and custom services. Any tool your team uses
            can become a Claude Code capability.
          </p>
          <div className="code-block">
            <pre>{`# Add an MCP server to Claude Code:
# ~/.claude/claude_desktop_config.json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://localhost/mydb"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "your-token" }
    }
  }
}

# Now Claude Code can:
# - Query your database directly
# - Read GitHub issues and PRs
# - Create issues from code TODOs`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Building a Custom MCP Server</h2>
          <p>Build your own MCP server to give Claude Code access to your internal tools:</p>
          <div className="code-block">
            <pre>{`# Install the MCP SDK:
npm install @modelcontextprotocol/sdk

# src/mcp-server.ts — minimal example
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  { name: 'internal-tools', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// Register a tool Claude Code can call:
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'get_feature_flag') {
    const flag = await fetchFromFlagService(request.params.arguments.flag_name);
    return { content: [{ type: 'text', text: JSON.stringify(flag) }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);

// Now claude can: "Check if the new-checkout feature flag is enabled in production"`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>GitHub Copilot Extensions</h2>
          <p>
            Copilot Extensions let you build custom <code>@agent</code> integrations that
            appear in Copilot Chat. Your teammates invoke them with <code>@your-agent</code>.
          </p>
          <div className="code-block">
            <pre>{`# Copilot Extensions are GitHub Apps with special capabilities
# They respond to @mentions in Copilot Chat

# Use cases:
# @docs — search internal documentation
# @deploy — check deployment status, trigger deploys
# @oncall — who's on call, open incidents
# @runbook — fetch runbook for a service

# To build one:
# 1. Create a GitHub App at github.com/settings/apps
# 2. Enable Copilot Extension capability
# 3. Implement the extension API endpoint
# 4. Handle the request format from GitHub
# 5. Return streaming responses in the Copilot format

# The extension receives: the user's message + conversation context
# It returns: streamed text back to Copilot Chat`}</pre>
          </div>
          <div className="info-box">
            <strong>Who should build these:</strong> Platform/DevEx teams building company-wide
            internal tools. Individual developers rarely need custom extensions — CLAUDE.md
            and custom commands cover most personal customization needs.
          </div>
        </section>

        <section className="section-card">
          <h2>Team AI Playbook</h2>
          <p>Combine everything in this level into a team-wide AI workflow standard:</p>
          <div className="code-block">
            <pre>{`# Team AI Playbook — what to standardize:

# 1. CLAUDE.md in every repo (project context)
# 2. Shared .claude/commands/ committed to repos
#    - /pr-review  — pre-PR checklist
#    - /onboard    — explain the codebase to new devs
#    - /debug      — structured debugging workflow

# 3. Agreed prompt patterns for common tasks:
#    - Commit messages: conventional commits format
#    - PR descriptions: summary + test plan + breaking changes
#    - Code review: always ask for severity classification

# 4. MCP servers for shared tooling:
#    - Internal docs
#    - Feature flags
#    - Deployment pipelines

# 5. AI usage guidelines:
#    - Always review AI-generated code before committing
#    - No AI-generated code in security-critical paths without senior review
#    - AI for acceleration, not substitution of understanding`}</pre>
          </div>
          <div className="hands-on-box">
            <strong>Hands-on:</strong> Create a <code>CLAUDE.md</code> file in one of your
            real projects. Include: project overview, tech stack, key conventions (naming,
            error handling, logging), and important file locations. Run Claude Code in that
            project and notice how much more contextual its responses become.
          </div>
        </section>

        <QuickRef title="Lesson 47 Quick Reference" items={[
          { term: 'CLAUDE.md', definition: 'Repo-root file auto-read by Claude Code; encodes project context and conventions' },
          { term: 'Custom commands', definition: '.claude/commands/name.md — invoke with /name in Claude Code' },
          { term: 'MCP server', definition: 'Tool extension that gives Claude Code access to external systems' },
          { term: 'Copilot Extension', definition: 'GitHub App with @agent interface — team-level internal tool integrations' },
          { term: 'Team playbook', definition: 'Shared CLAUDE.md + commands + MCP servers + agreed prompt patterns' },
          { term: 'MCP SDK', definition: 'npm install @modelcontextprotocol/sdk — build custom tool servers' },
          { term: 'Configuration file', definition: '~/.claude/claude_desktop_config.json — register MCP servers globally' },
        ]} />

        <LessonNav
          level={5}
          prev={{ href: '/level5/lesson46', label: 'Agentic Coding' }}
          next={{ href: '/level5/capstone', label: 'Level 5 Capstone' }}
          currentLessonId="l5-47"
        />
      </main>
    </div>
  )
}
