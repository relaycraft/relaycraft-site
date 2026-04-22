import { useState, useEffect } from 'react';

interface Release {
  version: string;
  name: string;
  releaseUrl: string;
  publishedAt: string;
  bodyEn: string;
  bodyZh: string;
}

interface Props {
  lang: 'en' | 'zh';
  content: Record<string, string>;
}

interface ParsedSection {
  features: string[];
  improvements: string[];
  bugfixes: string[];
  other: string[];
}

function parseBody(body: string): ParsedSection {
  if (!body) return { features: [], improvements: [], bugfixes: [], other: [] };

  const lines = body.split('\n');
  const features: string[] = [];
  const improvements: string[] = [];
  const bugfixes: string[] = [];
  const other: string[] = [];

  let current: string[] = other;

  for (const line of lines) {
    const t = line.trim();
    if (/^#{1,3}\s*(new\s*feature|added)/i.test(t)) { current = features; continue; }
    if (/^#{1,3}\s*(improvement|changed)/i.test(t)) { current = improvements; continue; }
    if (/^#{1,3}\s*(bug\s*fix|fixed)/i.test(t)) { current = bugfixes; continue; }
    if (/^#{1,3}\s*(performance|deprecated|removed|other)/i.test(t)) { current = other; continue; }
    if (/^[-*]\s+(.+)/.test(t)) {
      const text = t.replace(/^[-*]\s+/, '')
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/`(.+?)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim();
      if (text && !text.includes('<!--')) current.push(text);
    }
  }

  return { features, improvements, bugfixes, other };
}

function timeAgo(dateStr: string, lang: 'en' | 'zh'): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return lang === 'zh' ? '今天' : 'Today';
  if (days === 1) return lang === 'zh' ? '昨天' : 'Yesterday';
  if (days < 7) return lang === 'zh' ? `${days} 天前` : `${days} days ago`;
  if (days < 30) return lang === 'zh' ? `${Math.floor(days / 7)} 周前` : `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return lang === 'zh' ? `${Math.floor(days / 30)} 个月前` : `${Math.floor(days / 30)} months ago`;
  return lang === 'zh' ? `${Math.floor(days / 365)} 年前` : `${Math.floor(days / 365)} years ago`;
}

function formatDate(dateStr: string, lang: 'en' | 'zh'): string {
  return new Date(dateStr).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

const tagConfig = {
  features: {
    label: { en: 'New Feature', zh: '新功能' },
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    dot: 'text-emerald-500',
    emoji: '✨',
  },
  improvements: {
    label: { en: 'Improvement', zh: '改进' },
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'text-blue-500',
    emoji: '🚀',
  },
  bugfixes: {
    label: { en: 'Bug Fix', zh: '问题修复' },
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    dot: 'text-amber-500',
    emoji: '🐛',
  },
  other: {
    label: { en: 'Other', zh: '其他' },
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    dot: 'text-purple-500',
    emoji: '📦',
  },
};

const FILTER_OPTIONS = [
  { key: 'all', labelEn: 'All', labelZh: '全部' },
  { key: 'features', labelEn: 'New Feature', labelZh: '新功能' },
  { key: 'improvements', labelEn: 'Improvement', labelZh: '改进' },
  { key: 'bugfixes', labelEn: 'Bug Fix', labelZh: '问题修复' },
];

export function ChangelogClient({ lang, content }: Props) {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('https://api.github.com/repos/relaycraft/relaycraft/releases?per_page=50', {
      headers: { 'Accept': 'application/vnd.github+json' }
    })
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then(data => {
        const stable = data
          .filter((r: any) => !r.draft && !r.prerelease)
          .map((r: any) => {
            const parts = (r.body || '').split(/^---$/m);
            return {
              version: r.tag_name,
              name: r.name || r.tag_name,
              releaseUrl: r.html_url,
              publishedAt: r.published_at,
              bodyEn: parts[0]?.trim() || '',
              bodyZh: parts.slice(1).join('---').trim() || '',
            };
          });
        setReleases(stable);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load releases. Please try again later.');
        setLoading(false);
      });
  }, []);

  const body = (r: Release) => lang === 'zh' ? r.bodyZh : r.bodyEn;

  const tagLabel = (key: string) =>
    key === 'all'
      ? (lang === 'zh' ? '全部' : 'All')
      : tagConfig[key as keyof typeof tagConfig]?.label[lang] || key;

  if (loading) {
    return (
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {content['changelog.title']}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              {content['changelog.subtitle']}
            </p>
          </div>
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary border-t-transparent" />
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center py-20">
          <p className="text-destructive">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {content['changelog.title']}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            {content['changelog.subtitle']}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_OPTIONS.map(opt => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === opt.key
                  ? 'border border-primary/30 bg-primary/5 text-primary'
                  : 'border border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {opt.key !== 'all' && (
                <span>{tagConfig[opt.key as keyof typeof tagConfig]?.emoji}</span>
              )}
              {tagLabel(opt.key)}
            </button>
          ))}
        </div>

        {/* Entries */}
        <div className="space-y-8">
          {releases.map(release => {
            const parsed = parseBody(body(release));
            const hasAny =
              filter === 'all'
                ? true
                : parsed[filter as keyof ParsedSection]?.length > 0;

            if (!hasAny) return null;

            return (
              <div
                key={release.version}
                className="rounded-2xl border border-border/50 bg-card overflow-hidden"
              >
                {/* Header */}
                <div className="px-6 py-5 border-b border-border/50 bg-muted/30">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        href={release.releaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                      >
                        {release.version}
                      </a>
                      <span className="text-sm text-muted-foreground">
                        {timeAgo(release.publishedAt, lang)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground sm:ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      <time dateTime={release.publishedAt}>
                        {formatDate(release.publishedAt, lang)}
                      </time>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {(['features', 'improvements', 'bugfixes', 'other'] as const).map(type => {
                    if (parsed[type].length === 0) return null;
                    if (filter !== 'all' && filter !== type) return null;
                    const cfg = tagConfig[type];

                    return (
                      <div key={type} className="mb-5 last:mb-0">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${cfg.color}`}>
                            {cfg.emoji} {cfg.label[lang]}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {parsed[type].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                              <span className={`${cfg.dot} mt-0.5`}>•</span>
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {releases.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-medium">{content['changelog.no_releases']}</p>
          </div>
        )}
      </div>
    </main>
  );
}
