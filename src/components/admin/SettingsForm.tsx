"use client";

import { useState } from "react";
import { updateSettings } from "@/actions/settings";
import { toast } from "sonner";
import { Save } from "lucide-react";

interface SettingsFormProps {
    fields: { key: string; label: string }[];
    values: Record<string, string>;
}

export function SettingsForm({ fields, values }: SettingsFormProps) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        const result = await updateSettings(formData);
        if (result?.success) {
            toast.success("Настройките са запазени");
        }
        setLoading(false);
    }

    return (
        <form action={handleSubmit} className="max-w-xl space-y-5">
            {fields.map((field) => (
                <div key={field.key}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        {field.label}
                    </label>
                    <input
                        name={field.key}
                        type="text"
                        defaultValue={values[field.key] ?? ""}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    />
                </div>
            ))}

            <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 cursor-pointer mt-6"
            >
                <Save className="w-4 h-4" />
                {loading ? "Запазване..." : "Запази настройките"}
            </button>
        </form>
    );
}
