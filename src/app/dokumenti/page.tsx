import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Download } from "lucide-react";

const categoryOrder = [
    { key: "strategies", label: "Стратегии, планове и правилници" },
    { key: "curricula", label: "Учебни планове" },
    { key: "schedules", label: "Графици и Заповеди" },
    { key: "budget", label: "Бюджет и Финансови отчети" },
    { key: "procurement", label: "Обществени поръчки" },
    { key: "privacy", label: "Защита на личните данни" },
];

export default async function DocumentsPage() {
    const supabase = await createClient();

    const { data: documents } = await supabase
        .from("documents")
        .select("*")
        .order("created_at", { ascending: false });

    const grouped: Record<string, { id: string; title: string; file_url: string }[]> = {};
    for (const doc of documents ?? []) {
        if (!grouped[doc.category]) {
            grouped[doc.category] = [];
        }
        grouped[doc.category].push(doc);
    }

    const categoriesWithDocs = categoryOrder.filter((cat) => grouped[cat.key]?.length > 0);

    return (
        <div className="min-h-screen bg-background">
            <PageHeader
                title="Документи"
                description="Всички важни документи, правилници и бланки на едно място."
            />

            <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
                {categoriesWithDocs.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                        {categoriesWithDocs.map((category, index) => (
                            <AccordionItem key={category.key} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg hover:text-secondary group">
                                    <span className="flex items-center">
                                        <FileText className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                                        {category.label}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col space-y-2 mt-2">
                                        {grouped[category.key].map((doc) => (
                                            <a
                                                key={doc.id}
                                                href={doc.file_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group/doc"
                                            >
                                                <span className="text-foreground/80 group-hover/doc:text-foreground transition-colors">
                                                    {doc.title}
                                                </span>
                                                <Download className="w-4 h-4 text-muted-foreground group-hover/doc:text-secondary transition-colors opacity-50 group-hover/doc:opacity-100" />
                                            </a>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <div className="text-center py-16">
                        <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                            Все още няма качени документи.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
