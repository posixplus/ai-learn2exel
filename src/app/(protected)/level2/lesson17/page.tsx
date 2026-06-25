'use client'

import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson17() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-17" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={17}
            duration={75}
            title="Automate Real Work with AI"
            subtitle="Build workflows that run without you using Claude + automation platforms (Zapier, Make, n8n)"
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          {/* Section 1: What Is AI Automation? */}
          <section className="lesson-section">
            <h2>What Is AI Automation?</h2>
            <p>
              Here's the key difference: <strong>Manual AI</strong> = you ask Claude a question. <strong>AI Automation</strong> = a system asks Claude for you when a trigger happens. Instead of sitting down every morning and asking Claude to summarize your emails, a system watches for new emails, automatically sends them to Claude, and posts the summary to your Slack. You wake up to answers already waiting.
            </p>
            <p>
              The core model is simple: <strong>Trigger → Claude Action → Output</strong>
            </p>
            <p style={{ fontSize: '14px', fontStyle: 'italic', marginTop: '16px' }}>
              Something happens (trigger) → Claude processes it (action) → A result appears somewhere (output)
            </p>
            <p>
              Here are 5 real-world examples:
            </p>
            <ol>
              <li><strong>Email Summarizer:</strong> New email arrives in Gmail with label "To Review" → Claude reads it and writes a summary → Summary is added to a Google Sheet. You check the sheet at day's end instead of spending an hour reading emails.</li>
              <li><strong>Customer Response Generator:</strong> New customer fills out a contact form → Claude drafts a personalized response → Email is sent to the customer automatically. Fast turnaround, no manual typing.</li>
              <li><strong>Data Analysis Alert:</strong> New row added to a spreadsheet → Claude analyzes it and flags anomalies → Slack message sent if something looks wrong. You're alerted only to exceptions.</li>
              <li><strong>Weekly Briefing Generator:</strong> Every Monday 9 AM → Claude generates your Monday briefing (meeting prep, priorities, news digest) → Email delivered to your inbox. You start your week informed.</li>
              <li><strong>Meeting Action Items:</strong> Meeting transcript uploaded → Claude extracts action items and assigns owners → Google Doc updated with live checklist. No manual note-taking.</li>
            </ol>
          </section>

          {/* Section 2: The Three Automation Platforms */}
          <section className="lesson-section">
            <h2>The Three Automation Platforms</h2>
            <p>
              Three platforms dominate AI automation. Each has strengths; pick the one that fits your comfort level.
            </p>
            <div style={{ overflowX: 'auto', marginTop: '20px' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  border: '1px solid #ddd',
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Platform</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Best For</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Pros</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Zapier</td>
                    <td style={{ padding: '12px' }}>Beginners</td>
                    <td style={{ padding: '12px' }}>Easiest interface. Official Claude integration. Huge app library (5000+). Free tier available.</td>
                    <td style={{ padding: '12px' }}>Less powerful for complex logic. Pricier at scale.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Make</td>
                    <td style={{ padding: '12px' }}>Intermediate users</td>
                    <td style={{ padding: '12px' }}>Visual drag-and-drop builder. Can handle complex conditional logic. Great docs.</td>
                    <td style={{ padding: '12px' }}>Steeper learning curve. No free tier (trial only).</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>n8n</td>
                    <td style={{ padding: '12px' }}>Developers</td>
                    <td style={{ padding: '12px' }}>Open source, self-hostable. Full control. No vendor lock-in. Most powerful.</td>
                    <td style={{ padding: '12px' }}>Requires setup/hosting knowledge. Requires more learning.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '16px', fontSize: '14px' }}>
              <strong>Help Links:</strong>
              <br />
              Zapier + Claude: <a href="https://zapier.com/apps/claude/integrations" target="_blank" rel="noopener">Zapier integrations</a>
              <br />
              Make + Claude: <a href="https://www.make.com/en/help/app/anthropic-claude" target="_blank" rel="noopener">Make Claude documentation</a>
              <br />
              n8n + Claude: <a href="https://n8n.io/integrations/anthropic/" target="_blank" rel="noopener">n8n Anthropic integration</a>
            </p>
            <Callout type="info">
              <strong>Good News:</strong> You don't need to code. All three platforms let you connect Claude to hundreds of apps using a visual drag-and-drop interface. No programming required-just clicks, dropdowns, and text fields.
            </Callout>
          </section>

          {/* Section 3: Building Your First Automation */}
          <section className="lesson-section">
            <h2>Building Your First Automation in Zapier</h2>
            <p>
              Let's walk through a real automation step by step. We'll build: <strong>Email Summarizer - When a new email arrives in Gmail with a specific label, Claude summarizes it and adds it to a Google Sheet.</strong>
            </p>
            <ol>
              <li><strong>Create a Zapier Account</strong> at zapier.com. Sign up for free.</li>
              <li>
                <strong>Create a New Zap</strong>
                <ul style={{ marginTop: '8px' }}>
                  <li>Click "Create Zap"</li>
                  <li>Search for "Gmail" and select "Gmail" as your trigger</li>
                  <li>Choose trigger: "New Email Matching Search"</li>
                  <li>Authorize Zapier to access your Gmail</li>
                  <li>Set the search filter: label is "ToReview" (or your chosen label)</li>
                </ul>
              </li>
              <li>
                <strong>Add Claude Action</strong>
                <ul style={{ marginTop: '8px' }}>
                  <li>Click "Add Step" and search for "Claude" (or "Anthropic Claude")</li>
                  <li>Select the Claude action</li>
                  <li>Paste your Claude API key (from Claude.ai account settings)</li>
                  <li>Leave Model as default (the latest Claude Sonnet)</li>
                </ul>
              </li>
              <li>
                <strong>Write the Claude Prompt</strong> - Use the template below
              </li>
              <li>
                <strong>Set Output: Google Sheets</strong>
                <ul style={{ marginTop: '8px' }}>
                  <li>Add another step: "Google Sheets"</li>
                  <li>Choose action: "Append Spreadsheet Row"</li>
                  <li>Select your summary spreadsheet</li>
                  <li>Map the columns: Date | From | Subject | Summary (from Claude output)</li>
                </ul>
              </li>
              <li><strong>Test & Activate</strong> - Send yourself a test email with the label. Check the sheet.</li>
            </ol>

            <h3 style={{ marginTop: '20px', marginBottom: '12px' }}>The Claude Prompt for This Automation</h3>
            <PromptBox label="Paste this into Zapier's Claude action">
{`Summarize this email in 2-3 sentences. Focus on the key ask or information. Be concise and actionable.

Email:
From: {sender_name} ({sender_email})
Subject: {subject}
Body: {body_text}

Output format:
Summary: [Your summary here]`}
            </PromptBox>
          </section>

          {/* Section 4: 30 Automation Ideas by Role */}
          <section className="lesson-section">
            <h2>30 Automation Ideas by Role</h2>
            <p style={{ marginBottom: '24px' }}>
              Copy any of these and adapt them to your work. Each can save you 2-5 hours per week.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
              }}
            >
              {/* Column 1: Manager/Business */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#e3f2fd',
                  borderRadius: '8px',
                  borderTop: '4px solid #1976d2',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#1565c0' }}>
                  Manager/Business
                </h3>
                <ul style={{ marginBottom: 0 }}>
                  <li><strong>Weekly Report Generation:</strong> Every Friday 5 PM, Claude generates your weekly status report from Slack channel summaries.</li>
                  <li><strong>Meeting Prep:</strong> 30 mins before each meeting, Claude prepares a brief with attendee bios and talking points.</li>
                  <li><strong>Performance Summaries:</strong> New performance review submitted → Claude generates initial summary → Sent to you for review.</li>
                  <li><strong>Customer Feedback Analysis:</strong> New Typeform survey response → Claude extracts sentiment and themes → Slack notification.</li>
                  <li><strong>Project Status Updates:</strong> Daily Claude pulls from Jira/Asana and generates status for your team Slack.</li>
                  <li><strong>Competitor Monitoring:</strong> Daily Claude reads industry newsletters → Summarizes relevant news → Emailed to you.</li>
                </ul>
              </div>

              {/* Column 2: Knowledge Worker/Analyst */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f3e5f5',
                  borderRadius: '8px',
                  borderTop: '4px solid #7b1fa2',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#6a1b9a' }}>
                  Knowledge Worker/Analyst
                </h3>
                <ul style={{ marginBottom: 0 }}>
                  <li><strong>Research Digests:</strong> Daily, Claude pulls articles from RSS feeds, summarizes, and emails you the digest.</li>
                  <li><strong>Data Anomaly Alerts:</strong> Spreadsheet updated → Claude checks for outliers → Slack alert if something looks wrong.</li>
                  <li><strong>Content Calendar Updates:</strong> Client emails new campaign → Claude updates your shared content calendar.</li>
                  <li><strong>Email Drafting:</strong> You write 3 bullets, Claude expands to full professional email → Sent to you for review.</li>
                  <li><strong>Document Summarization:</strong> New PDF uploaded → Claude extracts key points → Google Doc created with summary + quotes.</li>
                  <li><strong>Trend Reports:</strong> Weekly, Claude analyzes data tables and generates trend commentary → Emailed to stakeholders.</li>
                </ul>
              </div>

              {/* Column 3: Teacher/Healthcare/Legal */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#fff3e0',
                  borderRadius: '8px',
                  borderTop: '4px solid #f57c00',
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#e65100' }}>
                  Teacher/Healthcare/Legal
                </h3>
                <ul style={{ marginBottom: 0 }}>
                  <li><strong>Lesson Plan Generation:</strong> You provide topic + grade level → Claude generates lesson plan + activities → Emailed to you.</li>
                  <li><strong>Patient Intake Summaries:</strong> New intake form submitted → Claude generates clinical summary → Added to patient file.</li>
                  <li><strong>Contract Review Alerts:</strong> New contract uploaded → Claude flags clauses needing legal review → Notification sent.</li>
                  <li><strong>Grading Assistance:</strong> Student assignment submitted → Claude provides first-pass grading + feedback → You review.</li>
                  <li><strong>Appointment Follow-ups:</strong> Appointment scheduled → 24 hrs before, Claude sends reminder to patient + preps notes for provider.</li>
                  <li><strong>Compliance Summaries:</strong> New regulation released → Claude summarizes impact for your org → Emailed to leadership.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Hands-On Exercise */}
          <section className="lesson-section">
            <HandsOn
              title="Build One Real Automation"
              description="Choose one automation that would save you actual time, then build it in Zapier."
              duration="30 min"
              steps={[
                'Choose ONE automation from the list above that would save you the most time this week.',
                'Sign up for Zapier at zapier.com (free tier available).',
                'Create a new Zap. Choose your trigger (Gmail, Google Sheets, Slack, Typeform, etc.). Authorize the app.',
                'Add Claude as the action. Write the prompt below.',
                'Test it with real data. Send yourself a test email or create a test row. Verify the output looks good.',
              ]}
            >
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '12px' }}>Prompt Template: Email Summary Automation</h4>
                <PromptBox label="Use this for email-based automations">
{`Summarize the email below in 1-2 sentences. Extract the key action or question. Be concise.

From: {sender_name}
Subject: {subject}
Body: {body_text}

Summary:`}
                </PromptBox>
              </div>

              <div style={{ marginTop: '24px' }}>
                <h4 style={{ marginBottom: '12px' }}>Prompt Template: Data Analysis Automation</h4>
                <PromptBox label="Use this for data/spreadsheet-based automations">
{`Analyze this data row and flag any concerns or insights. Be specific.

Data: {spreadsheet_row_data}

Analysis:
- Key finding: {?}
- Concern (if any): {?}
- Recommendation: {?}`}
                </PromptBox>
              </div>
            </HandsOn>
          </section>

          {/* Quick Reference */}
          <QuickRef
            items={[
              {
                term: 'Trigger → Action → Output',
                definition: 'The core automation model. Something happens (trigger), Claude processes it (action), a result appears somewhere (output).',
              },
              {
                term: 'Zapier',
                definition: 'Best for beginners. Easiest interface. Has official Claude integration. Drag-and-drop, no coding.',
              },
              {
                term: 'Make (Integromat)',
                definition: 'More powerful visual builder. Better for complex logic. Intermediate learning curve.',
              },
              {
                term: 'n8n',
                definition: 'Open source and self-hostable. Most powerful. Best for developers. Requires setup knowledge.',
              },
              {
                term: 'Prompt for Automation',
                definition: 'Must be clear and structured. Include placeholders like {email_body} or {data_row}. Test multiple times.',
              },
              {
                term: 'Common First Automation',
                definition: 'Email summarizer or data analyzer. Both save real time and teach you the workflow model.',
              },
            ]}
          />

          <LessonNav
            level={2}
            prev={{ href: '/level2/lesson16', label: 'Lesson 16: Claude Knowledge Base' }}
            next={{ href: '/level2/lesson18', label: 'Lesson 18: Your AI OS' }}
            currentLessonId="l2-17"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
