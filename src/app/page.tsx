import Image from "next/image";
import background from "../assets/background.png";
import { Metadata } from "next";

export const metadata: Metadata = {
    description:
        "J.L.'s website portfolio using TailwindCSS, React, and TypeScript",
};

export default function Home() {
    const languages = [
        {
            id: "0",
            name: "Python",
            file: "python.png",
            style: "relative w-[36px] md:w-[48px] h-[36px] md:h-[48px] m-[2px]",
        },
        {
            id: "1",
            name: "C++",
            file: "cplusplus.png",
            style: "relative w-[36px] md:w-[48px] h-[36px] md:h-[48px] m-[2px]",
        },
        {
            id: "2",
            name: "C#",
            file: "csharp.png",
            style: "relative w-[36px] md:w-[48px] h-[36px] md:h-[48px] m-[2px]",
        },
        {
            id: "3",
            name: "HTML",
            file: "html-dark.png",
            style: "relative w-[36px] md:w-[52px] h-[36px] md:h-[52px] mx-[-3px]",
        },
        {
            id: "4",
            name: "CSS",
            file: "css-dark.png",
            style: "relative w-[38px] md:w-[57px] h-[38px] md:h-[57px] mx-[-1px] md:m-[-4px]",
        },
        {
            id: "5",
            name: "Javascript",
            file: "javascript-dark.png",
            style: "relative w-[38px] md:w-[58px] h-[38px] md:h-[58px] m-[-4px] md:m-[-5px]",
        },
        {
            id: "6",
            name: "Typescript",
            file: "typescript.png",
            style: "relative w-[44px] md:w-[60px] h-[44px] md:h-[60px] m-[-2px] md:m-[-4px]",
        },
        {
            id: "7",
            name: "MySQL",
            file: "mysql.png",
            style: "relative w-[36px] md:w-[48px] h-[36px] md:h-[48px] m-[2px]",
        },
        {
            id: "8",
            name: "PHP",
            file: "php.png",
            style: "relative w-[39px] md:w-[64px] h-[39px] md:h-[64px] m-[2px]",
        },
        {
            id: "9",
            name: "Swift",
            file: "swift.png",
            style: "relative w-[36px] md:w-[48px] h-[36px] md:h-[48px] m-[2px]",
        },
        {
            id: "10",
            name: "Java",
            file: "java.png",
            style: "relative w-[48px] md:w-[64px] h-[48px] md:h-[64px]",
        },
    ];

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
                    <h1 className="h1 mb-6 text-center text-n-8 text-shadow-sm md:text-shadow-md xl:text-shadow-name-lg">
                        Jason&nbsp;Louie&nbsp;
                    </h1>
                </div>
                <div className="inline-block relative w-[45%]" id="background">
                    <Image
                        src={background}
                        alt="Background"
                        className="image-gradient"
                    />
                </div>
            </div>

            <div className="body-1 pt-[1rem] md:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem] text-left px-[1.25rem] sm:px-[1.75rem] md:px-[4rem] lg:px-[6.5rem] xl:px-[8.5rem]">
                Tech Stack:
                <div className="flex flex-row flex-wrap items-center pt-[1rem] md:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem]">
                    {languages.map((lang) => (
                        <div key={lang.id} className={lang.style}>
                            <Image
                                src={`/images/languages/${lang.file}`}
                                alt={`Icon of ${lang.name}`}
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="(max-width: 768px) 50vw, 
                           (max-width: 1024px) 25vw, 
                           10vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
