import React from 'react';
import { motion } from 'framer-motion';
import { Apple, ArrowRight } from 'lucide-react';

import type { GithubRelease } from '../lib/github';

interface DownloadSectionProps {
  content: Record<string, string>;
  latestRelease: GithubRelease | null;
}

export const DownloadSection = ({ content, latestRelease }: DownloadSectionProps) => {
  const fallbackUrl = 'https://github.com/relaycraft/relaycraft/releases/latest';

  const downloadLinks = {
    dmg: latestRelease?.assets.dmg || fallbackUrl,
    exe: latestRelease?.assets.exe || fallbackUrl,
    appImage: latestRelease?.assets.appImage || fallbackUrl,
  };

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
          {latestRelease && (
            <div className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {content['download.latest']}: {latestRelease.version}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* macOS */}
          <motion.a
            href={downloadLinks.dmg}
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
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-background to-muted border border-white/10 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <Apple className="h-10 w-10 text-foreground shrink-0" />
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
          <motion.a
            href={downloadLinks.exe}
            target="_blank"
            rel="noopener noreferrer"
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
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-background to-muted border border-white/10 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-10 w-10 fill-foreground shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.1L9.75 21.9V12.3H0v8.249zM10.5 2V11.7H24V0L10.5 2zm0 19.9L24 24V12.3H10.5v9.6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 break-keep">{content['download.windows']}</h3>
              <span className="text-sm text-muted-foreground mb-8 flex-1">{content['download.windows.desc']}</span>

              <div className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] mt-auto">
                {content['download.extension.exe']}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Linux */}
          <motion.a
            href={downloadLinks.appImage}
            target="_blank"
            rel="noopener noreferrer"
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
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-background to-muted border border-white/10 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-10 w-10 fill-foreground shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 0c-2.31 0-5.171 1.14-5.171 4.291 0 1.289.56 2.361.19 3.001-.47.799-1.54.54-2.88.54a2.91 2.91 0 0 0-3 3c0 .879.41 1.63.951 2.221a8.4 8.4 0 0 0 2.451 4.63c.7.67 1.48 1.16 2.16 1.35.321.1.66.151.98.151h3.33a4.67 4.67 0 0 1-1.38.5c-.75 0-1.5 0-1.5.75s.38 1 1 1.75c.421.49 1.5 2 4.5 2s3.38-.75 4.13-1.5c.37-.37.37-1.12.37-1.5s-.37-.75-.75-.75h-.75V11.25a3 3 0 0 1 3-3c1.34 0 2.411.26 2.881-.54-.37-.64.19-1.711.19-3.001 0-3.151-2.861-4.291-5.171-4.291-3 0-4 .5-5.5 1.5-1.5-1-2.5-1.5-4.5-1.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 break-keep">{content['download.linux']}</h3>
              <span className="text-sm text-muted-foreground mb-8 flex-1">{content['download.linux.desc']}</span>

              <div className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] mt-auto">
                {content['download.extension.appimage']}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          {content['download.agreement']} <a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/terms`} className="underline hover:text-primary transition-colors">{content['download.terms']}</a> & <a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/privacy`} className="underline hover:text-primary transition-colors">{content['download.privacy']}</a>.
        </div>
      </div>
    </section>
  );
};
