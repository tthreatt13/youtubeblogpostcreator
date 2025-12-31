---
Meta Title: A 3-Step AI Coding Workflow for Solo Founders | How I AI
Meta Description: Stop vibe coding and start shipping. Ryan Carson shares his structured Cursor workflow using PRDs, Task Lists, and MCPs to build scalable products.
Keywords: Cursor AI workflow, AI for product managers, ChatPRD, Model Context Protocol, vibe coding, solo founder stack, AI coding tips
---
May 26, 2025

# How I AI: A 3-step AI coding workflow for solo founders with Ryan Carson

2025 is definitely the year of the "vibe coder."

But here is the hard truth: you cannot always vibe your way to a scalable execution strategy.

While it is tempting to open Cursor and start typing natural language commands, that approach often leads to spaghetti code and frustration.

[FRAME_0]

Ryan Carson, a five-time founder with 20 years of experience, joined the show to dismantle this bad habit.

He showed us exactly how he brings Product Requirement Docs (PRDs), structured task lists, and advanced prompting techniques into Cursor.

His mission? To make sure he isn't just vibing—he is building the right things.

## The mistake everyone makes with AI coding

The biggest mistake we all make is rushing the context.

We do not have the patience to tell the AI what it actually needs to know to solve the problem.

Ryan argues that if we slow down just a tiny bit and follow a structured process, we actually speed everything up.

AI models are like genius PhD students who lack common sense.

They need clear instructions, or they cannot connect the simple, obvious dots that a senior engineer sees immediately.

[Ryan's open source AI developer tasks](https://github.com/snarktank/ai-dev-tasks)

## Step 1: Establish the rules of engagement

Ryan’s workflow starts before he writes a single line of code.

He uses a `.cursorrules` file to define exactly how the AI should behave.

He doesn't just ask for code; he loads specific rule files into the context window.

For example, he has a specific rule for generating PRDs.

His prompt explicitly tells the AI to write a PRD "suitable for a junior developer to understand and implement."

This forces the model to keep things simple, explicit, and actionable.

## Step 2: The AI-generated PRD

Once the rules are loaded, Ryan inputs a high-level request.

*"I'd like to add a report that shows me all the boat names of members and how many emails they've been sent."*

The AI then generates a structured PRD in markdown.

[FRAME_1]

It outlines the problem, the user, and the functional requirements.

Instead of jumping straight to coding, this step forces clarity.

It ensures the "junior developer" (the AI) and the "product manager" (you) agree on what is being built.

## Step 3: From PRD to Task List

This is where most vibe coders get stuck.

They try to feed the whole PRD to the AI and say, "Build this."

Ryan takes an intermediate step: generating a Task List.

He has a specific rule file for `generate_tasks`.

He feeds the PRD into this rule, and the AI outputs a checkbox-style markdown file of specific, granular engineering tasks.

This list lives in a `tasks` folder in his repo.

It acts as the project manager.

## Step 4: Iterative execution

With the task list generated, the workflow shifts to execution.

Ryan uses a `task_list_management` rule.

This rule instructs the AI to:

1.  Read the task list.
2.  Execute **one** subtask at a time.
3.  Mark it as complete.
4.  Stop and wait for user confirmation.

This "human in the loop" approach is critical.

It prevents the AI from hallucinating a complex solution or introducing bugs that are hard to unwind later.

Ryan commits his code after every major parent task is complete, ensuring he always has a clean save point.

## Bonus: Controlling the web with MCPs

Ryan is also experimenting with the Model Context Protocol (MCP).

He demonstrated using Browserbase to control a headless browser directly from Cursor.

[FRAME_2]

He can ask the AI to "navigate to ChatPRD and take a screengrab," and the MCP executes it in the cloud.

While this feels like a magic trick, the implications for front-end testing are massive.

Instead of manually clicking through your app to reproduce bugs, you can instruct the AI to navigate, interact, and report back.

## The Solo Founder Superpower

For product leaders and solo founders, this workflow is a force multiplier.

Ryan admits he cannot code as well as a dedicated senior engineer.

He cannot think as deeply as a seasoned CTO.

But with this stack—PRDs, structured task lists, and AI execution—he can absolutely build the company.

By treating the AI less like a magic wand and more like a team member that needs context, you stop vibing and start shipping.

## 

## Thanks to Our Sponsors

This episode is brought to you by:

- **[ChatPRD](https://www.chatprd.ai/howiai)**: An AI co-pilot that helps you write great product docs, automate tedious coordination work, and get strategic coaching from an expert AI CPO.
- **[Notion](https://notion.com/howiai)**: Notion is now your do-everything AI tool for work, with new AI meeting notes, enterprise search, and research mode.

## Episode Links

* [YouTube](https://youtube.com/watch?v=fD4ktSkNCw4)
* [Spotify](https://open.spotify.com/episode/365CUZq3mFnXpUOKm5FeCq?si=94a92b249a554e6b)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/a-3-step-ai-coding-workflow-for-solo-founders-ryan/id1809663079?i=1000709888231)