'use client'

import { useState } from 'react'
import React from 'react'

interface SpotlightTab {
  label?: string
  profession?: string
  title?: string
  content: React.ReactNode
}

interface ProfessionSpotlightProps {
  tabs: SpotlightTab[]
}

export default function ProfessionSpotlight({ tabs }: ProfessionSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="profession-spotlight">
      <div className="spotlight-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`spotlight-tab ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.profession ?? tab.label ?? tab.title ?? ''}
          </button>
        ))}
      </div>

      <div className="spotlight-panel-container">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`spotlight-panel ${idx === activeIndex ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
