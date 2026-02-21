import React from 'react';
import { motion } from 'framer-motion';
import { Users, Smartphone, ShieldCheck, TestTube } from 'lucide-react';

interface UserPersonasProps {
    content: Record<string, string>;
    personaList: { title: string; description: string }[];
}

export const UserPersonas = ({ content, personaList }: UserPersonasProps) => {
    const icons = [
        <Users className="h-6 w-6" />,
        <Smartphone className="h-6 w-6" />,
        <TestTube className="h-6 w-6" />,
        <ShieldCheck className="h-6 w-6" />
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {content['personas.title']}
                    </h2>
                    <div className="h-1 w-20 bg-primary/40 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {personaList.map((persona, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                            className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] overflow-hidden"
                        >
                            {/* Subtle hover background sweep */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50 border border-white/5 text-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-500 shadow-inner">
                                {icons[index % icons.length]}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 tracking-tight">{persona.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{persona.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
