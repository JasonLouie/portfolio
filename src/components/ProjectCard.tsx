import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface ProjectProps {
    name: string,
    href: string,
    description: string,
    stack: string[],
    src: StaticImageData
}

export default function ProjectCard({ name, href, stack, src }: ProjectProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface transition-colors hover:border-accent/40">
            <Button href={href} className="block w-full overflow-hidden bg-bg">
                <div className="relative aspect-video w-full">
                    <Image
                        src={src}
                        alt={`${name} preview`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="eager"
                    />
                </div>
            </Button>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-3 font-mono text-base font-semibold text-fg">
                    <span className="text-accent">›&nbsp;</span>{name}
                </h3>
                <div className="mt-auto flex flex-wrap gap-2">
                    {stack.map((s, i) => (
                        <span
                            key={`${name}-${s}-${i}`}
                            className="rounded-md border border-fg/10 bg-fg/5 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
