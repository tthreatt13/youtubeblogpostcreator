---
Meta Title: Sahil Lavingia's AI Stack: v0, Devin, and Cursor Workflow
Meta Description: Gumroad CEO Sahil Lavingia joins How I AI to demonstrate how he uses v0, Devin, and Cursor to achieve a 40x increase in engineering speed.
Keywords: Sahil Lavingia, Gumroad, Devin AI, v0 tutorial, Cursor editor, AI engineering workflow, AI product management
---

# How I AI: Gumroad CEO's Playbook to 40x His Team's Productivity with Sahil Lavingia

Can you do something that used to take two weeks in just two hours?

That is a 40x speed increase.

It sounds impossible, or at least highly optimistic. But for Sahil Lavingia, CEO and Founder of Gumroad, that number is the new baseline.

Sahil isn't just theorizing about the future of work. He is actively re-architecting his company to remove every bottleneck that stands between an idea and production.

On this episode of How I AI, Sahil opens up his laptop to show us exactly how he does it.

He walks us through his "v0 to Devin to Cursor" pipeline, redesigns a live product feature in real-time, and explains why he paid his employees $33,000 to beat him at writing AI code.

## The New Engineering Trinity: v0, Devin, and Cursor

The most interesting part of Sahil's workflow is that he treats different AI tools like specialized employees.

He doesn't try to force one LLM to do everything.

Instead, he uses a distinct pipeline to move from abstract concept to shipping code.

**1. v0 for Prototyping:** This is where the vision happens. He uses v0 to rapidly generate UI/UX, iterating on the design before a single line of production code is written.

**2. Devin for Execution:** Once the prototype is solid, he hands the specs to Devin. Devin acts as the autonomous engineer, setting up the environment, writing the logic, and opening the Pull Request.

**3. Cursor for Polish:** If Devin gets stuck or misses the last mile, Sahil jumps into Cursor to manually tweak the code or guide the AI through specific architectural nuances.

[FRAME_0]

## Live Demo: Building the "Magical" Date Picker

To prove this isn't just theory, Sahil demoed a redesign of his internal tool, Flexile.

The goal? Replace a clunky, native browser date picker with a "magical" natural language input.

He wanted a user to be able to type "Next Monday" or "Tomorrow at 9am" and have the system understand it immediately.

In the past, this would have been a surprisingly heavy lift. 

You would need to design the component, debate the UX, find a natural language parsing library, and wire it all up. It’s a multi-day, maybe multi-week ticket.

Sahil started in v0.

He prompted it to build a "really dope natural language date picker."

Within seconds, v0 spun up a functional UI that looked better than most banking apps. It even included innovative suggestions like "in 2 weeks" based on the context of it being an HR platform.

[FRAME_1]

Once the design was locked, he didn't write a Jira ticket.

He took the prompt and the v0 output and fed it to Devin.

Devin spun up the browser, wrote the complex date-math logic (calculating what "next Monday" actually means in timestamps), and integrated the ShadCN component.

The result was a production-ready feature shipped in a fraction of the time.

## Gamifying the AI Adoption Curve

The biggest hurdle to this 40x speed increase isn't the technology.

It is the people.

Engineers are creatures of habit. Change is uncomfortable, and AI represents a massive shift in job security and daily workflows.

Sahil tackled this head-on with a competition.

He put up a $33,000 prize pool for May.

The rules were simple: the money would be split between whoever opened and merged the most AI-generated PRs (using Devin) and Sahil himself.

[FRAME_2]

Sahil came in fourth.

Twenty-seven PRs later, he had successfully incentivized his team to stop fearing the tool and start mastering it.

## The Future: Designers as Shippers

This workflow points to a massive shift in how product organizations will function.

Sahil believes the majority of future human engineering will be focused on removing technical debt so that AI agents can ship features.

Engineers will focus on architecture, standards, and safety rails.

Meanwhile, designers—empowered by tools like v0 and Devin—will be the ones actually shipping the product.

They won't just mock up the button; they will push the button to production.

It’s a scary transition for some, but for Sahil, it’s the only way to stay ahead of the curve.

## Thanks to Our Sponsors

This episode is brought to you by:

- **[Enterpret](http://enterpret.com/howIAI)**: A customer intelligence platform that unifies feedback from Gong, Zendesk, and more to help product teams build what matters.
- **[Vanta](https://www.vanta.com/howiai)**: The leading automated security and compliance platform that helps you achieve ISO 4201 compliance quickly and affordably.

## Episode Links

* [YouTube](https://youtube.com/watch?v=KVZ3vMx_aJ4)
* [Spotify](https://open.spotify.com/episode/2kUyXpJ6BWxu2lio0xZ6U6?si=34f752017d5d4288)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/gumroad-ceos-playbook-to-40x-his-teams-productivity/id1809663079?i=1000704436638)