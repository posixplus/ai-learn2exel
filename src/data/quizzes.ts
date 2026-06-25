// Per-level knowledge-check questions. Grounded in each level's lessons.
// answer = index into options. Keep questions conceptual, not trivia.

export interface QuizQuestion {
  q: string
  options: string[]
  answer: number
  explanation: string
}

export const QUIZZES: Record<number, QuizQuestion[]> = {
  0: [
    { q: 'What does "LLM" stand for?', options: ['Large Language Model', 'Logical Learning Machine', 'Linked Lookup Model', 'Long-Latency Memory'], answer: 0, explanation: 'An LLM is a Large Language Model - trained on huge amounts of text to predict language.' },
    { q: 'At its core, how does an LLM produce text?', options: ['It looks answers up in a database', 'It predicts the next token based on patterns it learned', 'It searches the live internet every time', 'It follows hand-written rules'], answer: 1, explanation: 'LLMs generate one token at a time by predicting what is most likely to come next.' },
    { q: 'What is an AI "hallucination"?', options: ['A system crash', 'When the model refuses to answer', 'When it states something false but plausible-sounding', 'A type of image generation'], answer: 2, explanation: 'A hallucination is confident, fluent output that is simply wrong - which is why you verify.' },
    { q: 'Which prompt is most likely to get a good result?', options: ['"write something"', 'A vague one-liner', 'One with clear context, the role, and an example of what you want', 'The shortest possible prompt'], answer: 2, explanation: 'Clear context, a role, and examples are the heart of prompt engineering.' },
    { q: 'How should you treat AI output at work?', options: ['As a final authority', 'As a first draft you verify', 'As always wrong', 'As private and unshareable'], answer: 1, explanation: 'AI is a capable assistant for drafting and ideation - you stay the reviewer.' },
  ],
  1: [
    { q: 'How does an AI "agent" differ from a basic chatbot?', options: ['It is faster', 'It can take actions and use tools in a loop toward a goal', 'It never makes mistakes', 'It only works offline'], answer: 1, explanation: 'Agents plan, act, use tools, and iterate - not just reply once.' },
    { q: 'What is MCP (Model Context Protocol)?', options: ['A pricing plan', 'An open standard to connect AI to external tools and data', 'A type of GPU', 'A prompt template'], answer: 1, explanation: 'MCP is a standard way to give models access to tools, files, and services.' },
    { q: 'When is few-shot prompting most useful?', options: ['When you show examples of the input/output you want', 'When you want a shorter prompt', 'Only for images', 'Never'], answer: 0, explanation: 'A few worked examples steer the model toward the format and style you need.' },
    { q: 'What is Claude Code?', options: ['A pricing tier', 'A terminal-native agentic coding tool', 'A spreadsheet plugin', 'A model name'], answer: 1, explanation: 'Claude Code lets you delegate coding tasks to an agent from your terminal.' },
    { q: 'A core responsible-AI habit is to...', options: ['Automate everything with no oversight', 'Keep a human in the loop and verify outputs', 'Hide that AI was used', 'Never read the output'], answer: 1, explanation: 'Human oversight and verification are the foundation of responsible use.' },
  ],
  2: [
    { q: 'For AI-assisted deep research, the key discipline is to...', options: ['Trust every claim', 'Verify sources and check citations', 'Use only one search', 'Avoid note-taking'], answer: 1, explanation: 'AI can fabricate citations - confirm sources before relying on them.' },
    { q: 'A knowledge base / project helps by...', options: ['Making the model faster', 'Grounding answers in your own documents', 'Removing the need to prompt', 'Hiding your data'], answer: 1, explanation: 'Loading your documents lets the AI answer from your real material.' },
    { q: 'When using AI for data analysis you should...', options: ['Accept the numbers blindly', 'Validate the methodology and the results', 'Never use formulas', 'Only use it for charts'], answer: 1, explanation: 'Check the logic and the math - AI can produce confident but wrong analysis.' },
    { q: 'Which task is the best fit for AI automation?', options: ['Repetitive, well-defined work', 'One-off creative judgment calls', 'High-stakes legal sign-off', 'Anything random'], answer: 0, explanation: 'Automation shines on repeatable, clearly-specified tasks.' },
    { q: 'The "AI OS" idea is about...', options: ['Installing a new operating system', 'Orchestrating multiple AI tools into one personal workflow', 'A single chatbot', 'Replacing your computer'], answer: 1, explanation: 'It is about wiring several AI tools together into a system that works for you.' },
  ],
  3: [
    { q: 'What is the purpose of a CLAUDE.md file?', options: ['To store passwords', 'To give the agent persistent project memory and instructions', 'To speed up the GPU', 'To format code'], answer: 1, explanation: 'CLAUDE.md is durable project context the agent reads every session.' },
    { q: 'Why is the biggest model not always the right choice?', options: ['It is always worse', 'Cost and latency - match the model to the task', 'Big models cannot code', 'Smaller models are always better'], answer: 1, explanation: 'Use a fast/cheap model for simple work and a powerful one for hard problems.' },
    { q: 'A Skill (in Cowork / Claude) is...', options: ['A subscription', 'Packaged instructions and knowledge the agent loads when relevant', 'A keyboard shortcut', 'A type of model'], answer: 1, explanation: 'Skills bundle domain know-how the agent pulls in only when needed.' },
    { q: 'A common "don\'t" with an agentic setup is...', options: ['Reading the diff', 'Blindly auto-approving broad or destructive permissions', 'Using version control', 'Writing tests'], answer: 1, explanation: 'Keep approval gates - do not hand an agent unchecked power over your system.' },
    { q: 'MCP servers let Claude...', options: ['Run faster only', 'Access tools and data through a standard protocol', 'Change its weights', 'Avoid prompting'], answer: 1, explanation: 'MCP is the connective tissue between the model and external capabilities.' },
  ],
  4: [
    { q: 'What does RAG (Retrieval-Augmented Generation) do?', options: ['Trains a new model', 'Retrieves relevant documents, then generates an answer from them', 'Compresses images', 'Replaces the API'], answer: 1, explanation: 'RAG grounds answers in retrieved, relevant context instead of memory alone.' },
    { q: 'Structured outputs / tool use let the model...', options: ['Return reliable JSON or call functions', 'Write longer prose', 'Skip the API', 'Avoid errors entirely'], answer: 0, explanation: 'They make model output machine-usable and let it trigger real actions.' },
    { q: 'In a production AI system you must handle...', options: ['Nothing extra', 'Errors, rate limits, evaluation, and monitoring', 'Only the happy path', 'Just the prompt'], answer: 1, explanation: 'Production means reliability: failures, limits, evals, and observability.' },
    { q: 'A benefit of a multi-agent architecture is...', options: ['It is always cheaper', 'Splitting work across specialized agents (e.g., maker and checker)', 'It removes the need for prompts', 'It guarantees correctness'], answer: 1, explanation: 'Specialized agents that check each other improve reliability on complex work.' },
    { q: 'Why does prompt evaluation matter?', options: ['It does not', 'You need objective tests to know a prompt works, not vibes', 'It replaces the model', 'It only matters for images'], answer: 1, explanation: 'Evals turn "seems good" into measured, repeatable quality.' },
  ],
  5: [
    { q: 'Inline code completion is best for...', options: ['Rewriting a whole repo', 'Quick in-editor suggestions as you type', 'Deploying to production', 'Writing documentation only'], answer: 1, explanation: 'Completion shines at fast, local, in-the-flow suggestions.' },
    { q: 'When AI writes your tests, you should...', options: ['Merge them unread', 'Review them - a passing test can still assert the wrong thing', 'Delete them', 'Never run them'], answer: 1, explanation: 'AI can write green tests that do not actually verify the behavior you care about.' },
    { q: '"Agentic coding" means the AI...', options: ['Only autocompletes one line', 'Plans and executes multi-file changes toward a goal', 'Writes comments only', 'Cannot run commands'], answer: 1, explanation: 'Agentic tools plan, edit across files, run, and iterate.' },
    { q: 'Best practice when debugging with AI is to...', options: ['Paste no context', 'Give it the error plus context, then verify the fix', 'Accept the first suggestion blindly', 'Avoid reproducing the bug'], answer: 1, explanation: 'Context in, verification out - the AI is a fast hypothesis generator.' },
    { q: 'AI code review is useful but...', options: ['Replaces human review entirely', 'Human review is still required for correctness and security', 'Only checks formatting', 'Should be skipped'], answer: 1, explanation: 'Use it as a first pass; a human still owns correctness and security.' },
  ],
  6: [
    { q: 'What are C2PA / Content Credentials for?', options: ['Faster rendering', 'Attaching provenance/authenticity metadata to media', 'Upscaling images', 'Removing watermarks'], answer: 1, explanation: 'C2PA records where media came from and how it was made or edited.' },
    { q: 'Which of these is an AI video model?', options: ['GPT Image 2', 'Veo 3.1', 'Whisper', 'CLAUDE.md'], answer: 1, explanation: 'Veo 3.1 is a leading text-to-video model; GPT Image 2 makes images.' },
    { q: 'EU AI Act Article 50 broadly requires...', options: ['Banning AI media', 'Disclosure/labeling of AI-generated content', 'Free GPUs', 'Open-sourcing models'], answer: 1, explanation: 'It pushes transparency: people should know when content is AI-generated.' },
    { q: 'To keep a character consistent across images you...', options: ['Re-roll randomly each time', 'Use reference images / character-consistency features', 'Lower the resolution', 'Avoid prompting'], answer: 1, explanation: 'Reference-based features lock identity across generations.' },
    { q: 'A "creative pipeline" means...', options: ['One prompt, one image', 'Chaining tools (image, video, audio) with review steps', 'Only using one app', 'Skipping editing'], answer: 1, explanation: 'You compose multiple tools into a repeatable, reviewed workflow.' },
  ],
  7: [
    { q: 'In loop engineering, a "loop" is...', options: ['A for-loop in code', 'An automated cycle where an agent acts, checks, and repeats until done', 'A chat message', 'A type of model'], answer: 1, explanation: 'A loop runs the act-verify-repeat cycle toward a goal with little babysitting.' },
    { q: 'Before building a loop you should ask...', options: ['"How big can I make it?"', 'Is this task repeatable and actually worth automating?', '"Which color theme?"', 'Nothing'], answer: 1, explanation: 'Not everything deserves a loop - match the machinery to the payoff.' },
    { q: 'The "checker" sub-agent exists to...', options: ['Write the code faster', 'Verify the maker\'s output (separation of maker and checker)', 'Replace the user', 'Store passwords'], answer: 1, explanation: 'A separate checker catches what the maker misses - an automated reviewer.' },
    { q: 'A state file gives a loop...', options: ['A prettier UI', 'Durable memory that lasts across iterations', 'More GPUs', 'Internet access'], answer: 1, explanation: 'The state file is the loop\'s memory between runs.' },
    { q: 'The Minimum Viable Loop principle says...', options: ['Build the biggest loop first', 'Start with the smallest loop that works, then expand', 'Never use loops', 'Avoid verification'], answer: 1, explanation: 'Start small and proven, then grow - just like an MVP.' },
  ],
  8: [
    { q: 'Context engineering differs from prompting because it...', options: ['Is just shorter prompts', 'Designs the whole context window (the wiring), not only the wording', 'Ignores the model', 'Only changes fonts'], answer: 1, explanation: 'It is about what information reaches the model, assembled deliberately.' },
    { q: 'The "attention budget" / context rot means...', options: ['Models improve with more text', 'Too much or irrelevant context degrades performance - tokens are finite', 'Context is free', 'Only images matter'], answer: 1, explanation: 'More is not better; signal-to-noise in the window matters.' },
    { q: 'What are the four pillars of context?', options: ['Speed, cost, size, color', 'Instructions, retrieval, memory, tools', 'Prompt, model, GPU, API', 'Read, write, edit, delete'], answer: 1, explanation: 'Instructions, retrieval, memory, and tools make up the context system.' },
    { q: '"Lost in the middle" refers to...', options: ['Losing a file', 'Models attending less to information in the middle of long context', 'A network error', 'A pricing tier'], answer: 1, explanation: 'Content buried mid-context is easier for the model to overlook.' },
    { q: 'The retrieval pillar is about...', options: ['Pulling in only the relevant information at the right altitude', 'Training the model', 'Deleting memory', 'Adding more tools always'], answer: 0, explanation: 'Retrieval brings in just-enough relevant context, not everything.' },
  ],
  9: [
    { q: 'Spec-Driven Development (SDD) means...', options: ['Code first, document later', 'Write the spec first; the spec drives the code', 'Never write specs', 'Only write tests'], answer: 1, explanation: 'In SDD the spec is the source of truth that the build follows.' },
    { q: 'What is EARS?', options: ['A model name', 'A structured format for clear, testable requirements', 'A GPU type', 'A git command'], answer: 1, explanation: 'EARS gives requirements a consistent, checkable shape.' },
    { q: 'BMAD\'s two phases are...', options: ['Design and deploy', 'Agentic planning, then context-engineered development', 'Test and ship', 'Prompt and pray'], answer: 1, explanation: 'BMAD plans with a team of agents first, then builds story by story.' },
    { q: 'LID\'s core idea ("the arrow") is that...', options: ['Code can exist without intent', 'Every line of code traces back to a stated intent, enforced by a CI gate', 'Specs are optional', 'Tests come last'], answer: 1, explanation: 'LID makes intent traceable and mechanically enforced.' },
    { q: 'A key SDD anti-pattern is...', options: ['Writing tests', 'Over-applying heavy process to a tiny task - match ceremony to stakes', 'Using version control', 'Reading the diff'], answer: 1, explanation: 'Process is a tool, not a virtue; right-size it to the work.' },
  ],
}
