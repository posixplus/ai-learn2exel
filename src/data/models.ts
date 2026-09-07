/**
 * Single source of truth for model names, IDs, prices and context windows
 * referenced across lessons and tool guides.
 *
 * When a vendor ships a new model or changes pricing, update THIS file and
 * bump MODELS_AS_OF. Structured pages (tool comparison, API guide, model
 * lineup lesson, cost tables) read from here; lesson code samples that
 * hard-code an ID should use the *_ID constants below.
 *
 * Prices are USD per 1M tokens, standard tier, as published on each vendor's
 * pricing page on the date below.
 */

export const MODELS_AS_OF = 'September 2026'

export interface ModelInfo {
  /** Marketing name, e.g. "Claude Opus 5" */
  name: string
  /** Short name without vendor, e.g. "Opus 5" */
  short: string
  /** API model ID */
  id: string
  /** USD per 1M input tokens */
  inputPrice: number
  /** USD per 1M output tokens */
  outputPrice: number
  /** Context window in tokens */
  context: number
  /** One-line positioning used in lesson copy */
  role: string
}

// ── Anthropic ────────────────────────────────────────────────────────────────
export const CLAUDE = {
  fable: {
    name: 'Claude Fable 5.1', short: 'Fable 5.1', id: 'claude-fable-5-1',
    inputPrice: 10, outputPrice: 50, context: 1_000_000,
    role: 'Most capable tier. Long-running autonomous agents and the hardest reasoning. Overkill for everyday work.',
  },
  opus: {
    name: 'Claude Opus 5', short: 'Opus 5', id: 'claude-opus-5',
    inputPrice: 5, outputPrice: 25, context: 1_000_000,
    role: 'The Thinker. Complex reasoning, long document analysis, architecture decisions.',
  },
  sonnet: {
    name: 'Claude Sonnet 5', short: 'Sonnet 5', id: 'claude-sonnet-5',
    inputPrice: 2, outputPrice: 10, context: 1_000_000,
    role: 'The Daily Driver. Best balance of quality, speed and cost. Default choice.',
  },
  haiku: {
    name: 'Claude Haiku 4.5', short: 'Haiku 4.5', id: 'claude-haiku-4-5-20251001',
    inputPrice: 1, outputPrice: 5, context: 200_000,
    role: 'The Sprinter. High-volume pipelines, classification, fast structured extraction.',
  },
} as const satisfies Record<string, ModelInfo>

// ── OpenAI ───────────────────────────────────────────────────────────────────
export const OPENAI = {
  flagship: {
    name: 'GPT-5.6 Sol', short: 'GPT-5.6 Sol', id: 'gpt-5.6-sol',
    inputPrice: 5, outputPrice: 30, context: 1_050_000,
    role: 'Flagship tier of the GPT-5.6 family (GA July 2026).',
  },
  mid: {
    name: 'GPT-5.6 Terra', short: 'GPT-5.6 Terra', id: 'gpt-5.6-terra',
    inputPrice: 2, outputPrice: 12, context: 1_050_000,
    role: 'Mid tier. Competes directly with Sonnet 5 on price.',
  },
  small: {
    name: 'GPT-5.6 Luna', short: 'GPT-5.6 Luna', id: 'gpt-5.6-luna',
    inputPrice: 0.2, outputPrice: 1.2, context: 1_050_000,
    role: 'Small tier. Default model on the free ChatGPT plan.',
  },
} as const satisfies Record<string, ModelInfo>

/** Announced Sept 3, 2026. Limited availability at time of writing; not GA. */
export const OPENAI_PREVIEW = 'GPT-6 Astra'

// ── Google ───────────────────────────────────────────────────────────────────
export const GEMINI = {
  pro: {
    name: 'Gemini 3.1 Pro', short: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro',
    inputPrice: 2, outputPrice: 12, context: 1_048_576,
    role: 'Long-context Pro tier.',
  },
  flash: {
    name: 'Gemini 3.8 Flash', short: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash',
    inputPrice: 0.75, outputPrice: 3.75, context: 1_048_576,
    role: 'Current GA flagship (Sept 2026). Fast, cheap, multimodal.',
  },
} as const satisfies Record<string, ModelInfo>

// ── Convenience strings for prose ────────────────────────────────────────────
/** "Opus 5 / Sonnet 5" */
export const CLAUDE_TOP_TWO = `${CLAUDE.opus.short} / ${CLAUDE.sonnet.short}`
/** "Claude Opus 5, Sonnet 5, Haiku 4.5" */
export const CLAUDE_LINEUP = `${CLAUDE.opus.name}, ${CLAUDE.sonnet.short}, ${CLAUDE.haiku.short}`
/** "GPT-5.6, Claude Sonnet 5, Gemini 3.8 Flash" - typical IDE model picker set */
export const IDE_MODEL_SET = `GPT-5.6, ${CLAUDE.sonnet.name}, ${GEMINI.flash.name}`

/** Format a per-1M price pair as "$2/$10" */
export const priceStr = (m: ModelInfo) => `$${m.inputPrice}/$${m.outputPrice}`

/** Format a token count as "200K" or "1M" */
export const ctxStr = (tokens: number) =>
  tokens >= 1_000_000 ? `${Math.round(tokens / 100_000) / 10}M` : `${Math.round(tokens / 1000)}K`

/**
 * Rough blended cost for a job of `tokens` tokens, assuming a 50/50
 * input/output split. Good enough for the "what does this cost" tables.
 */
export const roughCost = (m: ModelInfo, tokens: number) => {
  const usd = (tokens / 1_000_000) * ((m.inputPrice + m.outputPrice) / 2)
  if (usd < 0.01) return `$${usd.toFixed(3)}`
  if (usd < 1) return `$${usd.toFixed(2)}`
  return `$${usd.toFixed(2)}`
}
