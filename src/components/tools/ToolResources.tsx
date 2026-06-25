interface ResourceLink {
  label: string
  href: string
  note?: string
}

/**
 * A consistent "Official Resources" link block for the tool setup-guide pages.
 * All links open the official site in a new tab.
 */
export default function ToolResources({ links }: { links: ResourceLink[] }) {
  return (
    <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
      <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🔗 Official Resources</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '.75rem' }}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', gap: '.15rem', padding: '.75rem 1rem', background: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: 8, textDecoration: 'none' }}
          >
            <span style={{ fontWeight: 700, fontSize: '.9rem', color: '#1D4ED8' }}>{l.label} ↗</span>
            {l.note && <span style={{ fontSize: '.78rem', color: '#6B7280', lineHeight: 1.4 }}>{l.note}</span>}
          </a>
        ))}
      </div>
      <p style={{ margin: '1rem 0 0', fontSize: '.78rem', color: '#9CA3AF' }}>
        Links open the official sites. Pricing and features change often - always confirm there. (Verified June 2026.)
      </p>
    </div>
  )
}
