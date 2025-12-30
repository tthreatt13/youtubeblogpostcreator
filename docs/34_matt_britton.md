---
Meta Title: How Matt Britton Automated Sales Ops with Zapier & AI
Meta Description: Learn how Suzy CEO Matt Britton built a mega-workflow to transform 25,000 hours of Gong calls into sales coaching, churn alerts, and SEO content.
Keywords: Zapier automation, Gong transcript analysis, AI sales coaching, SEO automation, GPT-4 workflow, Browse AI tutorial
---
Nov 10, 2025

# How I AI: How this CEO turned 25,000 hours of sales calls into a growth engine with Matt Britton

Most CEOs delegate automation. They hire engineers. They wait for product roadmaps.

Matt Britton, CEO of Suzy, is not your typical CEO.

When his sales team started complaining that they couldn't find the customer insights they needed, Matt didn't schedule a meeting to discuss the problem. He looked at the 25,000 hours of recorded Gong calls sitting in his database and saw an untapped goldmine.

He realized that his customer calls were the single source of truth for his entire company.

So, he popped the hood and built the automation himself.

In this episode of How I AI, Matt breaks down the "Mega Workflow" that runs his entire Go-To-Market motion—from churn detection to automated SEO content.

### The Problem: Data Rich, Insight Poor

Matt’s sales team had a common problem: they didn't know how to speak to specific industries or find past use cases.

The data existed. It was just locked inside 25,000 hours of video. 

While Suzy uses Gong to record calls, the transcripts were a mess of unstructured text. Matt wanted to create a system that would trigger a cascade of value across the entire organization with a single call.

He didn't want a dozen fractured workflows. He wanted one master feed.

### Step 1: The Browse AI "Hack"

The first hurdle was technical. Matt needed a trigger that would fire the moment a call ended.

Gong didn't expose the specific call ID in the way he needed for his Zapier trigger. Instead of giving up or waiting on engineering, he used a tool called **Browse AI**.

[FRAME_0]

He noticed that every Gong call URL ended with a unique Call ID. 

He set up a scraper that monitors for that ID, grabs the URL, and scrapes the raw transcript immediately after the call concludes.

This is a masterclass in "CEO coding." If the API doesn't give you what you want, find a tool that will scrape it for you.

### Step 2: The Logic and The Enrichment

Once the transcript is scraped, the Zapier workflow kicks in.

First, he runs a formatter to strip out the messy HTML. Then, he enriches the data.

The workflow consults a Google Sheet to map the call data to specific internal Slack users and account details. This ensures that, when insights are delivered, they are routed to the right people.

### Step 3: The AI Analysis

This is where the magic happens. Matt sends the clean transcript to GPT-4 Turbo.

He doesn't just ask for a summary. He prompts the model to act as a high-level analyst. The AI is tasked with:

*   **Summarizing the call:** Excluding small talk.
*   **Identifying stakeholders:** Who was on the call?
*   **Sentiment Scoring:** Rating the call on a 1-10 scale.
*   **Next Steps:** Listing action items.

If the sentiment score drops below a 7, the system automatically routes the alert to a "Churn Risk" channel. This allows leadership to intervene before a customer leaves, rather than doing a post-mortem after they're gone.

[FRAME_1]

### Step 4: The Marketing Flywheel

Most teams stop at sales summaries. Matt pushes the data further into marketing.

His workflow analyzes customer feedback to identify new keywords. If a customer mentions a specific problem or term, the workflow extracts it and can even add it to Google Ads campaigns.

But the wildest part?

He built an automated content engine. 

The workflow takes the transcript, fully redacts sensitive client information (names, specific strategies), and rewrites the core problem-solution dynamic into a generic SEO blog post.

[FRAME_2]

It generates the headline, the body copy, and a custom CTA. 

Then, it schedules it to publish 21 days later (a safety buffer). 

Suzy now has thousands of blog posts capturing long-tail search traffic, all generated from conversations their sales team was already having.

### The Rise of the "Super IC"

Matt calls this the era of the "Super Individual Contributor."

He believes that leaders can no longer afford to be disconnected from the tools. You don't need to be a software engineer, but you need to know how the transmission works.

By building this himself, Matt didn't just save money. He built a culture where problems are solved immediately, data is democratized, and no insight is left on the cutting room floor.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Brex](https://brex.com/howiai)**: The intelligent finance platform built for founders that uses autonomous agents to manage expenses and stop fraud in real time.
- **[Zapier](https://try.zapier.com/howiai)**: The most connected AI orchestration platform that allows you to automate workflows across your entire organization without waiting on engineering.

## Episode Links
* [YouTube](https://youtube.com/watch?v=gE0ShFMArsI)
* [Spotify](https://open.spotify.com/episode/3BOleuJrjYyfDlcx57Qpea?si=4c27ca8038294013)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-this-ceo-turned-25-000-hours-of-sales-calls-into/id1809663079?i=1000736087597)