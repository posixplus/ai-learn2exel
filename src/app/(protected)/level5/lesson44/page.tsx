'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson44() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-44" />
      <main className="lesson-main">
        <LessonHeader
          level={5}
          lessonNumber={44}
          duration={40}
          title="Refactoring & Code Review with AI"
          subtitle="Detect code smells, get naming improvements, and run AI-assisted PR reviews"
        />

        <section className="section-card">
          <h2>Why AI Excels at Code Review</h2>
          <p>
            Code review is pattern recognition - spotting anti-patterns, naming issues, and logic
            gaps. AI tools have seen millions of codebases and recognize these patterns instantly.
            The key is prompting effectively to get actionable suggestions, not generic advice.
          </p>
          <div className="info-box">
            <strong>AI catches well:</strong> naming inconsistencies, long functions, deep nesting,
            duplicated logic, missing error handling, unsafe type casts, and security smells.
            <br /><strong>AI misses:</strong> business context, team conventions, and product intent - always apply human judgment.
          </div>
        </section>

        <section className="section-card">
          <h2>Refactor Suggestions in Copilot Chat</h2>
          <p>Select a function, open Chat, and prompt with a specific goal:</p>
          <div className="code-block">
            <pre>{`// Select this function, then ask Copilot:
// "Refactor this to reduce nesting and improve readability"

function processOrder(order) {
  if (order) {
    if (order.items) {
      if (order.items.length > 0) {
        for (let item of order.items) {
          if (item.inStock) {
            ship(item);
          }
        }
      }
    }
  }
}

// AI suggestion (early-return pattern):
function processOrder(order) {
  if (!order?.items?.length) return;
  const inStockItems = order.items.filter(item => item.inStock);
  inStockItems.forEach(ship);
}`}</pre>
          </div>
          <p>Effective refactor prompts:</p>
          <ul>
            <li><strong>"Reduce nesting using early returns"</strong></li>
            <li><strong>"Extract this into smaller functions, each doing one thing"</strong></li>
            <li><strong>"Replace this loop with functional equivalents (map/filter/reduce)"</strong></li>
            <li><strong>"Rename variables to be more descriptive"</strong></li>
          </ul>
        </section>

        <section className="section-card">
          <h2>Code Smell Detection</h2>
          <p>Ask AI to audit a file or class for common smells:</p>
          <div className="code-block">
            <pre>{`// Prompt: "Identify code smells in this class and explain each one"

class UserManager {
  data = [];
  // 200-line class doing auth, DB access, email, and logging
  // AI will flag: God Object, SRP violation, mixed concerns
}

// Prompt: "List all places where this function violates DRY"
// Prompt: "Find magic numbers and suggest named constants"
// Prompt: "Identify any potential null pointer / undefined access issues"`}</pre>
          </div>
          <div className="info-box">
            <strong>Pro tip:</strong> Paste the entire file and ask for a structured smell report.
            Ask AI to categorize issues by severity: critical, moderate, minor.
          </div>
        </section>

        <section className="section-card">
          <h2>Naming Improvements</h2>
          <p>Poor naming is one of the most common review comments. AI is excellent at suggesting better names:</p>
          <div className="code-block">
            <pre>{`// Prompt: "Suggest better names for variables, params, and functions in this snippet"

// Before
function calc(d, r) {
  const x = d * r;
  const y = x * 0.08;
  return x + y;
}

// AI suggestion
function calculateTotalWithTax(subtotal, quantity) {
  const orderTotal = subtotal * quantity;
  const taxAmount = orderTotal * TAX_RATE;
  return orderTotal + taxAmount;
}`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>AI-Assisted PR Reviews</h2>
          <p>
            Before submitting a PR, use AI to pre-review your own diff. This catches obvious issues
            before a human reviewer sees them.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Step 1 - Get your diff</strong>
              <div className="code-block">
                <pre>{`git diff main..HEAD > pr-diff.txt`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 2 - Paste into Claude Code or Copilot Chat</strong>
              <div className="code-block">
                <pre>{`# Prompt:
"Review this diff as if you're a senior engineer.
Flag: logic bugs, missing edge cases, security issues,
style violations, and anything that would get a 'request changes' comment."`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 3 - Iterate on the feedback</strong>
              <p>Address AI-flagged issues, then re-run the review on the updated diff.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Security Scanning Prompts</h2>
          <p>AI can help spot common security vulnerabilities in your code:</p>
          <div className="code-block">
            <pre>{`// Prompts for security review:
"Check this code for SQL injection vulnerabilities"
"Identify any places where user input is not sanitized"
"Flag any hardcoded secrets, API keys, or credentials"
"Check for insecure direct object references (IDOR)"
"Review this auth middleware for bypass vulnerabilities"

// Example catch:
const query = "SELECT * FROM users WHERE id = " + req.params.id;
// AI flags: SQL injection - use parameterized queries
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [req.params.id]);`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Performance Hints</h2>
          <p>Ask AI to identify expensive operations and suggest optimizations:</p>
          <div className="code-block">
            <pre>{`// Prompts:
"Find any O(n²) or worse complexity in this function"
"Identify database calls inside loops (N+1 problem)"
"Suggest where memoization would help"
"Are there any unnecessary re-renders in this React component?"

// Example N+1 catch:
for (const user of users) {
  const orders = await db.query('SELECT * FROM orders WHERE user_id = ?', [user.id]);
  // AI flags: N+1 query - use a JOIN or batch load instead
}

// Suggested fix:
const orders = await db.query(
  'SELECT * FROM orders WHERE user_id IN (?)',
  [users.map(u => u.id)]
);`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Reviewing Diffs with Claude Code</h2>
          <p>Claude Code's context window handles entire files and diffs efficiently:</p>
          <div className="code-block">
            <pre>{`# In terminal, run Claude Code on a staged diff:
git diff --staged | claude "Review this staged diff for any issues before I commit"

# Or review a specific file's changes:
claude "Review the changes in src/auth/middleware.ts and flag anything concerning"

# Review with context:
claude "Given that this is a financial transaction service,
review auth.ts for security and correctness issues"`}</pre>
          </div>
          <div className="hands-on-box">
            <strong>Hands-on:</strong> Pick any function you've written recently. Paste it into
            Copilot Chat and ask: "Review this for code smells, naming issues, and edge cases.
            Give me a prioritized list of improvements." Implement the top suggestion.
          </div>
        </section>

        <QuickRef title="Lesson 44 Quick Reference" items={[
          { term: 'Refactor prompt', definition: '"Refactor this to reduce nesting using early returns"' },
          { term: 'Smell audit', definition: '"Identify code smells and categorize by severity"' },
          { term: 'Naming review', definition: '"Suggest better names for all variables and functions here"' },
          { term: 'PR pre-review', definition: 'git diff main..HEAD, paste to AI, ask for senior engineer review' },
          { term: 'Security scan', definition: '"Check for SQL injection, unsanitized input, hardcoded secrets"' },
          { term: 'N+1 detection', definition: '"Identify database calls inside loops and suggest batch alternatives"' },
          { term: 'Claude Code diff', definition: 'git diff --staged | claude "Review this before I commit"' },
        ]} />

        <LessonNav
          level={5}
          prev={{ href: '/level5/lesson43', label: 'Writing Tests with AI' }}
          next={{ href: '/level5/lesson45', label: 'Git Workflow with AI' }}
          currentLessonId="l5-44"
        />
      </main>
    </div>
  )
}
