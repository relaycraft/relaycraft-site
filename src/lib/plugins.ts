export interface PluginInfo {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  category: string;
  icon: string;
  downloadUrl: string;
  downloadCount?: number;
  locales?: {
    [lang: string]: {
      name?: string;
      description?: string;
    };
  };
}

interface PluginRegistry {
  version: string;
  plugins: PluginInfo[];
}

const PLUGINS_REGISTRY_URL =
  'https://raw.githubusercontent.com/relaycraft/relaycraft-plugins/main/plugins.json';

/**
 * Fetch the plugin registry from GitHub at build time.
 * Returns the array of plugins sorted by download count (descending).
 */
export async function getPluginRegistry(): Promise<PluginInfo[]> {
  try {
    const res = await fetch(PLUGINS_REGISTRY_URL);
    if (!res.ok) {
      console.error('Failed to fetch plugin registry:', res.status);
      return [];
    }
    const data: PluginRegistry = await res.json();
    // Sort by download count descending (most popular first)
    return data.plugins.sort(
      (a, b) => (b.downloadCount ?? 0) - (a.downloadCount ?? 0)
    );
  } catch (error) {
    console.error('Error fetching plugin registry:', error);
    return [];
  }
}

/**
 * Get the localized name for a plugin.
 */
export function getLocalizedName(plugin: PluginInfo, lang: string): string {
  return plugin.locales?.[lang]?.name ?? plugin.name;
}

/**
 * Get the localized description for a plugin.
 */
export function getLocalizedDescription(plugin: PluginInfo, lang: string): string {
  return plugin.locales?.[lang]?.description ?? plugin.description;
}

/**
 * Group plugins by category.
 */
export function groupByCategory(plugins: PluginInfo[]): Record<string, PluginInfo[]> {
  return plugins.reduce((groups, plugin) => {
    const cat = plugin.category || 'other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(plugin);
    return groups;
  }, {} as Record<string, PluginInfo[]>);
}
