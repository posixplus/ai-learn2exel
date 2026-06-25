'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson50() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-50" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={50}
          duration={45}
          title="Advanced Image Workflows"
          subtitle="Editing, inpainting, reference images, upscaling, and producing brand-consistent assets at scale"
        />

        <section className="section-card">
          <h2>Beyond Generation: Editing What Exists</h2>
          <p>
            Generating a fresh image is the easy 20%. The professional 80% is <strong>editing</strong>:
            fixing the one wrong hand, swapping a background, keeping a character consistent across
            twelve images, and matching a brand. This lesson is the toolkit for that work.
          </p>
          <div className="info-box">
            <strong>Key idea:</strong> Modern image tools are increasingly <em>editors</em>, not just
            generators. The difference between an amateur and a pro is almost entirely in the edit pass.
          </div>
        </section>

        <section className="section-card">
          <h2>Inpainting &amp; Outpainting</h2>
          <p>
            <strong>Inpainting</strong> regenerates a masked region while leaving the rest untouched -
            the surgical tool of image editing. <strong>Outpainting</strong> extends the canvas beyond
            its original borders, inventing what lies outside the frame.
          </p>
          <div className="code-block">
            <pre>{`INPAINTING - fix or change part of an image
  1. Mask the region (the awkward hand, the logo, the sky)
  2. Prompt ONLY for that region: "a clean blue sky"
  3. Generate → only the masked area changes

OUTPAINTING - expand the frame
  Original is 1:1 → extend left/right to make it 16:9
  The model invents plausible surroundings
  Great for reformatting one asset to many aspect ratios`}</pre>
          </div>
          <div className="info-box">
            <strong>Where to do it:</strong> Photoshop&apos;s Generative Fill, Firefly, and most
            web image tools expose inpaint/outpaint. It&apos;s the fastest fix for &quot;90% perfect&quot; images.
          </div>
        </section>

        <section className="section-card">
          <h2>Reference Images: Steering With Pictures, Not Words</h2>
          <p>
            Words have limits. Reference images let you transfer a <strong>style</strong>, a
            <strong> composition</strong>, or a <strong>character&apos;s face</strong> directly. This
            is how you get consistency that prompting alone can&apos;t deliver.
          </p>
          <div className="code-block">
            <pre>{`Style reference   → "make new images that LOOK like this one"
                    (Midjourney --sref, Firefly style ref)

Character/face    → keep the same person across many images
                    (character reference / "consistent character")

Structure/pose    → match the composition or pose of a reference
                    (ControlNet edges/pose in local tools)

Composition       → use a rough sketch as the layout skeleton`}</pre>
          </div>
          <div className="info-box">
            <strong>Consistency unlock:</strong> A recurring character or product shot is impossible
            with text alone. Reference images (or a trained style) are the only reliable path.
          </div>
        </section>

        <section className="section-card">
          <h2>Upscaling &amp; Cleanup</h2>
          <p>
            Generated images are often 1024px - fine for web, too small for print or large displays.
            Upscalers increase resolution while <em>adding</em> plausible detail (not just stretching pixels).
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Upscale for resolution</strong>
              <p>Take 1k → 4k for print, banners, or zoomed detail. Built into most tools; dedicated
                upscalers (Topaz, Magnific-style) go further.</p>
            </div>
            <div className="step">
              <strong>Remove background</strong>
              <p>One-click cutouts for product shots, logos, and compositing onto new backgrounds.</p>
            </div>
            <div className="step">
              <strong>Fix faces &amp; hands</strong>
              <p>Use face-restore / inpaint passes on the classic diffusion failure points before
                you ship.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Brand-Consistent Assets at Scale</h2>
          <p>
            The real business value is producing <strong>many</strong> on-brand assets, not one pretty
            picture. Consistency comes from constraints you reuse every time.
          </p>
          <div className="code-block">
            <pre>{`A repeatable brand recipe:

1. Lock a STYLE reference image (your brand's look)
2. Keep a fixed palette + descriptor block:
   "flat illustration, [#hex] and [#hex] palette,
    rounded shapes, soft shadows, friendly"
3. Reuse the same seed family for visual cohesion
4. Generate each asset, then inpaint to fix details
5. Run the same upscale + crop preset on all outputs

→ 30 social tiles that clearly belong together`}</pre>
          </div>
          <div className="info-box">
            <strong>Commercial reminder:</strong> For brand work you intend to publish, prefer a
            commercially-safe generator (Firefly) or assets you have rights to. Lesson 54 covers the
            licensing rules in full.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Rescue and Reformat One Image</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> Generate a hero image with one obvious flaw (a messy
            background or a bad object). Then: (1) inpaint to fix the flaw, (2) remove or replace the
            background, (3) outpaint it from 1:1 to 16:9, and (4) upscale the result. You&apos;ve now
            taken a single &quot;almost&quot; image and produced a clean, reformatted, print-ready
            asset - the everyday workflow of anyone using AI images professionally.
          </div>
        </section>

        <QuickRef title="Lesson 50 Quick Reference" items={[
          { term: 'Inpainting', definition: 'Mask a region and regenerate only that part - the surgical fix for almost-perfect images' },
          { term: 'Outpainting', definition: 'Extend the canvas beyond its borders; reformat 1:1 → 16:9 or 9:16' },
          { term: 'Style reference', definition: 'Feed an image so new outputs match its look - consistency words can\'t achieve' },
          { term: 'Character reference', definition: 'Keep the same face/character across many images' },
          { term: 'Upscaling', definition: 'Increase resolution while adding detail; needed for print and large displays' },
          { term: 'Background removal', definition: 'One-click cutout for product shots, logos, and compositing' },
          { term: 'Brand recipe', definition: 'Locked style ref + fixed palette/descriptors + seed family + consistent post-processing' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson49', label: 'AI Image Generation Fundamentals' }}
          next={{ href: '/level6/lesson51', label: 'AI Video Generation' }}
          currentLessonId="l6-50"
        />
      </main>
    </div>
  )
}
