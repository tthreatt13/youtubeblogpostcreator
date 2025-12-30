---
Meta Title: How Faire Uses AI for Data Analysis & SQL Generation
Meta Description: Learn how Faire's data team uses Cursor, MCPs, and ChatGPT to automate SQL queries, analyze experiments, and perform deep forensic research on codebases.
Keywords: AI data analysis, Cursor MCP, SQL generation, automated reporting, Faire data team, vibe analysis, product analytics
---
Nov 3, 2025

# How I AI: Vibe Analysis: How Faire's Data Team Uses AI to Investigate Product Issues with Tim Trueman and Alexa Cerf

One of the unexpected side effects of AI is the sheer velocity at which we can now build products.

I’m always telling PMs to spend a month saying "yes" and just shipping features. AI has accelerated development, but it has created a new problem: we often don't know if those products are actually any good.

You ship a feature, and suddenly a metric drops. Or you launch an experiment, and the analysis takes longer than the build.

Today, I’m talking with Tim and Alexa from the data team at Faire. They are showing us how to move from "vibe coding" to **"vibe analysis."**

We’re going to look at how they use Cursor, Model Context Protocols (MCPs), and custom agents to decompose scary questions like "why did conversion drop?" and automate end-to-end SQL analysis.

Let’s get to it.

[FRAME_0]

## The Context Engine: Investigating "What Went Wrong?"

We’ve all been there. A business metric drops off a cliff in September, and no one knows why. 

Traditionally, a data analyst would spend hours crawling through Slack channels, hunting down PRDs, and bothering engineers to figure out what changed.

Tim showed us how the new wave of AI tools transforms this phase of context gathering.

He starts with a broad Enterprise AI search in Notion. By simply asking, *"What experiments launched between September and December that could have added friction to checkout?"* he gets an immediate list of hypotheses.

But a PRD is just a document. It’s not the truth of what actually shipped. To get to the ground truth, you have to look at the code.

**Treating code as a data source**

Most PMs and analysts are scared of the repo. They shouldn't be. 

Tim uses Cursor (and ChatGPT Deep Research) to perform a "forensic investigation" of the codebase. 

He uses a prompt that instructs the AI to act as a senior staff engineer and produce a time-sequence report of all changes to a specific checkout collection process.

Because he has his GitHub connected via Cursor, the AI returns a table of every Pull Request (PR), the commit, and—crucially—a layman's summary of the impact on the user experience.

Instead of asking an engineer for a log of changes during a Sev1 incident, you can now self-serve the technical history of your product.

## End-to-End Funnel Analysis with SQL and MCPs

Once you have a hypothesis, you need hard numbers. 

Alexa walked us through a classic analytics task: analyzing a pre-post redesign where no A/B test was possible. 

Historically, this means writing ugly SQL, exporting to CSV, and fiddling with charts. Alexa does it all inside Cursor using **Model Context Protocols (MCPs)**.

[FRAME_1]

**The workflow looks like this:**

1.  **Context gathering:** She points Cursor to the codebase to understand the event tracking implementation. The AI explains exactly which front-end events fire and in what order.
2.  **SQL Generation:** She asks Cursor to write the SQL query for the funnel analysis. 
3.  **Execution:** Because Faire has set up a Snowflake MCP, Cursor doesn't just write the code; it *runs* the query against their data warehouse and returns the results directly in the chat.

**The Secret Weapon: The Semantic Layer**

The reason this works so well is that Faire’s data engineering team built a "semantic layer." 

This is essentially a set of files in their repo that translate business logic (e.g., "what is an active user?") into code that the LLM can understand. 

This allows the AI to write accurate SQL without hallucinating table names or join logic. It turns your codebase into the documentation.

## Automating the "Boring" Parts of Experimentation

Writing up experiment results is necessary, but it’s often tedious work. You have to pull the data, check the confidence intervals, format the document, and share it.

Tim built a custom Cursor Agent to handle this entirely.

He uses a simple `.mdc` rule file in Cursor that defines the standard operating procedure for reporting results. 

[FRAME_2]

When he asks the agent to "write up the results for the Vertical Product Tile experiment," the agent:

*   Uses an **Eppo MCP** (their experimentation platform) to fetch the raw statistical data.
*   Uses a **Notion MCP** to pull the original context and hypotheses.
*   Synthesizes it all into a perfectly formatted Notion doc, complete with color-coded confidence intervals and emoji status indicators.

It even generates a specific "Takeaways" section that interprets whether the team should roll out or roll back the feature.

## From Hypotheses to Insights

We also touched on a bonus use case: Surveys.

Qualitative data is notoriously hard to analyze quickly. Tim showed how he feeds a list of hypotheses into an AI model to: 

1.  **Design the survey:** Generate the actual questions.
2.  **Code the survey:** Create the Qualtrics coding file.
3.  **Analyze the mess:** Take the raw, ugly CSV export and grade the results against the original hypotheses.

This turns a multi-day research operations task into a morning workflow.

## Why This Matters

We are moving past the phase of just using AI to write emails. 

By connecting LLMs directly to your systems of record—your codebase (GitHub), your data warehouse (Snowflake), and your documentation (Notion)—you can democratize data analysis.

You don't need to be a SQL wizard to understand your product anymore. You need to know how to ask the right questions.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Zapier](https://try.zapier.com/howiai)**: The most connected AI orchestration platform that lets you automate workflows across 8,000+ apps without waiting for engineering.
- **[Brex](https://brex.com/howiai)**: The intelligent finance platform built for founders that automates expenses, bill pay, and fraud protection so you can focus on scaling.

## Episode Links
* [YouTube](https://youtube.com/watch?v=KOr-xQuNK4A)
* [Spotify](https://open.spotify.com/episode/19CVCci7Cyx6CyUi7vHFxf?si=44d6e1bbb71a4bb3)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/vibe-analysis-how-faires-data-team-uses-ai-to-investigate/id1809663079?i=1000735030566)