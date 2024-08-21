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
            <embed
                src={"/resume.pdf#toolbar=0"}
                className="max-w-full w-[800px] h-[600px] border border-n-6 border-spacing-2 rounded-lg"
            ></embed>
            <Button
                href={"/resume.pdf"}
                download="JasonLouieResume.pdf"
                className="mt-4 inline-block py-2 bg-n-5 text-n-1 font-semibold rounded-md hover:bg-n-4 transition-colors duration-300"
                px="px-6"
            >
                Download Resume
            </Button>
        </div>
    );
}
