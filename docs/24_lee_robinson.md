---
Meta Title: How to Code with Cursor: A Beginner's Guide with Lee Robinson
Meta Description: Learn how to use Cursor AI to build software, fix lint errors, and improve your writing. Lee Robinson joins Claire Vo to demystify AI coding for beginners and pros.
Keywords: Cursor AI, Lee Robinson, AI code editor, coding for beginners, cursor rules, vibe coding, AI agent tutorial
---

# How I AI: The Beginner's Guide to Coding with Cursor with Lee Robinson

Coding used to feel like a walled garden. If you didn't know the syntax, you couldn't play. But tools like Cursor are completely dismantling that barrier, turning "vibe coding" into a legitimate software development workflow.

Whether you are a seasoned engineer or someone who has never looked at a terminal in your life, the way we build is changing.

In this episode of *How I AI*, I sat down with Lee Robinson. He is teaching the future of coding at Cursor and is the perfect person to help us bridge the gap between technical complexity and creative accessibility.

We walked through how to set up Cursor, how to use AI agents to clean up your code, and even how to use developer tools to improve your non-technical writing.

Let's get to it.

## Demystifying the Interface

If you have never opened an IDE (Integrated Development Environment) before, it can look intimidating. There are file trees, colorful text, and terminal windows everywhere.

Lee breaks down Cursor's interface into three understandable panels:

1.  **The Left Panel:** Your file directory. Think of this like Finder or Explorer. It’s just where your stuff lives.
2.  **The Middle Panel:** The Editor. This is where you actually see and write the code.
3.  **The Right Panel:** The AI Agent. This is your pair programmer.

[FRAME_0]

Even if you aren't writing code from scratch, having this view is powerful. Code is readable. It is readable by human eyes.

By looking at the structure—even generated code—you start to learn foundational concepts just by exposure.

## The Guardrails: Linters, Formatters, and Tests

One of the biggest fears for new AI coders is: "What if the AI writes bad code?"

Lee suggests borrowing concepts from traditional software engineering to keep your AI agent on the rails. You want to give the AI a system that lets it check its own work.

Here are the three things you should set up:

*   **Typed Languages (like TypeScript):** This forces the code to be strict about what kind of data it uses. It prevents the AI from making "fuzzy" logic errors.
*   **Linters:** Think of a linter as a spell-checker for code. It finds errors and formatting issues.
*   **Tests:** These are separate functions that run against your code to make sure it actually does what it is supposed to do.

## The Agent in Action

The magic happens when you combine these guardrails with the Cursor Agent.

In our demo, Lee showed a repo with some linting errors. Instead of hunting through the files manually, he typed into the Agent: *"Fix the lint errors."*

[FRAME_1]

Because the Agent has access to the terminal and the codebase, it knew to run `bun run lint`. It found the issues, applied the fix, and then—crucially—re-ran the command to verify the fix worked.

It is like putting a destination into a GPS. You don't need to give turn-by-turn directions; the Agent figures out the route.

## Custom Rules and "Code Review"

One of my favorite takeaways from this episode was how Lee configures his "Rules for AI."

If you find yourself correcting the AI on the same issue three times, that is a signal. You need to create a rule.

Lee has set up a custom command called `Code Review`. When he types this, the Agent runs a specific prompt he has refined over time. It checks for things like:

*   Are there changes that affect offline capability?
*   Did we add unnecessary code?
*   Did we add high-quality tests?

This turns the AI into a proactive reviewer rather than just a passive code generator.

## Using Developer Logic for Writing

We didn't just stick to code. Lee showed me a "Mega Prompt" he uses for writing, and honestly, every marketer needs to steal this.

He treats writing with the same rigor as code, using a list of "Banned Words" to strip out AI slop.

[FRAME_2]

His system explicitly bans phrases like:
*   "Game-changing"
*   "Delve"
*   "It’s not just X, it’s Y"

It forces the AI to be specific and benefits-driven rather than relying on generic marketing fluff.

## The Spectrum of Builders

We are entering an era where you don't have to be a "software engineer" to build software. You can vibe code a prototype, build a marketing site, or create internal tools.

However, Lee and I agree: learning the foundations gives you superpowers.

If you are starting, pick up JavaScript or Python. Learn to read the syntax. Use tools like Cursor to accelerate your learning, not just to bypass it.

## Thanks to Our Sponsors

This episode is brought to you by:

*   **[Google Gemini](https://gemini.google.com/)**: The Gemini 2.5 family of models is now generally available. From the advanced reasoning of 2.5 Pro to the speed of Flash Light, you can start building in Google AI Studio today.
*   **[Persona](https://withpersona.com/howiai)**: The B2B identity platform helping teams protect what they build. Whether verifying users or fighting fraud, Persona powers identity for the internet's most trusted platforms.

## Episode Links

*   [YouTube](https://youtube.com/watch?v=Gqpk7-FruqI)
*   [Spotify](https://open.spotify.com/episode/3g5cR1q2dKmkWIS301y6Ip?si=1e21926523de4416)
*   [Apple Podcasts](https://podcasts.apple.com/us/podcast/the-beginners-guide-to-coding-with-cursor-lee/id1809663079?i=1000727850922)