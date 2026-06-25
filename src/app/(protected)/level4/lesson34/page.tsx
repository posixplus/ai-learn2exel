'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson34() {
  return (
    <div className="lesson-layout">
      <Sidebar level={4} currentLessonId="l4-34" />
      <main className="lesson-main">
        <LessonHeader
          level={4}
          lessonNumber={34}
          duration={80}
          title="Multi-Modal: Vision & Docs"
          subtitle="Claude can see. Send images, screenshots, PDFs, and diagrams - and get intelligent answers back."
        />

        <section className="section-card">
          <h2>What Claude Can See</h2>
          <p>
            Claude 3+ is natively multi-modal. You can send images directly in the
            API request - no separate vision model or OCR pipeline required. Claude
            understands diagrams, screenshots, charts, handwriting, and documents.
          </p>
          <div className="info-box">
            <strong>Supported formats:</strong>
            <ul>
              <li>Images: JPEG, PNG, GIF, WebP (up to 20MB per image)</li>
              <li>PDFs: sent as base64 or URL - Claude reads every page</li>
              <li>Up to 20 images per request (across all content blocks)</li>
              <li>No separate OCR step - Claude extracts text from images automatically</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Sending an Image: Base64</h2>

          <pre className="code-block">{`import anthropic, base64

client = anthropic.Anthropic()

def analyse_image(image_path: str, question: str) -> str:
    with open(image_path, "rb") as f:
        image_data = base64.standard_b64encode(f.read()).decode("utf-8")

    # Detect media type from extension
    ext = image_path.rsplit(".", 1)[-1].lower()
    media_types = {"jpg": "image/jpeg", "jpeg": "image/jpeg",
                   "png": "image/png", "gif": "image/gif", "webp": "image/webp"}
    media_type = media_types.get(ext, "image/jpeg")

    response = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": media_type,
                        "data": image_data,
                    }
                },
                {"type": "text", "text": question}
            ]
        }]
    )
    return response.content[0].text

# Examples
print(analyse_image("receipt.jpg",
      "Extract all line items with prices as JSON"))
print(analyse_image("diagram.png",
      "Explain this architecture diagram in plain English"))`}</pre>
        </section>

        <section className="section-card">
          <h2>Sending an Image: URL</h2>
          <pre className="code-block">{`# Faster - no need to download the image first
response = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=512,
    messages=[{
        "role": "user",
        "content": [
            {
                "type": "image",
                "source": {
                    "type": "url",
                    "url": "https://example.com/chart.png"
                }
            },
            {"type": "text",
             "text": "What trend does this chart show? "
                     "What would you predict for next quarter?"}
        ]
    }]
)`}</pre>
        </section>

        <section className="section-card">
          <h2>Processing PDFs</h2>
          <pre className="code-block">{`import anthropic, base64

client = anthropic.Anthropic()

def analyse_pdf(pdf_path: str, question: str) -> str:
    with open(pdf_path, "rb") as f:
        pdf_data = base64.standard_b64encode(f.read()).decode("utf-8")

    response = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=2048,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": pdf_data,
                    }
                },
                {"type": "text", "text": question}
            ]
        }]
    )
    return response.content[0].text

# Real-world uses
review = analyse_pdf("contract.pdf",
    "List all clauses about liability and indemnification")
summary = analyse_pdf("annual_report.pdf",
    "What were the top 3 risks mentioned? "
    "Summarise each in one sentence")`}</pre>
        </section>

        <section className="section-card">
          <h2>Vision in a Next.js App</h2>
          <pre className="code-block">{`// app/api/analyse-image/route.ts
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('image') as File
  const question = formData.get('question') as string

  const buffer = await file.arrayBuffer()
  const base64 = Buffer.from(buffer).toString('base64')

  const response = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: [
        {
          type: 'image',
          source: { type: 'base64',
                    media_type: file.type as any,
                    data: base64 }
        },
        { type: 'text', text: question }
      ]
    }]
  })

  return Response.json({
    result: (response.content[0] as any).text
  })
}`}</pre>
        </section>

        <section className="section-card">
          <h2>High-Value Vision Use Cases</h2>
          <div className="info-box">
            <ul>
              <li><strong>Receipt / invoice OCR</strong> - extract structured data from photos of documents</li>
              <li><strong>Screenshot-to-code</strong> - "Implement this UI in React/Tailwind"</li>
              <li><strong>Chart analysis</strong> - trend extraction, anomaly detection in graphs</li>
              <li><strong>Form processing</strong> - extract fields from filled paper forms</li>
              <li><strong>Diagram explanation</strong> - explain architecture diagrams, flowcharts, ERDs</li>
              <li><strong>Quality inspection</strong> - flag defects in product photos</li>
              <li><strong>Accessibility audit</strong> - describe UI screenshots for screen reader compliance checks</li>
            </ul>
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-on: Receipt Analyser</h2>
          <div className="hands-on-box">
            <p><strong>Challenge:</strong> Build a receipt analyser that takes an image and returns structured expense data.</p>
            <ol>
              <li>Take a photo of any receipt (or find one online)</li>
              <li>Send it to Claude with the prompt: "Extract all line items, totals, tax, and merchant name as JSON"</li>
              <li>Parse the JSON response and display it in a clean table</li>
              <li>Add a "category" field - ask Claude to categorise each item (food, transport, office, etc.)</li>
            </ol>
            <p><strong>Stretch:</strong> Build a Next.js drag-and-drop page where users upload receipt images and get a monthly expense summary automatically.</p>
          </div>
        </section>

        <QuickRef
          title="Lesson 34 Quick Reference"
          items={[
            { term: 'Image block', definition: 'type: "image", source: {type: "base64"|"url", ...}' },
            { term: 'Document block', definition: 'type: "document", source: {media_type: "application/pdf", data: base64}' },
            { term: 'Max images', definition: '20 images per request, up to 20MB each' },
            { term: 'No OCR needed', definition: 'Claude reads text in images natively - no preprocessing required' },
            { term: 'URL source', definition: 'Pass a public image URL directly - faster than base64 for remote images' },
            { term: 'Vision + tools', definition: 'Combine image input with tool use for structured extraction workflows' },
          ]}
        />

        <LessonNav
          level={4}
          prev={{ href: '/level4/lesson33', label: 'L33: Claude for Teams & Orgs' }}
          next={{ href: '/level4/lesson35', label: 'L35: Production AI Systems' }}
          currentLessonId="l4-34"
        />
      </main>
    </div>
  )
}
