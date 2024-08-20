import Section from "@/components/Section";
import { work } from "../../constants";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Showcases J.L.'s various projects.",
};

export default function Projects() {
    return (
        <Section
            className="pt-[5rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="projects"
        >
            <div className="grid grid-cols-2 gap-1 p-[4rem]">
                {work.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="p-6 bg-n-7 border-4 rounded-lg box-gradient"
                        >
                            <h2 className="h2 mb-[0.5rem]">{item.title}</h2>
                            <hr className="border-none w-[55%] h-[0.25rem] bg-n-5 mb-[1.25rem]" />
                            <p className="body-1 mb-[1rem]">
                                {item.description}
                            </p>
                            <p className="text-n-1 mb-[0.75rem]">
                                Languages: {item.languages}
                            </p>
                            <p>{item.date}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
