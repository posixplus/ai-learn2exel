'use client';

import { useState } from 'react';
import Footer from '@/components/layout/Footer';

interface RecommendationCard {
  name: string;
  icon: string;
  company: string;
  best_for: string;
  url: string;
  free_tier: string;
}

const recommendations: Record<string, RecommendationCard> = {
  claude: {
    name: 'Claude',
    icon: '🟣',
    company: 'Anthropic',
    best_for: 'Long-form writing, analysis, document review, coding, nuanced reasoning',
    url: 'claude.ai',
    free_tier: 'Yes',
  },
  chatgpt: {
    name: 'ChatGPT',
    icon: '🟢',
    company: 'OpenAI',
    best_for: 'All-around use, web browsing, coding, image generation',
    url: 'chat.openai.com',
    free_tier: 'Yes',
  },
  gemini: {
    name: 'Gemini',
    icon: '🔵',
    company: 'Google',
    best_for: 'Google Workspace users, research, most generous free tier',
    url: 'gemini.google.com',
    free_tier: 'Very generous',
  },
  deepseek: {
    name: 'DeepSeek',
    icon: '🔴',
    company: 'DeepSeek',
    best_for: 'Free alternative to ChatGPT, strong coding and reasoning',
    url: 'chat.deepseek.com',
    free_tier: 'Yes',
  },
  llama: {
    name: 'Meta Llama / Local AI',
    icon: '📘',
    company: 'Meta',
    best_for: 'Privacy-first users, running AI locally with no data sharing',
    url: 'llama.com or Ollama',
    free_tier: 'Open source',
  },
  perplexity: {
    name: 'Perplexity AI',
    icon: '🔍',
    company: 'Perplexity',
    best_for: 'Real-time web research with sources',
    url: 'perplexity.ai',
    free_tier: 'Yes',
  },
};

interface Question {
  question: string;
  answers: Array<{ text: string; scores: Record<string, number> }>;
}

