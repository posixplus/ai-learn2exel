'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson52() {
  return (
    <div className="lesson-layout">
      <Sidebar level={6} currentLessonId="l6-52" />
      <main className="lesson-main">
        <LessonHeader
          level={6}
          lessonNumber={52}
          duration={40}
          title="AI Voice & Audio"
          subtitle="Text-to-speech, voice cloning, music generation, and dubbing - with the consent and licensing rules that come with them"
        />

        <section className="section-card">
          <h2>Four Things AI Audio Can Do</h2>
          <p>
            Audio generation splits into four jobs, each with different leading tools and different
            ethical weight:
          </p>
          <div className="info-box">
            <strong>The audio toolkit:</strong>
            <ul>
              <li><strong>Text-to-speech (TTS)</strong> - turn a script into natural narration.</li>
              <li><strong>Voice cloning</strong> - recreate a specific voice from a sample.</li>
              <li><strong>Music generation</strong> - full songs or instrumental beds from a prompt.</li>
              <li><strong>Dubbing &amp; transcription</strong> - translate/lip-sync, or turn speech into text.</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Text-to-Speech: Narration Without a Mic</h2>
          <p>
            Modern TTS captures breath, emphasis, and emotion well enough for explainer videos,
            audiobooks, IVR systems, and accessibility. <strong>ElevenLabs</strong> is the 2026
            quality leader; Google and OpenAI also ship strong voices.
          </p>
          <div className="code-block">
            <pre>{`What you control in good TTS:
  • Voice selection (gender, age, accent, tone)
  • Pacing and pauses (often via punctuation or tags)
  • Emphasis and emotion ("excited", "calm", "serious")
  • Multi-speaker dialogue (assign different voices)

Good for: explainers, e-learning, audiobooks, prototypes,
          accessibility narration, podcast drafts.`}</pre>
          </div>
          <div className="info-box">
            <strong>Quality tip:</strong> Write for the ear. Short sentences, natural contractions,
            and deliberate punctuation produce far better speech than dense written prose.
          </div>
        </section>

        <section className="section-card">
          <h2>Voice Cloning: Powerful and Sensitive</h2>
          <p>
            Cloning recreates a specific person&apos;s voice from a short sample. Legitimate uses are
            real - narrators scaling their own voice, dubbing an actor across languages, accessibility
            for people losing their speech. So is the potential for abuse.
          </p>
          <div className="info-box">
            <strong>The consent rule - non-negotiable:</strong> Only clone a voice you own or have
            explicit, documented permission to use. Cloning someone&apos;s voice without consent is
            unethical and, in a growing number of places, illegal. Reputable tools require voice
            verification for exactly this reason.
          </div>
        </section>

        <section className="section-card">
          <h2>Music Generation</h2>
          <p>
            AI can now produce full songs with vocals, or instrumental beds for video. The tool choice
            is a direct quality-vs-licensing trade-off - exactly the tension from Lesson 48.
          </p>
          <div className="code-block">
            <pre>{`Suno v5           Best overall song quality, vocals, genre range.
                  ⚠ Commercial license terms unsettled
                    (training-data lawsuits in flight, 2026).

ElevenLabs Music  Trained on LICENSED data → clean commercial terms.
                  Quality very strong, sometimes a step behind Suno.

Udio              Strong quality; similar licensing caution as Suno.

Google Lyria      Instrumental + real-time streaming options.`}</pre>
          </div>
          <div className="info-box">
            <strong>For anything you&apos;ll publish or monetize:</strong> favor a tool with clear,
            licensed commercial terms (ElevenLabs Music, Stable Audio) over the highest-quality tool
            with murky rights. A great track you can&apos;t legally use is worthless.
          </div>
        </section>

        <section className="section-card">
          <h2>Dubbing &amp; Transcription</h2>
          <div className="steps-list">
            <div className="step">
              <strong>Dubbing</strong>
              <p>Translate a video into another language in the original speaker&apos;s voice, with
                lip-sync. ElevenLabs and others make a single video instantly multilingual.</p>
            </div>
            <div className="step">
              <strong>Transcription</strong>
              <p>Speech-to-text (Whisper-class models) for captions, subtitles, searchable archives,
                and meeting notes. Often free or near-free and highly accurate.</p>
            </div>
          </div>
          <div className="info-box">
            <strong>Accessibility win:</strong> Auto-captions and transcripts aren&apos;t just nice -
            they widen your audience and are increasingly expected (and sometimes required).
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Narrate and Score a Clip</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> Write a 4-sentence script and generate it as voiceover
            in a TTS tool (ElevenLabs has a free tier). Try two different voices and notice how tone
            changes the message. Then generate a short instrumental bed in a music tool with clear
            commercial terms. You now have a voice track and a music track - the audio layer you&apos;ll
            pair with video in the capstone. Keep both files.
          </div>
        </section>

        <QuickRef title="Lesson 52 Quick Reference" items={[
          { term: 'Text-to-speech (TTS)', definition: 'Script → natural narration; ElevenLabs is the 2026 quality leader' },
          { term: 'Write for the ear', definition: 'Short sentences, contractions, deliberate punctuation produce better speech' },
          { term: 'Voice cloning', definition: 'Recreate a specific voice from a sample - only with documented consent' },
          { term: 'Suno v5', definition: 'Best song quality with vocals, but commercial license terms are unsettled in 2026' },
          { term: 'ElevenLabs Music', definition: 'Licensed training data → clean commercial terms; the safe choice for published work' },
          { term: 'Dubbing', definition: 'Translate video into another language in the original voice with lip-sync' },
          { term: 'Transcription', definition: 'Speech-to-text for captions, subtitles, and accessibility - often free and accurate' },
        ]} />

        <LessonNav
          level={6}
          prev={{ href: '/level6/lesson51', label: 'AI Video Generation' }}
          next={{ href: '/level6/lesson53', label: 'Multimodal & Design Tools' }}
          currentLessonId="l6-52"
        />
      </main>
    </div>
  )
}
