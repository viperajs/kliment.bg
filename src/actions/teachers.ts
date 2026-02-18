"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTeacher(formData: FormData) {
    const supabase = await createClient();

    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const email = formData.get("email") as string;
    const category = formData.get("category") as string;
    const imageFile = formData.get("image") as File | null;

    let image_url: string | null = null;

    if (imageFile && imageFile.size > 0) {
        const ext = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from("team-images")
            .upload(fileName, imageFile);

        if (!uploadError) {
            const { data: urlData } = supabase.storage
                .from("team-images")
                .getPublicUrl(fileName);
            image_url = urlData.publicUrl;
        }
    }

    const { error } = await supabase.from("teachers").insert({
        name,
        role,
        email: email || null,
        category,
        image_url,
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/teachers");
    revalidatePath("/za-nas");
    redirect("/admin/teachers");
}

export async function updateTeacher(id: string, formData: FormData) {
    const supabase = await createClient();

    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const email = formData.get("email") as string;
    const category = formData.get("category") as string;
    const imageFile = formData.get("image") as File | null;
    const existingImageUrl = formData.get("existingImageUrl") as string;

    let image_url = existingImageUrl || null;

    if (imageFile && imageFile.size > 0) {
        const ext = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from("team-images")
            .upload(fileName, imageFile);

        if (!uploadError) {
            const { data: urlData } = supabase.storage
                .from("team-images")
                .getPublicUrl(fileName);
            image_url = urlData.publicUrl;
        }
    }

    const { error } = await supabase
        .from("teachers")
        .update({
            name,
            role,
            email: email || null,
            category,
            image_url,
        })
        .eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/teachers");
    revalidatePath("/za-nas");
    redirect("/admin/teachers");
}

export async function deleteTeacher(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("teachers").delete().eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/admin/teachers");
    revalidatePath("/za-nas");
    redirect("/admin/teachers");
}
