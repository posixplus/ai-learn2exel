'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson51() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-51" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={51}
          duration={45}
          title="AI Video Generation"
          subtitle="Text-to-video and image-to-video with Veo, Kling and Runway - plus the hard limits you must design around"
        />

        <section className="section-card">
          <h2>Video Is the Fastest-Moving Frontier</h2>
          <p>
            In early 2025, AI video was a novelty - a few seconds of warped, silent footage. By 2026,
            multiple models produce <strong>native 4K with synchronized audio, multi-shot
            storyboards, and cinematic camera moves</strong>. It is the single most rapidly improving
            area of generative media, and the most expensive.
          </p>
          <div className="info-box">
            <strong>Currency warning:</strong> Video model rankings change monthly. The principles in
            this lesson are stable; the specific model names are a mid-2026 snapshot. Always re-check
            before a paid project.
          </div>
        </section>

        <section className="section-card">
          <h2>Two Modes: Text-to-Video vs Image-to-Video</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Text-to-video</strong>
              <p>Describe a scene, get a clip. Fast and creative, but you have less control over
                exactly how the first frame looks.</p>
            </div>
            <div className="step">
              <strong>Image-to-video (usually better)</strong>
              <p>Generate a perfect still first (in your favorite image tool), then animate it.
                You control the look precisely, then add motion. This is the pro default.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>The winning workflow:</strong> Nail the frame as an <em>image</em> (cheap,
            controllable), then feed it to a video model as the starting frame. You get the best of
            both: image-level control plus motion.
          </div>
        </section>

        <section className="section-card">
          <h2>The Leading Video Models (2026)</h2>
          <div className="code-block">
            <pre>{`Google Veo 3.1   Best all-rounder. Strong prompt adherence,
                 native audio, 4K landscape + portrait.
                 → narrative scenes, establishing shots, ads.

Kling 3.0        Cinematic motion (hair, liquids, fabric),
                 multi-shot storyboard mode with audio across cuts.
                 → story sequences, dynamic motion.

Runway Gen-4.5   Granular CONTROL: camera moves, motion brush,
                 reference-driven character consistency.
                 → when you need to direct, not just describe.

Note: OpenAI announced Sora's app/API are being retired in 2026.
Don't build a workflow that depends on it.`}</pre>
          </div>
          <div className="info-box">
            <strong>2026 leap:</strong> Most top models now generate <strong>audio with the video</strong>
            - dialogue, ambient sound, effects - in a single pass. A year ago that was zero.
          </div>
        </section>

        <section className="section-card">
          <h2>Prompting for Motion</h2>
          <p>
            Video prompts add a dimension images don&apos;t have: <strong>movement and camera</strong>.
            Describe the subject, then the action, then the camera behavior.
          </p>
          <div className="code-block">
            <pre>{`[SCENE] + [SUBJECT ACTION] + [CAMERA MOVE] + [STYLE/MOOD]

"A lighthouse on a cliff at dusk. Waves crash below in slow motion.
 The camera slowly pushes in from a wide aerial.
 Cinematic, moody, volumetric light."

Camera vocabulary that works:
  push in / pull out / pan left / tilt up / orbit / tracking shot
  static locked-off / handheld / dolly / crane / aerial drone`}</pre>
          </div>
          <div className="info-box">
            <strong>Keep actions simple.</strong> One clear motion per clip beats three competing ones.
            Complex choreography is where video models still break down.
          </div>
        </section>

        <section className="section-card">
          <h2>The Hard Limits (Design Around These)</h2>
          <div className="code-block">
            <pre>{`CLIP LENGTH    Most generate ~5-10 seconds at a time.
               Long video = many clips stitched in an editor.

CONSISTENCY    Characters/locations drift between clips.
               Use reference images + the same seed to anchor.

PHYSICS        Hands, fast motion, object permanence, and
               "things passing behind things" still glitch.

TEXT           On-screen words are unreliable - add them in
               your editor afterward, not in the prompt.

COST           Per-second pricing. A 30s piece is 3-6 clips,
               each regenerated several times = real money.`}</pre>
          </div>
          <div className="info-box">
            <strong>Plan for stitching.</strong> Real AI videos are assembled from many short
            generations in a normal editor (CapCut, Premiere, DaVinci). Generation is one step in a
            pipeline, not the whole thing.
          </div>
        </section>

        <section className="section-card">
          <h2>A Realistic Short-Video Pipeline</h2>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Script &amp; shot list</strong>
              <p>Break the idea into 4-6 distinct shots, each ≤ 8 seconds.</p>
            </div>
            <div className="step">
              <strong>2 - Generate a still for each shot</strong>
              <p>Lock the look in an image tool. Keep a character/style reference for consistency.</p>
            </div>
            <div className="step">
              <strong>3 - Animate each still (image-to-video)</strong>
              <p>One clear motion + camera move per clip. Regenerate until acceptable.</p>
            </div>
            <div className="step">
              <strong>4 - Assemble in an editor</strong>
              <p>Cut clips together, add titles/text, music and voiceover (next lesson), color grade.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Animate a Still</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> Take one image you generated in Lesson 49-50 and feed
            it to an image-to-video tool (Runway, Kling, or a Veo-powered app - free tiers exist).
            Prompt a single simple motion: <em>&quot;slow camera push-in, gentle wind in the
            grass.&quot;</em> Generate, then try a second motion on the same still. Notice how much
            control the starting image gave you versus pure text-to-video - and where the model still
            glitches. That gap is exactly what your editor and shot-planning exist to cover.
          </div>
        </section>

        <QuickRef title="Lesson 51 Quick Reference" items={[
          { term: 'Image-to-video', definition: 'Generate a perfect still, then animate it - the controllable pro default' },
          { term: 'Veo 3.1', definition: 'Top all-rounder in 2026: native audio, 4K, strong prompt adherence' },
          { term: 'Kling 3.0', definition: 'Cinematic motion and multi-shot storyboards with synced audio' },
          { term: 'Runway Gen-4.5', definition: 'Best granular control - camera moves, motion brush, character consistency' },
          { term: 'Camera vocabulary', definition: 'push in, pan, tilt, orbit, tracking, dolly, aerial - describe the move explicitly' },
          { term: 'Clip length limit', definition: '~5-10 sec per generation; long video = stitched clips in an editor' },
          { term: 'Per-second cost', definition: 'Video is priced per second of output - storyboard cheaply before generating' },
          { term: 'Sora retirement', definition: "OpenAI's Sora app/API are being phased out in 2026 - don't depend on it" },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson50', label: 'Advanced Image Workflows' }}
          next={{ href: '/level6/lesson52', label: 'AI Voice & Audio' }}
          currentLessonId="l6-51"
        />
      </main>
    </div>
  )
}
