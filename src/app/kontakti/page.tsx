"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/actions/contact";
import { useState } from "react";
import { Toaster, toast } from "sonner";

type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const result = await submitContactForm(data);

        if (result.error) {
            toast.error(result.error);
            return;
        }

        toast.success("Съобщението беше изпратено успешно!");
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-background min-h-screen">
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                    },
                }}
            />
            <PageHeader
                title="Контакти"
                description="Свържете се с нас за въпроси и информация."
            />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6">Информация за връзка</h2>

                        <div className="glass p-5 md:p-8 rounded-2xl space-y-6 md:space-y-8">
                            <div className="flex items-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mr-4 md:mr-6 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-lg mb-1">Адрес</h3>
                                    <p className="text-muted-foreground">ул. &quot;Димчо Дебелянов&quot; 4,<br />гр. Пещера, 4550</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mr-4 md:mr-6 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-lg mb-1">Телефон</h3>
                                    <p className="text-muted-foreground">0350 6 36 41</p>
                                    <p className="text-muted-foreground text-sm mt-1">Понеделник - Петък: 08:00 - 17:00</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mr-4 md:mr-6 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-lg mb-1">Имейл</h3>
                                    <p className="text-muted-foreground">info-1302630@edu.mon.bg</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="rounded-2xl overflow-hidden h-64 border border-border shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?q=СУ+Св.+Климент+Охридски+Пещера+ул.+Димчо+Дебелянов&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                    <div className="glass-card p-5 md:p-10 rounded-2xl">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Изпратете ни съобщение</h2>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <CheckCircle className="w-16 h-16 text-accent mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-2">Благодарим Ви!</h3>
                                <p className="text-muted-foreground">Вашето съобщение беше изпратено успешно. Ще се свържем с Вас скоро.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="first_name" className="text-sm font-medium text-foreground/80">Име</label>
                                        <Input
                                            id="first_name"
                                            placeholder="Вашето име"
                                            className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                                            {...register("first_name", { required: "Името е задължително" })}
                                        />
                                        {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last_name" className="text-sm font-medium text-foreground/80">Фамилия</label>
                                        <Input
                                            id="last_name"
                                            placeholder="Вашата фамилия"
                                            className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                                            {...register("last_name", { required: "Фамилията е задължителна" })}
                                        />
                                        {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Имейл</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                                        {...register("email", {
                                            required: "Имейлът е задължителен",
                                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Невалиден имейл" },
                                        })}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Телефон</label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="08XX XXX XXX"
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                                        {...register("phone")}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">Съобщение</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Вашето съобщение тук..."
                                        className="min-h-[120px] bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                                        {...register("message", { required: "Съобщението е задължително" })}
                                    />
                                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-lg"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Изпращане...
                                            </>
                                        ) : (
                                            <>
                                                Изпрати запитване <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
