'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'
import ToolGuideExtras from '@/components/tools/ToolGuideExtras'

export default function AntigravityPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Developer Tools</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🪐</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem', flexWrap: 'wrap' }}>
                <span style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Agent-First IDE</span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Free Public Preview</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Google Antigravity</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>Google&apos;s agent-first development platform - autonomous agents that plan, build, and test across your whole project</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            Announced at Google I/O 2026, <strong>Antigravity</strong> is Google&apos;s standalone, agent-first
            development platform. Instead of autocompleting line by line, you describe a task in plain
            language and autonomous agents plan it, edit across multiple files, and <em>actually run and test
            the app</em> before handing it back. It is built on Gemini 3.5, and a signature feature is the
            <strong> Browser Subagent</strong>: Antigravity spins up a real Chrome window, clicks through your
            app, takes screenshots, and fixes what is broken - without you ever opening DevTools.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Made by', value: 'Google' },
            { label: 'Type', value: 'Agent-first IDE' },
            { label: 'Free tier', value: 'Public preview' },
            { label: 'Powered by', value: 'Gemini 3.5' },
            { label: 'Platform', value: 'Mac, Win, Linux' },
            { label: 'Get it', value: 'antigravity.google' },
          ].map(f => (
            <div key={f.label} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.25rem' }}>{f.label}</div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '.95rem' }}>{f.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <strong style={{ color: '#1D4ED8' }}>Where it fits in Google&apos;s tools:</strong>
          <p style={{ margin: '.4rem 0 0', color: '#1E3A8A', fontSize: '.92rem', lineHeight: 1.6 }}>
            Google&apos;s old browser IDE, <strong>Project IDX</strong>, became <strong>Firebase Studio</strong>
            (April 2025), which is now winding down - Google points users toward <strong>Google AI Studio</strong>
            (for prompting/prototyping with Gemini) and <strong>Antigravity</strong> (the agent-first IDE for
            building real apps). If you want autonomous agents writing and testing code, Antigravity is the
            current tool.
          </p>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🪐 Install &amp; Setup</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 1 - Download the app</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Go to <strong>antigravity.google</strong> and download the desktop app for Mac, Windows, or Linux. It is a standalone app (free public preview) - it does not replace your existing editor. There is also an Antigravity CLI and a mobile companion app in preview.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 2 - Sign in with Google</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Log in with your Google account. The preview is free for individuals; usage limits scale with your Google AI plan (AI Pro, or AI Ultra for heavy use).</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 3 - Open or create a project</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Point Antigravity at a folder (existing repo or a new one). The agents read your whole project as context before they start.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 4 - Connect tools (optional)</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Antigravity supports <strong>MCP</strong> servers, reusable <strong>Skills</strong>, and JSON <strong>hooks</strong> (the same building blocks you learned in Levels 7-8). Add the ones your workflow needs - e.g. GitHub, a database, or your issue tracker.</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🔑 Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🧑‍✈️', name: 'Agent Manager', desc: 'A mission-control view where you launch agents, watch their plans, and approve or redirect them. You manage agents, not keystrokes.' },
              { icon: '🌐', name: 'Browser Subagent', desc: 'Spins up a real Chrome instance, uses your app like a person - clicks, fills forms, screenshots - and self-debugs anything that breaks.' },
              { icon: '⚙️', name: 'Parallel Subagents', desc: 'Splits a big task across multiple agents working at once, each in its own clean context (the Level 8 idea, built in).' },
              { icon: '📦', name: 'Artifacts', desc: 'Agents produce reviewable artifacts - task lists, plans, screenshots, test results - so you can verify the work, not just the final diff.' },
              { icon: '🔌', name: 'MCP + Skills + Hooks', desc: 'Connect external tools via MCP, encode know-how as Skills, and trigger shell commands with JSON hooks. Scheduled tasks too.' },
              { icon: '⌨️', name: 'CLI & SDK', desc: 'Drive the same agents from your terminal or from your own code, and run them on managed cloud infrastructure.' },
            ].map(f => (
              <div key={f.name} style={{ padding: '1rem', background: '#F9FAFB', borderRadius: 8, border: '1px solid #F3F4F6' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '.3rem' }}>{f.name}</div>
                <div style={{ fontSize: '.875rem', color: '#6B7280', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Example Project: Build a To-Do App</h2>
          <p style={{ color: '#4B5563', marginBottom: '1.25rem', fontSize: '.95rem' }}>
            Here is the full agent-first loop on a small but real project - the same shape you would use for a
            feature at work.
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>1. Describe the app in one prompt</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>In the Agent Manager, give a single high-level task:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534' }}>
              &quot;Build a to-do web app: add tasks, mark them done, delete them, and save them in the browser so they persist on refresh. Plain HTML/CSS/JS, no backend. Make it keyboard accessible.&quot;
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>2. Review the agent&apos;s plan (artifact)</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>Antigravity returns a plan before writing code. You approve or tweak it:</p>
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.85rem', color: '#374151', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>{`Plan
 1. index.html - input + add button + task list
 2. styles.css  - clean layout, focus states for a11y
 3. app.js      - add / toggle / delete, render from state
 4. persistence - save state to localStorage, load on start
 5. verify in browser: add 3 tasks, toggle, delete, refresh`}</div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>3. Let it build - then watch it test itself</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>
              The agent writes the files, then the <strong>Browser Subagent</strong> opens the app and actually
              uses it: types a task, clicks add, toggles it done, deletes one, refreshes the page to confirm it
              persists. It captures screenshots at each step. If &quot;delete&quot; does not work, it sees the
              failure, fixes <code>app.js</code>, and re-tests - on its own.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>4. Review artifacts &amp; iterate</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>You get the working app plus screenshots and a test summary. Send one follow-up to refine:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534' }}>
              &quot;Add a filter: All / Active / Done. Keep the current task in focus after toggling. Re-test in the browser.&quot;
            </div>
          </div>
        </div>

        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2 }}>
            <li><strong>Review the artifacts, not just the result</strong> - read the plan and the screenshots before approving. Agent-first does not mean hands-off (Level 7: stay the engineer).</li>
            <li><strong>Think in tasks, not keystrokes</strong> - write a clear goal and acceptance criteria, the way you learned in Level 9 (spec-driven development).</li>
            <li><strong>Let the Browser Subagent earn its keep</strong> - ask it to verify the actual user flow, not just &quot;does it compile.&quot;</li>
            <li><strong>Connect MCP servers</strong> for your real tools (GitHub, database, tracker) so agents can act, not just suggest.</li>
            <li><strong>It is a free preview</strong> - usage is capped by your Google AI plan tier, so keep tasks scoped.</li>
          </ul>
        </div>

        <ToolGuideExtras
          current="antigravity"
          troubleshooting={[
            { problem: "Can't sign in or no preview access", fix: 'Antigravity is a public preview - sign in with a Google account. If access is gated, request it on antigravity.google and check your Google AI plan.' },
            { problem: 'The Browser Subagent does nothing', fix: 'It needs a Chrome install it can drive. Make sure Chrome is installed and permitted, then re-run the task so the agent can open and test the app.' },
            { problem: 'The agent goes off track', fix: 'Open its artifact (the plan), correct it, and re-run. Agent-first still needs your review at each gate - do not just approve blindly.' },
            { problem: 'Hitting usage limits', fix: 'Free-preview usage scales with your Google AI tier (Pro / Ultra). Keep tasks scoped, or upgrade the plan.' },
          ]}
          lessons={[
            { label: 'L46 - Agentic Coding', href: '/level5/lesson46' },
            { label: 'L56 - Prompter to Loop Designer', href: '/level7/lesson56' },
            { label: 'L63 - The Minimum Viable Loop', href: '/level7/lesson63' },
          ]}
        />

        <ToolResources links={[
          { label: 'Get Antigravity', href: 'https://antigravity.google', note: 'Download the agent-first IDE (public preview)' },
          { label: 'Announcement & overview', href: 'https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/', note: 'Google Developers blog: features explained' },
          { label: 'Google AI plans', href: 'https://one.google.com/about/google-ai-plans', note: 'AI Pro / AI Ultra usage limits' },
          { label: 'Google AI Studio', href: 'https://aistudio.google.com', note: 'Prompt & prototype with Gemini' },
          { label: 'I/O 2026 dev highlights', href: 'https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/', note: 'Context on the 2026 launch' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/cursor" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: Cursor</Link>
          <Link href="/tools/windsurf" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: Windsurf</Link>
          <Link href="/tools/claude-code-cli" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: Claude Code CLI</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
