import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'

export default function Level4Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={0}
          duration={0}
          title="Level 4 Capstone: Ship Your AI Product"
          subtitle="Everything you've learned — API, RAG, agents, vision, production, evals — comes together in one real project."
        />

        <section className="capstone-hero l4">
          <h2>You're now an AI builder.</h2>
          <p>
            Level 4 covered the full stack of building with Claude: calling the API,
            extracting structured data, building RAG pipelines, orchestrating multi-agent
            systems, processing images, shipping to production, building responsibly,
            and measuring quality with evals. The capstone is to ship something real.
          </p>
        </section>

        <section className="section-card">
          <h2>Option A: AI-Powered Support Inbox</h2>
          <p>
            Build a full-stack Next.js app that triages, summarises, and drafts replies
            for a customer support inbox. This pulls together structured outputs, RAG
            over your knowledge base, and a clean UI.
          </p>
          <div className="info-box">
            <strong>What to build:</strong>
            <ul>
              <li>Ingest a knowledge base (docs, FAQs) into Supabase pgvector</li>
              <li>API endpoint: triage incoming ticket (category + priority) using tool use</li>
              <li>API endpoint: retrieve relevant docs via RAG, draft a reply</li>
              <li>Next.js UI: ticket list, click to see AI summary + draft reply</li>
              <li>Eval suite: 20 test tickets with expected triage labels</li>
            </ul>
          </div>
          <div className="hands-on-box">
            <strong>Starter prompt for Claude Code:</strong>
            <pre className="code-block">{`Build a Next.js 14 App Router customer support inbox app.
Stack: TypeScript, Tailwind, Supabase, Anthropic SDK.

Features:
1. Supabase table: tickets (id, subject, body, status, category, priority, created_at)
2. Supabase table: knowledge_base (id, content, metadata, embedding vector(1536))
3. POST /api/ingest — chunk and embed a text document into knowledge_base
4. POST /api/triage — given a ticket body, return {category, priority} using
   Claude claude-haiku-4-5 with structured JSON output
5. POST /api/draft-reply — RAG over knowledge_base, return a draft reply
   using claude-opus-4-5 with prompt caching on the system prompt
6. GET /api/tickets — list all tickets
7. UI: /inbox page with ticket list; click opens detail with:
   - Ticket body
   - AI triage badge (category + priority)
   - Suggested reply (editable textarea)
   - "Send" button (marks ticket resolved)

Add exponential backoff retry on all Claude calls.
Add per-request cost logging to console.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Option B: Multi-Agent Research Assistant</h2>
          <p>
            Build a pipeline that takes a research question and returns a structured
            report — with parallel sub-agents, a critic loop, and source citations.
          </p>
          <div className="info-box">
            <strong>What to build:</strong>
            <ul>
              <li>Orchestrator: decompose question into 4 sub-questions</li>
              <li>Researcher agents: answer each sub-question in parallel (asyncio)</li>
              <li>Synthesiser: combine answers into a coherent 600-word report</li>
              <li>Critic loop: score report 1-10; revise if below 8 (max 3 rounds)</li>
              <li>CLI or simple web UI to submit questions and display the report</li>
            </ul>
          </div>
          <div className="hands-on-box">
            <strong>Starter prompt for Claude Code:</strong>
            <pre className="code-block">{`Build a Python multi-agent research assistant.

Architecture:
- orchestrator(question) -> list of 4 sub-questions
- researcher(sub_question) -> findings (bullet points)
  Use claude-haiku-4-5 for researchers (cheap + parallel)
- synthesiser(all_findings, original_question) -> 600-word report
  Use claude-opus-4-5 for synthesis
- critic(report) -> {"score": 1-10, "improvements": [...]}
  Loop max 3 times; stop if score >= 8 or "APPROVED" in output
- reviser(report, critique) -> improved report

Requirements:
- Use asyncio.gather() for parallel researcher calls
- Log token usage and cost per agent call to a CSV
- Add exponential backoff on all API calls
- CLI: python research.py "What are the tradeoffs of microservices?"
- Output: print final report + total cost summary

Eval: write 5 test questions with LLM-as-judge scoring
against ideal answers you write manually.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Option C: Vision Document Processor</h2>
          <p>
            Build a document intelligence app that accepts uploaded images or PDFs and
            extracts structured data — receipts, invoices, forms, or contracts.
          </p>
          <div className="info-box">
            <strong>What to build:</strong>
            <ul>
              <li>Next.js page with drag-and-drop file upload (images + PDFs)</li>
              <li>API route: send file to Claude with structured extraction prompt</li>
              <li>Return extracted data as JSON (vendor, amount, date, line items)</li>
              <li>Display results in a clean table with edit capability</li>
              <li>Export to CSV button</li>
              <li>History: store all processed documents in Supabase</li>
            </ul>
          </div>
          <div className="hands-on-box">
            <strong>Starter prompt for Claude Code:</strong>
            <pre className="code-block">{`Build a Next.js 14 document intelligence app.
Stack: TypeScript, Tailwind, Supabase, Anthropic SDK.

Features:
1. /upload page: drag-and-drop zone accepting JPEG, PNG, PDF (max 10MB)
2. POST /api/extract:
   - Accept file as FormData
   - Convert to base64 (image) or base64 pdf document block
   - Send to claude-opus-4-5 with this system prompt:
     "Extract all data from this document. Return JSON:
      {type: 'receipt'|'invoice'|'form'|'contract'|'other',
       vendor: string|null, date: string|null,
       total: number|null, currency: string|null,
       line_items: [{description, quantity, unit_price, total}],
       notes: string}"
   - Validate JSON with try/catch; retry once on failure
3. Display result as editable table
4. "Export CSV" button for line_items
5. Supabase table: documents (id, filename, type, extracted_data, created_at)
6. /history page: list all processed documents

Add output safety check: if extracted total > 100000, flag for manual review.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Capstone Requirements (all options)</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-number">1</div>
              <div><strong>Uses the Claude API directly</strong> — no UI wrappers, raw SDK calls</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div><strong>Structured outputs</strong> — at least one feature returns validated JSON</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div><strong>Production-ready</strong> — retry logic, error handling, cost logging</div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div><strong>Eval suite</strong> — 10+ test cases with a measurable pass/fail score</div>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <div><strong>Deployed</strong> — live on Vercel or Railway with a shareable URL</div>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <div><strong>Responsible</strong> — input sanitisation, output safety check, AI disclosure in UI</div>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>What You've Accomplished</h2>
          <div className="info-box">
            <p>Completing Level 4 means you can:</p>
            <ul>
              <li>Call the Claude API from any language with streaming, retries, and cost tracking</li>
              <li>Extract structured data reliably using JSON mode, instructor, and tool use</li>
              <li>Build RAG systems over your own data with Supabase pgvector</li>
              <li>Orchestrate multiple Claude agents in parallel and critic-reviser loops</li>
              <li>Deploy Claude into production with caching, rate limiting, and observability</li>
              <li>Build responsibly — prompt injection defence, output filtering, transparency</li>
              <li>Measure and improve prompt quality with systematic evals</li>
            </ul>
            <p><strong>You're not a Claude user anymore. You're a Claude builder.</strong></p>
          </div>
        </section>

        <LevelFeedback level={4} levelTitle="Claude for Builders — API & Production" />
        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson37', label: 'L37: Advanced Prompt Evaluation' }}
          next={undefined}
          currentLessonId="l4-capstone"
        />
      </main>
    </div>
  )
}
