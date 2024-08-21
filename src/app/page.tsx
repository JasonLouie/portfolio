import Image from "next/image";
import background from "../assets/background.png";
import { Metadata } from "next";

export const metadata: Metadata = {
    description:
        "J.L.'s website portfolio using TailwindCSS, React, and TypeScript",
};

export default function Home() {
    return (
        <div className="relative w-full mb-[4rem] md:mb-20 lg:mb:[6.25rem]">
            <div className="w-full flex flex-wrap items-center">
                <div
                    className="w-[55%] relative pl-[1.25rem] sm:pl-[1.75rem] md:pl-[4rem] lg:pl-[6.5rem] xl:pl-[8.5rem] transform translate-y-[1.25rem] sm:translate-y-[1.75rem] md:translate-y-[2.25rem] lg:translate-y-[3rem] xl:translate-y-[4rem]"
                    id="text"
                >
                    <p className="text-base md:text-lg lg:text-xl mb-[1rem] md:mb-[1.5rem] lg:mb-[2rem]">
                        Hi, my name is
                    </p>
                    <h1 className="h1 mb-6 text-center text-n-8 text-shadow-name1 md:text-shadow-name2 xl:text-shadow-name3">
                        Jason&nbsp;Louie&nbsp;
                    </h1>
                </div>
                <div className="inline-block relative w-[45%]" id="background">
                    <Image
                        src={background}
                        alt="Background"
                        className="image-gradient"
                    ></Image>
                </div>
            </div>
            <div className="">
                <p className="body-1 pt-[1rem] md:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem] text-left px-[1.25rem] sm:px-[1.75rem] md:px-[4rem] lg:px-[6.5rem] xl:px-[8.5rem]">
                    Tech Stack:
                </p>
            </div>
        </div>
    );
}
