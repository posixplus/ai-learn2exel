'use client'
import LessonHeader from '@/components/lesson/LessonHeader'
import Sidebar from '@/components/lesson/Sidebar'
import LessonNav from '@/components/lesson/LessonNav'
import QuickRef from '@/components/lesson/QuickRef'

export default function Lesson24() {
  return (
    <div className="lesson-layout">
        <Sidebar level={3} currentLessonId="l3-24" />
        <main className="lesson-main">
          <LessonHeader level={3} lessonNumber={24} duration={90}
            title="Cowork + Skills: Automating Your Work"
            subtitle="Build custom skills from scratch, chain tools, and automate the tasks you do every day" />

          <section className="section-card">
            <h2>Cowork vs Claude Code — When to Use Which</h2>
            <div className="steps-list">
              <div className="step">
                <strong>Claude Code — for technical work</strong>
                <p>Terminal-based. Deep code editing, file operations, Git, shell commands, debugging. Built for developers who live in the terminal.</p>
              </div>
              <div className="step">
                <strong>Cowork — for knowledge work</strong>
                <p>Desktop app. Skills system, plugins, Desktop Commander, scheduled tasks, GUI-friendly. Built for writing, research, analysis, and cross-tool automation.</p>
              </div>
            </div>
            <p>Power users use both. They share the same Claude model and MCP ecosystem — what you set up in one works in the other.</p>
          </section>

          <section className="section-card">
            <h2>How the Skills System Works</h2>
            <p>Skills are triggered programs that give Claude specialized capabilities. Each skill is defined by a <code>SKILL.md</code> file — a markdown document Claude reads before executing the skill.</p>
            <p>When you describe a task in Cowork, Claude identifies the matching skill and follows its SKILL.md instructions using whatever tools and MCPs are available. Skills are composable — one skill can call another.</p>
          </section>

          <section className="section-card">
            <h2>Anatomy of a SKILL.md</h2>
            <p>Before building one, understand what a skill file contains. Here's the actual structure of a real built-in skill — <code>daily-briefing</code>:</p>
            <pre>{`# Daily Briefing Skill

## When to Use
Trigger when user asks for: "daily briefing", "morning update", 
"what's on my plate today", "start my day", "what do I need to focus on".

## What You Need
- Google Calendar MCP (gcal_list_events)
- Gmail MCP (gmail_search_messages)  
- Task management file at ~/TASKS.md (if exists)

## Instructions

### Step 1: Get Today's Calendar
Call gcal_list_events with:
  - timeMin: today at 00:00 local time
  - timeMax: today at 23:59 local time
  - singleEvents: true
  - orderBy: startTime

### Step 2: Check Email Priority
Call gmail_search_messages with query: "is:unread is:important"
Identify emails needing response today (look for: deadlines, questions 
directed at user, meeting requests, anything marked urgent).

### Step 3: Load Tasks (if available)
If ~/TASKS.md exists, read it. Extract all incomplete items 
(lines starting with "- [ ]"). Sort by any priority markers.

### Step 4: Synthesize and Format

Output exactly this structure:

## Good morning! Here's your {day}, {date}

### 📅 Today's Schedule ({N} meetings)
{chronological list, each: time — title — attendees if relevant}

### 📧 Email Actions Needed ({N} emails)  
{list: sender — subject — what action is needed — deadline if stated}

### ✅ Top Tasks
{top 3 incomplete tasks, most important first}

### 🎯 Recommended Focus for Today
{1-2 sentence recommendation on what to tackle first and why}

---
_Briefing generated at {time}_`}</pre>
          </section>

          <section className="section-card">
            <h2>End-to-End: Building a "Meeting Notes Extractor" Skill</h2>
            <p>This skill takes raw meeting notes (bullet points, voice transcript, rough text) and outputs a clean structured summary. Here's the complete build process:</p>
            <div className="steps-list">
              <div className="step">
                <strong>Step 1: Create the skill directory</strong>
                <pre>{`mkdir -p ~/.claude/skills/meeting-notes-extractor`}</pre>
              </div>
              <div className="step">
                <strong>Step 2: Write the SKILL.md</strong>
                <p>Create <code>~/.claude/skills/meeting-notes-extractor/SKILL.md</code>:</p>
                <pre>{`# Meeting Notes Extractor Skill

## When to Use
Trigger when user says: "extract meeting notes", "clean up these notes",
"process my meeting notes", "format this meeting summary", or pastes
raw meeting notes and asks for a summary.

## What You Need
No MCPs required. Works on text provided directly by the user,
or a file path they specify.

## Instructions

### Step 1: Parse the Raw Input
Read the raw notes provided. Identify:
- Meeting title / project (from context or first line)
- Date (from notes or ask user)
- Attendees (look for names, @mentions, or "Present:" sections)
- The overall meeting goal/agenda

### Step 2: Extract Key Elements
Scan the full notes for:
- DECISIONS: Any statement where a choice was made or direction agreed
  (look for: "we decided", "agreed to", "going with", "confirmed", "approved")
- ACTION ITEMS: Any task assigned to a person with implied deadline  
  (look for: names + will/should/needs to/by [date], "AI:" prefix, "TODO:")
- OPEN QUESTIONS: Anything unresolved, tabled, or needing follow-up
  (look for: "TBD", "need to check", "not sure", "revisit", "?")
- KEY INSIGHTS: Important points, discoveries, or context worth remembering

### Step 3: Format Output

Use exactly this template:

---
## Meeting: {title}
**Date:** {date} | **Attendees:** {list}

### 🎯 Decisions Made
{bullet list — each decision as one clear sentence}

### ✅ Action Items
| Owner | Action | Due |
|-------|--------|-----|
{row per action item — use "TBD" for unspecified owners/dates}

### ❓ Open Questions
{bullet list — each question with who owns finding the answer}

### 💡 Key Insights
{bullet list — 3-5 notable points worth remembering}

### 📋 Next Steps
{1-3 sentence summary of immediate next steps}
---

### Step 4: Offer to Save or Send
After outputting the summary, ask:
"Would you like me to: (a) save this to a file, (b) create a calendar 
follow-up, or (c) draft a follow-up email to attendees?"

## Quality Check
Before outputting, verify:
- Every action item has an owner (even if "TBD")
- No decision was missed (re-read the raw notes once more)
- The output is clean and could be sent directly to attendees

## Example Input
"call w/ sarah and mike re: API redesign. we decided to deprecate v1 
endpoints by march. sarah will write migration guide by jan 15. 
mike handles backward compat shim. still tbd: pricing for enterprise 
tier. action: follow up with legal re: data retention policy (me, asap)"

## Example Output
Meeting: API Redesign Discussion
Date: [today] | Attendees: Sarah, Mike

🎯 Decisions Made
- Deprecate v1 API endpoints by March (date TBD)
- Implement backward compatibility shim during transition period

✅ Action Items
| Owner | Action | Due |
|-------|--------|-----|
| Sarah | Write migration guide | Jan 15 |
| Mike | Build backward compat shim | TBD |
| [You] | Follow up with legal on data retention policy | ASAP |

❓ Open Questions
- Enterprise tier pricing model — who owns this decision?

💡 Key Insights
- v1 deprecation requires a migration path for existing customers
- Legal review needed before finalizing data retention approach`}</pre>
              </div>
              <div className="step">
                <strong>Step 3: Test it in Cowork</strong>
                <p>In Cowork, paste this raw text and see if the skill triggers:</p>
                <pre>{`Process my meeting notes:
"standup with team. john will fix the login bug by friday. 
we agreed to push the feature launch to next sprint. 
sarah asked about the db migration - still need to check with ops. 
everyone should update their tickets by eod."`}</pre>
                <p>Claude should recognize the trigger, follow the SKILL.md instructions, and output a clean structured summary.</p>
              </div>
              <div className="step">
                <strong>Step 4: Refine based on output</strong>
                <p>Look at what the skill produced. Common first-pass issues to fix in your SKILL.md:</p>
                <ul>
                  <li>Action items missing an owner → add more "look for" patterns to Step 2</li>
                  <li>Decisions not captured → add more trigger phrases to the DECISIONS section</li>
                  <li>Output format wrong → adjust the template in Step 3</li>
                  <li>Skill not triggering → add more phrases to "When to Use"</li>
                </ul>
                <p>Two or three iterations of this produces a skill that works reliably every time.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Using the skill-creator Skill to Build Skills</h2>
            <p>There's a meta-skill for building skills. Trigger it with: "Help me create a skill for [your use case]."</p>
            <div className="steps-list">
              <div className="step">
                <strong>What happens when you trigger skill-creator:</strong>
                <p>Claude asks you 5-7 questions:</p>
                <ul>
                  <li>"What triggers this skill? What would you say to start it?"</li>
                  <li>"What does the skill need to do, step by step?"</li>
                  <li>"What tools or MCPs does it need access to?"</li>
                  <li>"What should the output look like? Show me an example."</li>
                  <li>"Are there things it should never do?"</li>
                </ul>
              </div>
              <div className="step">
                <strong>Then Claude writes the SKILL.md for you:</strong>
                <p>Based on your answers, Claude generates a complete SKILL.md, saves it to the right location, and tests it immediately with a sample input you provide.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Plugin Architecture</h2>
            <p>Plugins bundle multiple skills + MCP configs + metadata into an installable package. Structure of a plugin:</p>
            <pre>{`my-plugin/
├── manifest.json          # ID, name, version, skills list
├── skills/
│   ├── skill-one/
│   │   └── SKILL.md
│   └── skill-two/
│       └── SKILL.md
└── mcp-configs/           # optional — MCP servers this plugin needs
    └── github.json`}</pre>
            <p>Install plugins: Cowork Settings → Plugins → Install from file. Or use the <code>create-cowork-plugin</code> skill to build and package your own.</p>
          </section>

          <section className="section-card">
            <h2>Desktop Commander — Controlling Your Mac</h2>
            <p>Desktop Commander is a built-in MCP that gives Claude direct access to your Mac. Available in both Cowork and Claude Code.</p>
            <div className="steps-list">
              <div className="step">
                <strong>Real use: Organize your Downloads folder</strong>
                <pre>{`You: My Downloads folder is a mess. Organize it by file type into 
subfolders (PDFs, Images, Documents, Archives, Other).

Claude uses Desktop Commander to:
1. list_directory("/Users/yourname/Downloads")
2. Categorize each file by extension
3. create_directory for each category that doesn't exist
4. move_file each file to the right subfolder

Result: 847 files organized in 23 seconds.`}</pre>
              </div>
              <div className="step">
                <strong>Real use: Batch rename files</strong>
                <pre>{`You: Rename all the screenshots in ~/Desktop that start with 
"Screenshot 2024" to use the format "2024-MM-DD-HH-MM.png"

Claude reads the directory, parses the existing filenames, 
maps them to the new format, and renames each one.`}</pre>
              </div>
              <div className="step">
                <strong>Real use: Process a folder of CSVs</strong>
                <pre>{`You: In ~/Documents/reports/, I have 12 monthly CSV files.
Read each one and give me a summary: total rows, date range,
and any rows where the "status" column is "error".

Claude reads all 12 files, analyzes each, and returns a 
consolidated summary table.`}</pre>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Scheduled Tasks in Practice</h2>
            <p>Use the <code>schedule</code> skill to create tasks that run automatically. Real examples:</p>
            <pre>{`# Weekly report — every Friday at 4:30pm
"Every Friday at 4:30pm, go through my completed tasks this week,
draft a weekly summary email, and save it as a Gmail draft to send
to my manager."

# Daily briefing — every weekday at 8am  
"Every weekday at 8am, run my daily briefing skill and send me
the output via Gmail."

# Monthly file cleanup — 1st of each month
"On the 1st of every month at 9am, find all files in ~/Downloads
older than 60 days and list them for me to review."

# Before every meeting — 15 minutes prior
"15 minutes before each calendar event, look up the attendees 
on LinkedIn and prepare 3 talking points based on their recent activity."`}</pre>
          </section>

          <section className="hands-on-box">
            <h3>Hands-On Exercise (~35 min)</h3>
            <div className="steps-list">
              <div className="step">
                <strong>Part A: Build the Meeting Notes Skill (20 min)</strong>
                <p>Follow the 4-step process above to create the meeting notes extractor skill. Test it with your own raw notes from a real recent meeting. Iterate once based on the output.</p>
              </div>
              <div className="step">
                <strong>Part B: Schedule One Useful Task (10 min)</strong>
                <p>Pick something you do manually every week or every morning. Use the schedule skill to automate it. Examples: daily briefing, weekly report, Friday end-of-week summary.</p>
              </div>
              <div className="step">
                <strong>Part C: Desktop Commander Quick Win (5 min)</strong>
                <p>Give Claude one Desktop Commander task that would save you time: organize a messy folder, find duplicate files, batch rename screenshots, or summarize files in a directory.</p>
              </div>
            </div>
          </section>

          <QuickRef title="Lesson 24 Quick Reference" items={[
            { term: "SKILL.md sections", definition: "When to Use, What You Need, Instructions (steps), Output Format, Example. All are important — don't skip any." },
            { term: "~/.claude/skills/", definition: "Where global custom skills live. Create folder + SKILL.md to add a new skill that works across all Cowork sessions." },
            { term: "skill-creator skill", definition: "A meta-skill that interviews you and writes the SKILL.md for you. Trigger: 'Help me create a skill for [task]'." },
            { term: "Trigger phrases", definition: "The 'When to Use' section. Add many variations — how you'd naturally ask for this. More triggers = skill activates more reliably." },
            { term: "Plugin", definition: "Bundle of skills + MCP configs + manifest. Share with team or install from others. More powerful than individual skills." },
            { term: "Desktop Commander", definition: "Built-in MCP: file ops, process management, shell commands, Spotlight search. Works in both Cowork and Claude Code." },
          ]} />

          <LessonNav
            level={3}
            prev={{ href: '/level3/lesson23', label: 'Lesson 23: Claude Code Superuser' }}
            next={{ href: '/level3/lesson25', label: 'Lesson 25: Agentic Workflows' }}
            currentLessonId="l3-24"
          />
        </main>
    </div>
  )
}
