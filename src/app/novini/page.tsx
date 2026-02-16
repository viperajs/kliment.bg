import { PageHeader } from "@/components/layout/PageHeader";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
    title: "Новини | СУ \"Св. Климент Охридски\"",
    description: "Актуални новини и събития.",
};

export default async function NewsPage() {
    const supabase = await createClient();

    const { data: news } = await supabase
        .from("news")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Новини"
                description="Всичко актуално, което се случва в нашето училище."
            />
            <div className="container mx-auto px-4 md:px-6 py-16">
                {news && news.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <Link
                                key={item.id}
                                href={`/novini/${item.slug}`}
                                className="group glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 block"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    {item.image_url ? (
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url('${item.image_url}')`,
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                                            <Calendar className="w-12 h-12" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center border border-white/10">
                                        <Calendar className="w-3 h-3 mr-2 text-secondary" />
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString("bg-BG", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-serif font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    {item.excerpt && (
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                            {item.excerpt}
                                        </p>
                                    )}
                                    <div className="mt-auto flex items-center text-sm font-bold text-secondary">
                                        Прочети повече{" "}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-lg">Няма публикувани новини все още.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
