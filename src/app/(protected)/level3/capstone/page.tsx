import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

export default function Level3Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={3} currentLessonId="l3-capstone" />
      <main className="lesson-main">
        <LessonHeader level={3} lessonNumber={0} duration={240}
          title="Capstone: Build a Real Application"
          subtitle="Put everything together - pick an app idea, build it end-to-end with Claude, and deploy it to the real internet for free" />

        <section className="section-card">
          <h2>What This Capstone Tests</h2>
          <p>
            This is not a quiz - it is a build. You will use everything from all four levels:
            effective prompting (Level 0), understanding Claude&apos;s capabilities (Level 1),
            real-world tools (Level 2), and advanced techniques (Level 3). By the end you will
            have a live application at a real URL, built entirely by directing Claude.
          </p>
          <div className="info-box">
            <strong>Time estimate:</strong> 3-5 hours for a first-time builder, 1-2 hours if you have built a Next.js app before.
            Pace yourself - the goal is a working MVP, not perfection.
          </div>
        </section>

        <section className="section-card">
          <h2>Pick Your App</h2>
          <p>
            Choose one of the three ideas below - each uses the full free-tier stack from Lesson 27 and showcases real
            Claude capabilities. Or bring your own idea and use these as a template for how to structure your approach.
          </p>
        </section>

        <section className="section-card" style={{border:'2px solid var(--color-primary)', borderRadius:'var(--radius-lg)', padding:'1.5rem'}}>
          <h2>&#128161; App Idea 1: Personal Knowledge Base + AI Q&amp;A</h2>
          <p><strong>What it does:</strong> A private app where you paste articles, notes, and links. You can then ask questions in plain English and Claude searches your notes to answer them.</p>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Stack</h3>
          <ul style={{marginLeft:'1.5rem', lineHeight:'1.8'}}>
            <li>Next.js + Tailwind hosted on Vercel</li>
            <li>Supabase (PostgreSQL + pgvector for semantic search)</li>
            <li>Supabase Auth (only you can access)</li>
            <li>Anthropic API (Haiku for tagging, Sonnet for answers)</li>
          </ul>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Key Features</h3>
          <div className="steps-list">
            <div className="step"><strong>Note input</strong> - Paste text or a URL; Claude extracts and summarises key content automatically</div>
            <div className="step"><strong>Semantic search</strong> - Supabase pgvector + Anthropic embeddings so queries find relevant notes even without exact keywords</div>
            <div className="step"><strong>Q&amp;A interface</strong> - Ask &ldquo;What did I save about prompt engineering?&rdquo; and Claude answers using your actual notes as context</div>
            <div className="step"><strong>Auto-tagging</strong> - Claude assigns topic tags to every note on save</div>
          </div>

          <div className="hands-on-box">
            <h3>Starter Prompt for Claude</h3>
            <pre>{`Build a personal knowledge base app called "Second Brain" 
with Next.js and Supabase.

1. Auth: Supabase email auth - only I can sign in
2. Note entry: textarea for pasting text. On save:
   - Claude (Haiku) generates a 2-sentence summary and 3 tags
   - Store in: notes(id, content, summary, tags, embedding, created_at)
   - Generate embedding via Anthropic API and store in pgvector column
3. Search: semantic search using pgvector similarity
4. Q&A page: input → find top 5 relevant notes → send to Claude Sonnet
   with those notes as context → stream the answer
5. Deploy on Vercel with env vars:
   NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, ANTHROPIC_API_KEY

Start with the database schema, then the note entry UI.`}</pre>
          </div>
        </section>

        <section className="section-card" style={{border:'2px solid #10b981', borderRadius:'var(--radius-lg)', padding:'1.5rem'}}>
          <h2>&#128161; App Idea 2: Smart Habit Tracker with Weekly AI Coaching</h2>
          <p><strong>What it does:</strong> Track daily habits with a tap. Every Sunday, Claude analyses your week, spots patterns, and sends you a personalised coaching email.</p>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Stack</h3>
          <ul style={{marginLeft:'1.5rem', lineHeight:'1.8'}}>
            <li>Next.js + Tailwind on Vercel</li>
            <li>Supabase (habits + daily logs)</li>
            <li>Clerk auth (free up to 10K users)</li>
            <li>Resend (weekly coaching email)</li>
            <li>Vercel Cron (runs every Sunday 8am)</li>
            <li>Anthropic API (analysis + coaching)</li>
          </ul>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Key Features</h3>
          <div className="steps-list">
            <div className="step"><strong>Habit setup</strong> - Create up to 10 habits (name, target days/week, category: health/work/personal)</div>
            <div className="step"><strong>Daily check-in</strong> - Simple tick-box UI, one tap per habit</div>
            <div className="step"><strong>Streak visualiser</strong> - GitHub-style contribution grid for the last 12 weeks</div>
            <div className="step"><strong>Sunday AI coach</strong> - Vercel Cron pulls week data, sends to Claude, gets a 3-paragraph coaching message, emails via Resend</div>
          </div>

          <div className="hands-on-box">
            <h3>Starter Prompt for Claude</h3>
            <pre>{`Build a habit tracker app called "Momentum" with Next.js,
Supabase, and Clerk auth.

Database:
- habits(id, user_id, name, category, target_days_per_week, created_at)
- habit_logs(id, habit_id, user_id, completed_date, created_at)

Pages:
1. /dashboard - today's habits as a checklist (tap to complete)
2. /habits - manage habits (add/edit/delete)  
3. /stats - 12-week grid per habit (GitHub contribution style)

Weekly coaching (Vercel Cron, every Sunday 8am UTC):
- API route POST /api/weekly-coach
- Pull last 7 days of logs for the user
- Send to Claude: completion rates, best/worst habits, streaks
- Claude returns a 3-paragraph coaching message
- Send email via Resend to user's email

Start with database schema, then the dashboard.`}</pre>
          </div>
        </section>

        <section className="section-card" style={{border:'2px solid #8b5cf6', borderRadius:'var(--radius-lg)', padding:'1.5rem'}}>
          <h2>&#128161; App Idea 3: AI Meeting Prep &amp; Follow-Up Tool</h2>
          <p><strong>What it does:</strong> Before a meeting, paste the agenda and attendees - Claude drafts talking points. After the meeting, paste your notes - Claude extracts action items, decisions, and drafts a follow-up email.</p>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Stack</h3>
          <ul style={{marginLeft:'1.5rem', lineHeight:'1.8'}}>
            <li>Next.js + Tailwind on Vercel</li>
            <li>Supabase (meeting history + auth)</li>
            <li>Resend (follow-up emails)</li>
            <li>Anthropic API (prep + follow-up generation)</li>
          </ul>

          <h3 style={{marginTop:'1.5rem', marginBottom:'0.75rem'}}>Key Features</h3>
          <div className="steps-list">
            <div className="step"><strong>Meeting prep</strong> - Input title, attendees, agenda. Claude drafts talking points and questions for each agenda item</div>
            <div className="step"><strong>Notes processing</strong> - Paste raw notes; Claude structures into decisions, action items (with owner), and open questions</div>
            <div className="step"><strong>Follow-up email draft</strong> - Claude writes a professional follow-up from structured notes, ready to copy-paste</div>
            <div className="step"><strong>Meeting history</strong> - All meetings saved in Supabase, searchable by topic or attendee</div>
          </div>

          <div className="hands-on-box">
            <h3>Starter Prompt for Claude</h3>
            <pre>{`Build a meeting prep app called "Brief" with Next.js and Supabase.

Database:
meetings(id, user_id, title, meeting_date, attendees jsonb,
         agenda text, prep_output text, notes text,
         structured_output jsonb, followup_email text, created_at)

Flow 1 - Pre-meeting prep:
- Form: title, date, attendees (name + company), agenda topics
- Call Anthropic API: generate 3 talking points + 2 questions per
  agenda topic, and what each attendee likely cares about
- Display and save to database

Flow 2 - Post-meeting follow-up:
- Textarea for raw notes
- Extract: decisions[], action_items[{task, owner, due}], open_questions[]
- Draft follow-up email (3 paragraphs, professional tone)
- Show structured output + email draft side-by-side
- "Copy email" button

List all meetings at /meetings (title, date, attendee count).
Start with the database schema and pre-meeting flow.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>How to Run Your Capstone Build</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Phase 1: Setup (30 min)</strong>
              <ol style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'2'}}>
                <li>Create a new GitHub repo and clone it locally</li>
                <li>Run <code>npx create-next-app@latest</code> in the repo</li>
                <li>Create a free Supabase project at supabase.com</li>
                <li>Connect your GitHub repo to Vercel at vercel.com</li>
                <li>Get your Anthropic API key at console.anthropic.com</li>
              </ol>
            </div>
            <div className="step">
              <strong>Phase 2: Write Your Project CLAUDE.md (15 min)</strong>
              <pre>{`I'm building [app name] with Next.js 14 App Router, TypeScript,
Tailwind CSS, and Supabase.

Generate a project CLAUDE.md covering:
- Tech stack and versions
- Database tables (I'll share schema once built)
- Code style: strict TypeScript, no any, Zod for validation
- File structure conventions
- Patterns to keep consistent across the codebase`}</pre>
            </div>
            <div className="step">
              <strong>Phase 3: Build with Claude (2-3 hours)</strong>
              <p>Use the starter prompt for your chosen app. Work in this order:</p>
              <ol style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'2'}}>
                <li>Database schema (run SQL in Supabase editor)</li>
                <li>Core data layer (Supabase client, TypeScript types)</li>
                <li>Main UI pages (Claude builds component by component)</li>
                <li>API routes (Claude handles the AI integration)</li>
                <li>Auth (last - once you know what needs protecting)</li>
              </ol>
            </div>
            <div className="step">
              <strong>Phase 4: Deploy &amp; Test (30 min)</strong>
              <ol style={{marginLeft:'1.5rem', marginTop:'0.5rem', lineHeight:'2'}}>
                <li>Push to GitHub - Vercel auto-deploys on every push</li>
                <li>Add all env vars in Vercel dashboard → Settings</li>
                <li>Test the live URL end-to-end</li>
                <li>Run the Lesson 26 security checklist before sharing</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Stuck? Prompts That Unblock</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Build is not compiling</strong>
              <pre>{`Here is the TypeScript error: [paste error]
Here is the file: [paste file]
Fix the error. Explain what caused it in one sentence.`}</pre>
            </div>
            <div className="step">
              <strong>Feature is not working as expected</strong>
              <pre>{`Expected: [describe]
Actual: [describe]
Relevant code: [paste]
Debug this step by step.`}</pre>
            </div>
            <div className="step">
              <strong>Not sure how to connect two things</strong>
              <pre>{`I have [A] working and [B] working separately.
I need [A] to trigger [B] when [condition].
Show me the minimal code to wire these together.`}</pre>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Course Complete &#127881;</h2>
          <p>
            If you have built and deployed your capstone, you have done something most daily Claude users have never done.
            You understand the full stack - from writing a precise prompt to shipping a production application.
            You know the pitfalls, the tools, the ecosystem, and the techniques.
          </p>
          <div className="info-box">
            <strong>What is next:</strong> Keep your CLAUDE.md updated as you learn your preferences. Watch for new MCPs and model
            releases - Claude&apos;s capabilities grow every few months. The best way to deepen your skills is to keep building.
            Use Claude for every repeated task, and turn each workflow into a skill.
          </div>
        </section>

        <LevelQuiz level={3} />
        <LevelFeedback level={3} levelTitle="Master Claude - Advanced Techniques" />
        <LessonNav
          level={3}
          prev={{ href: '/level3/lesson28', label: 'Lesson 28: Claude Settings' }}
          currentLessonId="l3-capstone"
        />
      </main>
    </div>
  )
}
