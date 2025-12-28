# PRD: YouTube Blogify AI

## Introduction/Overview
YouTube Blogify is a specialized content management tool designed for SaaS teams to repurpose video content into high-performing, SEO-optimized blog posts. It solves the problem of "voice mismatch" in AI-generated content by analyzing existing blog posts and mimicking their specific brand tone.

## Goals
- Convert YouTube video transcripts into long-form blog posts.
- Maintain a consistent brand voice by analyzing 3-5 reference blog URLs.
- Automatically identify key semantic moments in the video to place supporting images.
- Provide comprehensive SEO metadata including keyword clusters and meta-descriptions.

## User Stories
1. **As a Content Manager**, I want to provide a video link and several of our best-performing blog links so the AI understands our technical depth and writing style.
2. **As an SEO Specialist**, I want the generated post to include semantic keywords so we can rank for related search terms without manual editing.
3. **As a Web Editor**, I want images to be suggested at major header transitions so the post is visually engaging and easy to read.

## Functional Requirements
1. **Multi-URL Reference Analysis**: The system must accept 3 to 5 reference URLs to establish a voice/tone profile.
2. **Video Integration**: The system must accept a YouTube URL and extract (or simulate extraction of) the transcript.
3. **Semantic Image Extraction**: The AI must identify timestamps for frame extraction based on H2/H3 header transitions.
4. **Comprehensive SEO Package**: Generation of meta titles, descriptions, and semantic keyword clusters.
5. **CMS-Ready Output**: Content should be provided in structured JSON/Markdown suitable for direct import into Webflow or WordPress.

## Non-Goals (Out of Scope)
- Direct publishing to CMS via API (Export only for now).
- Video editing or trimming.
- Multi-language translation in the first iteration.

## Technical Considerations
- Use `gemini-3-pro-preview` for deep reasoning on voice and tone analysis.
- Simulate frame extraction using placeholder logic with timestamp metadata until a backend proxy for YouTube frames is implemented.
- Robust handling of YouTube URL variations (shortened links, mobile links).

## Success Metrics
- 80% reduction in time spent "re-writing" AI drafts to match brand voice.
- 100% inclusion of primary and secondary keywords in generated drafts.
- Successful extraction of at least 3 timestamp-relevant images per post.

## Open Questions
- Should the app handle videos longer than 30 minutes (token limit considerations)?
- Do reference URLs need to be pre-scraped or can the AI analyze them via grounding?
