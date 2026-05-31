import fs from "node:fs";
import path from "node:path";
import { mdToPdf } from "md-to-pdf";
import { loadResumeMarkdown, RESUME_PATHS } from "../src/lib/resume";

/**
 * Generates public/files/resume.pdf from content/resume/resume.md, styled with
 * the resume.lol CSS (settings.css + resume.css). Run locally and commit the PDF
 * so the Vercel build stays Chromium-free.
 */
async function main() {
    const content = loadResumeMarkdown();
    const css = [
        // Reset so only the resume.lol CSS governs spacing (match resume.lol exactly).
        "body { margin: 0; padding: 0; }",
        fs.readFileSync(RESUME_PATHS.settingsCss, "utf8"),
        fs.readFileSync(RESUME_PATHS.css, "utf8"),
        // One-page fit: Chromium renders Computer Modern slightly looser than
        // resume.lol; tighten line-height to recover the trailing lines.
        "body { line-height: 1.1; }",
        // resume.css pulls the name up with margin-top:-0.1in (Chromium clips it into
        // the page margin); reset it and add a little breathing room under the name.
        "h1 { margin-top: 0; margin-bottom: 4pt; }",
    ].join("\n");

    const pdf = await mdToPdf(
        { content },
        {
            // Drop md-to-pdf's bundled github-markdown.css (it adds line-height/margins
            // on top of resume.css and pushes the resume onto a second page).
            stylesheet: [],
            css,
            pdf_options: {
                format: "Letter",
                margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
                printBackground: true,
            },
            launch_options: { args: ["--no-sandbox"] },
        }
    );

    if (!pdf || !pdf.content) {
        throw new Error("PDF generation returned no content.");
    }

    const outDir = path.join(process.cwd(), "public", "files");
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, "resume.pdf");
    fs.writeFileSync(outPath, pdf.content);

    console.log(
        `Wrote ${path.relative(process.cwd(), outPath)} (${(pdf.content.length / 1024).toFixed(1)} KB)`
    );
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
