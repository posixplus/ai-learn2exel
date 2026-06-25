'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

export default function Level6Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={0}
          duration={120}
          title="Level 6 Capstone"
          subtitle="Produce one complete multimedia piece end-to-end - images, video, voice and music - through a real creative pipeline"
        />

        <section className="section-card">
          <div className="capstone-hero l6">
            <h2>Direct a Full Multimedia Production</h2>
            <p>
              Across eight lessons you learned to generate images, animate video, create voice and
              music, and navigate the rights that come with all of it. This capstone puts every piece
              together: you will run the four-stage pipeline from Lesson 55 to ship one finished,
              publishable piece of media.
            </p>
            <p>
              Pick one of the three projects below. Each exercises the full Level 6 skill set. The
              point is not a single pretty asset - it is directing multiple tools into one coherent,
              on-brand, legally-clean result.
            </p>
          </div>
        </section>

        <section className="section-card">
          <h2>Project A - 30-Second Brand Teaser</h2>
          <p>
            Produce a 30-second vertical (9:16) promo video for a real or imagined product, event, or
            service.
          </p>
          <ul>
            <li>4-6 shots, each generated as a still then animated (image-to-video)</li>
            <li>A consistent visual style and palette across every shot</li>
            <li>AI voiceover narration plus a licensed/commercial-safe music bed</li>
            <li>On-screen text and captions added in an editor</li>
            <li>A branded intro/outro frame</li>
          </ul>
          <div className="info-box">
            <strong>Stretch:</strong> Export a second cut reformatted to 16:9 using outpainting and
            re-editing - one production, two platforms.
          </div>
        </section>

        <section className="section-card">
          <h2>Project B - Illustrated Story or Explainer</h2>
          <p>
            Create a narrated, illustrated piece (8-12 frames) that teaches or tells a story - a
            children&apos;s story page, a concept explainer, or a how-it-works walkthrough.
          </p>
          <ul>
            <li>A recurring character or consistent visual world (use reference images)</li>
            <li>8-12 generated illustrations in one cohesive style</li>
            <li>AI narration timed to each frame</li>
            <li>Optional gentle motion (image-to-video) and background music</li>
            <li>Assembled as a video or an interactive slideshow</li>
          </ul>
          <div className="info-box">
            <strong>The hard part:</strong> character/style consistency across a dozen images. This is
            where reference images and a locked seed family earn their keep.
          </div>
        </section>

        <section className="section-card">
          <h2>Project C - Brand Asset Pack</h2>
          <p>
            Build a complete, on-brand asset pack for one fictional brand - the kind a small business
            would actually use.
          </p>
          <ul>
            <li>A logo/wordmark concept (use a text-capable image tool)</li>
            <li>6 social tiles (1:1) sharing one visual system</li>
            <li>2 banner images (16:9) via outpainting from the tiles</li>
            <li>A short audio sting (music) for video intros</li>
            <li>A one-page brand recipe documenting palette, style ref, and tools used</li>
          </ul>
          <div className="info-box">
            <strong>Commercial focus:</strong> Generate this pack as if you must sell it. Use
            commercially-safe tools and file a rights note for every asset (Lesson 54).
          </div>
        </section>

        <section className="section-card">
          <h2>Requirements - All Projects</h2>
          <p>Whichever you choose, your submission must demonstrate the full pipeline:</p>
          <div className="code-block">
            <pre>{`1. BRIEF       A written brief (goal, audience, format, brand, budget)

2. MULTI-TOOL  Evidence you used at least THREE modalities
               (e.g. image + video + audio, or image + music + layout)

3. CONSISTENCY A deliberate, repeated visual/audio style - not random

4. EDIT PASS   Assembled in an editor: captions/text, audio mix,
               color/layout - not raw generations dumped together

5. RIGHTS      A short rights + disclosure note: which tools, whether
               commercial use is granted, and an AI-made disclosure

6. COST        A line noting roughly what the piece cost to generate`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>How to Approach It</h2>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Write the brief first (10 min)</strong>
              <p>Lock goal, audience, format/aspect ratio, brand, and budget before generating
                anything. Resist the urge to jump to images.</p>
            </div>
            <div className="step">
              <strong>2 - Storyboard cheap (30 min)</strong>
              <p>Generate and approve every still using your brand recipe. Fix problems here.</p>
            </div>
            <div className="step">
              <strong>3 - Animate &amp; voice (40 min)</strong>
              <p>Animate only approved stills; generate narration and music in parallel.</p>
            </div>
            <div className="step">
              <strong>4 - Edit &amp; publish (30 min)</strong>
              <p>Assemble, caption, color-grade, mix audio, export per platform, write your rights note.</p>
            </div>
            <div className="step">
              <strong>5 - Reflect (10 min)</strong>
              <p>What worked, what each tool cost, what you&apos;d change. This is how the next piece
                gets twice as fast.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>What You Have Learned in Level 6</h2>
          <p>You covered the complete generative-media toolkit:</p>
          <ul>
            <li><strong>L48</strong> - The generative media landscape; why diffusion ≠ LLMs</li>
            <li><strong>L49</strong> - Image generation fundamentals and prompt structure</li>
            <li><strong>L50</strong> - Advanced image workflows: editing, references, upscaling, brand assets</li>
            <li><strong>L51</strong> - AI video generation and its hard limits</li>
            <li><strong>L52</strong> - Voice, music, dubbing - and the consent/licensing rules</li>
            <li><strong>L53</strong> - Multimodal &amp; in-app design tools</li>
            <li><strong>L54</strong> - Ethics, rights, disclosure laws, and content provenance</li>
            <li><strong>L55</strong> - Building a repeatable creative pipeline</li>
          </ul>
          <div className="hands-on-box">
            <strong>You can now create with AI, not just chat with it.</strong> You can take an idea
            from brief to a finished, on-brand, legally-clean multimedia piece - directing a stack of
            specialized tools the way a creative lead directs a team. The specific models will keep
            changing; the pipeline and judgment you built here will not.
          </div>
        </section>

        <LevelQuiz level={6} />
        <LevelFeedback level={6} levelTitle="Generative Media - Create with AI" />
        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson55', label: 'Building a Creative Pipeline' }}
          next={undefined}
          currentLessonId="l6-capstone"
        />
      </main>
    </div>
  )
}
