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

export default function Lesson5() {
  return (
    <div className="lesson-layout">
      <Sidebar level={0} currentLessonId="l0-5" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={0}
            lessonNumber={5}
            duration={65}
            title="Prompt Engineering 101"
            subtitle="Advanced prompting techniques, privacy rules, and what never to share with AI"
            professions={['👩‍🏫 Teacher', '👨‍⚕️ Healthcare', '🎓 Student', '⚙️ Engineer', '💻 Developer', '💼 Business']}
          />

          {/* SECTION 1: WHY PROMPTING IS A SKILL */}
          <section className="lesson-section">
            <h2>Section 1: Why Prompting Is a Skill</h2>
            <p>The difference between a mediocre AI response and an excellent one usually isn't the AI—it's how you ask. Here's the proof.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h3 style={{ color: '#dc2626', margin: '0 0 1rem 0' }}>WEAK PROMPT</h3>
                <PromptBox
                  text="Write a business email"
                />
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
                  <strong>Result:</strong> Generic, formal, sounds like every other corporate email.
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>
                  No context. No audience. No tone. AI guesses and gets it wrong.
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #16a34a' }}>
                <h3 style={{ color: '#16a34a', margin: '0 0 1rem 0' }}>ENGINEERED PROMPT</h3>
                <PromptBox
                  text={`You are a professional business writer. Write a brief, friendly email from a project manager to a client explaining a 2-week delay in deliverables. The client is generally understanding but values transparency. Tone: apologetic but confident. Length: 3 short paragraphs. End with a concrete next step.`}
                />
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
                  <strong>Result:</strong> Personal, appropriate tone, actually ready to send.
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>
                  Everything specified: role, task, audience, tone, length, structure.
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
              <strong>The pattern:</strong> Same model, same AI, completely different output. Better prompting = better results. It's a learnable skill.
            </p>
          </section>

          {/* SECTION 2: ZERO-SHOT PROMPTING */}
          <section className="lesson-section">
            <h2>Section 2: Zero-Shot Prompting</h2>
            <p>Zero-shot means: "I'm asking you something you weren't explicitly trained on, with no examples." AI tries to figure it out from general knowledge.</p>

            <h3>When to use Zero-Shot:</h3>
            <ul>
              <li>Simple, straightforward requests</li>
              <li>Asking for something common (writing, explaining, analyzing)</li>
              <li>You're not sure what you want yet (brainstorming)</li>
            </ul>

            <h3>The limitation:</h3>
            <p>AI has to guess your style, format, tone, and depth. It might get it wrong.</p>

            <h3>Three Zero-Shot Examples:</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderTop: '4px solid #3b82f6' }}>
                <h4 style={{ margin: '0 0 0.75rem 0' }}>Example 1: Simple Question</h4>
                <PromptBox
                  text="What's the difference between machine learning and deep learning?"
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Good for:</em> Quick facts, explanations, summaries
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderTop: '4px solid #3b82f6' }}>
                <h4 style={{ margin: '0 0 0.75rem 0' }}>Example 2: Open-Ended</h4>
                <PromptBox
                  text="Give me ideas for improving customer retention at an e-commerce company."
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Good for:</em> Brainstorming, generating options
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderTop: '4px solid #3b82f6' }}>
                <h4 style={{ margin: '0 0 0.75rem 0' }}>Example 3: Creative Task</h4>
                <PromptBox
                  text="Write a funny poem about procrastination."
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Good for:</em> Creative work, when you don't care about the exact format
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '3px solid #2563eb' }}>
              <strong>Pro tip:</strong> Zero-shot is fast and often good enough. Don't over-engineer every prompt. But when you need something specific, move to few-shot or chain-of-thought.
            </p>
          </section>

          {/* SECTION 3: FEW-SHOT PROMPTING */}
          <section className="lesson-section">
            <h2>Section 3: Few-Shot Prompting</h2>
            <p>Few-shot means: "Here are examples of what I want. Now do more of that." It's more powerful than zero-shot because AI sees the pattern.</p>

            <h3>When to use Few-Shot:</h3>
            <ul>
              <li>You have a specific style or format you want copied</li>
              <li>You've done something once and want consistency</li>
              <li>Zero-shot got close but wasn't quite right</li>
            </ul>

            <h3>Why it works:</h3>
            <p>AI is a pattern-matcher. Showing it 2-3 examples is like saying "here's the pattern I want"—much clearer than describing it.</p>

            <h3>Example: Product Descriptions</h3>

            <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', margin: '1.5rem 0', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Here are 2 example product descriptions (your style):</p>

              <PromptBox
                label="Example 1"
                text={`Ceramic Coffee Mug | 12oz capacity | Microwave and dishwasher safe | Heat-resistant glaze | Color: Ocean Blue`}
              />

              <PromptBox
                label="Example 2"
                text={`Bamboo Cutting Board | 18" x 12" | Sustainably harvested | Naturally antibacterial | Knife-friendly surface | Perfect for prep and serving`}
              />

              <p style={{ margin: '1rem 0 0 0', fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>
                Notice: short, benefit-focused, includes key details, uses pipes to separate specs, conversational but professional.
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#fffbeb', borderRadius: '8px', margin: '1.5rem 0', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Now the prompt:</p>

              <PromptBox
                text={`Write a product description for a stainless steel water bottle in the same style as the examples above. Include: capacity, material, key features, and one lifestyle benefit. Keep it concise.`}
              />
            </div>

            <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '3px solid #2563eb' }}>
              <strong>The magic:</strong> AI sees the pattern—brief, benefit-focused, feature-structured—and copies it for the new product. Without examples, it might write a paragraph. With examples, it nails your style.
            </p>
          </section>

          {/* SECTION 4: CHAIN-OF-THOUGHT */}
          <section className="lesson-section">
            <h2>Section 4: Chain-of-Thought Prompting</h2>
            <p>Chain-of-thought means: "Think step by step before you answer." It forces AI to work through complex problems methodically instead of guessing.</p>

            <h3>When to use Chain-of-Thought:</h3>
            <ul>
              <li>Logic puzzles or reasoning problems</li>
              <li>Multi-step decisions</li>
              <li>Math or analysis questions</li>
              <li>Anything where the answer is "it depends"</li>
            </ul>

            <h3>Example: Without Chain-of-Thought</h3>

            <div style={{ padding: '1.5rem', backgroundColor: '#fef2f2', borderRadius: '8px', margin: '1rem 0', borderLeft: '4px solid #ef4444' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#dc2626' }}>❌ Without CoT</p>
              <PromptBox
                text={`A farmer has 12 cows. He sells 3 and buys 5. A cow costs $800 to feed per year. How much does he spend on cow feed annually?`}
              />
              <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: '#666' }}>
                AI might answer: "He spends $9,600 annually." (Wrong—it's $12,800 for 14 cows)
              </p>
            </div>

            <h3>Example: With Chain-of-Thought</h3>

            <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', margin: '1rem 0', borderLeft: '4px solid #16a34a' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#16a34a' }}>✓ With CoT</p>
              <PromptBox
                text={`Solve this step by step: A farmer has 12 cows. He sells 3 and buys 5. A cow costs $800 to feed per year. How much does he spend on cow feed annually? Think through: 1) Current herd size, 2) After selling and buying, 3) Total feed cost.`}
              />
              <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: '#666' }}>
                AI works through: 12 - 3 + 5 = 14 cows. 14 × $800 = $11,200. Correct!
              </p>
            </div>

            <Callout
              type="tip"
              title="Magic Words for Chain-of-Thought"
            >
              Just add these phrases to any complex prompt:
              <ul style={{ marginTop: '0.5rem', marginBottom: '0' }}>
                <li>"Think step by step"</li>
                <li>"Work through this carefully"</li>
                <li>"Show your reasoning"</li>
                <li>"Break this into steps: 1) ... 2) ... 3)"</li>
              </ul>
              Accuracy often jumps 15-25% with just these phrases.
            </Callout>
          </section>

          {/* SECTION 5: ROLE PROMPTING */}
          <section className="lesson-section">
            <h2>Section 5: Role Prompting</h2>
            <p>Give AI a role with deep expertise, and it'll answer from that perspective. Same question, different expert = different (and often better) answers.</p>

            <h3>The Magic Phrase:</h3>
            <p style={{ padding: '1rem', backgroundColor: '#fffbeb', borderRadius: '6px', borderLeft: '3px solid #f59e0b', margin: '1rem 0' }}>
              "You are an expert [field] with 20 years of experience who explains complex things simply and practically."
            </p>

            <h3>Example: Same Task, Four Different Roles</h3>

            <p style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#666' }}>
              Task: "Explain what makes a good website."
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderTop: '4px solid #0284c7' }}>
                <h4 style={{ color: '#0284c7', margin: '0 0 0.75rem 0' }}>Financial Advisor's Answer</h4>
                <PromptBox
                  text="You are a financial advisor. What makes a good website for a financial services company?"
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Focus:</em> Trust, security, compliance, conversions
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderTop: '4px solid #7c3aed' }}>
                <h4 style={{ color: '#7c3aed', margin: '0 0 0.75rem 0' }}>Skeptical Journalist's Answer</h4>
                <PromptBox
                  text="You are a skeptical journalist. What makes a good website? Be critical."
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Focus:</em> Credibility, sourcing, bias, manipulation tactics
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', borderTop: '4px solid #16a34a' }}>
                <h4 style={{ color: '#16a34a', margin: '0 0 0.75rem 0' }}>UX Designer's Answer</h4>
                <PromptBox
                  text="You are a UX designer. What makes a good website?"
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Focus:</em> Usability, accessibility, flow, user journey
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#fef2f2', borderRadius: '8px', borderTop: '4px solid #ef4444' }}>
                <h4 style={{ color: '#dc2626', margin: '0 0 0.75rem 0' }}>Stand-Up Comedian's Answer</h4>
                <PromptBox
                  text="You are a stand-up comedian. What makes a good website? Be funny."
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Focus:</em> Absurd design trends, user frustrations, humor
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '3px solid #2563eb' }}>
              <strong>Why it works:</strong> Each role has different priorities and knowledge. A financial advisor thinks about trust and security. A comedian thinks about what's ridiculous. Role shapes the answer.
            </p>
          </section>

          {/* SECTION 6: SYSTEM PROMPTS & CUSTOM INSTRUCTIONS */}
          <section className="lesson-section">
            <h2>Section 6: System Prompts & Custom Instructions</h2>
            <p>Instead of repeating context in every prompt, set up "standing instructions" that apply to all your conversations. It's like configuring AI once, then using it forever.</p>

            <h3>What They Are:</h3>
            <ul>
              <li><strong>System Prompt:</strong> A persistent instruction that shapes every response</li>
              <li><strong>Custom Instructions:</strong> Available in ChatGPT and Gemini (called "Gems")</li>
              <li><strong>Claude Projects:</strong> Project Instructions in Claude (same idea)</li>
            </ul>

            <h3>Where to Set Them:</h3>
            <ul>
              <li><strong>Claude:</strong> Create a "Project" → "Project Instructions"</li>
              <li><strong>ChatGPT:</strong> Settings → "Custom Instructions" (free tier)</li>
              <li><strong>Gemini:</strong> Create a "Gem" and set instructions there</li>
            </ul>

            <h3>Example Personal System Prompt:</h3>

            <PromptBox
              label="SYSTEM PROMPT TEMPLATE"
              text={`I am a [your profession] working in [industry/context].
My main goals when using AI: [goal 1], [goal 2], [goal 3]
Communication style I prefer: [bullet points or prose], [formal/casual], [brief/detailed]
Always: [things AI should always do]
Never: [things AI should never do]
When uncertain: [tell me / make your best guess and note it]`}
            />

            <h3>Real Example for a Marketing Manager:</h3>

            <PromptBox
              label="REAL SYSTEM PROMPT"
              text={`I am a marketing manager at a B2B SaaS startup.
My main goals: improve our email campaigns, write clear product copy, develop customer research insights
Communication style I prefer: bullet points, professional but conversational, concise (no fluff)
Always: fact-check claims before including them, ask clarifying questions if my request is vague, suggest alternatives
Never: use marketing clichés like "game-changing" or "revolutionary", assume our customers are highly technical
When uncertain: ask me which direction I'd prefer`}
            />

            <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a' }}>
              <strong>The payoff:</strong> After setting this up once, every conversation with AI is automatically tuned to your needs. You never have to repeat context. It's worth 10 minutes to set up.
            </p>
          </section>

          {/* SECTION 7: 5 PROMPT TEMPLATES */}
          <section className="lesson-section">
            <h2>Section 7: Five Universal Prompt Templates</h2>
            <p>Copy-paste these templates and fill in the blanks. They work across all professions.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>1. The Explainer</h4>
                <PromptBox
                  text={`You are [role]. Explain [topic] to [audience] in [length]. Use [analogy style]. Avoid [jargon/assumptions].`}
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Use for:</em> Teaching, simplifying complexity, writing guides
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>2. The Writer</h4>
                <PromptBox
                  text={`Write a [type] [format] about [topic] for [audience]. Tone: [tone]. Length: ~[words]. Include: [specific elements].`}
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Use for:</em> Drafting content, emails, proposals, articles
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>3. The Reviewer</h4>
                <PromptBox
                  text={`Review this [type] and: 1) Identify errors or weak points, 2) Suggest 3 improvements, 3) Rate it 1-10 for [criteria]. Here: [paste content]`}
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Use for:</em> Getting feedback, quality control, stress-testing ideas
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>4. The Planner</h4>
                <PromptBox
                  text={`Create a [timeframe] plan to achieve [goal]. Constraints: [list]. Output as numbered list with brief descriptions.`}
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Use for:</em> Project planning, organizing work, creating schedules
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #ec4899' }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>5. The Analyst</h4>
                <PromptBox
                  text={`Analyze: [text/data]. Tell me: [questions]. Be specific and concise. Here: [paste content]`}
                />
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem' }}>
                  <em>Use for:</em> Data analysis, extracting insights, finding patterns
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 8: HANDS-ON */}
          <section className="lesson-section">
            <h2>Section 8: Hands-On — Build Your Personal System Prompt</h2>

            <HandsOn
              title="Set Up AI for Life"
              description="Create a system prompt that shapes how AI talks to you—from now on, in every conversation."
              steps={[
                "Decide your profession and main AI use cases (teaching, coding, writing, research, etc.)",
                "Write your system prompt using the template from Section 6. Spend 5 minutes thinking about your actual preferences. (Most people skip this and regret it.)",
                "Go to Claude Projects (or ChatGPT Custom Instructions, or Gemini Gems) and paste your system prompt.",
                "Test it with 3 different requests. Does it respond in your preferred style? Does it avoid things you said never?",
                "Refine once if needed. Now you're done. Every conversation from now on will be tuned to you.",
              ]}
            />

            <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '6px', borderLeft: '3px solid #2563eb', fontSize: '0.9rem' }}>
              <strong>Why bother?</strong> This system prompt saves you from explaining your context hundreds of times. It compounds. In a year, you'll have saved dozens of hours.
            </p>
          </section>

          {/* SECTION 9: WHAT NOT TO DO — AI PRIVACY & SAFETY */}
          <section className="lesson-section">
            <h2>Section 9: What NOT to Share with AI — Protecting Your Privacy</h2>

            <p>
              AI tools are powerful — but they are not a safe place for sensitive personal or financial information. Before you paste something into an AI chat, it is worth understanding what happens to that data and what you should never share.
            </p>

            <Callout type="warning" title="The Core Rule">
              Treat every AI chat window like a public forum. If you would not post it on a notice board, do not paste it into a chat. This applies to all AI tools — Claude, ChatGPT, Gemini, Copilot, and others — unless you are on a verified enterprise plan with explicit data privacy guarantees.
            </Callout>

            <h3 style={{ marginTop: '2rem' }}>Never Paste These Into an AI Chat</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', margin: '1.25rem 0' }}>
              {[
                {
                  icon: '🪪',
                  category: 'Identity Documents',
                  items: [
                    'Social Security Number (SSN) or National ID',
                    'Passport number or Driver\'s license number',
                    'Date of birth combined with name and address',
                    'Immigration or visa document numbers',
                  ],
                },
                {
                  icon: '🏦',
                  category: 'Financial Information',
                  items: [
                    'Bank account numbers or routing numbers',
                    'Full credit card or debit card numbers',
                    'Tax returns, W-2s, or income statements',
                    'Brokerage or investment account details',
                  ],
                },
                {
                  icon: '🔐',
                  category: 'Passwords & Access',
                  items: [
                    'Passwords or PINs of any kind',
                    'API keys or secret tokens',
                    'Recovery phrases or two-factor backup codes',
                    'Corporate VPN or system credentials',
                  ],
                },
                {
                  icon: '🏥',
                  category: 'Medical & Personal',
                  items: [
                    'Full medical records or diagnostic reports',
                    'Insurance policy numbers and claim details',
                    'Mental health history or therapy notes',
                    'Genetic test results',
                  ],
                },
                {
                  icon: '👤',
                  category: 'Other People\'s Data',
                  items: [
                    'Customer lists with names, emails, or phone numbers',
                    'Employee salary or HR records',
                    'Student records or grades (FERPA)',
                    'Anyone\'s private messages without their consent',
                  ],
                },
                {
                  icon: '🏢',
                  category: 'Confidential Business Data',
                  items: [
                    'Unreleased product roadmaps or financials',
                    'M&A details, contracts, or legal strategy',
                    'Proprietary source code (in consumer tools)',
                    'Client or patient data covered by NDA/HIPAA',
                  ],
                },
              ].map(cat => (
                <div key={cat.category} style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 10, padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span>
                    <span style={{ fontWeight: 700, color: '#92400E', fontSize: '.95rem' }}>{cat.category}</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#78350F', fontSize: '.875rem', lineHeight: 1.8 }}>
                    {cat.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem' }}>Why Does This Matter? How AI Data Works</h3>
            <p>
              When you type something into most AI chat interfaces, that text is sent to a cloud server and processed there. Depending on the provider and plan:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', margin: '1rem 0' }}>
              {[
                { icon: '📤', text: 'Your message is transmitted to a third-party server (Anthropic, OpenAI, Google, etc.) over the internet.' },
                { icon: '📝', text: 'It may be logged for safety monitoring, abuse detection, or service improvement — even with privacy settings on.' },
                { icon: '🤖', text: 'Some providers may use inputs to improve future models unless you explicitly opt out (check your account settings).' },
                { icon: '🔓', text: 'In the event of a data breach at the provider, anything you shared could be exposed.' },
                { icon: '👀', text: 'Human reviewers at AI companies may read samples of conversations as part of quality review processes.' },
              ].map(r => (
                <div key={r.text} style={{ display: 'flex', gap: '.75rem', padding: '.75rem 1rem', background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 8 }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{r.icon}</span>
                  <span style={{ color: '#0C4A6E', fontSize: '.9rem', lineHeight: 1.6 }}>{r.text}</span>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem' }}>Safe Ways to Use AI with Sensitive Context</h3>
            <p>You can still get value from AI for sensitive topics — just anonymize or generalize the data first:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#DC2626', marginBottom: '.6rem', fontSize: '.9rem' }}>❌ Instead of this...</div>
                <p style={{ margin: 0, fontSize: '.85rem', color: '#7F1D1D', lineHeight: 1.6 }}>
                  "Here is my W-2 from 2024. My SSN is 123-45-6789. Can you help me file my taxes?"
                </p>
              </div>
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#16A34A', marginBottom: '.6rem', fontSize: '.9rem' }}>✅ Do this instead</div>
                <p style={{ margin: 0, fontSize: '.85rem', color: '#14532D', lineHeight: 1.6 }}>
                  "I earned $75,000 in salary and $3,000 in freelance income last year. What deductions should I look into?"
                </p>
              </div>
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#DC2626', marginBottom: '.6rem', fontSize: '.9rem' }}>❌ Instead of this...</div>
                <p style={{ margin: 0, fontSize: '.85rem', color: '#7F1D1D', lineHeight: 1.6 }}>
                  "Here is our customer database export. Can you find patterns in the purchase history?" [pastes real names + emails]
                </p>
              </div>
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#16A34A', marginBottom: '.6rem', fontSize: '.9rem' }}>✅ Do this instead</div>
                <p style={{ margin: 0, fontSize: '.85rem', color: '#14532D', lineHeight: 1.6 }}>
                  "I have purchase data: 3,200 customers, avg order $47, 22% repeat buyers. What patterns should I analyze?"
                </p>
              </div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>When It IS Safe: Enterprise & Privacy Plans</h3>
            <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 10, padding: '1.25rem', margin: '1rem 0' }}>
              <p style={{ margin: '0 0 .75rem', color: '#0C4A6E', fontSize: '.9rem', lineHeight: 1.7 }}>
                If your organization uses an <strong>enterprise plan</strong> from Anthropic (Claude for Work/Enterprise), OpenAI (ChatGPT Enterprise), or Microsoft (Copilot for M365), your data typically has stronger protections:
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#0C4A6E', fontSize: '.875rem', lineHeight: 2 }}>
                <li>Data is not used to train models</li>
                <li>No human review of your conversations</li>
                <li>Data stays within your organization's contracted region</li>
                <li>Business associate agreements (BAA) available for HIPAA contexts</li>
              </ul>
              <p style={{ margin: '.75rem 0 0', color: '#0369A1', fontSize: '.85rem' }}>
                <strong>Still check:</strong> Even on enterprise plans, verify the specific data handling terms before processing data covered by regulations like HIPAA, GDPR, or FERPA.
              </p>
            </div>

            <h3 style={{ marginTop: '2rem' }}>The 3-Second Privacy Check</h3>
            <div style={{ background: '#F5F3FF', border: '2px solid #DDD6FE', borderRadius: 10, padding: '1.25rem' }}>
              <p style={{ margin: '0 0 .75rem', fontWeight: 700, color: '#5B21B6' }}>Before pasting anything into AI, ask yourself:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {[
                  'Would I be comfortable if this appeared in a news story?',
                  'Does this include real names, ID numbers, or financial data?',
                  'Is this data owned by someone else (customers, patients, clients)?',
                  'Would my employer or a regulator have concerns about this?',
                ].map((q, i) => (
                  <div key={i} style={{ display: 'flex', gap: '.75rem', padding: '.5rem .75rem', background: 'white', borderRadius: 6, border: '1px solid #DDD6FE' }}>
                    <span style={{ color: '#7C3AED', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: '#374151', fontSize: '.9rem' }}>{q}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: '.75rem 0 0', color: '#5B21B6', fontSize: '.875rem', fontWeight: 600 }}>If the answer to any of these is "yes" — anonymize before sharing, or don't share at all.</p>
            </div>
          </section>

          {/* SECTION 10: QUICK REFERENCE */}
          <section className="lesson-section">
            <QuickRef
              title="Lesson 5 — Quick Reference"
              items={[
                {
                  heading: 'Five Prompting Techniques',
                  points: [
                    'Zero-Shot: No examples. Ask directly. Fast, good for simple tasks.',
                    'Few-Shot: Show 2-3 examples. AI copies the pattern. Best for consistency.',
                    'Chain-of-Thought: "Think step by step." Forces logical reasoning. Great for complex problems.',
                    'Role Prompting: "You are a [role]." Different experts give different (better) answers.',
                    'System Prompts: Persistent instructions that apply to all conversations.',
                  ],
                },
                {
                  heading: 'The Five Templates',
                  points: [
                    'The Explainer: "You are [role]. Explain [topic] to [audience]..."',
                    'The Writer: "Write a [type] about [topic] for [audience]. Tone: [tone]..."',
                    'The Reviewer: "Review this [type] and identify: 1) errors 2) improvements 3) rating..."',
                    'The Planner: "Create a [timeframe] plan to achieve [goal]. Constraints: [list]..."',
                    'The Analyst: "Analyze [content]. Tell me: [questions]..."',
                  ],
                },
                {
                  heading: 'Power Phrases',
                  points: [
                    '"Think step by step"',
                    '"Show your reasoning"',
                    '"You are an expert [field]"',
                    '"Use an analogy"',
                    '"Be critical"',
                    '"Give me 3 alternatives"',
                    '"Avoid [jargon/clichés]"',
                    '"Keep it under [length]"',
                  ],
                },
                {
                  heading: 'When to Use Each Technique',
                  points: [
                    'Simple question? → Zero-shot (fastest)',
                    'Want consistent style? → Few-shot (show examples)',
                    'Complex reasoning? → Chain-of-thought (think step-by-step)',
                    'Want different perspective? → Role prompting (be a [role])',
                    'Same preferences every time? → System prompt (set once, use forever)',
                  ],
                },
                {
                  heading: '🔒 Never Share with AI (Privacy)',
                  points: [
                    'Identity: SSN, passport number, driver\'s license number',
                    'Financial: bank accounts, card numbers, tax returns',
                    'Passwords, API keys, or 2FA recovery codes',
                    'Medical records, insurance numbers, health history',
                    'Other people\'s personal data without their consent',
                    'Confidential business data: M&A, unreleased financials, client lists',
                  ],
                },
                {
                  heading: 'Safe Anonymization Patterns',
                  points: [
                    'Replace names with "[Customer A]" or "[Employee 1]"',
                    'Use ranges instead of exact figures: "$70K–80K" not "$76,234"',
                    'Describe what the data looks like rather than pasting it',
                    'Ask your question with hypothetical numbers, not real ones',
                    '3-second check: "Would I be OK if this appeared in a news story?"',
                  ],
                },
              ]}
            />
          </section>

          <LessonNav
            lessonId="l0-5"
            prev={{ href: '/level0/lesson4', title: 'AI for Your Job' }}
            next={{ href: '/level0/capstone', title: 'Level 0 Capstone' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
