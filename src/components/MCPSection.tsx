import { motion } from 'framer-motion';
import { Eye, Zap, ArrowRight, Share2, Network } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder';

interface MCPSectionProps {
  mcpData: {
    title: string;
    subtitle: string;
    image: string;
    cta: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const MCPSection = ({ mcpData }: MCPSectionProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl border border-primary/20 bg-primary/5 p-2 md:p-3 overflow-hidden shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
              <MediaPlaceholder
                aspectRatio="aspect-[4/3]"
                label="Built-in MCP Support"
                className="relative rounded-2xl bg-card dark:bg-black/40 border border-border/50 dark:border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                images={[mcpData.image]}
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-xl">
                <Network className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase">Active MCP Link</span>
              </div>
            </div>
            
            {/* Decorative glows */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 blur-[100px] pointer-events-none opacity-50"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 blur-[100px] pointer-events-none opacity-50"></div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Share2 className="h-3 w-3" />
                Connectivity
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 leading-tight">
                {mcpData.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-6 mb-8">
                {mcpData.subtitle}
              </p>
            </motion.div>

            {/* Feature points */}
            <div className="grid grid-cols-1 gap-6">
              {mcpData.features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex items-start gap-5 p-5 rounded-2xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/20 transition-all duration-300"
                >
                  <div className={`flex shrink-0 h-12 w-12 items-center justify-center rounded-xl border ${idx === 0 ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-purple-400 bg-purple-500/10 border-purple-500/20'} shadow-lg transition-transform group-hover:scale-110`}>
                    {idx === 0 ? <Eye className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
              >
                {mcpData.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};
