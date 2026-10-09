export const languages = {
  en: 'English',
  zh: '简体中文',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.blog': 'Blog',
    'nav.download': 'Download',
    'nav.docs': 'Docs',
    'nav.plugins': 'Plugins',
    'nav.github': 'GitHub',
    'hero.badge': 'Now available',
    'hero.title': 'AI-Native <br /> Web Traffic Debugging Tool',
    'hero.subtitle': 'A professional-grade, AI-native network debugging tool built with Tauri, React, and Rust. A high-performance mitmproxy engine inspects HTTP/HTTPS, WebSocket, SSE, and gRPC traffic locally — with deep AI integration, a built-in MCP server, and a plugin & theme platform.',
    'hero.image': '/images/hero-{lang}-poster.png',
    'hero.cta.download': 'Download for Free',
    'hero.cta.docs': 'View Documentation',
    'features.title': 'Powerful Features for <br /> Modern Development',
    'features.subtitle': 'Intercept, map, analyze, modify — a unified hub for all your network requests.',
    'social.downloads': 'Downloads',
    'social.stars': 'GitHub Stars',
    'social.users': 'Active Users',
    'social.quote': '"RelayCraft has completely transformed how I debug my API integrations. The AI assistant is a game-changer!"',
    'social.author': '— Senior Backend Engineer @ TechGiant',
    'personas.title': 'Who is using RelayCraft?',
    'security.title': 'Security & Privacy: Your data, only yours',
    'download.title': 'Start Debugging in Minutes',
    'download.subtitle': 'Download RelayCraft for your preferred operating system. Free for personal use.',
    'download.latest': 'Latest',
    'download.macos': 'Download for macOS',
    'download.windows': 'Download for Windows',
    'download.linux': 'Download for Linux',
    'download.macos.desc': 'Universal (Intel & Apple Silicon)',
    'download.windows.desc': 'Windows 10/11 (x64)',
    'download.linux.desc': 'Debian / Ubuntu / Fedora',
    'download.extension.dmg': 'Download .dmg',
    'download.extension.exe': 'Download .exe',
    'download.extension.appimage': 'Download .AppImage',
    'download.extension.deb': 'Download .deb',
    'download.extension.rpm': 'Download .rpm',
    'download.extension.msi': 'Download .msi',
    'download.format': 'Package format',
    'download.githubGuide': 'Prefer GitHub release page for all assets and release notes.',
    'download.githubGuide.cta': 'Open on GitHub',
    'download.sha256': 'You can verify package integrity with SHA256 checksums.',
    'download.sha256.cta': 'View SHA256 file',
    'download.notice.prefix': 'For complete assets and release notes, visit the ',
    'download.notice.link': 'GitHub Releases page',
    'download.notice.suffix': '. You can verify file integrity with SHA256 checksums.',
    'download.action': 'Download',
    'download.terms': 'Terms of Service',
    'download.privacy': 'Privacy Policy',
    'download.agreement': 'By downloading, you agree to our',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.rights': 'All rights reserved.',
    'footer.description': 'The AI-native traffic debugging tool. Inspect, modify, and replay HTTP, WebSocket, SSE, and gRPC traffic with ease.',
    'footer.changelog': 'Changelog',
    'footer.about': 'About',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.themes': 'Themes',
    'footer.commercial': 'Commercial License',
    'blog.title': 'RelayCraft Blog',
    'blog.subtitle': 'Development updates, technical deep-dives, and insights from the RelayCraft team.',
    'blog.featured': '✨ Featured',
    'blog.latest_articles': 'Latest Articles',
    'blog.rss': 'RSS Feed',
    'blog.min_read': 'min read',
    'blog.author': 'Author',
    'blog.back': 'Back to Blog',
    'blog.no_posts': 'No blog posts yet. Check back soon!',
    'changelog.title': 'Changelog',
    'changelog.subtitle': "Track every update, improvement, and fix — the story of RelayCraft's evolution.",
    'changelog.filter_all': 'All',
    'changelog.no_entries': 'No entries for this release.',
    'changelog.no_releases': 'No releases found.',
    'blog.featured_article': '✨ Featured Article',
    'blog.share': 'Share:',
    'blog.switch_lang': '中文',
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last Updated: February 21, 2026',
    'privacy.intro': 'At RelayCraft, we take your privacy seriously. As a developer tool designed for network inspection, we adhere to the principle of "Local-First" data processing.',
    'privacy.local.title': '1. Local-First Design',
    'privacy.local.content': 'RelayCraft is designed so that your network traffic data never leaves your machine. All interception, decryption, and analysis happen locally on your device. We do not operate a backend cloud that stores your captures.',
    'privacy.collection.title': '2. Information Collection',
    'privacy.collection.content': 'We do not collect any personal data, account information, or network traffic data. The only data we may receive is anonymized crash reports or update checks (via GitHub), which you can audited in our open-source code.',
    'privacy.ai.title': '3. AI Privacy',
    'privacy.ai.content': 'If you use local AI models (via Ollama), all data remains offline. If you use cloud-based AI providers, only the specific request/response snippets you choose to analyze are sent to the provider for processing and are not stored by us.',
    'privacy.security.title': '4. Security',
    'privacy.security.content': 'Since your data stays local, you are responsible for the security of your own device. We recommend using strong encryption for your local storage.',
    'terms.title': 'Terms of Service',
    'terms.lastUpdated': 'Last Updated: October 10, 2026',
    'terms.intro': 'By downloading and using RelayCraft, you agree to the following terms. This software is provided under the GNU GPLv3 open-source license, with an optional commercial license.',
    'terms.license.title': '1. License',
    'terms.license.content': 'RelayCraft is open-source software released under the GNU GPLv3 license. You may use, modify, and distribute it in accordance with the GPLv3 license found in our GitHub repository.',
    'terms.commercial.title': 'Commercial Licensing',
    'terms.commercial.content': 'Organizations that wish to integrate RelayCraft into proprietary products, or modify it without the copyleft obligations of GPLv3, can obtain a commercial license. See our Commercial Use policy for details:',
    'terms.usage.title': '2. Ethical Usage',
    'terms.usage.content': 'You agree not to use RelayCraft for any illegal activities, including unauthorized access to systems or data that you do not have permission to inspect.',
    'terms.warranty.title': '3. No Warranty',
    'terms.warranty.content': 'RelayCraft is provided "AS IS", without warranty of any kind. We are not responsible for any data loss, system damage, or legal issues arising from the use of this software.',
    'about.title': 'About RelayCraft',
    'about.subtitle': 'Reimagining network debugging for the AI era.',
    'about.story.title': 'The Founder\'s Story',
    'about.story.content': 'I am an independent developer from Guangdong, China. After years in the software industry — moving from project management to product design, and finally back to deep development — I\'ve seen tools come and go. Since 2019, I have focused on frontend engineering, and RelayCraft is the realization of my long-held vision for what a modern debugging tool should be.',
    'about.vibe.title': 'The Power of Vibe Coding',
    'about.vibe.content': 'RelayCraft was born from the "Vibe Coding" philosophy. Thanks to the breakthroughs in AI-assisted development, a single creator\'s vision can now be transformed into a professional-grade product that rivals large-scale enterprise tools. I hope this tool brings you a fresh debugging experience — because you deserve better tools.',
    'about.team.title': 'The RelayCraft Team',
    'about.team.content': 'While the core engineering is handled by me, RelayCraft is supported by a global community of contributors and friends who help with design, security auditing, and localized support. We are a "distributed team" united by a love for elegant, powerful software.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have a question or feedback? We\'re here to help.',
    'contact.github.title': 'Technical Support',
    'contact.github.desc': 'Found a bug or have a feature request? GitHub is the best place to reach us.',
    'contact.github.cta': 'Open an Issue',
    'contact.twitter.title': 'Community & Updates',
    'contact.twitter.desc': 'Follow us for the latest features, tips, and direct interaction.',
    'contact.twitter.cta': 'Follow @relaycraft_app',
    'contact.email.title': 'Business & Private',
    'contact.email.desc': 'For partnership inquiries or private feedback, feel free to drop us a line.',
    'contact.email.cta': 'Send an Email',
    'plugins.title': 'Plugin Marketplace',
    'plugins.subtitle': 'Extend RelayCraft with powerful plugins built by the community and the official team.',
    'plugins.download': 'Download',
    'plugins.version': 'Version',
    'plugins.author': 'Author',
    'plugins.downloads': 'Downloads',
    'plugins.empty': 'No plugins available yet. Check back soon!',
    'plugins.category.utility': 'Utility',
    'plugins.category.security': 'Security',
    'plugins.category.i18n': 'Language',
    'plugins.category.other': 'Other',
    'plugins.allCategories': 'All',
    'plugins.cta.develop': 'Build Your Own Plugin',
    'plugins.cta.develop.desc': 'Want to create a plugin? Check out our developer documentation to get started.',
    'plugins.cta.develop.button': 'Plugin Development Guide',
    'plugins.themes.title': 'Make It Yours with Themes',
    'plugins.themes.desc': 'Restyle the entire interface with colors, fonts, and custom style snippets from the community theme market. Install a .rctheme in one click.',
    'plugins.themes.button': 'Browse Theme Market',
  },
  zh: {
    'nav.home': '首页',
    'nav.features': '功能特性',
    'nav.blog': '博客',
    'nav.download': '下载',
    'nav.docs': '文档',
    'nav.plugins': '插件',
    'nav.github': 'GitHub',
    'hero.badge': '正式版本现已发布',
    'hero.title': 'AI 原生 <br /> 网络流量调试工具',
    'hero.subtitle': '基于 Tauri、React 和 Rust 构建的专业级 AI 原生网络调试工具。高性能 mitmproxy 引擎全本地解析 HTTP/HTTPS、WebSocket、SSE 与 gRPC 流量，深度集成 AI、内置 MCP 服务，并提供插件与主题生态。',
    'hero.image': '/images/hero-{lang}-poster.png',
    'hero.cta.download': '免费下载',
    'hero.cta.docs': '查看文档',
    'features.title': '面向现代开发的 <br /> 强大核心功能',
    'features.subtitle': '拦截，映射，分析，修改，一个统管所有网络请求的超级中枢。',
    'social.downloads': '下载量',
    'social.stars': 'GitHub Stars',
    'social.users': '活跃用户',
    'social.quote': '"RelayCraft 彻底改变了我调试 API 集成的方式。AI 助手简直是游戏规则改变者！"',
    'social.author': '— 高级后端工程师 @ TechGiant',
    'personas.title': '谁在使用 RelayCraft？',
    'security.title': '安全与隐私：你的数据，只属于你',
    'download.title': '三步开始使用，零门槛抓包',
    'download.subtitle': '下载适用于您首选操作系统的 RelayCraft，个人使用完全免费开源。',
    'download.latest': '最新版本',
    'download.macos': '下载 macOS 版本',
    'download.windows': '下载 Windows 版本',
    'download.linux': '下载 Linux 版本',
    'download.macos.desc': '通用版本 (Intel & Apple Silicon)',
    'download.windows.desc': 'Windows 10/11 (x64)',
    'download.linux.desc': 'Debian / Ubuntu / Fedora',
    'download.extension.dmg': '下载 .dmg',
    'download.extension.exe': '下载 .exe',
    'download.extension.appimage': '下载 .AppImage',
    'download.extension.deb': '下载 .deb',
    'download.extension.rpm': '下载 .rpm',
    'download.extension.msi': '下载 .msi',
    'download.format': '安装包格式',
    'download.githubGuide': '推荐通过 GitHub Release 页面查看全部安装包与更新说明。',
    'download.githubGuide.cta': '前往 GitHub',
    'download.sha256': '可通过 SHA256 校验文件完整性。',
    'download.sha256.cta': '查看 SHA256 文件',
    'download.notice.prefix': '推荐通过 ',
    'download.notice.link': 'GitHub 发布页面',
    'download.notice.suffix': ' 查看全部安装包与更新说明，可通过 SHA256 校验文件完整性。',
    'download.action': '下载',
    'download.terms': '服务条款',
    'download.privacy': '隐私政策',
    'download.agreement': '下载即表示您同意我们的',
    'footer.product': '首页',
    'footer.company': '公司',
    'footer.rights': '保留所有权利。',
    'footer.description': '专为现代开发者打造的 AI 原生网络流量调试工具。轻松拦截、分析与重放 HTTP、WebSocket、SSE 与 gRPC 流量。',
    'footer.changelog': '更新日志',
    'footer.about': '关于我们',
    'footer.blog': '博客',
    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.themes': '主题',
    'footer.commercial': '商业授权',
    'blog.title': 'RelayCraft 博客',
    'blog.subtitle': '开发更新、技术深度解析，以及 RelayCraft 团队的见解分享。',
    'blog.featured': '✨ 精选文章',
    'blog.latest_articles': '最新文章',
    'blog.rss': 'RSS 订阅',
    'blog.min_read': '分钟阅读',
    'blog.author': '作者',
    'blog.back': '返回博客',
    'blog.no_posts': '暂无博客文章，请稍后再来！',
    'changelog.title': '更新日志',
    'changelog.subtitle': '追踪 RelayCraft 的每一次更新、改进与修复，记录产品演进的故事。',
    'changelog.filter_all': '全部',
    'changelog.no_entries': '此版本暂无更新条目。',
    'changelog.no_releases': '未找到发布记录。',
    'blog.featured_article': '✨ 精选文章',
    'blog.share': '分享：',
    'blog.switch_lang': 'English',
    'privacy.title': '隐私政策',
    'privacy.lastUpdated': '最后更新日期：2026年2月21日',
    'privacy.intro': '在 RelayCraft，我们非常重视您的隐私。作为一款专为网络捕获设计的开发者工具，我们始终坚持“本地优先（Local-First）”的数据处理原则。',
    'privacy.local.title': '1. 本地优先设计',
    'privacy.local.content': 'RelayCraft 的设计确保您的网络流量数据永远不会离开您的机器。所有的拦截、解密和分析都在您的设备上本地完成。我们不提供存储您抓包数据的云端后台。',
    'privacy.collection.title': '2. 信息收集',
    'privacy.collection.content': '我们不收集任何个人数据、账号信息或网络流量数据。我们可能收到的唯一数据是匿名的崩溃报告或更新检查（通过 GitHub），您可以在我们的开源代码中审计这些行为。',
    'privacy.ai.title': '3. AI 隐私',
    'privacy.ai.content': '如果您使用本地 AI 模型（通过 Ollama），所有数据始终保持离线。如果您使用云端 AI 服务商，只有您选择分析的特定请求/响应片段会被发送给服务商进行处理，我们不会存储这些数据。',
    'privacy.security.title': '4. 安全性',
    'privacy.security.content': '由于您的数据存储在本地，您需要对个人设备的安全性负责。我们建议为您的本地存储使用强加密手段。',
    'terms.title': '服务条款',
    'terms.lastUpdated': '最后更新日期：2026年10月10日',
    'terms.intro': '通过下载和使用 RelayCraft，即表示您同意以下条款。本软件基于 GNU GPLv3 开源协议提供，并可选商业授权。',
    'terms.license.title': '1. 授权协议',
    'terms.license.content': 'RelayCraft 是一款基于 GNU GPLv3 协议发布的开源软件。您可以依据我们 GitHub 仓库中的 GPLv3 协议使用、修改和分发该软件。',
    'terms.commercial.title': '商业授权',
    'terms.commercial.content': '如需将 RelayCraft 集成到闭源商业产品中，或在不承担 GPLv3 开源义务的前提下修改使用，可获取商业授权。详见《商业使用政策》：',
    'terms.usage.title': '2. 合规使用',
    'terms.usage.content': '您同意不将 RelayCraft 用于任何非法活动，包括未经授权访问您无权审计的系统或数据。',
    'terms.warranty.title': '3. 免责声明',
    'terms.warranty.content': 'RelayCraft 按“原样”提供，不提供任何形式的保证。我们对因使用本软件而导致的任何数据丢失、系统损坏或法律问题概不负责。',
    'about.title': '关于 RelayCraft',
    'about.subtitle': '为 AI 时代重塑网络调试体验。',
    'about.story.title': '创始人故事',
    'about.story.content': '我是一名来自于中国广东的独立开发者，在软件行业摸爬滚打多年。从项目到产品，再从产品到开发，我深刻理解开发者对高效工具的渴望。从2019年开始，我一直深耕前端开发领域，而 RelayCraft 正是我个人对接口调试工具构想的现实实现。',
    'about.vibe.title': 'Vibe Coding 的力量',
    'about.vibe.content': 'RelayCraft 的诞生正是 Vibe Coding 理念的体现。感谢 AI 辅助开发技术的突破，让个人创意能够迅速转化为一款足以挑战大型商业软件的专业产品。我希望这款产品能给大家带来全新的调试体验，因为每位开发者都值得拥有一款更好的工具。',
    'about.team.title': 'RelayCraft 团队',
    'about.team.content': '虽然核心开发目前由我一人完成，但 RelayCraft 背后有一群热爱开源的朋友在设计、安全审计和多语言本地化方面提供协助。我们是一个因对高性能工具的热爱而凝聚在一起的“分布式团队”。',
    'contact.title': '联系我们',
    'contact.subtitle': '有任何问题或建议？我们随时为您提供帮助。',
    'contact.github.title': '技术支持',
    'contact.github.desc': '发现 Bug 或有功能建议？GitHub 是提交反馈的最佳场所。',
    'contact.github.cta': '提交 Issue',
    'contact.twitter.title': '社区互动',
    'contact.twitter.desc': '关注我们的最新动态、技巧分享以及实时互动。',
    'contact.twitter.cta': '关注 @relaycraft_app',
    'contact.email.title': '商务与私密',
    'contact.email.desc': '对于合作伙伴关系或私密反馈，欢迎随时来信。',
    'contact.email.cta': '发送邮件',
    'plugins.title': '插件市场',
    'plugins.subtitle': '通过官方与社区插件扩展 RelayCraft 的无限可能。',
    'plugins.download': '下载',
    'plugins.version': '版本',
    'plugins.author': '作者',
    'plugins.downloads': '下载量',
    'plugins.empty': '暂无可用插件，请稍后再来！',
    'plugins.category.utility': '工具',
    'plugins.category.security': '安全',
    'plugins.category.i18n': '语言',
    'plugins.category.other': '其他',
    'plugins.allCategories': '全部',
    'plugins.cta.develop': '构建你自己的插件',
    'plugins.cta.develop.desc': '想要创建插件？查看我们的开发者文档开始吧。',
    'plugins.cta.develop.button': '插件开发指南',
    'plugins.themes.title': '用主题打造专属界面',
    'plugins.themes.desc': '通过社区主题市场自定义颜色、字体与样式片段，一键安装 .rctheme，改造整个界面风格。',
    'plugins.themes.button': '浏览主题市场',
  },
} as const;

