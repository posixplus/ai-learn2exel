import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import PromptBox from '@/components/lesson/PromptBox'
import HandsOn from '@/components/lesson/HandsOn'
import Callout from '@/components/lesson/Callout'

export default function Level1Capstone() {
  return (
    <div className="capstone-layout">
      <main className="capstone-main">
        <div className="capstone-content-inner">
          {/* Hero Section */}
          <div className="capstone-hero l1">
            <span className="capstone-badge">🏆 LEVEL 1 CAPSTONE</span>
            <h1>Build Your AI Automation</h1>
            <p>Apply everything from Level 1. In ~75 minutes you'll have a working AI workflow that saves you real time every week.</p>

            <div className="stats-row">
              <div className="stat">
                <span className="stat-value">1 System</span>
                <span className="stat-label">Built & Tested</span>
              </div>
              <div className="stat">
                <span className="stat-value">75 min</span>
                <span className="stat-label">Your Time</span>
              </div>
              <div className="stat">
                <span className="stat-value">Repeatable</span>
                <span className="stat-label">Every Week</span>
              </div>
              <div className="stat">
                <span className="stat-value">Your Goal</span>
                <span className="stat-label">Achieved</span>
              </div>
            </div>
          </div>

          {/* Choose Your Track */}
          <section className="l1-section">
            <h2>Choose Your Track</h2>
            <p>
              You've learned 5 major skills in Level 1: multi-step workflows, custom AI tools, agents, MCP connections, and Claude Code. Now pick how you want to apply them. Choose ONE track that excites you most.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ backgroundColor: '#e3f2fd', padding: '2rem', borderRadius: '8px', border: '2px solid #2196f3' }}>
                <h3 style={{ marginTop: 0, color: '#1976d2' }}>Track A: The Custom AI Expert</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                  Build a Claude Project that becomes your personal specialist. Perfect if you want a tool you can use every day at work.
                </p>
                <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', marginTop: '1rem', fontSize: '0.9rem', border: '1px solid #90caf9' }}>
                  <strong>What you'll build:</strong> A Claude Project with system instructions, uploaded knowledge docs, and tested prompts for your #1 work task.
                </div>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '2rem', borderRadius: '8px', border: '2px solid #9c27b0' }}>
                <h3 style={{ marginTop: 0, color: '#6a1b9a' }}>Track B: The Workflow Architect</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                  Design and test a multi-step prompt chain for a recurring task. Perfect if you want to automate something complex.
                </p>
                <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', marginTop: '1rem', fontSize: '0.9rem', border: '1px solid #ce93d8' }}>
                  <strong>What you'll build:</strong> A 4-6 step AI workflow documented and tested, ready to reuse every week.
                </div>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '2rem', borderRadius: '8px', border: '2px solid #4caf50' }}>
                <h3 style={{ marginTop: 0, color: '#2e7d32' }}>Track C: The Claude Code Power User</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                  Create a working system with Claude Code, SKILL.md, and CLAUDE.md. For developers or advanced users.
                </p>
                <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', marginTop: '1rem', fontSize: '0.9rem', border: '1px solid #81c784' }}>
                  <strong>What you'll build:</strong> An automated workflow using Claude Code that runs on your computer, handles real work.
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
              <p style={{ marginTop: 0, marginBottom: 0, fontSize: '0.95rem' }}>
                <strong>Not sure which track?</strong> Pick the one that matches your daily work. Track A is easiest and works for everyone. Track B is for those with complex tasks. Track C is for developers or power users.
              </p>
            </div>
          </section>

          {/* Track A: Custom AI Expert */}
          <section className="l1-section">
            <h2>Track A: The Custom AI Expert</h2>
            <p>
              Build a Claude Project that becomes your personal AI assistant for your most important recurring task.
            </p>

            <HandsOn
              stepNumber={1}
              title="Define Your Specialist"
              duration="10 min"
              steps={[
                "Choose one task you do regularly (weekly, daily, or multiple times per week).",
                "Examples: writing emails to stakeholders, creating lesson materials, analyzing client data, drafting proposals.",
                "Write 2-3 sentences describing what the specialist AI needs to do.",
                "Example: 'My AI helps me write clear, professional weekly status reports for my manager. It knows my company style, our projects, and our metrics. It formats as: highlights, metrics, blockers, next week.'"
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Create Your Claude Project"
              duration="5 min"
              steps={[
                "Go to claude.ai.",
                "Click 'Create Project'.",
                "Name it: '[Your Task] Assistant' (e.g., 'Weekly Report Assistant').",
                "You're ready to add instructions."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Write System Instructions (Using 5-Element Framework)"
              duration="20 min"
              steps={[
                "In your Project, open Project Instructions.",
                "Write all 5 elements: Role & Purpose, Tone, Knowledge Context, Output Format, Guardrails.",
                "Be specific about YOUR situation, not generic.",
                "See example below.",
                "Test with one real task. Refine if needed."
              ]}
            >
              <PromptBox label="Track A Example: Weekly Report Assistant">
                {`ROLE & PURPOSE:
You are my personal assistant for writing weekly status reports to my manager. Your job is to help me create clear, professional, data-driven reports that take 15 minutes instead of 45.

TONE:
Professional but warm. Confident and data-focused. Never use filler. Be specific.

KNOWLEDGE CONTEXT:
I work in [MY INDUSTRY]. My team owns [MY RESPONSIBILITY]. We track these metrics: [LIST KEY METRICS]. My manager values: [WHAT THEY CARE ABOUT].

OUTPUT FORMAT:
Always structure as:
1. Highlights (3-5 bullets: what went well)
2. Metrics (table: KPIs and how they changed week-over-week)
3. Blockers (2-3 bullets: what's slowing us down)
4. Next Week (2-3 bullets: what we're doing next)

GUARDRAILS:
- Never include real employee names without asking first
- Flag if data seems off (I'll double-check)
- Keep it to 1 page when printed
- Use our company's terminology, not generic terms`}
              </PromptBox>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Upload Documents (Optional But Helpful)"
              duration="5 min"
              steps={[
                "In your Project, upload 1-2 documents that help the AI understand your context.",
                "Examples: past reports (so it knows your style), company style guide, team handbook, metrics definitions.",
                "Tell the AI: 'Use these documents as reference when writing reports.'"
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={5}
              title="Test with 3 Real Tasks"
              duration="20 min"
              steps={[
                "Run your project on 3 different weeks of data or scenarios.",
                "Look at output: Does it match what you need? Is the tone right? Is the format useful?",
                "Edit your Project Instructions based on what you learn.",
                "After 3 iterations, you're done. It's solid."
              ]}
            >
              <Callout type="tip">
                The first version is never perfect. That's normal. Iteration makes it great.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={6}
              title="Use It for Real"
              duration="Ongoing"
              steps={[
                "Next week, use your Project for real work.",
                "Time it. How much faster is this than without AI?",
                "Save your outputs so you can refine the system over time.",
                "You now have a tool you'll use forever."
              ]}
            >
            </HandsOn>
          </section>

          {/* Track B: Workflow Architect */}
          <section className="l1-section">
            <h2>Track B: The Workflow Architect</h2>
            <p>
              Design a multi-step workflow that breaks a complex task into manageable AI prompts. Each step feeds into the next.
            </p>

            <HandsOn
              stepNumber={1}
              title="Map Your Task Into 4-6 Steps"
              duration="10 min"
              steps={[
                "Choose a task that takes you 1-2 hours currently.",
                "Break it into 4-6 clear sequential steps. Each step's output feeds into the next.",
                "Example: 'Writing a blog post' → 1) Research topic, 2) Create outline, 3) Write draft, 4) Edit for flow, 5) Optimize for SEO, 6) Format for publication.",
                "Write each step and what the AI output should be."
              ]}
            >
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                <strong>Pro tip:</strong> If your task has more than 6 steps, group related ones together.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Write a Prompt for Each Step"
              duration="25 min"
              steps={[
                "Using the RACE framework, write a prompt for Step 1. Make it focused and clear.",
                "Test it in Claude or ChatGPT. Save the output.",
                "Write a prompt for Step 2. Paste Step 1 output at the beginning.",
                "Test it. Save output.",
                "Repeat for all steps. You'll have a working chain by the end."
              ]}
            >
              <Callout type="info">
                Each prompt should be short and focused. Don't ask the AI to do the next step automatically — you're controlling the flow.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Document Your Workflow"
              duration="15 min"
              steps={[
                "Create a document: '[Task Name] Workflow'.",
                "List all 4-6 steps in order.",
                "For each step, paste your prompt and note how long it took to get good output.",
                "This becomes your template. You'll reuse it."
              ]}
            >
              <PromptBox label="Example Documentation">
                {`# Blog Post Workflow

## Task: Write a 1500-word blog post on [topic]
## Total time: ~2 hours (used to be 4+ hours)

### Step 1: Research (10 min)
**Prompt:** [Your research prompt]
**Output:** List of 5 key sources with summaries
**Notes:** Claude found good sources. Took one iteration to get summaries detailed enough.

### Step 2: Create Outline (5 min)
**Prompt:** [Your outline prompt]
**Output:** Outline with intro, 5 sections, conclusion
**Notes:** Perfect on first try.

[Continue for all 6 steps...]

## Lessons Learned
[What worked, what didn't, refinements for next time]`}
              </PromptBox>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Run the Full Workflow End-to-End"
              duration="20 min"
              steps={[
                "Pick a new instance of your task (different topic, different data).",
                "Go through all 4-6 steps using your documented prompts.",
                "Time it. How much faster than doing it yourself?",
                "Note anything that needs tweaking. Update your documentation."
              ]}
            >
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                <strong>Target:</strong> You should cut your time in half. If not, refine the workflow.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={5}
              title="Teach Someone Else (Optional)"
              duration="10 min"
              steps={[
                "Optional but powerful: Show a colleague your workflow.",
                "Have them run through it with your documentation.",
                "Watch them use it. They'll find gaps you missed. Refine.",
                "Now you have a repeatable system others can use."
              ]}
            >
            </HandsOn>
          </section>

          {/* Track C: Claude Code Power User */}
          <section className="l1-section">
            <h2>Track C: The Claude Code Power User</h2>
            <p>
              Create an automated system using Claude Code, complete with SKILL.md and CLAUDE.md. This is for developers or advanced users.
            </p>

            <HandsOn
              stepNumber={1}
              title="Install & Authenticate Claude Code"
              duration="10 min"
              steps={[
                "If not already done: npm install -g @anthropic-ai/claude-code",
                "Get API key from console.anthropic.com/keys",
                "Run: claude-code auth and paste your key",
                "Verify: claude-code --version"
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Create SKILL.md"
              duration="10 min"
              steps={[
                "In your project folder, create a file: SKILL.md",
                "Write what the skill does, how to use it, steps, output format.",
                "Be clear so Claude understands your workflow.",
                "See example from Lesson 10."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Create CLAUDE.md (If Applicable)"
              duration="10 min"
              steps={[
                "If this is code-related: create CLAUDE.md in your project root.",
                "Define project structure, tech stack, code standards, how to run tests/build.",
                "This tells Claude how to work in YOUR project.",
                "See example from Lesson 10."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Give Claude Code a Real Autonomous Task"
              duration="30 min"
              steps={[
                "In your project folder, run: claude-code \"[Your task description]\"",
                "Give it something that would normally take 30+ minutes.",
                "Examples: analyze data and create report, organize files and create summary, process CSV and create visualization.",
                "Watch Claude Code work. It reads SKILL.md and CLAUDE.md automatically.",
                "Verify the output. If it's good, you've automated a real workflow."
              ]}
            >
              <Callout type="warning">
                Claude Code will ask for confirmation before taking destructive actions (deleting, modifying important files). Always review before approving.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={5}
              title="Document & Repeat"
              duration="15 min"
              steps={[
                "Document what Claude Code did (steps it took, decisions it made).",
                "Save your SKILL.md and CLAUDE.md in version control.",
                "Next time you need the same task done, run the same command.",
                "Refine your instructions based on results."
              ]}
            >
            </HandsOn>
          </section>

          {/* Bonus Challenges */}
          <section className="l1-section">
            <h2>Bonus Challenges (If You Want More)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff9e6', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ffe082' }}>
                <h4 style={{ marginTop: 0 }}>Bonus 1: Connect with MCP</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Add an MCP server (Gmail, Google Drive, Local Files) to your system. Make it truly integrated with your apps.
                </p>
              </div>

              <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #81d4fa' }}>
                <h4 style={{ marginTop: 0 }}>Bonus 2: Combine Tracks</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Start with Track B (workflow), then wrap it in Track A (Claude Project). Now you have both custom AI + multi-step automation.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ce93d8' }}>
                <h4 style={{ marginTop: 0 }}>Bonus 3: Share & Teach</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Show a colleague your system. Help them build their own. Teaching cements your learning.
                </p>
              </div>
            </div>
          </section>

          {/* Level Complete */}
          <section className="l1-section" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h2>Level 1 Complete!</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '1rem auto' }}>
              You've moved from understanding AI to BUILDING with AI. You can create custom tools, design workflows, run agents, and automate complex work. That's real power.
            </p>

            <div style={{ backgroundColor: '#e8f5e9', padding: '2rem', borderRadius: '8px', margin: '2rem auto', maxWidth: '700px', textAlign: 'left' }}>
              <h4 style={{ marginTop: 0 }}>What You Now Have</h4>
              <ul>
                <li>A working AI system you use weekly (or daily)</li>
                <li>Understanding of multi-step workflows</li>
                <li>A Claude Project (custom AI) built for your work</li>
                <li>Knowledge of agents and how to run them</li>
                <li>MCP connections linking AI to your apps</li>
                <li>Hands-on experience with Claude Code (or Cowork Mode)</li>
                <li>A personal AI use policy aligned with your values</li>
              </ul>
            </div>

            <h3 style={{ marginTop: '2.5rem' }}>What's Next?</h3>
            <p style={{ maxWidth: '700px', margin: '1rem auto', color: '#666' }}>
              You've completed Level 1 of this course. Level 2 goes even deeper: building teams with AI, using AI in specialized domains (healthcare, law, engineering, education), advanced safety and ethics, and emerging AI capabilities.
            </p>

            <p style={{ maxWidth: '700px', margin: '1.5rem auto', color: '#666', fontSize: '0.95rem', fontStyle: 'italic' }}>
              But first: use what you've built. Let it save you time. Let it become part of how you work. THEN come back for Level 2.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Not ready for Level 2? That's fine. You have everything you need. Check back when you're ready to go deeper.
              </p>
            </div>
          </section>

          {/* Final Reflection */}
          <section className="l1-section" style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
            <h3 style={{ marginTop: 0 }}>One Final Reflection</h3>
            <p>
              You started this course not knowing what AI could do. You end it with a working system that saves you real time. That's a big transformation in a short time.
            </p>
            <p>
              The most important thing you've learned: AI is a tool YOU control. You decide what it does. You decide whether to trust it. You decide how to use it ethically. That responsibility is yours.
            </p>
            <p>
              Use AI well. Use it responsibly. Stay curious. And don't stop learning.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
