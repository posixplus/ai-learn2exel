'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson53() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-53" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={53}
          duration={40}
          title="Multimodal & Design Tools"
          subtitle="Where generation lives inside the apps you already use - Canva, Adobe, and presentation tools - and how to combine modalities"
        />

        <section className="section-card">
          <h2>You Don&apos;t Always Need a Specialist Tool</h2>
          <p>
            Lessons 49-52 covered best-in-class generators. But for a huge share of real work, the
            fastest path is generation built <strong>inside the design app you already use</strong>.
            No exporting, no juggling tabs - generate, place, and lay out in one place.
          </p>
          <div className="info-box">
            <strong>The trade-off:</strong> In-app tools give up a little raw quality and control in
            exchange for enormous speed and integration. For social posts, decks, and quick marketing
            assets, that&apos;s usually the right trade.
          </div>
        </section>

        <section className="section-card">
          <h2>Canva AI: Design for Non-Designers</h2>
          <p>
            Canva bundles image generation, background removal, magic edit, text-to-design, and
            brand kits into one approachable app. It&apos;s the default for marketers, teachers, and
            small businesses producing volume.
          </p>
          <div className="code-block">
            <pre>{`What Canva AI does in one place:
  • Generate images from a prompt, on-canvas
  • "Magic Edit" - inpaint/replace parts of an image
  • Remove/replace backgrounds in a click
  • Text-to-design: describe a poster, get an editable layout
  • Brand Kit: lock fonts, colors, logo across everything
  • Resize one design to every social format instantly`}</pre>
          </div>
          <div className="info-box">
            <strong>Best for:</strong> social graphics, flyers, simple decks, and anyone who wants
            results without learning Photoshop. The Brand Kit is the secret to on-brand consistency.
          </div>
        </section>

        <section className="section-card">
          <h2>Adobe Firefly &amp; Express: Commercial-Grade, In-App</h2>
          <p>
            Adobe embeds Firefly across Photoshop, Illustrator, and Express. Because Firefly is trained
            on licensed and Adobe-owned content, its output is positioned as <strong>commercially
            safe</strong> - a major reason enterprises choose it.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Photoshop - Generative Fill</strong>
              <p>Inpaint, extend, and remove objects with a brush and a text box, inside a real editor.</p>
            </div>
            <div className="step">
              <strong>Illustrator - vector generation</strong>
              <p>Generate editable vector art (scalable, brand-friendly) rather than flat pixels.</p>
            </div>
            <div className="step">
              <strong>Express - fast layouts</strong>
              <p>Canva-style quick design with Firefly generation and commercial-safety baked in.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Presentations &amp; Documents</h2>
          <p>
            Generation has reached slides and docs too. Tools like Gamma, Canva Docs, and the AI
            features in Google Slides / PowerPoint turn a prompt or outline into a full draft deck -
            images, layout, and copy together.
          </p>
          <div className="info-box">
            <strong>Workflow:</strong> Let the AI produce the <em>first draft</em> structure and
            visuals, then edit heavily. AI-generated decks are a fast starting point, not a finished
            product - the generic ones are obvious.
          </div>
        </section>

        <section className="section-card">
          <h2>Combining Modalities: The Real Skill</h2>
          <p>
            The highest-value work chains tools together. One asset rarely lives alone - it&apos;s an
            image that becomes a video that gets a voiceover that lands in a deck.
          </p>
          <div className="code-block">
            <pre>{`Example: a 30-second product teaser

  Image tool   → 5 branded product stills (Lesson 50 recipe)
       ↓
  Video tool   → animate each still (image-to-video, Lesson 51)
       ↓
  Voice tool   → script + TTS narration (Lesson 52)
  Music tool   → licensed background bed (Lesson 52)
       ↓
  Editor/Canva → assemble clips, add captions, brand frame, export

Each tool does one thing well; YOU are the director.`}</pre>
          </div>
          <div className="info-box">
            <strong>This is the pipeline mindset.</strong> Lesson 55 turns it into a repeatable
            process, and the capstone has you run it end to end.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: One Asset, Two Routes</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Make the same social post two ways. First, in a
            specialist image tool, then drop it into a layout. Second, do the whole thing inside Canva
            (or Adobe Express) using its built-in generation and Brand Kit. Compare time, quality, and
            how &quot;on-brand&quot; each feels. You&apos;ll quickly sense which jobs deserve a
            specialist tool and which are faster done in-app - a judgment you&apos;ll use constantly.
          </div>
        </section>

        <QuickRef title="Lesson 53 Quick Reference" items={[
          { term: 'In-app generation', definition: 'Generate inside Canva/Adobe/Slides - trades a little quality for big speed and integration' },
          { term: 'Canva AI', definition: 'Image gen, magic edit, background removal, text-to-design, Brand Kit - for non-designers at volume' },
          { term: 'Firefly (Adobe)', definition: 'Commercial-safe generation embedded in Photoshop, Illustrator, Express' },
          { term: 'Generative Fill', definition: 'Photoshop inpaint/extend/remove with a brush and a prompt' },
          { term: 'Vector generation', definition: 'Illustrator can generate editable, scalable vector art - ideal for brand assets' },
          { term: 'AI decks', definition: 'Prompt/outline → draft presentation; treat as a first draft, then edit heavily' },
          { term: 'Pipeline mindset', definition: 'Chain image → video → voice → music → layout; each tool does one job, you direct' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson52', label: 'AI Voice & Audio' }}
          next={{ href: '/level6/lesson54', label: 'Ethics, Rights & Authenticity' }}
          currentLessonId="l6-53"
        />
      </main>
    </div>
  )
}
