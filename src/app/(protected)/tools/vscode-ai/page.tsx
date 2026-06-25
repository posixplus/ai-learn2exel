'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'
import ToolGuideExtras from '@/components/tools/ToolGuideExtras'

export default function VscodeAiPage() {
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
            <span style={{ fontSize: '3rem' }}>🔵</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Code Editor + Extensions</span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Free (editor)</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>VS Code + AI Extensions</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>Add powerful AI to the world's most popular editor - Copilot, Claude, or Codeium</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            VS Code is the most-used code editor in the world. With the right AI extensions, it becomes a powerful AI-assisted development environment. Unlike Cursor or Windsurf, you don't switch editors - you supercharge the one you already know. Three main AI options: GitHub Copilot, the Claude extension, and Codeium (free).
          </p>
        </div>

        {/* Three options */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { icon: '🐙', name: 'GitHub Copilot', price: '$10/month', best: 'Best all-around; deep GitHub + VS Code integration', badge: 'Most Popular' },
            { icon: '🟣', name: 'Claude for VS Code', price: 'Free (uses Claude account)', best: 'Best reasoning and long-context code tasks', badge: 'Best for Analysis' },
            { icon: '🟢', name: 'Codeium', price: 'Free forever', best: 'Best completely free option; fast completions', badge: 'Best Free' },
          ].map(o => (
            <div key={o.name} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>{o.icon}</div>
              <div style={{ background: '#F3F4F6', borderRadius: '999px', padding: '.15rem .6rem', fontSize: '.72rem', fontWeight: 600, color: '#374151', display: 'inline-block', marginBottom: '.5rem' }}>{o.badge}</div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.25rem' }}>{o.name}</div>
              <div style={{ fontSize: '.8rem', color: '#6B7280', marginBottom: '.5rem' }}>{o.price}</div>
              <div style={{ fontSize: '.875rem', color: '#4B5563' }}>{o.best}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup - GitHub Copilot</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Install VS Code', desc: 'Download from code.visualstudio.com. Free, runs on Mac, Windows, and Linux.' },
              { step: '2', title: 'Install the Copilot Extension', desc: 'Open VS Code → Extensions panel (Cmd+Shift+X) → search "GitHub Copilot" → Install. Also install "GitHub Copilot Chat" for the chat panel.' },
              { step: '3', title: 'Sign In to GitHub', desc: 'Click the Accounts icon (bottom-left) → Sign in with GitHub → authorize. Your GitHub account needs an active Copilot subscription ($10/month, or free for students/open-source).' },
              { step: '4', title: 'Verify It\'s Working', desc: 'Open any code file and start typing. Gray ghost text appears as Copilot suggestions. Press Tab to accept.' },
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
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup - Codeium (Free)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Install Codeium Extension', desc: 'Extensions panel → search "Codeium" → Install. Codeium is free forever - no subscription needed.' },
              { step: '2', title: 'Create Free Account', desc: 'Click the Codeium icon in the status bar → Sign in → create account at codeium.com. Takes 30 seconds.' },
              { step: '3', title: 'Start Coding', desc: 'Inline completions activate immediately. Open Codeium Chat with Cmd+Shift+A for the chat panel.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#16A34A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem', flexShrink: 0, marginTop: 2 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '.25rem' }}>{s.title}</div>
                  <div style={{ color: '#4B5563', fontSize: '.9rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Sample Usage - Copilot</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Inline Completions</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.7 }}>
              <span style={{ color: '#94A3B8' }}>{`// Parse a CSV string and return array of objects`}</span><br />
              <span style={{ color: '#7DD3FC' }}>function</span> <span style={{ color: '#FDE68A' }}>parseCSV</span>(<span style={{ color: '#86EFAC' }}>csv: string</span>)<br />
              <span style={{ color: '#94A3B8', marginLeft: '1.5rem' }}>{`// ← Tab to accept full function`}</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Copilot Chat Slash Commands</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
              {[
                ['/explain', 'Explain what selected code does'],
                ['/fix', 'Fix a bug in selected code'],
                ['/tests', 'Generate unit tests for selection'],
                ['/doc', 'Add documentation comments'],
                ['/optimize', 'Suggest performance improvements'],
                ['@workspace', 'Ask questions about your whole project'],
              ].map(([cmd, desc]) => (
                <div key={cmd} style={{ padding: '.6rem .75rem', background: '#F9FAFB', borderRadius: 6, border: '1px solid #F3F4F6' }}>
                  <code style={{ fontFamily: 'monospace', fontSize: '.85rem', color: '#4F46E5', fontWeight: 700 }}>{cmd}</code>
                  <div style={{ fontSize: '.8rem', color: '#6B7280', marginTop: '.2rem' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Inline Edit (Copilot Edits)</div>
            <p style={{ color: '#4B5563', fontSize: '.9rem', marginBottom: '.5rem' }}>Select code → Cmd+I (Mac) or Ctrl+I (Win) → type your instruction → Enter:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem', fontSize: '.9rem', color: '#166534' }}>
              "Convert this callback-style function to use async/await and add proper error handling"
            </div>
          </div>
        </div>

        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2 }}>
            <li>Write descriptive comments above a function <em>before</em> implementing it - Copilot uses them as a spec</li>
            <li>Install both "GitHub Copilot" and "GitHub Copilot Chat" - they are separate extensions</li>
            <li>Copilot is free for verified students and open-source maintainers (check github.com/education)</li>
            <li>Use <strong>@workspace</strong> in chat to ask questions about your entire project, not just the open file</li>
            <li>Codeium has no rate limits and no credit card - ideal for learners who don't want to pay yet</li>
          </ul>
        </div>

        <ToolGuideExtras
          current="vscode-ai"
          troubleshooting={[
            { problem: 'Two completion engines fighting', fix: 'Do not run Copilot and the Windsurf / Codeium plugin at once - they conflict. Disable one per workspace.' },
            { problem: 'Extension will not sign in', fix: 'Sign in via the account menu; if it loops, sign out everywhere and reauthorize the single extension.' },
            { problem: 'No inline suggestions', fix: 'Check the extension is enabled for the language you are editing, and that inline suggestions are on in VS Code settings.' },
            { problem: 'Not sure which to choose', fix: 'Copilot for the broadest ecosystem; the Windsurf plugin for a free, no-card option. See the comparison table above.' },
          ]}
          lessons={[
            { label: 'L38 - AI Tools Landscape', href: '/level5/lesson38' },
            { label: 'L39 - Inline Code Completion', href: '/level5/lesson39' },
            { label: 'L40 - AI Chat for Development', href: '/level5/lesson40' },
          ]}
        />

        <ToolResources links={[
          { label: 'Download VS Code', href: 'https://code.visualstudio.com', note: 'Free editor (Mac, Win, Linux)' },
          { label: 'VS Code AI docs', href: 'https://code.visualstudio.com/docs/copilot/overview', note: "VS Code's built-in AI features" },
          { label: 'GitHub Copilot extension', href: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot', note: 'Install Copilot in VS Code' },
          { label: 'Copilot docs', href: 'https://docs.github.com/copilot', note: 'Using Copilot in VS Code' },
          { label: 'Windsurf plugin (ex-Codeium)', href: 'https://marketplace.visualstudio.com/items?itemName=Codeium.codeium', note: 'Free completions in VS Code' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/github-copilot" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Full GitHub Copilot Guide</Link>
          <Link href="/tools/windsurf" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Try Windsurf Instead</Link>
          <Link href="/tools/cursor" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Try Cursor Instead</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
