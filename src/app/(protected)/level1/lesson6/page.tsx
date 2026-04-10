import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson6() {
  return (
    <div className="lesson-layout">
      <Sidebar level={1} currentLessonId="l1-6" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={1}
            lessonNumber={6}
            duration={55}
            title="Advanced Prompting & Workflows"
            subtitle="Move beyond single prompts. Learn to chain prompts, manage context, and build multi-step AI workflows."
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor']}
          />

          {/* Section 1: Simple Prompts Hit a Ceiling */}
          <section className="lesson-section">
            <h2>Why Simple Prompts Hit a Ceiling</h2>
            <p>
              You've mastered the RACE framework. You can write a good prompt. But what happens when your task is genuinely complex?
            </p>
            <p>
              Asking an AI to do everything in one prompt is like asking a human to write a novel by just saying "write a book." You need to break it down into steps.
            </p>

            <Callout type="info">
              <strong>The Ceiling Problem:</strong> A single prompt gets you 80% of the way there, but the last 20% is where complexity lives. You can increase prompt detail (longer context), but there's a limit before the AI gets confused or forgets the beginning.
            </Callout>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffe6e6', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Single Prompt (Won't Work)</h4>
                <PromptBox label="Attempting Everything at Once">
                  {`Write a 5-page research report on climate change impacts on agriculture in sub-Saharan Africa, including 10 peer-reviewed sources, with a literature review, methodology, findings, and recommendations, in academic tone, with proper citations, ready to submit to a journal.`}
                </PromptBox>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  Result: Long, potentially inaccurate citations, mediocre quality because the AI is juggling too many constraints.
                </p>
              </div>

              <div style={{ backgroundColor: '#e6f2ff', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Chained Prompts (Will Work)</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Step 1:</strong> "Find 10 peer-reviewed papers on climate change and agriculture in Sub-Saharan Africa. For each, give me: title, authors, year, and one-sentence summary."
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Step 2:</strong> "Write a literature review synthesizing these 10 papers. Focus on common themes."
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Step 3:</strong> "Write the full research report..." (now the AI has context)
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem' }}>
              The chained approach gives the AI manageable steps. Each step builds on the last. The output quality jumps significantly.
            </p>
          </section>

          {/* Section 2: Prompt Chaining */}
          <section className="lesson-section">
            <h2>Prompt Chaining: The Power of Steps</h2>
            <p>
              Prompt chaining means running multiple prompts in sequence, where the output of one becomes the input to the next. It's how you build AI workflows.
            </p>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Example: A Research Report Workflow (4 Steps)</h4>

              <div style={{ marginBottom: '1.5rem' }}>
                <h5>Step 1: Research</h5>
                <PromptBox label="Find Sources">
                  {`You are a research librarian. Your job is to find authoritative sources on a topic. I need: 8-10 academic papers or reports on "renewable energy adoption barriers in developing countries." For each source, provide: title, authors, publication year, and a 1-2 sentence summary of the main finding. Format as a numbered list.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h5>Step 2: Synthesize</h5>
                <PromptBox label="Analyze the Papers">
                  {`You are a research analyst. I have these sources: [PASTE OUTPUT FROM STEP 1]. Your job is to identify 3-4 key themes that appear across these papers. For each theme, write 2-3 sentences explaining what the papers found. Do not add your own opinions.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h5>Step 3: Draft</h5>
                <PromptBox label="Write the Literature Review">
                  {`You are an academic writer. Using these themes: [PASTE OUTPUT FROM STEP 2], write a 1000-word literature review on renewable energy adoption barriers. Organize by theme. Use academic tone. Include a brief intro and conclusion.`}
                </PromptBox>
              </div>

              <div>
                <h5>Step 4: Polish</h5>
                <PromptBox label="Refine & Format">
                  {`You are a copy editor. Edit this literature review: [PASTE OUTPUT FROM STEP 3]. Check for: clarity, academic tone, flow between paragraphs, and proper transitions. Suggest 3-5 improvements and rewrite the full text with those improvements applied.`}
                </PromptBox>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666' }}>
              Notice: Each prompt is focused. Each step is manageable. The AI can do excellent work at each stage because it's not juggling 10 constraints at once.
            </p>
          </section>

          {/* Section 3: Context Management */}
          <section className="lesson-section">
            <h2>Context Management: The Token Window</h2>
            <p>
              AI models have a "context window" — a maximum amount of text they can process in one conversation. Once you exceed that, the AI forgets the beginning of your conversation.
            </p>

            <Callout type="info">
              <strong>Current context windows:</strong> Claude 3.5 Sonnet ~200k tokens, GPT-4o ~128k tokens, Gemini 2.0 ~1M tokens, Claude Opus ~200k tokens. One token ≈ 4 characters. So Claude can handle ~800,000 characters before hitting the limit.
            </Callout>

            <h4>The Problem: Long Conversations</h4>
            <p>
              You're writing a long report. You've been chatting with Claude for 20 messages. The conversation is now 50,000 tokens. You ask a question. Claude forgets details from message 1. It hallucinates. You get bad output.
            </p>

            <h4>The Solution: Summarize and Restart</h4>
            <p>
              When a conversation gets long (after ~5,000 tokens), do this:
            </p>
            <ol>
              <li>Copy the best output so far.</li>
              <li>Start a NEW conversation.</li>
              <li>In the first message, paste the output and your context: "Here's what we've done so far. Next step: [new task]"</li>
              <li>Continue from there.</li>
            </ol>

            <Callout type="tip">
              <strong>When to restart:</strong> After big steps in a workflow, paste a summary and continue. This ensures the AI always has clear context and doesn't "forget" your earlier work.
            </Callout>

            <p style={{ marginTop: '1.5rem' }}>
              Pro tip: In Claude Projects (we'll cover later), this is built-in. The AI never forgets your context because it's stored persistently. No restarts needed.
            </p>
          </section>

          {/* Section 4: Custom Instructions */}
          <section className="lesson-section">
            <h2>Custom Instructions: Persistent Personality</h2>
            <p>
              Custom Instructions tell an AI system "here's who I am, here's how I like to work, here are my preferences." Once set, they apply to EVERY conversation with that AI.
            </p>

            <Callout type="info">
              <strong>Where to find them:</strong> Claude → Projects tab (we'll learn this), ChatGPT → Settings → Personalization → Custom Instructions, Gemini → Will be added soon.
            </Callout>

            <p style={{ marginTop: '1.5rem' }}>
              Instead of repeating your context in every prompt, you set it once. Forever.
            </p>

            <h4>Example: Custom Instructions for a Business Analyst</h4>
            <PromptBox label="What a Business Analyst Would Put in Custom Instructions">
              {`ABOUT ME:
I'm a business analyst at a mid-size fintech company. I work with C-suite, product, and engineering teams.

MY PREFERENCES:
- Always structure responses with Executive Summary first, then Details
- Use data-driven language (avoid "I think" — say "The data shows")
- When I ask for analysis, include: Finding, Impact, Recommendation, Next Steps
- Use tables for comparisons; use bullet points for lists
- Keep explanations technical but accessible (avoid jargon without explanation)

MY WORKFLOW:
- I often need 1-page summaries and 5-page deep dives for the same topic
- I work with large datasets; feel free to ask for clarification on formatting
- I present to executives on Friday mornings; flag any uncertain claims

MY GUARDRAILS:
- Never include proprietary company info in examples
- Ask before using email/Slack tone — be formal unless told otherwise`}
            </PromptBox>

            <p style={{ marginTop: '1.5rem' }}>
              Now, every conversation with that AI automatically starts with that context. No need to repeat yourself. The AI understands your role, your preferences, your workflow, your constraints.
            </p>
          </section>

          {/* Section 5: Multi-Turn Strategies */}
          <section className="lesson-section">
            <h2>Multi-Turn Strategies: Advanced Conversation Tactics</h2>
            <p>
              A "turn" is one message from you and one response from the AI. Smart multi-turn strategies squeeze more value from the AI by structuring how you interact over multiple turns.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <h4>Strategy 1: Progressive Drill-Down</h4>
              <p>Start broad. Get output. Ask for deeper analysis on one piece. Keep drilling down.</p>
              <PromptBox label="Progressive Drill-Down Example">
                {`Turn 1: "Summarize the main barriers to renewable energy adoption."
Turn 2: "Focus on 'cost.' Why is it still a barrier even as solar gets cheaper?"
Turn 3: "You mentioned 'upfront capital.' For developing countries, what policies could reduce this barrier?"
Turn 4: "Give me 3 specific examples of countries that reduced upfront barriers with policy."`}
              </PromptBox>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Each turn builds on the last. You're not re-explaining; you're refining focus.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h4>Strategy 2: Critic Loop</h4>
              <p>Get a draft. Ask the AI to critique its own work. Refine based on the critique.</p>
              <PromptBox label="Critic Loop Example">
                {`Turn 1: [You provide output to edit]
Turn 2: "Critique this for: clarity, accuracy, and tone. What's weak?"
Turn 3: [AI gives itself critical feedback]
Turn 4: "Now rewrite fixing those issues."
Turn 5: [AI rewrites with improvements]`}
              </PromptBox>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                This forces deeper thinking and catches the AI's own mistakes.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h4>Strategy 3: Devil's Advocate</h4>
              <p>Propose an idea. Ask the AI to argue against it. Refine based on weaknesses found.</p>
              <PromptBox label="Devil's Advocate Example">
                {`Turn 1: "Here's my proposal for fixing X: [your idea]"
Turn 2: "Play devil's advocate. What are the 5 strongest arguments AGAINST this?"
Turn 3: [AI gives counterarguments]
Turn 4: "How would I respond to each of these?"
Turn 5: [AI helps you build counter-counterarguments]`}
              </PromptBox>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Strengthens your thinking before you present to others.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h4>Strategy 4: Multiple Perspectives</h4>
              <p>Ask the AI to approach the same problem from different angles in one conversation.</p>
              <PromptBox label="Multiple Perspectives Example">
                {`Turn 1: "Analyze this decision from a cost perspective."
Turn 2: "Now analyze the same decision from a user/customer perspective."
Turn 3: "Now from a risk/security perspective."
Turn 4: "Now from an employee/team perspective."
Turn 5: "Synthesize all 4 perspectives. What's the strongest recommendation?"`}
              </PromptBox>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Forces comprehensive thinking. Catches blind spots.
              </p>
            </div>
          </section>

          {/* Section 6: Real Workflow Examples */}
          <section className="lesson-section">
            <h2>3 Real Workflow Examples by Profession</h2>

            <div style={{ marginTop: '1.5rem' }}>
              <h4>Example 1: Teacher Creating Differentiated Lesson Materials (4 Steps)</h4>
              <p><strong>Goal:</strong> Create versions of the same lesson for advanced, on-level, and struggling students.</p>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 1: Plan the lesson</strong>
                <PromptBox label="Step 1">
                  {`You are an experienced elementary school teacher. I'm teaching fractions to 4th graders. Create a lesson plan that includes: learning objective, 2 concrete manipulatives activities, 1 real-world application, and 1 formative assessment. Keep it to 30 minutes total. Target on-level students (typical 4th grade math).`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 2: Create advanced version</strong>
                <PromptBox label="Step 2">
                  {`Using this lesson plan: [PASTE STEP 1 OUTPUT]. Modify it for advanced students (working at 5th-6th grade level). Add: one extension activity that introduces multiplication of fractions, and one challenge problem. Keep the same total time.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 3: Create struggling student version</strong>
                <PromptBox label="Step 3">
                  {`Using this lesson plan: [PASTE STEP 1 OUTPUT]. Modify it for students who struggle with fractions. Add: a pre-activity reviewing halves/fourths using pizza, more repetition with manipulatives, and a simplified assessment (verbal instead of written). Include specific language to use.`}
                </PromptBox>
              </div>

              <div>
                <strong>Step 4: Create parent communication</strong>
                <PromptBox label="Step 4">
                  {`Write a 1-paragraph note to parents explaining what we learned about fractions today and how they can practice at home with real objects (pizza, chocolate bars, cookies). Keep it encouraging and specific.`}
                </PromptBox>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Example 2: Business Analyst Writing Client Report (5 Steps)</h4>
              <p><strong>Goal:</strong> Create a professional report analyzing client data and recommending strategic changes.</p>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 1: Analyze the data</strong>
                <PromptBox label="Step 1">
                  {`You are a data analyst. I have client performance data: [PASTE DATA]. Calculate: total revenue, growth rate, top 3 products, top 3 customer segments, churn rate, and NPS trend. Format as a table with findings in plain language.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 2: Identify key insights</strong>
                <PromptBox label="Step 2">
                  {`Using this analysis: [PASTE STEP 1]. What are the 3-5 most important patterns? For each, explain the business implication (so what?). Format: Finding → Impact → One-sentence bottom line.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 3: Generate recommendations</strong>
                <PromptBox label="Step 3">
                  {`Based on these insights: [PASTE STEP 2]. Propose 3 strategic recommendations to improve revenue and customer retention. For each: What to do, Why (based on data), Expected impact, and Timeline. Be specific and actionable.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 4: Create executive summary</strong>
                <PromptBox label="Step 4">
                  {`Write a 1-page executive summary for the client's C-suite. Include: situation (data summary), key insights (3-5 bullets), recommendations (3 bullets), and expected impact. Use confident, business language. No jargon.`}
                </PromptBox>
              </div>

              <div>
                <strong>Step 5: Build a presentation outline</strong>
                <PromptBox label="Step 5">
                  {`Create a presentation outline (8 slides) for presenting this to the client. Include: Cover slide, Context, Data findings (2 slides), Insights (2 slides), Recommendations, and Next steps. Add bullet points for what to say on each slide.`}
                </PromptBox>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Example 3: Developer Writing Architecture Documentation (4 Steps)</h4>
              <p><strong>Goal:</strong> Document a new system so other developers can understand and maintain it.</p>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 1: High-level overview</strong>
                <PromptBox label="Step 1">
                  {`You are a technical writer. Here's a system architecture: [DESCRIBE SYSTEM]. Write a 200-word overview that a junior developer could understand. Include: what the system does, main components, why it was built this way, and key tech stack choices. Avoid jargon where possible.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 2: Component documentation</strong>
                <PromptBox label="Step 2">
                  {`Using this overview: [PASTE STEP 1]. For each component, write: name, purpose (2-3 sentences), responsibilities (bulleted), and dependencies (what it relies on). Format for easy scanning.`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <strong>Step 3: Data flow diagram description</strong>
                <PromptBox label="Step 3">
                  {`Describe the data flow through this system: [DESCRIBE FLOW]. Explain: how data enters, where it's processed, how it's stored, and how it exits. Use numbered steps. Include potential failure points.`}
                </PromptBox>
              </div>

              <div>
                <strong>Step 4: Troubleshooting guide</strong>
                <PromptBox label="Step 4">
                  {`Write a troubleshooting guide for common issues in this system. For each issue: name, symptoms, likely cause, and fix. Include where to look in the codebase for investigation.`}
                </PromptBox>
              </div>
            </div>
          </section>

          {/* Section 7: Hands-On */}
          <section className="lesson-section">
            <h2>Hands-On: Build Your First Multi-Step Workflow</h2>
            <HandsOn
              stepNumber={1}
              title="Choose Your Workflow"
              duration="5 min"
              steps={[
                "Pick a real task you do regularly that has 3-5 clear steps.",
                "Examples: writing a proposal, creating a lesson, analyzing data, planning a project, writing a blog post, giving feedback.",
                "Write down the steps in order."
              ]}
            >
              <p><strong>Quick prompt to get started:</strong> "Break down [your task] into 4-5 sequential steps, where each step's output feeds into the next."</p>
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Write a Prompt for Each Step"
              duration="20 min"
              steps={[
                "Using the RACE framework, write a prompt for Step 1. Test it in Claude or ChatGPT.",
                "Copy the output from Step 1.",
                "Write a prompt for Step 2. Paste Step 1 output into it. Test it.",
                "Repeat for remaining steps."
              ]}
            >
              <Callout type="tip">
                Keep each prompt focused. Don't ask the AI to do Steps 1-5 in one prompt. One step per prompt is the rule.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Document Your Workflow"
              duration="10 min"
              steps={[
                "Create a simple text file or Google Doc called '[Your Task] Workflow'.",
                "List the task name, the overall goal, and the 3-5 steps in order.",
                "For each step, paste your prompt and note how long it took to get good output.",
                "Save this somewhere you can find it later."
              ]}
            >
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                This becomes your template. Next time you do this task, you can reuse these prompts.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Test It Again"
              duration="15 min"
              steps={[
                "Use your workflow on a different instance of the same task (different lesson, different proposal, different data).",
                "Track what changes: Do all prompts still work? Are any tweaks needed?",
                "Update your prompts based on what you learned."
              ]}
            >
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Your prompts get better each time. After 3 iterations, they're really solid.
              </p>
            </HandsOn>
          </section>

          {/* QuickRef */}
          <section className="lesson-section">
            <QuickRef
              title="Multi-Step Workflow Quick Reference"
              sections={[
                {
                  title: 'The RACE Framework (Reminder)',
                  content: 'R = Role | A = Action | C = Context | E = Expectations'
                },
                {
                  title: 'When to Use Chaining',
                  content: 'Your task has 3+ clear steps. The output of one step feeds into the next. The task is complex enough that a single prompt confuses the AI.'
                },
                {
                  title: 'Prompt Chaining Rules',
                  content: '1. One step per prompt. 2. Paste prior output at the start. 3. Keep each prompt focused. 4. Test each step independently first.'
                },
                {
                  title: 'Context Window Management',
                  content: 'Restart conversations after ~5k-10k tokens. Summarize key output and paste at the start of the new conversation.'
                },
                {
                  title: 'Multi-Turn Strategies',
                  content: 'Progressive Drill-Down (go deeper), Critic Loop (self-critique), Devil\'s Advocate (stress-test), Multiple Perspectives (360 view).'
                },
                {
                  title: 'Custom Instructions',
                  content: 'Set once, apply forever. Include: role, preferences, workflow patterns, guardrails.'
                },
                {
                  title: 'When to Restart',
                  content: 'After major steps. When a conversation exceeds 5k-10k tokens. When you need a fresh perspective.'
                }
              ]}
            />
          </section>

          <LessonNav
            lessonId="l1-6"
            prev={{ href: '/level0/capstone', title: 'Level 0 Capstone' }}
            next={{ href: '/level1/lesson7', title: 'Custom AI Tools' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
