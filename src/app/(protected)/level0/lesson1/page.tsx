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

export default function Lesson1() {
  return (
    <div className="lesson-layout">
      <Sidebar level={0} currentLessonId="l0-1" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={0}
            lessonNumber={1}
            duration={45}
            title="What is AI, ML & LLMs?"
            subtitle="Understand the fundamental building blocks of modern AI"
            professions={['👩‍🏫 Teacher', '👨‍⚕️ Healthcare', '🎓 Student', '⚙️ Engineer', '💻 Developer', '💼 Business']}
          />

          {/* SECTION 1: THE AI FAMILY TREE */}
          <section className="lesson-section">
            <h2>Section 1: The AI Family Tree</h2>
            <p>Think of AI as a family of increasingly specialized technologies. Each level builds on the last, but they're distinct in what they do and how they work.</p>

            <div className="concept-grid">
              <div className="concept-card">
                <div className="concept-icon">🤖</div>
                <h3>Artificial Intelligence (AI)</h3>
                <p className="concept-label">"The Big Umbrella"</p>
                <p>Any machine or software that mimics human intelligence. That includes playing chess, recognizing faces, answering questions, or writing essays. If a computer is doing something that would normally require human thinking, it's AI.</p>
                <p className="concept-examples"><strong>Examples:</strong> chess computers, recommendation algorithms, voice assistants, chatbots</p>
              </div>

              <div className="concept-card">
                <div className="concept-icon">🧠</div>
                <h3>Machine Learning (ML)</h3>
                <p className="concept-label">"Learning by Example"</p>
                <p>A subset of AI where systems improve their performance by learning from data, without being explicitly programmed for every scenario. Show it 1,000 emails, and it learns what spam looks like-without you writing rules.</p>
                <p className="concept-examples"><strong>Examples:</strong> spam filters, credit card fraud detection, Netflix recommendations</p>
              </div>

              <div className="concept-card">
                <div className="concept-icon">🕸️</div>
                <h3>Deep Learning (DL)</h3>
                <p className="concept-label">"Neural Networks"</p>
                <p>A subset of ML inspired by how the brain works. Uses interconnected layers of artificial "neurons" to find patterns in massive datasets. Deep learning requires huge amounts of data and computing power, but it's incredibly powerful.</p>
                <p className="concept-examples"><strong>Examples:</strong> image recognition, language translation, self-driving cars</p>
              </div>

              <div className="concept-card">
                <div className="concept-icon">📝</div>
                <h3>Large Language Model (LLM)</h3>
                <p className="concept-label">"Language Masters"</p>
                <p>A type of deep learning model trained on massive amounts of text data. It learns patterns of language so well that it can generate human-like text, answer questions, write code, and much more. Claude, ChatGPT, and Gemini are all LLMs.</p>
                <p className="concept-examples"><strong>Examples:</strong> ChatGPT, Claude, Gemini, Llama</p>
              </div>
            </div>

            <div style={{ margin: '2rem 0', padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
              <p><strong>Remember:</strong> AI is the broadest category. ML is a type of AI. Deep Learning is a type of ML. And LLMs are a type of deep learning. They nest inside each other like Russian dolls.</p>
            </div>
          </section>

          {/* SECTION 2: A BRIEF TIMELINE */}
          <section className="lesson-section">
            <h2>Section 2: A Brief Timeline of AI</h2>
            <p>AI didn't start last week. Here's how we got to the moment where you can chat with Claude or ChatGPT.</p>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>1950</h3>
                  <p><strong>Turing Test Proposed</strong></p>
                  <p>Alan Turing asks: "Can machines think?" He proposes the Turing Test-if a human can't tell whether they're talking to a machine or a human, the machine is intelligent. We're still testing this today.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>1997</h3>
                  <p><strong>Deep Blue Beats Chess Champion</strong></p>
                  <p>IBM's Deep Blue defeats Garry Kasparov, the world's best chess player. Huge moment: the machine was better at chess than any human. AI was real.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2012</h3>
                  <p><strong>ImageNet Breakthrough</strong></p>
                  <p>Deep learning suddenly dominates image recognition. A neural network trained on millions of images recognizes objects better than previous methods. Deep learning goes mainstream.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2017</h3>
                  <p><strong>Transformer Architecture Invented</strong></p>
                  <p>Researchers publish "Attention Is All You Need," introducing the Transformer-the architecture that powers ChatGPT, Claude, and Gemini. This is why these models work.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2020</h3>
                  <p><strong>GPT-3 Stuns the World</strong></p>
                  <p>OpenAI releases GPT-3, trained on 175 billion parameters. People start using it for writing, coding, and analysis. The potential of LLMs becomes obvious to everyone.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>November 2022</h3>
                  <p><strong>ChatGPT Launches</strong></p>
                  <p>OpenAI releases ChatGPT to the public. Within 5 days: 1 million users. People realize they can actually use AI right now. The AI revolution hits mainstream.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p><strong>The Race Heats Up</strong></p>
                  <p>Anthropic releases Claude, Google releases Gemini, OpenAI releases GPT-4. Competition drives rapid innovation. More powerful models. Cheaper APIs. Better reasoning.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2024-2026</h3>
                  <p><strong>AI Goes Everywhere</strong></p>
                  <p>AI agents that can take actions, multimodal models that understand text+image+video, and reasoning models that think step-by-step are now mainstream. By 2026, models like Claude Opus 4.8, GPT-5.5, and Gemini 3.5 power everyday work. AI is no longer a novelty-it's infrastructure.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: HOW LLMS ACTUALLY WORK (PLAIN ENGLISH) */}
          <section className="lesson-section">
            <h2>Section 3: How LLMs Actually Work (Plain English)</h2>
            <p>Let's demystify what happens when you type a message into Claude or ChatGPT. The magic is simpler (and stranger) than you might think.</p>

            <h3>Step 1: Tokenization (Breaking Words Into Pieces)</h3>
            <p>You type: "What is a hamburger?"</p>
            <p>The model doesn't see that as one word. It breaks it into tokens-small chunks that might be a whole word, part of a word, or a punctuation mark. "Hamburger" becomes ["ham", "bur", "ger"]. This is because models work with numbers, and tokens map to numbers the model understands.</p>
            <p><strong>Why?</strong> Models are language pattern detectors. They work with numbers, not letters. Tokens are the bridge.</p>

            <h3>Step 2: Training (Learning Patterns From Billions of Examples)</h3>
            <p>Before you ever typed that question, Claude was trained on a massive amount of text from the internet-books, articles, websites, and code. During training, the model learned statistical patterns: "When these tokens appear together, what usually comes next?"</p>
            <p>For example, the model learned: "When you see 'the quick brown fox,' the next word is usually 'jumps.'" It learned patterns for grammar, facts, writing styles, coding conventions-all by statistical pattern matching.</p>
            <p><strong>Why this matters:</strong> The model is <em>not</em> looking things up in a database. It's recalling learned patterns. This is why it's powerful AND why it can make mistakes.</p>

            <h3>Step 3: Next-Token Prediction (Filling in the Blank, Scaled Up)</h3>
            <p>You ask: "What is a hamburger?"</p>
            <p>The model predicts the most likely next token. Then it predicts the next. And the next. Each prediction uses the previous tokens as context. It's like fill-in-the-blank, repeated hundreds of times, generating an entire response.</p>
            <p>Here's the stunning part: the model doesn't "think" about hamburgers. It sees the pattern "When someone asks 'What is a [food],' a good response starts with 'A [food] is a dish made of...' and it generates the most probable continuation."</p>

            <h3>Step 4: Emergent Capabilities (Surprising Powers)</h3>
            <p>Here's where it gets weird. The model was never explicitly taught to:</p>
            <ul>
              <li>Write code (but it does)</li>
              <li>Explain complex physics (but it does)</li>
              <li>Reason step-by-step (but it does)</li>
              <li>Translate languages it saw only a few times in training (but it does)</li>
            </ul>
            <p>These "emergent capabilities" arise spontaneously when models get large enough. At a certain scale, the pattern-matching becomes powerful enough to do things it was never explicitly trained to do. This is still not fully understood by researchers-it's one of the great mysteries of AI.</p>

            <Callout
              type="info"
              title="Key Insight: LLMs are Pattern Detectives, Not Librarians"
            >
              LLMs don't look things up. They learned patterns from billions of examples and now predict the most likely next token. This is why they're powerful (they can reason, write, code) AND why they sometimes confidently get things wrong (they followed a pattern, not because they verified facts).
            </Callout>
          </section>

          {/* SECTION 4: MYTHS VS REALITY */}
          <section className="lesson-section">
            <h2>Section 4: Myths vs Reality</h2>
            <p>Let's separate fact from fiction about AI.</p>

            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Myth</th>
                  <th>Reality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>"AI is sentient and has feelings"</td>
                  <td>AI has no consciousness, emotions, or self-awareness. It predicts text patterns. When Claude says "I find this fascinating," it's pattern completion, not genuine curiosity.</td>
                </tr>
                <tr>
                  <td>"AI always gets it right"</td>
                  <td>AI hallucinations (making things up confidently) are common. It might invent fake citations, incorrect facts, or plausible-sounding nonsense. Always verify important information.</td>
                </tr>
                <tr>
                  <td>"AI will replace all jobs immediately"</td>
                  <td>AI augments most jobs and automates specific tasks, not entire roles-at least for now. Your job might change, but AI is a tool your industry will use, not a replacement.</td>
                </tr>
                <tr>
                  <td>"You need to be technical to use AI"</td>
                  <td>Modern AI tools are conversational. If you can type, you can use them. You don't need coding, machine learning, or technical knowledge.</td>
                </tr>
                <tr>
                  <td>"Free AI tools are useless"</td>
                  <td>Claude.ai free, ChatGPT free, and Gemini free tiers are surprisingly capable. You don't need to pay for real value-though paid tiers offer more usage.</td>
                </tr>
                <tr>
                  <td>"AI understands everything it generates"</td>
                  <td>AI generates plausible text without true understanding. It can write about nuclear physics without understanding physics-it's following learned patterns.</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* SECTION 5: HANDS-ON */}
          <section className="lesson-section">
            <h2>Section 5: Your First AI Conversation</h2>
            <p>Let's do this right now. Follow these steps and you'll have had your first real AI conversation in under 5 minutes.</p>

            <HandsOn
              title="Your First AI Conversation"
              description="Let's do this right now. Follow these steps and you'll have had your first real AI conversation in under 5 minutes."
              steps={[
                "Open claude.ai in your browser (free account - takes 2 minutes to create)",
                'Type exactly this: "Explain what you are in 3 sentences, for someone who has never heard of AI before."',
                "Read the response. Notice how it structures the answer.",
                'Now type: "Explain it as if I\'m a 10-year-old."',
                "Compare the two responses - notice how AI adapts its communication style to your request",
                'Finally try: "What are 3 things I should know before using AI tools like you?"',
                "Congratulations - you just had your first productive AI conversation!",
              ]}
            />

            <PromptBox
              label="STARTER PROMPT"
              text={`Explain what you are in 3 sentences, as if talking to someone who has never heard of AI before. Then follow up by listing 3 things I should know before relying on you.`}
            />
          </section>

          {/* SECTION 6: PROFESSION SPOTLIGHTS */}
          <section className="lesson-section">
            <h2>Section 6: Profession Spotlights</h2>
            <p>Here's how people in different professions use AI on day one.</p>

            <ProfessionSpotlight
              tabs={[
                {
                  profession: '👩‍🏫 Teacher',
                  title: 'Teacher',
                  content: (
                    <>
                      <p>Teachers use AI to save hours on lesson planning and differentiation.</p>
                      <p><strong>Prompt:</strong></p>
                      <PromptBox
                        text={`I teach 5th grade science. Create a 10-question quiz on the water cycle that's appropriate for 10-year-olds. Include an answer key. Make it fun and not too hard.`}
                      />
                      <p><strong>Follow-up idea:</strong> Ask AI to rewrite the same quiz at 3 different difficulty levels-for advanced students, average students, and students who are struggling. That's instant differentiation.</p>
                    </>
                  ),
                },
                {
                  profession: '👨‍⚕️ Healthcare',
                  title: 'Healthcare',
                  content: (
                    <>
                      <p>Healthcare providers use AI to explain diagnoses in language patients understand.</p>
                      <p><strong>Prompt:</strong></p>
                      <PromptBox
                        text={`I'm a doctor. A patient just asked me what Type 2 Diabetes is. Write me a 150-word explanation in plain language-no medical jargon. Include what causes it and what they can do about it.`}
                      />
                      <p><strong>Follow-up idea:</strong> Ask AI to write the same explanation for different audiences: a 70-year-old with no medical background, a teenager, and a spouse wanting to understand how to help.</p>
                    </>
                  ),
                },
                {
                  profession: '🎓 Student',
                  title: 'Student',
                  content: (
                    <>
                      <p>Students use AI to understand confusing concepts and study better.</p>
                      <p><strong>Prompt:</strong></p>
                      <PromptBox
                        text={`I'm studying for a history exam. Explain the main causes of World War 1 in a way that's easy to remember. Give me 3-4 key points and use everyday examples to make it stick.`}
                      />
                      <p><strong>Follow-up idea:</strong> Ask AI "What questions would a tricky history teacher ask about World War 1?" Then use those to quiz yourself before the exam.</p>
                    </>
                  ),
                },
                {
                  profession: '⚙️ Engineer',
                  title: 'Engineer',
                  content: (
                    <>
                      <p>Engineers use AI to write reports and explain technical concepts to non-technical people.</p>
                      <p><strong>Prompt:</strong></p>
                      <PromptBox
                        text={`I'm a civil engineer writing a report for city council (non-technical audience). Explain why we found stress fractures in the bridge support beams, what it means for safety, and what we recommend. Keep it jargon-free.`}
                      />
                      <p><strong>Follow-up idea:</strong> Ask the same question but request output as bullet points, then as a formal letter, then as a 30-second explanation. Different formats for different contexts.</p>
                    </>
                  ),
                },
                {
                  profession: '💻 Developer',
                  title: 'Developer',
                  content: (
                    <>
                      <p>Developers use AI for code review, documentation, and understanding unfamiliar code.</p>
                      <p><strong>Prompt:</strong></p>
                      <PromptBox
                        text={`Review this Python function and tell me: 1) What it does in plain English, 2) Any bugs or edge cases I'm missing, 3) How to make it more readable. [paste code here]`}
                      />
                      <p><strong>Follow-up idea:</strong> Ask "Write unit tests for this function that cover edge cases" or "Refactor this to be more Pythonic."</p>
                    </>
                  ),
                },
                {
                  profession: '💼 Business',
                  title: 'Business',
                  content: (
                    <>
                      <p>Business professionals use AI for competitive research and client preparation.</p>
                      <p><strong>Prompt:</strong></p>
                      <PromptBox
                        text={`I have a client meeting tomorrow with Acme Corp. Write me a 5-point briefing on: their main business, recent news, and 3 potential pain points we could address. Keep it concise.`}
                      />
                      <p><strong>Follow-up idea:</strong> Ask AI to draft talking points, write an email summary to send after the meeting, or create a 1-slide executive summary.</p>
                    </>
                  ),
                },
              ]}
            />
          </section>

          {/* SECTION 7: QUICK REFERENCE */}
          <section className="lesson-section">
            <QuickRef
              title="Lesson 1 - Quick Reference"
              items={[
                {
                  heading: 'Key Terms',
                  points: [
                    'AI = Artificial Intelligence (machines mimicking human intelligence)',
                    'ML = Machine Learning (systems that learn from data)',
                    'LLM = Large Language Model (text-trained AI like Claude/ChatGPT)',
                    'Token = A word fragment (roughly 0.75 tokens per word)',
                    'Hallucination = AI confidently stating something false',
                  ],
                },
                {
                  heading: 'How LLMs Work',
                  points: [
                    'Trained on trillions of words from the internet and books',
                    'Predict the most likely next token, then the next',
                    'No memory between conversations by default',
                    'No real-time internet access unless given tools',
                    'Learning patterns, not looking things up',
                  ],
                },
                {
                  heading: 'Try These Prompts',
                  points: [
                    '"Explain [concept] like I\'m 5 years old"',
                    '"What are 3 things I should know about [topic]?"',
                    '"What are the pros and cons of [idea]?"',
                    '"Summarize this in 3 bullet points: [paste text]"',
                    '"Explain why I might be wrong about [belief]"',
                  ],
                },
              ]}
            />
          </section>

          <LessonNav
            lessonId="l0-1"
            prev={undefined}
            next={{ href: '/level0/lesson2', title: 'The AI Landscape' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
