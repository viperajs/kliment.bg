"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Download } from "lucide-react";

const documentCategories = [
    {
        title: "Стратегии, планове и правилници",
        docs: [
            "Стратегия за развитие на училището",
            "Правилник за дейността на училището",
            "Годишен план за дейността",
            "Етичен кодекс",
            "План за квалификационната дейност"
        ]
    },
    {
        title: "Учебни планове",
        docs: [
            "Учебен план I клас",
            "Учебен план V клас",
            "Учебен план VIII клас",
            "Учебен план XI клас"
        ]
    },
    {
        title: "Графици и Заповеди",
        docs: [
            "График на учебното време",
            "График за класни и контролни работи",
            "График за консултации",
            "Заповед - начало на учебната година"
        ]
    },
    {
        title: "Бюджет и Финансови отчети",
        docs: [
            "Бюджет 2024",
            "Отчет за касовото изпълнение - I тримесечие",
            "Отчет за касовото изпълнение - II тримесечие"
        ]
    },
    {
        title: "Обществени поръчки",
        docs: [
            "Вътрешни правила за възлагане на обществени поръчки",
            "Профил на купувача"
        ]
    },
    {
        title: "Защита на личните данни",
        docs: [
            "Политика за защита на личните данни",
            "Вътрешни правила за защита на данните"
        ]
    }
];

export default function DocumentsPage() {
    return (
        <div className="min-h-screen bg-[#0f172a]">
            <PageHeader
                title="Документи"
                description="Всички важни документи, правилници и бланки на едно място."
            />

            <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
                <Accordion type="single" collapsible className="w-full">
                    {documentCategories.map((category, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg hover:text-secondary group">
                                <span className="flex items-center">
                                    <FileText className="mr-3 h-5 w-5 text-slate-500 group-hover:text-secondary transition-colors" />
                                    {category.title}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col space-y-2 mt-2">
                                    {category.docs.map((doc, docIndex) => (
                                        <a
                                            key={docIndex}
                                            href="#"
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group/doc"
                                        >
                                            <span className="text-slate-300 group-hover/doc:text-white transition-colors">{doc}</span>
                                            <Download className="w-4 h-4 text-slate-500 group-hover/doc:text-secondary transition-colors opacity-50 group-hover/doc:opacity-100" />
                                        </a>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
