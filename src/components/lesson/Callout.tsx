'use client'
import React from 'react'

interface CalloutProps {
  type: 'info' | 'tip' | 'warning' | 'danger'
  title?: string
  children: React.ReactNode
}

const icons = {
  info: 'ℹ️',
  tip: '💡',
  warning: '⚠️',
  danger: '🚨',
}

export default function Callout({ type, title, children }: CalloutProps) {
  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-icon">{icons[type]}</div>
      <div className="callout-body">
        {title && <strong>{title}</strong>}
        {title && <br />}
        {children}
      </div>
    </div>
  )
}
