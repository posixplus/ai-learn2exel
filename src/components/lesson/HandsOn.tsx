'use client'
import React from 'react'

interface HandsOnProps {
  title: string
  description?: string
  duration?: string
  stepNumber?: number
  steps: string[]
  children?: React.ReactNode
}

export default function HandsOn({ title, description, duration, stepNumber, steps, children }: HandsOnProps) {
  return (
    <div className="hands-on">
      <div className="hands-on-header">
        <span style={{ marginRight: '0.5rem' }}>🖥️</span>
        <strong>HANDS-ON EXERCISE{stepNumber ? ` ${stepNumber}` : ''}</strong>
        {duration && <span style={{ marginLeft: 'auto', fontSize: '0.85rem', opacity: 0.8 }}>⏱ {duration}</span>}
      </div>

      <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{title}</h3>

      {description && <p style={{ marginBottom: '1rem' }}>{description}</p>}

      <ol className="hands-on-steps">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      {children}
    </div>
  )
}
