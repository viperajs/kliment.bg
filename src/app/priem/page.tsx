"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionPage() {
    return (
        <div className="min-h-screen bg-[#0f172a]">
            <PageHeader
                title="Прием 2025/2026"
                description="Информация за прием на ученици в 1, 5, 8 и 11 клас."
            />

            <div className="container mx-auto px-4 md:px-6 py-12">
                <Tabs defaultValue="1-klas" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#1e293b] p-1 rounded-2xl mb-12 h-auto">
                        <TabsTrigger value="1-klas" className="rounded-xl py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white">1-ви Клас</TabsTrigger>
                        <TabsTrigger value="5-klas" className="rounded-xl py-3 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">5-ти Клас</TabsTrigger>
                        <TabsTrigger value="8-klas" className="rounded-xl py-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white">8-ми Клас</TabsTrigger>
                        <TabsTrigger value="11-klas" className="rounded-xl py-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white">11-ти Клас</TabsTrigger>
                    </TabsList>

                    {/* 1st Grade Content */}
                    <TabsContent value="1-klas" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white">Прием в Първи Клас</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Скъпи родители, изборът на училище за вашето дете е едно от най-важните решения. Ние предлагаме грижовна и стимулираща среда за най-малките.
                                </p>
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                                    <h4 className="font-bold text-blue-400 mb-2 flex items-center"><Calendar className="w-4 h-4 mr-2" /> Важни Срокове</h4>
                                    <ul className="text-sm text-slate-300 space-y-2">
                                        <li>Подаване на документи: <strong>23.05 - 23.06</strong></li>
                                        <li>Обявяване на списъците: <strong>26.06</strong></li>
                                        <li>Записване: <strong>27.06 - 30.06</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center"><FileText className="mr-2 text-secondary" /> Необходими документи</h3>
                                <ul className="space-y-4">
                                    {["Заявление за участие в класиране", "Копие от удостоверение за раждане", "Удостоверение за завършена ПГ", "Лична карта на родител (за справка)"].map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">Изтегли Заявление</Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 5th Grade Content */}
                    <TabsContent value="5-klas" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white">Прием в Пети Клас</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Продължете образованието си в среда, която насърчава академичните постижения и личностното развитие.
                                </p>
                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6">
                                    <h4 className="font-bold text-indigo-400 mb-2 flex items-center"><Info className="w-4 h-4 mr-2" /> Критерии за прием</h4>
                                    <p className="text-sm text-slate-300">
                                        Приемът се извършва въз основа на резултатите от НВО в 4 клас и успеха от удостоверението за завършен начален етап.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center"><FileText className="mr-2 text-secondary" /> Необходими документи</h3>
                                <ul className="space-y-4">
                                    {["Заявление по образец", "Удостоверение за завършен 4 клас", "Служебна бележка с резултати от НВО"].map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700">Изтегли Заявление</Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 8th Grade Content */}
                    <TabsContent value="8-klas" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white">Прием в Осми Клас</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Изберете профилирано обучение, което ще ви подготви за успешен старт в живота. Ние предлагаме профил "Софтуерни и хардуерни науки".
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-[#1e293b] p-4 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors">
                                        <h4 className="font-bold text-white mb-2">Профилиращи предмети</h4>
                                        <ul className="text-sm text-slate-400 list-disc list-inside">
                                            <li>Информатика</li>
                                            <li>Информационни технологии</li>
                                            <li>Английски език</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#1e293b] p-4 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors">
                                        <h4 className="font-bold text-white mb-2">Балообразуване</h4>
                                        <ul className="text-sm text-slate-400 list-disc list-inside">
                                            <li>2 x НВО БЕЛ</li>
                                            <li>2 x НВО Математика</li>
                                            <li>Оценки от свидетелството</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center"><FileText className="mr-2 text-secondary" /> Кандидатстване</h3>
                                <p className="text-slate-400 mb-6 text-sm">
                                    Кандидатстването се извършва онлайн чрез платформата infopriem.mon.bg или на място в училището (училище гнездо).
                                </p>
                                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                                    <a href="https://infopriem.mon.bg" target="_blank">Към ИнфоПрием</a>
                                </Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 11th Grade Content */}
                    <TabsContent value="11-klas" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">Прием в Единадесети Клас</h2>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
                                <p className="text-slate-300 text-lg mb-6">
                                    В момента училището разполага със свободни места за прием в 11 клас за учебната 2024/2025 година.
                                </p>
                                <p className="text-slate-400 mb-6">
                                    За повече информация относно наличните профили и свободни места, моля свържете се с нас или посетете канцеларията на училището.
                                </p>
                                <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10" asChild>
                                    <a href="/kontakti">Свържете се с нас</a>
                                </Button>
                            </div>
                        </div>
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    );
}
