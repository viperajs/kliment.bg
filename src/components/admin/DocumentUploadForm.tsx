"use client";

import { useState } from "react";
import { createDocument } from "@/actions/documents";
import { toast } from "sonner";
import { Upload } from "lucide-react";

export function DocumentUploadForm({
    categories,
}: {
    categories: Record<string, string>;
}) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);

        const result = await createDocument(formData);

        if (result?.error) {
            toast.error(result.error);
            setLoading(false);
        }
    }

    return (
        <form action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Заглавие *
                    </label>
                    <input
                        name="title"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        placeholder="Наименование на документа"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Категория *
                    </label>
                    <select
                        name="category"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    >
                        {Object.entries(categories).map(([value, label]) => (
                            <option key={value} value={value} className="bg-slate-800">
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* File Upload */}
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Файл *
                </label>
                <input
                    type="file"
                    name="file"
                    required
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500/10 file:text-blue-400 hover:file:bg-blue-500/20 file:cursor-pointer transition-all"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 cursor-pointer"
            >
                <Upload className="w-4 h-4" />
                {loading ? "Качване..." : "Качи документ"}
            </button>
        </form>
    );
}
