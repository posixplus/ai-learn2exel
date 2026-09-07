'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson30() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-30" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={30}
          duration={90}
          title="Structured Outputs & Tool Use"
          subtitle="Make Claude return machine-readable data and call your functions - the foundation of every real AI feature."
        />

        <section className="section-card">
          <h2>Why Unstructured Text Isn't Enough</h2>
          <p>
            Claude is a great writer. But your app is not a reader - it needs JSON.
            Structured outputs and tool use are two ways to get reliable, parseable
            data back from Claude instead of a wall of prose.
          </p>
          <div className="info-box">
            <strong>The two techniques:</strong>
            <ul>
              <li><strong>Structured outputs</strong> - tell Claude to respond in a specific JSON schema</li>
              <li><strong>Tool use</strong> - give Claude functions it can call; you execute them, return results</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Technique 1: Structured Outputs (JSON Mode)</h2>
          <p>
            The simplest approach: add a schema to your system prompt and ask Claude
            to respond with valid JSON. Works in every SDK version.
          </p>

          <pre className="code-block">{`import anthropic

client = anthropic.Anthropic()

def extract_contact(text: str) -> dict:
    response = client.messages.create(
        model="claude-opus-5",
        max_tokens=256,
        system="""Extract contact info and return ONLY valid JSON:
{
  "name": "string or null",
  "email": "string or null",
  "phone": "string or null",
  "company": "string or null"
}
No markdown, no explanation - raw JSON only.""",
        messages=[{"role": "user", "content": text}]
    )
    import json
    return json.loads(response.content[0].text)

result = extract_contact(
    "Hi, I'm Sarah Chen, CTO at Acme Corp. "
    "Reach me at sarah@acme.io or 555-0192."
)
print(result)
# {'name': 'Sarah Chen', 'email': 'sarah@acme.io',
#  'phone': '555-0192', 'company': 'Acme Corp'}`}</pre>

          <div className="info-box">
            <strong>Pro tips for reliable JSON:</strong>
            <ul>
              <li>Say "ONLY valid JSON" and "no markdown" in the system prompt</li>
              <li>Paste the exact schema in the prompt - Claude will follow it closely</li>
              <li>Wrap <code>json.loads()</code> in a try/except and retry once on failure</li>
              <li>For complex schemas, use Pydantic + instructor library (see below)</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Instructor: Pydantic-Validated Outputs</h2>
          <p>
            The <code>instructor</code> library patches the Anthropic client to validate
            Claude's JSON against a Pydantic model - automatic retries included.
          </p>

          <pre className="code-block">{`# pip install instructor pydantic
import instructor
import anthropic
from pydantic import BaseModel, EmailStr
from typing import Optional

class Contact(BaseModel):
    name: Optional[str]
    email: Optional[EmailStr]
    phone: Optional[str]
    company: Optional[str]

client = instructor.from_anthropic(anthropic.Anthropic())

contact = client.messages.create(
    model="claude-opus-5",
    max_tokens=256,
    response_model=Contact,
    messages=[{
        "role": "user",
        "content": "Sarah Chen, CTO at Acme Corp. sarah@acme.io, 555-0192"
    }]
)
print(contact.name)   # Sarah Chen
print(contact.email)  # sarah@acme.io`}</pre>
        </section>

        <section className="section-card">
          <h2>Technique 2: Tool Use (Function Calling)</h2>
          <p>
            Tool use lets Claude decide <em>when</em> to call your functions. You define
            the tools, Claude picks which to call and with what arguments, you execute
            them, and return the results. Claude then writes the final response.
          </p>
          <div className="steps-list">
            <div className="step">
              <div className="step-number">1</div>
              <div>
                <strong>Define your tools</strong> - name, description, and JSON Schema for parameters
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div>
                <strong>Send to Claude</strong> - include <code>tools</code> array in the API call
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div>
                <strong>Check stop reason</strong> - if <code>tool_use</code>, Claude wants to call a function
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div>
                <strong>Execute and return</strong> - run the function, send result back as <code>tool_result</code>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Tool Use: Full Example</h2>
          <pre className="code-block">{`import anthropic, json

client = anthropic.Anthropic()

# Step 1: define tools
tools = [{
    "name": "get_weather",
    "description": "Get current weather for a city",
    "input_schema": {
        "type": "object",
        "properties": {
            "city": {"type": "string", "description": "City name"},
            "units": {"type": "string", "enum": ["celsius", "fahrenheit"]}
        },
        "required": ["city"]
    }
}]

def get_weather(city: str, units: str = "celsius") -> dict:
    # Your real implementation here
    return {"city": city, "temp": 22, "condition": "Sunny", "units": units}

messages = [{"role": "user", "content": "What's the weather in Tokyo?"}]

# Step 2: first call
response = client.messages.create(
    model="claude-opus-5", max_tokens=512,
    tools=tools, messages=messages
)

# Step 3: handle tool calls
if response.stop_reason == "tool_use":
    tool_use = next(b for b in response.content if b.type == "tool_use")
    result = get_weather(**tool_use.input)   # Step 4: execute

    messages += [
        {"role": "assistant", "content": response.content},
        {"role": "user", "content": [{
            "type": "tool_result",
            "tool_use_id": tool_use.id,
            "content": json.dumps(result)
        }]}
    ]
    final = client.messages.create(
        model="claude-opus-5", max_tokens=512,
        tools=tools, messages=messages
    )
    print(final.content[0].text)
    # "Tokyo is currently 22 degrees Celsius and sunny."`}</pre>
        </section>

        <section className="section-card">
          <h2>Tool Use in TypeScript (Next.js API Route)</h2>

          <pre className="code-block">{`// app/api/chat/route.ts
import Anthropic from '@anthropic-ai/sdk'
const client = new Anthropic()

const tools: Anthropic.Tool[] = [{
  name: 'search_products',
  description: 'Search the product catalogue',
  input_schema: {
    type: 'object' as const,
    properties: {
      query: { type: 'string' },
      max_results: { type: 'number' }
    },
    required: ['query']
  }
}]

async function searchProducts(query: string, maxResults = 5) {
  // call your DB / search API here
  return [{ id: 1, name: 'Widget A', price: 29.99 }]
}

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await client.messages.create({
    model: 'claude-opus-5', max_tokens: 1024,
    tools, messages
  })

  if (response.stop_reason === 'tool_use') {
    const toolBlock = response.content.find(b => b.type === 'tool_use')!
    const results = await searchProducts(
      (toolBlock as any).input.query,
      (toolBlock as any).input.max_results
    )
    const followUp = await client.messages.create({
      model: 'claude-opus-5', max_tokens: 1024,
      tools,
      messages: [
        ...messages,
        { role: 'assistant', content: response.content },
        { role: 'user', content: [{
          type: 'tool_result',
          tool_use_id: (toolBlock as any).id,
          content: JSON.stringify(results)
        }]}
      ]
    })
    return Response.json({ reply: (followUp.content[0] as any).text })
  }
  return Response.json({ reply: (response.content[0] as any).text })
}`}</pre>
        </section>

        <section className="section-card">
          <h2>Hands-on: Build a Mini Data Extractor</h2>
          <div className="hands-on-box">

            <p><strong>Challenge:</strong> Build an invoice parser that takes raw invoice text and returns structured JSON with: vendor, amount, due_date, line_items[].</p>
            <ol>
              <li>Write the system prompt with the exact JSON schema</li>
              <li>Test with 3 different invoice formats (email, PDF text, handwritten scan OCR)</li>
              <li>Add a Pydantic model with instructor to auto-validate</li>
              <li>Handle the case where a field is missing - use <code>Optional</code></li>
            </ol>
            <p><strong>Stretch:</strong> Add a tool <code>lookup_vendor(name)</code> that checks a local dict of known vendors and returns their standard payment terms.</p>
          </div>
        </section>

        <QuickRef
          title="Lesson 30 Quick Reference"
          items={[
            { term: 'Structured output', definition: 'System prompt + JSON schema → json.loads() on response' },
            { term: 'instructor library', definition: 'pip install instructor - Pydantic validation + auto-retry' },
            { term: 'tool use', definition: 'Claude chooses which function to call + args; you execute it' },
            { term: 'stop_reason == tool_use', definition: 'Signal that Claude wants to call a function' },
            { term: 'tool_result', definition: 'Message role=user with type=tool_result to return function output' },
            { term: 'multi-turn tools', definition: 'Append assistant + tool_result messages, call API again for final answer' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson29', label: 'L29: The Claude API' }}
          next={{ href: '/level4/lesson31', label: 'L31: Building RAG Systems' }}
          currentLessonId="l4-30"
        />
      </main>
    </div>
  )
}
