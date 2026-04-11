'use client'

import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson16() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-16" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={16}
            duration={75}
            title="Build Your Claude Knowledge Base"
            subtitle="Create persistent AI assistants with system prompts, uploaded documents, and custom behaviors"
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          {/* Section 1: What Are Claude Projects? */}
          <section className="lesson-section">
            <h2>What Are Claude Projects?</h2>
            <p>
              Claude Projects are persistent AI workspaces where you can set up a specialized assistant that remembers your context, preferences, and reference materials across conversations. Think of it this way: a regular chat is like a sticky note—useful in the moment but forgotten after. A Project is like training a dedicated assistant who has a filing cabinet full of your documents, a clear understanding of your role and goals, and standing instructions on how to help you best.
            </p>
            <p>
              In a Project, two things persist permanently:
            </p>
            <ul>
              <li><strong>System Prompt:</strong> Your permanent instructions to the AI—your role, context, what you want it to always do, what to never do, and your preferred output format.</li>
              <li><strong>Uploaded Documents:</strong> PDFs, text files, images, and other reference materials (style guides, SOPs, templates, past work) that the AI can access and cite in every conversation.</li>
            </ul>
            <p>
              What does <em>not</em> persist: your actual conversation history is separate. Each new chat in the Project starts fresh conversation history, but the AI has the system prompt and docs ready to go.
            </p>
            <Callout type="info">
              <strong>Availability Note:</strong> Projects are available on Claude Pro and Team plans. Free users can still use system prompts in individual conversations—they just won't persist automatically. Learn more: <a href="https://support.anthropic.com/en/articles/9517075-what-are-projects" target="_blank" rel="noopener">What are Projects</a>
            </Callout>
          </section>

          {/* Section 2: Writing a Powerful System Prompt */}
          <section className="lesson-section">
            <h2>Writing a Powerful System Prompt</h2>
            <p>
              The system prompt is the heart of your Project. A great one has five components:
            </p>
            <ol>
              <li><strong>Role Definition:</strong> Clearly state who you are and what you do. "You are a marketing manager focused on B2B SaaS content."</li>
              <li><strong>Context About the User's Work:</strong> Give the AI background on your situation, team, audience, or goals. "Our target audience is technical founders, and we write in a conversational but authoritative tone."</li>
              <li><strong>What the AI Should Always Do:</strong> Set standing behaviors. "Always cite sources from our brand guide. Start responses with a one-sentence summary."</li>
              <li><strong>What It Should Never Do:</strong> Be explicit about boundaries. "Never make up statistics. Never recommend a tool we don't use."</li>
              <li><strong>Output Format Preferences:</strong> Specify how you want results structured. "Format responses as: Summary | Detailed Explanation | Next Steps."</li>
            </ol>
            <p>
              Here are three complete, detailed system prompt examples you can adapt:
            </p>

            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Example 1: Marketing Manager's Content Assistant</h3>
              <PromptBox label="System Prompt">
{`You are a content strategist supporting a B2B SaaS marketing manager. Your role is to draft, edit, and optimize content for our target audience: technical founders and engineering leaders aged 28-45.

CONTEXT: We sell a project management tool for engineering teams. Our brand is direct, honest, and jargon-free. We avoid hype and focus on real use cases. Our audience is skeptical of marketing—they want substance over polish.

ALWAYS:
- Start every response with a one-sentence summary of the content direction
- Reference our brand guide style when revising copy
- Include 1–2 real usage examples from our customer base (make these realistic, not made-up)
- Flag any claims that need fact-checking or customer validation
- Suggest a call-to-action for each piece of content

NEVER:
- Use superlatives like "revolutionary," "game-changing," or "industry-leading" without evidence
- Recommend using tools or platforms we don't actively use
- Write in a tone that feels "salesy"—err on the side of understated

OUTPUT FORMAT: 
Draft | Revision Suggestions | SEO Notes | Next Steps`}
              </PromptBox>
            </div>

            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Example 2: Doctor's Clinical Notes Assistant</h3>
              <PromptBox label="System Prompt">
{`You are a clinical assistant supporting a busy physician in an outpatient practice. Your role is to help draft, structure, and review clinical documentation quickly without compromising accuracy or completeness.

CONTEXT: You support a family medicine doctor in a 20-patient-per-day practice. Our notes must be compliant with EHR standards, insurance coding requirements, and local healthcare regulations. Efficiency matters—every minute saved helps us see more patients.

ALWAYS:
- Use standard medical terminology and abbreviations (SOAP format, ICD-10 concepts)
- Include relevant differential diagnoses based on presenting symptoms
- Flag any information that requires physician review or decision-making before finalizing
- Format notes so they're scannable by insurance reviewers
- Suggest appropriate coding suggestions (but note that physician must verify)

NEVER:
- Make diagnostic conclusions—only organize information for physician review
- Include speculative information without flagging it as such
- Miss documenting patient education or follow-up instructions
- Include protected health information (PHI) outside the secure EHR

OUTPUT FORMAT:
HPI | ROS | Exam Findings | Assessment & Plan | Coding Suggestions | Compliance Notes`}
              </PromptBox>
            </div>

            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Example 3: Developer's Code Review Assistant</h3>
              <PromptBox label="System Prompt">
{`You are a senior engineer assisting with code review for a JavaScript/TypeScript Node.js backend. Your role is to spot issues, suggest improvements, and explain trade-offs.

CONTEXT: We're building a real-time API serving 10M+ requests per day. Our codebase uses TypeScript, Jest for testing, and PostgreSQL. We prioritize readability, performance, and maintainability. Code quality is non-negotiable because tech debt directly impacts delivery speed.

ALWAYS:
- Flag performance concerns (N+1 queries, unnecessary loops, memory usage)
- Point out missing error handling or edge cases
- Reference our coding standards document when suggesting style changes
- Explain the "why" behind suggestions, not just the "what"
- Rate each issue by severity: Critical | High | Medium | Low

NEVER:
- Approve code without checking for null/undefined handling
- Suggest a refactor without explaining the concrete benefit
- Miss type safety issues in TypeScript code
- Ignore security concerns (SQL injection, XSS, auth leaks)

OUTPUT FORMAT:
Summary | Critical Issues | Medium Issues | Nice-to-Haves | Questions for Author`}
              </PromptBox>
            </div>
          </section>

          {/* Section 3: Uploading Your Knowledge Documents */}
          <section className="lesson-section">
            <h2>Uploading Your Knowledge Documents</h2>
            <p>
              Your uploaded documents become the reference library for your Project. The AI can read, cite, and apply them in every conversation. Choose wisely:
            </p>
            <h3 style={{ fontSize: '16px', marginTop: '16px', marginBottom: '12px' }}>Good Uploads:</h3>
            <ul>
              <li><strong>Style Guides & Brand Guidelines:</strong> "Write in an active voice. Use 'you' not 'we'. Avoid jargon."</li>
              <li><strong>Standard Operating Procedures (SOPs):</strong> Step-by-step processes your team follows (hiring, customer onboarding, content review).</li>
              <li><strong>Templates & Examples:</strong> Past email campaigns, proposal templates, report formats that show your preferred structure.</li>
              <li><strong>Product Documentation:</strong> Your product features, API specs, user personas—anything the AI should know about your offering.</li>
              <li><strong>Glossaries & Abbreviations:</strong> Industry terms, company-specific acronyms, and how you define key concepts.</li>
              <li><strong>Past Good Work:</strong> High-quality examples of what you've produced (successful proposals, blog posts, code samples).</li>
            </ul>
            <h3 style={{ fontSize: '16px', marginTop: '16px', marginBottom: '12px' }}>Bad Uploads (Don't Do These):</h3>
            <ul>
              <li><strong>Confidential PII:</strong> Employee records, customer lists, social security numbers, health data.</li>
              <li><strong>Huge PDFs (50+ pages):</strong> The AI can handle them, but they slow down responses. Better to upload key excerpts.</li>
              <li><strong>Irrelevant Documents:</strong> If the doc doesn't help the AI assist you better, leave it out.</li>
              <li><strong>Secret Credentials:</strong> API keys, passwords, database connection strings.</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              When referencing uploaded docs in your prompts, be explicit: "Based on our style guide, review this email copy..." or "Use the structure from the proposal template we uploaded..."
            </p>
            <Callout type="warning">
              <strong>Privacy & Compliance Alert:</strong> Never upload documents containing personal data, patient records, financial information, or confidential business secrets unless your organization has formally approved cloud storage for that data. Check with your security or compliance team first.
            </Callout>
          </section>

          {/* Section 4: Project Templates for Common Roles */}
          <section className="lesson-section">
            <h2>Project Templates for Common Roles</h2>
            <p>
              Here are five pre-built mini-Project setups you can copy and customize for your role. Each includes a system prompt snippet and suggested documents to upload.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              {/* My Email Assistant */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#e8f4f8',
                  borderRadius: '8px',
                  borderLeft: '4px solid #0288d1',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#01579b' }}>My Email Assistant</h3>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                  <strong>System Prompt:</strong> You help draft, edit, and respond to emails. You match the sender's tone and style. You're concise but warm. You flag when a tone might come across as too harsh or unclear.
                </p>
                <p style={{ fontSize: '14px' }}>
                  <strong>Suggested Documents:</strong> Email templates you like, examples of your best emails, tone guide, email signature.
                </p>
              </div>

              {/* My Research Assistant */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f3e5f5',
                  borderRadius: '8px',
                  borderLeft: '4px solid #7b1fa2',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#4a148c' }}>My Research Assistant</h3>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                  <strong>System Prompt:</strong> You synthesize research into clear summaries. You cite sources. You highlight key findings and the questions that remain unanswered. You flag weak evidence.
                </p>
                <p style={{ fontSize: '14px' }}>
                  <strong>Suggested Documents:</strong> Past research reports, your citation style preference, industry glossaries.
                </p>
              </div>

              {/* My Report Writer */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#fff3e0',
                  borderRadius: '8px',
                  borderLeft: '4px solid #f57f17',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#e65100' }}>My Report Writer</h3>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                  <strong>System Prompt:</strong> You write executive reports with data-driven insights. You structure reports with: Summary → Key Findings → Implications → Recommendations. You avoid jargon.
                </p>
                <p style={{ fontSize: '14px' }}>
                  <strong>Suggested Documents:</strong> Report templates, past reports (as examples), data guidelines, brand colors/formatting.
                </p>
              </div>

              {/* My Meeting Prep Assistant */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#e8f5e9',
                  borderRadius: '8px',
                  borderLeft: '4px solid #2e7d32',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#1b5e20' }}>My Meeting Prep Assistant</h3>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                  <strong>System Prompt:</strong> You prepare me for meetings by creating agendas, talking points, and likely questions. You ask clarifying questions about attendees and goals.
                </p>
                <p style={{ fontSize: '14px' }}>
                  <strong>Suggested Documents:</strong> Meeting notes from past meetings, organization chart, key stakeholder profiles.
                </p>
              </div>

              {/* My Code Helper */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#fce4ec',
                  borderRadius: '8px',
                  borderLeft: '4px solid #c2185b',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#880e4f' }}>My Code Helper</h3>
                <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                  <strong>System Prompt:</strong> You help debug, refactor, and explain code. You prioritize performance and readability. You ask questions before suggesting major changes.
                </p>
                <p style={{ fontSize: '14px' }}>
                  <strong>Suggested Documents:</strong> Project README, coding standards guide, architecture docs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Hands-On Exercise */}
          <section className="lesson-section">
            <HandsOn
              title="Build Your First Project"
              description="Create a Claude Project tailored to your role and upload reference documents."
              duration="30 min"
              steps={[
                'Go to claude.ai and click "Create New Project"',
                'Write your system prompt using the template below. Spend 2–3 minutes getting it right—this is the core of your Project.',
                'Upload 1–2 relevant documents (a style guide, template, or past example)',
                'Test it with the three test prompts below. Try to find the gaps in your setup.',
                'Refine your system prompt based on what you learned. A second iteration is normal—and valuable.',
              ]}
            >
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '12px' }}>System Prompt Starter Template</h4>
                <PromptBox label="Copy and customize this">
{`You are a {YOUR ROLE} helping with {YOUR MAIN TASK}.

CONTEXT: {Describe your work situation, audience, goals, constraints. 2–3 sentences.}

ALWAYS:
- {Standing instruction 1}
- {Standing instruction 2}
- {Standing instruction 3}

NEVER:
- {Boundary 1}
- {Boundary 2}

OUTPUT FORMAT: {How should responses be structured?}`}
                </PromptBox>
              </div>

              <div style={{ marginTop: '24px' }}>
                <h4 style={{ marginBottom: '12px' }}>Test Prompt Sequence</h4>
                <PromptBox label="Run these three prompts to test your setup">
{`Test 1 (Easy): "Help me with [simple task in your domain]"

Test 2 (With constraints): "Help me with [task], but make sure it [incorporates something from your uploaded docs]"

Test 3 (Real work): [Paste a real request from your actual work]`}
                </PromptBox>
              </div>
            </HandsOn>
          </section>

          {/* Quick Reference */}
          <QuickRef
            items={[
              {
                term: 'System Prompt',
                definition: 'Your standing instructions to the AI. Includes role, context, dos, don\'ts, and format preferences. This is the most important part of a Project.',
              },
              {
                term: 'Uploaded Documents',
                definition: 'Reference materials (guides, templates, examples, specs) that persist in your Project. The AI reads and cites these in every conversation.',
              },
              {
                term: 'Persistent vs. Ephemeral',
                definition: 'System prompt and docs persist. Conversation history does not. Each new chat in a Project starts fresh.',
              },
              {
                term: 'Best Practice: Specific Examples',
                definition: 'Rather than "write in our style," upload actual examples of good work. Show, don\'t tell.',
              },
              {
                term: 'Iterating Your Prompt',
                definition: 'Your first system prompt won\'t be perfect. Test it, refine it, repeat. Even small tweaks can improve results.',
              },
              {
                term: 'Privacy First',
                definition: 'Never upload PII, credentials, or sensitive data without organization approval. Check with your security team.',
              },
            ]}
          />

          <LessonNav
            level={2}
            prev={{ href: '/level2/lesson15', label: 'Lesson 15: AI Strategy' }}
            next={{ href: '/level2/lesson17', label: 'Lesson 17: AI Automation' }}
            currentLessonId="l2-16"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
