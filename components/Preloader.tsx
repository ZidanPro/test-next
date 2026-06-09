'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500); // waktu loading dalam ms

        return () => clearTimeout(timeout);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
            {/* Background bubble effects */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ffd700]/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
                <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
            </div>

            <div className="flex items-center space-x-2">
                <span className="w-5 h-5 bg-primary rounded-full animate-bounce [animation-delay:0s]"></span>
                <span className="w-5 h-5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-5 h-5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="w-5 h-5 bg-primary rounded-full animate-bounce [animation-delay:0.6s]"></span>
            </div>
        </div>
    );
}
