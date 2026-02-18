import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Pencil, Crown, GraduationCap, Wrench } from "lucide-react";
import { DeleteTeacherButton } from "@/components/admin/DeleteTeacherButton";

const categoryLabels: Record<string, string> = {
    management: "Ръководство",
    teachers: "Учители",
    support: "Обслужващ персонал",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    management: Crown,
    teachers: GraduationCap,
    support: Wrench,
};

const categoryColors: Record<string, string> = {
    management: "bg-amber-500/10 text-amber-400",
    teachers: "bg-blue-500/10 text-blue-400",
    support: "bg-emerald-500/10 text-emerald-400",
};

export default async function AdminTeachersPage() {
    const supabase = await createClient();

    const { data: teachers } = await supabase
        .from("teachers")
        .select("*")
        .order("category")
        .order("name");

    return (
        <div>
            <div className="flex items-center justify-between mb-6 md:mb-8 gap-4">
                <div className="min-w-0">
                    <h1 className="text-xl md:text-2xl font-bold text-white">Учители и персонал</h1>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                        Управление на екипа на училището
                    </p>
                </div>
                <Link
                    href="/admin/teachers/new"
                    className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all text-xs md:text-sm shadow-lg shadow-blue-500/20 shrink-0"
                >
                    <Plus className="w-4 h-4" />
                    <span className="hidden sm:inline">Добави член</span>
                    <span className="sm:hidden">Добави</span>
                </Link>
            </div>

            {teachers && teachers.length > 0 ? (
                <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl divide-y divide-white/[0.04]">
                    {teachers.map((teacher) => {
                        const Icon = categoryIcons[teacher.category] ?? GraduationCap;
                        return (
                            <div
                                key={teacher.id}
                                className="flex items-center gap-3 md:gap-4 p-3 md:p-5 hover:bg-white/[0.02] transition-colors"
                            >
                                {/* Avatar / Image */}
                                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-800 flex items-center justify-center">
                                    {teacher.image_url ? (
                                        <img
                                            src={teacher.image_url}
                                            alt={teacher.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-sm">
                                            {teacher.name
                                                .split(" ")
                                                .map((p: string) => p[0])
                                                .slice(0, 2)
                                                .join("")}
                                        </span>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-medium truncate">
                                        {teacher.name}
                                    </p>
                                    <p className="text-slate-500 text-xs mt-0.5 truncate">
                                        {teacher.role}
                                    </p>
                                    {teacher.email && (
                                        <p className="text-slate-600 text-xs mt-0.5 truncate">
                                            {teacher.email}
                                        </p>
                                    )}
                                </div>

                                <span
                                    className={`hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full shrink-0 ${categoryColors[teacher.category] ?? "bg-slate-500/10 text-slate-400"}`}
                                >
                                    <Icon className="w-3 h-3" />
                                    {categoryLabels[teacher.category] ?? teacher.category}
                                </span>

                                <div className="flex items-center gap-1 shrink-0">
                                    <Link
                                        href={`/admin/teachers/${teacher.id}`}
                                        className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Pencil className="w-4 h-4" />
                                    </Link>
                                    <DeleteTeacherButton
                                        id={teacher.id}
                                        name={teacher.name}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-[#1e293b]/60 border border-white/[0.06] rounded-2xl p-16 text-center">
                    <p className="text-slate-500 text-sm mb-4">
                        Няма добавени членове на екипа.
                    </p>
                    <Link
                        href="/admin/teachers/new"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-xl text-sm transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        Добави първия член
                    </Link>
                </div>
            )}
        </div>
    );
}
