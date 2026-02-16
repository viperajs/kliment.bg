"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Menu, X, ChevronDown, Phone, Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Начало", href: "/" },
    {
        name: "За нас",
        href: "#",
        submenu: [
            { name: "Мисия", href: "/za-nas#misiya" },
            { name: "История", href: "/za-nas#istoriya" },
            { name: "Екип", href: "/za-nas#ekip" },
            { name: "Ученически съвет", href: "/za-nas#uchenicheski-savet" },
        ]
    },
    {
        name: "Прием",
        href: "#",
        submenu: [
            { name: "1-ви клас", href: "/priem?tab=1-klas" },
            { name: "5-ти клас", href: "/priem?tab=5-klas" },
            { name: "8-ми клас", href: "/priem?tab=8-klas" },
            { name: "11-ти клас", href: "/priem?tab=11-klas" },
        ]
    },
    {
        name: "Ученици",
        href: "#",
        submenu: [
            { name: "Стипендии", href: "/uchenitsi#stipendii" },
            { name: "Седмично разписание", href: "/uchenitsi#razpisanie" },
        ]
    },
    {
        name: "Родители",
        href: "#",
        submenu: [
            { name: "Електронен дневник", href: "https://app.shkolo.bg/", external: true },
            { name: "Меню (столова)", href: "/roditeli#menyu" },
        ]
    },
    { name: "Новини", href: "/novini" },
    { name: "Документи", href: "/dokumenti" },
    { name: "Контакти", href: "/kontakti" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSubmenu = (name: string) => {
        if (activeSubmenu === name) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(name);
        }
    };

    return (
        <>
            <header className={cn(
                "fixed top-12 left-0 right-0 z-50 transition-all duration-300 font-sans px-4 md:px-6",
                isScrolled ? "py-0 top-0" : "py-2 top-10"
            )}>
                <div className={cn(
                    "mx-auto max-w-7xl rounded-2xl border border-white/10 transition-all duration-300 backdrop-blur-md flex items-center justify-between px-4 py-3 shadow-2xl",
                    isScrolled ? "bg-[#0f172a]/90 rounded-none w-full max-w-full px-6 border-x-0 border-t-0" : "bg-[#1e293b]/80"
                )}>

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative h-12 w-12 group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/logo.png"
                                alt="СУ Св. Климент Охридски Лого"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-white text-base leading-none">СУ Св. Климент</span>
                            <span className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Охридски</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group px-1">
                                {item.submenu ? (
                                    <button
                                        className={cn(
                                            "flex items-center text-sm font-medium transition-all px-3 py-2 rounded-lg hover:bg-white/10",
                                            pathname.startsWith(item.href) && item.href !== '#' ? "text-secondary" : "text-white/80 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                        <ChevronDown className="ml-1 h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center text-sm font-medium transition-all px-3 py-2 rounded-lg hover:bg-white/10",
                                            pathname === item.href ? "text-secondary bg-white/10" : "text-white/80 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Modern Dropdown */}
                                {item.submenu && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50 w-56">
                                        <div className="bg-[#1e293b] rounded-xl shadow-2xl border border-white/10 p-1 overflow-hidden ring-1 ring-black/5">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    target={subItem.external ? "_blank" : undefined}
                                                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA / Mobile Toggle */}
                    <div className="flex items-center space-x-3">
                        <Button size="sm" className="hidden xl:flex bg-secondary hover:bg-secondary/90 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/20" asChild>
                            <Link href="/kontakti">Свържете се с нас</Link>
                        </Button>

                        <button
                            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#0f172a] pt-28 px-4 overflow-y-auto lg:hidden"
                    >
                        <nav className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <div key={item.name} className="border-b border-white/5 pb-2">
                                    <div
                                        className="flex items-center justify-between text-lg font-medium py-3 px-2 text-white/90"
                                        onClick={() => item.submenu ? toggleSubmenu(item.name) : (setMobileMenuOpen(false))}
                                    >
                                        {item.submenu ? (
                                            <span>{item.name}</span>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn(pathname === item.href ? "text-secondary" : "")}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                        {item.submenu && (
                                            <ChevronDown className={cn(
                                                "h-5 w-5 transition-transform text-white/50",
                                                activeSubmenu === item.name ? "rotate-180 text-secondary" : ""
                                            )} />
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {item.submenu && activeSubmenu === item.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-white/5 rounded-lg mt-1"
                                            >
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        target={subItem.external ? "_blank" : undefined}
                                                        className="block px-4 py-3 text-sm text-white/60 hover:text-white"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
