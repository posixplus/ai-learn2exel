import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson11() {
  return (
    <div className="lesson-layout">
      <Sidebar level={1} currentLessonId="l1-11" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={1}
            lessonNumber={11}
            duration={40}
            title="Responsible AI & What's Next"
            subtitle="Understand AI's limits, stay ethical, and keep learning as this technology evolves."
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor']}
          />

          {/* Section 1: Understanding Hallucinations */}
          <section className="lesson-section">
            <h2>Understanding Hallucinations</h2>
            <p>
              A "hallucination" is when an AI confidently gives you false information. The AI isn't lying intentionally — it's making a mistake, but it sounds convincing.
            </p>

            <Callout type="warning">
              <strong>Critical:</strong> AI can hallucinate with complete confidence. It might invent sources, statistics, or facts. Never trust AI output without verification, especially for important decisions.
            </Callout>

            <h4 style={{ marginTop: '1.5rem' }}>Why Hallucinations Happen</h4>
            <ol>
              <li><strong>Training gaps:</strong> The AI's training data might not cover a topic.</li>
              <li><strong>Pressure to complete:</strong> When asked to find information, the AI might "fill in" gaps instead of saying "I don't know."</li>
              <li><strong>Plausible sound:</strong> AI is very good at generating text that sounds right, even if it's wrong.</li>
              <li><strong>No real-world access:</strong> The AI can't verify current information or access real-time data (without tools like web search).</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem' }}>5 Ways to Reduce Hallucinations</h4>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #2196f3' }}>
                <strong>1. Ask for Sources</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  "Find sources for this claim." AI will be more careful if it has to cite.
                </p>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #2196f3' }}>
                <strong>2. Verify with Web Search</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  Use Claude with web search enabled for current information. Real sources reduce hallucinations.
                </p>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #2196f3' }}>
                <strong>3. Ask "Are You Certain?"</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  After an answer, ask: "Are you certain about this? What's your confidence level?" Forces more honest answers.
                </p>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #2196f3' }}>
                <strong>4. Test with Known Facts</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  Ask about something you know. See if AI gets it right. If yes, more trustworthy. If no, be cautious.
                </p>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #2196f3' }}>
                <strong>5. Cross-Check Important Info</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  For crucial decisions (medical, legal, financial), verify AI output through other sources.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Privacy & Data Safety */}
          <section className="lesson-section">
            <h2>Privacy & Data Safety: What You Should Know</h2>

            <h4 style={{ marginTop: '1.5rem' }}>What Happens to Your Data?</h4>
            <div style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ff9800' }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Tool</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>What Happens to Your Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem' }}><strong>Claude.ai (Claude)</strong></td>
                    <td style={{ padding: '0.5rem' }}>Stored for conversation history. Used to improve Claude (unless you opt out). Not used for training with new data.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem' }}><strong>ChatGPT (OpenAI)</strong></td>
                    <td style={{ padding: '0.5rem' }}>Stored. May be used to improve the model (depends on your settings). Separate privacy policy applies.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem' }}><strong>Gemini (Google)</strong></td>
                    <td style={{ padding: '0.5rem' }}>Stored. May be used for improvement. Linked to your Google account.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem' }}><strong>Claude Code (Local)</strong></td>
                    <td style={{ padding: '0.5rem' }}>Runs on your computer. No data sent to cloud (unless you upload files). Most private option.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="danger">
              <strong>Do NOT paste:</strong> Real patient data (medical records, SSNs, health information), Passwords or API keys, Credit card numbers, Real employee/customer names and data, Proprietary company information.
            </Callout>

            <h4 style={{ marginTop: '2rem' }}>Practical Rules</h4>
            <ol>
              <li>Use Claude Projects for sensitive work (they're more private).</li>
              <li>For healthcare data, use de-identified data only (remove names, IDs).</li>
              <li>Check your company's AI policy before using any AI tool with work data.</li>
              <li>Use Claude Code for local, sensitive work (it stays on your computer).</li>
              <li>If unsure, ask your IT/legal team before pasting sensitive data.</li>
            </ol>
          </section>

          {/* Section 3: Bias in AI */}
          <section className="lesson-section">
            <h2>Bias in AI: Why It Exists and How to Mitigate</h2>
            <p>
              AI models learn from human-created data. If that data contains bias, the AI will too. Understanding this is critical.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>Types of Bias</h4>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#f3e5f5', padding: '1rem', borderRadius: '6px' }}>
                <strong>Training Data Bias</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  The data used to train the AI underrepresents certain groups. Result: AI performs worse for those groups.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1rem', borderRadius: '6px' }}>
                <strong>Representation Bias</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  Certain professions, genders, or races are underrepresented in training data. Result: AI generates stereotypical outputs.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1rem', borderRadius: '6px' }}>
                <strong>Measurement Bias</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  How success is measured can be biased. Example: If training data only measures "productivity," it misses other valuable contributions.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1rem', borderRadius: '6px' }}>
                <strong>Aggregation Bias</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  One size doesn't fit all. A model trained on general population might not work well for specific groups with different needs.
                </p>
              </div>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Mitigation Strategies</h4>
            <ol>
              <li><strong>Know the limitations.</strong> Ask: "Was this trained on diverse data? What groups might be underrepresented?"</li>
              <li><strong>Test with diverse inputs.</strong> Try your AI with different names, professions, backgrounds. Does it behave differently?</li>
              <li><strong>Don't use AI for sensitive decisions alone.</strong> For hiring, lending, medical decisions, combine AI with human judgment.</li>
              <li><strong>Monitor outputs over time.</strong> If you notice patterns (e.g., AI treats certain groups differently), flag it.</li>
              <li><strong>Choose tools that disclose bias research.</strong> Some AI providers publish bias studies. Prefer transparent vendors.</li>
            </ol>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="lesson-section">
            <h2>Intellectual Property: Ownership and Legality</h2>

            <Callout type="info">
              <strong>Fair Use is evolving.</strong> This is a legally uncertain area. Best practice: disclose AI use, cite sources, and when in doubt, ask a lawyer.
            </Callout>

            <h4 style={{ marginTop: '1.5rem' }}>Key Questions</h4>

            <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h5 style={{ marginTop: 0 }}>Q: Who owns content I create with AI?</h5>
              <p>
                <strong>A:</strong> Usually you do. You own the output. But check the AI tool's terms. Some claim rights to your content.
              </p>
            </div>

            <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h5 style={{ marginTop: 0 }}>Q: Can I use AI to write something and publish it as my own?</h5>
              <p>
                <strong>A:</strong> Technically yes, but ethically? If the content is obviously AI-generated, disclosure is best practice. If it's hybrid (AI + your edits), cite the AI.
              </p>
            </div>

            <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h5 style={{ marginTop: 0 }}>Q: Can I train an AI on my copyrighted data?</h5>
              <p>
                <strong>A:</strong> No. Training on copyrighted material (books, movies, songs) without permission likely violates copyright. This is actively being litigated.
              </p>
            </div>

            <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h5 style={{ marginTop: 0 }}>Q: Does AI output ever plagiarize?</h5>
              <p>
                <strong>A:</strong> It's rare but possible. The AI might reproduce long passages from training data. If you're publishing, run through a plagiarism checker.
              </p>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Best Practices</h4>
            <ul>
              <li>Disclose AI use: "This article was written with help from Claude AI."</li>
              <li>Don't plagiarize inputs. Don't paste copyrighted books into AI and claim the output as your own.</li>
              <li>For published work, understand your industry's AI disclosure norms (they're still forming).</li>
              <li>If you use AI output that's very polished, review it for unintentional plagiarism.</li>
              <li>For business-critical work, consult legal counsel on AI usage.</li>
            </ul>
          </section>

          {/* Section 5: AI in the Workplace */}
          <section className="lesson-section">
            <h2>AI in the Workplace: Navigating Policy and Ethics</h2>

            <h4 style={{ marginTop: '1.5rem' }}>Step 1: Check Your Employer's Policy</h4>
            <p>
              Many companies have AI policies. Some allow it. Some restrict it. Some haven't decided. Find out your company's stance before using AI at work.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>Step 2: Transparency with Clients/Stakeholders</h4>
            <p>
              If you use AI to help a client, tell them. Don't hide it. Especially important in:
            </p>
            <ul>
              <li>Consulting (client needs to know you used AI)</li>
              <li>Creative work (if it's AI-generated or AI-assisted, disclose it)</li>
              <li>Healthcare/legal (very sensitive — check regulations)</li>
              <li>Competitive bids (transparency builds trust)</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem' }}>Step 3: AI Augments, Not Replaces</h4>
            <p>
              AI is a tool to make you faster and better. It's not a replacement for human judgment, creativity, or responsibility. Use it as a first draft, a research assistant, a brainstorm partner. But you're the decision-maker.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>Real Scenarios</h4>
            <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h5 style={{ marginTop: 0 }}>Scenario 1: Using AI for a Client Proposal</h5>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Your decision:</strong> Use AI to draft the proposal structure, then heavily customize it with your expertise.
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>What to do:</strong> Tell the client: "We used AI to draft initial structure, but all analysis is our expert work." Builds trust.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h5 style={{ marginTop: 0 }}>Scenario 2: Using AI to Help Grade Student Work</h5>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Your decision:</strong> Use AI to summarize student work, but grade yourself.
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>What to do:</strong> Tell students: "I use AI to help me review essays, but I grade them." Be transparent about your process.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h5 style={{ marginTop: 0 }}>Scenario 3: Using AI for Data Analysis</h5>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Your decision:</strong> Use Claude Code to analyze and visualize data, but verify the findings yourself.
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>What to do:</strong> Always double-check AI output. Especially for insights that are new or counterintuitive.
              </p>
            </div>
          </section>

          {/* Section 6: What's Next — 6 Trends */}
          <section className="lesson-section">
            <h2>What's Next: 6 AI Trends to Watch</h2>
            <p>
              AI is moving fast. Here are 6 trends shaping the future.
            </p>

            <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#e3f2fd', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
                <h5 style={{ marginTop: 0 }}>1. Multimodal AI</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  AI that works with text, images, video, and audio in one model. Example: describe a photo, ask questions about a video, get AI to write AND illustrate a story.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #9c27b0' }}>
                <h5 style={{ marginTop: 0 }}>2. Reasoning Models</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  AI that can think through complex multi-step problems. Less hallucinating, more accuracy on hard math/logic problems. Models like o1 leading the way.
                </p>
              </div>

              <div style={{ backgroundColor: '#e0f2f1', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #009688' }}>
                <h5 style={{ marginTop: 0 }}>3. Agents Everywhere</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  AI agents will become standard. Not just chatbots. AI that can manage your calendar, book meetings, handle expenses, run workflows autonomously.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffe0b2', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ff9800' }}>
                <h5 style={{ marginTop: 0 }}>4. Local AI</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  Smaller models that run on your computer or phone. No cloud required. More privacy. Trade-off: less powerful than cloud models.
                </p>
              </div>

              <div style={{ backgroundColor: '#f0f4c3', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #cddc39' }}>
                <h5 style={{ marginTop: 0 }}>5. Specialized Models</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  Instead of one general AI, specialized models for specific domains: medical AI, legal AI, coding AI. Each optimized for its field.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffebee', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ef5350' }}>
                <h5 style={{ marginTop: 0 }}>6. AI in Every App</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  AI won't be separate. It'll be built into Gmail, Slack, Sheets, your phone, your car. Not optional — just how software works.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: How to Stay Current */}
          <section className="lesson-section">
            <h2>How to Stay Current: Keep Learning</h2>
            <p>
              AI changes fast. What's true today might shift next month. Here's how to keep up without getting overwhelmed.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>5-Minute Daily Habit</h4>
            <PromptBox label="Daily AI Learning Routine">
              {`Monday: Skim one AI news source (e.g., The Neuron, Import AI)
Tuesday: Read one deep-dive article on AI in your field
Wednesday: Try a new AI feature or tool (10 min experiment)
Thursday: Listen to one podcast episode (while commuting/exercising)
Friday: Reflect: what did you learn? How can you apply it?

Time investment: ~25-30 minutes/week. That's it.

Sources to follow:
- The Neuron (AI news, 5 min reads)
- Import AI (deep research, weekly)
- Your field's AI newsletter (e.g., EdNews for teachers, MedRxiv for healthcare)
- Twitter/X (follow AI researchers)
- Podcasts: No Priors, AI Explained, The AI Podcast`}
            </PromptBox>

            <h4 style={{ marginTop: '2rem' }}>5 News Sources to Follow</h4>
            <ol style={{ fontSize: '0.95rem' }}>
              <li><strong>The Neuron:</strong> Short AI news summaries. Perfect if you have 5 minutes.</li>
              <li><strong>Import AI:</strong> Weekly deep dives. For people who want substance.</li>
              <li><strong>Hacker News (AI section):</strong> Community-curated AI news and discussion.</li>
              <li><strong>ArXiv (cs.AI):</strong> New research papers. Cutting edge but technical.</li>
              <li><strong>Your field's newsletter:</strong> Find the AI newsletter for your profession.</li>
            </ol>

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
              <strong>Pro tip:</strong> Don't try to read everything. Pick 1-2 sources and stick with them. Consistency matters more than comprehensiveness.
            </p>
          </section>

          {/* Section 8: Hands-On */}
          <section className="lesson-section">
            <h2>Hands-On: Create Your Personal AI Use Policy</h2>
            <p>
              No two people use AI exactly the same way. Create a personal policy that reflects your values and profession.
            </p>

            <HandsOn
              stepNumber={1}
              title="Reflect on Your Values"
              duration="5 min"
              steps={[
                "Ask yourself: What matters to me about AI use?",
                "Examples: Privacy? Accuracy? Transparency? Fair bias practices?",
                "Write down 3-5 core values."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Define Your Do's and Don'ts"
              duration="10 min"
              steps={[
                "I WILL... (e.g., 'I will disclose AI use to clients', 'I will fact-check critical outputs')",
                "I WON'T... (e.g., 'I won't paste patient data', 'I won't let AI make final decisions')",
                "I WILL VERIFY... (e.g., 'I will verify statistics', 'I will check for hallucinations')",
                "Write 3-5 in each category."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Define Your Tool Policy"
              duration="5 min"
              steps={[
                "For each AI tool you use (Claude, ChatGPT, etc.), decide:",
                "What data can I share? (public only, work data, sensitive data?)",
                "How will I use it? (daily, occasional, specific tasks?)",
                "Will I disclose it? (to clients, team, public?)",
                "Create a simple table or list."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Write It Down"
              duration="5 min"
              steps={[
                "Create a document called 'My AI Use Policy'.",
                "Format it nicely (this is for you, keep it accessible).",
                "Refer back to it monthly. Does it still match your values?"
              ]}
            >
              <Callout type="tip">
                Your policy isn't permanent. As you learn more about AI, update it. Let your experience guide you.
              </Callout>
            </HandsOn>
          </section>

          {/* QuickRef */}
          <section className="lesson-section">
            <QuickRef
              title="Responsible AI Quick Reference"
              sections={[
                {
                  title: 'Hallucinations',
                  content: 'AI can confidently state false info. Always verify, especially for important decisions. Ask for sources. Use web search.'
                },
                {
                  title: 'Privacy & Data',
                  content: 'Never paste: patient data, SSNs, passwords, credit cards, proprietary info. Use Claude Code for sensitive local work.'
                },
                {
                  title: 'Bias',
                  content: 'AI inherits bias from training data. Test with diverse inputs. Don\'t use alone for sensitive decisions. Monitor for patterns.'
                },
                {
                  title: 'IP & Copyright',
                  content: 'You own AI output (usually). Disclose AI use. Don\'t train on copyrighted material. Check plagiarism if publishing.'
                },
                {
                  title: 'Workplace AI',
                  content: 'Check company policy. Be transparent with clients. AI augments, doesn\'t replace. Always maintain human judgment.'
                },
                {
                  title: 'Staying Current',
                  content: 'Follow 1-2 AI news sources. 5 min daily. Try new tools. Reflect monthly. Join communities. Your learning never stops.'
                }
              ]}
            />
          </section>

          <LessonNav
            lessonId="l1-11"
            prev={{ href: '/level1/lesson10', title: 'Claude Code — Deep Dive' }}
            next={{ href: '/level1/capstone', title: 'Level 1 Capstone' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
