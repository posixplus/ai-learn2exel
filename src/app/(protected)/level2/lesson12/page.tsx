import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson12() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-12" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={12}
            duration={90}
            title="AI for Deep Research"
            subtitle="Use Claude as a research partner to synthesize, analyze, and challenge your thinking"
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          {/* Section 1: Why AI Research Is Different from Search */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              1. Why AI Research Is Different from Search
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Google finds pages. Claude synthesizes meaning. This is the fundamental difference between search and research.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              When you search for "climate change impact on agriculture," Google returns 2.3 billion links. Your job is to click through 10+ sites, compare viewpoints, spot conflicts, and mentally synthesize a narrative. This takes hours.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              When you ask Claude to analyze the same topic, Claude:
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1.6' }}>
              <li><strong>Compares viewpoints</strong> across different schools of thought (academic, industry, policy)</li>
              <li><strong>Identifies patterns</strong> that humans miss across large datasets or documents</li>
              <li><strong>Summarizes complex papers</strong> in plain language, pulling out what matters</li>
              <li><strong>Challenges your assumptions</strong> by spotting logical gaps in your thesis</li>
              <li><strong>Structures your findings</strong> as a narrative, not a list of links</li>
            </ul>

            <Callout type="warning">
              <strong>Hallucination Risk:</strong> Claude can invent facts. Always verify claims using real sources—Google Scholar, academic databases, news archives, or expert websites. Claude is a thinking partner, not a primary source.
            </Callout>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#333' }}>
              The key insight: <strong>Claude is your thinking partner, not your search engine.</strong> Use search for facts and links. Use Claude for synthesis and interpretation.
            </p>
          </section>

          {/* Section 2: The Research Stack: Claude + Real Sources */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              2. The Research Stack: Claude + Real Sources
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              The most powerful research workflow combines <strong>primary sources</strong> (search results, papers, articles) with <strong>Claude's synthesis</strong>. Here's the three-step process:
            </p>

            <div style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Step 1: Find Real Sources</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Use <a href="https://www.perplexity.ai" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>Perplexity.ai</a>, Google, Google Scholar, or industry databases to find current facts, statistics, and links. Save the URLs and copy snippets.
              </p>
            </div>

            <PromptBox label="Step 1 Example Prompt">
              {`I need current research on the effectiveness of hybrid work models. Please find 3-5 recent peer-reviewed studies or reports (published 2023+) and provide:
- Study title and year
- Key finding (1-2 sentences)
- Link to the study
- Sample size or scope

Focus on impact on productivity and employee satisfaction.`}
            </PromptBox>

            <div style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem',
              marginTop: '2rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Step 2: Paste and Synthesize</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Copy key excerpts (or full articles) into Claude. Ask Claude to synthesize, compare, and structure the information. This is where Claude adds the most value.
              </p>
            </div>

            <PromptBox label="Step 2 Example Prompt">
              {`Below are excerpts from 4 recent studies on hybrid work. Analyze them and tell me:

1. Where do these studies agree?
2. Where do they disagree?
3. What population/industry does each study cover? (This helps explain conflicts.)
4. What is the strongest evidence for hybrid work's positive impact?
5. What is the strongest counterargument?

[PASTE ARTICLE TEXT HERE]`}
            </PromptBox>

            <div style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem',
              marginTop: '2rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Step 3: Identify Gaps</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Ask Claude what it doesn't know or what contradictions exist. This reveals where you need to dig deeper.
              </p>
            </div>

            <PromptBox label="Step 3 Example Prompt">
              {`Based on the studies above, tell me:
1. What questions are NOT answered by these sources?
2. Are there any geographic or industry biases in the research?
3. What counterfactual or edge case should I look for?
4. What would change your assessment of hybrid work?`}
            </PromptBox>

            <Callout type="info">
              <strong>Help with verification:</strong> If you're unsure how to verify AI output, try <a href="https://www.politifact.com" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>PolitiFact</a> (fact-checking), <a href="https://scholar.google.com" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>Google Scholar</a> (peer-reviewed papers), or <a href="https://www.snopes.com" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>Snopes</a> (myth-busting).
            </Callout>
          </section>

          {/* Section 3: Five Research Workflows */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              3. Five Research Workflows
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#333' }}>
              Each research challenge has a different workflow. Here are five real-world scenarios:
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>A. Literature Review (for writers, researchers, analysts)</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You need to understand what's been published on a topic. Use Claude to synthesize dozens of papers into themes.
              </p>
              <PromptBox label="Literature Review Prompt">
                {`I'm researching the topic: "{topic}". I'll paste abstracts from 10+ recent papers below. Please:

1. Group the papers by research theme or approach
2. Identify the most cited or foundational work
3. Tell me the main unsolved question in this field
4. Suggest what a new study should investigate to add to the conversation

[PASTE ABSTRACTS]`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>B. Competitive Research (for business, product, marketing)</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You need to understand your competitors' positioning, pricing, and strategy. Paste their websites, pricing pages, and marketing copy into Claude.
              </p>
              <PromptBox label="Competitive Research Prompt">
                {`I'm analyzing competitors in the {industry} space. Below are excerpts from their websites and pricing pages:

{Competitor A}: [text]
{Competitor B}: [text]
{Competitor C}: [text]

Please tell me:
1. What is each competitor's main value proposition?
2. How do they differ in pricing strategy?
3. What customer segment is each targeting?
4. What gap in the market might exist?
5. What would be a defensible position against all three?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>C. Interview & Meeting Prep (for salespeople, managers, journalists)</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You're meeting someone. Use Claude to research their background and prepare smart questions.
              </p>
              <PromptBox label="Interview Prep Prompt">
                {`I'm interviewing {person name}, {title} at {company}. Here's what I know about them:

{LinkedIn bio}
{Company overview}
{Recent news about company}

Generate 5 thoughtful questions that:
1. Show I've done my homework
2. Go beyond what's public
3. Help me understand their perspective
4. Don't put them on the defensive
5. Are likely to lead to a good conversation`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>D. Policy & Legal Research (for lawyers, policy experts, advocates)</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You need to understand regulation, case law, or policy precedent. Paste relevant statutes, cases, or policy docs.
              </p>
              <PromptBox label="Policy Research Prompt">
                {`I'm researching the legal implications of {issue} under {jurisdiction}. Here are relevant excerpts:

{Statute text}
{Case summary}
{Prior guidance}

Please tell me:
1. What does the law explicitly require/forbid?
2. What is unclear or ambiguous?
3. What's the strongest legal argument for my position?
4. What's the strongest counterargument?
5. What precedents should I watch for?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>E. Technical Documentation Analysis (for engineers, architects, tech leads)</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You need to understand a complex system, API, or architecture. Paste docs, API specs, or code.
              </p>
              <PromptBox label="Technical Analysis Prompt">
                {`I'm evaluating {technology/framework} for {use case}. Here's the documentation:

{Paste docs or code}

Tell me:
1. What are the core capabilities?
2. What are the main limitations?
3. What are the performance implications for {my specific scenario}?
4. What are the operational trade-offs (scaling, debugging, monitoring)?
5. What are the main gotchas or footguns?`}
              </PromptBox>
            </div>
          </section>

          {/* Section 4: Source Evaluation with Claude */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              4. Source Evaluation with Claude
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Not all sources are equal. Claude can help you spot bias, logical fallacies, and hidden assumptions. Here are four evaluation prompts:
            </p>

            <Callout type="info">
              <strong>Note:</strong> Claude cannot access URLs in real time. Copy the text from the webpage or PDF and paste it into Claude. This gives Claude the full context needed to evaluate it.
            </Callout>

            <div style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Spotting Bias</h3>
              <PromptBox label="Bias Detection Prompt">
                {`I found this source on {topic}. Tell me:
1. What is the author's or organization's stated mission or bias?
2. Who funded this research (if applicable)?
3. What language or framing suggests bias?
4. What counterargument is NOT mentioned?
5. Is this source useful despite the bias, or should I discount it?

[PASTE SOURCE TEXT]`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Checking Logical Fallacies</h3>
              <PromptBox label="Logical Fallacy Prompt">
                {`Does this argument contain logical fallacies? List any:
- Ad hominem (attacking the person, not the idea)
- Straw man (misrepresenting the opposing view)
- Appeal to authority (relying on expert status without evidence)
- False equivalence (treating unequal things as equal)
- Circular reasoning (conclusion assumes the premise)
- Correlation vs. causation

Then tell me: Does the argument still hold without the fallacies?

[PASTE ARGUMENT]`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Comparing Conflicting Sources</h3>
              <PromptBox label="Conflict Resolution Prompt">
                {`These two sources disagree on {topic}. Help me understand the conflict:

Source A says: [brief quote]
Source B says: [brief quote]

Tell me:
1. What assumptions does each source make differently?
2. What data or evidence would resolve the disagreement?
3. Are both potentially true in different contexts?
4. Which is more credible? Why?
5. What do the domain experts consensus lean toward?

[PASTE BOTH SOURCES]`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Finding the Strongest Counterargument</h3>
              <PromptBox label="Counterargument Prompt">
                {`I believe {my position}. I found this source supporting it:

[PASTE SOURCE]

Now tell me:
1. What is the strongest counterargument to this position?
2. How would a smart critic attack this source?
3. What evidence would prove me wrong?
4. How should I revise my position to be more resilient?`}
              </PromptBox>
            </div>
          </section>

          {/* Section 5: Hands-On Research Sprint */}
          <section style={{ marginBottom: '3rem' }}>
            <HandsOn
              title="Hands-On: Research Sprint"
              description="In 30 minutes, conduct a real research project on a topic from your work."
              duration="30 min"
              steps={[
                'Pick a real topic from your work (a decision you need to make, a competitor you need to understand, a technology you need to evaluate, a policy you need to understand, etc.)',
                'Use Perplexity.ai or Google Scholar to find 3-5 credible sources.',
                'Paste the key excerpts into Claude and ask it to synthesize them.',
                'Ask Claude for counterarguments and the strongest case against your initial assumption.',
                'Ask Claude what it doesn\'t know—what gaps exist?',
                'Verify one key claim using Google Scholar or a fact-checking site.',
                'Write a 1-paragraph summary of what you learned and what you still need to know.'
              ]}
            >
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Template 1: Synthesis Prompt</h4>
                <PromptBox label="">
                  {`I'm researching {topic}. Below are excerpts from {X} sources I found. Please synthesize them into:

1. A one-paragraph summary of the consensus
2. The main points of disagreement
3. What's most surprising
4. What I should investigate further

[PASTE EXCERPTS]`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Template 2: Counterargument Prompt</h4>
                <PromptBox label="">
                  {`Based on the research above, tell me the strongest argument AGAINST my initial belief that {my position}. What would I need to see to change my mind?`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Template 3: Gap Identification Prompt</h4>
                <PromptBox label="">
                  {`What don't we know about {topic}? What questions are these sources NOT answering? What would a new study need to investigate?`}
                </PromptBox>
              </div>
            </HandsOn>
          </section>

          {/* Quick Reference */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              Quick Reference: Key Research Prompts
            </h2>
            <QuickRef
              items={[
                {
                  term: 'Find & Synthesize',
                  definition: 'Search real sources → paste into Claude → ask for synthesis, patterns, gaps'
                },
                {
                  term: 'Spot Bias',
                  definition: 'Ask Claude: "Who wrote this? Who funded it? What counterargument is missing?"'
                },
                {
                  term: 'Compare Sources',
                  definition: 'Paste two conflicting sources and ask: "What assumption differs between them? Which is more credible?"'
                },
                {
                  term: 'Find Gaps',
                  definition: 'After synthesis, ask Claude: "What don\'t these sources answer? What would I need to know?"'
                },
                {
                  term: 'Verify Claims',
                  definition: 'Use Google Scholar, PolitiFact, or Snopes to verify one key fact from Claude\'s synthesis'
                },
                {
                  term: 'Build a Counterargument',
                  definition: 'Ask Claude to play devil\'s advocate and show the strongest case against your position'
                }
              ]}
            />
          </section>

          <LessonNav
            level={2}
            prev={{ href: '/level1/capstone', label: 'Level 1 Capstone' }}
            next={{ href: '/level2/lesson13', label: 'Lesson 13: AI Writing Lab' }}
            currentLessonId="l2-12"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
