'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson25() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-25" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={25} duration={120}
            title="Agentic Workflows: Claude as Your Chief of Staff"
            subtitle="Design autonomous multi-step workflows — with a complete end-to-end Daily Intelligence Briefing you build today" />

          <section className="section-card">
            <h2>What Makes Something Agentic?</h2>
            <p>A conversational Claude interaction: one prompt, one response, done. An agentic Claude workflow: one goal, many steps, many tool calls, autonomous adaptation, one complete outcome.</p>
            <div className="steps-list">
              <div className="step">
                <strong>Conversational (most people)</strong>
                <p>"Summarize this document." → one response → done. You're involved at every step.</p>
              </div>
              <div className="step">
                <strong>Agentic (power users)</strong>
                <p>"Check my email, calendar, and open GitHub issues. Build a prioritized plan for today. Save it to a file and send me a brief Slack message." → Claude plans → executes 12+ tool calls → delivers a complete outcome. You come back to a finished result.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>The Agent Loop</h2>
            <div className="steps-list">
              <div className="step"><strong>1. Receive goal</strong><p>User states the objective and what "done" looks like.</p></div>
              <div className="step"><strong>2. Plan</strong><p>Claude breaks the goal into concrete steps and identifies which tools are needed for each.</p></div>
              <div className="step"><strong>3. Execute step</strong><p>Claude calls a tool (search, read file, API call, write, etc.) and receives a result.</p></div>
              <div className="step"><strong>4. Observe</strong><p>Claude reads the result and checks whether the step achieved its goal.</p></div>
              <div className="step"><strong>5. Adapt</strong><p>If the result was unexpected, Claude revises the plan. If on track, moves to the next step.</p></div>
              <div className="step"><strong>6. Repeat</strong><p>Steps 3–5 repeat until the goal is complete or Claude needs human input.</p></div>
              <div className="step"><strong>7. Deliver</strong><p>Claude returns the final output and a summary of what was done.</p></div>
            </div>
          </section>

          <section className="section-card">
            <h2>End-to-End: Building Your Daily Intelligence Briefing</h2>
            <p>This is a complete real-world agentic workflow. By the end of this section you'll have a briefing that runs automatically every morning and delivers a personalized daily plan. Follow every step.</p>
            <div className="steps-list">
              <div className="step">
                <strong>Step 1: Connect the required MCPs</strong>
                <p>This workflow needs 3 MCPs. Open <code>~/.claude/settings.json</code> and add:</p>
                <pre>{`{
  "mcpServers": {
    "gmail": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-gmail"],
      "env": { "GMAIL_CREDENTIALS_PATH": "~/.claude/gmail-credentials.json" }
    },
    "gcal": {
      "command": "npx", 
      "args": ["-y", "@modelcontextprotocol/server-google-calendar"],
      "env": { "GCAL_CREDENTIALS_PATH": "~/.claude/gcal-credentials.json" }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "your_brave_api_key" }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/Documents"]
    }
  }
}`}</pre>
                <p>Restart Claude Code and run <code>/mcp</code> to verify all 4 servers connect.</p>
              </div>
              <div className="step">
                <strong>Step 2: Run the briefing manually first</strong>
                <p>Paste this prompt into Claude Code or Cowork to test it:</p>
                <pre>{`Run my daily intelligence briefing. Here's exactly what to do:

1. CALENDAR: Get all my calendar events for today using gcal_list_events.
   Note each meeting: time, title, attendees, duration.

2. EMAIL: Search Gmail for unread emails (is:unread) from the last 24 hours.
   Categorize each as: URGENT (needs reply today) / FYI (no reply needed) / LATER.
   For URGENT emails, draft a 1-sentence suggested reply.

3. INDUSTRY NEWS: Search Brave for "[your industry] news today [current date]".
   Pick the 3 most relevant stories. One sentence summary each.

4. COMPILE: Create a briefing in this format:

# Daily Briefing — {today's date}

## 📅 Today's Schedule ({N} meetings)
[time] — [meeting title] — [key attendees]

## 📧 Email Priorities ({N} urgent)
**URGENT:**
- From: [sender] — [subject] — Suggested reply: [one sentence]

**FYI (no action needed):**
- [sender] — [subject]

## 📰 Industry Pulse
- [story 1 — one sentence]
- [story 2 — one sentence]  
- [story 3 — one sentence]

## 🎯 Focus Recommendation
[2 sentences: what to tackle first today and why, based on calendar + email]

5. SAVE: Write the complete briefing to ~/Documents/briefings/[date].md
   using the filesystem MCP.

6. CONFIRM: Tell me the briefing is saved and give me the Focus Recommendation
   as a quick summary.`}</pre>
              </div>
              <div className="step">
                <strong>Step 3: Watch Claude run the workflow (trace of what happens)</strong>
                <p>Here's exactly what Claude does step by step when you run the prompt above:</p>
                <pre>{`[Tool call 1] gcal_list_events(timeMin="2025-01-13T00:00", timeMax="2025-01-13T23:59")
→ Returns: 4 events — 9:00 standup, 11:00 product review, 2:00 1:1 with Sarah, 4:30 team retro

[Tool call 2] gmail_search_messages(query="is:unread", maxResults=30)
→ Returns: 12 unread emails from last 24 hours

[Claude reasons]: Scanning 12 emails for urgency signals...
→ 3 URGENT (deadline mentioned, question directed at user, CEO email)
→ 6 FYI (newsletters, notifications, cc'd threads)
→ 3 LATER (non-urgent requests)

[Tool call 3] brave_search(query="SaaS industry news today January 13 2025")
→ Returns: search results with headlines and snippets

[Claude reasons]: Selecting 3 most relevant stories for a SaaS PM...

[Claude composes briefing — entire document]

[Tool call 4] write_file(path="~/Documents/briefings/2025-01-13.md", content="...")
→ File saved successfully

Response to you:
"Your briefing is saved to ~/Documents/briefings/2025-01-13.md

🎯 Focus for today: Start with Sarah's email re: the API pricing decision — 
it's blocking the enterprise deal closing this week. Your 9am standup is in 
47 minutes, so draft that reply first."`}</pre>
              </div>
              <div className="step">
                <strong>Step 4: Schedule it to run automatically</strong>
                <p>Now that the workflow runs correctly, automate it. In Cowork, trigger the schedule skill:</p>
                <pre>{`Schedule my daily briefing to run automatically every weekday at 7:45am.

Use this prompt exactly: [paste your full briefing prompt from Step 2]

The briefing should save to ~/Documents/briefings/[date].md and 
send me a macOS notification when it's ready.`}</pre>
                <p>The schedule skill creates a cron-like task that runs your briefing every weekday morning. You wake up, and by the time you sit down with your coffee, the briefing is already in your Documents folder.</p>
              </div>
              <div className="step">
                <strong>Step 5: Iterate and improve</strong>
                <p>After running for a week, you'll notice patterns. Common improvements:</p>
                <ul>
                  <li>Add Slack MCP — check for important Slack messages and DMs overnight</li>
                  <li>Add your task manager (Linear/Asana/Notion) — show overdue tickets</li>
                  <li>Add GitHub — surface open PRs waiting for your review</li>
                  <li>Customize urgency signals — "emails from my CEO or direct reports are always URGENT"</li>
                  <li>Add a "This Week" section on Mondays only — what's due by Friday</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Orchestrator + Sub-Agent Pattern</h2>
            <p>For large parallel tasks, Claude can act as an orchestrator that spawns sub-agents running simultaneously. This is how Claude completes in minutes what would take you hours:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Example: Competitive research across 8 companies</strong>
                <pre>{`You: Research these 8 competitors and give me a comparison matrix.
     For each: pricing tiers, key features, target customer, recent news.
     Companies: Acme, Zendesk, Intercom, Freshdesk, HubSpot, 
                Salesforce Service Cloud, Help Scout, Groove.

Orchestrator Claude:
- Creates a plan: spawn 8 sub-agents, one per company
- Each sub-agent searches for pricing page, features page, recent press releases
- Sub-agents run in parallel (8x faster than sequential)
- Orchestrator collects all 8 results
- Synthesizes into a comparison matrix
- Identifies your top 3 competitive threats
- Saves to ~/Documents/competitive-analysis-[date].md

Total time: ~4 minutes vs 3-4 hours manually.`}</pre>
              </div>
            </div>
            <div className="info-box">
              In Claude Code and Cowork, Claude uses the built-in Agent tool to spawn sub-agents automatically. You don't need to configure anything — just give Claude a goal that benefits from parallel processing and include enough context.
            </div>
          </section>

          <section className="section-card">
            <h2>Computer Use — Claude Controls Your Screen</h2>
            <p>Computer Use lets Claude see your screen (via screenshots) and control your mouse and keyboard. This enables Claude to interact with any GUI app — not just those with APIs.</p>
            <div className="steps-list">
              <div className="step">
                <strong>What it can do</strong>
                <ul>
                  <li>Navigate websites that don't have an API or MCP</li>
                  <li>Fill out web forms automatically</li>
                  <li>Extract data from visual interfaces (dashboards, legacy systems)</li>
                  <li>Control desktop apps: Excel, Figma, Notion desktop, system settings</li>
                  <li>Test web applications by clicking through as a real user would</li>
                </ul>
              </div>
              <div className="step">
                <strong>Real example: Updating a legacy system</strong>
                <pre>{`You: Log into our internal inventory system at intranet.company.com
     and update the quantity for product SKU-4821 to 250 units.

Claude: Takes screenshot → sees the login form → types credentials 
(you've given permission) → navigates to inventory → searches SKU-4821 
→ clicks Edit → updates quantity → saves → confirms success.

Total time: 30 seconds. No API. No custom integration.`}</pre>
              </div>
            </div>
            <div className="info-box">
              <strong>Safety first:</strong> Claude always asks for permission before clicking buttons or submitting forms. Never authorize actions you haven't reviewed. Computer Use is powerful — treat it like giving someone your keyboard.
            </div>
          </section>

          <section className="section-card">
            <h2>Designing Effective Agentic Tasks</h2>
            <p>Poorly designed agentic tasks fail, stall, or produce wrong results. These rules make them reliable:</p>
            <div className="steps-list">
              <div className="step">
                <strong>1. Be specific about the goal AND what "done" looks like</strong>
                <p>❌ "Research competitors" — no finish line, no output format</p>
                <p>✅ "Research Acme and Zendesk. For each: find pricing page URL, list all pricing tiers with prices, identify their primary target segment. Output as a markdown table. Save to ~/Documents/comp-research.md"</p>
              </div>
              <div className="step">
                <strong>2. Give fallback instructions</strong>
                <p>❌ Nothing — Claude stalls when it hits a 404 or missing data</p>
                <p>✅ "If you can't find pricing for a company, note 'pricing not public' and continue. Don't get stuck on any one company for more than 2 minutes."</p>
              </div>
              <div className="step">
                <strong>3. Verify MCPs before starting</strong>
                <p>Run <code>/mcp</code> in Claude Code before starting any complex workflow. Confirm that every tool the workflow needs is connected. A workflow that hits a disconnected MCP mid-way is hard to resume.</p>
              </div>
              <div className="step">
                <strong>4. Test at small scale first</strong>
                <p>Before running on 50 items, test on 3. Catch format issues, missing edge cases, and wrong assumptions cheaply. Then scale up.</p>
              </div>
              <div className="step">
                <strong>5. Plan for human checkpoints</strong>
                <p>For workflows with real-world effects (sending emails, creating tickets, updating systems), add: "After step 4, pause and show me the result before proceeding to step 5." This keeps you in control of the parts that matter most.</p>
              </div>
            </div>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise: Build Your Daily Briefing (~40 min)</h3>
            <p>Follow the 5-step process in the "End-to-End" section above. Don't skip steps:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Phase 1 (15 min): Connect MCPs + Run Manually</strong>
                <p>Set up Gmail and Calendar MCPs. Run the briefing prompt manually. Verify Claude pulls real data from your accounts and produces a formatted briefing.</p>
              </div>
              <div className="step">
                <strong>Phase 2 (10 min): Customize for Your Work</strong>
                <p>Modify the briefing prompt to reflect your actual work: change the industry news search to your field, adjust what counts as "URGENT" email, add any other data sources you care about.</p>
              </div>
              <div className="step">
                <strong>Phase 3 (10 min): Schedule It</strong>
                <p>Use the schedule skill to automate the briefing at 7:45am every weekday. Confirm it appears in your scheduled tasks list.</p>
              </div>
              <div className="step">
                <strong>Phase 4 (5 min): Design Your Next Workflow</strong>
                <p>Write down one more agentic workflow that would save you significant time. What's the goal? What MCPs does it need? What does "done" look like? Save this in your CLAUDE.md as a future project.</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 25 Quick Reference" items={[
            { term: "Agent loop", definition: "Receive goal → Plan → Execute → Observe → Adapt → Repeat → Deliver. Claude runs this autonomously across many tool calls." },
            { term: "Daily briefing", definition: "Gmail + Calendar + Search → personalized daily plan. Runs automatically at 7:45am via scheduled task. Built in this lesson." },
            { term: "Fallback instructions", definition: "Tell Claude what to do when a step fails: 'skip and note it', 'continue with next item'. Prevents stalling on edge cases." },
            { term: "Sub-agents", definition: "Claude instances running in parallel on subtasks. Orchestrator spawns them automatically for large research or analysis tasks." },
            { term: "Computer Use", definition: "Claude sees your screen and controls mouse/keyboard. Works with any GUI — no API needed. Always approve before actions with side effects." },
            { term: "Small scale first", definition: "Test every agentic workflow on 2-3 items before running on 50. Catch problems cheaply then scale up." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level3/lesson24', label: 'Lesson 24: Cowork + Skills' }}
            next={{ href: '/level3/capstone', label: 'Level 3 Capstone' }}
            currentLessonId="l3-25"
          />
        </main>
    </div>
  )
}
