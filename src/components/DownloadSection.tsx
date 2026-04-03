import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Apple, ArrowRight } from 'lucide-react';
import { getLatestRelease } from '../lib/github';

import type { GithubRelease } from '../lib/github';

interface DownloadSectionProps {
  content: Record<string, string>;
  latestRelease: GithubRelease | null;
}

export const DownloadSection = ({ content, latestRelease: buildTimeRelease }: DownloadSectionProps) => {
  const getDefaultWindowsKey = (currentRelease: GithubRelease | null) => {
    if (currentRelease?.assets.exe) return 'exe';
    if (currentRelease?.assets.msi) return 'msi';
    return 'exe';
  };

  const getDefaultLinuxKey = (currentRelease: GithubRelease | null) => {
    if (currentRelease?.assets.deb) return 'deb';
    if (currentRelease?.assets.appImage) return 'appImage';
    return 'deb';
  };

  const [release, setRelease] = useState<GithubRelease | null>(buildTimeRelease);
  const [selectedWindows, setSelectedWindows] = useState<string>(getDefaultWindowsKey(buildTimeRelease));
  const [selectedLinux, setSelectedLinux] = useState<string>(getDefaultLinuxKey(buildTimeRelease));
  const fallbackUrl = 'https://github.com/relaycraft/relaycraft/releases/latest';

  useEffect(() => {
    const updateRelease = async () => {
      const liveRelease = await getLatestRelease();
      if (liveRelease) {
        setRelease(liveRelease);
      }
    };
    updateRelease();
  }, []);

  const windowsOptions = [
    { key: 'exe', formatLabel: 'exe', url: release?.assets.exe || fallbackUrl },
    ...(release?.assets.msi ? [{ key: 'msi', formatLabel: 'msi', url: release.assets.msi }] : []),
  ];

  const linuxOptions = [
    { key: 'deb', formatLabel: 'deb', url: release?.assets.deb || fallbackUrl },
    { key: 'appImage', formatLabel: 'AppImage', url: release?.assets.appImage || fallbackUrl },
  ];

  useEffect(() => {
    const hasWindowsOption = windowsOptions.some((option) => option.key === selectedWindows);
    if (!hasWindowsOption) {
      setSelectedWindows(getDefaultWindowsKey(release));
    }

    const hasLinuxOption = linuxOptions.some((option) => option.key === selectedLinux);
    if (!hasLinuxOption) {
      setSelectedLinux(getDefaultLinuxKey(release));
    }
  }, [release, selectedWindows, selectedLinux, windowsOptions, linuxOptions]);

  const selectedWindowsOption = windowsOptions.find((option) => option.key === selectedWindows) || windowsOptions[0];
  const selectedLinuxOption = linuxOptions.find((option) => option.key === selectedLinux) || linuxOptions[0];
  const releasePageUrl = release?.releaseUrl || fallbackUrl;
  const macUrl = release?.assets.dmg || fallbackUrl;

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 pb-2 leading-tight">
            {content['download.title']}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content['download.subtitle']}
          </p>
          {release && (
            <div className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {content['download.latest']}: {release.version}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* macOS */}
          <motion.a
            href={macUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 60, damping: 20, delay: 0.1 }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center p-8 rounded-3xl border border-white/10 dark:border-white/5 bg-card/60 backdrop-blur-xl hover:border-primary/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8_30px_rgba(0,0,0,0.2)] group relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <Apple className="h-10 w-10 text-primary shrink-0" />
              </div>
              <h3 className="text-2xl font-bold mb-2 break-keep">{content['download.macos']}</h3>
              <span className="text-sm text-muted-foreground mb-8 flex-1">{content['download.macos.desc']}</span>

              <div className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] mt-auto">
                {content['download.extension.dmg']}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Windows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 60, damping: 20, delay: 0.2 }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center p-8 rounded-3xl border border-white/10 dark:border-white/5 bg-card/60 backdrop-blur-xl hover:border-primary/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8_30px_rgba(0,0,0,0.2)] group relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-10 w-10 fill-primary shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.1L9.75 21.9V12.3H0v8.249zM10.5 2V11.7H24V0L10.5 2zm0 19.9L24 24V12.3H10.5v9.6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 break-keep">{content['download.windows']}</h3>
              <span className="text-sm text-muted-foreground mb-8 flex-1">{content['download.windows.desc']}</span>

              {windowsOptions.length > 1 && (
                <>
                  <div className="w-full mb-4 rounded-xl border border-white/10 bg-muted/35 p-1 grid grid-cols-2 gap-1">
                    {windowsOptions.map((option) => {
                      const active = option.key === selectedWindowsOption.key;
                      return (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => setSelectedWindows(option.key)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? 'bg-background text-foreground border border-white/10'
                              : 'text-muted-foreground hover:text-foreground hover:bg-background/60'
                          }`}
                        >
                          {option.formatLabel}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              <a
                href={selectedWindowsOption.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] mt-auto"
              >
                {content['download.action']} {selectedWindowsOption.formatLabel}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Linux */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 60, damping: 20, delay: 0.3 }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center p-8 rounded-3xl border border-white/10 dark:border-white/5 bg-card/60 backdrop-blur-xl hover:border-primary/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8_30px_rgba(0,0,0,0.2)] group relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-10 w-10 fill-primary shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 0c-2.31 0-5.171 1.14-5.171 4.291 0 1.289.56 2.361.19 3.001-.47.799-1.54.54-2.88.54a2.91 2.91 0 0 0-3 3c0 .879.41 1.63.951 2.221a8.4 8.4 0 0 0 2.451 4.63c.7.67 1.48 1.16 2.16 1.35.321.1.66.151.98.151h3.33a4.67 4.67 0 0 1-1.38.5c-.75 0-1.5 0-1.5.75s.38 1 1 1.75c.421.49 1.5 2 4.5 2s3.38-.75 4.13-1.5c.37-.37.37-1.12.37-1.5s-.37-.75-.75-.75h-.75V11.25a3 3 0 0 1 3-3c1.34 0 2.411.26 2.881-.54-.37-.64.19-1.711.19-3.001 0-3.151-2.861-4.291-5.171-4.291-3 0-4 .5-5.5 1.5-1.5-1-2.5-1.5-4.5-1.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 break-keep">{content['download.linux']}</h3>
              <span className="text-sm text-muted-foreground mb-8 flex-1">{content['download.linux.desc']}</span>

              {linuxOptions.length > 1 && (
                <>
                  <div className="w-full mb-4 rounded-xl border border-white/10 bg-muted/35 p-1 grid grid-cols-2 gap-1">
                    {linuxOptions.map((option) => {
                      const active = option.key === selectedLinuxOption.key;
                      return (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => setSelectedLinux(option.key)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? 'bg-background text-foreground border border-white/10'
                              : 'text-muted-foreground hover:text-foreground hover:bg-background/60'
                          }`}
                        >
                          {option.formatLabel}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              <a
                href={selectedLinuxOption.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] mt-auto"
              >
                {content['download.action']} {selectedLinuxOption.formatLabel}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <p>
            {content['download.notice.prefix']}
            <a href={releasePageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              {content['download.notice.link']}
            </a>
            {content['download.notice.suffix']}
          </p>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          {content['download.agreement']} <a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/terms`} className="underline hover:text-primary transition-colors">{content['download.terms']}</a> & <a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/privacy`} className="underline hover:text-primary transition-colors">{content['download.privacy']}</a>.
        </div>
      </div>
    </section>
  );
};
