'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson45() {
  return (
    <div className="lesson-layout">
      <Sidebar level={5} currentLessonId="l5-45" />
      <main className="lesson-main">
        <LessonHeader
          level={5}
          lessonNumber={45}
          duration={35}
          title="Git Workflow with AI"
          subtitle="Write better commits, generate changelogs, and resolve merge conflicts using AI"
        />

        <section className="section-card">
          <h2>AI in Your Git Workflow</h2>
          <p>
            Git is where development work gets captured, reviewed, and shipped. AI can improve
            every stage: writing descriptive commit messages, summarizing changes for PRs,
            generating changelogs, and resolving tricky merge conflicts - all without leaving
            your terminal.
          </p>
          <div className="info-box">
            <strong>Key wins:</strong> Consistent commit messages, richer PR descriptions,
            automated changelogs from commit history, and faster conflict resolution with AI
            explaining what both sides changed.
          </div>
        </section>

        <section className="section-card">
          <h2>Writing Better Commit Messages</h2>
          <p>
            Vague commits like <code>fix stuff</code> or <code>update</code> make history useless.
            Use AI to generate structured, meaningful messages from your staged diff.
          </p>
          <div className="code-block">
            <pre>{`# Stage your changes, then ask Claude Code:
git add -p  # stage specific hunks
git diff --staged | claude "Write a conventional commit message for these changes.
Format: type(scope): description
Types: feat, fix, refactor, docs, test, chore"

# Example output:
# feat(auth): add JWT refresh token rotation
# - Tokens now auto-rotate on each request
# - Old tokens invalidated after rotation
# - Added 15-minute expiry to refresh tokens

# Or use Copilot CLI (gh copilot):
gh copilot suggest "git commit message for adding rate limiting to API"`}</pre>
          </div>
          <div className="info-box">
            <strong>Conventional Commits format:</strong> <code>type(scope): message</code>
            <br />Types: feat, fix, docs, style, refactor, perf, test, chore, ci
          </div>
        </section>

        <section className="section-card">
          <h2>Generating PR Descriptions</h2>
          <p>A good PR description saves reviewers time. Generate one from your commit log:</p>
          <div className="code-block">
            <pre>{`# Get commits since branching from main:
git log main..HEAD --oneline > commits.txt

# Ask AI to write the PR description:
claude "Based on these commits, write a GitHub PR description with:
- Summary (2-3 sentences)
- What changed (bullet points)
- How to test
- Any breaking changes

$(cat commits.txt)"

# Or paste the full diff for more detail:
git diff main..HEAD | claude "Write a comprehensive PR description for this diff"`}</pre>
          </div>
          <p>
            The result is a structured description that reviewers appreciate and that creates
            a permanent record of why the change was made.
          </p>
        </section>

        <section className="section-card">
          <h2>Resolving Merge Conflicts with AI</h2>
          <p>
            Merge conflicts are stressful because you need to understand both sides of the
            change. AI can explain what each side did and suggest the correct resolution.
          </p>
          <div className="steps-list">
            <div className="step">
              <strong>Step 1 - Trigger the conflict and see what AI sees</strong>
              <div className="code-block">
                <pre>{`# When git shows conflict markers:
<<<<<<< HEAD
const timeout = 5000;  // your change
=======
const timeout = 30000; // their change
>>>>>>> feature/slow-network`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 2 - Ask AI to explain and resolve</strong>
              <div className="code-block">
                <pre>{`# Paste the conflicted file into Claude Code:
claude "This file has merge conflicts. Explain what each side changed
and suggest the correct resolution, preserving both teams' intentions."

# Or in Copilot Chat:
# /fix - it detects conflict markers and proposes resolutions`}</pre>
              </div>
            </div>
            <div className="step">
              <strong>Step 3 - Review and accept</strong>
              <p>
                Always review AI's resolution. It may not know which timeout value is correct
                for your use case - that business context is yours to provide.
              </p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Generating Changelogs</h2>
          <p>Turn your git log into a human-readable changelog for releases:</p>
          <div className="code-block">
            <pre>{`# Get commits between two tags / releases:
git log v1.2.0..v1.3.0 --oneline > release-commits.txt

# Ask AI to generate a changelog:
claude "Generate a CHANGELOG.md section for version 1.3.0
from these git commits. Group into: New Features, Bug Fixes,
Breaking Changes, and Internal Improvements.
$(cat release-commits.txt)"

# Example output:
## [1.3.0] - 2025-10-15
### New Features
- Added JWT refresh token rotation (#auth)
### Bug Fixes
- Fixed race condition in checkout flow
### Breaking Changes
- Auth API endpoint moved from /auth to /api/auth`}</pre>
          </div>
        </section>

        <section className="section-card">
          <h2>Interactive Git Help with Claude Code</h2>
          <p>Use Claude Code as a git expert when you're unsure of the right command:</p>
          <div className="code-block">
            <pre>{`# Ask for git commands you can't remember:
claude "How do I squash my last 5 commits into one before merging?"
claude "What's the git command to find which commit introduced a bug in auth.ts?"
claude "How do I undo my last commit but keep the changes staged?"

# Git bisect workflow with AI:
claude "Walk me through using git bisect to find when the login bug was introduced.
The bug exists in HEAD but not in the v1.0 tag."

# Stash management:
claude "I have changes in 3 files. I need to switch branches. What's the
safest way to stash only the changes in src/auth/ and keep the rest?"`}</pre>
          </div>
          <div className="info-box">
            <strong>Claude Code advantage:</strong> It can read your repo context, check
            current branch, staged files, and recent commits to give precise answers
            rather than generic git docs.
          </div>
        </section>

        <section className="section-card">
          <h2>Automating Repetitive Git Tasks</h2>
          <p>Use AI to write git hooks and scripts that enforce quality automatically:</p>
          <div className="code-block">
            <pre>{`# Ask AI to write a commit-msg hook:
claude "Write a Git commit-msg hook that enforces conventional commit format
and rejects commits without a type prefix like feat:, fix:, docs: etc."

# Ask AI to write a pre-push hook:
claude "Write a pre-push hook that runs npm test and blocks push if tests fail"

# The hooks go in .git/hooks/ (or use husky for team sharing):
npm install --save-dev husky
npx husky add .husky/commit-msg 'npx commitlint --edit $1'`}</pre>
          </div>
          <div className="hands-on-box">
            <strong>Hands-on:</strong> Stage some changes in a project, then run:
            <code>git diff --staged | claude "Write a conventional commit message for this"</code>.
            Use the AI-generated message for your actual commit. Compare it to what you
            would have written yourself.
          </div>
        </section>

        <QuickRef title="Lesson 45 Quick Reference" items={[
          { term: 'Commit message', definition: 'git diff --staged | claude "Write a conventional commit message"' },
          { term: 'Conventional format', definition: 'type(scope): description - feat, fix, refactor, docs, test, chore' },
          { term: 'PR description', definition: 'git log main..HEAD --oneline | claude "Write a PR description"' },
          { term: 'Merge conflict', definition: 'Paste conflicted file, ask AI to explain both sides and suggest resolution' },
          { term: 'Changelog', definition: 'git log v1.0..v2.0 --oneline | claude "Generate CHANGELOG section"' },
          { term: 'Git help', definition: 'claude "How do I squash my last 5 commits?" - use Claude as a git expert' },
          { term: 'Git hooks', definition: 'Ask AI to write commit-msg or pre-push hooks, deploy via husky' },
        ]} />

        <LessonNav
          level={5}
          prev={{ href: '/level5/lesson44', label: 'Refactoring & Code Review' }}
          next={{ href: '/level5/lesson46', label: 'Agentic Coding' }}
          currentLessonId="l5-45"
        />
      </main>
    </div>
  )
}
