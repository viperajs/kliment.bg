"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
    { value: 65, label: "Години История", suffix: "+" },
    { value: 580, label: "Ученици", suffix: "" },
    { value: 54, label: "Преподаватели", suffix: "" },
    { value: 100, label: "Реализация", suffix: "%" },
];

export function NumbersSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <AnimatedCounter
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
