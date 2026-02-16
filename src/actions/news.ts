"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-zа-яё0-9\s-]/gi, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .slice(0, 80);
}

export async function createNews(formData: FormData) {
    const supabase = await createClient();

    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const published = formData.get("published") === "on";
    const imageFile = formData.get("image") as File | null;

    let image_url: string | null = null;

    if (imageFile && imageFile.size > 0) {
        const ext = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from("news-images")
            .upload(fileName, imageFile);

        if (!uploadError) {
            const { data: urlData } = supabase.storage
                .from("news-images")
                .getPublicUrl(fileName);
            image_url = urlData.publicUrl;
        }
    }

    const slug = generateSlug(title) + "-" + Date.now().toString(36);

    const { error } = await supabase.from("news").insert({
        title,
        slug,
        excerpt,
        content,
        image_url,
        published,
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/news");
    revalidatePath("/novini");
    redirect("/admin/news");
}

export async function updateNews(id: string, formData: FormData) {
    const supabase = await createClient();

    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const published = formData.get("published") === "on";
    const imageFile = formData.get("image") as File | null;
    const existingImageUrl = formData.get("existingImageUrl") as string;

    let image_url = existingImageUrl || null;

    if (imageFile && imageFile.size > 0) {
        const ext = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from("news-images")
            .upload(fileName, imageFile);

        if (!uploadError) {
            const { data: urlData } = supabase.storage
                .from("news-images")
                .getPublicUrl(fileName);
            image_url = urlData.publicUrl;
        }
    }

    const { error } = await supabase
        .from("news")
        .update({
            title,
            excerpt,
            content,
            image_url,
            published,
        })
        .eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/news");
    revalidatePath("/novini");
    revalidatePath(`/novini/${id}`);
    redirect("/admin/news");
}

export async function deleteNews(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/news");
    revalidatePath("/novini");
    redirect("/admin/news");
}
