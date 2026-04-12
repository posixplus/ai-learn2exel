'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson19() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-19" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={19} duration={90}
            title="How Claude Actually Works: Models, Memory & Mindset"
            subtitle="Understand the engine — so you can get dramatically better results every time" />

          <section className="section-card">
            <h2>Why Most People Get Mediocre Results</h2>
            <p>Most users treat Claude like a search engine. Experts treat it like a brilliant colleague who needs the right context. That mental model gap produces wildly different results from the same tool.</p>
            <p>This lesson gives you the foundation — model selection, tokens, system prompts, and how Claude thinks — that makes every advanced technique in the rest of Level 3 work better.</p>
          </section>

          <section className="section-card">
            <h2>The Model Lineup</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Claude Opus 4.5 — The Thinker</strong>
                <p>Most intelligent. Use for: complex reasoning, long document analysis, research synthesis, difficult architecture decisions. Slower, higher cost. Best when quality matters more than speed.</p>
              </div>
              <div className="step">
                <strong>Claude Sonnet 4.5 — The Daily Driver</strong>
                <p>Best balance of intelligence and speed. Handles 90% of real tasks with high quality. Default choice unless you have a specific reason to switch.</p>
              </div>
              <div className="step">
                <strong>Claude Haiku 4.5 — The Sprinter</strong>
                <p>Fastest, lowest cost. Best for high-volume automation, simple classification, quick structured extraction. Use in pipelines where you need thousands of calls.</p>
              </div>
            </div>
            <div className="info-box">
              <strong>Decision rule:</strong> Default to Sonnet. Upgrade to Opus only when a task needs deep, multi-step reasoning. Use Haiku for repeatable, simple, automated steps.
            </div>
          </section>

          <section className="section-card">
            <h2>Real Example: Same Request, Three Models</h2>
            <p>Here's the same request sent to all three models. Notice the differences in depth, structure, and nuance:</p>
            <div className="steps-list">
              <div className="step">
                <strong>The Request</strong>
                <pre>{`We're deciding whether to build our own auth system or use Auth0. 
We're a 5-person startup, 6 months from launch, TypeScript/Next.js stack.`}</pre>
              </div>
              <div className="step">
                <strong>Haiku Response (~100 words)</strong>
                <pre>{`Use Auth0. Building auth yourself takes 2-4 weeks and introduces 
security risks. Auth0 handles OAuth, MFA, session management, and 
compliance (SOC 2, GDPR). For a 5-person team 6 months from launch, 
your engineering time is better spent on your core product. 

Auth0 free tier covers up to 7,500 monthly active users — enough 
to launch. Switch to paid ($240/month) at scale if needed.`}</pre>
              </div>
              <div className="step">
                <strong>Sonnet Response (~300 words)</strong>
                <pre>{`Recommendation: Use Auth0 now, with a clear exit strategy.

Why Auth0 wins for your situation:
- 6 months to launch means ~24 weeks. A solid auth system (SSO, MFA, 
  password reset, session management, token rotation) takes 3-5 weeks 
  to build correctly and 2-3 weeks to harden. That's 20%+ of your runway.
- Auth0 is SOC 2 Type II certified. Your custom solution won't be for years.
- You get social login (Google, GitHub) out of the box — typically +15-25% 
  in signup conversion.

The hidden cost of DIY auth:
Every auth bug that reaches production is a reputational event. 
Session fixation, token leakage, password hashing mistakes — 
these are career-defining incidents at a startup.

Exit strategy (when to consider leaving Auth0):
- Hitting 50k+ MAU and paying $3k+/month → evaluate Clerk or Supabase Auth
- Need custom auth flows Auth0 can't support → build specific pieces only
- Building an identity product → then auth is your core competency

Implementation path:
1. next-auth v5 + Auth0 adapter (4 hours setup)
2. Add to CLAUDE.md: "Auth uses next-auth with Auth0 adapter in src/auth/"
3. Set Auth0 tenant: dev / staging / prod separation from day one

The only case for DIY: if your product IS authentication (building an 
identity provider for enterprises). Otherwise, use the tool.`}</pre>
              </div>
              <div className="step">
                <strong>Opus Response (~500 words)</strong>
                <pre>{`This is a classic build-vs-buy decision with some startup-specific wrinkles 
worth thinking through carefully.

My recommendation: Auth0, but let me explain why the tradeoffs are more 
nuanced than "just use Auth0."

The standard case for Auth0 is clear:
[...deeper analysis of security surface area, regulatory trajectory, 
team velocity math, specific Next.js integration patterns, vendor lock-in 
risk analysis, migration complexity to alternative providers, pricing model 
at different growth scenarios, and 3 specific implementation decisions to 
make before starting...]

The one scenario where I'd reconsider:
If your target customer is enterprise, and you expect SOC 2 Type II 
requirements within 18 months, Auth0's enterprise tier pricing 
($2/MAU above 7,500) can become expensive fast. In that case, 
evaluate Stytch or Clerk — similar capabilities, more predictable 
pricing at enterprise scale...`}</pre>
                <p><em>Notice: Opus proactively identifies an edge case (enterprise customers) that Sonnet and Haiku both missed. That's when Opus earns its cost.</em></p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Context Windows and Tokens</h2>
            <p>A <strong>token</strong> is roughly 0.75 words (~4 characters). Claude processes your entire conversation in a single context window. Claude Sonnet and newer support <strong>200,000 tokens</strong> — approximately 150,000 words.</p>
            <div className="steps-list">
              <div className="step">
                <strong>What this means in practice</strong>
                <ul>
                  <li><strong>Paste whole documents</strong> — a 60-page PDF, an entire codebase, 200 emails. Claude handles it. No need to chunk manually.</li>
                  <li><strong>Long sessions accumulate context</strong> — in a 4-hour session, Claude is reading everything you've said. Run <code>/compact</code> when switching tasks to free space.</li>
                  <li><strong>Irrelevant context hurts</strong> — pasting 50 unrelated files dilutes focus. Be intentional about what you include.</li>
                </ul>
              </div>
              <div className="step">
                <strong>Worked example: Token budget for a code review session</strong>
                <pre>{`Your system prompt / CLAUDE.md:  ~1,500 tokens (2 pages)
5 files you pasted for context:  ~8,000 tokens (10-12 pages of code)
Conversation so far:             ~3,000 tokens
Current question:                ~200 tokens
─────────────────────────────────────────────
Total used:                      ~12,700 tokens
Remaining (200k window):         ~187,300 tokens

You have massive room. In a normal 1-hour session you'll 
rarely exceed 40,000 tokens even with large file pastes.`}</pre>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>System Prompts — The Hidden Layer</h2>
            <p>A <strong>system prompt</strong> is a set of instructions Claude reads before your conversation starts. It shapes tone, behavior, focus, and constraints — invisibly from the user's perspective.</p>
            <div className="steps-list">
              <div className="step">
                <strong>Where system prompts appear</strong>
                <ul>
                  <li><strong>Claude Projects</strong> — "Project instructions" field = your system prompt. Every chat starts with it.</li>
                  <li><strong>Claude Code</strong> — Reads CLAUDE.md as a system prompt at session start.</li>
                  <li><strong>Cowork Skills</strong> — Each SKILL.md becomes part of the prompt when the skill runs.</li>
                  <li><strong>API calls</strong> — The <code>system</code> parameter in every API request.</li>
                </ul>
              </div>
              <div className="step">
                <strong>Real example: Same question, no system prompt vs. with one</strong>
                <pre>{`Question: "What should I do about my underperforming team member?"

WITHOUT system prompt → Claude gives generic management advice:
"Consider having a direct conversation, setting clear expectations, 
providing regular feedback, and if needed, a performance improvement plan..."

WITH system prompt: "You are a senior engineering manager at a Series B 
startup. I manage a team of 6. Responses should be direct and practical, 
not HR boilerplate. Flag if something is legally sensitive."

→ Claude's response:
"Direct answer: how long and in what ways are they underperforming?
If <3 months, this is a management problem (unclear expectations, 
wrong fit for current work). If >6 months with documented feedback, 
this is a PIP conversation — talk to HR first to understand your 
company's process because wrongful termination risk is real even 
at startups. What specifically is not meeting the bar?"

The second response is actionable. The first is useless.`}</pre>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>How Claude "Thinks": Constitutional AI</h2>
            <p>Claude was trained with <strong>Constitutional AI (CAI)</strong> — a process where Claude learned to evaluate its own responses against principles: be helpful, be harmless, be honest. Claude isn't just pattern-matching; it reasons about whether its responses are actually good.</p>
            <p>What this means for you:</p>
            <ul>
              <li><strong>Tell Claude your intent.</strong> "I'm building a product for healthcare professionals" gives Claude context to calibrate helpfulness vs. caution appropriately.</li>
              <li><strong>Claude can push back.</strong> If you ask for something that conflicts with its values, it will say so — and often offer an alternative approach.</li>
              <li><strong>Be direct.</strong> Claude wants to help. Vague requests get vague results — not because Claude can't, but because it doesn't know what "excellent" looks like for your specific situation.</li>
            </ul>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise (~25 min)</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Part A: Model Comparison (10 min)</strong>
                <p>Pick a real decision you're facing at work. Send the same prompt to Haiku, Sonnet, and Opus (switch models with <code>/model haiku</code>, etc.). Document where Sonnet adds value over Haiku, and where Opus goes deeper than Sonnet. This tells you your personal model selection rule.</p>
              </div>
              <div className="step">
                <strong>Part B: Build Your System Prompt (15 min)</strong>
                <p>Create a Claude Project for your most common work type. Add Project Instructions that include: your role, your company context, how you like answers structured, and 3-5 "do not" rules. Ask a real work question. Compare to asking the same question without the system prompt in a new conversation. Save the version that worked as your template.</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 19 Quick Reference" items={[
            { term: "Opus 4.5", definition: "Use when: complex multi-step reasoning, nuanced analysis, the difference between good and great matters. Costs more, thinks deeper." },
            { term: "Sonnet 4.5", definition: "Default for 90% of tasks. Best speed/quality balance. If you're not sure which model, use Sonnet." },
            { term: "Haiku 4.5", definition: "Use for: high-volume pipelines, simple classification, fast structured extraction. Fastest and cheapest." },
            { term: "200k context window", definition: "~150,000 words. Paste whole documents, large codebases, many emails. Use /compact in long sessions to free space." },
            { term: "System prompt", definition: "Hidden instructions that shape all of Claude's responses. Set via Project Instructions, CLAUDE.md, or API system parameter." },
            { term: "Constitutional AI", definition: "Claude reasons about whether its responses are good, not just pattern-matches. Give Claude your intent for better calibration." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level2/capstone', label: 'Level 2 Capstone' }}
            next={{ href: '/level3/lesson20', label: 'Lesson 20: Advanced Prompting' }}
            currentLessonId="l3-19"
          />
        </main>
    </div>
  )
}
