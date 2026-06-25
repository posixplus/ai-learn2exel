'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson43() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-43" />
      <main className="lesson-main">
        <LessonHeader level={5} lessonNumber={43} duration={90}
          title="Writing Tests with AI"
          subtitle="AI writes the tests you never had time to write. Unit tests, edge cases, mocks, integration tests - in seconds." />

        <section className="section-card">
          <h2>Why AI + Testing is a Force Multiplier</h2>
          <p>Testing is the developer task most likely to be skipped under deadline pressure. AI reverses this - generating a solid test suite takes minutes, not hours. The bottleneck shifts from writing to reviewing.</p>
          <div className="info-box">
            <strong>What AI generates well:</strong>
            <ul>
              <li>Unit tests for pure functions (deterministic, no side effects)</li>
              <li>Edge case discovery - null, empty, boundary, invalid input</li>
              <li>Mock setup for external dependencies (DB, APIs, timers)</li>
              <li>Integration test scaffolding</li>
              <li>Test data builders and factory functions</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Generating Unit Tests with /tests</h2>
          <pre className="code-block">{`// Select your function → /tests in Copilot Chat
// Or ask: "Write comprehensive unit tests for this function
//          using Jest + TypeScript"

// Your function:
function parseAmount(input: string): number {
  const cleaned = input.replace(/[$,\s]/g, '')
  const parsed = parseFloat(cleaned)
  if (isNaN(parsed)) throw new Error('Invalid amount: ' + input)
  if (parsed < 0) throw new Error('Amount cannot be negative')
  return Math.round(parsed * 100) / 100
}

// AI generates:
describe('parseAmount', () => {
  it('parses a simple number string', () => {
    expect(parseAmount('42.50')).toBe(42.50)
  })
  it('strips dollar signs', () => {
    expect(parseAmount('$1,234.56')).toBe(1234.56)
  })
  it('strips commas and spaces', () => {
    expect(parseAmount('1 000.00')).toBe(1000.00)
  })
  it('rounds to 2 decimal places', () => {
    expect(parseAmount('10.999')).toBe(11.00)
  })
  it('throws for non-numeric input', () => {
    expect(() => parseAmount('abc')).toThrow('Invalid amount: abc')
  })
  it('throws for negative amounts', () => {
    expect(() => parseAmount('-5.00')).toThrow('Amount cannot be negative')
  })
  it('handles zero', () => {
    expect(parseAmount('0')).toBe(0)
  })
  it('throws for empty string', () => {
    expect(() => parseAmount('')).toThrow('Invalid amount')
  })
})`}</pre>
        </section>

        <section className="section-card">
          <h2>Edge Case Discovery Prompt</h2>
          <pre className="code-block">{`// Dedicated edge case prompt - gets you cases you'd never think of:

"List every edge case and boundary condition that should be
tested for this function. Be exhaustive - include:
- Empty/null/undefined inputs
- Boundary values (min, max, zero, negative)
- Type coercion surprises
- Unicode/special characters
- Very large/very small numbers
- Concurrency issues (if async)
- Error paths

Function: [paste your function]"

// Then follow up:
"Now write test cases for all of these using Vitest + TypeScript"`}</pre>
        </section>

        <section className="section-card">
          <h2>Mocking External Dependencies</h2>
          <pre className="code-block">{`// Ask: "Write Jest tests for this service, mocking the database
//        and the email service. Use jest.mock()"

export class UserService {
  constructor(
    private db: Database,
    private email: EmailService
  ) {}

  async registerUser(email: string, name: string): Promise<User> {
    const existing = await this.db.users.findByEmail(email)
    if (existing) throw new ConflictError('Email already registered')
    const user = await this.db.users.create({ email, name })
    await this.email.sendWelcome(user)
    return user
  }
}

// AI generates complete mock setup:
const mockDb = {
  users: {
    findByEmail: jest.fn(),
    create: jest.fn(),
  }
}
const mockEmail = { sendWelcome: jest.fn() }

describe('UserService.registerUser', () => {
  let service: UserService

  beforeEach(() => {
    jest.clearAllMocks()
    service = new UserService(mockDb as any, mockEmail as any)
  })

  it('creates a user and sends welcome email', async () => {
    mockDb.users.findByEmail.mockResolvedValue(null)
    mockDb.users.create.mockResolvedValue({ id: '1', email: 'a@b.com', name: 'Jay' })

    const result = await service.registerUser('a@b.com', 'Jay')

    expect(mockDb.users.create).toHaveBeenCalledWith({ email: 'a@b.com', name: 'Jay' })
    expect(mockEmail.sendWelcome).toHaveBeenCalledWith(result)
  })

  it('throws ConflictError if email already exists', async () => {
    mockDb.users.findByEmail.mockResolvedValue({ id: '2' })
    await expect(service.registerUser('a@b.com', 'Jay'))
      .rejects.toThrow(ConflictError)
    expect(mockDb.users.create).not.toHaveBeenCalled()
  })
})`}</pre>
        </section>

        <section className="section-card">
          <h2>TDD with AI: Test-First Workflow</h2>
          <div className="steps-list">
            <div className="step"><div className="step-number">1</div>
              <div>Describe the function you want in plain English to AI</div>
            </div>
            <div className="step"><div className="step-number">2</div>
              <div>Ask: "Write the failing tests first - no implementation yet"</div>
            </div>
            <div className="step"><div className="step-number">3</div>
              <div>Run the tests - confirm they all fail (red)</div>
            </div>
            <div className="step"><div className="step-number">4</div>
              <div>Ask: "Now write the minimal implementation to pass these tests"</div>
            </div>
            <div className="step"><div className="step-number">5</div>
              <div>Run tests - confirm they pass (green), then ask: "Refactor this while keeping tests green"</div>
            </div>
          </div>
          <pre className="code-block">{`// TDD prompt:
"I want a function called 'buildPaginationLinks' that:
- Takes currentPage, totalPages, and baseUrl
- Returns an object with prev/next/first/last URL strings
- Returns null for prev on first page, null for next on last page
- Throws if totalPages < 1

Write the tests first (Jest + TypeScript). No implementation."`}</pre>
        </section>

        <section className="section-card">
          <h2>Coverage Gap Analysis</h2>
          <pre className="code-block">{`// Use Claude Code to audit test coverage:
> Read the file src/services/payment.ts and the existing
  tests in tests/payment.test.ts
  What code paths are not covered by the current tests?
  List them and write tests for the top 5 gaps.

// Or with a coverage report:
> Here's my Jest coverage report: [paste]
  These functions have low coverage: [list]
  For each one, explain what cases are missing and
  write tests to bring coverage above 80%`}</pre>
        </section>

        <QuickRef title="Lesson 43 Quick Reference" items={[
          { term: '/tests (Copilot)', definition: 'Select a function, run /tests - generates full unit test suite' },
          { term: 'Edge case prompt', definition: '"List every edge case: null, boundary, Unicode, error paths" - then write tests' },
          { term: 'Mock setup', definition: '"Write tests mocking the DB and email service using jest.mock()"' },
          { term: 'TDD with AI', definition: '"Write failing tests first - no implementation" then "pass these tests minimally"' },
          { term: 'Coverage gaps', definition: '"Read the test file and the source - what code paths are missing?"' },
          { term: 'Test data builders', definition: 'Ask: "Write a factory function that creates test User objects with sensible defaults"' },
        ]} />

        <LessonNav level={5}
          prev={{ href: '/level5/lesson42', label: 'L42: Debugging with AI' }}
          next={{ href: '/level5/lesson44', label: 'L44: Refactoring & Code Review' }}
          currentLessonId="l5-43" />
      </main>
    </div>
  )
}
