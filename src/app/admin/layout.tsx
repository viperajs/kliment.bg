import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata = {
    title: "Администрация | СУ \"Св. Климент Охридски\"",
};

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Login page gets its own minimal layout
    if (!user) {
        return <>{children}</>;
    }

    return <AdminShell userEmail={user.email ?? ""}>{children}</AdminShell>;
}
