import { createClient } from "@/lib/supabase/server";
import { NewsForm } from "@/components/admin/NewsForm";
import { notFound } from "next/navigation";

export default async function EditNewsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const supabase = await createClient();

    const { data: news } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();

    if (!news) {
        notFound();
    }

    return (
        <NewsForm
            initialData={{
                id: news.id,
                title: news.title,
                excerpt: news.excerpt ?? "",
                content: news.content ?? "",
                image_url: news.image_url,
                published: news.published,
            }}
        />
    );
}
