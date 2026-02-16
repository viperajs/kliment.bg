"use client";

import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingDnevnik() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show when scrolling down or at the top, hide when scrolling up (or vice versa depending on preference)
            // The prompt says: "Hide when scrolling up, appear when scrolling down" - wait, usually it's the opposite for headers.
            // Prompt text: "Скрива се при scroll нагоре, появява се при scroll надолу" -> Hides on scroll UP, shows on scroll DOWN.
            // Let's implement exactly as requested.

            if (currentScrollY < 10) {
                setIsVisible(true); // Always show at top
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(true); // Scrolling DOWN -> Show
            } else {
                setIsVisible(false); // Scrolling UP -> Hide
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://app.shkolo.bg/"
                    target="_blank"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4",
                        "bg-[#d97706] text-white rounded-full shadow-2xl shadow-orange-500/30",
                        "border border-white/20 backdrop-blur-sm font-bold tracking-wide",
                        "hover:bg-[#b45309] transition-colors"
                    )}
                >
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    >
                        <BookOpen className="w-6 h-6" />
                    </motion.div>
                    <span className="hidden md:inline">Е-Дневник</span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
