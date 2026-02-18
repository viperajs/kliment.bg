"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const admissionClasses = [
    { grade: "I", title: "1-ви клас", description: "Начало на вашето пътешествие.", href: "/priem?tab=1-klas", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/5 hover:bg-blue-500/10" },
    { grade: "V", title: "5-ти клас", description: "Нови хоризонти и възможности.", href: "/priem?tab=5-klas", color: "text-indigo-500 dark:text-indigo-400", bg: "bg-indigo-500/5 hover:bg-indigo-500/10" },
    { grade: "VIII", title: "8-ми клас", description: "Профилирано обучение.", href: "/priem?tab=8-klas", color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-500/5 hover:bg-purple-500/10" },
    { grade: "XI", title: "11-ти клас", description: "Подготовка за бъдещето.", href: "/priem?tab=11-klas", color: "text-emerald-500 dark:text-emerald-400", bg: "bg-emerald-500/5 hover:bg-emerald-500/10" },
];

export function AdmissionCards() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Прием 2025/2026</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-2">Присъединете се към нас и станете част от едно семейство, посветено на знанието и успеха.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {admissionClasses.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`group rounded-2xl border border-border p-4 sm:p-6 md:p-8 transition-all duration-300 ${item.bg}`}
                        >
                            <div className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 sm:mb-4 md:mb-6 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                {item.grade}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 hidden sm:block">{item.description}</p>
                            <div className="flex items-center text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                                Повече <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
