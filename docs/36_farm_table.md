---
Meta Title: Farm-to-Table Software: How I Built a Thanksgiving App with AI
Meta Description: Claire Vo demonstrates how to vibe-code a Thanksgiving party hub using Lovable, create custom assets with Midjourney-style references, and reformat recipes with ChatGPT.
Keywords: Lovable AI, Vibe Coding, Midjourney Style References, ChatGPT Recipe Formatting, AI Prototyping, Google Fonts Pairings
---
Nov 19, 2025

# How I AI: Farm-to-Table Software: How I Built a Thanksgiving Party Hub with Claire Vo

Welcome back to How I AI. I'm Clarvo, product leader and AI obsessive here on a mission to help you build better with these new tools.

With Thanksgiving just around the corner, I wanted to do something a little different. Instead of a typical SaaS application, we are vibe coding a personalized party hub for your upcoming dinner party.

I’m going to walk you through how to use Lovable to build the app, how to uplevel the design using Google Fonts and Midjourney, and my absolute favorite trick for making cooking easier with ChatGPT.

Let’s get to it.

## Vibe Coding the Basics with Lovable

For this project, I chose Lovable. I usually reach for Lovable because it tends to have a slightly nicer design component out of the box compared to other vibe coding tools.

It brings in a bit more color and humanity, which is perfect for a personal project like a holiday gathering. I started with a straightforward prompt.

I asked Lovable for a Thanksgiving party hub that could manage invites, coordinate dishes for a potluck, share recipes, and host a photo gallery.

[FRAME_0]

If you’ve ever hosted a big meal, you know the drill. You need to know who is coming, what they can eat, and how to avoid having twelve bowls of mashed potatoes and no turkey.

Lovable spun up a V1 immediately. It had a warm autumn palette—oranges and golden browns—and the core features I asked for. But honestly? It wasn't that great yet. It looked a bit like generic software.

## Upleveling Typography with Google Fonts

One of the easiest ways to move your prototype from "vibe coding slop" to "farm-to-table software" is typography.

Here is a secret: tools like Lovable, Bolt, and V0 are usually well-integrated with Google Fonts. You don't have to stick to the defaults.

I like to browse Canva for font pairings. For this app, I wanted something cozy—like a grandmother writing a recipe card. I found a combination of "Homemade Apple" for headlines and "Railway" for the body text.

I went back to Lovable and pasted this specific instruction:

> *"I want to use Google Fonts Homemade Apple for the headlines and Railway for the body font."*

Lovable interpreted this perfectly. It updated the Tailwind config, pulled in the Google API, and applied the styles. Suddenly, the app didn't look like a SaaS dashboard; it looked like an invitation.

## Creating Custom Aesthetics with Midjourney

The next problem was the header image. It was a generic, boring stock photo of a plate. I wanted something specific: a geometric, paper-cutout, autumnal harvest table.

To get this look, I turned to Midjourney and utilized **Style References (sref)**.

If you haven't used style references yet, they are codes you append to your prompt to mimic a specific aesthetic. I used a code I found on X (formerly Twitter) that generates a whimsical, textured, storybook-style paint.

[FRAME_1]

My initial prompt generated a beautiful square image, but I needed a wide banner for the website header. Here is a pro tip: use the "Use Prompt" feature in Midjourney to recycle your successful prompt, but go into settings and change the aspect ratio to 2:1.

This gave me a stunning, wide image that felt custom-made for the site. I uploaded it to Lovable, asked it to personalize the copy to "Claire's Thanksgiving Feast," and we were in business.

## Handling Logic: Dietary Restrictions

Vibe coding isn't just about making things pretty; it's about handling data models without writing SQL.

For a potluck, dietary restrictions are critical. I have family members who are vegan, gluten-free, or dairy-free. I needed the guest list to handle this.

I prompted Lovable:

> *"Let's add dietary preferences/restrictions to the guest list. Let's start with a multi-select of the most common ones."*

By specifying "multi-select," I ensured the app understood that one person could be both gluten-free *and* dairy-free. Lovable added the field instantly.

Then, I took it a step further. I asked it to map those restrictions to the *dish* coordinator. Now, when someone adds "Mashed Potatoes," they can tag it as "Vegetarian" and "Gluten-Free."

In seconds, I built a relational link between guest needs and the menu, ensuring my husband wouldn't be hangry on Thanksgiving.

## My Favorite Recipe Trick with ChatGPT

Finally, let’s talk about the cooking itself. My biggest pet peeve with online recipes is the format.

You have a list of ingredients at the top, and instructions at the bottom. When you are cooking—especially with kids—you are constantly scrolling up and down with dirty hands trying to remember if it was one teaspoon or one tablespoon.

I use ChatGPT to fix this. I take a screenshot of a recipe (or paste the text) and ask it to reformat the instructions so the measurements are *embedded* in the steps.

[FRAME_2]

I tested this with ChatGPT 5.1 (which, by the way, has a very distinct, almost "cute" personality compared to 4o). My prompt was specific:

> *"For instructions, I want them clearly in steps. And I want to make sure both the ingredients and the measurements are in line so I do not have to go back and reference the ingredients list."*

The result? "Step 1: Bring 6 cups of water and two teaspoons of salt to a boil."

No scrolling. No guessing. Just seamless execution. I copied and pasted this directly into the Lovable app, and now my party hub is not just an invite tool—it’s a functional kitchen assistant.

## Thanks to Our Sponsors
This episode is brought to you by:
- **[WorkOS](https://workos.com/?utm_source=lennys_howiai&utm_medium=podcast&utm_campaign=q22025)**: WorkOS provides drop-in APIs for enterprise features like SSO, SCIM, and audit logs, helping your app become enterprise-ready and scale up-market faster.

## Episode Links
* [YouTube](https://youtube.com/watch?v=20t1UrORq7I)
* [Spotify](https://open.spotify.com/episode/3D8VjoUVMHqdUTlIUaxqJy?si=c282432441e34fe8)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/farm-to-table-software-how-i-built-a-thanksgiving/id1809663079?i=1000737404372)