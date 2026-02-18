import { PageHeader } from "@/components/layout/PageHeader";
import { Metadata } from "next";
import { Calendar, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const supabase = await createClient();

    const { data: news } = await supabase
        .from("news")
        .select("title, excerpt")
        .eq("slug", id)
        .eq("published", true)
        .single();

    return {
        title: news
            ? `${news.title} | СУ "Св. Климент Охридски"`
            : "Новина | СУ \"Св. Климент Охридски\"",
        description: news?.excerpt ?? "Детайли за новината.",
    };
}

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const supabase = await createClient();

    const { data: news } = await supabase
        .from("news")
        .select("*")
        .eq("slug", id)
        .eq("published", true)
        .single();

    if (!news) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Новина"
                description="Актуална информация"
            />
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/novini"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Към всички новини
                    </Link>

                    {news.image_url && (
                        <div className="mb-8 relative h-96 w-full rounded-2xl overflow-hidden glass">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${news.image_url}')`,
                                }}
                            />
                        </div>
                    )}

                    <div className="flex items-center text-secondary mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-bold">
                            {new Date(news.created_at).toLocaleDateString(
                                "bg-BG",
                                {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 leading-tight">
                        {news.title}
                    </h1>

                    {news.content && (
                        <div className="prose prose-lg dark:prose-invert text-foreground/80 whitespace-pre-wrap">
                            {news.content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