export const featureContent = {
  en: [
    {
      title: "Traffic Monitor",
      description: "High-performance, fully-local traffic capture powered by mitmproxy. Inspect HTTP/1.1, HTTP/2, WebSocket, Server-Sent Events, and gRPC unary calls with deep detail views, image previews, and syntax highlighting.",
      bullets: ["Deep protocol analysis: HTTP/1.1, HTTP/2, WebSocket, SSE, and gRPC", "Identify mobile traffic sources and run connectivity diagnostics", "Powerful query syntax for multi-dimensional filtering", "One-click export to cURL, HAR, or Relay Session (.relay)"],
      images: [
        "/images/features/capture-1-{lang}.png",
        "/images/features/capture-2-{lang}.png",
        "/images/features/capture-3-{lang}.png"
      ]
    },
    {
      title: "Rules Engine",
      description: "Manage traffic behavior with a visual rule builder — no config files needed. Supports 6 rule types, reusable templates, and portable rule files for team sharing.",
      bullets: ["Map Local/Remote, Rewrite Header/Body, Throttling, and Blocking", "Visual builder with optional YAML editing and live match feedback", "Rules-as-files with groups, import/export, and shareable templates"],
      images: [
        "/images/features/rules-1-{lang}.png",
        "/images/features/rules-2-{lang}.png",
        "/images/features/rules-3-{lang}.png"
      ]
    },
    {
      title: "AI Assistant",
      description: "AI-native throughout the entire workflow. Global Ctrl(⌘) + K command center understands your intent and acts as your co-debugger.",
      bullets: ["Natural language creation of rewrite rules and mitmproxy scripts", "Automated diagnostics: rule hits, security issues, and performance hints", "Smart search for traffic sessions using plain English queries"],
      images: [
        "/images/features/ai-1-{lang}.png",
        "/images/features/ai-2-{lang}.png",
        "/images/features/ai-3-{lang}.png"
      ]
    },
    {
      title: "Breakpoints",
      description: "Real-time pause, edit, and resume requests/responses. Supports path matching or regex matching, request or response interception — perfect for security testing and edge case simulation.",
      bullets: ["Quickly create and clear breakpoints from request list", "Freely modify request or response content while paused", "Support batch release or batch termination"],
      images: [
        "/images/features/breakpoints-1-{lang}.png",
        "/images/features/breakpoints-2-{lang}.png",
        "/images/features/breakpoints-3-{lang}.png"
      ]
    },
    {
      title: "Request Composer",
      description: "Built-in API client designed for debugging. Edit and resend any captured request — including WebSocket messages — or import cURL in one click.",
      bullets: ["Support all HTTP methods and multiple body types", "Edit and resend captured HTTP and WebSocket messages", "cURL import and parsing support", "Instant formatted response preview (JSON, HTML, assets)"],
      images: [
        "/images/features/composer-1-{lang}.png",
        "/images/features/composer-2-{lang}.png"
      ]
    },
    {
      title: "Python Scripting",
      description: "Natively supports the full mitmproxy Python ecosystem. Write powerful custom logics for complex scenarios beyond visual rules.",
      bullets: ["Full access to request/response lifecycle with Python code", "Built-in editor with syntax highlighting and independent script logs", "Reuse thousands of existing mitmproxy addons and scripts"],
      images: [
        "/images/features/scripting-1-{lang}.png",
        "/images/features/scripting-2-{lang}.png"
      ]
    },
    {
      title: "Extensibility",
      description: "An advanced, open platform for plugins and themes. Extend functionality with the plugin system and restyle the interface from the community theme market — build your perfect tool.",
      bullets: ["Flexible plugin architecture for UI and script extensions, with explicit permissions and storage quotas", "Full theme customization — colors, fonts, and style snippets — installable from the Theme Market", "Open community plugin and theme registries for collaborative building"],
      images: [
        "/images/features/extensibility-1-{lang}.png",
        "/images/features/extensibility-2-{lang}.png"
      ]
    }
  ],
  zh: [
    {
      title: "流量监控",
      description: "由 mitmproxy 驱动的高性能、全本地流量捕获引擎。支持 HTTP/1.1、HTTP/2、WebSocket、SSE 与 gRPC 一元调用的深度解析，提供详尽的解析视图、图片预览与语法高亮。",
      bullets: ["深度协议分析：HTTP/1.1、HTTP/2、WebSocket、SSE 与 gRPC", "识别移动端流量来源并进行连接诊断", "强大的查询语法，支持多维度组合条件快速筛选", "一键导出为 cURL, HAR 或 Relay 会话格式 (.relay)"],
      images: [
        "/images/features/capture-1-{lang}.png",
        "/images/features/capture-2-{lang}.png",
        "/images/features/capture-3-{lang}.png"
      ]
    },
    {
      title: "规则引擎",
      description: "颠覆传统的图形化规则构建器，无需手动编辑配置文件。内置 6 种规则类型，支持可复用模板与可移植的规则文件，便于团队协作共享。",
      bullets: ["Map Local/Remote、内容/头部重写、弱网模拟与阻断", "可视化构建流程，支持实时匹配反馈，告别盲推正则", "规则即文件，支持目录分组、导入导出与模板分享"],
      images: [
        "/images/features/rules-1-{lang}.png",
        "/images/features/rules-2-{lang}.png"
      ]
    },
    {
      title: "AI 助手",
      description: "AI 深度融入全流程工作流。全局 Ctrl(⌘) + K 命令中心即时理解意图，充当你的智能调试搭档。",
      bullets: ["自然语言创建重写规则与 mitmproxy 脚本", "自动化诊断：规则命中、安全隐患与性能优化建议", "使用自然语言直接搜索历史请求与特定流量序列"],
      images: [
        "/images/features/ai-1-{lang}.png",
        "/images/features/ai-2-{lang}.png",
        "/images/features/ai-3-{lang}.png"
      ]
    },
    {
      title: "断点调试",
      description: "实时暂停、编辑并恢复请求/响应，支持路径匹配或正则匹配，支持请求时或响应时挂起，完美支持安全测试和边缘场景模拟。",
      bullets: ["在请求列表快速创建与清除断点", "暂停时可自由修改请求或响应内容", "支持批量放行或批量终止"],
      images: [
        "/images/features/breakpoints-1-{lang}.png",
        "/images/features/breakpoints-2-{lang}.png",
        "/images/features/breakpoints-3-{lang}.png"
      ]
    },
    {
      title: "请求构造器",
      description: "内置专为调试设计的 API 客户端，支持从请求列表中直接编辑重发（含 WebSocket 消息）或 cURL 一键导入。",
      bullets: ["支持全部 HTTP 请求方法及多种请求体类型", "支持直接编辑并重发 HTTP 与 WebSocket 消息", "支持 cURL 导入解析", "即时查看格式化响应（JSON、HTML、资源）"],
      images: [
        "/images/features/composer-1-{lang}.png",
        "/images/features/composer-2-{lang}.png"
      ]
    },
    {
      title: "脚本支持",
      description: "原生支持全量 mitmproxy Python 生态。通过 Python 脚本实现极其复杂的多步拦截与处理逻辑。",
      bullets: ["通过 Python 代码全面掌控请求/响应生命周期", "内置高亮编辑器与独立脚本日志", "复用数以千计的现有 mitmproxy 插件与脚本库"],
      images: [
        "/images/features/scripting-1-{lang}.png",
        "/images/features/scripting-2-{lang}.png"
      ]
    },
    {
      title: "扩展能力",
      description: "先进的开放平台，支持插件与主题扩展。通过插件系统扩展能力，通过社区主题市场自定义界面样式，打造你的专属工具。",
      bullets: ["灵活的插件架构支持界面和脚本扩展，具备明确的权限与存储配额管理", "全面的主题自定义（颜色、字体、样式片段），可从主题市场一键安装", "开放社区插件与主题仓库，共创共建"],
      images: [
        "/images/features/extensibility-1-{lang}.png",
        "/images/features/extensibility-2-{lang}.png"
      ]
    }
  ]
};

