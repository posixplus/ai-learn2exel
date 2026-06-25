'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson32() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-32" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={32}
          duration={100}
          title="Multi-Agent Architectures"
          subtitle="One Claude is good. An orchestra of Claudes - each with a focused role - is transformative."
        />

        <section className="section-card">
          <h2>Why Multiple Agents?</h2>
          <p>
            Single-agent Claude hits limits: context windows fill up, tasks require
            parallel work, and some steps need a second opinion. Multi-agent systems
            divide work across specialised Claude instances that collaborate.
          </p>
          <div className="info-box">
            <strong>When to use multi-agent:</strong>
            <ul>
              <li>Task is too long to fit in one context window</li>
              <li>Sub-tasks are independent and can run in parallel</li>
              <li>You need specialised roles (researcher, writer, critic)</li>
              <li>Quality matters enough to warrant a review step</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Pattern 1: Orchestrator + Sub-Agents</h2>
          <p>
            One Claude (the orchestrator) breaks the task into subtasks and delegates
            to specialist sub-agents. Each sub-agent has its own system prompt and
            context - they never see each other's full conversation.
          </p>

          <pre className="code-block">{`import anthropic
client = anthropic.Anthropic()

def call_claude(system: str, user: str, model="claude-opus-4-8") -> str:
    r = client.messages.create(
        model=model, max_tokens=1024,
        messages=[
            {"role": "user", "content": user}
        ],
        system=system
    )
    return r.content[0].text

# Sub-agents with focused system prompts
def researcher(topic: str) -> str:
    return call_claude(
        "You are a research specialist. Extract key facts, "
        "statistics, and examples. Return bullet points only.",
        f"Research this topic thoroughly: {topic}"
    )

def writer(research: str, angle: str) -> str:
    return call_claude(
        "You are a senior copywriter. Write engaging, "
        "clear prose. No bullet points in output.",
        f"Write a 400-word article using this research:\n{research}\nAngle: {angle}"
    )

def editor(draft: str) -> str:
    return call_claude(
        "You are a meticulous editor. Fix grammar, improve "
        "flow, tighten sentences. Return only the revised text.",
        f"Edit this draft:\n{draft}"
    )

# Orchestrator
def orchestrate(topic: str, angle: str) -> str:
    print("Researching...")
    research = researcher(topic)
    print("Writing...")
    draft = writer(research, angle)
    print("Editing...")
    final = editor(draft)
    return final

result = orchestrate(
    topic="Prompt injection attacks in AI systems",
    angle="Practical guide for developers"
)`}</pre>
        </section>

        <section className="section-card">
          <h2>Pattern 2: Parallel Pipeline</h2>
          <p>
            Run sub-agents concurrently for independent tasks, then combine results.
            Uses Python's <code>asyncio</code> or <code>ThreadPoolExecutor</code>.
          </p>

          <pre className="code-block">{`import asyncio
import anthropic

client = anthropic.AsyncAnthropic()

async def analyse_section(section: str, role: str) -> dict:
    r = await client.messages.create(
        model="claude-haiku-4-5-20251001",  # fast + cheap for parallel work
        max_tokens=512,
        system=f"You are a {role}. Analyse the text and return JSON with "
               '"findings": [list of key findings]',
        messages=[{"role": "user", "content": section}]
    )
    import json
    return json.loads(r.content[0].text)

async def parallel_analyse(document: str) -> dict:
    sections = document.split("\n\n")[:4]   # first 4 paragraphs
    roles = ["security auditor", "UX reviewer",
             "performance engineer", "accessibility expert"]

    tasks = [
        analyse_section(s, r)
        for s, r in zip(sections, roles)
    ]
    results = await asyncio.gather(*tasks)   # all run simultaneously
    return {"analyses": results}

# Run it
report = asyncio.run(parallel_analyse(open("spec.txt").read()))`}</pre>

          <div className="info-box">
            <strong>Cost tip:</strong> Use <code>claude-haiku-4-5</code> for parallel sub-agents - it's ~20x cheaper than Opus and fast. Reserve Opus for the orchestrator and final synthesis steps.
          </div>
        </section>

        <section className="section-card">
          <h2>Pattern 3: Critic + Reviser Loop</h2>
          <p>
            One Claude generates, another critiques. Loop until the critic is satisfied
            or a max iteration count is reached. Excellent for high-quality creative or
            technical output.
          </p>
          <pre className="code-block">{`def critic_reviser_loop(task: str, max_rounds: int = 3) -> str:
    draft = call_claude(
        "You are an expert writer. Produce a high-quality first draft.",
        task
    )

    for round in range(max_rounds):
        critique = call_claude(
            "You are a ruthless but constructive critic. "
            "List specific improvements needed. If the draft is excellent, "
            'respond with exactly "APPROVED".',
            f"Critique this draft:\n{draft}"
        )

        if "APPROVED" in critique:
            print(f"Approved after {round + 1} round(s)")
            break

        draft = call_claude(
            "You are an expert writer. Revise based on the critique.",
            f"Original draft:\n{draft}\n\nCritique:\n{critique}\n\nRevise:"
        )

    return draft`}</pre>
        </section>

        <section className="section-card">
          <h2>Guardrails & Cost Control</h2>
          <div className="info-box">
            <strong>Multi-agent can get expensive fast. Use these controls:</strong>
            <ul>
              <li><strong>Max iterations:</strong> always cap loops (3-5 rounds max)</li>
              <li><strong>Token budgets:</strong> set lower <code>max_tokens</code> for sub-agents than orchestrator</li>
              <li><strong>Haiku for internals:</strong> sub-agents doing extraction/formatting don't need Opus</li>
              <li><strong>Early stopping:</strong> check intermediate results - bail if something is clearly wrong</li>
              <li><strong>Logging:</strong> log every agent call with token counts for cost monitoring</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-on: Build a Research Pipeline</h2>
          <div className="hands-on-box">
            <p><strong>Challenge:</strong> Build a 3-agent pipeline that takes a topic and produces a structured report.</p>
            <ol>
              <li>Agent 1 (Researcher): outline the topic into 4 sub-questions</li>
              <li>Agent 2 (Analyst): answer each sub-question in parallel with asyncio</li>
              <li>Agent 3 (Synthesiser): combine all answers into a coherent 500-word report</li>
            </ol>
            <p><strong>Stretch:</strong> Add a critic agent that scores the final report 1-10 on accuracy, clarity, and depth. If any score is below 7, trigger a revision.</p>
          </div>
        </section>

        <QuickRef
          title="Lesson 32 Quick Reference"
          items={[
            { term: 'Orchestrator', definition: 'Master agent that breaks tasks into subtasks and delegates' },
            { term: 'Sub-agent', definition: 'Specialised Claude with its own system prompt and context' },
            { term: 'Parallel pipeline', definition: 'asyncio.gather() to run independent agents simultaneously' },
            { term: 'Critic + reviser', definition: 'Generate-critique-revise loop with APPROVED exit condition' },
            { term: 'Haiku for sub-agents', definition: 'Use cheaper/faster model for extraction; Opus for synthesis' },
            { term: 'Max iterations', definition: 'Always cap loops - 3-5 rounds prevents runaway costs' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson31', label: 'L31: Building RAG Systems' }}
          next={{ href: '/level4/lesson33', label: 'L33: Claude for Teams & Orgs' }}
          currentLessonId="l4-32"
        />
      </main>
    </div>
  )
}
