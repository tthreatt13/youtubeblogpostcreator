---
Meta Title: Automate Marketing & Save $140k with AI Workflows (Luke Harries)
Meta Description: 11Labs Head of Growth Luke Harries shares his AI playbooks: automated case studies with Granola, a custom translation engine built in Cursor, and a WhatsApp MCP.
Keywords: AI marketing automation, Model Context Protocol, Granola AI, 11Labs case study, Cursor for marketers, Custom GPTs for business
---

# How I AI: The Exact AI Playbook: Using MCPs, Custom GPTs, & Granola with Luke Harries

In 2025, we talk a lot about "vibe coding"—using tools like Cursor and v0 to build software fast.

But we aren't talking enough about "vibe marketing."

If software production is going exponential, your ability to launch needs to keep pace. It doesn't matter if you ship a new feature if nobody knows about it.

This week, I sat down with **Luke Harries**, Head of Growth at **11Labs**.

Luke isn't just a marketer. He is an "AI CMO" who codes his own internal tools to automate growth.

He showed me how he treats *everything* as a launch—from a single tweet to a massive product release—and uses AI to build the systems that make it happen.

Here is how Luke uses AI to automate case studies, save six figures on localization, and build custom agents on the fly.

## The "Everything is a Launch" Philosophy

At 11Labs, every new model or feature goes through a massive checklist.

Value props. Messaging. Blog posts. X posts. Ads.

It takes a lot of time. Luke’s goal is to automate the translation of a feature into the entire launch suite.

[FRAME_0]

He is already doing this with customer stories. Here is the workflow he uses to turn a 5-minute conversation into a polished case study and social assets.

## The Automated Case Study Workflow

Writing case studies is usually a drag. You have to schedule the call, record it, transcribe it, draft it, and get approvals. It takes weeks.

Luke does it in minutes using **Granola** and a **Custom GPT**.

### Step 1: The Interview
Luke hops on a call (he actually interviewed me live on the show). He asks specific questions to extract metrics and use cases.

*   "How do you use the product?"
*   "What is the specific ROI?"
*   "Give me a concrete stat."

Granola records this and generates an intelligent summary, enriching it with context like my job title and company details.

### Step 2: The Custom GPT
Luke built an internal tool called the **11Labs Copy Editor**.

This isn't a generic prompt. He fed GPT their specific tone-of-voice guide (referencing Palantir and SpaceX styles) and examples of their best-performing content.

He pastes the Granola summary *and* the raw transcript into the GPT.

### Step 3: The Output
The GPT spits out a formatted blog post with skimmable headers. But he doesn't stop there.

He asks the GPT to convert that blog post into a tweet thread, complete with placeholders for specific visual assets.

**The lesson:** Don't just edit the output. Edit the underlying prompt. If the headers are weak, update the system instructions so the next one is perfect.

## How 11Labs Saved $140k/Year with Cursor

This is my favorite part of the episode. Luke effectively "vibe coded" a solution that replaced an entire enterprise software stack.

11Labs needed to localize their website into languages like Hindi, Spanish, and Japanese.

The standard industry solution involved:

1.  A $40,000/year localization tool.
2.  $100,000/year in agency costs for human translation.

The result? It was slow, expensive, and the quality was actually terrible.

So, one weekend while he was sick in bed, Luke opened **Cursor** and built his own solution.

[FRAME_1]

### The Build
Instead of a complex SaaS tool, he wrote a simple server and a GitHub Action.

*   **The Input:** String files from the codebase.
*   **The Brain:** OpenAI API with a specific prompt *per language*.
*   **The Quality Control:** The prompt includes the brand glossary and tone specific to that region.

Now, when they push code, the AI instantly translates the strings. If the tone is off, they don't blame a translator—they tweet the prompt.

Total cost: Basically zero maintenance. 
Total savings: ~$140,000 immediately.

It forces you to rethink the "Build vs. Buy" debate. When building is this cheap, buying bloated software might be the riskier move.

## The WhatsApp MCP

Finally, Luke showed us the future of personal assistants using **MCP (Model Context Protocol)**.

MCPs allow LLMs (like Claude) to connect to external data sources and tools.

Luke built a **WhatsApp MCP**. It runs locally on his machine and acts like WhatsApp Web.

[FRAME_2]

### What it does
It downloads his message history into a local SQL database. He can then open Claude and ask questions like:

*   "Summarize the thoughts on 11Labs from my tech groups."
*   "What are the trending topics in my chats this week?"
*   "Send a message to Claire."

Because the context window is huge, he can query across hundreds of group chats instantly.

He even showed how you can spin up a "Pizza Ordering Agent" on the fly. You tell Claude to create an agent that can phone a restaurant (using 11Labs), and order for you, and the MCP handles the execution.

## Voice is the Next Input

We wrapped up by talking about voice as a modality for product managers.

Luke believes voice unlocks experiences that weren't possible before—like an interactive chess tutor that explains moves as you play, or customer support teams that speak every language fluently.

It’s not just about text anymore. It’s about building flows that listen, understand, and act.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Orkes](https://www.orkes.io/)**: The platform powering complex workflows and process orchestration for modern enterprise apps and agentic workflows.
- **[Retool](https://retool.com/howiai)**: The fastest way to build internal tools and AI apps that actually connect to your business data and take action.

## Episode Links
* [YouTube](https://youtube.com/watch?v=5Byg-9K8JnM)
* [Spotify](https://open.spotify.com/episode/5oeopOw0MmgR7IofopawJ0?si=abc06f86b93e4cf9)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/the-exact-ai-playbook-using-mcps-custom-gpts-granola/id1809663079?i=1000710856021)