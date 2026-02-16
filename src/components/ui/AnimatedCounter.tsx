"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    direction?: "up" | "down";
    label?: string;
    suffix?: string;
}

export function AnimatedCounter({ value, direction = "up", label, suffix = "" }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0); // Start from 0
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
            }
        });
    }, [springValue]);

    return (
        <div className="flex flex-col items-center">
            <span className="flex items-baseline text-5xl md:text-6xl font-bold font-serif text-white tracking-tight">
                <span ref={ref}>0</span>
                {suffix && <span className="text-3xl ml-1 text-secondary">{suffix}</span>}
            </span>
            {label && <span className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-bold">{label}</span>}
        </div>
    );
}
