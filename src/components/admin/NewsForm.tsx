"use client";

import { useState } from "react";
import { createNews, updateNews } from "@/actions/news";
import { toast } from "sonner";
import { ImagePlus, Save, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NewsFormProps {
    initialData?: {
        id: string;
        title: string;
        excerpt: string;
        content: string;
        image_url: string | null;
        published: boolean;
    };
}

export function NewsForm({ initialData }: NewsFormProps) {
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(
        initialData?.image_url ?? null
    );
    const isEditing = !!initialData;

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    }

    async function handleSubmit(formData: FormData) {
        setLoading(true);

        if (initialData?.image_url) {
            formData.set("existingImageUrl", initialData.image_url);
        }

        const result = isEditing
            ? await updateNews(initialData.id, formData)
            : await createNews(formData);

        if (result?.error) {
            toast.error(result.error);
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/news"
                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        {isEditing ? "Редактиране" : "Нова новина"}
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        {isEditing
                            ? "Променете данните и запазете"
                            : "Попълнете информацията за новината"}
                    </p>
                </div>
            </div>

            <form action={handleSubmit} className="space-y-6 max-w-3xl">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Заглавие *
                    </label>
                    <input
                        name="title"
                        type="text"
                        required
                        defaultValue={initialData?.title}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        placeholder="Заглавие на новината"
                    />
                </div>

                {/* Excerpt */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Кратко описание
                    </label>
                    <textarea
                        name="excerpt"
                        rows={2}
                        defaultValue={initialData?.excerpt}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                        placeholder="Кратко описание за листинга..."
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Съдържание
                    </label>
                    <textarea
                        name="content"
                        rows={12}
                        defaultValue={initialData?.content}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-y font-mono text-sm"
                        placeholder="Пълно съдържание на новината..."
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Изображение
                    </label>
                    <div className="flex items-start gap-4">
                        {previewUrl && (
                            <div className="w-32 h-24 rounded-xl overflow-hidden bg-slate-800 shrink-0">
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <label className="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-white/10 rounded-xl hover:border-white/20 transition-colors cursor-pointer bg-white/[0.02]">
                            <ImagePlus className="w-8 h-8 text-slate-500 mb-2" />
                            <span className="text-sm text-slate-400">
                                Натиснете за качване
                            </span>
                            <span className="text-xs text-slate-600 mt-1">
                                JPG, PNG до 5MB
                            </span>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                {/* Published toggle */}
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/[0.06]">
                    <input
                        type="checkbox"
                        name="published"
                        id="published"
                        defaultChecked={initialData?.published ?? false}
                        className="w-4 h-4 rounded accent-blue-500"
                    />
                    <label
                        htmlFor="published"
                        className="text-sm text-slate-300 flex items-center gap-2 cursor-pointer"
                    >
                        <Eye className="w-4 h-4 text-emerald-400" />
                        Публикувай веднага
                    </label>
                </div>

                {/* Submit */}
                <div className="flex items-center gap-3 pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 cursor-pointer"
                    >
                        <Save className="w-4 h-4" />
                        {loading
                            ? "Запазване..."
                            : isEditing
                            ? "Запази промените"
                            : "Създай новина"}
                    </button>
                    <Link
                        href="/admin/news"
                        className="px-6 py-3 text-slate-400 hover:text-white text-sm transition-colors"
                    >
                        Отказ
                    </Link>
                </div>
            </form>
        </div>
    );
}
