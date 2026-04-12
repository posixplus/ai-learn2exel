import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson14() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-14" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={14}
            duration={75}
            title="AI + Data Analysis"
            subtitle="Read spreadsheets, spot trends, and turn numbers into insights—without being a data scientist"
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          {/* Section 1: You Don't Need to Be a Data Scientist */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              1. You Don't Need to Be a Data Scientist
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Most professionals say they "can't do data analysis." What they really mean: they don't know SQL, they haven't memorized statistics formulas, and they're intimidated by spreadsheets.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              But here's the truth: <strong>Claude can do the technical work. Your job is to ask the right questions and interpret the answers.</strong>
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Paste data into Claude. Ask what you want to know. Claude will find patterns, calculate trends, spot outliers, and explain what it means in plain English.
            </p>

            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem', color: '#0d47a1' }}>
                What's Possible
              </h3>
              <ul style={{ marginLeft: '2rem', color: '#333', lineHeight: '1.6', marginBottom: '0' }}>
                <li><strong>Spot trends:</strong> Growth month-over-month, seasonal patterns, anomalies</li>
                <li><strong>Summarize tables:</strong> Turn 500 rows into a 5-bullet insight</li>
                <li><strong>Calculate stats:</strong> Average, median, percentiles, growth rates, percentages</li>
                <li><strong>Find outliers:</strong> Which items are performing best or worst?</li>
                <li><strong>Write formulas:</strong> Excel, Google Sheets—Claude can build them</li>
                <li><strong>Compare periods:</strong> This quarter vs. last, this year vs. last year</li>
                <li><strong>Interpret dashboards:</strong> Paste a screenshot, ask "what should I worry about?"</li>
              </ul>
            </div>

            <Callout type="warning">
              <strong>Critical Limitation:</strong> Claude cannot access external files, URLs, or databases directly. You must copy and paste the data into the conversation. For large files, use Claude's built-in file upload feature, or copy-paste the relevant rows. This is a security feature—your data stays in your conversation.
            </Callout>
          </section>

          {/* Section 2: Working with Spreadsheets and CSVs */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              2. Working with Spreadsheets and CSVs
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              The workflow is simple: select data → copy → paste into Claude → ask a question.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              Here's a real example. Paste this CSV data into Claude:
            </p>

            <PromptBox label="Sample CSV Data (Sales by Region, 2024)">
              {`Month,Region,Revenue,Units_Sold,Customer_Count,Avg_Order_Value
Jan,North,145000,1200,342,121
Jan,South,98000,850,218,115
Jan,East,167000,1400,401,119
Jan,West,112000,920,256,122
Feb,North,156000,1280,358,122
Feb,South,105000,900,235,117
Feb,East,178000,1480,415,120
Feb,West,119000,960,268,124
Mar,North,198000,1620,445,122
Mar,South,142000,1200,310,118
Mar,East,215000,1780,485,121
Mar,West,156000,1280,350,122
Apr,North,172000,1420,395,121
Apr,South,128000,1080,290,119
Apr,East,189000,1550,430,122
Apr,West,134000,1100,300,122`}
            </PromptBox>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#555', fontStyle: 'italic' }}>
              Once you paste this, here are four different analyses you can run on the same dataset:
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Analysis 1: Trends</h3>
              <PromptBox label="">
                {`Look at this sales data. Which region is growing fastest, and which is struggling? Show the month-over-month growth rate for each region.`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Analysis 2: Outliers</h3>
              <PromptBox label="">
                {`Which region-month combination is an outlier? Which is performing best and worst? Explain why each might be an outlier.`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Analysis 3: Summary Stats</h3>
              <PromptBox label="">
                {`For each region, calculate: total revenue, average order value, total units sold, and customer count. Which region is the biggest profit driver?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Analysis 4: Recommendations</h3>
              <PromptBox label="">
                {`Based on this data, where should we invest more sales effort next quarter? Which region is at risk? What's one action we should take?`}
              </PromptBox>
            </div>

            <Callout type="tip">
              <strong>Copy from Excel or Google Sheets:</strong> Select the cells you want → Ctrl+C (or Cmd+C on Mac) → Paste into Claude. Claude will recognize the CSV format and work with it. No need to export to a file first.
            </Callout>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0', color: '#666' }}>
              Learn CSV basics: <a href="https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>Microsoft Office CSV import/export guide</a>
            </p>
          </section>

          {/* Section 3: Asking the Right Data Questions */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              3. Asking the Right Data Questions
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Bad prompt: "Analyze this data."
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Good prompt: "In this dataset, which month had the highest growth rate? Show your calculation. What might explain this growth?"
            </p>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', fontWeight: '600', color: '#333' }}>
              Use the DATA framework:
            </p>

            <div style={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #bbb',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.3rem' }}>
                  D = Describe the data
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
                  What does each column represent? What time period? How many rows?
                </p>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.3rem' }}>
                  A = Ask a specific question
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
                  Don't say "analyze it." Say "Which product had the highest growth rate?" or "Is there a seasonal pattern?"
                </p>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.3rem' }}>
                  T = Tell Claude the output format
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
                  "Show results as a table" or "Give me a bulleted summary" or "Write an executive summary"
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.3rem' }}>
                  A = Ask for the reasoning
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5', marginBottom: '0' }}>
                  "Show your work" or "Explain the calculation" so you understand how Claude got the answer
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
              Here are 5 before/after examples:
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#d32f2f' }}>Example 1: Finance Data</h3>
              <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.3rem' }}>
                  Bad:
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                  "Look at our expense data and tell me what's happening."
                </p>
              </div>
              <PromptBox label="Good">
                {`Here's our monthly expense data from 2024. Our budget is $500K/month.

- D: Columns are Month, Category (Salaries, Operations, Marketing, Tech), Amount
- A: Which category is over budget? What's the total overage? Is spending growing or stable?
- T: Show results in a table
- A: Explain which budget line needs attention first`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#d32f2f' }}>Example 2: HR Data</h3>
              <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.3rem' }}>
                  Bad:
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                  "Analyze our turnover."
                </p>
              </div>
              <PromptBox label="Good">
                {`Here's our employee data: hire date, department, tenure in months, and departures this year.

- D: 150 rows, 4 columns. Data covers 2024.
- A: Which department has the highest turnover rate? Is it above industry average (15%)?
- T: Show as a ranked table with percentages
- A: For the highest-turnover department, what patterns do you notice about when people leave?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#d32f2f' }}>Example 3: Marketing Data</h3>
              <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.3rem' }}>
                  Bad:
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                  "What's our ROI?"
                </p>
              </div>
              <PromptBox label="Good">
                {`Campaign data: channel (email, social, paid search), spend, impressions, clicks, conversions, revenue.

- D: 12 rows (one per campaign), last 90 days
- A: Which channel has the best ROI? Which is losing money?
- T: Rank by ROI. Include cost-per-conversion and revenue-per-dollar-spent
- A: Should we shift budget away from any channel? Where would it perform better?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#d32f2f' }}>Example 4: Operations Data</h3>
              <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.3rem' }}>
                  Bad:
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                  "How are we doing on inventory?"
                </p>
              </div>
              <PromptBox label="Good">
                {`Inventory data: SKU, reorder point, current stock, units sold last 30 days, lead time (days).

- D: 200 SKUs tracked daily
- A: Which items are at risk of stockout (below reorder point)? Which have excess inventory (3+ months of stock)?
- T: Two lists with prioritization
- A: For stockout-risk items, how many days until we run out at current sales velocity?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#d32f2f' }}>Example 5: Sales Data</h3>
              <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.3rem' }}>
                  Bad:
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                  "Show me our pipeline."
                </p>
              </div>
              <PromptBox label="Good">
                {`Pipeline data: opportunity name, stage, value, probability, close date, days-in-stage, owner.

- D: 45 open deals, tracking from prospecting through closed
- A: What's our expected revenue if 100% of deals close as-is? Which stage has deals that are stuck (> 90 days)?
- T: Show deal summary + stuck deals list
- A: Which owner has deals most at risk of slipping? What's the likely close date distribution?`}
              </PromptBox>
            </div>
          </section>

          {/* Section 4: Charts, Reports, and Presentations */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              4. Charts, Reports, and Presentations
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Claude can also help you turn data into narratives. Once you have the insights, use Claude to write the story for slides, reports, and presentations.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Use Case 1: Write Chart Titles and Descriptions</h3>
              <PromptBox label="">
                {`I have a chart showing {describe the data}. Write:
1. A specific, actionable title (not just "Sales Over Time")
2. A 1-2 sentence description of what the chart shows
3. A one-sentence "so what?" (what action should the viewer take?)

Example data: {paste numbers or description}`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Use Case 2: Create a Data Story</h3>
              <PromptBox label="">
                {`Turn this analysis into a 2-paragraph narrative for a slide deck.

Data: {paste your analysis or numbers}
Audience: {executives, team, board, customers}
Action: {what do you want them to do with this insight?}

Format:
- Paragraph 1: The situation (what happened?)
- Paragraph 2: The implications (why does it matter? what's next?)`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Use Case 3: Executive Summary</h3>
              <PromptBox label="">
                {`Write a 3-sentence executive summary based on this analysis.

Data: {paste analysis}

Format:
- Sentence 1: The finding (what did we learn?)
- Sentence 2: The implication (why should we care?)
- Sentence 3: The action (what's next?)`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Use Case 4: Turn Numbers Into Insight</h3>
              <PromptBox label="">
                {`Write the "key takeaway" sentence for a slide. Make it compelling and specific.

Data: {paste raw numbers or analysis}
Context: {who's the audience? why do they care?}

Output: One sentence that captures the main point. Avoid "things changed" or "it's important." Be specific.`}
              </PromptBox>
            </div>

            <div style={{
              backgroundColor: '#fff3e0',
              border: '2px solid #ff9800',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#e65100' }}>
                The Data → Insight Workflow
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                <div style={{
                  backgroundColor: '#f5f5f5',
                  padding: '1rem',
                  borderRadius: '0.3rem',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Raw Data<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>(CSV, spreadsheet)</span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#ff9800', alignSelf: 'center', fontWeight: '700' }}>
                  →
                </div>
                <div style={{
                  backgroundColor: '#fff9c4',
                  padding: '1rem',
                  borderRadius: '0.3rem',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Claude Analysis<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>(trends, stats, insights)</span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#ff9800', alignSelf: 'center', fontWeight: '700' }}>
                  →
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{
                  backgroundColor: '#e1f5fe',
                  padding: '1rem',
                  borderRadius: '0.3rem',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Written Insight<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>(narrative, key takeaway)</span>
                </div>
                <div style={{
                  backgroundColor: '#f3e5f5',
                  padding: '1rem',
                  borderRadius: '0.3rem',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Slide / Report<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>(presentation-ready)</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0', color: '#666' }}>
              Learn more about data storytelling: <a href="https://www.storytellingwithdata.com/blog" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>Storytelling with Data blog</a>
            </p>
          </section>

          {/* Section 5: Hands-On Exercise */}
          <section style={{ marginBottom: '3rem' }}>
            <HandsOn
              title="Hands-On: Analyze Real Data"
              description="In 25 minutes, take a real spreadsheet and turn it into actionable insights using Claude."
              duration="25 min"
              steps={[
                'Step 1: Open any spreadsheet you have at work (sales, budget, operations, inventory, anything)',
                'Step 2: Select 10-20 rows and copy them as CSV format (include headers)',
                'Step 3: Paste into Claude with your first analysis prompt',
                'Step 4: Ask a follow-up question based on the first result',
                'Step 5: Ask Claude to write a 3-sentence summary of what the data shows',
                'Step 6: Copy the summary into an email or Slack message and send it to your team'
              ]}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Template 1: Financial Data</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  For expense, budget, or revenue data:
                </p>
                <PromptBox label="">
                  {`Here's our {expense/budget/revenue} data for {time period}.

- D: Columns are {list columns}, covering {months/quarters}
- A: What's the biggest variance from budget? What's growing fastest? Any red flags?
- T: Show as a summary table
- A: Write one action we should take based on this data`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Template 2: Operational Data</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  For inventory, production, or process metrics:
                </p>
                <PromptBox label="">
                  {`Here's our {inventory/production/process} data.

- D: {describe what each column means}
- A: Where do we have problems (bottlenecks, high costs, low efficiency)? What's working well?
- T: List problems and strengths separately
- A: If we fixed the top problem, what impact would it have?`}
                </PromptBox>
              </div>
            </HandsOn>
          </section>

          {/* Quick Reference */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              Quick Reference: Data Analysis Prompts
            </h2>
            <QuickRef
              items={[
                {
                  term: 'Find Trends',
                  definition: 'Which metric is growing? By how much month-over-month? Is the growth accelerating?'
                },
                {
                  term: 'Spot Outliers',
                  definition: "What's unusual or surprising in this data? What's the best and worst performer?"
                },
                {
                  term: 'Calculate Stats',
                  definition: 'Show me: average, total, percentage change, growth rate, and ranking'
                },
                {
                  term: 'Summarize Data',
                  definition: 'Write a 3-sentence summary of the key findings. What should I tell my boss?'
                },
                {
                  term: 'Compare Periods',
                  definition: 'How does this quarter compare to last? Same time last year? Show percentage differences.'
                },
                {
                  term: 'Write for Slides',
                  definition: 'Turn this analysis into a compelling narrative for a presentation. One key takeaway sentence.'
                }
              ]}
            />
          </section>

          <LessonNav
            level={2}
            prev={{ href: '/level2/lesson13', label: 'Lesson 13: AI Writing Lab' }}
            next={{ href: '/level2/lesson15', label: 'Lesson 15: AI Strategy' }}
            currentLessonId="l2-14"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
