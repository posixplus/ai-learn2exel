'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'

export default function AiHardwarePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Hardware Guide</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ margin: '0 0 .5rem', fontSize: '2rem', fontWeight: 800 }}>🖥️ Buying a Computer for AI</h1>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7, marginBottom: 0 }}>
            If you only use cloud AI (Claude, ChatGPT), any modern computer works fine. This guide is for people who want to run AI models <strong>locally</strong> - which requires specific hardware considerations. We cover Mac vs Windows, RAM requirements, and specific recommendations by budget.
          </p>
        </div>

        {/* Quick verdict */}
        <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)', border: '2px solid #C7D2FE', borderRadius: 16, padding: '1.75rem', marginBottom: '2.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.2rem', color: '#3730A3' }}>⚡ TL;DR - The Quick Answer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.5rem', color: '#1E3A8A' }}>For local AI: Get an Apple Silicon Mac</div>
              <p style={{ margin: 0, color: '#374151', fontSize: '.9rem', lineHeight: 1.7 }}>The M-series chip's unified memory architecture makes it the best value for running large models locally. An M3 MacBook Pro with 36 GB RAM runs Llama 70B smoothly - something that would cost $3,000+ in a Windows GPU setup.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.5rem', color: '#1E3A8A' }}>Just using cloud AI? Any modern laptop works</div>
              <p style={{ margin: 0, color: '#374151', fontSize: '.9rem', lineHeight: 1.7 }}>Claude, ChatGPT, Gemini, and Copilot run in a browser. Any laptop made in the last 4 years with 8 GB RAM and a decent internet connection handles them perfectly. No special hardware needed.</p>
            </div>
          </div>
        </div>

        {/* Mac vs Windows */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🍎 Mac vs 🪟 Windows for Local AI</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.875rem' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'left' }}>Factor</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'center' }}>🍎 Mac (Apple Silicon)</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'center' }}>🪟 Windows (+ NVIDIA GPU)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Local model speed', '✅ Excellent (unified memory)', '✅ Excellent (dedicated VRAM)'],
                  ['Running 7B models', '✅ Any M-chip Mac (16 GB)', '✅ Any RTX 3060+ (8 GB VRAM)'],
                  ['Running 70B models', '✅ 36-48 GB unified RAM', '❌ Needs 2× A100 or H100 (~$30K+)'],
                  ['Cost for 70B capable', '💰 ~$2,500 (M3 Pro 36 GB)', '💰 $10,000-$30,000+'],
                  ['Battery life', '✅ Excellent (12-18 hrs)', '⚠️ Poor during GPU tasks'],
                  ['CUDA ecosystem (PyTorch)', '⚠️ MPS backend (some gaps)', '✅ Full CUDA support'],
                  ['Ollama support', '✅ Native, very fast', '✅ Works via NVIDIA CUDA'],
                  ['Cloud AI (Claude/Copilot)', '✅ Same as any machine', '✅ Same as any machine'],
                  ['Price/performance for local AI', '✅ Best value overall', '⚠️ High GPU cost premium'],
                ].map(([factor, mac, win]) => (
                  <tr key={factor} style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '.65rem 1rem', fontWeight: 600, color: '#374151' }}>{factor}</td>
                    <td style={{ padding: '.65rem 1rem', textAlign: 'center', fontSize: '.875rem' }}>{mac}</td>
                    <td style={{ padding: '.65rem 1rem', textAlign: 'center', fontSize: '.875rem' }}>{win}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Apple Silicon */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🍎 Apple Silicon - Recommended Configurations</h2>
          <p style={{ color: '#4B5563', fontSize: '.9rem', marginBottom: '1.25rem' }}>Apple's M-series chips use <strong>unified memory</strong> - the CPU and GPU share the same RAM pool. This is why a 36 GB M3 Pro beats most Windows machines at local AI: the full 36 GB is available to the model.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { budget: 'Entry (~$1,300)', model: 'MacBook Air M3 - 16 GB RAM', capability: 'Runs Llama 3.2 3B, Mistral 7B, phi3:mini comfortably. Good for learning and everyday AI assistance.', verdict: 'Good start' },
              { budget: 'Mid (~$2,000)', model: 'MacBook Pro M3 - 18-24 GB RAM', capability: 'Runs Llama 3.1 8B smoothly. Can run 13B models at acceptable speed. Good for developers.', verdict: 'Recommended' },
              { budget: 'Pro (~$2,500-3,000)', model: 'MacBook Pro M3 Pro - 36 GB RAM', capability: 'Runs Llama 3.1 70B at usable speed. Near GPT-4 quality locally. Best value for serious local AI work.', verdict: 'Best for local AI' },
              { budget: 'Power (~$3,500-6,000)', model: 'MacBook Pro M3 Max - 48-128 GB RAM', capability: 'Runs 70B models fast. Can run multiple models simultaneously. For ML engineers and researchers.', verdict: 'For professionals' },
              { budget: 'Desktop (~$1,600+)', model: 'Mac Mini M4 Pro - 24-64 GB RAM', capability: 'Best performance per dollar for a desktop AI workstation. Add your own monitor.', verdict: 'Best desktop value' },
            ].map(r => (
              <div key={r.budget} style={{ padding: '1rem 1.25rem', border: '1px solid #E5E7EB', borderRadius: 10, display: 'grid', gridTemplateColumns: '130px 1fr auto', gap: '1rem', alignItems: 'start' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#111827' }}>{r.budget}</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#374151', marginBottom: '.25rem' }}>{r.model}</div>
                  <div style={{ fontSize: '.85rem', color: '#6B7280' }}>{r.capability}</div>
                </div>
                <div style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{r.verdict}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Windows GPU */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🪟 Windows with NVIDIA GPU</h2>
          <p style={{ color: '#4B5563', fontSize: '.9rem', marginBottom: '1.25rem' }}>Windows with a dedicated NVIDIA GPU is the other serious option for local AI. The advantage: full CUDA support for PyTorch/TensorFlow development and fine-tuning. The limitation: VRAM is the bottleneck (separate from system RAM), and 70B models need massive VRAM.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { gpu: 'RTX 3060 (12 GB VRAM)', price: '~$300', runs: 'Llama 7B-13B well. Best budget GPU for local AI.', note: 'Entry point' },
              { gpu: 'RTX 4070 (12 GB VRAM)', price: '~$600', runs: 'Llama 7B-13B fast. Better throughput than 3060.', note: 'Good mid-range' },
              { gpu: 'RTX 4080 (16 GB VRAM)', price: '~$1,000', runs: 'Llama 13B-34B models. Solid for development.', note: 'Recommended GPU' },
              { gpu: 'RTX 4090 (24 GB VRAM)', price: '~$2,000', runs: 'Llama 70B (quantized). Best consumer GPU for AI.', note: 'Best consumer GPU' },
              { gpu: '2× RTX 4090 (48 GB VRAM)', price: '~$4,000+', runs: 'Full 70B models at good speed. Serious AI rig.', note: 'Enthusiast' },
            ].map(g => (
              <div key={g.gpu} style={{ padding: '1rem 1.25rem', border: '1px solid #E5E7EB', borderRadius: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.3rem' }}>
                  <span style={{ fontWeight: 700, color: '#374151' }}>{g.gpu}</span>
                  <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, color: '#2563EB' }}>{g.price}</span>
                    <span style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE', borderRadius: '999px', padding: '.1rem .5rem', fontSize: '.75rem', fontWeight: 600 }}>{g.note}</span>
                  </div>
                </div>
                <div style={{ fontSize: '.875rem', color: '#6B7280' }}>{g.runs}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 8, padding: '.75rem 1rem', marginTop: '1rem', fontSize: '.875rem', color: '#92400E' }}>
            ⚠️ <strong>Key Windows limitation:</strong> VRAM is separate from system RAM. A 24 GB RTX 4090 cannot use your 64 GB system RAM for models. Compare: a 36 GB M3 Pro Mac can use all 36 GB for a model.
          </div>
        </div>

        {/* Linux note */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🐧 Linux (for Power Users)</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
            If you're comfortable with Linux, Ubuntu + NVIDIA GPU is the most flexible setup for AI development. Full CUDA support, no licensing restrictions, best PyTorch performance. Same GPU recommendations as Windows apply. Ollama runs natively. The tradeoff is setup complexity - not recommended for beginners.
          </p>
        </div>

        {/* Recommendation summary */}
        <div style={{ background: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)', border: '2px solid #DDD6FE', borderRadius: 16, padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.2rem', color: '#5B21B6' }}>🎯 Our Recommendations by Use Case</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { use: 'Learning AI, using cloud tools only', rec: 'Any modern laptop with 8 GB RAM. Even a $700 laptop works.' },
              { use: 'Developer using Copilot/Claude Code + occasional local models', rec: 'MacBook Air M3 16 GB (~$1,300). Best all-rounder.' },
              { use: 'Developer who wants serious local AI capability', rec: 'MacBook Pro M3 Pro 36 GB (~$2,500). Run 70B models locally.' },
              { use: 'ML engineer / fine-tuning / CUDA training work', rec: 'Windows/Linux + RTX 4090 24 GB (~$2,000 GPU). Full CUDA ecosystem.' },
              { use: 'Desktop workstation for AI research', rec: 'Mac Mini M4 Pro 64 GB (~$2,400). Best local AI desktop value.' },
            ].map(r => (
              <div key={r.use} style={{ padding: '.75rem 1rem', background: 'white', borderRadius: 8, border: '1px solid #DDD6FE' }}>
                <div style={{ fontSize: '.85rem', color: '#6B7280', marginBottom: '.25rem' }}>📌 {r.use}</div>
                <div style={{ fontWeight: 600, color: '#374151', fontSize: '.9rem' }}>→ {r.rec}</div>
              </div>
            ))}
          </div>
        </div>

        <ToolResources links={[
          { label: 'Apple Mac (Apple silicon)', href: 'https://www.apple.com/mac/', note: 'M-series unified memory - great for local AI' },
          { label: 'NVIDIA GeForce RTX', href: 'https://www.nvidia.com/en-us/geforce/', note: 'GPUs with VRAM for local models' },
          { label: 'Ollama', href: 'https://ollama.com', note: 'Run models on the hardware you buy' },
          { label: 'LM Studio', href: 'https://lmstudio.ai', note: 'Desktop app to run local models with a GUI' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/ollama" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Run Local Models (Ollama)</Link>
          <Link href="/tools/local-ai" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Free Local AI Guide</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