export const personaContent = {
  en: [
    { title: "Web Frontend Devs", description: "Mock APIs, debug network requests, and solve CORS instantly with visual rules." },
    { title: "Mobile Developers", description: "Capture traffic from any device, simulate weak networks, and debug API calls." },
    { title: "QA Engineers", description: "Easily simulate edge cases, verify interfaces, and reproduce complex issues." },
    { title: "Security Researchers", description: "Request tampering, vulnerability analysis, and in-depth protocol research." }
  ],
  zh: [
    { title: "Web 前端开发者", description: "可视化规则 Mock 接口、调试网络请求、瞬间解决跨域问题。" },
    { title: "移动端开发者", description: "从任意设备抓包、模拟弱网环境、深入调试 App 底层请求。" },
    { title: "测试工程师", description: "轻松模拟边缘场景、验证接口逻辑、快速复现疑难问题。" },
    { title: "安全研究员", description: "请求篡改、漏洞分析、私有协议深度研究。" }
  ]
};

export const securityContent = {
  en: [
    { title: "Fully Offline", description: "No internet required. Your traffic data never leaves your device." },
    { title: "Zero Accounts", description: "No registration, no login, no subscriptions. Just download and use." },
    { title: "Local Storage", description: "All rules, configs, and captures 100% stored locally, fully under your control." },
    { title: "Local AI Support", description: "Support for Ollama and other local LLMs — sensitive data never goes to cloud." },
    { title: "Open Source", description: "Core code GPLv3 open source (dual-licensed for commercial use), verified by the community, no backdoors." },
    { title: "No Telemetry", description: "Reject all forms of invisible data collection, analysis, or tracking." },
    { title: "Sandboxed Plugins", description: "Plugins declare explicit permissions and run within enforced storage quotas. Nothing is installed silently." }
  ],
  zh: [
    { title: "完全离线运行", description: "无需联网即可使用全部核心功能，流量数据永远不会离开本地设备。" },
    { title: "零账号体系", description: "无需注册、无需登录、无需订阅，下载即用。" },
    { title: "本地化存储", description: "所有规则、配置、抓包数据 100% 存储在本地，完全掌控。" },
    { title: "本地 AI 支持", description: "支持 Ollama 等本地大模型，敏感数据无需上传云端。" },
    { title: "开源可审计", description: "核心代码 GPLv3 开源（商业用途可双授权），安全性经过社区验证，无后门。" },
    { title: "无遥测追踪", description: "拒绝任何形式的隐形数据收集、分析或追踪。" },
    { title: "插件沙箱", description: "插件需声明明确权限，并受存储配额约束运行，杜绝静默安装与越权访问。" }
  ]
};

