import { FileText, Download } from "lucide-react";

interface Document {
    title: string;
    format: string; // "PDF" | "DOCX" | "XLSX"
    date?: string;
    size?: string;
    url?: string;
}

interface DocumentListProps {
    category: string;
    documents: Document[];
}

export function DocumentList({ category, documents }: DocumentListProps) {
    return (
        <div className="bg-[#1e293b]/50 rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-[#1e293b]">
                <h2 className="text-xl font-bold text-white flex items-center">
                    <FileText className="mr-3 text-secondary" />
                    {category}
                </h2>
            </div>
            <div className="divide-y divide-white/5">
                {documents.map((doc, index) => (
                    <div key={index} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                        <div className="flex items-start">
                            <div className="mt-1 mr-3 min-w-[32px] h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-slate-300">
                                {doc.format}
                            </div>
                            <div>
                                <h3 className="text-white font-medium group-hover:text-primary transition-colors">{doc.title}</h3>
                                <div className="flex items-center text-xs text-slate-500 mt-1 space-x-3">
                                    {doc.date && <span>{doc.date}</span>}
                                    {doc.size && <span>{doc.size}</span>}
                                </div>
                            </div>
                        </div>
                        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
