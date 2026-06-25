import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import PromptBox from '@/components/lesson/PromptBox'
import HandsOn from '@/components/lesson/HandsOn'
import Callout from '@/components/lesson/Callout'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

export default function Level2Capstone() {
  return (
    <div className="capstone-layout">
      <main className="capstone-main">
        <div className="capstone-content-inner">

          <div className="capstone-hero l2">
            <span className="capstone-badge">🏆 LEVEL 2 CAPSTONE</span>
            <h1>Build Your AI-Powered Work System</h1>
            <p>Apply everything from Level 2. In ~90 minutes you&apos;ll have a complete AI workflow that transforms how you work every day.</p>
            <div className="stats-row">
              <div className="stat"><span className="stat-value">1 System</span><span className="stat-label">Built &amp; Tested</span></div>
              <div className="stat"><span className="stat-value">90 min</span><span className="stat-label">Your Time</span></div>
              <div className="stat"><span className="stat-value">Real Work</span><span className="stat-label">Applied</span></div>
              <div className="stat"><span className="stat-value">Repeatable</span><span className="stat-label">Every Day</span></div>
            </div>
          </div>

          <section className="l2-section">
            <h2>What You&apos;ve Mastered</h2>
            <p>Seven high-impact skills from Level 2. Now you&apos;ll weave them into a single system.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.5rem' }}>
              {[
                { title: '🔍 Deep Research', color: '#3b82f6', bg: '#eff6ff', desc: 'Synthesize hours of research in minutes. Find signal in noise.' },
                { title: '✍️ AI Writing', color: '#10b981', bg: '#f0fdf4', desc: 'Draft faster, edit sharper, match any tone or format.' },
                { title: '📊 Data Analysis', color: '#f59e0b', bg: '#fffbf0', desc: 'Understand what your data says without being a statistician.' },
                { title: '🧭 Strategy', color: '#8b5cf6', bg: '#faf5ff', desc: 'Think through complex decisions and spot blind spots.' },
                { title: '🧠 Claude Projects', color: '#ec4899', bg: '#fdf2f8', desc: 'Persistent AI workspaces with your context and files.' },
                { title: '⚙️ Automation', color: '#06b6d4', bg: '#ecfeff', desc: 'Offload repetitive work to AI-powered workflows.' },
                { title: '🗂️ AI OS', color: '#14b8a6', bg: '#f0fdfa', desc: 'Daily habits and a prompt library that compounds over time.' },
              ].map(({ title, color, bg, desc }) => (
                <div key={title} style={{ border: `2px solid ${color}`, borderRadius: '10px', padding: '1.25rem', background: bg }}>
                  <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.9rem', margin: '0 0 0.5rem' }}>{desc}</p>
                  <span style={{ color, fontWeight: 700 }}>✓ Complete</span>
                </div>
              ))}
            </div>
          </section>

          <section className="l2-section">
            <h2>Choose Your Capstone Track</h2>
            <p>Pick ONE track that fits your work. Each takes ~90 minutes and produces something real you&apos;ll use every week.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ border: '2px solid #3b82f6', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, color: '#1d4ed8' }}>Track A: The Knowledge Worker</h3>
                <p style={{ fontSize: '0.9rem' }}>Build a complete research-to-report pipeline for a real topic in your field.</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}><strong>End result:</strong> A research brief + written report + one automation to keep it updated weekly.</p>
              </div>
              <div style={{ border: '2px solid #7c3aed', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, color: '#5b21b6' }}>Track B: The Team Leader</h3>
                <p style={{ fontSize: '0.9rem' }}>Build a manager&apos;s AI system: a Claude Project for team comms + 3 automations + a team guide.</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}><strong>End result:</strong> A documented AI system your team can actually use.</p>
              </div>
              <div style={{ border: '2px solid #d97706', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, color: '#92400e' }}>Track C: The Specialist</h3>
                <p style={{ fontSize: '0.9rem' }}>Go deep on your profession. Build a Claude Project with full professional context, 10 saved prompts, and one automation that saves 2+ hours/week.</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}><strong>End result:</strong> A personalized AI expert who knows your exact work.</p>
              </div>
              <div style={{ border: '2px solid #059669', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, color: '#065f46' }}>Track D: The Builder</h3>
                <p style={{ fontSize: '0.9rem' }}>Create a &quot;mini AI product&quot; - a documented prompt chain that solves a specific problem, written as an SOP you could hand to a colleague.</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}><strong>End result:</strong> A shareable, reusable AI workflow with a live demo.</p>
              </div>
            </div>
          </section>

          <section className="l2-section">
            <h2>Track Instructions</h2>

            <h3 style={{ color: '#1d4ed8' }}>Track A: The Knowledge Worker Pipeline</h3>
            <HandsOn
              title="Research → Analyze → Report → Automate"
              duration="90 min"
              steps={[
                'Choose a real topic relevant to your work that you\'d normally spend hours researching.',
                'Run the Research Sprint prompt (below). Get 8-10 synthesized sources in 15 minutes.',
                'Paste the research output back into Claude and ask it to identify the 3 key themes.',
                'Ask Claude to write a 500-word executive brief using those themes.',
                'Run the Data Analysis prompt if you have any relevant numbers or trends.',
                'Ask Claude to write one slide\'s worth of key takeaways in bullet form.',
                'Set up a Zapier automation: weekly trigger → Claude generates an update on your topic → emailed to you.',
                'Review the full output. Edit what needs editing. Save the best prompts to your library.',
              ]}
            >
              <PromptBox label="Research Sprint Prompt">
{`You are a research analyst. I need a synthesis on: [YOUR TOPIC]

Find and summarize 8-10 key sources or findings. For each:
- Source name / author / year
- One-sentence main finding
- Relevance to [YOUR CONTEXT/ROLE]

Then identify 3 themes that appear across multiple sources.
Flag any conflicting findings or gaps in the evidence.`}
              </PromptBox>
              <PromptBox label="Executive Brief Prompt">
{`Using these research themes: [PASTE THEMES]

Write a 500-word executive brief on [TOPIC] for [AUDIENCE].
Structure: Key Finding → Why It Matters → What to Do About It
Tone: Direct, evidence-based, no jargon.
End with: 3 recommended actions.`}
              </PromptBox>
            </HandsOn>

            <h3 style={{ color: '#5b21b6', marginTop: '2rem' }}>Track B: The Team Leader System</h3>
            <HandsOn
              title="Manager AI System in 90 Minutes"
              duration="90 min"
              steps={[
                'Identify the #1 task that eats your team\'s time every week (e.g., status reports, meeting prep, emails).',
                'Create a Claude Project. Write a system prompt for your role as a manager (use the template from Lesson 16).',
                'Upload your team\'s most-used template, style guide, or SOP document.',
                'Build Automation 1: Email summarizer - new emails from key stakeholders → Claude brief → Slack.',
                'Build Automation 2: Meeting prep - 30 min before a meeting → Claude drafts agenda + talking points → sent to you.',
                'Build Automation 3: Status report - every Friday 4pm → Claude generates weekly summary → Google Doc.',
                'Create a 1-page "AI Starter Guide" for your team: 5 prompts, how to access Claude, what it\'s useful for.',
                'Demo one workflow live to your team. Measure: how long does it take now vs. before?',
              ]}
            >
              <PromptBox label="Manager System Prompt Template">
{`You are an executive assistant supporting a [YOUR ROLE] managing a team of [SIZE] in [INDUSTRY].

CONTEXT: [Describe your team's main work, challenges, and communication style.]

ALWAYS:
- Summarize key points before explaining details
- Flag action items and owners clearly
- Match the directness level of a senior leader

NEVER:
- Add unnecessary caveats or filler phrases
- Make decisions on behalf of the team
- Skip flagging things that need human judgment

OUTPUT FORMAT: Summary | Details | Action Items | Timeline`}
              </PromptBox>
            </HandsOn>

            <h3 style={{ color: '#92400e', marginTop: '2rem' }}>Track C: The Specialist Build</h3>
            <HandsOn
              title="Your Professional AI Expert"
              duration="90 min"
              steps={[
                'List the top 5 tasks in your profession that take the most time and follow a repeatable pattern.',
                'Create a Claude Project. Write a detailed system prompt with your professional context, constraints, and standards.',
                'Upload 2-3 reference documents: your professional guidelines, templates, or past high-quality work.',
                'Write and test 10 prompts - 2 for each of your top 5 tasks. Save them to your prompt library.',
                'Identify the one task that is most repetitive and most automatable.',
                'Build one automation in Zapier or Make that handles that task with minimal input from you.',
                'Run a full "day in the life" test: use your Project for everything you do today.',
                'Measure: how many hours did your AI system save you? Document this.',
              ]}
            >
              <PromptBox label="Specialist System Prompt Framework">
{`You are a professional assistant supporting a [YOUR PROFESSION] with [X years] of experience in [SPECIALTY].

CONTEXT: [Describe your practice/organization, typical clients/patients/cases, key tools you use.]

PROFESSIONAL STANDARDS: Always adhere to [your field's] best practices.
Flag anything requiring [professional judgment / verification / client review].

ALWAYS:
- Use correct professional terminology for [your field]
- Structure output in [your field's standard format]
- Include appropriate disclaimers when needed

NEVER:
- Make final recommendations without flagging need for professional review
- Include client-specific identifying information
- Deviate from documented [standards/protocols/guidelines]`}
              </PromptBox>
            </HandsOn>

            <h3 style={{ color: '#065f46', marginTop: '2rem' }}>Track D: The Builder</h3>
            <HandsOn
              title="Build a Shareable AI Workflow"
              duration="90 min"
              steps={[
                'Identify one specific problem in your organization that AI could solve - something others face too.',
                'Design a 3-5 step prompt chain: each step takes the output of the previous one as input.',
                'Test every step with real data. Iterate until each step produces reliable output.',
                'Document it as a 1-page SOP: Problem → Steps → Prompts → Expected Output → Common Issues.',
                'Record a short demo (Loom or screen recording) showing the full workflow in action.',
                'Share it with one colleague. Have them try it without your help. Note where they get stuck.',
                'Refine based on their feedback. Fix the gaps.',
                'Submit: your SOP doc + demo link + a 2-paragraph explanation of the time saved.',
              ]}
            >
              <PromptBox label="Prompt Chain Documentation Template">
{`WORKFLOW NAME: [Name]
PROBLEM IT SOLVES: [Specific pain point]
TIME SAVED: [Estimated hours per week]
REQUIRES: Claude [free/Pro] + [any other tools]

STEP 1 - [Name]:
Input: [What do you paste in?]
Prompt: [FULL PROMPT]
Output: [What do you get?]

STEP 2 - [Name]:
Input: [Output from Step 1 + anything new]
Prompt: [FULL PROMPT]
Output: [What do you get?]

[Continue for each step]

COMMON ISSUES: [What goes wrong and how to fix it]`}
              </PromptBox>
            </HandsOn>
          </section>

          <section className="l2-section">
            <h2>Reflection Questions</h2>
            <p>Answer these in writing before marking the capstone complete. Honest answers = better outcomes.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                'What\'s the one workflow you built that now saves you the most time? Be specific.',
                'What was harder than expected? What was surprisingly easy?',
                'What AI workflow would you build next - if you had one more week?',
                'How would you explain AI\'s role in your work to a skeptical colleague in 2 sentences?',
                'What\'s your biggest remaining question about AI after completing Level 2?',
              ].map((q, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#374151' }}>Q{i + 1}.</strong>
                  <p style={{ margin: 0, color: '#4b5563' }}>{q}</p>
                </div>
              ))}
            </div>
            <Callout type="tip">
              When you&apos;re done, mark this lesson complete in the sidebar. That&apos;s your signal that
              Level 2 is finished and the skills are yours to keep.
            </Callout>
          </section>

          <section className="l2-section">
            <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', borderRadius: '12px', padding: '2.5rem', color: 'white', textAlign: 'center' }}>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                COMING SOON
              </span>
              <h2 style={{ color: 'white', marginTop: '1.25rem', fontSize: '1.75rem' }}>Level 3: Advanced AI Engineering</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                You&apos;ve mastered using AI. Level 3 is about building with it. Go from power user to AI architect.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '640px', margin: '0 auto 2rem' }}>
                {[
                  { icon: '🏗️', title: 'RAG Systems', desc: 'Build apps that search your own documents' },
                  { icon: '🤖', title: 'Multi-Agent AI', desc: 'Orchestrate teams of AI agents' },
                  { icon: '🔌', title: 'Claude API', desc: 'Build products powered by Claude' },
                  { icon: '🧬', title: 'Fine-Tuning', desc: 'Train models on your data' },
                  { icon: '🛡️', title: 'AI Safety Eng.', desc: 'Build responsibly at scale' },
                  { icon: '🚀', title: 'Deploy & Scale', desc: 'Ship AI features to real users' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1rem' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{icon}</div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{title}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>{desc}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', margin: 0 }}>
                Level 3 launches soon. Complete the capstone to get early access.
              </p>
            </div>
          </section>

          <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
            <Link href="/level2/lesson18" style={{ marginRight: '1rem', color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← Back to Lesson 18
            </Link>
            <Link href="/level0/lesson1" style={{ color: '#d97706', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Review from the beginning →
            </Link>
          </div>

        <LevelQuiz level={2} />
        <LevelFeedback level={2} levelTitle="Applied AI - Research, Writing & Automation" />
          <Footer />
        </div>
      </main>
    </div>
  )
}
