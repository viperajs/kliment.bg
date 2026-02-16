"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
            {/* Background with Modern Gradient Mesh */}
            <div className="absolute inset-0 z-0 bg-[#0f172a]">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
                {/* Simple grid pattern SVG */}
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="container relative z-20 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary backdrop-blur-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        Прием 2025/2026 е открит
                    </div>

                    <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tight text-white">
                        Добре дошли в <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            СУ "Св. Климент Охридски"
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Образование за утрешния ден — град Пещера.
                        Изграждаме личности, готови за бъдещето чрез иновации, традиции и грижа.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-blue-500/25 w-full sm:w-auto" asChild>
                            <Link href="/kontakti">
                                Свържете се с нас <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 text-white rounded-full w-full sm:w-auto" asChild>
                            <Link href="/za-nas">
                                За нас <Info className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
