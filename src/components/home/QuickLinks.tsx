import { Target, Users, Calendar, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";

const quickLinks = [
    {
        title: "Мисия",
        description: "Образование за утрешния ден",
        icon: Target,
        href: "/za-nas#misiya",
        color: "text-emerald-500 dark:text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        title: "Екип",
        description: "Нашият екип от професионалисти",
        icon: Users,
        href: "/za-nas#ekip",
        color: "text-blue-500 dark:text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        title: "Разписание",
        description: "Седмично разписание",
        icon: Calendar,
        href: "/uchenitsi#razpisanie",
        color: "text-purple-500 dark:text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        title: "STEM Център",
        description: "Училищен STEM център",
        icon: Microscope,
        href: "/novini",
        color: "text-amber-500 dark:text-amber-400",
        bg: "bg-amber-500/10",
    },
];

export function QuickLinks() {
    return (
        <section className="py-12 md:py-20 bg-background relative z-10 -mt-10 md:-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {quickLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-border"
                        >
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${link.bg} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <link.icon className={`w-5 h-5 md:w-6 md:h-6 ${link.color}`} />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 font-serif">{link.title}</h3>
                            <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-4 leading-relaxed hidden sm:block">{link.description}</p>
                            <div className="flex items-center text-xs md:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                                <span className="hidden sm:inline">Виж повече</span>
                                <ArrowRight className="sm:ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
