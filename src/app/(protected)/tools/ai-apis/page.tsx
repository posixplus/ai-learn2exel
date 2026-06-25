'use client'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import ToolResources from '@/components/tools/ToolResources'

export default function AiApisPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ color: '#6B7280', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '.875rem', color: '#6B7280' }}>AI API Guide</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ margin: '0 0 .5rem', fontSize: '2rem', fontWeight: 800 }}>🔌 AI APIs - Developer's Comparison Guide</h1>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7, marginBottom: 0 }}>
            Every major AI provider offers an API - a way to call AI models programmatically from your own code. This guide compares the top options: pricing, strengths, and when to use each.
          </p>
        </div>

        {/* Provider cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {[
            {
              icon: '🟣', name: 'Anthropic API', models: 'Claude Opus 4.8, Sonnet 4.6, Haiku 4.5',
              strength: 'Best reasoning, long context (200K-1M), safest for production',
              price: 'Sonnet: $3/$15 per 1M tokens (in/out)', url: 'platform.claude.com',
              badge: 'Best for complex tasks', color: '#7C3AED'
            },
            {
              icon: '🟢', name: 'OpenAI API', models: 'GPT-5.5, GPT-5.5 mini, o-series',
              strength: 'Widest ecosystem, best plugin/tool support, most integrations',
              price: 'GPT-5.5: ~$5/$30 per 1M tokens', url: 'platform.openai.com',
              badge: 'Most popular', color: '#16A34A'
            },
            {
              icon: '🔵', name: 'Google AI (Gemini API)', models: 'Gemini 3.5 Pro, Gemini 3.5 Flash',
              strength: 'Massive context window (2M tokens), multimodal, generous free tier',
              price: 'Flash: Free tier + $0.075/$0.30 per 1M', url: 'ai.google.dev',
              badge: 'Largest context window', color: '#2563EB'
            },
            {
              icon: '🔴', name: 'Mistral API', models: 'Mistral Large, Medium, Small',
              strength: 'Fast, affordable, European (GDPR-friendly), good for coding',
              price: 'Small: $0.20/$0.60 per 1M tokens', url: 'mistral.ai',
              badge: 'Best value API', color: '#DC2626'
            },
            {
              icon: '⭐', name: 'Groq API', models: 'Llama 3.1 70B, Mixtral, Gemma',
              strength: 'Extremely fast inference (LPU chips), great for real-time apps',
              price: 'Llama 70B: $0.59/$0.79 per 1M tokens', url: 'console.groq.com',
              badge: 'Fastest inference', color: '#D97706'
            },
            {
              icon: '🤗', name: 'Hugging Face Inference API', models: '700K+ open-source models',
              strength: 'Access to any open-source model via one API, flexible',
              price: 'Free tier + pay-per-use from $0.06/hr', url: 'huggingface.co',
              badge: 'Most model variety', color: '#F97316'
            },
          ].map(p => (
            <div key={p.name} style={{ background: 'white', border: '2px solid #F3F4F6', borderRadius: 12, padding: '1.5rem', borderTop: `4px solid ${p.color}` }}>
              <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>{p.icon}</div>
              <div style={{ background: '#F9FAFB', borderRadius: '999px', padding: '.15rem .6rem', fontSize: '.72rem', fontWeight: 700, color: '#374151', display: 'inline-block', marginBottom: '.5rem' }}>{p.badge}</div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.2rem' }}>{p.name}</div>
              <div style={{ fontSize: '.78rem', color: '#9CA3AF', marginBottom: '.6rem' }}>{p.models}</div>
              <div style={{ fontSize: '.875rem', color: '#4B5563', marginBottom: '.6rem', lineHeight: 1.5 }}>{p.strength}</div>
              <div style={{ fontSize: '.8rem', color: '#6B7280', padding: '.4rem .6rem', background: '#F9FAFB', borderRadius: 6, fontFamily: 'monospace' }}>{p.price}</div>
            </div>
          ))}
        </div>

        {/* Getting started */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>⚡ Hello World - Your First API Call</h2>
          <p style={{ color: '#4B5563', fontSize: '.9rem', marginBottom: '1rem' }}>Every AI API follows the same pattern: authenticate with an API key, send a message, receive a response. Here is the same call in Python for the three most popular APIs:</p>

          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#7C3AED' }}>Anthropic (Claude)</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.825rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              pip install anthropic<br /><br />
              <span style={{ color: '#7DD3FC' }}>import</span> anthropic<br />
              client = anthropic.Anthropic(api_key=<span style={{ color: '#FDE68A' }}>"sk-ant-..."</span>)<br /><br />
              message = client.messages.create(<br />
              &nbsp;&nbsp;model=<span style={{ color: '#FDE68A' }}>"claude-3-5-sonnet-20241022"</span>,<br />
              &nbsp;&nbsp;max_tokens=<span style={{ color: '#86EFAC' }}>1024</span>,<br />
              &nbsp;&nbsp;messages=[{'{'}<span style={{ color: '#FDE68A' }}>"role"</span>: <span style={{ color: '#FDE68A' }}>"user"</span>, <span style={{ color: '#FDE68A' }}>"content"</span>: <span style={{ color: '#FDE68A' }}>"Hello!"</span>{'}'}]<br />
              )<br />
              <span style={{ color: '#7DD3FC' }}>print</span>(message.content[<span style={{ color: '#86EFAC' }}>0</span>].text)
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#16A34A' }}>OpenAI (GPT)</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.825rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              pip install openai<br /><br />
              <span style={{ color: '#7DD3FC' }}>from</span> openai <span style={{ color: '#7DD3FC' }}>import</span> OpenAI<br />
              client = OpenAI(api_key=<span style={{ color: '#FDE68A' }}>"sk-..."</span>)<br /><br />
              response = client.chat.completions.create(<br />
              &nbsp;&nbsp;model=<span style={{ color: '#FDE68A' }}>"gpt-5.5"</span>,<br />
              &nbsp;&nbsp;messages=[{'{'}<span style={{ color: '#FDE68A' }}>"role"</span>: <span style={{ color: '#FDE68A' }}>"user"</span>, <span style={{ color: '#FDE68A' }}>"content"</span>: <span style={{ color: '#FDE68A' }}>"Hello!"</span>{'}'}]<br />
              )<br />
              <span style={{ color: '#7DD3FC' }}>print</span>(response.choices[<span style={{ color: '#86EFAC' }}>0</span>].message.content)
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#D97706' }}>Ollama - Local (no API key!)</div>
            <div style={{ background: '#1E293B', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '.825rem', color: '#E2E8F0', lineHeight: 1.8 }}>
              pip install ollama<br /><br />
              <span style={{ color: '#7DD3FC' }}>import</span> ollama<br /><br />
              response = ollama.chat(<br />
              &nbsp;&nbsp;model=<span style={{ color: '#FDE68A' }}>'llama3.1'</span>,<br />
              &nbsp;&nbsp;messages=[{'{'}<span style={{ color: '#FDE68A' }}>'role'</span>: <span style={{ color: '#FDE68A' }}>'user'</span>, <span style={{ color: '#FDE68A' }}>'content'</span>: <span style={{ color: '#FDE68A' }}>'Hello!'</span>{'}'}]<br />
              )<br />
              <span style={{ color: '#7DD3FC' }}>print</span>(response[<span style={{ color: '#FDE68A' }}>'message'</span>][<span style={{ color: '#FDE68A' }}>'content'</span>])
            </div>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3rem' }}>💰 Cost Calculator - Rough Guide</h2>
          <p style={{ color: '#4B5563', fontSize: '.9rem', marginBottom: '1rem' }}>APIs charge per token (roughly 1 token ≈ 0.75 words). Here is what typical usage costs:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.875rem' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '.65rem 1rem', textAlign: 'left' }}>Task</th>
                  <th style={{ padding: '.65rem 1rem', textAlign: 'center' }}>Tokens (approx)</th>
                  <th style={{ padding: '.65rem 1rem', textAlign: 'center' }}>Claude Sonnet</th>
                  <th style={{ padding: '.65rem 1rem', textAlign: 'center' }}>GPT-5.5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single Q&A', '500', '$0.001', '$0.002'],
                  ['Code review (1 file)', '2,000', '$0.006', '$0.010'],
                  ['Summarize 10-page doc', '5,000', '$0.015', '$0.025'],
                  ['1,000 Q&As per month', '500K', '$1.50', '$2.50'],
                  ['Small app (10K API calls)', '5M', '$15.00', '$25.00'],
                ].map(([task, tokens, claude, gpt]) => (
                  <tr key={task} style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '.6rem 1rem', color: '#374151' }}>{task}</td>
                    <td style={{ padding: '.6rem 1rem', textAlign: 'center', color: '#6B7280' }}>{tokens}</td>
                    <td style={{ padding: '.6rem 1rem', textAlign: 'center', color: '#7C3AED', fontWeight: 600 }}>{claude}</td>
                    <td style={{ padding: '.6rem 1rem', textAlign: 'center', color: '#16A34A', fontWeight: 600 }}>{gpt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6B7280', fontSize: '.8rem', marginTop: '.75rem', marginBottom: 0 }}>Prices above are estimates. Always check current pricing at each provider's website. API costs are generally very low for individual developers.</p>
        </div>

        <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#92400E', fontSize: '1.1rem' }}>💡 Which API Should I Use?</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350F', lineHeight: 2.2 }}>
            <li><strong>Building a product that needs the best reasoning?</strong> → Anthropic Claude API</li>
            <li><strong>Need the widest integration ecosystem (LangChain, etc.)?</strong> → OpenAI API</li>
            <li><strong>Need massive context (millions of tokens)?</strong> → Google Gemini 3.5 Pro API</li>
            <li><strong>Want the cheapest option with decent quality?</strong> → Mistral Small or Groq</li>
            <li><strong>Want free, no API key, private?</strong> → Ollama (local)</li>
            <li><strong>Experimenting / learning?</strong> → Anthropic or OpenAI - great docs, SDKs for all languages</li>
          </ul>
        </div>

        <ToolResources links={[
          { label: 'OpenAI Platform', href: 'https://platform.openai.com', note: 'Docs, API keys, pricing' },
          { label: 'Anthropic (Claude) Platform', href: 'https://platform.claude.com', note: 'Claude developer platform + docs' },
          { label: 'Google Gemini API', href: 'https://ai.google.dev', note: 'Gemini API + AI Studio' },
          { label: 'Mistral La Plateforme', href: 'https://mistral.ai', note: 'European models + API' },
          { label: 'Groq', href: 'https://groq.com', note: 'Very fast inference API' },
          { label: 'OpenRouter', href: 'https://openrouter.ai', note: 'One API across many providers' },
        ]} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tools/ollama" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Free Local Alternative (Ollama)</Link>
          <Link href="/tools/huggingface" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 8, padding: '.75rem 1.25rem', fontSize: '.875rem', color: '#374151', textDecoration: 'none', fontWeight: 600 }}>→ Hugging Face Models</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
