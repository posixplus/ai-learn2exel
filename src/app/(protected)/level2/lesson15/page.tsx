import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import PromptBox from '@/components/lesson/PromptBox'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import QuickRef from '@/components/lesson/QuickRef'
import LessonNav from '@/components/lesson/LessonNav'
import Footer from '@/components/layout/Footer'

export default function Lesson15() {
  return (
    <div className="lesson-layout">
      <Sidebar level={2} currentLessonId="l2-15" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={2}
            lessonNumber={15}
            duration={75}
            title="AI for Strategy & Decision Making"
            subtitle="Use Claude as a thinking partner for strategy, frameworks, and better business decisions"
            professions={['Teacher', 'Manager', 'Developer', 'Analyst', 'Business', 'Doctor', 'Lawyer']}
          />

          {/* Section 1: AI as a Strategic Thinking Partner */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              1. AI as a Strategic Thinking Partner
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Claude has read thousands of business books, case studies, academic papers, and strategic frameworks. It understands Porter's Five Forces, Blue Ocean Strategy, Jobs to be Done, OKRs, SWOT, competitive positioning, and much more.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              But here's the key: <strong>Claude is not a strategist. It's a thinking partner.</strong> Its job is to pressure-test your ideas, reflect your assumptions back at you, and help you see what you're missing.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              The best executives "think out loud" with Claude. They don't ask for answers. They ask questions:
            </p>

            <div style={{
              backgroundColor: '#f0f4ff',
              border: '2px solid #5c6bc0',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <ul style={{ marginLeft: '2rem', color: '#333', lineHeight: '1.6', marginBottom: '0' }}>
                <li>"What am I not thinking about?"</li>
                <li>"What assumptions am I making that might be wrong?"</li>
                <li>"What does the opposite case look like?"</li>
                <li>"If this decision goes wrong in 1 year, what happened?"</li>
                <li>"Who disagrees with me, and why?"</li>
                <li>"What would a competitor do here?"</li>
              </ul>
            </div>

            <Callout type="info">
              <strong>Golden Rule:</strong> Claude will reflect your assumptions back at you. If you walk into it saying "We should pivot to AI," Claude might say "Okay, let's test that assumption." It's your job to actually do the testing. Claude is a sounding board, not an oracle.
            </Callout>
          </section>

          {/* Section 2: Decision Frameworks */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              2. Decision Frameworks
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Use Claude with proven decision frameworks to structure your thinking and catch blind spots.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Framework 1: Pros/Cons with Weighted Importance</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Not just a list of pros and cons, but weighted by importance and likelihood. This forces you to distinguish between "nice to have" and "deal-breaker."
              </p>
              <PromptBox label="Weighted Pros/Cons Prompt">
                {`I'm deciding whether to {decision}.

My current thinking: {brief summary of your position}

List the pros and cons. For each, rate:
1. Impact (1-5, where 5 is game-changing)
2. Likelihood (1-5, where 5 is certain)
3. Reversibility (can we undo this decision later?)

After listing, tell me: What's the weighted score for doing this vs. not doing it? Which factor should I worry about most?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Framework 2: Pre-Mortem</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Imagine your decision failed spectacularly in 1 year. What went wrong? This uncovers hidden risks you haven't thought about.
              </p>
              <PromptBox label="Pre-Mortem Prompt">
                {`Assume I made the decision to {decision} and it completely failed in 1 year.

Walk me through: What happened? What went wrong? What did I not anticipate?

Then, for each failure mode you identify, suggest: What could I do now to prevent it?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Framework 3: Second-Order Thinking</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Most people think about what happens directly from their decision. Second-order thinking asks: what happens as a result of that? Third-order?
              </p>
              <PromptBox label="Second-Order Thinking Prompt">
                {`I'm thinking about {decision}.

Walk me through the second and third-order consequences:
1. What's the direct result of this decision?
2. What happens as a result of that? (How do customers react? How do competitors respond?)
3. What happens as a result of that? (How does the market shift? How do other stakeholders respond?)

Which consequence is most risky?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Framework 4: Devil's Advocate</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                You're convinced the decision is right. Claude plays the other side—hard—so you can stress-test your thinking.
              </p>
              <PromptBox label="Devil's Advocate Prompt">
                {`I want to {decision}. Here's why I think it's right: {your reasoning}.

Play devil's advocate. Argue STRONGLY against this decision. What am I overlooking? Why might this fail? What's the case for the opposite?

Don't be nice—make me defend my position.`}
              </PromptBox>
            </div>

            <Callout type="tip">
              <strong>Best Practice:</strong> Don't make big decisions in one conversation. Use multiple frameworks. If the same concerns come up in pre-mortem, devil's advocate, and second-order thinking, those are probably real risks.
            </Callout>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0', color: '#666' }}>
              Learn more about decision frameworks: <a href="https://fs.blog/decision-making/" target="_blank" rel="noopener" style={{ color: '#0066cc', textDecoration: 'underline' }}>Farnam Street decision-making guide</a>
            </p>
          </section>

          {/* Section 3: SWOT, Scenario Planning, and Competitive Analysis */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              3. SWOT, Scenario Planning, and Competitive Analysis
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              These are strategic tools that are even more powerful with Claude. Use the prompts below to do real analysis.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>SWOT Analysis</h3>
              <PromptBox label="SWOT Prompt">
                {`Run a SWOT analysis for {our company/product/initiative}.

Context:
- Who are we? {brief description}
- What's the market? {brief description}
- What's our goal? {what are we trying to achieve?}

Generate:
1. Strengths: What do we do better than competitors?
2. Weaknesses: What are we bad at? Where are we vulnerable?
3. Opportunities: What trends or gaps can we exploit?
4. Threats: What could go wrong? Who could outcompete us?

Format as a 2x2 grid and prioritize the top 3 in each quadrant.`}
              </PromptBox>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                <div style={{
                  backgroundColor: '#c8e6c9',
                  border: '1px solid #66bb6a',
                  padding: '1rem',
                  borderRadius: '0.3rem'
                }}>
                  <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1b5e20' }}>Strengths (Positive Internal)</p>
                  <p style={{ color: '#333', fontSize: '0.85rem' }}>What we're good at. Our edge.</p>
                </div>
                <div style={{
                  backgroundColor: '#bbdefb',
                  border: '1px solid #42a5f5',
                  padding: '1rem',
                  borderRadius: '0.3rem'
                }}>
                  <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#0d47a1' }}>Opportunities (Positive External)</p>
                  <p style={{ color: '#333', fontSize: '0.85rem' }}>Market gaps. Trends we can ride.</p>
                </div>
                <div style={{
                  backgroundColor: '#ffccbc',
                  border: '1px solid #ffab91',
                  padding: '1rem',
                  borderRadius: '0.3rem'
                }}>
                  <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#bf360c' }}>Weaknesses (Negative Internal)</p>
                  <p style={{ color: '#333', fontSize: '0.85rem' }}>What we're bad at. Our blind spots.</p>
                </div>
                <div style={{
                  backgroundColor: '#f0f4ff',
                  border: '1px solid #5c6bc0',
                  padding: '1rem',
                  borderRadius: '0.3rem'
                }}>
                  <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1a237e' }}>Threats (Negative External)</p>
                  <p style={{ color: '#333', fontSize: '0.85rem' }}>Competition. Disruption. Market shifts.</p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Scenario Planning</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', color: '#555' }}>
                Best case, worst case, most likely. This helps you prepare for what might happen.
              </p>
              <PromptBox label="Scenario Planning Prompt">
                {`Create three scenarios for {market/company/product} over the next 2-3 years.

Context: {your current situation and assumptions}

Scenario 1 - Best Case: Everything goes right. What would it look like? How would we win?
Scenario 2 - Worst Case: Everything goes wrong. What went wrong? How does the market look?
Scenario 3 - Most Likely: Somewhere in the middle. What's the realistic outcome?

For each scenario, tell me: What's our strategy? What should we do now to prepare?`}
              </PromptBox>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Competitive Analysis</h3>
              <PromptBox label="Competitive Analysis Prompt">
                {`Analyze the competitive landscape for {our product/service}.

Our position:
- What do we offer? {description}
- Who are our customers? {target market}
- What's our price point? {pricing}
- What's our unique advantage? {your differentiation}

Competitors: {list 2-3 key competitors}

For each competitor, analyze:
1. What do they do well?
2. Where are they vulnerable?
3. How would they respond to our moves?

Then tell me: What's our best competitive position? What should we avoid?`}
              </PromptBox>
            </div>

            <Callout type="warning">
              <strong>Reality Check:</strong> These analyses are only as good as the information you provide. If you say "we have no weaknesses," Claude will call that out. Be honest about your situation.
            </Callout>
          </section>

          {/* Section 4: Strategy for Your Profession */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              4. Strategy for Your Profession
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Strategic thinking looks different depending on your role. Here are profession-specific use cases:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Manager</h3>
                <PromptBox label="Team Capacity Planning">
                  {`I need to plan resources for {quarter/project}.

Team size: {headcount and roles}
Projects: {list your priorities}
Constraints: {hiring freeze? Attrition? Time pressure?}

Should we build in-house or outsource? Where are we overextended? Where do we have slack?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Manager</h3>
                <PromptBox label="Project Risk Assessment">
                  {`Assess the risks for {project}.

Scope: {what are we building/doing?}
Timeline: {by when?}
Budget: {resources available}
Team: {who's involved?}

What could derail us? What's the critical path? Where should we add buffer?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Business Owner</h3>
                <PromptBox label="Market Entry Decision">
                  {`We're considering entering {new market/segment/geography}.

Current position: {our business today}
Opportunity: {market size, growth, margins}
Barriers: {capital, expertise, competition, regulations}

Should we do this? What would success look like? What's the minimal viable entry?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Business Owner</h3>
                <PromptBox label="Pricing Strategy">
                  {`Help me think through pricing for {product/service}.

Value: {what problem does this solve? Why should they pay?}
Customers: {who are they? What's their budget?}
Competitors: {what do they charge?}
Cost: {what's our cost to deliver?}

What pricing model makes sense? (Subscription, one-time, usage-based, freemium?) What's the right price point?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Doctor/Healthcare</h3>
                <PromptBox label="Treatment Pathway">
                  {`I'm evaluating treatment options for {condition}.

Patient: {demographics, comorbidities, preferences}
Options: {list treatment approaches}
Evidence: {what does research show?}
Constraints: {insurance, access, patient tolerance}

What's the best pathway? What are the decision points? What could go wrong?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Teacher</h3>
                <PromptBox label="Curriculum Design">
                  {`I'm designing {course/unit}.

Learning objectives: {what should students know?}
Students: {age, background, challenges}
Constraints: {time, resources, standards}
Assessment: {how will we measure learning?}

What's the best sequence of topics? Where do students usually struggle? How do we make it relevant?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Lawyer</h3>
                <PromptBox label="Case Strategy">
                  {`I'm evaluating strategy for {case}.

Facts: {what happened?}
Legal issues: {what laws apply?}
Risks: {what could we lose?}
Opportunities: {what could we win?}
Resources: {time, budget, team}

What's our best strategy? Should we settle or litigate? What's the critical issue?`}
                </PromptBox>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Analyst</h3>
                <PromptBox label="Data-Driven Strategy">
                  {`I've analyzed {market/segment} and found: {key findings}.

What does this mean for our strategy? Should we invest more, invest less, or pivot? Who should know about this?`}
                </PromptBox>
              </div>
            </div>
          </section>

          {/* Section 5: Hands-On Exercise */}
          <section style={{ marginBottom: '3rem' }}>
            <HandsOn
              title="Hands-On: Make a Real Decision"
              description="In 25 minutes, use Claude to think through an actual decision you're facing at work."
              duration="25 min"
              steps={[
                'Step 1: Pick a real decision you\'re currently facing (hire someone, launch a feature, enter a market, change a process, anything)',
                'Step 2: Run the Pre-Mortem analysis: "Assume this fails in 1 year. What went wrong?"',
                'Step 3: Run the Devil\'s Advocate analysis: "Argue strongly against this decision"',
                'Step 4: Ask Claude: "What am I not considering? What assumptions am I making?"',
                'Step 5: Write a one-sentence decision statement: "{Decision}: Yes/No. Why."',
                'Step 6: Identify the riskiest assumption and how you\'ll test it'
              ]}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Template 1: Pre-Mortem Prompt</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  Start here to uncover hidden risks:
                </p>
                <PromptBox label="">
                  {`Imagine I {made this decision} and it completely failed in 1 year.

Walk me through: What happened? What did I not anticipate? What warning signs should I have seen?

Then tell me: What can I do RIGHT NOW to reduce these risks?`}
                </PromptBox>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Template 2: Devil's Advocate Prompt</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                  Get the opposing view:
                </p>
                <PromptBox label="">
                  {`I want to {make this decision}. I think it's right because: {your reasoning}.

Be a strong devil's advocate. Argue against this decision. What's the case for doing the opposite? Where am I vulnerable?`}
                </PromptBox>
              </div>
            </HandsOn>
          </section>

          {/* Quick Reference */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
              Quick Reference: Strategic Thinking Prompts
            </h2>
            <QuickRef
              items={[
                {
                  term: 'Pre-Mortem',
                  definition: 'Assume failure. Walk backward from 1 year out. What went wrong? What are the hidden risks?'
                },
                {
                  term: 'Second-Order Thinking',
                  definition: 'Don\'t just think about direct consequences. What happens as a result of that result?'
                },
                {
                  term: 'SWOT Analysis',
                  definition: 'Strengths (what we do well), Weaknesses (what we suck at), Opportunities (what we can exploit), Threats (what could beat us)'
                },
                {
                  term: 'Devil\'s Advocate',
                  definition: 'Strong argument against your position. Why might the opposite be true? Where could you be wrong?'
                },
                {
                  term: 'Scenario Planning',
                  definition: 'Best case / Most likely / Worst case. What does each look like? What\'s our strategy in each?'
                },
                {
                  term: 'Critical Question',
                  definition: 'Ask Claude: "What am I not thinking about?" Let it surface blind spots you\'re missing.'
                }
              ]}
            />
          </section>

          <LessonNav
            level={2}
            prev={{ href: '/level2/lesson14', label: 'Lesson 14: AI + Data' }}
            next={{ href: '/level2/lesson16', label: 'Lesson 16: Claude Knowledge Base' }}
            currentLessonId="l2-15"
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}
