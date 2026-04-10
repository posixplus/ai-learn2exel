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

export default function Lesson3() {
  return (
    <div className="lesson-layout">
      <Sidebar level={0} currentLessonId="l0-3" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={0}
            lessonNumber={3}
            duration={55}
            title="Your First Real Conversations"
            subtitle="Master the basics of talking to AI effectively"
            professions={['👩‍🏫 Teacher', '👨‍⚕️ Healthcare', '🎓 Student', '⚙️ Engineer', '💻 Developer', '💼 Business']}
          />

          {/* SECTION 1: THE ANATOMY OF A GOOD PROMPT */}
          <section className="lesson-section">
            <h2>Section 1: The Anatomy of a Good Prompt</h2>
            <p>The difference between a frustrating AI response and an excellent one usually comes down to how you ask the question. Let's break down what makes a prompt work.</p>

            <h3>The Four Essential Components</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>1. Context</h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>Who are you? What's your situation? What domain are you in?</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0 0' }}><em>"I'm a marketing manager at a SaaS startup..."</em></p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>2. Task</h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>What specifically do you want AI to do?</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0 0' }}><em>"I need to write an email that..."</em></p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>3. Format</h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>How should the answer be structured?</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0 0' }}><em>"Give me bullet points..."</em></p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>4. Constraints</h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>What should you avoid? What's the length or tone?</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0 0' }}><em>"Keep it under 150 words, casual tone"</em></p>
              </div>
            </div>

            <h3>Bad Prompt vs Good Prompt</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h4 style={{ color: '#dc2626', margin: '0 0 1rem 0' }}>WEAK PROMPT</h4>
                <PromptBox
                  text="Write something about climate change"
                />
                <p style={{ fontSize: '0.9rem', margin: '1rem 0 0 0' }}>
                  <strong>Problems:</strong> Too vague. No context. No target audience. No format specified. No length limit. AI has to guess.
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #16a34a' }}>
                <h4 style={{ color: '#16a34a', margin: '0 0 1rem 0' }}>STRONG PROMPT</h4>
                <PromptBox
                  text={`You are a science communicator. Write a 150-word paragraph explaining why ocean acidification is a concern for a general audience with no science background. Use one real-world analogy to make it relatable. Avoid scientific jargon. Focus on why this matters to ordinary people.`}
                />
                <p style={{ fontSize: '0.9rem', margin: '1rem 0 0 0' }}>
                  <strong>Why it works:</strong> Clear context (who you are), specific task, target audience, format, length, and constraints. AI knows exactly what you want.
                </p>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fffbeb', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
              <strong>The pattern:</strong> "You are [role]. [Task]. The audience is [who]. Output as [format]. [Constraints]."
            </p>
          </section>

          {/* SECTION 2: THE 5 MOST COMMON MISTAKES */}
          <section className="lesson-section">
            <h2>Section 2: The 5 Most Common Mistakes</h2>
            <p>These are the things that make AI responses disappointing. Fix them and you'll get dramatically better results.</p>

            <h3>Mistake 1: Being Too Vague</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold' }}>❌ Vague</p>
                <PromptBox text="Write an article about productivity" />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 'bold' }}>✓ Better</p>
                <PromptBox text="Write a 500-word article for busy professionals explaining 3 evidence-based productivity techniques they can implement today. Make it practical, not theoretical." />
              </div>
            </div>

            <h3>Mistake 2: No Context About Who You Are</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold' }}>❌ No context</p>
                <PromptBox text="Help me write an email to my boss" />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 'bold' }}>✓ Better</p>
                <PromptBox text="I'm a junior engineer at a startup. Write an email to my manager requesting a meeting to discuss my career growth. Tone: respectful and professional, not demanding." />
              </div>
            </div>

            <h3>Mistake 3: Asking for Everything in One Prompt</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold' }}>❌ Too much at once</p>
                <PromptBox text="Write a business plan, marketing strategy, and financial projections for my new restaurant" />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 'bold' }}>✓ Better</p>
                <PromptBox text="Help me outline the Executive Summary section of a business plan for a coffee shop. What should I include? (We'll handle marketing and finances separately.)" />
              </div>
            </div>

            <h3>Mistake 4: Not Specifying Format</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold' }}>❌ No format</p>
                <PromptBox text="Tell me about the benefits of exercise" />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 'bold' }}>✓ Better</p>
                <PromptBox text="Give me 5 benefits of exercise. Format as a numbered list with 1-2 sentences per benefit. Target audience: people who are skeptical about exercise." />
              </div>
            </div>

            <h3>Mistake 5: Giving Up After One Bad Response</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold' }}>❌ Giving up</p>
                <p style={{ fontSize: '0.9rem' }}>"That wasn't good. AI is useless."</p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 'bold' }}>✓ Better</p>
                <PromptBox text="That's not quite right. Try again but make it shorter and less formal." />
              </div>
            </div>

            <Callout
              type="tip"
              title="The Refinement Loop"
            >
              The first response is rarely perfect. You're supposed to refine it. That's the normal workflow: ask, get a response, refine 1-2 times, use the result. Most people expect perfection on the first try and get discouraged. Don't be that person.
            </Callout>
          </section>

          {/* SECTION 3: CONVERSATION TECHNIQUES */}
          <section className="lesson-section">
            <h2>Section 3: Conversation Techniques</h2>
            <p>You can't just ask once and be done. Here are the key ways to refine and iterate with AI.</p>

            <h3>Technique 1: Ask for Alternatives</h3>
            <p>Don't settle for one response. Ask for variations.</p>
            <PromptBox
              label="Example"
              text="Give me 3 different versions of that email: one formal, one casual, and one friendly-but-direct."
            />
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              <strong>When to use:</strong> When you're not sure which tone or style is right. Or when you want options.
            </p>

            <h3>Technique 2: Refinement</h3>
            <p>Tell AI what you want changed.</p>
            <PromptBox
              label="Example"
              text="Make it shorter—about half the length. Use simpler words. Remove the jargon."
            />
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              <strong>When to use:</strong> After the first response, when you see what you got but want tweaks.
            </p>

            <h3>Technique 3: Critique</h3>
            <p>Ask AI to evaluate its own work.</p>
            <PromptBox
              label="Example"
              text="What are the weaknesses in that argument? What would a skeptic disagree with?"
            />
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              <strong>When to use:</strong> When you want to stress-test an idea or find holes before using it.
            </p>

            <h3>Technique 4: Stepping Up</h3>
            <p>Take the response and escalate its formality, depth, or impact.</p>
            <PromptBox
              label="Example"
              text="Now make it more formal and suitable for a board presentation. Add more data and specifics."
            />
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              <strong>When to use:</strong> When you've drafted something and now need to adapt it for a different audience.
            </p>

            <h3>Technique 5: Role Reversal</h3>
            <p>Ask AI to challenge your position.</p>
            <PromptBox
              label="Example"
              text="What questions would a skeptical manager ask about this proposal? What concerns might they have?"
            />
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              <strong>When to use:</strong> Before presenting ideas to others. To prepare for objections.
            </p>
          </section>

          {/* SECTION 4: HANDS-ON (6 PROFESSION WALKTHROUGHS) */}
          <section className="lesson-section">
            <h2>Section 4: Hands-On — Profession Walkthroughs</h2>
            <p>Here are six real, specific prompts for different professions. Pick yours and try it right now in Claude or ChatGPT.</p>

            <ProfessionSpotlight
              tabs={[
                {
                  profession: '👩‍🏫 Teacher',
                  title: 'Teacher',
                  content: (
                    <>
                      <p><strong>The Task:</strong> Create a quiz that students will actually engage with.</p>
                      <PromptBox
                        text={`I teach 7th grade science. Create a 10-question multiple choice quiz on the water cycle. Each question should have 4 options (A, B, C, D). Include the correct answer. Make questions appropriate for 12-13 year olds—not too easy, not impossible. A few should be knowledge-based, but include at least 2 "thinking" questions that require understanding, not just memorization.`}
                      />
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>What to look for:</strong> Are the questions clear? Are they the right difficulty? Would you actually use these?
                      </p>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Follow-up:</strong> "Make 3 of these questions harder for an advanced class."
                      </p>
                    </>
                  ),
                },
                {
                  profession: '👨‍⚕️ Healthcare',
                  title: 'Healthcare',
                  content: (
                    <>
                      <p><strong>The Task:</strong> Explain a diagnosis in a way patients understand.</p>
                      <PromptBox
                        text={`I'm a family physician. Write a patient-friendly explanation of Type 2 Diabetes. The explanation should: 1) Define it simply, 2) Explain what causes it, 3) List 3-4 lifestyle changes that help manage it, 4) Give hope—it's manageable. Write for someone with no medical background, approximately 200 words. Avoid jargon.`}
                      />
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>What to look for:</strong> Is it understandable? Does it avoid scary language while being honest? Would a patient feel hopeful?
                      </p>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Follow-up:</strong> "Make this version for a teenager. Use language and examples they'd relate to."
                      </p>
                    </>
                  ),
                },
                {
                  profession: '🎓 Student',
                  title: 'Student',
                  content: (
                    <>
                      <p><strong>The Task:</strong> Understand a complex topic for an exam.</p>
                      <PromptBox
                        text={`I'm studying for a history exam. Explain the causes of World War 1 in a way that's easy to remember. Give me 3-4 key points (not a huge list). Use everyday examples or modern analogies so I actually understand why it happened, not just memorize facts. Make it the kind of explanation you'd give a friend, not a textbook definition.`}
                      />
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>What to look for:</strong> Can you understand this without being a history expert? Are the analogies helpful? Could you explain this to someone else now?
                      </p>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Follow-up:</strong> "What questions would a tricky teacher ask about this? Help me prepare."
                      </p>
                    </>
                  ),
                },
                {
                  profession: '⚙️ Engineer',
                  title: 'Engineer',
                  content: (
                    <>
                      <p><strong>The Task:</strong> Explain technical issues to non-technical people.</p>
                      <PromptBox
                        text={`I'm a civil engineer writing a report for city council members (non-technical audience). Explain: 1) Why we found stress fractures in the bridge support beams, 2) What this means for public safety (be honest but not alarmist), 3) What we recommend. Keep it jargon-free. Assume they have a high school education. Make it 2-3 paragraphs.`}
                      />
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>What to look for:</strong> Would a city councilor understand this? Does it explain the problem without using engineering jargon? Is it convincing?
                      </p>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Follow-up:</strong> "Now write a 30-second version I can say out loud in a meeting."
                      </p>
                    </>
                  ),
                },
                {
                  profession: '💻 Developer',
                  title: 'Developer',
                  content: (
                    <>
                      <p><strong>The Task:</strong> Get code review and feedback.</p>
                      <PromptBox
                        text={`Review this Python function and tell me: 1) What it does in plain English, 2) Any bugs or edge cases I'm missing, 3) How to make it more readable. Be specific. If you spot improvements, show an example. [paste your code here]`}
                      />
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>What to look for:</strong> Did AI correctly understand your code? Are the issues real? Are the suggestions practical or pedantic?
                      </p>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Follow-up:</strong> "Write test cases for this function, including edge cases."
                      </p>
                    </>
                  ),
                },
                {
                  profession: '💼 Business',
                  title: 'Business',
                  content: (
                    <>
                      <p><strong>The Task:</strong> Prepare for a client meeting.</p>
                      <PromptBox
                        text={`I have a client meeting tomorrow with [Company Name]. Write me a 5-point briefing covering: 1) What's their main business? 2) What's in the news about them recently? 3) What are 3 potential pain points we might help with? 4) What should I ask them about? 5) What should I avoid? Keep each point to 2-3 sentences. Make it actionable.`}
                      />
                      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>What to look for:</strong> Is this actually useful for a real meeting? Does it give you talking points? Does it help you sound prepared?
                      </p>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Follow-up:</strong> "Draft an email to send after the meeting to recap next steps."
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </section>

          {/* SECTION 5: THE REFINEMENT LOOP */}
          <section className="lesson-section">
            <h2>Section 5: The Refinement Loop In Action</h2>
            <p>Here's what a real conversation looks like. Three turns, each improving the result.</p>

            <div style={{ margin: '2rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#0284c7' }}>Turn 1: Your Initial Ask</p>
                <PromptBox
                  text="I need to write an email to a client saying no to a project. Help me draft it."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f5f3ff', borderRadius: '8px', borderLeft: '4px solid #7c3aed', marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#7c3aed' }}>Claude's Response (summary)</p>
                <p style={{ margin: '0.5rem 0', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  "Hi [Client], Thank you for thinking of us. Unfortunately, we're not able to take on the [Project] at this time due to capacity constraints. We'd love to revisit this in the future. Best regards, [Your name]"
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#0284c7' }}>Turn 2: Your Refinement</p>
                <PromptBox
                  text="That's too formal. Make it warmer and more personal. Mention that I'm still interested in working with them on other projects. Keep it short."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f5f3ff', borderRadius: '8px', borderLeft: '4px solid #7c3aed', marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#7c3aed' }}>Claude's Response (revised)</p>
                <p style={{ margin: '0.5rem 0', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  "Hi [Client], Thanks so much for reaching out about [Project]. I appreciate your confidence in us. We're completely slammed right now, so I can't give it the attention it deserves. Let's grab coffee next month—I'd love to explore what else we might do together. Talk soon!"
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#0284c7' }}>Turn 3: Final Polish</p>
                <PromptBox
                  text="Perfect. One small thing—is 'completely slammed' too casual? Any other wording?"
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f5f3ff', borderRadius: '8px', borderLeft: '4px solid #7c3aed' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#7c3aed' }}>Claude's Response</p>
                <p style={{ margin: '0.5rem 0', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  "You could say 'tied up with other commitments' or 'at capacity' if you want it slightly less casual. But honestly, 'completely slammed' feels human and honest—clients know we're busy. It actually builds credibility. Keep it as-is."
                </p>
              </div>
            </div>

            <p style={{ padding: '1rem', backgroundColor: '#fffbeb', borderRadius: '6px', borderLeft: '3px solid #f59e0b', marginTop: '1.5rem' }}>
              <strong>The pattern:</strong> Ask → get response → tweak → get better response → final polish. Three turns, dramatically better result than the first attempt.
            </p>
          </section>

          {/* SECTION 6: QUICK REFERENCE */}
          <section className="lesson-section">
            <QuickRef
              title="Lesson 3 — Quick Reference"
              items={[
                {
                  heading: 'Prompt Formula',
                  points: [
                    '"You are [role]. [Task]. [Context]. Output as [format]. [Constraints]."',
                    'Context = who are you, what\'s your situation, what domain',
                    'Task = exactly what you want AI to do',
                    'Format = bullet points, essay, table, email, etc.',
                    'Constraints = length, tone, what to avoid',
                  ],
                },
                {
                  heading: 'Power Phrases to Know',
                  points: [
                    '"Make it more concise"',
                    '"Explain like I\'m 5"',
                    '"Give me 3 alternatives"',
                    '"What are the limitations of this?"',
                    '"Check this for errors"',
                    '"Make it more formal/casual"',
                    '"Add specific examples"',
                    '"Summarize in one sentence"',
                  ],
                },
                {
                  heading: 'Conversation Techniques',
                  points: [
                    'Ask for alternatives (3 versions with different tones)',
                    'Refine (tell it exactly what to change)',
                    'Critique (find weaknesses in the response)',
                    'Step up (escalate formality/depth for different audience)',
                    'Role reversal (ask for objections/tough questions)',
                  ],
                },
                {
                  heading: 'Common Mistakes to Avoid',
                  points: [
                    'Being too vague = bad output',
                    'No context about who you are = wrong tone/style',
                    'Asking for everything at once = confusing response',
                    'Not specifying format = whatever format AI chooses',
                    'Giving up after first response = missed potential',
                  ],
                },
              ]}
            />
          </section>

          <LessonNav
            lessonId="l0-3"
            prev={{ href: '/level0/lesson2', title: 'The AI Landscape' }}
            next={{ href: '/level0/lesson4', title: 'AI for Your Job' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
