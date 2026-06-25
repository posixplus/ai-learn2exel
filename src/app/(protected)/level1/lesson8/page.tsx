import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson8() {
  return (
    <div className="lesson-layout">
      <Sidebar level={1} currentLessonId="l1-8" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={1}
            lessonNumber={8}
            duration={55}
            title="AI Agents Explained"
            subtitle="Move beyond chat. Agents take goals and achieve them autonomously, using tools, planning, and self-correction."
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor']}
          />

          {/* Section 1: What Is an AI Agent? */}
          <section className="lesson-section">
            <h2>What Is an AI Agent?</h2>
            <p>
              An AI agent is an AI that can work autonomously toward a goal. You give it a task, and it figures out the steps, executes them, and delivers the result. You don't have to guide every step.
            </p>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Chatbot vs Agent (The Key Difference)</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#e3f2fd', borderBottom: '2px solid #2196f3' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem', borderRight: '1px solid #2196f3' }}>Chatbot</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem' }}>Agent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.75rem', borderRight: '1px solid #e0e0e0' }}>You: "Analyze this data."</td>
                    <td style={{ padding: '0.75rem' }}>You: "Analyze this data and email the results to my team."</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.75rem', borderRight: '1px solid #e0e0e0' }}>AI: Returns analysis. Waits for next message.</td>
                    <td style={{ padding: '0.75rem' }}>AI: Analyzes data, formats results, sends email, confirms done. All without asking.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.75rem', borderRight: '1px solid #e0e0e0' }}>You guide every step.</td>
                    <td style={{ padding: '0.75rem' }}>AI figures out steps and executes them.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', borderRight: '1px solid #e0e0e0' }}>Reactive (responds to you)</td>
                    <td style={{ padding: '0.75rem' }}>Proactive (works toward goal)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style={{ marginTop: '2rem' }}>4 Properties of an AI Agent</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
                <h5 style={{ marginTop: 0 }}>1. Goal-Directed</h5>
                <p style={{ fontSize: '0.95rem' }}>
                  Has a clear objective: "Write and schedule 5 social media posts for next week." Not "generate text."
                </p>
              </div>

              <div style={{ backgroundColor: '#d4edda', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #28a745' }}>
                <h5 style={{ marginTop: 0 }}>2. Has Tools</h5>
                <p style={{ fontSize: '0.95rem' }}>
                  Can use tools beyond just "thinking." Can read files, send emails, browse the web, execute code, use APIs.
                </p>
              </div>

              <div style={{ backgroundColor: '#d1ecf1', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #17a2b8' }}>
                <h5 style={{ marginTop: 0 }}>3. Plans Autonomously</h5>
                <p style={{ fontSize: '0.95rem' }}>
                  Breaks the goal into steps without you telling it. Doesn't ask permission for each step.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8d7da', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #dc3545' }}>
                <h5 style={{ marginTop: 0 }}>4. Self-Corrects</h5>
                <p style={{ fontSize: '0.95rem' }}>
                  If a step fails, it adapts. "Email failed? Try again." "Data missing? Ask for it differently."
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: The Agent Loop */}
          <section className="lesson-section">
            <h2>The Agent Loop: How Agents Work Internally</h2>
            <p>
              All agents follow the same basic loop: Observe → Think → Act → Observe (repeat).
            </p>

            <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px', marginTop: '1.5rem', textAlign: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '4px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>STEP 1</div>
                  <div style={{ fontWeight: 'bold' }}>OBSERVE</div>
                  <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>What's the current state? What tools are available?</div>
                </div>
                <div style={{ backgroundColor: '#fff3e0', padding: '1rem', borderRadius: '4px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>STEP 2</div>
                  <div style={{ fontWeight: 'bold' }}>THINK</div>
                  <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>What should I do next to reach my goal?</div>
                </div>
                <div style={{ backgroundColor: '#e8f5e9', padding: '1rem', borderRadius: '4px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>STEP 3</div>
                  <div style={{ fontWeight: 'bold' }}>ACT</div>
                  <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Execute the action (use a tool, write text, etc.)</div>
                </div>
                <div style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ↻
                </div>
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
                The agent loops back to OBSERVE after each action. It checks: Did it work? What's next? Until the goal is complete.
              </p>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Example: Agent Writing a Blog Post</h4>
            <div style={{ backgroundColor: '#faf8f4', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Goal:</strong> "Write a blog post about AI safety for beginners, include 2 credible sources, format as HTML, and save it."
              </div>

              <div style={{ marginBottom: '0.5rem' }}><strong>Loop 1:</strong></div>
              <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                Observe: No files yet, has access to web search and file writing.
                <br />
                Think: I need to research AI safety first.
                <br />
                Act: Search the web for "AI safety basics."
              </div>

              <div style={{ marginBottom: '0.5rem' }}><strong>Loop 2:</strong></div>
              <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                Observe: Got 5 search results. Two look credible.
                <br />
                Think: Good. I have sources. Now I'll outline the post.
                <br />
                Act: Create a post outline with intro, 3 key points, conclusion.
              </div>

              <div style={{ marginBottom: '0.5rem' }}><strong>Loop 3:</strong></div>
              <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                Observe: Outline done. No content yet.
                <br />
                Think: Write the full post using the outline.
                <br />
                Act: Write blog post content.
              </div>

              <div style={{ marginBottom: '0.5rem' }}><strong>Loop 4:</strong></div>
              <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                Observe: Post written. Not formatted yet.
                <br />
                Think: Format as HTML with proper tags.
                <br />
                Act: Convert to HTML with headings, paragraphs, links.
              </div>

              <div style={{ marginBottom: '0.5rem' }}><strong>Loop 5:</strong></div>
              <div style={{ marginLeft: '1rem' }}>
                Observe: HTML complete. Goal is to save it.
                <br />
                Think: Save the file.
                <br />
                Act: Write file to "blog_post_ai_safety.html".
                <br />
                Observe: Done. Goal complete.
              </div>
            </div>

            <p style={{ marginTop: '1.5rem' }}>
              The agent didn't ask permission between steps. It observed, thought, acted, and moved forward. That's what makes it an agent, not a chatbot.
            </p>
          </section>

          {/* Section 3: Real Agents Today */}
          <section className="lesson-section">
            <h2>Real Agents You Can Use Today</h2>

            <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#e3f2fd', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Claude Code (Anthropic)</h4>
                <p>
                  A CLI tool that runs Claude as an agent on your computer. Can read/write files, run code, execute commands. This is the most powerful for developers and power users.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>ChatGPT with Tools (OpenAI)</h4>
                <p>
                  In paid ChatGPT, you can enable code execution, web browsing, file uploads. The AI acts autonomously with these tools. Limited compared to Claude Code, but good for non-developers.
                </p>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Perplexity (Perplexity AI)</h4>
                <p>
                  An AI search engine that plans research queries, searches the web, and synthesizes results. Goals: deep research on any topic.
                </p>
              </div>

              <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>GitHub Copilot (Microsoft)</h4>
                <p>
                  Understands code context, suggests implementations, refactors code, writes tests. Acts autonomously with your codebase. For developers only.
                </p>
              </div>

              <div style={{ backgroundColor: '#f1f8e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Zapier with AI (Zapier)</h4>
                <p>
                  Connect 6000+ apps. AI decides which actions to take based on a goal. Example: "Archive emails, log them to a sheet, and send a summary weekly."
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Agentic Features in Claude */}
          <section className="lesson-section">
            <h2>Agentic Features in Claude</h2>
            <p>
              Claude has several agentic capabilities. In this course, we'll focus on Claude Code (the most powerful), but here's what all of them are:
            </p>

            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Claude's Agentic Toolkit</h4>
              <ul>
                <li><strong>Web Search:</strong> Claude can search the internet and cite sources. Goal: "Research recent AI regulations."</li>
                <li><strong>File Reading:</strong> You upload files (CSV, PDF, code). Claude reads and analyzes them autonomously.</li>
                <li><strong>Code Execution:</strong> Claude can write Python code and see the output. Test hypotheses, create visualizations.</li>
                <li><strong>Multi-Step Planning:</strong> Claude breaks complex tasks into steps and executes them without you guiding each one.</li>
                <li><strong>Claude Code:</strong> A CLI tool where Claude acts as a full agent on your computer (read/write files, run commands, code execution).</li>
                <li><strong>Cowork Mode:</strong> For non-developers, Claude Code lets you watch and collaborate as Claude works on your computer.</li>
              </ul>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Real Example: Multi-Step Agent Task</h4>
            <PromptBox label="Task: Analyze Website Trends">
              {`Your goal: "Visit the top 3 tech news websites. Find the most common topics in today's headlines. Create a summary visualization. Save as HTML."`}
            </PromptBox>

            <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
              With just this goal, Claude's web search and code execution would:
            </p>
            <ol style={{ fontSize: '0.95rem' }}>
              <li>Search each website for today's headlines</li>
              <li>Extract headline text</li>
              <li>Identify common topics (AI, crypto, startups, etc.)</li>
              <li>Write Python code to count frequencies</li>
              <li>Create a bar chart visualization</li>
              <li>Wrap it in HTML and save</li>
            </ol>

            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#666' }}>
              All because you stated the goal. No step-by-step prompting needed.
            </p>
          </section>

          {/* Section 5: When to Use Agents vs Chat */}
          <section className="lesson-section">
            <h2>When to Use Agents vs Chat (Decision Framework)</h2>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Use Chat When:</h4>
              <ul>
                <li>You need a quick answer or draft ("write an email", "explain this concept")</li>
                <li>You want to iterate and refine in a conversation</li>
                <li>The task is simple (one or two steps)</li>
                <li>You're exploring ideas and want feedback</li>
                <li>You need creative brainstorming</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Use Agents When:</h4>
              <ul>
                <li>The task has multiple clear steps (research, analyze, format, save)</li>
                <li>The AI needs to use tools (read files, write files, search, code)</li>
                <li>You want the AI to work while you do something else</li>
                <li>The task is repetitive and you want to automate it</li>
                <li>The AI needs to self-correct or adapt if something fails</li>
                <li>You want to hand off a goal and come back to a finished result</li>
              </ul>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Examples: Which Mode?</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem' }}>Task</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem' }}>Chat or Agent?</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem' }}>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>"Write a thank you email"</td>
                  <td style={{ padding: '0.75rem' }}>Chat</td>
                  <td style={{ padding: '0.75rem' }}>Quick, simple, one step</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>"Analyze this data file, create a chart, email results to team"</td>
                  <td style={{ padding: '0.75rem' }}>Agent</td>
                  <td style={{ padding: '0.75rem' }}>3 steps, needs tools, async</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>"Brainstorm ideas for a blog"</td>
                  <td style={{ padding: '0.75rem' }}>Chat</td>
                  <td style={{ padding: '0.75rem' }}>Iterative, creative, conversational</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>"Download my social media stats, analyze trends, create a report PDF"</td>
                  <td style={{ padding: '0.75rem' }}>Agent</td>
                  <td style={{ padding: '0.75rem' }}>Multiple tools, multi-step</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem' }}>"Explain how photosynthesis works"</td>
                  <td style={{ padding: '0.75rem' }}>Chat</td>
                  <td style={{ padding: '0.75rem' }}>Knowledge, no tools needed</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section 6: Safety & Trust */}
          <section className="lesson-section">
            <h2>Safety & Trust: When You Use Agents</h2>

            <Callout type="warning">
              <strong>Critical:</strong> Agents can take irreversible actions. They can delete files, send emails, execute commands. Before giving an agent a goal, think: "What's the worst that could happen?"
            </Callout>

            <h4 style={{ marginTop: '2rem' }}>Safety Rules for Agents</h4>
            <div style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <ol>
                <li><strong>Start with Reversible Tasks:</strong> Let agents read, analyze, and write. Don't let them delete or send without oversight first.</li>
                <li><strong>Human-in-the-Loop:</strong> For critical actions, ask the AI to confirm before executing. Example: "I'm about to send this email. Confirm?"</li>
                <li><strong>Clear Boundaries:</strong> Tell the agent what it CAN'T do. "Never delete folders. Never send emails without my approval."</li>
                <li><strong>Test First:</strong> Run your agent task on test data before real data. See what it does.</li>
                <li><strong>Monitor the First Run:</strong> Watch the agent work the first time. Understand its decision-making.</li>
                <li><strong>Backup Before Big Tasks:</strong> If an agent will modify important files, back them up first.</li>
              </ol>
            </div>

            <Callout type="tip">
              Claude Code has built-in safeguards. It asks for confirmation before:
              - Deleting files
              - Running system commands
              - Sending messages/emails
              - Making irreversible changes
            </Callout>
          </section>

          {/* Section 7: Simple Agent Workflows */}
          <section className="lesson-section">
            <h2>3 Simple Agent Workflows You Can Try</h2>

            <div style={{ marginTop: '1.5rem' }}>
              <h4>Workflow 1: Research Agent</h4>
              <p><strong>Goal:</strong> Deep research on a topic, with sources and synthesis.</p>
              <HandsOn
                stepNumber={0}
                title="Steps"
                duration="0"
                steps={[
                  "Tell Claude: 'Research [topic] with 5+ credible sources. Summarize key findings. Provide citations.'",
                  "Claude searches the web, reads sources, synthesizes results.",
                  "You get a comprehensive research summary with links."
                ]}
              >
              </HandsOn>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Workflow 2: Document Agent</h4>
              <p><strong>Goal:</strong> Process documents, extract insights, create summary.</p>
              <HandsOn
                stepNumber={0}
                title="Steps"
                duration="0"
                steps={[
                  "Upload a document (PDF, doc, spreadsheet).",
                  "Tell Claude: 'Analyze this document. Extract: key insights, action items, risks, next steps. Format as a summary.'",
                  "Claude reads the document, understands context, delivers structured insights."
                ]}
              >
              </HandsOn>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Workflow 3: Planning Agent</h4>
              <p><strong>Goal:</strong> Take a goal, create a detailed plan, break it into steps.</p>
              <HandsOn
                stepNumber={0}
                title="Steps"
                duration="0"
                steps={[
                  "Tell Claude: 'I want to [big goal]. Create a 4-week plan with weekly milestones, daily tasks, success metrics.'",
                  "Claude thinks through the goal, breaks it down, identifies dependencies.",
                  "You get a detailed, actionable plan."
                ]}
              >
              </HandsOn>
            </div>
          </section>

          {/* Section 8: Hands-On */}
          <section className="lesson-section">
            <h2>Hands-On: Your First Agent Task (3 Tracks)</h2>

            <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
              <strong>Choose ONE track below based on your comfort level.</strong> All three are valid ways to experience agents.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h4>Track A: Research Agent (For Everyone)</h4>
              <p style={{ color: '#666' }}>Difficulty: Easy | Time: 15-20 min</p>
              <HandsOn
                stepNumber={1}
                title="Conduct Research"
                duration="5 min"
                steps={[
                  "Go to claude.ai.",
                  "Tell Claude: 'Research [topic you care about, e.g., 'the latest AI safety concerns']. Find 3+ credible sources. Summarize the key insights and provide citations.'",
                  "Watch Claude work. It searches, reads sources, synthesizes."
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={2}
                title="Evaluate the Result"
                duration="10 min"
                steps={[
                  "Look at what Claude returned. Are the insights accurate?",
                  "Are the sources credible? Check them.",
                  "Ask Claude to refine: 'Go deeper on [specific insight]. I want more details.'",
                  "Note: This is Claude acting like an agent - planning steps, using tools (search), delivering results."
                ]}
              >
              </HandsOn>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Track B: Document Agent (For Everyone)</h4>
              <p style={{ color: '#666' }}>Difficulty: Easy | Time: 10-15 min</p>
              <HandsOn
                stepNumber={1}
                title="Find a Document"
                duration="3 min"
                steps={[
                  "Pick any document you have: PDF, Word doc, spreadsheet, long email, article.",
                  "Ideally something with real content (not a placeholder)."
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={2}
                title="Analyze It"
                duration="10 min"
                steps={[
                  "Go to claude.ai.",
                  "Upload your document.",
                  "Tell Claude: 'Analyze this document. Extract: main idea, key points (3-5 bullets), action items, any risks or concerns.'",
                  "Claude reads it, understands context, delivers structured insights."
                ]}
              >
              </HandsOn>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Track C: Code/Automation Agent (For Technical Users)</h4>
              <p style={{ color: '#666' }}>Difficulty: Medium | Time: 20-30 min</p>
              <HandsOn
                stepNumber={1}
                title="Set a Goal"
                duration="5 min"
                steps={[
                  "Think of something you could automate: process a CSV, create a chart, organize files, analyze data.",
                  "Example: 'Analyze sales data from this CSV. Create a visualization. Save as PNG.'"
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={2}
                title="Let Claude Do It"
                duration="15 min"
                steps={[
                  "Go to claude.ai.",
                  "Upload your data file (if any).",
                  "Tell Claude your goal.",
                  "Claude will: understand what you need, write code, run it, iterate if needed, deliver the result.",
                  "This is a full agent workflow - planning, coding, executing, self-correcting."
                ]}
              >
              </HandsOn>
            </div>
          </section>

          {/* QuickRef */}
          <section className="lesson-section">
            <QuickRef
              title="AI Agents Quick Reference"
              sections={[
                {
                  title: 'Agent vs Chatbot',
                  content: 'Agent: autonomous, multi-step, self-correcting | Chatbot: reactive, one-step, waits for guidance'
                },
                {
                  title: 'The Agent Loop',
                  content: 'Observe (current state) → Think (next step) → Act (execute) → Repeat until goal complete'
                },
                {
                  title: '4 Agent Properties',
                  content: 'Goal-directed | Has tools | Plans autonomously | Self-corrects'
                },
                {
                  title: 'Claude\'s Agentic Features',
                  content: 'Web search | File reading | Code execution | Multi-step planning | Claude Code | Cowork Mode'
                },
                {
                  title: 'When to Use Agents',
                  content: 'Multiple clear steps | Needs tools | Async work | Repetitive | Requires adaptation | Complex goal'
                },
                {
                  title: 'Safety Rules',
                  content: 'Start with reversible tasks | Human-in-the-loop for critical actions | Clear boundaries | Test first | Monitor first run | Backup before big tasks'
                }
              ]}
            />
          </section>

          <LessonNav
            lessonId="l1-8"
            prev={{ href: '/level1/lesson7', title: 'Custom AI Tools' }}
            next={{ href: '/level1/lesson9', title: 'MCP - Connect AI to Your World' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
