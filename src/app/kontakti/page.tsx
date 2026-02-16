"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Контакти"
                description="Свържете се с нас за въпроси и информация."
            />

            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">Информация за връзка</h2>

                        <div className="glass p-8 rounded-2xl space-y-8 border border-white/5">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mr-6 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Адрес</h3>
                                    <p className="text-slate-400">ул. "Димчо Дебелянов" 4,<br />гр. Пещера, 4550</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mr-6 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Телефон</h3>
                                    <p className="text-slate-400">0350 6 36 41</p>
                                    <p className="text-slate-500 text-sm mt-1">Понеделник - Петък: 08:00 - 17:00</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mr-6 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Имейл</h3>
                                    <p className="text-slate-400">info-1302630@edu.mon.bg</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embedding */}
                        <div className="rounded-2xl overflow-hidden h-64 border border-white/10 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.857648398414!2d24.29824247660237!3d42.03080695982857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd04268045619%3A0x6618c54170c49437!2z0KHQoyAi0KHQsi4g0JrQu9C40LzQtdC90YIg0J7RhdGA0LjQtNGB0LrQuCI!5e0!3m2!1sen!2sbg!4v1707920000000!5m2!1sen!2sbg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-10 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6">Изпратете ни съобщение</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Име</label>
                                    <Input id="name" placeholder="Вашето име" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="surname" className="text-sm font-medium text-slate-300">Фамилия</label>
                                    <Input id="surname" placeholder="Вашата фамилия" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Имейл</label>
                                <Input id="email" type="email" placeholder="name@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300">Телефон</label>
                                <Input id="phone" type="tel" placeholder="08XX XXX XXX" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Съобщение</label>
                                <Textarea id="message" placeholder="Вашето съобщение тук..." className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                            </div>

                            <div className="pt-2">
                                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg">
                                    Изпрати запитване <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
