'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson35() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-35" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={35}
          duration={90}
          title="Production AI Systems"
          subtitle="Shipping Claude to real users: caching, rate limits, error handling, monitoring, and cost control."
        />

        <section className="section-card">
          <h2>The Gap Between Demo and Production</h2>
          <p>
            Your Claude prototype works great on your laptop. Production is different:
            real users send unexpected inputs, the API has rate limits, costs multiply,
            and when something breaks at 2am you need to know about it. This lesson
            covers everything between "it works" and "it ships."
          </p>
          <div className="info-box">
            <strong>Production checklist overview:</strong>
            <ul>
              <li>Prompt caching - cut costs by up to 90% on repeated context</li>
              <li>Rate limit handling - exponential backoff, queuing</li>
              <li>Error handling - retry logic, graceful degradation</li>
              <li>Observability - logging, latency tracking, error alerts</li>
              <li>Cost control - per-user limits, budget alerts</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Prompt Caching</h2>
          <p>
            If your system prompt or RAG context is long and repeated across requests,
            prompt caching saves up to 90% on those input tokens. You pay full price
            the first time; subsequent requests with the same prefix are cached.
          </p>

          <pre className="code-block">{`import anthropic
client = anthropic.Anthropic()

LARGE_SYSTEM = """You are an expert customer support agent for Acme Corp.
[... 5,000 words of product documentation, FAQ, policies ...]
"""

def support_reply(user_message: str) -> str:
    response = client.messages.create(
        model="claude-opus-5",
        max_tokens=512,
        system=[
            {
                "type": "text",
                "text": LARGE_SYSTEM,
                "cache_control": {"type": "ephemeral"}  # cache this!
            }
        ],
        messages=[{"role": "user", "content": user_message}]
    )
    # Check cache hit in response
    usage = response.usage
    print(f"Cache read: {usage.cache_read_input_tokens} tokens")
    print(f"Cache write: {usage.cache_creation_input_tokens} tokens")
    return response.content[0].text

# First call: cache WRITE (full price for system prompt)
# Subsequent calls: cache READ (90% discount on system prompt tokens)`}</pre>
          <div className="info-box">
            <strong>When to use prompt caching:</strong>
            <ul>
              <li>System prompt over 1,024 tokens (minimum cacheable size)</li>
              <li>RAG context that's the same across multiple user turns</li>
              <li>Few-shot examples that don't change per request</li>
              <li>Cache TTL is 5 minutes - keep requests coming to maintain the cache</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Rate Limits & Retry Logic</h2>
          <pre className="code-block">{`import time, anthropic
from anthropic import RateLimitError, APIStatusError

client = anthropic.Anthropic()

def call_with_retry(max_retries: int = 5, **kwargs) -> str:
    for attempt in range(max_retries):
        try:
            r = client.messages.create(**kwargs)
            return r.content[0].text

        except RateLimitError:
            if attempt == max_retries - 1:
                raise
            wait = 2 ** attempt   # 1, 2, 4, 8, 16 seconds
            print(f"Rate limited. Waiting {wait}s (attempt {attempt+1})")
            time.sleep(wait)

        except APIStatusError as e:
            if e.status_code >= 500:  # server error - retry
                time.sleep(2 ** attempt)
            else:
                raise  # 4xx - don't retry (bad request, auth, etc.)

    raise RuntimeError("Max retries exceeded")`}</pre>
        </section>

        <section className="section-card">
          <h2>Observability: What to Log</h2>
          <pre className="code-block">{`# Every production Claude call should log:
{
  "request_id": "uuid",
  "timestamp": "2025-01-15T10:23:11Z",
  "user_id": "user_abc",
  "feature": "support_chat",
  "model": "claude-opus-5",
  "input_tokens": 1240,
  "output_tokens": 312,
  "cache_read_tokens": 980,       # how much was cached
  "latency_ms": 1842,
  "cost_usd": 0.000823,
  "stop_reason": "end_turn",      # or "max_tokens" (bad!)
  "error": null                   # or error message
}

# Alert on:
# - stop_reason == "max_tokens" (increase max_tokens or truncate input)
# - latency_ms > 10000 (p99 spike - investigate)
# - error rate > 1% (API issues or prompt problems)
# - daily cost > threshold (budget breach)`}</pre>
        </section>

        <section className="section-card">
          <h2>Per-User Rate Limiting</h2>
          <pre className="code-block">{`# Simple Redis-based rate limiter (or use Upstash free tier)
import redis, time

r = redis.Redis(host="localhost", port=6379)

def check_rate_limit(user_id: str,
                     limit: int = 20,
                     window_seconds: int = 60) -> bool:
    """Return True if request is allowed, False if rate limited."""
    key = f"ratelimit:{user_id}"
    pipe = r.pipeline()
    pipe.incr(key)
    pipe.expire(key, window_seconds)
    count, _ = pipe.execute()
    return count <= limit

# In your API handler:
def handle_chat(user_id: str, message: str):
    if not check_rate_limit(user_id):
        return {"error": "Too many requests. Try again in a minute."}, 429
    return {"reply": call_with_retry(model="claude-opus-5",
                                      max_tokens=512,
                                      messages=[{"role":"user",
                                                 "content": message}])}`}</pre>
        </section>

        <section className="section-card">
          <h2>Graceful Degradation</h2>
          <div className="info-box">
            <strong>When Claude is slow or unavailable, have a fallback plan:</strong>
            <ul>
              <li><strong>Cached responses</strong> - for high-traffic, repeated queries, cache Claude's output</li>
              <li><strong>Haiku fallback</strong> - if Opus is slow, retry with Haiku at lower quality</li>
              <li><strong>Queue + async</strong> - for non-realtime tasks, queue the job and notify when done</li>
              <li><strong>Partial responses</strong> - stream partial output so users see progress even if it's slow</li>
            </ul>
          </div>
        </section>

        <QuickRef
          title="Lesson 35 Quick Reference"
          items={[
            { term: 'Prompt caching', definition: 'cache_control: {type: "ephemeral"} - 90% discount on repeated context' },
            { term: 'Cache TTL', definition: '5 minutes - keep requests flowing to maintain cache hit' },
            { term: 'Retry logic', definition: 'Exponential backoff: 2^attempt seconds; max 5 retries' },
            { term: 'RateLimitError', definition: 'anthropic.RateLimitError - back off; APIStatusError >= 500 also retry' },
            { term: 'stop_reason max_tokens', definition: 'Bad sign - response was cut off. Increase max_tokens or shorten input' },
            { term: 'Per-user limits', definition: 'Redis INCR + EXPIRE for sliding window rate limiting' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson34', label: 'L34: Multi-Modal: Vision & Docs' }}
          next={{ href: '/level4/lesson36', label: 'L36: Responsible AI for Builders' }}
          currentLessonId="l4-35"
        />
      </main>
    </div>
  )
}
