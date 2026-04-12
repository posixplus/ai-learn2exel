'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function GithubCopilotPage() {
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
            <span style={{ fontSize: '3rem' }}>🐙</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>AI Coding Assistant</span>
                <span style={{ background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>$10/month · Free for Students</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>GitHub Copilot</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>by GitHub (Microsoft) — the most widely used AI coding assistant</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            GitHub Copilot is the original mainstream AI coding assistant, used by over 1.8 million developers. It integrates into VS Code, JetBrains IDEs, Vim/Neovim, and GitHub.com. It offers inline completions, a chat panel with slash commands, and Copilot Workspace for agentic PR-level tasks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Made by', value: 'GitHub / Microsoft' },
            { label: 'Individual', value: '$10/month' },
            { label: 'Business', value: '$19/user/month' },
            { label: 'Free tier', value: 'Students & OSS' },
            { label: 'Works in', value: 'VS Code, JetBrains, Vim' },
            { label: 'Powered by', value: 'GPT-4o + Claude' },
          ].map(f => (
            <div key={f.label} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.25rem' }}>{f.label}</div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '.95rem' }}>{f.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup (VS Code)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Get a Copilot subscription', desc: 'Go to github.com/features/copilot → Start free trial (30 days free). Students: apply at github.com/education for free access.' },
              { step: '2', title: 'Install the extensions', desc: 'VS Code Extensions → search "GitHub Copilot" → install it. Then search "GitHub Copilot Chat" and install that too (separate extension).' },
              { step: '3', title: 'Sign in with GitHub', desc: 'VS Code will prompt you to sign in with GitHub. Authorize in the browser. Your subscription activates automatically.' },
              { step: '4', title: 'Configure your model', desc: 'Copilot Settings → Model → choose GPT-4o (default), Claude 3.5 Sonnet, or o3-mini. You can switch per task.' },
              { step: '5', title: 'Enable Copilot Edits (optional)', desc: 'View → Copilot Edits to enable multi-file agentic editing. This is Copilot\'s answer to Cursor Composer.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1D4ED8', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem', flexShrink: 0, marginTop: 2 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '.25rem' }}>{s.title}</div>
                  <div style={{ color: '#4B5563', fontSize: '.9rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Core Features & How to Use Them</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.75rem', color: '#1D4ED8' }}>① Inline Completions</div>
            <p style={{ color: '#4B5563', fontSize: '.9rem', margin: '0 0 .5rem' }}>Start typing — ghost text appears. Tab to accept, Esc to dismiss, Alt+] to see next suggestion.</p>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.7 }}>
              <span style={{ color: '#94A3B8' }}>{`# fetch user data with retry logic and exponential backoff`}</span><br />
              <span style={{ color: '#7DD3FC' }}>async def</span> <span style={{ color: '#FDE68A' }}>fetch_user</span>(<span style={{ color: '#86EFAC' }}>user_id: str</span>):<br />
              <span style={{ color: '#94A3B8', marginLeft: '1.5rem' }}>{`# ← Copilot writes the full implementation`}</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.75rem', color: '#1D4ED8' }}>② Chat Panel Slash Commands</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
              {[
                ['/explain', 'Explain selected code in plain English'],
                ['/fix', 'Find and fix a bug in selection'],
                ['/tests', 'Generate unit tests for selection'],
                ['/doc', 'Add JSDoc/docstring comments'],
                ['/optimize', 'Suggest performance improvements'],
                ['/new', 'Scaffold a new file or component'],
              ].map(([cmd, desc]) => (
                <div key={cmd} style={{ padding: '.75rem', background: '#F0F4FF', border: '1px solid #C7D2FE', borderRadius: 8 }}>
                  <code style={{ fontFamily: 'monospace', fontSize: '.9rem', color: '#3730A3', fontWeight: 700 }}>{cmd}</code>
                  <div style={{ fontSize: '.8rem', color: '#4B5563', marginTop: '.25rem' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.75rem', color: '#1D4ED8' }}>③ Copilot Edits (Multi-File Agentic Mode)</div>
            <p style={{ color: '#4B5563', fontSize: '.9rem', margin: '0 0 .75rem' }}>View → Copilot Edits → describe a task spanning multiple files:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem', fontSize: '.9rem', color: '#166534' }}>
              "Add rate limiting to all POST endpoints. Use express-rate-limit with 100 requests per 15 minutes per IP. Add the middleware in app.ts."
            </div>
            <p style={{ color: '#4B5563', fontSize: '.875rem', marginTop: '.75rem' }}>Copilot Edits plans the changes, shows diffs across files, and lets you review and accept each one.</p>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.2rem' }}>⌨️ Key Shortcuts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
            {[
              ['Accept suggestion', 'Tab'],
              ['Next suggestion', 'Alt+]'],
              ['Previous suggestion', 'Alt+['],
              ['Open Chat panel', 'Ctrl+Cmd+I (Mac)'],
              ['Inline Edit', 'Cmd+I / Ctrl+I'],
              ['Trigger suggestion', 'Alt+\\'],
            ].map(([action, shortcut]) => (
              <div key={action} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.5rem .75rem', background: '#F9FAFB', borderRadius: 6 }}>
                <span style={{ fontSize: '.875rem', color: '#374151' }}>{action}</span>
                <kbd style={{ background: '#E5E7EB', border: '1px solid #D1D5DB', borderRadius: 4, padding: '.15rem .5rem', fontFamily: 'monospace', fontSize: '.8rem', color: '#374151', whiteSpace: 'nowrap' }}>{shortcut}</kbd>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2 }}>
            <li><strong>Free for students:</strong> Verify at github.com/education — includes Copilot + other GitHub Pro features</li>
            <li>Use <strong>@workspace</strong> in chat to ask about your entire project: "@workspace where do we handle auth?"</li>
            <li>Copilot works in <strong>JetBrains</strong> (IntelliJ, WebStorm, PyCharm) — install from the JetBrains Marketplace</li>
            <li>Switch models per task: use Claude Sonnet for analysis, GPT-4o for coding, o3-mini for math</li>
            <li>Add a <strong>.github/copilot-instructions.md</strong> file to set project-wide instructions for Copilot</li>
          </ul>
        </div>

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
