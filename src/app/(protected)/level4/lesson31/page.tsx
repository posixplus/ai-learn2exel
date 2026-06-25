'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson31() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-31" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={31}
          duration={100}
          title="Building RAG Systems"
          subtitle="Retrieval-Augmented Generation: teach Claude about YOUR data without fine-tuning."
        />

        <section className="section-card">
          <h2>What is RAG and Why Does It Matter?</h2>
          <p>
            Claude knows a lot - but not your company wiki, your product docs, or
            last week's sales data. RAG solves this by retrieving relevant chunks of
            your data at query time and stuffing them into Claude's context window.
          </p>
          <div className="info-box">
            <strong>RAG pipeline in 4 steps:</strong>
            <ol>
              <li><strong>Ingest</strong> - chunk your documents, embed each chunk into a vector</li>
              <li><strong>Store</strong> - save vectors in a vector database (Supabase pgvector, Pinecone, etc.)</li>
              <li><strong>Retrieve</strong> - embed the user query, find closest chunks by cosine similarity</li>
              <li><strong>Generate</strong> - pass retrieved chunks + question to Claude, get grounded answer</li>
            </ol>
          </div>
        </section>

        <section className="section-card">
          <h2>Step 1: Chunking Strategy</h2>
          <p>
            How you split documents dramatically affects quality. Bad chunking = bad retrieval = hallucinations.
          </p>

          <pre className="code-block">{`# pip install anthropic supabase
def chunk_text(text: str, chunk_size: int = 500,
               overlap: int = 50) -> list[str]:
    """
    Sliding window chunker.
    - chunk_size: characters per chunk (~125 tokens)
    - overlap: characters shared between adjacent chunks
      (preserves context at boundaries)
    """
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - overlap   # slide with overlap
    return chunks

# Better: use LangChain's RecursiveCharacterTextSplitter
# which tries to split on paragraphs, then sentences, then words
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500, chunk_overlap=50,
    separators=["\n\n", "\n", ". ", " ", ""]
)
chunks = splitter.split_text(your_document)`}</pre>
          <div className="info-box">
            <strong>Chunking rules of thumb:</strong>
            <ul>
              <li>500-1000 characters (~125-250 tokens) works well for most docs</li>
              <li>Always overlap 10-15% to avoid cutting mid-sentence</li>
              <li>Store metadata (source, page, section) with every chunk</li>
              <li>For structured data (FAQs, tables), chunk by logical unit, not character count</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Step 2: Embeddings + Supabase pgvector</h2>
          <p>
            We'll use OpenAI's embedding model (or Voyage AI, which is excellent for
            Claude workflows) and store vectors in Supabase - free tier included.
          </p>

          <pre className="code-block">{`-- In Supabase SQL editor:
create extension if not exists vector;

create table documents (
  id        bigserial primary key,
  content   text,
  metadata  jsonb,
  embedding vector(1536)  -- dimension matches your embedding model
);

create index on documents
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);  -- ~sqrt(num_rows) is a good starting point

-- Similarity search function
create or replace function match_documents(
  query_embedding vector(1536),
  match_count     int default 5,
  match_threshold float default 0.7
)
returns table(id bigint, content text, metadata jsonb, similarity float)
language sql stable as $$
  select id, content, metadata,
         1 - (embedding <=> query_embedding) as similarity
  from documents
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by embedding <=> query_embedding
  limit match_count;
$$;`}</pre>
        </section>

        <section className="section-card">
          <h2>Step 3: Ingest Pipeline (Python)</h2>
          <pre className="code-block">{`import anthropic
from supabase import create_client
import voyageai  # pip install voyageai (great for RAG)

claude = anthropic.Anthropic()
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
vo = voyageai.Client(api_key=VOYAGE_API_KEY)

def embed(texts: list[str]) -> list[list[float]]:
    result = vo.embed(texts, model="voyage-3", input_type="document")
    return result.embeddings

def ingest_document(text: str, metadata: dict):
    chunks = chunk_text(text)           # from Step 1
    embeddings = embed(chunks)
    rows = [
        {"content": c, "metadata": metadata, "embedding": e}
        for c, e in zip(chunks, embeddings)
    ]
    supabase.table("documents").insert(rows).execute()

# Usage
ingest_document(open("handbook.txt").read(),
                {"source": "handbook", "version": "2024"})`}</pre>
        </section>

        <section className="section-card">
          <h2>Step 4: Query + Generate</h2>
          <pre className="code-block">{`def ask(question: str) -> str:
    # Embed the question
    q_embedding = vo.embed(
        [question], model="voyage-3", input_type="query"
    ).embeddings[0]

    # Retrieve top-5 chunks from Supabase
    results = supabase.rpc("match_documents", {
        "query_embedding": q_embedding,
        "match_count": 5,
        "match_threshold": 0.7
    }).execute()

    if not results.data:
        return "I don't have information about that."

    # Build context from retrieved chunks
    context = "\n\n---\n\n".join(
        r["content"] for r in results.data
    )

    # Generate grounded answer
    response = claude.messages.create(
        model="claude-opus-4-8",
        max_tokens=512,
        system="""You are a helpful assistant. Answer using ONLY
the context provided. If the answer isn't in the context,
say "I don't have that information."

Context:
""" + context,
        messages=[{"role": "user", "content": question}]
    )
    return response.content[0].text

print(ask("What is our parental leave policy?"))`}</pre>
        </section>

        <section className="section-card">
          <h2>RAG Quality Improvements</h2>
          <div className="info-box">
            <strong>When RAG gives bad answers, try these fixes:</strong>
            <ul>
              <li><strong>Re-ranking:</strong> retrieve 20 chunks, use a cross-encoder to re-rank, keep top 5</li>
              <li><strong>Hybrid search:</strong> combine vector similarity with keyword (BM25) search</li>
              <li><strong>HyDE:</strong> ask Claude to generate a hypothetical answer, embed that for retrieval</li>
              <li><strong>Metadata filtering:</strong> filter by date, source, or category before similarity search</li>
              <li><strong>Smaller chunks for retrieval, larger for generation:</strong> retrieve small, expand context before feeding to Claude</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-on: Build a Docs Q&A Bot</h2>
          <div className="hands-on-box">
            <p><strong>Challenge:</strong> Build a RAG pipeline over a set of markdown docs (your own notes, a project README, or any text file).</p>
            <ol>
              <li>Chunk 3+ documents and store in Supabase with the SQL schema above</li>
              <li>Build a query function that retrieves and passes to Claude</li>
              <li>Test with 5 questions - note where it gets it right vs. wrong</li>
              <li>Add source citation: include the metadata source in the response</li>
            </ol>
            <p><strong>Stretch:</strong> Add a confidence score - if the highest similarity is below 0.75, have Claude say it's not sure rather than hallucinating.</p>
          </div>
        </section>

        <QuickRef
          title="Lesson 31 Quick Reference"
          items={[
            { term: 'RAG', definition: 'Retrieve relevant chunks at query time, pass to Claude as context' },
            { term: 'Chunking', definition: '500-1000 chars, 10-15% overlap, split on paragraphs first' },
            { term: 'pgvector', definition: 'Postgres extension for vector storage - built into Supabase' },
            { term: 'Cosine similarity', definition: '1 - (embedding <=> query_embedding) - ranges 0 to 1' },
            { term: 'Voyage AI', definition: 'Anthropic-recommended embedding model, great for Claude RAG' },
            { term: 'HyDE', definition: 'Generate hypothetical answer, embed it for better retrieval' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson30', label: 'L30: Structured Outputs & Tool Use' }}
          next={{ href: '/level4/lesson32', label: 'L32: Multi-Agent Architectures' }}
          currentLessonId="l4-31"
        />
      </main>
    </div>
  )
}
