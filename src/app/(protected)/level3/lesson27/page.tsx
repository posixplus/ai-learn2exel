'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson27() {
  return (
    <div className="lesson-layout">
      <Sidebar level={3} currentLessonId="l3-27" />
      <main className="lesson-main">
        <LessonHeader level={3} lessonNumber={27} duration={90}
          title="Claude's Ecosystem + Building for Free"
          subtitle="A complete map of what Claude can connect to — plus how to ship real applications at zero cost" />

        <section className="section-card">
          <h2>Part 1: Claude&apos;s Built-In Ecosystem</h2>
          <p>
            Claude isn&apos;t just a chat interface. Through MCPs, Skills, and native tools, it can connect to almost anything.
            Here is a complete map of what is available — most of which you can enable in minutes.
          </p>
        </section>

        <section className="section-card">
          <h2>Official Anthropic MCP Servers</h2>
          <p>Maintained by Anthropic, installed with a single <code>npx</code> command. Add each to <code>~/.claude/settings.json</code>:</p>

          <div className="steps-list">
            <div className="step">
              <strong>Filesystem</strong>
              <pre>{`"filesystem": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem",
           "/Users/you/Documents"]
}`}</pre>
              <p>Read, write, and search files. Specify which directories Claude can access.</p>
            </div>
            <div className="step">
              <strong>GitHub</strong>
              <pre>{`"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "$GITHUB_TOKEN" }
}`}</pre>
              <p>Read repos, create issues/PRs, search code, list commits.</p>
            </div>
            <div className="step">
              <strong>PostgreSQL</strong>
              <pre>{`"postgres": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-postgres",
           "postgresql://user:pass@localhost/mydb"]
}`}</pre>
              <p>Query any PostgreSQL database. Works with Supabase, Neon, Railway, etc.</p>
            </div>
            <div className="step">
              <strong>Brave Search</strong>
              <pre>{`"brave-search": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-brave-search"],
  "env": { "BRAVE_API_KEY": "$BRAVE_API_KEY" }
}`}</pre>
              <p>Real-time web search. Free tier: 2,000 queries/month.</p>
            </div>
            <div className="step">
              <strong>Notion</strong>
              <pre>{`"notion": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-notion"],
  "env": { "NOTION_API_TOKEN": "$NOTION_TOKEN" }
}`}</pre>
              <p>Read and write Notion pages and databases.</p>
            </div>
            <div className="step">
              <strong>Google Maps</strong>
              <pre>{`"maps": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-google-maps"],
  "env": { "GOOGLE_MAPS_API_KEY": "$MAPS_KEY" }
}`}</pre>
              <p>Geocoding, directions, place search, distance matrix.</p>
            </div>
          </div>

          <div className="info-box" style={{marginTop:'1.5rem'}}>
            <strong>40+ official servers</strong> at <code>github.com/modelcontextprotocol/servers</code> — includes
            Slack, Puppeteer (browser automation), SQLite, Git, memory store, and more.
          </div>
        </section>

        <section className="section-card">
          <h2>Community MCP Servers</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Desktop Commander</strong> — Full filesystem, process management, shell commands, web search.
              <pre>{`npx @wonderwhy-er/desktop-commander`}</pre>
            </div>
            <div className="step">
              <strong>Supabase</strong> — Query your Supabase project, run migrations, manage auth users.
              <pre>{`npx @supabase/mcp-server-supabase --project-ref your-ref`}</pre>
            </div>
            <div className="step">
              <strong>Linear</strong> — Create/update issues, manage cycles, query projects.
              <pre>{`npx @linear/mcp-server`}</pre>
            </div>
            <div className="step">
              <strong>Stripe</strong> — Query payments, customers, subscriptions, issue refunds.
              <pre>{`npx stripe-mcp`}</pre>
            </div>
            <div className="step">
              <strong>Vercel</strong> — List deployments, check build logs, manage env vars.
              <pre>{`npx @vercel/mcp-adapter`}</pre>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Skills: Specialised Expertise Packs</h2>
          <p>
            Skills give Claude deep, context-specific expertise for a domain. When you invoke a skill, Claude loads
            a full set of best practices, templates, and decision frameworks for that task type.
          </p>

          <div className="steps-list">
            <div className="step"><strong>Data Skills</strong> — SQL queries, statistical analysis, data visualisation, dashboard building, data exploration</div>
            <div className="step"><strong>Document Skills</strong> — Word (.docx), PDFs, spreadsheets (.xlsx), PowerPoint (.pptx) with full formatting</div>
            <div className="step"><strong>Sales Skills</strong> — Account research, call prep, competitive intelligence, outreach drafting, daily briefing</div>
            <div className="step"><strong>Engineering Skills</strong> — Code review, system design, debugging, testing strategy, incident response</div>
            <div className="step"><strong>Marketing Skills</strong> — Content creation, campaign planning, SEO audit, brand voice, email sequences</div>
            <div className="step"><strong>Finance Skills</strong> — Journal entries, reconciliation, variance analysis, financial statements, SOX testing</div>
            <div className="step"><strong>Legal Skills</strong> — Contract review, NDA triage, compliance checks, canned responses</div>
            <div className="step"><strong>Bio Research Skills</strong> — Single-cell RNA QC, scVI deep learning, Nextflow pipelines, instrument data conversion</div>
          </div>

          <div className="info-box">
            <strong>Creating your own skills</strong> is covered in Lesson 24.
            Any workflow you repeat more than 3 times is a good skill candidate.
          </div>
        </section>

        <section className="section-card">
          <h2>Native Claude Tools (No Setup Needed)</h2>
          <div className="steps-list">
            <div className="step"><strong>Read / Write / Edit</strong> — Direct file access to your workspace.</div>
            <div className="step"><strong>Bash</strong> — Shell commands in an isolated sandbox. Python, Node, npm, pip pre-installed.</div>
            <div className="step"><strong>Web Search + WebFetch</strong> — Search the web and fetch page content.</div>
            <div className="step"><strong>Computer Use</strong> — Control your desktop, click UI, read screens. Unique to Cowork mode.</div>
            <div className="step"><strong>Gmail / Google Calendar / Drive</strong> — Pre-built connectors available via Cowork plugins.</div>
          </div>
        </section>

        <section className="section-card">
          <h2>Part 2: Building Real Apps for Free</h2>
          <p>
            You now know how to work with Claude at an expert level. The modern free-tier stack lets you turn that into
            actual products at zero cost — until you have real users.
          </p>

          <div className="steps-list">
            <div className="step">
              <strong>Vercel — Hosting &amp; Deployment</strong>
              <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
                <li>Free: 100GB bandwidth/month, unlimited personal projects</li>
                <li>Auto-deploy on every Git push, preview URLs for every PR</li>
                <li>Serverless functions (API routes) and Cron jobs included</li>
                <li>Best for: Next.js, React, Vue, SvelteKit</li>
              </ul>
            </div>
            <div className="step">
              <strong>Supabase — Database, Auth, Storage</strong>
              <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
                <li>Free: 500MB database, 1GB file storage, 50K monthly active users</li>
                <li>PostgreSQL under the hood — full SQL, Row Level Security</li>
                <li>Built-in auth (email, OAuth: Google, GitHub, Apple)</li>
                <li>Real-time subscriptions and pgvector for AI embeddings</li>
              </ul>
            </div>
            <div className="step">
              <strong>Clerk — Authentication (alternative)</strong>
              <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
                <li>Free: up to 10,000 monthly active users</li>
                <li>Beautiful pre-built sign-in/up UI, works with Next.js App Router</li>
                <li>Social logins, MFA, organisations — all on free tier</li>
              </ul>
            </div>
            <div className="step">
              <strong>Resend — Transactional Email</strong>
              <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
                <li>Free: 3,000 emails/month, 100/day</li>
                <li>React Email for beautiful templates, simple REST API</li>
              </ul>
            </div>
            <div className="step">
              <strong>Cloudflare — DNS, CDN, Workers</strong>
              <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
                <li>Free DNS for custom domains, Workers free: 100K requests/day</li>
                <li>R2 object storage free: 10GB/month</li>
              </ul>
            </div>
            <div className="step">
              <strong>Stripe — Payments</strong>
              <ul style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'1.8'}}>
                <li>No monthly fee — only pay per transaction (2.9% + 30c)</li>
                <li>Test mode completely free with no limits</li>
                <li>Subscriptions, one-time payments, invoicing all included</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Worked Example: Feedback Collector App in 30 Minutes</h2>
          <p>
            A public form where users submit feedback, you view it in a dashboard, and you get an email notification.
            Cost: $0/month until thousands of users.
          </p>

          <div className="hands-on-box">
            <h3>Step-by-Step Build with Claude</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Step 1 — Scaffold</strong>
                <pre>{`npx create-next-app@latest feedback-app --typescript --tailwind --app
cd feedback-app`}</pre>
              </div>
              <div className="step">
                <strong>Step 2 — Supabase schema</strong>
                <p>Go to supabase.com, create a free project, run this SQL in the editor:</p>
                <pre>{`create table feedback (
  id uuid primary key default gen_random_uuid(),
  name text, email text,
  message text not null,
  created_at timestamptz default now()
);
alter table feedback enable row level security;
create policy "Anyone can submit" on feedback
  for insert with check (true);
create policy "Auth users can read" on feedback
  for select using (auth.role() = 'authenticated');`}</pre>
              </div>
              <div className="step">
                <strong>Step 3 — Ask Claude to build the form</strong>
                <pre>{`Build a feedback form at /feedback:
- Fields: name (optional), email (optional), message (required)
- On submit: insert to Supabase table "feedback"
- Use @supabase/supabase-js with env vars:
  NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
- Show a success message after submit
- Clean Tailwind styling`}</pre>
              </div>
              <div className="step">
                <strong>Step 4 — Ask Claude to build the admin dashboard</strong>
                <pre>{`Build a protected admin page at /admin:
- Show all feedback entries (newest first) in a table
- Use Supabase server client with env: SUPABASE_SERVICE_ROLE_KEY
- Simple password protection via cookie
- Columns: name, email, message, timestamp`}</pre>
              </div>
              <div className="step">
                <strong>Step 5 — Add email notifications via Resend</strong>
                <pre>{`Add API route /api/notify:
- Called after each feedback submission
- Sends email via Resend SDK to my@email.com
- Subject: "New feedback from [name or Anonymous]"
- Body: message + sender info
- Env var: RESEND_API_KEY`}</pre>
              </div>
              <div className="step">
                <strong>Step 6 — Deploy to Vercel</strong>
                <pre>{`vercel --prod
# Or connect your GitHub repo at vercel.com → New Project
# Add env vars in Vercel → Settings → Environment Variables`}</pre>
                <p style={{marginTop:'0.5rem'}}>Live at a <code>.vercel.app</code> URL in under 2 minutes. Add a custom domain with Cloudflare DNS for free.</p>
              </div>
            </div>
          </div>

          <div className="info-box" style={{marginTop:'1.5rem'}}>
            <strong>Total cost:</strong> $0/month for up to ~10,000 users, ~500MB of data, and 3,000 emails/month.
            When you scale: Supabase Pro is $25/month, Vercel Pro is $20/month.
          </div>
        </section>

        <section className="section-card">
          <h2>What You Can Build End-to-End</h2>
          <div className="steps-list">
            <div className="step"><strong>Internal tools</strong> — Admin dashboards, data viewers, report generators. Own your data, no SaaS subscription.</div>
            <div className="step"><strong>AI-powered apps</strong> — Connect the Anthropic API (<code>npm install @anthropic-ai/sdk</code>). Claude builds Claude-powered apps for you.</div>
            <div className="step"><strong>SaaS MVPs</strong> — Full auth, payments (Stripe), email, database — the whole stack, free until you have paying users.</div>
            <div className="step"><strong>Automations</strong> — Webhook handlers, scheduled jobs (Vercel Cron), pipelines triggered by Supabase database events.</div>
          </div>
        </section>

        <QuickRef title="Lesson 27 Quick Reference" items={[
          { term: 'Official MCPs', definition: '40+ Anthropic-maintained servers: filesystem, GitHub, PostgreSQL, Brave Search, Notion, Google Maps. Install via npx.' },
          { term: 'Community MCPs', definition: 'Desktop Commander, Supabase, Linear, Stripe, Vercel — community-built servers covering major tools.' },
          { term: 'Skills', definition: 'Reusable expertise packs for Data, Docs, Sales, Engineering, Marketing, Finance, Legal, Bio Research. Build your own via Lesson 24.' },
          { term: 'Free stack', definition: 'Vercel (hosting) + Supabase (DB+auth) + Resend (email) + Stripe (payments) = $0/month until real scale.' },
          { term: 'Supabase free tier', definition: '500MB database, 50K MAU, real-time, Row Level Security, pgvector for AI embeddings. No credit card needed.' },
          { term: 'Vercel free tier', definition: '100GB bandwidth, unlimited projects, auto-deploy from Git, preview URLs, Cron jobs. Best for Next.js.' },
        ]} />

        <LessonNav
          level={3}
          prev={{ href: '/level3/lesson26', label: "Lesson 26: Don'ts & Beware" }}
          next={{ href: '/level3/lesson28', label: 'Lesson 28: Claude Settings' }}
          currentLessonId="l3-27"
        />
      </main>
    </div>
  )
}
