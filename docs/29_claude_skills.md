---
Meta Title: Claude Skills Tutorial: How to Build Reusable AI Workflows
Meta Description: Learn how to build, structure, and deploy Claude Skills to automate repetitive tasks. A step-by-step guide using Claude Code and Cursor.
Keywords: Claude Skills, Anthropic, AI Agents, Claude Code, Cursor AI, Workflow Automation, SaaS Product Management
---
Oct 22, 2025

# How I AI: Claude Skills Explained with Claire Vo

Welcome back to How I AI.

I’m Claire Vo, product leader and AI obsessive. I'm on a mission to help you build better with these new tools.

This week, we are diving into a brand new feature from Anthropic: **Claude Skills**.

This feature lets anyone create and load up Claude Code (the API) or Claude.ai with specific skills and tools it can call on at any time.

Today, I’m going to give you a view into how to create skills, what they actually are, and a couple of ideas on how you can integrate them into your workflows.

Let’s get to it.

[FRAME_0]

## What Are Claude Skills?

First, let's define what we are talking about.

Claude agent skills are a specific set of instructions and context that Claude can call upon to execute a specific set of tasks.

They solve an interesting problem for anyone using AI: **reusable workflows**.

You want a set of instructions you can call on demand, tailored to the context of your conversation.

Now, I know what you’re thinking. "Why can't I just use Claude Projects or OpenAI Custom GPTs?"

Here is the difference.

Projects and GPTs stick with the context you've loaded into them. Once you set up a project, the chats associated with it are locked into that general context. They aren't dynamic.

Claude Skills allow you to define task-specific instructions, examples, and even scripts that allow a general-purpose chatbot to execute specific tasks on your behalf.

And the best part? It uses natural language.

If these models are so great at natural language, we should be able to define our tools that way. That is exactly what Anthropic has done here.

## The Anatomy of a Skill

These are clearly primitives built by engineers, so let me translate them for everyday use.

A Claude Skill is essentially a folder.

Inside that folder, you must have a `skill.md` file. This markdown file contains:

1.  **Metadata:** The name and description of the skill.
2.  **Instructions:** Your prompt engineering goes here.
3.  **Resources:** Relative links to other files or folders.

This structure allows you to bundle additional content—such as templates or examples—using relative file references.

It helps Claude manage context better. You get the agent instructions, and when necessary, it pulls in the contextual files linked from the agent.

[FRAME_1]

## How to Build Skills (The Efficient Way)

Anthropic suggests using a "Create Skill" skill inside Claude to generate these.

I tried it. It generated about 12 files when I only needed five, and the download failed.

Here is a better way: **Use Cursor.**

I found that creating Claude Skills in Cursor was significantly faster and cleaner.

Here is my workflow:

1.  Create an empty folder on your local machine called "Claude Skills."
2.  Open that folder in Cursor.
3.  Start a chat and paste the link to the Anthropic documentation.
4.  Prompt Cursor: *"Create me an agent/skill for creating Claude Skills."*

Instead of relying on the web app, I used Cursor to read the docs and generate a "meta-skill"—a skill designed to build other skills.

It took about three minutes.

Cursor created the directory, the `skill.md` file, the metadata, and even a Python validation script to ensure the formatting was correct.

## Practical Examples: From Change Logs to Newsletters

Once I had my "Skill Creator" skill, I put it to work.

I opened **Claude Code** (the command line interface) in that directory. Because the files were local, Claude Code picked up the skill immediately.

I entered the prompt: *"Use the create skill to create a skill for turning change log entries into a user-facing newsletter."*

Claude Code:

*   Read the repository.
*   Found the create skill markdown file.
*   Created a new directory for the newsletter skill.
*   Wrote the content and validated it.

Now, when I want to write my weekly update, I don't need a magic keyword.

I paste my technical changelog and say, *"Here is the latest changelog."*

Claude assesses the required skill and generates the newsletter.

## Deploying to the Web

If you prefer the web interface over the command line, deployment is simple.

Since a skill is just a folder structure, you zip up the folder.

Go to Claude.ai, upload the zip file into your project capabilities, and you are good to go.

[FRAME_2]

I successfully uploaded a "Demo to Follow-up" skill this way.

Now, I can drop a transcript of a ChatPRD demo into the chat, and Claude automatically formats a personalized follow-up email for the prospect.

## Final Thoughts

Claude Skills are a powerful way to define and discover tasks you do repeatedly.

If you find yourself constantly analyzing data a specific way, creating a document, or running a script, you need a Skill.

Stop copying and pasting prompts from a Google Doc. Give this structured framework a try.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[ChatPRD](https://www.chatprd.ai/howiai)**: An AI co-pilot that helps you write great product docs, automate tedious coordination work, and get strategic coaching from an expert AI CPO.

## Episode Links
* [YouTube](https://youtube.com/watch?v=MZZCW179nKM)
* [Spotify](https://open.spotify.com/episode/6IGxKh6t8KuSdR1HTQb6fq?si=28ef4095cb9f4a47)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/claude-skills-explained-how-to-create-reusable-ai-workflows/id1809663079?i=1000732963909)