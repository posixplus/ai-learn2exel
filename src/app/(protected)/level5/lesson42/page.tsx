'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson42() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-42" />
      <main className="lesson-main">
        <LessonHeader level={5} lessonNumber={42} duration={75}
          title="Debugging with AI"
          subtitle="AI doesn't just fix bugs - it explains root causes, reads stack traces in seconds, and spots issues you'd miss at 11pm." />

        <section className="section-card">
          <h2>The AI Debugging Mindset</h2>
          <p>Most developers use AI debugging wrong: they paste an error and say "fix this." That gets you a patch, not an understanding. The right approach is to use AI to understand first, fix second.</p>
          <div className="info-box">
            <strong>The three debugging modes:</strong>
            <ul>
              <li><strong>"Explain this error"</strong> - understand what went wrong and why, before touching code</li>
              <li><strong>"Find the bug"</strong> - give AI the code + symptoms, ask it to identify the root cause</li>
              <li><strong>"Fix and explain"</strong> - ask for the fix AND an explanation of what was wrong</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Stack Trace Reading</h2>
          <pre className="code-block">{`// Paste the full stack trace - not just the last line
// Bad: "I get a TypeError, help"
// Good: paste everything below

Prompt template:
"I'm getting this error in my [Node/Python/Go] app.
Here's the full stack trace:

[paste full stack trace]

Here's the code at the relevant line:

[paste the function or file]

Explain:
1. What is the root cause?
2. Why does this happen?
3. What's the fix?
4. How do I prevent this class of error in future?"

// Example output from Claude:
// Root cause: You're calling .json() on a Response object
// that has already been consumed. Response bodies can only
// be read once. You called res.text() earlier in the middleware
// which drained the stream.
// Fix: Clone the response before reading: res.clone().json()
// Prevention: Use a single body-reading method per response,
// or clone immediately after fetch if you need to read twice.`}</pre>
        </section>

        <section className="section-card">
          <h2>The /fix Command (Copilot)</h2>
          <pre className="code-block">{`// Select the broken code → /fix in Copilot Chat
// Copilot reads the selection + error context and suggests a fix

// For better /fix results, first write a comment:
// BUG: This throws "Cannot read properties of undefined"
// when user.profile is null
function getDisplayName(user: User): string {
  return user.profile.firstName + ' ' + user.profile.lastName
}
// Now /fix knows exactly what the bug is

// Copilot suggests:
function getDisplayName(user: User): string {
  if (!user.profile) return user.email ?? 'Unknown User'
  return [user.profile.firstName, user.profile.lastName]
    .filter(Boolean)
    .join(' ') || user.email ?? 'Unknown User'
}`}</pre>
        </section>

        <section className="section-card">
          <h2>Root Cause Analysis for Hard Bugs</h2>
          <pre className="code-block">{`// For intermittent or complex bugs, give more context:

"This function works correctly in unit tests but fails
in production about 1 in 50 requests. Here's the function:

[code]

It's a race condition I think, but I can't reproduce it locally.
The error is: [error message]
The function runs in a serverless environment with concurrent execution.

What are the possible race conditions here?
What would you add to diagnose which one is occurring?"

// Claude identifies:
// 1. Shared mutable state in module scope (the cache object)
//    not protected for concurrent access
// 2. Time-of-check/time-of-use: checking cache.has(key) then
//    reading cache.get(key) are two separate operations
// Suggests: add a mutex or use an atomic read-then-set pattern`}</pre>
        </section>

        <section className="section-card">
          <h2>Debugging Patterns by Error Type</h2>
          <div className="info-box">
            <strong>Paste these prompt templates for common error types:</strong>
            <ul>
              <li><strong>TypeError/null:</strong> "Why would [variable] be undefined/null here? Walk through every code path that leads to this line."</li>
              <li><strong>Async bugs:</strong> "Is there a timing issue in this async code? What happens if the promise rejects here?"</li>
              <li><strong>Performance:</strong> "This query takes 8s. Explain what it's doing and why it might be slow. What indexes would help?"</li>
              <li><strong>Logic bugs:</strong> "This function returns [wrong value] when I pass [input]. Walk through what it actually does step by step."</li>
              <li><strong>Build errors:</strong> "Here's my TypeScript error: [paste]. Explain in plain English what type mismatch is happening."</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Claude Code for Debugging Sessions</h2>
          <pre className="code-block">{`# Claude Code can read logs, check related files, trace the call chain
> I'm getting this error: [paste error]
  The relevant file is src/services/payment.ts
  Can you trace through the call chain to find the root cause?

# Ask for a reproduction case
> Write a minimal test that reproduces this bug
  so I can debug it without running the full app

# Compare expected vs actual behaviour
> This function should sort users by last login descending.
  Walk through what it actually does and explain the bug.

# Ask for defensive improvements
> Fix the immediate bug, then suggest what defensive
  coding would prevent this entire class of null-pointer
  errors in this service`}</pre>
        </section>

        <QuickRef title="Lesson 42 Quick Reference" items={[
          { term: 'Explain first', definition: 'Ask "what is the root cause?" before asking for the fix - builds real understanding' },
          { term: 'Full stack trace', definition: 'Always paste the complete trace, not just the error message' },
          { term: '/fix (Copilot)', definition: 'Select broken code + /fix - add a comment describing the bug for better results' },
          { term: 'Race condition prompt', definition: '"What are the possible race conditions here?" - works well for async/concurrent bugs' },
          { term: 'Logic trace', definition: '"Walk through what this function actually does step by step" for logic bugs' },
          { term: 'Minimal repro', definition: 'Ask Claude: "Write a minimal test that reproduces this bug"' },
        ]} />

        <LessonNav level={5}
          prev={{ href: '/level5/lesson41', label: 'L41: Documenting Code' }}
          next={{ href: '/level5/lesson43', label: 'L43: Writing Tests with AI' }}
          currentLessonId="l5-42" />
      </main>
    </div>
  )
}
