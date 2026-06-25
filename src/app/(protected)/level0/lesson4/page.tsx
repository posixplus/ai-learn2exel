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

export default function Lesson4() {
  return (
    <div className="lesson-layout">
      <Sidebar level={0} currentLessonId="l0-4" />
      <main className="lesson-main">
        <div className="lesson-content-inner">
          <LessonHeader
            level={0}
            lessonNumber={4}
            duration={60}
            title="AI for Your Job"
            subtitle="Real ways AI helps every profession"
            professions={['👩‍🏫 Teacher', '👨‍⚕️ Healthcare', '🎓 Student', '⚙️ Engineer', '💻 Developer', '💼 Business']}
          />

          {/* SECTION 1: 6 CORE WAYS AI HELPS EVERYONE */}
          <section className="lesson-section">
            <h2>Section 1: Six Core Capabilities (Every Profession Uses These)</h2>
            <p>You don't need to know your specific job to use AI. These six things work across all industries and professions.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>1. Write & Edit</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>Drafting emails, reports, proposals, and proofreading your own writing. AI catches grammar mistakes, improves clarity, and rewrites for different tones.</p>
                <PromptBox
                  text="Proofread this email for clarity and tone. Make it more concise without losing the message."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>2. Research & Summarize</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>Digest long documents, extract key points, and explain complex topics quickly. Instead of reading 50 pages, get the essentials in 2 minutes.</p>
                <PromptBox
                  text="Summarize this article in 5 bullet points. Focus on actionable insights, not background."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>3. Explain & Teach</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>Break down complex topics into plain English. AI can explain at multiple levels-for a 5-year-old, for a teenager, for an expert.</p>
                <PromptBox
                  text="Explain quantum entanglement to someone with no physics background. Use an everyday analogy."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>4. Plan & Organize</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>Create outlines, schedules, checklists, and agendas. AI can structure a big project into manageable steps.</p>
                <PromptBox
                  text="Create a 4-week project plan for launching a new product. Break it into milestones and key tasks."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #ec4899' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>5. Brainstorm & Ideate</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>Generate options, suggest alternatives, overcome creative blocks. AI is a brainstorming partner that never says "that's stupid."</p>
                <PromptBox
                  text="I'm stuck on how to open my presentation. Give me 5 different opening ideas-funny, serious, surprising, data-driven, and question-based."
                />
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>6. Analyze & Review</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>Spot gaps in arguments, critique drafts, identify risks. AI can play devil's advocate or find holes in your logic before you present.</p>
                <PromptBox
                  text="What are the weaknesses in this proposal? What would a skeptical investor ask?"
                />
              </div>
            </div>
          </section>

          {/* SECTION 2: BY PROFESSION (DETAILED) */}
          <section className="lesson-section">
            <h2>Section 2: How Your Profession Uses AI</h2>
            <p>Here are specific, real-world examples for eight different professions. Find yours and see what's actually possible.</p>

            <ProfessionSpotlight
              tabs={[
                {
                  profession: '👩‍🏫 Teacher',
                  title: 'Teacher',
                  content: (
                    <>
                      <p><strong>Top Use Cases:</strong> Lesson planning, differentiation, parent communication, grading support</p>

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 1: Create Multiple Difficulty Levels</p>
                      <PromptBox
                        text="I teach 6th grade math. Create 3 versions of a word problem about fractions: one easy for struggling students, one standard, and one challenging for advanced students. Include answer keys."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 2: Write Parent Communications</p>
                      <PromptBox
                        text="Write a professional email to a parent about their child's recent test score (64%). Be honest about areas to improve while encouraging. Suggest specific ways the parent can help at home."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 3: Lesson Plan Generator</p>
                      <PromptBox
                        text="Create a one-week lesson plan for teaching the Civil War to 8th graders. Include: daily objectives, activities, a short video assignment, and a final project idea. Make it engaging, not just lecture."
                      />

                      <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a', fontSize: '0.9rem' }}>
                        <strong>Real impact:</strong> Teachers report saving 5-8 hours per week on planning and grading. Time goes back to students instead of paperwork.
                      </p>
                    </>
                  ),
                },
                {
                  profession: '👨‍⚕️ Healthcare',
                  title: 'Healthcare',
                  content: (
                    <>
                      <p><strong>Top Use Cases:</strong> Patient education, documentation help, summarizing research, drafting referral letters</p>

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 1: Patient Education</p>
                      <PromptBox
                        text="A patient just asked me what hypertension is and why it matters. Write a 150-word explanation using plain language. Include what they can do to help manage it. No medical jargon."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 2: Summarize Medical Research</p>
                      <PromptBox
                        text="Summarize the key findings from this research paper on diabetes treatment [paste abstract/title]. What does it mean for patient care? Are there any limitations I should be aware of?"
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 3: Draft a Referral Letter</p>
                      <PromptBox
                        text="Draft a referral letter to a cardiologist for a patient with persistent high blood pressure despite medication. Include relevant clinical findings and the reason for referral."
                      />

                      <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a', fontSize: '0.9rem' }}>
                        <strong>Real impact:</strong> Doctors spend less time on administrative writing, more time with patients. Patient education improves understanding and compliance.
                      </p>
                    </>
                  ),
                },
                {
                  profession: '🎓 Student',
                  title: 'Student',
                  content: (
                    <>
                      <p><strong>Top Use Cases:</strong> Understanding confusing concepts, essay brainstorming, study plans, research summaries</p>

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 1: Explain Confusing Concepts</p>
                      <PromptBox
                        text="I don't understand photosynthesis. Explain it using examples I can relate to-not just textbook definitions. Make it intuitive."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 2: Essay Structure & Brainstorming</p>
                      <PromptBox
                        text="I need to write an essay on 'The role of technology in education.' Give me: a strong thesis, 3 main arguments, and counter-arguments I should address. Don't write the essay for me-just the structure."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 3: Study Plan</p>
                      <PromptBox
                        text="I have a biology exam in 2 weeks on evolution and genetics. Create a study schedule breaking it into topics. What should I focus on? What practice problems are most important?"
                      />

                      <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a', fontSize: '0.9rem' }}>
                        <strong>Real impact:</strong> Students understand concepts faster, develop stronger study habits, and get better grades. And it's actually studying, not cheating.
                      </p>
                    </>
                  ),
                },
                {
                  profession: '⚙️ Engineer',
                  title: 'Engineer',
                  content: (
                    <>
                      <p><strong>Top Use Cases:</strong> Writing reports for non-technical audiences, documentation, troubleshooting guides, proposals</p>

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 1: Explain Technical Concepts Simply</p>
                      <PromptBox
                        text="I need to explain why we're replacing the water pipes in this building to city council members (non-technical audience). They need to understand: the current problem, why it matters, and what we recommend. No jargon."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 2: Write Technical Documentation</p>
                      <PromptBox
                        text="Write a troubleshooting guide for the new HVAC system. Include: common problems, step-by-step solutions, and when to call a professional. Make it clear for facility managers with no technical background."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 3: Project Proposal</p>
                      <PromptBox
                        text="Help me outline a proposal to upgrade our infrastructure. What sections should I include? What data should I present? Who should I address it to?"
                      />

                      <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a', fontSize: '0.9rem' }}>
                        <strong>Real impact:</strong> Engineers spend less time writing, more time engineering. Projects get approved faster because stakeholders actually understand them.
                      </p>
                    </>
                  ),
                },
                {
                  profession: '💻 Developer',
                  title: 'Developer',
                  content: (
                    <>
                      <p><strong>Top Use Cases:</strong> Code review, debugging, writing tests, learning new frameworks, documentation</p>

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 1: Code Review</p>
                      <PromptBox
                        text={`Review this code. Tell me: 1) What it does, 2) Any bugs or inefficiencies, 3) How to make it more readable, 4) What edge cases am I missing? [paste code]`}
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 2: Write Tests</p>
                      <PromptBox
                        text="Write unit tests for this function [paste function]. Include tests for normal cases and edge cases. Use pytest."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 3: Learn New Tech</p>
                      <PromptBox
                        text="I need to learn React hooks. Explain useState, useEffect, and useContext like I'm familiar with React but never used hooks. Give me a small example I can actually run."
                      />

                      <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a', fontSize: '0.9rem' }}>
                        <strong>Real impact:</strong> Developers spend less time on boilerplate and docs, more time on complex problems. Code quality improves with consistent reviews.
                      </p>
                    </>
                  ),
                },
                {
                  profession: '💼 Business',
                  title: 'Business',
                  content: (
                    <>
                      <p><strong>Top Use Cases:</strong> Writing proposals, summarizing meetings, client emails, market research, presentations</p>

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 1: Client Email</p>
                      <PromptBox
                        text="Draft a professional email to a prospective client. Purpose: introduce our company and services, request a 30-minute call to learn about their needs. Make it personal but not pushy."
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 2: Market Research Summary</p>
                      <PromptBox
                        text="Summarize the current state of the [industry] market. What are the main trends? Who are the key players? What opportunities exist for a new company entering this space?"
                      />

                      <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Prompt 3: Meeting Summary</p>
                      <PromptBox
                        text="Summarize this client meeting transcript. Extract: key decisions made, action items (with owners), next steps, and any risks or concerns raised. [paste transcript]"
                      />

                      <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a', fontSize: '0.9rem' }}>
                        <strong>Real impact:</strong> Business professionals save 3-5 hours per week on writing and research. More time for strategy and relationships.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </section>

          {/* SECTION 3: END-TO-END WORKFLOW EXAMPLE */}
          <section className="lesson-section">
            <h2>Section 3: End-to-End Workflow Example</h2>
            <p>Here's how a teacher creates an entire week of lesson materials using AI prompts that build on each other.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', position: 'relative', paddingLeft: '3rem' }}>
                <p style={{ position: 'absolute', left: '0.75rem', top: '-0.75rem', backgroundColor: '#0284c7', color: 'white', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</p>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Prompt 1: Outline the Week</p>
                <PromptBox
                  text="I'm teaching 9th grade English this week on characterization. Create a lesson outline for 5 days. What should students learn each day?"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
                <p style={{ margin: '0', color: '#666', fontSize: '1.5rem' }}>↓</p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', position: 'relative', paddingLeft: '3rem' }}>
                <p style={{ position: 'absolute', left: '0.75rem', top: '-0.75rem', backgroundColor: '#0284c7', color: 'white', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</p>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Prompt 2: Create Materials for Day 1</p>
                <PromptBox
                  text="For day 1 (introduction to characterization), create: 1) A 5-minute warm-up discussion question, 2) Two short excerpts from literature showing different characterization techniques, 3) A guided worksheet for students to analyze one excerpt."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
                <p style={{ margin: '0', color: '#666', fontSize: '1.5rem' }}>↓</p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', position: 'relative', paddingLeft: '3rem' }}>
                <p style={{ position: 'absolute', left: '0.75rem', top: '-0.75rem', backgroundColor: '#0284c7', color: 'white', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</p>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Prompt 3: Create an Activity</p>
                <PromptBox
                  text="Create an interactive classroom activity for day 2 where students practice characterization. It should take about 30 minutes, get students moving/talking, and reinforce the key concepts. Works for a class of 20."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
                <p style={{ margin: '0', color: '#666', fontSize: '1.5rem' }}>↓</p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', position: 'relative', paddingLeft: '3rem' }}>
                <p style={{ position: 'absolute', left: '0.75rem', top: '-0.75rem', backgroundColor: '#0284c7', color: 'white', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</p>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Prompt 4: Create Assessment</p>
                <PromptBox
                  text="Create a short quiz (5 questions) for Friday assessing whether students understand characterization. Include multiple choice, short answer, and one analytical question. Provide answer key."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
                <p style={{ margin: '0', color: '#666', fontSize: '1.5rem' }}>↓</p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7', position: 'relative', paddingLeft: '3rem' }}>
                <p style={{ position: 'absolute', left: '0.75rem', top: '-0.75rem', backgroundColor: '#0284c7', color: 'white', width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>5</p>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Prompt 5: Create a Final Project</p>
                <PromptBox
                  text="Design a final project (due end of week) where students demonstrate mastery of characterization. Should take about 2-3 hours outside class. Could be written, visual, or multimedia. Include a rubric for grading."
                />
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px', borderLeft: '3px solid #f59e0b', fontSize: '0.9rem' }}>
              <strong>Time saved:</strong> Without AI, this would take 6-8 hours. With AI prompting: 1-1.5 hours. More importantly, the lessons are varied and engaging because the teacher spent time thinking about pedagogy, not just writing materials.
            </p>
          </section>

          {/* SECTION 4: HANDS-ON */}
          <section className="lesson-section">
            <h2>Section 4: Hands-On - Your First Real Work Task</h2>
            <p>Let's actually do this. Pick one task you've been putting off, and use AI to start or finish it in the next 15 minutes.</p>

            <HandsOn
              title="Do Real Work with AI"
              description="Not a fake exercise. Pick something from your actual job or life that you need to do this week."
              steps={[
                "Identify one task: something you've been procrastinating on, something that usually takes 30+ minutes, or something you dread doing.",
                "Frame it as an AI prompt using the formula from Lesson 3: 'You are [role]. I need to [task]. The audience is [who]. Please [specific ask]. Format as [format]. Keep it [length/tone].'",
                "Copy the prompt into Claude (claude.ai) or ChatGPT (chatgpt.com). Take 3 minutes to write a good prompt-don't skip this step.",
                "Read the response. Is it 80% there? Great. Use it and refine from there. Perfectionism is the enemy. If it's 70%, refine once. If it's 40%, ask for alternatives.",
                "Copy the result to where you need it (email, document, presentation). You've saved 20-30 minutes. Do it again next week.",
              ]}
            />

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
              <strong>The truth:</strong> Your first 1-2 uses of AI for real work will feel awkward. By the third time, you won't think about it-it'll just be how you work. Give it a week. The payoff is real.
            </p>

            <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', borderLeft: '3px solid #16a34a' }}>
              <strong>Pro tip:</strong> After using AI on this task, write down how long it would have taken without it. You'll be shocked. That's the compounding benefit: 20 minutes saved per task × 3-4 tasks per week = 60+ hours per year. That's more than a week of work back in your life.
            </p>
          </section>

          {/* SECTION 5: QUICK REFERENCE */}
          <section className="lesson-section">
            <QuickRef
              title="Lesson 4 - Quick Reference"
              items={[
                {
                  heading: 'Six Core AI Capabilities',
                  points: [
                    'Write & Edit - drafting, proofreading, rewriting',
                    'Research & Summarize - extract key points from long documents',
                    'Explain & Teach - break down complex topics at different levels',
                    'Plan & Organize - create outlines, schedules, project plans',
                    'Brainstorm & Ideate - generate options and overcome creative blocks',
                    'Analyze & Review - critique your work, find weaknesses, play devil\'s advocate',
                  ],
                },
                {
                  heading: 'Teacher AI Superpowers',
                  points: [
                    'Create lesson plans in minutes, not hours',
                    'Generate quizzes and worksheets for different levels',
                    'Draft parent communication emails',
                    'Save 5-8 hours per week on admin work',
                  ],
                },
                {
                  heading: 'Developer AI Superpowers',
                  points: [
                    'Get code reviews without waiting for teammates',
                    'Generate test cases (especially edge cases)',
                    'Learn new frameworks with concrete examples',
                    'Write documentation automatically',
                  ],
                },
                {
                  heading: 'Business AI Superpowers',
                  points: [
                    'Draft client emails in 30 seconds',
                    'Summarize meetings automatically',
                    'Research competitors and markets',
                    'Outline proposals before writing them',
                  ],
                },
                {
                  heading: 'The Template',
                  points: [
                    '"You are [your role]. I need to [task]. Audience: [who will use/read this]. Format: [bullet points/essay/email/etc]. Tone: [formal/casual/technical/etc]."',
                  ],
                },
              ]}
            />
          </section>

          <LessonNav
            lessonId="l0-4"
            prev={{ href: '/level0/lesson3', title: 'Your First Real Conversations' }}
            next={{ href: '/level0/lesson5', title: 'Prompt Engineering 101' }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
