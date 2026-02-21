export interface GithubRelease {
    version: string;
    assets: {
        dmg?: string;
        exe?: string;
        appImage?: string;
    };
}

export async function getLatestRelease(): Promise<GithubRelease | null> {
    try {
        const response = await fetch('https://api.github.com/repos/relaycraft/relaycraft/releases/latest');
        if (!response.ok) {
            console.error('Failed to fetch latest release from GitHub');
            return null;
        }
        const data = await response.json();

        const assets: GithubRelease['assets'] = {};

        data.assets.forEach((asset: any) => {
            if (asset.name.endsWith('.dmg')) {
                assets.dmg = asset.browser_download_url;
            } else if (asset.name.endsWith('.exe')) {
                assets.exe = asset.browser_download_url;
            } else if (asset.name.endsWith('.AppImage')) {
                assets.appImage = asset.browser_download_url;
            }
        });

        return {
            version: data.tag_name,
            assets
        };
    } catch (error) {
        console.error('Error fetching GitHub release:', error);
        return null;
    }
}
