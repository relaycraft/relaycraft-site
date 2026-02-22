# RelayCraft Official Website

The official website for [RelayCraft](https://github.com/relaycraft/relaycraft) - an AI-native web traffic debugging tool.

## 🌐 Live Site

- **Production**: [relaycraft.dev](https://relaycraft.dev)
- **Documentation**: [docs.relaycraft.dev](https://docs.relaycraft.dev)

## ✨ Features

- 🌍 **Bilingual Support** - English and Chinese with seamless switching
- 🌓 **Dark/Light Theme** - System preference detection with manual toggle
- 📝 **Built-in Blog** - Markdown-based content with RSS feed
- 🎬 **Media Optimization** - WebP images, video support, lazy loading
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Performance** - Static site generation with Astro

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) v5
- **UI**: React 19 + Framer Motion
- **Styling**: Tailwind CSS v4
- **Content**: Astro Content Collections
- **Deployment**: Static hosting (Vercel/Netlify/Cloudflare Pages)

## 📁 Project Structure

```text
/
├── public/
│   ├── fonts/           # Inter & JetBrains Mono fonts
│   ├── images/          # Static images (features, hero)
│   └── videos/          # Hero demo videos
├── src/
│   ├── components/      # React components
│   ├── content/
│   │   └── blog/        # Markdown blog posts
│   ├── i18n/            # Translations (EN/ZH)
│   ├── layouts/         # Astro layouts
│   ├── lib/             # Utilities
│   └── pages/           # Route pages
├── scripts/             # Build scripts
└── astro.config.mjs
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate WebP images
pnpm images:webp
```

## 📝 Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2026-02-21
author: "Your Name"
lang: en# or "zh" for Chinese
tags: ["tag1", "tag2"]
featured: false
---

Your content here...
```

## 🎨 Adding Feature Images

1. Place PNG images in `public/images/features/`
2. Run `pnpm images:webp` to generate WebP versions
3. Update image paths in `src/i18n/ui.ts`

Naming convention: `{feature}-{n}-{lang}.png`
- Example: `capture-1-en.png`, `capture-1-zh.png`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- **RelayCraft** - The main application ([GitHub](https://github.com/relaycraft/relaycraft))
- **RelayCraft Docs** - Documentation site ([GitHub](https://github.com/relaycraft/relaycraft-docs))

---

Made with ❤️ by the RelayCraft team
