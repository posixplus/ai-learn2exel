import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson13() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-13" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={13}
            duration={90}
            title="AI Writing Lab"
            subtitle="Draft, edit, and polish professional communication-emails, proposals, and reports at 10x speed"
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          {/* Section 1: The Writing Bottleneck */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              1. The Writing Bottleneck
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Most professionals spend <strong>30-40% of their workday writing</strong>. Emails, Slack messages, reports, proposals, presentations-it adds up. Not because writing is hard, but because we over-edit.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              The typical flow: think → write → rewrite → rewrite → polish → send. This takes forever, especially for high-stakes communication.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              Claude flips this: <strong>think → bullet points → Claude drafts → you refine → send</strong>. You save the middle steps.
            </p>

            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #4caf50',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1b5e20' }}>
                What AI Writing Can Do
              </h3>
              <ul style={{ marginLeft: '2rem', color: '#333', lineHeight: '1.6', marginBottom: '0' }}>
                <li><strong>Draft from bullets:</strong> Turn your notes into full paragraphs</li>
                <li><strong>Edit for clarity:</strong> Remove jargon, simplify sentences, fix tone</li>
                <li><strong>Adapt tone:</strong> Formal → casual, angry → diplomatic, brief → detailed</li>
                <li><strong>Translate:</strong> Make technical content accessible, or vice versa</li>
                <li><strong>Fix common issues:</strong> Passive voice, redundancy, missing structure</li>
              </ul>
            </div>

            <Callout type="warning">
              <strong>The Rule:</strong> Claude drafts, you refine. <strong>Never send AI output without reading it first.</strong> Claude can be wordy, miss nuance, or misunderstand context. Your job: make it yours.
            </Callout>
          </section>

          {/* Section 2: Emails That Get Responses */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              2. Emails That Get Responses
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Most emails get ignored because they're unclear about what the recipient should do. Claude can fix this. Here are three critical email types:
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>Type A: Cold Outreach</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You're contacting someone who doesn't know you. Key: establish credibility and make the ask crystal clear.
              </p>

              <div style={{
                backgroundColor: '#fff3e0',
                border: '1px solid #ffb74d',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '1rem'
              }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#e65100' }}>
                  Bad Prompt (Vague)
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', fontStyle: 'italic' }}>
                  "Hi, I wanted to reach out about a potential collaboration. Let me know if you're interested."
                </p>
              </div>

              <PromptBox label="Great Cold Outreach Prompt">
                {`Write a cold email to {recipient name}, {title} at {company}. Here's what I want to achieve: {your goal}.

About me: {your background}
Why I'm reaching out: {specific reason}
What I'm asking for: {specific request - call, meeting, advice, intro, etc.}

Key points to hit:
- Establish I've done my homework
- Show I understand their specific situation (not generic)
- Make the ask so specific they can say yes/no immediately
- Keep it under 150 words

Write in the style of: {formal/casual/friendly}`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>Type B: Internal Escalation</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You need to escalate something to your manager or leadership. Key: lead with business impact, not complaints.
              </p>

              <div style={{
                backgroundColor: '#fff3e0',
                border: '1px solid #ffb74d',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '1rem'
              }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#e65100' }}>
                  Bad Prompt (Complaining)
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', fontStyle: 'italic' }}>
                  "I'm frustrated with the current process. It's slowing us down and no one listens to my concerns."
                </p>
              </div>

              <PromptBox label="Great Escalation Prompt">
                {`Write an escalation email to my manager about {issue}.

Business impact: {specific metrics: cost, time lost, risks}
Root cause: {what's actually going wrong}
What I've tried: {steps you've already taken}
What I need: {specific decision, resource, or support}

Frame it as a problem-solver, not a complainer. Use BLUF (bottom-line-up-front):
- Start with the ask
- Then explain the impact
- End with next steps

Tone: {professional/collaborative/urgent}`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>Type C: Follow-Up After No Response</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                They didn't respond. Key: don't sound hurt. Sound helpful and remove barriers to response.
              </p>

              <div style={{
                backgroundColor: '#fff3e0',
                border: '1px solid #ffb74d',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '1rem'
              }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#e65100' }}>
                  Bad Prompt (Passive Aggressive)
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', fontStyle: 'italic' }}>
                  "I wanted to follow up on my previous email. Still waiting for your response."
                </p>
              </div>

              <PromptBox label="Great Follow-Up Prompt">
                {`Write a follow-up email to {recipient} about {original topic}.

Original ask: {what I originally asked}
Time since: {how long it's been}
New angle (optional): {why I'm reaching out now - urgency, new info, lower stakes}

Make it easy for them to say yes by:
- Offering multiple options or paths
- Removing any implied urgency
- Showing I understand they're busy
- Making the ask smaller/easier if possible

Tone: {helpful/understanding/light}`}
              </PromptBox>

              <Callout type="tip">
                <strong>The "Voice Match" Technique:</strong> Paste a previous email you wrote into Claude and ask it to write the new email in your exact style. This ensures the output sounds like you, not generic AI.
              </Callout>
            </div>
          </section>

          {/* Section 3: Proposals, Reports, and Business Cases */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              3. Proposals, Reports, and Business Cases
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              High-stakes documents need structure. Claude can build a skeleton in minutes. You fill in the details.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Template 1: One-Page Business Case</h3>
              <PromptBox label="Business Case Prompt">
                {`Write a one-page business case for {project/decision}. 

Problem: {What's broken or missing?}
Solution: {What are you proposing?}
Impact: {Quantify: revenue, cost savings, risk reduction, speed, quality}
Investment: {Time, budget, resources required}
Timeline: {When will this be done?}
Risks: {What could go wrong?}

Format as:
- 1 paragraph executive summary (lead with impact)
- Problem statement (1-2 paragraphs)
- Solution (1-2 paragraphs)
- Business case (1 table: costs, benefits, timeline)
- Risks & mitigations (bullet points)
- Recommendation (1 sentence)`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Template 2: Executive Summary</h3>
              <PromptBox label="Executive Summary Prompt">
                {`Write a 1-2 page executive summary for {report/project}.

Key findings: {What's the most important thing people need to know?}
Context: {Why does this matter? Who cares?}
Recommendation: {What should we do?}
Trade-offs: {What's the cost? What are we giving up?}
Timeline: {When?}

Use BLUF structure:
- Bottom line first (1 paragraph: the ask + why it matters)
- Supporting details (2-3 key findings)
- Recommendation (1 sentence)
- Next steps (action items + DRI)`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Template 3: Project Proposal</h3>
              <PromptBox label="Project Proposal Prompt">
                {`Write a project proposal for {project name}.

Vision: {What will this deliver?}
Scope: {What's in, what's out?}
Timeline: {Start → milestones → ship date}
Budget: {Resource request}
Success metrics: {How will we know it worked?}
Risks: {What could derail this?}
Stakeholders: {Who needs to be involved?}

Format:
- Title & elevator pitch
- Problem statement
- Proposed solution
- Scope & timeline (Gantt or table)
- Budget & resources
- Success criteria
- Risks & mitigation
- Team & DRI (directly responsible individual)`}
              </PromptBox>
            </div>

            <Callout type="info">
              <strong>Structure Matters More Than Length:</strong> A messy 10-page report gets skimmed and ignored. A crisp 2-page proposal with clear headings gets read and acted on. Claude is great at structure-use it.
            </Callout>
          </section>

          {/* Section 4: Editing, Tone, and Style */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              4. Editing, Tone, and Style
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Claude is a world-class editor. Use it to refine clarity, tone, and style.
            </p>

            <div style={{
              backgroundColor: '#f0f4ff',
              border: '1px solid #5c6bc0',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#1a237e' }}>
                Six Editing Prompts
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  1. Make it more concise
                </p>
                <PromptBox label="">
                  {`Edit this to be 30% shorter without losing meaning. Remove jargon and filler words:

[PASTE TEXT]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  2. Make it more confident
                </p>
                <PromptBox label="">
                  {`Rewrite this to sound more confident and authoritative. Replace hedging language ("may," "might," "possibly") with stronger claims:

[PASTE TEXT]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  3. Convert to bullet points
                </p>
                <PromptBox label="">
                  {`Convert this paragraph into a bulleted list. Keep the key points, drop the narrative:

[PASTE TEXT]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  4. Make it more empathetic
                </p>
                <PromptBox label="">
                  {`Rewrite this to sound warmer and more empathetic. I'm trying to build trust, not just deliver bad news:

[PASTE TEXT]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  5. Plain language version
                </p>
                <PromptBox label="">
                  {`Rewrite this for a 12-year-old. Remove jargon, use short sentences, explain anything technical:

[PASTE TEXT]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '0' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                  6. Academic to casual
                </p>
                <PromptBox label="">
                  {`Rewrite this in casual, conversational English. Remove academic tone and make it sound like I'm talking to a peer:

[PASTE TEXT]`}
                </PromptBox>
              </div>
            </div>

            <Callout type="info">
              <strong>Plain Language Guide:</strong> Check out <a href="https://www.plainlanguage.gov/guidelines/" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>plainlanguage.gov</a> for government best practices on clarity. Claude knows these principles and can apply them.
            </Callout>
          </section>

          {/* Section 5: Hands-On Writing Lab */}
          <section style={{ marginBottom: '3rem' }}>
            <HandsOn
              title="Hands-On: Write 3 Real Work Pieces"
              description="In 35 minutes, use Claude to draft three real documents you've been putting off."
              duration="35 min"
              steps={[
                'Exercise 1: Write a professional email you\'ve been procrastinating on (cold outreach, escalation, or follow-up)',
                'Exercise 2: Turn messy meeting notes into a clean summary email',
                'Exercise 3: Write a one-paragraph executive summary of a recent project or initiative',
                'For each exercise, paste the Claude output into your email client or doc and read it out loud',
                'Make 2-3 edits to match your voice (replace AI jargon, adjust tone, personalize)',
                'Send or save the refined version'
              ]}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Exercise 1: Professional Email Template</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  Use this prompt for the email you've been putting off:
                </p>
                <PromptBox label="">
                  {`Write an email to {recipient name}.

Goal: {What do you want them to do or know?}
Context: {Why you're writing now}
Key points: {2-3 bullet points of what matters}
Call to action: {Specific next step}

Style: {formal/friendly/urgent}
Length: {short/medium/detailed}

Use the voice of a {your profession}. Keep it under 200 words.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Exercise 2: Meeting Notes to Summary Template</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  Paste your meeting notes and use this prompt:
                </p>
                <PromptBox label="">
                  {`Convert these meeting notes into a clean summary email.

Include:
- Key decisions made
- Action items (who, what, by when)
- Open questions
- Next steps

Format it like a professional email you'd send to stakeholders who weren't there.

[PASTE MEETING NOTES]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Exercise 3: Executive Summary Template</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  For a recent project, use this prompt:
                </p>
                <PromptBox label="">
                  {`Write a one-paragraph executive summary for {project name}.

What it delivered: {brief description}
Impact: {metrics: time saved, revenue, cost reduction, risk, quality}
Outcome: {what's the status now?}

One sentence that captures: "{project name} {achieved outcome} by {method}, resulting in {impact}."

Keep it under 100 words.`}
                </PromptBox>
              </div>
            </HandsOn>
          </section>

          {/* Quick Reference */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              Quick Reference: Copy-Paste Writing Prompts
            </h2>
            <QuickRef
              items={[
                {
                  term: 'Cold Email',
                  definition: 'Include: recipient role, your credibility, specific ask, why them, next step'
                },
                {
                  term: 'Internal Escalation',
                  definition: 'Lead with business impact → then problem → then ask → offer solutions'
                },
                {
                  term: 'One-Page Business Case',
                  definition: 'Executive summary → problem → solution → impact (quantified) → risks'
                },
                {
                  term: 'Executive Summary',
                  definition: 'BLUF: bottom-line-up-front → key findings → recommendation → next steps'
                },
                {
                  term: 'Voice Match',
                  definition: 'Paste a previous email you wrote and ask Claude: "Write this in my style"'
                },
                {
                  term: 'Final Rule',
                  definition: 'Claude drafts, you refine. Always read aloud before sending.'
                }
              ]}
            />
          </section>

          <LessonNav
            level={2}
            prev={{ href: '/level2/lesson12', label: 'Lesson 12: Deep Research' }}
            next={{ href: '/level2/lesson14', label: 'Lesson 14: AI + Data' }}
            currentLessonId="l2-13"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
