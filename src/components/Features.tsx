import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Bot,
  Code,
  Filter,
  Send,
  PauseCircle,
  Puzzle,
  CheckCircle2
} from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder';

// Icon mapping for feature titles (English)
const iconMapEn: Record<string, React.ComponentType<{ className?: string }>> = {
  "Traffic Monitor": Activity,
  "Rules Engine": Filter,
  "AI Assistant": Bot,
  "Breakpoints": PauseCircle,
  "Request Composer": Send,
  "Python Scripting": Code,
  "Extensibility": Puzzle,
};

// Icon mapping for feature titles (Chinese)
const iconMapZh: Record<string, React.ComponentType<{ className?: string }>> = {
  "流量监控": Activity,
  "规则引擎": Filter,
  "AI 助手": Bot,
  "断点调试": PauseCircle,
  "请求构造器": Send,
  "脚本支持": Code,
  "扩展能力": Puzzle,
};

// Combined icon map for backward compatibility
const iconMap = { ...iconMapEn, ...iconMapZh };

interface FeatureItem {
  title: string;
  description: string;
  bullets?: string[];
  images?: string[];
}

interface FeaturesProps {
  content: Record<string, string>;
  featuresList: FeatureItem[];
  lang?: string;
}

// Process images array to replace {lang} placeholder
const processImages = (images: string[] | undefined, lang: string): string[] => {
  if (!images) return [];
  return images.map(img => img.replace('{lang}', lang));
};

export const Features = ({ content, featuresList, lang = 'en' }: FeaturesProps) => {
  return (
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            dangerouslySetInnerHTML={{ __html: content['features.title'] }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {content['features.subtitle']}
          </motion.p>
        </div>

        <div className="space-y-32">
          {featuresList.map((feature, index) => {
            const IconComponent = iconMap[feature.title as keyof typeof iconMap] || Activity;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 50, damping: 20 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 group`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary mb-2 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-shadow duration-500">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground/90 leading-relaxed font-medium">
                    {feature.description}
                  </p>

                  {/* Bullets */}
                  {feature.bullets && (
                    <ul className="space-y-4 pt-4 text-left inline-block md:block">
                      {feature.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center text-base font-medium text-foreground/80">
                          <CheckCircle2 className="h-5 w-5 mr-3 text-primary/70 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Visual Content */}
                <div className="flex-1 w-full relative perspective-1000">
                  {/* Glow effect behind the card */}
                  <div className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/20 opacity-0 blur-3xl transition-opacity duration-700 md:group-hover:opacity-100"></div>

                  <div className={`relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl p-3 shadow-2xl transition-all duration-700 ease-out ring-1 ring-black/5 dark:ring-white/5 
                                   md:group-hover:-translate-y-3 ${isEven ? 'rotate-1 md:group-hover:rotate-x-2 md:group-hover:-rotate-y-2 md:group-hover:rotate-0' : '-rotate-1 md:group-hover:rotate-x-2 md:group-hover:rotate-y-2 md:group-hover:rotate-0'}`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 pointer-events-none z-10"></div>
                    <MediaPlaceholder
                       aspectRatio="aspect-[3/2]"
                       label={`${feature.title} Interface`}
                       className="rounded-xl bg-card dark:bg-black/40 border border-border/50 dark:border-white/5 relative z-0"
                       images={processImages(feature.images, lang)}
                       autoPlayInterval={4000}
                     />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

