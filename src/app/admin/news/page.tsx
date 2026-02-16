import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Clock, Eye, EyeOff, Pencil } from "lucide-react";
import { DeleteNewsButton } from "@/components/admin/DeleteNewsButton";

export default async function AdminNewsPage() {
    const supabase = await createClient();

    const { data: news } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white">Новини</h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Управление на новини и събития
                    </p>
                </div>
                <Link
                    href="/admin/news/new"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all text-sm shadow-lg shadow-blue-500/20"
                >
                    <Plus className="w-4 h-4" />
                    Добави новина
                </Link>
            </div>

            {news && news.length > 0 ? (
                <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl divide-y divide-white/[0.04]">
                    {news.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors"
                        >
                            {/* Thumbnail */}
                            {item.image_url && (
                                <div className="hidden sm:block w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                                    <img
                                        src={item.image_url}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">
                                    {item.title}
                                </p>
                                {item.excerpt && (
                                    <p className="text-slate-500 text-xs mt-1 truncate">
                                        {item.excerpt}
                                    </p>
                                )}
                                <p className="text-slate-600 text-xs flex items-center gap-1 mt-1.5">
                                    <Clock className="w-3 h-3" />
                                    {new Date(
                                        item.created_at
                                    ).toLocaleDateString("bg-BG")}
                                </p>
                            </div>

                            <span
                                className={`hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full shrink-0 ${
                                    item.published
                                        ? "bg-emerald-500/10 text-emerald-400"
                                        : "bg-amber-500/10 text-amber-400"
                                }`}
                            >
                                {item.published ? (
                                    <Eye className="w-3 h-3" />
                                ) : (
                                    <EyeOff className="w-3 h-3" />
                                )}
                                {item.published ? "Публикувана" : "Чернова"}
                            </span>

                            <div className="flex items-center gap-1 shrink-0">
                                <Link
                                    href={`/admin/news/${item.id}`}
                                    className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                                >
                                    <Pencil className="w-4 h-4" />
                                </Link>
                                <DeleteNewsButton
                                    id={item.id}
                                    title={item.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl p-16 text-center">
                    <p className="text-slate-500 text-sm mb-4">
                        Няма добавени новини.
                    </p>
                    <Link
                        href="/admin/news/new"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-xl text-sm transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        Добави първата новина
                    </Link>
                </div>
            )}
        </div>
    );
}
