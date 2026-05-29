import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jetbrains_mono = JetBrains_Mono({
    weight: ["400", "600", "700"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains",
});

const sora = Sora({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sora",
});

export const metadata: Metadata = {
    title: "J.L. Portfolio",
    description: "Jason Louie's portfolio showcasing experiences and projects",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className={`${sora.variable} ${jetbrains_mono.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
