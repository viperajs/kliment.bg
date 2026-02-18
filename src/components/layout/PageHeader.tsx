"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="relative py-12 pb-16 md:py-20 md:pb-24 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" style={{ background: 'var(--blob-primary)' }} />
                <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full blur-[40px] md:blur-[80px]" style={{ background: 'var(--blob-secondary)' }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-border bg-muted backdrop-blur-md">
                        <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">СУ Св. Климент Охридски</span>
                    </div>
                    <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed px-2">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </div>
    );
}
