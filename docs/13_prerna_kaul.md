---
Meta Title: Automate FDA Submissions with AI & Claude Projects | How I AI
Meta Description: Ex-Moderna PM Prerna Kaul shows how to use Anthropic's Claude and Streamlit to automate 60,000-page FDA submissions and build an AI stakeholder management coach.
Keywords: AI in Life Sciences, FDA Submission Automation, Claude Projects, Streamlit, PHI Redaction, Generative AI Workflows, Product Management AI
---
July 14, 2025

# How I AI: Automating 60,000-Page FDA Submissions with Prerna Kaul

Welcome back to **How I AI**, the series where product leaders show us exactly how they use artificial intelligence to build better and faster.

Today, we are tackling a problem that costs billions of dollars and delays life-saving treatments: paperwork.

Specifically, the 60,000-page documents required for FDA submissions.

[FRAME_0]

I sat down with **Prerna Kaul**, a product leader with a deep background in machine learning at companies like Moderna, Amazon Alexa, and Panasonic. 

She showed me how she uses Anthropic’s Claude to turn months of manual labor into a streamlined AI workflow. 

Plus, she revealed a genius way to use Jane Austen and Dale Carnegie to manage difficult stakeholders.

Let’s get to it.

## The Problem: The 60,000-Page Bottleneck

In life sciences, the science is only half the battle.

Getting a vaccine or treatment to market requires a Biological License Agreement (BLA). This isn't just a report; it is a massive, structured document that can run up to 60,000 pages.

Traditionally, this process takes:

*   4 to 6 months of effort.
*   Nearly 20 specialists.
*   Millions of dollars in operational costs.

The stakes are incredibly high. Mistakes mean delays, and delays mean life-saving drugs don't get to patients.

Prerna realized that generative AI could reimagine this workflow, specifically by targeting the time-consuming data structuring and PHI (Protected Health Information) redaction.

## The Workflow: From Python Script to FDA Submission

Prerna didn't start by writing code herself. She started by treating Claude as her engineering partner.

She gave Claude a prompt that included:

1.  **The Persona:** Acting as a software engineer.
2.  **The Pitch:** Why this matters (cost savings, patient impact).
3.  **The Output:** A request for a demo application.

Claude didn't just write the Python code; it generated a setup guide, a markdown file for instructions, and even a pitch narrative for the demo.

[FRAME_1]

### The Tech Stack

To make this usable for non-technical colleagues, Prerna wrapped the Python code in **Streamlit**. This allows anyone on the team to run complex ML operations through a simple web UI.

Here is how the application handles the heavy lifting:

**1. Synthetic Data Generation**
First, the app generates synthetic clinical trial data. This mimics the messy reality of healthcare data, including tabular patient demographics and unstructured clinical notes.

**2. Intelligent PHI Redaction**
This is the hardest part. You can't just redact columns; you have to find names and dates buried in free-text notes.

Claude identified the correct Medical Named Entity Recognition models to scan unstructured text, identify patient identifiers, and redact them with high accuracy.

**3. Generating the "Common Technical Document"**
The FDA requires a proprietary XML format. This is painful to code by hand.

Prerna’s tool takes clean data and automatically generates the specific XML structure required for the BLA. What used to take medical writers weeks of back-and-forth can now be drafted instantly.

### The "Cost Transparency" Feature

One of my favorite details in Prerna's build was the cost analysis tab.

Internal stakeholders often push back on AI due to cost concerns. Prerna built a real-time tracker that shows the exact token cost per operation.

When you can show an executive that saving hours of work costs exactly $0.15, the ROI argument solves itself.

## The Bonus: The AI Stakeholder Whisperer

Product management is 50% building and 50% aligning stakeholders who disagree.

Prerna showed me a **Claude Project** she built specifically to navigate tricky political situations at work.

She didn't just give it a prompt. She uploaded a knowledge base containing:

*   **Dale Carnegie:** *How to Win Friends and Influence People*.
*   **Jane Austen:** For nuance and social dynamics.
*   **Persuasion Tactics:** Strategic communication frameworks.

[FRAME_2]

When she faces a crisis—like a data privacy issue popping up two weeks before a major launch—she feeds the scenario to Claude.

The output is incredible. It provides:

1.  **Strategy analysis** based on the uploaded literature.
2.  **"What would Satya Nadella do?"** comparisons.
3.  **A minute-by-minute meeting agenda.**
4.  **"Back pocket" answers** for the toughest questions stakeholders might ask.

It’s not about letting AI think; it’s about showing up to the meeting more prepared than anyone else in the room.

## Why This Matters

Whether you are submitting vaccines to the FDA or just trying to get your roadmap approved, the lesson here is leverage.

Prerna proved that with the right prompting and a simple UI, you can turn a compliance burden into a competitive advantage.

## Thanks to Our Sponsors

This episode is brought to you by:

- **[Code Rabbit](https://rabbit.ai)**: An AI code review platform that cuts code review time and bugs in half. Use code **how I AI** for a free year.
- **[Lovable](https://lovable.dev)**: A tool that lets you build working apps and websites by simply chatting with AI.

## Episode Links

* [YouTube](https://youtube.com/watch?v=A204lKJryoQ)
* [Spotify](https://open.spotify.com/episode/45YTcZRR0ATN6GElESBnaO?si=21a4a919a5bc45e6)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-this-pm-streamlines-60k-page-fda-submissions-and/id1809663079?i=1000717160673)