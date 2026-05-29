"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";
import avatar from "@/src/assets/avatar.png";
import Button from "./Button";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = usePathname();

    // Prevent scrolling if navigation is open
    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
        document.body.style.overflow = openNavigation ? "" : "hidden";
    };

    const handleClick = () => {
        if (!openNavigation) return;

        document.body.style.overflow = "";
        setOpenNavigation(false);
    };

    const isPathActive = (targetPath: string) => {
        if (targetPath === "/") return pathname === "/";

        // Ensure match is /path or /path/, but not /path1.../
        return pathname === targetPath || pathname!.startsWith(`${targetPath}/`);
    };

    return (
        <header className="sticky top-0 z-20 w-full border-b border-fg/10 bg-bg/80 backdrop-blur-sm">
            <div className="flex items-center justify-between px-4 lg:px-7 min-h-16">
                {/* Logo: pfp tile + mono handle */}
                <Link
                    href="/"
                    onClick={handleClick}
                    className="group z-20 flex items-center gap-3"
                    aria-label="Jason Louie — home"
                >
                    <Image
                        src={avatar}
                        alt="Jason Louie"
                        priority
                        className="h-10 w-10 rounded-lg object-cover ring-1 ring-accent/60 transition group-hover:ring-accent"
                    />
                    <span className="font-mono text-sm text-fg sm:text-base">
                        jason<span className="text-accent">.</span>louie
                    </span>
                </Link>

                {/* Navigation */}
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed inset-x-0 top-16 bottom-0 z-10 flex-col items-center justify-center bg-bg lg:static lg:flex lg:h-auto lg:flex-row lg:bg-transparent`}
                >
                    <div className="relative flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-1 xl:gap-x-3">
                        {navLinks.map((link) => {
                            const isActive = isPathActive(link.href);

                            return (
                                <Button
                                    key={link.name}
                                    href={link.href}
                                    className={`block font-mono uppercase tracking-wide text-nav px-3 py-3 transition-colors lg:py-2 ${
                                        isActive ? "nav-active" : "text-muted hover:text-fg"
                                    }`}
                                    onClick={handleClick}
                                >
                                    {link.name}
                                </Button>
                            );
                        })}
                    </div>
                    <MobileMenu />
                </nav>

                {/* Mobile hamburger */}
                <Button
                    className="z-20 h-11 w-11 lg:hidden"
                    onClick={toggleNavigation}
                >
                    <div className={`hamburger-menu ${openNavigation ? "open" : ""}`}></div>
                </Button>
            </div>
        </header>
    );
}
