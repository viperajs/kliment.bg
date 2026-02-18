"use client";

import { Trash2 } from "lucide-react";
import { deleteDocument } from "@/actions/documents";
import { toast } from "sonner";

export function DeleteDocumentButton({
    id,
    title,
}: {
    id: string;
    title: string;
}) {
    async function handleDelete() {
        if (!confirm(`Сигурни ли сте, че искате да изтриете "${title}"?`)) {
            return;
        }

        const result = await deleteDocument(id);
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
