import Link from 'next/link'
import { CLAUDE, CLAUDE_TOP_TWO, IDE_MODEL_SET, GEMINI, MODELS_AS_OF } from '@/data/models'

// ── Shared comparison data for all AI coding tools ───────────────────────────
interface ToolRow {
  slug: string
  name: string
  type: string
  pricing: string
  bestFor: string
  models: string
}

const TOOLS: ToolRow[] = [
  { slug: 'github-copilot', name: 'GitHub Copilot', type: 'IDE extension', pricing: 'Free tier; Pro ~$10/mo', bestFor: 'AI in your existing editor', models: IDE_MODEL_SET },
  { slug: 'cursor', name: 'Cursor', type: 'AI IDE (VS Code fork)', pricing: 'Hobby free; Pro $20/mo', bestFor: 'All-round AI editor + agent', models: `GPT-5.6, Claude ${CLAUDE_TOP_TWO}` },
  { slug: 'windsurf', name: 'Windsurf', type: 'AI IDE (VS Code fork)', pricing: 'Free tier; paid plans', bestFor: 'Agentic flows (Cascade)', models: 'Frontier models + own' },
  { slug: 'antigravity', name: 'Google Antigravity', type: 'Agent-first IDE', pricing: 'Free tier; Google AI Pro $19.99/mo', bestFor: 'Autonomous build + browser test', models: `${GEMINI.pro.short} / ${GEMINI.flash.short} (agent-first)` },
  { slug: 'claude-code-cli', name: 'Claude Code (CLI)', type: 'Terminal agent', pricing: 'Claude sub or API', bestFor: 'Agentic coding in the terminal', models: `Claude ${CLAUDE_TOP_TWO} / ${CLAUDE.haiku.short}` },
  { slug: 'vscode-ai', name: 'VS Code + AI ext', type: 'Editor + extensions', pricing: 'Free options exist', bestFor: 'Keep VS Code, add AI', models: 'Depends on extension' },
]

export interface TroubleshootItem { problem: string; fix: string }
export interface LessonLink { label: string; href: string }

interface ToolGuideExtrasProps {
  current: string
  troubleshooting: TroubleshootItem[]
  lessons: LessonLink[]
}

const cardStyle: React.CSSProperties = { background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }
const thStyle: React.CSSProperties = { padding: '.6rem .75rem', textAlign: 'left', fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.04em', color: '#6B7280', borderBottom: '2px solid #E5E7EB', whiteSpace: 'nowrap' }
const tdStyle: React.CSSProperties = { padding: '.6rem .75rem', fontSize: '.85rem', color: '#374151', borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }

export default function ToolGuideExtras({ current, troubleshooting, lessons }: ToolGuideExtrasProps) {
  return (
    <>
      {/* Comparison table */}
      <div style={cardStyle}>
        <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚖️ Which Coding Tool Should I Pick?</h2>
        <p style={{ color: '#6B7280', fontSize: '.9rem', marginTop: 0 }}>The current tool is highlighted. There is no single winner - pick by how you like to work. Models and pricing as of {MODELS_AS_OF}.</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 720 }}>
            <thead>
              <tr>
                <th style={thStyle}>Tool</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Pricing</th>
                <th style={thStyle}>Best for</th>
                <th style={thStyle}>Models / AI</th>
              </tr>
            </thead>
            <tbody>
              {TOOLS.map(t => {
                const isCurrent = t.slug === current
                return (
                  <tr key={t.slug} style={{ background: isCurrent ? '#EFF6FF' : 'transparent' }}>
                    <td style={{ ...tdStyle, fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {isCurrent ? t.name : <Link href={`/tools/${t.slug}`} style={{ color: '#1D4ED8', textDecoration: 'none' }}>{t.name}</Link>}
                      {isCurrent && <span style={{ marginLeft: '.4rem', fontSize: '.7rem', color: '#1D4ED8', fontWeight: 700 }}>(this page)</span>}
                    </td>
                    <td style={tdStyle}>{t.type}</td>
                    <td style={tdStyle}>{t.pricing}</td>
                    <td style={tdStyle}>{t.bestFor}</td>
                    <td style={tdStyle}>{t.models}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p style={{ margin: '1rem 0 0', fontSize: '.78rem', color: '#9CA3AF' }}>Pricing and model support change often. Verified June 2026 - confirm on each tool&apos;s official site.</p>
      </div>

      {/* Troubleshooting */}
      <div style={cardStyle}>
        <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🛠️ Troubleshooting &amp; Common Pitfalls</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {troubleshooting.map((t, i) => (
            <div key={i} style={{ padding: '1rem 1.25rem', background: '#F9FAFB', borderRadius: 8, border: '1px solid #F3F4F6' }}>
              <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#B91C1C', marginBottom: '.25rem' }}>⚠ {t.problem}</div>
              <div style={{ fontSize: '.875rem', color: '#374151', lineHeight: 1.55 }}>{t.fix}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Related course lessons */}
      <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '1.5rem 2rem', marginBottom: '1.5rem' }}>
        <h2 style={{ marginTop: 0, fontSize: '1.2rem', color: '#166534' }}>📚 Related Course Lessons</h2>
        <p style={{ color: '#15803D', fontSize: '.88rem', marginTop: 0 }}>Go deeper on the skills this tool is for:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
          {lessons.map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'white', border: '1px solid #BBF7D0', borderRadius: 8, padding: '.5rem .9rem', fontSize: '.85rem', color: '#166534', textDecoration: 'none', fontWeight: 600 }}>
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
