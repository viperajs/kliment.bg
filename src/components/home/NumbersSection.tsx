"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
    { value: 119, label: "Години История", suffix: "+" },
    { value: 240, label: "Ученици", suffix: "" },
    { value: 45, label: "Преподаватели", suffix: "" },
    { value: 100, label: "Реализация", suffix: "%" },
];

export function NumbersSection() {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
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
