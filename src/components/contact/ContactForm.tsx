"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        captcha: "",
    });

    const [captchaQuestion] = useState({ q: "3 + 5 = ?", a: "8" }); // Simple static captcha for demo

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.captcha.trim() !== captchaQuestion.a) {
            alert("Грешен отговор на задачата!");
            return;
        }
        // Handle submission (e.g., API call)
        console.log("Form submitted:", formData);
        alert("Благодарим Ви! Вашето съобщение беше изпратено успешно.");
        setFormData({ name: "", email: "", phone: "", message: "", captcha: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-border">
            <h3 className="font-serif font-bold text-2xl text-primary mb-6">Изпратете ни съобщение</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Име и Фамилия</label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Телефон</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="0888 123 456"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Имейл</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Коментар / Запитване</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Вашето съобщение..."
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="captcha" className="text-sm font-medium text-foreground">Въпрос за сигурност: {captchaQuestion.q}</label>
                <input
                    id="captcha"
                    name="captcha"
                    required
                    className="flex h-10 w-full md:w-1/2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Отговор"
                    value={formData.captcha}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" className="w-full md:w-auto min-w-[200px] bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" /> Изпрати
            </Button>
        </form>
    );
}
