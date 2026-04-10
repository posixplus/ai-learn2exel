'use client';

import { useState, useMemo } from 'react';
import Footer from '@/components/layout/Footer';

interface GlossaryTerm {
  term: string;
  definition: string;
  seeAlso?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Agent',
    definition:
      'An AI system that can perceive its environment, make decisions, and take actions to achieve goals. Agents often work over time, learning from feedback and adapting their behavior.',
    seeAlso: ['Machine Learning', 'Reinforcement Learning from Human Feedback'],
  },
  {
    term: 'API',
    definition:
      'Application Programming Interface. A way for software programs to talk to each other. For AI, APIs let developers use powerful AI models without building them from scratch.',
    seeAlso: ['Inference'],
  },
  {
    term: 'Attention Mechanism',
    definition:
      'A technique in AI that helps the model focus on the most important parts of the input. Like how your eyes focus on a person\'s face in a crowded room, attention helps AI prioritize what matters.',
    seeAlso: ['Transformer', 'Neural Network'],
  },
  {
    term: 'Artificial Intelligence (AI)',
    definition:
      'Technology that enables computers to perform tasks that normally require human intelligence. This includes learning from experience, recognizing patterns, understanding language, and making decisions.',
  },
  {
    term: 'Benchmark',
    definition:
      'A standardized test used to measure how well an AI system performs. Think of it like a school test—different benchmarks test different skills, and researchers use them to compare models fairly.',
    seeAlso: ['Evaluation'],
  },
  {
    term: 'BERT',
    definition:
      'A famous language model developed by Google that learns from large amounts of text. BERT excels at understanding context and relationships between words, making it useful for tasks like categorizing text.',
    seeAlso: ['Foundation Model', 'Neural Network'],
  },
  {
    term: 'Bias (AI)',
    definition:
      'Systematic errors or unfairness in how an AI makes decisions. This happens when the training data has gaps, unfair patterns, or when the algorithm itself isn\'t built fairly. Bias can lead to discriminatory outcomes.',
    seeAlso: ['Training Data', 'Fine-Tuning'],
  },
  {
    term: 'Chain-of-Thought',
    definition:
      'A technique where you ask an AI to "think step-by-step" before giving an answer. Instead of jumping to a conclusion, the model shows its reasoning process, which often leads to better and more accurate results.',
    seeAlso: ['Prompt Engineering', 'In-Context Learning'],
  },
  {
    term: 'Claude',
    definition:
      'An advanced language model created by Anthropic. Claude is trained to be helpful, honest, and harmless, and excels at writing, analysis, coding, and reasoning tasks.',
    seeAlso: ['Foundation Model', 'LLM'],
  },
  {
    term: 'ChatGPT',
    definition:
      'A popular conversational AI model created by OpenAI. ChatGPT can chat, answer questions, write content, code, and more. It\'s one of the most widely used AI tools.',
    seeAlso: ['LLM', 'Foundation Model'],
  },
  {
    term: 'Context Window',
    definition:
      'The amount of text an AI model can "see" at one time before it needs to start forgetting older parts. A larger context window means the model can handle longer documents and remember more of the conversation.',
    seeAlso: ['Token', 'Inference'],
  },
  {
    term: 'Computer Vision',
    definition:
      'AI technology that allows computers to understand and analyze images and videos, similar to how humans see. It\'s used for tasks like recognizing objects, reading text from images, or identifying faces.',
    seeAlso: ['Neural Network', 'Deep Learning'],
  },
  {
    term: 'Corpus',
    definition:
      'A large collection of text used to train language models. The bigger and more diverse the corpus, the better the AI can understand language across different topics and writing styles.',
    seeAlso: ['Training Data', 'Fine-Tuning'],
  },
  {
    term: 'Deep Learning',
    definition:
      'A branch of machine learning inspired by how brains work. Deep learning uses layers of connected nodes (artificial neurons) to learn from data. Most modern AI systems use deep learning.',
    seeAlso: ['Neural Network', 'Machine Learning'],
  },
  {
    term: 'DeepSeek',
    definition:
      'An AI company known for creating open-source language models and reasoning models. DeepSeek focuses on making powerful AI accessible and affordable.',
    seeAlso: ['LLM', 'Foundation Model'],
  },
  {
    term: 'Diffusion Model',
    definition:
      'A type of AI that generates images by starting with random noise and gradually refining it into an image. It\'s like reversing the process of adding noise to a photo—working backward to create new images.',
    seeAlso: ['Deep Learning', 'Emergent Capability'],
  },
  {
    term: 'Document Retrieval',
    definition:
      'Finding relevant documents or passages from a large collection based on a query. This is a key part of RAG systems that help AI answer questions using up-to-date information.',
    seeAlso: ['RAG', 'Vector Database'],
  },
  {
    term: 'Embedding',
    definition:
      'A way to represent words, sentences, or images as mathematical vectors that capture their meaning. Embeddings let AI understand that "dog" and "puppy" are similar, even though they\'re spelled differently.',
    seeAlso: ['Vector Database', 'Neural Network'],
  },
  {
    term: 'Emergent Capability',
    definition:
      'An ability that appears in an AI model only when it reaches a certain size or training level. Smaller models might not have it, but larger models suddenly can do something new without being specifically trained for it.',
    seeAlso: ['Foundation Model', 'Scaling'],
  },
  {
    term: 'Evaluation (AI)',
    definition:
      'The process of testing how well an AI system works on specific tasks. Evaluation can be automated (using benchmarks) or human-based (having people judge the quality of outputs).',
    seeAlso: ['Benchmark', 'MMLU'],
  },
  {
    term: 'Few-Shot Learning',
    definition:
      'Teaching an AI to do a task by showing it just a few examples. Instead of needing thousands of examples, the model learns the pattern from 2-5 examples provided in the prompt.',
    seeAlso: ['In-Context Learning', 'Zero-Shot Learning'],
  },
  {
    term: 'Fine-Tuning',
    definition:
      'Taking a pre-trained AI model and further training it on new, specific data. Think of it as specialized education—the model already knows a lot, then you teach it your domain-specific expertise.',
    seeAlso: ['Training Data', 'Foundation Model'],
  },
  {
    term: 'Foundation Model',
    definition:
      'A large, general-purpose AI model trained on diverse data that can be adapted to many different tasks. Claude, ChatGPT, and Gemini are all foundation models.',
    seeAlso: ['LLM', 'Fine-Tuning'],
  },
  {
    term: 'Gemini',
    definition:
      'Google\'s advanced AI model family, including text, image, and multimodal versions. Gemini is particularly well-integrated with Google products like Docs, Gmail, and Sheets.',
    seeAlso: ['Foundation Model', 'Multimodal'],
  },
  {
    term: 'GPT',
    definition:
      'Generative Pre-trained Transformer. A type of AI model that learns from massive amounts of text to predict the next word, then uses this to generate text, answer questions, and more. ChatGPT is built on GPT technology.',
    seeAlso: ['Transformer', 'LLM'],
  },
  {
    term: 'Grounding',
    definition:
      'Connecting AI outputs to real facts and information. A "grounded" AI can explain where its information comes from and cite sources, rather than just making things up.',
    seeAlso: ['Hallucination', 'RAG'],
  },
  {
    term: 'Hallucination',
    definition:
      'When an AI makes up false information with confidence. For example, inventing a source that doesn\'t exist or stating false facts as true. Hallucinations are a real challenge in modern AI.',
    seeAlso: ['Grounding', 'RAG'],
  },
  {
    term: 'Human-in-the-Loop',
    definition:
      'An AI system that combines machine decisions with human judgment. The AI does most of the work, but humans review, approve, or correct important decisions.',
    seeAlso: ['RLHF', 'Evaluation'],
  },
  {
    term: 'Inference',
    definition:
      'Using a trained AI model to make predictions or generate outputs on new data. Inference is the opposite of training—it\'s when the model is in "working mode," answering questions or processing text.',
    seeAlso: ['Training Data', 'Parameter'],
  },
  {
    term: 'In-Context Learning',
    definition:
      'The ability of an AI to learn from examples given in the prompt itself, without being retrained. This is how ChatGPT and Claude can quickly adapt to new styles or tasks.',
    seeAlso: ['Few-Shot Learning', 'Prompt Engineering'],
  },
  {
    term: 'Instruction Tuning',
    definition:
      'Training an AI model to follow instructions well. The model learns to understand what users ask for and respond appropriately, making it more helpful and practical.',
    seeAlso: ['Fine-Tuning', 'RLHF'],
  },
  {
    term: 'LLM (Large Language Model)',
    definition:
      'A large AI model trained on vast amounts of text that can understand and generate human language. ChatGPT, Claude, and Gemini are all LLMs. The "large" refers to the billions of parameters they contain.',
    seeAlso: ['Foundation Model', 'Parameter'],
  },
  {
    term: 'Llama',
    definition:
      'A family of open-source language models developed by Meta. Llama models are designed to be efficient and can run on personal computers, making powerful AI more accessible.',
    seeAlso: ['Foundation Model', 'Open source'],
  },
  {
    term: 'Latent Space',
    definition:
      'A high-dimensional space where the AI represents meaning. It\'s hard to visualize, but think of it as a vast map where similar ideas are close together and different ideas are far apart.',
    seeAlso: ['Embedding', 'Neural Network'],
  },
  {
    term: 'Machine Learning (ML)',
    definition:
      'The science of creating AI systems that improve through experience. Instead of being programmed with rules, ML systems learn patterns from data.',
    seeAlso: ['Deep Learning', 'Neural Network'],
  },
  {
    term: 'MCP (Model Context Protocol)',
    definition:
      'A standard protocol that lets AI models safely connect to and use external tools. Think of it as a universal adapter that lets Claude use web search, databases, email, or custom applications.',
    seeAlso: ['Agent', 'API'],
  },
  {
    term: 'Multimodal',
    definition:
      'An AI that can work with multiple types of input or output, like text, images, audio, and video all in one system. Multimodal models are more versatile than models that only handle text.',
    seeAlso: ['Foundation Model', 'Computer Vision'],
  },
  {
    term: 'MMLU',
    definition:
      'Massive Multitask Language Understanding. A benchmark test with questions across 57 subjects (science, math, history, etc.). It\'s often used to measure how knowledgeable an AI is.',
    seeAlso: ['Benchmark', 'Evaluation'],
  },
  {
    term: 'Neural Network',
    definition:
      'A computing system inspired by how brains work. It consists of connected nodes (artificial neurons) organized in layers. Neural networks are the foundation of modern AI.',
    seeAlso: ['Deep Learning', 'Parameter'],
  },
  {
    term: 'NLP (Natural Language Processing)',
    definition:
      'The field of AI focused on understanding and generating human language. NLP powers everything from chatbots to language translation to text analysis.',
    seeAlso: ['LLM', 'Transformer'],
  },
  {
    term: 'OpenAI',
    definition:
      'An AI research company that created GPT models and ChatGPT. OpenAI is one of the leading organizations advancing large language models.',
    seeAlso: ['ChatGPT', 'GPT'],
  },
  {
    term: 'Orchestration',
    definition:
      'Coordinating multiple AI systems or steps to solve complex problems. It\'s like conducting an orchestra—different instruments (different AI tools) play together to create a complete solution.',
    seeAlso: ['Agent', 'MCP'],
  },
  {
    term: 'Overfitting',
    definition:
      'When an AI learns the training data too well, including its quirks and errors, so it performs poorly on new data. It\'s like memorizing answers instead of learning concepts.',
    seeAlso: ['Training Data', 'Fine-Tuning'],
  },
  {
    term: 'Parameter',
    definition:
      'A number the AI learns during training that affects how it processes information. A model with billions of parameters is more powerful but also slower and more expensive to run.',
    seeAlso: ['Neural Network', 'Training Data'],
  },
  {
    term: 'Perplexity (AI tool)',
    definition:
      'An AI search engine that combines web search with conversational AI. It provides answers with sources cited, making it useful for research and finding current information.',
    seeAlso: ['RAG', 'Grounding'],
  },
  {
    term: 'Prompt',
    definition:
      'The input or instruction you give to an AI to get a response. A good prompt is clear, specific, and provides context. Prompts can be questions, commands, or examples.',
    seeAlso: ['Prompt Engineering', 'In-Context Learning'],
  },
  {
    term: 'Prompt Engineering',
    definition:
      'The art of writing prompts that get better results from AI. Techniques include being specific, asking for step-by-step thinking, giving examples, and framing requests clearly.',
    seeAlso: ['Prompt', 'Chain-of-Thought'],
  },
  {
    term: 'Prompt Injection',
    definition:
      'A security risk where hidden instructions are embedded in text to trick an AI into doing something unintended. For example, a user might hide a command at the end of a long document.',
    seeAlso: ['Agent', 'Grounding'],
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition:
      'A technique where an AI retrieves relevant information from documents or databases before answering a question. This helps it provide accurate, current information instead of relying only on training data.',
    seeAlso: ['Document Retrieval', 'Vector Database'],
  },
  {
    term: 'RLHF (Reinforcement Learning from Human Feedback)',
    definition:
      'A training technique where human feedback helps refine AI behavior. Humans rate different outputs, and the AI learns to produce responses humans find helpful and correct.',
    seeAlso: ['Training Data', 'Human-in-the-Loop'],
  },
  {
    term: 'Reasoning Model',
    definition:
      'An AI designed to work through complex problems step-by-step, showing its reasoning. These models are slower but more accurate for difficult tasks that require careful logical thinking.',
    seeAlso: ['Chain-of-Thought', 'Foundation Model'],
  },
  {
    term: 'Skill (Claude Code)',
    definition:
      'A packaged automation or workflow built for Claude that can perform specific tasks across multiple apps. Skills let users orchestrate complex multi-step processes automatically.',
    seeAlso: ['MCP', 'Agent'],
  },
  {
    term: 'System Prompt',
    definition:
      'Hidden instructions given to an AI that shape its behavior and personality. For example, a system prompt might tell Claude to be concise or helpful in a certain style.',
    seeAlso: ['Prompt', 'Instruction Tuning'],
  },
  {
    term: 'Supervised Learning',
    definition:
      'Training an AI using labeled examples (inputs paired with correct outputs). The AI learns to predict outputs for new inputs. Most modern language models use some form of supervised learning.',
    seeAlso: ['Training Data', 'Machine Learning'],
  },
  {
    term: 'Token',
    definition:
      'A small piece of text that an AI processes. A token might be a word, part of a word, or punctuation. "Hello world" is about 2 tokens. Token count affects how long a conversation can be.',
    seeAlso: ['Context Window', 'Parameter'],
  },
  {
    term: 'Temperature',
    definition:
      'A setting that controls how creative or predictable an AI response is. Low temperature (0.1) makes responses focused and consistent. High temperature (0.9) makes them more creative and varied.',
    seeAlso: ['Inference', 'Parameter'],
  },
  {
    term: 'Transformer',
    definition:
      'A type of neural network architecture that powers most modern AI. Transformers use "attention" to understand relationships between words, making them excellent at understanding language.',
    seeAlso: ['Attention Mechanism', 'Neural Network'],
  },
  {
    term: 'Training Data',
    definition:
      'The text, images, or other information used to teach an AI model. Larger and more diverse training data generally produces better models. The quality of training data directly affects the quality of the AI.',
    seeAlso: ['Fine-Tuning', 'Corpus'],
  },
  {
    term: 'Unsupervised Learning',
    definition:
      'Training an AI on unlabeled data where the model finds patterns on its own. Unlike supervised learning, no one tells the AI what\'s correct—it discovers structure in the data.',
    seeAlso: ['Machine Learning', 'Supervised Learning'],
  },
  {
    term: 'Vector Database',
    definition:
      'A specialized database that stores and searches data based on meaning rather than exact keywords. It\'s essential for RAG systems and finding similar documents quickly.',
    seeAlso: ['Embedding', 'RAG'],
  },
  {
    term: 'Vision Model',
    definition:
      'An AI trained to understand and analyze images. Vision models can identify objects, read text from images, describe what they see, and answer questions about images.',
    seeAlso: ['Computer Vision', 'Multimodal'],
  },
  {
    term: 'Zero-Shot Learning',
    definition:
      'The ability to perform a task without seeing any examples. The AI uses its general knowledge. For instance, an AI can translate to a language it never trained on.',
    seeAlso: ['Few-Shot Learning', 'In-Context Learning'],
  },
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return glossaryTerms;
    const query = searchQuery.toLowerCase();
    return glossaryTerms.filter(
      (item) =>
        item.term.toLowerCase().includes(query) || item.definition.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedByLetter = useMemo(() => {
    const grouped: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((term) => {
      const letter = term.term.charAt(0).toUpperCase();
      if (!grouped[letter]) {
        grouped[letter] = [];
      }
      grouped[letter].push(term);
    });
    return grouped;
  }, [filtered]);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const availableLetters = letters.filter((letter) => glossaryTerms.some((t) => t.term.charAt(0).toUpperCase() === letter));

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📖 AI Glossary</h1>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
          Plain English definitions for every AI term · {glossaryTerms.length} terms · Searchable
        </p>

        <input
          id="glossary-search"
          className="glossary-search"
          type="text"
          placeholder="Search terms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '0.5rem',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {!searchQuery && (
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {availableLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              style={{
                padding: '0.5rem 0.75rem',
                border: '1px solid #ddd',
                borderRadius: '0.375rem',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.backgroundColor = '#eef2ff';
                e.currentTarget.style.color = '#6366f1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#333';
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      <div>
        {Object.keys(groupedByLetter)
          .sort()
          .map((letter) => (
            <div key={letter} id={`letter-${letter}`} style={{ marginBottom: '2.5rem' }}>
              <h2
                className="glossary-letter"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid #6366f1',
                }}
              >
                {letter}
              </h2>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {groupedByLetter[letter].map((term) => (
                  <div key={term.term} className="glossary-term" style={{ borderLeft: '4px solid #eef2ff', paddingLeft: '1rem' }}>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', marginTop: 0 }}>
                      {term.term}
                    </h3>
                    <p className="glossary-def" style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      {term.definition}
                    </p>
                    {term.seeAlso && term.seeAlso.length > 0 && (
                      <p style={{ fontSize: '0.85rem', color: '#6366f1', marginBottom: 0 }}>
                        <strong>See Also:</strong> {term.seeAlso.join(', ')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#666' }}>
          <p style={{ fontSize: '1.125rem' }}>No terms found matching your search.</p>
          <p style={{ fontSize: '0.95rem' }}>Try different keywords.</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
