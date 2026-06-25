'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function LocalAiPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Local AI Guide</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>

        {/* Hero 1-pager banner */}
        <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)', border: '2px solid #86EFAC', borderRadius: 16, padding: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '.75rem' }}>🆓</div>
          <h1 style={{ margin: '0 0 .5rem', fontSize: '2rem', fontWeight: 800 }}>Running AI Locally - Free & Private</h1>
          <p style={{ margin: 0, color: '#166534', fontSize: '1.05rem', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Everything you need to run powerful AI models on your own computer - no subscription, no cloud, no data sharing.
          </p>
        </div>

        {/* Why local */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>Why Run AI Locally?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🔒', title: 'Complete Privacy', desc: 'Your data never leaves your machine. No usage logs, no training on your input.' },
              { icon: '💰', title: 'Zero Cost', desc: 'No monthly fees, no API credits. Run as many tokens as you want, forever.' },
              { icon: '⚡', title: 'No Rate Limits', desc: 'No throttling, no queues, no "capacity exceeded" errors at peak hours.' },
              { icon: '📴', title: 'Works Offline', desc: 'Once downloaded, models work without internet - on planes, secure networks, anywhere.' },
            ].map(f => (
              <div key={f.title} style={{ padding: '1rem', background: '#F0FDF4', borderRadius: 8, textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.4rem' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '.25rem' }}>{f.title}</div>
                <div style={{ fontSize: '.85rem', color: '#4B5563' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* vs Cloud */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>Local AI vs Cloud AI - Honest Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.875rem' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'left' }}>Factor</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'center', color: '#16A34A' }}>🏠 Local (Ollama)</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'center', color: '#2563EB' }}>☁️ Cloud (Claude/ChatGPT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', '✅ Free', '💰 $20+/month'],
                  ['Privacy', '✅ 100% private', '⚠️ Sent to provider'],
                  ['Quality (best model)', '⚠️ Good (Llama 70B-class)', '✅ Excellent (Claude Opus 4.8)'],
                  ['Quality (small models)', '⚠️ Basic', '✅ Still strong'],
                  ['Speed (Apple Silicon)', '✅ Fast', '✅ Fast'],
                  ['Speed (older hardware)', '⚠️ Slow', '✅ Always fast'],
                  ['Internet required', '✅ No', '❌ Yes'],
                  ['Latest models', '⚠️ 2-3 months behind', '✅ Cutting edge'],
                  ['Context window', '⚠️ Typically 8K-128K', '✅ Up to 200K'],
                  ['Setup effort', '⚠️ 10 min install', '✅ Instant (web)'],
                ].map(([factor, local, cloud]) => (
                  <tr key={factor} style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '.6rem 1rem', fontWeight: 600, color: '#374151' }}>{factor}</td>
                    <td style={{ padding: '.6rem 1rem', textAlign: 'center', color: '#374151', fontSize: '.875rem' }}>{local}</td>
                    <td style={{ padding: '.6rem 1rem', textAlign: 'center', color: '#374151', fontSize: '.875rem' }}>{cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Start */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ 5-Minute Quick Start</h2>
          <div style={{ background: '#1E293B', borderRadius: 8, padding: '1.25rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 2, marginBottom: '1rem' }}>
            <span style={{ color: '#94A3B8' }}># Step 1: Install Ollama (ollama.com)</span><br />
            <span style={{ color: '#94A3B8' }}># macOS: download the .dmg, or:</span><br />
            brew install ollama<br /><br />
            <span style={{ color: '#94A3B8' }}># Step 2: Download a model</span><br />
            ollama pull llama3.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#94A3B8' }}># 2 GB - fast, runs on 8 GB RAM</span><br />
            <span style={{ color: '#94A3B8' }}># Or for better quality:</span><br />
            ollama pull llama3.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#94A3B8' }}># 4.7 GB - much smarter</span><br /><br />
            <span style={{ color: '#94A3B8' }}># Step 3: Chat</span><br />
            ollama run llama3.2<br /><br />
            <span style={{ color: '#94A3B8' }}># Step 4 (optional): Add a browser UI</span><br />
            <span style={{ color: '#94A3B8' }}># Install Open WebUI from openwebui.com</span>
          </div>
          <p style={{ color: '#4B5563', fontSize: '.9rem', margin: 0 }}>That is it. You now have a free, private, locally-running AI assistant.</p>
        </div>

        {/* Model picker */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🎯 Which Model Should I Use?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { scenario: 'Old MacBook / 8 GB RAM / just want to try it', model: 'ollama pull llama3.2', note: '2 GB, decent quality' },
              { scenario: 'Modern machine, 16 GB RAM, everyday use', model: 'ollama pull llama3.1', note: '4.7 GB, strong quality' },
              { scenario: 'Coding assistant, any machine', model: 'ollama pull deepseek-coder', note: '800 MB, fast, code-focused' },
              { scenario: 'M2/M3/M4 Mac, want near-GPT-4 quality', model: 'ollama pull llama3.1:70b', note: '40 GB, needs 64 GB unified RAM' },
              { scenario: 'Privacy-critical work, fast responses', model: 'ollama pull phi3:mini', note: '2.3 GB, optimized for efficiency' },
              { scenario: 'Image understanding locally', model: 'ollama pull llava', note: '4.5 GB, multimodal vision' },
            ].map(s => (
              <div key={s.scenario} style={{ padding: '.75rem 1rem', background: '#F9FAFB', borderRadius: 8, border: '1px solid #F3F4F6' }}>
                <div style={{ fontSize: '.85rem', color: '#4B5563', marginBottom: '.4rem' }}>📌 {s.scenario}</div>
                <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <code style={{ fontFamily: 'monospace', fontSize: '.875rem', background: '#1E293B', color: '#86EFAC', padding: '.2rem .6rem', borderRadius: 4 }}>{s.model}</code>
                  <span style={{ fontSize: '.8rem', color: '#6B7280' }}>{s.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GUI Options */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🖥️ GUI Options (No Terminal Required)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Open WebUI', desc: 'Full ChatGPT-like web interface. Runs in your browser. Supports all Ollama models. Best overall.', url: 'openwebui.com', free: true },
              { name: 'LM Studio', desc: 'Desktop app with model browser. Download and run models with a GUI - no terminal needed.', url: 'lmstudio.ai', free: true },
              { name: 'GPT4All', desc: 'Simple desktop app. Good for beginners. One-click model download and chat.', url: 'nomic.ai/gpt4all', free: true },
              { name: 'Msty', desc: 'Clean desktop AI client. Supports Ollama + cloud models. Good conversation management.', url: 'msty.app', free: true },
            ].map(g => (
              <div key={g.name} style={{ padding: '1rem', background: '#F9FAFB', borderRadius: 8, border: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '.95rem' }}>{g.name}</span>
                  <span style={{ background: '#F0FDF4', color: '#16A34A', fontSize: '.72rem', fontWeight: 700, padding: '.15rem .5rem', borderRadius: '999px', border: '1px solid #BBF7D0' }}>Free</span>
                </div>
                <div style={{ fontSize: '.85rem', color: '#4B5563', marginBottom: '.4rem' }}>{g.desc}</div>
                <div style={{ fontSize: '.78rem', color: '#9CA3AF' }}>{g.url}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#14532D', fontSize: '1.1rem' }}>📋 Bottom Line</h3>
          <p style={{ margin: 0, color: '#166534', lineHeight: 1.8 }}>
            <strong>Use local AI when:</strong> privacy matters, you're offline, you hit rate limits, or you want zero cost. Use cloud AI (Claude, ChatGPT) when you need the absolute best quality, the latest models, or you're doing complex reasoning tasks on short deadlines. Most power users run both - local for everyday tasks, cloud for the hard problems.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/ollama" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Full Ollama Guide</Link>
          <Link href="/tools/huggingface" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Hugging Face Guide</Link>
          <Link href="/tools/ai-hardware" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Hardware Buying Guide</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
