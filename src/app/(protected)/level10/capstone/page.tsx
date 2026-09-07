'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import LevelFeedback from '@/components/lesson/LevelFeedback'
import LevelQuiz from '@/components/lesson/LevelQuiz'

export default function Level10Capstone() {
  return (
    <div className="lesson-layout">
      <Sidebar level={10} currentLessonId="l10-capstone" />
      <main className="lesson-main">
        <LessonHeader
          level={10}
          lessonNumber={93}
          duration={150}
          title="Capstone: Ship Dayflow, Then Run Day 2"
          subtitle="Deploy the agent on a zero-dollar stack, schedule it, read the traces, find the failing eval, fix it, redeploy. That loop is the job."
        />

        <section className="section-card">
          <h2>Part 1 - Ship it</h2>
          <ol>
            <li>Containerise Dayflow (Python worker; TS mirror as an alternative build)</li>
            <li>Deploy to a free-tier host with a scheduled morning run and an on-demand endpoint</li>
            <li>Secrets in the host's secret store, never in the image</li>
            <li>Confirm traces and the token ledger are flowing from production</li>
          </ol>
        </section>

        <section className="section-card">
          <h2>Part 2 - Day 2</h2>
          <ol>
            <li>Run the eval suite against production traces from the first week</li>
            <li>Pick the worst failing trajectory and diagnose it from the trace alone</li>
            <li>Fix it, add a regression eval, redeploy</li>
            <li>Write the one-page runbook a teammate would need to operate Dayflow</li>
          </ol>
          <div className="info-box">
            <strong>Submission:</strong> a public repo link, a screenshot of a real morning brief, the trace
            of the trajectory you fixed, and the runbook.
          </div>
        </section>

        <section className="section-card">
          <h2>Content in progress</h2>
          <p>Deployment walkthrough and grading rubric are being written alongside the lessons.</p>
        </section>

        <LevelQuiz level={10} />
        <LevelFeedback level={10} levelTitle="Agentic AI Engineer" />
        <LessonNav currentLessonId="l10-capstone" />
      </main>
    </div>
  )
}
