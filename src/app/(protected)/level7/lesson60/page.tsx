'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson60() {
  return (
    <div className="lesson-layout">
      <Sidebar level={7} currentLessonId="l7-60" />
      <main className="lesson-main">
        <LessonHeader
          level={7}
          lessonNumber={60}
          duration={40}
          title="Building Block 4 - Connectors"
          subtitle="A loop that can only see your files is a tiny loop. Connectors let it read your issue tracker, open pull requests, and ping your team"
        />

        <section className="section-card">
          <h2>The Problem: A Loop in a Box</h2>
          <p>
            So far, your loop can read and write files on your computer. Useful - but limited. The real
            work of software lives in other places too: the issue tracker where bugs are logged, the
            database with live data, the chat channel where your team talks, the error monitor that
            screams when production breaks.
          </p>
          <p>
            A loop trapped with only your files is like an employee who can read documents but
            can&apos;t use email, can&apos;t open a ticket, and can&apos;t tell anyone what they did.
            <strong> Connectors are how the loop reaches out and touches those real tools.</strong>
          </p>
        </section>

        <section className="section-card">
          <h2>Connectors Run on MCP</h2>
          <p>
            Connectors are built on something you met back in Level 1: the <strong>Model Context
            Protocol (MCP)</strong>. You don&apos;t need the deep technical details here - just the idea.
            MCP is a <em>standard plug shape</em>. Because every tool speaks the same &quot;plug shape,&quot;
            a connector you set up in one AI tool usually works in another with little change.
          </p>
          <div className="info-box">
            <strong>Analogy:</strong> MCP is like USB. Before USB, every device had its own weird cable.
            After USB, one shape fits everything. MCP is the USB port that lets your loop plug into GitHub,
            Slack, your database, and more - all the same way.
          </div>
        </section>

        <section className="section-card">
          <h2>What Connectors Unlock</h2>
          <p>
            This is the difference between an agent that <em>describes</em> a fix and a loop that
            <em> actually does</em> the whole job end to end:
          </p>
          <div className="code-block">
            <pre>{`WITHOUT connectors:
  Agent: "Here is the fix. You should open a PR, update the
          ticket, and let the team know."  (you do the rest)

WITH connectors:
  Loop: opens the pull request itself
      → links the Linear/Jira ticket and moves it to "In Review"
      → waits for CI to go green
      → posts "fixed the auth bug, PR #482" in Slack
      → leaves the hard cases in your triage inbox`}</pre>
          </div>
          <p>
            The connectors are the reason the loop can act <em>inside your actual workflow</em> instead
            of just telling you what it would do if it could.
          </p>
        </section>

        <section className="section-card">
          <h2>High-Value Connectors to Set Up First</h2>
          <div className="steps-list">
            <div className="step">
              <strong>GitHub / GitLab</strong>
              <p>Read repositories, create branches, open pull requests, and react to events like
                &quot;a PR was opened.&quot; The backbone of most coding loops.</p>
            </div>
            <div className="step">
              <strong>Linear / Jira</strong>
              <p>Update ticket status automatically and link pull requests back to the work item, so the
                tracker stays honest without anyone typing.</p>
            </div>
            <div className="step">
              <strong>Slack / Discord</strong>
              <p>Post daily summaries and - importantly - <em>alert a human</em> when the loop hits
                something it shouldn&apos;t handle alone.</p>
            </div>
            <div className="step">
              <strong>Sentry / error trackers</strong>
              <p>Watch for spikes in live errors and draft hotfixes for the most frequent ones, before
                a human even notices.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>A Quiet Warning (We&apos;ll Return to It)</h2>
          <p>
            Connectors are also where a loop gains <strong>power in the real world</strong> - which means
            real consequences. A connector with write access can change tickets, push code, and message
            people. That&apos;s wonderful when it works and a problem when it doesn&apos;t.
          </p>
          <div className="info-box">
            <strong>Hold this thought:</strong> the more a loop can <em>touch</em>, the more carefully you
            must control <em>what</em> it can touch and <em>who approves</em> the risky actions. Lesson 64
            (&quot;When Loops Go Wrong&quot;) covers the security side in full. For now: give connectors
            the <em>least</em> access they need, not the most.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Map Your Loop&apos;s Reach</h2>
          <div className="hands-on-box">
            <strong>Hands-on (15 min):</strong> For your candidate loop, draw its &quot;reach.&quot; List
            every outside tool it would need to touch to finish the job without you, and next to each,
            write whether it needs <strong>read</strong> or <strong>write</strong> access. Example for a
            CI-triage loop: GitHub (read failures + write a draft PR), Linear (write ticket status),
            Slack (write a summary). Then circle anything with <em>write</em> access - those are the
            powerful, risky connectors you&apos;ll want a human gate in front of. You&apos;re now thinking
            about blast radius, which is exactly the mindset of a good loop designer.
          </div>
        </section>

        <QuickRef title="Lesson 60 Quick Reference" items={[
          { term: 'Connector', definition: 'Lets the loop reach beyond your files into real tools: trackers, databases, chat, error monitors' },
          { term: 'MCP', definition: 'The "USB port" standard connectors run on - set up once, works across AI tools' },
          { term: 'Describe vs do', definition: 'Connectors turn "here is the fix" into a loop that actually opens the PR and updates the ticket' },
          { term: 'First connectors', definition: 'GitHub/GitLab, Linear/Jira, Slack/Discord, Sentry - the common coding-loop stack' },
          { term: 'Least access', definition: 'Give a connector the minimum permission it needs; write access is power and risk' },
          { term: 'Blast radius', definition: 'How much real-world damage a loop could do - track which connectors can write/change things' },
        ]} />

        <LessonNav
          level={7}
          prev={{ href: '/level7/lesson59', label: 'Skills - Project Knowledge' }}
          next={{ href: '/level7/lesson61', label: 'Sub-Agents - Maker vs Checker' }}
          currentLessonId="l7-60"
        />
      </main>
    </div>
  )
}
