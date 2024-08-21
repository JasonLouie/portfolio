import Title from "@/components/Title";
import { experiences, bio } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About J.L.",
};

export default function About() {
    return (
        <div className="p-4 relative w-full mb-[4rem] md:mb-20 lg:mb:[6.25rem]">
            <div className="px-[1.25rem] sm:px-[1.75rem] md:px-[4rem] lg:px-[6.5rem] xl:px-[8.5rem]">
                <Title>About Me</Title>
                <p className="body-1 pt-[0.5rem] md:pt-[0.75rem] lg:pt-[1rem] xl:pt-[1.5rem] text-left mb-[2rem]">
                    {bio}
                </p>
                <Title>Work Experience</Title>
                {experiences.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.company + ` | ` + item.position}
                            {item.responsibilities.map((responsibility) => {
                                return (
                                    <p
                                        key={responsibility.id}
                                        className="body-2 pt-[0.5rem] md:pt-[0.75rem] lg:pt-[1rem] xl:pt-[1.5rem] text-left mb-[2rem]"
                                    >
                                        {responsibility.description}
                                    </p>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
