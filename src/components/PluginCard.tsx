import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Shield,
  Globe,
  BookOpen,
  Activity,
  Download,
  Package,
  User,
  ArrowDownToLine,
} from 'lucide-react';
import type { PluginInfo } from '../lib/plugins';
import { getLocalizedName, getLocalizedDescription } from '../lib/plugins';

// Map plugin icon field (lucide icon name) to component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  shield: Shield,
  Shield,
  Globe,
  BookOpen,
  Activity,
  Download,
  Package,
};

// Category badge colors
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  utility: {
    bg: 'bg-blue-500/10 dark:bg-blue-400/10',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-500/20 dark:border-blue-400/20',
  },
  security: {
    bg: 'bg-emerald-500/10 dark:bg-emerald-400/10',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-500/20 dark:border-emerald-400/20',
  },
  i18n: {
    bg: 'bg-violet-500/10 dark:bg-violet-400/10',
    text: 'text-violet-700 dark:text-violet-300',
    border: 'border-violet-500/20 dark:border-violet-400/20',
  },
  other: {
    bg: 'bg-gray-500/10 dark:bg-gray-400/10',
    text: 'text-gray-700 dark:text-gray-300',
    border: 'border-gray-500/20 dark:border-gray-400/20',
  },
};

interface PluginCardProps {
  plugin: PluginInfo;
  lang: string;
  index: number;
  content: Record<string, string>;
}

export const PluginCard = ({ plugin, lang, index, content }: PluginCardProps) => {
  const IconComponent = iconMap[plugin.icon] || Package;
  const name = getLocalizedName(plugin, lang);
  const description = getLocalizedDescription(plugin, lang);
  const colors = categoryColors[plugin.category] || categoryColors.other;
  const categoryLabel = content[`plugins.category.${plugin.category}`] || plugin.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', stiffness: 80, damping: 20 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl p-6 shadow-lg ring-1 ring-black/5 dark:ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

        {/* Header: Icon + Category */}
        <div className="flex items-start justify-between mb-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-shadow duration-500">
            <IconComponent className="h-6 w-6" />
          </div>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}>
            {categoryLabel}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {plugin.author}
          </span>
          <span className="flex items-center gap-1.5 font-mono">
            v{plugin.version}
          </span>
          {plugin.downloadCount != null && plugin.downloadCount > 0 && (
            <span className="flex items-center gap-1.5">
              <ArrowDownToLine className="h-3.5 w-3.5" />
              {plugin.downloadCount.toLocaleString()}
            </span>
          )}
        </div>

        {/* Download button */}
        <a
          href={plugin.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 h-10 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.5)]"
        >
          <Download className="h-4 w-4" />
          {content['plugins.download'] || 'Download'}
        </a>
      </div>
    </motion.div>
  );
};
