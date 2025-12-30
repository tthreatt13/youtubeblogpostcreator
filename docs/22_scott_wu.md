---
Meta Title: How I AI: Scaling Engineering with Devin and Scott Wu
Meta Description: Cognition Labs CEO Scott Wu joins Claire Vo to demonstrate how to treat Devin like a junior engineer, automate workflows with DeepWiki, and multi-thread development tasks.
Keywords: Devin AI, Cognition Labs, AI Software Engineer, Scott Wu, DeepWiki, AI Workflow, ChatPRD
---

# How I AI: How Devin Replaces Your Junior Engineers with Infinite Interns with Scott Wu

Devin is asynchronous.

Once you kick off a session, Devin starts working. Looking through code. Reading documentation. But you aren't expected to sit there and watch.

It is precisely as if you gave an intern a project and they went off to work on it.

Except you have infinite interns.

In this episode of **How I AI**, I’m talking to Scott Wu, CEO and founder of Cognition Labs. He is the builder of one of my favorite AI products: Devin.

We dive deep into how Scott uses DeepWiki to scope tasks, why he tags Devin in Slack more than his human employees, and how to multi-thread your engineering work.

Let’s get to it.

## The "Junior Engineer" Mindset

The biggest mistake people make with AI coding agents is treating them like a text editor.

Scott describes Devin not as a tool, but as a junior engineer on your team.

Devin isn't going to solve a massive architectural problem or make a strategic product decision. You still need to be the senior leader.

[FRAME_0]

But Devin excels at **tasks, not problems**.

If you have a clear spec, Devin executes. This shifts your job from writing code to defining the task.

And just like a human intern, you shouldn't just send a five-word Slack message and hope for the best. You need a workflow.

## The Workflow: Research, Then Prompt

Scott showed us a specific flow using Cognition's **DeepWiki** feature. 

Before asking Devin to write code, use the wiki to understand the codebase.

For example, Scott wanted to integrate the ChatPRD MCP server into the Devin web app. 

Instead of blindly prompting "Add this server," he followed this loop:

1.  **Research:** He used DeepWiki to ask, "Show me where the MCP server list is implemented."
2.  **Context:** The AI provided a mix of natural language explanations and code snippets.
3.  **Prompt Generation:** He asked the system to generate a prompt for Devin based on that specific context.

This creates a "hand-off" moment.

You spend two minutes gathering context—just like you would explaining a task to a human at their desk—and then you let the agent run asynchronously.

## Multi-Threading Your Workday

One of the most significant advantages of this async model is **latency tolerance**.

If you are staring at a chat cursor waiting for code, 30 seconds feels like an hour.

But if you treat it like an async task, you can spin up 5 or 10 Devin sessions at once.

[FRAME_1]

You can have one agent fixing a front-end bug, another upgrading a node version, and a third researching a new library.

You don't babysit them. You go to your meetings, grab coffee, and come back to review the Pull Requests (PRs).

## Making AI Public in Slack

Scott and I both believe in using AI in public channels.

At Cognition, Devin has been institutionalized as the **first line of response**.

When a crash report comes in? Devin gets tagged.

When a UI tweak is needed? A thread starts with Devin.

This does two things:

1.  **It creates a multiplayer experience.** Humans can jump into the thread to correct Devin or add context.
2.  **It upskills the team.** Everyone sees how to prompt effectively and what the agent is capable of.

Don't hide your AI usage in DMs. Make it a team sport.

## The Top 5 Devin Use Cases

We did a lightning round on the high-leverage tasks you can offload to an AI engineer today.

Here is the consensus list:

1.  **Front-end Fixes:** Polish, UI tweaks, and "magic moments" that are high value but usually fall to the bottom of the backlog.
2.  **Version Upgrades:** The toil of upgrading libraries or migrating frameworks.
3.  **Documentation:** Having the AI read the repo and write the docs (or vice versa).
4.  **Incident Response:** First-line triage on Sentry logs or crash reports at 4:00 AM.
5.  **Adding Tests:** Writing unit tests to ensure your new feature actually works before merging.

[FRAME_2]

## Bringing Voice into Meetings

Finally, we touched on a non-engineering use case: **ChatGPT Voice Mode**.

Scott treats ChatGPT Voice like a meeting participant.

Instead of looking down at a phone to Google a fact—which breaks the social flow—he puts the phone on the table and asks the question out loud.

It changes the dynamic from "distracted researcher" to "collaborative inquiry."

Whether it is coding or meetings, the goal is the same: reduce friction and increase velocity.

## Thanks to Our Sponsors

This episode is brought to you by:
- **[Google](https://ai.dev/)**: The Gemini 2.5 family of models is now generally available. Start building in Google AI Studio today.
- **[Vanta](https://www.vanta.com/howiai)**: Automate compliance and simplify security. Listeners can claim a special offer of $1,000 off Vanta.

## Episode Links

* [YouTube](https://youtube.com/watch?v=7m_xKFqSxTo)
* [Spotify](https://open.spotify.com/episode/5lqMOYmUktAVXmOcx1RInr?si=4038b950c74e4bc4)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-devin-replaces-your-junior-engineers-with-infinite/id1809663079?i=1000725502760)