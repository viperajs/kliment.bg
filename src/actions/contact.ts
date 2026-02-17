"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const contactSchema = z.object({
    first_name: z.string().min(1, "Името е задължително"),
    last_name: z.string().min(1, "Фамилията е задължителна"),
    email: z.string().email("Невалиден имейл адрес"),
    phone: z.string().optional(),
    message: z.string().min(1, "Съобщението е задължително"),
});

export async function submitContactForm(data: {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    message: string;
}) {
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.issues[0].message };
    }

    const supabase = await createClient();

    const { error } = await supabase.from("messages").insert({
        first_name: parsed.data.first_name,
        last_name: parsed.data.last_name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        message: parsed.data.message,
    });

    if (error) {
        return { error: "Възникна грешка. Моля, опитайте отново." };
    }

    return { success: true };
}

export async function updateMessageStatus(id: string, status: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("messages")
        .update({ status })
        .eq("id", id);

    if (error) {
        return { error: "Грешка при обновяване на статуса." };
    }

    revalidatePath("/admin/messages");
    return { success: true };
}
