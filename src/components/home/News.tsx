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
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
                    <div>
                        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-5xl text-foreground mb-2 md:mb-4">Актуално</h2>
                        <p className="text-muted-foreground text-sm md:text-base">Последните новини и събития от живота на училището</p>
                    </div>
                    <Button variant="outline" className="hidden md:inline-flex border-border text-foreground hover:bg-muted" asChild>
                        <Link href="/novini">Всички новини</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="group glass rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
                            <div className="relative h-40 sm:h-56 overflow-hidden">
                                {item.image_url ? (
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${item.image_url}')` }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                        <Calendar className="w-10 h-10 md:w-12 md:h-12" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-background/50 backdrop-blur-md px-2 md:px-3 py-1 rounded-full text-xs font-bold text-foreground flex items-center border border-border">
                                    <Calendar className="w-3 h-3 mr-1.5 md:mr-2 text-secondary" />
                                    {new Date(item.created_at).toLocaleDateString("bg-BG", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                            <div className="p-5 md:p-8 flex flex-col flex-grow relative">
                                <h3 className="font-serif font-bold text-lg md:text-2xl mb-2 md:mb-4 text-foreground group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                    <Link href={`/novini/${item.slug}`}>{item.title}</Link>
                                </h3>
                                {item.excerpt && (
                                    <p className="text-muted-foreground text-sm mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed flex-grow">
                                        {item.excerpt}
                                    </p>
                                )}
                                <div className="pt-4 md:pt-6 mt-auto border-t border-border">
                                    <Link href={`/novini/${item.slug}`} className="group/link flex items-center text-sm font-bold text-foreground">
                                        <span className="group-hover/link:text-secondary transition-colors">Прочети повече</span>
                                        <ArrowRight className="ml-2 h-4 w-4 text-secondary transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full border-border text-foreground" asChild>
                        <Link href="/novini">Виж всички новини</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
