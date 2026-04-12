'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function HuggingFacePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>AI Platforms</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🤗</span>
            <div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.4rem' }}>
                <span style={{ background: '#FFF7ED', color: '#C2410C', border: '1px solid #FED7AA', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>AI Platform / Hub</span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: '999px', padding: '.2rem .75rem', fontSize: '.78rem', fontWeight: 600 }}>Free Tier Available</span>
              </div>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Hugging Face</h1>
              <p style={{ margin: '.25rem 0 0', color: '#6B7280', fontSize: '1rem' }}>The GitHub of AI — 700,000+ models, datasets, and Spaces to explore and deploy</p>
            </div>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            Hugging Face is the central hub of the open-source AI world. It hosts over 700,000 models (text, vision, audio, code), 150,000+ datasets, and interactive demos called Spaces. Developers use it to find pre-trained models, run them via API, fine-tune them on custom data, and share their own work.
          </p>
        </div>

        {/* What's on HF */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { icon: '🧠', title: 'Models', count: '700,000+', desc: 'Pre-trained models for text, images, audio, video, and code' },
            { icon: '📊', title: 'Datasets', count: '150,000+', desc: 'Training and benchmark datasets for all AI tasks' },
            { icon: '🚀', title: 'Spaces', count: '300,000+', desc: 'Live interactive demos — try any model in your browser' },
            { icon: '💻', title: 'Inference API', count: 'Pay-per-use', desc: 'Call any model via REST API without managing infrastructure' },
          ].map(c => (
            <div key={c.title} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '.4rem' }}>{c.icon}</div>
              <div style={{ fontWeight: 700 }}>{c.title}</div>
              <div style={{ color: '#F97316', fontWeight: 700, fontSize: '1rem', margin: '.2rem 0' }}>{c.count}</div>
              <div style={{ fontSize: '.8rem', color: '#6B7280' }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Getting Started</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Create a free account', desc: 'Go to huggingface.co → Sign Up. The free tier gives you access to the model hub, Spaces, and limited Inference API usage.' },
              { step: '2', title: 'Browse Models', desc: 'huggingface.co/models — filter by task (text generation, translation, image classification etc.), language, and license. Sort by "Most Downloads" to find popular ones.' },
              { step: '3', title: 'Try a model in Spaces', desc: 'Many models have a "Spaces" demo button — click it to test the model live in your browser with no code. Great for evaluation before committing.' },
              { step: '4', title: 'Get your API token', desc: 'Settings → Access Tokens → New Token. Use this token to call models via the Inference API or download models programmatically.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.85rem', flexShrink: 0, marginTop: 2 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '.25rem' }}>{s.title}</div>
                  <div style={{ color: '#4B5563', fontSize: '.9rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>🚀 Sample Usage</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Call the Inference API (Python)</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              <span style={{ color: '#86EFAC' }}>pip</span> install huggingface_hub<br /><br />
              <span style={{ color: '#7DD3FC' }}>from</span> huggingface_hub <span style={{ color: '#7DD3FC' }}>import</span> InferenceClient<br /><br />
              client = InferenceClient(<br />
              &nbsp;&nbsp;model=<span style={{ color: '#FDE68A' }}>"mistralai/Mistral-7B-Instruct-v0.1"</span>,<br />
              &nbsp;&nbsp;token=<span style={{ color: '#FDE68A' }}>"hf_YOUR_TOKEN_HERE"</span><br />
              )<br /><br />
              response = client.text_generation(<br />
              &nbsp;&nbsp;<span style={{ color: '#FDE68A' }}>"Explain recursion in simple terms"</span>,<br />
              &nbsp;&nbsp;max_new_tokens=<span style={{ color: '#86EFAC' }}>200</span><br />
              )<br />
              <span style={{ color: '#7DD3FC' }}>print</span>(response)
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Download and Run a Model Locally</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.875rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              <span style={{ color: '#86EFAC' }}>pip</span> install transformers torch<br /><br />
              <span style={{ color: '#7DD3FC' }}>from</span> transformers <span style={{ color: '#7DD3FC' }}>import</span> pipeline<br /><br />
              <span style={{ color: '#94A3B8' }}># Load a text classification model</span><br />
              classifier = pipeline(<span style={{ color: '#FDE68A' }}>"sentiment-analysis"</span>)<br />
              result = classifier(<span style={{ color: '#FDE68A' }}>"This product is absolutely amazing!"</span>)<br />
              <span style={{ color: '#94A3B8' }}># Output: [{`{'label': 'POSITIVE', 'score': 0.99}`}]</span>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem' }}>Popular Tasks & Models to Try</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
              {[
                ['Text Generation', 'meta-llama/Llama-3.1-8B'],
                ['Code Generation', 'deepseek-ai/deepseek-coder-6.7b'],
                ['Translation', 'Helsinki-NLP/opus-mt-en-fr'],
                ['Summarization', 'facebook/bart-large-cnn'],
                ['Image Classification', 'google/vit-base-patch16-224'],
                ['Speech to Text', 'openai/whisper-large-v3'],
              ].map(([task, model]) => (
                <div key={task} style={{ padding: '.65rem .75rem', background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8 }}>
                  <div style={{ fontWeight: 600, fontSize: '.85rem', color: '#92400E' }}>{task}</div>
                  <code style={{ fontFamily: 'monospace', fontSize: '.78rem', color: '#6B7280' }}>{model}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Pro Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2 }}>
            <li>Filter models by <strong>license: Apache 2.0 or MIT</strong> if you need commercial use rights</li>
            <li>The <strong>Serverless Inference API</strong> is free for low-volume use — perfect for prototyping</li>
            <li>Spaces are free to browse and test — no account needed for most public demos</li>
            <li><strong>GGUF format models</strong> on HF are optimized for Ollama — search for "GGUF" to find them</li>
            <li>Use the HF Leaderboard (huggingface.co/open-llm-leaderboard) to compare open-source models before downloading</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/ollama" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Run HF Models Locally with Ollama</Link>
          <Link href="/tools/local-ai" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Free Local AI Guide</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
