import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson10() {
  return (
    <div className="lesson-layout">
      <Sidebar level={1} currentLessonId="l1-10" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={1}
            lessonNumber={10}
            duration={60}
            title="Claude Code — Deep Dive"
            subtitle="The most powerful way to use Claude. Run it locally on your computer and give it full autonomy."
            professions={['Developer', 'Analyst', 'Manager', 'Teacher', 'Business', 'Doctor']}
          />

          {/* Section 1: What is Claude Code? */}
          <section className="lesson-section">
            <h2>What is Claude Code?</h2>
            <p>
              Claude Code is a command-line tool that runs Claude on your computer with full access to your files, ability to execute code, and power to automate complex tasks. It's the most powerful way to use Claude.
            </p>

            <Callout type="info">
              <strong>For everyone:</strong> Non-developers can use Cowork Mode (Lesson 10B) to watch Claude work on their computer without touching the command line.
            </Callout>

            <h4 style={{ marginTop: '2rem' }}>Claude Code vs Web-Based Claude</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h5 style={{ marginTop: 0 }}>claude.ai (Web)</h5>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>Browser-based</li>
                  <li>Read/upload files manually</li>
                  <li>Slower at automation</li>
                  <li>Good for conversations</li>
                  <li>Free (with account)</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h5 style={{ marginTop: 0 }}>Claude Code (CLI)</h5>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>Runs on your computer</li>
                  <li>Full file system access</li>
                  <li>Execute code instantly</li>
                  <li>Powerful automation</li>
                  <li>Requires API key</li>
                </ul>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem' }}>
              <strong>Summary:</strong> Claude Code is for people who want AI to do serious work on their computer. Web-based Claude is for conversations and quick tasks.
            </p>
          </section>

          {/* Section 2: Installation */}
          <section className="lesson-section">
            <h2>Installation: Get Claude Code Running</h2>

            <HandsOn
              stepNumber={1}
              title="Get an API Key"
              duration="5 min"
              steps={[
                "Go to console.anthropic.com/keys (Anthropic Console).",
                "Sign in with your Claude account.",
                "Click 'Create Key'.",
                "Give it a name (e.g., 'Claude Code').",
                "Copy the key and save it somewhere safe (you won't see it again)."
              ]}
            >
              <Callout type="warning">
                <strong>Security:</strong> Never share your API key. Treat it like a password. If you leak it, regenerate it immediately in the console.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Install Claude Code"
              duration="5 min"
              steps={[
                "Open your terminal/command prompt.",
                "Run: npm install -g @anthropic-ai/claude-code",
                "Wait for installation to finish."
              ]}
            >
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                <strong>Don't have npm?</strong> You need Node.js. Download from nodejs.org and install. Then try the command again.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Authenticate"
              duration="5 min"
              steps={[
                "Run: claude-code auth",
                "Paste your API key when prompted.",
                "It should print 'Authentication successful'."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Verify Installation"
              duration="3 min"
              steps={[
                "Run: claude-code --version",
                "If you see a version number, you're good!"
              ]}
            >
              <Callout type="tip">
                <strong>Troubleshooting:</strong> If npm isn't found, restart your terminal. If authentication fails, check your API key.
              </Callout>
            </HandsOn>
          </section>

          {/* Section 3: Basic Usage */}
          <section className="lesson-section">
            <h2>Basic Usage: 8 Practical Examples</h2>
            <p>
              Here are 8 real tasks you can do with Claude Code right now. Try each one.
            </p>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 1: Summarize a File</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code summarize ~/Documents/long-report.pdf`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude reads the PDF and gives you a summary.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 2: Create a Spreadsheet</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code create spreadsheet of "Name,Email,Phone" data`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude creates a CSV file with sample data.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 3: Fix Grammar in a Text File</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code "Fix grammar in ~/Documents/essay.txt and save as essay-fixed.txt"`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude edits your file and creates a corrected version.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 4: Organize Files by Type</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code "Organize ~/Downloads: move images to Images/, documents to Documents/"`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude moves files into organized folders.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 5: Analyze a CSV File</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code "Analyze sales data in ~/Data/sales.csv. Show trends and top performers."`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude reads the CSV, does analysis, and shows results.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 6: Write Code</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code "Write a Python script that counts words in a text file"`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude writes the code and saves it.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 7: Create a Chart</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code "Create a bar chart from sales.csv and save as chart.png"`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude generates a visualization.
              </p>
            </div>

            <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Example 8: Write Tests</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
                {`claude-code "Write pytest tests for the function in app.py"`}
              </pre>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Claude writes comprehensive tests.
              </p>
            </div>
          </section>

          {/* Section 4: Skills */}
          <section className="lesson-section">
            <h2>Skills: Teach Claude Code Your Workflows</h2>
            <p>
              A "Skill" is a custom instruction file that teaches Claude Code how to do something specific to your work. Once you create a Skill, Claude uses it automatically.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>What is a SKILL.md File?</h4>
            <p>
              It's a markdown file that describes a workflow. Claude Code reads it and understands what you want. You save it in your project folder, and Claude uses it.
            </p>

            <PromptBox label="Example SKILL.md File">
              {`# Skill: Weekly Report Generator

## What This Does
Reads weekly sales data from a CSV, creates a summary, and formats it as a nice HTML report.

## How to Use
\`claude-code "Generate weekly report"\`

## Steps
1. Load sales data from ~/data/weekly_sales.csv
2. Calculate: total revenue, top 3 products, churn rate
3. Create a table with these metrics
4. Format as HTML with a company header
5. Save as ~/reports/weekly_report_[DATE].html

## Output Format
- Title: "Weekly Sales Report - [Date]"
- Metrics in a table
- Insights in bullet points
- Professional CSS styling`}
            </PromptBox>

            <p style={{ marginTop: '1.5rem' }}>
              Now, any time you run Claude Code in that folder, it reads the SKILL.md file and understands exactly what to do.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>How to Create a Skill</h4>
            <ol>
              <li>Create a file called "SKILL.md" in your project folder.</li>
              <li>Write: the skill name, what it does, how to use it, the steps, and expected output.</li>
              <li>Save it.</li>
              <li>Run: <code style={{ backgroundColor: '#f0f0f0', padding: '0.25rem 0.5rem' }}>claude-code</code> and describe what you want. Claude reads the SKILL.md automatically.</li>
            </ol>
          </section>

          {/* Section 5: Building Agents with CLAUDE.md */}
          <section className="lesson-section">
            <h2>Building Agents with CLAUDE.md</h2>
            <p>
              A "CLAUDE.md" file is like SKILL.md but more powerful. It tells Claude Code: "Here's my project, here are my standards, here's how I want you to work."
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>What Goes in CLAUDE.md?</h4>
            <ul>
              <li>Your project structure (where code lives, what each folder does)</li>
              <li>Coding standards (use TypeScript, React, this folder structure)</li>
              <li>Tech stack and dependencies</li>
              <li>How to run tests, build, deploy</li>
              <li>Common tasks and how to do them</li>
              <li>Your team's style guide</li>
              <li>Tools available (npm scripts, CLI tools)</li>
            </ul>

            <PromptBox label="Example CLAUDE.md for a Web Project">
              {`# Claude Code Configuration for MyApp

## Project Structure
- /src - React components
- /tests - Jest tests
- /docs - Documentation
- /scripts - Build and deploy scripts

## Tech Stack
- React 18 + TypeScript
- TailwindCSS for styling
- Jest for testing
- Vite for bundling

## Code Standards
- Use functional components and hooks
- Prefer TypeScript interfaces over types
- Write tests for all features
- Use descriptive variable names
- Keep components under 300 lines

## Running Tasks
- npm test - Run all tests
- npm run build - Create production build
- npm run dev - Start dev server
- npm run format - Auto-format code

## Common Tasks
When asked to add a feature:
1. Create component in /src/components
2. Write tests in /tests
3. Add to main app
4. Run tests to verify
5. Create concise commit message

## Style Guide
- Use em/rem for sizes, not px
- Prefer semantic HTML
- Accessibility is non-negotiable
- Mobile-first responsive design`}
            </PromptBox>

            <p style={{ marginTop: '1.5rem' }}>
              Save this in your project root as "CLAUDE.md". Now, Claude Code will follow all these conventions automatically.
            </p>
          </section>

          {/* Section 6: Cowork Mode */}
          <section className="lesson-section">
            <h2>Cowork Mode: For Non-Developers</h2>
            <p>
              If the command line feels intimidating, Cowork Mode is for you. Claude Code can see your screen and move your mouse. You stay in control but let Claude handle the repetitive work.
            </p>

            <Callout type="info">
              <strong>Cowork Mode:</strong> Available on Mac. Shows Claude's cursor and actions on your screen. You can watch, pause, or take over anytime.
            </Callout>

            <h4 style={{ marginTop: '2rem' }}>Example Cowork Session</h4>
            <p style={{ fontSize: '0.9rem' }}>
              You: "Organize my Downloads folder. Show me what you're going to move before you do it."
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
              Claude Code shows you the plan, waits for approval, then executes. You can stop it anytime.
            </p>
          </section>

          {/* Section 7: Full Project Walkthrough */}
          <section className="lesson-section">
            <h2>Full Project Walkthrough: Analyzing CSV and Creating Report</h2>
            <p>
              Here's a real-world example: analyzing sales data and creating a report.
            </p>

            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h4 style={{ marginTop: 0 }}>Step 1: Prepare Your File</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Create a CSV file called "sales_data.csv" with columns: Date, Product, Revenue, Quantity.
              </p>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Step 2: Run Claude Code</h4>
              <pre style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                {`claude-code "Analyze sales_data.csv. Show: total revenue, top 5 products, monthly trends. Create an HTML report."`}
              </pre>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Step 3: Claude Code Works</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Claude Code:
              </p>
              <ol style={{ fontSize: '0.9rem', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Reads your CSV file</li>
                <li>Calculates revenue, trends, top products</li>
                <li>Creates Python code for analysis</li>
                <li>Runs the code</li>
                <li>Generates an HTML report with charts</li>
                <li>Saves it to "report.html"</li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>Step 4: You Get Results</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Open "report.html" in your browser. You have a professional report with analysis and charts.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                <strong>Time saved:</strong> 30+ minutes of manual work done in 2 minutes.
              </p>
            </div>
          </section>

          {/* Section 8: Hands-On */}
          <section className="lesson-section">
            <h2>Hands-On: 3 Tracks</h2>
            <p style={{ padding: '1rem', backgroundColor: '#f0f8ff', borderRadius: '4px', marginTop: '1.5rem' }}>
              <strong>Choose ONE track based on your comfort level.</strong>
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h4>Track A: Non-Technical Users (Cowork Mode)</h4>
              <p style={{ color: '#666' }}>Difficulty: Easy | Time: 15 min</p>
              <HandsOn
                stepNumber={1}
                title="Install Claude Code"
                duration="10 min"
                steps={[
                  "Follow the installation steps from Section 2.",
                  "You don't need to understand the command line — just follow the steps."
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={2}
                title="Try Cowork Mode"
                duration="5 min"
                steps={[
                  "Open Claude Code (or ask someone to help).",
                  "Tell it: 'Organize my Downloads folder by file type.'",
                  "Watch it work on your screen. Approve actions as it goes."
                ]}
              >
              </HandsOn>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Track B: Intermediate Users (Basic Commands)</h4>
              <p style={{ color: '#666' }}>Difficulty: Medium | Time: 20 min</p>
              <HandsOn
                stepNumber={1}
                title="Install & Authenticate"
                duration="10 min"
                steps={[
                  "Follow Section 2: Installation completely.",
                  "Test with: claude-code --version"
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={2}
                title="Run 3 Examples"
                duration="10 min"
                steps={[
                  "Try Example 1: Summarize a file (from Section 3)",
                  "Try Example 4: Organize files",
                  "Try Example 5: Analyze a CSV (create sample data first)"
                ]}
              >
              <Callout type="tip">
                Start simple. Celebrate small wins. You're learning a powerful tool.
              </Callout>
              </HandsOn>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Track C: Advanced Users (Skills & Agents)</h4>
              <p style={{ color: '#666' }}>Difficulty: High | Time: 30 min</p>
              <HandsOn
                stepNumber={1}
                title="Create a SKILL.md"
                duration="10 min"
                steps={[
                  "In a project folder, create 'SKILL.md'.",
                  "Copy the Example SKILL.md from Section 4.",
                  "Customize it for a real workflow you do regularly."
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={2}
                title="Create a CLAUDE.md"
                duration="10 min"
                steps={[
                  "In the same folder, create 'CLAUDE.md'.",
                  "Copy the Example from Section 5.",
                  "Customize it for your tech stack and standards."
                ]}
              >
              </HandsOn>
              <HandsOn
                stepNumber={3}
                title="Run an Agent Task"
                duration="10 min"
                steps={[
                  "In that folder, run: claude-code \"[Your task description]\"",
                  "Watch Claude Code read SKILL.md and CLAUDE.md automatically.",
                  "It will follow all your conventions."
                ]}
              >
              </HandsOn>
            </div>
          </section>

          {/* QuickRef */}
          <section className="lesson-section">
            <QuickRef
              title="Claude Code Quick Reference"
              sections={[
                {
                  title: 'Installation',
                  content: '1. npm install -g @anthropic-ai/claude-code | 2. Get API key from console.anthropic.com/keys | 3. claude-code auth | 4. Paste key'
                },
                {
                  title: '10 Useful Commands',
                  content: 'claude-code summarize [file] | claude-code "analyze [file]" | claude-code "create [thing]" | claude-code "organize [folder]" | claude-code "fix [task]" | claude-code "write [type] code" | claude-code "test [file]" | claude-code "export [format]"'
                },
                {
                  title: 'SKILL.md Template',
                  content: 'What it does | How to use | Steps | Output format. Save as SKILL.md in your project.'
                },
                {
                  title: 'CLAUDE.md Template',
                  content: 'Project structure | Tech stack | Code standards | Running tasks | Common workflows | Style guide. Save as CLAUDE.md in root.'
                },
                {
                  title: 'Cowork Mode (Non-Dev)',
                  content: 'Watch Claude work on your screen. Approve actions. Take over anytime. Available on Mac.'
                },
                {
                  title: 'Security',
                  content: 'Never share API key. Treat like password. Regenerate if leaked. Use .env file to store securely.'
                }
              ]}
            />
          </section>

          <LessonNav
            lessonId="l1-10"
            prev={{ href: '/level1/lesson9', title: 'MCP — Connect AI to Your World' }}
            next={{ href: '/level1/lesson11', title: 'Responsible AI & What\'s Next' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
