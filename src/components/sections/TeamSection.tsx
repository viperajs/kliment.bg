"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Crown,
    GraduationCap,
    Wrench,
    ChevronDown,
    Sparkles,
} from "lucide-react";
import {
    teamMembers,
    categoryLabels,
    type TeamCategory,
    type TeamMember,
} from "@/lib/team";

// ─── Config ───

const categoryConfig: Record<
    TeamCategory,
    {
        icon: React.ComponentType<{ className?: string }>;
        gradient: string;
        glow: string;
        badge: string;
        accent: string;
        ring: string;
        avatarGradient: string;
    }
> = {
    management: {
        icon: Crown,
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        glow: "group-hover:shadow-amber-500/10",
        badge: "bg-amber-500/15 text-amber-300 ring-amber-500/20",
        accent: "text-amber-400",
        ring: "ring-amber-500/30",
        avatarGradient: "from-amber-400 to-orange-500",
    },
    teachers: {
        icon: GraduationCap,
        gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
        glow: "group-hover:shadow-blue-500/10",
        badge: "bg-blue-500/15 text-blue-300 ring-blue-500/20",
        accent: "text-blue-400",
        ring: "ring-blue-500/30",
        avatarGradient: "from-blue-400 to-indigo-500",
    },
    support: {
        icon: Wrench,
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
        glow: "group-hover:shadow-emerald-500/10",
        badge: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/20",
        accent: "text-emerald-400",
        ring: "ring-emerald-500/30",
        avatarGradient: "from-emerald-400 to-teal-500",
    },
};

function getInitials(name: string) {
    const parts = name.split(" ");
    if (parts.length >= 2) return parts[0][0] + parts[parts.length - 1][0];
    return parts[0][0];
}

// ─── Expanded Card (selected member) ───

function ExpandedCard({
    member,
    onClose,
}: {
    member: TeamMember;
    onClose: () => void;
}) {
    const config = categoryConfig[member.category];

    return (
        <motion.div
            layoutId={`card-${member.email}`}
            className={`col-span-full bg-[#1e293b]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden cursor-pointer shadow-2xl shadow-black/30`}
            onClick={onClose}
        >
            <div className={`bg-gradient-to-r ${config.gradient} p-6 md:p-8`}>
                <div className="flex items-center gap-5">
                    <motion.div
                        layoutId={`avatar-${member.email}`}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${config.avatarGradient} flex items-center justify-center text-white font-bold text-2xl shadow-xl`}
                    >
                        {getInitials(member.name)}
                    </motion.div>
                    <div className="flex-1">
                        <motion.h3
                            layoutId={`name-${member.email}`}
                            className="text-xl md:text-2xl font-bold text-white mb-1"
                        >
                            {member.name}
                        </motion.h3>
                        <motion.span
                            layoutId={`role-${member.email}`}
                            className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full ring-1 ${config.badge}`}
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            {member.role}
                        </motion.span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-5 pt-5 border-t border-white/10"
                >
                    <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-slate-300 hover:text-white transition-all border border-white/5 hover:border-white/15"
                    >
                        <Mail className={`w-4 h-4 ${config.accent}`} />
                        {member.email}
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}

// ─── Compact Card ───

function CompactCard({
    member,
    index,
    onSelect,
}: {
    member: TeamMember;
    index: number;
    onSelect: () => void;
}) {
    const config = categoryConfig[member.category];

    return (
        <motion.div
            layoutId={`card-${member.email}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
                duration: 0.35,
                delay: index * 0.025,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onClick={onSelect}
            className={`group relative bg-[#1e293b]/60 backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/15 hover:shadow-xl ${config.glow} hover:bg-[#1e293b]/90`}
        >
            {/* Top accent line */}
            <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${config.avatarGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <div className="p-5">
                <div className="flex items-center gap-3.5">
                    <motion.div
                        layoutId={`avatar-${member.email}`}
                        className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${config.avatarGradient} flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                        {getInitials(member.name)}
                    </motion.div>

                    <div className="min-w-0 flex-1">
                        <motion.h3
                            layoutId={`name-${member.email}`}
                            className="text-white font-semibold text-sm leading-tight truncate group-hover:text-white/95"
                        >
                            {member.name}
                        </motion.h3>
                        <motion.span
                            layoutId={`role-${member.email}`}
                            className={`inline-block text-[11px] font-medium mt-1 px-2 py-0.5 rounded-full ring-1 ${config.badge}`}
                        >
                            {member.role}
                        </motion.span>
                    </div>
                </div>

                {/* Email row - slides up on hover */}
                <div className="mt-3 pt-3 border-t border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                    <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-1.5 text-slate-500 group-hover:text-slate-300 text-xs transition-colors`}
                    >
                        <Mail
                            className={`w-3.5 h-3.5 shrink-0 ${config.accent} opacity-50 group-hover:opacity-100 transition-opacity`}
                        />
                        <span className="truncate">{member.email}</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Category Accordion ───

function CategoryAccordion({
    category,
    members,
}: {
    category: TeamCategory;
    members: TeamMember[];
}) {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
    const config = categoryConfig[category];
    const Icon = config.icon;

    return (
        <div>
            {/* Accordion Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 py-4 group cursor-pointer"
            >
                <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.avatarGradient} flex items-center justify-center shadow-lg`}
                >
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-white">
                        {categoryLabels[category]}
                    </h3>
                    <p className="text-xs text-slate-500">
                        {members.length}{" "}
                        {members.length === 1 ? "член" : "члена"}
                    </p>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </motion.div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 pb-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {members.map((member, i) =>
                                    selectedEmail === member.email ? (
                                        <ExpandedCard
                                            key={`expanded-${member.email}`}
                                            member={member}
                                            onClose={() =>
                                                setSelectedEmail(null)
                                            }
                                        />
                                    ) : (
                                        <CompactCard
                                            key={member.email}
                                            member={member}
                                            index={i}
                                            onSelect={() =>
                                                setSelectedEmail(member.email)
                                            }
                                        />
                                    )
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Main Section ───

export function TeamSection() {
    const grouped: Record<TeamCategory, TeamMember[]> = {
        management: teamMembers.filter((m) => m.category === "management"),
        teachers: teamMembers.filter((m) => m.category === "teachers"),
        support: teamMembers.filter((m) => m.category === "support"),
    };

    return (
        <div className="space-y-2">
            {/* Stats bar */}
            <div className="flex flex-wrap items-center gap-4 mb-6 px-1">
                {(
                    Object.entries(grouped) as [TeamCategory, TeamMember[]][]
                ).map(([cat, members]) => {
                    const config = categoryConfig[cat];
                    const Icon = config.icon;
                    return (
                        <div
                            key={cat}
                            className="flex items-center gap-2 text-sm text-slate-400"
                        >
                            <Icon className={`w-4 h-4 ${config.accent}`} />
                            <span>
                                {categoryLabels[cat]}:{" "}
                                <span className="text-white font-semibold">
                                    {members.length}
                                </span>
                            </span>
                        </div>
                    );
                })}
                <div className="text-sm text-slate-500 ml-auto">
                    Общо:{" "}
                    <span className="text-white font-semibold">
                        {teamMembers.length}
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Accordions */}
            {(Object.entries(grouped) as [TeamCategory, TeamMember[]][]).map(
                ([cat, members]) => (
                    <div key={cat}>
                        <CategoryAccordion category={cat} members={members} />
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                )
            )}
        </div>
    );
}
