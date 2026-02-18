import { createClient } from "@/lib/supabase/server";
import { FileText, Plus } from "lucide-react";
import { DeleteDocumentButton } from "@/components/admin/DeleteDocumentButton";
import { DocumentUploadForm } from "@/components/admin/DocumentUploadForm";

const categoryLabels: Record<string, string> = {
    strategies: "Стратегии, планове и правилници",
    curricula: "Учебни планове",
    schedules: "Графици и Заповеди",
    budget: "Бюджет и Финансови отчети",
    procurement: "Обществени поръчки",
    privacy: "Защита на личните данни",
};

export default async function AdminDocumentsPage() {
    const supabase = await createClient();

    const { data: documents } = await supabase
        .from("documents")
        .select("*")
        .order("category")
        .order("created_at", { ascending: false });

    return (
        <div>
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-white">Документи</h1>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                        Управление на училищните документи
                    </p>
                </div>
            </div>

            {/* Upload Form */}
            <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Plus className="w-5 h-5 text-blue-400" />
                    Качи нов документ
                </h2>
                <DocumentUploadForm categories={categoryLabels} />
            </div>

            {/* Document List */}
            {documents && documents.length > 0 ? (
                <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl divide-y divide-white/[0.04]">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="flex items-center gap-3 md:gap-4 p-3 md:p-5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5 text-blue-400" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">
                                    {doc.title}
                                </p>
                                <p className="text-slate-500 text-xs mt-0.5">
                                    {categoryLabels[doc.category] ?? doc.category}
                                </p>
                            </div>

                            <a
                                href={doc.file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                            >
                                Преглед
                            </a>

                            <DeleteDocumentButton
                                id={doc.id}
                                title={doc.title}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl p-16 text-center">
                    <p className="text-slate-500 text-sm">
                        Няма качени документи. Използвайте формата по-горе за качване.
                    </p>
                </div>
            )}
        </div>
    );
}
