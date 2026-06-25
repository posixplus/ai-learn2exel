'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson20() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-20" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={20} duration={120}
            title="Advanced Prompt Engineering for Claude"
            subtitle="The 7 techniques that separate 10x users - with a full end-to-end walkthrough" />

          <section className="section-card">
            <h2>The Prompting Gap</h2>
            <p>Most prompts fail for the same reasons: vague asks with no context, no format instructions, no examples of good output. The gap between a weak and strong prompt isn't skill - it's structure. This lesson gives you the complete toolkit, plus a real walkthrough of a prompt going from bad to excellent.</p>
          </section>

          <section className="section-card">
            <h2>1. XML Tags - Claude's Native Language</h2>
            <p>Claude was trained on XML-tagged data. It gives structured tags special attention and uses them to separate distinct parts of complex prompts cleanly.</p>
            <pre>{`<context>
I am a product manager at a B2B SaaS company. We sell to mid-market HR teams.
Our biggest competitor just released AI-powered performance reviews - 
a feature we've been planning but haven't shipped.
</context>

<task>
Analyze this competitive threat and recommend a response strategy.
</task>

<constraints>
- 3-6 month execution timeline
- 2 available engineers, no new hires
- No features requiring more than 4 weeks of engineering time
- Our brand positioning is "human-centered HR" - avoid AI-first messaging
</constraints>

<format>
1. Threat assessment (1 paragraph, honest evaluation)
2. Three strategic options with pros/cons table
3. Your recommendation with rationale
4. The one metric that tells us if we're winning in 90 days
</format>`}</pre>
            <div className="info-box">
              <strong>Key tags to use:</strong> <code>&lt;context&gt;</code> <code>&lt;task&gt;</code> <code>&lt;constraints&gt;</code> <code>&lt;format&gt;</code> <code>&lt;example&gt;</code> <code>&lt;document&gt;</code> <code>&lt;data&gt;</code> <code>&lt;persona&gt;</code>
            </div>
          </section>

          <section className="section-card">
            <h2>2. Extended Thinking - Make Claude Reason Out Loud</h2>
            <p>For hard problems, you want Claude to think first, not just react. Trigger deep reasoning with specific phrases:</p>
            <ul>
              <li><strong>"Think step by step before answering."</strong></li>
              <li><strong>"Before responding, reason through this carefully and consider edge cases."</strong></li>
              <li><strong>"Walk me through your reasoning, then give your final recommendation."</strong></li>
            </ul>
            <div className="steps-list">
              <div className="step">
                <strong>Without extended thinking</strong>
                <pre>{`Q: Should we charge monthly or annually as our default plan?
A: Annual billing is generally better for SaaS - higher LTV, 
   lower churn, better cash flow. Offer a discount for annual.`}</pre>
              </div>
              <div className="step">
                <strong>With extended thinking: "Think step by step before answering."</strong>
                <pre>{`Let me reason through this:

Annual default pros: 12-month LTV upfront, dramatically lower churn 
(can't impulse cancel), better cash flow for ops and fundraising, 
simplifies support (fewer billing questions).

Annual default cons: Higher upfront commitment raises trial-to-paid 
friction. If your ACV is $500+, this matters less. If it's $20/month, 
an $240 annual commitment can kill conversion.

Monthly default pros: Lower barrier to start, easier to upsell mid-year, 
better for low-price high-volume products.

Edge case I should flag: What's your sales-assist vs self-serve ratio? 
If >50% sales-assisted, annual is almost always correct - reps can 
handle objections and the deal economics work better. If fully self-serve 
with a $15-50/month price point, monthly default with a 2-month free 
annual incentive often converts better.

My recommendation: Default annual IF your ACV is over $200/year 
or you have any sales-assist. Default monthly if self-serve under $15/month.

What's your ACV and sales model?`}</pre>
                <p><em>The second response identified an edge case and asked a clarifying question the first one missed entirely.</em></p>
              </div>
            </div>
            <div className="info-box">
              <strong>API extended thinking:</strong> Use the <code>thinking</code> parameter with a token budget (e.g., 10,000 tokens) to get structured reasoning in a separate block before the final response.
            </div>
          </section>

          <section className="section-card">
            <h2>3. Few-Shot Examples - Show, Don't Tell</h2>
            <p>Instead of describing what you want, show Claude 2-5 examples. This is the fastest way to control tone, format, and style - especially for repeated tasks like summarization, classification, or writing in your voice.</p>
            <pre>{`<example>
Input: Q3 revenue was $2.1M, up from $1.8M in Q2.
Output: Revenue grew 16.7% QoQ to $2.1M - strong momentum heading into Q4.
</example>

<example>
Input: Churn increased from 3.2% to 4.8% in August.
Output: Churn spiked +50% in August to 4.8% - investigate root cause immediately, 
this is approaching the threshold where it compounds.
</example>

<example>
Input: NPS score moved from 34 to 41 after the new onboarding.
Output: NPS jumped +7 points to 41 post-onboarding revamp - early signal the 
investment is working. Track if this holds at 90-day cohort.
</example>

Now write a metric summary for: DAU dropped from 12,400 to 10,800 in the last 7 days.`}</pre>
          </section>

          <section className="section-card">
            <h2>4. Role Prompting - Be Specific</h2>
            <p>Generic roles give generic results. The more precisely you define the role, the more expert and calibrated the output.</p>
            <div className="steps-list">
              <div className="step">
                <strong>Weak</strong>
                <pre>{`"You are a marketing expert."`}</pre>
              </div>
              <div className="step">
                <strong>Strong</strong>
                <pre>{`"You are a B2B SaaS growth marketer with 12 years of experience, 
specializing in product-led growth at companies scaling from $1M to $20M ARR. 
You've run 150+ A/B tests on pricing pages and onboarding flows. You are 
direct, data-driven, and have no patience for vanity metrics."`}</pre>
              </div>
            </div>
            <p>The specific role activates more relevant knowledge and filters out generic advice that wouldn't apply to your situation.</p>
          </section>

          <section className="section-card">
            <h2>5. Output Format Control</h2>
            <p>Always specify the exact format you want. Claude follows format instructions very precisely - use this to get output that's immediately usable:</p>
            <ul>
              <li><strong>JSON:</strong> "Respond as a JSON object with keys: <code>title</code> (string), <code>summary</code> (string, max 80 words), <code>action_items</code> (array of strings), <code>priority</code> (high|medium|low)"</li>
              <li><strong>Markdown table:</strong> "Respond in a markdown table with columns: Option | Pros | Cons | Effort (1-5) | Recommended"</li>
              <li><strong>Length-constrained doc:</strong> "Use H2 headings for each section. Each section max 100 words. End with a TL;DR of exactly 2 sentences."</li>
              <li><strong>Bullet format:</strong> "Format as: [emoji] [one-sentence finding]. No sub-bullets. Max 7 bullets total."</li>
            </ul>
          </section>

          <section className="section-card">
            <h2>6. Negative Constraints</h2>
            <p>Claude has trained defaults that are helpful for general users but annoying for power users. Explicitly prohibit them:</p>
            <ul>
              <li>"Do not add caveats, disclaimers, or qualifications to your answer."</li>
              <li>"Do not repeat my question back to me."</li>
              <li>"Do not suggest I consult a professional - just give me the answer."</li>
              <li>"Do not use phrases like 'Certainly!', 'Great question!', or 'Of course!'."</li>
              <li>"Do not give me a list of options - give me your single best recommendation."</li>
              <li>"Do not pad the response. Say it in as few words as possible."</li>
            </ul>
          </section>

          <section className="section-card">
            <h2>7. Assistant Prefill</h2>
            <p>In the API, you can pre-fill Claude's response. Claude continues from exactly where you left off - perfect for forcing specific output formats or skipping preambles:</p>
            <pre>{`// API only - forces Claude to start mid-sentence
messages: [
  { role: "user", content: "Analyze our Q3 performance." },
  { role: "assistant", content: "## Q3 Performance Analysis\n\n**Revenue:**" }
]
// Claude continues from "Revenue:" - no preamble, straight to content`}</pre>
          </section>

          <section className="section-card">
            <h2>End-to-End: Prompt Evolution Walkthrough</h2>
            <p>Here's a real prompt going through 3 iterations from weak to excellent. The task: write a cold email to a VP of Engineering.</p>
            <div className="steps-list">
              <div className="step">
                <strong>Iteration 1 - Weak prompt, mediocre output</strong>
                <pre>{`Prompt: Write a cold email to a VP of Engineering about our developer tool.

Output: "Hi [Name], I hope this email finds you well. I wanted to reach out 
to introduce our developer tool that helps engineering teams be more productive..."

Problem: Generic, boring, no personalization, no clear value prop.`}</pre>
              </div>
              <div className="step">
                <strong>Iteration 2 - Added role + context</strong>
                <pre>{`Prompt: You are an experienced B2B SaaS sales rep. Write a cold email to 
a VP of Engineering at a 200-person fintech company. We sell a code review 
automation tool that saves senior engineers 4 hours/week on PR reviews.

Output: Better - mentions the specific pain point (PR review time), 
mentions fintech. But still too long, and opens with "I hope..."

Problem: Still using email clichés. Doesn't respect the recipient's time.`}</pre>
              </div>
              <div className="step">
                <strong>Iteration 3 - Full technique stack</strong>
                <pre>{`<persona>
You are a B2B SaaS AE with 8 years of experience selling developer tools. 
You've closed deals at Stripe, Plaid, and Robinhood. You write emails 
like a human, not a sales robot.
</persona>

<context>
Product: automated code review tool. Saves senior engineers 4 hours/week 
on PR reviews. Integration: GitHub, GitLab. Pricing: $25/dev/month.
Target: VP Engineering at a 150-200 person fintech startup.
</context>

<task>
Write a cold email that gets a reply.
</task>

<constraints>
- Under 75 words total
- No "I hope this finds you well" or similar openers
- No feature lists - one specific value, one specific pain
- Call to action: 15-minute call, not a demo
- First line must reference something specific about fintech engineering
</constraints>

Output: "Fintech PR review backlogs are brutal - compliance requirements 
mean every line needs scrutiny, but your senior engineers are spending 
4+ hours/week just on reviews.

We automated that at [similar company]. Senior engineers got those 
hours back.

Worth a 15-minute call to see if it's relevant for your team?
[Name]"

Much better: specific, short, one pain point, human tone, low-friction CTA.`}</pre>
              </div>
            </div>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise (~30 min)</h3>
            <p>Build a Power Prompt Template for your most common recurring task, using the 3-iteration approach:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Iteration 1: Write the prompt as you normally would.</strong>
                <p>Run it. Note what's wrong with the output.</p>
              </div>
              <div className="step">
                <strong>Iteration 2: Add role + XML structure.</strong>
                <p>Add <code>&lt;context&gt;</code>, <code>&lt;task&gt;</code>, <code>&lt;constraints&gt;</code>. Run it. What improved? What's still wrong?</p>
              </div>
              <div className="step">
                <strong>Iteration 3: Add format control + negative constraints.</strong>
                <p>Specify the exact output format. Add "do not" rules for the remaining problems. Run it. Save the final version - this is your reusable template.</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 20 Quick Reference" items={[
            { term: "XML Tags", definition: "Structure prompts with <context>, <task>, <format>, <constraints>. Claude gives these special attention from training." },
            { term: "Extended Thinking", definition: "Add 'Think step by step before answering.' Claude reasons through tradeoffs and edge cases before giving a final answer." },
            { term: "Few-Shot", definition: "Show 2-5 examples of ideal output. Fastest way to control tone, format, and style for recurring tasks." },
            { term: "Role Prompting", definition: "Specific domain + years + specialty > generic role. 'B2B SaaS growth marketer, PLG focus, $1M-$20M ARR' >> 'marketing expert'." },
            { term: "Negative Constraints", definition: "List what NOT to do: no caveats, no repeating the question, no hedging, no filler phrases. Kills bad defaults fast." },
            { term: "3-iteration rule", definition: "Almost no prompt is perfect first try. Plan for 3 iterations: write → identify what's wrong → add structure → repeat." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level3/lesson19', label: 'Lesson 19: Models & Mindset' }}
            next={{ href: '/level3/lesson21', label: 'Lesson 21: CLAUDE.md' }}
            currentLessonId="l3-20"
          />
        </main>
    </div>
  )
}
