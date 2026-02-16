"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Utensils, BookOpen, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ParentsPage() {
    return (
        <div className="min-h-screen bg-[#0f172a]">
            <PageHeader
                title="Родители"
                description="Информация за родители, електронни услуги и училищен живот."
            />

            <div className="container mx-auto px-4 md:px-6 py-12 space-y-24">

                {/* E-Diary CTA */}
                <section className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">Електронен Дневник</h2>
                        <p className="text-slate-300 max-w-xl">
                            Следете успеха, отсъствията и развитието на вашето дете в реално време чрез платформата Shkolo.
                        </p>
                    </div>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 whitespace-nowrap" asChild>
                        <a href="https://app.shkolo.bg/" target="_blank">
                            <BookOpen className="mr-2 h-5 w-5" /> Вход в Shkolo
                        </a>
                    </Button>
                </section>

                {/* Canteen Menu */}
                <section id="menyu" className="scroll-mt-32">
                    <h2 className="text-3xl font-serif font-bold text-white mb-8 flex items-center">
                        <Utensils className="mr-4 text-secondary" /> Меню - Училищен стол
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Седмично меню</h3>
                            <p className="text-sm text-slate-400 mb-6">Период: 12.02.2024 - 16.02.2024</p>

                            {/* Placeholder Menu Items */}
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white font-medium">Понеделник</span>
                                    <span className="text-slate-400">Пилешка супа, Мусака, Плод</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white font-medium">Вторник</span>
                                    <span className="text-slate-400">Таратор, Боб яхния, Еклер</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white font-medium">Сряда</span>
                                    <span className="text-slate-400">Леща, Кюфтета с доматен сос, Мляко с ориз</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white font-medium">Четвъртък</span>
                                    <span className="text-slate-400">Супа топчета, Пиле с ориз, Крем карамел</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-white font-medium">Петък</span>
                                    <span className="text-slate-400">Рибена чорба, Постно зеле, Плодова салата</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                            <FileText className="w-16 h-16 text-slate-600 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Изтегли меню</h3>
                            <p className="text-slate-400 mb-6">Можете да изтеглите менюто за цялата седмица в PDF формат.</p>
                            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                                Свали PDF
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Useful Info */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-white mb-8">Полезна информация</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "График на ваканциите", url: "#" },
                            { title: "Заповеди на директора", url: "#" },
                            { title: "Безопасност в интернет", url: "#" },
                            { title: "Психологическа подкрепа", url: "#" },
                        ].map((item, i) => (
                            <a key={i} href={item.url} className="block bg-[#1e293b] hover:bg-[#2d3b4e] border border-white/5 rounded-xl p-6 transition-colors group">
                                <h3 className="font-bold text-white mb-2 flex justify-between items-center">
                                    {item.title}
                                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
