'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson39() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-39" />
      <main className="lesson-main">
        <LessonHeader level={5} lessonNumber={39} duration={75}
          title="Inline Code Completion Mastery"
          subtitle="Ghost text isn't magic - it's pattern matching on context. Learn to write code that AI can complete brilliantly." />

        <section className="section-card">
          <h2>How Inline Completion Works</h2>
          <p>When you pause typing, the tool sends your file content (up to the context limit) to the model. The model predicts what comes next based on everything it sees. Your job is to give it the right signals.</p>
          <div className="info-box">
            <strong>What drives better completions:</strong>
            <ul>
              <li><strong>Good function names</strong> - <code>getUserByEmail()</code> predicts better than <code>getUser()</code></li>
              <li><strong>Type annotations</strong> - TypeScript/Python types dramatically improve suggestions</li>
              <li><strong>Comments before code</strong> - A comment describing what you want is the strongest signal</li>
              <li><strong>Consistent patterns</strong> - Existing code in the file acts as few-shot examples</li>
              <li><strong>Open relevant files</strong> - In Cursor/Copilot, open files that share the pattern you want</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>The Comment-First Technique</h2>
          <p>Write your intent as a comment, then let AI write the code. This is the single highest-leverage technique for inline completion.</p>
          <pre className="code-block">{`// BAD: ambiguous, poor completion
function process(data) {
  // ...
}

// GOOD: descriptive name + comment = excellent completion
// Validates email format and checks if domain is in the blocked list
// Returns { valid: boolean, reason: string }
function validateEmailAddress(email: string, blockedDomains: string[]) {
  // AI now knows exactly what to write

// EVEN BETTER: JSDoc comment triggers full implementation
/**
 * Calculates compound interest over a given period.
 * @param principal - Initial investment amount in USD
 * @param rate - Annual interest rate as decimal (e.g. 0.05 for 5%)
 * @param years - Investment duration in years
 * @param compoundsPerYear - Times compounded per year (12 for monthly)
 * @returns Final amount after compound interest
 */
function calculateCompoundInterest(
  principal: number,
  rate: number,
  years: number,
  compoundsPerYear: number = 12
): number {
  // Accept the AI's completion here
}`}</pre>
        </section>

        <section className="section-card">
          <h2>Keyboard Shortcuts (VS Code + Copilot)</h2>
          <pre className="code-block">{`Tab              → Accept full suggestion
Escape           → Dismiss suggestion
Alt+]            → Next suggestion (cycle through alternatives)
Alt+[            → Previous suggestion
Ctrl+Enter       → Open Copilot panel (see 10 alternatives)
Alt+\            → Trigger suggestion manually (if it didn't appear)

// In Cursor:
Tab              → Accept full suggestion
Cmd+Right        → Accept one word at a time (very useful!)
Escape           → Dismiss`}</pre>
          <div className="info-box">
            <strong>Pro tip - partial acceptance:</strong> In Cursor and newer Copilot versions, use <code>Cmd+Right</code> to accept just the next word. This lets you accept the structure but change specifics - much faster than retyping.
          </div>
        </section>

        <section className="section-card">
          <h2>Writing AI-Readable Code</h2>
          <pre className="code-block">{`// Pattern 1: Show one example, let AI complete the rest
const STATUS_MESSAGES = {
  200: 'OK',
  201: 'Created',
  // Accept completion - AI will fill in 400, 401, 403, 404, 500...
}

// Pattern 2: Consistent naming = consistent completions
// After writing getUserById, getProductById, getOrderById...
// getInvoice| → AI autocompletes "ById" and the full implementation

// Pattern 3: Start the body, not just the signature
async function fetchUserProfile(userId: string) {
  const response = await fetch(
  // AI now knows it's an API call and completes the full fetch chain

// Pattern 4: Use types to constrain completions
type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed'
function handlePaymentStatus(status: PaymentStatus) {
  switch (status) {
    // AI generates all 4 cases with appropriate handling
  }
}`}</pre>
        </section>

        <section className="section-card">
          <h2>When to NOT Trust Inline Completion</h2>
          <div className="info-box">
            <strong>Always verify AI-completed code for:</strong>
            <ul>
              <li><strong>Security-sensitive logic</strong> - auth checks, input sanitisation, SQL queries</li>
              <li><strong>Business logic</strong> - pricing calculations, permission rules, financial operations</li>
              <li><strong>Edge cases</strong> - null checks, empty arrays, timezone handling, locale formatting</li>
              <li><strong>Library versions</strong> - AI may suggest APIs from older library versions</li>
              <li><strong>Your internal APIs</strong> - AI doesn't know your custom SDK unless you have it open</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-on: Complete a CRUD Module</h2>
          <div className="hands-on-box">
            <p><strong>Challenge:</strong> Write a TypeScript CRUD service using only inline completion.</p>
            <ol>
              <li>Create a new file <code>user-service.ts</code></li>
              <li>Write a JSDoc comment for <code>createUser(email, name, role)</code> - accept the completion</li>
              <li>Write only the function signature for <code>getUserById</code> - see what you get</li>
              <li>Write the first CRUD function fully, then write just signatures for the rest - the AI should follow the pattern</li>
              <li>Add error handling by typing <code>{"// throw custom error if"}</code> and see what it suggests</li>
            </ol>
          </div>
        </section>

        <QuickRef title="Lesson 39 Quick Reference" items={[
          { term: 'Comment-first', definition: 'Write intent as a comment, then let AI write the code - strongest completion signal' },
          { term: 'Type annotations', definition: 'TypeScript/Python types dramatically improve suggestion accuracy' },
          { term: 'Tab', definition: 'Accept full suggestion | Alt+] cycles alternatives | Ctrl+Enter shows 10 options' },
          { term: 'Cmd+Right', definition: 'Accept one word at a time (Cursor) - great for partial acceptance' },
          { term: 'Show one, get many', definition: 'Write one item in a pattern (array, switch, object) - AI fills the rest' },
          { term: 'Always verify', definition: 'Security, business logic, edge cases - never blindly accept these' },
        ]} />

        <LessonNav level={5}
          prev={{ href: '/level5/lesson38', label: 'L38: AI Tools Landscape' }}
          next={{ href: '/level5/lesson40', label: 'L40: AI Chat for Development' }}
          currentLessonId="l5-39" />
      </main>
    </div>
  )
}
