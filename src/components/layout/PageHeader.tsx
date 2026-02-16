"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="relative py-20 pb-24 overflow-hidden bg-[#0f172a]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">СУ Св. Климент Охридски</span>
                    </div>
                    <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent z-10" />
        </div>
    );
}
