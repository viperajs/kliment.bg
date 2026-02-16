"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Users, History, Target, Vote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TeamSection } from "@/components/sections/TeamSection";

export default function AboutPage() {
    const sections = [
        { id: "misiya", title: "Мисия и Визия", icon: Target },
        { id: "istoriya", title: "История", icon: History },
        { id: "ekip", title: "Екип", icon: Users },
        { id: "uchenicheski-savet", title: "Ученически съвет", icon: Vote },
    ];

    return (
        <div className="min-h-screen bg-[#0f172a]">
            <PageHeader
                title="За Нас"
                description="Всичко най-важно за СУ 'Св. Климент Охридски' - гр. Пещера на едно място."
            />

            {/* Sticky Sub-nav */}
            <div className="sticky top-16 z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 overflow-x-auto">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-6 py-4 min-w-max">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center space-x-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <section.icon className="w-4 h-4" />
                                <span>{section.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12 space-y-24">

                {/* Mission Section */}
                <section id="misiya" className="scroll-mt-32">
                    <h2 className="text-3xl font-serif font-bold text-white mb-8 flex items-center">
                        <Target className="mr-4 text-secondary" /> Мисия и Визия
                    </h2>
                    <div className="bg-[#1e293b]/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Мисия</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Създаване на възможно най-добри условия за развитие на личността и потенциала на всеки един ученик, така че да се постигне пълноценна трудова и социална интеграция в обществото.
                                </p>
                                <h3 className="text-xl font-bold text-white mb-4">Визия</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Утвърждаване на СУ „Св. Климент Охридски“ като конкурентоспособно училище, способно да формира у учениците национални и общочовешки добродетели при подготовката им за социализация и реализация.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10" />
                                {/* Placeholder for mission image */}
                                <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500">
                                    Mission Image
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section id="istoriya" className="scroll-mt-32">
                    <h2 className="text-3xl font-serif font-bold text-white mb-8 flex items-center">
                        <History className="mr-4 text-secondary" /> История
                    </h2>
                    <div className="space-y-8 relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12">
                        {[
                            { year: "1920", title: "Основаване", text: "Училището отваря врати за първите си ученици." },
                            { year: "1965", title: "Нова сграда", text: "Построена е настоящата сграда на училището." },
                            { year: "2000", title: "Иновации", text: "Въвеждане на компютърно обучение." },
                            { year: "2023", title: "STEM Център", text: "Откриване на модерен STEM център." },
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-[#0f172a] bg-secondary" />
                                <span className="text-secondary font-bold text-sm mb-1 block">{item.year}</span>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section id="ekip" className="scroll-mt-32">
                    <h2 className="text-3xl font-serif font-bold text-white mb-8 flex items-center">
                        <Users className="mr-4 text-secondary" /> Екип
                    </h2>
                    <TeamSection />
                </section>

                {/* School Council Section */}
                <section id="uchenicheski-savet" className="scroll-mt-32">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center">
                        <Vote className="mr-4 text-secondary" /> Ученически съвет
                    </h2>
                    <div className="bg-[#1e293b]/30 p-8 rounded-xl border border-white/5 space-y-4 text-slate-300 leading-relaxed">
                        <p>
                            Ученическият съвет при СУ „Свети Климент Охридски” гр. Пещера е създаден през 2008г. Основната му задача е да събира, обменя и популяризира мненията и идеите на учениците. Участниците в съвета- млади и изобретателни, имат за цел да бъдат полезни на себе си и на училището, а надеждите им са: “ЗАЕДНО да превърнем училището в желана територия на ученика!“ Дали е възможно…?!?! Това е труден въпрос, на който дори и най-големият оптимист би се затруднил да отговори. Ученическият съвет има правото и задължението да действа в такова сътрудничество с училищното настоятелство, ръководството на училището и педагогическия съвет, че да съумее да направи и по-приятно, и по-полезно времето прекарано в СУ „Свети Климент Охридски” гр. Пещера.
                        </p>
                        <p>
                            За годините на своето съществуване Ученическият съвет успя да създаде правила за работата си, да направи план за дейностите си и да създаде свои традиции, към които се придържа и спазва. Успехите в работата му се дължат не само на настоящите му членове. Без подкрепата и разбирането на учителите и ръководството на училището, инициативите на Ученически съвет не биха били толкова обхватни и стойностни, каквито са днес.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
