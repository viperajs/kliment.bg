"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const admissionClasses = [
    { grade: "I", title: "1-ви клас", description: "Начало на вашето пътешествие.", href: "/priem?tab=1-klas", color: "text-blue-400", bg: "bg-blue-400/5 hover:bg-blue-400/10" },
    { grade: "V", title: "5-ти клас", description: "Нови хоризонти и възможности.", href: "/priem?tab=5-klas", color: "text-indigo-400", bg: "bg-indigo-400/5 hover:bg-indigo-400/10" },
    { grade: "VIII", title: "8-ми клас", description: "Профилирано обучение.", href: "/priem?tab=8-klas", color: "text-purple-400", bg: "bg-purple-400/5 hover:bg-purple-400/10" },
    { grade: "XI", title: "11-ти клас", description: "Подготовка за бъдещето.", href: "/priem?tab=11-klas", color: "text-emerald-400", bg: "bg-emerald-400/5 hover:bg-emerald-400/10" },
];

export function AdmissionCards() {
    return (
        <section className="py-24 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Прием 2025/2026</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Присъединете се към нас и станете част от едно семейство, посветено на знанието и успеха.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {admissionClasses.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`group rounded-2xl border border-white/5 p-8 transition-all duration-300 ${item.bg}`}
                        >
                            <div className={`text-6xl font-serif font-bold mb-6 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                {item.grade}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{item.description}</p>
                            <div className="flex items-center text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                                Повече <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
