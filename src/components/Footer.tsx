import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  content: Record<string, string>;
}

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="border-t border-white/10 dark:border-white/5 bg-background pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight mb-6 transition-transform hover:scale-[1.02] inline-flex">
              <img src="/icon.svg" alt="RelayCraft Logo" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(59,130,246,0.2)] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
              <span>RelayCraft</span>
            </a>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {content['footer.description']}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">{content['footer.product']}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/#features`} className="text-muted-foreground hover:text-primary transition-colors">{content['nav.features']}</a></li>
              <li><a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/#download`} className="text-muted-foreground hover:text-primary transition-colors">{content['nav.download']}</a></li>
              <li><a href="https://github.com/relaycraft/relaycraft/releases" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{content['footer.changelog']}</a></li>
              <li><a href="https://docs.relaycraft.dev" className="text-muted-foreground hover:text-primary transition-colors">{content['nav.docs']}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">{content['footer.company']}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/about`} className="text-muted-foreground hover:text-primary transition-colors">{content['footer.about']}</a></li>
              <li><a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/blog`} className="text-muted-foreground hover:text-primary transition-colors">{content['footer.blog']}</a></li>
              <li><a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/contact`} className="text-muted-foreground hover:text-primary transition-colors">{content['footer.contact']}</a></li>
              <li><a href={`/${content['blog.switch_lang'] === 'English' ? 'zh' : 'en'}/privacy`} className="text-muted-foreground hover:text-primary transition-colors">{content['footer.privacy']}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RelayCraft. {content['footer.rights']}</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="https://github.com/relaycraft" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/relaycraft_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:support@relaycraft.dev" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
