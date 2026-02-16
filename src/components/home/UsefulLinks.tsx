"use client";

const links = [
    {
        name: "МОН",
        url: "http://www.mon.bg",
        subtitle: "Министерство на образованието"
    },
    {
        name: "ДАЗД",
        url: "http://www.sacp.government.bg",
        subtitle: "Закрила на детето"
    },
    {
        name: "Е-Портал",
        url: "http://start.e-edu.bg/",
        subtitle: "Образователен портал"
    },
];

export function UsefulLinks() {
    return (
        <section className="py-20 bg-[#0b1120] border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 rounded-xl bg-[#1e293b]/30 border border-white/5 hover:bg-[#1e293b] hover:border-white/10 transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary font-bold mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                {link.name.substring(0, 1)}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{link.name}</h3>
                                <p className="text-sm text-slate-500">{link.subtitle}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
