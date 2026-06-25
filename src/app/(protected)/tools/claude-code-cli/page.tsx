'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'
import ToolGuideExtras from '@/components/tools/ToolGuideExtras'
import CommandBlock from '@/components/tools/CommandBlock'

export default function ClaudeCodePage() {
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
            <span style={{ fontSize: '3rem' }}>🖥️</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#F5F3FF', color: '#7C3AED', border: '1px solid #DDD6FE', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Terminal / CLI Tool</span>
                <span style={{ background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Requires Claude API or Pro</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Claude Code (CLI)</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>by Anthropic - terminal-native agentic coding assistant</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            Claude Code is Anthropic's terminal-native AI coding tool. Unlike editor plugins, it runs directly in your shell - giving it full access to your filesystem, git history, terminal output, and the ability to run commands. It is the most powerful option for agentic tasks: give it a goal and it autonomously reads files, writes code, runs tests, and iterates.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Made by', value: 'Anthropic' },
            { label: 'Interface', value: 'Terminal (CLI)' },
            { label: 'Requires', value: 'Claude Pro or API' },
            { label: 'Platform', value: 'Mac, Linux, WSL' },
            { label: 'Model', value: 'Claude Opus 4.8 / Sonnet 4.6' },
            { label: 'Install via', value: 'npm (Node.js)' },
          ].map(f => (
            <div key={f.label} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.25rem' }}>{f.label}</div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '.95rem' }}>{f.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Install Node.js', desc: 'Claude Code requires Node.js 18+. Download from nodejs.org or run: brew install node (Mac).' },
              { step: '2', title: 'Install Claude Code', desc: 'Run in terminal: npm install -g @anthropic-ai/claude-code' },
              { step: '3', title: 'Authenticate', desc: 'Run: claude - on first launch it opens your browser to sign in with your Anthropic account. Requires Claude Pro ($20/month) or an API key (pay-per-use, very affordable for coding tasks).' },
              { step: '4', title: 'Verify installation', desc: 'Run: claude --version - you should see the version number. Then cd into any project and run: claude' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#7C3AED', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem', flexShrink: 0, marginTop: 2 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '.25rem' }}>{s.title}</div>
                  <div style={{ color: '#4B5563', fontSize: '.9rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <CommandBlock label="# Install and launch" command={`npm install -g @anthropic-ai/claude-code\ncd my-project\nclaude`} />
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Sample Usage</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Interactive Mode - Ask & Iterate</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              <span style={{ color: '#86EFAC' }}>$</span> claude<br />
              <span style={{ color: '#94A3B8' }}>{`>`}</span> <span style={{ color: '#FDE68A' }}>Explain the auth flow in this project</span><br />
              <span style={{ color: '#7DD3FC' }}>[Claude reads src/auth/, middleware, and routes, then explains]</span><br /><br />
              <span style={{ color: '#94A3B8' }}>{`>`}</span> <span style={{ color: '#FDE68A' }}>Add JWT refresh token rotation. Write tests too.</span><br />
              <span style={{ color: '#7DD3FC' }}>[Claude creates files, runs npm test, fixes failures, done]</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>One-Shot Commands (non-interactive)</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              <span style={{ color: '#94A3B8' }}># Ask a question and get output:</span><br />
              <span style={{ color: '#86EFAC' }}>claude</span> <span style={{ color: '#FDE68A' }}>"What does the processPayment function do?"</span><br /><br />
              <span style={{ color: '#94A3B8' }}># Pipe a diff for review:</span><br />
              git diff --staged | <span style={{ color: '#86EFAC' }}>claude</span> <span style={{ color: '#FDE68A' }}>"Review this diff before I commit"</span><br /><br />
              <span style={{ color: '#94A3B8' }}># Run a file through Claude:</span><br />
              <span style={{ color: '#86EFAC' }}>claude</span> <span style={{ color: '#FDE68A' }}>"Add error handling to all async functions"</span> src/api/users.ts
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>CLAUDE.md - Persistent Project Context</div>
            <p style={{ color: '#4B5563', fontSize: '.9rem', marginBottom: '.5rem' }}>Create a CLAUDE.md file in your project root. Claude Code reads it automatically every session:</p>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.7 }}>
              <span style={{ color: '#94A3B8' }}># CLAUDE.md</span><br />
              <span style={{ color: '#86EFAC' }}>## Stack</span> Node.js + Express + PostgreSQL<br />
              <span style={{ color: '#86EFAC' }}>## Conventions</span><br />
              - Use AppError for all errors (src/lib/errors.ts)<br />
              - No console.log - use logger from src/lib/logger.ts<br />
              <span style={{ color: '#86EFAC' }}>## Tests</span> vitest, run with npm test
            </div>
          </div>
        </div>

        <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, color: '#5B21B6', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#4C1D95', lineHeight: 2 }}>
            <li>Always start agentic tasks in a <strong>clean git branch</strong> - Claude will modify multiple files</li>
            <li>The <strong>CLAUDE.md</strong> file is your most powerful tool - detailed context = better output</li>
            <li>Use <strong>Ctrl+C</strong> to interrupt Claude mid-task and redirect it</li>
            <li>Press <strong>y</strong> to accept file changes, <strong>n</strong> to reject, or type a correction</li>
            <li>API key mode (no Pro required): set ANTHROPIC_API_KEY in your environment and billing kicks in at ~$0.003/1K tokens</li>
          </ul>
        </div>

        <ToolGuideExtras
          current="claude-code-cli"
          troubleshooting={[
            { problem: 'command not found: claude', fix: 'Re-run the global install and make sure your npm global bin directory is on your PATH. Restart the terminal afterward.' },
            { problem: 'Authentication errors', fix: 'Log in with your Claude subscription, or set ANTHROPIC_API_KEY in your environment for API-key mode.' },
            { problem: 'Too many permission prompts', fix: 'Configure allowed tools / commands in settings, or run with the right permission mode - but review what you allow.' },
            { problem: 'Token costs climbing', fix: 'Scope each task, use /clear to reset context between tasks, and prefer a cheaper model (Haiku) for simple jobs.' },
          ]}
          lessons={[
            { label: 'L46 - Agentic Coding', href: '/level5/lesson46' },
            { label: 'L47 - Custom AI Extensions', href: '/level5/lesson47' },
            { label: 'L56 - From Prompter to Loop Designer', href: '/level7/lesson56' },
            { label: 'L59 - Skills', href: '/level7/lesson59' },
          ]}
        />

        <ToolResources links={[
          { label: 'Product page', href: 'https://claude.com/product/claude-code', note: 'What it is + how to install' },
          { label: 'Documentation', href: 'https://code.claude.com/docs', note: 'Commands, CLAUDE.md, MCP, agents' },
          { label: 'npm package', href: 'https://www.npmjs.com/package/@anthropic-ai/claude-code', note: 'npm i -g @anthropic-ai/claude-code' },
          { label: 'GitHub repo', href: 'https://github.com/anthropics/claude-code', note: 'Issues + source' },
          { label: 'Pricing', href: 'https://claude.com/pricing', note: 'Subscription + API rates' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/github-copilot" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: GitHub Copilot</Link>
          <Link href="/tools/windsurf" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Compare: Windsurf</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
