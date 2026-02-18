"use client";

import { useState } from "react";
import { createTeacher, updateTeacher } from "@/actions/teachers";
import { toast } from "sonner";
import { ImagePlus, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface TeacherFormProps {
    initialData?: {
        id: string;
        name: string;
        role: string;
        email: string | null;
        category: string;
        image_url: string | null;
    };
}

const categories = [
    { value: "management", label: "Ръководство" },
    { value: "teachers", label: "Учители" },
    { value: "support", label: "Обслужващ персонал" },
];

export function TeacherForm({ initialData }: TeacherFormProps) {
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
            ? await updateTeacher(initialData.id, formData)
            : await createTeacher(formData);

        if (result?.error) {
            toast.error(result.error);
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/teachers"
                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        {isEditing ? "Редактиране" : "Нов член на екипа"}
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        {isEditing
                            ? "Променете данните и запазете"
                            : "Попълнете информацията за новия член"}
                    </p>
                </div>
            </div>

            <form action={handleSubmit} className="space-y-6 max-w-3xl">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Име *
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        defaultValue={initialData?.name}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        placeholder="Пълно име"
                    />
                </div>

                {/* Role */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Длъжност *
                    </label>
                    <input
                        name="role"
                        type="text"
                        required
                        defaultValue={initialData?.role}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        placeholder="Длъжност / предмет"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Имейл
                    </label>
                    <input
                        name="email"
                        type="email"
                        defaultValue={initialData?.email ?? ""}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        placeholder="email@edu.mon.bg"
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
                        defaultValue={initialData?.category ?? "teachers"}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    >
                        {categories.map((cat) => (
                            <option key={cat.value} value={cat.value} className="bg-slate-800">
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Снимка
                    </label>
                    <div className="flex items-start gap-4">
                        {previewUrl && (
                            <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-800 shrink-0">
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
                            : "Добави член"}
                    </button>
                    <Link
                        href="/admin/teachers"
                        className="px-6 py-3 text-slate-400 hover:text-white text-sm transition-colors"
                    >
                        Отказ
                    </Link>
                </div>
            </form>
        </div>
    );
}
