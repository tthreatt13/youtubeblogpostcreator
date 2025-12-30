---
Meta Title: How a Yelp PM Prototypes AI Products with Claude & Magic Patterns
Meta Description: Yelp PM Priya Badger shares her 'Golden Conversation' framework for AI product management, using Claude Artifacts and Magic Patterns to prototype faster.
Keywords: AI Product Management, Claude Artifacts, Magic Patterns, Prototyping AI, Golden Conversations, Yelp Assistant
---

# How I AI: How this Yelp AI PM works backward from "Golden Conversations" with Priya Badger

Most Product Managers are trying to figure out how to incorporate AI into their workflow.

But for PMs building AI-native features, the challenge is twofold: managing the product with AI, and managing the AI within the product.

Priya Badger, a Product Manager at Yelp, is doing both.

She’s building the new Yelp Assistant, a conversational tool that helps users hire professionals for everything from home repairs to car trouble.

On this episode of *How I AI*, Priya breaks down a completely inverted approach to product requirements.

Instead of starting with wireframes, she starts with the conversation itself.

Here is how she prototypes, prompts, and builds effective agents using AI tools.

## The "Golden Conversation" as the New Wireframe

When building a conversational interface, the standard PRD (Product Requirement Document) falls short.

Static mockups can’t capture the nuance of an LLM’s personality or logic.

Priya’s approach is to start with what she calls "Golden Conversations."

She uses Claude to roleplay the ideal interaction between a user and the Yelp Assistant.

[FRAME_0]

Her process is specific:

1.  **Set the Stage**: She prompts Claude to write a complete sample conversation.
2.  **Define formatting**: She asks for specific labels like `Assistant:` and `User:` to keep it readable.
3.  **Provide constraints**: She gives scenario requirements, such as analyzing a photo of a cracked porch or a wasp nest.

This text-based transcript serves as the first-pass wireframe.

It allows the team to critique the *content* and the *logic* before a single pixel is designed.

## Moving to Interactive Artifacts

Once the conversation flow feels right, Priya takes it a step further.

She uses **Claude Artifacts** to turn those text scripts into a functioning prototype.

This is a massive unlock for non-technical PMs.

By asking Claude to "create an assistant app as an artifact," she gets a functional chat interface that actually calls the Anthropic API.

She can upload real photos—like her own bathroom renovation—and see how the AI interprets them in real-time.

This reveals friction points you’d never catch in a Google Doc.

Does the response feel too long on a mobile screen?

Is the latency annoying?

Is the tone too robotic?

Reading the model's "thinking process" also helps her debug the system prompt, effectively letting the AI teach her how to prompt it more effectively.

## Visual Exploration with Magic Patterns

After locking down the logic, the next step is the visual interface.

For this, Priya uses **Magic Patterns**.

It allows her to describe a UI component—like a "start with a photo" button—and generates the code and visual design instantly.

[FRAME_1]

This replaces the "hacky Figma mockups" that most PMs are used to stitching together.

But the real power feature here is **Inspiration Mode**.

Priya can ask Magic Patterns to generate four distinct variations of a user flow.

Maybe one flow focuses on speed, while another focuses on guiding the user step by step.

This compresses the iteration cycle significantly.

Instead of going back and forth with a designer for days to move a button, she can bring four distinct options to the design review.

It facilitates a much richer conversation about trade-offs and user experience.

## AI for Community and Personal Productivity

Priya applies these same principles outside of her core product work.

She manages an internal "Talk AI" channel at Yelp and uses a Claude Project to summarize the weekly discourse into a newsletter.

She feeds the raw Slack threads into a project with a predefined template, and the AI handles the formatting and summarization.

[FRAME_2]

She even built a "Parent Pal" artifact to help negotiate with her toddler, and a custom timer for her family's *Settlers of Catan* games.

It proves that once you understand the prototyping stack, you can solve almost any data or logic problem in minutes.

## Troubleshooting AI Fatigue

Even with the best tools, AI sometimes goes off the rails.

Priya’s advice is simple: Remember it’s not a human.

LLMs have limited context windows and can get confused after long, winding conversations.

If you hit a wall, don't argue with it.

Use the "fork" feature in your tooling, or start a fresh chat with a summary of context.

Sometimes the best debugging tool is a clean slate.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[GoFundMe Giving Funds](https://www.gofundme.com/howiai)**: A smarter, easier way to give that functions as a zero-fee Donor Advised Fund (DAF), allowing you to contribute assets, get tax deductions immediately, and donate later.
- **[Persona](https://withpersona.com/lp/howiai)**: The B2B identity platform helping product and trust & safety teams verify users, fight fraud, and ensure compliance in an AI-first world.

## Episode Links
* [YouTube](https://youtube.com/watch?v=wDA6DslBeqk)
* [Spotify](https://open.spotify.com/episode/0rrxWFPAfWQt2bu3lf47e9?si=7d5c6da1ec774b84)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-this-yelp-ai-pm-works-backward-from-golden-conversations/id1809663079?i=1000732641985)