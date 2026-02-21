import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, HardDrive, Cpu, TerminalSquare, EyeOff } from 'lucide-react';

interface SecurityProps {
    content: Record<string, string>;
    securityList: { title: string; description: string }[];
}

export const Security = ({ content, securityList }: SecurityProps) => {
    const icons = [
        <Lock className="h-5 w-5" />,
        <Shield className="h-5 w-5" />,
        <HardDrive className="h-5 w-5" />,
        <Cpu className="h-5 w-5" />,
        <TerminalSquare className="h-5 w-5" />,
        <EyeOff className="h-5 w-5" />
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background border-t border-border/50">
            {/* Security grid background */}
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] text-black dark:text-white" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                    >
                        <Shield className="h-6 w-6" />
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        {content['security.title']}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-mono text-sm">
                    {securityList.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group flex flex-col p-6 rounded-xl bg-card/40 border border-border hover:border-emerald-500/30 transition-colors duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center gap-4 mb-4 text-emerald-500">
                                {icons[index % icons.length]}
                                <h3 className="font-semibold text-base text-foreground font-sans tracking-tight">{item.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
