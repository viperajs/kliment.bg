import { Target, Users, Calendar, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
    {
        title: "Мисия",
        description: "Образование за утрешния ден",
        icon: Target,
        href: "/za-nas#misiya",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
    {
        title: "Екип",
        description: "Нашият екип от професионалисти",
        icon: Users,
        href: "/za-nas#ekip",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        title: "Разписание",
        description: "Седмично разписание",
        icon: Calendar,
        href: "/uchenitsi#razpisanie",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
    },
    {
        title: "STEM Център",
        description: "Училищен STEM център",
        icon: Microscope,
        href: "/novini", // Directed to News as per prompt
        color: "text-amber-400",
        bg: "bg-amber-400/10",
    },
];

export function QuickLinks() {
    return (
        <section className="py-20 bg-[#0f172a] relative z-10 -mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="group relative overflow-hidden bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-[#1e293b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 hover:border-white/10"
                        >
                            <div className={`w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <link.icon className={`w-6 h-6 ${link.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-serif">{link.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{link.description}</p>
                            <div className="flex items-center text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                                Виж повече <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
