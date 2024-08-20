import Section from "@/components/Section";
import { about } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About J.L.",
};

export default function About() {
    return (
        <Section
            className="pt-[5rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="about"
        >
            <div className="relative w-full mb-[4rem] md:mb-20 lg:mb:[6.25rem]">
                <div className="flex flex-wrap items-center">
                    <p
                        className={`body-1 pt-[1rem] md:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem] text-left px-[1.75rem] md:px-[4rem] lg:px-[6.5rem] xl:px-[8.5rem]
                        `}
                    >
                        {about}
                    </p>
                </div>
            </div>
        </Section>
    );
}
