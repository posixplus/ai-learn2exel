'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson28() {
  return (
    <div className="lesson-layout">
      <Sidebar level={3} currentLessonId="l3-28" />
      <main className="lesson-main">
        <LessonHeader level={3} lessonNumber={28} duration={75}
          title="Claude Settings: The Complete Guide"
          subtitle="Every setting that shapes how Claude behaves - what each one does, best practices, and ready-to-use examples" />

        <section className="section-card">
          <h2>Why Settings Matter</h2>
          <p>
            Most Claude users never touch their settings beyond adding an MCP. That&apos;s like buying a sports car and leaving
            all the driving modes on their factory defaults. The settings system controls what Claude can do autonomously,
            how safe its actions are, which model it uses, and how it behaves across every conversation.
            Spending 30 minutes on your settings is one of the highest-leverage things you can do.
          </p>
          <div className="info-box">
            <strong>Two places to configure Claude:</strong> (1) <code>~/.claude/settings.json</code> for Claude Code / Cowork - this controls tools, permissions, hooks, and MCPs.
            (2) Claude.ai web settings - controls memory, custom instructions, appearance, and integrations.
            This lesson covers both exhaustively.
          </div>
        </section>

        <section className="section-card">
          <h2>Part 1: ~/.claude/settings.json</h2>
          <p>The master config file for Claude Code and Cowork. Here is every field with what it does and best-practice recommendations.</p>

          <div className="hands-on-box">
            <h3>Full Annotated settings.json</h3>
            <pre>{`{
  // ─── MODEL SELECTION ──────────────────────────────────
  "model": "claude-sonnet-4-6",        // Main model for all tasks
  "smallFastModel": "claude-haiku-4-5-20251001", // Used for quick sub-tasks

  // ─── MCP SERVERS ──────────────────────────────────────
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem",
               "/Users/you/Documents", "/Users/you/Desktop"],
      "env": {}
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "$GITHUB_TOKEN" }
    }
  },

  // ─── PERMISSIONS ──────────────────────────────────────
  "permissions": {
    "allow": [
      "bash(git:*)",          // Allow all git commands
      "bash(npm:*)",          // Allow all npm commands
      "bash(ls:*)",           // Allow directory listing
      "read(*)",              // Allow reading any file
      "edit(~/Projects/**)"   // Allow editing only in Projects folder
    ],
    "deny": [
      "bash(rm -rf:*)",       // Never allow recursive delete
      "bash(sudo:*)",         // Never allow sudo
      "bash(curl * | bash:*)" // Block piped curl execution
    ]
  },

  // ─── HOOKS ────────────────────────────────────────────
  "hooks": {
    "pre_tool_call": [{
      "command": "echo \"[$(date)] Pre: $TOOL_NAME\" >> ~/claude-audit.log"
    }],
    "post_tool_call": [{
      "command": "echo \"[$(date)] Post: $TOOL_NAME done\" >> ~/claude-audit.log"
    }],
    "notification": [{
      "command": "osascript -e \"display notification \\\"Claude needs input\\\" with title \\\"Claude\\\""
    }],
    "stop": [{
      "command": "echo \"[$(date)] Session ended\" >> ~/claude-audit.log"
    }]
  },

  // ─── ENVIRONMENT ──────────────────────────────────────
  "env": {
    "NODE_ENV": "development",
    "ANTHROPIC_API_KEY": "$ANTHROPIC_API_KEY"
  },

  // ─── BEHAVIOUR ────────────────────────────────────────
  "includeCoAuthoredBy": true,   // Add "Co-Authored-By: Claude" to commits
  "cleanupPeriodDays": 30        // Keep conversation history for 30 days
}`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Model Selection</h2>
          <p>Two model fields control which Claude model is used for what.</p>

          <div className="steps-list">
            <div className="step">
              <strong><code>model</code> - Primary model</strong>
              <p>Used for all main tasks: code writing, analysis, planning, complex reasoning.</p>
              <pre>{`"model": "claude-sonnet-4-6"   // Best balance: speed + quality
"model": "claude-opus-4-8"    // Maximum capability (slower, higher cost)
"model": "claude-haiku-4-5-20251001"  // Fastest, cheapest (simple tasks only)`}</pre>
              <div className="info-box" style={{marginTop:'0.75rem'}}>
                <strong>Best practice:</strong> Use Sonnet as your default. Switch to Opus only for complex architectural decisions,
                extended thinking tasks, or when Sonnet is clearly underperforming. Haiku is rarely worth the quality trade-off for coding tasks.
              </div>
            </div>
            <div className="step">
              <strong><code>smallFastModel</code> - Sub-task model</strong>
              <p>Used automatically for lightweight operations: summarisation, quick lookups, tool call routing.
              Keeping this as Haiku saves tokens without sacrificing quality on your main work.</p>
              <pre>{`"smallFastModel": "claude-haiku-4-5-20251001"`}</pre>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Permissions: The Safety Layer</h2>
          <p>
            The permission system controls which Bash commands and file operations Claude can run <em>without asking you first</em>.
            Getting this right is the most important safety configuration you have.
          </p>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>How Permissions Work</h3>
          <div className="steps-list">
            <div className="step">
              <strong>Without permissions configured</strong>
              <p>Claude asks for approval before every tool call - every file edit, every bash command. Safe but slow and disruptive.</p>
            </div>
            <div className="step">
              <strong>With <code>allow</code> rules</strong>
              <p>Commands matching the pattern run automatically. Claude stops and asks only for commands not in your allow list.</p>
            </div>
            <div className="step">
              <strong>With <code>deny</code> rules</strong>
              <p>Commands matching deny patterns are blocked entirely - Claude cannot run them even if you ask. Your last line of defence.</p>
            </div>
          </div>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Permission Pattern Syntax</h3>
          <pre>{`// Format: "tool(command:arguments)"

"bash(git:*)"           // Any git command
"bash(npm run:*)"       // Any npm run script
"bash(cat:*)"           // Any cat command
"read(*)"               // Read any file
"read(~/Projects/**)"   // Read files in Projects only
"edit(~/Projects/**)"   // Edit files in Projects only
"edit(*.md)"            // Edit only markdown files`}</pre>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Recommended Permission Profiles</h3>
          <div className="steps-list">
            <div className="step">
              <strong>Developer (most permissive - for trusted workflows)</strong>
              <pre>{`"permissions": {
  "allow": [
    "bash(git:*)", "bash(npm:*)", "bash(npx:*)",
    "bash(node:*)", "bash(python3:*)", "bash(pip3:*)",
    "bash(ls:*)", "bash(cat:*)", "bash(echo:*)",
    "bash(mkdir:*)", "bash(cp:*)", "bash(mv:*)",
    "read(*)", "edit(~/Projects/**)"
  ],
  "deny": [
    "bash(rm -rf:*)", "bash(sudo:*)",
    "bash(curl * | bash:*)", "bash(eval:*)"
  ]
}`}</pre>
            </div>
            <div className="step">
              <strong>Knowledge Worker (conservative - for document/email work)</strong>
              <pre>{`"permissions": {
  "allow": [
    "bash(ls:*)", "bash(cat:*)", "bash(echo:*)",
    "bash(grep:*)", "bash(find:*)",
    "read(*)", "edit(~/Documents/**)", "edit(~/Desktop/**)"
  ],
  "deny": [
    "bash(rm:*)", "bash(sudo:*)", "bash(curl:*)",
    "bash(wget:*)", "bash(chmod:*)"
  ]
}`}</pre>
            </div>
            <div className="step">
              <strong>Read-only / Audit Mode (for sensitive environments)</strong>
              <pre>{`"permissions": {
  "allow": [
    "bash(ls:*)", "bash(cat:*)", "bash(grep:*)",
    "bash(git log:*)", "bash(git diff:*)", "bash(git status:*)",
    "read(*)"
  ],
  "deny": [
    "bash(git commit:*)", "bash(git push:*)",
    "edit(*)", "bash(rm:*)", "bash(mv:*)",
    "bash(sudo:*)", "bash(curl:*)"
  ]
}`}</pre>
            </div>
          </div>

          <div className="info-box" style={{marginTop:'1.5rem'}}>
            <strong>Best practices for permissions:</strong>
            <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
              <li>Always have a <code>deny</code> list even if your <code>allow</code> list is broad</li>
              <li>Never allow <code>sudo</code> - Claude should never need root access</li>
              <li>Scope <code>edit</code> permissions to specific directories, not <code>edit(*)</code></li>
              <li>Block <code>curl * | bash</code> patterns - these can download and execute arbitrary code</li>
              <li>Start conservative and loosen as you understand what you actually need</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hooks: Automations on Every Action</h2>
          <p>
            Hooks run shell commands automatically at key points in Claude&apos;s workflow.
            They are the most underused setting - and one of the most powerful.
          </p>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>The Four Hook Types</h3>
          <div className="steps-list">
            <div className="step">
              <strong><code>pre_tool_call</code></strong> - Runs before Claude uses any tool
              <p>Environment variables available: <code>$TOOL_NAME</code>, <code>$TOOL_INPUT_PATH</code> (JSON file with tool args)</p>
              <p><strong>Use for:</strong> approval gates, audit logging, rate limiting, validating file paths before edits</p>
            </div>
            <div className="step">
              <strong><code>post_tool_call</code></strong> - Runs after every tool call completes
              <p>Additional env var: <code>$TOOL_OUTPUT_PATH</code> (JSON file with result)</p>
              <p><strong>Use for:</strong> auto-running tests after code changes, committing after edits, notifying on completion</p>
            </div>
            <div className="step">
              <strong><code>notification</code></strong> - Runs when Claude needs human input
              <p><strong>Use for:</strong> desktop notifications, Slack alerts, sound cues - so you can walk away and come back</p>
            </div>
            <div className="step">
              <strong><code>stop</code></strong> - Runs when a Claude session ends
              <p><strong>Use for:</strong> session summaries, cleanup tasks, end-of-session logs</p>
            </div>
          </div>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Real-World Hook Examples</h3>
          <div className="steps-list">
            <div className="step">
              <strong>&#128276; macOS desktop notification when Claude needs you</strong>
              <pre>{`"notification": [{
  "command": "osascript -e 'display notification \"Claude needs your attention\" with title \"Claude\" sound name \"Glass\"'"
}]`}</pre>
            </div>
            <div className="step">
              <strong>&#128221; Full audit log of every tool call</strong>
              <pre>{`"pre_tool_call": [{
  "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] TOOL: $TOOL_NAME INPUT: $(cat $TOOL_INPUT_PATH)\" >> ~/claude-audit.log"
}]`}</pre>
            </div>
            <div className="step">
              <strong>&#9989; Auto-run tests when Claude writes a test file</strong>
              <pre>{`"post_tool_call": [{
  "command": "if echo \"$TOOL_NAME\" | grep -q 'write'; then FILEPATH=$(cat $TOOL_INPUT_PATH | python3 -c \"import json,sys; print(json.load(sys.stdin).get('path',''))\" 2>/dev/null); if echo \"$FILEPATH\" | grep -q '.test.'; then cd $(dirname $FILEPATH) && npm test --testPathPattern=$(basename $FILEPATH) 2>&1 | tail -5; fi; fi"
}]`}</pre>
              <p style={{fontSize:'0.85rem', color:'var(--color-muted)', marginTop:'0.5rem'}}>Checks if Claude wrote to a <code>.test.*</code> file, then runs just that test file automatically.</p>
            </div>
            <div className="step">
              <strong>&#128274; Block edits to production config files</strong>
              <pre>{`"pre_tool_call": [{
  "command": "if [ \"$TOOL_NAME\" = \"edit\" ]; then FILEPATH=$(cat $TOOL_INPUT_PATH | python3 -c \"import json,sys; print(json.load(sys.stdin).get('path',''))\"); if echo \"$FILEPATH\" | grep -qE \"(production|prod.env|.env.prod)\"; then echo \"BLOCKED: Cannot edit production files\" >&2; exit 1; fi; fi"
}]`}</pre>
            </div>
            <div className="step">
              <strong>&#127381; Session summary on stop</strong>
              <pre>{`"stop": [{
  "command": "echo \"[$(date)] Claude session ended\" >> ~/claude-sessions.log"
}]`}</pre>
            </div>
          </div>

          <div className="info-box" style={{marginTop:'1.5rem'}}>
            <strong>Hook best practices:</strong> Keep hooks fast (under 2 seconds). Long-running hooks block Claude.
            Use <code>exit 1</code> in pre_tool_call to block the tool call.
            Always test hooks manually in your terminal before adding them to settings.
          </div>
        </section>

        <section className="section-card">
          <h2>Environment Variables</h2>
          <p>
            The <code>env</code> block injects environment variables into every Claude session. This is the right place
            for API keys referenced by MCPs and for setting project-wide defaults.
          </p>

          <div className="steps-list">
            <div className="step">
              <strong>&#10060; Never put secrets directly in env</strong>
              <pre>{`"env": {
  "GITHUB_TOKEN": "ghp_abc123realtoken"  // ❌ Plaintext secret in config
}`}</pre>
            </div>
            <div className="step">
              <strong>&#9989; Reference shell environment variables instead</strong>
              <pre>{`// In ~/.claude/settings.json:
"env": {
  "GITHUB_TOKEN": "$GITHUB_TOKEN",
  "ANTHROPIC_API_KEY": "$ANTHROPIC_API_KEY"
}

// In ~/.zshrc or ~/.bash_profile:
export GITHUB_TOKEN="ghp_abc123realtoken"
export ANTHROPIC_API_KEY="sk-ant-..."`}</pre>
              <p style={{marginTop:'0.5rem', fontSize:'0.9rem', color:'var(--color-muted)'}}>
                This way the secret lives in your shell profile (which you can exclude from backups) not in settings.json (which might sync).
              </p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Behaviour Settings</h2>
          <div className="steps-list">
            <div className="step">
              <strong><code>includeCoAuthoredBy</code></strong>
              <p>When <code>true</code>, Claude adds &ldquo;Co-Authored-By: Claude&rdquo; to every commit message it writes.
              Useful for transparency in team repos. Set to <code>false</code> for personal/private projects where you&apos;d rather not expose your tooling.</p>
              <pre>{`"includeCoAuthoredBy": true   // Recommended for team repos
"includeCoAuthoredBy": false  // For private/personal repos`}</pre>
            </div>
            <div className="step">
              <strong><code>cleanupPeriodDays</code></strong>
              <p>How many days of conversation history to retain locally. Higher values mean Claude can reference older context
              across sessions. Lower values reduce disk usage and keep Claude&apos;s memory focused on recent work.</p>
              <pre>{`"cleanupPeriodDays": 30   // Recommended: 30 for active projects
"cleanupPeriodDays": 7    // For privacy-sensitive or shared machines
"cleanupPeriodDays": 90   // For long-running research projects`}</pre>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Part 2: Claude.ai Web Settings</h2>
          <p>
            These settings live at <strong>claude.ai → Settings</strong> (top-right menu). They apply to all conversations in
            the web interface and the Claude desktop app.
          </p>
        </section>

        <section className="section-card">
          <h2>Custom Instructions (System Prompt)</h2>
          <p>
            Found under <strong>Settings → Profile</strong>. This is text injected as a system prompt at the start of every
            conversation - Claude.ai&apos;s equivalent of a global CLAUDE.md.
          </p>

          <div className="steps-list">
            <div className="step">
              <strong>&#10060; Weak custom instructions</strong>
              <pre>{`I am a software developer. Please be helpful and concise.`}</pre>
              <p style={{fontSize:'0.9rem', color:'var(--color-muted)', marginTop:'0.5rem'}}>
                Adds no real value - Claude already tries to be helpful and concise.
              </p>
            </div>
            <div className="step">
              <strong>&#9989; Strong custom instructions</strong>
              <pre>{`I am a senior Python/FastAPI engineer at a fintech startup.

Context:
- Stack: Python 3.12, FastAPI, PostgreSQL, SQLAlchemy, pytest
- We use async/await throughout - never suggest synchronous patterns
- Our API follows OpenAPI 3.1 - always include type hints and docstrings
- We run Ruff for linting (pyproject.toml config)

Communication preferences:
- Lead with the answer, then explain
- Flag security issues proactively even when not asked
- For complex changes, show a before/after diff, not just the new code
- Use British English spelling

What to avoid:
- Never suggest JavaScript/TypeScript alternatives when I ask Python questions
- Don't add requirements.txt changes without explaining why`}</pre>
            </div>
          </div>

          <div className="info-box" style={{marginTop:'1.5rem'}}>
            <strong>Best practices for Custom Instructions:</strong>
            <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
              <li>Keep it under 500 words - it&apos;s loaded on every conversation</li>
              <li>Include your tech stack versions (not just &ldquo;Python developer&rdquo; but &ldquo;Python 3.12 + FastAPI&rdquo;)</li>
              <li>Add &ldquo;what to avoid&rdquo; - Claude takes prohibitions very seriously</li>
              <li>Specify communication style (lead with answer, bullet vs prose, spelling preferences)</li>
              <li>Revisit quarterly and compress as you learn what&apos;s actually helping</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Memory Settings</h2>
          <p>
            Found under <strong>Settings → Memory</strong>. Claude.ai can remember facts across conversations.
            This is distinct from CLAUDE.md - it&apos;s a summary Claude builds automatically, not something you write.
          </p>

          <div className="steps-list">
            <div className="step">
              <strong>What Memory stores</strong>
              <p>Claude automatically saves: your name and role, recurring preferences it notices, project context you&apos;ve mentioned,
              correction patterns (if you frequently correct the same thing, Claude saves to avoid repeating).</p>
            </div>
            <div className="step">
              <strong>How to manage it well</strong>
              <p>You can view and edit your memory at any time. Regularly review it and delete outdated entries.
              Tell Claude explicitly what to remember: <em>&ldquo;Remember that I prefer TypeScript over JavaScript for all my projects.&rdquo;</em></p>
              <pre>{`# Tell Claude what to remember:
"Remember: I work in the healthcare domain. All data examples
should use synthetic/fake patient data, never real examples."

# Tell Claude to forget something:
"Please forget that you remembered my old company name -
I changed jobs in January 2026."`}</pre>
            </div>
            <div className="step">
              <strong>When to turn Memory off</strong>
              <p>Shared accounts, privacy-sensitive environments, or when you want each conversation to be fully independent.
              Go to Settings → Memory → toggle off. Existing memories are not deleted, just not used.</p>
            </div>
          </div>

          <div className="info-box">
            <strong>Memory vs CLAUDE.md vs Custom Instructions:</strong>
            Memory = what Claude learns automatically | Custom Instructions = what you explicitly set globally | CLAUDE.md = project-specific context for Claude Code.
            All three stack on top of each other. Conflicts are resolved in favour of the most specific (project wins over global).
          </div>
        </section>

        <section className="section-card">
          <h2>Feature Settings</h2>
          <p>Found under <strong>Settings → Features</strong>. These toggle specific Claude capabilities on or off.</p>

          <div className="steps-list">
            <div className="step">
              <strong>Extended thinking</strong>
              <p>Enables Claude to &ldquo;think out loud&rdquo; before responding - visible reasoning chain.
              Best for: complex decisions, multi-step planning, math-heavy tasks. Slower and higher cost per message.
              <strong> Best practice:</strong> Leave enabled. You can request it per-message: <em>&ldquo;Think step by step before answering.&rdquo;</em></p>
            </div>
            <div className="step">
              <strong>Suggested prompts</strong>
              <p>Claude suggests follow-up questions at the end of responses. Useful when you are exploring a topic.
              Can be distracting in focused coding workflows.
              <strong> Best practice:</strong> Turn off if you find yourself ignoring them - they consume UI space.</p>
            </div>
            <div className="step">
              <strong>Web search</strong>
              <p>Allows Claude to search the web during conversations. Critical for current events, recent API changes, and anything that may have changed since Claude&apos;s training cutoff.
              <strong> Best practice:</strong> Always leave on. You can suppress it per-message: <em>&ldquo;Answer from your training data only, don&apos;t search.&rdquo;</em></p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>The Recommended Settings Audit (Run This Now)</h2>
          <div className="hands-on-box">
            <h3>&#128272; 15-Minute Settings Setup</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Step 1 - Open your settings file</strong>
                <pre>{`cat ~/.claude/settings.json
# If it doesn't exist yet:
mkdir -p ~/.claude && touch ~/.claude/settings.json`}</pre>
              </div>
              <div className="step">
                <strong>Step 2 - Ask Claude to audit your current settings</strong>
                <pre>{`Here is my current ~/.claude/settings.json:
[paste contents]

My workflow: [describe what you use Claude for - coding / writing / research / etc]

Review my settings and:
1. Flag any security issues (especially in permissions or env)
2. Suggest permissions rules appropriate for my workflow
3. Recommend hooks I am not using that would help me
4. Identify anything missing that experienced Claude users typically have`}</pre>
              </div>
              <div className="step">
                <strong>Step 3 - Set up custom instructions</strong>
                <p>Go to claude.ai → Settings → Profile → Custom Instructions. Paste this template and fill it in:</p>
                <pre>{`I am a [role] at [company/context].

Stack: [languages, frameworks, databases, tools]

Code preferences:
- [specific style preference]
- [testing approach]
- [what to avoid]

Communication preferences:
- [lead with answer or explanation first?]
- [bullet points or prose?]
- [language/spelling preferences]

Do not:
- [specific things Claude keeps getting wrong for you]
- [suggestions you keep rejecting]`}</pre>
              </div>
              <div className="step">
                <strong>Step 4 - Review your Memory</strong>
                <p>Go to claude.ai → Settings → Memory. Delete anything outdated. Add anything important Claude should always know.</p>
              </div>
              <div className="step">
                <strong>Step 5 - Verify your MCPs are minimal</strong>
                <pre>{`# In Claude Code, run:
/mcp

# For each connected server, ask yourself:
# "Did I use this in the last 2 weeks?"
# If no, remove it from settings.json`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Settings Cheat Sheet</h2>
          <div className="steps-list">
            <div className="step">
              <strong>settings.json field reference</strong>
              <pre>{`model              → Main model (sonnet recommended)
smallFastModel     → Sub-task model (haiku recommended)
mcpServers         → External tools Claude can use
permissions.allow  → Commands that run without asking
permissions.deny   → Commands that are blocked entirely
hooks.pre_tool_call  → Runs before any tool call
hooks.post_tool_call → Runs after any tool call
hooks.notification   → Runs when Claude needs you
hooks.stop           → Runs when session ends
env                → Environment variables injected per session
includeCoAuthoredBy → Add Claude attribution to commits
cleanupPeriodDays  → How long to keep conversation history`}</pre>
            </div>
            <div className="step">
              <strong>Claude.ai settings reference</strong>
              <pre>{`Profile → Custom Instructions  → Global system prompt
Profile → Memory               → Cross-conversation facts
Features → Extended Thinking   → Visible reasoning chain
Features → Web Search          → Real-time internet access
Features → Suggested Prompts   → Follow-up suggestions
Appearance                     → Dark/light mode, font size
Notifications                  → Email digest settings`}</pre>
            </div>
          </div>
        </section>

        <QuickRef title="Lesson 28 Quick Reference" items={[
          { term: 'model field', definition: 'Sets the main Claude model. Sonnet for default, Opus for complex tasks. In settings.json.' },
          { term: 'permissions.allow', definition: 'Bash/file patterns Claude can execute without asking. Scope tightly: edit(~/Projects/**) not edit(*).' },
          { term: 'permissions.deny', definition: 'Patterns blocked entirely. Always include: rm -rf, sudo, curl|bash. Your last line of defence.' },
          { term: 'hooks', definition: 'pre_tool_call / post_tool_call / notification / stop. Use for audit logs, auto-tests, desktop alerts.' },
          { term: 'Custom Instructions', definition: 'Global system prompt on claude.ai. Under 500 words. Include: stack, style, communication prefs, and "do not" rules.' },
          { term: 'Memory', definition: 'Cross-conversation facts Claude learns automatically. Review monthly, delete outdated entries, add corrections.' },
        ]} />

        <LessonNav
          level={3}
          prev={{ href: '/level3/lesson27', label: 'Lesson 27: Claude Ecosystem + Free Stack' }}
          next={{ href: '/level3/capstone', label: 'Level 3 Capstone' }}
          currentLessonId="l3-28"
        />
      </main>
    </div>
  )
}
