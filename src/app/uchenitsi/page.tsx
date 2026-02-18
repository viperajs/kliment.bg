"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Trophy, CalendarClock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StudentsPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageHeader
                title="Ученици"
                description="Информация за стипендии, разписание и ученически живот."
            />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-16 md:space-y-24">
                {/* Scholarships Section */}
                <section id="stipendii" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8 flex items-center">
                        <Trophy className="mr-3 md:mr-4 text-secondary" /> Стипендии
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                        <div className="bg-card border border-border rounded-2xl p-5 md:p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Видове стипендии</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0"></span>
                                    <span>За постигнати резултати (Отличен успех 5.50 - 6.00)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0"></span>
                                    <span>За подпомагане на достъпа до образование</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0"></span>
                                    <span>За ученици без родители</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-5 md:p-8 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-foreground mb-4">Срокове и Документи</h3>
                            <p className="text-muted-foreground mb-6">
                                Документите за стипендии се подават в началото на всеки учебен срок. Следете новините за актуални заповеди и срокове.
                            </p>
                            <Button variant="outline" className="border-border hover:bg-muted text-foreground w-full justify-between items-center group">
                                Изтегли Заявление <Download className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Schedule Section */}
                <section id="razpisanie" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8 flex items-center">
                        <CalendarClock className="mr-3 md:mr-4 text-secondary" /> Седмично Разписание
                    </h2>

                    <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-10 text-center backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Актуална програма</h3>
                        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                            Седмичното разписание се актуализира динамично. За най-точна информация, включително промени и замествания, моля използвайте електронния дневник.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                                <a href="https://app.shkolo.bg/" target="_blank">Вход в Е-Дневник</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-indigo-500/30 hover:bg-indigo-500/10 text-foreground">
                                Изтегли PDF (I срок)
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