export const mcpContent = {
  en: {
    title: 'Built-in MCP Support',
    subtitle: 'Bridge the gap between your network traffic and AI agents. RelayCraft ships a built-in Model Context Protocol server that any MCP-compatible client can connect to.',
    image: '/images/mcp-visual-en.png',
    cta: 'Learn about MCP',
    features: [
      {
        title: 'Live Traffic Context',
        description: 'Let Claude, Cursor, or any MCP client read live sessions, search flows, and understand API behavior instantly.'
      },
      {
        title: 'Agent-Driven Debugging',
        description: 'Empower your AI to create and manage rules, replay requests, and inspect traffic — with full visibility into external AI tool activity.'
      }
    ]
  },
  zh: {
    title: '内置 MCP 协议支持',
    subtitle: '连接实时流量与 AI Agent 的桥梁。RelayCraft 内置 Model Context Protocol 服务，任何兼容 MCP 的客户端均可接入。',
    image: '/images/mcp-visual-zh.png',
    cta: '了解 MCP 协议',
    features: [
      {
        title: '实时流量感知',
        description: '让 Claude、Cursor 或任意 MCP 客户端实时"读懂"会话、搜索流数据并理解 API 行为。'
      },
      {
        title: '智能体驱动调试',
        description: '授权 AI Agent 使用自然语言创建与管理规则、重发请求、检索流量，并可视化外部 AI 工具的活动。'
      }
    ]
  }
};
