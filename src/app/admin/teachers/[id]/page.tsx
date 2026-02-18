import { createClient } from "@/lib/supabase/server";
import { TeacherForm } from "@/components/admin/TeacherForm";
import { notFound } from "next/navigation";

export default async function EditTeacherPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // "new" means we're creating a new teacher
    if (id === "new") {
        return <TeacherForm />;
    }

    const supabase = await createClient();

    const { data: teacher } = await supabase
        .from("teachers")
        .select("*")
        .eq("id", id)
        .single();

    if (!teacher) {
        notFound();
    }

    return (
        <TeacherForm
            initialData={{
                id: teacher.id,
                name: teacher.name,
                role: teacher.role,
                email: teacher.email,
                category: teacher.category,
                image_url: teacher.image_url,
            }}
        />
    );
}
