'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson38() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-38" />
      <main className="lesson-main">
        <LessonHeader level={5} lessonNumber={38} duration={60}
          title="AI Tools for Devs - The Landscape"
          subtitle="GitHub Copilot, Claude Code, Cursor, Windsurf - what they each do, how to choose, and how to set them up." />

        <section className="section-card">
          <h2>The AI Coding Tool Explosion</h2>
          <p>In 2024-2025, AI coding tools went from novelty to necessity. Every major IDE now has AI built in or available via extension. The challenge is no longer "should I use AI?" - it's "which tool for which job?"</p>
          <div className="info-box">
            <strong>The main players:</strong>
            <ul>
              <li><strong>GitHub Copilot</strong> - Microsoft/GitHub. Deep VS Code + JetBrains integration. Powered by OpenAI models. Best for inline completion.</li>
              <li><strong>Claude Code</strong> - Anthropic. Terminal-first, full-codebase awareness. Best for large refactors, multi-file changes, and agentic tasks.</li>
              <li><strong>Cursor</strong> - Fork of VS Code. Deep file indexing, Cmd+K edits, Composer for multi-file. Best all-in-one IDE experience.</li>
              <li><strong>Windsurf</strong> - Codeium's IDE. "Flows" for agentic multi-step changes. Fast and lightweight.</li>
              <li><strong>Codeium / Supermaven</strong> - Free alternatives for inline completion. Good for teams on a budget.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>How These Tools Actually Work</h2>
          <p>All AI coding tools share the same underlying mechanism - they send context to a language model and stream back completions. Understanding what context they send is the key to using them well.</p>
          <pre className="code-block">{`What the model typically sees:
┌─────────────────────────────────────┐
│  System prompt (tool's instructions) │
│  Current file content               │
│  Cursor position / selected code    │
│  Nearby open files (sometimes)      │
│  Recent edits / diff (sometimes)    │
│  Your chat history (chat mode)      │
│  Codebase index (Cursor, Claude Code)│
└─────────────────────────────────────┘

The model CANNOT see:
- Files you haven't opened/shared
- Your local env variables (unless you paste them)
- Runtime state / memory at execution time
- Other projects or repos`}</pre>
        </section>

        <section className="section-card">
          <h2>Tool Comparison at a Glance</h2>
          <pre className="code-block">{`Tool          | Best For              | IDE          | Cost/mo
--------------|----------------------|--------------|--------
GitHub Copilot| Inline completion    | VS Code,     | $10-19
              | PR summaries         | JetBrains    |
Claude Code   | Large refactors,     | Terminal /   | API usage
              | full-repo awareness  | any IDE      |
Cursor        | All-in-one AI IDE    | Own IDE      | $20
              | multi-file edits     | (VS Code UX) |
Windsurf      | Agentic flows        | Own IDE      | Free/Pro
              | Fast completions     | (VS Code UX) |
Codeium       | Free completion      | VS Code,     | Free
              | budget teams         | JetBrains    |`}</pre>
        </section>

        <section className="section-card">
          <h2>Setting Up GitHub Copilot in VS Code</h2>
          <div className="steps-list">
            <div className="step"><div className="step-number">1</div>
              <div>Install <strong>GitHub Copilot</strong> + <strong>GitHub Copilot Chat</strong> extensions from VS Code marketplace</div>
            </div>
            <div className="step"><div className="step-number">2</div>
              <div>Sign in with your GitHub account (requires Copilot subscription - free tier available for students/OSS maintainers)</div>
            </div>
            <div className="step"><div className="step-number">3</div>
              <div>Enable inline suggestions: <code>Settings → GitHub Copilot → Enable</code></div>
            </div>
            <div className="step"><div className="step-number">4</div>
              <div>Open Copilot Chat with <code>Ctrl+Alt+I</code> (Windows) or <code>Cmd+Shift+I</code> (Mac)</div>
            </div>
            <div className="step"><div className="step-number">5</div>
              <div>Test: open a new file, type a function signature, and wait 1-2s for ghost text</div>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Setting Up Claude Code</h2>
          <pre className="code-block">{`# Install
npm install -g @anthropic-ai/claude-code

# Set your API key
export ANTHROPIC_API_KEY="sk-ant-..."

# Add to shell profile so it persists
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.zshrc

# Run in your project
cd my-project
claude

# First thing to do: let Claude read your codebase
> /init
# This creates a CLAUDE.md with project context`}</pre>
          <div className="info-box">
            <strong>Claude Code vs the others:</strong> Claude Code is terminal-first and sees your entire repo (not just open files). It's uniquely powerful for "make this architectural change across 20 files" tasks that other tools handle poorly.
          </div>
        </section>

        <section className="section-card">
          <h2>Choosing Your Stack</h2>
          <div className="info-box">
            <strong>Recommended combinations:</strong>
            <ul>
              <li><strong>Solo developer:</strong> Cursor (all-in-one) + Claude Code for big refactors</li>
              <li><strong>Team on VS Code:</strong> GitHub Copilot (shared licenses) + Claude Code for heavy lifting</li>
              <li><strong>Budget-conscious:</strong> Codeium (free inline) + Claude Code (pay per use)</li>
              <li><strong>Enterprise / security-sensitive:</strong> GitHub Copilot Enterprise (data stays in org) + Claude Code with IP allow-listing</li>
            </ul>
          </div>
        </section>

        <QuickRef title="Lesson 38 Quick Reference" items={[
          { term: 'GitHub Copilot', definition: 'Best inline completion, deep VS Code/JetBrains integration, $10-19/mo' },
          { term: 'Claude Code', definition: 'Terminal-first, full-repo awareness, best for large multi-file changes' },
          { term: 'Cursor', definition: 'AI-native VS Code fork, Cmd+K edits, Composer for multi-file, $20/mo' },
          { term: 'Windsurf', definition: 'Codeium IDE with agentic Flows, fast and lightweight' },
          { term: 'Context window', definition: 'What the model sees: current file + cursor + open files + index' },
          { term: '/init', definition: 'Claude Code command to read your repo and create CLAUDE.md project context' },
        ]} />

        <LessonNav level={5}
          prev={{ href: '/level4/capstone', label: 'L4 Capstone' }}
          next={{ href: '/level5/lesson39', label: 'L39: Inline Code Completion' }}
          currentLessonId="l5-38" />
      </main>
    </div>
  )
}
