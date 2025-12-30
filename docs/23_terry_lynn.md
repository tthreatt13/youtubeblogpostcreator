---
Meta Title: How to Build an Apple Watch App with AI: Cursor & Xcode Workflow
Meta Description: Product Manager Terry Lynn breaks down his 'dual-wielding' workflow for building iOS apps using Cursor, Xcode, and AI-driven PRDs.
Keywords: AI mobile development, Cursor for iOS, Xcode AI workflow, vibe coding, building apps with LLMs, SwiftUI AI generation
---

# How I AI: How I Built an Apple Watch Workout App Using Cursor with Terry Lynn

We have seen many web developers using AI to speed up their workflows.

But mobile? That is a different beast entirely.

Mobile apps come with unique constraints—compile errors, specific IDE requirements (Xcode), and the inability to "hot reload" in a browser.

In this episode, I sat down with Terry Lynn, a Product Manager and self-proclaimed "vibe coder" who built *Copper's Corner*, a voice-powered fitness tracker for iOS and Apple Watch.

[FRAME_0]

Terry isn't just generating code; he has built a sophisticated "AI PM" workflow that turns fuzzy ideas into structured, shipping products.

Here is how he dual-wields Cursor and Xcode to build better, faster.

## The "Dual Wielding" Setup

If you have tried building iOS apps with AI, you know the struggle. You usually need Apple's Xcode for building and debugging, but you want the AI-powered Cursor for the actual coding.

Terry’s solution is what he calls "dual wielding."

He points both Cursor and Xcode to the same local folder. He writes the code in Cursor to leverage the LLMs, but keeps Xcode open side-by-side to catch compile errors and run the simulator.

It is not the seamless "localhost" experience of web dev, but it bridges the gap. Cursor handles the logic; Xcode handles the reality check.

## The 3-Step "AI PM" Workflow

Terry treats the AI less like a magic wand and more like a junior engineer that needs an excellent manager.

He doesn't just ask for code. He uses a rigorous three-step process rooted in Product Management principles:

1.  **PRD Create:** He feeds a ticket or idea into a Cursor rule that generates a structured Product Requirements Document (PRD). It outlines goals, user stories (in Gherkin format), and technical implementation plans.
2.  **PRD Review:** This is the killer feature. He has a separate rule where the model reviews the PRD it just wrote. He asks it to rate the plan out of 10. If it is a 7/10, he asks, "Why?" and forces it to iterate until it is a 9 or 10.
3.  **Execute:** Only once the plan is solid does he run the execution rule, which breaks the build into phases with strict checklists.

[FRAME_1]

By forcing the AI to "think" before it codes, he avoids the hallucination loops that plague complex projects.

## Token Conservation and "Vibe Refactoring"

One of the most interesting takeaways from Terry is his approach to file size.

We often let AI generate massive, monolithic files. But LLMs degrade in performance when they have to read 1,500 lines of context to change a button color.

Terry enforces a strict limit: files should be 200–400 lines max.

When things get messy, he runs a "Vibe Refactoring" play. He tasks the AI specifically with cleaning up code, breaking it into smaller components, and optimizing for *its own* future understanding.

He is essentially optimizing his codebase not just for human readability, but for machine readability.

## Analog Prototyping

Sometimes the best AI tool is a stack of index cards.

Terry prototypes his UI by drawing on physical note cards while riding the subway. He snaps a photo, uploads it to GPT-4o, and asks it to convert the sketch into a high-fidelity mockup or even SwiftUI code.

[FRAME_2]

It is a perfect example of low-tech meeting high-tech to unblock creativity.

## The "Reverse Rubber Duck"

Finally, Terry actually uses his AI workflow to learn Swift, not just to bypass it.

He has a "Rubber Duck" rule where he feeds the generated code back to the AI and asks, "Explain this to me like I am a junior engineer." 

He quizzes himself on the output. This ensures he isn't just shipping black-box code; he is upskilling alongside his AI co-pilot.

If you are a PM looking to build, or a mobile dev looking to speed up, this workflow is the blueprint.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Paragon](https://useparagon.com/HowIAI)**: The fastest way to ship product integrations. Paragon helps developers ship new integrations in days with purpose-built products to support any use case.
- **[Miro](http://miro.com/)**: A collaborative visual platform where your best work comes to life. Miro’s Innovation Workspace helps teams turn fuzzy ideas into roadmaps and launch plans faster.

## Episode Links
* [YouTube](https://youtube.com/watch?v=_fD1PwltbuE)
* [Spotify](https://open.spotify.com/episode/7KIseAA1GEe6kYIRfqOrsB?si=a4dba6a4cdef47e2)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-i-built-an-apple-watch-workout-app-using-cursor/id1809663079?i=1000726884395)