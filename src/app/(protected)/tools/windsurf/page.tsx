'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'
import ToolGuideExtras from '@/components/tools/ToolGuideExtras'

export default function WindsurfPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Developer Tools</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        {/* Hero */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🌊</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>AI IDE</span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Free Tier Available</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Windsurf</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>by Codeium - The AI-first IDE built around deep codebase awareness</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7, marginBottom: 0 }}>
            Windsurf is a full IDE (based on VS Code) where every feature is designed around AI. Its standout feature is <strong>Cascade</strong> - an agentic AI that understands your entire codebase, not just the current file, and can autonomously plan and execute multi-step tasks.
          </p>
        </div>

        {/* Quick Facts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Made by', value: 'Codeium' },
            { label: 'Based on', value: 'VS Code' },
            { label: 'Free tier', value: 'Yes (generous)' },
            { label: 'Best for', value: 'Agentic coding' },
            { label: 'Platform', value: 'Mac, Win, Linux' },
            { label: 'Website', value: 'codeium.com/windsurf' },
          ].map(f => (
            <div key={f.label} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.25rem' }}>{f.label}</div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '.95rem' }}>{f.value}</div>
            </div>
          ))}
        </div>

        {/* Install & Setup */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 1 - Download Windsurf</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Go to <strong>codeium.com/windsurf</strong> → click Download. Available for macOS (Apple Silicon + Intel), Windows, and Linux.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 2 - Sign In (Free Account)</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Launch Windsurf → click "Sign in with Codeium" → create a free account. No credit card needed for the free tier.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 3 - Open Your Project</div>
              <p style={{ margin: 0, color: '#4B5563' }}>File → Open Folder → select your project. Windsurf indexes your entire codebase in the background - this gives Cascade full context.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '.4rem' }}>Step 4 - Open Cascade</div>
              <p style={{ margin: 0, color: '#4B5563' }}>Press <kbd style={{ background: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: 4, padding: '.1rem .4rem', fontFamily: 'monospace', fontSize: '.9rem' }}>Cmd+L</kbd> (Mac) or <kbd style={{ background: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: 4, padding: '.1rem .4rem', fontFamily: 'monospace', fontSize: '.9rem' }}>Ctrl+L</kbd> (Windows) to open the Cascade panel on the right.</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🔑 Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🌊', name: 'Cascade (Agentic AI)', desc: 'Autonomous AI agent that reads your codebase, plans multi-file changes, runs terminal commands, and iterates until the task is complete.' },
              { icon: '💡', name: 'Supercomplete', desc: 'Context-aware inline completion that understands your entire repo - not just the current line. Predicts whole functions and logical next steps.' },
              { icon: '💬', name: 'Chat Mode', desc: 'Ask questions about your code. Reference files with @filename. Cascade answers with full repo context.' },
              { icon: '🔍', name: 'Codebase Indexing', desc: 'Windsurf automatically indexes your project so Cascade knows every function, class, and file - no need to paste context manually.' },
              { icon: '🔌', name: 'VS Code Compatible', desc: 'All your VS Code extensions work in Windsurf. Same keybindings, themes, and settings - minimal transition friction.' },
              { icon: '🆓', name: 'Generous Free Tier', desc: 'Free tier includes 25 Cascade uses per month + unlimited completions. Premium adds higher limits and GPT-4/Claude models.' },
            ].map(f => (
              <div key={f.name} style={{ padding: '1rem', background: '#F9FAFB', borderRadius: 8, border: '1px solid #F3F4F6' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '.3rem' }}>{f.name}</div>
                <div style={{ fontSize: '.875rem', color: '#6B7280', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Usage */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Sample Usage</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#374151' }}>1. Inline Completion</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem' }}>Start typing and let Supercomplete finish your thought. Accept with <kbd style={{ background: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: 4, padding: '.1rem .4rem', fontFamily: 'monospace', fontSize: '.9rem' }}>Tab</kbd>.</p>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.7 }}>
              <span style={{ color: '#94A3B8' }}>{`// calculate shipping cost based on weight and zone`}</span><br />
              <span style={{ color: '#7DD3FC' }}>function</span> <span style={{ color: '#FDE68A' }}>calcShipping</span>(<span style={{ color: '#86EFAC' }}>weight, zone</span>) {'{'}<br />
              <span style={{ color: '#94A3B8', marginLeft: '1.5rem' }}>{`// ← Windsurf fills in the entire function body`}</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#374151' }}>2. Cascade - Agentic Task</div>
            <p style={{ color: '#4B5563', marginBottom: '.5rem' }}>Open Cascade (Cmd+L) and type a high-level task:</p>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534', lineHeight: 1.7 }}>
              "Add pagination to the /api/products endpoint. Use cursor-based pagination. Update the React ProductList component to load more on scroll. Add tests for the new params."
            </div>
            <p style={{ color: '#4B5563', marginTop: '.75rem', fontSize: '.9rem' }}>Cascade reads your existing files, proposes a plan, writes the changes, and runs your tests - all without you writing a single line.</p>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#374151' }}>3. Ask a Codebase Question</div>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem 1.25rem', fontSize: '.9rem', color: '#166534', lineHeight: 1.7 }}>
              "Where does this app handle authentication? Walk me through the full auth flow from login to session."
            </div>
            <p style={{ color: '#4B5563', marginTop: '.75rem', fontSize: '.9rem' }}>Cascade traces through your actual files and gives a specific answer with file references - no need to grep the codebase yourself.</p>
          </div>
        </div>

        {/* Tips */}
        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2 }}>
            <li>Let Windsurf fully index your project before using Cascade - wait for the indexing spinner to finish</li>
            <li>Use <strong>@filename</strong> in Cascade to focus on specific files</li>
            <li>Cascade can run terminal commands - useful for running tests and seeing results inline</li>
            <li>Migrate from VS Code in seconds: Settings → Import from VS Code</li>
            <li>For large tasks, set scope in your prompt: "Only modify files in src/api/ - do not touch the frontend"</li>
          </ul>
        </div>

        {/* Quick Ref */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.2rem' }}>⌨️ Keyboard Shortcuts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
            {[
              ['Open Cascade', 'Cmd+L / Ctrl+L'],
              ['Accept completion', 'Tab'],
              ['Reject completion', 'Esc'],
              ['Accept next word', 'Cmd+→ / Ctrl+→'],
              ['Open command palette', 'Cmd+Shift+P'],
              ['New Cascade conversation', 'Cmd+N in Cascade'],
            ].map(([action, shortcut]) => (
              <div key={action} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.5rem .75rem', background: '#F9FAFB', borderRadius: 6 }}>
                <span style={{ fontSize: '.875rem', color: '#374151' }}>{action}</span>
                <kbd style={{ background: '#E5E7EB', border: '1px solid #D1D5DB', borderRadius: 4, padding: '.15rem .5rem', fontFamily: 'monospace', fontSize: '.8rem', color: '#374151', whiteSpace: 'nowrap' }}>{shortcut}</kbd>
              </div>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <ToolGuideExtras
          current="windsurf"
          troubleshooting={[
            { problem: 'Cascade will not run', fix: 'Sign in and check your plan credits. Cascade actions consume credits on the free tier; they refill or require a paid plan.' },
            { problem: 'Confused: the app vs the plugin', fix: 'Windsurf is the standalone IDE; the Windsurf plugin (formerly Codeium) adds completions to VS Code / JetBrains. Pick one per editor.' },
            { problem: 'Slow indexing on big repos', fix: 'First open indexes the whole codebase - let it finish. Exclude build/vendor folders to speed it up.' },
            { problem: 'Completions stopped', fix: 'Sign out and back in, and confirm Windsurf is the only AI completion engine running (two engines conflict).' },
          ]}
          lessons={[
            { label: 'L46 - Agentic Coding', href: '/level5/lesson46' },
            { label: 'L40 - AI Chat for Development', href: '/level5/lesson40' },
            { label: 'L47 - Custom AI Extensions', href: '/level5/lesson47' },
            { label: 'L56 - From Prompter to Loop Designer', href: '/level7/lesson56' },
          ]}
        />

        <ToolResources links={[
          { label: 'Download Windsurf', href: 'https://windsurf.com', note: 'Mac, Windows, Linux (now part of Cognition / Devin)' },
          { label: 'VS Code / JetBrains plugin', href: 'https://marketplace.visualstudio.com/items?itemName=Codeium.codeium', note: 'Windsurf plugin (formerly Codeium)' },
          { label: 'Pricing', href: 'https://windsurf.com/pricing', note: 'Free tier + paid plans' },
          { label: 'Changelog', href: 'https://windsurf.com/changelog', note: 'Release notes' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/cursor" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: Cursor</Link>
          <Link href="/tools/vscode-ai" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: VS Code + AI</Link>
          <Link href="/tools/github-copilot" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: GitHub Copilot</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
