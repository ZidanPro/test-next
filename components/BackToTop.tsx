'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;

            setScrollPercent(scrolled);
            setVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollPercent / 100) * circumference;

    const strokeColor = "text-primary";

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full text-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 ${visible ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Back to top"
        >
            <span className="text-xl font-bold">↑</span>
            <svg className={`absolute w-full h-full rotate-[-90deg] ${strokeColor}`} viewBox="0 0 60 60">
                <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="3"
                />
                <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
        </button>
    );
}