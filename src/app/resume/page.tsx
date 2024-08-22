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
                className="max-w-full w-[400px] h-[300px] md:w-[800px] md:h-[600px] border border-n-6 border-spacing-2 rounded-lg"
            >
                <div className="blur bg-n-1 h-full">
                    <p className="fixed p-4 z-10 text-black bg-n-3 h-auto">
                        Your web browser doesn't have a PDF plugin. Download the
                        PDF of my resume by clicking the button below.
                    </p>
                </div>
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
