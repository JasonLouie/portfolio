import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { loadResumeMarkdown } from "@/src/lib/resume";

export const metadata: Metadata = {
    title: "Resume — Jason Louie",
    description: "Jason Louie's resume — software engineer.",
};

export default function Resume() {
    const markdown = loadResumeMarkdown();

    return (
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <div className="mb-8 flex items-center justify-between gap-4">
                <p className="font-mono text-sm text-muted">
                    <span className="text-accent">›&nbsp;</span>~/resume
                </p>
                <a
                    href="/files/resume.pdf"
                    download="JasonLouieResume.pdf"
                    className="rounded-md border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
                >
                    download_resume.pdf
                </a>
            </div>

            <div className="resume-content rounded-lg border border-fg/10 bg-surface p-6 md:p-10">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </section>
    );
}
