'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson37() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-37" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={37}
          duration={90}
          title="Advanced Prompt Evaluation"
          subtitle="Stop guessing whether your prompts are good. Build a test suite and measure it — like real engineering."
        />

        <section className="section-card">
          <h2>Why Evaluation Matters</h2>
          <p>
            Most teams tune prompts by feel — tweak, test manually with 3 examples,
            ship. This works until it doesn't: a prompt change that improves one case
            breaks five others. Evaluation (evals) catches regressions, measures
            improvement, and gives you confidence to iterate fast.
          </p>
          <div className="info-box">
            <strong>What evals give you:</strong>
            <ul>
              <li>Quantitative score for your prompt before and after changes</li>
              <li>Regression detection — did prompt v2 break anything v1 handled?</li>
              <li>Model comparison — is Haiku good enough, or do you need Sonnet?</li>
              <li>Coverage — are edge cases handled, not just happy path?</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Building an Eval Dataset</h2>
          <p>
            An eval dataset is a list of (input, expected_output) pairs. Start small — 
            20 good examples beats 200 mediocre ones.
          </p>

          <pre className="code-block">{`# evals/dataset.json
[
  {
    "id": "triage_001",
    "input": "My invoice from last month is wrong — I was charged twice",
    "expected": {"category": "billing", "priority": "high"},
    "tags": ["billing", "duplicate_charge"]
  },
  {
    "id": "triage_002",
    "input": "How do I export my data to CSV?",
    "expected": {"category": "technical", "priority": "low"},
    "tags": ["technical", "data_export"]
  },
  {
    "id": "triage_003",
    "input": "Your app crashes every time I open it on iOS 17",
    "expected": {"category": "technical", "priority": "high"},
    "tags": ["technical", "crash", "mobile"]
  }
  // ... 17 more examples covering edge cases
]`}</pre>
          <div className="info-box">
            <strong>What makes a good eval dataset:</strong>
            <ul>
              <li>Cover your real distribution — sample from actual production data</li>
              <li>Include edge cases explicitly (ambiguous, short, foreign language inputs)</li>
              <li>Include "hard negatives" — inputs that look like one category but are another</li>
              <li>Tag examples by type so you can see failure patterns per category</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Running Evals: Exact Match + LLM-as-Judge</h2>
          <pre className="code-block">{`import json, anthropic
client = anthropic.Anthropic()

def run_prompt(user_input: str) -> dict:
    """The function under test"""
    r = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=128,
        system="""Classify the support ticket. Return JSON only:
{"category": "billing|technical|feature_request|other",
 "priority": "high|medium|low"}""",
        messages=[{"role": "user", "content": user_input}]
    )
    return json.loads(r.content[0].text)

def exact_match_eval(dataset: list) -> dict:
    """For structured outputs with known ground truth"""
    results = {"total": len(dataset), "correct": 0, "failures": []}
    for example in dataset:
        predicted = run_prompt(example["input"])
        if (predicted["category"] == example["expected"]["category"] and
            predicted["priority"] == example["expected"]["priority"]):
            results["correct"] += 1
        else:
            results["failures"].append({
                "id": example["id"],
                "input": example["input"],
                "expected": example["expected"],
                "got": predicted
            })
    results["accuracy"] = results["correct"] / results["total"]
    return results`}</pre>
        </section>

        <section className="section-card">
          <h2>LLM-as-Judge (for Open-Ended Outputs)</h2>
          <p>
            When outputs are prose (summaries, answers, emails), there's no single
            correct answer. Use Claude itself as the judge — it's surprisingly reliable
            with a well-structured rubric.
          </p>
          <pre className="code-block">{`def llm_judge(question: str, ideal_answer: str,
              actual_answer: str) -> dict:
    """Score actual_answer against ideal on a 1-5 scale."""
    prompt = f"""You are an expert evaluator. Score the ACTUAL answer
against the IDEAL answer on these dimensions (1-5 each):
- Accuracy: Does it contain correct information?
- Completeness: Does it cover the key points?
- Clarity: Is it clear and well-written?
- Conciseness: Does it avoid unnecessary filler?

Question: {question}
Ideal answer: {ideal_answer}
Actual answer: {actual_answer}

Return JSON only:
{{"accuracy": N, "completeness": N, "clarity": N,
  "conciseness": N, "overall": N, "reasoning": "one sentence"}}"""

    r = client.messages.create(
        model="claude-opus-4-5",   # use a strong model as judge
        max_tokens=256,
        messages=[{"role": "user", "content": prompt}]
    )
    return json.loads(r.content[0].text)

# Score an entire dataset
scores = [
    llm_judge(ex["question"], ex["ideal"], run_prompt(ex["question"]))
    for ex in open_ended_dataset
]
avg_overall = sum(s["overall"] for s in scores) / len(scores)
print(f"Average score: {avg_overall:.2f}/5")`}</pre>
        </section>

        <section className="section-card">
          <h2>Prompt Versioning & CI</h2>
          <pre className="code-block">{`# prompts/v2_support_triage.py
SYSTEM_PROMPT = """..."""  # version controlled in Git

# Run evals on every PR
# .github/workflows/evals.yml
# - python -m pytest evals/test_support_triage.py --threshold=0.85

import pytest
from evals.runner import exact_match_eval
from evals.dataset import load_dataset

def test_support_triage_accuracy():
    dataset = load_dataset("support_triage")
    results = exact_match_eval(dataset)
    assert results["accuracy"] >= 0.85, (
        f"Accuracy {results['accuracy']:.0%} below 85% threshold. "
        f"Failures: {results['failures']}"
    )`}</pre>
          <div className="info-box">
            <strong>Eval workflow for prompt changes:</strong>
            <ul>
              <li>Run evals on current prompt (baseline score)</li>
              <li>Make prompt changes in a branch</li>
              <li>Run evals again — compare to baseline</li>
              <li>Only merge if new score is equal or better</li>
              <li>Add new failing cases to the dataset before fixing them</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-on: Build Your First Eval Suite</h2>
          <div className="hands-on-box">
            <p><strong>Challenge:</strong> Build a 20-example eval suite for any prompt you've built in this course.</p>
            <ol>
              <li>Pick a prompt (support triage, summariser, extractor, etc.)</li>
              <li>Create 20 test cases: 10 typical, 5 edge cases, 5 hard negatives</li>
              <li>Write the exact_match_eval or llm_judge runner</li>
              <li>Run it — what's your baseline accuracy?</li>
              <li>Change one thing in the prompt and run again — did it improve?</li>
            </ol>
            <p><strong>Stretch:</strong> Run the same eval against claude-haiku vs claude-sonnet vs claude-opus. Plot the accuracy vs cost tradeoff to find the optimal model for your use case.</p>
          </div>
        </section>

        <QuickRef
          title="Lesson 37 Quick Reference"
          items={[
            { term: 'Eval dataset', definition: '20+ (input, expected) pairs — cover edge cases, not just happy path' },
            { term: 'Exact match', definition: 'For structured outputs — compare predicted to expected dict/JSON' },
            { term: 'LLM-as-judge', definition: 'Use strong Claude to score prose outputs on a rubric (1-5 scale)' },
            { term: 'Eval in CI', definition: 'pytest + threshold check on every PR — catch regressions before they ship' },
            { term: 'Prompt versioning', definition: 'Store prompts in Git — every change is reviewable and reversible' },
            { term: 'Model comparison eval', definition: 'Run same dataset against Haiku/Sonnet/Opus to find cost/quality sweet spot' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson36', label: 'L36: Responsible AI for Builders' }}
          next={{ href: '/level4/capstone', label: 'L4 Capstone: Ship Your AI Product' }}
          currentLessonId="l4-37"
        />
      </main>
    </div>
  )
}
