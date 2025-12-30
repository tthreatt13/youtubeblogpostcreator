---
Meta Title: Vibe Coding a 3D Multiplayer Game in 15 Minutes | How I AI
Meta Description: Watch Sentry's Cody DeArkland speedrun building a multiplayer 3D flight simulator using Claude Code, Three.js, and vibe coding techniques.
Keywords: vibe coding, Claude Code, AI game development, Three.js tutorial, coding assistant, Sentry, rapid prototyping
---
May 5, 2025

# How I AI: Vibe Coding a 3D Multiplayer Game in 15 Minutes with Cody DeArkland

We are truly unhinged in AI today.

I hate to admit when people "vibe code" harder than I do. But Cody DeArkland, Senior Director of Developer Experience at Sentry, might have me beat.

Cody isn’t just using AI to write email drafts. He is automating his home, building personal productivity apps for his family, and—as we proved in this episode—building functional 3D video games in minutes.

[FRAME_0]

In this episode of *How I AI*, Cody joined me for a literal speed run. 

We didn’t just talk about code. We built a multiplayer flight simulator from scratch, live on the show, using the latest AI tools.

Here is how he pulls it off.

## The "Junior Developer" Stack

When Cody shares his screen, it looks chaotic to the untrained eye.

He has Cursor open. He has Windsurf open. He has Claude running in the terminal. 

Why so many tools?

Cody treats each AI agent as a specific "junior developer" assigned to a different task. 

He might have Windsurf working on a game concept, Cursor diving into a specific work application, and Claude handling a backend server task.

Instead of trying to force one LLM to hold the entire context of his digital life, he orchestrates a team of agents.

## The Strategy: Broad Strokes First

Most people get frustrated with AI coding because they try to write a perfect, detailed PRD (Product Requirements Document) into the prompt right away.

They want the final product in the first shot.

Cody takes the opposite approach. He stays incredibly vague.

For our live demo, he opened a blank Vite React project and typed something like this into Claude Code:

*"I want to build a flight simulator game that uses Three.js. Let's use polygon style art... WASD for movement... I want it to take off from a green field."*

That was it—about 27 words.

[FRAME_1]

His philosophy is simple: Get the V0 prototype working immediately. 

Give the LLM enough room to be creative with the implementation, then iterate on the specific features that matter.

## Speedrunning the Build

Within minutes, Claude Code had scaffolded the application, installed Three.js, and rendered a scene.

Was it perfect? No.

When we launched the game (dubbed "Boop Flight"), the camera was facing the wrong way. The plane flew toward the screen instead of away from it. 

But visually? We had a plane. We had a world. We had physics.

This is where the "vibe coding" shines. 

Instead of digging into the documentation for camera positioning in Three.js, Cody just told the AI like a colleague: *"Hey, the camera is facing the front of the model. We need to look at the tail."*

## The Flex: Adding Multiplayer Live

To see if we could break it, I challenged Cody to add multiplayer functionality.

He didn't pause the frontend work. 

He opened a second terminal tab, created a `server` directory, and spun up a second instance of Claude.

He told that instance: *"I want to start implementing multiplayer for this game in the server directory... handle player joins."*

While one AI fixed the camera angles on the frontend, the other AI wrote the Express server and WebSocket logic on the backend.

[FRAME_2]

Five minutes later, I was on my computer, joining his localhost server via a tunnel. 

We were flying planes together in a world that didn't exist 15 minutes prior.

## The Lesson: Be the Product Manager

The most essential skill Cody demonstrated wasn't coding—it was Product Management.

When the AI started getting "squirrely" or adding features we didn't ask for (like a weird cockpit view), Cody didn't rewrite the code himself.

He reset the context.

He uses phrases like:
*   "Can we start over on this specific feature?"
*   "We've layered on too much complexity. Let's simplify."
*   "Here are the requirements. Let's take a fresh look."

We are in a time period where anyone can do this. You don't need to be a game dev to build a game anymore. You need to be willing to direct the vibe.

## Thanks to Our Sponsors

This episode is brought to you by:
- **[Enterpret](http://enterpret.com/howIAI)**: A customer intelligence platform used by Notion and Canva to unify customer feedback from every channel into a single knowledge graph.
- **[WorkOS](https://workos.com?utm_source=lennys_pod)**: The API that makes your app enterprise-ready with Single Sign-On, SCIM, and audit logs from day one.

## Episode Links

* [YouTube](https://youtube.com/watch?v=xW5y2Yv_E2Y)
* [Spotify](https://open.spotify.com/episode/6S6eqhhXWvBgjzMGKbxztc?si=8b109f3a3dc64842)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/vibe-coding-a-3d-multiplayer-game-in-15-minutes-with/id1809663079?i=1000706343916)