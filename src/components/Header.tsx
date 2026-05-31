"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { navLinks, contacts } from "../constants";
import avatar from "@/src/assets/avatar.png";
import Button from "./Button";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const SOCIAL_ICONS: Record<string, IconType> = {
    GitHub: SiGithub,
    LinkedIn: SiLinkedin,
    Gmail: SiGmail,
};

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
        <header
            className={`sticky top-0 z-20 w-full border-b border-fg/10 transition-colors lg:backdrop-blur-sm ${
                openNavigation ? "bg-bg" : "bg-bg/80"
            }`}
        >
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
                    <span className="font-mono text-sm text-fg sm:text-base">JasonLouie</span>
                </Link>

                {/* Navigation: inline bar on desktop, full-screen terminal panel on mobile */}
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed inset-x-0 top-16 bottom-0 z-10 flex-col overflow-hidden bg-bg lg:static lg:flex lg:h-auto lg:flex-row lg:items-center lg:overflow-visible lg:bg-transparent`}
                >
                    {/* Mobile atmosphere */}
                    <MobileMenu />

                    {/* Links */}
                    <div className="relative z-10 flex flex-1 flex-col justify-center gap-y-2 px-8 lg:flex-none lg:flex-row lg:items-center lg:gap-x-1 lg:px-0 xl:gap-x-3">
                        {navLinks.map((link, i) => {
                            const delay = { animationDelay: `${i * 0.06}s` };

                            // Contact isn't a page — it jumps to the form on the landing page.
                            // Style it as an outlined action button (no prompt, no active state).
                            if (link.name === "Contact") {
                                return (
                                    <Button
                                        key={link.name}
                                        href={link.href}
                                        onClick={handleClick}
                                        style={delay}
                                        className="menu-link w-fit self-start rounded-md border border-accent/50 px-4 py-2 font-mono lowercase tracking-wide text-xl text-accent transition-colors hover:bg-accent/10 lg:self-auto lg:py-1.5 lg:text-nav lg:uppercase"
                                    >
                                        {link.name}
                                    </Button>
                                );
                            }

                            const isActive = isPathActive(link.href);
                            return (
                                <Button
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleClick}
                                    style={delay}
                                    className={`menu-link block font-mono lowercase tracking-wide text-2xl py-2 transition-colors lg:text-nav lg:uppercase lg:px-3 ${
                                        isActive ? "nav-active" : "text-muted hover:text-fg"
                                    }`}
                                >
                                    <span className="text-accent lg:hidden">›&nbsp;</span>
                                    {link.name}
                                </Button>
                            );
                        })}
                    </div>

                    {/* Mobile socials */}
                    <div
                        className="menu-link relative z-10 flex items-center gap-4 px-8 pb-12 lg:hidden"
                        style={{ animationDelay: `${navLinks.length * 0.06}s` }}
                    >
                        {contacts.map((contact) => {
                            const Icon = SOCIAL_ICONS[contact.tip];
                            return (
                                <a
                                    key={contact.id}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={contact.tip}
                                    className="flex h-11 w-11 items-center justify-center rounded-md border border-fg/10 text-muted transition-colors hover:cursor-pointer hover:border-accent/50 hover:text-accent"
                                >
                                    {Icon ? <Icon className="h-5 w-5" /> : contact.tip}
                                </a>
                            );
                        })}
                    </div>
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
