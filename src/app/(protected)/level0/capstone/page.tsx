import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import PromptBox from '@/components/lesson/PromptBox'
import HandsOn from '@/components/lesson/HandsOn'
import Callout from '@/components/lesson/Callout'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

export default function Level0Capstone() {
  return (
    <div className="capstone-layout">
      <main className="capstone-main">
        <div className="capstone-content-inner">
          {/* Hero Section */}
          <div className="capstone-hero l0">
            <span className="capstone-badge">🏆 LEVEL 0 CAPSTONE</span>
            <h1>Build Your AI Starter Pack</h1>
            <p>Time to apply everything from Level 0. In ~60 minutes, you'll create 5 real AI prompts you can use at work tomorrow.</p>

            <div className="stats-row">
              <div className="stat">
                <span className="stat-value">5 Prompts</span>
                <span className="stat-label">Real & Usable</span>
              </div>
              <div className="stat">
                <span className="stat-value">60 min</span>
                <span className="stat-label">Your Time</span>
              </div>
              <div className="stat">
                <span className="stat-value">Your Profession</span>
                <span className="stat-label">Customized</span>
              </div>
              <div className="stat">
                <span className="stat-value">Ready Now</span>
                <span className="stat-label">Paste & Go</span>
              </div>
            </div>
          </div>

          {/* What You'll Build */}
          <section className="l0-section">
            <h2>What You'll Build</h2>
            <p>
              Your <strong>Personal AI Starter Pack</strong> is a collection of 5 high-quality prompts customized for YOUR specific job. By the end, you'll have prompts you can paste into Claude, ChatGPT, or Gemini immediately. These aren't generic templates - they're built from your actual work.
            </p>
            <p>
              Think of it like having a pocket guide of the best questions to ask an AI expert in your field, written specifically for what you do every day.
            </p>
          </section>

          {/* The RACE Framework */}
          <section className="l0-section">
            <h2>The RACE Framework</h2>
            <p>Before you start building prompts, you need a structure. The RACE framework gives you that. Every great prompt has these 4 elements:</p>

            <div className="race-grid">
              <div className="race-card">
                <div className="race-letter">R</div>
                <h4>Role</h4>
                <p>Who should the AI be? ("You are an expert marketing strategist" or "You are a kindergarten teacher")</p>
              </div>
              <div className="race-card">
                <div className="race-letter">A</div>
                <h4>Action</h4>
                <p>What should the AI do? ("Write a tweet," "Analyze this data," "Create a lesson plan," "Debug this code")</p>
              </div>
              <div className="race-card">
                <div className="race-letter">C</div>
                <h4>Context</h4>
                <p>What does the AI need to know? ("My audience is Gen Z," "My students are 6 years old," "I'm building an MVP")</p>
              </div>
              <div className="race-card">
                <div className="race-letter">E</div>
                <h4>Expectations</h4>
                <p>Format, length, tone, constraints. ("Use bullet points," "Keep it under 200 words," "Make it funny but professional")</p>
              </div>
            </div>

            <PromptBox label="RACE EXAMPLE: For a Teacher">
              {`You are an expert elementary school teacher with 10 years of experience teaching 3rd graders. Your job is to create 5 engaging discussion questions about a science lesson on photosynthesis. The questions should be age-appropriate, encourage critical thinking (not just recall), and be phrased so a 8-9 year old can understand. Format as a numbered list, and include one follow-up question for each. Keep the reading level at grade 2-3.`}
            </PromptBox>

            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666' }}>
              Notice how that prompt tells the AI: the Role (experienced teacher), the Action (create discussion questions), the Context (3rd graders, photosynthesis), and the Expectations (age-appropriate, critical thinking, numbered, follow-up questions, grade 2-3 reading level). That's RACE.
            </p>
          </section>

          {/* 5-Step Challenge */}
          <section className="l0-section">
            <h2>The 5-Step Challenge</h2>
            <p>Work through these 5 steps in one sitting. If you get stuck, ask the AI for help - that's the whole point.</p>

            <HandsOn
              stepNumber={1}
              title="Map Your Top 5 Tasks"
              duration="5 min"
              steps={[
                "Open a notes app, Google Doc, or grab a piece of paper.",
                "List 5 tasks you do regularly that feel repetitive, time-consuming, or draining.",
                "For each task, write 1 sentence: What makes this hard or slow?",
                "Circle the 2-3 that would save you the most time if AI helped."
              ]}
            >
              <p><strong>Examples by profession:</strong></p>
              <ul>
                <li><strong>Teacher:</strong> Planning lessons, grading essays, creating handouts, answering parent emails, differentiating materials</li>
                <li><strong>Manager:</strong> Writing status reports, giving feedback, scheduling meetings, writing job descriptions, planning agendas</li>
                <li><strong>Developer:</strong> Writing tests, debugging, documenting code, code reviews, writing tickets</li>
                <li><strong>Analyst:</strong> Cleaning data, creating reports, writing summaries, responding to requests, finding trends</li>
                <li><strong>Doctor/Nurse:</strong> Documentation, patient communication, research, treatment planning, explaining procedures</li>
              </ul>
            </HandsOn>

            <HandsOn
              stepNumber={2}
              title="Build Your 5 Prompts Using RACE"
              duration="25 min"
              steps={[
                "Take your #1 task from Step 1.",
                "Write a prompt using the RACE framework. Start with: 'You are a [role]. Your job is to [action]. [Context about your situation]. [Specific format/constraints].'",
                "Go to Claude.ai, ChatGPT, or Gemini. Paste your prompt and test it.",
                "Look at the response. Is it useful? Does it match what you asked? Refine your prompt once based on what you see.",
                "Repeat for all 5 tasks."
              ]}
            >
              <p><strong>Quick RACE template to copy:</strong></p>
              <PromptBox label="Your Prompt Template">
                {`You are a [YOUR ROLE WITH EXPERTISE]. Your job is to [SPECIFIC ACTION]. Here's the context: [KEY DETAILS ABOUT YOUR SITUATION]. Please format your response as [FORMAT], keep it to [LENGTH], and make sure it's [TONE/STYLE].`}
              </PromptBox>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                Replace everything in [BRACKETS] with your specifics. That's your RACE prompt.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={3}
              title="Test & Grade Your Prompts"
              duration="15 min"
              steps={[
                "For each of your 5 prompts, ask yourself 3 questions:",
                "1) Is the output actually useful? Would you use this in real work?",
                "2) Is it in the right format? (bullet points, essay, code, table, etc.)",
                "3) What's missing? Anything you need to add to the prompt next time?"
              ]}
            >
              <p><strong>Simple grading rubric:</strong></p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #333' }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Question</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Poor</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Good</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Excellent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem' }}>Usefulness</td>
                    <td style={{ padding: '0.5rem' }}>I wouldn't use this</td>
                    <td style={{ padding: '0.5rem' }}>I'd use this with edits</td>
                    <td style={{ padding: '0.5rem' }}>Ready to use as-is</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem' }}>Format</td>
                    <td style={{ padding: '0.5rem' }}>Wrong format</td>
                    <td style={{ padding: '0.5rem' }}>Mostly right format</td>
                    <td style={{ padding: '0.5rem' }}>Perfect format</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem' }}>Completeness</td>
                    <td style={{ padding: '0.5rem' }}>Missing key info</td>
                    <td style={{ padding: '0.5rem' }}>Good, minor gaps</td>
                    <td style={{ padding: '0.5rem' }}>Complete & thorough</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                Aim for "Good" or "Excellent" across all 3 areas. If you're at "Poor," refine the prompt and test again.
              </p>
            </HandsOn>

            <HandsOn
              stepNumber={4}
              title="Save Your Prompts"
              duration="10 min"
              steps={[
                "Choose ONE of these three options (or do all three for redundancy):",
                "Option A: In Claude - create a new Project and paste your 5 prompts into the Project Instructions.",
                "Option B: In ChatGPT - go to Settings > Personalization > Custom Instructions and add your context there.",
                "Option C: Create a simple text file called 'My AI Prompts.txt' and save it to your Documents or cloud storage."
              ]}
            >
              <Callout type="tip">
                <strong>Pro tip:</strong> The best approach is to save your prompts in Claude Projects. Then you have them forever, and you can refine them each time you use them. Every conversation teaches the AI more about what you need.
              </Callout>
              <p style={{ marginTop: '1rem' }}>
                Here's what your Project Instructions should look like:
              </p>
              <PromptBox label="Example: Save Your Prompts in a Claude Project">
                {`CONTEXT FOR ALL CONVERSATIONS:
I'm a [YOUR PROFESSION]. I need help with these recurring tasks:

PROMPT 1: [Your first prompt in full]

PROMPT 2: [Your second prompt in full]

PROMPT 3: [Your third prompt in full]

PROMPT 4: [Your fourth prompt in full]

PROMPT 5: [Your fifth prompt in full]

When I ask you to do any of these, use the corresponding prompt above.`}
              </PromptBox>
            </HandsOn>

            <HandsOn
              stepNumber={5}
              title="Reflection"
              duration="5 min"
              steps={[
                "Spend 5 minutes answering these reflection questions. Write them down.",
                "Questions are below."
              ]}
            >
              <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                <ol>
                  <li><strong>What surprised you about working with AI?</strong> Something unexpected, weird, cool, or wrong?</li>
                  <li><strong>Which prompt worked better than expected?</strong> Where did the AI output actually impress you?</li>
                  <li><strong>What will you try first at work tomorrow?</strong> Which of your 5 prompts are you most excited to use?</li>
                  <li><strong>What would you do differently?</strong> If you were doing this again, what would change?</li>
                  <li><strong>What do you want to learn next?</strong> Advanced prompting? Agents? Custom tools?</li>
                </ol>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>
                These reflections are just for you. But if you want to share what surprised you, reach out in the community forum.
              </p>
            </HandsOn>
          </section>

          {/* Bonus Challenges */}
          <section className="l0-section">
            <h2>Bonus Challenges (If You Want More)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: '#fff9e6', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ffe082' }}>
                <h4 style={{ marginTop: 0 }}>Bonus 1: The Prompt Tournament</h4>
                <p>Write 3 different versions of one prompt using RACE. Test all 3 in Claude. Which one works best? Why? This teaches you prompt sensitivity.</p>
              </div>
              <div style={{ backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #81d4fa' }}>
                <h4 style={{ marginTop: 0 }}>Bonus 2: Share & Compare</h4>
                <p>Post one of your prompts in the community forum. See how others wrote theirs for the same task. What's different? What can you steal (the good parts)?</p>
              </div>
              <div style={{ backgroundColor: '#f3e5f5', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ce93d8' }}>
                <h4 style={{ marginTop: 0 }}>Bonus 3: Prompt Iteration Log</h4>
                <p>For one task, document v1, v2, and v3 of your prompt. What did you change each time? Why? This is how you become a prompt engineer.</p>
              </div>
            </div>
          </section>

          {/* Feedback */}
          <LevelQuiz level={0} />
          <LevelFeedback level={0} levelTitle="Foundations - AI Basics & Prompt Engineering" />

          {/* Level 0 Complete */}
          <section className="l0-section" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h2>Level 0 Complete!</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto' }}>
              You've learned the foundations of AI. You understand how AI works, what to expect, how to write prompts, and how to use them in real work.
            </p>

            <div style={{ backgroundColor: '#e8f5e9', padding: '2rem', borderRadius: '8px', margin: '2rem auto', maxWidth: '600px', textAlign: 'left' }}>
              <h4 style={{ marginTop: 0 }}>What You Now Know</h4>
              <ul>
                <li>How AI models actually work (transformer architecture, tokens, training)</li>
                <li>What AI can and can't do (strengths and limitations)</li>
                <li>The RACE framework for effective prompts</li>
                <li>How to test and refine prompts</li>
                <li>5 real prompts you use every week</li>
              </ul>
            </div>

            <h3 style={{ marginTop: '2.5rem' }}>Ready for Level 1?</h3>
            <p style={{ maxWidth: '600px', margin: '1rem auto', color: '#666' }}>
              Level 1 takes you beyond single prompts. You'll learn to chain prompts together, create custom AI tools, work with agents, and connect AI to your actual files and apps. This is where AI becomes powerful.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <Link href="/level1/lesson6" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', backgroundColor: '#2563eb', color: 'white', borderRadius: '6px' }}>
                Begin Level 1: Advanced Prompting →
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
