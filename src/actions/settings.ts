"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
    const supabase = await createClient();
    const entries = Array.from(formData.entries());

    for (const [key, value] of entries) {
        await supabase
            .from("settings")
            .upsert({ key, value: value as string }, { onConflict: "key" });
    }

    revalidatePath("/admin/settings");
    return { success: true };
}
