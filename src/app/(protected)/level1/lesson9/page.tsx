import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson9() {
  return (
    <div className="lesson-layout">
      <Sidebar level={1} currentLessonId="l1-9" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={1}
            lessonNumber={9}
            duration={50}
            title="MCP - Connect AI to Your World"
            subtitle="Let AI access your files, emails, calendar, and other apps. Connect your world to AI."
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor']}
          />

          {/* Section 1: What is MCP? */}
          <section className="lesson-section">
            <h2>What is MCP?</h2>
            <p>
              MCP stands for "Model Context Protocol." It's a standard way to connect AI systems to your tools, files, and apps so AI can access them directly.
            </p>

            <Callout type="info">
              <strong>The USB-C Analogy:</strong> MCP is like USB-C for AI. Just like USB-C is a standard connector that works with thousands of devices, MCP is a standard way to connect AI to any app, file system, or data source.
            </Callout>

            <h4 style={{ marginTop: '2rem' }}>Before and After MCP</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffebee', padding: '1.5rem', borderRadius: '8px' }}>
                <h5 style={{ marginTop: 0 }}>Before MCP (Isolated)</h5>
                <p><strong>Problem:</strong> AI can only see what you copy/paste.</p>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>Want AI to read your emails? Copy/paste them manually.</li>
                  <li>Want AI to check your calendar? Tell it the events in text.</li>
                  <li>Want AI to access your files? Upload them one by one.</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: '#d32f2f', fontWeight: 'bold' }}>
                  Result: Slow, error-prone, limited access.
                </p>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h5 style={{ marginTop: 0 }}>With MCP (Connected)</h5>
                <p><strong>Advantage:</strong> AI directly accesses your real apps and files.</p>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>AI can read your Gmail inbox in real-time.</li>
                  <li>AI can check your Google Calendar directly.</li>
                  <li>AI can browse your Google Drive and access any file.</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: '#388e3c', fontWeight: 'bold' }}>
                  Result: Fast, accurate, powerful automation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: How MCP Works */}
          <section className="lesson-section">
            <h2>How MCP Works: The 3 Roles</h2>
            <p>
              MCP has three components working together:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#e3f2fd', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
                <h5 style={{ marginTop: 0 }}>1. Host (AI Application)</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  The AI system that wants to access things. Example: Claude Desktop, or Claude in your IDE.
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #9c27b0' }}>
                <h5 style={{ marginTop: 0 }}>2. Server (MCP Server)</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  A small program that connects the Host to a Resource. Example: "Gmail MCP Server" or "GitHub MCP Server".
                </p>
              </div>

              <div style={{ backgroundColor: '#e0f2f1', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #009688' }}>
                <h5 style={{ marginTop: 0 }}>3. Resource (Data/Tools)</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  The actual app, file, or data. Example: your Gmail account, your Google Drive, your GitHub repos.
                </p>
              </div>
            </div>

            <h4 style={{ marginTop: '2rem' }}>The Flow</h4>
            <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <p style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                <span style={{ backgroundColor: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-block' }}>AI Host</span>
                <span style={{ margin: '0 1rem' }}>↔ (MCP Protocol) ↔</span>
                <span style={{ backgroundColor: '#f3e5f5', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-block' }}>MCP Server</span>
                <span style={{ margin: '0 1rem' }}>↔ API ↔</span>
                <span style={{ backgroundColor: '#e0f2f1', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-block' }}>Resource (Gmail, Drive, etc.)</span>
              </p>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
                You ask the AI to do something. AI talks to the MCP Server. Server talks to the Resource. Done.
              </p>
            </div>
          </section>

          {/* Section 3: What Can You Connect? */}
          <section className="lesson-section">
            <h2>What Can You Connect? Popular MCP Servers</h2>
            <p>
              Here are the most useful MCP servers available today. You can add any of these to your AI setup.
            </p>

            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem' }}>MCP Server</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem' }}>What It Connects To</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem' }}>What AI Can Do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Gmail</td>
                    <td style={{ padding: '0.75rem' }}>Your Gmail inbox</td>
                    <td style={{ padding: '0.75rem' }}>Read emails, search, draft replies, manage labels</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Google Calendar</td>
                    <td style={{ padding: '0.75rem' }}>Your calendar events</td>
                    <td style={{ padding: '0.75rem' }}>Check schedule, create events, find free time</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Google Drive</td>
                    <td style={{ padding: '0.75rem' }}>Your files and folders</td>
                    <td style={{ padding: '0.75rem' }}>Read docs, spreadsheets, PDFs; search; organize</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Slack</td>
                    <td style={{ padding: '0.75rem' }}>Your Slack workspace</td>
                    <td style={{ padding: '0.75rem' }}>Read messages, post to channels, search</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>GitHub</td>
                    <td style={{ padding: '0.75rem' }}>Your GitHub repos</td>
                    <td style={{ padding: '0.75rem' }}>Read code, check issues, create PRs, manage repos</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Notion</td>
                    <td style={{ padding: '0.75rem' }}>Your Notion workspace</td>
                    <td style={{ padding: '0.75rem' }}>Read pages, search, query databases</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Jira</td>
                    <td style={{ padding: '0.75rem' }}>Your Jira board</td>
                    <td style={{ padding: '0.75rem' }}>Read issues, create tickets, update status</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Web Search</td>
                    <td style={{ padding: '0.75rem' }}>The internet</td>
                    <td style={{ padding: '0.75rem' }}>Search, browse, cite sources</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Local Files</td>
                    <td style={{ padding: '0.75rem' }}>Your computer's files</td>
                    <td style={{ padding: '0.75rem' }}>Read any file, write files, organize</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Databases</td>
                    <td style={{ padding: '0.75rem' }}>SQL/databases you have</td>
                    <td style={{ padding: '0.75rem' }}>Query data, run reports, analyze</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
              <strong>New servers are added constantly.</strong> Check the MCP server directory for the latest options.
            </p>
          </section>

          {/* Section 4: Setup in Claude Desktop */}
          <section className="lesson-section">
            <h2>Setup in Claude Desktop: How to Connect</h2>
            <p>
              Claude Desktop is the easiest way to use MCP. Here's how to connect servers.
            </p>

            <HandsOn
              stepNumber={1}
              title="Install Claude Desktop"
              duration="5 min"
              steps={[
                "Go to claude.ai/desktop (or search 'Claude Desktop').",
                "Download for your OS (Mac, Windows, Linux).",
                "Install and open the app."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Find the Configuration File"
              duration="5 min"
              steps={[
                "Open your file explorer/Finder.",
                "Navigate to your home directory.",
                "Find the hidden folder '.claude' (it might be hidden - show hidden files if needed).",
                "Inside, you should see a file called 'claude_desktop_config.json'.",
                "Open it with a text editor (VS Code, Notepad, etc.)."
              ]}
            >
              <Callout type="tip">
                <strong>Can't find it?</strong> Create it. The file goes in ~/.claude/claude_desktop_config.json (on Mac/Linux) or C:\Users\[YourName]\.claude\claude_desktop_config.json (on Windows).
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Add an MCP Server"
              duration="10 min"
              steps={[
                "In claude_desktop_config.json, add the MCP server you want.",
                "Here's an example JSON config (see below).",
                "Replace [YOUR_API_KEY] with real credentials if needed.",
                "Save the file.",
                "Restart Claude Desktop."
              ]}
            >
              <PromptBox label="Example Configuration: Gmail + Local Files">
                {`{
  "mcpServers": {
    "gmail": {
      "command": "node",
      "args": ["~/.claude/servers/gmail-server.js"],
      "env": {
        "GMAIL_API_KEY": "[YOUR_GMAIL_API_KEY]"
      }
    },
    "filesystem": {
      "command": "node",
      "args": ["~/.claude/servers/filesystem-server.js"],
      "env": {
        "ALLOWED_DIRECTORIES": "~/Documents,~/Desktop"
      }
    }
  }
}`}
              </PromptBox>

              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                <strong>Note:</strong> Different MCP servers have different configuration requirements. Check the server's documentation for exact setup.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Test the Connection"
              duration="5 min"
              steps={[
                "In Claude Desktop, start a new conversation.",
                "Ask Claude to use the MCP server. Example: 'Check my Gmail inbox' or 'List files in my Documents folder'.",
                "If it works, you're connected!"
              ]}
            >
              <Callout type="info">
                Claude will tell you if a server isn't connected. Check your config and API keys if it fails.
              </Callout>
            </HandsOn>
          </section>

          {/* Section 5: Use Cases by Profession */}
          <section className="lesson-section">
            <h2>Practical MCP Setups by Profession</h2>
            <p>
              Here are MCP setups that would be useful for different jobs. Copy these ideas for your role.
            </p>

            <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fce4ec', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>For Teachers</h4>
                <p><strong>Connect:</strong> Google Drive (lesson materials), Gmail (parent emails), Google Calendar (schedule)</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Use case:</strong> "Check my Google Drive for last year's lesson on fractions. Create a new version. Check my calendar to find my prep block time."
                </p>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>For Managers</h4>
                <p><strong>Connect:</strong> Gmail (emails), Google Calendar (meetings), Slack (team chat), Google Drive (docs)</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Use case:</strong> "Summarize my emails this week. Check my calendar for 1:1s. Look for action items in our Slack channel."
                </p>
              </div>

              <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>For Developers</h4>
                <p><strong>Connect:</strong> GitHub (repos), Local Files (code), Slack (team chat), Jira (issues)</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Use case:</strong> "Review my code for security issues. Check the Jira backlog. Look at my GitHub PRs."
                </p>
              </div>

              <div style={{ backgroundColor: '#fff3e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>For Analysts</h4>
                <p><strong>Connect:</strong> Google Drive (data files), Local Files (datasets), Gmail (data requests)</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Use case:</strong> "Find all CSV files in my Google Drive. Analyze sales trends. Email the results summary."
                </p>
              </div>

              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>For Business Leaders</h4>
                <p><strong>Connect:</strong> Gmail (important messages), Google Calendar (meetings), Notion (strategic docs), Slack (team updates)</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Use case:</strong> "Summarize my week: key emails, meetings, Notion updates, and team Slack messages."
                </p>
              </div>

              <div style={{ backgroundColor: '#e0f2f1', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ marginTop: 0 }}>For Healthcare Providers</h4>
                <p><strong>Connect:</strong> Local Files (patient notes, HIPAA-compliant), Email (communications)</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  <strong>Use case:</strong> "Summarize my patient files. Draft clinical notes. Check my schedule for appointments."
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Cowork Mode */}
          <section className="lesson-section">
            <h2>Cowork Mode: For Non-Developers</h2>
            <p>
              If Claude Code or MCP feels too technical, there's Cowork Mode. It's a way to let Claude work on your computer while you watch and guide.
            </p>

            <Callout type="info">
              <strong>Cowork Mode:</strong> Claude can see your screen, move your mouse, type, and take actions on your computer. You stay in control but delegate the repetitive work.
            </Callout>

            <p style={{ marginTop: '1.5rem' }}>
              Example: "Organize my Downloads folder by file type. Show me before you move anything."
            </p>

            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Cowork Mode will be covered in detail in Lesson 10 (Claude Code). For now, just know it exists as an alternative for non-technical users.
            </p>
          </section>

          {/* Section 7: Hands-On */}
          <section className="lesson-section">
            <h2>Hands-On: Connect Your First MCP Server</h2>
            <p style={{ padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '4px', marginTop: '1.5rem' }}>
              <strong>Easiest option:</strong> Connect the Local Files server. It doesn't require API keys and works immediately.
            </p>

            <HandsOn
              stepNumber={1}
              title="Install Claude Desktop"
              duration="5 min"
              steps={[
                "Download Claude Desktop from claude.ai/desktop.",
                "Install and open it."
              ]}
            >
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Set Up Local Files MCP"
              duration="10 min"
              steps={[
                "Open your home directory in a file explorer.",
                "Navigate to .claude folder (create it if it doesn't exist).",
                "Create/edit claude_desktop_config.json with this config:",
                "(See PromptBox below)"
              ]}
            >
              <PromptBox label="Local Files Configuration">
                {`{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["~/.claude/servers/filesystem-server.js"],
      "env": {
        "ALLOWED_DIRECTORIES": "~/Documents,~/Desktop,~/Downloads"
      }
    }
  }
}`}
              </PromptBox>

              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Change the directories to match folders you want Claude to access.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Test It"
              duration="5 min"
              steps={[
                "Save the config file.",
                "Restart Claude Desktop.",
                "In a new conversation, ask: 'List the files in my Documents folder.'",
                "If it works, you've successfully connected your first MCP server!"
              ]}
            >
              <Callout type="tip">
                Start with local files. Once you understand the setup, connecting other services (Gmail, Google Drive, etc.) follows the same pattern.
              </Callout>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Try a Real Task"
              duration="10 min"
              steps={[
                "Ask Claude: 'Find all PDF files in my Documents folder and summarize their names/sizes.'",
                "Or: 'Organize my Downloads folder: move images to a new 'Images' subfolder.'",
                "This is your AI actually accessing and working with your files."
              ]}
            >
            </HandsOn>
          </section>

          {/* QuickRef */}
          <section className="lesson-section">
            <QuickRef
              title="MCP Quick Reference"
              sections={[
                {
                  title: 'What is MCP?',
                  content: 'Model Context Protocol - a standard way to connect AI to your apps, files, and data.'
                },
                {
                  title: 'The 3 Roles',
                  content: 'Host (AI app like Claude) ↔ Server (connector) ↔ Resource (Gmail, Drive, GitHub, etc.)'
                },
                {
                  title: 'Popular MCP Servers',
                  content: 'Gmail | Google Calendar | Google Drive | Slack | GitHub | Notion | Jira | Web Search | Local Files | Databases'
                },
                {
                  title: 'Setup Steps',
                  content: '1. Install Claude Desktop | 2. Find ~/.claude/claude_desktop_config.json | 3. Add MCP server config | 4. Restart Claude | 5. Test'
                },
                {
                  title: 'Best First Server',
                  content: 'Local Files (no API keys needed, works immediately, super useful)'
                },
                {
                  title: 'Common Use Cases',
                  content: 'Read emails, check calendar, access files, search repos, query databases, post to Slack'
                }
              ]}
            />
          </section>

          <LessonNav
            lessonId="l1-9"
            prev={{ href: '/level1/lesson8', title: 'AI Agents Explained' }}
            next={{ href: '/level1/lesson10', title: 'Claude Code - Deep Dive' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
