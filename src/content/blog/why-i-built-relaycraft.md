---
title: "Building an Uncompromising Traffic Inspector: The Story of RelayCraft"
description: "As a developer who has been in the software industry for over a decade, I've used countless tools. This article discusses why I decided to build RelayCraft and my vision for the ideal debugging tool."
pubDate: 2026-02-21
author: "RelayCraft Team"
lang: en
tags: ["behind-the-scenes", "vision", "design"]
featured: true
---

As a developer who has been in the software industry for over a decade, I've used countless tools. Since transitioning from product management to software development in 2019 and focusing on frontend, one thing has remained constant in my daily work—**network traffic inspection**.

If you're like me, you've definitely experienced these frustrating moments:

- **Using Charles**: To configure a simple `Map Local`, you have to click through 5 layers of dialogs, find that interface in a densely packed list, and then pray its Java process doesn't suddenly consume 2GB of memory and freeze.
- **Using Whistle**: While its plugin ecosystem is powerful, when you write a wrong regex rule, the interface gives no error feedback. You can only stare at the non-working requests for hours, only to discover you missed an escape character.
- **Using Fiddler**: The dated UI makes you feel like you're still in the Windows XP era. Want to modify a response body? Good luck finding the API documentation in that script editor.

At times like these, I always wonder: **It's 2025, why can't our debugging tools be more "sexy"? Why can't we have both Whistle's flexibility and an IDE-like elegant experience?**

## Extreme Aesthetics Are Productivity Too

When developing RelayCraft, I've always adhered to a philosophy that might sound a bit "stubborn": **a tool's aesthetic design is itself productivity**.

Many people think tools just need to work, and it doesn't matter if the interface is ugly. I disagree. As developers, we process massive amounts of information every day. A good tool should use **color**, **layout**, and **interaction** to help you quickly filter out noise and get straight to the point.

RelayCraft's interface design goes far beyond "dark mode"—we're pursuing a **complete design language system**:

- **Full Theme Customization**: Support for skins, colors, fonts, and even injecting custom CSS snippets. You can make it look like VS Code, Xcode, or something entirely your own.
- **Semantic Color System**: Every status code, every request type (GET/POST/OPTIONS) has its own color and tag. One glance and you know the health of your system.
- **Native-level Interaction**: macOS-native animations, smooth scrolling, precise focus management—making every click a pleasure.

This isn't for "looks"—it's to keep your eyes and brain in optimal condition during long work sessions.

## Rules Should Be Declarative Code

During RelayCraft's development, the **rules engine** was the module I thought about most and polished the longest.

In traditional proxy tools, rules are often "configurations" hidden in deep menus or piles of hard-to-maintain scripts. But in RelayCraft, I redefined rules:

### 1. Rule = Match + Action

This is the cornerstone of the entire rule system. No matter how complex the scenario, it essentially answers two questions:

1. **Match**: What conditions does this request meet? (URL, Header, Method...)
2. **Action**: What to do when conditions are met? (Mock, redirect, modify, block...)

```yaml
# A rule's core structure, simple enough to need no explanation
match:
  request:
    - type: url
      matchType: regex
      value: "api\\.example\\.com/v1/(\\w+)"
actions:
  - type: map_remote
    targetUrl: "api-staging.example.com/v1/$1"
```

This structure brings **predictability**. You don't need to memorize different menu locations—all rule logic is unified.

### 2. Files Are Rules, Git-Friendly

I chose **YAML** as the storage format for rules, mapping directly to the file system. What does this mean? Your traffic rules can be **Git version controlled** just like code.

- **Team Collaboration**: Push the `rules/` directory to the repo, team members pull and instantly share a set of Mock rules.
- **History Tracking**: Who modified which interface's Mock data and when—it's all clear in Git log.
- **IDE Support**: You can even edit rules directly in VS Code, enjoying code completion and formatting.

### 3. A Smooth Curve from GUI to Code

RelayCraft supports graphical configuration, direct YAML editing, and even **Python scripts**.

- **Beginners**: Can click "Map Local" in the interface for visual configuration.
- **Power Users**: Can write YAML directly, using **regex capture group backreferences** (like `$1`, `$2`) for complex paths, or **JSONPath** to precisely modify a specific field in the response body without rewriting the entire JSON.
- **Geeks**: When rules aren't enough, switch to Python script mode with one click for unlimited extensibility.

### 4. Eliminate "Regex Anxiety"

The detail I'm most proud of is **real-time match testing**.

In traditional tools, writing regex is like "gambling." In RelayCraft's rule editor, you input a test URL and the system immediately tells you:

```text
URL: https://api.example.com/v1/users/123
✅ Match successful
├── host: api.example.com ✓
└── path: /v1/users/* ✓
```

No more confusion about "why isn't my rule working."

## AI, Not Just a Gimmick

Many tools on the market are adding AI, but many are just adding it for the sake of adding it. In RelayCraft, AI is a deeply integrated partner.

- **Smart Regex Generation**: You don't need to be a regex expert. Just tell the AI: "Match all image requests ending in .png" and it generates a rigorous regex automatically.
- **Context-Aware Debugging**: When you encounter a cryptic 500 error, you don't need to switch out to ask ChatGPT. Just select the request in RelayCraft and ask the AI: "Why did this request fail?" It will give you an answer based on request headers, response body, and logs.

This is what AI should be like—your pair programming partner, not an attached chatbot.

## Tech Stack: Standing on Giants' Shoulders

RelayCraft is built on **mitmproxy**—a very mature and powerful Python proxy library that's the industry standard.

Choosing it as a starting point allowed us to quickly build stable and reliable core functionality, focusing our energy on polishing the ultimate UI/UX, rules engine, and AI interaction.

But this is just the beginning.

We're already developing **relay-core**—RelayCraft's next-generation proxy engine, written entirely in **Rust**. Rust will make RelayCraft even more lightweight and smooth when handling high-concurrency traffic (targeting 1M+ requests without lag). This is our promise for the future.

## Our Vision: More Than Just a Traffic Inspector

RelayCraft's ultimate goal isn't to be another Charles or Whistle replacement.

**We're building a full-featured traffic management and development collaboration platform.**

Imagine these scenarios:

- Frontend developers can quickly Mock APIs without waiting for backend completion
- QA engineers can simulate weak networks, latency, and error responses without building complex environments
- Backend developers can analyze production traffic and identify performance bottlenecks
- Teams can incorporate rule configurations into Git workflows for version-controlled environment management

From **personal debugging tool**, to **team collaboration console**, to **enterprise traffic governance platform**—this is RelayCraft's evolution path.

## In Closing

RelayCraft is a gift I made for myself, and for all developers who pursue quality.

It may not be perfect yet, but it's sincere. It carries all my understanding of "efficient, elegant, modern" development tools. It doesn't want to be an all-purpose Swiss Army knife—it wants to be the most precise scalpel at your fingertips.

If you're also tired of the same old tools, tired of Java process freezes and complex configuration torture, give RelayCraft a try. Even if just to experience the satisfaction of "real-time regex testing" once, or to customize a completely unique interface theme, I believe you'll find it worthwhile.

**Let's make debugging, this boring little task, a bit more interesting together.**

---

- ⭐ **GitHub**: [github.com/relaycraft/relaycraft](https://github.com/relaycraft/relaycraft)
- 🌐 **Website**: [relaycraft.dev](https://relaycraft.dev)
- 🐦 **Follow Updates**: [@relaycraft_app](https://twitter.com/relaycraft_app)
