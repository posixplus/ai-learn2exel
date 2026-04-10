'use client';

import { useState, useMemo } from 'react';
import Footer from '@/components/layout/Footer';

interface Prompt {
  id: string;
  title: string;
  profession: string;
  category: string;
  prompt: string;
  tags: string[];
}

const prompts: Prompt[] = [
  {
    id: 'teach-quiz-1',
    title: 'Create a Multiple Choice Quiz',
    profession: 'teacher',
    category: 'teaching',
    prompt:
      'Create a 15-question multiple choice quiz on [TOPIC] for [GRADE LEVEL] students. Include an answer key. Each question should test understanding, not just memorization.',
    tags: ['assessment', 'education', 'quiz'],
  },
  {
    id: 'teach-lesson-1',
    title: 'Design a Lesson Plan',
    profession: 'teacher',
    category: 'teaching',
    prompt:
      'Create a 45-minute lesson plan on [TOPIC] for [GRADE LEVEL]. Include: learning objectives, hook/introduction, 3 main teaching points with examples, guided practice, independent practice, and closure. Make it engaging and age-appropriate.',
    tags: ['lesson', 'planning', 'teaching'],
  },
  {
    id: 'teach-explain-1',
    title: 'Explain a Difficult Concept',
    profession: 'teacher',
    category: 'teaching',
    prompt:
      'Explain [CONCEPT] in a way that [GRADE LEVEL] students can understand. Use analogies, real-world examples, and avoid jargon. Keep it to 3-4 paragraphs. End with one thought-provoking question.',
    tags: ['explanation', 'teaching', 'comprehension'],
  },
  {
    id: 'teach-rubric-1',
    title: 'Create an Evaluation Rubric',
    profession: 'teacher',
    category: 'teaching',
    prompt:
      'Create a detailed rubric for grading [ASSIGNMENT TYPE] on [TOPIC]. Include 4 criteria (each weighted differently), with 4 performance levels (Exemplary, Proficient, Developing, Beginning). Make specific, measurable descriptors.',
    tags: ['assessment', 'rubric', 'grading'],
  },
  {
    id: 'teach-engage-1',
    title: 'Create Engagement Strategies',
    profession: 'teacher',
    category: 'teaching',
    prompt:
      'I teach [TOPIC] to [GRADE LEVEL] and some students are disengaged. Suggest 5 specific, classroom-tested strategies to increase participation and motivation. For each, explain why it works and how to implement it.',
    tags: ['engagement', 'motivation', 'classroom'],
  },
  {
    id: 'teach-diff-1',
    title: 'Differentiate Instruction',
    profession: 'teacher',
    category: 'teaching',
    prompt:
      'I need to teach [TOPIC] to a mixed-ability class. Design 3 different learning pathways: one for struggling students, one for on-level, and one for advanced. Each should take about 30 minutes.',
    tags: ['differentiation', 'inclusive', 'teaching'],
  },
  {
    id: 'student-study-1',
    title: 'Create a Study Guide',
    profession: 'student',
    category: 'learning',
    prompt:
      'Create a study guide for an exam on [TOPIC]. Include: key terms with definitions, main concepts with explanations, practice questions (with answers), and common mistakes to avoid. Format it for easy scanning.',
    tags: ['study', 'exam', 'learning'],
  },
  {
    id: 'student-summary-1',
    title: 'Summarize Key Points',
    profession: 'student',
    category: 'learning',
    prompt:
      'Summarize the key points from [CHAPTER/ARTICLE/READING] in a way I can understand. Use bullet points and simple language. Include: main idea, 3-5 key details, why it matters, and one question it raises.',
    tags: ['summary', 'comprehension', 'learning'],
  },
  {
    id: 'student-essay-1',
    title: 'Outline an Essay',
    profession: 'student',
    category: 'writing',
    prompt:
      'Create an outline for an essay on [TOPIC] with the thesis: [THESIS STATEMENT]. Include: introduction hook, 3 body sections (with supporting arguments), counterargument, and conclusion. Keep it concise.',
    tags: ['essay', 'writing', 'planning'],
  },
  {
    id: 'student-explain-1',
    title: 'Explain a Concept I Don\'t Get',
    profession: 'student',
    category: 'learning',
    prompt:
      'I don\'t understand [CONCEPT]. Explain it like I\'m smart but new to the subject. Use simple language, real-world examples, and an analogy. Then give me one practice problem to test my understanding.',
    tags: ['explanation', 'learning', 'tutoring'],
  },
  {
    id: 'student-vocab-1',
    title: 'Build Vocabulary',
    profession: 'student',
    category: 'learning',
    prompt:
      'For each of these terms: [LIST TERMS], provide: a simple definition, an example of it in a sentence, and a memory trick to remember it. Make the memory tricks creative and memorable.',
    tags: ['vocabulary', 'language', 'learning'],
  },
  {
    id: 'doctor-explain-1',
    title: 'Write a Patient-Friendly Explanation',
    profession: 'healthcare',
    category: 'communication',
    prompt:
      'Write a patient-friendly explanation of [DIAGNOSIS] in plain language. Avoid medical jargon. Include: what it is, why it happens, what treatment involves, what the patient can do at home, and when to call the doctor. 200-250 words.',
    tags: ['patient-education', 'healthcare', 'communication'],
  },
  {
    id: 'doctor-note-1',
    title: 'Structure a Clinical Note',
    profession: 'healthcare',
    category: 'documentation',
    prompt:
      'Help me structure a clinical note for a patient visit for [CHIEF COMPLAINT]. Include: relevant history, physical examination findings, differential diagnosis, assessment, and plan. Keep it concise but complete.',
    tags: ['documentation', 'healthcare', 'clinical'],
  },
  {
    id: 'doctor-consent-1',
    title: 'Explain a Procedure in Consent Terms',
    profession: 'healthcare',
    category: 'communication',
    prompt:
      'Write a procedure explanation for informed consent on [PROCEDURE]. Include: what it is, why we\'re doing it, how it works (step-by-step), common risks, benefits, alternatives, and recovery expectations. Make it understandable for a non-medical person.',
    tags: ['informed-consent', 'healthcare', 'communication'],
  },
  {
    id: 'doctor-research-1',
    title: 'Summarize Research for Clinical Use',
    profession: 'healthcare',
    category: 'research',
    prompt:
      'Summarize this research on [TREATMENT/CONDITION] for a busy clinician. Include: study design, key findings, clinical significance, limitations, and one-sentence bottom line on whether it changes practice.',
    tags: ['research', 'evidence', 'healthcare'],
  },
  {
    id: 'doctor-drug-1',
    title: 'Create a Drug Interaction Checker',
    profession: 'healthcare',
    category: 'reference',
    prompt:
      'Check for potential interactions between these medications: [LIST DRUGS]. For each interaction, note: severity (major/moderate/minor), mechanism, monitoring needed, and clinical implications.',
    tags: ['medications', 'safety', 'healthcare'],
  },
  {
    id: 'eng-code-review-1',
    title: 'Review Code and Suggest Improvements',
    profession: 'developer',
    category: 'coding',
    prompt:
      'Review this code and provide: 1) A plain English explanation of what it does, 2) Any bugs or edge cases you spot, 3) 2-3 specific improvements for readability. Code: [PASTE CODE]',
    tags: ['code-review', 'refactoring', 'coding'],
  },
  {
    id: 'eng-debug-1',
    title: 'Help Debug Code',
    profession: 'developer',
    category: 'coding',
    prompt:
      'I\'m getting this error: [ERROR MESSAGE] in this code: [PASTE CODE]. What\'s causing it? Walk me through how to fix it step-by-step, explaining the root cause and why the fix works.',
    tags: ['debugging', 'troubleshooting', 'coding'],
  },
  {
    id: 'eng-explain-1',
    title: 'Explain a Programming Concept',
    profession: 'developer',
    category: 'learning',
    prompt:
      'Explain [PROGRAMMING CONCEPT] in a way that clicks. Start with what it does, why we use it, then show a simple example. What are the common mistakes people make with it?',
    tags: ['learning', 'programming', 'explanation'],
  },
  {
    id: 'eng-test-1',
    title: 'Write Unit Tests',
    profession: 'developer',
    category: 'coding',
    prompt:
      'Write comprehensive unit tests for this function: [PASTE FUNCTION]. Test happy path, edge cases, and error conditions. Use [TESTING FRAMEWORK]. Make test names descriptive.',
    tags: ['testing', 'quality', 'coding'],
  },
  {
    id: 'eng-api-1',
    title: 'Design an API Endpoint',
    profession: 'developer',
    category: 'architecture',
    prompt:
      'Design a REST API endpoint for [USE CASE]. Specify: HTTP method, URL path, request body (with example), response body (with example), error cases, and status codes. Keep it RESTful and intuitive.',
    tags: ['api', 'design', 'architecture'],
  },
  {
    id: 'eng-refactor-1',
    title: 'Plan a Refactoring',
    profession: 'developer',
    category: 'coding',
    prompt:
      'I need to refactor [DESCRIBE CODE/MODULE]. It has [CURRENT PROBLEMS]. Create a refactoring plan: what to change, in what order, how to test each step, and what risks to watch for.',
    tags: ['refactoring', 'quality', 'planning'],
  },
  {
    id: 'bus-brief-1',
    title: 'Create a Meeting Briefing',
    profession: 'business',
    category: 'communication',
    prompt:
      'I have a meeting with [CLIENT/STAKEHOLDER] tomorrow about [TOPIC]. Write me a 5-point briefing covering their likely priorities, concerns, and the key points I should make. Add a recommended opening line.',
    tags: ['preparation', 'communication', 'business'],
  },
  {
    id: 'bus-proposal-1',
    title: 'Draft a Business Proposal',
    profession: 'business',
    category: 'writing',
    prompt:
      'Draft a short proposal to [CLIENT/STAKEHOLDER] for [PROJECT/SOLUTION]. Include: problem statement, proposed solution (3 key elements), timeline, investment/cost, expected outcomes, and next steps. Keep it to 1 page.',
    tags: ['proposal', 'sales', 'business'],
  },
  {
    id: 'bus-email-1',
    title: 'Write a Professional Email',
    profession: 'business',
    category: 'communication',
    prompt:
      'Write a professional email to [RECIPIENT] about [TOPIC]. Tone: [FORMAL/FRIENDLY/URGENT]. Goal: [WHAT YOU WANT TO ACHIEVE]. Keep it concise (under 200 words) and end with a clear call to action.',
    tags: ['email', 'communication', 'business'],
  },
  {
    id: 'bus-strategy-1',
    title: 'Develop a Business Strategy',
    profession: 'business',
    category: 'planning',
    prompt:
      'Help me develop a strategy for [BUSINESS GOAL]. Walk me through: 1) Current state, 2) Desired future state, 3) Key challenges, 4) 3-4 strategic initiatives, 5) Success metrics, 6) Timeline.',
    tags: ['strategy', 'planning', 'business'],
  },
  {
    id: 'bus-pitch-1',
    title: 'Create a Pitch Deck Outline',
    profession: 'business',
    category: 'communication',
    prompt:
      'Create a 10-slide pitch deck outline for [PRODUCT/SERVICE] to [AUDIENCE]. Each slide: title, key talking points (3-5 bullets), visual idea. Make it compelling and data-driven where possible.',
    tags: ['pitch', 'presentation', 'business'],
  },
  {
    id: 'bus-problem-1',
    title: 'Solve a Business Problem',
    profession: 'business',
    category: 'analysis',
    prompt:
      'We\'re facing [BUSINESS PROBLEM]. Give me a structured analysis: root causes (3-5), impact, 4-5 possible solutions (with pros/cons), recommendation, and implementation steps.',
    tags: ['problem-solving', 'analysis', 'business'],
  },
  {
    id: 'res-lit-review-1',
    title: 'Write a Literature Review',
    profession: 'researcher',
    category: 'research',
    prompt:
      'Help me write a literature review on [TOPIC]. Organize it: background, current knowledge (grouped by theme), gaps, controversies, and implications for future research. Cite 5-7 key sources.',
    tags: ['research', 'academic', 'writing'],
  },
  {
    id: 'res-methodology-1',
    title: 'Design a Research Methodology',
    profession: 'researcher',
    category: 'research',
    prompt:
      'Design a research methodology for [RESEARCH QUESTION]. Cover: research design, population/sample, data collection method, variables, analysis plan, and potential limitations. Make it rigorous and feasible.',
    tags: ['research', 'methodology', 'planning'],
  },
  {
    id: 'res-analysis-1',
    title: 'Analyze Research Data',
    profession: 'researcher',
    category: 'research',
    prompt:
      'I have [DATA TYPE] on [TOPIC]. What statistical tests or analyses would be most appropriate? Walk me through: what test, why it\'s right, what it tells us, how to interpret results, and what to report.',
    tags: ['analysis', 'research', 'data'],
  },
  {
    id: 'res-abstract-1',
    title: 'Write an Abstract',
    profession: 'researcher',
    category: 'writing',
    prompt:
      'Write an abstract (200-250 words) for a study on [TOPIC]. Include: background (1 sentence), research question (1 sentence), methods (2-3 sentences), results (2-3 sentences), implications (1-2 sentences).',
    tags: ['abstract', 'research', 'writing'],
  },
  {
    id: 'res-critique-1',
    title: 'Critique a Research Paper',
    profession: 'researcher',
    category: 'research',
    prompt:
      'Critique this research paper on [TOPIC] and [BRIEF SUMMARY]. Evaluate: research question, methodology, results, conclusions. Highlight: strengths, weaknesses, limitations, and implications for the field.',
    tags: ['critique', 'research', 'analysis'],
  },
  {
    id: 'res-grant-1',
    title: 'Write a Grant Proposal Outline',
    profession: 'researcher',
    category: 'writing',
    prompt:
      'Create an outline for a grant proposal on [RESEARCH TOPIC] to [FUNDING AGENCY]. Include sections: specific aims, background/significance, innovation, research design/methods, timeline, budget justification.',
    tags: ['grants', 'proposal', 'research'],
  },
  {
    id: 'cre-content-1',
    title: 'Create Content Ideas',
    profession: 'creative',
    category: 'creative',
    prompt:
      'Generate 10 unique content ideas for [PLATFORM] aimed at [AUDIENCE] interested in [TOPIC]. For each: title, hook, main message, and call-to-action. Make them engaging and shareable.',
    tags: ['content', 'ideas', 'creative'],
  },
  {
    id: 'cre-copy-1',
    title: 'Write Compelling Copy',
    profession: 'creative',
    category: 'writing',
    prompt:
      'Write persuasive copy for [PRODUCT/SERVICE] to convince [AUDIENCE] to [DESIRED ACTION]. Hook them in the first line, explain the benefit (not features), address a concern, and end with a strong CTA.',
    tags: ['copywriting', 'marketing', 'creative'],
  },
  {
    id: 'cre-story-1',
    title: 'Develop a Brand Story',
    profession: 'creative',
    category: 'creative',
    prompt:
      'Help me develop a compelling brand story for [COMPANY/PRODUCT]. It should: explain the origin (why it was created), the mission, what problem it solves, and why the audience should care. 150-200 words.',
    tags: ['branding', 'storytelling', 'creative'],
  },
  {
    id: 'cre-social-1',
    title: 'Create Social Media Posts',
    profession: 'creative',
    category: 'writing',
    prompt:
      'Create 5 social media posts for [PLATFORM] on [TOPIC]. Each should: hook the audience in the first line, include relevant emojis, be platform-appropriate (length, tone), and include a hashtag strategy.',
    tags: ['social-media', 'marketing', 'creative'],
  },
  {
    id: 'cre-design-brief-1',
    title: 'Write a Design Brief',
    profession: 'creative',
    category: 'creative',
    prompt:
      'Write a design brief for [DESIGN PROJECT]. Include: project goal, target audience, style direction (3-5 adjectives), key design elements, technical specs, timeline, and examples of similar work you like.',
    tags: ['design', 'brief', 'creative'],
  },
  {
    id: 'cre-script-1',
    title: 'Write a Video Script',
    profession: 'creative',
    category: 'writing',
    prompt:
      'Write a [LENGTH] video script on [TOPIC] for [PLATFORM]. Include: hook (first 5 seconds), main content (3-5 key points), visual cues, and call-to-action. Make it conversational and engaging.',
    tags: ['video', 'scripting', 'creative'],
  },
  {
    id: 'everyone-brainstorm-1',
    title: 'Brainstorm Ideas',
    profession: 'everyone',
    category: 'planning',
    prompt:
      'Help me brainstorm ideas for [PROJECT/PROBLEM]. Generate 15-20 ideas, no matter how wild. Don\'t evaluate yet—just list possibilities. Then pick the 3 most promising and develop them further.',
    tags: ['brainstorm', 'ideas', 'planning'],
  },
  {
    id: 'everyone-outline-1',
    title: 'Create a Project Outline',
    profession: 'everyone',
    category: 'planning',
    prompt:
      'Create a detailed outline for [PROJECT]. Structure: goal, key milestones, deliverables, timeline, resources needed, risks, and success metrics. Make it actionable.',
    tags: ['planning', 'project', 'outline'],
  },
  {
    id: 'everyone-decision-1',
    title: 'Make a Decision Framework',
    profession: 'everyone',
    category: 'analysis',
    prompt:
      'I need to decide between [OPTION A] and [OPTION B]. Create a decision framework: list key criteria, weight them by importance, score each option against criteria, then recommend the best choice with reasoning.',
    tags: ['decision', 'analysis', 'planning'],
  },
  {
    id: 'everyone-feedback-1',
    title: 'Give Constructive Feedback',
    profession: 'everyone',
    category: 'communication',
    prompt:
      'Help me give constructive feedback to [PERSON] on [SPECIFIC BEHAVIOR/WORK]. Structure: what they did well, what could improve, how they can improve it, and encouragement. Keep it kind but honest.',
    tags: ['feedback', 'communication', 'leadership'],
  },
  {
    id: 'everyone-learn-1',
    title: 'Create a Learning Plan',
    profession: 'everyone',
    category: 'learning',
    prompt:
      'Create a learning plan to master [SKILL]. Include: why it matters, core concepts to learn (5-7), learning resources (books, courses, practice), timeline (weeks), milestones, and how to measure progress.',
    tags: ['learning', 'growth', 'planning'],
  },
  {
    id: 'everyone-summary-1',
    title: 'Summarize Anything',
    profession: 'everyone',
    category: 'writing',
    prompt:
      'Summarize [TEXT/ARTICLE/VIDEO/CONCEPT] in [LENGTH: short/medium/long]. Include: main idea, key points, why it matters, and one key takeaway for me. Use clear language.',
    tags: ['summary', 'writing', 'learning'],
  },
  {
    id: 'everyone-speech-1',
    title: 'Write a Speech or Presentation',
    profession: 'everyone',
    category: 'writing',
    prompt:
      'Write a [LENGTH] speech/presentation on [TOPIC] for [AUDIENCE]. Include: attention-grabbing opening, [NUMBER] main points with examples, transitions, memorable closing. Tone: [FORMAL/CASUAL/INSPIRING].',
    tags: ['speaking', 'presentation', 'writing'],
  },
  {
    id: 'everyone-email-template-1',
    title: 'Create an Email Template',
    profession: 'everyone',
    category: 'communication',
    prompt:
      'Create a reusable email template for [SITUATION]. Structure: subject line, greeting, opening hook, main message (clear and concise), call-to-action, closing. Make it professional and warm.',
    tags: ['email', 'template', 'communication'],
  },
  {
    id: 'everyone-translate-1',
    title: 'Simplify Complex Information',
    profession: 'everyone',
    category: 'writing',
    prompt:
      'I don\'t understand [COMPLEX TOPIC/JARGON]. Explain it simply: what it is, why it matters, how it works, and a real-world example. Avoid technical language.',
    tags: ['explanation', 'simplification', 'communication'],
  },
];

