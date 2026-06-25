'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson41() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-41" />
      <main className="lesson-main">
        <LessonHeader level={5} lessonNumber={41} duration={60}
          title="Documenting Code with AI"
          subtitle="Docs that never get written are useless. AI removes the friction - learn to generate, maintain, and sync docs at speed." />

        <section className="section-card">
          <h2>Why Documentation is an AI Superpower</h2>
          <p>Documentation is the task developers most reliably skip. It's tedious, it goes stale, and it feels disconnected from "real work." AI removes every excuse - it writes faster than you and never complains about boring tasks.</p>
          <div className="info-box">
            <strong>What AI docs do well:</strong>
            <ul>
              <li>JSDoc / Python docstrings from existing code</li>
              <li>README files from repo structure + code</li>
              <li>Inline comments explaining complex logic</li>
              <li>API documentation from route/controller code</li>
              <li>Changelog entries from diffs</li>
              <li>Architecture decision records (ADRs)</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Generating JSDoc / TypeScript Docs</h2>
          <pre className="code-block">{`// Select this function and use /doc in Copilot Chat,
// or ask Claude: "Write JSDoc for this function"

function mergeUserPreferences(
  defaults: UserPreferences,
  overrides: Partial<UserPreferences>,
  options?: { deep?: boolean; allowNull?: boolean }
): UserPreferences {
  if (options?.deep) {
    return deepMerge(defaults, overrides, options.allowNull)
  }
  return { ...defaults, ...overrides }
}

// AI generates:
/**
 * Merges user preferences with optional deep merge support.
 *
 * @param defaults - Base preferences applied to all users
 * @param overrides - User-specific overrides (partial object)
 * @param options - Merge behaviour configuration
 * @param options.deep - If true, performs recursive deep merge (default: false)
 * @param options.allowNull - If true, null values in overrides replace defaults
 * @returns Merged UserPreferences object
 *
 * @example
 * const prefs = mergeUserPreferences(
 *   { theme: 'light', language: 'en' },
 *   { theme: 'dark' }
 * )
 * // Returns: { theme: 'dark', language: 'en' }
 */`}</pre>
        </section>

        <section className="section-card">
          <h2>Python Docstrings</h2>
          <pre className="code-block">{`# Ask: "Write a Google-style docstring for this function"

def calculate_invoice_total(
    line_items: list[dict],
    tax_rate: float,
    discount_code: str | None = None
) -> dict:
    # AI generates:
    """Calculate the total for an invoice including tax and optional discount.

    Args:
        line_items: List of items, each with 'price' (float) and
            'quantity' (int) keys.
        tax_rate: Tax rate as a decimal (e.g. 0.2 for 20% VAT).
        discount_code: Optional promotional code. Valid codes reduce
            the subtotal by a fixed percentage before tax.

    Returns:
        Dictionary with keys:
            - subtotal (float): Sum of all line items before tax/discount
            - discount_amount (float): Amount saved via discount code
            - tax_amount (float): Tax calculated on discounted subtotal
            - total (float): Final amount due

    Raises:
        ValueError: If any line item is missing 'price' or 'quantity'.
        InvalidDiscountError: If discount_code is not recognised.

    Example:
        >>> calculate_invoice_total(
        ...     [{'price': 10.0, 'quantity': 3}],
        ...     tax_rate=0.2
        ... )
        {'subtotal': 30.0, 'discount_amount': 0.0, 'tax_amount': 6.0, 'total': 36.0}
    """
`}</pre>
        </section>

        <section className="section-card">
          <h2>README Generation with Claude Code</h2>
          <pre className="code-block">{`# In Claude Code, generate a README for your whole project:
> Generate a comprehensive README.md for this project.
  Include: project overview, tech stack, prerequisites,
  setup instructions, environment variables, running tests,
  deployment, and API endpoints overview.
  Base it entirely on what you find in the codebase.

# Generate an API reference from route files:
> Read all files in src/routes/ and generate
  an API reference in markdown table format.
  Include: method, path, description, auth required,
  request body, and response format for each endpoint.

# Update an existing README after changes:
> Compare the current README.md with the actual codebase.
  What's out of date? Update only the sections that
  no longer match reality.`}</pre>
        </section>

        <section className="section-card">
          <h2>Inline Comments for Complex Logic</h2>
          <pre className="code-block">{`// Ask: "Add inline comments to explain this algorithm"

function buildQueryPlan(filters: Filter[], indexes: Index[]): QueryPlan {
  // Score each index by how many filters it satisfies
  const indexScores = indexes.map(idx => ({
    index: idx,
    score: filters.filter(f =>
      idx.columns.includes(f.column) && idx.supportsOperator(f.operator)
    ).length
  }))

  // Select the index with the highest score; fall back to full scan
  const bestIndex = indexScores.sort((a, b) => b.score - a.score)[0]

  // If no index covers any filter, return a sequential scan plan
  if (bestIndex.score === 0) {
    return { type: 'seq_scan', estimatedCost: Infinity }
  }

  // Build a plan that uses the best index for filtered columns
  // and handles remaining filters as post-index predicates
  const indexedFilters = filters.filter(f =>
    bestIndex.index.columns.includes(f.column)
  )
  const residualFilters = filters.filter(f =>
    !bestIndex.index.columns.includes(f.column)
  )

  return {
    type: 'index_scan',
    index: bestIndex.index,
    indexFilters: indexedFilters,
    residualFilters,
    estimatedCost: bestIndex.score * 0.1
  }
}`}</pre>
        </section>

        <section className="section-card">
          <h2>Hands-on: Document a Real Module</h2>
          <div className="hands-on-box">
            <p><strong>Challenge:</strong> Pick any undocumented file in a project you work on.</p>
            <ol>
              <li>Paste the whole file into Claude and ask: "Write complete JSDoc/docstrings for every function"</li>
              <li>Add inline comments to the 3 most complex functions using /doc or Claude</li>
              <li>Ask Claude Code: "Generate a section for the README explaining what [module] does and how to use it"</li>
              <li>Review all AI-generated docs for accuracy - fix anything wrong</li>
            </ol>
            <p><strong>Stretch:</strong> Set up a pre-commit hook that uses Claude Code to flag functions over 20 lines with no docstring, so new code always gets documented.</p>
          </div>
        </section>

        <QuickRef title="Lesson 41 Quick Reference" items={[
          { term: '/doc (Copilot)', definition: 'Select a function, run /doc in chat - generates full JSDoc' },
          { term: 'Google docstring', definition: 'Ask: "Write a Google-style docstring" for clean Python docs with Args/Returns/Raises' },
          { term: 'README from repo', definition: 'Claude Code: "Generate README based on what you find in the codebase"' },
          { term: 'API reference', definition: '"Read all files in src/routes/ and generate API reference in markdown"' },
          { term: 'Stale docs check', definition: '"Compare README.md with the codebase - what is out of date?"' },
          { term: 'Inline comments', definition: '"Add inline comments to explain this algorithm" - ask for complex functions' },
        ]} />

        <LessonNav level={5}
          prev={{ href: '/level5/lesson40', label: 'L40: AI Chat for Dev' }}
          next={{ href: '/level5/lesson42', label: 'L42: Debugging with AI' }}
          currentLessonId="l5-41" />
      </main>
    </div>
  )
}
