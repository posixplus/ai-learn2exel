'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson22() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-22" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={22} duration={120}
            title="MCP: Connecting Claude to Everything"
            subtitle="Model Context Protocol — the open standard that makes Claude 10x more powerful" />

          <section className="section-card">
            <h2>What is MCP?</h2>
            <p>Model Context Protocol (MCP) is an open standard released by Anthropic in November 2024. It defines how AI models connect to external tools, data sources, and services in a standardized way. Think of it as USB-C for AI — one universal connector that works with everything.</p>
            <p>Before MCP, every AI integration was a one-off custom build. With MCP, any tool that builds an MCP server is instantly compatible with Claude. The ecosystem is exploding: GitHub, Slack, Notion, Linear, Figma, Gmail, Google Calendar, and hundreds more already have MCP servers.</p>
          </section>

          <section className="section-card">
            <h2>MCP Architecture</h2>
            <div className="steps-list">
              <div className="step">
                <strong>MCP Client</strong>
                <p>Claude (or Claude Code, Cowork). The client makes requests, receives tool results, and decides what to do next. Claude can call multiple MCP servers simultaneously.</p>
              </div>
              <div className="step">
                <strong>MCP Server</strong>
                <p>A program that connects to a specific service and exposes its capabilities as callable "tools". Runs locally on your machine (stdio) or remotely (HTTP/SSE).</p>
              </div>
              <div className="step">
                <strong>Tools</strong>
                <p>Named functions with defined inputs/outputs. Examples: <code>search_github_repos</code>, <code>create_github_issue</code>, <code>list_slack_channels</code>. Claude reads the tool descriptions automatically and decides which to call.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>End-to-End: Setting Up GitHub + Filesystem MCPs</h2>
            <p>This is the most useful starting MCP pair. GitHub lets Claude interact with your repos. Filesystem gives Claude direct file access on your machine. Here's the complete setup in 5 steps:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Step 1: Get a GitHub Personal Access Token</strong>
                <p>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">github.com/settings/tokens</a> → Generate new token (classic) → Select scopes: <code>repo</code>, <code>read:org</code>, <code>read:user</code> → Copy the token (starts with <code>ghp_</code>).</p>
              </div>
              <div className="step">
                <strong>Step 2: Open your Claude Code settings</strong>
                <pre>{`# Create the directory if it doesn't exist
mkdir -p ~/.claude

# Open in your editor
nano ~/.claude/settings.json`}</pre>
              </div>
              <div className="step">
                <strong>Step 3: Add the MCP server configs</strong>
                <p>Paste this into <code>~/.claude/settings.json</code> (replace the token and your username):</p>
                <pre>{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/Documents",
        "/Users/yourname/Desktop",
        "/Users/yourname/Downloads"
      ]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your_brave_api_key"
      }
    }
  }
}`}</pre>
              </div>
              <div className="step">
                <strong>Step 4: Restart Claude Code and verify</strong>
                <pre>{`# Close and reopen Claude Code, then run:
claude

# Inside Claude Code, type:
/mcp

