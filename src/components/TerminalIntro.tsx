"use client";
import { useEffect, useState } from "react";

type Line =
    | { kind: "cmd"; text: string }
    | { kind: "out"; text: string; className?: string };

const SCRIPT: Line[] = [
    { kind: "cmd", text: "whoami" },
    { kind: "out", text: "Jason Louie", className: "py-1 text-2xl font-bold leading-tight text-accent md:text-3xl" },
    { kind: "cmd", text: "cat role.txt" },
    { kind: "out", text: "Software Engineer" },
    { kind: "out", text: "Georgia Tech · M.S. Computer Science", className: "text-muted" },
    { kind: "cmd", text: "ls ~/skills" },
    { kind: "out", text: "react  node.js  typescript  next.js  python" },
    { kind: "cmd", text: "./contact --now" },
];

const TYPE_MS = 45;
const ENTER_MS = 320;
const OUT_MS = 220;

function Cursor() {
    return (
        <span className="cursor-blink ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.15em] bg-accent align-baseline" />
    );
}

function CommandLine({ text, cursor }: { text: string; cursor?: boolean }) {
    return (
        <div className="break-words whitespace-pre-wrap">
            <span className="text-accent">$</span> <span className="text-fg">{text}</span>
            {cursor && <Cursor />}
        </div>
    );
}

export default function TerminalIntro() {
    const [done, setDone] = useState(0);
    const [typed, setTyped] = useState("");
    const [reduced, setReduced] = useState(false);

    // Respect reduced-motion: reveal everything at once.
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setReduced(true);
            setDone(SCRIPT.length);
        }
    }, []);

    useEffect(() => {
        if (reduced || done >= SCRIPT.length) return;
        const line = SCRIPT[done];

        // Output lines appear after a short pause (no per-char typing).
        if (line.kind === "out") {
            const t = setTimeout(() => setDone((d) => d + 1), OUT_MS);
            return () => clearTimeout(t);
        }

        // Command lines type out one character at a time.
        if (typed.length < line.text.length) {
            const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), TYPE_MS);
            return () => clearTimeout(t);
        }

        const t = setTimeout(() => {
            setDone((d) => d + 1);
            setTyped("");
        }, ENTER_MS);
        return () => clearTimeout(t);
    }, [done, typed, reduced]);

    const finished = done >= SCRIPT.length;
    const current = SCRIPT[done];

    return (
        <div className="w-full overflow-hidden rounded-lg border border-fg/10 bg-surface shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-fg/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-fg/20" />
                <span className="h-3 w-3 rounded-full bg-fg/20" />
                <span className="h-3 w-3 rounded-full bg-accent/70" />
                <span className="ml-3 font-mono text-xs text-muted">jason@portfolio: ~</span>
            </div>

            {/* Body */}
            <div className="min-h-72 space-y-1 p-5 font-mono text-sm md:min-h-80 md:p-6 md:text-base">
                {SCRIPT.slice(0, done).map((line, i) =>
                    line.kind === "cmd" ? (
                        <CommandLine key={i} text={line.text} />
                    ) : (
                        <div key={i} className={`break-words whitespace-pre-wrap ${line.className ?? "text-fg"}`}>
                            {line.text}
                        </div>
                    )
                )}

                {!finished && current?.kind === "cmd" && <CommandLine text={typed} cursor />}

                {finished && (
                    <div>
                        <span className="text-accent">$</span> <Cursor />
                    </div>
                )}
            </div>
        </div>
    );
}
