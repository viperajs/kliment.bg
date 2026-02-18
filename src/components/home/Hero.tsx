"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-background">
                <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px]" style={{ background: 'var(--blob-primary)' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[60px] md:blur-[100px]" style={{ background: 'var(--blob-secondary)' }} />
                <div
                    className="absolute inset-0 z-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)`,
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
                    <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-secondary backdrop-blur-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        Прием 2025/2026 е открит
                    </div>

                    <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tight text-foreground">
                        Добре дошли в <br />
                        <span className="text-gradient">
                            СУ &quot;Св. Климент Охридски&quot;
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
                        Образование за утрешния ден — град Пещера.
                        Изграждаме личности, готови за бъдещето чрез иновации, традиции и грижа.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg w-full sm:w-auto" asChild>
                            <Link href="/kontakti">
                                Свържете се с нас <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg border-border hover:bg-muted text-foreground rounded-full w-full sm:w-auto" asChild>
                            <Link href="/za-nas">
                                За нас <Info className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hidden sm:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-muted-foreground rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
