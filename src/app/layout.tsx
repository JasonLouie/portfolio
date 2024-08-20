import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: {
        default: "J.Louie's Website",
        template: "%s | J.Louie",
    },
    description: "Jason Louie's website",
    keywords: [
        "projects",
        "developer",
        "portfolio",
        "software developer",
        "Jason Louie",
    ],
    icons: {
        icon: "/green.ico",
        shortcut: "/green.ico",
        apple: "/green.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <body>
                    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </body>
            </html>
        </>
    );
}
