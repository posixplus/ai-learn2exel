'use client'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'

const ACCENT = '#B45309'      // amber-700
const LIGHT = '#FFFBEB'       // amber-50
const BORDER = '#FDE68A'      // amber-200
const DEEP = '#78350F'        // amber-900

/* ------------------------------------------------------------------ */
/*  Cert Picker widget                                                 */
/* ------------------------------------------------------------------ */

type Track = 'business' | 'developer' | 'dataml' | 'cloud'
type Budget = 'free' | 'employer' | 'self'
type Cloud = 'any' | 'aws' | 'azure' | 'gcp'

const TRACKS: { id: Track; label: string }[] = [
  { id: 'business',  label: 'Non-technical / business' },
  { id: 'developer', label: 'Developer / engineer' },
  { id: 'dataml',    label: 'Data / ML' },
  { id: 'cloud',     label: 'Cloud-focused' },
]
const BUDGETS: { id: Budget; label: string }[] = [
  { id: 'free',     label: 'Free only' },
  { id: 'employer', label: 'Employer will pay' },
  { id: 'self',     label: 'Self-pay is fine' },
]
const CLOUDS: { id: Cloud; label: string }[] = [
  { id: 'any',   label: 'No preference' },
  { id: 'aws',   label: 'AWS' },
  { id: 'azure', label: 'Microsoft Azure' },
  { id: 'gcp',   label: 'Google Cloud' },
]

type Step = { tag: string; title: string; detail: string }

function freeStart(track: Track): Step {
  switch (track) {
    case 'business':
      return { tag: 'Start free', title: 'Google AI Essentials (audit free) or Anthropic AI Fluency: Frameworks & Foundations (free)', detail: 'Both are short, non-technical, and issue a free completion certificate. Best first proof you can use AI at work.' }
    case 'developer':
      return { tag: 'Start free', title: 'Anthropic Academy: Claude Code 101 + AI Fluency (free)', detail: 'Free, hands-on, with completion certificates. Builds the agentic-coding habits the rest of this course teaches.' }
    case 'dataml':
      return { tag: 'Start free', title: 'DeepLearning.AI on Coursera: AI For Everyone + Machine Learning Specialization (audit free)', detail: 'Andrew Ng. Audit the videos for free; only pay if you want the graded certificate.' }
    case 'cloud':
      return { tag: 'Start free', title: 'Microsoft Learn AI path or Google Cloud Skills Boost intro (free)', detail: 'Vendor training is free. Do this before paying for any exam so you know the platform first.' }
  }
}

function coreCert(track: Track, cloud: Cloud): Step {
  if (track === 'business')
    return { tag: 'Core cert', title: 'Microsoft Azure AI Fundamentals (AI-900, about $99)', detail: 'The most recognized foundational AI cert for non-engineers. Vendor-light, manager-friendly, one exam.' }
  if (track === 'dataml')
    return cloud === 'aws'
      ? { tag: 'Core cert', title: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01, about $150)', detail: 'Proves you can build, train, and deploy ML on AWS. Pair it with one shipped project.' }
      : { tag: 'Core cert', title: 'Google Cloud Professional Machine Learning Engineer (about $200)', detail: 'The strongest standalone ML-engineering credential. Heavier exam; do the free DeepLearning.AI path first.' }
  // developer or cloud-focused -> follow the cloud preference
  if (cloud === 'azure')
    return { tag: 'Core cert', title: 'Microsoft Azure AI Fundamentals (AI-900, about $99)', detail: 'Foundational and current. Then step up to AI-103 (below) for Azure AI Foundry and agents.' }
  if (cloud === 'gcp')
    return { tag: 'Core cert', title: 'Google Cloud Professional Machine Learning Engineer (about $200)', detail: 'Google’s flagship ML cert. Start with the free Google AI Essentials path, then sit the exam.' }
  // aws or no preference -> AWS AI Practitioner is the cheapest credible developer entry
  return { tag: 'Core cert', title: 'AWS Certified AI Practitioner (AIF-C01, about $100)', detail: 'Cheapest credible AI cert from a major cloud. Great resume line for a developer moving into AI.' }
}

