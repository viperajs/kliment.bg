"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, PenTool, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const admissionClasses = [
    { grade: "I", title: "Първи клас", description: "Начало на вашето пътешествие", icon: Sparkles, color: "text-yellow-400", link: "/priem/1-klas" },
    { grade: "V", title: "Пети клас", description: "Нови хоризонти", icon: BookOpen, color: "text-blue-400", link: "/priem/5-klas" },
    { grade: "VIII", title: "Осми клас", description: "Профилирано обучение", icon: PenTool, color: "text-emerald-400", link: "/priem/8-klas" },
    { grade: "XI", title: "Единадесети клас", description: "Професионална реализация", icon: GraduationCap, color: "text-purple-400", link: "/priem/11-klas" },
];

export function Admission() {
    return (
        <section className="py-24 bg-[#0f172a] relative">
            <div className="absolute inset-0 bg-primary/5 clip-path-slant" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">Прием 2025/2026</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Станете част от елитното училище на Пещера. Изберете своя път към успеха.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {admissionClasses.map((item, index) => (
                        <motion.div
                            key={item.grade}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group h-full hover:border-white/20 transition-all duration-300">
                                <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500`}>
                                    <item.icon className="w-32 h-32" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${item.color} group-hover:bg-white/10 transition-colors`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>

                                    <span className="text-xs font-bold tracking-widest text-slate-500 mb-2 uppercase block">Клас</span>
                                    <div className="flex items-baseline space-x-2 mb-2">
                                        <span className="text-3xl font-serif font-bold text-white">{item.grade}</span>
                                    </div>

                                    <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-400 mb-8 flex-grow">{item.description}</p>

                                    <Link href={item.link} className="inline-flex items-center text-sm font-bold text-white hover:text-secondary transition-colors">
                                        Кандидатствай <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
