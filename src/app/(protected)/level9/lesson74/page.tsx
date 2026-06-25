'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson74() {
  return (
    <div className="lesson-layout">
      <Sidebar level={9} currentLessonId="l9-74" />
      <main className="lesson-main">
        <LessonHeader
          level={9}
          lessonNumber={74}
          duration={45}
          title="Writing Specs That Don't Lie (EARS)"
          subtitle="A spec is only useful if it's precise enough to be checkable. Learn EARS - a simple way to write requirements an agent can't misread"
        />

        <section className="section-card">
          <h2>Most Specs Are Too Mushy to Help</h2>
          <p>
            &quot;The app should be fast and user-friendly.&quot; That&apos;s not a spec - it&apos;s a wish.
            Fast how? User-friendly to whom? An agent (or a human) can&apos;t build it and can&apos;t check
            it. A good spec has one job: be <strong>precise enough that you can tell whether it was
            met.</strong>
          </p>
          <div className="info-box">
            <strong>The test for any requirement:</strong> could two different people read it and agree on
            whether the finished software satisfies it? If not, it&apos;s too mushy - and the agent will
            fill the fuzziness with a guess (an intent gap).
          </div>
        </section>

        <section className="section-card">
          <h2>Functional vs. Non-Functional Requirements</h2>
          <p>Specs hold two kinds of requirements, and you need both:</p>
          <div className="steps-list">
            <div className="step">
              <strong>Functional requirements (FRs) - what it does</strong>
              <p>Concrete behaviors. &quot;A user can reset their password via an emailed link.&quot;
                &quot;Tasks can be filtered by status.&quot; These are features.</p>
            </div>
            <div className="step">
              <strong>Non-functional requirements (NFRs) - how well it does it</strong>
              <p>Qualities, not features. Speed, security, accessibility, reliability. &quot;Pages load in
                under 2 seconds.&quot; &quot;All actions are keyboard-accessible.&quot; Beginners forget
                these, and they&apos;re where products quietly fail.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>EARS: A Simple Recipe for Clear Requirements</h2>
          <p>
            <strong>EARS</strong> (Easy Approach to Requirements Syntax) is a tiny set of sentence
            templates that force precision. You don&apos;t need jargon - just fill in the blanks. The magic
            is that every EARS sentence has a clear <em>trigger</em> and a clear <em>response</em>, so
            there&apos;s nothing to misread.
          </p>
          <div className="code-block">
            <pre>{`The five EARS patterns:

UBIQUITOUS   "The <system> shall <do something>."
             → always true. "The app shall store tasks in a database."

EVENT        "WHEN <trigger>, the <system> shall <response>."
             → "WHEN a user submits the form, the app shall save the task."

STATE        "WHILE <in some state>, the <system> shall <response>."
             → "WHILE a user is logged out, the app shall hide the dashboard."

CONDITIONAL  "IF <condition>, THEN the <system> shall <response>."
             → "IF the password is wrong, THEN the app shall show an error."

OPTIONAL     "WHERE <feature is included>, the <system> shall <response>."
             → "WHERE dark mode is enabled, the app shall use dark colors."`}</pre>
          </div>
          <div className="info-box">
            <strong>Why this works:</strong> &quot;shall&quot; + a trigger + a response leaves no room for
            interpretation. Each sentence makes <em>one</em> checkable claim. You can literally write a test
            for it.
          </div>
        </section>

        <section className="section-card">
          <h2>Mushy vs. EARS - Side by Side</h2>
          <div className="code-block">
            <pre>{`MUSHY                          EARS (checkable)
"Login should work well"   →   WHEN a user enters a valid email and
                               password, the app shall log them in and
                               redirect to the dashboard.

                               IF the email or password is invalid, THEN
                               the app shall show "Invalid credentials" and
                               keep them on the login page.

"Make it secure"           →   The app shall store passwords only as salted
                               hashes, never as plain text.

                               WHILE a user is logged out, the app shall
                               deny access to all /dashboard routes.`}</pre>
          </div>
          <p>
            Notice the mushy line became <em>four</em> precise requirements. That expansion <em>is</em> the
            work - it&apos;s where you find the decisions you hadn&apos;t made yet.
          </p>
        </section>

        <section className="section-card">
          <h2>Acceptance Criteria: How You Know It&apos;s Done</h2>
          <p>
            Each requirement should come with <strong>acceptance criteria</strong> - the specific,
            observable conditions that prove it works. These are what tests get written against (a theme
            you&apos;ll see explode in LID two lessons from now).
          </p>
          <div className="code-block">
            <pre>{`Requirement: WHEN a user submits a new task, the app shall
             save it and show it at the top of the list.

Acceptance criteria:
  ✓ The task appears in the list without a page reload.
  ✓ The task persists after refreshing the page.
  ✓ Submitting an empty task shows a validation error instead.`}</pre>
          </div>
          <div className="info-box">
            <strong>Callback to Level 8:</strong> good specs are the &quot;right altitude&quot; again -
            specific enough to check, not so rigid they script every pixel. EARS keeps you in that zone
            automatically.
          </div>
        </section>

        <section className="section-card">
          <h2>Hands-On: Rewrite a Wish as EARS</h2>
          <div className="hands-on-box">
            <strong>Hands-on (20 min):</strong> Take a vague feature wish - say, &quot;users should be able
            to manage their profile.&quot; Rewrite it as 4-6 EARS requirements using the templates above
            (mix EVENT, IF/THEN, and at least one NFR like security or speed). Then add 2-3 acceptance
            criteria to the most important one. Notice how many decisions you&apos;re forced to make that
            the original wish hid. Keep this - it&apos;s the seed of your capstone spec.
          </div>
        </section>

        <QuickRef title="Lesson 74 Quick Reference" items={[
          { term: 'Checkable test', definition: 'A good requirement lets two people agree on whether the software meets it - otherwise it\'s a guess waiting to happen' },
          { term: 'Functional requirement (FR)', definition: 'What the system does - a concrete behavior or feature' },
          { term: 'Non-functional requirement (NFR)', definition: 'How well it does it - speed, security, accessibility, reliability' },
          { term: 'EARS', definition: 'Easy Approach to Requirements Syntax - sentence templates with a clear trigger and response' },
          { term: 'The five EARS patterns', definition: 'Ubiquitous, Event (WHEN), State (WHILE), Conditional (IF/THEN), Optional (WHERE)' },
          { term: 'Acceptance criteria', definition: 'The specific, observable conditions that prove a requirement is met - what tests check' },
        ]} />

        <LessonNav
          level={9}
          prev={{ href: '/level9/lesson73', label: 'What Is Spec-Driven Development?' }}
          next={{ href: '/level9/lesson75', label: 'The SDD Toolbox' }}
          currentLessonId="l9-74"
        />
      </main>
    </div>
  )
}
