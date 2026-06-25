'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson49() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-49" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={49}
          duration={45}
          title="AI Image Generation Fundamentals"
          subtitle="Write prompts that actually produce the image you have in your head - structure, parameters, and the leading tools"
        />

        <section className="section-card">
          <h2>The Anatomy of an Image Prompt</h2>
          <p>
            A weak image prompt is a single noun: <em>&quot;a dog&quot;</em>. A strong one describes
            <strong> subject, style, composition, lighting, and detail</strong> in a deliberate order.
            Image models weight the front of the prompt more heavily, so lead with what matters most.
          </p>
          <div className="code-block">
            <pre>{`[SUBJECT] + [DESCRIPTORS] + [STYLE/MEDIUM] + [COMPOSITION] + [LIGHTING] + [QUALITY]

Example:
"A golden retriever puppy sitting in tall grass,
 photorealistic, shallow depth of field,
 shot on 85mm lens, soft golden-hour backlight,
 highly detailed, 4k"`}</pre>
          </div>
          <div className="info-box">
            <strong>Order matters.</strong> &quot;Photorealistic puppy&quot; and &quot;puppy,
            photorealistic&quot; can differ. Put the single most important word first.
          </div>
        </section>

        <section className="section-card">
          <h2>The Five Building Blocks</h2>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Subject</strong>
              <p>Who/what is in the frame. Be concrete: &quot;a weathered fisherman&quot; beats
                &quot;a person&quot;.</p>
            </div>
            <div className="step">
              <strong>2 - Style / medium</strong>
              <p>Photo, oil painting, 3D render, watercolor, line art, isometric, pixel art.
                This single choice changes everything.</p>
            </div>
            <div className="step">
              <strong>3 - Composition</strong>
              <p>Close-up, wide shot, bird&apos;s-eye view, rule of thirds, centered, portrait vs
                landscape orientation.</p>
            </div>
            <div className="step">
              <strong>4 - Lighting &amp; mood</strong>
              <p>Golden hour, soft studio light, neon, dramatic shadows, overcast. Lighting is
                what makes images feel professional.</p>
            </div>
            <div className="step">
              <strong>5 - Quality &amp; technical cues</strong>
              <p>&quot;Highly detailed&quot;, &quot;8k&quot;, lens type, film stock. For photos,
                camera language (&quot;shot on 50mm, f/1.8&quot;) nudges realism.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Parameters: Aspect Ratio, Seed, Negative Prompts</h2>
          <p>
            Beyond words, most tools expose controls. In Midjourney these are flags; in others
            they&apos;re UI fields. The concepts are universal.
          </p>
          <div className="code-block">
            <pre>{`--ar 16:9      Aspect ratio (16:9 video frame, 1:1 social, 9:16 reels)
--seed 12345   Fix the random seed → reproducible / iterable result
--no text      Negative prompt → exclude unwanted elements
--stylize 250  Stylization strength (tool-specific)
--chaos 30     Variety across the 4 results (tool-specific)`}</pre>
          </div>
          <div className="info-box">
            <strong>Workflow tip:</strong> Once you get a result you like, grab its seed and reuse
            it while tweaking one descriptor at a time. This turns random luck into directed editing.
          </div>
        </section>

        <section className="section-card">
          <h2>The Leading Image Tools (2026) - and When to Use Each</h2>
          <div className="code-block">
            <pre>{`GPT Image 2     Best all-rounder. Strong prompt fidelity, in-image text,
                conversational editing ("now make the sky orange").

Midjourney V7   The aesthetic leader. Gorgeous, stylized, opinionated look.
                Great for concept art, moodboards, striking visuals.

FLUX            Photorealism king. Skin, hands, fabric that pass as photos.
                Runs locally (open weights) or via API.

Adobe Firefly   Trained ONLY on licensed/owned content → commercially safe.
                The default when you must sell or publish without legal risk.

Ideogram 3      Best at TEXT inside images - logos, posters, ads, signage.`}</pre>
          </div>
          <div className="info-box">
            <strong>Need words in your image?</strong> (a poster, a mockup, a logo) - reach for
            Ideogram or GPT Image 2. Pure diffusion models still mangle long text.
          </div>
        </section>

        <section className="section-card">
          <h2>Iteration Loop: From Rough to Right</h2>
          <p>Nobody nails it on prompt #1. The professional loop:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Step 1 - Generate a batch of 4</strong>
              <p>Read which one is closest to your intent, even if none is perfect.</p>
            </div>
            <div className="step">
              <strong>Step 2 - Create variations of the best one</strong>
              <p>Most tools have a &quot;vary&quot; / &quot;remix&quot; button that explores around a chosen image.</p>
            </div>
            <div className="step">
              <strong>Step 3 - Lock the seed, change one thing</strong>
              <p>Adjust a single descriptor (lighting, color, angle) so changes are controlled, not random.</p>
            </div>
            <div className="step">
              <strong>Step 4 - Upscale the winner</strong>
              <p>Run a final upscale for resolution and detail (covered next lesson).</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Build a Prompt in Layers</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> Start with just <em>&quot;a coffee cup&quot;</em> and
            generate. Then regenerate, adding one layer each time: medium
            (<em>&quot;product photo&quot;</em>) → composition (<em>&quot;top-down flat lay&quot;</em>)
            → lighting (<em>&quot;soft window light&quot;</em>) → detail
            (<em>&quot;steam rising, shallow depth of field, highly detailed&quot;</em>). Watch the
            image transform at each step. Save all five so you can see exactly what each building
            block contributed. This is the single best exercise for internalizing prompt structure.
          </div>
        </section>

        <QuickRef title="Lesson 49 Quick Reference" items={[
          { term: 'Prompt order', definition: 'Subject → descriptors → style → composition → lighting → quality; front-load what matters most' },
          { term: 'Style/medium', definition: 'The highest-leverage word - photo vs painting vs 3D render changes the entire image' },
          { term: 'Aspect ratio', definition: '16:9 video, 1:1 social, 9:16 vertical/reels - set before generating' },
          { term: 'Camera language', definition: '"Shot on 85mm, f/1.8, golden hour" pushes images toward photorealism' },
          { term: 'Vary / remix', definition: 'Explore around a chosen image instead of starting over' },
          { term: 'Text in images', definition: 'Use Ideogram 3 or GPT Image 2; pure diffusion still struggles with words' },
          { term: 'Commercial-safe choice', definition: 'Adobe Firefly - licensed training data, lowest legal risk for published work' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson48', label: 'The Generative Media Landscape' }}
          next={{ href: '/level6/lesson50', label: 'Advanced Image Workflows' }}
          currentLessonId="l6-49"
        />
      </main>
    </div>
  )
}
