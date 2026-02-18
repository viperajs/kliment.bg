"use client";

import { Trash2 } from "lucide-react";
import { deleteTeacher } from "@/actions/teachers";
import { toast } from "sonner";

export function DeleteTeacherButton({
    id,
    name,
}: {
    id: string;
    name: string;
}) {
    async function handleDelete() {
        if (!confirm(`Сигурни ли сте, че искате да изтриете "${name}"?`)) {
            return;
        }

        const result = await deleteTeacher(id);
        if (result?.error) {
            toast.error(result.error);
        }
    }

    return (
        <button
            onClick={handleDelete}
            className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
            title="Изтрий"
        >
            <Trash2 className="w-4 h-4" />
        </button>
    );
}
