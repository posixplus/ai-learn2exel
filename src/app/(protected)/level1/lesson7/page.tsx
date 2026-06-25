import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson7() {
  return (
    <div className="lesson-layout">
      <Sidebar level={1} currentLessonId="l1-7" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={1}
            lessonNumber={7}
            duration={55}
            title="Custom AI Tools"
            subtitle="Create specialist AI assistants that remember your context, learn your style, and work exactly how you want."
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor']}
          />

          {/* Section 1: What Are Custom AI Tools? */}
          <section className="lesson-section">
            <h2>What Are Custom AI Tools?</h2>
            <p>
              A custom AI tool is a personalized version of an AI that "knows" your role, your preferences, your style, and your domain knowledge. Instead of explaining yourself every time, you set it up once, and it remembers forever.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Generalist AI</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>ChatGPT out of the box:</strong> Knows everything about everything, but nothing about YOUR business, YOUR students, or YOUR style. You have to re-explain context every conversation.
                </p>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>Problem:</strong> Repetitive context-setting. Inconsistent output format. No memory of your preferences.
                </p>
              </div>

              <div style={{ backgroundColor: '#d4edda', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>Specialist AI (Custom Tool)</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>Claude Project + Your Instructions:</strong> Knows YOUR role, YOUR company, YOUR students, YOUR style. You set it up once. Every conversation assumes this context.
                </p>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>Advantage:</strong> Faster. Consistent. Aligned with your needs. Remembers your preferences.
                </p>
              </div>
            </div>

            <h4 style={{ marginTop: '2rem' }}>The Analogy</h4>
            <p>
              Think of it like hiring a consultant. A generalist consultant needs to ask you basic questions every time: "What's your industry? Who are your customers? What's your budget?" A specialist consultant already knows this. You just say "here's the problem" and they dive in.
            </p>

            <Callout type="info">
              <strong>Three ways to create custom AI tools:</strong> Claude Projects (Anthropic), Custom GPTs (OpenAI), Gems (Google). All work similarly: set system instructions once, the AI remembers them forever.
            </Callout>
          </section>

          {/* Section 2: Claude Projects Deep Dive */}
          <section className="lesson-section">
            <h2>Claude Projects Deep Dive</h2>
            <p>
              Claude Projects is the easiest, most powerful way to create a custom AI. Here's how.
            </p>

            <HandsOn
              stepNumber={1}
              title="Create a New Project"
              duration="2 min"
              steps={[
                "Go to claude.ai",
                "Look for 'Projects' in the sidebar (or create a new Project button).",
                "Click 'New Project'.",
                "Give it a name (e.g., 'My Teaching Assistant', 'Data Analysis Bot')."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Write System Instructions"
              duration="10 min"
              steps={[
                "In the Project, find the 'Project Instructions' field.",
                "Write instructions that tell Claude: who you are, what you do, your style, your constraints.",
                "Be specific. The more detail, the better the AI performs.",
                "See examples below."
              ]}
            >
              <p style={{ marginTop: '1rem' }}>
                <strong>What to include in Project Instructions:</strong>
              </p>
              <ul>
                <li>Your role and expertise (e.g., "You are a business analyst")</li>
                <li>Your domain knowledge (e.g., "You work in SaaS")</li>
                <li>Your preferences (e.g., "Always use bullet points")</li>
                <li>Your tone (e.g., "Professional but conversational")</li>
                <li>Key constraints (e.g., "Never share real company names")</li>
              </ul>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Add Knowledge Documents"
              duration="5 min"
              steps={[
                "In the Project, upload documents (PDFs, text files, images).",
                "Upload things the AI should reference: style guides, company policies, previous work, templates.",
                "The AI will use these as background knowledge when you ask questions."
              ]}
            >
              <Callout type="tip">
                You can upload up to 20 files. Good candidates: past work samples, templates, brand guidelines, customer lists, technical documentation.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Start Using It"
              duration="5 min"
              steps={[
                "Save your Project.",
                "Go to the Project.",
                "Type a message. The AI will respond using your instructions and documents as context."
              ]}
            >
              <p style={{ marginTop: '1rem' }}>
                <strong>Pro tip:</strong> Each Project has its own conversation history. You can have multiple long conversations within one Project, and the AI remembers all of them.
              </p>
            </HandsOn>

            <h4 style={{ marginTop: '2rem' }}>Full Example: Teacher's AI Assistant</h4>
            <PromptBox label="Project Instructions for a Teacher">
              {`YOU ARE AN EXPERIENCED ELEMENTARY TEACHER'S ASSISTANT.

ABOUT THE TEACHER:
- You work with 3rd graders (8-9 years old)
- Your subject is math and reading
- You value hands-on learning and differentiation
- You teach in a diverse, low-income public school

YOUR JOB:
You help create lesson plans, activities, assessments, and communications. You make teaching faster and more creative.

YOUR STYLE:
- Always use age-appropriate language
- Suggest activities that use cheap or free materials (no expensive supplies)
- Include strategies for students with different learning levels
- Suggest ways to involve families and home learning
- Be encouraging and practical (not overly academic)

YOUR GUARDRAILS:
- Never create homework that takes more than 20 minutes
- Always include accommodations for English language learners
- Suggest assessment methods that don't require much grading time
- Avoid screens when possible (we value play and movement)

FORMATS I LIKE:
- Lesson plans: Objective, Materials, Steps (with timing), Assessment, Extensions
- Activities: Clear instructions, manipulatives/materials, differentiation
- Parent communication: Warm, encouraging, specific examples, "try at home" ideas`}
            </PromptBox>

            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Now, every time this teacher opens the Project and asks for help, the AI knows exactly who they are, what they need, and how to respond. No re-explaining.
            </p>
          </section>

          {/* Section 3: ChatGPT Custom GPTs */}
          <section className="lesson-section">
            <h2>ChatGPT Custom GPTs: An Alternative</h2>
            <p>
              If you use ChatGPT (OpenAI), you can create Custom GPTs. The concept is the same as Claude Projects, but the interface is different.
            </p>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>How to Create a Custom GPT</h4>
              <ol>
                <li>In ChatGPT (paid tier), click "Create" → "Create a GPT"</li>
                <li>Give it a name and description</li>
                <li>In "Instructions," write your system prompt (same as Claude Projects)</li>
                <li>Upload files (knowledge documents)</li>
                <li>Configure capabilities (web search, code execution, image generation)</li>
                <li>Save and start using</li>
              </ol>
            </div>

            <PromptBox label="Example Custom GPT: Business Professional">
              {`You are a strategic business consultant specializing in growth, positioning, and market analysis. You work with executives, entrepreneurs, and product leaders.

STYLE: Direct, data-driven, but accessible. Use 80/20 thinking. Favor action over perfection.

ALWAYS STRUCTURE RESPONSES AS:
1. Key Finding (1-2 sentences)
2. Why It Matters (business impact)
3. How to Act (specific next steps)
4. Risks/Considerations (what could go wrong)

PREFERENCES:
- Frameworks over narratives
- Questions before jumping to answers
- Real examples over theory
- Measurable outcomes over intentions`}
            </PromptBox>
          </section>

          {/* Section 4: Google Gemini Gems */}
          <section className="lesson-section">
            <h2>Google Gemini Gems</h2>
            <p>
              Google Gemini is adding a feature called "Gems" (similar to Projects and Custom GPTs). Here's what you need to know.
            </p>

            <Callout type="info">
              Gems are still rolling out. Availability depends on your Gemini tier. When available, the process is similar: create a Gem, write instructions, upload documents, start using.
            </Callout>

            <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Example Gem: Student Research Assistant</h4>
              <PromptBox label="Gem Instructions for a Student">
                {`You help high school students with research and writing. Your goal is not to do the work FOR them, but to help them think more clearly.

YOUR JOB:
- Ask clarifying questions before giving answers
- Suggest research directions, not final answers
- Help them structure their thinking
- Point out logical gaps or weak claims
- Help them practice academic writing

YOUR RULES:
- Never write essays for them
- Never give test answers
- Encourage them to use primary sources
- Remind them to cite sources
- Challenge them to go deeper`}
              </PromptBox>
            </div>
          </section>

          {/* Section 5: What Makes a Great Custom AI */}
          <section className="lesson-section">
            <h2>What Makes a Great Custom AI? (5 Elements)</h2>
            <p>
              Whether it's a Claude Project, Custom GPT, or Gem, here are the 5 elements that separate "okay" from "excellent":
            </p>

            <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fce4ec', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>1. Role & Purpose (Crystal Clear)</h4>
                <p>
                  The AI knows exactly what job it's doing and for whom. Not "help with writing" (vague), but "help a 3rd-grade teacher write differentiated math lessons in 10 minutes" (specific).
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>How to write it:</strong> Start with "You are a [role]. Your job is to [specific outcome]."
                </p>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>2. Tone (How You Sound)</h4>
                <p>
                  Define your tone. Professional? Friendly? Formal? Casual? Encouraging? The AI adopts your voice.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Example:</strong> "Tone: Professional but warm. No jargon. Encouraging even when pointing out problems."
                </p>
              </div>

              <div style={{ backgroundColor: '#e1f5fe', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>3. Knowledge Context (What It Should Know)</h4>
                <p>
                  What domain knowledge should the AI have? Specific company info? Industry standards? Upload documents or explain in the instructions.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Example:</strong> Upload your company handbook, style guide, org chart, or previous work samples.
                </p>
              </div>

              <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>4. Output Format (How Responses Should Look)</h4>
                <p>
                  Should responses be bullet points? Tables? Essays? Long form? Tell the AI explicitly.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Example:</strong> "Always format responses as: Executive Summary (1 para) → Key Points (3-5 bullets) → Recommendations (numbered)."
                </p>
              </div>

              <div style={{ backgroundColor: '#f1f8e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>5. Guardrails (What NOT to Do)</h4>
                <p>
                  What should the AI never do? Avoid certain topics? Warn before something risky? State your boundaries.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Example:</strong> "Never include real student names in examples. Always flag if you're uncertain about accuracy."
                </p>
              </div>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Fill-In Template</h4>
            <PromptBox label="Custom AI Template (Copy This)">
              {`ROLE & PURPOSE:
You are a [YOUR ROLE]. Your job is to [SPECIFIC OUTCOME for YOUR CONTEXT].

TONE:
[Describe how you should sound: professional, warm, casual, encouraging, etc.]

KNOWLEDGE CONTEXT:
[What domain knowledge should you have? What documents should you reference?]

OUTPUT FORMAT:
[How should responses be structured? Bullets? Tables? Essays? Be specific.]

GUARDRAILS:
[What should you NEVER do? What should you flag or warn about?]

KEY PREFERENCES:
[Any other specific preferences? Speed? Detail level? Creativity level?]`}
            </PromptBox>
          </section>

          {/* Section 6: 6 Custom AI Ideas by Profession */}
          <section className="lesson-section">
            <h2>6 Custom AI Ideas by Profession</h2>
            <p>
              Here are starter prompts for 6 professions. Copy these and customize them for your specific needs.
            </p>

            <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fce4ec', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #e91e63' }}>
                <h4 style={{ marginTop: 0 }}>For Teachers</h4>
                <PromptBox label="Teacher AI Assistant">
                  {`You are an expert elementary/secondary teacher assistant. You help create lessons, activities, assessments, and parent communications. You understand [GRADE LEVEL] development, differentiation, and limited budgets. Always suggest hands-on, engaging activities. Include accommodations for diverse learners. Keep it practical and fast.`}
                </PromptBox>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
                <h4 style={{ marginTop: 0 }}>For Managers/Leaders</h4>
                <PromptBox label="Leadership Advisor">
                  {`You are a strategic advisor for managers and leaders. You help with team building, difficult conversations, performance management, project planning, and stakeholder communication. You're direct, data-informed, and focused on action. Consider team dynamics, organizational culture, and practical constraints.`}
                </PromptBox>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #4caf50' }}>
                <h4 style={{ marginTop: 0 }}>For Developers</h4>
                <PromptBox label="Code & Architecture Assistant">
                  {`You are an expert software architect and code reviewer. You help with system design, code quality, debugging, testing strategy, and technical documentation. You favor clarity over cleverness, pragmatism over perfection. Include code examples. Flag security and performance concerns.`}
                </PromptBox>
              </div>

              <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ff9800' }}>
                <h4 style={{ marginTop: 0 }}>For Analysts/Data People</h4>
                <PromptBox label="Data Analysis Specialist">
                  {`You are a data analyst and business intelligence expert. You help interpret data, identify trends, build dashboards, and write compelling findings. Always lead with the insight (so what?), then the supporting data. Format findings for non-technical audiences.`}
                </PromptBox>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #9c27b0' }}>
                <h4 style={{ marginTop: 0 }}>For Healthcare Providers</h4>
                <PromptBox label="Clinical Documentation Assistant">
                  {`You assist healthcare providers with clinical documentation, patient communication, and treatment planning. You follow HIPAA guidelines (never use real patient names/IDs). Use clear, jargon-free language for patient communications. Be accurate about medical information.`}
                </PromptBox>
              </div>

              <div style={{ backgroundColor: '#e0f2f1', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #009688' }}>
                <h4 style={{ marginTop: 0 }}>For Business/Product People</h4>
                <PromptBox label="Business Strategy Partner">
                  {`You are a business strategist. You help with market research, competitive analysis, positioning, pricing, and go-to-market planning. Always connect to metrics and business outcomes. Question assumptions. Think through second and third-order effects.`}
                </PromptBox>
              </div>
            </div>
          </section>

          {/* Section 7: Hands-On */}
          <section className="lesson-section">
            <h2>Hands-On: Create Your First Claude Project</h2>

            <HandsOn
              stepNumber={1}
              title="Set Up Your Project"
              duration="5 min"
              steps={[
                "Go to claude.ai.",
                "Click 'Create Project' (or find Projects in the sidebar).",
                "Name it something descriptive, like 'My [Job Title] Assistant' or '[Task Name] Helper'.",
                "Click 'Create'."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Write Your Project Instructions"
              duration="15 min"
              steps={[
                "In the Project, find 'Project Instructions.'",
                "Copy the template from Section 5 above.",
                "Fill in all 5 sections: Role & Purpose, Tone, Knowledge Context, Output Format, Guardrails.",
                "Be specific. The more detail, the better the AI will perform.",
                "Save."
              ]}
            >
              <Callout type="tip">
                Start simple. You can always refine your instructions after a few test conversations.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Add Knowledge Documents (Optional)"
              duration="10 min"
              steps={[
                "Think of 2-3 documents that would help the AI understand your work.",
                "Examples: past projects, templates, style guides, checklists, examples of good output.",
                "Upload them to your Project.",
                "Tell the AI in your instructions that these documents are available."
              ]}
            >
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Not required, but it makes the AI much more aligned with your needs.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Test It With 3 Real Tasks"
              duration="15 min"
              steps={[
                "Open your Project.",
                "Give it a real task you'd actually do at work/school.",
                "Look at the response. Does it match what you need? Is the tone right? Is the format useful?",
                "Do this 3 times with different tasks.",
                "If something is off, refine your Project Instructions and test again."
              ]}
            >
              <Callout type="info">
                Your Project gets better each time. After 3-5 test conversations, it's usually really solid.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={5}
              title="Start Using It for Real"
              duration="Ongoing"
              steps={[
                "Use your Project for actual work.",
                "Save good outputs to a folder for reference.",
                "After 1 month of use, revisit your instructions. What's working? What needs tweaking?",
                "You're building a personal AI that gets better over time."
              ]}
            >
            </HandsOn>
          </section>

          {/* QuickRef */}
          <section className="lesson-section">
            <QuickRef
              title="Custom AI Tools Quick Reference"
              sections={[
                {
                  title: 'Three Ways to Build',
                  content: 'Claude Projects (easiest, best for most people) | ChatGPT Custom GPTs (if you use ChatGPT) | Google Gemini Gems'
                },
                {
                  title: 'The 5 Elements',
                  content: '1. Role & Purpose (clear job) | 2. Tone (how you sound) | 3. Knowledge Context (what it should know) | 4. Output Format (how responses look) | 5. Guardrails (what not to do)'
                },
                {
                  title: 'How to Start',
                  content: '1. Create Project/GPT | 2. Write instructions (use the template) | 3. Upload documents | 4. Test with 3 real tasks | 5. Refine based on results'
                },
                {
                  title: 'Common Mistakes',
                  content: 'Too vague instructions ("help with writing") | Not specific enough about your role/context | No examples of good output | Not testing before real use'
                },
                {
                  title: 'Best Practices',
                  content: 'Use specific, vivid language. Include constraints (what NOT to do). Upload examples of good output. Refine after 5 conversations. Keep it in one place for easy access.'
                },
                {
                  title: 'Pro Tips',
                  content: 'Create multiple Projects for different roles (Teacher Project, Manager Project, etc.) | Revisit instructions monthly | Share your best Projects with colleagues'
                }
              ]}
            />
          </section>

          <LessonNav
            lessonId="l1-7"
            prev={{ href: '/level1/lesson6', title: 'Advanced Prompting & Workflows' }}
            next={{ href: '/level1/lesson8', title: 'AI Agents Explained' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
