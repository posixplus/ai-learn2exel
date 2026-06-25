'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'

export default function OllamaPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>Local AI Tools</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🦙</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>100% Free & Open Source</span>
                <span style={{ background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Runs Locally - No Internet Needed</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Ollama</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>Run powerful AI models on your own computer - completely private, completely free</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            Ollama makes it as easy to run an AI model locally as installing any other app. One command to pull a model, one command to chat. Your data never leaves your machine - no API keys, no usage limits, no monthly fees. Supports Llama 3, Mistral, Gemma, Phi-3, DeepSeek, and dozens more.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Cost', value: 'Free forever' },
            { label: 'Privacy', value: '100% local' },
            { label: 'Internet', value: 'Not required' },
            { label: 'Platform', value: 'Mac, Win, Linux' },
            { label: 'RAM needed', value: '8 GB min (16 GB+)' },
            { label: 'Website', value: 'ollama.com' },
          ].map(f => (
            <div key={f.label} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.25rem' }}>{f.label}</div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '.95rem' }}>{f.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Install & Setup (5 minutes)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Download Ollama', desc: 'Go to ollama.com → Download. Pick your OS. On Mac, drag Ollama.app to Applications. It adds a menu bar icon.' },
              { step: '2', title: 'Pull your first model', desc: 'Open Terminal and run: ollama pull llama3.2 - this downloads the 2.0 GB Llama 3.2 3B model. For a bigger model: ollama pull llama3.1 (4.7 GB, much more capable).' },
              { step: '3', title: 'Chat in terminal', desc: 'Run: ollama run llama3.2 - a chat prompt appears. Type your message and press Enter. Type /bye to exit.' },
              { step: '4', title: 'Or use a GUI (optional)', desc: 'Install Open WebUI for a ChatGPT-like browser interface: run the Docker command from openwebui.com. Connects to your local Ollama automatically.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#16A34A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem', flexShrink: 0, marginTop: 2 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '.25rem' }}>{s.title}</div>
                  <div style={{ color: '#4B5563', fontSize: '.9rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', marginTop: '1.25rem', lineHeight: 1.8 }}>
            <span style={{ color: '#94A3B8' }}># Quick start commands:</span><br />
            ollama pull llama3.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#94A3B8' }}># Download model (one time)</span><br />
            ollama run llama3.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#94A3B8' }}># Start chatting</span><br />
            ollama list &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#94A3B8' }}># See downloaded models</span><br />
            ollama pull mistral &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#94A3B8' }}># Download Mistral 7B</span>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>📦 Recommended Models to Try</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.875rem' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Model</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Size</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>RAM</th>
                  <th style={{ padding: '.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['llama3.2', '2 GB', '8 GB', 'Fast chat, low-end hardware'],
                  ['llama3.1', '4.7 GB', '8 GB', 'General purpose, good quality'],
                  ['llama3.1:70b', '40 GB', '64 GB', 'Near GPT-4 quality, needs high-end Mac'],
                  ['mistral', '4.1 GB', '8 GB', 'Fast, strong coding tasks'],
                  ['deepseek-coder', '776 MB', '8 GB', 'Code generation, very fast'],
                  ['phi3:mini', '2.3 GB', '8 GB', 'Lightweight, good reasoning'],
                  ['gemma2:2b', '1.6 GB', '8 GB', 'Google model, very fast'],
                  ['codellama', '3.8 GB', '8 GB', 'Code completion, works with editors'],
                ].map(([model, size, ram, best]) => (
                  <tr key={model} style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '.65rem 1rem' }}><code style={{ fontFamily: 'monospace', background: '#F3F4F6', padding: '.1rem .4rem', borderRadius: 4, fontSize: '.85rem' }}>{model}</code></td>
                    <td style={{ padding: '.65rem 1rem', color: '#6B7280' }}>{size}</td>
                    <td style={{ padding: '.65rem 1rem', color: '#6B7280' }}>{ram}</td>
                    <td style={{ padding: '.65rem 1rem', color: '#4B5563' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Example: Chat + Code Assistance</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Terminal Chat</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              <span style={{ color: '#86EFAC' }}>$</span> ollama run llama3.1<br />
              <span style={{ color: '#94A3B8' }}>{`>>>`}</span> <span style={{ color: '#FDE68A' }}>Write a Python function that parses a CSV file and returns a list of dicts</span><br /><br />
              <span style={{ color: '#7DD3FC' }}>Here is a clean implementation:</span><br />
              <span style={{ color: '#94A3B8' }}>{`def parse_csv(file_path: str) -> list[dict]:`}</span><br />
              <span style={{ color: '#94A3B8' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`with open(file_path, 'r') as f:`}</span><br />
              <span style={{ color: '#94A3B8' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return list(csv.DictReader(f))`}</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Use Ollama from Python</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              <span style={{ color: '#86EFAC' }}>pip</span> install ollama<br /><br />
              <span style={{ color: '#7DD3FC' }}>import</span> ollama<br /><br />
              response = ollama.chat(<br />
              &nbsp;&nbsp;model=<span style={{ color: '#FDE68A' }}>'llama3.1'</span>,<br />
              &nbsp;&nbsp;messages=[{'{'}<span style={{ color: '#FDE68A' }}>'role'</span>: <span style={{ color: '#FDE68A' }}>'user'</span>, <span style={{ color: '#FDE68A' }}>'content'</span>: <span style={{ color: '#FDE68A' }}>'Explain async/await in Python'</span>{'}'}]<br />
              )<br />
              <span style={{ color: '#7DD3FC' }}>print</span>(response[<span style={{ color: '#FDE68A' }}>'message'</span>][<span style={{ color: '#FDE68A' }}>'content'</span>])
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Use with VS Code via Continue extension</div>
            <p style={{ color: '#4B5563', fontSize: '.9rem', margin: 0 }}>Install the "Continue" extension in VS Code → set provider to Ollama → point to your local model. You now have free local AI completions in VS Code with no API costs.</p>
          </div>
        </div>

        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#14532D', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#166534', lineHeight: 2 }}>
            <li>Apple Silicon Macs (M1/M2/M3/M4) run Ollama models fast using the GPU - even 7B models feel snappy</li>
            <li>Models are cached - pulling is a one-time download. Running them requires no internet</li>
            <li>Use <strong>Open WebUI</strong> (openwebui.com) for a full browser-based ChatGPT-like UI over your local models</li>
            <li>Ollama exposes an OpenAI-compatible API at localhost:11434 - swap it into any code that uses OpenAI</li>
            <li>For max privacy: AI coding without any data leaving your machine - perfect for confidential codebases</li>
          </ul>
        </div>

        <ToolResources links={[
          { label: 'Download Ollama', href: 'https://ollama.com', note: 'Mac, Windows, Linux - free' },
          { label: 'Model library', href: 'https://ollama.com/library', note: 'Browse Llama, Mistral, Gemma, DeepSeek, Qwen...' },
          { label: 'GitHub repo', href: 'https://github.com/ollama/ollama', note: 'Source, docs, and issues' },
          { label: 'Blog', href: 'https://ollama.com/blog', note: 'New models and features' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/local-ai" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Free Local AI 1-Pager</Link>
          <Link href="/tools/huggingface" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Hugging Face Guide</Link>
          <Link href="/tools/ai-hardware" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Hardware Buying Guide</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
