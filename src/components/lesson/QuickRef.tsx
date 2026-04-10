import React from 'react'

interface QuickRefItem {
  heading: string
  points: string[]
}

interface QuickRefSection {
  title: string
  content: string
}

interface QuickRefProps {
  title?: string
  items?: QuickRefItem[]
  sections?: QuickRefSection[]
}

export default function QuickRef({ title = 'Quick Reference', items, sections }: QuickRefProps) {
  return (
    <div className="quick-ref">
      {title && <div className="quick-ref-header">{title}</div>}

      <div className="quick-ref-grid">
        {/* items format: {heading, points[]} */}
        {items?.map((item, idx) => (
          <div key={idx} className="quick-ref-item">
            <strong>{item.heading}</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              {item.points.map((point, pidx) => (
                <li key={pidx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* sections format: {title, content} */}
        {sections?.map((section, idx) => (
          <div key={idx} className="quick-ref-item">
            <strong>{section.title}</strong>
            <p style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.9rem' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
