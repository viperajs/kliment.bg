"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Mission() {
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        className="w-full lg:w-1/2 relative group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                            {/* Placeholder image */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504743055-e99aa761643d?q=80&w=2000&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="glass p-6 rounded-xl border border-white/20">
                                    <p className="text-white font-serif italic text-lg">"Образованието е най-мощното оръжие, което можете да използвате, за да промените света."</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary/30 rounded-full z-[-1]" />
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/5 rounded-full z-[-1] blur-2xl" />
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-block px-3 py-1 border border-secondary/30 text-secondary rounded-full text-sm font-medium mb-6 tracking-wide">
                            НАШАТА ЦЕЛ
                        </div>
                        <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-white leading-tight">
                            Изграждаме <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Лидерите на утрешния ден</span>
                        </h2>

                        <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light">
                            <p>
                                Нашата мисия е създаване на среда, в която всеки ученик открива своя потенциал. Ние не просто предаваме знания, ние вдъхновяваме любопитство.
                            </p>
                            <p>
                                Чрез иновативни методи на обучение и фокус върху личностното развитие, ние подготвяме младите хора за успешна реализация в динамичния свят.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-1">98%</h4>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Успешна реализация</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-1">50+</h4>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Квалифицирани преподаватели</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
