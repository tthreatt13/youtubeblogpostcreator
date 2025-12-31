---
Meta Title: Enterprise AI Coding Strategies with LaunchDarkly's Zach Davis
Meta Description: Learn how LaunchDarkly uses AI agents like Devin and Cursor to burn tech debt, centralize documentation, and scale engineering beyond 'vibe coding.'
Keywords: AI engineering, Cursor rules, Devin AI, enterprise software development, tech debt reduction, LaunchDarkly, AI documentation
---
July 21, 2025

# How I AI: Successfully Coding with AI in Large Enterprises with Zach Davis

Vibe coding is not an acceptable enterprise development strategy.

I love it. I can do 100 commits a week on my own side project. But when you are working on a codebase like LaunchDarkly that powers trillions of experiences every day, the stakes are different.

You cannot use the same tactics a "vibe coder" uses in a 100-person engineering organization.

[FRAME_0]

Zach Davis, Director of Engineering at LaunchDarkly, joined the show to discuss how they are moving beyond experimentation. 

We talked about deploying AI agents in a real engineering team, burning down tech debt, and maintaining a high hiring bar.

Here is how Zach is operationalizing AI at scale.

## What is Good for Humans is Good for LLMs

When Zach first tried to bring AI tools into the LaunchDarkly monorepo, he struggled.

The codebase is ten years old. It is massive. It has a frontend, a backend, and rigorous testing standards.

Zach realized that if an AI agent can't understand how to contribute to the repo, a new human hire probably can't either.

His solution was radical consolidation.

Instead of keeping documentation in Confluence or Google Docs, he moved detailed documentation directly into the repo under a `docs` directory. This includes frontend organization, accessibility standards, and JS style guides.

By putting the documentation next to the code, both humans and LLMs can access it instantly.

## One Rule Set to Rule Them All

A major frustration for engineering teams right now is tool fragmentation.

You might have a `.cursorrules` file, a specific configuration for Devin, and instructions for GitHub Copilot.

Zach solved this by creating a centralized `agents` directory.

[FRAME_1]

In this directory, he keeps the source of truth for specific engineering tasks. For example, he has a file called `typescript-essentials.md` that links out to the comprehensive style guides.

Now, his specific tool configurations (like `.cursorrules`) point to that central file.

If he updates the TypeScript guidelines in one place, Cursor, Devin, and Windsurf all get smarter at the same time.

It eliminates drift between tools and ensures that every agent codes to the same standard.

## Burning Down Tech Debt with Agents

Tech debt is the perfect use case for AI in a medium-to-large organization.

Zach shared a specific example regarding frontend unit tests. When running `yarn test`, the console was spitting out over 1,200 lines of noise and warnings.

It was annoying, but not annoying enough for a human to spend weeks fixing it. It was a classic tragedy of the commons.

Zach used AI to solve it.

First, he piped the log output to a file. Then, he asked Claude to analyze the logs and categorize the warnings by severity and file location.

[FRAME_2]

Claude generated a prioritized checklist in a markdown file.

Now, Zach—or any engineer on the team—can tag an agent like Devin or use Cursor to "pick up the next task on the list."

It turns a massive, insurmountable mountain of tech debt into bite-sized, executable tasks that bots can handle in the background.

## AI as a Management Coach

Zach also uses AI to solve a human problem: hiring consistency.

LaunchDarkly has strict rubrics for interviews, but interviewers vary in how well they fill out their scorecards.

Zach created a custom GPT loaded with the company's hiring rubrics and examples of excellent scorecards.

Now, when he receives a vague scorecard, he runs it through GPT.

The AI analyzes the feedback against the rubric, rates the quality of the scorecard, and even drafts a polite Slack message Zach can send to the interviewer with coaching tips.

It allows him to raise the hiring bar without manually rewriting every piece of feedback.

## The Takeaway

If you are struggling to get AI adopted in a large org, stop trying to make everyone a vibe coder.

Focus on infrastructure.

Clean up your documentation. Centralize your rules. Creating workflows that allow agents to handle the work no human wants to do.

That is how you scale.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[WorkOS](https://workos.com)**: The API for enterprise features like SSO, SCIM, and audit logs. Think of it like Stripe for becoming enterprise-ready.
- **[Maven](https://maven.com/lenny)**: Check out Lenny’s List for hands-on AI engineering courses curated by Lenny Rachitsky and Claire Vo.

## Episode Links
* [YouTube](https://youtube.com/watch?v=HtzkfjEH-GU)
* [Spotify](https://open.spotify.com/episode/46WZmFWojfyGRJ1Ao5CW0X?si=60a250ba49064d90)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/successfully-coding-with-ai-in-large-enterprises/id1809663079?i=1000718292323)