'use client'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

type OS = 'mac' | 'win'

const S = {
  card: { background: 'white', border: '1px solid #E5E7EB', borderRadius: 14, padding: '1.25rem 1.5rem', marginBottom: '1.25rem' } as React.CSSProperties,
  h3: { margin: '0 0 .75rem', fontSize: '.9rem', fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '.06em', color: '#374151', display: 'flex', alignItems: 'center', gap: '.4rem' },
  subhead: { fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '.07em', color: '#9CA3AF', margin: '.9rem 0 .35rem', paddingTop: '.65rem', borderTop: '1px solid #F3F4F6' } as React.CSSProperties,
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.75rem', padding: '.22rem 0', borderBottom: '1px dashed #F3F4F6', fontSize: '.82rem' } as React.CSSProperties,
  kbd: { background: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: 5, padding: '.1rem .45rem', fontFamily: 'monospace', fontSize: '.78rem', fontWeight: 700, whiteSpace: 'nowrap' as const, color: '#111827' } as React.CSSProperties,
  kbdOS: { background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 5, padding: '.1rem .45rem', fontFamily: 'monospace', fontSize: '.78rem', fontWeight: 700, whiteSpace: 'nowrap' as const, color: '#3730A3' } as React.CSSProperties,
  cmd: { color: '#7C3AED', fontFamily: 'monospace', fontSize: '.82rem', fontWeight: 700, whiteSpace: 'nowrap' as const } as React.CSSProperties,
  desc: { color: '#4B5563', fontSize: '.82rem', textAlign: 'right' as const, flex: 1 },
  badge: { background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', borderRadius: 4, padding: '.05rem .35rem', fontSize: '.65rem', fontWeight: 700, marginLeft: '.3rem' },
}

// OS-specific shortcuts — only Mode Switching differs between Mac and Windows
const OS_KEYS = {
  mac: {
    cycleMode: '⇧ Tab',
    switchModel: '⌥ P',
    toggleThinking: '⌥ T',
    toggleFast: '⌥ O',
  },
  win: {
    cycleMode: 'Shift Tab',
    switchModel: 'Alt P',
    toggleThinking: 'Alt T',
    toggleFast: 'Alt O',
  },
}

function KbdRow({ keys, desc, isNew }: { keys: string | string[], desc: string, isNew?: boolean }) {
  const ks = Array.isArray(keys) ? keys : [keys]
  return (
    <div style={S.row}>
      <div style={{ display: 'flex', gap: '.3rem', flexShrink: 0, flexWrap: 'wrap' }}>
        {ks.map((k, i) => <span key={i} style={S.kbd}>{k}</span>)}
        {isNew && <span style={S.badge}>NEW</span>}
      </div>
      <span style={S.desc}>{desc}</span>
    </div>
  )
}

// OS-sensitive shortcut — highlighted in blue to make it obvious it changes
function OsKbdRow({ keyVal, desc, isNew }: { keyVal: string, desc: string, isNew?: boolean }) {
  return (
    <div style={S.row}>
      <div style={{ display: 'flex', gap: '.3rem', flexShrink: 0, alignItems: 'center' }}>
        <span style={S.kbdOS}>{keyVal}</span>
        {isNew && <span style={S.badge}>NEW</span>}
      </div>
      <span style={S.desc}>{desc}</span>
    </div>
  )
}

function CmdRow({ cmd, desc, isNew }: { cmd: string, desc: string, isNew?: boolean }) {
  return (
    <div style={S.row}>
      <span style={S.cmd}>{cmd}{isNew && <span style={{ ...S.badge, marginLeft: '.25rem' }}>NEW</span>}</span>
      <span style={S.desc}>{desc}</span>
    </div>
  )
}

function Subhead({ children }: { children: React.ReactNode }) {
  return <div style={S.subhead}>{children}</div>
}

export default function ClaudeCodeCheatSheet() {
  const [os, setOs] = useState<OS>('mac')
  const keys = OS_KEYS[os]

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      {/* Top bar */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Course Tools</span>
          <span style={{ marginLeft: 'auto', background: '#EDE9FE', color: '#5B21B6', border: '1px solid #C4B5FD', borderRadius: 999, padding: '.2rem .75rem', fontSize: '.75rem', fontWeight: 700 }}>
            Claude Code v2.1.101
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4338ca)', borderRadius: 18, padding: '2rem 2.5rem', marginBottom: '2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.9rem', fontWeight: 900, letterSpacing: '-.02em' }}>⌨️ Claude Code — Cheat Sheet</h1>
            <p style={{ margin: '.4rem 0 0', opacity: .8, fontSize: '.95rem' }}>Keyboard shortcuts · Slash commands · Workflows · MCP · Memory · CLI flags</p>
          </div>
          <Link href="/tools/claude-code-cli" style={{ background: 'rgba(255,255,255,.15)', color: 'white', borderRadius: 8, padding: '.5rem 1rem', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>Setup Guide →</Link>
        </div>

        {/* OS Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '.85rem', color: '#6B7280', fontWeight: 600 }}>Keyboard shortcuts for:</span>
          <div style={{ display: 'flex', background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: 4, gap: 4 }}>
            <button
              onClick={() => setOs('mac')}
              style={{
                padding: '.4rem 1.1rem', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: '.875rem', fontWeight: 700,
                background: os === 'mac' ? '#1e1b4b' : 'transparent',
                color: os === 'mac' ? 'white' : '#6B7280',
                transition: 'all .15s',
              }}
            >
              🍎 Mac
            </button>
            <button
              onClick={() => setOs('win')}
              style={{
                padding: '.4rem 1.1rem', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: '.875rem', fontWeight: 700,
                background: os === 'win' ? '#1e1b4b' : 'transparent',
                color: os === 'win' ? 'white' : '#6B7280',
                transition: 'all .15s',
              }}
            >
              🪟 Windows
            </button>
          </div>
          <span style={{ fontSize: '.78rem', background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 6, padding: '.2rem .6rem', color: '#4338CA' }}>
            Blue keys change with OS
          </span>
        </div>

        {/* 4-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>

          {/* ── Column 1: Keyboard Shortcuts ── */}
          <div>
            <div style={S.card}>
              <h3 style={S.h3}>⌨️ Keyboard Shortcuts</h3>

              <Subhead>General Controls</Subhead>
              <KbdRow keys="Ctrl C" desc="Cancel input/generation" />
              <KbdRow keys="Ctrl D" desc="Exit session" />
              <KbdRow keys="Ctrl L" desc="Clear prompt input" />
              <KbdRow keys="Ctrl O" desc="Toggle transcript / focus view" isNew />
              <KbdRow keys="Ctrl R" desc="Reverse search history" />
              <KbdRow keys="Ctrl G" desc="Open prompt in editor" />
              <KbdRow keys={["Ctrl X", "Ctrl E"]} desc="Open in editor (alias)" />
              <KbdRow keys="Ctrl B" desc="Background running task" />
              <KbdRow keys="Ctrl T" desc="Toggle task list" />
              <KbdRow keys="Ctrl V" desc="Paste image ([Image #N] chip)" />
              <KbdRow keys={["Ctrl X", "Ctrl K"]} desc="Kill background agents" />
              <KbdRow keys={["Esc", "Esc"]} desc="Rewind or summarize" />

              <Subhead>Mode Switching <span style={{ color: '#4338CA', fontSize: '.7rem', fontWeight: 600 }}>({os === 'mac' ? 'Mac' : 'Windows'})</span></Subhead>
              <OsKbdRow keyVal={keys.cycleMode} desc="Cycle permission modes" />
              <OsKbdRow keyVal={keys.switchModel} desc="Switch model" />
              <OsKbdRow keyVal={keys.toggleThinking} desc="Toggle thinking" />
              <OsKbdRow keyVal={keys.toggleFast} desc="Toggle fast mode" />

              <Subhead>Input</Subhead>
              <KbdRow keys={["\\", "Enter"]} desc="Newline (quick)" />
              <KbdRow keys="Ctrl J" desc="Newline (control seq)" />

              <Subhead>Prefixes</Subhead>
              <div style={S.row}><span style={S.kbd}>/</span><span style={S.desc}>Slash command</span></div>
              <div style={S.row}><span style={S.kbd}>!</span><span style={S.desc}>Direct bash</span></div>
              <div style={S.row}><span style={S.kbd}>@</span><span style={S.desc}>File mention + autocomplete</span></div>

              <Subhead>Transcript / Focus View (Ctrl+O)</Subhead>
              <KbdRow keys={["Ctrl", "E"]} desc="Toggle show all" />
              <KbdRow keys="Q / Ctrl C / Esc" desc="Exit transcript" />
            </div>
          </div>

          {/* ── Column 2: Slash Commands ── */}
          <div>
            <div style={S.card}>
              <h3 style={S.h3}>⚡ Slash Commands</h3>

              <Subhead>Session</Subhead>
              <CmdRow cmd="/clear" desc="Clear conversation" />
              <CmdRow cmd="/compact [focus]" desc="Compact context" />
              <CmdRow cmd="/resume" desc="Resume/switch session" />
              <CmdRow cmd="/rename [name]" desc="Name current session" />
              <CmdRow cmd="/branch [name]" desc="Branch conversation (/fork alias)" />
              <CmdRow cmd="/cost" desc="Token usage (per-model + cache)" />
              <CmdRow cmd="/context" desc="Visualize context (grid)" />
              <CmdRow cmd="/diff" desc="Interactive diff viewer" />
              <CmdRow cmd="/copy [N]" desc="Copy last (or Nth) response" />
              <CmdRow cmd="/rewind" desc="Rewind conv / code checkpoint" />
              <CmdRow cmd="/export" desc="Export conversation" />

              <Subhead>Config</Subhead>
              <CmdRow cmd="/config" desc="Open settings" />
              <CmdRow cmd="/model [model]" desc="Switch model (←→ effort)" />
              <CmdRow cmd="/fast [on|off]" desc="Toggle fast mode" />
              <CmdRow cmd="/theme" desc="Change color theme" />
              <CmdRow cmd="/permissions" desc="View/update permissions" />
              <CmdRow cmd="/effort [level]" desc="Set effort (low/medium/high/max/auto)" />
              <CmdRow cmd="/color [color]" desc="Set prompt-bar color" />
              <CmdRow cmd="/keybindings" desc="Customize keyboard shortcuts" />
              <CmdRow cmd="/terminal-setup" desc="Configure terminal keybindings" />

              <Subhead>Tools</Subhead>
              <CmdRow cmd="/init" desc="Create CLAUDE.md" />
              <CmdRow cmd="/memory" desc="Edit CLAUDE.md, toggle auto memory" />
              <CmdRow cmd="/mcp" desc="Manage MCP servers" />
              <CmdRow cmd="/hooks" desc="Manage hooks" />
              <CmdRow cmd="/skills" desc="List available skills" />
              <CmdRow cmd="/agents" desc="Manage agent configurations" isNew />
              <CmdRow cmd="/chrome" desc="Chrome integration" />
              <CmdRow cmd="/reload-plugins" desc="Hot-reload plugins" />
              <CmdRow cmd="/add-dir <path>" desc="Add working directory" />

              <Subhead>Special</Subhead>
              <CmdRow cmd="/powerup" desc="Interactive feature lessons" />
              <CmdRow cmd="/btw <question>" desc="Side question (no context cost)" />
              <CmdRow cmd="/plan [desc]" desc="Plan mode (+ auto-start)" />
              <CmdRow cmd="/loop [interval]" desc="Schedule recurring task" />
              <CmdRow cmd="/voice" desc="Toggle push-to-talk voice" />
              <CmdRow cmd="/doctor" desc="Diagnose installation" />
              <CmdRow cmd="/stats" desc="Usage streaks & prefs" />
              <CmdRow cmd="/insights" desc="Analyze sessions report" />
              <CmdRow cmd="/desktop" desc="Continue in Desktop app" />
              <CmdRow cmd="/remote-control" desc="Bridge to claude.ai/code (/rc)" />
              <CmdRow cmd="/usage" desc="Plan limits & rate status" />
              <CmdRow cmd="/schedule" desc="Cloud scheduled tasks" />
              <CmdRow cmd="/ultraplan <prompt>" desc="Plan in browser, execute remotely" isNew />
              <CmdRow cmd="/security-review" desc="Security analysis of changes" />
              <CmdRow cmd="/help" desc="Show help + commands" />
              <CmdRow cmd="/feedback" desc="Submit feedback (alias: /bug)" />
              <CmdRow cmd="/release-notes" desc="Interactive version changelog" />
            </div>
          </div>

          {/* ── Column 3: Workflows & Tips ── */}
          <div>
            <div style={S.card}>
              <h3 style={S.h3}>🧠 Workflows & Tips</h3>

              <Subhead>Plan Mode</Subhead>
              <div style={S.row}>
                <span style={S.kbdOS}>{keys.cycleMode}</span>
                <span style={S.desc}>Normal → Auto-Accept → Plan</span>
              </div>
              <CmdRow cmd="--permission-mode plan" desc="Start in plan mode" />

              <Subhead>Thinking & Effort</Subhead>
              <OsKbdRow keyVal={keys.toggleThinking} desc="Toggle thinking on/off" />
              <div style={S.row}><span style={{ fontFamily: 'monospace', fontSize: '.82rem', color: '#7C3AED', fontWeight: 600 }}>"ultrathink"</span><span style={S.desc}>Max effort for turn</span></div>
              <KbdRow keys="Ctrl O" desc="See thinking (verbose)" />
              <div style={{ ...S.row, flexDirection: 'column', alignItems: 'flex-start', gap: '.2rem' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '.78rem', color: '#7C3AED', fontWeight: 700 }}>/effort</span>
                <span style={{ fontSize: '.78rem', color: '#4B5563' }}>○ low · ◐ medium · ● high · ★ max</span>
              </div>

              <Subhead>Auto Mode Denied</Subhead>
              <CmdRow cmd="/permissions → Recent" desc="Retry denied with R" />

              <Subhead>Git Worktrees</Subhead>
              <CmdRow cmd="--worktree name" desc="Isolated branch per feature" />
              <CmdRow cmd="isolation: worktree" desc="Agent in own worktree" />
              <CmdRow cmd="sparsePaths" desc="Checkout only needed dirs" />
              <CmdRow cmd="workspace.git_worktree" desc="Status line JSON: linked worktree" isNew />
              <CmdRow cmd="/batch" desc="Auto-creates worktrees" />

              <Subhead>Voice Mode</Subhead>
              <CmdRow cmd="/voice" desc="Enable push-to-talk" />
              <div style={S.row}><span style={S.kbd}>Space (hold)</span><span style={S.desc}>Record, release to send</span></div>
              <div style={S.row}><span style={{ fontSize: '.78rem', color: '#6B7280' }}>20 languages:</span><span style={S.desc}>EN, ES, FR, DE, CZ, PL…</span></div>

              <Subhead>Context Management</Subhead>
              <CmdRow cmd="/context" desc="Usage + optimization tips" />
              <CmdRow cmd="/compact [focus]" desc="Compress with focus" />
              <div style={S.row}><span style={{ fontSize: '.78rem', color: '#374151', fontWeight: 600 }}>Auto-compact</span><span style={S.desc}>~95% capacity (thrash detection: 3×)</span></div>
              <div style={S.row}><span style={{ fontSize: '.78rem', color: '#374151', fontWeight: 600 }}>1M context</span><span style={S.desc}>Opus 4.6 (Max/Team/Ent)</span></div>
              <div style={S.row}><span style={{ fontSize: '.78rem', color: '#374151', fontWeight: 600 }}>CLAUDE.md</span><span style={S.desc}>Survives compaction!</span></div>

              <Subhead>Session Power Moves</Subhead>
              <CmdRow cmd="claude -c" desc="Continue last conversation" />
              <CmdRow cmd='claude -r "name"' desc="Resume by name" />
              <CmdRow cmd="/btw question" desc="Side Q, no context cost" />

              <Subhead>SDK / Headless</Subhead>
              <CmdRow cmd='claude -p "query"' desc="Non-interactive" />
              <CmdRow cmd="--output-format json" desc="Structured output" />
              <CmdRow cmd="--max-budget-usd 5" desc="Cost cap" />
              <CmdRow cmd="cat file | claude -p" desc="Pipe input" />

              <Subhead>Scheduling & Remote</Subhead>
              <CmdRow cmd="/loop 5m msg" desc="Recurring task" />
              <CmdRow cmd="/rc" desc="Remote control (hostname prefix)" />
              <CmdRow cmd="--remote" desc="Web session on claude.ai" />
            </div>
          </div>

          {/* ── Column 4: Skills & Agents + MCP ── */}
          <div>
            <div style={S.card}>
              <h3 style={S.h3}>🔧 Skills & Agents</h3>

              <Subhead>Built-in Skills</Subhead>
              <CmdRow cmd="/simplify" desc="Code review (3 parallel agents)" />
              <CmdRow cmd="/batch" desc="Large parallel changes (5–30 worktrees)" />
              <CmdRow cmd="/debug [desc]" desc="Troubleshoot from debug log" />
              <CmdRow cmd="/loop [interval]" desc="Recurring scheduled task" />
              <CmdRow cmd="/claude-api" desc="Load API + SDK reference" />

              <Subhead>Custom Skill Locations</Subhead>
              <CmdRow cmd=".claude/skills/<name>/" desc="Project skills" />
              <CmdRow cmd="~/.claude/skills/<name>/" desc="Personal skills" />

              <Subhead>Skill Frontmatter</Subhead>
              <CmdRow cmd="description" desc="Auto-invocation trigger" />
              <CmdRow cmd="allowed-tools" desc="Skip permission prompts" />
              <CmdRow cmd="model" desc="Override model for skill" />
              <CmdRow cmd="effort" desc="Override effort level" />
              <CmdRow cmd="paths: [globs]" desc="Path-specific (YAML list)" />
              <CmdRow cmd="context: fork" desc="Run in subagent" />
              <CmdRow cmd="$ARGUMENTS" desc="User input placeholder" />
              <CmdRow cmd="${CLAUDE_SKILL_DIR}" desc="Skill's own directory" />
              <CmdRow cmd="!`cmd`" desc="Dynamic context injection" />
              <CmdRow cmd="plugin bin/" desc="Ship executables for Bash tool" />

              <Subhead>Built-in Agents</Subhead>
              <CmdRow cmd="Explore" desc="Fast read-only (Haiku)" />
              <CmdRow cmd="Plan" desc="Research for plan mode" />
              <CmdRow cmd="General" desc="Full tools, complex tasks" />
              <CmdRow cmd="Bash" desc="Terminal separate context" />

              <Subhead>Agent Frontmatter</Subhead>
              <CmdRow cmd="permissionMode" desc="default/acceptEdits/plan/dontAsk/bypass" />
              <CmdRow cmd="isolation: worktree" desc="Run in git worktree" />
              <CmdRow cmd="memory: user|project|local" desc="Persistent memory" />
              <CmdRow cmd="background: true" desc="Background task" />
              <CmdRow cmd="maxTurns" desc="Limit agentic turns" />
              <CmdRow cmd="initialPrompt" desc="Auto-submit first turn" />
              <CmdRow cmd="SendMessage" desc="Resume agents (replaces resume)" />
              <CmdRow cmd="@agent-name" desc="Mention named subagents" />
            </div>

            <div style={S.card}>
              <h3 style={S.h3}>🔌 MCP Servers</h3>

              <Subhead>Add Servers</Subhead>
              <CmdRow cmd="--transport http" desc="Remote HTTP (recommended)" />
              <CmdRow cmd="--transport stdio" desc="Local process" />
              <CmdRow cmd="--transport sse" desc="Remote SSE" />

              <Subhead>Scopes</Subhead>
              <CmdRow cmd="Local" desc="~/.claude.json (you only)" />
              <CmdRow cmd="Project" desc=".mcp.json (shared/VCS)" />
              <CmdRow cmd="User" desc="~/.claude.json (global)" />

              <Subhead>Manage</Subhead>
              <CmdRow cmd="/mcp" desc="Interactive UI" />
              <CmdRow cmd="claude mcp list" desc="List all servers" />
              <CmdRow cmd="claude mcp serve" desc="Run CC as stdio MCP server" />
              <CmdRow cmd="maxResultSizeChars" desc="Raise per-tool limit (up to 500K chars)" />
            </div>
          </div>
        </div>

        {/* Bottom 3-column row: Memory, Config, CLI */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>

          <div style={S.card}>
            <h3 style={S.h3}>📁 Memory & Files</h3>

            <Subhead>CLAUDE.md Locations</Subhead>
            <CmdRow cmd="./CLAUDE.md" desc="Project (team-shared)" />
            <CmdRow cmd="./CLAUDE.local.md" desc="Local personal (gitignored)" />
            <CmdRow cmd="~/.claude/CLAUDE.md" desc="Personal (all projects)" />
            <CmdRow cmd="/etc/claude-code/CLAUDE.md" desc="Managed policy (org-wide)" />

            <Subhead>Rules & Import</Subhead>
            <CmdRow cmd=".claude/rules/*.md" desc="Project rules" />
            <CmdRow cmd="~/.claude/rules/*.md" desc="User rules" />
            <CmdRow cmd="paths: frontmatter" desc="Path-specific rules" />
            <CmdRow cmd="@path/to/file" desc="Import in CLAUDE.md" />

            <Subhead>Auto Memory</Subhead>
            <CmdRow cmd="~/.claude/projects/<proj>/memory/" desc="Memory directory" />
            <div style={{ marginTop: '.5rem', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '.6rem .75rem', fontSize: '.8rem', color: '#166534', lineHeight: 1.5 }}>
              MEMORY.md auto-loads at startup (first 25KB or 200 lines). Topic files load on demand.
            </div>
          </div>

          <div style={S.card}>
            <h3 style={S.h3}>⚙️ Config & ENV</h3>

            <Subhead>Config Files</Subhead>
            <CmdRow cmd="~/.claude/settings.json" desc="User settings" />
            <CmdRow cmd=".claude/settings.json" desc="Project (shared)" />
            <CmdRow cmd=".claude/settings.local.json" desc="Local only" />
            <CmdRow cmd="~/.claude.json" desc="OAuth, MCP, state" />
            <CmdRow cmd=".mcp.json" desc="Project MCP servers" />
            <CmdRow cmd="managed-settings.d/" desc="Drop-in policy fragments" />

            <Subhead>Key Settings</Subhead>
            <CmdRow cmd="modelOverrides" desc="Map model picker → custom IDs" />
            <CmdRow cmd="autoMemoryDirectory" desc="Custom memory dir" />
            <CmdRow cmd="worktree.sparsePaths" desc="Sparse checkout dirs" />
            <CmdRow cmd="sandbox.failIfUnavailable" desc="Exit if sandbox fails" />
            <CmdRow cmd="hooks: if" desc="Conditional hooks" />
            <CmdRow cmd="Monitor tool" desc="Stream events from bg scripts" isNew />
            <CmdRow cmd="showThinkingSummaries" desc="Opt-in (off by default)" />
            <CmdRow cmd="refreshInterval" desc="Re-run status line every N sec" isNew />

            <Subhead>Key Env Vars</Subhead>
            <CmdRow cmd="ANTHROPIC_API_KEY" desc="Your Anthropic API key" />
            <CmdRow cmd="ANTHROPIC_MODEL" desc="Default model override" />
            <CmdRow cmd="CLAUDE_CODE_EFFORT_LEVEL" desc="low/medium/high/max/auto" />
            <CmdRow cmd="MAX_THINKING_TOKENS" desc="0 = off" />
            <CmdRow cmd="CLAUDE_CODE_SUBPROCESS_ENV_SCRUB" desc="Strip creds from subprocesses" isNew />
            <CmdRow cmd="CLAUDE_CODE_SCRIPT_CAPS" desc="JSON caps for script invocations" isNew />
            <CmdRow cmd="CLAUDE_STREAM_IDLE_TIMEOUT_MS" desc="Streaming watchdog (def 90s)" />
            <CmdRow cmd="CLAUDE_CODE_NO_FLICKER" desc="Alt-screen rendering (=1)" />
            <CmdRow cmd="CLAUDE_CODE_USE_MANTLE" desc="Use Mantle for Bedrock (=1)" isNew />
            <CmdRow cmd="CLAUDECODE" desc="Detect CC shell (=1)" />
          </div>

          <div style={S.card}>
            <h3 style={S.h3}>🖥 CLI & Flags</h3>

            <Subhead>Core Commands</Subhead>
            <CmdRow cmd="claude" desc="Interactive" />
            <CmdRow cmd='claude "q"' desc="With prompt" />
            <CmdRow cmd='claude -p "q"' desc="Headless" />
            <CmdRow cmd="claude -c" desc="Continue last" />
            <CmdRow cmd='claude -r "n"' desc="Resume by name" />
            <CmdRow cmd="claude update" desc="Update Claude Code" />

            <Subhead>Key Flags</Subhead>
            <CmdRow cmd="--model" desc="Set model" />
            <CmdRow cmd="-w" desc="Git worktree" />
            <CmdRow cmd="-n / --name" desc="Session name" />
            <CmdRow cmd="--add-dir" desc="Add directory" />
            <CmdRow cmd="--agent" desc="Use agent" />
            <CmdRow cmd="--allowedTools" desc="Pre-approve tools" />
            <CmdRow cmd="--output-format" desc="text / json / stream-json" />
            <CmdRow cmd="--json-schema" desc="Structured output schema" />
            <CmdRow cmd="--max-turns" desc="Limit turns" />
            <CmdRow cmd="--max-budget-usd" desc="Cost cap" />
            <CmdRow cmd="--verbose" desc="Verbose output" />
            <CmdRow cmd="--bare" desc="Minimal (skip hooks/skills/MCP)" />
            <CmdRow cmd="--channels" desc="Permission relay / MCP push" />
            <CmdRow cmd="--remote" desc="Create web session on claude.ai" />
            <CmdRow cmd="--effort" desc="low / medium / high / max" />
            <CmdRow cmd="--permission-mode" desc="plan / default / acceptEdits / …" />
            <CmdRow cmd="--dangerously-skip-permissions" desc="Skip all prompts ⚠️" />

            <Subhead>Permission Modes</Subhead>
            {[
              ['default', 'Prompts for permissions'],
              ['acceptEdits', 'Auto-accept file edits'],
              ['plan', 'Read-only (no writes)'],
              ['dontAsk', 'Deny unless pre-allowed'],
              ['bypassPermissions', 'Skip all ⚠️'],
            ].map(([mode, desc]) => (
              <div key={mode} style={S.row}>
                <span style={{ ...S.cmd, color: '#059669' }}>{mode}</span>
                <span style={S.desc}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div style={{ borderTop: '1px solid #E5E7EB', marginTop: '.5rem', paddingTop: '1.5rem', display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '.85rem', color: '#9CA3AF' }}>Related:</span>
          <Link href="/tools/claude-code-cli" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.6rem 1rem', fontSize: '.85rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>⌨️ Claude Code CLI Setup</Link>
          <Link href="/level1/lesson10" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.6rem 1rem', fontSize: '.85rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>📚 Lesson 10 — Claude Code Deep Dive</Link>
          <Link href="/level3/lesson23" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.6rem 1rem', fontSize: '.85rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>🔮 Lesson 23 — Claude Code Superuser</Link>
          <Link href="/tools/prompt-library" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.6rem 1rem', fontSize: '.85rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>📚 Prompt Library</Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}
