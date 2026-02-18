"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ParentsPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageHeader
                title="Родители"
                description="Информация за родители, електронни услуги и училищен живот."
            />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-24">

                {/* E-Diary CTA */}
                <section className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 md:mb-4">Електронен Дневник</h2>
                        <p className="text-foreground/70 max-w-xl">
                            Следете успеха, отсъствията и развитието на вашето дете в реално време чрез платформата Shkolo.
                        </p>
                    </div>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 w-full md:w-auto whitespace-nowrap" asChild>
                        <a href="https://app.shkolo.bg/" target="_blank">
                            <BookOpen className="mr-2 h-5 w-5" /> Вход в Shkolo
                        </a>
                    </Button>
                </section>

                {/* Useful Info */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8">Полезна информация</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {[
                            { title: "График на ваканциите", url: "#" },
                            { title: "Заповеди на директора", url: "#" },
                            { title: "Безопасност в интернет", url: "#" },
                            { title: "Психологическа подкрепа", url: "#" },
                        ].map((item, i) => (
                            <a key={i} href={item.url} className="block bg-card hover:bg-muted border border-border rounded-xl p-4 md:p-6 transition-colors group">
                                <h3 className="font-bold text-foreground mb-2 flex justify-between items-center">
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