const questions: Question[] = [
  {
    question: 'What do you mainly want to use AI for?',
    answers: [
      {
        text: 'Writing and editing documents',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'Research and finding current information',
        scores: { claude: 0, chatgpt: 1, gemini: 1, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'Coding and technical tasks',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'Learning and getting explanations',
        scores: { claude: 1, chatgpt: 0, gemini: 1, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'Creative work (images, design briefs)',
        scores: { claude: 0, chatgpt: 1, gemini: 1, deepseek: 0, llama: 0, perplexity: 0 },
      },
    ],
  },
  {
    question: "How important is privacy to you?",
    answers: [
      {
        text: 'Very important — I work with sensitive data',
        scores: { claude: 1, chatgpt: 0, gemini: 0, deepseek: 0, llama: 1, perplexity: 0 },
      },
      {
        text: 'Somewhat important',
        scores: { claude: 1, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: "Not a major concern",
        scores: { claude: 0, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
    ],
  },
  {
    question: "What's your budget?",
    answers: [
      {
        text: 'I want free only',
        scores: { claude: 0, chatgpt: 0, gemini: 1, deepseek: 1, llama: 0, perplexity: 0 },
      },
      {
        text: "I'll pay if it's worth it",
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'I need enterprise/team features',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
    ],
  },
  {
    question: 'Which best describes your work?',
    answers: [
      {
        text: 'I work in Google Workspace (Docs, Gmail, Sheets)',
        scores: { claude: 0, chatgpt: 0, gemini: 1, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'I write code or work in software',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'I do research, analysis, or academic work',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'I create content (marketing, social, writing)',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'I work in healthcare, legal, or finance',
        scores: { claude: 1, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
    ],
  },
  {
    question: 'How do you feel about setup complexity?',
    answers: [
      {
        text: 'Keep it simple — just open a browser tab',
        scores: { claude: 0, chatgpt: 1, gemini: 1, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: "I'm happy to configure things for better results",
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: "I'm technical — I want full control",
        scores: { claude: 0, chatgpt: 0, gemini: 0, deepseek: 0, llama: 1, perplexity: 0 },
      },
    ],
  },
  {
    question: 'Do you need AI to browse the web in real-time?',
    answers: [
      {
        text: 'Yes, I often need current information',
        scores: { claude: 0, chatgpt: 1, gemini: 1, deepseek: 0, llama: 0, perplexity: 1 },
      },
      {
        text: "No, that's not important",
        scores: { claude: 1, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
    ],
  },
  {
    question: 'How long are your typical tasks?',
    answers: [
      {
        text: 'Quick questions, short tasks',
        scores: { claude: 0, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'Long documents, complex analysis',
        scores: { claude: 1, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'Mix of both',
        scores: { claude: 0, chatgpt: 0, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
    ],
  },
  {
    question: 'Which matters more to you?',
    answers: [
      {
        text: 'The most capable AI, even if it costs money',
        scores: { claude: 1, chatgpt: 1, gemini: 0, deepseek: 0, llama: 0, perplexity: 0 },
      },
      {
        text: 'The most generous free tier',
        scores: { claude: 0, chatgpt: 0, gemini: 1, deepseek: 1, llama: 0, perplexity: 0 },
      },
      {
        text: 'Open source / running locally',
        scores: { claude: 0, chatgpt: 0, gemini: 0, deepseek: 0, llama: 1, perplexity: 0 },
      },
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    setShowConfirm(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowConfirm(false);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const calculateScores = (): Record<string, number> => {
    const scores: Record<string, number> = {
      claude: 0,
      chatgpt: 0,
      gemini: 0,
      deepseek: 0,
      llama: 0,
      perplexity: 0,
    };

    answers.forEach((answerIndex, questionIndex) => {
      const answerScores = questions[questionIndex].answers[answerIndex].scores;
      Object.keys(scores).forEach((tool) => {
        scores[tool] += answerScores[tool];
      });
    });

    return scores;
  };

  const getTopRecommendations = (): string[] => {
    const scores = calculateScores();
    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)
      .map(([tool]) => tool);
    return sorted;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowConfirm(false);
  };

  if (showResult) {
    const topTools = getTopRecommendations();
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '2rem 1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯 Your Results</h1>
          <p style={{ fontSize: '1.125rem', color: '#666' }}>
            Based on your answers, here are the best AI tools for you:
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
          {topTools.map((toolKey) => {
            const tool = recommendations[toolKey];
            return (
              <div
                key={toolKey}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  backgroundColor: '#fafafa',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  {tool.icon} {tool.name} ({tool.company})
                </h3>
                <p style={{ marginBottom: '0.75rem', color: '#333' }}>
                  <strong>Best for:</strong> {tool.best_for}
                </p>
                <p style={{ marginBottom: '0.5rem', color: '#333' }}>
                  <strong>URL:</strong> {tool.url}
                </p>
                <p style={{ color: '#333' }}>
                  <strong>Free tier:</strong> {tool.free_tier}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={resetQuiz}
          style={{
            display: 'block',
            margin: '0 auto',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Start Over
        </button>

        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = currentQuestion + 1;

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯 Which AI Should I Use?</h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Answer 8 quick questions to find the best AI tool for your needs.
        </p>
      </div>

      <div
        className="quiz-progress"
        style={{
          height: '0.5rem',
          backgroundColor: '#e5e7eb',
          borderRadius: '0.25rem',
          marginBottom: '2rem',
          overflow: 'hidden',
        }}
      >
        <div
          className="quiz-progress-fill"
          style={{
            height: '100%',
            backgroundColor: '#6366f1',
            width: `${(progress / questions.length) * 100}%`,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1.5rem' }}>
        Question {progress} of {questions.length}
      </p>

      <h2 className="quiz-question" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
        {question.question}
      </h2>

      <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2rem' }}>
        {question.answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            disabled={showConfirm}
            style={{
              padding: '1rem',
              border: '2px solid #ddd',
              borderRadius: '0.5rem',
              backgroundColor: '#fff',
              cursor: showConfirm ? 'default' : 'pointer',
              fontSize: '1rem',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              opacity: showConfirm ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!showConfirm) {
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#ddd';
              e.currentTarget.style.backgroundColor = '#fff';
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>

      {showConfirm && (
        <p style={{ textAlign: 'center', color: '#16a34a', fontSize: '1rem' }}>
          ✓ Got it!
        </p>
      )}

      <Footer />
    </div>
  );
}
