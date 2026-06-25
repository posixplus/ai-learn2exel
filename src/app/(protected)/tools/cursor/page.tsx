'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'
import ToolGuideExtras from '@/components/tools/ToolGuideExtras'

export default function CursorPage() {
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
            <span style={{ fontSize: '3rem' }}>⚡</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>AI IDE</span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Free Hobby Tier</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Cursor</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>The AI code editor - VS Code fork with deep AI integration and Composer</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            Cursor is one of the most popular AI-first code editors. It forks VS Code and adds powerful AI features: inline completions with multi-line awareness, chat with codebase context, and <strong>Composer</strong> - an agentic multi-file editing mode. Trusted by engineers at top tech companies.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Made by', value: 'Anysphere' },
            { label: 'Based on', value: 'VS Code' },
            { label: 'Free tier', value: 'Hobby (limited)' },
            { label: 'Pro plan', value: '$20/month' },
            { label: 'Platform', value: 'Mac, Win, Linux' },
            { label: 'Website', value: 'cursor.com' },
          ].map(f => (
            <div key={f.label} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.25rem' }}>{f.label}</div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '.95rem' }}>{f.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 1 - Download Cursor</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Go to <strong>cursor.com</strong> → Download. Pick your OS. Cursor installs as a standalone app - it does not replace your existing VS Code.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 2 - Import VS Code Settings</div>
              <p style={{ margin: 0, color: '#4B5563' }}>On first launch: <em>Cursor → Import from VS Code</em>. This copies your extensions, themes, and keybindings in one click.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 3 - Sign In</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Sign up at cursor.com. The Hobby tier gives you 2,000 completions/month + limited Composer and Chat. Pro ($20/mo) removes limits.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 4 - Choose Your AI Model</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Cursor Settings → Models. You can use GPT-5.5, Claude Opus 4.8 / Sonnet 4.6, Gemini 3.5, or Cursor&apos;s own fast model. You can also add your own API keys (OpenAI, Anthropic).</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🔑 Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '⌨️', name: 'Tab Completion', desc: 'Multi-line AI completions that predict what you are about to write. Learns from your patterns within the session.' },
              { icon: '💬', name: 'Cmd+K (Inline Edit)', desc: 'Select any code and press Cmd+K to ask AI to edit it in place. Diffs are shown before accepting.' },
              { icon: '🤖', name: 'Cmd+I (Composer)', desc: 'Agentic multi-file editing mode. Describe a task and Composer plans and implements changes across your entire codebase.' },
              { icon: '🔍', name: 'Cmd+L (Chat)', desc: 'Chat with your codebase. Reference files with @filename, symbols with @symbol, or the whole repo with @codebase.' },
              { icon: '🧩', name: '@-References', desc: 'Bring specific context into any prompt: @filename, @web, @docs, @git (for commit history), or @codebase for full-repo search.' },
              { icon: '📚', name: 'Docs Integration', desc: 'Add documentation from any library with @docs. Cursor fetches and indexes them so AI answers use your exact library version.' },
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
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Sample Usage</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>1. Cmd+K - Edit Selected Code</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>Select a function → press Cmd+K → type your instruction:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534' }}>
              "Add input validation. Throw a ValidationError if email is not valid format or if name is empty."
            </div>
            <p style={{ color: '#4B5563', marginTop: '.5rem', fontSize: '.875rem' }}>Cursor shows a diff - press Accept or Reject.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>2. Composer - Multi-File Task</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>Press Cmd+I and describe a cross-cutting change:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534' }}>
              "Migrate all our fetch calls from the old apiClient to the new httpClient in src/lib/http.ts. Update all 8 service files."
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>3. Chat with Codebase Context</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem', fontSize: '.9rem' }}>Press Cmd+L and ask questions that span multiple files:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534' }}>
              "@codebase Where do we validate user permissions? I want to add a new admin-only route."
            </div>
          </div>
        </div>

        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2 }}>
            <li>Add a <strong>.cursorrules</strong> file at your project root to set coding standards that Cursor follows in every session</li>
            <li>Use <strong>@web</strong> to pull in live documentation when asking about a specific library version</li>
            <li>In Composer, check "Auto-run" to let it execute terminal commands without prompting each time</li>
            <li>Cmd+Shift+J opens the AI history to review past suggestions</li>
            <li>You can bring your own Anthropic or OpenAI API key to use Cursor without the Pro plan limits</li>
          </ul>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.2rem' }}>⌨️ Key Shortcuts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
            {[
              ['Inline edit (Cmd+K)', 'Select code → Cmd+K'],
              ['Open Chat', 'Cmd+L'],
              ['Open Composer', 'Cmd+I'],
              ['Accept completion', 'Tab'],
              ['Accept next word', 'Cmd+→'],
              ['Open terminal', 'Ctrl+`'],
            ].map(([action, shortcut]) => (
              <div key={action} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.5rem .75rem', background: '#F9FAFB', borderRadius: 6 }}>
                <span style={{ fontSize: '.875rem', color: '#374151' }}>{action}</span>
                <kbd style={{ background: '#E5E7EB', border: '1px solid #D1D5DB', borderRadius: 4, padding: '.15rem .5rem', fontFamily: 'monospace', fontSize: '.8rem', color: '#374151', whiteSpace: 'nowrap' }}>{shortcut}</kbd>
              </div>
            ))}
          </div>
        </div>

        <ToolGuideExtras
          current="cursor"
          troubleshooting={[
            { problem: 'Tab completions are not appearing', fix: 'Cursor Settings → Features → enable Tab/Autocomplete, confirm you are signed in, and that the language for that file is not disabled.' },
            { problem: 'Model errors or rate limits', fix: 'The Hobby tier is limited. Upgrade to Pro, or add your own OpenAI / Anthropic API key in Settings → Models.' },
            { problem: '.cursorrules is ignored', fix: 'The file must be named .cursorrules at the project root. Reload the window after creating it.' },
            { problem: 'The editor feels slow', fix: 'Disable heavy VS Code extensions you imported; large repos take time to index on first open.' },
          ]}
          lessons={[
            { label: 'L39 - Inline Code Completion', href: '/level5/lesson39' },
            { label: 'L40 - AI Chat for Development', href: '/level5/lesson40' },
            { label: 'L44 - Refactoring & Code Review', href: '/level5/lesson44' },
            { label: 'L46 - Agentic Coding', href: '/level5/lesson46' },
          ]}
        />

        <ToolResources links={[
          { label: 'Download Cursor', href: 'https://cursor.com', note: 'Mac, Windows, Linux' },
          { label: 'Documentation', href: 'https://cursor.com/docs', note: 'Agent, rules, MCP, skills, CLI' },
          { label: 'Pricing', href: 'https://cursor.com/pricing', note: 'Hobby (free), Pro, Business' },
          { label: 'Changelog', href: 'https://cursor.com/changelog', note: "What's new each release" },
          { label: 'Community forum', href: 'https://forum.cursor.com', note: 'Q&A, tips, and bug reports' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/windsurf" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: Windsurf</Link>
          <Link href="/tools/vscode-ai" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: VS Code + AI</Link>
          <Link href="/tools/github-copilot" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: GitHub Copilot</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
