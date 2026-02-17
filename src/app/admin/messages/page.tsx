import { createClient } from "@/lib/supabase/server";
import { Mail, Clock, User } from "lucide-react";
import { MessageActions } from "./MessageActions";

type Message = {
    id: string;
    created_at: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    message: string;
    status: "new" | "read" | "archived";
};

export default async function MessagesPage() {
    const supabase = await createClient();

    const { data: messages, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white">Съобщения</h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Съобщения от контактната форма
                    </p>
                </div>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 mb-6">
                    Грешка при зареждане на съобщенията: {error.message}
                </div>
            )}

            {!error && (!messages || messages.length === 0) && (
                <div className="bg-slate-800/50 border border-white/10 rounded-xl p-12 text-center">
                    <Mail className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400">Няма съобщения</p>
                </div>
            )}

            {messages && messages.length > 0 && (
                <div className="space-y-4">
                    {(messages as Message[]).map((msg) => (
                        <div
                            key={msg.id}
                            className={`bg-slate-800/50 border rounded-xl p-6 transition-all ${
                                msg.status === "new"
                                    ? "border-blue-500/30 bg-blue-500/5"
                                    : "border-white/10"
                            }`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-slate-400" />
                                            <span className="font-semibold text-white">
                                                {msg.first_name} {msg.last_name}
                                            </span>
                                        </div>
                                        {msg.status === "new" && (
                                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium">
                                                Ново
                                            </span>
                                        )}
                                        {msg.status === "archived" && (
                                            <span className="px-2 py-0.5 bg-slate-500/20 text-slate-400 text-xs rounded-full font-medium">
                                                Архивирано
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                                        <a href={`mailto:${msg.email}`} className="hover:text-blue-400 transition-colors">
                                            {msg.email}
                                        </a>
                                        {msg.phone && (
                                            <span>{msg.phone}</span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {new Date(msg.created_at).toLocaleDateString("bg-BG", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                    </div>

                                    <p className="text-slate-300 whitespace-pre-wrap">
                                        {msg.message}
                                    </p>
                                </div>

                                <MessageActions id={msg.id} status={msg.status} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
