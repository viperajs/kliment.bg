import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card text-foreground pt-12 md:pt-24 pb-8 font-sans border-t border-border relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 mb-10 md:mb-16">

                    {/* Brand Column */}
                    <div className="lg:w-1/3">
                        <Link href="/" className="flex items-center space-x-3 mb-6 md:mb-8">
                            <div className="relative h-12 w-12 md:h-16 md:w-16">
                                <Image
                                    src="/logo.png"
                                    alt="СУ Св. Климент Охридски Лого"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl md:text-2xl leading-none">СУ Св. Климент</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Охридски</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-sm text-sm md:text-base">
                            Създаване на възможно най-добри условия за развитие на личността и потенциала на всеки един ученик.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors text-foreground hover:text-secondary">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors text-foreground hover:text-secondary">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div>
                            <h3 className="font-bold text-foreground mb-4 md:mb-6 text-base md:text-lg">За училището</h3>
                            <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm">
                                <li><Link href="/za-nas#misiya" className="hover:text-secondary transition-colors">Мисия</Link></li>
                                <li><Link href="/za-nas#istoriya" className="hover:text-secondary transition-colors">История</Link></li>
                                <li><Link href="/za-nas#ekip" className="hover:text-secondary transition-colors">Екип</Link></li>
                                <li><Link href="/za-nas#uchenicheski-savet" className="hover:text-secondary transition-colors">Ученически съвет</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-foreground mb-4 md:mb-6 text-base md:text-lg">За учениците</h3>
                            <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm">
                                <li><Link href="/uchenitsi#stipendii" className="hover:text-secondary transition-colors">Стипендии</Link></li>
                                <li><Link href="/uchenitsi#razpisanie" className="hover:text-secondary transition-colors">Седмично разписание</Link></li>
                                <li><Link href="/priem" className="hover:text-secondary transition-colors">Прием</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-foreground mb-4 md:mb-6 text-base md:text-lg">За родителите</h3>
                            <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm">
                                <li><a href="https://app.shkolo.bg/" target="_blank" className="hover:text-secondary transition-colors">Електронен дневник</a></li>
                                <li><Link href="/roditeli" className="hover:text-secondary transition-colors">Полезна информация</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-foreground mb-4 md:mb-6 text-base md:text-lg">Контакти</h3>
                            <ul className="space-y-3 md:space-y-4 text-muted-foreground text-sm">
                                <li className="flex items-start">
                                    <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary shrink-0 mt-0.5" />
                                    <span>ул. &quot;Димчо Дебелянов&quot; 4<br />гр. Пещера, 4550</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary shrink-0" />
                                    <a href="tel:035063641" className="hover:text-foreground transition-colors">0350 6 36 41</a>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary shrink-0" />
                                    <a href="mailto:info-1302630@edu.mon.bg" className="hover:text-foreground transition-colors text-xs md:text-sm break-all">info-1302630@edu.mon.bg</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Useful Links Row */}
                <div className="border-t border-border py-6 md:py-8">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Полезни връзки</h4>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        <a href="http://www.mon.bg" target="_blank" className="flex items-center px-3 md:px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground/70 hover:text-foreground transition-colors text-xs md:text-sm">
                            <span className="mr-2">🏛️</span> МОН
                        </a>
                        <a href="http://www.sacp.government.bg" target="_blank" className="flex items-center px-3 md:px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground/70 hover:text-foreground transition-colors text-xs md:text-sm">
                            <span className="mr-2">🛡️</span> Закрила на детето
                        </a>
                        <a href="http://start.e-edu.bg/" target="_blank" className="flex items-center px-3 md:px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground/70 hover:text-foreground transition-colors text-xs md:text-sm">
                            <span className="mr-2">🎓</span> Образователен портал
                        </a>
                        <a href="https://ruo-pazardzhik.bg/" target="_blank" className="flex items-center px-3 md:px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground/70 hover:text-foreground transition-colors text-xs md:text-sm">
                            <span className="mr-2">📍</span> РУО Пазарджик
                        </a>
                    </div>
                </div>

                <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-muted-foreground">
                    <p className="text-center md:text-left">&copy; {currentYear} СУ &quot;Св. Климент Охридски&quot; - гр. Пещера. Всички права запазени.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Поверителност</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Бисквитки</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
