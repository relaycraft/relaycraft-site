import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder';

interface HeroProps {
  content: Record<string, string>;
  lang?: string;
}

export const Hero = ({ content, lang = 'en' }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 20 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-xl shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span className="relative flex h-2 w-2 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            </span>
            {content['hero.badge']}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-muted-foreground drop-shadow-sm pb-2"
            dangerouslySetInnerHTML={{ __html: content['hero.title'] }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto md:text-xl font-medium leading-relaxed"
          >
            {content['hero.subtitle']}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
          >
            <a
              href="#download"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:bg-primary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              {content['hero.cta.download']}
            </a>
            <a
              href="https://docs.relaycraft.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent/50 hover:text-accent-foreground hover:scale-[1.02] hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
            >
              <Terminal className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 text-muted-foreground group-hover:text-foreground" />
              {content['hero.cta.docs']}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 60, damping: 20, delay: 0.5 }}
          className="mt-20 md:mt-28 relative mx-auto max-w-5xl group perspective-1000"
        >
          {/* Main Hero Visual - Video or Image */}
          <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md shadow-2xl overflow-hidden p-2 md:p-4 transition-transform duration-700 ease-out group-hover:rotate-x-2 group-hover:-translate-y-2 ring-1 ring-black/5 dark:ring-white/5">
            <MediaPlaceholder
              aspectRatio="aspect-[16/10]"
              label="Premium App Interface"
              className="rounded-xl shadow-inner border border-border/50 dark:border-white/5 bg-muted/20 dark:bg-black/20"
              video="/videos/hero-{lang}.mp4"
              poster="/images/hero-{lang}-poster.png"
              lang={lang}
            />
          </div>

          {/* Decorative Elements - Atmospheric Glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/30 to-purple-500/30 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"></div>
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-purple-500/20 blur-[120px] pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};
