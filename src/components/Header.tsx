import React from 'react';
import { motion } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  lang: 'en' | 'zh';
  content: Record<string, string>;
}

export const Header = ({ lang, content }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSubPage, setIsSubPage] = React.useState(false);

  React.useEffect(() => {
    // Check if we are on a sub-page (any path beyond /[lang]/)
    const path = window.location.pathname;
    const isRoot = path === `/${lang}` || path === `/${lang}/` || path === '/';
    setIsSubPage(!isRoot);
  }, [lang]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/40 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href={`/${lang}`} className="flex items-center gap-2.5 font-bold text-xl tracking-tight transition-transform hover:scale-[1.02]">
            <img src="/icon.svg" alt="RelayCraft Logo" className="w-8 h-8 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
            <span>RelayCraft</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {isSubPage ? (
            <a href={`/${lang}`} className="hover:text-foreground transition-colors">{content['nav.home']}</a>
          ) : (
            <>
              <a href="#features" className="hover:text-foreground transition-colors">{content['nav.features']}</a>
              <a href="#download" className="hover:text-foreground transition-colors">{content['nav.download']}</a>
            </>
          )}
          <a href={`/${lang}/blog`} className="hover:text-foreground transition-colors">{content['nav.blog']}</a>
          <a href="https://docs.relaycraft.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{content['nav.docs']}</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2 border-r border-border/40 pr-2 md:pr-4">
            <a
              href="https://github.com/relaycraft/relaycraft"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
          </div>

          <a
            href={isSubPage ? `/${lang}/#download` : "#download"}
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {content['nav.download']}
          </a>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-b border-border/40 bg-background p-4"
        >
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {isSubPage ? (
              <a href={`/${lang}`} className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>{content['nav.home']}</a>
            ) : (
              <>
                <a href="#features" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>{content['nav.features']}</a>
                <a href="#download" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>{content['nav.download']}</a>
              </>
            )}
            <a href={`/${lang}/blog`} className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>{content['nav.blog']}</a>
            <a href="https://docs.relaycraft.dev" className="text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>{content['nav.docs']}</a>
            <a href="https://github.com/relaycraft/relaycraft" className="text-muted-foreground hover:text-foreground flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};
