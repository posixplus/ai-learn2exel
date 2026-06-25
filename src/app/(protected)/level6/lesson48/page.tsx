'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson48() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-48" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={48}
          duration={40}
          title="The Generative Media Landscape"
          subtitle="Map the image, video, audio and 3D tools - and understand why diffusion models behave nothing like the chatbots you already know"
        />

        <section className="section-card">
          <h2>Generative Media Is a Different Kind of AI</h2>
          <p>
            Levels 0-5 were about <strong>language</strong> models: you type, they write back.
            This level is about <strong>media</strong> models that produce pictures, video, voice
            and music. The skills transfer less than you&apos;d expect - prompting an image model
            is closer to briefing a photographer than instructing an assistant.
          </p>
          <div className="info-box">
            <strong>The mental shift:</strong> A chatbot follows instructions. An image or video
            model interprets a <em>description</em>. You are not commanding it step by step - you
            are describing a target and steering through iteration, seeds, and reference inputs.
          </div>
        </section>

        <section className="section-card">
          <h2>Why Diffusion ≠ LLMs</h2>
          <p>
            Most image, video and music generators are <strong>diffusion models</strong>. They start
            from pure random noise and remove it step by step until an image (or frame, or audio
            spectrogram) emerges, guided by your text prompt. LLMs instead predict the next token,
            one at a time, left to right.
          </p>
          <p>That architectural difference explains almost every quirk you&apos;ll hit:</p>
          <div className="info-box">
            <strong>Practical consequences of diffusion:</strong>
            <ul>
              <li><strong>Prompts are descriptions, not commands.</strong> &quot;Don&apos;t add a hat&quot; often
                adds a hat - negation is weak. Use negative-prompt fields instead.</li>
              <li><strong>Same prompt ≠ same image.</strong> A random <em>seed</em> drives each result.
                Lock the seed to reproduce or iterate on a specific image.</li>
              <li><strong>Text and counting are hard.</strong> Diffusion struggles with legible words and
                exact quantities (&quot;exactly five apples&quot;) - though 2026 models are far better.</li>
              <li><strong>Iteration beats one perfect prompt.</strong> Generate four, pick the closest,
                refine with variations or reference images.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>The 2026 Modality Map</h2>
          <p>
            Four families of generative media, each with its own leading tools. Names change fast -
            treat this as a snapshot of mid-2026, and always re-check before you commit a budget.
          </p>
          <div className="code-block">
            <pre>{`IMAGE
  GPT Image 2 (OpenAI)   - best all-rounder, strong text + editing
  Midjourney V7          - artistic/stylized quality leader
  FLUX (Black Forest Labs)- photorealism leader
  Adobe Firefly          - commercially safe (licensed training data)
  Ideogram 3             - best for text/typography inside images

VIDEO
  Google Veo 3.1         - top all-rounder, native audio, 4K
  Kling 3.0              - cinematic motion, multi-shot storyboards
  Runway Gen-4.5         - granular creative control (camera, motion brush)
  (Note: OpenAI's Sora app is being retired in 2026 - don't build on it)

AUDIO - SPEECH
  ElevenLabs             - voice cloning + text-to-speech quality leader

AUDIO - MUSIC
  Suno v5                - best full songs w/ vocals (licensing unsettled)
  ElevenLabs Music       - licensed training data, clean commercial terms

3D / DESIGN
  Image-to-3D mesh tools, Canva AI, Adobe Firefly in-app`}</pre>
          </div>
          <div className="info-box">
            <strong>Why two columns for music and image?</strong> In generative media, the
            highest-<em>quality</em> tool and the most <em>commercially safe</em> tool are often
            different products. You&apos;ll choose deliberately in Lessons 52 and 54.
          </div>
        </section>

        <section className="section-card">
          <h2>How You Actually Access These Tools</h2>
          <p>There are four delivery models, and the right one depends on volume and control:</p>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Web apps (start here)</strong>
              <p>Midjourney, Runway, Suno, ElevenLabs all have browser UIs. Best for learning,
                one-offs, and visual iteration. Usually subscription + credits.</p>
            </div>
            <div className="step">
              <strong>2 - In-app (zero setup)</strong>
              <p>Canva, Adobe Express/Photoshop and Google Slides embed generation directly. Best
                for non-technical users who already live in those tools.</p>
            </div>
            <div className="step">
              <strong>3 - APIs (for automation &amp; scale)</strong>
              <p>Call the model from code to generate hundreds of assets. Priced per image or
                per second of video. This is Level 4 territory applied to media.</p>
            </div>
            <div className="step">
              <strong>4 - Local / open-source (private &amp; free)</strong>
              <p>Run FLUX or Stable Diffusion locally via ComfyUI on your own GPU. No per-image
                cost, full privacy, steep setup. See the Local AI tools page.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Understanding the Cost Model</h2>
          <p>
            Media generation is priced very differently from chat. Knowing the unit cost prevents
            nasty surprises.
          </p>
          <div className="code-block">
            <pre>{`Images   ~ per image, or a monthly credit pool
           (a "fast hour" / credit ≈ a batch of 4)

Video    ~ per SECOND of output - the expensive one
           Veo 3.1  ~ $0.15/sec (fast mode)
           Kling 3.0 ~ $0.10/sec
           => a 10-second clip can cost $1-$8 depending on model/quality

Voice    ~ per 1,000 characters of text (TTS)
Music    ~ per song / per generation, or a monthly quota`}</pre>
          </div>
          <div className="info-box">
            <strong>Rule of thumb:</strong> Storyboard and lock your shot in cheap image tools
            <em>first</em>, then spend on video. Generating video blindly is the fastest way to
            burn a budget.
          </div>
        </section>

        <section className="section-card">
          <h2>Choosing a Tool: Four Trade-offs</h2>
          <p>Every selection in this level comes down to weighing four things:</p>
          <div className="info-box">
            <strong>The decision frame:</strong>
            <ul>
              <li><strong>Quality</strong> - does the output look the way you need?</li>
              <li><strong>Control</strong> - can you nail a specific result, repeatedly?</li>
              <li><strong>Commercial safety</strong> - are you legally clear to sell/publish it? (Lesson 54)</li>
              <li><strong>Cost</strong> - per asset and at the volume you need.</li>
            </ul>
            No tool wins all four. Pick the two that matter most for the job in front of you.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Same Prompt, Two Models</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Pick one prompt - e.g.
            <em>&quot;a cozy bookshop on a rainy evening, warm light spilling onto the wet
            pavement, cinematic&quot;</em> - and generate it in two different image tools (try a
            free Firefly or Ideogram tier plus one other). Compare: which looks more realistic?
            More stylized? Which handled the lighting better? Note how the <em>same words</em>
            produce different aesthetics. This difference is the whole reason tool choice matters.
          </div>
        </section>

        <QuickRef title="Lesson 48 Quick Reference" items={[
          { term: 'Diffusion model', definition: 'Generates media by removing noise step-by-step, guided by a text prompt - the basis of most image/video/music tools' },
          { term: 'Seed', definition: 'The random starting value; lock it to reproduce or iterate on a specific result' },
          { term: 'Negative prompt', definition: 'A separate field listing what to exclude - more reliable than saying "don\'t" in the main prompt' },
          { term: 'Delivery models', definition: 'Web app, in-app (Canva/Adobe), API, or local/open-source' },
          { term: 'Video pricing', definition: 'Charged per second of output - by far the costliest modality' },
          { term: 'Quality vs Control vs Safety vs Cost', definition: 'The four trade-offs behind every tool choice; no tool wins all four' },
          { term: 'Storyboard first', definition: 'Lock your shot in cheap image tools before spending on video generation' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level5/capstone', label: 'Level 5 Capstone' }}
          next={{ href: '/level6/lesson49', label: 'AI Image Generation Fundamentals' }}
          currentLessonId="l6-48"
        />
      </main>
    </div>
  )
}
