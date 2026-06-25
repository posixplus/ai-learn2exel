'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson54() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-54" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={54}
          duration={35}
          title="Ethics, Rights & Authenticity"
          subtitle="Copyright, commercial licensing, deepfakes, disclosure laws, and content provenance - the rules every creator needs in 2026"
        />

        <section className="section-card">
          <h2>The Part Everyone Skips - and Regrets</h2>
          <p>
            Generative media&apos;s legal and ethical layer is messier than the technology. Who owns an
            AI image? Can you sell it? Do you have to disclose it? Getting this wrong can mean takedowns,
            lost rights, fines, or real harm to real people. This lesson is the one to actually remember.
          </p>
          <div className="info-box">
            <strong>This is not legal advice.</strong> Laws vary by country and change quickly. This
            lesson gives you the landscape and the right questions - for anything high-stakes,
            confirm with the tool&apos;s current terms and, where it matters, a lawyer.
          </div>
        </section>

        <section className="section-card">
          <h2>Who Owns AI-Generated Content?</h2>
          <p>
            Two separate questions hide here, and people constantly conflate them:
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>1 - Can you use it commercially?</strong>
              <p>Governed by the <em>tool&apos;s terms of service</em> and your plan. Many tools grant
                commercial rights on paid tiers; some restrict free-tier output to non-commercial use.
                Read the terms.</p>
            </div>
            <div className="step">
              <strong>2 - Can you copyright it / stop others copying it?</strong>
              <p>Different and trickier. In several jurisdictions (notably the US), purely
                AI-generated work with no meaningful human authorship <em>cannot</em> be copyrighted -
                meaning you may not be able to stop others from reusing it.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Bottom line:</strong> &quot;I&apos;m allowed to sell this&quot; and &quot;I own
            exclusive rights to this&quot; are not the same thing. You can often do the first without
            the second.
          </div>
        </section>

        <section className="section-card">
          <h2>The Training-Data Problem</h2>
          <p>
            Many models were trained on images, music, and text scraped from the open web - some of it
            copyrighted. This is the subject of active lawsuits in 2026 (notably against music
            generators). It creates two practical risks for you:
          </p>
          <div className="code-block">
            <pre>{`RISK 1 - Output that imitates a protected work or living
         artist's signature style can draw infringement claims.
         Avoid "in the style of [living artist]" for commercial work.

RISK 2 - A tool's commercial terms can change if it loses a suit.
         Output you relied on may become legally shaky.

MITIGATION - For commercial work, prefer tools trained on
             LICENSED data (Adobe Firefly for images,
             ElevenLabs Music for music). They indemnify or
             clearly license their output.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Deepfakes &amp; Likeness</h2>
          <p>
            The ability to generate a real person&apos;s face or voice is the most dangerous capability
            in this level. The rules are simple to state and absolute to follow.
          </p>
          <div className="info-box">
            <strong>Hard lines:</strong>
            <ul>
              <li><strong>Never</strong> generate a real person&apos;s likeness or voice without consent.</li>
              <li><strong>Never</strong> create content that impersonates, defames, or could deceive
                people about what someone said or did.</li>
              <li><strong>Never</strong> generate sexual content of real people, or any sexual content
                involving minors - this is illegal and causes serious harm.</li>
              <li>Satire and clearly-labeled parody have narrow protections that vary by jurisdiction -
                when unsure, don&apos;t.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Disclosure Laws Are Now Real (2026)</h2>
          <p>
            Disclosure moved from &quot;nice to do&quot; to &quot;legally required&quot; in major
            markets during 2026. Two you should know:
          </p>
          <div className="code-block">
            <pre>{`EU AI Act - Article 50
  Providers and deployers must mark or disclose certain
  AI-generated / manipulated content. Transparency
  obligations apply from August 2, 2026.

California - SB 942 (AI Transparency Act)
  Effective January 1, 2026. Pushes provenance disclosure
  and detection tooling for AI-generated content.`}</pre>
          </div>
          <div className="info-box">
            <strong>Safe default:</strong> Disclose AI-generated or heavily AI-edited media,
            especially anything depicting people or presented as real. It builds trust and keeps you
            ahead of fast-moving regulation.
          </div>
        </section>

        <section className="section-card">
          <h2>Provenance: C2PA &amp; Content Credentials</h2>
          <p>
            The industry&apos;s answer to &quot;is this real?&quot; is a two-layer technical standard.
            You don&apos;t need to implement it, but you must understand it.
          </p>
          <div className="code-block">
            <pre>{`C2PA / Content Credentials
  A cryptographically signed "manifest" attached to a file:
  what created it, what edits were applied, whether AI was used.
  Backed by Adobe, Microsoft, OpenAI, Google, camera makers.

SynthID (and similar)
  Invisible watermark embedded in the pixels/audio itself -
  survives some edits that strip metadata.

THE CATCH
  Instagram, X, and WhatsApp strip C2PA metadata on upload.
  No single method is tamper-proof - provenance is a layered
  best-effort, not a guarantee.`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Audit Your Own Pipeline</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> Take the assets you&apos;ve generated this level and
            answer, for each: (1) Does the tool&apos;s plan grant me commercial use? (2) Did I avoid a
            living artist&apos;s named style and any real person&apos;s likeness? (3) Would I be
            comfortable disclosing this is AI-made? (4) Is there a Content Credential attached? Write a
            one-line &quot;rights note&quot; for each asset. Make this audit a habit - it&apos;s the
            difference between a hobbyist and a professional who won&apos;t get burned.
          </div>
        </section>

        <QuickRef title="Lesson 54 Quick Reference" items={[
          { term: 'Use vs own', definition: 'Commercial-use permission (tool terms) is separate from copyright ownership (often unavailable for pure AI output)' },
          { term: 'Human authorship', definition: 'In several jurisdictions, work with no meaningful human authorship can\'t be copyrighted' },
          { term: 'Licensed-data tools', definition: 'Firefly (image), ElevenLabs Music - safest for commercial work; clear/indemnified rights' },
          { term: 'Avoid living-artist style', definition: 'Don\'t prompt "in the style of [living artist]" for commercial output' },
          { term: 'Likeness consent', definition: 'Never generate a real person\'s face/voice without consent; never sexual/deceptive content' },
          { term: 'EU AI Act Art. 50', definition: 'AI-content disclosure obligations apply from Aug 2, 2026' },
          { term: 'C2PA / Content Credentials', definition: 'Signed provenance manifest; paired with SynthID watermarking - but social platforms often strip it' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson53', label: 'Multimodal & Design Tools' }}
          next={{ href: '/level6/lesson55', label: 'Building a Creative Pipeline' }}
          currentLessonId="l6-54"
        />
      </main>
    </div>
  )
}
