---
Meta Title: Beginner's Guide to AI Coding: From PRD to Prototype with Cursor
Meta Description: Claire Vo demonstrates a complete 0-to-1 workflow for beginners to build a web app using ChatPRD, Cursor, and GitHub Desktop without writing code manually.
Keywords: AI coding for beginners, Cursor tutorial, vibe coding, ChatPRD, prototyping with AI, Next.js tutorial
---
Nov 5, 2025

# How I AI: The Complete Beginner’s Guide to Coding with AI from PRD to Prototype with Claire Vo

Welcome back to How I AI. I’m Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools.

Today is what I call a "safe space" episode.

The number one question I get—my favorite "safe space" question—is: "Claire, if I have literally never written a line of code, how do I actually get started?"

We talk a lot about "vibe coding" and prototyping, but we rarely show the messy middle of going from zero files on your computer to a running application.

So today, we are doing it live.

I’m going to show you exactly how I built a personal project hub from scratch. We’re going to hit hiccups, we’re going to pivot, and by the end, we’ll have a locally running app where you can manage docs and prototypes.

Let’s get to it.

[FRAME_0]

## Starting with the Requirements

Like all good founders and Product Managers, I start with a requirements document. I’m not just going to open an editor and stare at a blinking cursor.

For this project, I want to build a simple "Personal Project Hub." It needs to do two things:

1.  **Host Documentation:** Store PRDs and ideas in markdown.
2.  **Host Prototypes:** A place to view the little interactive apps I build.

I used **ChatPRD** to generate a quick requirements doc. Even for a mini-project, this step is crucial because it gives the coding AI a better context for the next step.

## The Pivot: When Vibe Coding Goes Wrong

Here is a lesson in real-time AI development.

I initially deployed my PRD to **v0 on Vercel**. Usually, I love v0 for UI prototyping. But today, it got too smart for its own good.

It tried to build me a full file management system, a sandbox environment, and a complex architecture I didn't ask for. It was scope creep in real-time.

So, I did what you should feel comfortable doing: **I abandoned it.**

If a tool is over-engineering your simple idea, walk away. It’s cheap to fail fast here.

## Starting from Scratch in Cursor

Instead, I opened **Cursor** to an empty folder on my desktop.

For this workflow, I used **Composer** (specifically the Composer 1 model, which is blazing fast).

I pasted my requirements and gave it a simple instruction:

*"I want a very simple Next.js app setup where I can keep a repository of markdown docs and code in different directories. Start from scratch. Give me all the steps."*

[FRAME_1]

Cursor didn’t just write the code; it acted as a senior engineer setting up the environment. It installed TypeScript, Tailwind, and ESLint. It built the directory structure.

Crucially, it told me how to run it.

By typing `npm run dev` in the terminal, I had a living, breathing web app running on localhost:3000. No manual coding required.

## Version Control for Non-Coders

If you are not a software engineer, the command line can be scary. But you still need to save your work.

This is where **GitHub Desktop** comes in.

You don't need to memorize Git commands. GitHub Desktop gives you a visual interface to see your changes (green for added, red for removed) and commit them.

We initialized the repo and pushed our first commit. Now we have a save point.

## Creating AI Agents to Do the Work

This is where it gets meta.

I want this hub to help me write better PRDs. So, I created a folder called `agents` and added a file named `prd.md`.

I used Cursor to write instructions *inside* that file, essentially programming an AI agent on how to write product specs in my specific format.

Now, whenever I want to write a new PRD, I just reference that file.

I tested it by generating a PRD for a "Neighborhood Task Scheduler" (a little app for my kid’s gardening business). Cursor read my agent instructions and generated a perfectly formatted doc in my new docs folder.

Because we built the web app to read markdown files, the PRD was displayed in the browser immediately.

[FRAME_2]

## From Doc to Prototype

Now for the fun part: writing code.

I asked Cursor to look at that new "Task Scheduler" PRD and build a clickable prototype in the prototypes folder.

It scaffolded the whole thing—login screens, task lists, input fields.

Was it perfect? No. The text was gray and hard to read. But this is the power of AI coding. I didn't hunt for CSS classes. I just took a screenshot, pasted it into the chat, and said: *"Fix the gray text."*

And it did.

## Making It Cute

We ended by up-leveling the design. I told Cursor to make the homepage "prettier and cuter" and rename it to "Personal Hub."

It added gradients, softened the UI, and made it a place I actually want to work in.

## The Takeaway

In about 30 minutes, we went from nothing to a functional, locally hosted web application with version control, custom AI agents, and a working prototype.

If you’ve been waiting for permission to start coding, this is it.

Download Cursor, open an empty folder, and tell it what you want to build.

## Thanks to Our Sponsors

This episode is brought to you by:

- **[ChatPRD](https://www.chatprd.ai/howiai)**: An AI co-pilot that helps you write great product docs, automate tedious coordination work, and get strategic coaching from an expert AI CPO.

## Episode Links

* [YouTube](https://youtube.com/watch?v=k0gmTOm1eus)
* [Spotify](https://open.spotify.com/episode/4mNgBIyzqkwFH4bZKvcwOy?si=762d619a7279459b)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/the-complete-beginners-guide-to-coding-with-ai-from-prd/id1809663079?i=1000735377061)