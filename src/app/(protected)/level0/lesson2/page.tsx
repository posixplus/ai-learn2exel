'use client'

import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import ProfessionSpotlight from '@/components/lesson/ProfessionSpotlight'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson2() {
  return (
    <div className="lesson-layout">
      <Sidebar level={0} currentLessonId="l0-2" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={0}
            lessonNumber={2}
            duration={50}
            title="The AI Landscape"
            subtitle="Meet the major AI tools and choose the right one for you"
            professions={['👩‍🏫 Teacher', '👨‍⚕️ Healthcare', '🎓 Student', '⚙️ Engineer', '💻 Developer', '💼 Business']}
          />

          {/* SECTION 1: MEET THE PLAYERS */}
          <section className="lesson-section">
            <h2>Section 1: Meet the Players</h2>
            <p>There are dozens of AI tools, but a handful of heavy-hitters dominate. Here are the ones you'll actually use.</p>

            <div className="ai-tool-grid">
              <div className="ai-tool-card">
                <div className="tool-header">
                  <h3>Claude</h3>
                  <p className="tool-maker">Anthropic</p>
                </div>
                <div className="tool-tags">
                  <span className="tag">Free</span>
                  <span className="tag">Paid</span>
                </div>
                <p className="tool-description">Exceptional reasoning, writing, and analysis. Known for honesty and safety. Best for long documents, nuanced tasks, and professional writing. No image generation, but excellent text reasoning.</p>
                <p className="tool-access">
                  <strong>Access:</strong> claude.ai, API, Claude Desktop app
                </p>
              </div>

              <div className="ai-tool-card">
                <div className="tool-header">
                  <h3>ChatGPT (GPT-5.6)</h3>
                  <p className="tool-maker">OpenAI</p>
                </div>
                <div className="tool-tags">
                  <span className="tag">Free</span>
                  <span className="tag">Paid</span>
                </div>
                <p className="tool-description">The original breakthrough. Excellent all-rounder with strong coding, image generation, browsing, and analysis. Huge plugin ecosystem. Often the most popular choice.</p>
                <p className="tool-access">
                  <strong>Access:</strong> chatgpt.com, API, desktop app
                </p>
              </div>

              <div className="ai-tool-card">
                <div className="tool-header">
                  <h3>Google Gemini</h3>
                  <p className="tool-maker">Google</p>
                </div>
                <div className="tool-tags">
                  <span className="tag">Free</span>
                  <span className="tag">Paid</span>
                </div>
                <p className="tool-description">Google's powerful AI with the most generous free tier. Deep integration with Google Workspace (Docs, Gmail, Sheets, Drive). Great for anyone already in the Google ecosystem.</p>
                <p className="tool-access">
                  <strong>Access:</strong> gemini.google.com, integrated in Google apps
                </p>
              </div>

              <div className="ai-tool-card">
                <div className="tool-header">
                  <h3>DeepSeek</h3>
                  <p className="tool-maker">DeepSeek AI</p>
                </div>
                <div className="tool-tags">
                  <span className="tag">Free</span>
                </div>
                <p className="tool-description">Chinese open-source model with strong coding and math abilities. Very capable and mostly free. Good ChatGPT alternative if you want to save money or prefer open-source models.</p>
                <p className="tool-access">
                  <strong>Access:</strong> chat.deepseek.com, open-source
                </p>
              </div>

              <div className="ai-tool-card">
                <div className="tool-header">
                  <h3>Meta Llama</h3>
                  <p className="tool-maker">Meta</p>
                </div>
                <div className="tool-tags">
                  <span className="tag">Free</span>
                </div>
                <p className="tool-description">Open-source model you can run locally on your computer. Privacy-first (no servers, no tracking). Available free through platforms like Llama.ai, Perplexity, and others. Best for privacy.</p>
                <p className="tool-access">
                  <strong>Access:</strong> llama.ai, Perplexity.ai, local installation
                </p>
              </div>

              <div className="ai-tool-card">
                <div className="tool-header">
                  <h3>Mistral</h3>
                  <p className="tool-maker">Mistral AI</p>
                </div>
                <div className="tool-tags">
                  <span className="tag">Free</span>
                  <span className="tag">Paid</span>
                </div>
                <p className="tool-description">European AI with strong multilingual capability. Available free via Le Chat. Good for privacy-conscious European users. Lighter weight, faster responses.</p>
                <p className="tool-access">
                  <strong>Access:</strong> le-chat.mistral.ai, API
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: COMPARISON TABLE */}
          <section className="lesson-section">
            <h2>Section 2: Feature Comparison</h2>
            <p>Here's how they stack up across features that matter to you.</p>

            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Claude</th>
                  <th>ChatGPT</th>
                  <th>Gemini</th>
                  <th>DeepSeek</th>
                  <th>Llama</th>
                  <th>Mistral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Free Tier</strong></td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                </tr>
                <tr>
                  <td><strong>Reasoning</strong></td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                  <td>Very Good</td>
                  <td>Very Good</td>
                  <td>Good</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td><strong>Writing Quality</strong></td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                  <td>Very Good</td>
                  <td>Very Good</td>
                  <td>Good</td>
                  <td>Very Good</td>
                </tr>
                <tr>
                  <td><strong>Coding</strong></td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                  <td>Very Good</td>
                  <td>Excellent</td>
                  <td>Good</td>
                  <td>Very Good</td>
                </tr>
                <tr>
                  <td><strong>Image Input</strong></td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>No</td>
                  <td>Limited</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Image Generation</strong></td>
                  <td>No</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Web Search</strong></td>
                  <td>Limited</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>No</td>
                  <td>Yes (on some)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>API Access</strong></td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                  <td>Yes ✓</td>
                </tr>
                <tr>
                  <td><strong>Privacy Focus</strong></td>
                  <td>Very Good</td>
                  <td>Good</td>
                  <td>Good</td>
                  <td>Good</td>
                  <td>Excellent (local)</td>
                  <td>Very Good</td>
                </tr>
                <tr>
                  <td><strong>Context Window</strong></td>
                  <td>200K-1M tokens</td>
                  <td>~1M tokens</td>
                  <td>Up to 2M tokens</td>
                  <td>128K tokens</td>
                  <td>Varies</td>
                  <td>128K tokens</td>
                </tr>
              </tbody>
            </table>

            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              <em>Note: Features and pricing change frequently. Check official sites for current details. Context window = how much text you can give it at once.</em>
            </p>
          </section>

          {/* SECTION 3: FREE VS PAID */}
          <section className="lesson-section">
            <h2>Section 3: Free vs Paid: What You Actually Get</h2>

            <Callout
              type="tip"
              title="The Truth About Free AI"
            >
              All major AI tools have capable free tiers. You do NOT need to pay to get real value. Start free, upgrade only if you hit limits. Most people never do.
            </Callout>

            <h3>Claude (Anthropic)</h3>
            <ul>
              <li><strong>Free:</strong> Limited messages per day, a large context window, access to a recent model. Good for students, hobbyists, and experimentation.</li>
              <li><strong>Claude Pro ($20/month):</strong> Unlimited messages, earlier access to new features, faster responses. Worth it if you use AI multiple hours a day.</li>
            </ul>

            <h3>ChatGPT (OpenAI)</h3>
            <ul>
              <li><strong>Free:</strong> Runs the small GPT-5.6 Luna model with daily usage limits and basic features. Fine for casual use.</li>
              <li><strong>ChatGPT Go ($8/month):</strong> Budget tier with higher limits than Free. Worth it if you hit the free cap regularly but don&apos;t need the flagship model.</li>
              <li><strong>ChatGPT Plus ($20/month):</strong> Access to the flagship GPT-5.6 Sol, image generation, web browsing, and agent features. Best all-rounder for power users.</li>
            </ul>

            <h3>Gemini (Google)</h3>
            <ul>
              <li><strong>Free:</strong> Very generous-daily limits are high. Works in Gmail, Docs, Sheets, Drive. Great value if you use Google Workspace.</li>
              <li><strong>Gemini Advanced ($20/month):</strong> Higher usage limits, access to the latest Gemini models (such as Gemini 3.8 Flash and 3.1 Pro), better performance. Not necessary for most people.</li>
            </ul>

            <h3>DeepSeek</h3>
            <ul>
              <li><strong>Free:</strong> Everything free. Surprisingly good. Limited daily messages, but enough for most uses. Extremely good value.</li>
              <li><strong>Paid:</strong> Optional paid tier available but rarely needed.</li>
            </ul>

            <h3>Llama & Mistral</h3>
            <ul>
              <li><strong>Free:</strong> Completely free, no limits (on public platforms like Llama.ai). Or run locally for absolute zero cost.</li>
              <li><strong>Paid:</strong> Some platforms charge for API usage or faster responses, but free options always exist.</li>
            </ul>
          </section>

          {/* SECTION 4: DECISION GUIDE */}
          <section className="lesson-section">
            <h2>Section 4: Which AI Should I Use?</h2>

            <Callout
              type="info"
              title="Quick Decision Guide"
            >
              <ul style={{ margin: '0.5rem 0' }}>
                <li><strong>For writing & editing:</strong> Claude (best prose quality)</li>
                <li><strong>For research with web access:</strong> ChatGPT or Gemini</li>
                <li><strong>For coding:</strong> Claude or ChatGPT (slightly edge to Claude)</li>
                <li><strong>For free heavy usage:</strong> Gemini or DeepSeek</li>
                <li><strong>For privacy-first:</strong> Claude or local Llama</li>
                <li><strong>If you use Google Workspace:</strong> Gemini (built-in integration)</li>
                <li><strong>For trying before committing:</strong> All of them (start with free)</li>
              </ul>
            </Callout>

            <h3>Start Here: The Three-Tool Setup</h3>
            <p>If you're just starting, I recommend having three tools at your disposal:</p>
            <ol>
              <li><strong>Claude</strong> for writing, reasoning, and long documents. The best thinker.</li>
              <li><strong>ChatGPT</strong> for web search, image generation, and when you need a second opinion. The all-rounder.</li>
              <li><strong>Gemini</strong> if you use Google Workspace, or DeepSeek if you want free everything. The supplementary tool.</li>
            </ol>
            <p>All three have generous free tiers. Spend a week with each. You'll develop a preference. Many professionals use 2-3 tools regularly.</p>
          </section>

          {/* SECTION 5: HANDS-ON */}
          <section className="lesson-section">
            <h2>Section 5: Hands-On - The Side-by-Side Test</h2>

            <HandsOn
              title="Compare Two AI Tools Side-by-Side"
              description="The best way to understand differences is to see them with your own eyes. You're going to give the same prompt to two different tools and compare the responses."
              steps={[
                "Open two browser tabs: one with Claude (claude.ai) and one with ChatGPT (chatgpt.com). Use free versions.",
                "Copy the prompt below into both tabs (or rephrase it naturally).",
                "Read both responses and compare: Which is clearer? Which is more concise? Which matches your style better?",
                "Pay attention to tone, structure, and depth. You'll start to see their personalities.",
                "Try the same prompt with Gemini or DeepSeek as a third opinion.",
                "After 3-4 comparisons, you'll have a feel for which tool you prefer.",
              ]}
            />

            <PromptBox
              label="COMPARISON PROMPT"
              text={`I need to write a professional email declining a meeting invitation while keeping the relationship warm. The meeting was about a project I'm genuinely too busy for. The requester is a colleague I respect and want to stay on good terms with. Give me a draft email (keep it concise, 3-4 sentences).`}
            />

            <div style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
              <p><strong>What to notice:</strong></p>
              <ul>
                <li>Does the response sound natural or corporate-robotic?</li>
                <li>How much explanation is included? Too much? Too little?</li>
                <li>Does the tone match what you'd actually write?</li>
                <li>Would you send it as-is or does it need tweaking?</li>
              </ul>
            </div>
          </section>

          {/* SECTION 6: PROFESSION SPOTLIGHTS */}
          <section className="lesson-section">
            <h2>Section 6: Best Tools by Profession</h2>

            <ProfessionSpotlight
              tabs={[
                {
                  profession: '👩‍🏫 Teacher',
                  title: 'Teacher',
                  content: (
                    <>
                      <p><strong>Best choice: Claude or ChatGPT</strong></p>
                      <p>Teachers need writing quality and reasoning. Claude excels at creating lesson plans and explaining concepts at different levels. ChatGPT's plugins for creating quizzes and worksheets are useful.</p>
                      <p><strong>Key use case:</strong> Lesson planning, differentiated instruction, parent communication</p>
                      <PromptBox
                        text={`I teach 8th grade English. Create a discussion guide for "To Kill a Mockingbird" that helps students understand the main themes without spoiling the ending. Include 5 good discussion questions.`}
                      />
                    </>
                  ),
                },
                {
                  profession: '👨‍⚕️ Healthcare',
                  title: 'Healthcare',
                  content: (
                    <>
                      <p><strong>Best choice: Claude or ChatGPT</strong></p>
                      <p>Healthcare workers need clear explanations and reliability. Claude is particularly good at explaining medical concepts in patient-friendly language. Both tools can help with documentation and patient education.</p>
                      <p><strong>Key use case:</strong> Patient communication, documentation, understanding research</p>
                      <PromptBox
                        text={`Write a brief explanation of what congestive heart failure means for a patient with a high school education. Include 3 lifestyle changes that help manage it. Avoid medical jargon.`}
                      />
                    </>
                  ),
                },
                {
                  profession: '🎓 Student',
                  title: 'Student',
                  content: (
                    <>
                      <p><strong>Best choice: Any free tool</strong></p>
                      <p>Students should start with free options. Claude is best for deep understanding, ChatGPT for quick answers, Gemini if using Google Workspace. All are excellent for studying.</p>
                      <p><strong>Key use case:</strong> Understanding concepts, essay feedback, test prep, research summaries</p>
                      <PromptBox
                        text={`I'm studying calculus and don't understand why the derivative represents the rate of change. Explain it using everyday examples, like driving a car. Make it intuitive, not mathematical.`}
                      />
                    </>
                  ),
                },
                {
                  profession: '⚙️ Engineer',
                  title: 'Engineer',
                  content: (
                    <>
                      <p><strong>Best choice: Claude or ChatGPT</strong></p>
                      <p>Engineers use AI for documentation, explaining to non-technical stakeholders, and problem-solving. Claude excels at clear technical writing. ChatGPT good for code-heavy tasks.</p>
                      <p><strong>Key use case:</strong> Technical reports, explaining to non-engineers, troubleshooting guides, documentation</p>
                      <PromptBox
                        text={`I need to explain why we need to upgrade the ventilation system to our facilities manager (non-engineer). Write a 2-paragraph explanation covering: current issue, why it matters, and what upgrading fixes.`}
                      />
                    </>
                  ),
                },
                {
                  profession: '💻 Developer',
                  title: 'Developer',
                  content: (
                    <>
                      <p><strong>Best choice: Claude or ChatGPT</strong></p>
                      <p>Developers use AI for code review, debugging, and writing tests. Claude slightly better at complex reasoning and code quality. ChatGPT has a larger plugin ecosystem. Both handle coding well.</p>
                      <p><strong>Key use case:</strong> Code review, bug fixing, writing tests, learning new frameworks, documentation</p>
                      <PromptBox
                        text={`Review this React component and suggest improvements for: performance, readability, and error handling. What edge cases am I missing? [paste code]`}
                      />
                    </>
                  ),
                },
                {
                  profession: '💼 Business',
                  title: 'Business',
                  content: (
                    <>
                      <p><strong>Best choice: Gemini (if using Google) or Claude</strong></p>
                      <p>Business professionals use AI for writing, research, and analysis. Gemini integrates with Gmail and Docs for seamless workflows. Claude for clear writing and complex analysis.</p>
                      <p><strong>Key use case:</strong> Email drafting, meeting summaries, client briefs, proposal writing, market research</p>
                      <PromptBox
                        text={`Summarize the key points from this earnings report and identify 3 strategic insights. [paste report text]`}
                      />
                    </>
                  ),
                },
              ]}
            />
          </section>

          {/* SECTION 7: QUICK REFERENCE */}
          <section className="lesson-section">
            <QuickRef
              title="Lesson 2 - Quick Reference"
              items={[
                {
                  heading: 'The Big Three',
                  points: [
                    'Claude (Anthropic) - Best reasoning & writing, privacy-focused',
                    'ChatGPT (OpenAI) - Best all-rounder, image generation, web search',
                    'Gemini (Google) - Best free tier, integrates with Google Workspace',
                  ],
                },
                {
                  heading: 'Other Solid Options',
                  points: [
                    'DeepSeek - Free, strong coding, good alternative to ChatGPT',
                    'Llama (Meta) - Open-source, can run locally, privacy-first',
                    'Mistral - European option, good multilingual support',
                  ],
                },
                {
                  heading: 'Pricing Reality',
                  points: [
                    'All have free tiers that are genuinely capable',
                    'Paid tiers: ~$20/month for unlimited usage',
                    'Start free. Only upgrade if you hit limits.',
                    'Most individuals never need to pay',
                  ],
                },
                {
                  heading: 'Tool URLs',
                  points: [
                    'Claude: claude.ai',
                    'ChatGPT: chatgpt.com',
                    'Gemini: gemini.google.com',
                    'DeepSeek: chat.deepseek.com',
                    'Llama: llama.ai or perplexity.ai',
                  ],
                },
              ]}
            />
          </section>

          <LessonNav
            lessonId="l0-2"
            prev={{ href: '/level0/lesson1', title: 'What is AI, ML & LLMs?' }}
            next={{ href: '/level0/lesson3', title: 'Your First Real Conversations' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
