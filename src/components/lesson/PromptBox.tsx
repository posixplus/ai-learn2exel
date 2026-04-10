'use client'

import { useState } from 'react'

interface PromptBoxProps {
  label?: string
  text?: string
  children?: string
}

export default function PromptBox({ label = 'PROMPT', text, children }: PromptBoxProps) {
  const content = text ?? children ?? ''
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="prompt-box">
      <div className="prompt-box-header">
        <span className="prompt-box-label">{label}</span>
        <button
          onClick={handleCopy}
          className={`copy-btn ${copied ? 'copied' : ''}`}
          title="Copy to clipboard"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <div className="prompt-box-content">
        {content}
      </div>
    </div>
  )
}
