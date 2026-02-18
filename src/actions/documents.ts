"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createDocument(formData: FormData) {
    const supabase = await createClient();

    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const file = formData.get("file") as File | null;

    if (!file || file.size === 0) {
        return { error: "Моля, качете файл." };
    }

    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(fileName, file);

    if (uploadError) {
        return { error: "Грешка при качване на файла: " + uploadError.message };
    }

    const { data: urlData } = supabase.storage
        .from("documents")
        .getPublicUrl(fileName);

    const { error } = await supabase.from("documents").insert({
        title,
        category,
        file_url: urlData.publicUrl,
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/documents");
    revalidatePath("/dokumenti");
    redirect("/admin/documents");
}

export async function deleteDocument(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("documents").delete().eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/documents");
    revalidatePath("/dokumenti");
    redirect("/admin/documents");
}
