import { createClient } from "@/lib/supabase/server";
import { SettingsForm } from "@/components/admin/SettingsForm";

const settingsFields = [
    { key: "school_name", label: "Име на училището" },
    { key: "school_phone", label: "Телефон" },
    { key: "school_email", label: "Имейл" },
    { key: "school_address", label: "Адрес" },
];

export default async function AdminSettingsPage() {
    const supabase = await createClient();

    const { data: settings } = await supabase
        .from("settings")
        .select("key, value");

    const settingsMap: Record<string, string> = {};
    settings?.forEach((s) => {
        settingsMap[s.key] = s.value;
    });

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Настройки</h1>
                <p className="text-slate-400 text-sm mt-1">
                    Общи настройки на сайта
                </p>
            </div>

            <SettingsForm fields={settingsFields} values={settingsMap} />
        </div>
    );
}
