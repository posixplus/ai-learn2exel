'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'
import Callout from '@/components/lesson/Callout'
import HandsOn from '@/components/lesson/HandsOn'
import { CLAUDE } from '@/data/models'

const REPO = 'https://github.com/posixplus/learn2exel-dayflow'

export default function Lesson81() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-81" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={81}
          duration={60}
          title="The Agent Loop From Scratch"
          subtitle="No framework, no magic: the 60 lines everything else sits on"
        />

        <section className="section-card">
          <h2>What you will be able to do</h2>
          <ul>
            <li>Write the Messages API loop by hand: send, read <code>stop_reason</code>, execute <code>tool_use</code>, return <code>tool_result</code>, repeat</li>
            <li>Add the three termination guards every loop needs: max steps, token budget, and the model&apos;s own <code>end_turn</code></li>
            <li>Run Dayflow in MOCK mode against JSON fixtures so the loop is deterministic and costs nothing to iterate on</li>
          </ul>
          <div className="info-box">
            <strong>Companion repo:</strong> <a href={REPO} target="_blank" rel="noreferrer">posixplus/learn2exel-dayflow</a>.
            Run <code>git checkout lesson-81</code> for this lesson&apos;s exact code. Python is inline below; the
            TypeScript mirror is in <code>ts/</code> and differs only where noted.
          </div>
        </section>

        <section className="section-card">
          <h2>Why start without the SDK</h2>
          <p>
            The Claude Agent SDK (lesson 84) will absorb everything you write today. That is the point of
            writing it first. When the SDK later retries a call, checkpoints a run, or refuses a tool, you
            will know exactly which line of <em>your</em> loop it replaced and why. Engineers who skip this
            step end up debugging a black box in lesson 91.
          </p>
          <p>
            An agent, stripped of marketing, is a <strong>while loop around one API call</strong>. The model
            either answers or asks you to run a tool. You run it, hand back the result, and call again.
            Everything else in this track (permissions, state, evals, tracing) is a hook into that loop.
          </p>
        </section>

        <section className="section-card">
          <h2>The five stop reasons</h2>
          <p>Every Messages API response carries a <code>stop_reason</code>. Your loop is a switch on it.</p>
          <div className="code-block">
            <pre>{`end_turn      the model finished. Return the text. This is the only clean exit.
tool_use      the model wants tools run. Execute them, return results, loop.
max_tokens    the output was cut off. Treat as a FAILURE, not a result.
stop_sequence you set a custom stop string and it fired. Rare in agents.
refusal       the model declined for safety reasons. Surface it, do not retry.`}</pre>
          </div>
          <Callout type="warning" title="max_tokens is not a partial success">
            A response cut off mid-JSON or mid-sentence looks like a result and is not one. Dayflow raises
            on it. If you find yourself &quot;handling&quot; truncated output, raise <code>max_tokens</code> or
            ask for less; do not paper over it.
          </Callout>
        </section>

        <section className="section-card">
          <h2>The loop, line by line</h2>
          <p>This is <code>dayflow/loop.py</code> with the logging stripped. Read it top to bottom once before we break it apart.</p>
          <div className="code-block">
            <pre>{`def run(system, user, *, model="${CLAUDE.sonnet.id}",
        max_steps=10, token_budget=60_000, max_tokens=2_048, client=None):
    client = client or anthropic.Anthropic()
    messages = [{"role": "user", "content": user}]
    used_in = used_out = 0

    for step in range(1, max_steps + 1):
        resp = client.messages.create(
            model=model, max_tokens=max_tokens, system=system,
            tools=TOOLS, messages=messages,
        )
        used_in  += resp.usage.input_tokens
        used_out += resp.usage.output_tokens

        # Guard 2: token budget, checked after every call
        if used_in + used_out > token_budget:
            raise LoopError(f"token budget exceeded at step {step}")

        if resp.stop_reason == "end_turn":
            return "".join(b.text for b in resp.content if b.type == "text")
        if resp.stop_reason == "max_tokens":
            raise LoopError("model hit max_tokens; raise it or ask for less")
        if resp.stop_reason != "tool_use":
            raise LoopError(f"unexpected stop_reason {resp.stop_reason!r}")

        # The assistant turn goes into history EXACTLY as returned
        messages.append({"role": "assistant", "content": resp.content})

        results = []
        for block in resp.content:
            if block.type != "tool_use":
                continue
            output = dispatch(block.name, block.input)       # a JSON string
            results.append({"type": "tool_result",
                            "tool_use_id": block.id, "content": output})

        # Tool results go back in a USER turn, ids matched one to one
        messages.append({"role": "user", "content": results})

    # Guard 1: max steps
    raise LoopError(f"no end_turn after {max_steps} steps; the model is looping")`}</pre>
          </div>

          <h3>Four things people get wrong</h3>
          <ol>
            <li>
              <strong>Dropping the assistant turn.</strong> The <code>tool_use</code> blocks must go back into
              history verbatim. If you only append the tool results, the API rejects the request because a
              <code>tool_result</code> has no matching <code>tool_use</code>.
            </li>
            <li>
              <strong>One tool_result per tool_use, same order.</strong> The model can request several tools in
              one turn (it did, in the run below). Every <code>tool_use_id</code> needs its result, in a single
              user message.
            </li>
            <li>
              <strong>Tool results are data.</strong> <code>dispatch()</code> returns JSON, never a sentence about the
              JSON. Models read structure far more reliably than prose, and lesson 89&apos;s evals will parse it.
            </li>
            <li>
              <strong>Unknown tool is a result, not an exception.</strong> If the model hallucinates a tool name,
              you return <code>{`{"error": "unknown tool: x"}`}</code> and let it correct itself. Raising here
              kills a recoverable run.
            </li>
          </ol>
        </section>

        <section className="section-card">
          <h2>Termination guards: steps, tokens, done</h2>
          <p>
            A loop with no exit is a bill with no ceiling. Dayflow has three guards, and every agent you
            ship should have the same three, whatever framework you use.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>end_turn (the model&apos;s guard)</strong>
              <p>The only success exit. The model decides it is done. You cannot force this; you can only make it likely with a clear system prompt that says what &quot;done&quot; looks like.</p>
            </div>
            <div className="step">
              <strong>max_steps (your guard against loops)</strong>
              <p>A model that keeps calling <code>read_inbox</code> because a result confused it will do so forever. Ten steps is generous for a brief. Raise it per task, never globally.</p>
            </div>
            <div className="step">
              <strong>token_budget (your guard against cost)</strong>
              <p>Cumulative input plus output across the whole run. Input dominates: every step re-sends the entire history, so step 5 costs more than step 1 even if the model says less. Checked after each call, before acting on the response.</p>
            </div>
          </div>
          <Callout type="tip" title="Order matters">
            The budget check runs before the <code>end_turn</code> check on purpose. A run that finished but blew
            the budget is still a run that blew the budget; you want to know. In lesson 90 this becomes a
            per-feature ledger instead of a hard stop.
          </Callout>
        </section>

        <section className="section-card">
          <h2>Dayflow v0: a real morning brief from fixtures</h2>
          <p>
            <code>MOCK=1</code> is the default in <code>.env.example</code>. The three tools read from
            <code>fixtures/</code>: five emails (two need replies, one is a promo, one is an appointment
            reminder, one is a school deadline), a week of calendar, four tasks. Deterministic, free, and the
            same files become the eval golden set in lesson 89.
          </p>
          <div className="code-block">
            <pre>{`$ dayflow brief -v
[step 1] stop=tool_use in=889 out=169
    -> read_inbox({'limit': 20}) 1247 chars
    -> read_calendar({'days': 7}) 696 chars
    -> read_tasks({'include_done': False}) 272 chars
[step 2] stop=end_turn in=2185 out=1191
## Today
- 13:00–13:30 UTC — Weekly staff sync (team)

## Needs a reply
- **Priya (Q3 vendor review)** — needs your sign-off by Thursday ...
- **Sam K. (Partner Labs one-pager)** — wants edits before Wednesday ...

## Deadlines this week
1. **Sep 8** — Send Sept newsletter draft (task)
2. **Sep 10 (Thu)** — Confirm vendor sign-off for Priya (email deadline)
...

[2 steps · 3 tool calls · 3074 in / 1360 out]`}</pre>
          </div>
          <h3>Read the trajectory, not just the output</h3>
          <ul>
            <li><strong>Step 1 requested all three tools at once.</strong> That is parallel tool use. Your loop handled it because it iterates over every <code>tool_use</code> block and returns all results in one user turn.</li>
            <li><strong>Step 2&apos;s input is 2.5x step 1&apos;s.</strong> The three JSON results are now in history. This is why the token budget is cumulative.</li>
            <li><strong>It filtered the promo and the reminder without being told which were which.</strong> The prompt said &quot;skip newsletters and promotions&quot;; the model generalised. Good, and also unverified until lesson 89 writes an eval for it.</li>
            <li><strong>It asked for <code>days=7</code> when &quot;Today&quot; needed 1.</strong> Because the prompt also asks about deadlines this week. Reasonable here; lesson 82 makes that trade-off explicit in the tool design instead of leaving it to inference.</li>
          </ul>
          <p>Cost of that run on {CLAUDE.sonnet.short}: about 4.4K tokens, roughly two cents.</p>
        </section>

        <HandsOn
          title="Break the loop on purpose"
          duration="25 min"
          description="You understand a guard when you have watched it fire. Each of these is a one-line change; revert between them."
          steps={[
            'Run `pytest` first. Six tests, no API key needed: they use a fake client. Read tests/test_loop.py and match each test to a guard.',
            'Run `dayflow brief --max-steps 1`. The model asks for tools in step 1 and never gets to answer. Read the LoopError message. That is Guard 1.',
            'Run `dayflow brief --token-budget 2000`. Step 1 alone is ~1,050 tokens; step 2 pushes past 2,000. Guard 2 fires after the call that overspent. Note that the money was already spent; the guard limits damage, it does not prevent it.',
            'In dayflow/loop.py, comment out the line that appends the assistant turn to messages. Run the brief. Read the 400 error from the API carefully; it tells you exactly which tool_result has no matching tool_use.',
            'Restore the line. In dayflow/tools.py, change the read_inbox handler to raise ValueError("inbox unavailable"). Run again. Notice the loop does not crash: dispatch() returns the error as JSON and the model tells you the inbox was unavailable. That is lesson 91 in miniature.',
            'TypeScript mirror: cd ts && npm run brief -- -v. Same trajectory, same two steps. Diff ts/src/loop.ts against dayflow/loop.py; the only structural difference is that the TS SDK types tool_result blocks explicitly.',
          ]}
        />

        <section className="section-card">
          <h2>TypeScript mirror: what differs</h2>
          <ul>
            <li>The SDK is async; the loop is <code>for ... await</code>. Same shape otherwise.</li>
            <li><code>resp.content</code> is a discriminated union. Narrow on <code>block.type</code> before reading <code>block.text</code> or <code>block.input</code>.</li>
            <li>Tool results are typed as <code>ToolResultBlockParam[]</code>. The type will not let you forget <code>tool_use_id</code>, which is the most common Python mistake.</li>
          </ul>
        </section>

        <QuickRef title="Lesson 81 Quick Reference" items={[
          { term: 'Agent loop', definition: 'while: call API; if end_turn return; if tool_use run tools and append results; else raise.' },
          { term: 'stop_reason', definition: 'end_turn = done. tool_use = run tools. max_tokens = failure. refusal = surface it.' },
          { term: 'History rule', definition: 'Append the assistant turn verbatim (tool_use blocks included), then a user turn with one tool_result per tool_use_id.' },
          { term: 'Guard 1: max_steps', definition: 'Hard cap on iterations. Catches models that loop on a confusing result.' },
          { term: 'Guard 2: token_budget', definition: 'Cumulative in+out across the run. Input grows every step because history is re-sent.' },
          { term: 'Tool results are data', definition: 'Return JSON. Return errors as JSON too, so the model can recover.' },
          { term: 'MOCK=1', definition: 'Fixture adapters. Same interface as the real Google adapters in lesson 87.' },
        ]} />

        <LessonNav currentLessonId="l10-81" />
      </main>
    </div>
  )
}
