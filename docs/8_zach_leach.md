---
Meta Title: How Gamma Uses AI for Design, Research & Hiring
Meta Description: Gamma's Head of Design Zach Leach shares his workflows for analyzing 500+ feedback items with ChatGPT Deep Research and scaling art direction with Midjourney.
Keywords: ChatGPT Deep Research, Midjourney Style Reference, AI user research, Gamma design workflow, AI for product design, Replicate background remover
---
June 9, 2025

# How I AI: Gamma’s Head of Design shares how his small team uses AI for user research, art direction, and hiring with Zach Leach

Running a design team at a high-growth startup is a balancing act.

You want to obsess over the craft and the details. But you also have to manage scale, analyze mountains of data, and keep the brand consistent across every touchpoint.

Zach Leach, Head of Design at Gamma, knows this struggle intimately.

Gamma is a famously lean team—about 30 people serving a massive, global user base. To punch above their weight, Zach doesn't just use AI to generate images; he uses it to alter his design and research workflows fundamentally.

In this episode of How I AI, Zach breaks down how he uses ChatGPT’s Deep Research to analyze feedback in languages he doesn't speak, and how he leverages Midjourney to scale a very specific, surrealist art direction.

Let's get into the workflows.

## Analyzing global user feedback with ChatGPT deep research

Gamma recently launched an AI image editing feature. The promise? You can chat with an image to change it—add caramel drizzle to popcorn or fix a weird artifact.

Within a week, they received about 550 pieces of individual feedback.

Here was the problem: Gamma’s user base is 60% international. A huge chunk of that feedback was in Turkish, Spanish, and French. 

Before AI, Zach admits he probably would have cherry-picked 20 English responses and ignored the rest. It’s simply too tedious to manually translate and categorize hundreds of rows of data.

Instead, he turned to ChatGPT’s Deep Research.

[FRAME_0]

Zach uploaded the raw CSV of feedback and gave ChatGPT a simple directive: Analyze this file, figure out what we are doing well, and tell me what isn't working.

Because Deep Research takes its time (it "thought" for about 19 minutes), it didn't just run a basic keyword search. It performed translation, sentiment analysis, and classification on every single row.

It categorized the feedback into specific buckets:

*   **The Wins:** Users loved the upscaling feature.
*   **The UX Friction:** Users were frustrated when multi-step edits (e.g., "move him left AND add a hat") failed.
*   **The Translation:** It surfaced specific complaints from non-English users that would have otherwise been lost.

Zach took it a step further. He asked ChatGPT to classify each row into a category and a rating, then export the results as a new spreadsheet.

He then pasted that structured data back into Gamma to auto-generate a presentation for his product team. 

He went from a messy, multilingual CSV to a clear engineering roadmap in under an hour.

## Scaling art direction with MidJourney and Replicate

Gamma has a beautiful, distinct brand style. It’s airy, pointillist, and slightly surreal.

Maintaining that consistency usually requires a massive art department. Zach does it by building "kits" in Midjourney using Style References (`--sref`).

For a recent empty state design, Zach wanted an image that represented transformation. He started with an apple, then pivoted to a bird.

Instead of going back and forth with an illustrator for days, he iterated in real-time.

[FRAME_1]

He refined his prompt to describe a split image—half realistic, half illustration—to show the "before and after" concept.

Once he nailed the generation, he hit a common snag: the background.

Midjourney generates rectangular images with backgrounds that don't always fit a UI layout. 

Zach’s workflow for this is incredibly fast:

1.  **Generate** the asset in Midjourney using the brand’s Style Reference code.
2.  **Upload** the image to **Replicate**.
3.  **Run** a specific background removal model.
4.  **Copy** the transparent PNG directly into Figma.

[FRAME_2]

This turns a multi-hour illustration and masking task into a 5-minute workflow, allowing the design team to produce high-craft assets that feel bespoke, without the bottleneck.

## Standardizing hiring with Claude projects

Finally, Zach showed us how he keeps the bar high for hiring.

Writing job descriptions is a slog. It’s easy to let them become generic walls of text. 

Gamma uses a **Claude Project** specifically for this. They uploaded their best job descriptions and brand voice guidelines into the project knowledge base.

Now, any hiring manager can type, "I need a job description for a Head of Popcorn," and Claude generates a formatted, on-brand posting.

It includes the correct tone, the specific "About Gamma" boilerplate, and role-specific requirements that actually make sense.

It transforms a chore into a quick edit, ensuring every candidate's first interaction with Gamma feels premium.

## Key Takeaways

Zach’s approach reminds us that AI isn't about replacing the designer; it's about removing the tedium so the designer can focus on the fun.

*   **Don't ignore data because of volume.** Use Deep Research to structure and translate qualitative feedback at scale.
*   **Curate your AI art.** Use Style References in Midjourney to enforce brand consistency, rather than rolling the dice on every prompt.
*   **Chain your tools.** The magic happens when you move from Midjourney to Replicate to Figma. Don't expect one tool to do it all.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[WorkOS](https://workos.com?utm_source=lennys_newsletter&utm_medium=newsletter&utm_campaign=howiai)**: The API for enterprise features like SSO, SCIM, and audit logs, helping you become enterprise-ready in minutes.
- **[Retool](https://retool.com/howiai)**: The fastest way to build internal tools and AI apps that actually connect to your business data and take action.

## Episode Links
* [YouTube](https://youtube.com/watch?v=hzPKb8bDvdY)
* [Spotify](https://open.spotify.com/episode/4MPGPtLGECjWh1D0TBUhy0?si=8ef6f8a74e3e443c)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/gammas-head-of-design-shares-how-his-small-team-uses/id1809663079?i=1000712073417)