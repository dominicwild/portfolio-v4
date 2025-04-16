import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {OverlayProvider} from "@/app/_components/OverlayContext";
import {AnimatePresence} from "motion/react";


export const metadata: Metadata = {
    title: "Dominic Portfolio",
};

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body
            className={`${montserrat.className} antialiased`}
        >
        <AnimatePresence>
            <OverlayProvider>
                {children}
            </OverlayProvider>
        </AnimatePresence>
        </body>

        </html>
    );
}
