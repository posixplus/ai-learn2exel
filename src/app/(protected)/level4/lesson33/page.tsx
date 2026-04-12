'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson33() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-33" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={33}
          duration={75}
          title="Claude for Teams & Orgs"
          subtitle="Deploying Claude inside a company: shared prompts, admin controls, usage policies, and cost governance."
        />

        <section className="section-card">
          <h2>Claude Team vs. Claude API — Which to Use?</h2>
          <div className="info-box">
            <strong>Choose your deployment model:</strong>
            <ul>
              <li><strong>Claude.ai Team/Enterprise</strong> — no-code, for knowledge workers. Shared projects, custom instructions, admin controls. Best when your team needs Claude as a productivity tool.</li>
              <li><strong>Claude API</strong> — for builders. You control UX, auth, costs. Best when you are embedding Claude inside your own product or internal tool.</li>
              <li><strong>Both together</strong> — engineers use the API to build; business teams use Claude.ai for day-to-day work. Very common setup.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Shared Prompt Libraries (API)</h2>
          <p>
            The single biggest leverage point for teams: centralise your prompts.
            Don't let every engineer or analyst write their own version of the same prompt.
          </p>

          <pre className="code-block">{`# prompts/library.py  — centralised prompt store
PROMPTS = {
    "support_triage": {
        "system": """You are a support triage agent for Acme Corp.
Classify the ticket into: billing | technical | feature_request | other.
Return JSON: {"category": "...", "priority": "high|medium|low",
              "summary": "one sentence"}""",
        "model": "claude-haiku-4-5-20251001",
        "max_tokens": 128,
    },
    "contract_review": {
        "system": """You are a legal analyst specialising in SaaS contracts.
Identify: unusual clauses, liability caps, IP ownership issues, termination rights.
Flag anything that deviates from our standard terms (attached below).
Be concise. Bullet points per section.""",
        "model": "claude-opus-4-5",
        "max_tokens": 2048,
    },
    "weekly_summary": {
        "system": """Summarise the week's Slack messages into:
- 3 key decisions made
- Open questions still unresolved
- Action items with owners
Keep it under 200 words.""",
        "model": "claude-sonnet-4-5",
        "max_tokens": 512,
    }
}

# Usage
import anthropic
client = anthropic.Anthropic()

def run_prompt(prompt_key: str, user_content: str) -> str:
    cfg = PROMPTS[prompt_key]
    r = client.messages.create(
        model=cfg["model"],
        max_tokens=cfg["max_tokens"],
        system=cfg["system"],
        messages=[{"role": "user", "content": user_content}]
    )
    return r.content[0].text`}</pre>
        </section>

        <section className="section-card">
          <h2>Usage Tracking & Cost Governance</h2>
          <p>
            The API doesn't automatically track spend per team or feature. Build lightweight
            cost logging from day one — it's nearly impossible to add retroactively.
          </p>

          <pre className="code-block">{`# middleware/cost_logger.py
import anthropic, time
from datetime import datetime

# Approximate cost per 1M tokens (check pricing page for current rates)
COSTS = {
    "claude-opus-4-5":           {"input": 15.0,  "output": 75.0},
    "claude-sonnet-4-5":         {"input": 3.0,   "output": 15.0},
    "claude-haiku-4-5-20251001": {"input": 0.25,  "output": 1.25},
}

def tracked_call(client, feature: str, team: str, **kwargs):
    start = time.time()
    response = client.messages.create(**kwargs)
    elapsed = time.time() - start

    model = kwargs["model"]
    input_tokens  = response.usage.input_tokens
    output_tokens = response.usage.output_tokens
    cost = (
        input_tokens  / 1_000_000 * COSTS[model]["input"] +
        output_tokens / 1_000_000 * COSTS[model]["output"]
    )

    # Log to your DB / analytics
    log_entry = {
        "timestamp": datetime.utcnow().isoformat(),
        "feature": feature,
        "team": team,
        "model": model,
        "input_tokens": input_tokens,
        "output_tokens": output_tokens,
        "cost_usd": round(cost, 6),
        "latency_s": round(elapsed, 2),
    }
    print(log_entry)  # replace with supabase.table("usage").insert(log_entry)
    return response`}</pre>
        </section>

        <section className="section-card">
          <h2>Claude.ai Enterprise Admin Controls</h2>
          <div className="info-box">
            <strong>Key settings available to Enterprise admins:</strong>
            <ul>
              <li><strong>Custom system prompts</strong> — set org-wide instructions users can't override</li>
              <li><strong>Model access</strong> — restrict which models are available</li>
              <li><strong>Data retention</strong> — opt out of training data use for all users</li>
              <li><strong>SSO/SCIM</strong> — integrate with Okta, Azure AD, Google Workspace</li>
              <li><strong>Usage dashboard</strong> — per-seat usage reports</li>
              <li><strong>Shared Projects</strong> — team-wide Claude Projects with shared context</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Rollout Strategy for Teams</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-number">1</div>
              <div><strong>Pilot with 5-10 power users</strong> — gather real use cases, not hypotheticals</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div><strong>Build a prompt library</strong> — document 10 high-value prompts for your team's top tasks</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div><strong>Train on trust</strong> — teach the team when to trust Claude and when to verify</div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div><strong>Set a usage policy</strong> — which data can be pasted into Claude? What's off-limits?</div>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <div><strong>Monthly review</strong> — review costs, quality issues, and update prompt library</div>
            </div>
          </div>
        </section>

        <QuickRef
          title="Lesson 33 Quick Reference"
          items={[
            { term: 'Claude.ai Team', definition: 'No-code plan for knowledge workers — shared projects, admin panel' },
            { term: 'Claude API', definition: 'For builders — you control UX, auth, and costs' },
            { term: 'Prompt library', definition: 'Centralised dict of system prompts + model configs per use case' },
            { term: 'Cost logging', definition: 'Log input/output tokens + model per call to track spend by feature/team' },
            { term: 'Enterprise controls', definition: 'SSO, data retention, model restrictions, org-wide system prompts' },
            { term: 'Usage policy', definition: 'Define what data employees can/cannot paste into Claude' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson32', label: 'L32: Multi-Agent Architectures' }}
          next={{ href: '/level4/lesson34', label: 'L34: Multi-Modal: Vision & Docs' }}
          currentLessonId="l4-33"
        />
      </main>
    </div>
  )
}
