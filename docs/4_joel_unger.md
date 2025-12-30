---
Meta Title: How to Use Cursor for Design Prototyping | Atlassian's Workflow
Meta Description: Atlassian Design Director Joel Unger reveals how he uses Cursor to code interactive prototypes, automates SVG animations, and uses Midjourney for character design.
Keywords: Cursor for designers, AI prototyping, Trello redesign, Midjourney character design, Figma to code workflow, Atlassian design system
---
May 12, 2025

# How I AI: A Designer’s Guide to AI: Why Designing in Cursor? with Joel Unger

Is the role of the product designer about to change forever?

If you ask Joel Unger, Design Director at Atlassian, the answer is a resounding yes. But it’s not about AI taking jobs—it’s about AI getting the ideas out of your head faster.

Joel has spent the last decade building products we all know and love, like Confluence, Bitbucket, and Trello. 

Recently, he’s been leading a massive pivot for Trello, transforming it from a Kanban board into a personal productivity powerhouse.

To pull off complex, interactive redesigns, he had to leave Figma behind and start coding. 

Here’s how Joel is using Cursor, Midjourney, and AI workflows to bridge the gap between design and engineering.

## The Problem with Static Specs

The Trello team is rolling out new features like a unified Inbox and Planner. These aren't just sidebar toggles; they are complex, responsive panels that need to sit alongside your main board.

Joel started where most designers start: Figma. He mocked up pixel-perfect variations of how these panels would fit on ultra-wide monitors, laptops, and split screens.

[FRAME_0]

But when they launched the beta, users wanted more control. They wanted to drag, drop, and resize panels dynamically.

Figma is incredible for visual fidelity, but it falls short on logic. You can’t easily "feel" the friction of a resize handle or see how a layout breaks when a user drags a panel 500 pixels to the left.

Joel needed a prototype that actually worked.

## Prototyping in Cursor

Instead of creating hundreds of static frames to explain the interaction to engineers, Joel opened Cursor.

He set up his developer environment—a hurdle that is getting lower every day—and started pasting his Figma screenshots directly into the chat.

His prompt was simple: "Build me a three-panel system with a toolbar to toggle on and off panels."

The best part about AI coding? Spelling doesn’t matter. There are no strict syntax rules for the prompt. The AI interprets the intent and starts writing the code.

With the right component libraries in place, Cursor built a functional, drag-and-drop web prototype.

This allowed Joel to make nuanced, responsive design choices he never would have encountered in a static mock. 

He could test edge cases immediately. What happens if you drag the panel all the way to the edge? Does it snap shut? Does it overlap?

## The "Living Spec" Handoff

Joel didn’t just hand this raw AI code to his engineering team and call it a day.

Production code needs unit tests, accessibility compliance, and enterprise-grade security. The prototype code wasn't ready for that.

Instead, he used the working prototype to record a Loom video.

He showed the engineers exactly how the `min-width` should behave and how the stacking logic worked.

It replaced hours of meetings and confusion with a clear, interactive demonstration. The engineers instantly understood the interaction's physics, enabling them to build the production version faster and with fewer revisions.

## Saving the Brand Assets with AI

AI isn't just for complex UI logic. Sometimes, it saves you from tedious pixel-pushing.

Days before a major code freeze, Joel received a last-minute request to replace the product's logos. 

The problem? The Trello logo included a legacy "Easter egg" animation in which the bars would dance on hover. It was an ancient animated GIF, and the source files were long gone.

Recreating it in After Effects would have taken hours.

[FRAME_1]

Instead, Joel took the static SVG vector of the logo and threw it into Cursor.

He asked the AI to apply a clipping mask and animate the bars. He didn't need to know the complex math or CSS keyframes required to animate SVG paths.

He described the motion: "Dance the little animation up and down." 

After a few rounds of tweaking pixels and timing, he had a lightweight, scalable animated SVG ready for production in a fraction of the time.

## Moodboarding with Midjourney

Joel also uses AI for creative exploration, specifically for Trello’s beloved husky mascot, Taco.

The design team needed to standardize Taco’s look. Does he have pink paws? Gray eyebrows? How "floofy" is the fur?

Joel used Midjourney to stress-test the character consistency.

[FRAME_2]

He started by feeding Midjourney a black-and-white vector mask of the logo to generate variations. Then, he moved to character prompts.

He found that while Midjourney couldn't produce the final production asset, it was perfect for creating a high-fidelity mood board.

By generating dozens of variants—changing eye color, fur texture, and accessories—he gave the design team a rich visual library to discuss and refine.

It turned abstract debates about style into concrete visual decisions.

## The 90/10 Split

For Joel, AI hasn't replaced the designer. It has clarified what the job actually is.

He estimates that Figma is maybe 10% of the job. The other 90% is thinking about the problem.

AI tools like Cursor and Midjourney just let you get through the 10% faster, so you can spend more time on the gnarly, difficult parts of product strategy.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[Paragon](https://useparagon.com/howi)**: Paragon is the all-in-one embedded integration platform for AI SaaS products, helping teams accelerate integration development velocity by up to 50x.
- **[WorkOS](https://workos.com?utm_source=lennys_newsletter&utm_medium=newsletter&utm_campaign=howiai)**: WorkOS provides drop-in APIs for enterprise features like SSO, SCIM, and audit logs, helping apps become enterprise-ready and scale up-market faster.

## Episode Links
* [YouTube](https://youtube.com/watch?v=PM_WegIlNls)
* [Spotify](https://open.spotify.com/episode/74yB6BLVHmvW1MPCVlyPuC?si=3e4177ba82ec4f89)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/a-designers-guide-to-ai-why-designing-in-cursor/id1809663079?i=1000708102310)