import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export async function News() {
    const supabase = await createClient();

    const { data: news } = await supabase
        .from("news")
        .select("id, slug, title, excerpt, image_url, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(3);

    if (!news || news.length === 0) return null;

    return (
        <section className="py-24 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-4">Актуално</h2>
                        <p className="text-slate-400">Последните новини и събития от живота на училището</p>
                    </div>
                    <Button variant="outline" className="hidden md:inline-flex border-white/20 text-white hover:bg-white/10" asChild>
                        <Link href="/novini">Всички новини</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="group glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
                            <div className="relative h-56 overflow-hidden">
                                {item.image_url ? (
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${item.image_url}')` }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                                        <Calendar className="w-12 h-12" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center border border-white/10">
                                    <Calendar className="w-3 h-3 mr-2 text-secondary" />
                                    {new Date(item.created_at).toLocaleDateString("bg-BG", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow relative">
                                <h3 className="font-serif font-bold text-2xl mb-4 text-white group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                    <Link href={`/novini/${item.slug}`}>{item.title}</Link>
                                </h3>
                                {item.excerpt && (
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {item.excerpt}
                                    </p>
                                )}
                                <div className="pt-6 mt-auto border-t border-white/5">
                                    <Link href={`/novini/${item.slug}`} className="group/link flex items-center text-sm font-bold text-white">
                                        <span className="group-hover/link:text-secondary transition-colors">Прочети повече</span>
                                        <ArrowRight className="ml-2 h-4 w-4 text-secondary transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full border-white/20 text-white" asChild>
                        <Link href="/novini">Виж всички новини</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
