---
Meta Title: How Block Uses AI Agents (Goose) for Data & Vibe Coding
Meta Description: Block's Jackie and Brad demonstrate how they use their open-source AI agent, Goose, to automate data analysis, manage Square dashboards, and vibe code custom MCPs.
Keywords: Goose AI agent, Model Context Protocol, MCP, Vibe coding, Block AI strategy, AI for data analysis, Open source AI agent
---
July 28, 2025

# How I AI: How Block Uses Custom Agents to Supercharge Workflows with Jackie Brosamer and Brad Axen

Everyone talks about AI agents. But at Block (the company behind Square and Cash App), they didn’t just talk about them—they built one.

And then they open-sourced it.

I sat down with Jackie (Data & Strategy) and Brad (Engineering) from Block to see exactly how they use their internal AI agent, **Goose**, to transform messy data into revenue.

From analyzing farm-stand sales to "vibe coding" custom tools live, this episode is a masterclass in how large organizations can move with the speed of an AI-native startup.

Here is how they do it.

## Meet Goose: The Agnostic Agent

Goose is Block’s open-source AI agent. Unlike many tools that are rigid in their capabilities, Goose is designed to be completely agnostic.

It runs locally. It manages its own developer environments. It connects to capabilities via the Model Context Protocol (MCP).

Essentially, you tell it what you need, and it figures out the *how* by stringing together the right tools.

Brad and Jackie walked me through a live demo that went from a raw CSV file to a live payment link, all orchestrated by Goose.

## Workflow 1: The "Vibe" Data Analysis

Jackie started with a realistic, messy scenario: a CSV file of sales data from a local farm stand. 

The goal was simple: analyze revenue, identify trends, and visualize the data.

Instead of opening Excel or writing a Python script manually, Jackie simply dragged the CSV file into Goose and asked it to analyze it with Pandas.

[FRAME_0]

What happened next is every developer's dream. Goose realized it didn’t have the right libraries installed.

Instead of erroring out and asking for help, it spun up a virtual environment, installed the dependencies, and executed the code.

It spit out immediate insights:

*   **Top Revenue:** Berries (high margin).
*   **Best Day:** Thursday.
*   **Anomalies:** A drop in Friday sales due to price adjustments.

But Jackie didn't stop at text. She asked Goose to create a shareable report. 

Goose generated a local HTML file with interactive Plotly charts, effectively creating a self-serve dashboard in seconds. This is the definition of "data duct tape"—taking messy inputs and mushing them into actionable insights without the manual toil.

## Workflow 2: From CSV to Product Catalog

Data analysis is great, but taking action is better.

Brad took that same messy CSV and decided to operationalize it using the **Square MCP**.

He didn't format the data. He didn't map columns. He just dragged the file in and typed:

*"Can you read through this data and use it to create items in my Square dashboard?"*

[FRAME_1]

Goose read the file, understood the Square API structure via the MCP, and systematically created the product catalog.

It even handled the logic of creating a payment link for a specific bundle (three pumpkins) and associated it with the correct location.

In minutes, we went from a static spreadsheet to a live URL that could accept credit card payments.

## Workflow 3: Vibe Coding a Custom MCP

The most impressive part of the demo was when Brad hit a wall: he wanted to email that payment link to a customer, but Goose didn't have an email tool installed.

Most people would stop there. Brad decided to build the tool live.

He asked Goose to write a Python script to send an email using Mailgun. Once the script was working, he asked Goose to wrap that script into a new MCP server.

*"Now we're going to make an MCP server out of this. Here's reference code."*

[FRAME_2]

Goose wrote the extension. They hit a bug—a classic "Human vs. AI" debugging moment—and fixed it together in seconds.

They dynamically loaded the new tool into the *active* Goose session. 

Without restarting context, Brad was able to say, *"I just enabled an email tool. Can you send that payment link?"*

And it worked.

## Why This Matters

What struck me most about Block’s approach isn't just the tech—it's the culture.

Jackie mentioned that it wasn't just engineers clamoring for these tools; it was the sales team. They wanted better lead gen. They wanted speed.

By open-sourcing Goose and adopting the MCP standard, Block is enabling non-technical teams (like Finance and Sales) to self-serve data and automate the boring parts of their jobs.

It’s less about replacing humans and more about removing the friction between an idea and its execution.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Code Rabbit](https://coderabbit.link/howiai)**: An AI code review platform that cuts review time and bugs in half, providing instant feedback and one-click fix suggestions. Get it free for a year with code `how I AI`.
- **[Lenny's List](https://maven.com/lenny)**: Hands-on AI education curated by Lenny and Claire to help you start building today. Use code `Lenny's` for $100 off.

## Episode Links
* [YouTube](https://youtube.com/watch?v=TZPWzsk-cWc)
* [Spotify](https://open.spotify.com/episode/6K9ocTZy26lYiduul57NeY?si=84049084f2474a96)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-blocks-custom-ai-agent-supercharges-every-team/id1809663079?i=1000719479224)