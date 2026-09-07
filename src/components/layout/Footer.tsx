'use client'
import Link from 'next/link'
import { MODELS_AS_OF } from '@/data/models'

export default function Footer() {
  return (
    <footer className="footer-inner">
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          🤖 AI for Everyone
        </div>
        <div className="footer-links">
          <Link href="/">Start Learning</Link>
          <Link href="/tools/quiz">AI Quiz</Link>
          <Link href="/tools/prompt-library">Prompt Library</Link>
          <Link href="/tools/glossary">Glossary</Link>
        </div>
      </div>

      <p className="footer-note">
        This course is free to share. AI capabilities change rapidly - always verify important information.
        <br />Models, pricing and tool details last refreshed {MODELS_AS_OF}.
      </p>
    </footer>
  )
}
