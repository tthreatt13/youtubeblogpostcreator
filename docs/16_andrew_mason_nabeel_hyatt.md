---
Meta Title: How Andrew Mason & Nabeel Hyatt Built a Business with AI
Meta Description: Learn how the CEO of Descript and a Spark Capital VC used Claude, AirTable, and n8n to build a physical board game business from scratch.
Keywords: AI business plan, Claude for business, n8n automation, AirTable AI, Andrew Mason Descript, Tabletop Library Berkeley
---
Aug 4, 2025

# How I AI: How a VC and Tech Founder Used AI to Launch a Physical Business with Andrew Mason and Nabeel Hyatt

You probably know Andrew Mason as the CEO of Descript and Nabeel Hyatt as a partner at Spark Capital. They spend their days building and investing in high-growth software companies.

But by night? They are navigating the labyrinth of Berkeley commercial real estate permits to open a board game social club.

It sounds like a joke—or at least, a terrible use of time for two extremely busy tech executives. 

However, their project, **Tabletop Library**, isn't just a hobby. It is a masterclass in using AI to overcome the friction that kills most side projects.

In this episode of *How I AI*, Andrew and Nabeel break down how they used Claude, AirTable, and n8n to act as their business consultant, manual laborer, and software engineer.

Here is how they turned a "ridiculous idea" into a brick-and-mortar reality.

## AI as the Business Co-Pilot

Starting a physical business involves a mountain of administrative pain. You have to figure out floor plans, financial projections, and the dark art of local zoning laws.

Usually, this is where the "wouldn't it be cool if..." conversation dies.

Instead of hiring consultants, Andrew and Nabeel spun up a **Claude Project**.

[FRAME_0]

They treated Claude as a partner, dumping everything into the context window:

*   Drafts of lease agreements.
*   Berkeley municipal codes.
*   Rough ideas for the customer experience.

Rather than one giant prompt, they treated it as an iterative document generator. They would ask Claude for a business plan, edit the output, and feed it back into the project as the new "source of truth."

This allowed them to tackle tasks they had zero experience in—like writing a Letter of Intent (LOI) to a landlord—with the confidence of seasoned retail operators.

## Doing the "Grunt Work" at Scale

One of the biggest friction points in board game cafes is the "Wall of Confusion." You walk in, see 500 boxes, and have no idea what to play.

To solve this, Andrew and Nabeel invented a custom categorization system—think of it as a Dewey Decimal System for games.

Manually categorizing hundreds of games by weight, complexity, and theme would have taken weeks.

Instead, they built a pipeline using Claude.

[FRAME_1]

They fed the AI their design prompts and the system's rules. The AI then analyzed every game in their library and assigned it a specific code (e.g., 420.5 for a heavy adventure co-op game).

This is the kind of "manual labor" that makes side projects impossible. With AI, it was done almost instantly.

## Building the "Looking for Gamers" Agent

The most technical part of Tabletop Library is the **AI Concierge**.

Andrew wanted a system where a member could text a number and say, "I want to play a deck-building game on Friday night," and the system would handle the rest.

It needed to:
1.  Understand the intent.
2.  Check the database for member availability.
3.  Reach out to *other* members to form a quorum.
4.  Book the table.

They didn't spin up a Postgres database or write a React frontend. They used a low-code stack optimized for speed.

### The Stack:
*   **Database:** AirTable (easy to visualize and edit manually if needed).
*   **Orchestration:** n8n (for the agentic workflow).
*   **Interface:** Twilio (SMS).

[FRAME_2]

The workflow is brilliant in its simplicity. When a text comes in, n8n routes it through a series of AI agents.

One agent checks if the user is a member. Another checks the inventory. A third uses the "Create Record" tool in AirTable to book the slot.

Because they used AirTable's built-in AI fields and MCP (Model Context Protocol) connections, they could build a complex, multi-turn agent without writing traditional code.

## Rewiring Your Brain for AI

The takeaway from Andrew and Nabeel isn't about a specific prompt or tool. It is about a fundamental shift in problem-solving.

Andrew calls it "rewiring your brain."

It is the discipline of pausing before every task—whether it is merchandising a retail shelf or coding a scheduling bot—and asking, "Can AI do this for me?"

For Tabletop Library, the answer was almost always yes.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Lovable](https://lovable.dev/)**: Lovable lets you build working apps and websites by simply chatting with AI, perfect for founders launching their next business.
- **[Persona](https://withpersona.com/howiai)**: The B2B identity platform helping product and trust & safety teams verify users and fight fraud in an AI-first world.

## Episode Links
* [YouTube](https://youtube.com/watch?v=HuLL6wOEIB8)
* [Spotify](https://open.spotify.com/episode/2yZVZmRfSZVUvCHrj1TjNS?si=5965e7458d41499c)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-a-vc-and-tech-founder-used-ai-to-launch/id1809663079?i=1000720578151)