'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson40() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-40" />
      <main className="lesson-main">
        <LessonHeader level={5} lessonNumber={40} duration={75}
          title="AI Chat for Development"
          subtitle="Inline completion is fast. Chat is deep. Know when to use each - and how to ask questions that get great answers." />

        <section className="section-card">
          <h2>Chat vs Inline: Choosing the Right Mode</h2>
          <div className="info-box">
            <strong>Use inline completion when:</strong>
            <ul>
              <li>Writing new code in a known pattern (CRUD, API calls, components)</li>
              <li>Completing a structure you've already started (switch cases, objects, lists)</li>
              <li>You know exactly what you want and just want it typed faster</li>
            </ul>
            <strong>Use chat when:</strong>
            <ul>
              <li>You need to explain a problem and think through it</li>
              <li>You want to understand code you didn't write</li>
              <li>You need a design decision or tradeoff analysis</li>
              <li>You want to generate, then modify, then iterate</li>
              <li>You need something that spans multiple concepts</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Slash Commands (GitHub Copilot Chat)</h2>
          <pre className="code-block">{`/explain   → Explain selected code in plain English
/fix       → Fix the bug or error in selected code
/tests     → Generate unit tests for selected code
/doc       → Generate documentation for selected code
/simplify  → Refactor selected code to be simpler
/new       → Scaffold a new file/project

# In VS Code chat, you can also use:
@workspace  → Ask about your entire codebase
@terminal   → Ask about terminal commands
#file       → Reference a specific file
#selection  → Reference your current selection

Examples:
> /explain  [select 30 lines of complex regex]
> /fix      [select the function with the bug]
> @workspace where is the authentication middleware defined?
> #file:user.service.ts what does this service do?`}</pre>
        </section>

        <section className="section-card">
          <h2>High-Value Chat Patterns</h2>
          <pre className="code-block">{`// Pattern 1: Understand unfamiliar code
"Explain this middleware step by step.
What does each part do and why?"

// Pattern 2: Design before you code
"I need to add rate limiting to my Express API.
What are my options? Compare Redis vs in-memory
vs a library approach. I have 5 API instances."

// Pattern 3: Diagnose an error
"I'm getting this error: [paste full stack trace]
Here's the relevant code: [paste code]
What's causing it and how do I fix it?"

// Pattern 4: Improve existing code
"This function works but feels wrong.
What are the code smells here?
How would a senior engineer rewrite it?"

// Pattern 5: Generate with constraints
"Write a React hook that fetches user data.
Requirements:
- TypeScript with proper types
- Handle loading, error, and success states
- Cancel on unmount (cleanup)
- Use React Query under the hood"

// Pattern 6: Rubber duck + solution
"I'm trying to [goal]. I thought I could [approach].
But I'm running into [problem]. What am I missing?"`}</pre>
        </section>

        <section className="section-card">
          <h2>Claude Code Chat Mode</h2>
          <pre className="code-block">{`# Claude Code is terminal chat with full codebase access
# Start a session in your project:
claude

# Ask about your own code (Claude has read the whole repo)
> How does authentication work in this app?
> Find all places where we query the users table directly
> What's the difference between UserService and UserRepository?

# Combine understanding with action
> Explain the current rate limiting approach, then
  suggest how to make it distributed-safe

# Reference specific files naturally
> Look at src/middleware/auth.ts and explain
  the token refresh logic

# Claude Code remembers context in the session
> OK based on that, now add refresh token rotation`}</pre>
          <div className="info-box">
            <strong>Key difference:</strong> GitHub Copilot chat sees what you have open. Claude Code chat reads your entire repository. For questions about architecture, dependencies, or cross-file patterns, Claude Code gives dramatically better answers.
          </div>
        </section>

        <section className="section-card">
          <h2>Getting Better Answers: Prompting for Code</h2>
          <div className="steps-list">
            <div className="step"><div className="step-number">1</div>
              <div><strong>Give context first</strong> - "I'm using Express 4, TypeScript, Prisma ORM, and PostgreSQL"</div>
            </div>
            <div className="step"><div className="step-number">2</div>
              <div><strong>State constraints upfront</strong> - "No external libraries", "Must be backward compatible", "Needs to work in Node 18"</div>
            </div>
            <div className="step"><div className="step-number">3</div>
              <div><strong>Ask for explanations</strong> - "Explain why you made each choice" surfaces assumptions you can correct</div>
            </div>
            <div className="step"><div className="step-number">4</div>
              <div><strong>Request alternatives</strong> - "Show me 2 approaches with tradeoffs" is better than accepting the first suggestion</div>
            </div>
            <div className="step"><div className="step-number">5</div>
              <div><strong>Iterate, don't restart</strong> - "Keep everything but change the error handling to use a Result type" is faster than re-prompting from scratch</div>
            </div>
          </div>
        </section>

        <QuickRef title="Lesson 40 Quick Reference" items={[
          { term: '/explain', definition: 'Copilot Chat: explain selected code in plain English' },
          { term: '/fix + /tests', definition: 'Fix selected bug or generate unit tests for selection' },
          { term: '@workspace', definition: 'VS Code: ask about your entire codebase (not just open files)' },
          { term: 'Claude Code chat', definition: 'Reads entire repo - best for architecture/cross-file questions' },
          { term: 'Context first', definition: 'Always state your stack (Express, Prisma, TS) before asking a question' },
          { term: 'Ask for alternatives', definition: '"Show 2 approaches with tradeoffs" beats accepting the first answer' },
        ]} />

        <LessonNav level={5}
          prev={{ href: '/level5/lesson39', label: 'L39: Inline Completion' }}
          next={{ href: '/level5/lesson41', label: 'L41: Documenting Code with AI' }}
          currentLessonId="l5-40" />
      </main>
    </div>
  )
}
