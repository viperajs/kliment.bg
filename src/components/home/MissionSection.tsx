"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function MissionSection() {
    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">

                    {/* Image/Logo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full blur-[80px]" style={{ background: 'var(--blob-secondary)' }} />
                            <Image
                                src="/logo.png"
                                alt="Mission Illustration"
                                fill
                                className="object-contain relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 md:mb-8 leading-tight">
                            Нашата <span className="text-secondary">Мисия</span>
                        </h2>

                        <div className="border-l-4 border-secondary pl-4 md:pl-6 mb-6 md:mb-8">
                            <p className="text-base md:text-lg text-foreground/80 leading-relaxed italic">
                                &quot;Създаване на възможно най-добри условия за развитие на личността и потенциала на всеки един ученик, така че да се постигне пълноценна трудова и социална интеграция в обществото.&quot;
                            </p>
                        </div>

                        <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                            Предоставяме качествено образование, водещо до формиране на креативни, социално отговорни и пълноценно интегрирани в обществото личности. Отговорност и следване принципите на общовалидността на истината и доброто.
                        </p>

                        <Button variant="outline" className="border-border hover:bg-muted text-foreground" asChild>
                            <Link href="/za-nas#misiya">
                                Научете повече <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
