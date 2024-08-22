import Button from "@/components/Button";
import Title from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "Download or view J.L.'s resume",
};

export default function Resume() {
    return (
        <div className="flex flex-col items-center justify-center p-4 ">
            <Title>My Resume</Title>
            <object
                data={"/files/resume.pdf#toolbar=0"}
                type="application/pdf"
                className="overflow-hidden max-w-full w-[400px] h-[300px] md:w-[800px] md:h-[600px] border-[1px] sm:border-[2px] md:border-[3px] lg:border-[4px] border-n-6 rounded-lg m-[1px]"
            >
                <embed
                    className=""
                    src="https://drive.google.com/file/d/1fJ4HhiLyk5TeYP8mOwxK1VFoRozL7wm6/preview?usp=sharing"
                    width="100%"
                    height="100%"
                />
            </object>
            <Button
                href={"/files/resume.pdf"}
                download="JasonLouieResume.pdf"
                className="mt-4 inline-block py-2 bg-n-5 text-n-1 font-semibold rounded-md hover:bg-n-4 transition-colors duration-300"
                px="px-6"
            >
                Download Resume
            </Button>
        </div>
    );
}
