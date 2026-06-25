import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson18() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-18" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={18}
            duration={60}
            title="Your Personal AI Operating System"
            subtitle="Build daily habits, a personal prompt library, and a system that keeps getting better."
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          <section className="lesson-section">
            <h2>The AI Habit Stack</h2>
            <p>
              Most people use AI occasionally but never get the full benefit - they don&apos;t make it habitual.
              The difference between someone who uses Claude once a month and someone who gets 10 hours back
              per week isn&apos;t talent. It&apos;s habit. The <strong>AI Habit Stack</strong> is three moments
              built into every day where you use Claude intentionally.
            </p>

            <h3>🌅 Morning (5 min) - Daily Briefing</h3>
            <PromptBox label="Morning Briefing Prompt">
{`Here's my calendar and to-do list for today:

Calendar: [PASTE YOUR CALENDAR]
To-Do: [PASTE YOUR TO-DO LIST]

Help me:
1. Identify my top 3 priorities by impact and deadline
2. Spot any scheduling conflicts or blockers
3. Flag anything that could derail my day
4. Suggest one "non-urgent but important" task to fit in
5. Recommend when to do deep work vs. meetings

Be specific. I need to be ready to execute in 30 minutes.`}
            </PromptBox>

            <h3>⚡ Mid-Task (On-Demand) - Your AI Co-Worker</h3>
            <p>Whenever you&apos;re stuck, drafting, or analyzing - open Claude first. Make it your default, not your fallback.</p>
            <PromptBox label="Mid-Task Unstuck Prompt">
{`I'm stuck on [TASK]. Here's what I've tried: [DESCRIBE ATTEMPTS]
The problem is: [WHAT'S BLOCKING YOU]
I need to: [DESIRED OUTCOME]

Walk me through the next 2-3 steps.`}
            </PromptBox>

            <h3>🌙 Evening (5 min) - Reflection & Tomorrow</h3>
            <PromptBox label="Evening Reflection Prompt">
{`Here's what I accomplished today: [LIST WINS]
What didn't go as planned: [BLOCKERS OR FAILURES]
Tomorrow's schedule: [PASTE CALENDAR]

Help me:
1. Write my top 3 priorities for tomorrow (be specific)
2. Identify one thing I should say "no" to
3. Draft 2-3 follow-up emails needed tonight
4. Note one thing I learned today worth remembering`}
            </PromptBox>

            <Callout type="tip">
              Fastest way to build the habit: keep Claude open in a pinned browser tab all day.
              The habit sticks when the friction drops to zero.
            </Callout>
          </section>

          <section className="lesson-section">
            <h2>Building Your Personal Prompt Library</h2>
            <p>
              A <strong>prompt library</strong> is a simple document where you collect, organize, and refine
              your best prompts. Over time it becomes your competitive advantage - a toolbox that grows
              every week.
            </p>
            <h3>Where to Store It</h3>
            <ul>
              <li><strong>Notion:</strong> Easiest to search and share with teammates</li>
              <li><strong>Google Doc:</strong> Simple, accessible everywhere</li>
              <li><strong>Apple Notes:</strong> Quick and local</li>
              <li><strong>Claude Projects:</strong> Built-in, keeps prompts alongside conversations</li>
            </ul>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { name: 'Email Draft', use: 'Drafting professional emails' },
                { name: 'Meeting Notes', use: 'Summarizing transcripts' },
                { name: 'Data Analysis', use: 'Exploring datasets' },
                { name: 'Research Brief', use: 'Synthesizing sources' },
                { name: 'Decision Framework', use: 'Structuring complex choices' },
                { name: 'Executive Summary', use: 'Condensing docs for leaders' },
                { name: 'Status Update', use: 'Weekly progress reporting' },
                { name: 'Feedback Response', use: 'Responding to criticism' },
              ].map(({ name, use }) => (
                <div key={name} style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '0.75rem 1rem', background: '#fafafa' }}>
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{name}</strong>
                  <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>{use}</span>
                </div>
              ))}
            </div>
            <PromptBox label="Prompt Library Entry Template">
{`Name: [Descriptive title]
When to use: [Situation this solves]
Category: [Email / Research / Data / Strategy / Writing]
The Prompt:
[PASTE FULL PROMPT HERE]
Notes: [What works well? What to refine?]
Last Updated: [DATE]`}
            </PromptBox>
            <Callout type="tip">
              Treat your prompt library like a physical toolbox. Add one new prompt per week.
              Review monthly. Delete what you never use. 50 great prompts beats 500 mediocre ones.
            </Callout>
            <p>
              Resources:{' '}
              <a href="https://www.promptingguide.ai" target="_blank" rel="noopener">Prompting Guide</a>
              {' '}·{' '}
              <a href="https://claude.ai/prompts" target="_blank" rel="noopener">Claude Prompt Library</a>
            </p>
          </section>

          <section className="lesson-section">
            <h2>Staying Current with AI</h2>
            <p>
              AI moves fast. The key is <em>curation over consumption</em> - 15 minutes per week,
              not 2 hours per day.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ border: '2px solid #3b82f6', borderRadius: '8px', padding: '1.25rem', background: '#eff6ff' }}>
                <h4 style={{ marginTop: 0, color: '#1e40af' }}>The Rundown AI</h4>
                <p style={{ fontSize: '0.85rem' }}>AI news in under 5 minutes. Curated daily.</p>
                <a href="https://www.therundown.ai" target="_blank" rel="noopener" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subscribe →</a>
              </div>
              <div style={{ border: '2px solid #10b981', borderRadius: '8px', padding: '1.25rem', background: '#f0fdf4' }}>
                <h4 style={{ marginTop: 0, color: '#065f46' }}>TLDR AI</h4>
                <p style={{ fontSize: '0.85rem' }}>Weekly breakdown of AI breakthroughs.</p>
                <a href="https://tldr.tech/ai" target="_blank" rel="noopener" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subscribe →</a>
              </div>
              <div style={{ border: '2px solid #8b5cf6', borderRadius: '8px', padding: '1.25rem', background: '#faf5ff' }}>
                <h4 style={{ marginTop: 0, color: '#5b21b6' }}>Anthropic News</h4>
                <p style={{ fontSize: '0.85rem' }}>Official Claude and safety updates.</p>
                <a href="https://www.anthropic.com/news" target="_blank" rel="noopener" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Follow →</a>
              </div>
            </div>
            <PromptBox label="Weekly AI Briefing Prompt">
{`What significant changes happened in AI this past week?

Cover:
1. Major model or capability releases
2. New research that changes how people use AI
3. Regulatory or policy changes
4. One trend to watch next month
5. One tool I could start using right now

Under 500 words. I know the basics - skip the intro.`}
            </PromptBox>
          </section>

          <section className="lesson-section">
            <h2>Spreading AI to Your Team</h2>
            <p>The real win isn&apos;t you using AI. It&apos;s your whole team using it. Here&apos;s how to lead that without being the annoying evangelist.</p>
            <ol>
              <li><strong>Start with one painful problem</strong> that costs your team real time - not abstract potential.</li>
              <li><strong>Solve it yourself first.</strong> Build the workflow, test it, document it.</li>
              <li><strong>Show, don&apos;t tell.</strong> Demo it live. Let people see 15 minutes of work done in 5.</li>
              <li><strong>Create a shared prompt doc.</strong> A simple Google Doc: &quot;Here are 5 prompts that save us time. Try one.&quot;</li>
              <li><strong>Run a 30-min lunch &amp; learn.</strong> Working session, not a presentation. Everyone tries a prompt.</li>
              <li><strong>Be honest about limitations.</strong> &quot;It hallucinates sometimes. Check critical outputs.&quot; Trust requires honesty.</li>
            </ol>
            <PromptBox label="Team AI Adoption Proposal - Send to Your Manager">
{`Subject: Proposal - Using AI to Reduce [PROBLEM] on Our Team

[MANAGER NAME],

I'd like to propose a small experiment using AI to address a bottleneck:

The Problem: [Specific task. Give numbers: "~4 hours/person/week"]
The Solution: I've tested using Claude to [describe workflow]. Results: [time saved/quality improved].

The Proposal:
1. I'll create a 1-page guide with prompts and examples
2. Team tries it for 2 weeks on a low-stakes task
3. We measure time saved and output quality
4. We decide whether to continue

The Benefit: Recover [X hours/week] to invest in [higher-value work].
The Risk: Low - 2-week test on non-critical work.

Can we discuss this week?
[YOUR NAME]`}
            </PromptBox>
            <Callout type="warning">
              Check your organization&apos;s AI policy before using any AI tool for work. Healthcare, legal,
              and finance sectors have specific regulations about AI use with sensitive or client data.
              Get compliance approval first.
            </Callout>
            <p>Resource: <a href="https://www.anthropic.com/claude-for-business" target="_blank" rel="noopener">Claude for Teams →</a></p>
          </section>

          <section className="lesson-section">
            <HandsOn
              title="Plan Your AI Week"
              duration="20 min"
              steps={[
                'Open a blank doc. Title it "My AI Operating System."',
                'Run the Morning Briefing prompt with your actual calendar right now. See how it feels.',
                'Add 3 prompts to your new prompt library using the entry template above.',
                'Subscribe to one AI newsletter from the three recommended above.',
                'Write a one-sentence AI goal for this week and share it with one colleague.',
              ]}
            >
              <PromptBox label="Morning Briefing (Run This Now)">
{`Here's my calendar and to-do list for today:
Calendar: [PASTE YOUR CALENDAR]
To-Do: [PASTE YOUR TO-DO LIST]

Identify my top 3 priorities, flag any blockers, and tell me the best time for deep work today.`}
              </PromptBox>
              <PromptBox label="Prompt Library Template">
{`Name: [Title]
When to use: [Situation]
Category: [Email / Research / Data / Writing / Strategy]
The Prompt: [FULL TEXT]
Notes: [What works? What to refine?]
Last Updated: [DATE]`}
              </PromptBox>
            </HandsOn>
          </section>

          <QuickRef items={[
            { term: 'AI Habit Stack', definition: 'Three daily touchpoints: morning briefing (5 min), mid-task on-demand, evening reflection (5 min). Keep Claude in a pinned tab to eliminate friction.' },
            { term: 'Prompt Library', definition: 'A doc of your best prompts with name, use case, and notes. Add one per week. Review monthly. Delete what you never use.' },
            { term: 'Staying Current', definition: 'One newsletter + one weekly Claude briefing prompt = informed without overwhelmed. 15 min/week is enough.' },
            { term: 'Team Adoption', definition: 'Start with one painful problem. Solve it yourself. Demo it live. Share a prompt doc. Run a lunch & learn. Lead with proof.' },
            { term: 'Compliance First', definition: 'Check your org\'s AI policy. Healthcare, legal, and finance have specific regulations. Get approval before sharing client data with any AI.' },
            { term: 'The Real Win', definition: 'When AI becomes your default for research, writing, and decisions - not an occasional experiment - everything compounds.' },
          ]} />

          <LessonNav
            level={2}
            prev={{ href: '/level2/lesson17', label: 'Lesson 17: AI Automation' }}
            next={{ href: '/level2/capstone', label: 'Level 2 Capstone' }}
            currentLessonId="l2-18"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
