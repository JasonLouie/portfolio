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
                <div className="">
                    {experiences.map((item) => {
                        return (
                            <ul
                                key={item.id}
                                className="list-disc list-outside"
                            >
                                <p className="">
                                    <span className="h6">{item.company}</span>
                                    <span className="text-n-4 text-xl">
                                        {" "}
                                        |{" "}
                                    </span>
                                    <span className="italic">
                                        {item.position}
                                    </span>
                                    <span className="text-n-4 text-xl">
                                        {" "}
                                        |{" "}
                                    </span>
                                    <span className="text-sm text-gray-300">
                                        {`(` + item.date + `)`}
                                    </span>
                                </p>
                                {item.responsibilities.map((responsibility) => {
                                    return (
                                        <li
                                            key={responsibility.id}
                                            className="ml-[2.5rem] body-2 list pt-[0.5rem] md:pt-[0.75rem] lg:pt-[1rem] xl:pt-[1.5rem] text-n-1"
                                        >
                                            {responsibility.description}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
