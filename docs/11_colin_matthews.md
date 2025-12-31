---
Meta Title: How to Clone Your Product's Design System with AI (v0 & Magic Patterns)
Meta Description: Learn how to build AI prototypes that look exactly like your product. Colin Matthews joins How I AI to demonstrate component extraction using v0 and Magic Patterns.
Keywords: AI prototyping, v0 tutorial, Magic Patterns, product management AI, component libraries, Figma alternative
---
June 30, 2025

# How I AI: How to Build Prototypes That Actually Look Like Your Product with Colin Matthews

The word of the year might be "vibe coding," but if I had to pick a close second, it would be **prototype**.

We have unleashed the product manager with chat-based prototyping tools. But there is a catch.

If you have ever tried to bring these tools into a larger company, you know the struggle. Out-of-the-box AI tools are great at wireframing, but they are terrible at replicating your specific brand, design system, and patterns.

[FRAME_0]

You end up annoying your designers by creating monochrome, generic UI that looks nothing like your actual product. You aren't giving them assets they can actually use.

That is why I invited **Colin Matthews** to the show. He has figured out a workflow to turn screenshots into reusable component libraries, allowing you to prototype new features that look exactly like your existing app.

Here is how to stop wireframing and start building production-ready prototypes.

## The "Component First" Approach

Most people open v0 or Bolt and type, "Make me a homepage for Airbnb." The result is usually a generic hallucination of a travel site.

Colin’s approach flips this on its head. He doesn't start with the view; he starts with the **components**.

The strategy is simple but rigorous. Instead of asking the AI to build a page, you feed it screenshots of specific elements—the nav bar, the property card, the search filter—and ask it to generate code for those isolated components first.

[FRAME_1]

You build a "Component Library" project before you ever try to build a page. 

Once the AI has generated these Lego blocks (logo, search bar, navigation items), you ask it to assemble them. You can say, "Create a homepage for Airbnb using these components."

Because the AI is referencing your specific styling rules, the output isn't a generic wireframe. It looks like your product.

## Extracting Code with Magic Patterns

If you want to get even more technical without writing code, Colin introduced me to a tool called **Magic Patterns**.

This tool solves the biggest friction point: getting the initial code. Usually, no front-end engineer wants to stop their work to export clean component code for a PM's prototype.

Magic Patterns has a Chrome extension that lets you click on a UI element on your live site—like a data table or a chat window—and extract it.

[FRAME_2]

You click "Convert to Component," and it imports the styling and structure into your library. It effectively "rips" your exact HTML and CSS so you can start your prototype with pixel-perfect assets.

This means you aren't just prompting for a "table." You are prompting with *your* table.

## The Power of Forks and Baselines

We have all been there. You are "vibe coding," everything is going great, and then one prompt breaks everything. You can't get back to the version that worked.

Colin suggests treating your AI prototypes like actual software projects using **forks** and **baselines**.

1.  **Create a Baseline:** Build your core component library and a standard page (e.g., your current dashboard). Label this "Baseline."
2.  **Fork for Features:** When you want to test a new idea, duplicate the project. Label it "Var 1 - New Feature."

If the AI goes off the rails, your baseline is safe. You can explore wildly different UX patterns side-by-side without destroying your foundation.

## Troubleshooting When the AI Won't Listen

Even with a perfect setup, the AI will sometimes do weird things. In our demo, it insisted on inserting a stock photo of a man into our UI.

Colin’s debugging tactic is aggressive and structured. He doesn't just say "delete this."

His prompt formula for errors is:

*   "Explain to me why this is happening."
*   "Do NOT write code yet."
*   "Propose a solution."

By forcing the model to explain the logic *before* it tries to fix the code, you prevent it from entering a loop of bad code generation. 

## Start Building Your Library

The goal here isn't to replace designers. It is to increase the fidelity of your ideas so that when you *do* talk to design and engineering, you are speaking the same visual language.

Stop building generic wireframes. Start building component libraries.

## Thanks to Our Sponsors

This episode is brought to you by:

*   **[WorkOS](https://workos.com?utm_source=lennys_newsletter&utm_medium=referral&utm_campaign=howiai)**: WorkOS provides drop-in APIs for enterprise features like SSO, SCIM, and audit logs, helping apps become enterprise-ready and scale up-market faster.
*   **[Notion](https://www.notion.com/howiai)**: Notion is the all-in-one AI workspace that combines notes, docs, and projects, now featuring AI meeting notes that automatically summarize discussions and extract action items.

## Episode Links

*   [YouTube](https://youtube.com/watch?v=I62dr0TwyZM)
*   [Spotify](https://open.spotify.com/episode/6paL6S5OVTlZXIGTQzbAL2?si=291839d4aef840a5)
*   [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-to-build-prototypes-that-actually-look-like-your/id1809663079?i=1000715121604)