export default function PromptLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const professions = [
    'All',
    'teacher',
    'student',
    'healthcare',
    'engineer',
    'developer',
    'business',
    'researcher',
    'creative',
    'everyone',
  ];

  const filtered = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter = activeFilter === 'All' || prompt.profession === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const professionCounts = {
    All: prompts.length,
    teacher: prompts.filter((p) => p.profession === 'teacher').length,
    student: prompts.filter((p) => p.profession === 'student').length,
    healthcare: prompts.filter((p) => p.profession === 'healthcare').length,
    engineer: prompts.filter((p) => p.profession === 'engineer').length,
    developer: prompts.filter((p) => p.profession === 'developer').length,
    business: prompts.filter((p) => p.profession === 'business').length,
    researcher: prompts.filter((p) => p.profession === 'researcher').length,
    creative: prompts.filter((p) => p.profession === 'creative').length,
    everyone: prompts.filter((p) => p.profession === 'everyone').length,
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚 Prompt Library</h1>
        <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '1.5rem' }}>
          {prompts.length}+ ready-to-use prompts. Copy, paste, customize.
        </p>

        <input
          id="pl-search"
          className="pl-search"
          type="text"
          placeholder="Search prompts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {professions.map((prof) => (
          <button
            key={prof}
            className="filter-btn"
            data-filter={prof}
            onClick={() => setActiveFilter(prof)}
            style={{
              padding: '0.5rem 1rem',
              border: activeFilter === prof ? '2px solid #6366f1' : '1px solid #ddd',
              borderRadius: '0.375rem',
              backgroundColor: activeFilter === prof ? '#eef2ff' : '#fff',
              color: activeFilter === prof ? '#6366f1' : '#333',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: activeFilter === prof ? '600' : '400',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== prof) {
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== prof) {
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.backgroundColor = '#fff';
              }
            }}
          >
            {prof} ({professionCounts[prof as keyof typeof professionCounts]})
          </button>
        ))}
      </div>

      <div
        className="prompt-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        {filtered.map((prompt) => (
          <div
            key={prompt.id}
            className="prompt-card"
            style={{
              border: '1px solid #ddd',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', marginTop: 0 }}>
              {prompt.title}
            </h3>
            <p
              style={{
                fontSize: '0.75rem',
                backgroundColor: '#f3f4f6',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                display: 'inline-block',
                marginBottom: '0.75rem',
                width: 'fit-content',
              }}
            >
              {prompt.profession}
            </p>
            <p
              className="prompt-card-text"
              style={{
                fontSize: '0.95rem',
                color: '#555',
                marginBottom: '1rem',
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {prompt.prompt}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => handleCopy(prompt.id, prompt.prompt)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: copiedId === prompt.id ? '#16a34a' : '#6366f1',
                color: '#fff',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (copiedId !== prompt.id) {
                  e.currentTarget.style.backgroundColor = '#4f46e5';
                }
              }}
              onMouseLeave={(e) => {
                if (copiedId !== prompt.id) {
                  e.currentTarget.style.backgroundColor = '#6366f1';
                }
              }}
            >
              {copiedId === prompt.id ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#666' }}>
          <p style={{ fontSize: '1.125rem' }}>No prompts found matching your search.</p>
          <p style={{ fontSize: '0.95rem' }}>Try adjusting your filters or search terms.</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
