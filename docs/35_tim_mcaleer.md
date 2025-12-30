---
Meta Title: Automating Documentary Post-Production with AI: Tim McAleer
Meta Description: Ken Burns producer Tim McAleer reveals how he uses Python, OpenAI, and custom AI apps to automate metadata, video logging, and archival research.
Keywords: AI in filmmaking, post-production automation, OpenAI Vision API, documentary research AI, vibe coding, digital asset management
---
Nov 17, 2025

# How I AI: Nobody Wanted to Do This Work: Automating Post-Production with Tim McAleer

Post-production in documentary filmmaking is, to put it mildly, a technical mess.

You are dealing with hundreds of hours of footage. You have tens of thousands of archival photos. You have interviews, transcripts, and field footage. For years, managing this mountain of media meant manual data entry—pure, unadulterated toil.

On this episode of *How I AI*, I sat down with Tim McAleer, a producer at Ken Burns’ Florentine Films. Tim is responsible for the technology and processes that bring some of the most iconic documentaries to life.

Instead of focusing on generative AI for creativity, Tim has built a suite of hyper-specific AI tools to automate the "boring" stuff. He is using AI to clean up data management, streamline research, and free his team to focus on storytelling.

Here is how he did it.

## The Problem: Infinite Metadata

In documentary work, the "shooting ratio" is incredibly high. For an 8-hour series on Muhammad Ali, Tim’s team gathered 20,000 still images and over 100 hours of footage.

Every single one of those assets needs to be logged. You need to know the date, location, photographer, and context.

[FRAME_0]

Tim’s goal was simple: Automate away the toil. He didn't wait for a software company to build the perfect tool; he built it himself using "vibe coding" and AI APIs.

## Use Case 1: The Auto-Log System

It started with a simple experiment. When ChatGPT released image upload capabilities, Tim realized the models could "see." He began writing Python scripts to harness this vision for database entry.

The workflow evolved into a robust REST API that processes every file dropped into its database. Here is the five-step process Tim’s "Auto-Log" system runs:

1.  **Gather Info:** Checks file specs (size, type).
2.  **Copy & Rename:** Moves the file to the server with a structured ID.
3.  **Parse Metadata:** Extracts existing embedded metadata (like GPS or photographer notes).
4.  **Web Scrape:** If there is a source URL, it scrapes the web for verified context.
5.  **Generate Description:** It sends all this data—plus the image itself—to OpenAI to generate a rich, accurate description.

By feeding the AI "ground truth" (metadata and web scrapes) alongside the visual prompt, Tim ensures the output is factual rather than hallucinated.

## Use Case 2: Video & Audio Analysis

A video is just a sequence of images with sound. To automate video logging, Tim scaled his image pipeline.

He doesn't send every frame to the AI (that would be prohibitively expensive). Instead, he polls the video at 5-second intervals.

For the audio, he uses OpenAI’s **Whisper** model to generate transcripts synced to those 5-second chunks. 

He then packages the frames and the transcript segments into a massive context window for a reasoning model. The prompt essentially asks: "Here are the visual events and the audio transcript. Tell me what is happening in this video."

## Use Case 3: Semantic Search with Embeddings

Text descriptions are great, but they rely on exact keyword matching. If you search for "puppy" but the logger wrote "dog," you miss the shot.

Tim implemented vector embeddings to solve this. He runs the image thumbnail through **CLIP** and the text description through an OpenAI text model, fusing them into a searchable vector.

This unlocks "vibes" based search. An editor can click a "Find Similar" button on an image of a man in a suit, and the database surfaces visually similar archival portraits, even if the keywords don't match.

## Use Case 4: "Flip Flop" for Field Research

When researchers visit physical archives, they are often snapping thousands of photos of documents with their iPhones. They take a picture of the front (the image) and the back (the notes/dates).

By the time they get back to the office, their camera roll is a disaster. Fronts and backs get separated, and the context is lost.

Tim built a custom iOS app called **Flip Flop** to solve this.

[FRAME_1]

The app forces a workflow: capture the "Flip" (front) and the "Flop" (back). It immediately uses AI to transcribe the handwriting on the back and embeds that text directly into the image file’s metadata (XIF).

This means the data travels *with* the file, making it searchable on any system, forever.

## Use Case 5: "OCR Party"

Sometimes you don't need the whole document; you need one article from a messy, creased newspaper page. Traditional OCR struggles with complex layouts and poor image quality.

Tim built a Mac menu bar app called **OCR Party**. It allows his team to draw a crop box around a specific paragraph.

[FRAME_2]

The app sends that crop to a vision model, which is far better at deciphering text on wrinkled paper than standard OCR engines. It returns clean, usable text immediately.

## Why This Matters

Tim isn't a professional software engineer by trade; he is a producer. But by leveraging AI coding tools like Cursor and Claude, he built hyper-specific apps that no SaaS company would ever bother to make for him.

The result? His team spends less time on data entry and more time discovering the history they are trying to document.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Brex](https://brex.com/howiai)**: Brex is the intelligent finance platform built for founders that uses autonomous agents to automate expenses, issue cards, and stop fraud in real time.

## Episode Links
* [YouTube](https://youtube.com/watch?v=9ngbZwA_h00)
* [Spotify](https://open.spotify.com/episode/0ztGslxTDVvUYG5Cg8jwD8?si=76dcacff02a94813)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/nobody-wanted-to-do-this-work-how-emmy-award-winning/id1809663079?i=1000737075736)