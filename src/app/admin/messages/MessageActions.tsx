"use client";

import { updateMessageStatus } from "@/actions/contact";
import { CheckCheck, Archive, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export function MessageActions({ id, status }: { id: string; status: string }) {
    const handleAction = async (newStatus: string) => {
        const result = await updateMessageStatus(id, newStatus);
        if (result?.error) {
            toast.error(result.error);
        } else {
            toast.success(
                newStatus === "read"
                    ? "Маркирано като прочетено"
                    : newStatus === "archived"
                    ? "Архивирано"
                    : "Възстановено"
            );
        }
    };

    return (
        <div className="flex items-center gap-1 shrink-0">
            {status === "new" && (
                <button
                    onClick={() => handleAction("read")}
                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-green-400 transition-colors cursor-pointer"
                    title="Маркирай като прочетено"
                >
                    <CheckCheck className="w-4 h-4" />
                </button>
            )}
            {status !== "archived" && (
                <button
                    onClick={() => handleAction("archived")}
                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                    title="Архивирай"
                >
                    <Archive className="w-4 h-4" />
                </button>
            )}
            {status === "archived" && (
                <button
                    onClick={() => handleAction("new")}
                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                    title="Възстанови"
                >
                    <RotateCcw className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}
