'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson55() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-55" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={55}
          duration={45}
          title="Building a Creative Pipeline"
          subtitle="Turn scattered tools into one repeatable process: brief → assets → edit → publish, with cost control and tool selection baked in"
        />

        <section className="section-card">
          <h2>From Toy to Production</h2>
          <p>
            You can now generate images, video, voice, and music, and you know the rules. The final
            skill is <strong>orchestration</strong>: combining all of it into a reliable, repeatable
            pipeline that produces finished work on a budget and a deadline. One impressive image is a
            party trick; a pipeline is a capability.
          </p>
          <div className="info-box">
            <strong>A pipeline is just a checklist that survives reuse.</strong> The goal is that your
            tenth video takes a fraction of the time of your first, and looks more consistent.
          </div>
        </section>

        <section className="section-card">
          <h2>The Four-Stage Pipeline</h2>
          <div className="code-block">
            <pre>{`1. BRIEF      What, for whom, where it's published, the constraints
                 → message, audience, format/aspect ratio, brand, budget

2. ASSETS     Generate the raw material
                 → images (Lesson 50 recipe), video clips (51),
                   voice + music (52) - storyboard CHEAP before video

3. EDIT       Assemble into the finished piece
                 → cut, layout, captions, color, brand frame, sound mix

4. PUBLISH    Ship it correctly
                 → correct format/size per platform, disclosure where
                   required, rights note filed, archive the project`}</pre>
          </div>
          <div className="info-box">
            <strong>Most beginners skip stage 1 and 4.</strong> A tight brief prevents wandering and
            wasted credits; a publish checklist keeps you legal and consistent.
          </div>
        </section>

        <section className="section-card">
          <h2>Stage 1 - The Brief That Saves You Money</h2>
          <p>
            Before generating anything, answer five questions. Vagueness here is what burns credits
            later.
          </p>
          <div className="code-block">
            <pre>{`BRIEF TEMPLATE
  Goal:        "Drive signups for the spring workshop"
  Audience:    "Local parents, 30-45, not technical"
  Format:      "30s vertical video (9:16) + 3 static posts (1:1)"
  Brand:       "Palette #2563EB / #F59E0B, friendly, rounded"
  Budget/time: "Under $15 of generation, ship by Friday"`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Stage 2 - Generate in the Right Order</h2>
          <p>The order is a cost-control strategy, not just a sequence:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Storyboard with images first (cheap)</strong>
              <p>Lock every shot as a still using your brand recipe. Fix problems here, where
                regeneration costs pennies - not in video.</p>
            </div>
            <div className="step">
              <strong>Animate only approved stills (expensive)</strong>
              <p>Image-to-video the shots you&apos;ve already approved. One clear motion each.</p>
            </div>
            <div className="step">
              <strong>Generate audio in parallel</strong>
              <p>Script + TTS narration and a licensed music bed while clips render.</p>
            </div>
            <div className="step">
              <strong>Keep a consistency anchor</strong>
              <p>Same character/style reference and seed family across every asset so the piece feels
                like one thing.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Stage 3 - Edit: Where It Becomes Professional</h2>
          <p>
            Raw generations are ingredients. The edit is the meal. A normal editor (CapCut, DaVinci
            Resolve, Premiere, or even Canva) is where you:
          </p>
          <div className="code-block">
            <pre>{`• Cut clips to rhythm; trim the glitchy frames
• Add on-screen TEXT here (never trust models to render it)
• Layer narration + music; duck music under voice
• Color-grade for a consistent look across clips
• Add a branded intro/outro frame
• Caption everything (accessibility + silent autoplay)`}</pre>
          </div>
          <div className="info-box">
            <strong>The 80/20 of looking pro:</strong> consistent color grade, captions, and clean
            audio mixing. These three fixes do more than any single better generation.
          </div>
        </section>

        <section className="section-card">
          <h2>Stage 4 - Publish &amp; Cost Discipline</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Export per platform</strong>
              <p>Right aspect ratio and resolution for each destination; don&apos;t upload a 16:9 to a
                9:16 slot.</p>
            </div>
            <div className="step">
              <strong>Disclose &amp; file rights</strong>
              <p>Add AI disclosure where required (Lesson 54), and save a one-line rights note per
                asset and the project file.</p>
            </div>
            <div className="step">
              <strong>Track spend</strong>
              <p>Note what the piece cost in credits/dollars. After a few projects you&apos;ll
                estimate accurately and quote confidently.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Cost-control habits:</strong> storyboard before video, generate at draft quality
            until the cut is locked, then do final high-res passes only on keepers. This routinely
            cuts generation spend by more than half.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Write Your Pipeline Doc</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> Write a one-page <code>pipeline.md</code> for a project
            type you actually make (e.g. &quot;weekly product teaser&quot;). Fill in: your brief
            template, the exact tools you&apos;ll use at each stage and why, your brand recipe (palette,
            style ref, fonts), your editor, and your publish/disclosure checklist. This document is the
            deliverable that turns everything in Level 6 into a repeatable system - and it&apos;s the
            backbone of your capstone.
          </div>
        </section>

        <QuickRef title="Lesson 55 Quick Reference" items={[
          { term: 'Pipeline', definition: 'Brief → Assets → Edit → Publish - a repeatable checklist, not a one-off' },
          { term: 'Brief template', definition: 'Goal, audience, format/aspect, brand, budget/time - locked before generating' },
          { term: 'Storyboard cheap', definition: 'Approve every shot as a still before spending on per-second video' },
          { term: 'Consistency anchor', definition: 'Reuse the same character/style reference and seed family across all assets' },
          { term: 'Edit = professional', definition: 'Cut, on-screen text, audio mix, color grade, captions, branded frame' },
          { term: 'Add text in the editor', definition: 'Never rely on video models to render legible on-screen words' },
          { term: 'Cost discipline', definition: 'Draft quality until the cut locks, final high-res only on keepers' },
          { term: 'Publish checklist', definition: 'Correct format per platform, AI disclosure, filed rights note, archived project' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson54', label: 'Ethics, Rights & Authenticity' }}
          next={{ href: '/level6/capstone', label: 'Level 6 Capstone' }}
          currentLessonId="l6-55"
        />
      </main>
    </div>
  )
}