# You should see:
# ✓ github (connected) — 15 tools available
# ✓ filesystem (connected) — 8 tools available
# ✓ brave-search (connected) — 1 tool available`}</pre>
              </div>
              <div className="step">
                <strong>Step 5: Test with a real request</strong>
                <p>Type this into Claude Code to confirm everything works:</p>
                <pre>{`List all my GitHub repositories created in the last 6 months.
For each: name, description, primary language, and last commit date.
Format as a table.`}</pre>
                <p>Claude should call <code>list_repos</code> and return a formatted table from your actual GitHub account.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Real Workflow: GitHub MCP in Action</h2>
            <p>Here's an actual end-to-end workflow using GitHub MCP. This takes 2 minutes instead of 20:</p>
            <div className="steps-list">
              <div className="step">
                <strong>The Goal: Weekly PR Review + Issue Triage</strong>
                <p>Every Monday, you want to: review open PRs, find stale issues (no activity in 14+ days), and create a priority list.</p>
              </div>
              <div className="step">
                <strong>The Prompt (paste this into Claude Code):</strong>
                <pre>{`Using GitHub MCP:
1. List all open PRs in my repo [owner/repo-name]
   - For each: title, author, days open, review status
2. Find all open issues with no activity in the last 14 days
   - Flag any with the "bug" label as high priority
3. Compile a Monday triage doc:
   - PRs needing my review (I am @your-github-username)
   - High priority stale issues
   - Everything else stale
4. Save the result to ~/Documents/weekly-triage.md`}</pre>
              </div>
              <div className="step">
                <strong>What Claude Does (you watch it work):</strong>
                <p>Claude calls <code>list_pull_requests</code> → <code>list_issues</code> with <code>state=open</code> → filters by last activity date → categorizes by priority → calls <code>write_file</code> via Filesystem MCP → saves the markdown doc.</p>
                <p>Total time: ~45 seconds. Result: a complete priority list ready when you start your week.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Popular Public MCP Servers</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Slack MCP</strong>
                <p>Read messages, search history, post to channels. Install: <code>npx -y @modelcontextprotocol/server-slack</code>. Needs <code>SLACK_BOT_TOKEN</code> and <code>SLACK_TEAM_ID</code>. Use for: daily briefings, status updates, monitoring channels.</p>
              </div>
              <div className="step">
                <strong>Google Drive MCP</strong>
                <p>Search and read documents and spreadsheets. Install: <code>npx -y @modelcontextprotocol/server-gdrive</code>. Needs OAuth setup. Use for: referencing specs, analyzing data, working with team docs.</p>
              </div>
              <div className="step">
                <strong>Notion MCP</strong>
                <p>Read/write Notion pages, search workspace, update databases. Needs <code>NOTION_API_KEY</code>. Use for: knowledge management, meeting notes, project tracking.</p>
              </div>
              <div className="step">
                <strong>Linear MCP</strong>
                <p>Create/update tickets, search issues, manage sprints. Needs <code>LINEAR_API_KEY</code>. Integrates your Claude coding sessions directly with your issue tracker.</p>
              </div>
              <div className="step">
                <strong>PostgreSQL MCP</strong>
                <p>Query databases directly. Install: <code>npx -y @modelcontextprotocol/server-postgres</code>. Needs <code>POSTGRES_URL</code>. Use for: data analysis, debugging data issues, generating reports from your DB.</p>
              </div>
            </div>
            <div className="info-box">
              <strong>Browse all:</strong> <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer">github.com/modelcontextprotocol/servers</a> — community-maintained list of MCP servers
            </div>
          </section>

          <section className="section-card">
            <h2>Setting Up MCPs in Cowork</h2>
            <p>In Cowork mode, MCPs are managed through plugins. The Gmail, Google Calendar, Figma, and other MCPs you see in the toolbar are all MCP-backed. To add a new MCP server:</p>
            <ul>
              <li>Open Cowork Settings → Connected Tools</li>
              <li>Or use the <code>setup-cowork</code> skill: type "Help me connect GitHub to Cowork"</li>
              <li>Or install a plugin that bundles the MCP config (e.g., the Engineering plugin includes GitHub MCP)</li>
            </ul>
            <div className="info-box">
              <strong>Cowork vs Claude Code MCP configs:</strong> Cowork has its own MCP management UI. Claude Code uses <code>~/.claude/settings.json</code>. They can share the same MCP servers but are configured separately.
            </div>
          </section>

          <section className="section-card">
            <h2>Building a Simple Custom MCP Server</h2>
            <p>Any internal tool or data source can become an MCP server. Here's a working minimal example in TypeScript — connects Claude to an internal REST API:</p>
            <pre>{`import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  { name: "company-api", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// Tell Claude what tools are available
server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "get_customer",
      description: "Fetch customer data by customer ID from our internal CRM",
      inputSchema: {
        type: "object",
        properties: {
          customer_id: { type: "string", description: "The customer ID (e.g. CUST-1234)" }
        },
        required: ["customer_id"]
      }
    },
    {
      name: "list_open_tickets",
      description: "List all open support tickets for a customer",
      inputSchema: {
        type: "object",
        properties: {
          customer_id: { type: "string" },
          priority: { type: "string", enum: ["high", "medium", "low", "all"] }
        },
        required: ["customer_id"]
      }
    }
  ]
}));

// Handle tool calls
server.setRequestHandler("tools/call", async (req) => {
  const { name, arguments: args } = req.params;

  if (name === "get_customer") {
    const res = await fetch(\`https://internal-api.company.com/customers/\${args.customer_id}\`, {
      headers: { "Authorization": \`Bearer \${process.env.INTERNAL_API_KEY}\` }
    });
    const data = await res.json();
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }

  if (name === "list_open_tickets") {
    const res = await fetch(
      \`https://internal-api.company.com/tickets?customer=\${args.customer_id}&status=open&priority=\${args.priority || 'all'}\`,
      { headers: { "Authorization": \`Bearer \${process.env.INTERNAL_API_KEY}\` } }
    );
    const data = await res.json();
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
});

new StdioServerTransport(server).start();`}</pre>
            <p>Add it to <code>settings.json</code>:</p>
            <pre>{`"company-api": {
  "command": "node",
  "args": ["/path/to/company-api-server/index.js"],
  "env": {
    "INTERNAL_API_KEY": "your_api_key"
  }
}`}</pre>
            <p>Now Claude can answer: "Get me customer CUST-4821's profile and all their open high-priority tickets" — pulling live data from your internal system.</p>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise (~30 min)</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Task A: Connect GitHub MCP (15 min)</strong>
                <p>Follow the 5-step setup above. Get your PAT, configure <code>~/.claude/settings.json</code>, restart Claude Code, run <code>/mcp</code> to confirm connection. Then run the weekly triage prompt against one of your real repos.</p>
              </div>
              <div className="step">
                <strong>Task B: Connect One More MCP (10 min)</strong>
                <p>Pick one more MCP relevant to your work: Slack, Notion, Linear, or PostgreSQL. Follow the same pattern: get API key → add to settings.json → verify with /mcp → run one real test query.</p>
              </div>
              <div className="step">
                <strong>Task C: Design Your Custom MCP (5 min)</strong>
                <p>Think about an internal tool at your company that Claude doesn't have access to. Sketch out: what 3 tools would you expose? What would each tool take as input and return? (No code needed — just the design.)</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 22 Quick Reference" items={[
            { term: "~/.claude/settings.json", definition: "Global Claude Code config. Add mcpServers here with command, args, and env. Restart after editing." },
            { term: "/mcp command", definition: "Lists all connected MCP servers and their available tools. Use to verify connections and debug." },
            { term: "npx -y @mcp/server-*", definition: "Standard install pattern for public MCP servers. npx downloads and runs without a separate install step." },
            { term: "GITHUB_PERSONAL_ACCESS_TOKEN", definition: "Required env var for GitHub MCP. Get from github.com/settings/tokens. Needs repo + read:org scopes." },
            { term: "Custom MCP", definition: "Any REST API or internal tool can become an MCP server. Expose 3-5 key tools. Claude auto-discovers and uses them." },
            { term: "stdio transport", definition: "Local MCP servers communicate via stdin/stdout. Fast, no network overhead. Used by all npx-based servers." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level3/lesson21', label: 'Lesson 21: CLAUDE.md' }}
            next={{ href: '/level3/lesson23', label: 'Lesson 23: Claude Code Superuser' }}
            currentLessonId="l3-22"
          />
        </main>
    </div>
  )
}
