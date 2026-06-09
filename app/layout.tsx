'use client';

// import type { Metadata } from 'next';
import './globals.css';
import { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Preloader from '@/components/Preloader';
import Aos from '@/components/Aos';

// export const metadata: Metadata = {
//     title: 'Lorem Ipsum - Website FiveM Template V1',
//     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <html lang="en">
            <head>
                <title>#BALINESE ROLEPLAY</title>
                <meta name="description" content="Komunitas Game Online GTA 5 Roleplay terbesar di Indonesia" />
            </head>
            <body suppressHydrationWarning>
                {loading && <Preloader />}
                {!loading && (
                    <>
                        <Aos />
                        <Navbar />

                        {/* Background bubble efek */}
                        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ffd700]/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
                            <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
                        </div>

                        {children}
                        <BackToTop />
                        <Footer />
                    </>
                )}
            </body>
        </html>
    );
}
