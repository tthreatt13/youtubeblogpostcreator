---
Meta Title: ChatGPT Agent Mode & Custom Personas | How I AI with Michal Peled
Meta Description: HoneyBook's Michal Peled shows how to use ChatGPT Agent Mode for recruiting, create Custom GPT personas with NotebookLM, and automate daily tasks.
Keywords: ChatGPT Agent Mode, AI recruiting automation, Custom GPT personas, NotebookLM, HoneyBook, internal tools
---
Dec 8, 2025

# How I AI: ChatGPT Agent Mode: The 'Little Helper' That Transformed Our Work with Michal Peled

We’re going to start with something we haven’t seen on *How I AI* yet: Agent Mode in ChatGPT.

Today, I’m talking to Michal Peled, Technical Operations Engineer at HoneyBook. She is building internal tools and automations to reduce friction and make her team's life easier.

Michal walks us through advanced features of ChatGPT, including using Agent Mode for recruiting, replicating customer personas as AI identities, and a clever personal automation to save money on her commute.

Let’s get to it.

## The "Little Helper" for Recruiting

Recruiters love their jobs, but they come with a lot of mundane, repetitive work.

A significant part of their workflow involves browsing LinkedIn profiles to find relevant candidates. This can take hours of scrolling and cross-referencing against specific criteria.

Michal wanted to take that load off her hiring team.

She utilized ChatGPT’s Agent Mode to create what she calls a "little helper."

[FRAME_0]

### The Prompt Strategy

Michal’s approach to the prompt was collaborative. She didn't just ask for a search; she defined a role.

She started by telling the AI: "You are an IT recruiter."

Then, she outlined the specific workflow a human would take:

1.  **Log in** to LinkedIn (handing off control to the user if 2FA is needed).
2.  **Search** for profiles matching a specific job description.
3.  **Apply restrictions** based on the hiring team's actual requirements (e.g., must be in Israel, active in the last 3 months, current role match).

### The Result

Watching Agent Mode run is fascinating. You can actually see the cursor moving, clicking, and "thinking" as it navigates the interface.

It’s not just a chat; it’s a computer operator.

In just 10 minutes, the agent produced a list of five candidates with match scores. 

When Michal sent this list to her hiring manager, four out of the five candidates had never been found manually and were perfect fits. The fifth was already in their pipeline.

This proves that AI doesn't just offer speed; it can actually improve search quality by finding edge cases humans might miss.

## Manufacturing Personas with NotebookLM

HoneyBook invested heavily in comprehensive customer research, resulting in detailed buyer personas.

The problem? That research was trapped in hundreds of pages of PDFs and documents.

Michal wanted to turn static documents into interactive team members. She wanted to create Custom GPTs that *were* these personas.

[FRAME_1]

### The Workflow

Instead of just uploading the PDFs to ChatGPT, Michal used **Google's NotebookLM** as an intermediary step to craft the perfect system instructions.

Here is the process:

1.  **Upload Sources:** She uploaded the research documents into NotebookLM.
2.  **Prompt for Prompts:** She asked NotebookLM to act as an expert prompt engineer and write detailed system instructions for five distinct personas based *only* on the source text.
3.  **Refine & Build:** She took those generated instructions, refined them to add guardrails (no slang, no political commentary), and pasted them into the configuration of a Custom GPT.

Now, the HoneyBook team can chat with "Balanced Blake" or "Head-Down Hayden."

They can ask, "What kind of headline would catch your attention?" and get a response rooted in deep customer research rather than generic LLM assumptions.

## Solving the $40 Parking Problem

Finally, we looked at a personal workflow that solves a very San Francisco problem.

HoneyBook’s office is right next to Oracle Park. On game days, parking rates spike from $15 to over $40 an hour.

Michal needed a way to know precisely when to leave the car at home.

[FRAME_2]

She asked ChatGPT to:

*   Find all home games at Oracle Park for the next six months.
*   Filter for games starting between morning and 2:00 PM.
*   Generate an **.ICS calendar file with these specific dates marked as "Free" (so they don't block her schedule).

In seconds, she had a downloadable calendar file to share with her team—no more surprise $100 parking tabs.

It’s a simple automation, but it removes a daily friction point for the entire office.

## Thanks to Our Sponsors

This episode is brought to you by:

*   **[Brex](https://brex.com/howiai)**: The intelligent finance platform built for founders. Brex's autonomous agents help your finance stack run itself—issuing cards and filing expenses automatically.
*   **[Google DeepMind](https://ai.dev/)**: The Gemini 2.5 family of models is now generally available. From the advanced reasoning of 2.5 Pro to the speed of Flash Light, you can start building today in Google AI Studio.

## Episode Links

*   [YouTube](https://youtube.com/watch?v=-lMItuklFco)
*   [Spotify](https://open.spotify.com/episode/4iXMm9Y3wbg81ANfrqfk8C?si=58fd70a84cca463d)
*   [Apple Podcasts](https://podcasts.apple.com/us/podcast/chatgpt-agent-mode-the-little-helper-that-transformed/id1809663079?i=1000740211790)