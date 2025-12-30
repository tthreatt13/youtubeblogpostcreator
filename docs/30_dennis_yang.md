---
Meta Title: How to Use Cursor for Product Management Workflows
Meta Description: Learn how to use Cursor, MCPs, and Markdown to automate PRDs, Jira tickets, and status reports without writing code.
Keywords: Cursor for Product Managers, AI Product Management, MCPs, Automated Jira Workflows, Markdown PRD, Cursor Rules
---
Oct 27, 2025

# How I AI: Using Cursor for Product Management with Dennis Yang

We’ve seen plenty of engineers use tools like Cursor to write code faster. 

But we haven’t really seen anyone use Cursor *just* to write.

That is, until now.

I thought I was the alpha AI-powered Product Manager, but then I sat down with Dennis Yang, Chime's Principal Product Manager for Generative AI. 

He showed me workflows that honestly made me sweat a little bit.

Dennis is using Cursor as his primary interface for strategy, communication, and product definition—without writing a single line of production code.

[FRAME_0]

He’s using it to write PRDs, push them into Confluence or Notion, read and reply to comments, and even prototype AI tools.

If you’ve ever wondered if an IDE could be the ultimate PM tool, this is the breakdown you need.

## Why Cursor for Product Management?

For Dennis, Cursor isn't just a code editor; it's the perfect UI for AI.

There are three main reasons he’s moved his entire workflow there:

1.  **Model Access:** He can toggle between Claude, GPT-4, or DeepSeek instantly.
2.  **File System:** It writes actual files (Markdown), giving him local control and version history.
3.  **Interoperability:** Through MCPs (Model Context Protocols), Cursor talks directly to Jira, Notion, Confluence, and Figma.

It’s zippy, it’s local, and it treats product artifacts with the same rigor as software engineering.

## The "Git for PMs" Workflow

We are in the year of Markdown.

Dennis writes his PRDs directly in Cursor using Markdown. He uses a preview extension to render it beautifully while he works.

But here is the unlock: Source control.

Typically, PRDs live in Confluence or Google Docs. They are snapshots in time that go stale the moment development starts.

By keeping artifacts in a repo alongside the code, the documentation stays adjacent to the engineering work.

Your AI coding assistant can read the PRD to understand the *why* behind the feature and update it as implementation details change.

## Automating the Busy Work with MCPs

Writing the PRD is high-value work. Moving it around is not.

Dennis uses the Confluence and Notion MCPs to publish his local Markdown files directly to company wikis.

[FRAME_1]

He tells the AI: "Publish this PRD to Confluence." The MCP handles the API calls and pushes the content.

But he closes the loop, too.

When stakeholders leave comments in Confluence, he doesn't switch tabs. He asks Cursor to read the comments via the MCP.

The AI categorizes feedback (High Priority vs. Clarification) and drafts responses in Dennis’s voice. He reviews and approves them, and the MCP posts the replies in his name.

It allows him to maintain high-touch communication without the cognitive drain of context switching.

## From PRD to Jira Tickets

This is where Cursor becomes a better PM than most humans.

Translating a PRD into Jira tickets is usually where detail is lost. We get tired. We copy-paste. We get lazy.

Dennis’s workflow is different.

He asks Cursor to read the PRD and create an Epic and associated Story tickets in Jira.

Because the AI has the full context of the requirements, it writes impeccable tickets with Gherkin syntax, acceptance criteria, and definitions of done.

[FRAME_2]

It also handles status reporting.

Instead of nagging engineers, he uses a Cursor rule to query Jira for updates on specific Epics. The AI compiles a status report based on the actual ticket movement and comments.

## Prototyping and "Vibe Agenting"

Dennis calls this "Super MVP."

Before engaging in engineering, he prototypes AI features directly in Cursor using natural language instructions.

He showed us a "Morning Briefing" agent. 

Instead of writing Python scripts, he wrote a technical design document (TDD) and gave it to Cursor as instructions.

He told Cursor to use a News API MCP to fetch articles and a specific LLM to summarize them.

He calls it "Vibe Agenting." He isn't writing code; he is orchestrating tools and models to validate the product experience in real time.

If you want to survive as a PM in the AI era, you have to be technical enough to wield these tools, but strategic enough to know why you're using them.

## Thanks to Our Sponsors

This episode is brought to you by:

- **[Zapier](https://try.zapier.com/howiai)**: The most connected AI orchestration platform. It connects with nearly 8,000 apps so you can roll out AI-powered workflows across your whole company in days, not weeks.
- **[Brex](https://brex.com/howiai)**: The intelligent finance platform built for founders. It offers autonomous agents for expenses and high-yield treasury accounts to help you scale with confidence.

## Episode Links

* [YouTube](https://youtube.com/watch?v=rwmR7m5rvqw)
* [Spotify](https://open.spotify.com/episode/6lIZHWuvHoBiLejKuF3OdV?si=2d9b347a2948413f)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/cursor-is-a-much-better-product-manager-than-i-ever/id1809663079?i=1000733676366)