export interface GithubRelease {
    version: string;
    releaseUrl: string;
    assets: {
        dmg?: string;
        exe?: string;
        msi?: string;
        deb?: string;
        rpm?: string;
        appImage?: string;
        sha256?: string;
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
            const assetName = (asset.name || '').toLowerCase();

            if (assetName.endsWith('.dmg')) {
                assets.dmg = asset.browser_download_url;
            } else if (assetName.endsWith('.exe')) {
                assets.exe = asset.browser_download_url;
            } else if (assetName.endsWith('.msi')) {
                assets.msi = asset.browser_download_url;
            } else if (assetName.endsWith('.deb')) {
                assets.deb = asset.browser_download_url;
            } else if (assetName.endsWith('.rpm')) {
                assets.rpm = asset.browser_download_url;
            } else if (assetName.endsWith('.appimage')) {
                assets.appImage = asset.browser_download_url;
            } else if (assetName.includes('sha256')) {
                assets.sha256 = asset.browser_download_url;
            }
        });

        return {
            version: data.tag_name,
            releaseUrl: data.html_url,
            assets
        };
    } catch (error) {
        console.error('Error fetching GitHub release:', error);
        return null;
    }
}
