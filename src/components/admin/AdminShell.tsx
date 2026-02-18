"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/actions/auth";
import {
    LayoutDashboard,
    Newspaper,
    Settings,
    LogOut,
    GraduationCap,
    Menu,
    X,
    MessageSquare,
    Users,
    FileText,
} from "lucide-react";
import { useState } from "react";
import { Toaster } from "sonner";

const navItems = [
    { href: "/admin", label: "Табло", icon: LayoutDashboard },
    { href: "/admin/news", label: "Новини", icon: Newspaper },
    { href: "/admin/teachers", label: "Екип", icon: Users },
    { href: "/admin/documents", label: "Документи", icon: FileText },
    { href: "/admin/messages", label: "Съобщения", icon: MessageSquare },
    { href: "/admin/settings", label: "Настройки", icon: Settings },
];

export function AdminShell({
    children,
    userEmail,
}: {
    children: React.ReactNode;
    userEmail: string;
}) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/admin") return pathname === "/admin";
        return pathname.startsWith(href);
    };

    const sidebar = (
        <nav className="flex flex-col h-full">
            {/* Brand */}
            <div className="p-6 border-b border-white/10">
                <Link href="/admin" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Админ панел</p>
                        <p className="text-slate-500 text-[11px]">СУ Кл. Охридски</p>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                active
                                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            {/* User + Logout */}
            <div className="p-4 border-t border-white/10">
                <p className="text-xs text-slate-500 truncate mb-3 px-3">
                    {userEmail}
                </p>
                <form action={logout}>
                    <button
                        type="submit"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all w-full cursor-pointer"
                    >
                        <LogOut className="w-4 h-4" />
                        Изход
                    </button>
                </form>
            </div>
        </nav>
    );

    return (
        <div className="min-h-screen bg-[#0f172a] flex">
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "#1e293b",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#f8fafc",
                    },
                }}
            />

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0 bg-[#0f172a] border-r border-white/10 fixed h-screen">
                {sidebar}
            </aside>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/60" />
                    <aside
                        className="relative w-64 h-full bg-[#0f172a] border-r border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {sidebar}
                    </aside>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 lg:ml-64">
                {/* Top bar (mobile) */}
                <header className="lg:hidden sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-lg hover:bg-white/5 text-slate-400 cursor-pointer"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <span className="text-white font-semibold text-sm">
                        Админ панел
                    </span>
                </header>

                <main className="p-4 md:p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
