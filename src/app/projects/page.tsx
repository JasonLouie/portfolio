import { work } from "../../constants";

import { Metadata } from "next";
import Title from "@/components/Title";

export const metadata: Metadata = {
    title: "Projects",
    description: "Showcases J.L.'s various projects.",
};

export default function Projects() {
    return (
        <div className="grid grid-cols-1 gap-1 p-[4rem] md:grid-cols-2">
            {work.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="p-6 bg-n-7 border-4 rounded-lg box-gradient"
                    >
                        <Title>{item.title}</Title>
                        <p className="body-1 mb-[1rem]">{item.description}</p>
                        <p className="text-n-1 mb-[0.75rem]">
                            Languages: {item.languages}
                        </p>
                        <p>{item.date}</p>
                    </div>
                );
            })}
        </div>
    );
}
