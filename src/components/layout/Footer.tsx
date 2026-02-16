import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] text-white pt-24 pb-8 font-sans border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:w-1/3">
                        <Link href="/" className="flex items-center space-x-3 mb-8">
                            <div className="relative h-16 w-16">
                                <Image
                                    src="/logo.png"
                                    alt="СУ Св. Климент Охридски Лого"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-2xl leading-none">СУ Св. Климент</span>
                                <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Охридски</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            Създаване на възможно най-добри условия за развитие на личността и потенциала на всеки един ученик.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors text-white hover:text-secondary">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors text-white hover:text-secondary">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg">За училището</h3>
                            <ul className="space-y-3 text-slate-400">
                                <li><Link href="/za-nas#misiya" className="hover:text-secondary transition-colors">Мисия</Link></li>
                                <li><Link href="/za-nas#istoriya" className="hover:text-secondary transition-colors">История</Link></li>
                                <li><Link href="/za-nas#ekip" className="hover:text-secondary transition-colors">Екип</Link></li>
                                <li><Link href="/za-nas#uchenicheski-savet" className="hover:text-secondary transition-colors">Ученически съвет</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg">За учениците</h3>
                            <ul className="space-y-3 text-slate-400">
                                <li><Link href="/uchenitsi#stipendii" className="hover:text-secondary transition-colors">Стипендии</Link></li>
                                <li><Link href="/uchenitsi#razpisanie" className="hover:text-secondary transition-colors">Седмично разписание</Link></li>
                                <li><Link href="/priem" className="hover:text-secondary transition-colors">Прием</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg">За родителите</h3>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="https://app.shkolo.bg/" target="_blank" className="hover:text-secondary transition-colors">Електронен дневник</a></li>
                                <li><Link href="/roditeli#menyu" className="hover:text-secondary transition-colors">Меню (столова)</Link></li>
                                <li><Link href="/roditeli" className="hover:text-secondary transition-colors">Полезна информация</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg">Контакти</h3>
                            <ul className="space-y-4 text-slate-400">
                                <li className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-3 text-secondary shrink-0 mt-0.5" />
                                    <span>ул. "Димчо Дебелянов" 4<br />гр. Пещера, 4550</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="h-5 w-5 mr-3 text-secondary shrink-0" />
                                    <a href="tel:035063641" className="hover:text-white transition-colors">0350 6 36 41</a>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3 text-secondary shrink-0" />
                                    <a href="mailto:info-1302630@edu.mon.bg" className="hover:text-white transition-colors text-sm break-all">info-1302630@edu.mon.bg</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Useful Links Row */}
                <div className="border-t border-white/5 py-8">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Полезни връзки</h4>
                    <div className="flex flex-wrap gap-4">
                        <a href="http://www.mon.bg" target="_blank" className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors text-sm">
                            <span className="mr-2">🏛️</span> МОН
                        </a>
                        <a href="http://www.sacp.government.bg" target="_blank" className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors text-sm">
                            <span className="mr-2">🛡️</span> Закрила на детето
                        </a>
                        <a href="http://start.e-edu.bg/" target="_blank" className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors text-sm">
                            <span className="mr-2">🎓</span> Образователен портал
                        </a>
                        <a href="https://ruo-pazardzhik.bg/" target="_blank" className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors text-sm">
                            <span className="mr-2">📍</span> РУО Пазарджик
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                    <p>&copy; {currentYear} СУ "Св. Климент Охридски" - гр. Пещера. Всички права запазени.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Поверителност</Link>
                        <Link href="#" className="hover:text-white transition-colors">Бисквитки</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
