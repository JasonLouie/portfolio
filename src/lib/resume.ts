import fs from "node:fs";
import path from "node:path";

const RESUME_DIR = path.join(process.cwd(), "content", "resume");

export const RESUME_PATHS = {
    dir: RESUME_DIR,
    markdown: path.join(RESUME_DIR, "resume.md"),
    css: path.join(RESUME_DIR, "resume.css"),
    settingsCss: path.join(RESUME_DIR, "settings.css"),
};

interface ResumeVar {
    shown: string;
    hidden: string;
}

/**
 * Loads content/resume/resume.md and resolves resume.lol's templating syntax:
 * - strips the leading instructions HTML comment(s)
 * - parses `@VAR=value` and `@VAR=value||hiddenValue` definitions
 * - substitutes `{VAR}` placeholders (uses the hidden value when @REDACTED=true)
 * - removes the `@VAR=` definition lines
 *
 * Returns clean markdown with the template's inline HTML left intact, so both
 * react-markdown (web) and md-to-pdf (PDF) can render the same source.
 */
export function loadResumeMarkdown(): string {
    // Normalize CRLF → LF so the line-based @VAR parsing below is reliable on Windows.
    const raw = fs.readFileSync(RESUME_PATHS.markdown, "utf8").replace(/\r\n?/g, "\n");

    // 1. Drop HTML comments (the template's instructions block).
    const withoutComments = raw.replace(/<!--[\s\S]*?-->/g, "");

    // 2. Collect `@VAR=...` definitions; keep everything else as body.
    const vars: Record<string, ResumeVar> = {};
    const bodyLines: string[] = [];
    for (const line of withoutComments.split("\n")) {
        const match = line.match(/^@([A-Za-z_]+)\s*=\s*(.*)$/);
        if (match) {
            const [, key, rawValue] = match;
            const [shown, hidden] = rawValue.split("||");
            vars[key] = {
                shown: (shown ?? "").trim(),
                hidden: (hidden ?? shown ?? "").trim(),
            };
        } else {
            bodyLines.push(line);
        }
    }

    const redacted = (vars.REDACTED?.shown ?? "false").toLowerCase() === "true";

    // 3. Substitute `{VAR}` placeholders (leave unknown ones untouched).
    const body = bodyLines
        .join("\n")
        .replace(/\{([A-Za-z_]+)\}/g, (whole, key: string) => {
            const value = vars[key];
            if (!value) return whole;
            return redacted ? value.hidden : value.shown;
        });

    return body.trim();
}
