import Image from "next/image";
import me from "@/src/assets/me.png";
import Section from "../Section";
import Button from "../Button";
import TerminalIntro from "../TerminalIntro";

export default function HeroSection() {
    return (
        <Section
            id="about"
            className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
        >
            {/* Atmosphere */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hero-grid" />
            <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow" />

            <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
                {/* Terminal + actions */}
                <div className="order-last lg:order-first">
                    <TerminalIntro />
                    <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
                        <Button
                            href="/projects"
                            className="rounded-md border border-accent/50 px-4 py-2 text-accent transition-colors hover:bg-accent/10"
                        >
                            view_work
                        </Button>
                        <Button
                            href="/resume"
                            className="rounded-md border border-fg/15 px-4 py-2 text-muted transition-colors hover:border-fg/40 hover:text-fg"
                        >
                            resume
                        </Button>
                        <Button
                            href="/contact"
                            className="rounded-md border border-fg/15 px-4 py-2 text-muted transition-colors hover:border-fg/40 hover:text-fg"
                        >
                            contact
                        </Button>
                    </div>
                </div>

                {/* Photo + status */}
                <div className="order-first mx-auto lg:order-last">
                    <div className="relative w-fit">
                        <Image
                            src={me}
                            alt="Jason Louie"
                            priority
                            className="h-44 w-44 rounded-xl object-cover ring-1 ring-accent/40 md:h-60 md:w-60"
                        />
                        <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-fg/10 bg-surface px-3 py-1 font-mono text-xs text-muted">
                            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
                            available for work
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
