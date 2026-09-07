'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson29() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-29" />
      <main className="lesson-main">
        <LessonHeader level={4} lessonNumber={29} duration={90}
          title="The Claude API: Direct Access"
          subtitle="Stop relying on UIs - call Claude from code with streaming, multi-turn conversations, and full control" />

        <section className="section-card">
          <h2>Why Go Direct to the API?</h2>
          <p>
            Claude Code and Cowork are powerful interfaces for your own work. But when you want to embed Claude
            inside a product, run it in a background job, process thousands of items in batch, or pipe its output
            into another system - you need the API. This is where Claude becomes infrastructure, not a tool you use.
          </p>
          <div className="info-box">
            <strong>What you need:</strong> An Anthropic API key from <code>console.anthropic.com</code>.
            Free credits on signup. Billing is per token - input + output. No subscription required.
          </div>
        </section>

        <section className="section-card">
          <h2>The Messages API</h2>
          <p>Everything goes through one endpoint: <code>POST /v1/messages</code>. Here is the full anatomy:</p>
          <pre>{`POST https://api.anthropic.com/v1/messages
x-api-key: $ANTHROPIC_API_KEY
anthropic-version: 2023-06-01
Content-Type: application/json

{
  "model": "claude-sonnet-5",
  "max_tokens": 1024,
  "system": "You are a senior Python engineer. Reply with code only.",
  "messages": [
    { "role": "user", "content": "Write a function to validate an email address" }
  ]
}`}</pre>
          <p style={{marginTop:'1rem'}}>Response structure:</p>
          <pre>{`{
  "role": "assistant",
  "content": [{ "type": "text", "text": "def validate_email..." }],
  "model": "claude-sonnet-5",
  "stop_reason": "end_turn",
  "usage": { "input_tokens": 28, "output_tokens": 87 }
}`}</pre>
        </section>

        <section className="section-card">
          <h2>SDK Setup - Python and Node</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Python SDK</strong>
              <pre>{`pip install anthropic

import anthropic

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from env

message = client.messages.create(
    model="claude-sonnet-5",
    max_tokens=1024,
    system="You are a helpful assistant.",
    messages=[{"role": "user", "content": "Explain RAG in 3 sentences."}]
)

print(message.content[0].text)`}</pre>
            </div>
            <div className="step">
              <strong>Node.js / TypeScript</strong>
              <pre>{`npm install @anthropic-ai/sdk

import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic() // reads ANTHROPIC_API_KEY from env

const message = await client.messages.create({
  model: 'claude-sonnet-5',
  max_tokens: 1024,
  system: 'You are a helpful assistant.',
  messages: [{ role: 'user', content: 'Explain RAG in 3 sentences.' }],
})

console.log(message.content[0].text)`}</pre>
            </div>
          </div>
          <div className="info-box">
            <strong>Best practice:</strong> Always set <code>ANTHROPIC_API_KEY</code> as an environment variable.
            Never hardcode it in source files. Use <code>dotenv</code> locally and your platform&apos;s secrets manager in production.
          </div>
        </section>

        <section className="section-card">
          <h2>Streaming Responses</h2>
          <p>
            Streaming sends tokens as they are generated. Essential for any user-facing feature - users see output
            immediately rather than waiting 5-30 seconds for a full response.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Python streaming</strong>
              <pre>{`with client.messages.stream(
    model="claude-sonnet-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a poem about APIs."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)  # Each token printed immediately`}</pre>
            </div>
            <div className="step">
              <strong>Next.js API route streaming to browser</strong>
              <pre>{`// app/api/chat/route.ts
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: Request) {
  const { message } = await req.json()
  const stream = await client.messages.stream({
    model: 'claude-sonnet-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: message }],
  })
  return new Response(stream.toReadableStream(), {
    headers: { 'Content-Type': 'text/event-stream' },
  })
}`}</pre>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Multi-Turn Conversations</h2>
          <p>
            The API is stateless - Claude remembers nothing between calls. You must pass the full conversation
            history on every request. You control exactly what context Claude has.
          </p>
          <pre>{`messages = []

# Turn 1
messages.append({"role": "user", "content": "My name is Jay."})
response = client.messages.create(model="claude-sonnet-5",
    max_tokens=256, messages=messages)
messages.append({"role": "assistant", "content": response.content[0].text})

# Turn 2 - Claude remembers because we pass the full history
messages.append({"role": "user", "content": "What's my name?"})
response = client.messages.create(model="claude-sonnet-5",
    max_tokens=256, messages=messages)
# "Your name is Jay."

# Track cost
total = response.usage.input_tokens + response.usage.output_tokens
cost_usd = total * 0.000003
print(f"Tokens used: {total} (cost: ~USD {cost_usd:.4f})")`}</pre>
          <div className="info-box">
            <strong>Context cost warning:</strong> Long conversations get expensive. At 200K context window,
            you could send 150K words of history - but each message costs tokens for the entire history.
            Implement sliding window cutoff or summarisation for long-running conversations.
          </div>
        </section>

        <section className="section-card">
          <h2>Key API Parameters</h2>
          <div className="steps-list">
            <div className="step">
              <strong><code>model</code></strong> - Haiku for bulk/cheap tasks ($0.25/M input), Sonnet for most production work ($3/M), Opus for the hardest reasoning ($15/M).
            </div>
            <div className="step">
              <strong><code>max_tokens</code></strong> - Hard cap on output. Set to 2x what you expect. The API stops at this limit; it does not truncate your input.
            </div>
            <div className="step">
              <strong><code>temperature</code></strong> - 0 = deterministic/consistent (classification, extraction). 1 = creative/varied (writing). Default is 1. For production pipelines use 0.
            </div>
            <div className="step">
              <strong><code>system</code></strong> - Your most powerful lever. A precise system prompt beats a vague one every time. Spend more time here than on the user message.
            </div>
            <div className="step">
              <strong><code>stop_sequences</code></strong> - Stop generation when Claude outputs this string. Useful for structured output: <code>["```"]</code> stops after a code block.
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Worked Example: Bulk Ticket Classifier</h2>
          <div className="hands-on-box">
            <h3>Classify 100 support tickets with Haiku (fast + cheap)</h3>
            <pre>{`import anthropic, json

client = anthropic.Anthropic()

tickets = [
    "I can't log in - password reset isn't working",
    "Please add dark mode to the dashboard",
    "The CSV export generates a blank file every time",
    "How do I add a team member to my account?",
]

def classify(ticket: str) -> dict:
    response = client.messages.create(
        model="claude-haiku-4-5-20251001",  # Haiku: 12x cheaper for bulk tasks
        max_tokens=128,
        temperature=0,  # Deterministic for classification
        system="""Return JSON only. No markdown.
{
  "category": "bug" | "feature" | "billing" | "how_to",
  "priority": "critical" | "high" | "medium" | "low",
  "summary": "one sentence"
}""",
        messages=[{"role": "user", "content": ticket}]
    )
    return json.loads(response.content[0].text)

for ticket in tickets:
    result = classify(ticket)
    print(f"[{result['priority'].upper()}] {result['category']}: {result['summary']}")`}</pre>
          </div>
        </section>

        <QuickRef title="Lesson 29 Quick Reference" items={[
          { term: 'Messages API', definition: 'POST /v1/messages with model, max_tokens, system, messages array. Stateless - pass full history each call.' },
          { term: 'Streaming', definition: 'Use .stream() to get tokens as generated. Essential for user-facing UIs. Returns ReadableStream for browser.' },
          { term: 'temperature=0', definition: 'Makes output deterministic and consistent. Use for classification, extraction, JSON output. Default is 1.' },
          { term: 'Model costs', definition: 'Haiku: $0.25/M input. Sonnet: $3/M input. Opus: $15/M input. Route by task complexity to control costs.' },
          { term: 'Multi-turn', definition: 'API is stateless. Append each user+assistant turn to messages array. You control context window content.' },
          { term: 'Never hardcode keys', definition: 'Use ANTHROPIC_API_KEY env var. dotenv locally, platform secrets manager in production. Never commit keys.' },
        ]} />

        <LessonNav
          level={4}
          prev={{ href: '/level3/lesson28', label: 'L28: Claude Settings' }}
          next={{ href: '/level4/lesson30', label: 'L30: Structured Outputs & Tool Use' }}
          currentLessonId="l4-29"
        />
      </main>
    </div>
  )
}
