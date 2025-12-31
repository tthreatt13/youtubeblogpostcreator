---
Meta Title: How a 91-Year-Old Used Claude and Replit to Build a SaaS App
Meta Description: Meet John Blackman, the 91-year-old "vibe coder" who built a complex multi-tenant church management app using Claude for requirements and Replit Agent for code.
Keywords: Replit Agent, Vibe Coding, Claude AI, AI Software Development, No-Code, Low-Code, SaaS Development
---
June 23, 2025

# How I AI: How a 91-Year-Old Vibe Coded a Complex App with John Blackman

I usually don’t start these posts with a biography, but John Blackman’s resume requires an exception.

John started as an electrical engineer at Kansas City Power and Light. He left to run a hardware store, earned an airplane mechanic certification, returned to engineering to pioneer AutoCAD in the 80s, and came out of retirement to help launch Google Fiber.

Now, at 91, John is "vibe coding" complex software using AI agents.

In this episode, John walks us through how he used Claude and Replit to build a multi-tenant event management application for his church. It is a masterclass in curiosity, the growth mindset, and the power of treating AI as a partner rather than just a tool.

## The Problem: Scaling Impact with Software

John’s church hosts "Impact Weekends," providing free community services like haircuts, eye exams, car washes, and food. Managing these events involved manual registration, handwritten forms, and logistical headaches for volunteers.

John wanted to digitize the process. He envisioned a system where participants could register online, select services, and generate a printable "Impact Passport" to guide them through the event stations.

Instead of hiring a dev shop or struggling through tutorials, John turned to his grandsons and AI.

[FRAME_0]

## Phase 1: Claude as the Product Manager

Most people jump straight into code. John did something smarter: he started with requirements.

He drafted an outline of what he wanted and fed it into Claude. He instructed Claude to act as a Product Manager to help him create a development roadmap. The prompt engineering here was intuitive but effective—he told Claude, "If you need more information from me, ask me the questions right away."

Claude helped him generate:

*   **User Stories:** Defining the journey for admins, local church leaders, and participants.
*   **Core Features:** Registration, data management, and passport generation.
*   **Non-Functional Requirements:** Security and scalability needs.

This wasn't just a chat; it was a structured scoping phase. John refined the requirements until he had a solid blueprint.

## Phase 2: Building with Replit Agent

With a comprehensive requirements document in hand, John moved to execution. He copied the output from Claude and pasted it directly into Replit Agent.

The results were immediate.

[FRAME_1]

Replit didn't just build a simple form. It constructed a multi-tenant architecture. The app includes:

*   **System Admins:** Global oversight of all churches.
*   **Local Admins:** scoped access for individual church data.
*   **Service Toggles:** The ability to turn specific offerings (like dental or vision) on or off per event.
*   **Reporting:** Real-time demographics and service usage stats.

## The VIN Lookup Feature

One of the most impressive features John "vibe coded" was for the oil change station. 

He wanted the system to tell volunteers exactly what oil filter a car needed based on its VIN. He asked Replit to add this feature, and the agent integrated the OpenAI API to perform VIN lookups.

Now, when a participant registers for an oil change, the system automatically identifies the required oil type and filter model. This allows the church to generate a precise shopping list before the event starts.

## Overcoming the "Production" Gap

It wasn't all smooth sailing. John encountered a classic developer hurdle: "It works on my machine."

Specifically, the PDF passport generation worked perfectly in the development environment but failed to attach to emails in production. 

[FRAME_2]

He also faced issues with secrets management, where the system kept caching an old OpenAI API key. 

What’s fascinating is how John troubleshoots. He talks to the AI like a colleague. If the agent goes down a "rabbit trail," John tells it to stop. If a deployment breaks something that previously worked, he instructs it to revert to the specific checkpoint in history that functioned correctly.

## Why Learn This at 91?

John spent about $350 and a few days building software that would have cost thousands of dollars and took months to build traditionally. But for John, it’s not just about efficiency.

His advice for professionals facing this wave of technology is simple: lean in to stay relevant and, more importantly, keep having fun.

He retired in 1994 but was still working on CAD projects in 2018 because he refused to stop learning. AI is simply the next tool in a 70-year career of engineering solutions.

## Thanks to Our Sponsors

This episode is brought to you by:

*   **[WorkOS](https://workos.com?utm_source=lennys_newsletter&utm_medium=referral&utm_campaign=podcast)**: The modern identity platform for B2B SaaS, providing drop-in APIs for enterprise features like SSO, SCIM, and audit logs so you can become enterprise-ready faster.
*   **[Orkes](https://www.orkes.io/)**: The enterprise platform for Conductor, helping teams orchestrate complex workflows, microservices, and agentic AI applications with high reliability and scale.

## Episode Links

*   [YouTube](https://youtube.com/watch?v=-xDQrJmVcfU)
*   [Spotify](https://open.spotify.com/episode/3FCJgCN1QV4lZPS578nec5?si=cbae14635b6f473f)
*   [Apple Podcasts](https://podcasts.apple.com/us/podcast/how-a-91-year-old-vibe-coded-a-complex/id1809663079?i=1000714168448)