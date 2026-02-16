import { createClient } from "@/lib/supabase/server";
import { Newspaper, Eye, EyeOff, Clock } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
    const supabase = await createClient();

    const { count: totalNews } = await supabase
        .from("news")
        .select("*", { count: "exact", head: true });

    const { count: publishedNews } = await supabase
        .from("news")
        .select("*", { count: "exact", head: true })
        .eq("published", true);

    const { data: recentNews } = await supabase
        .from("news")
        .select("id, title, published, created_at")
        .order("created_at", { ascending: false })
        .limit(5);

    const stats = [
        {
            label: "Общо новини",
            value: totalNews ?? 0,
            icon: Newspaper,
            color: "from-blue-500 to-indigo-600",
        },
        {
            label: "Публикувани",
            value: publishedNews ?? 0,
            icon: Eye,
            color: "from-emerald-500 to-teal-600",
        },
        {
            label: "Чернови",
            value: (totalNews ?? 0) - (publishedNews ?? 0),
            icon: EyeOff,
            color: "from-amber-500 to-orange-600",
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Табло</h1>
                <p className="text-slate-400 text-sm mt-1">
                    Преглед на сайта
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl p-5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                            >
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm text-slate-400">
                                {stat.label}
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-white">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Recent News */}
            <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl">
                <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
                    <h2 className="text-lg font-semibold text-white">
                        Последни новини
                    </h2>
                    <Link
                        href="/admin/news"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Виж всички
                    </Link>
                </div>
                {recentNews && recentNews.length > 0 ? (
                    <div className="divide-y divide-white/[0.04]">
                        {recentNews.map((item) => (
                            <Link
                                key={item.id}
                                href={`/admin/news/${item.id}`}
                                className="flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-medium truncate">
                                        {item.title}
                                    </p>
                                    <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                                        <Clock className="w-3 h-3" />
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString("bg-BG")}
                                    </p>
                                </div>
                                <span
                                    className={`text-xs px-2.5 py-1 rounded-full ${
                                        item.published
                                            ? "bg-emerald-500/10 text-emerald-400"
                                            : "bg-amber-500/10 text-amber-400"
                                    }`}
                                >
                                    {item.published
                                        ? "Публикувана"
                                        : "Чернова"}
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="p-10 text-center text-slate-500 text-sm">
                        Няма новини. Добавете първата!
                    </div>
                )}
            </div>
        </div>
    );
}