function stretchCert(track: Track, cloud: Cloud): Step {
  if (track === 'business')
    return { tag: 'Stretch', title: 'Google AI Professional Certificate (Coursera)', detail: 'Go deeper on applying AI at work once the fundamentals cert is done. Optional, not urgent.' }
  if (track === 'dataml')
    return { tag: 'Stretch', title: 'NVIDIA Certified Professional: Generative AI / LLMs (NCP, about $200)', detail: 'Take this only after you have real projects. It signals depth, not breadth.' }
  if (cloud === 'azure')
    return { tag: 'Stretch', title: 'Microsoft Azure AI App and Agent Developer Associate (AI-103, about $165)', detail: 'The successor to the retiring AI-102. Centers on Azure AI Foundry and multi-agent apps - very current.' }
  return { tag: 'Stretch', title: 'NVIDIA Certified Associate: Generative AI and LLMs (NCA-GENL, about $125)', detail: 'Short, modern, gen-AI focused. A strong second credential for developers.' }
}

function CertPicker() {
  const [track, setTrack] = useState<Track>('developer')
  const [budget, setBudget] = useState<Budget>('free')
  const [cloud, setCloud] = useState<Cloud>('any')
  const [copied, setCopied] = useState(false)

  const start = freeStart(track)
  const core = coreCert(track, cloud)
  const stretch = stretchCert(track, cloud)

  let budgetNote = ''
  if (budget === 'free')
    budgetNote = 'You picked free-only: do Step 1 now, and treat the paid certs as "later, only if someone else pays." Want a paid exam cheaper? Complete a Microsoft Virtual Training Day - it issues a discounted (often 50% off) or free exam voucher, depending on the event and region.'
  else if (budget === 'employer')
    budgetNote = 'Your employer will pay: ask your manager for an exam voucher or L&D budget before you book - most companies reimburse certs. Then take the Core cert now.'
  else
    budgetNote = 'Self-pay is fine: still do the free Step 1 first so the paid exam is mostly revision, not new learning. Then book the Core cert.'

  const path: Step[] = budget === 'free' ? [start] : [start, core, stretch]

  const plan = `# My AI certification path
Track: ${TRACKS.find(t => t.id === track)?.label}
Budget: ${BUDGETS.find(b => b.id === budget)?.label}
Cloud: ${CLOUDS.find(c => c.id === cloud)?.label}

1. ${start.tag}: ${start.title}
   ${start.detail}
${budget !== 'free' ? `2. ${core.tag}: ${core.title}
   ${core.detail}
3. ${stretch.tag}: ${stretch.title}
   ${stretch.detail}
` : ''}Note: ${budgetNote}

Prices and exam codes verified June 2026 - confirm on the vendor page before you enroll.`

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(plan)
      setCopied(true); setTimeout(() => setCopied(false), 1500)
    } catch { /* ignore */ }
  }

  const selStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', padding: '.55rem .75rem',
    border: `1.5px solid ${BORDER}`, borderRadius: 8, fontSize: '.88rem',
    fontFamily: 'inherit', background: 'white', color: '#1F2937', marginTop: '.3rem',
  }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '.82rem', fontWeight: 600, marginTop: '.9rem', color: DEEP }

  return (
    <div style={{ border: `2px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden', margin: '1rem 0 2.5rem' }}>
      <div style={{ background: LIGHT, padding: '1.1rem 1.5rem', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: ACCENT }}>🧭 Cert Picker</div>
        <p style={{ margin: '.25rem 0 0', fontSize: '.85rem', color: '#92400E' }}>
          Pick your track, budget, and cloud. It builds a free-first path - the free start, then the cert worth paying for, then a stretch credential.
        </p>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Your track</label>
            <select value={track} onChange={e => setTrack(e.target.value as Track)} style={selStyle}>
              {TRACKS.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Budget</label>
            <select value={budget} onChange={e => setBudget(e.target.value as Budget)} style={selStyle}>
              {BUDGETS.map(b => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Cloud preference</label>
            <select value={cloud} onChange={e => setCloud(e.target.value as Cloud)} style={selStyle}>
              {CLOUDS.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>
        </div>

        {/* Path */}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {path.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '.85rem', padding: '.85rem 1rem', background: 'white', border: `1px solid ${BORDER}`, borderRadius: 10 }}>
              <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: ACCENT, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem' }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: ACCENT }}>{s.tag}</div>
                <div style={{ fontWeight: 700, fontSize: '.92rem', margin: '.15rem 0' }}>{s.title}</div>
                <div style={{ fontSize: '.85rem', color: '#4B5563' }}>{s.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1rem', padding: '.7rem .9rem', background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: 10, fontSize: '.85rem', color: DEEP }}>
          <strong>Note:</strong> {budgetNote}
        </div>

        {/* Copyable plan */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.4rem' }}>
          <strong style={{ fontSize: '.85rem' }}>cert-plan.md</strong>
          <button onClick={copyPlan} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 8, padding: '.4rem .9rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
            {copied ? '✓ Copied' : 'Copy plan'}
          </button>
        </div>
        <pre style={{ marginTop: '.5rem', background: '#1E293B', color: '#E2E8F0', borderRadius: 10, padding: '1rem', fontSize: '.78rem', lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap' }}>{plan}</pre>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const FREE_CERTS = [
  { icon: '🟠', name: 'Anthropic Academy', url: 'https://anthropic.skilljar.com/', cost: 'Free + certificate', who: 'Everyone', desc: 'AI Fluency: Frameworks & Foundations (non-technical) and Claude Code 101 (developer). Free login on Skilljar, free completion certificates.' },
  { icon: '🔵', name: 'Google AI Essentials', url: 'https://grow.google/ai-essentials/', cost: 'Audit free; free for eligible US small businesses', who: 'Non-technical', desc: 'Under 5 hours, the most popular course on Coursera. Part of the broader Google AI Professional Certificate.' },
  { icon: '🟢', name: 'DeepLearning.AI (Coursera)', url: 'https://www.deeplearning.ai/courses/', cost: 'Audit free; pay only for the graded certificate', who: 'Data / ML, developers', desc: 'Andrew Ng. AI For Everyone, Generative AI for Everyone, and the Machine Learning Specialization are all free to audit.' },
  { icon: '🟦', name: 'Microsoft Learn (AI paths)', url: 'https://learn.microsoft.com/en-us/training/', cost: 'Free training', who: 'Cloud, developers', desc: 'Free, official AI-900 / AI-103 learning paths. Pair with a discounted exam voucher from a Virtual Training Day.' },
  { icon: '🔗', name: 'LinkedIn Learning (AI)', url: 'https://www.linkedin.com/learning/topics/artificial-intelligence', cost: 'Free with many library cards; certificate of completion', who: 'Everyone', desc: 'Often free through a public library card or an employer license. Completion certificates post straight to your LinkedIn.' },
  { icon: '🤗', name: 'Hugging Face Learn', url: 'https://huggingface.co/learn', cost: 'Free', who: 'Developers, ML', desc: 'Free NLP, LLM, and agents courses from the open-source AI hub.' },
]

const PAID_CERTS = [
  { name: 'AWS Certified AI Practitioner', url: 'https://aws.amazon.com/certification/certified-ai-practitioner/', code: 'AIF-C01', level: 'Foundational', cost: '~$100', who: 'Developers and business folks new to AI on AWS. Cheapest credible cloud AI cert.' },
  { name: 'AWS ML Engineer - Associate', url: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/', code: 'MLA-C01', level: 'Associate', cost: '~$150', who: 'Building, training, and deploying ML on AWS. Pair with a shipped project.' },
  { name: 'Azure AI Fundamentals', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/', code: 'AI-900', level: 'Foundational', cost: '~$99', who: 'The most manager-recognized foundational AI cert. Vendor-light, one exam.' },
  { name: 'Azure AI Apps & Agents Developer', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/', code: 'AI-103', level: 'Associate', cost: '~$165', who: 'Replaces AI-102 (retires June 30, 2026). Microsoft Foundry, generative AI, and agents - very current.' },
  { name: 'Google Cloud Professional ML Engineer', url: 'https://cloud.google.com/learn/certification/machine-learning-engineer', code: 'PMLE', level: 'Professional', cost: '~$200', who: 'The strongest standalone ML-engineering credential. Heavier exam.' },
  { name: 'NVIDIA Generative AI and LLMs', url: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/', code: 'NCA-GENL', level: 'Associate', cost: '~$125', who: 'Short, modern, gen-AI focused. Strong second credential for developers.' },
]

export default function CertificationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Professional Growth</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        {/* Hero */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🎓</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem', flexWrap: 'wrap' }}>
                <span style={{ background: LIGHT, color: ACCENT, border: `1px solid ${BORDER}`, borderRadius: 999, padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Free + Paid</span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Verified June 2026</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>AI Certifications</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>Which credentials are worth your time and money - and how to prep for them free</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            A certificate alone rarely gets you hired. A certificate plus a project you actually shipped does. This page is opinionated on purpose: it tells you which certs matter, which are resume padding, and how to prepare without paying for a course you do not need.
          </p>
        </div>

        {/* The decision rule */}
        <div style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: 12, padding: '1.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ marginTop: 0, color: DEEP, fontSize: '1.1rem' }}>📏 The one rule that saves you money</h3>
          <p style={{ margin: '0 0 .5rem', color: DEEP, lineHeight: 1.7 }}>
            <strong>Free-first.</strong> Pay for a cert only when one of two things is true:
          </p>
          <ol style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 1.9 }}>
            <li>An <strong>employer or program will reimburse it</strong> (most will - just ask), or</li>
            <li>A <strong>specific job posting you want names the cert</strong> by code.</li>
          </ol>
          <p style={{ margin: '.75rem 0 0', color: '#92400E', fontSize: '.9rem' }}>
            Everything else: do the free version, build a project, and keep your $100-$200.
          </p>
        </div>

        {/* Cert Picker widget */}
        <h2 id="cert-picker" style={{ fontSize: '1.4rem', marginBottom: '.25rem', scrollMarginTop: '80px' }}>Build your path</h2>
        <p style={{ color: '#6B7280', marginTop: 0, fontSize: '.95rem' }}>Answer three questions and get a ranked, free-first plan you can copy.</p>
        <CertPicker />

        {/* Free certifications */}
        <h2 id="free-certs" style={{ fontSize: '1.4rem', marginBottom: '.25rem', scrollMarginTop: '80px' }}>Free certifications & courses</h2>
        <p style={{ color: '#6B7280', marginTop: 0, fontSize: '.95rem' }}>Start here. All issue a shareable certificate or completion record at no cost.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', margin: '1rem 0 2.5rem' }}>
          {FREE_CERTS.map(c => (
            <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{c.icon}</span>
                <span style={{ fontWeight: 700, fontSize: '.98rem', color: ACCENT }}>{c.name} ↗</span>
              </div>
              <div style={{ display: 'inline-block', background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 6, padding: '.1rem .5rem', fontSize: '.72rem', fontWeight: 600, marginBottom: '.5rem' }}>{c.cost}</div>
              <p style={{ margin: 0, fontSize: '.85rem', color: '#4B5563', lineHeight: 1.55 }}>{c.desc}</p>
              <p style={{ margin: '.5rem 0 0', fontSize: '.78rem', color: '#9CA3AF' }}>Best for: {c.who}</p>
            </a>
          ))}
        </div>

        {/* Paid shortlist */}
        <h2 style={{ fontSize: '1.4rem', marginBottom: '.25rem' }}>Paid certs worth considering</h2>
        <p style={{ color: '#6B7280', marginTop: 0, fontSize: '.95rem' }}>A short, opinionated list - not a directory. Prices are USD and exclude tax; confirm before booking.</p>
        <div style={{ overflowX: 'auto', margin: '1rem 0 1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.86rem', minWidth: 560 }}>
            <thead>
              <tr style={{ background: LIGHT }}>
                <th style={{ textAlign: 'left', padding: '.6rem .75rem', borderBottom: `2px solid ${BORDER}`, color: DEEP }}>Certification</th>
                <th style={{ textAlign: 'left', padding: '.6rem .75rem', borderBottom: `2px solid ${BORDER}`, color: DEEP }}>Code</th>
                <th style={{ textAlign: 'left', padding: '.6rem .75rem', borderBottom: `2px solid ${BORDER}`, color: DEEP }}>Level</th>
                <th style={{ textAlign: 'left', padding: '.6rem .75rem', borderBottom: `2px solid ${BORDER}`, color: DEEP }}>Cost</th>
                <th style={{ textAlign: 'left', padding: '.6rem .75rem', borderBottom: `2px solid ${BORDER}`, color: DEEP }}>Who it is for</th>
              </tr>
            </thead>
            <tbody>
              {PAID_CERTS.map(c => (
                <tr key={c.code} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '.6rem .75rem', fontWeight: 600 }}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, textDecoration: 'none' }}>{c.name} ↗</a></td>
                  <td style={{ padding: '.6rem .75rem', fontFamily: 'monospace', fontSize: '.8rem', color: '#6B7280' }}>{c.code}</td>
                  <td style={{ padding: '.6rem .75rem' }}>{c.level}</td>
                  <td style={{ padding: '.6rem .75rem', fontWeight: 600, color: ACCENT }}>{c.cost}</td>
                  <td style={{ padding: '.6rem .75rem', color: '#4B5563' }}>{c.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '.82rem', color: '#9CA3AF', margin: '0 0 2.5rem' }}>
          Note: Azure AI-102 retires June 30, 2026 and is replaced by AI-103. The AWS ML Specialty (MLS-C01) has been retired in favor of the ML Engineer Associate (MLA-C01) shown above.
        </p>

        {/* Free prep spine */}
        <h2 style={{ fontSize: '1.4rem', marginBottom: '.25rem' }}>How to prep for a paid cert - free</h2>
        <p style={{ color: '#6B7280', marginTop: 0, fontSize: '.95rem' }}>You almost never need a paid bootcamp. Build prep from these four free layers.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', margin: '1rem 0 2.5rem' }}>
          {[
            { n: '1', t: 'The official exam guide (always free)', d: 'Every vendor publishes the exam guide and skills outline for free. It is the exact blueprint - start by reading it and listing every topic you cannot yet explain.' },
            { n: '2', t: 'Vendor free training', d: 'AWS Skill Builder (free tier), Microsoft Learn (fully free), and Google Cloud Skills Boost (some free labs) cover most exam objectives at no cost.' },
            { n: '3', t: 'Free full-course videos', d: 'freeCodeCamp and the official vendor YouTube channels post multi-hour, full-cert courses for free. Search the exam code plus "full course".' },
            { n: '4', t: 'Free practice questions', d: 'Use the vendor sample questions plus one reputable free set. Take a timed practice test; only book the real exam when you score 80%+ twice.' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: '.85rem', background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem' }}>
              <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: ACCENT, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem' }}>{s.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '.92rem', marginBottom: '.2rem' }}>{s.t}</div>
                <div style={{ fontSize: '.86rem', color: '#4B5563', lineHeight: 1.55 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Free training windows / vouchers */}
        <h2 style={{ fontSize: '1.4rem', marginBottom: '.25rem' }}>Free training windows & exam vouchers</h2>
        <p style={{ color: '#6B7280', marginTop: 0, fontSize: '.95rem' }}>These open and close on a schedule. You cannot make this site watch your inbox, but you can set yourself up to catch the next window.</p>
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#374151', lineHeight: 2 }}>
            <li><a href="https://www.microsoft.com/en-us/events/category/microsoft-virtual-training-days" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, fontWeight: 700, textDecoration: 'none' }}>Microsoft Virtual Training Day ↗</a> - a free online event that issues a <strong>discounted (often 50% off) or free exam voucher</strong> on completion. The most reliable way to cut the cost of AI-900 or the AI-102 successor. The exact benefit varies by event and region.</li>
            <li><a href="https://learn.microsoft.com/en-us/credentials/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, fontWeight: 700, textDecoration: 'none' }}>Microsoft Cloud Skills Challenge ↗</a> (tied to Build and Ignite) - complete the challenge for a free or discounted voucher. Runs a few times a year.</li>
            <li><a href="https://developers.google.com/program" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, fontWeight: 700, textDecoration: 'none' }}>Google Developer Program Premium ↗</a> (about $299/year) - bundles one Google Cloud cert voucher, full Skills Boost access, and cloud credits. Not free, but cheaper than the cert plus training bought separately.</li>
            <li><a href="https://skillbuilder.aws/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, fontWeight: 700, textDecoration: 'none' }}>AWS Skill Builder ↗</a> - free digital training year-round; holding one AWS cert unlocks a retake/discount benefit on the next.</li>
          </ul>
        </div>
        <div style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: 12, padding: '1.25rem', marginBottom: '2.5rem' }}>
          <strong style={{ color: DEEP }}>How to never miss one:</strong>
          <ol style={{ margin: '.5rem 0 0', paddingLeft: '1.25rem', color: '#78350F', lineHeight: 1.8 }}>
            <li>Make a free account on Microsoft Learn, AWS Skill Builder, and Google Cloud Skills Boost.</li>
            <li>Opt into each vendor’s training emails (this is where voucher events are announced first).</li>
            <li>Bookmark the events pages and check around Microsoft Build (May), Ignite (Nov), and Google Cloud Next (Apr).</li>
          </ol>
        </div>

        {/* Leverage */}
        <h2 style={{ fontSize: '1.4rem', marginBottom: '.25rem' }}>Turn a cert into actual career growth</h2>
        <p style={{ color: '#6B7280', marginTop: 0, fontSize: '.95rem' }}>The cert is the easy part. These three moves are what make it pay off.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', margin: '1rem 0 2.5rem' }}>
          {[
            { icon: '🔗', t: 'Add it with the credential ID', d: 'Put it under LinkedIn "Licenses & certifications" with the verifiable credential ID. Recruiters filter on these.' },
            { icon: '🛠️', t: 'Pair it with a shipped project', d: 'A cert plus a working project you can demo beats two certs. Build the project this course points you toward, then certify.' },
            { icon: '🗣️', t: 'Write one post about it', d: 'A short "what I learned" post on LinkedIn turns a private credential into visibility - and signals you can communicate, not just pass exams.' },
          ].map(c => (
            <div key={c.t} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '.4rem' }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '.25rem' }}>{c.t}</div>
              <p style={{ margin: 0, fontSize: '.85rem', color: '#4B5563', lineHeight: 1.55 }}>{c.d}</p>
            </div>
          ))}
        </div>

        <ToolResources links={[
          { label: 'Anthropic Academy (free courses)', href: 'https://www.anthropic.com/learn', note: 'AI Fluency + Claude Code, free certificates' },
          { label: 'Google AI Essentials', href: 'https://grow.google/ai-essentials/', note: 'Audit free; free for eligible US small businesses' },
          { label: 'DeepLearning.AI courses', href: 'https://www.deeplearning.ai/courses/', note: 'Andrew Ng; free to audit on Coursera' },
          { label: 'AWS Certification', href: 'https://aws.amazon.com/certification/', note: 'AI Practitioner, ML Engineer Associate' },
          { label: 'Microsoft Learn certifications', href: 'https://learn.microsoft.com/credentials/', note: 'AI-900, AI-103; free training + vouchers' },
          { label: 'Google Cloud certification', href: 'https://cloud.google.com/learn/certification/machine-learning-engineer', note: 'Professional ML Engineer' },
          { label: 'NVIDIA certification', href: 'https://www.nvidia.com/en-us/learn/certification/', note: 'Generative AI and LLMs (NCA-GENL)' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Link href="/tools/huggingface" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Free Hugging Face courses</Link>
          <Link href="/level0/lesson1" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Start the free course</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
