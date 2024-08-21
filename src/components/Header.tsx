"use client";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { navigation } from "../constants";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";

export default function Header() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = usePathname();

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <header>
            <div
                className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
                    openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
            >
                <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                    <Link
                        className="block xl:mr-[2rem]"
                        href="/"
                        onClick={handleClick}
                    >
                        <img
                            src="/green.png"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </Link>
                    <nav
                        className={`${
                            openNavigation ? "flex" : "hidden"
                        } fixed top-[4.83rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                    >
                        <div className="relative flex flex-col items-center justify-center m-auto lg:flex-row">
                            {navigation.map((item) => {
                                const isActive = pathname.startsWith(item.url);
                                return (
                                    <Link
                                        href={item.url}
                                        key={item.id}
                                        onClick={handleClick}
                                        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                            item.onlyMobile ? "lg:hidden" : ""
                                        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                            isActive
                                                ? "z-2 lg:text-n-1"
                                                : "lg:text-n-1/50"
                                        } lg:leader-5 lg:hover:text-n-1 xl:px-12`}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                        <MobileMenu />
                    </nav>
                    <Button
                        className="ml-auto lg:hidden"
                        px="px-3"
                        onClick={toggleNavigation}
                    >
                        <MenuSvg openNavigation={openNavigation} />
                    </Button>
                </div>
            </div>
        </header>
    );
}
