"use client";

import { Target, History, Users, Vote, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Target,
    History,
    Users,
    Vote,
};

export function SmoothScrollNav({
    sections,
}: {
    sections: { id: string; title: string; icon: string }[];
}) {
    return (
        <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 md:space-x-6 py-3 md:py-4 min-w-max">
                    {sections.map((section) => {
                        const Icon = iconMap[section.icon];
                        return (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById(section.id)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {Icon && <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                                <span>{section.title}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
